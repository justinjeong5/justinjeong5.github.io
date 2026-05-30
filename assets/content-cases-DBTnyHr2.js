import{n as e,r as t,t as n}from"./rolldown-runtime-S-ySWqyJ.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o={},s=a.createContext(o);function c(e){let t=a.useContext(s);return a.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}var u=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),d=n(((e,t)=>{t.exports=u()})),f=e({default:()=>g,frontmatter:()=>m}),p=d(),m={title:`일일 콘텐츠 자동화 PoC 설계 — personas + quality-gate 체인 적용`,status:`Building`,category:`builder-log`,role:`시스템 설계·페르소나 토론·보안 검토 통합`,period:2026.05,summary:`매일 Claude/Codex 대화에서 사이트 콘텐츠를 자동 추출하는 시스템 PoC를 4 페르소나로 평가. PLAN이 BLOCKING 2개 FAIL → v1 시연 + v2 운영 분리로 페르소나 충돌 해결.`,date:`2026-05-19`,tags:[`automation`,`workflow`,`security`,`design-process`]};function h(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`매일 8시간 Claude·Codex와 대화하면서 가치 있는 인사이트·작업 기록이 휘발된다. 손으로 정리하면 시간 부담, 안 정리하면 자산화 누락.`}),`
`,(0,p.jsx)(t.p,{children:`해법으로 일일 콘텐츠 자동 추출 시스템을 생각했다. 그런데 "자동 발행"은 회사 NDA·credentials 유출 위험이 영구적이다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`옵션 공간 (4축)`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`TRIGGER: manual / hook / cron / hybrid`}),`
`,(0,p.jsx)(t.li,{children:`AUTOMATION_LEVEL: L0(제안만) ~ L3(자동 발행)`}),`
`,(0,p.jsx)(t.li,{children:`DATA: raw / cache / MCP / hook-extract`}),`
`,(0,p.jsx)(t.li,{children:`SECURITY: redaction / 사용자 검토 / allowlist / private-promote`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`4 페르소나 토론`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`SWE`}),`: D/L1/B/D. Hidden complexity = Codex transcript 정규화`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`법무`}),`: D/L1/D/A. "L3 + 자동 redaction은 one-way door, 절대 금지"`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`콘텐츠 전략가`}),`: C/L1/B/B. "자동화는 글 더 많이 쓰게 하는 도구가 아니라 쓸 만한 순간 놓치지 않게 하는 알람"`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`운영 사용자(본인)`}),`: C/L2/B/B. `,(0,p.jsx)(t.strong,{children:`지속률 35%`}),`, `,(0,p.jsx)(t.strong,{children:`"가장 두려운 건 회사 정보 유출 1건"`})]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`quality-gate 평가`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`6축 rubric → 평균 `,(0,p.jsx)(t.strong,{children:`2.5/5 FAIL`}),` (BLOCKING G1·G2 FAIL)`]}),`
`,(0,p.jsx)(t.li,{children:`법무: "현 PLAN으로 publish 진행 절대 금지"`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`v1/v2 분리 결정`}),`
`,(0,p.jsx)(t.p,{children:`페르소나 충돌(법무 강함 vs 사용자 의도 빠른 PoC)을 해결하는 키:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`v1`}),`: 1회 시연 dry-run — 즉시 가능`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`v2`}),`: 4주 dry-run + 2주 publish — 보수적, 사용자 결정 후`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`v1만 quality-gate `,(0,p.jsx)(t.strong,{children:`4.33/5 PASS`}),`.`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`v1 시연: `,(0,p.jsx)(t.code,{children:`.cache/daily/2026-05-19.mdx`}),` (publish 차단)`]}),`
`,(0,p.jsx)(t.li,{children:`콘텐츠 후보 2개 추출 (Log + Note) — 둘 다 정식 promote`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`SESSION.md`}),` (v2 인계 컨텍스트)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`scripts/daily-log/`}),` 베이스 디렉토리 + README`]}),`
`,(0,p.jsxs)(t.li,{children:[`데이터 소스 위치 확정: Claude `,(0,p.jsx)(t.code,{children:`~/.claude/projects/`}),`, Codex `,(0,p.jsx)(t.code,{children:`~/.codex/sessions/`})]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`거버넌스 부담 가시화`}),`: 자동화 본 코딩 1주 vs 보안 검증 dry-run 4주 → 1:4 비율`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`페르소나 충돌 해결 패턴`}),`: scope를 v1(시연)/v2(운영)로 분리 → 단일 PoC 정의로는 통과 불가`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`본인 페르소나의 BLOCKING 발견`}),`: 외부 페르소나는 기능적 위험, 본인은 지속 가능성`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`다음 보강`}),`
`,(0,p.jsx)(t.p,{children:`v2 진입 시:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Phase 1: Source Adapter (Claude + Codex 정규화)`}),`
`,(0,p.jsx)(t.li,{children:`Phase 3: 보안 게이트 7개 구현`}),`
`,(0,p.jsx)(t.li,{children:`Phase 6: 4주 dry-run 운영 + false negative율 측정`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`/notes/automation-vs-governance`}),`, `,(0,p.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`})]})]})}function g(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(h,{...e})}):h(e)}var _=e({default:()=>b,frontmatter:()=>v}),v={title:`CLAUDE.md 제0원칙 — 모든 메시지를 dispatch로 강제 라우팅하는 메타 시스템`,status:`Live`,category:`builder-log`,role:`AI 워크플로우 설계·시스템 프롬프트·결정론적 루프`,period:`2026.04~05`,summary:`사용자 메시지마다 "어떤 처리 패턴이 적합한지"를 사람이 매번 결정하는 게 병목. dispatch 라우팅을 CLAUDE.md 제0원칙으로 박아 모든 COMPETE 메시지 자동 매칭.`,date:`2026-05-19`,tags:[`claude`,`workflow`,`ai-orchestration`,`system-design`]};function y(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`Claude Code에 스킬 30+가 누적되면 사용자가 매번 "이건 어떤 스킬?"을 결정해야 한다. 결정 자체가 인지 부담 + 잘못된 스킬 선택 시 시간 낭비.`}),`
`,(0,p.jsx)(t.p,{children:`다른 측면: 매 메시지마다 "결정론적 루프 검증", "Codex 경쟁", "옵션 비교" 같은 메타 패턴을 사람이 일일이 적용하는 건 사람 속도.`}),`
`,(0,p.jsxs)(t.p,{children:[`해법은 `,(0,p.jsx)(t.strong,{children:`시스템 프롬프트 자체에 워크플로우를 박는 것`}),`.`]}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`매 메시지 시작에 "이건 어떤 패턴" 명시 — 매번 부담`}),`
`,(0,p.jsx)(t.li,{children:`스킬마다 별도 trigger 키워드 — 키워드 매칭 한계`}),`
`,(0,p.jsx)(t.li,{children:`시스템 자체 제어 안 함 — 일관성 ↓`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.p,{children:[`CLAUDE.md(글로벌 + 프로젝트)에 `,(0,p.jsx)(t.strong,{children:`제0~4원칙`}),` 정의:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`제0원칙`}),`: 강제 라우팅 (모든 메시지 → dispatch)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`제1원칙`}),`: 결정론적 루프 (사람 개입 없이 검증 가능)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`제2원칙`}),`: Always v1.0 + Graduated Autonomy`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`제3원칙`}),`: 에이전트·Codex 적극 활용`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`제4원칙`}),`: 깊이 우선 사고`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`~/.claude/CLAUDE.md`}),` — 글로벌 원칙 (110+ 줄)`]}),`
`,(0,p.jsx)(t.li,{children:`우선순위 규칙: 🔀 라우팅 > output style > 작업 인터뷰 > 에이전트 직접 스폰`}),`
`,(0,p.jsxs)(t.li,{children:[`모든 응답 첫 줄에 라우팅 분류 강제: `,(0,p.jsx)(t.code,{children:`🔀 [PASS|DIRECT|COMPETE] → [스킬명 또는 "직접 응답"]`})]}),`
`,(0,p.jsx)(t.li,{children:`Code Practice 영구 적용: 바퀴 재발명 금지, 컨벤션 준수, 셀프 리뷰, Codex 전면 경쟁`}),`
`,(0,p.jsx)(t.li,{children:`자산화 (Proactive): 반복 작업 → 자동화 후보, non-trivial 해결 → debugging.md`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`오늘 세션 30+회 dispatch 호출, 모두 자동 라우팅 (사용자가 스킬명 입력 0회)`}),`
`,(0,p.jsx)(t.li,{children:`5번의 quality-gate, 1번의 personas가 dispatch 추천으로 자연 발화`}),`
`,(0,p.jsx)(t.li,{children:`"Codex 전면 경쟁" 규칙으로 작업 빠짐 0건 (사용자 명시 시 예외)`}),`
`,(0,p.jsx)(t.li,{children:`compact 내성 — SESSION.md 자동 복원 hook 통합`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`한계 / 보강`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`제0원칙 강제가 단순 확인 응답("네")까지 dispatch 보내면 비효율 → PASS 분류로 분리`}),`
`,(0,p.jsx)(t.li,{children:`dispatch 자기 자신 추천 무한 루프 위험 → 명시적 금지`}),`
`,(0,p.jsx)(t.li,{children:`새 스킬 추가 시 dispatch가 못 알면 무력 → skill-registry.md 갱신 워크플로우`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`원칙은 시스템 프롬프트에 박혀야 항상 동작한다.`}),` 메시지마다 "이번에도 이 원칙 따라줘"라고 말하는 건 사람 속도. 한 번 박아두면 무한히 재사용.`]}),`
`,(0,p.jsxs)(t.p,{children:[`가장 큰 가치: 원칙 자체가 도구를 부르고, 도구가 또 도구를 부르는 `,(0,p.jsx)(t.strong,{children:`메타 시스템의 자기 강화`}),`. 한 세션이 끝나면 다음 세션에 더 잘 동작한다 (memory 자동 갱신).`]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/cases/dispatch-routing-system`,children:`/cases/dispatch-routing-system`}),`, `,(0,p.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`})]})]})}function b(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(y,{...e})}):y(e)}var x=e({default:()=>w,frontmatter:()=>S}),S={title:`콘텐츠 시드 채우기 — MDX 기반 사이트에 11편 신규 작성`,status:`Live`,category:`builder-log`,role:`콘텐츠 작성·메타데이터 표준화·페르소나 검증`,period:2026.05,summary:`사이트 인프라 완성 후 빈 콘텐츠 상태에서 Logs 5 + Notes 5 + Essay 1 = 11편을 한 세션에 작성. 3 페르소나 × 12축 quality-gate로 4.04 → 4.59 PASS.`,date:`2026-05-19`,tags:[`content`,`mdx`,`writing`,`workflow`]};function C(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`라우팅·MDX·디자인·모바일 인프라가 완성됐지만 콘텐츠가 시드 3개뿐. 채용 담당자가 보면 "빈 액자" 인상. 사이트가 살아있다는 신호 부재.`}),`
`,(0,p.jsx)(t.p,{children:`문제는 시간. 본업 8시간 외에 매일 글 쓸 부담은 sustainable 하지 않다. 그렇다고 빈 사이트는 가치 없음.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`자동 생성으로 11편 만들기`}),`: AI 톤 오염, 1인칭 일관성 ↓`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`본인 의견 전부 직접 작성`}),`: 시간 부담, 한 세션 완료 불가`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사이트 publish 미루기`}),`: 인프라가 죽은 상태로 누적`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`책임 분리`}),`:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Claude가 1차 작성`}),`: 메타 작업·도구·이번 세션 사실 기반 (객관 가능 영역)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사용자가 검토·다듬기`}),`: 1인칭 톤·뉘앙스·결정 이유 (주관 영역)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`quality-gate 통과 확인`}),`: 객관 기준으로 ship 여부 결정`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물 (11편)`}),`
`,(0,p.jsx)(t.h3,{children:`Logs 5편 (시간순 cascade — '2026-05-19 13:00 ~ 18:00')`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsx)(t.li,{children:`routing-mdx (Phase 1 베이스, 기존 시드)`}),`
`,(0,p.jsx)(t.li,{children:`interactive-phase3 (Cmd+K·키보드·테마)`}),`
`,(0,p.jsx)(t.li,{children:`editorial-modern (Pretendard 도입)`}),`
`,(0,p.jsx)(t.li,{children:`yellow-tone-purge (디자인 quality-gate 3.28→4.44)`}),`
`,(0,p.jsx)(t.li,{children:`mobile-gnb (햄버거 메뉴)`}),`
`,(0,p.jsx)(t.li,{children:`mobile-quality-gate (모바일 QG 2.75→4.75)`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`Notes 5편`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`dispatch-routing-pattern (Evergreen)`}),`
`,(0,p.jsx)(t.li,{children:`quality-gate-loop (Evergreen)`}),`
`,(0,p.jsx)(t.li,{children:`codex-competition (Budding)`}),`
`,(0,p.jsx)(t.li,{children:`color-mix-tokens (Seedling)`}),`
`,(0,p.jsx)(t.li,{children:`ios-hig-touch-targets (Seedling)`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`Essay 1편`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`deterministic-design-loop — "결정론적 디자인 루프로 미적 결정을 객관화하기"`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`quality-gate 사이클`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`항목`}),(0,p.jsx)(t.th,{children:`C1`}),(0,p.jsx)(t.th,{children:`C2`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`L1 사실 정확성`}),(0,p.jsx)(t.td,{children:`3 FAIL`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`L4 기존 시드 톤 일관성`}),(0,p.jsx)(t.td,{children:`4.2`}),(0,p.jsx)(t.td,{children:`4.5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`N2 growth 단계 적정`}),(0,p.jsx)(t.td,{children:`3 FAIL`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`E2 한국어 1인칭 톤 (BLOCKING)`}),(0,p.jsx)(t.td,{children:`4`}),(0,p.jsx)(t.td,{children:`4.7`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`E3 차별화·기억성`}),(0,p.jsx)(t.td,{children:`4`}),(0,p.jsx)(t.td,{children:`4.7`})]})]})]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`평균 4.04 → 4.59/5 PASS`})}),`
`,(0,p.jsx)(t.p,{children:`핵심 개선:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`사이클 1 L1 (페르소나 수 불일치): essay에 디자인/모바일 사이클 페르소나 수 차이 명시`}),`
`,(0,p.jsx)(t.li,{children:`사이클 1 N2 (growth 단계): plantedAt 당일 노트를 Budding → Seedling 다운그레이드`}),`
`,(0,p.jsx)(t.li,{children:`N4 (백링크): dispatch ↔ quality-gate ↔ color-mix 본문 cross-link`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`빈 사이트 → 11편 콘텐츠로 시각적 가든 살아남`}),`
`,(0,p.jsx)(t.li,{children:`frontmatter 스키마 표준화 — 향후 콘텐츠 추가가 데이터 기입만으로 자동 노출`}),`
`,(0,p.jsx)(t.li,{children:`메타 시스템 노출 — Claude Code·dispatch·quality-gate 시스템을 글로 외화`}),`
`,(0,p.jsx)(t.li,{children:`운영 자동화 PoC v1까지 자연 연결`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`빈 인프라는 인프라가 아무리 좋아도 죽은 액자. 핵심 인사이트: `,(0,p.jsx)(t.strong,{children:`Claude가 잘 하는 영역과 사용자만 할 수 있는 영역 분리`}),`. 메타 작업·이번 세션 사실 = Claude. 본인 의견·뉘앙스 = 사용자.`]}),`
`,(0,p.jsx)(t.p,{children:`이 분리가 작동하니 한 세션에 11편 추가가 sustainable.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/essays/why-not-traditional-resume`,children:`/essays/why-not-traditional-resume`})]})]})}function w(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(C,{...e})}):C(e)}var T=e({default:()=>O,frontmatter:()=>E}),E={title:`dispatch — 의도 기반 AI 라우팅 시스템 구축`,status:`Live`,category:`builder-log`,role:`시스템 설계·CLAUDE.md 통합·스킬 작성`,period:2026.05,summary:`Claude Code의 30+ 스킬 중 매번 사람이 "이건 어떤 스킬"을 결정하는 건 사람 속도. 3 에이전트 병렬 경쟁으로 의도 분석 후 자동 라우팅하는 dispatch 스킬 구축.`,date:`2026-05-19`,tags:[`claude`,`workflow`,`routing`,`ai-orchestration`]};function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`Claude Code에 스킬이 누적되면 매 메시지마다 "이건 `,(0,p.jsx)(t.code,{children:`/ship`}),`인가, `,(0,p.jsx)(t.code,{children:`/review-changes`}),`인가, 그냥 직접 답할 것인가"를 사람이 결정해야 한다. 30개 스킬 환경에서 이 의사결정 자체가 병목이 된다.`]}),`
`,(0,p.jsx)(t.p,{children:`키워드 매칭으로는 부족하다. "PR 만들어줘"는 단순 매칭이지만 "이 변경을 어떻게 마무리하지?"는 맥락 의존이다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`단일 LLM 호출로 결정`}),`: confirmation bias, 단일 시야`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`하드코딩된 키워드 매칭`}),`: "이 변경을 마무리"처럼 의도가 모호한 경우 처리 불가`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사용자가 매번 선택`}),`: 사람 속도, 30+ 스킬 외워야 함`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`3 에이전트 병렬 경쟁`}),`: maximizer (토큰 최대), synergist (조합), pragmatist (의도 매칭)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`합의/이견 기반 자동 채택`}),`: 만장일치 즉시, 이견 시 점수 공식`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`ALTERNATIVE_DETECTED 감지`}),`: 옵션 공간 큰 결정엔 /personas 자동 추천`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`fast route 최적화`}),`: 명확한 단일 매칭은 점수화 생략`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`~/.claude/skills/dispatch/SKILL.md`}),` — 스킬 정의`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`references/skill-registry.md`}),` — 모든 스킬 분류`]}),`
`,(0,p.jsxs)(t.li,{children:[`점수 공식: `,(0,p.jsx)(t.code,{children:`Fit×0.30 + Outcome×0.20 + Token×0.20 + Synergy×0.20 + Depth×0.10`})]}),`
`,(0,p.jsx)(t.li,{children:`CLAUDE.md 제0원칙으로 통합 — 모든 COMPETE 메시지는 dispatch 거침`}),`
`,(0,p.jsx)(t.li,{children:`오늘 세션에서 약 15+ 회 호출, 모두 적정 스킬 매칭`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사람 결정 부담 ↓`}),`: 30+ 스킬에서 매번 선택 → dispatch가 자동`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`의도 보존`}),`: 키워드 매칭이 못 잡는 "이 변경을 마무리" 같은 맥락 의존 케이스 처리`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`체인 시너지 발견`}),`: 오늘 자동화 PoC에서 dispatch가 `,(0,p.jsx)(t.code,{children:`personas → quality-gate`}),` 체인을 자동 채택, 단일 사고로는 도달 어려운 결론 도출`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`메타 시스템 자산화`}),`: 한 번 만들고 모든 후속 세션에 재사용 가능`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsx)(t.p,{children:`처음엔 "그냥 매번 결정하지 뭐" 직관이 강했다. 만들고 보니 의사결정 부담의 비선형 감소가 명확하다. 도구 자체가 다른 도구를 부르는 메타 시스템이 가장 큰 가치.`}),`
`,(0,p.jsx)(t.p,{children:`함정: dispatch가 자기 자신을 추천하는 무한 루프 → 명시적 금지 규칙으로 방지.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`})]})]})}function O(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(D,{...e})}):D(e)}var k=e({default:()=>M,frontmatter:()=>A}),A={title:`Editorial Modern 디자인 리뉴얼 — Pretendard + 절제 팔레트로 누런 톤 박멸`,status:`Live`,category:`builder-log`,role:`디자인 시스템·토큰 재설계·타이포그래피 검수`,period:2026.05,summary:`베이지 톤 + 다양한 accent의 brutalist 잔재를 cream + charcoal + 단일 indigo로 정제. Inter → Pretendard Variable. quality-gate 사이클 3.28 → 4.44 통과.`,date:`2026-05-19`,tags:[`design`,`typography`,`design-tokens`,`pretendard`]};function j(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`리빌드 직후 사이트 톤이 6년 전 brutalist 잔재 (검은 띠, 큰 빨간 step 번호, 그림자 노이즈)로 채워져 있었다. 사용자 1차 피드백: `,(0,p.jsx)(t.strong,{children:`"엄청 못생겼어"`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`직관 수정으로는 어디부터 손대야 할지 불명확. 평가 시스템이 필요했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`색상 미세 조정만 — 토큰 부재 상태에서 hex 30+ 곳 일관성 불가`}),`
`,(0,p.jsx)(t.li,{children:`전면 리디자인 (3D / Gamified) — 미니멀 톤·운영 비용과 충돌`}),`
`,(0,p.jsx)(t.li,{children:`부분 패치 — 동일 함정 반복`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.strong,{children:`디자인 토큰 :root variables로 추출 → 단일 source 회복`})}),`
`,(0,p.jsx)(t.li,{children:`Pretendard Variable (dynamic-subset) 도입`}),`
`,(0,p.jsx)(t.li,{children:`4 페르소나 quality-gate 사이클로 점수 ≥ 4.5 통과까지`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.h3,{children:`Phase 1: Editorial Modern (사이클 1)`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Pretendard Variable dynamic-subset (풀 2MB → 청크 ~40KB×N)`}),`
`,(0,p.jsxs)(t.li,{children:[`Light: cream `,(0,p.jsx)(t.code,{children:`#faf9f5`}),` + charcoal `,(0,p.jsx)(t.code,{children:`#18181b`}),` + burnt-orange `,(0,p.jsx)(t.code,{children:`#c2410c`})]}),`
`,(0,p.jsx)(t.li,{children:`Dark: almost-black + cream`}),`
`,(0,p.jsx)(t.li,{children:`font-weight 950/900 → 600/700 다이어트`}),`
`,(0,p.jsx)(t.li,{children:`카드 box-shadow 제거 → hairline border, 모서리 8px → 6px`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`Phase 2: 누런 톤 박멸 (사이클 2·3)`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`cream → `,(0,p.jsxs)(t.strong,{children:[`pure white `,(0,p.jsx)(t.code,{children:`#ffffff`})]}),` + zinc + indigo `,(0,p.jsx)(t.code,{children:`#4f46e5`})]}),`
`,(0,p.jsxs)(t.li,{children:[`하드코딩 hex 30+ 곳, rgba 12+ 곳 → `,(0,p.jsx)(t.code,{children:`var(--*)`}),` 일괄 치환`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`--text-inverse: #fafafa`}),` 토큰 신설 (다크 배경 위 light text 의미)`]}),`
`,(0,p.jsx)(t.li,{children:`sepia 테마 완전 삭제 (누런 톤 가장 강함)`}),`
`,(0,p.jsxs)(t.li,{children:[`HomePage `,(0,p.jsx)(t.code,{children:`heroProof`}),` 3카드 활성화 (dead asset)`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`quality-gate 결과`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`항목`}),(0,p.jsx)(t.th,{children:`C1`}),(0,p.jsx)(t.th,{children:`C3`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`컬러 팔레트 (BLOCKING)`}),(0,p.jsx)(t.td,{children:`2`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`타이포그래피 (BLOCKING)`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`시각 일관성`}),(0,p.jsx)(t.td,{children:`2`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`다크 테마`}),(0,p.jsx)(t.td,{children:`3.5`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`5`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`첫인상·임팩트`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`4`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`평균 3.28 → 4.44/5`}),` (3 사이클)`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`"엄청 못생겻어" → "좋아 마음에 들어"`}),`
`,(0,p.jsx)(t.li,{children:`hex/rgba 잔재 0건 grep 확인 (single source of truth)`}),`
`,(0,p.jsx)(t.li,{children:`한국어 letter-spacing -0.025em으로 받침 자모 뭉침 해소`}),`
`,(0,p.jsxs)(t.li,{children:[`다크 모드 form/scrollbar `,(0,p.jsx)(t.code,{children:`color-scheme: dark`}),` 한 줄로 자동 적응`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`세련된 디자인은 `,(0,p.jsx)(t.strong,{children:`토큰 일관성이 80%`}),`. 사용자가 hex 잔재를 의식적으로 못 보지만 시각적 안정감의 무게가 다르다. 그리고 사용자가 누런 톤을 싫어한다 → burnt-orange도 같은 계열로 느낀다는 신호. 페르소나 평가가 짚지 못했다면 못 잡았을 디테일.`]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/color-mix-tokens`,children:`/notes/color-mix-tokens`}),`, `,(0,p.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`/notes/korean-letter-spacing`})]})]})}function M(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(j,{...e})}):j(e)}var N=e({default:()=>I,frontmatter:()=>P}),P={title:`홈레이더 — 5개 지역 아파트 자동 추적 시스템`,status:`Live`,category:`product`,role:`기획·아키텍처·구현·운영`,period:2026.05,summary:`관심 지역 5곳의 아파트 실거래가·평수·세대수·주차·학군·교통을 공개 API 7곳에서 주1회 자동 수집해 노션 DB에 정리. 거시지표·정책 레지스트리까지 포함한 personal real estate intelligence.`,date:`2026-05-21`,tags:[`side-project`,`automation`,`notion`,`github-actions`,`typescript`]};function F(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`이사 시기가 오면 매번 같은 지역을 검색한다. 호갱노노·KB부동산·네이버부동산을 돌며 같은 단지의 실거래가·평수·세대수·주차·학군·역세권을 확인한다. 한 단지당 10-15분, 5곳을 보면 1-2시간.`}),`
`,(0,p.jsx)(t.p,{children:`매주 같은 작업을 반복하는데 시간이 누적된다. 더 큰 문제는 비교 기준이 매번 달라지는 것. 어떤 단지는 학군만 봤고 어떤 단지는 교통만 봤다면 의사결정 일관성이 깨진다.`}),`
`,(0,p.jsx)(t.h2,{children:`결정`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`노션을 lightweight backend로`}),`: 직접 DB·서버를 띄우는 대신 노션 API + 노션 DB 7개를 백엔드로. 무료, 시각화 자동, 모바일 앱 자동.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`5개 관심 지역으로 좁힘`}),`: 하남 미사, 송파 오금/개롱, 용인 수지, 인천 구월, 화성 동탄. 5곳 이상은 데이터 노이즈만 늘림.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`YAML 설정으로 단지 추가`}),`: `,(0,p.jsx)(t.code,{children:`apartments.yml`}),`만 수정하면 새 단지 추가 — 코드 수정 0.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Phase 단위 점진 빌드`}),`: Phase 0(기반) → 1(MVP) → 2(enrichment) → 2.5(hotfix) → 3-A(가격 영향 metric) → 3-B(거시지표·정책). 매 phase는 PR 단위.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`무료 인프라`}),`: GitHub Actions cron(주1회) + Notion 무료 플랜. 운영 비용 0원.`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`TypeScript + axios + bottleneck + zod + winston (production 패턴)`}),`
`,(0,p.jsx)(t.li,{children:`노션 DB 7개: 지역별 Apartments 5개 + PriceSnapshots_2026 + LocationStats`}),`
`,(0,p.jsx)(t.li,{children:`공개 API 7개 통합: 국토부 RTMS, 네이버 Cloud Maps, 네이버 Search Local, 카카오 모빌리티, 카카오 로컬, 학교알리미, 한국은행 ECOS`}),`
`,(0,p.jsx)(t.li,{children:`GitHub Actions cron + pending poll(15분)`}),`
`,(0,p.jsx)(t.li,{children:`Phase 3-A 가격 영향 metric 9개: 시장 동학 + 입지 + 기피 시설`}),`
`,(0,p.jsx)(t.li,{children:`Phase 3-B: 한국은행 거시지표 + 정책 레지스트리(region × 규제 × timeline)`}),`
`,(0,p.jsx)(t.li,{children:`CodeRabbit 자동 PR 리뷰`}),`
`,(0,p.jsx)(t.li,{children:`vitest 테스트 + ESLint`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`매주 1-2시간 검색 작업 → 0분 (자동)`}),`
`,(0,p.jsx)(t.li,{children:`비교 기준 일관 (같은 metric으로 5개 지역)`}),`
`,(0,p.jsx)(t.li,{children:`3년 가격 추이 자동 차트 (RTMS 백필)`}),`
`,(0,p.jsx)(t.li,{children:`거시지표·정책 변화가 자동 트래킹 (Phase 3-B)`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`의사결정 시 한 곳에서 데이터를 본다`}),`는 것 자체가 큰 변화`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`다음`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`알림 채널 통합 (Slack/email)`}),`
`,(0,p.jsx)(t.li,{children:`더 많은 metric (전세가율 추이·갭투자 적합도)`}),`
`,(0,p.jsx)(t.li,{children:`ML 기반 단지 추천 (현재 metric 9개 → 가중치 학습)`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`배운 것`}),`
`,(0,p.jsx)(t.p,{children:`side project가 production 패턴을 가르친다. 회사 코드에선 자유롭게 쓰기 어려운 zod boundary 검증·bottleneck rate limit·winston 구조화 로그를 자유롭게 실험. 한 번 쓰면 회사 코드에도 자연스럽게 옮겨가는 게 진짜 학습.`}),`
`,(0,p.jsxs)(t.p,{children:[`또 하나: `,(0,p.jsx)(t.strong,{children:`Phase 단위 점진 빌드`}),`가 매몰을 막는다. Phase 1 MVP에서 모든 걸 다 만들려고 했다면 한 달 후에도 안 끝났을 것. Phase 0 → 1 → 2 → 2.5 hotfix → 3-A → 3-B 순서로 매번 작은 PR을 머지하면서 자라난 형태가 sustained delivery의 답이다.`]}),`
`,(0,p.jsxs)(t.p,{children:[`레포: `,(0,p.jsx)(t.a,{href:`https://github.com/justinjeong5/j-home-radar`,children:`github.com/justinjeong5/j-home-radar`})]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),`, `,(0,p.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),`, `,(0,p.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`})]})]})}function I(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(F,{...e})}):F(e)}var L=e({default:()=>te,frontmatter:()=>ee}),ee={title:`인터랙티브 레이어 — Cmd+K 검색·키보드 단축키·다크 테마`,status:`Live`,category:`builder-log`,role:`UX 설계·키보드 인터랙션·접근성·상태 관리`,period:2026.05,summary:`정적 사이트에 SaaS 수준 인터랙션 도입. Fuse.js로 글로벌 검색, 키보드 단축키(?·/·g h/c/n·T), 라이트/다크 테마 토글, inert 패턴으로 모달 focus 격리.`,date:`2026-05-19`,tags:[`interaction`,`accessibility`,`react`,`ux`]};function R(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`미니멀 정적 사이트의 함정: "디자인은 깔끔한데 죽어 보임". 인터랙션 없는 사이트는 첫 진입 후 다른 페이지로 이동할 동기가 약하다.`}),`
`,(0,p.jsx)(t.p,{children:`사용자 요구: "톤은 인터랙티브 좋아". 그러나 3D·게임화 같은 풀 인터랙티브는 미니멀 톤과 충돌.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`인터랙션 레벨 분류`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레벨 1`}),`: 호버 효과, 부드러운 스크롤만 (가벼움)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레벨 2: Living Site`}),` ⭐ — Cmd+K 검색, 키보드 단축키, 테마 토글`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레벨 3`}),`: 풀 3D·게임화 (미니멀 톤과 충돌)`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택: 레벨 2`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`인터랙션이 "정보 구조·반응"으로 나타남`}),`
`,(0,p.jsx)(t.li,{children:`미니멀 베이스 보존`}),`
`,(0,p.jsx)(t.li,{children:`키보드 first 사용자 친화`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.h3,{children:`글로벌 검색 (Cmd+K)`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`lib/search.js`}),` — Fuse.js 인덱스 (cases·notes·essays·logs 통합)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`CommandPalette.jsx`}),` — ↑↓ Enter 키보드 네비, 결과 그룹별 표시`]}),`
`,(0,p.jsxs)(t.li,{children:[`모바일 input: `,(0,p.jsx)(t.code,{children:`inputMode="search" autoCorrect="off" autoCapitalize="off" enterKeyHint="search"`})]}),`
`]}),`
`,(0,p.jsxs)(t.h3,{children:[`키보드 단축키 (`,(0,p.jsx)(t.code,{children:`GlobalShortcuts.jsx`}),`)`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`?`}),` — 도움말 모달`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`/`}),` 또는 `,(0,p.jsx)(t.code,{children:`⌘K`}),` — 검색`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`T`}),` — 테마 토글 (라이트 ↔ 다크)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`g h/c/n/e/l/a/u/w/r/v`}),` — 페이지 점프 시퀀스 (1200ms idle timeout)`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`다크 테마 시스템`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`UIProvider`}),` (`,(0,p.jsx)(t.code,{children:`lib/ui-context.jsx`}),`) — localStorage 영속 + prefers-color-scheme 추정`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`data-theme`}),` HTML attribute로 토큰 swap`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`color-scheme: dark`}),`로 form·scrollbar 자동 적응`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`모달 접근성 (inert 패턴)`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`3 모달(Palette/Help/MobileMenu) 모두 `,(0,p.jsx)(t.code,{children:`previouslyFocused`}),` 캐시 + 닫힘 시 trigger focus 복귀`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`inert`}),` 속성으로 background subtree 비활성화 (focus trap 라이브러리 대체)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`:focus-visible`}),` 글로벌 outline + `,(0,p.jsx)(t.code,{children:`prefers-reduced-motion`}),` 가드`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`정적 사이트에 SaaS급 인터랙션 (검색 7KB Fuse.js + 키보드 단축키 ~3KB)`}),`
`,(0,p.jsx)(t.li,{children:`WCAG 2.2 1.4.13/2.4.7/2.4.11 + APG dialog 패턴 충족`}),`
`,(0,p.jsxs)(t.li,{children:[`모바일은 햄버거 메뉴 자동 전환 (`,(0,p.jsx)(t.code,{children:`@media (max-width: 720px)`}),`)`]}),`
`,(0,p.jsx)(t.li,{children:`"키보드만으로 사이트 전체 탐색 가능" — 키보드 사용자 친화`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회부`}),`
`,(0,p.jsxs)(t.p,{children:[`가장 강한 인터랙션은 화려한 애니메이션이 아니라 `,(0,p.jsx)(t.strong,{children:`반응 속도 + 키보드 first`}),`. Cmd+K 한 번에 모든 콘텐츠 도달 가능하면 사이트가 살아있게 느껴진다.`]}),`
`,(0,p.jsx)(t.p,{children:`함정: 모달이 background focus를 trap 안 하면 Tab이 새어나간다. 가장 흔한 사고. inert 속성이 표준 API로 해결.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/fuse-client-side-search`,children:`/notes/fuse-client-side-search`}),`, `,(0,p.jsx)(t.a,{href:`/notes/css-color-scheme-native`,children:`/notes/css-color-scheme-native`})]})]})}function te(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(R,{...e})}):R(e)}var z=e({default:()=>re,frontmatter:()=>ne}),ne={title:`J-Chat — 첫 프로덕션 배포의 회고 (2024)`,status:`Archived`,category:`product`,role:`전체 (기획·설계·구현·운영)`,period:2024,summary:`학부에서 회사로 넘어가던 2024년, j-chat이라는 실시간 채팅 서비스를 직접 배포했다. 첫 production이 가르친 5가지. 학부 코드와 실서비스 코드의 거리는 한 줄로 요약되지 않는다.`,date:`2026-05-28`,tags:[`career`,`production`,`learning`,`retrospective`,`websocket`]};function B(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`2024년 첫 회사로 옮기던 시점에 사이드 프로젝트로 j-chat을 만들었다. 단순한 채팅 서비스. MERN 스택(MongoDB·Express·React·Node) + WebSocket. 학부 시절 React/Express는 만져봤지만 `,(0,p.jsx)(t.strong,{children:`실제로 사람에게 배포해본 적이 없었다`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`목표는 두 가지였다.`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsx)(t.li,{children:`친구 5-10명이 실제로 쓸 수 있는 채팅 서비스`}),`
`,(0,p.jsx)(t.li,{children:`본인이 프로덕션 운영을 체험해보기`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`학부에서 만든 코드는 localhost에서 돌면 끝이었다. 프로덕션이라는 환경이 어떤 건지 감이 없었다. j-chat은 그걸 체험하는 자리였다.`}),`
`,(0,p.jsx)(t.h2,{children:`역할`}),`
`,(0,p.jsx)(t.p,{children:`전부 혼자. 기획·설계·구현·배포·운영·디버깅·CS(친구가 "안 돼"라고 메시지 보내는 거 받기).`}),`
`,(0,p.jsx)(t.p,{children:`학부 시절 코드와 다른 점:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`학부: 과제 제출 후 끝`}),`
`,(0,p.jsx)(t.li,{children:`j-chat: 매일 사람이 쓰고 있음`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`접근`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`AWS 직접 셋업`}),`: 첫 production에 EC2·VPC·Security Group까지 다 만들면 한 달 걸린다. 학습 가치는 있지만 친구가 못 쓰게 됨.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Firebase`}),`: 너무 마법 같음. 실제로 어떻게 동작하는지 체험할 자리가 안 됨.`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택 — Heroku + MongoDB Atlas`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Heroku에 Node + Express 배포 (무료 dyno)`}),`
`,(0,p.jsx)(t.li,{children:`MongoDB Atlas free tier`}),`
`,(0,p.jsx)(t.li,{children:`WebSocket은 Socket.io`}),`
`,(0,p.jsx)(t.li,{children:`React는 Vercel에 frontend 분리 배포`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`선택 이유`}),`: 인프라가 추상화돼 있어서 한 주에 배포 가능. 단 추상화 안에서 무슨 일이 일어나는지는 체험 가능 (env var, build pipeline, log, DB connection).`]}),`
`,(0,p.jsx)(t.h3,{children:`Phase`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Week 1: 로컬에서 채팅 동작`}),`
`,(0,p.jsx)(t.li,{children:`Week 2: Heroku 배포 + MongoDB Atlas 연결`}),`
`,(0,p.jsx)(t.li,{children:`Week 3: Socket.io reconnection 처리`}),`
`,(0,p.jsx)(t.li,{children:`Week 4: 친구 10명에게 공유, 운영 시작`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`결과`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`운영 데이터`}),` (3개월간):`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`사용자: 친구 10명 + 본인`}),`
`,(0,p.jsx)(t.li,{children:`메시지: 약 3,000개`}),`
`,(0,p.jsx)(t.li,{children:`다운타임: 6번 (대부분 Heroku free dyno sleep)`}),`
`,(0,p.jsx)(t.li,{children:`버그 리포트: 12건`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`기술 산출물`}),`:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`WebSocket 기반 실시간 채팅`}),`
`,(0,p.jsx)(t.li,{children:`메시지 영속화 (MongoDB)`}),`
`,(0,p.jsx)(t.li,{children:`reconnection 처리`}),`
`,(0,p.jsx)(t.li,{children:`채팅방 join/leave`}),`
`,(0,p.jsx)(t.li,{children:`간단한 닉네임 시스템 (로그인 X)`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsx)(t.h3,{children:`배운 것 1 — 코드를 쓰는 시간 vs 디버깅 시간`}),`
`,(0,p.jsx)(t.p,{children:`학부 코드는 작성 80% / 디버깅 20%였다. j-chat은 작성 30% / 디버깅 70%였다.`}),`
`,(0,p.jsx)(t.p,{children:`같은 코드를 작성하는데 디버깅에 압도적으로 시간이 더 든다. 이유는:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`환경이 다른 곳에서 돌아서 (localhost vs Heroku)`}),`
`,(0,p.jsx)(t.li,{children:`외부 의존(MongoDB Atlas)이 가끔 끊김`}),`
`,(0,p.jsx)(t.li,{children:`사용자가 예측 못 한 입력을 함`}),`
`,(0,p.jsx)(t.li,{children:`여러 사용자가 동시에 사용하면 race condition`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`학부에서는 본인 입력만 다뤘다. 프로덕션은 `,(0,p.jsx)(t.strong,{children:`본인 예측 밖의 입력 + 본인 환경 밖의 인프라`}),`가 변수다.`]}),`
`,(0,p.jsx)(t.h3,{children:`배운 것 2 — log의 가치`}),`
`,(0,p.jsx)(t.p,{children:`처음 운영 시작했을 때 log를 거의 안 찍었다. "에러가 나면 보이겠지" 같은 안일함.`}),`
`,(0,p.jsx)(t.p,{children:`3주 후 친구가 "메시지가 안 보낸 사람한테도 가는 것 같다"는 버그를 리포트. 재현이 안 됨. 로그가 없어서 원인 파악 불가.`}),`
`,(0,p.jsxs)(t.p,{children:[`그때 log를 모든 socket event마다 찍기 시작했다. 그러자 다음 비슷한 버그는 1시간 안에 원인 파악. log는 `,(0,p.jsx)(t.strong,{children:`사후 진단의 유일한 자산`}),`이다.`]}),`
`,(0,p.jsx)(t.p,{children:`지금 회사 코드에서 winston·structured logging을 자유롭게 쓰는 직관은 그때부터 시작됐다.`}),`
`,(0,p.jsx)(t.h3,{children:`배운 것 3 — env var의 무거움`}),`
`,(0,p.jsxs)(t.p,{children:[`학부 코드는 `,(0,p.jsx)(t.code,{children:`const DB = 'mongodb://localhost:27017'`}),`였다. j-chat은 `,(0,p.jsx)(t.code,{children:`process.env.MONGODB_URI`}),`였다. 한 줄 차이지만 운영 의미가 다르다.`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`.env`}),` 파일이 .gitignore에 있어야 함`]}),`
`,(0,p.jsx)(t.li,{children:`Heroku dashboard에 별도로 env 설정`}),`
`,(0,p.jsx)(t.li,{children:`로컬 / staging / production이 다른 값`}),`
`,(0,p.jsx)(t.li,{children:`env var 누락 시 어떻게 fallback하는가`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`env var 한 번 잘못 설정해서 DB가 안 연결돼 본 후로, `,(0,p.jsx)(t.strong,{children:`boundary에서 env 검증`}),`이 첫 번째 코드가 됐다. zod로 env schema 검증하는 패턴은 j-chat의 잘못 설정 사고에서 시작됐다.`]}),`
`,(0,p.jsx)(t.h3,{children:`배운 것 4 — 사용자는 본인이 예측 못 한 짓을 한다`}),`
`,(0,p.jsx)(t.p,{children:`본인이 만든 시나리오: "메시지 보내기 → 받기."`}),`
`,(0,p.jsx)(t.p,{children:`친구들이 실제로 한 것:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`같은 채팅방 같은 닉네임으로 두 명 입장 (race)`}),`
`,(0,p.jsx)(t.li,{children:`빈 메시지 보내기`}),`
`,(0,p.jsx)(t.li,{children:`매우 긴 메시지 보내기 (10,000자+)`}),`
`,(0,p.jsx)(t.li,{children:`채팅 도중 브라우저 새로고침`}),`
`,(0,p.jsx)(t.li,{children:`두 탭에서 동시에 열기`}),`
`,(0,p.jsx)(t.li,{children:`모바일과 데스크톱에서 동시에`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`전부 본인이 예측 못 한 입력이었다. j-chat은 이걸 다 처리하기 위해 시간의 절반을 썼다. 그래서 `,(0,p.jsx)(t.strong,{children:`edge case는 추측이 아니라 사용자가 가르친다`}),`는 직관이 생겼다.`]}),`
`,(0,p.jsx)(t.h3,{children:`배운 것 5 — Heroku free dyno sleep의 진짜 의미`}),`
`,(0,p.jsx)(t.p,{children:`Heroku free tier dyno는 30분 idle하면 sleep한다. 다시 접속하면 콜드 스타트(약 10-15초). 첫 사용자가 항상 "안 돼"라고 한다.`}),`
`,(0,p.jsxs)(t.p,{children:[`이게 단순 무료 정책이 아니라 `,(0,p.jsx)(t.strong,{children:`production의 cold start 일반 문제`}),`다. AWS Lambda·Cloud Run·Vercel serverless 다 같은 문제를 가진다.`]}),`
`,(0,p.jsx)(t.p,{children:`j-chat에서는 무료라 그대로 뒀다. 회사 코드에서는 cold start 회피(min instance·warm-up cron)가 첫 production 작업이 됐다. j-chat이 그 문제를 미리 만나게 해줬다.`}),`
`,(0,p.jsx)(t.h2,{children:`지금이라면 다르게 할 점`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`monitoring 처음부터`}),`: free tier여도 UptimeRobot 같은 거 붙이기. "안 돼" 보고를 친구가 아니라 시스템이 알려주게.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`graceful shutdown`}),`: SIGTERM 처리 안 하면 in-flight 메시지가 사라진다. 사이드 프로젝트라도 graceful shutdown.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`typescript 처음부터`}),`: JS로 시작한 j-chat은 6개월 후 리팩토링 비용이 컸다. 처음부터 TS면 그 비용 회피.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`테스트 0에서 일부라도`}),`: socket reconnection 같은 핵심 로직만이라도 단위 테스트.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`error tracking`}),`: Sentry 무료 plan이라도. log + error tracker는 다르다.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`전이된 인사이트`}),`
`,(0,p.jsxs)(t.p,{children:[`j-chat 한 사이드 프로젝트가 `,(0,p.jsx)(t.strong,{children:`회사 코드의 무의식적 baseline`}),`을 만들었다. log 어디에 찍을지, env var 어떻게 검증할지, edge case 어떻게 다룰지, cold start 어떻게 회피할지. 모든 기본기가 j-chat에서 한 번 실패해본 후 회사로 옮겨졌다.`]}),`
`,(0,p.jsxs)(t.p,{children:[`학부에서 회사로 가는 사이의 사이드 프로젝트가 `,(0,p.jsx)(t.strong,{children:`production의 baseline을 미리 체험하는 자리`}),`다. 회사에 가서 처음 production을 만나면 그 학습 곡선을 회사 코드에서 부담해야 한다. 사이드 프로젝트에서 미리 부담하면 회사에서는 다음 단계를 다룰 수 있다.`]}),`
`,(0,p.jsx)(t.h2,{children:`핵심`}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`학부 코드와 프로덕션 코드의 거리는 한 줄로 요약되지 않는다. `,(0,p.jsx)(t.strong,{children:`log·env·edge case·cold start·monitoring`}),` — 학부에서 안 만져본 5가지를 미리 사이드 프로젝트에서 부딪혀본 게, 첫 회사에서 다음 단계로 갈 수 있게 한 자리였다.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`j-chat 자체는 지금 archive다. 친구들은 더 이상 안 쓴다. 그런데 j-chat이 가르친 5가지는 지금 회사 코드에 매일 적용된다. `,(0,p.jsx)(t.strong,{children:`레포는 archive하되 인사이트는 살아있다`}),`는 게 정확히 이 케이스다.`]}),`
`,(0,p.jsx)(t.p,{children:`레포: 본인 GitHub 프로필 (archived)`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),`, `,(0,p.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),`, `,(0,p.jsx)(t.a,{href:`/notes/graceful-shutdown`,children:`/notes/graceful-shutdown`}),`, `,(0,p.jsx)(t.a,{href:`/notes/small-deploy-reread`,children:`/notes/small-deploy-reread`})]})]})}function re(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(B,{...e})}):B(e)}var ie=e({default:()=>H,frontmatter:()=>ae}),ae={title:`MDX + Vite 콘텐츠 파이프라인 — 파일 추가만으로 사이트가 확장`,status:`Live`,category:`builder-log`,role:`빌드 시스템·콘텐츠 아키텍처·라우팅 설계`,period:2026.05,summary:`콘텐츠 한 개 = MDX 파일 한 개. import.meta.glob으로 자동 인덱싱. 컴포넌트/라우팅 수정 없이 새 글이 라우트에 등장하는 정적 사이트 베이스.`,date:`2026-05-19`,tags:[`frontend`,`mdx`,`vite`,`content-architecture`,`react`]};function V(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`6년 전 단일 LandingPage 구조. 콘텐츠 추가 = 컴포넌트 수정 = JSX/CSS 변경. 매번 코드 수정해야 글 하나 올림. 시간 비용 ↑ + 글쓰기 진입 장벽 ↑.`}),`
`,(0,p.jsx)(t.p,{children:`기존 SaaS 블로그 솔루션은 본인 정체성을 못 살리고, Next.js 같은 SSG는 GitHub Pages에서 빌드 복잡. 가볍게 가야 했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`옵션 비교`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`옵션`}),(0,p.jsx)(t.th,{children:`빌드 복잡도`}),(0,p.jsx)(t.th,{children:`콘텐츠 추가 부담`}),(0,p.jsx)(t.th,{children:`GitHub Pages 호환`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Notion + Headless`}),(0,p.jsx)(t.td,{children:`낮음`}),(0,p.jsx)(t.td,{children:`낮음`}),(0,p.jsx)(t.td,{children:`어려움`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Next.js SSG`}),(0,p.jsx)(t.td,{children:`높음`}),(0,p.jsx)(t.td,{children:`낮음`}),(0,p.jsx)(t.td,{children:`가능`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Vite + MDX`}),(0,p.jsx)(t.td,{children:`낮음`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`매우 낮음`})}),(0,p.jsx)(t.td,{children:`자연`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Astro`}),(0,p.jsx)(t.td,{children:`중간`}),(0,p.jsx)(t.td,{children:`낮음`}),(0,p.jsx)(t.td,{children:`자연`})]})]})]}),`
`,(0,p.jsx)(t.h3,{children:`채택: Vite 8 + @mdx-js/rollup + remark plugins`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`콘텐츠 = MDX 파일 + frontmatter`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`import.meta.glob('../content/notes/*.mdx', { eager: true })`}),`로 자동 인덱싱`]}),`
`,(0,p.jsxs)(t.li,{children:[`frontmatter `,(0,p.jsx)(t.code,{children:`name: 'frontmatter'`}),`로 export 자동 변환`]}),`
`,(0,p.jsx)(t.li,{children:`BrowserRouter + 13 라우트, 404.html SPA fallback으로 GitHub Pages 라우팅`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{children:`src/content/
├── cases/      *.mdx (frontmatter: status·role·period·summary·date·tags)
├── notes/      *.mdx (growth·topics·plantedAt·lastTendedAt)
├── essays/     *.mdx (date·summary·readingTime·status)
└── logs/       *.mdx (date·type·title·summary)

src/lib/content.js: import.meta.glob → getAllCases·getNote·getAllLogs 헬퍼
`})}),`
`,(0,p.jsx)(t.p,{children:`콘텐츠 추가 워크플로우:`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`src/content/notes/new-note.mdx`}),` 생성`]}),`
`,(0,p.jsx)(t.li,{children:`frontmatter 작성`}),`
`,(0,p.jsx)(t.li,{children:`본문 markdown + 필요 시 React 컴포넌트 임베드`}),`
`,(0,p.jsx)(t.li,{children:`끝. 라우팅·인덱스 수정 0건.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`오늘 세션 한 번에 콘텐츠 17개+ 추가 (Logs 6·Notes 11·Essays 4·Cases 7) — 빌드 시 자동 인덱싱`}),`
`,(0,p.jsx)(t.li,{children:`빌드 시간 ~500ms (콘텐츠 30개+ 환경에서도)`}),`
`,(0,p.jsx)(t.li,{children:`본문에 React 컴포넌트 임베드 가능 — 차트·인터랙티브 도식 향후 확장`}),`
`,(0,p.jsx)(t.li,{children:`frontmatter 스키마 표준화로 검색·정렬·필터 자동`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`한계 / 다음 보강`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`콘텐츠 1000+ 시 빌드 타임 증가 → 그 시점에 Astro 또는 vite-ssg`}),`
`,(0,p.jsx)(t.li,{children:`HMR에서 frontmatter 변경 시 stale cache 가끔 — 페이지 새로고침`}),`
`,(0,p.jsx)(t.li,{children:`MDX 본문에 컴포넌트 너무 많으면 글쓰기 부담 → 재사용 컴포넌트 5-7개로 한정`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`콘텐츠 = 파일`}),` 이 패턴이 가장 큰 가치. 글쓰기 진입 장벽이 "마크다운 + frontmatter"로 줄어드니 사이트가 진짜로 자란다. 인프라가 콘텐츠 작성 자체를 권유하는 구조.`]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),`, `,(0,p.jsx)(t.a,{href:`/notes/github-pages-spa-fallback`,children:`/notes/github-pages-spa-fallback`})]})]})}function H(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(V,{...e})}):V(e)}var U=e({default:()=>K,frontmatter:()=>W}),W={title:`모바일 최적화 — iOS HIG·viewport·접근성을 한 사이클에`,status:`Live`,category:`builder-log`,role:`디자인·반응형 구현·접근성·iOS Safari 디테일`,period:2026.05,summary:`iPhone 15(393px)에서 GNB가 viewport 초과한 단편 이슈로 시작. 3 페르소나 × 8축 quality-gate를 3 사이클 돌려 평균 2.75 → 4.75 통과. iOS HIG 44×44, viewport-fit, 100dvh 등 종합.`,date:`2026-05-19`,tags:[`mobile`,`responsive`,`ios`,`accessibility`]};function G(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`데스크탑에서 디자인 통과 후 사용자가 보고:`}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsx)(t.p,{children:`"아이폰 15로 접속하니까 상단 GNB가 화면 너비를 넘어간다."`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`GNB 한 영역만 단편 수정으로 끝낼 수 있었지만, 그러면 다른 모바일 이슈가 누적될 거였다. 종합 점검이 필요했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`GNB만 햄버거 메뉴로 수정 후 종료`}),`: 다른 영역 잠재 이슈 누락`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`모바일 전면 리디자인`}),`: 본질 문제는 GNB·터치·접근성 등 디테일 누락`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.strong,{children:`3 페르소나 (디자이너·기획자·개발자) × 8축 rubric quality-gate`})}),`
`,(0,p.jsx)(t.li,{children:`평균 4.5/5 + 모든 항목 ≥ 4 통과까지 사이클`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`사이클 결과`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`항목`}),(0,p.jsx)(t.th,{children:`C1`}),(0,p.jsx)(t.th,{children:`C2`}),(0,p.jsx)(t.th,{children:`C3`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Viewport overflow (BLOCKING)`}),(0,p.jsx)(t.td,{children:`3.5`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`터치 타겟`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`타이포·여백`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 우선순위`}),(0,p.jsx)(t.td,{children:`2.5`}),(0,p.jsx)(t.td,{children:`3.5`}),(0,p.jsx)(t.td,{children:`4`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`인터랙션 (모바일)`}),(0,p.jsx)(t.td,{children:`2`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`반응형 일관성`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`4`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`iOS Safari 특수성`}),(0,p.jsx)(t.td,{children:`2`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`접근성`}),(0,p.jsx)(t.td,{children:`3`}),(0,p.jsx)(t.td,{children:`5`}),(0,p.jsx)(t.td,{children:`5`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`평균 2.75 → 4.75/5 PASS`}),` (모든 항목 ≥4)`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.h3,{children:`iOS Safari 패키지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`viewport-fit=cover`}),` + `,(0,p.jsx)(t.code,{children:`theme-color`}),` light/dark meta`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`safe-area-inset`}),` env() (.site-nav top, .site-footer bottom)`]}),`
`,(0,p.jsx)(t.li,{children:`100vh → 100dvh 일괄 (body, main, modal-card)`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`-webkit-tap-highlight-color: transparent`}),` 글로벌`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`-webkit-backdrop-filter`}),` 폴백`]}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.code,{children:`-webkit-text-size-adjust: 100%`})}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`터치 타겟 HIG 44×44`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`.icon-button`}),` 38 → 44, `,(0,p.jsx)(t.code,{children:`.search-trigger`}),` 38 → 44, `,(0,p.jsx)(t.code,{children:`.brand`}),` 42 → 44, `,(0,p.jsx)(t.code,{children:`.button`}),` 42 → 44`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`.see-all-link`}),` 모바일 min-height 44`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`인터랙션·접근성`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`CommandPalette input mobile attrs (inputMode·autoCorrect·autoCapitalize·enterKeyHint)`}),`
`,(0,p.jsx)(t.li,{children:`3 모달에 previouslyFocused 캐시 + 닫힘 시 trigger 복귀`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`inert 패턴`}),` (focus trap 대체) — modal 열림 시 background subtree 비활성화`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`:focus-visible`}),` 글로벌 outline + `,(0,p.jsx)(t.code,{children:`prefers-reduced-motion`}),` 가드`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`@media (hover: none)`}),` 카드 sticky hover 방지`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`콘텐츠 우선순위`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`모바일에서 `,(0,p.jsx)(t.code,{children:`.profile-panel { display: none }`}),` (currentFocus·heroProof 중복 해소)`]}),`
`,(0,p.jsx)(t.li,{children:`hero padding 56/48 축소, hero-actions row + flex-wrap`}),`
`,(0,p.jsxs)(t.li,{children:[`LogsPage 본문 `,(0,p.jsx)(t.code,{children:`<details><summary>`}),` 토글`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`iPhone 15 / SE 375 / Pro Max 430 모두 viewport overflow 0건`}),`
`,(0,p.jsx)(t.li,{children:`헤더 핵심 액션 3개 (검색·테마·메뉴) 모두 HIG 44×44 준수 → 미스 터치 감소`}),`
`,(0,p.jsx)(t.li,{children:`모바일 첫 viewport에 hero copy + CTA + visitor paths 도달`}),`
`,(0,p.jsx)(t.li,{children:`WCAG 2.2 1.4.13/2.4.7/2.4.11 + APG dialog 패턴 충족`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsx)(t.p,{children:`평균이 아니라 최저 항목이 통과를 결정. iOS Safari 특수성 2점이 핵심 BLOCKING이었음. viewport-fit·safe-area·100dvh 같은 작은 메타데이터가 모바일 신뢰감의 80%.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/ios-hig-touch-targets`,children:`/notes/ios-hig-touch-targets`}),`, `,(0,p.jsx)(t.a,{href:`/notes/css-color-scheme-native`,children:`/notes/css-color-scheme-native`})]})]})}function K(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(G,{...e})}):G(e)}var q=e({default:()=>se,frontmatter:()=>oe}),oe={title:`개인 GitHub 레포 인터뷰 — 6년 누적 흔적을 9편 노트로 자산화`,status:`Live`,category:`product`,role:`기획·인터뷰 설계·자산화`,period:2026.05,summary:`6년치 30+ 개인 GitHub 레포를 그대로 두지도 지우지도 않고, 3개의 대표 레포에 각 3편씩 노트를 추출하는 인터뷰 형식으로 자산화했다. 레포 자체보다 추출된 노트가 더 큰 자산이 됐다.`,date:`2026-05-21`,tags:[`side-project`,`content`,`learning`,`asset`,`github`]};function J(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`GitHub 프로필에 6년치 학습 레포가 30+개 쌓여있다. `,(0,p.jsx)(t.code,{children:`react-tetris`}),`(2020), `,(0,p.jsx)(t.code,{children:`mern-stack-boilerplate`}),`(2021), `,(0,p.jsx)(t.code,{children:`graphql-apollo`}),`(2022), `,(0,p.jsx)(t.code,{children:`mfp`}),`(2023), 학부 시절 `,(0,p.jsx)(t.code,{children:`bptree`}),`·`,(0,p.jsx)(t.code,{children:`myshell`}),`·`,(0,p.jsx)(t.code,{children:`steganography`}),`까지.`]}),`
`,(0,p.jsx)(t.p,{children:`매번 같은 질문을 받는다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`"이거 왜 만든 거야?" (의도)`}),`
`,(0,p.jsx)(t.li,{children:`"여기서 뭘 배웠어?" (학습)`}),`
`,(0,p.jsx)(t.li,{children:`"지금 일에 어떻게 영향 줘?" (전이)`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`답은 머릿속에 있는데 `,(0,p.jsx)(t.strong,{children:`레포 자체에는 없다`}),`. README에 적혀 있어봤자 한두 줄. 6년 전 자기가 무슨 의도로 만들었는지는 6년 후의 본인만 안다.`]}),`
`,(0,p.jsx)(t.p,{children:`이 답을 어딘가에 자산화하지 않으면 매번 같은 답을 새로 만들어야 한다. 게다가 6년이 더 지나면 그 답조차 기억 안 난다.`}),`
`,(0,p.jsx)(t.h2,{children:`역할`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`인터뷰 포맷 설계`}),`: 레포 1개당 어떤 질문 3개를 던질지`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`3개 대표 레포 선정`}),`: 30+ 중에서 어떤 게 대표성 있는지`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`각 레포 × 3편 = 9편 노트 작성`}),`: 인터뷰 답변을 노트로 변환`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레포와 사이트 cross-link`}),`: 양방향 연결로 발견 가능성 높이기`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`접근`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`전부 archive`}),`: 30+ 레포를 전부 archive하면 본인 흔적이 사라지는 느낌. 학습 가치 0이 된다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`그대로 두기`}),`: 6년 누적이 노이즈가 된다. 최근 작업이 묻힌다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`README 보강`}),`: README 보강은 레포 안에 갇힌다. 사이트에서 cross-link 불가, 검색 불가, 다른 글에서 인용 불가.`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택 — 인터뷰 형식의 자산화`}),`
`,(0,p.jsx)(t.p,{children:`대표 레포 3개를 선정하고, 각 레포에 대해 3개의 노트로 분리한다.`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`대표 레포 선정 기준`}),`:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`본인 capability를 가장 잘 보여주는 것 (다른 채용 도메인에서도 인용 가능)`}),`
`,(0,p.jsx)(t.li,{children:`학부/주니어/시니어 시점이 골고루 (시간 다양성)`}),`
`,(0,p.jsx)(t.li,{children:`토픽이 겹치지 않는 것 (저장소·학습·사이드 프로젝트 등 각각)`}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`인터뷰 3개 질문`}),`:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Q1. `,(0,p.jsx)(t.strong,{children:`본질`}),`: 이 레포가 무엇이고 왜 만들었나`]}),`
`,(0,p.jsxs)(t.li,{children:[`Q2. `,(0,p.jsx)(t.strong,{children:`학습`}),`: 여기서 뭘 배웠고 지금에 어떻게 작동하나`]}),`
`,(0,p.jsxs)(t.li,{children:[`Q3. `,(0,p.jsx)(t.strong,{children:`함정`}),`: 다시 한다면 무엇을 다르게 할까`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`각 질문이 노트 1편이 된다. 1레포 × 3질문 = 3편. 3레포 × 3편 = 9편.`}),`
`,(0,p.jsx)(t.h3,{children:`왜 인터뷰 형식인가`}),`
`,(0,p.jsxs)(t.p,{children:[`레포에 대한 글을 그냥 쓰면 "프로젝트 소개"가 된다. 인터뷰 형식은 `,(0,p.jsx)(t.strong,{children:`답이 본인 안에서 나오게`}),` 만든다.`]}),`
`,(0,p.jsx)(t.p,{children:`질문이 정해져 있어서 매번 같은 구조로 답한다. 9편이 형식이 통일된다. 한 레포만 봐도 다른 레포의 답이 어떻게 생겼을지 예측 가능하다 — 이게 자산의 신호다.`}),`
`,(0,p.jsx)(t.h2,{children:`결과`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`9편 노트 추가`}),` (5/21 커밋 `,(0,p.jsx)(t.code,{children:`ec3a9bd`}),`)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`30+ 레포 → 3개에 집중`}),`: 나머지는 archive/private 분류 작업 (별도 노트로 `,(0,p.jsx)(t.code,{children:`archive-or-keep-old-repo`}),`)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`cross-link 활성`}),`: 9편 노트가 기존 50편 노트와 자연스럽게 연결됨 (`,(0,p.jsx)(t.code,{children:`low-level-fundamentals-cpp`}),`가 `,(0,p.jsx)(t.code,{children:`learning-repo-sandbox-value`}),`와 `,(0,p.jsx)(t.code,{children:`archive-or-keep-old-repo`}),`로 연결)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레포 자체의 가치보다 추출된 노트의 가치가 더 컸음`}),`: 레포는 정적, 노트는 다른 글에서 인용·검색·재맥락화 가능`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`잘된 점`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`인터뷰 3 질문이 9편의 일관된 구조를 만들었다. 노트 추가 작업을 기계적으로 진행할 수 있었다.`}),`
`,(0,p.jsx)(t.li,{children:`함정 섹션이 가장 가치 컸다. "다시 한다면" 질문은 본인이 그 토픽에서 정말 배운 게 뭔지 드러낸다.`}),`
`,(0,p.jsx)(t.li,{children:`3개로 좁힌 게 효과적. 30개 다 다루려고 했으면 한 달도 부족했을 것.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`다시 한다면`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`레포 선정 기준에 외부 신호 추가`}),`: fork·star·다른 사이트 인용이 있는 레포는 자동으로 1순위. 본인 직관만으로 3개 뽑으면 편향.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`인터뷰를 페어로`}),`: 본인이 본인에게 묻는 것보다, 다른 사람(또는 LLM 페르소나)이 묻는 게 더 다양한 답을 끌어낸다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`함정 섹션을 라운드 2에 두기`}),`: 함정은 한 번 쓰고 나서 며칠 후에 더 잘 보인다. 한 세션에 다 채우려고 하지 말고 시드만 적어두고 다음 라운드.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`전이된 인사이트`})}),`
`,(0,p.jsxs)(t.p,{children:[`이 인터뷰 형식이 `,(0,p.jsx)(t.strong,{children:`개인 레포 외의 자산에도 적용`}),`된다.`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`회사 프로젝트 → 같은 3 질문으로 회고 (단, public 안전성 검토 필요)`}),`
`,(0,p.jsx)(t.li,{children:`사이드 프로젝트 → 다른 사람이 본인 프로젝트 살펴볼 때 묻는 첫 3 질문이 거의 같다`}),`
`,(0,p.jsx)(t.li,{children:`학부 과목 → 6년 전 학부 과목조차 같은 3 질문으로 자산화 가능`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`핵심`})}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`6년 누적 레포는 archive vs delete의 2분법이 아니다. `,(0,p.jsx)(t.strong,{children:`레포는 archive하되 인사이트는 노트로 추출`}),`하는 3분법이 답이다. 레포 자체보다 추출된 흔적이 자산이다.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`레포: 본인 GitHub 프로필 (대표 3개 + 9편 노트 cross-link)`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),`, `,(0,p.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),`, `,(0,p.jsx)(t.a,{href:`/notes/low-level-fundamentals-cpp`,children:`/notes/low-level-fundamentals-cpp`}),`, `,(0,p.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`})]})]})}function se(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(J,{...e})}):J(e)}var ce=e({default:()=>ue,frontmatter:()=>le}),le={title:`personas — 4 페르소나 토론으로 자동화 PoC 옵션 결정`,status:`Live`,category:`builder-log`,role:`의사결정 시스템·트레이드오프 분석·페르소나 설계`,period:2026.05,summary:`옵션 공간이 큰 결정은 단일 사고로 한계. 4 페르소나 병렬 토론(SWE·법무·콘텐츠·운영) + 트레이드오프 모델(One-way Door, Essential Complexity 등) 적용으로 자동화 PoC 4축 결정.`,date:`2026-05-19`,tags:[`decision-making`,`workflow`,`ai`,`tradeoff`]};function Y(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`자동화 시스템 PoC 설계에 4축 × 4 옵션 = 16개 조합 옵션 공간. 단일 사고로 모든 트레이드오프를 보지 못함. 보안 검토자 시각 + 운영 사용자 시각 + 콘텐츠 전략가 시각이 동시에 필요했다.`}),`
`,(0,p.jsx)(t.p,{children:`또 같은 모델(Claude)이 4축을 한 번에 답하면 confirmation bias. 시각 분리가 필요.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`단일 LLM에 옵션 비교 요청`}),`: 같은 시야, bias 누적`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사용자 직접 토론`}),`: 시간 부담 + 페르소나 충실도 ↓`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`외부 자문 인터뷰`}),`: 즉시성 ↓`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`4 페르소나를 별도 Agent로 병렬 스폰`}),`: 시야 강제 분리`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`트레이드오프 모델 사전 적용`}),` (One-way/Two-way Door, Essential/Accidental Complexity, Innovation/Stability)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`JSON 출력 표준화`}),`: 각 페르소나가 같은 형식으로 답해 비교 가능`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.h3,{children:`4 페르소나 토론 결과`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`시니어 자동화 SWE`}),`: TRIGGER D, L1, B, D. Hidden complexity = Codex transcript 정규화`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`개인정보·보안 검토자`}),`: D, L1, D, A. "L3 + 자동 redaction은 one-way door 절대 금지"`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`콘텐츠 전략가`}),`: C, L1, B, B. "자동화는 글 더 쓰게 하는 게 아니라 쓸 만한 순간 놓치지 않게 하는 알람"`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`운영 부담 사용자(본인)`}),`: C, L2, B, B. `,(0,p.jsx)(t.strong,{children:`지속률 35%`}),`, `,(0,p.jsx)(t.strong,{children:`"가장 두려운 건 회사 정보 유출 1건"`})]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`충돌 해결 패턴`}),`
`,(0,p.jsx)(t.p,{children:`페르소나 합의가 어려운 축은 강제 합의 X. 그대로 노출 → quality-gate가 객관 측정.`}),`
`,(0,p.jsx)(t.h3,{children:`최종 PLAN`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`TRIGGER: Manual (`,(0,p.jsx)(t.code,{children:`/daily-log`}),`) + 향후 hybrid 어댑터`]}),`
`,(0,p.jsx)(t.li,{children:`AUTOMATION_LEVEL: L1 (만장일치)`}),`
`,(0,p.jsx)(t.li,{children:`DATA: B+D 하이브리드 (.cache + 명시 promote)`}),`
`,(0,p.jsx)(t.li,{children:`SECURITY: D 구조 + A 다중 게이트`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`단일 사고 함정 해소`}),`: 보안 BLOCKING (운영자 본인이 미처 못 본 7개 시나리오) 자동 노출`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`PoC scope 분리 패턴`}),`: v1(시연) + v2(운영) 분리는 페르소나 충돌이 강제로 만든 결론`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`본인 페르소나의 가치`}),`: 외부 페르소나 N명이 못 짚는 지속 가능성 BLOCKING 발견 (가장 솔직한 35%)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`트레이드오프 모델 정착`}),`: 결정 시 매번 "One-way인가 Two-way인가" 자문 자동화`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`페르소나 토론의 진짜 가치는 `,(0,p.jsx)(t.strong,{children:`시야의 차이를 강제로 노출`}),`하는 것. 같은 사람이 4역할 다 하면 무의식적으로 한쪽 시야로 수렴한다. Agent 4개로 분리하면 시야가 진짜로 다르다.`]}),`
`,(0,p.jsx)(t.p,{children:`본인 페르소나를 포함하는 게 핵심 — 외부 페르소나가 "기능적 위험"만 보고, 본인은 "지속 가능성"을 본다. 둘 다 필요.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),`, `,(0,p.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),`, `,(0,p.jsx)(t.a,{href:`/essays/self-persona-blocking`,children:`/essays/self-persona-blocking`})]})]})}function ue(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(Y,{...e})}):Y(e)}var de=e({default:()=>fe,frontmatter:()=>X}),X={title:`개인 사이트를 proof-of-work 허브로 리빌드`,status:`Live`,category:`builder-log`,role:`기획·정보 구조·프론트엔드·배포 자동화`,period:2026.05,summary:`6년 전 기술 스택 나열형 포트폴리오를 케이스 스터디 + 디지털 가든 + 빌더 로그가 결합된 다층 사이트로 재설계했습니다.`,date:`2026-05-19`,tags:[`portfolio`,`frontend`,`mdx`]};function Z(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`방문자가 "무슨 기술을 써봤는지"만 보고 떠나는 구조라, 일하는 방식과 판단 근거가 드러나지 않았습니다.
일반 이력서는 항목 나열이라 입체적이지 못하고, 시간순 블로그는 운영 부담이 컸습니다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`버린 선택지`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`기술 스택 그리드를 키우는 방향 — 채용 담당자가 10초 안에 강점을 읽지 못함.`}),`
`,(0,p.jsx)(t.li,{children:`Bruno Simon 같은 풀-인터랙티브 3D 사이트 — 미니멀 톤과 충돌, 운영 비용 큼.`}),`
`,(0,p.jsx)(t.li,{children:`시간순 블로그 — "이번 달은 안 썼네" 같은 부담이 누적됨.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`채택`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Case Study Hub + Digital Garden 하이브리드`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`일반 이력서 항목 + `,(0,p.jsx)(t.code,{children:`/cases`}),` (일하는 방식의 기록) + `,(0,p.jsx)(t.code,{children:`/notes`}),` (자라는 노트) + `,(0,p.jsx)(t.code,{children:`/logs`}),` (작은 작업 기록).`]}),`
`,(0,p.jsx)(t.li,{children:`인터랙티브 톤은 "Living Site" 레벨 — 미니멀 베이스 + 키보드 단축키·검색·테마 토글 같은 정보 인터랙션.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`React 19 + Vite 8 + MDX 파이프라인.`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`react-router-dom v7`}),` 기반 13개 라우트 + 404 fallback.`]}),`
`,(0,p.jsxs)(t.li,{children:[`콘텐츠는 `,(0,p.jsx)(t.code,{children:`src/content/*.mdx`}),` + `,(0,p.jsx)(t.code,{children:`*.json`}),`으로 분리 — 데이터만 추가하면 페이지 확장.`]}),`
`,(0,p.jsxs)(t.li,{children:[`GitHub Pages SPA fallback (`,(0,p.jsx)(t.code,{children:`public/404.html`}),` redirect 패턴) 적용.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{}),(0,p.jsx)(t.th,{children:`이전`}),(0,p.jsx)(t.th,{children:`이후`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 추가`}),(0,p.jsx)(t.td,{children:`코드 수정`}),(0,p.jsx)(t.td,{children:`파일 1개 추가`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`페이지 수`}),(0,p.jsx)(t.td,{children:`1 (단일 SPA)`}),(0,p.jsx)(t.td,{children:`13 (라우팅)`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 형식`}),(0,p.jsx)(t.td,{children:`단일 페이지 텍스트`}),(0,p.jsx)(t.td,{children:`MDX (글 + 컴포넌트 임베드)`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`차별화`}),(0,p.jsx)(t.td,{children:`Traditional Portfolio`}),(0,p.jsx)(t.td,{children:`Case + Garden 하이브리드`})]})]})]}),`
`,(0,p.jsx)(t.h2,{children:`남은 보강 포인트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`글 성숙도 시각화(🌱→🌿→🌳)를 단순 뱃지 이상으로 — 시간이 지나며 색이 진해지는 식.`}),`
`,(0,p.jsx)(t.li,{children:`Cmd+K 글로벌 검색·키보드 단축키(다음 Phase).`}),`
`,(0,p.jsx)(t.li,{children:`다크/세피아 테마 토글(다음 Phase).`}),`
`]})]})}function fe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(Z,{...e})}):Z(e)}var pe=e({default:()=>he,frontmatter:()=>me}),me={title:`Quality-Gate 시스템 — 디자인·모바일·콘텐츠를 같은 루프로 통과시키기`,status:`Live`,category:`builder-log`,role:`워크플로우 설계·페르소나 평가·결정론적 루프`,period:2026.05,summary:`모호한 품질 목표("세련된", "모바일에서 잘 보이는")를 측정 가능 rubric으로 분해하고 페르소나 평가 + 통과 임계로 객관화. 디자인·모바일·콘텐츠 영역에 같은 패턴 5번 적용해 평균 2.75→4.75까지 통과.`,date:`2026-05-19`,tags:[`workflow`,`design-process`,`verification`,`ai`]};function Q(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`"세련된 디자인으로 바꿔줘", "모바일에서 잘 보이게 해줘" 같은 요청은 본질적으로 주관적이다. 사람이 매번 직관으로 평가하면 사이클이 사람 속도에 묶이고, 의사결정 근거도 흐릿하게 누적된다.`}),`
`,(0,p.jsx)(t.p,{children:`직관을 결정론적 평가로 바꿀 수 있는가?`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`단일 평가자에게 전체 점수 받기`}),`: confirmation bias + 영역 누락 위험`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`체크리스트로 끝내기`}),`: 가중치·BLOCKING·재평가 사이클 부재`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사람이 매번 직접 평가`}),`: 사람 속도, 일관성 ↓`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.strong,{children:`rubric 4-7축 분해 + 페르소나 N명 영역 분담 + 평균 4.5/5 임계 + BLOCKING 표시 + max 3 사이클`})}),`
`,(0,p.jsx)(t.li,{children:`각 영역마다 같은 패턴 재사용`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.p,{children:`5번의 quality-gate 사이클을 같은 코드 베이스에 같은 패턴으로 적용:`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`영역`}),(0,p.jsx)(t.th,{children:`rubric 차원`}),(0,p.jsx)(t.th,{children:`페르소나`}),(0,p.jsx)(t.th,{children:`C1 → C3`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`디자인 톤`}),(0,p.jsx)(t.td,{children:`9축`}),(0,p.jsx)(t.td,{children:`디자이너·기획자·채용·엔지니어`}),(0,p.jsx)(t.td,{children:`3.28 → 4.44`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`모바일 최적화`}),(0,p.jsx)(t.td,{children:`8축`}),(0,p.jsx)(t.td,{children:`디자이너·기획자·개발자`}),(0,p.jsx)(t.td,{children:`2.75 → 4.75`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 시드 (11편)`}),(0,p.jsx)(t.td,{children:`12축`}),(0,p.jsx)(t.td,{children:`라이터·전략가·검증자`}),(0,p.jsx)(t.td,{children:`4.04 → 4.59`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`자동화 PoC PLAN`}),(0,p.jsx)(t.td,{children:`6축`}),(0,p.jsx)(t.td,{children:`SRE·법무·운영 사용자`}),(0,p.jsx)(t.td,{children:`2.5 → v1/v2 분리 후 4.33`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Essay 4편`}),(0,p.jsx)(t.td,{children:`5축`}),(0,p.jsx)(t.td,{children:`라이터·전략가·검증자`}),(0,p.jsx)(t.td,{children:`3.58 → 4.66`})]})]})]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`누적 평균 상승`}),`: 사이클 시작 평균 2.5~4.0대 → 통과 4.5+`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`객관화된 결정 근거`}),`: 각 점수에 "왜 이 점수인지" 코드 라인 인용 첨부`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`재사용 가능한 패턴`}),`: 같은 rubric 구조 5번 재사용 → 영역 무관 통일 워크플로우`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`숨은 BLOCKING 발견`}),`: 평균이 통과해도 한 항목이 3점이면 사용자 시각의 약점 → 통과 임계가 "모든 항목 ≥4" 조건을 포함하게 된 결정적 이유`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`평균이 아니라 `,(0,p.jsx)(t.strong,{children:`최저 항목`}),`이 통과를 결정한다는 게 가장 큰 깨달음. 한 항목이 3점이면 사용자가 그 한 항목에서 멈춘다. 평균은 사람의 시각이 아니라 시스템의 시각이다.`]}),`
`,(0,p.jsx)(t.p,{children:`다음 보강: 페르소나 fatigue (같은 사람이 사이클 연속 평가 시 confirmation bias) 방지 메커니즘 — 페르소나 풀 rotation 고려.`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`})]})]})}function he(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(Q,{...e})}):Q(e)}var ge=e({default:()=>ve,frontmatter:()=>_e}),_e={title:`팀 온보딩 문서 시스템 — 첫 한 달이 다음 한 해를 결정한다`,status:`Live`,category:`product`,role:`설계·운영·매뉴얼화`,period:`2025-2026`,summary:`신규 팀원 온보딩이 매번 같은 설명의 반복이었다. 그래서 문서 시스템 5단(Day-1 / Week-1 / Month-1 / Quarter-1 / 정기 갱신)을 만들었다. 첫 한 달의 정보 밀도가 다음 한 해의 기여 곡선을 결정한다.`,date:`2026-05-28`,tags:[`collaboration`,`onboarding`,`documentation`,`team`,`system`]};function $(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`신규 팀원이 들어오면 같은 정보를 매번 새로 전달한다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`"우리 코드베이스 구조는..."`}),`
`,(0,p.jsx)(t.li,{children:`"배포는 이렇게 하고..."`}),`
`,(0,p.jsx)(t.li,{children:`"이 channel은 X 용도고..."`}),`
`,(0,p.jsx)(t.li,{children:`"이 회의는 누가 참석하고..."`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`같은 정보를 입사자마다 N번 전달. 시간 손실 + 전달자 따라 정보 일관성 깨짐 + 신규 팀원이 받는 정보가 무작위.`}),`
`,(0,p.jsx)(t.p,{children:`더 큰 문제는 첫 한 달에 무엇을 모르냐가 다음 한 해의 기여 곡선을 결정한다는 것. 첫 한 달에 안 다듬어진 정보는 그 후로도 잘 안 다듬어진다. 잘못 박힌 모델은 6개월 후에도 영향.`}),`
`,(0,p.jsx)(t.h2,{children:`역할`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`문서 5단 구조 설계`}),`: Day-1 / Week-1 / Month-1 / Quarter-1 / 정기 갱신`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`각 단계의 정보 우선순위 정의`}),`: 무엇을 첫 날에 알아야 하고 무엇을 첫 주에, 첫 달에 알아야 하는지`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`문서 운영 매뉴얼`}),`: 신규 입사자가 들어올 때마다 무엇이 갱신되어야 하는지`]}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.strong,{children:`분기마다 회고 후 문서 갱신`})}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`접근`}),`
`,(0,p.jsx)(t.h3,{children:`버린 선택지`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`단일 거대 onboarding 문서`}),`: 100 페이지짜리 wiki는 신규 팀원이 읽다가 포기. 정보 우선순위가 안 보임.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`사람 1:1 전달`}),`: 일관성 0. 전달자 부담 ↑.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`외부 SaaS (Notion templates 등)`}),`: 회사 specific 정보가 외부 SaaS에 묶이는 게 부담. 자체 wiki + git으로.`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`채택 — 시간 단위 5단 구조`}),`
`,(0,p.jsxs)(t.p,{children:[`각 단계는 `,(0,p.jsx)(t.strong,{children:`그 시점에 알아야 할 최소 필수 정보`}),`만 담는다. 다음 단계에서 알면 되는 정보는 다음 단계로.`]}),`
`,(0,p.jsx)(t.h4,{children:`Day-1 (입사 첫 날)`}),`
`,(0,p.jsx)(t.p,{children:`목표: 첫 날 끝에 "내가 이 팀에 왔구나" 감각 + 다음 날 출근할 의지.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`팀 멤버 사진 + 한 줄 자기 소개 (이름 + 역할)`}),`
`,(0,p.jsx)(t.li,{children:`1주차 일정표 (누구와 언제 만나고 무엇을 하는지)`}),`
`,(0,p.jsx)(t.li,{children:`기본 셋업 체크리스트 (이메일·Slack·git·VPN 5개)`}),`
`,(0,p.jsx)(t.li,{children:`점심·간식·휴게 정보 (소소한 정보)`}),`
`,(0,p.jsx)(t.li,{children:`인사할 채널 (welcome channel)`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`기술 깊이 0. 첫 날엔 사람과 환경.`}),`
`,(0,p.jsx)(t.h4,{children:`Week-1 (첫 주)`}),`
`,(0,p.jsx)(t.p,{children:`목표: 코드를 처음 만지고 작은 PR을 머지.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`코드베이스 high-level 구조 (디렉토리·핵심 모듈 5-10개만)`}),`
`,(0,p.jsx)(t.li,{children:`로컬 개발 환경 셋업 (Day-1에서 끝났어야 하지만 안 됐을 가능성)`}),`
`,(0,p.jsx)(t.li,{children:`첫 PR 후보 (well-defined 작은 작업 3-5개)`}),`
`,(0,p.jsx)(t.li,{children:`1on1 일정 (매니저·sibling·다른 팀)`}),`
`,(0,p.jsx)(t.li,{children:`"우리 팀의 일하는 방식" — 미팅 빈도·async 규칙·코드 리뷰 SLO 등`}),`
`]}),`
`,(0,p.jsx)(t.h4,{children:`Month-1 (첫 달)`}),`
`,(0,p.jsx)(t.p,{children:`목표: 작은 기능 1개를 처음부터 끝까지 (작성·리뷰·머지·배포·운영).`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`배포 프로세스 깊이 (CI/CD·롤백·monitoring)`}),`
`,(0,p.jsx)(t.li,{children:`운영 책임 (oncall·incident response)`}),`
`,(0,p.jsx)(t.li,{children:`비즈니스 컨텍스트 (우리 팀이 회사에서 무엇을 하는지)`}),`
`,(0,p.jsx)(t.li,{children:`도메인 깊이 (광고 산업·user funnel 등)`}),`
`,(0,p.jsx)(t.li,{children:`첫 회고 1on1 (한 달 동안 안 다듬어진 모델 잡기)`}),`
`]}),`
`,(0,p.jsx)(t.h4,{children:`Quarter-1 (첫 분기)`}),`
`,(0,p.jsx)(t.p,{children:`목표: 팀의 정기 작업 흐름에 자연스럽게 참여.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`분기 OKR / planning 흐름`}),`
`,(0,p.jsx)(t.li,{children:`다른 팀과의 인터페이스 (디자인·PM·데이터)`}),`
`,(0,p.jsx)(t.li,{children:`회사 wide 정보 (전사 미팅·culture)`}),`
`,(0,p.jsx)(t.li,{children:`시간에 따라 변하는 정보 (분기 우선순위·진행 중인 큰 작업)`}),`
`]}),`
`,(0,p.jsx)(t.h4,{children:`정기 갱신`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`신규 입사자가 들어올 때마다 Day-1/Week-1 문서 한 번 훑고 outdated된 거 수정`}),`
`,(0,p.jsx)(t.li,{children:`분기마다 Month-1/Quarter-1 정보 갱신`}),`
`,(0,p.jsx)(t.li,{children:`분기마다 회고: "지난 신규 팀원이 무엇을 모르고 있었나" 검토`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`결과`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`신규 팀원당 onboarding 자체 소요 시간 약 절반으로 단축 (사람 1:1 전달 → 문서 + 1:1 spot)`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`첫 PR까지 시간`}),` 평균 5-7일 → 2-3일`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`첫 deploy 책임까지 시간`}),` 3개월 → 1.5개월`]}),`
`,(0,p.jsx)(t.li,{children:`전달자 1인 부담 감소`}),`
`,(0,p.jsx)(t.li,{children:`신규 팀원의 정보 일관성 보장`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsx)(t.h3,{children:`잘된 점`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`시간 단위 5단 구조가 정보 우선순위를 자연스럽게 만들었다. "이건 첫 주에 알 필요 없네, Month-1로 보내자"의 분류가 가능.`}),`
`,(0,p.jsx)(t.li,{children:`정기 갱신 메커니즘이 핵심. 문서는 만들고 안 갱신하면 6개월 안에 outdated. 신규 입사자가 들어올 때마다 작은 갱신.`}),`
`,(0,p.jsx)(t.li,{children:`Day-1을 기술 깊이 0으로 만든 게 큰 변화. 첫 날 기술 압박 없이 사람·환경에 적응할 자리.`}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`다시 한다면`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`신규 팀원이 첫 주에 직접 onboarding 문서 수정`}),`: 본인이 헷갈렸던 부분을 직접 수정. 다음 신규 팀원에 도움 + 본인이 문서 운영에 참여한 신호. 이게 정기 갱신의 가장 자연스러운 형태.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`첫 회고 1on1 더 빠르게`}),`: Month-1 끝이 아니라 Week-2에 첫 회고. 잘못 박힌 모델을 일찍 잡으려면 회고가 빨라야 한다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`버디 시스템 명시`}),`: 같은 팀의 senior 한 명을 buddy로 매칭. 매니저보다 자주 묻기 쉬운 자리.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`마이크로 동영상`}),`: 일부 정보는 글보다 5분 동영상이 훨씬 빠름 (예: 배포 프로세스). loom 같은 도구로 짧게.`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{children:`전이된 인사이트`}),`
`,(0,p.jsxs)(t.p,{children:[`이 5단 구조는 `,(0,p.jsx)(t.strong,{children:`개인 학습`}),`에도 적용된다. 새 기술/도구를 배울 때:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Day-1: 일단 hello world 돌리기`}),`
`,(0,p.jsx)(t.li,{children:`Week-1: 작은 기능 1개 만들기`}),`
`,(0,p.jsx)(t.li,{children:`Month-1: 작은 프로젝트 1개 끝내기`}),`
`,(0,p.jsx)(t.li,{children:`Quarter-1: 깊은 부분 (성능·디버깅·아키텍처)`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`학습도 정보 우선순위가 시간에 따라 다르다. Quarter-1 깊이를 Day-1에 시도하면 매몰. 반대도.`}),`
`,(0,p.jsx)(t.h2,{children:`핵심`}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`첫 한 달의 정보 밀도가 다음 한 해의 기여 곡선을 결정한다. `,(0,p.jsx)(t.strong,{children:`시간 단위 5단 구조`}),`(Day-1/Week-1/Month-1/Quarter-1/정기)로 각 시점에 필요한 최소 정보만 담고, 정기 갱신으로 outdated 방지. 단일 거대 문서보다 시간 단위로 분리된 문서가 신규 팀원에게 친화적.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/one-on-one-five-things`,children:`/notes/one-on-one-five-things`}),`, `,(0,p.jsx)(t.a,{href:`/notes/async-pr-review-slo`,children:`/notes/async-pr-review-slo`}),`, `,(0,p.jsx)(t.a,{href:`/notes/code-review-comment-tone`,children:`/notes/code-review-comment-tone`}),`, `,(0,p.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`})]})]})}function ve(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)($,{...e})}):$(e)}export{l as _,q as a,z as c,k as d,T as f,d as g,f as h,ce as i,L as l,_ as m,pe as n,U as o,x as p,de as r,ie as s,ge as t,N as u,c as v,i as y};