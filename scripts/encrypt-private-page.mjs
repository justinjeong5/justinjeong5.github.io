import { execFileSync } from 'node:child_process';
import {
  createHash,
  createCipheriv,
  createDecipheriv,
  pbkdf2Sync,
  randomBytes,
} from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const PBKDF2_ITERATIONS = 600_000;
export const GENERATED_PASSWORD_BYTES = 16;
export const PROTECTED_PAGE_KEY_PATTERN = /^shared\/([a-f0-9]{24})\/index\.html$/u;

const AAD = Buffer.from('private-static-page:v1');
const projectRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SOURCE_CSP = [
  "default-src 'none'",
  "style-src 'unsafe-inline'",
  "script-src 'unsafe-inline'",
  'img-src data: blob:',
  "connect-src 'none'",
  "font-src 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
].join('; ');

export function generatePassword(random = randomBytes) {
  return random(GENERATED_PASSWORD_BYTES).toString('base64url');
}

export function assertGeneratedPassword(password) {
  if (
    typeof password !== 'string'
    || !/^[A-Za-z0-9_-]{22}$/u.test(password)
    || Buffer.from(password, 'base64url').length !== GENERATED_PASSWORD_BYTES
  ) {
    throw new Error('도구가 생성한 128비트 비밀번호만 사용할 수 있습니다.');
  }
}

function assertPassword(password) {
  if (typeof password !== 'string' || password.trim().length === 0) {
    throw new Error('비밀번호는 비어 있을 수 없습니다.');
  }
  if (password !== password.trim()) {
    throw new Error('비밀번호 앞뒤에는 공백을 사용할 수 없습니다.');
  }
}

export function prepareSourceHtml(source) {
  if (!/<head(?:\s[^>]*)?>/iu.test(source) || !/<\/html>/iu.test(source)) {
    throw new Error('완전한 HTML 문서가 아닙니다.');
  }

  const securityMeta = [
    '<meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />',
    '<meta name="referrer" content="no-referrer" />',
    `<meta http-equiv="Content-Security-Policy" content="${SOURCE_CSP}" />`,
  ].join('\n  ');

  return source
    .replace(/<head(?:\s[^>]*)?>/iu, (head) => `${head}\n  ${securityMeta}`)
    .replace('현재 상태를 비교 기준으로 저장', '현재 상태를 비교 기준으로 설정')
    .replace('현재 상태를 비교 기준으로 저장했습니다.', '현재 상태를 비교 기준으로 설정했습니다.')
    .replace(
      '입력값은 이 브라우저에만 저장되며 서버로 전송되지 않습니다.',
      '입력값은 현재 탭에서만 유지되며 서버로 전송되지 않습니다.',
    );
}

export function encryptHtml(source, password, options = {}) {
  if (options.allowWeakPassword) assertPassword(password);
  else assertGeneratedPassword(password);
  const salt = options.salt ?? randomBytes(16);
  const iv = options.iv ?? randomBytes(12);
  const key = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 32, 'sha256');
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(AAD);
  const ciphertext = Buffer.concat([cipher.update(source, 'utf8'), cipher.final()]);
  const encrypted = Buffer.concat([ciphertext, cipher.getAuthTag()]);

  return {
    version: 1,
    kdf: 'PBKDF2',
    hash: 'SHA-256',
    iterations: PBKDF2_ITERATIONS,
    cipher: 'AES-GCM',
    keyLength: 256,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    data: encrypted.toString('base64'),
  };
}

export function decryptPayload(payload, password) {
  const salt = Buffer.from(payload.salt, 'base64');
  const iv = Buffer.from(payload.iv, 'base64');
  const encrypted = Buffer.from(payload.data, 'base64');
  const authTag = encrypted.subarray(encrypted.length - 16);
  const ciphertext = encrypted.subarray(0, encrypted.length - 16);
  const key = pbkdf2Sync(password, salt, payload.iterations, 32, 'sha256');
  const decipher = createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAAD(AAD);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
}

function safePayloadJson(payload) {
  return JSON.stringify(payload).replaceAll('<', '\\u003c');
}

export function buildProtectedHtml(payload) {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
  <meta name="referrer" content="no-referrer" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; frame-src blob:; img-src data:; connect-src 'none'; font-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'" />
  <title>공유 페이지</title>
  <style>
    :root { color-scheme: light; font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; color: #171a23; background: radial-gradient(circle at 15% 0%, #eeecff, transparent 28rem), #f4f6fb; }
    main { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
    .card { width: min(100%, 420px); padding: 30px; border: 1px solid #e4e7ef; border-radius: 24px; background: rgba(255,255,255,.96); box-shadow: 0 18px 50px rgba(27,31,50,.1); }
    .mark { display: grid; place-items: center; width: 48px; height: 48px; margin-bottom: 20px; border-radius: 15px; color: #4f42ca; background: #eeecff; font-size: 24px; }
    h1 { margin: 0 0 8px; font-size: 26px; letter-spacing: -.04em; }
    p { margin: 0 0 22px; color: #6b7180; font-size: 14px; line-height: 1.6; }
    label { display: block; margin-bottom: 7px; color: #4e5361; font-size: 12px; font-weight: 800; }
    input { width: 100%; height: 48px; padding: 0 14px; border: 1px solid #dfe2e9; border-radius: 12px; background: #f8f9fd; font: inherit; outline: none; }
    input:focus { border-color: #6557e8; box-shadow: 0 0 0 4px rgba(101,87,232,.12); background: #fff; }
    button { width: 100%; height: 48px; margin-top: 12px; border: 0; border-radius: 12px; color: #fff; background: #6557e8; font: inherit; font-weight: 800; cursor: pointer; }
    button:hover { background: #4f42ca; }
    button:disabled { cursor: wait; opacity: .65; }
    .message { min-height: 20px; margin: 10px 0 0; color: #c43d52; font-size: 12px; }
    .privacy { margin: 14px 0 0; font-size: 11px; text-align: center; }
    iframe { position: fixed; inset: 0; width: 100%; height: 100%; border: 0; background: #fff; }
    [hidden] { display: none !important; }
  </style>
</head>
<body>
  <main id="unlockView">
    <section class="card" aria-labelledby="unlockTitle">
      <div class="mark" aria-hidden="true">⌁</div>
      <h1 id="unlockTitle">공유 페이지 열기</h1>
      <p>공유받은 비밀번호를 입력하면 이 기기 안에서 내용을 복호화합니다.</p>
      <form id="unlockForm">
        <label for="password">비밀번호</label>
        <input id="password" type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" required autofocus />
        <button id="unlockButton" type="submit">열기</button>
        <div class="message" id="message" role="alert" aria-live="polite"></div>
      </form>
      <p class="privacy">비밀번호와 복호화된 내용은 서버로 전송되지 않습니다.</p>
    </section>
  </main>
  <iframe id="contentFrame" title="공유 문서" sandbox="allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox allow-downloads" hidden></iframe>
  <script>
    (() => {
      const payload = ${safePayloadJson(payload)};
      const aad = new TextEncoder().encode('private-static-page:v1');
      const form = document.querySelector('#unlockForm');
      const passwordInput = document.querySelector('#password');
      const button = document.querySelector('#unlockButton');
      const message = document.querySelector('#message');
      const frame = document.querySelector('#contentFrame');
      const renderErrorCode = 'CONTENT_RENDER_FAILED';
      const renderTimeoutMs = 8_000;

      const bytes = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));

      async function decrypt(password) {
        const material = await crypto.subtle.importKey(
          'raw',
          new TextEncoder().encode(password),
          'PBKDF2',
          false,
          ['deriveKey'],
        );
        const key = await crypto.subtle.deriveKey(
          { name: 'PBKDF2', hash: payload.hash, salt: bytes(payload.salt), iterations: payload.iterations },
          material,
          { name: 'AES-GCM', length: payload.keyLength },
          false,
          ['decrypt'],
        );
        const plaintext = await crypto.subtle.decrypt(
          { name: payload.cipher, iv: bytes(payload.iv), additionalData: aad },
          key,
          bytes(payload.data),
        );
        return new TextDecoder('utf-8', { fatal: true }).decode(plaintext);
      }

      function renderContent(html) {
        return new Promise((resolve, reject) => {
          if (!('srcdoc' in frame)) {
            reject(new Error(renderErrorCode));
            return;
          }

          const token = Array.from(
            crypto.getRandomValues(new Uint8Array(16)),
            (value) => value.toString(16).padStart(2, '0'),
          ).join('');
          let timeoutId;

          const cleanup = () => {
            clearTimeout(timeoutId);
            removeEventListener('message', handleReady);
          };
          const fail = () => {
            cleanup();
            frame.srcdoc = '';
            reject(new Error(renderErrorCode));
          };
          const handleReady = (event) => {
            if (
              event.source !== frame.contentWindow
              || event.data?.type !== 'private-static-page-ready'
              || event.data?.token !== token
              || event.data?.parentBlocked !== true
            ) {
              return;
            }
            cleanup();
            resolve();
          };

          addEventListener('message', handleReady);
          timeoutId = setTimeout(fail, renderTimeoutMs);
          const readyScript = '<script>(()=>{let parentBlocked=false;try{void parent.document.body}catch{parentBlocked=true}parent.postMessage({type:"private-static-page-ready",token:"'
            + token
            + '",parentBlocked},"*")})()<\\/script>';
          frame.srcdoc = /<\\/body>/iu.test(html)
            ? html.replace(/<\\/body>/iu, readyScript + '</body>')
            : html + readyScript;
        });
      }

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        button.disabled = true;
        button.textContent = '여는 중…';
        message.textContent = '';
        try {
          const html = await decrypt(passwordInput.value.trim());
          await renderContent(html);
          passwordInput.value = '';
          frame.hidden = false;
          document.querySelector('#unlockView').hidden = true;
        } catch (error) {
          passwordInput.select();
          message.textContent = error?.message === renderErrorCode
            ? '이 브라우저에서 내용을 표시하지 못했습니다. Safari 또는 Chrome에서 다시 열어주세요.'
            : '비밀번호를 확인해주세요.';
        } finally {
          button.disabled = false;
          button.textContent = '열기';
        }
      });

    })();
  </script>
</body>
</html>
`;
}

function protectedPageDigest(html) {
  return `sha256-${createHash('sha256').update(html).digest('base64')}`;
}

export function getProtectedPageManifestKey({
  outputPath,
  publicRoot = path.join(projectRoot, 'public'),
}) {
  const relativePath = path.relative(publicRoot, outputPath);
  if (
    path.isAbsolute(relativePath)
    || relativePath.startsWith('..')
    || !relativePath.startsWith(`shared${path.sep}`)
  ) {
    throw new Error('보호 페이지 출력은 public/shared/ 아래여야 합니다.');
  }

  const manifestKey = relativePath.split(path.sep).join('/');
  if (!PROTECTED_PAGE_KEY_PATTERN.test(manifestKey)) {
    throw new Error('보호 페이지 경로는 public/shared/<24자리 소문자 hex>/index.html 형식이어야 합니다.');
  }
  return manifestKey;
}

export async function updatePrivatePageManifest({
  outputPath,
  html,
  publicRoot = path.join(projectRoot, 'public'),
  manifestPath = path.join(projectRoot, 'scripts/private-pages.manifest.json'),
}) {
  const manifestKey = getProtectedPageManifestKey({ outputPath, publicRoot });

  let manifest = { version: 1, pages: {} };
  try {
    manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (manifest.version !== 1 || !manifest.pages || typeof manifest.pages !== 'object') {
    throw new Error('보호 페이지 manifest 형식이 올바르지 않습니다.');
  }

  const nextManifest = {
    version: 1,
    pages: {
      ...manifest.pages,
      [manifestKey]: protectedPageDigest(html),
    },
  };
  await mkdir(path.dirname(manifestPath), { recursive: true });
  await writeFile(manifestPath, `${JSON.stringify(nextManifest, null, 2)}\n`, 'utf8');
  return nextManifest;
}

function parseArgs(args) {
  const values = {};
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index];
    const value = args[index + 1];
    if (!key?.startsWith('--') || value === undefined) {
      throw new Error('사용법: node scripts/encrypt-private-page.mjs --input <HTML> --output <index.html>');
    }
    values[key.slice(2)] = value;
  }
  if (!values.input || !values.output) {
    throw new Error('입력 파일과 출력 파일을 지정해야 합니다.');
  }
  return values;
}

function confirmGeneratedPassword(password) {
  if (process.platform !== 'darwin') {
    throw new Error('이 명령의 보안 입력창은 macOS에서만 지원합니다.');
  }

  const script = `
set generatedPassword to "${password}"
set the clipboard to generatedPassword
display dialog "아래 비밀번호를 안전한 곳에 저장하세요. 클립보드에도 복사했습니다." default answer generatedPassword buttons {"취소", "저장 완료"} default button "저장 완료" cancel button "취소" with title "공유 페이지 비밀번호"
`;

  execFileSync('/usr/bin/osascript', ['-'], {
    encoding: 'utf8',
    input: script,
    stdio: ['pipe', 'pipe', 'pipe'],
  });
}

export async function main(args = process.argv.slice(2)) {
  const { input, output } = parseArgs(args);
  const outputPath = path.resolve(output);
  getProtectedPageManifestKey({ outputPath });
  const source = prepareSourceHtml(await readFile(path.resolve(input), 'utf8'));
  const password = generatePassword();
  confirmGeneratedPassword(password);
  const protectedHtml = buildProtectedHtml(encryptHtml(source, password));
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, protectedHtml, { encoding: 'utf8', mode: 0o644 });
  await updatePrivatePageManifest({ outputPath, html: protectedHtml });
  console.log(`암호화 페이지 생성 완료: ${outputPath}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
