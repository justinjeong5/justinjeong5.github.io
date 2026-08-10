import assert from 'node:assert/strict';
import { access, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import vm from 'node:vm';

import {
  GENERATED_PASSWORD_BYTES,
  PBKDF2_ITERATIONS,
  assertGeneratedPassword,
  buildProtectedHtml,
  decryptPayload,
  encryptHtml,
  generatePassword,
  getProtectedPageManifestKey,
  main,
  prepareSourceHtml,
  updatePrivatePageManifest,
} from './encrypt-private-page.mjs';

const password = Buffer.alloc(GENERATED_PASSWORD_BYTES, 1).toString('base64url');
const source = '<!doctype html><html><head><title>비밀 급여</title></head><body>4,900,000원</body></html>';

test('encryptHtml은 올바른 비밀번호로만 원문을 복원한다', () => {
  const payload = encryptHtml(source, password);

  assert.equal(payload.iterations, PBKDF2_ITERATIONS);
  assert.equal(payload.cipher, 'AES-GCM');
  assert.equal(decryptPayload(payload, password), source);
  assert.throws(() => decryptPayload(payload, 'this password is wrong'));
  assert.throws(() => encryptHtml(source, 'short-password'), /128비트/u);
  assert.throws(() => encryptHtml(source, '', { allowWeakPassword: true }), /비어 있을 수 없습니다/u);
  assert.throws(() => encryptHtml(source, '   ', { allowWeakPassword: true }), /비어 있을 수 없습니다/u);
  assert.throws(() => encryptHtml(source, ' short-password ', { allowWeakPassword: true }), /앞뒤에는 공백/u);

  const explicitlyWeakPayload = encryptHtml(source, 'short-password', { allowWeakPassword: true });
  assert.equal(decryptPayload(explicitlyWeakPayload, 'short-password'), source);
});

test('매 암호화마다 salt와 IV와 암호문이 달라진다', () => {
  const first = encryptHtml(source, password);
  const second = encryptHtml(source, password);

  assert.notEqual(first.salt, second.salt);
  assert.notEqual(first.iv, second.iv);
  assert.notEqual(first.data, second.data);
});

test('prepareSourceHtml은 네트워크 차단과 세션 한정 안내를 삽입한다', () => {
  const prepared = prepareSourceHtml(`${source}\n입력값은 이 브라우저에만 저장되며 서버로 전송되지 않습니다.`);

  assert.match(prepared, /Content-Security-Policy/);
  assert.match(prepared, /connect-src 'none'/);
  assert.match(prepared, /noindex,nofollow,noarchive,nosnippet/);
  assert.match(prepared, /현재 탭에서만 유지/);
  assert.doesNotMatch(prepared, /이 브라우저에만 저장/);
});

test('보호 페이지에는 원문이 없고 sandbox에서 영구 저장 권한을 주지 않는다', () => {
  const protectedHtml = buildProtectedHtml(encryptHtml(source, password));

  assert.doesNotMatch(protectedHtml, /비밀 급여|4,900,000원/);
  assert.match(protectedHtml, /noindex,nofollow,noarchive,nosnippet/);
  assert.match(protectedHtml, /sandbox="allow-scripts allow-modals/);
  assert.doesNotMatch(protectedHtml, /allow-same-origin/);
  assert.match(protectedHtml, /frame\.srcdoc =/u);
  assert.match(protectedHtml, /private-static-page-ready/u);
  assert.match(protectedHtml, /event\.source !== frame\.contentWindow/u);
  assert.match(protectedHtml, /event\.data\?\.parentBlocked !== true/u);
  assert.match(protectedHtml, /frame\.srcdoc = ''/u);
  assert.doesNotMatch(protectedHtml, /URL\.createObjectURL|new Blob/u);
  assert.match(protectedHtml, /비밀번호를 확인해주세요/);
  assert.match(protectedHtml, /Safari 또는 Chrome에서 다시 열어주세요/u);
  assert.match(protectedHtml, /autocapitalize="none" autocorrect="off" spellcheck="false"/u);
  assert.match(protectedHtml, /passwordInput\.value\.trim\(\)/u);

  const script = protectedHtml.match(/<script>\s*([\s\S]+)\s*<\/script>/u)?.[1];
  assert.ok(script);
  assert.doesNotThrow(() => new vm.Script(script));
});

test('generatePassword는 128비트 무작위 비밀번호만 만든다', () => {
  const generated = generatePassword(() => Buffer.alloc(GENERATED_PASSWORD_BYTES, 7));

  assert.equal(generated, Buffer.alloc(GENERATED_PASSWORD_BYTES, 7).toString('base64url'));
  assert.equal(Buffer.from(generated, 'base64url').length, GENERATED_PASSWORD_BYTES);
  assert.doesNotThrow(() => assertGeneratedPassword(generated));
  assert.throws(() => assertGeneratedPassword('x'.repeat(14)), /128비트/);
  assert.throws(() => assertGeneratedPassword('correct horse battery staple'), /128비트/);
});

test('updatePrivatePageManifest는 보호 파일 해시를 기록하고 기존 항목을 보존한다', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'private-page-manifest-'));
  const publicRoot = path.join(root, 'public');
  const manifestPath = path.join(root, 'scripts', 'private-pages.manifest.json');
  try {
    await updatePrivatePageManifest({
      outputPath: path.join(publicRoot, 'shared', '111111111111111111111111', 'index.html'),
      html: 'first protected page',
      publicRoot,
      manifestPath,
    });
    await updatePrivatePageManifest({
      outputPath: path.join(publicRoot, 'shared', '222222222222222222222222', 'index.html'),
      html: 'second protected page',
      publicRoot,
      manifestPath,
    });

    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    assert.equal(manifest.version, 1);
    assert.match(manifest.pages['shared/111111111111111111111111/index.html'], /^sha256-/u);
    assert.match(manifest.pages['shared/222222222222222222222222/index.html'], /^sha256-/u);
    assert.notEqual(
      manifest.pages['shared/111111111111111111111111/index.html'],
      manifest.pages['shared/222222222222222222222222/index.html'],
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('updatePrivatePageManifest는 예측하기 쉬운 보호 경로를 거부한다', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'private-page-path-'));
  try {
    await assert.rejects(
      updatePrivatePageManifest({
        outputPath: path.join(root, 'public', 'shared', 'family-budget', 'index.html'),
        html: 'protected page',
        publicRoot: path.join(root, 'public'),
        manifestPath: path.join(root, 'scripts', 'private-pages.manifest.json'),
      }),
      /24자리 소문자 hex/u,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('main은 입력을 읽거나 파일을 쓰기 전에 잘못된 출력 경로를 거부한다', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'private-page-invalid-output-'));
  const invalidOutput = path.join(root, 'index.html');
  try {
    await assert.rejects(
      main(['--input', '/missing/private-source.html', '--output', invalidOutput]),
      /public\/shared/u,
    );
    await assert.rejects(access(invalidOutput));
    assert.throws(
      () => getProtectedPageManifestKey({ outputPath: invalidOutput }),
      /public\/shared/u,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
