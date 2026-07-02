import{n as e,r as t,t as n}from"./rolldown-runtime-QTnfLwEv.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o={},s=a.createContext(o);function c(e){let t=a.useContext(s);return a.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}var u=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),d=n(((e,t)=>{t.exports=u()})),f=e({default:()=>g,frontmatter:()=>m}),p=d(),m={title:`자동화를 만들기 전에, AI에게 먼저 반대하게 만들었다 — personas → quality-gate 체인으로 게이트한 PoC`,status:`Building`,category:`builder-log`,role:`시스템 설계·페르소나 토론·보안 검토 통합`,period:2026.05,summary:`매일 8시간 쌓이는 Claude·Codex 대화를 사이트 콘텐츠로 자동 추출하려다, 내 PoC를 4 페르소나 토론과 quality-gate에 직접 통과시켰다. 평균 2.5/5 FAIL. 게이트가 내 계획을 막아세운 덕에 v1 시연/v2 운영을 분리해 살렸다.`,date:`2026-05-19`,tags:[`automation`,`workflow`,`security`,`design-process`]};function h(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`자동화 스크립트를 짜기 직전에 멈췄다. 매일 8시간씩 Claude·Codex와 나눈 대화에서 쓸 만한 인사이트가 그대로 휘발되는 게 아까웠고, `,(0,p.jsx)(t.code,{children:`~/.claude/projects/`}),`와 `,(0,p.jsx)(t.code,{children:`~/.codex/sessions/`}),`를 뒤지면 사이트 콘텐츠 후보가 매일 나온다는 걸 알고 있었다. 손으로 정리하면 시간 부담, 안 하면 자산 누락. 그러니 매일 그 transcript를 긁어 글 초안까지 뽑는 파이프라인을 만들면 된다 — 여기까진 30분이면 설계가 끝났다.`]}),`
`,(0,p.jsx)(t.p,{children:`문제는 그 다음이었다. 이 파이프라인의 입력은 회사 NDA·credentials가 섞인 내 실제 작업 로그다. "자동 발행"이 한 번이라도 잘못 돌면 유출은 영구적이고 되돌릴 수 없다. 내가 짠 계획이 멀쩡해 보일수록 위험했다 — 만든 사람이 자기 계획의 구멍을 보긴 어려우니까. 그래서 코드를 짜기 전에, AI 워크플로우로 내 계획을 먼저 공격하게 만들기로 했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.p,{children:`설계는 네 갈래로 갈렸다. 트리거를 수동으로 둘지 cron으로 돌릴지, 자동화 수준을 L0(제안만)에서 L3(자동 발행)까지 어디에 둘지, 원본 transcript를 어디서 끌어올지, 보안을 redaction에 맡길지 사람 검토에 맡길지. 혼자 표를 그리니 적을수록 시야가 한쪽으로 쏠렸다 — 편의를 적으면 유출을 잊고, 유출을 적으면 빠른 PoC라는 원래 목적을 잊었다.`}),`
`,(0,p.jsxs)(t.p,{children:[`그래서 두 단계 AI 체인을 걸었다. 먼저 `,(0,p.jsx)(t.strong,{children:`personas로 네 시야를 바깥에 만들었다.`}),` 시니어 자동화 SWE, 법무, 콘텐츠 전략가, 그리고 운영 부담을 직접 지는 본인 — 네 페르소나를 각각 별도 Agent로 스폰해 같은 설계안을 두고 토론시켰다. 답이 갈리는 지점이 그대로 쟁점이 됐다.`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`SWE`}),`는 자동 트리거를 밀면서도 숨은 복잡성을 짚었다 — Codex transcript 정규화가 생각보다 무겁다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`법무`}),`는 한 축에서 단호했다. "L3 자동화 + 자동 redaction은 one-way door다. 한 번 새면 끝이니 절대 금지." 내가 편의를 보던 자리에서 그는 출구 없는 문을 봤다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`콘텐츠 전략가`}),`는 자동화의 정의를 다시 잡았다. "글을 더 쓰게 하는 도구가 아니라, 쓸 만한 순간을 놓치지 않게 하는 알람이다."`]}),`
`,(0,p.jsxs)(t.li,{children:[`**운영 사용자(본인)**는 외부 페르소나가 못 본 걸 짚었다. 가장 두려운 건 기능 실패가 아니라 `,(0,p.jsx)(t.strong,{children:`회사 정보 유출 단 1건`}),`, 그리고 이런 루틴의 내 **지속률이 35%**라는 사실. 거창하게 만들면 안 돌린다.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`그 다음 `,(0,p.jsx)(t.strong,{children:`quality-gate에 내 PLAN을 직접 통과시켰다.`}),` 6축 rubric 평균은 `,(0,p.jsx)(t.strong,{children:`2.5/5, FAIL`}),`. 보안 관련 두 항목이 BLOCKING으로 걸렸고, 법무 페르소나의 판정은 "현 PLAN으로 publish 진행 절대 금지"였다. 내가 만든 계획을, 내가 세운 게이트가 막아세운 것이다.`]}),`
`,(0,p.jsxs)(t.p,{children:[`여기서 멈추지 않고 게이트의 피드백을 설계에 되먹였다. 막힌 이유는 하나의 PoC가 "빠른 시연"과 "안전한 운영"을 동시에 만족하려 했기 때문이다. 그래서 범위를 둘로 쪼갰다 — `,(0,p.jsx)(t.strong,{children:`v1은 publish를 원천 차단한 1회 시연 dry-run`}),`, `,(0,p.jsx)(t.strong,{children:`v2는 4주 dry-run에 2주 publish를 더한 보수적 운영본`}),`으로. 시연용 v1만 다시 게이트에 넣으니 `,(0,p.jsx)(t.strong,{children:`4.33/5 PASS`}),`. 같은 아이디어인데, 야망의 크기를 게이트가 통과시킬 만큼 줄여 살린 셈이다.`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.p,{children:`게이트를 통과한 v1을 실제로 한 번 돌렸다. 그날 transcript에서 콘텐츠 후보 2개(Log + Note)가 뽑혔고, 둘 다 손볼 가치가 있어 정식 글로 promote했다 — 파이프라인이 헛것이 아니라는 증거다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`v1 시연: `,(0,p.jsx)(t.code,{children:`.cache/daily/2026-05-19.mdx`}),` (publish는 코드 차원에서 차단)`]}),`
`,(0,p.jsx)(t.li,{children:`추출된 콘텐츠 후보 2개 — 둘 다 정식 promote`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`SESSION.md`}),` — v2 작업자(미래의 나)에게 넘길 인계 컨텍스트`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`scripts/daily-log/`}),` 베이스 디렉토리 + README`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsx)(t.p,{children:`이 PoC가 내게 남긴 건 코드가 아니라 일하는 방식이었다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`숫자가 거버넌스 비용을 드러냈다.`}),` 자동화 본 코딩은 1주면 되는데 보안 검증 dry-run에 4주가 필요했다 — 1:4. "만드는 비용"보다 "안전하게 운영할 비용"이 네 배 크다는 걸 착수 전에 알게 되니, L3 자동 발행을 향한 욕심을 일찌감치 접을 수 있었다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`AI 게이트가 내 야망을 조정했다.`}),` 한 PoC로 빠른 시연과 안전한 운영을 동시에 노린 욕심이 FAIL의 원인이었고, 범위를 v1/v2로 쪼개자 통과했다. 게이트 점수가 설계를 되먹임한, 사람 검토 없이 도는 결정론적 루프였다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`가장 위험한 BLOCKING은 본인 페르소나에서 나왔다.`}),` 외부 페르소나는 기능 위험을 봤지만, 운영자인 나만 "지속률 35%"를 봤다 — 안 돌리는 자동화는 0점이라는, 외부 리뷰어가 절대 못 짚을 리스크.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`다음 보강`}),`
`,(0,p.jsx)(t.p,{children:`v2로 넘어갈 때 SESSION.md에 남겨둔 작업은 셋이다. Claude·Codex transcript를 한 형식으로 맞추는 Source Adapter, 법무 페르소나가 요구한 보안 게이트 구현, 그리고 4주 dry-run을 돌리며 "유출을 놓치는 비율(false negative)"을 실측하는 일. v1을 게이트로 막아 살린 그 판단을, v2에선 숫자로 검증할 차례다.`}),`
`,(0,p.jsx)(t.p,{children:`나는 자동화를 짜기 전에 그 자동화를 가장 잘 반대할 AI 팀을 먼저 소집하고, 그들이 내린 FAIL을 설계 수정의 입력으로 되먹이는 식으로 일한다 — 만든 사람의 사각지대를, 워크플로우로 메운다.`}),`
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
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/cases/dispatch-routing-system`,children:`/cases/dispatch-routing-system`}),`, `,(0,p.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`})]})]})}function b(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(y,{...e})}):y(e)}var x=e({default:()=>w,frontmatter:()=>S}),S={title:`dispatch — 의도 기반 AI 라우팅 시스템 구축`,status:`Live`,category:`builder-log`,role:`시스템 설계·CLAUDE.md 통합·스킬 작성`,period:2026.05,summary:`Claude Code의 30+ 스킬 중 매번 사람이 "이건 어떤 스킬"을 결정하는 건 사람 속도. 3 에이전트 병렬 경쟁으로 의도 분석 후 자동 라우팅하는 dispatch 스킬 구축.`,date:`2026-05-19`,tags:[`claude`,`workflow`,`routing`,`ai-orchestration`]};function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
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
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`})]})]})}function w(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(C,{...e})}):C(e)}var T=e({default:()=>O,frontmatter:()=>E}),E={title:`홈레이더 — 5개 지역 아파트 자동 추적 시스템`,status:`Live`,category:`product`,role:`기획·아키텍처·구현·운영`,period:2026.05,summary:`관심 지역 5곳의 아파트 실거래가·평수·세대수·주차·학군·교통을 공개 API 7곳에서 주1회 자동 수집해 노션 DB에 정리. 거시지표·정책 레지스트리까지 포함한 personal real estate intelligence.`,date:`2026-05-21`,tags:[`side-project`,`automation`,`notion`,`github-actions`,`typescript`]};function D(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
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
`,(0,p.jsx)(t.h2,{children:`운영 후일담`}),`
`,(0,p.jsx)(t.p,{children:`배포로 끝나는 매끈한 성공담은 아니었다. 주1회 자동 수집을 돌리는 동안 세 건의 실제 결함을 헬스체크로 잡아냈다. (1) dry-run이 현재연도 DB를 오염시켜 거래연도 구분 없이 데이터가 섞이던 silent failure를 발견해 연도별 DB 라우팅으로 격리했고, (2) 외부 소스의 silent drop을 정상 종료로 오인하던 경로에 결손 경보를 달았고, (3) enrichment 파이프라인을 순수 함수로 추출하고 characterization 테스트로 안전망을 둘렀다. 자동화는 "만들면 끝"이 아니라, 조용히 틀리는 경로를 계속 잡아내는 운영이 본체였다.`}),`
`,(0,p.jsxs)(t.p,{children:[`레포: `,(0,p.jsx)(t.a,{href:`https://github.com/justinjeong5/j-home-radar`,children:`github.com/justinjeong5/j-home-radar`})]}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),`, `,(0,p.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),`, `,(0,p.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function O(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(D,{...e})}):D(e)}var k=e({default:()=>M,frontmatter:()=>A}),A={title:`인터랙티브 레이어 — Cmd+K 검색·키보드 단축키·다크 테마`,status:`Live`,category:`builder-log`,role:`UX 설계·키보드 인터랙션·접근성·상태 관리`,period:2026.05,summary:`디자인은 깔끔한데 죽어 보인다 — 그 느낌을 혼자 끝까지 풀었다. Cmd+K 검색·키보드 단축키·다크 테마를, 미니멀 톤을 깨지 않고 정적 사이트에 얹기.`,date:`2026-05-19`,tags:[`interaction`,`accessibility`,`react`,`ux`]};function j(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`"디자인은 깔끔한데 죽어 보여." 사이트를 열어 본 첫 반응이 그랬다. 진입 페이지는 멀끔한데, 다음 페이지로 넘어갈 이유가 없었다. 받은 주문은 한 줄, "톤은 인터랙티브 좋아"였다.`}),`
`,(0,p.jsx)(t.p,{children:`문제는 그 한 줄이 가리키는 범위가 너무 넓다는 거였다. 3D나 게임화까지 가면 인터랙티브하긴 한데 애써 잡은 미니멀 톤을 무너뜨린다. 호버 효과만 얹으면 톤은 지키지만 여전히 죽어 보인다. 그래서 "어디까지 할 것인가"부터 내가 직접 선을 그어야 했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsxs)(t.p,{children:[`선을 이렇게 그었다. 화려한 모션으로 살아 보이게 하는 길은 버렸다 — 미니멀 톤과 정면충돌이라. 대신 `,(0,p.jsx)(t.strong,{children:`정보 구조와 반응 속도로 살아 있게`}),` 만들기로 했다. Cmd+K 한 번에 모든 글에 닿고, 키보드만으로 사이트 전체를 도는 것. 베이스 디자인은 손대지 않고 그 위에 한 겹을 얹는 방향이다.`]}),`
`,(0,p.jsx)(t.p,{children:`기준은 단순했다. "이 인터랙션이 미니멀 톤을 깨는가, 아니면 정보에 더 빨리 닿게 하는가." 깨는 건 전부 잘랐고, 빨라지는 것만 남겼다.`}),`
`,(0,p.jsx)(t.h2,{children:`만든 것`}),`
`,(0,p.jsx)(t.p,{children:`방향을 정한 뒤로는 혼자 끝까지 밀어붙였다. 검색·단축키·테마·접근성을 차례로 붙였고, 각각이 미니멀 톤을 깨지 않는지 매번 되물으며 작업했다.`}),`
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
`,(0,p.jsx)(t.h2,{children:`결과`}),`
`,(0,p.jsx)(t.p,{children:`처음의 "죽어 보임"은 사라졌다. 이제 정적 사이트인데 SaaS처럼 움직인다 — 그것도 검색 7KB(Fuse.js) + 키보드 단축키 ~3KB라는 가벼운 예산 안에서. 키보드만으로 사이트 전체를 탐색할 수 있고, 720px 아래에서는 햄버거 메뉴로 알아서 갈아탄다. 접근성은 구색이 아니라 통과 기준으로 두고 WCAG 2.2 1.4.13/2.4.7/2.4.11과 APG dialog 패턴까지 맞췄다.`}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`작업하며 가장 흔히 터지는 사고를 직접 밟았다. 모달이 background focus를 trap하지 않으면 Tab이 모달 밖으로 새어 나간다. focus trap 라이브러리를 들이는 대신 표준 `,(0,p.jsx)(t.code,{children:`inert`}),` 속성 하나로 끝냈다 — 의존성 없이, 브라우저가 보장하는 방식으로.`]}),`
`,(0,p.jsx)(t.p,{children:`배운 건 분명하다. 사이트를 살아 있게 만드는 건 화려한 애니메이션이 아니라 반응 속도와 키보드 우선이다. 모호한 한 줄 주문에서 스스로 범위를 긋고, 끝까지 혼자 만들어 굴러가게 했다 — 나는 그렇게 일한다.`})]})}function M(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(j,{...e})}):j(e)}var N=e({default:()=>I,frontmatter:()=>P}),P={title:`J-Chat — 첫 프로덕션 배포의 회고 (2024)`,status:`Archived`,category:`product`,role:`전체 (기획·설계·구현·운영)`,period:2024,summary:`학부에서 회사로 넘어가던 2024년, j-chat이라는 실시간 채팅 서비스를 직접 배포했다. 첫 production이 가르친 5가지. 학부 코드와 실서비스 코드의 거리는 한 줄로 요약되지 않는다.`,date:`2026-05-28`,tags:[`career`,`production`,`learning`,`retrospective`,`websocket`]};function F(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
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
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`})]})]})}function I(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(F,{...e})}):F(e)}var L=e({default:()=>B,frontmatter:()=>R}),R={title:`6년 묵은 GitHub 레포를, 나에게 인터뷰해서 9편 노트로 꺼냈다`,status:`Live`,category:`product`,role:`기획·인터뷰 설계·자산화`,period:2026.05,summary:`면접에서 매번 받던 "이거 왜 만들었어?"에 지쳐, 6년치 30+ 레포를 직접 정리하기로 했다. 대표 3개를 골라 나 자신을 인터뷰하고, 답을 9편 노트로 추출했다.`,date:`2026-05-21`,tags:[`side-project`,`content`,`learning`,`asset`,`github`]};function z(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`면접관이 내 GitHub를 열고 `,(0,p.jsx)(t.code,{children:`react-tetris`}),`(2020)를 클릭하더니 물었다. "이거 왜 만든 거예요?" 답은 머릿속에 있는데, 그 자리에서 즉석으로 다시 조립해야 했다. 다음 면접에서 또 같은 질문, 또 즉석 조립. 6년치 30+ 레포 — `,(0,p.jsx)(t.code,{children:`mern-stack-boilerplate`}),`(2021), `,(0,p.jsx)(t.code,{children:`graphql-apollo`}),`(2022), `,(0,p.jsx)(t.code,{children:`mfp`}),`(2023), 학부 시절 `,(0,p.jsx)(t.code,{children:`bptree`}),`·`,(0,p.jsx)(t.code,{children:`myshell`}),`·`,(0,p.jsx)(t.code,{children:`steganography`}),`까지 — 어느 걸 클릭하든 같은 상황이었다.`]}),`
`,(0,p.jsx)(t.p,{children:`질문은 늘 셋이었다. 왜 만들었나(의도), 뭘 배웠나(학습), 지금 일에 어떻게 영향 주나(전이).`}),`
`,(0,p.jsxs)(t.p,{children:[`답은 `,(0,p.jsx)(t.strong,{children:`레포 자체에는 없다`}),`. README에 적혀 있어봤자 한두 줄. 6년 전 자기가 무슨 의도로 만들었는지는 6년 후의 본인만 안다. 그래서 누가 시키기 전에 직접 정리하기로 했다 — 이 답을 한 번 자산화해두지 않으면 매번 새로 조립해야 하고, 6년이 더 지나면 그 답조차 기억나지 않을 테니까.`]}),`
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
`,(0,p.jsx)(t.p,{children:`던질 질문은 면접에서 받던 그 셋을 그대로 가져왔다. 이 레포가 무엇이고 왜 만들었나(본질), 여기서 뭘 배웠고 지금에 어떻게 작동하나(학습), 다시 한다면 무엇을 다르게 할까(함정). 질문 하나가 노트 한 편이 되니, 레포 3개에서 9편이 나왔다.`}),`
`,(0,p.jsx)(t.h3,{children:`왜 인터뷰 형식인가`}),`
`,(0,p.jsxs)(t.p,{children:[`레포에 대한 글을 그냥 쓰면 "프로젝트 소개"가 된다. 면접관처럼 나를 추궁하는 형식으로 쓰니 `,(0,p.jsx)(t.strong,{children:`답이 본인 안에서 나왔다`}),`. 질문이 고정돼 있으니 9편이 같은 구조로 통일됐고, 한 편만 봐도 나머지가 어떻게 생겼을지 예측되는 — 자산다운 모양이 됐다.`]}),`
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
`,(0,p.jsx)(t.p,{children:`면접에서 받던 질문이 불편하면, 그 질문을 나에게 먼저 던지면 된다. 누가 시키기 전에 6년치를 직접 정리했고, 레포보다 거기서 꺼낸 노트가 더 큰 자산이 됐다.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`레포: 본인 GitHub 프로필 (대표 3개 + 9편 노트 cross-link)`}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),`, `,(0,p.jsx)(t.a,{href:`/notes/low-level-fundamentals-cpp`,children:`/notes/low-level-fundamentals-cpp`}),`, `,(0,p.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`})]})]})}function B(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(z,{...e})}):z(e)}var V=e({default:()=>W,frontmatter:()=>H}),H={title:`personas — 나 혼자 못 본 보안 구멍 7개를, AI 4명에게 토론시켜 찾았다`,status:`Live`,category:`builder-log`,role:`의사결정 시스템·트레이드오프 분석·페르소나 설계`,period:2026.05,summary:`자동화 PoC 4축을 혼자 결정하려다 막혔다. SWE·보안·콘텐츠·운영 페르소나를 각각 별도 Agent로 병렬 스폰해 토론시키니, 나 혼자선 못 본 보안 BLOCKING 7개가 자동으로 드러났다.`,date:`2026-05-19`,tags:[`decision-making`,`workflow`,`ai`,`tradeoff`]};function U(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`자동화 PoC 설계 화면을 띄워놓고 한 시간째 멈춰 있었다. 트리거·자동화 레벨·데이터·보안 4축에 각각 4개 옵션, 조합이 16가지. 혼자 노트에 장단점을 적어 내려가는데, 적을수록 내 시야가 한쪽으로 쏠리는 게 느껴졌다. 보안 리스크를 적으면 운영 편의를 잊고, 편의를 적으면 정보 유출을 잊었다.`}),`
`,(0,p.jsx)(t.p,{children:`문제는 명확했다. 같은 모델(나든 Claude든)이 4축을 한 번에 답하면 confirmation bias가 누적된다. 보안 검토자의 눈, 운영자의 눈, 콘텐츠 전략가의 눈이 동시에 필요한데 — 내 머릿속엔 그 눈이 하나뿐이었다. 그래서 눈을 바깥에 만들기로 했다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.p,{children:`처음엔 한 LLM에 "옵션들 비교해줘"라고 던졌다. 답은 매끄러웠지만 결국 한 시야였다 — 내가 빠졌던 그 함정에 모델도 똑같이 빠졌다. 직접 4역할을 번갈아 연기하는 것도 해봤지만, 보안 검토자를 연기하다 보면 어느새 운영자 말투가 섞였다. 외부 자문은 즉시성이 없었다.`}),`
`,(0,p.jsxs)(t.p,{children:[`그래서 4 페르소나를 각각 `,(0,p.jsx)(t.strong,{children:`별도 Agent로 병렬 스폰`}),`했다. 시니어 자동화 SWE, 개인정보·보안 검토자, 콘텐츠 전략가, 그리고 운영 부담을 직접 지는 본인. 같은 모델이라도 컨텍스트를 분리하면 시야가 진짜로 갈린다. 각 Agent에는 토론 전 트레이드오프 렌즈(되돌릴 수 있는 결정인가, 본질적 복잡성인가)를 쥐여줬고, 답을 모두 같은 JSON 형식으로 받게 해 16개 조합을 나란히 놓고 비교할 수 있게 만들었다.`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.p,{children:`네 Agent가 같은 16개 조합에 각자의 표를 던졌고, 답이 갈리는 지점이 그대로 토론의 핵심이 됐다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`시니어 자동화 SWE`}),`는 트리거를 자동(D)으로 밀었다. 다만 숨은 복잡성 하나를 짚었다 — Codex transcript 정규화가 생각보다 무겁다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`보안 검토자`}),`는 한 축에서 단호했다. "L3 자동화 + 자동 redaction 조합은 one-way door다. 한 번 새면 되돌릴 수 없으니 절대 금지." 내가 편의를 보던 자리에서 그는 출구 없는 문을 봤다.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`콘텐츠 전략가`}),`는 자동화의 정의 자체를 다시 잡았다. "이건 글을 더 쓰게 하는 도구가 아니라, 쓸 만한 순간을 놓치지 않게 하는 알람이다."`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`운영자 본인`}),`은 가장 솔직한 숫자를 내놓았다. 이런 자동화의 `,(0,p.jsx)(t.strong,{children:`현실 지속률은 35%`}),`. 그리고 외부 페르소나 누구도 1순위로 적지 않은 한 줄 — `,(0,p.jsx)(t.strong,{children:`"가장 두려운 건 회사 정보 유출 1건"`}),`.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`합의가 안 되는 축은 억지로 봉합하지 않았다. 갈린 채로 그대로 노출하고, quality-gate가 객관적으로 측정하게 뒀다. 그 토론을 거쳐 나온 최종 PLAN은:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`트리거`}),`: 수동(`,(0,p.jsx)(t.code,{children:`/daily-log`}),`)으로 시작, 향후 hybrid 어댑터`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`자동화 레벨`}),`: L1 — 네 페르소나 만장일치`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`데이터`}),`: `,(0,p.jsx)(t.code,{children:`.cache`}),` + 명시적 promote 하이브리드`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`보안`}),`: 구조적 격리 + 다중 게이트`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsx)(t.p,{children:`토론이 끝났을 때 손에 남은 건 결정 4개만이 아니었다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`혼자 노트를 채울 때 끝내 못 봤던 `,(0,p.jsx)(t.strong,{children:`보안 BLOCKING 7개 시나리오`}),`가 자동으로 드러났다. 한 시간 멈춰 있던 진짜 이유가 거기 있었다.`]}),`
`,(0,p.jsx)(t.li,{children:`v1(시연용)과 v2(운영용)를 분리하자는 결론은 내가 의도한 게 아니라, 페르소나 충돌이 강제로 밀어붙인 산물이었다.`}),`
`,(0,p.jsx)(t.li,{children:`외부 페르소나 셋이 "기능적 위험"을 훑는 동안, 운영자 본인만 **지속 가능성(35%)**이라는 다른 종류의 위험을 짚었다. 토론에 당사자를 끼워 넣어야 보이는 사각이 있었다.`}),`
`,(0,p.jsx)(t.li,{children:`그 뒤로 모든 결정에 "이건 되돌릴 수 있는 문인가"를 먼저 묻는 습관이 붙었다.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`회고`}),`
`,(0,p.jsxs)(t.p,{children:[`페르소나 토론의 진짜 가치는 `,(0,p.jsx)(t.strong,{children:`시야의 차이를 강제로 노출`}),`하는 데 있다. 같은 사람이 4역할을 다 맡으면 무의식적으로 한쪽으로 수렴하지만, Agent 4개로 컨텍스트를 쪼개면 시야가 실제로 갈린다.`]}),`
`,(0,p.jsx)(t.p,{children:`핵심은 그 토론에 운영자 본인을 끼워 넣은 것이었다. 외부 페르소나가 "이게 깨질 수 있다"를 볼 때, 당사자만 "이걸 내가 계속 쓸 수 있나"를 본다. 둘 다 있어야 결정이 산다.`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`혼자선 한 시야밖에 못 갖지만, 시야를 병렬로 스폰하면 내가 못 본 구멍이 스스로 손을 든다 — 나는 그렇게 결정한다.`})}),`
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),`, `,(0,p.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),`, `,(0,p.jsx)(t.a,{href:`/essays/self-persona-blocking`,children:`/essays/self-persona-blocking`})]})]})}function W(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(U,{...e})}):U(e)}var G=e({default:()=>J,frontmatter:()=>K}),K={title:`개인 사이트를 proof-of-work 허브로 리빌드`,status:`Live`,category:`builder-log`,role:`기획·정보 구조·프론트엔드·배포 자동화`,period:2026.05,summary:`6년째 방치하던 스택 나열형 포트폴리오를 누가 시키기 전에 통째로 갈아엎었다. 케이스 스터디·디지털 가든·빌더 로그가 결합된, 일하는 방식이 보이는 사이트로.`,date:`2026-05-19`,tags:[`portfolio`,`frontend`,`mdx`]};function q(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsxs)(t.p,{children:[`내 사이트를 6년 만에 다시 열었더니, 첫 화면이 기술 스택 로고 그리드였다. React, Node, 그 옆에 몇 개 더. 방문자가 보는 건 "이 사람이 만져본 도구 목록"이 전부였고, 정작 `,(0,p.jsx)(t.strong,{children:`내가 어떻게 판단하고 무엇을 끝까지 밀어붙이는 사람인지는 한 줄도 없었다`}),`. 누가 고치라고 한 사람은 없었다. 그냥 이대로 둘 수 없어서, 주말에 통째로 갈아엎기로 했다.`]}),`
`,(0,p.jsx)(t.p,{children:`문제는 분명했다. 일반 이력서는 항목 나열이라 입체적이지 못하고, 시간순 블로그는 "이번 달은 안 썼네" 하는 운영 부담이 누적된다. 둘 다 답이 아니었다.`}),`
`,(0,p.jsx)(t.h2,{children:`의사결정`}),`
`,(0,p.jsx)(t.p,{children:`먼저 쉬워 보이는 길부터 지웠다. 스택 그리드를 더 키우는 방향은 채용 담당자가 10초 안에 강점을 못 읽으니 탈락. Bruno Simon 같은 풀-인터랙티브 3D 사이트는 만들면 화려하지만 내 미니멀 톤과 충돌하고 운영 비용이 너무 컸다. 시간순 블로그는 안 쓰면 죄책감이 쌓이는 구조라 또 6년 방치될 게 뻔했다. 화려한 선택지를 일부러 버리고, 오래 굴러갈 구조를 택했다.`}),`
`,(0,p.jsxs)(t.p,{children:[`남은 답은 `,(0,p.jsx)(t.strong,{children:`Case Study Hub와 Digital Garden을 합치는 것`}),`이었다. 이력서 항목은 그대로 두되, 그 위에 `,(0,p.jsx)(t.code,{children:`/cases`}),`(일하는 방식의 기록), `,(0,p.jsx)(t.code,{children:`/notes`}),`(자라는 노트), `,(0,p.jsx)(t.code,{children:`/logs`}),`(작은 작업 기록)를 얹었다. 인터랙티브 톤은 3D까지 가지 않는 "Living Site" 레벨로 선을 그었다 — 미니멀 베이스에 키보드 단축키·검색·테마 토글 같은 정보 인터랙션만. 화려함이 아니라, 누가 안 봐도 콘텐츠만 쌓으면 알아서 자라는 사이트를 원했다.`]}),`
`,(0,p.jsx)(t.h2,{children:`산출물`}),`
`,(0,p.jsx)(t.p,{children:`주말에 시작해서 끝까지 밀어붙인 결과는 이렇게 남았다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`React 19 + Vite 8 + MDX 파이프라인.`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`react-router-dom v7`}),` 기반 13개 라우트 + 404 fallback.`]}),`
`,(0,p.jsxs)(t.li,{children:[`콘텐츠는 `,(0,p.jsx)(t.code,{children:`src/content/*.mdx`}),` + `,(0,p.jsx)(t.code,{children:`*.json`}),`으로 분리 — 데이터만 추가하면 페이지가 확장된다. 다음 글을 쓸 때 코드를 건드릴 필요가 없게 만든 게 핵심이었다.`]}),`
`,(0,p.jsxs)(t.li,{children:[`GitHub Pages SPA fallback (`,(0,p.jsx)(t.code,{children:`public/404.html`}),` redirect 패턴) 적용.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{children:`임팩트`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{}),(0,p.jsx)(t.th,{children:`이전`}),(0,p.jsx)(t.th,{children:`이후`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 추가`}),(0,p.jsx)(t.td,{children:`코드 수정`}),(0,p.jsx)(t.td,{children:`파일 1개 추가`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`페이지 수`}),(0,p.jsx)(t.td,{children:`1 (단일 SPA)`}),(0,p.jsx)(t.td,{children:`13 (라우팅)`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`콘텐츠 형식`}),(0,p.jsx)(t.td,{children:`단일 페이지 텍스트`}),(0,p.jsx)(t.td,{children:`MDX (글 + 컴포넌트 임베드)`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`차별화`}),(0,p.jsx)(t.td,{children:`Traditional Portfolio`}),(0,p.jsx)(t.td,{children:`Case + Garden 하이브리드`})]})]})]}),`
`,(0,p.jsx)(t.h2,{children:`남은 보강 포인트`}),`
`,(0,p.jsx)(t.p,{children:`릴리스로 끝낸 게 아니라, 다음 칸을 이미 비워뒀다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`글 성숙도 시각화(🌱→🌿→🌳)를 단순 뱃지 이상으로 — 시간이 지나며 색이 진해지는 식.`}),`
`,(0,p.jsx)(t.li,{children:`Cmd+K 글로벌 검색·키보드 단축키(다음 Phase).`}),`
`,(0,p.jsx)(t.li,{children:`다크/세피아 테마 토글(다음 Phase).`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`누가 시키지 않은 일을, 주말에 혼자 정의하고 끝까지 출시까지 밀어붙였다. 이 사이트 자체가 내가 일하는 방식의 증거다.`})]})}function J(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(q,{...e})}):q(e)}var Y=e({default:()=>Q,frontmatter:()=>X}),X={title:`Quality-Gate 시스템 — 디자인·모바일·콘텐츠를 같은 루프로 통과시키기`,status:`Live`,category:`builder-log`,role:`워크플로우 설계·페르소나 평가·결정론적 루프`,period:2026.05,summary:`모호한 품질 목표("세련된", "모바일에서 잘 보이는")를 측정 가능 rubric으로 분해하고 페르소나 평가 + 통과 임계로 객관화. 디자인·모바일·콘텐츠 영역에 같은 패턴 5번 적용해 평균 2.75→4.75까지 통과.`,date:`2026-05-19`,tags:[`workflow`,`design-process`,`verification`,`ai`]};function Z(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
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
`,(0,p.jsxs)(t.p,{children:[`관련: `,(0,p.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`})]})]})}function Q(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(Z,{...e})}):Z(e)}var ee=e({default:()=>ne,frontmatter:()=>te}),te={title:`팀 온보딩 문서 시스템 — 첫 한 달이 다음 한 해를 결정한다`,status:`Live`,category:`product`,role:`설계·운영·매뉴얼화`,period:`2025-2026`,summary:`신규 팀원의 첫 PR을 5-7일에서 2-3일로, 첫 배포 책임을 3개월에서 1.5개월로 당겼다. 온보딩을 매번 반복되는 구두 전달에서 시간 단위로 갱신되는 제품처럼 운영한 결과다.`,date:`2026-05-28`,tags:[`collaboration`,`onboarding`,`documentation`,`team`,`system`]};function $(e){let t={blockquote:`blockquote`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{children:`문제`}),`
`,(0,p.jsx)(t.p,{children:`새 팀원이 들어올 때마다 나는 같은 설명을 처음부터 다시 했다. "우리 코드베이스 구조는...", "배포는 이렇게 하고...", "이 채널은 X 용도고...". 입사자가 바뀌어도 대사는 똑같았고, 전달하는 사람에 따라 빠지는 정보가 달랐다. 신규 팀원이 첫 달에 받는 정보가 누가 옆에 앉았느냐에 따라 무작위로 결정되고 있었다.`}),`
`,(0,p.jsx)(t.p,{children:`문제는 시간 손실에서 끝나지 않았다. 첫 한 달에 무엇을 모르냐가 그 사람의 다음 한 해 기여 곡선을 결정한다. 첫 달에 안 다듬어진 정보는 그 후로도 잘 안 다듬어지고, 잘못 박힌 모델은 6개월 뒤까지 영향을 남긴다. 온보딩은 "친절한 안내"가 아니라 팀이 새 멤버에게서 얼마나 빨리 가치를 회수하느냐의 문제였다 — 그래서 나는 이걸 일회성 안내가 아니라 운영하는 제품으로 다뤘다.`}),`
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
`,(0,p.jsx)(t.p,{children:`새 멤버가 처음 코드에 손대고 처음 배포를 책임지기까지의 시간이 절반 가까이로 줄었다.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`첫 PR까지`}),` 평균 5-7일 → 2-3일`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`첫 deploy 책임까지`}),` 3개월 → 1.5개월`]}),`
`,(0,p.jsx)(t.li,{children:`신규 팀원당 온보딩 소요 시간 약 절반으로 단축 (사람 1:1 전달 → 문서 + 1:1 spot)`}),`
`,(0,p.jsx)(t.li,{children:`전달자에 따라 들쭉날쭉하던 정보가 누구에게나 같은 밀도로 도달`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`첫 PR과 첫 배포는 새 멤버가 팀에 실제로 기여를 시작하는 두 분기점이다. 이 두 곡선을 앞으로 당긴 것이 이 시스템의 핵심 성과다.`}),`
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
`,(0,p.jsx)(t.p,{children:`온보딩을 매뉴얼이 아니라 운영하는 제품으로 보면, 신규 팀원의 첫 기여 시점을 지표로 당길 수 있다. 첫 PR 5-7일 → 2-3일, 첫 배포 3개월 → 1.5개월. 새 멤버가 가장 빨리 가치를 내도록 설계하는 사람.`}),`
`]})]})}function ne(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)($,{...e})}):$(e)}export{L as a,T as c,f as d,d as f,i as h,V as i,x as l,c as m,Y as n,N as o,l as p,G as r,k as s,ee as t,_ as u};