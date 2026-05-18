# 정경하 개인 사이트

기술 스택 나열형 포트폴리오를 방문자 관점의 신뢰 허브로 재구성한 사이트입니다.

## 구조

- `src/content/siteContent.js`: 프로필, 신뢰 신호, 케이스 스터디, 빌더 로그 콘텐츠
- `src/components/LandingPage.jsx`: 전체 페이지 레이아웃
- `src/css/index.css`: 반응형 스타일
- `.github/workflows/deploy.yml`: GitHub Pages 자동 배포

## 사례를 추가하는 방법

업무 중 공개 가능한 사례가 생기면 `src/content/siteContent.js`의 `caseStudies` 또는 `builderLogs`에 추가합니다.

케이스 스터디는 아래 다섯 가지를 채우는 흐름으로 유지합니다.

- 문제: 누가 어떤 불편을 겪었나
- 역할: 내가 직접 판단하고 만든 부분은 무엇인가
- 접근: 버린 선택지와 채택한 이유는 무엇인가
- 결과: 수치, 반응, 운영 변화 중 무엇이 남았나
- 회고: 지금 다시 한다면 무엇을 다르게 할 것인가

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```
