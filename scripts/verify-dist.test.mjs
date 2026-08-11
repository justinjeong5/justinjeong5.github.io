import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { buildProtectedHtml, encryptHtml, generatePassword } from './encrypt-private-page.mjs';
import { verifyDist, MIN_ROUTES } from './verify-dist.mjs';

const OK_HTML = '<!doctype html><html><body><div id="root"><main id="main-content">내용</main></div></body></html>';
const PROTECTED_PAGE_ID = '5535ce5e830e6aec2912501d';
const SECOND_PROTECTED_PAGE_ID = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const PROTECTED_HTML = buildProtectedHtml(encryptHtml(OK_HTML, generatePassword()));
const GOOGLE_AUTH_HTML = `<!doctype html>
<!-- BUILD: google-auth-only-test -->
<html><body>
  <section id="authGate">로그인</section>
  <main id="appShell" hidden>보호된 내용</main>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.2" integrity="sha384-test" crossorigin="anonymous"></script>
  <script>
    const key = "sb_publishable_test";
    const signInWithOAuth = true;
    function unlockApplication() {
      $("#appShell").hidden = false;
    }
    function captureCloudSession() {
      return { generation: authSessionGeneration, userId: authUser.id, fingerprint: connectionFingerprint() };
    }
    function isCloudSessionCurrent(session) {
      return authSessionGeneration === session.generation && isCloudReady();
    }
    async function checkWhitelistAccess() {
      const { data } = await supabaseClient.rpc("is_couple_budget_user_allowed");
      authAccess.allowed = Boolean(data);
      if (!authAccess.allowed) { clearLocalBudgetCache(); deny(); return false; }
      await loadCloudAndUnlock();
    }
    async function loadCloudAndUnlock() {
      if (!isCloudReady()) return false;
      const loadSession = captureCloudSession();
      if (syncMeta.connectionFingerprint !== connectionFingerprint()) clearLocalBudgetCache();
      const remote = await readCloudSnapshot();
      if (!isCloudSessionCurrent(loadSession)) return false;
      if (syncMeta.dirty) {
        const remoteVersion = Number(remote.version || 0);
        const knownVersion = Number(syncMeta.remoteVersion || 0);
        if (remoteVersion !== knownVersion) showSyncConflict(remote);
        else {
          await writeCloudSnapshot();
          if (!isCloudSessionCurrent(loadSession)) return false;
        }
      }
      applyCloudSnapshot(remote);
      unlockApplication();
    }
    async function syncNow() {
      const operationSession = captureCloudSession();
      await readCloudSnapshot();
      if (!isCloudSessionCurrent(operationSession)) return;
      await writeCloudSnapshot();
      if (!isCloudSessionCurrent(operationSession)) return;
    }
    async function forcePullCloud() {
      const operationSession = captureCloudSession();
      await readCloudSnapshot();
      if (!isCloudSessionCurrent(operationSession)) return;
      if (!isCloudSessionCurrent(operationSession)) return;
    }
    async function overwriteCloudFromConflict() {
      const operationSession = captureCloudSession();
      await writeCloudSnapshot();
      if (!isCloudSessionCurrent(operationSession)) return;
      if (!isCloudSessionCurrent(operationSession)) return;
    }
    async function prepareCloudAccess() {
      if (!await checkWhitelistAccess({ syncAfter: false })) return false;
      return true;
    }
  </script>
</body></html>`;
const PROTECTED_MANIFEST = {
  version: 1,
  pages: {
    [`shared/${PROTECTED_PAGE_ID}/index.html`]: `sha256-${createHash('sha256').update(PROTECTED_HTML).digest('base64')}`,
  },
};

const verifyFixture = (dir) => verifyDist(dir, { protectedManifest: PROTECTED_MANIFEST });

// n개의 라우트(index.html)와 m개의 sitemap <loc>를 가진 임시 dist를 만든다.
async function makeDist({ routes = MIN_ROUTES, locs = MIN_ROUTES, rootHtml = OK_HTML, sitemap = true, protectedHtml = PROTECTED_HTML } = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), 'verify-dist-'));
  if (rootHtml !== null) await writeFile(path.join(dir, 'index.html'), rootHtml);
  // 추가 라우트: sub-1/index.html ... (루트 포함해 routes개)
  for (let i = 1; i < routes; i++) {
    const sub = path.join(dir, `r${i}`);
    await mkdir(sub, { recursive: true });
    await writeFile(path.join(sub, 'index.html'), OK_HTML);
  }
  if (sitemap) {
    const body = Array.from({ length: locs }, (_, i) => `<url><loc>https://x/${i}/</loc></url>`).join('');
    await writeFile(path.join(dir, 'sitemap.xml'), `<urlset>${body}</urlset>`);
  }
  if (protectedHtml !== null) await writeProtectedPage(dir, protectedHtml);
  return dir;
}

async function withDist(opts, fn) {
  const dir = await makeDist(opts);
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

async function writeProtectedPage(dir, html, pageId = PROTECTED_PAGE_ID) {
  const protectedDir = path.join(dir, 'shared', pageId);
  await mkdir(protectedDir, { recursive: true });
  await writeFile(path.join(protectedDir, 'index.html'), html);
}

test('verifyDist: 정상 dist(마커·sitemap·parity·하한 충족)는 ok', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, true, r.errors.join('; '));
    assert.equal(r.routes, 12);
    assert.equal(r.locs, 12);
  });
});

test('verifyDist: index.html 누락 시 실패', async () => {
  await withDist({ routes: 12, locs: 12, rootHtml: null }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('index.html 없음')));
  });
});

test('verifyDist: prerender 마커 없는 빈 셸 index.html은 실패', async () => {
  const emptyShell = '<!doctype html><html><body><div id="root"></div></body></html>';
  await withDist({ routes: 12, locs: 12, rootHtml: emptyShell }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('마커')));
  });
});

test('verifyDist: sitemap.xml 누락 시 실패', async () => {
  await withDist({ routes: 12, sitemap: false }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('sitemap.xml 없음')));
  });
});

test('verifyDist: route 수와 sitemap <loc> 수 불일치(부분 손상) 시 실패', async () => {
  await withDist({ routes: 12, locs: 20 }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('sitemap')));
  });
});

test('verifyDist: 보호된 shared 페이지는 sitemap parity에서 제외하고 별도 검증한다', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, true, r.errors.join('; '));
    assert.equal(r.routes, 12);
    assert.equal(r.protectedPages, 1);
  });
});

test('verifyDist: manifest에 등록된 여러 보호 페이지를 모두 검증한다', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    const secondHtml = buildProtectedHtml(encryptHtml(OK_HTML, generatePassword()));
    await writeProtectedPage(dir, secondHtml, SECOND_PROTECTED_PAGE_ID);
    const manifest = {
      version: 1,
      pages: {
        ...PROTECTED_MANIFEST.pages,
        [`shared/${SECOND_PROTECTED_PAGE_ID}/index.html`]: `sha256-${createHash('sha256').update(secondHtml).digest('base64')}`,
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, true, r.errors.join('; '));
    assert.equal(r.protectedPages, 2);
  });
});

test('verifyDist: Google OAuth와 서버 화이트리스트로 보호된 shared 페이지를 허용한다', async () => {
  await withDist({ routes: 12, locs: 12, protectedHtml: GOOGLE_AUTH_HTML }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: `sha256-${createHash('sha256').update(GOOGLE_AUTH_HTML).digest('base64')}`,
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, true, r.errors.join('; '));
    assert.equal(r.protectedPages, 1);
  });
});

test('verifyDist: Google 인증 페이지의 숨겨진 앱 본문이 없으면 거부한다', async () => {
  const exposedHtml = GOOGLE_AUTH_HTML.replace('id="appShell" hidden', 'id="appShell"');
  await withDist({ routes: 12, locs: 12, protectedHtml: exposedHtml }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: `sha256-${createHash('sha256').update(exposedHtml).digest('base64')}`,
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('Google 인증 보호 마커')));
  });
});

test('verifyDist: Google 인증 페이지의 로컬 저장 대기 데이터 보호가 없으면 거부한다', async () => {
  const unsafeHtml = GOOGLE_AUTH_HTML.replace('if (syncMeta.dirty)', 'if (false)');
  await withDist({ routes: 12, locs: 12, protectedHtml: unsafeHtml }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: `sha256-${createHash('sha256').update(unsafeHtml).digest('base64')}`,
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('Google 인증 보호 마커')));
  });
});

test('verifyDist: Google 인증 페이지가 로그아웃 뒤 늦은 클라우드 응답을 적용하면 거부한다', async () => {
  const unsafeHtml = GOOGLE_AUTH_HTML.replaceAll(/if \(!isCloudSessionCurrent\([^)]*\)\) return(?: false)?;/gu, '');
  await withDist({ routes: 12, locs: 12, protectedHtml: unsafeHtml }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: `sha256-${createHash('sha256').update(unsafeHtml).digest('base64')}`,
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('Google 인증 보호 마커')));
  });
});

test('verifyDist: Google 인증 페이지의 주기적 권한 확인이 화면을 다시 여는 경우 거부한다', async () => {
  const unsafeHtml = GOOGLE_AUTH_HTML.replace(
    'if (!await checkWhitelistAccess({ syncAfter: false })) return false;',
    'if (!await checkWhitelistAccess({ syncAfter: false })) return false; else { unlockApplication(); renderSyncStatus(); }',
  );
  await withDist({ routes: 12, locs: 12, protectedHtml: unsafeHtml }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: `sha256-${createHash('sha256').update(unsafeHtml).digest('base64')}`,
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('최상단')));
  });
});

test('verifyDist: Google 인증 페이지의 권한 재검증 우회와 민감 설정을 거부한다', async () => {
  const unsafePages = [
    GOOGLE_AUTH_HTML.replace('</script>', 'const event = "TOKEN_REFRESHED"; authAccess = { allowed: true };\n  </script>'),
    GOOGLE_AUTH_HTML.replace('sb_publishable_test', 'sb_secret_private'),
    GOOGLE_AUTH_HTML.replace('로그인', 'owner@example.com'),
  ];

  for (const html of unsafePages) {
    await withDist({ routes: 12, locs: 12, protectedHtml: html }, async (dir) => {
      const manifest = {
        version: 1,
        pages: {
          [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
            mode: 'google-supabase-whitelist',
            digest: `sha256-${createHash('sha256').update(html).digest('base64')}`,
          },
        },
      };

      const r = await verifyDist(dir, { protectedManifest: manifest });
      assert.equal(r.ok, false);
    });
  }
});

test('verifyDist: Google 인증 페이지 digest 불일치를 거부한다', async () => {
  await withDist({ routes: 12, locs: 12, protectedHtml: GOOGLE_AUTH_HTML }, async (dir) => {
    const manifest = {
      version: 1,
      pages: {
        [`shared/${PROTECTED_PAGE_ID}/index.html`]: {
          mode: 'google-supabase-whitelist',
          digest: 'sha256-invalid',
        },
      },
    };

    const r = await verifyDist(dir, { protectedManifest: manifest });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('manifest와 일치하지 않음')));
  });
});

test('verifyDist: manifest의 비표준 보호 경로를 거부한다', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    const r = await verifyDist(dir, {
      protectedManifest: {
        version: 1,
        pages: { 'shared/family-budget/index.html': 'sha256-invalid' },
      },
    });
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('경로 형식')));
  });
});

test('verifyDist: 보호 경로가 통째로 누락되면 실패한다', async () => {
  await withDist({ routes: 12, locs: 12, protectedHtml: null }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('읽기 실패')));
  });
});

test('verifyDist: canonical 출력 뒤에 평문이 추가되면 실패한다', async () => {
  await withDist({ routes: 12, locs: 12, protectedHtml: `${PROTECTED_HTML}<h1>CONFIDENTIAL PLAINTEXT</h1>` }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('canonical')));
  });
});

test('verifyDist: shared 경로의 sidecar 파일을 거부한다', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    await writeFile(path.join(dir, 'shared', PROTECTED_PAGE_ID, 'plaintext.json'), '{"secret":true}');
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('index.html 파일 하나만')));
  });
});

test('verifyDist: payload 스키마가 손상되면 실패한다', async () => {
  const damaged = PROTECTED_HTML.replace('"iterations":600000', '"iterations":1');
  await withDist({ routes: 12, locs: 12, protectedHtml: damaged }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('payload 스키마')));
  });
});

test('verifyDist: 라우트 수가 하한 미만이면 실패(콘텐츠 붕괴)', async () => {
  await withDist({ routes: 3, locs: 3 }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('하한')));
  });
});

test('verifyDist: 유효한 Base64 암호문 한 글자 변조도 manifest 해시로 거부한다', async () => {
  const match = PROTECTED_HTML.match(/const payload = (\{[^;]+\});/u);
  const payload = JSON.parse(match[1]);
  payload.data = `${payload.data[0] === 'A' ? 'B' : 'A'}${payload.data.slice(1)}`;
  const damaged = buildProtectedHtml(payload);
  await withDist({ routes: 12, locs: 12, protectedHtml: damaged }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('manifest')));
  });
});

test('verifyDist: sitemap.xml은 있으나 <loc> 0개면 실패(누락과 구분)', async () => {
  await withDist({ routes: 12, locs: 0, sitemap: true }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('0개')));
  });
});

test('verifyDist: 라우트 수 경계값 — 하한과 정확히 같으면 통과, 하나 적으면 실패', async () => {
  await withDist({ routes: MIN_ROUTES, locs: MIN_ROUTES }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, true, r.errors.join('; '));
  });
  await withDist({ routes: MIN_ROUTES - 1, locs: MIN_ROUTES - 1 }, async (dir) => {
    const r = await verifyFixture(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('하한')));
  });
});
