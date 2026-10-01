# Justin Jeong 개인 사이트

실제 경험과 기술 글을 연결해서 읽는 GitHub Pages 사이트입니다. 회사별 이력서가 아니라, 문제·판단·기여·확인 범위를 살펴보는 기록 공간입니다.

## 구조

- `src/content/cases/*.mdx`: 경험 기록과 개인 프로젝트
- `src/content/notes/*.mdx`: 기술 개념과 검증 조건
- `src/content/essays/*.mdx`: 여러 기록을 연결하는 관점
- `src/content/logs/*.mdx`: 날짜별 짧은 기록
- `src/content/site.json`, `about.json`: 홈과 소개
- `src/lib/work-paths.js`: 읽기 방향과 순서
- `src/lib/search-docs.js`: 검색 문서 구성
- `.github/workflows/deploy.yml`: 기본 브랜치 `master`에서 Pages 배포

## 콘텐츠 편집

MDX의 frontmatter와 본문을 함께 편집합니다. 사례는 문제, 선택지, 직접 기여, 구현·협업 과정, 확인된 변화와 미확인 범위를 구분합니다. 작성 시점의 해석을 당시의 의도로 단정하지 않습니다.

통합된 글은 `archived: true`와 `supersededBy`로 표시합니다. 기존 상세 URL은 유지하고 목록·검색에서만 제외합니다. [편집 기록](docs/content-curation.md)에 통합 내역을 정리했습니다.

## 실행과 검증

`.nvmrc`의 Node 버전을 사용합니다.

```bash
npm ci
npm run dev -- --host 127.0.0.1
npm test
npm run lint
npm run typecheck
npm run build
```

`lint`는 소스 문법 검사, `typecheck`는 Vite 모듈 그래프 검사입니다. 빌드는 내부 링크 검사, 사이트맵 생성, 클라이언트·SSR 빌드, 정적 HTML 생성과 배포 파일 검증을 포함합니다. 로컬 검증과 실제 Pages 배포 확인은 별개입니다.
