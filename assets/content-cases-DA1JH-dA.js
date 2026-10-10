import{n as e,r as t,t as n}from"./rolldown-runtime-QTnfLwEv.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,j(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,x(o)?(i=``,c!=null&&(i=c.replace(O,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(x(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=j(a,r,i,s,o);else if(u=p(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=j(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return j(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=ee,e.Children=F,e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=h({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o={},s=a.createContext(o);function c(e){let t=a.useContext(s);return a.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}var u=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),d=n(((e,t)=>{t.exports=u()})),ee=e({default:()=>h,frontmatter:()=>p}),f=d(),p={title:`광고 SDK 선로딩: 대기 시간과 집계의 균형`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`실행 최적화`,role:`광고 분리 요청·hidden SDK 준비·표시 흐름 구현, 서버 협의와 출시 후 집계 분석`,period:`2026.07–2026.08`,summary:`클릭 뒤 대기를 줄이려고 준비를 앞당겼다. 그 과정에서 요청·준비·표시·집계·SDK 종료를 따로 읽어야 했던 경험.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`선로딩`,`SDK 수명주기`,`집계 의미`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고를 보겠다고 버튼을 누른 뒤에도 할당과 SDK 준비를 기다려야 했다. 사용자의 의사 표현과 실제 표시 사이에 대기가 한 번 더 생기는 흐름이었다. 사업 담당자도 대기와 광고 건너뛰기를 연결된 문제로 보고 있었다.`}),`
`,(0,f.jsxs)(t.p,{children:[`나는 광고 준비를 버튼 클릭보다 앞당기는 프론트엔드 구현을 맡았다. 서버 담당과 요청·응답·timeout을 협의하고, 디자인이 준비한 화면 시간 안에서 SDK를 미리 준비했다. 그런데 준비를 먼저 시작하면 공급사 관측도 먼저 시작될 수 있었다. 이 작업의 질문은 `,(0,f.jsx)(t.strong,{children:`미리 준비한 광고를 언제부터 실제로 사용한 광고로 볼 것인가`}),`였다.`]}),`
`,(0,f.jsx)(t.h2,{children:`요청을 나눠도 표시 순서는 유지해야 했다`}),`
`,(0,f.jsx)(t.p,{children:`SDK 설정과 일반 광고 요청을 분리하면 SDK가 먼저 도착해 준비할 수 있었다. 다만 먼저 준비됐다는 이유로 표시 순서를 바꾸면 서버가 의도한 우선순위와 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`초기 협의에서 나는 최종 순서를 서버에서 받을 수 있는지 물었다. 독립 요청 사이의 서버 상태 부담을 논의한 뒤 display weight로 프론트엔드에서 병합하는 경계에 합의했다. timeout도 필터 조합의 부수 효과로 바꾸기보다 요청 입력으로 명시하자고 제안했다. 서버의 기본값·상한 방식에 동의했고, 프론트엔드는 분리 응답과 settle 상태를 소비했다.`}),`
`,(0,f.jsx)(t.p,{children:`분리 흐름은 선택적으로 활성화하고 기존 단일 요청 경로를 유지했다. 서버의 할당 정책과 응답 필드는 서버 담당이, 표시·회차·flag·계측·mock과 QA 연결은 내가 맡았다.`}),`
`,(0,f.jsx)(t.h2,{children:`준비 완료와 사용자에게 표시됨을 분리했다`}),`
`,(0,f.jsx)(t.p,{children:`초기 hidden 방식은 응답 데이터만 cache한 것이 아니었다. SDK 광고를 생성하되 화면에서는 숨긴 뒤 실제 표시 시점에 드러냈다. 따라서 준비됨과 표시됨을 같은 상태로 처리할 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 상태 구분을 설명하는 재구성이며 실제 회사 코드가 아니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`const responses = requestSdkAndOtherAdsSeparately();
responses.sdk.then(prepareHiddenSdk);

async function showNext() {
  const candidates = mergeByDisplayWeight(await settle(responses));
  const session = choosePreparedOrCreate(candidates);
  await session.show();
  markActuallyShown(session);
}
`})}),`
`,(0,f.jsx)(t.p,{children:`실제 구현에서는 각 응답의 timeout·완료 상태와 재조회 request ID, 준비와 사용 신호를 따로 관리했다. 이 구조의 목적은 요청이 앞당겨진 것과 사용자가 광고를 보기 시작한 것을 구분하는 데 있었다. 모든 공급사의 내부 동작을 프론트엔드 상태만으로 통제할 수는 없었다.`}),`
`,(0,f.jsx)(t.h2,{children:`빨라지지 않았다는 QA에는 적용 조건부터 확인했다`}),`
`,(0,f.jsx)(t.p,{children:`적용·미적용 영상을 공유한 뒤 일부 QA 대상은 빠르지 않다는 반응이 있었다. 먼저 같은 기능이 켜져 있는지 확인했고, 해당 대상의 flag가 누락돼 있었다. 타겟팅을 적용한 뒤 동료가 빠른 표시를 확인했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 장면에서 느리다는 반응을 곧바로 구현 실패나 기기 성능 차이로 해석하지 않았다. 같은 화면이어도 실행 경로가 다르면 비교 대상이 아니었다. 준비 상태와 실제 표시를 나누는 것만큼, 비교한 두 대상이 어떤 경로를 실행했는지도 확인해야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`우리 노출 callback을 미뤄도 공급사 클릭 추론은 움직였다`}),`
`,(0,f.jsx)(t.p,{children:`상용 적용 뒤 노출과 클릭 집계의 변화가 질문으로 돌아왔다. hidden SDK가 생성된 시점부터 공급사 내부의 화면 이탈·복귀 기반 클릭 추론이 활성화될 수 있었다. 우리 쪽 impression을 표시까지 보류해도 공급사 내부 집계까지 보류된다고 볼 수는 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`나는 코드와 관측을 연결해 이 차이를 설명하고, 실제 노출 신호 이후 클릭 감지를 활성화하는 계약을 공급사에 요청하자고 제안했다. 이는 공급사 내부 코드를 직접 확인한 결과가 아니라 당시 동작에 대한 분석이었다. 공급사 확인과 사업 판단은 해당 담당자들과 함께 진행했다.`}),`
`,(0,f.jsx)(t.p,{children:`클릭 집계가 늘었다고 매출도 같은 비율로 늘었다고 읽지 않았다. 공급사에서 전달한 설명에서도 클릭과 매출은 집계 출처가 달랐다. 선로딩의 성공 여부를 하나의 숫자로 판정하기 어려운 이유였다.`}),`
`,(0,f.jsx)(t.h2,{children:`DOM 정리 뒤에도 SDK 세션은 남을 수 있었다`}),`
`,(0,f.jsx)(t.p,{children:`이후 동료가 SDK의 close 호출과 같은 광고 세션 재사용을 보완했다. 화면 DOM을 없애는 것과 SDK의 진행 상태를 종료하는 것은 다르기 때문이다. 후속 집계도 실제 표시된 세션의 광고를 기준으로 유지했다.`}),`
`,(0,f.jsx)(t.p,{children:`내 역할은 그 수정 시점과 운영 관찰을 대조해, 같은 페이지에서 연속 광고가 같은 SDK를 사용할 때의 문제 경로를 재구성하는 것이었다. 동료가 구현한 세션 종료를 내 최초 선로딩 구현에 합쳐 설명하지 않는다. 당시 공급사 간 집계 차이와 세션 문제도 한 원인으로 합칠 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 사건을 확인할 때의 조건은 다음처럼 나뉜다. 표는 상태와 확인 방법을 정리한 것이며 실기기 전체 통과를 뜻하지 않는다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`조건`}),(0,f.jsx)(t.th,{children:`확인해야 하는 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`SDK 응답이 먼저 도착`}),(0,f.jsx)(t.td,{children:`미리 준비해도 최종 표시 순서는 weight 기준`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`분리 기능 비활성`}),(0,f.jsx)(t.td,{children:`기존 요청 경로 사용`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`준비 완료, 아직 표시 전`}),(0,f.jsx)(t.td,{children:`준비와 사용·표시 신호 구별`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`재조회가 시작됨`}),(0,f.jsx)(t.td,{children:`응답을 해당 request ID와 연결`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`SDK 세션 종료·동일 광고 재할당`}),(0,f.jsx)(t.td,{children:`DOM과 SDK 상태, 재사용한 실제 광고 추적을 함께 확인`})]})]})]}),`
`,(0,f.jsx)(t.h2,{children:`빠른 표시와 운영 판단을 함께 전달했다`}),`
`,(0,f.jsx)(t.p,{children:`선로딩은 공동 제품에 통합됐고 상용 적용 보고로 이어졌다. 사업 담당자는 대기 단축과 건너뛰기 감소를 보고했다. 다만 동등한 기기·네트워크·광고 비중·측정 이벤트의 전후 실측을 확보한 결과는 아니어서 여기서는 정성적인 효과 보고로 남긴다.`}),`
`,(0,f.jsx)(t.p,{children:`집계 차이로 롤백 요청도 나왔지만, 추가 영향 확인 후 팀은 롤백하지 않고 매출을 모니터링하기로 했다. 요청이 있었다고 실제 롤백했다고 정리하면 당시 전달의 끝점이 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`버튼 뒤의 기다림을 줄이려고 SDK 생성을 앞당겼지만, 우리 화면에서 숨긴 시간에도 공급사의 관측은 시작될 수 있었다. 표시 callback을 늦추는 것만으로 그 수명주기를 통제할 수 없다는 점이 이 작업의 비용이었다. 동료의 세션 종료 보완과 운영 관찰까지 이어 보면서, 다음 선로딩에서는 준비를 얼마나 앞당길지와 함께 노출·클릭 감지가 언제 시작되고 세션이 언제 끝나는지를 먼저 확인해야 한다는 기준을 얻었다.`})]})}function h(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(m,{...e})}):m(e)}var g=e({default:()=>y,frontmatter:()=>_}),_={title:`광고 완료를 확인하지 못했을 때의 복구 UX`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`복구 UX 제안·PM 협의·웹 생명주기 처리`,period:`2026`,summary:`광고를 봤는데 상자 열기로 넘어가지 않는다면 기다려야 할까, 다시 눌러야 할까? 완료 신호를 받지 못한 웹에서 사용자의 다음 선택을 다룬 이야기.`,date:`2026`,dateBasis:`context`,collection:`records`,tags:[`외부 의존성`,`복구 UX`,`비동기 상태`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function v(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`보너스 상자를 여는 흐름에는 광고 참여가 앞에 있었다. 사용자는 광고를 보고 다음 단계로 넘어가기를 기대하지만, 광고 참여와 상자 열기, 보상 지급은 각각의 처리를 거치는 단계였다. 광고를 봤다는 경험과 웹이 완료 응답을 받았다는 상태가 항상 동시에 맞아떨어지는 것은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`관련 문의에는 광고를 본 뒤에도 상자 열기가 진행되지 않아 여러 번 다시 시도하다가 포기했다는 이야기가 있었다. 기다리는 사람에게는 시청이 끝나지 않은 것인지, 처리가 늦는 것인지, 다시 눌러야 하는지 구별하기 어렵다. 문제가 생긴 위치를 몰라도 다음 행동은 결정해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`웹이 아는 것은 외부 광고의 완료 응답이 아직 오지 않았다는 사실이었다. 늦은 응답이 올 수 있으니 곧바로 실패라고 확정하기도 어렵고, 시간이 지났다는 이유로 광고가 완료됐다고 처리할 수도 없었다. 그렇다고 사용자가 응답을 기약 없이 기다리게 두는 것도 제품의 문제였다.`}),`
`,(0,f.jsx)(t.p,{children:`원인을 확인하는 동안 웹에서 줄 수 있는 선택은 무엇인지, 그 선택 뒤에 늦은 응답이 오면 무엇을 결과로 남길지 함께 정해야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`원인 확인을 기다리는 동안에도 선택지는 필요했다`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 AdMob의 timeout이나 callback 지연·누락을 의심하며 관련 담당자들과 확인했다. 나는 일정 시간 뒤 기존 skip UI를 사용할 수 있게 하는 방식을 제안했다. 외부 원인을 모두 통제할 수 없더라도 웹에서 제공할 다음 행동은 다룰 수 있었기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`PM과는 fullscreen 광고가 웹 UI를 가릴 수 있다는 제약도 논의했다. 웹에 선택지를 두어도 네이티브 광고 화면 위에서 그 버튼을 보이게 하는 것은 아니다. 내가 바꾼 대상은 웹이 완료 응답을 기다리는 상태와 그 뒤의 처리였고, fullscreen·callback 자체의 문제는 관련 담당자와 따로 살폈다.`}),`
`,(0,f.jsx)(t.p,{children:`이 제안에서 시간은 광고가 실패했다고 판정하는 기준이 아니었다. 사용자가 계속 기다릴지, 대기에서 빠져나올지 선택할 수 있게 하는 시점이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`시간이 지나도 자동 완료로 처리하지 않기`}),`
`,(0,f.jsx)(t.p,{children:`광고가 시작된 뒤 일정 대기가 지나면 수동 복구 UI를 열도록 했다. 타이머만 지났을 때는 참여 기록을 전송하지 않고, 사용자가 버튼을 눌렀을 때 skip을 한 번 실행하는 흐름이었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 구분을 하지 않으면 기다림이 광고 완료를 대신해버린다. 정상 완료는 실제 광고 결과를 가진 경로로, 수동 복구는 별도의 결과로 다음 처리를 이어가야 했다. 보상 지급 자체를 웹의 대기 시간으로 결정하는 방식은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서도 대기만 한 경우와 버튼을 누른 경우를 나눴다. 수동 복구에서는 실제 광고 식별값을 정상 완료처럼 넣지 않고, 정상 응답이 버튼 클릭보다 먼저 끝난 경우에는 skip을 실행하지 않는 조건을 구성했다.`}),`
`,(0,f.jsx)(t.h2,{children:`빠져나온 뒤에도 이전 광고의 작업은 남을 수 있다`}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 현재 실행 중인 attempt에 시작 여부와 skip 여부, controller를 묶었다. skip을 누르면 먼저 그 attempt가 skip됐다는 상태를 남기고 취소 신호를 전달했다. 같은 시도를 반복해서 skip하지 않는 조건도 뒀다.`}),`
`,(0,f.jsx)(t.p,{children:`사용자가 skip을 고른 뒤에도 외부 Promise가 resolve되거나 reject될 수 있었다. 둘 중 어느 경로로 끝나도 이미 skip된 attempt의 결과는 복구로 남겨야 했다. resolve 쪽만 보호하면 reject나 finally가 나중에 상태를 바꿀 수 있어, 버튼을 누른 뒤의 세 경로를 함께 읽었다.`}),`
`,(0,f.jsx)(t.p,{children:`정리 작업에서도 현재 활성 attempt와 자신이 같은지 확인한 뒤 ref를 비웠다. 이전 실행의 finally가 새 실행의 controller를 지우는 일을 막기 위한 조건이었다. 화면을 떠날 때의 취소와 타이머 정리도 함께 다뤘다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자는 기다림을 끝낼 수 있고, 결과는 한 경로로 남는다`}),`
`,(0,f.jsx)(t.p,{children:`사용자는 정해진 대기 뒤 해당 광고에서 수동으로 빠져나올 선택을 갖게 됐다. 남은 후보가 있으면 그 처리를 이어가고, 후보 처리 뒤 참여 기록 요청이 성공하면 상자 화면으로 넘어가 상자를 열 수 있다. 계속 기다리는 것 외의 행동 경로를 웹에 만든 것이 제품에서 달라진 점이었다. 버튼 클릭을 즉시 보상 지급으로 처리하지는 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`정상 응답이 먼저 끝나면 정상 결과를 사용하고, 복구를 선택한 시도의 늦은 응답은 이미 한 선택을 뒤집지 않도록 했다. 테스트도 시작 후 skip·중복 클릭·늦은 응답·정상 응답 선행을 나눴다. 탈출 버튼을 보이게 하는 것과 그 선택을 끝까지 유지하는 것은 함께 확인할 일이었다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 자체 점검에서는 해결된 것으로 보인다고 공유하고 추가 문의가 생기면 알려달라고 요청했다. 이는 기다림의 원인만 보는 데서 멈추지 않고, 변경 뒤의 문의 흐름까지 다시 확인하려 한 과정이었다.`}),`
`,(0,f.jsx)(t.p,{children:`PM과 fullscreen 광고가 웹 선택지를 가릴 수 있다는 제약을 논의하면서도, 원인 확인과 웹이 제공할 행동을 따로 다뤘다. 외부 원인이 확정되길 기다리는 동안에도 사용자의 다음 행동은 필요했다. 내가 바꿀 수 있는 부분에서 선택지를 주고, 그 선택 뒤의 결과를 어디까지 책임질지 구체적으로 정한 경험이었다.`})]})}function y(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(v,{...e})}):v(e)}var b=e({default:()=>C,frontmatter:()=>x}),x={title:`팀의 문의 흐름을 막던 서버 변경을 AI와 함께 맡기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`업무 확장`,role:`서버 변경 범위 정의·AI 공동 구현·부수효과 검증·DB 반영 순서 조율`,period:`2026.08`,summary:`낯선 Python 서버에서 문의 분류와 지원 검증을 개발했다. AI의 조사·구현을 도움받으며 부수효과의 경계와 저장 호환, DBA 반영 뒤의 병합 순서를 연결한 경험.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`AI 협업`,`서버 계약`,`제품 전달`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function S(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`문의 기능의 서버 코드와 검토 자료를 준비하고도 바로 병합하지 않았다. 새 분류를 쓸 코드는 있었지만 DB가 그 값을 저장할 준비가 됐는지는 다른 담당자가 알려줘야 했다. DBA의 반영 완료를 받은 뒤 다음 변경을 진행했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 일은 새 보너스 화면을 위한 문의 경로에서 시작했다. 앱별 분류 조회와 실제 생성 요청의 지원 검증, 저장할 DB 값이 모두 필요했다. Python 서버가 낯선 프론트엔드 개발자였지만, 팀에 남은 병목을 AI와 함께 맡아 기존 경로를 조사하고 구현했다. 그 결과를 어떤 조건에서 받아들일지와 누가 다음 반영을 완료할지도 내 작업에 포함됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`화면에 보이는 선택지와 서버가 허용할 입력`}),`
`,(0,f.jsx)(t.p,{children:`분류 조회와 문의 생성은 한 기능의 두 경로였다. 조회에서는 사용자가 고를 수 있는 항목을 제공한다. 생성에서는 입력을 받아 DB 저장과 외부 문의 처리로 넘어간다. 조회에서 항목을 숨겨도 직접 생성 요청이 들어올 수 있으므로 화면의 제한으로 서버 검증을 대신할 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`AI와 앱별 분류 조회, 기존 생성 경로를 조사하고 지원 앱과 미지원 앱을 나누었다. 제품의 적용 범위가 좁혀지는 후속 수정도 이어졌다. 구현할 항목 목록만 정하는 것보다, 지원 범위의 변경이 조회와 생성 양쪽에서 같은 의미를 갖는지를 봐야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`프론트엔드에서 익숙했던 입력과 행동의 관계가 여기서도 기준이 됐다. 화면에 가능한 선택을 보여주고, 실제 실행에서는 그 선택이 여전히 허용되는지 확인하는 두 책임이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`오류를 반환했어도 너무 늦을 수 있다`}),`
`,(0,f.jsx)(t.p,{children:`생성 요청에는 저장과 외부 문의 생성, 자동 처리 같은 부수효과가 있었다. 미지원 요청에 오류 응답을 추가해도 그 전에 문의가 저장됐다면 이미 처리할 일이 생긴다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 수정안을 검토할 때는 예외의 종류뿐 아니라 검증의 위치를 봤다. 잘못된 입력이 실행 단계에 들어가기 전에 멈춰야 했다. 설명용 흐름은 다음과 같다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`입력과 앱의 지원 범위 확인
  ├─ 미지원 → 거절, 저장·외부 처리 시작하지 않음
  └─ 지원 → 문의 저장 → 외부 처리 연결
`})}),`
`,(0,f.jsx)(t.p,{children:`테스트에도 미지원 요청에서는 DB에 문의가 남지 않고 외부 문의 생성과 자동 처리가 호출되지 않는 조건을 넣었다. 지원 요청은 저장된 앱과 분류, 외부 생성으로 이어지는 결과를 다뤘다.`}),`
`,(0,f.jsx)(t.p,{children:`AI가 코드를 빠르게 찾아 수정해 줬다는 사실만으로 이 기준이 생기지는 않는다. 제품이 허용할 행동과 잘못된 요청이 남기면 안 되는 결과를 먼저 설명해야, 생성된 변경과 테스트를 읽을 이유도 정해졌다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 목록처럼 보여도 저장 순서는 다른 문제였다`}),`
`,(0,f.jsx)(t.p,{children:`새 문의 분류에는 DB의 ENUM 변경이 필요했다. 화면에서는 항목을 보기 좋은 위치에 놓고 싶지만, 기존 DB 값의 순서를 같은 이유로 움직일 수는 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 값의 순서를 유지하고 새 값은 마지막에 추가하는 검토용 DDL과 변경 내용을 DBA에게 전달했다. 화면에 제공하는 순서는 Python 정의에서 따로 다뤘다. 저장의 호환과 화면의 정렬을 다른 계약으로 읽은 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`여기서 AI와 준비한 것은 코드와 검토 자료였다. 공유 DB의 현행 스키마와 실행 방식은 DBA가 확인하고 운영·검증 환경에 반영했다. 같은 기능의 작업이어도 누가 실제 상태를 바꿀 수 있는지는 달랐다.`}),`
`,(0,f.jsx)(t.h2,{children:`코드가 준비된 시점에 바로 병합하지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`서버가 새 분류를 쓰는데 DB가 아직 저장할 수 없다면 기능의 한쪽만 반영된다. 그래서 DB 반영 완료 뒤 서버 변경을 병합하기로 정했다. 담당자의 완료 보고를 받은 뒤 그 순서로 이어 갔다.`}),`
`,(0,f.jsx)(t.p,{children:`코드·테스트를 준비하고 DBA의 반영 완료를 확인해 서버 변경을 병합했다. 익숙하지 않은 언어의 수정안을 얻는 데서 멈추지 않고, 필요한 변경과 담당자의 실제 완료 신호를 연결해 다음 반영이 시작할 수 있는 상태로 전달했다.`}),`
`,(0,f.jsx)(t.h2,{children:`업무 경계를 넓힐 때 남는 판단`}),`
`,(0,f.jsx)(t.p,{children:`마지막 병합의 조건은 코드가 준비됐다는 것 하나가 아니었다. DBA의 완료 보고를 받아야 저장할 값이 준비됐음을 알 수 있었다. 이 순서를 되짚으면, 낯선 언어의 수정안을 이해한다는 말도 문법과 로직을 읽는 데서 끝나지 않는다. 그 코드가 언제 적용되어도 되는지 설명하는 일까지 연결돼 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`프론트엔드 밖의 일을 맡을 때 모든 구현을 혼자 통제할 필요는 없었다. 대신 지원하지 않는 요청이 어떤 흔적도 남기면 안 되는지, 기존 저장의 의미가 유지되는지, 누가 알려주는 완료를 기다려야 하는지는 내가 설명할 수 있어야 했다. AI가 진입 부담을 낮춰 준 덕분에 맡은 변경이지만, 팀에 전달하기 위해 직접 이어야 할 판단은 그 세 가지였다.`})]})}function C(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(S,{...e})}):S(e)}var w=e({default:()=>D,frontmatter:()=>T}),T={title:`기사 카드 시안을 실제 참여·복귀·계측이 되는 기능으로 만들기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`디자인 원형의 제품 통합·런타임 응답 검증·복귀/계측·출시 협업`,period:`2026.09`,summary:`기사 카드 시안을 사용자가 열고 돌아올 수 있는 상용 기능으로 연결했다. 손상된 데이터와 새 광고 할당, 복귀 중 다른 카드를 여는 순서를 다루며 기존 추천의 동작도 지킨 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`제품 통합`,`런타임 검증`,`콘텐츠 계측`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function E(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`기사 섹션을 QA할 때 재할당 뒤의 노출이 빠지는 조건을 확인했다. 화면에는 같은 기사가 남아 있지만 계측할 광고는 새로운 회차였다. 카드가 그대로라는 사실만으로 이전 노출 타이머를 계속 써도 되는 것은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`디자이너가 만든 카드 원형에는 이미지와 제목, 넘기기와 누르기 반응이 있었다. 이를 제품에 연결하면서 화면에 표시할 콘텐츠, 사용자가 참여할 대상, 기록할 노출이 각각 어떤 단위를 쓰는지 정해야 했다. 시안에 API만 붙이는 일처럼 보이지만, 서로 다른 단위를 한 객체로 읽으면 참여와 관측이 어긋났다.`}),`
`,(0,f.jsxs)(t.p,{children:[`PlayHub의 기사 섹션은 리워드 안내보다 콘텐츠의 매력을 앞세워 참여 반응을 확인하려는 시도였다. 실제 리워드가 없는 상품으로 바꾼 것은 아니다. 제품 가설과 시각 표현은 동료들의 작업이었고, 나는 `,(0,f.jsx)(t.strong,{children:`그 원형을 데이터·참여·복귀·계측의 수명에 연결하는 FE 통합`}),`을 맡았다.`]}),`
`,(0,f.jsx)(t.h2,{children:`화면의 모델을 API의 객체와 분리했다`}),`
`,(0,f.jsx)(t.p,{children:`원형이 사용하던 미션·광고 모델을 카드에 그대로 넘기면 응답 구조와 표현, 참여 로직이 함께 바뀐다. 기사 카드가 필요한 식별자·제목·이미지·클릭·노출 정보를 독립 표시 모델로 만들고 준비 함수를 두었다.`}),`
`,(0,f.jsx)(t.p,{children:`디자인 shell과 누를 때의 표현은 유지했다. 입력과 callback을 콘텐츠 기준으로 바꾸고, 중복 제거와 표시 상한, 진단용 metadata는 준비 단계로 옮겼다. 이미지를 표현하는 변경이 참여 가능한 데이터를 판단하는 코드를 함께 건드릴 이유를 줄였다.`}),`
`,(0,f.jsxs)(t.p,{children:[`준비 함수의 입력은 런타임에서 검증하지 않은 `,(0,f.jsx)(t.code,{children:`unknown`}),`이었다. TypeScript 응답 타입은 개발 중의 약속이지, 실제 서버 객체가 그 구조라는 증거는 아니었기 때문이다.`]}),`
`,(0,f.jsx)(t.h2,{children:`모든 실패를 빈 목록으로 바꾸지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`전체 응답 구조가 잘못된 것과 정상 목록 안의 한 항목이 손상된 것은 다른 상황이다. 둘을 모두 빈 배열로 만들면 조회 실패가 정상적인 콘텐츠 소진처럼 보인다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력의 문제`}),(0,f.jsx)(t.th,{children:`사용할 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`바깥 응답 구조가 잘못됨`}),(0,f.jsx)(t.td,{children:`조회 오류`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`정상 목록이 비어 있음`}),(0,f.jsx)(t.td,{children:`정상적인 콘텐츠 없음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`항목의 참여 필수값이 잘못됨`}),(0,f.jsx)(t.td,{children:`해당 항목 제외, 이유 기록`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`참여 데이터는 유효하고 이미지만 실패`}),(0,f.jsx)(t.td,{children:`대체 이미지 표현`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`식별자·제목·클릭·계측 URL처럼 다음 행동에 필요한 값은 필수로 확인했다. 클릭할 수 없는 카드를 예쁜 이미지가 있다는 이유로 보여주면, 사용자가 눌렀을 때 작업이 끊긴다. 반대로 이미지 실패 때문에 유효한 참여 전체를 버릴 필요는 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`공개 URL은 HTTPS와 인증정보가 없는 형식을 확인하고, 개발용 로컬 HTTP 허용은 명시 옵션으로 나눴다. 입력 형식의 검사와 모든 목적지의 신뢰성을 보증하는 것은 다른 범위였다.`}),`
`,(0,f.jsx)(t.h2,{children:`새로운 섹션은 기존 추천을 덮으면 안 됐다`}),`
`,(0,f.jsx)(t.p,{children:`처음의 클라이언트 분할 경로에서 서버의 섹션 계약을 쓰는 방향으로 바꿨다. 기사 콘텐츠는 전용 섹션으로 조회하고, 기존 추천 요청에는 그 파라미터를 넣지 않았다. 섹션을 지정하지 않은 기존 응답에 새 콘텐츠가 섞이지 않는지도 서버와 확인해 계약을 맞췄다.`}),`
`,(0,f.jsx)(t.p,{children:`복귀 뒤 재조회도 같은 구분을 따라야 했다. 호출 때마다 옵션을 기억하게 하기보다 hook을 만들 때 대상 query key를 고정했다. 기사에서 돌아오면 기사 query를, 추천에서 돌아오면 추천 query를 갱신했다.`}),`
`,(0,f.jsx)(t.p,{children:`화면이 두 구역으로 나뉘었다는 것만으로 데이터의 소유권도 나뉘지는 않는다. 같은 갱신 함수가 다른 구역의 완료를 읽거나 응답을 덮지 않도록 연결한 선택이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 기사라고 같은 노출은 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`화면에는 같은 기사가 계속 남아 있는데 광고 할당이 바뀔 수 있었다. 콘텐츠 ID만으로 노출을 판단하면 새 할당을 놓치고, 배열 객체가 바뀔 때마다 새 노출로 읽으면 불필요하게 다시 기록한다.`}),`
`,(0,f.jsx)(t.p,{children:`이 조건을 돌아보면 '화면이 그대로다'라는 관찰을 너무 넓게 쓰지 않는 것이 중요했다. 독자에게는 같은 기사지만 계측에는 새로운 회차일 수 있다. 화면을 안정적으로 유지하는 key가 관측할 사건의 key까지 대신할 수는 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`표시에 사용할 콘텐츠 식별자와 계측의 할당·항목 식별자를 나누었다. 실제 할당 과정의 요청 식별자를 응답에 연결하는 작은 서버 변경에도 참여했다. 표시용 새 ID를 만들어 주는 것이 아니라, 계측이 읽어야 할 회차를 전달하는 변경이었다.`}),`
`,(0,f.jsx)(t.p,{children:`대상의 계측 식별자가 바뀌면 이전 노출 타이머를 취소하고 새 회차로 측정했다. React가 같은 카드를 유지하는 기준과 광고 노출이 새로 시작되는 기준은 같지 않았다. QA에서 재할당 시 노출이 빠지는 조건을 확인하고 수정 동작을 확인했다.`}),`
`,(0,f.jsx)(t.h2,{children:`복귀를 기다리는 동안 다른 카드를 열 수 있었다`}),`
`,(0,f.jsx)(t.p,{children:`사용자가 외부 페이지에서 돌아와 재조회하는 동안 다른 콘텐츠를 열면 복귀 감시 listener가 교체될 수 있다. 이전 감시의 잠금이 남거나 늦은 완료가 새 시도를 건드리면 다음 행동이 막힌다.`}),`
`,(0,f.jsx)(t.p,{children:`교체 때는 취소 callback으로 이전 잠금을 정리하고, 종료 여부와 generation으로 늦은 완료의 적용을 제한했다. 정상 복귀만 따라가면 보이지 않는 순서였다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`A 열기 → A 복귀·재조회 시작
  → B 열기, 감시 교체
  → A의 늦은 완료는 B 상태를 바꾸지 않음
`})}),`
`,(0,f.jsx)(t.p,{children:`완료가 왔다는 사실보다 그 완료가 아직 현재 작업의 것인지가 중요했다. 표현 단계의 이미지 fallback과 구형 모바일 보완도 이어졌지만, 디자인의 색상 알고리즘을 처음 만든 기여와 내가 맡은 런타임 통합은 구분했다.`}),`
`,(0,f.jsx)(t.h2,{children:`시안에서 상용 콘텐츠까지`}),`
`,(0,f.jsx)(t.p,{children:`9월 초 시각 원형을 받은 뒤 표현과 참여 QA를 진행했다. FE 배포 뒤 동료들의 공급·유닛 설정과 제한된 참여·적립 확인을 거쳐, 9월 9일 상용으로 전환됐다. 출시 다음 날에는 후속 회귀 테스트도 보강했다. 구현 뒤에 확인된 조건도 다시 테스트에 남기며 통합의 경계를 이어서 다뤘다.`}),`
`,(0,f.jsx)(t.p,{children:`내부 참여에서는 새 섹션이 눈에 띈다는 반응과 제목·소재 잘림 의견이 있었다. 초기 관측에는 QA가 섞여 있어 장기 클릭률이나 매출 변화로 정리하지 않았다. 확인된 제품의 변화는 사용자가 새 기사 카드를 열고 돌아올 수 있고, 기존 추천은 자기 조회를 유지하며, 데이터 손상·재할당·감시 교체가 각각 다른 결과로 다뤄지는 것이었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업에서 특히 남는 것은 같은 기사 카드가 새 노출일 수 있고, 정상 응답 안의 한 항목이 참여 불가능할 수 있다는 차이다. 눈에 보이는 화면만으로 데이터와 사건의 단위까지 정하면 놓치는 조건들이었다.`}),`
`,(0,f.jsx)(t.p,{children:`시안의 표현을 유지하면서 그 안에 실제 참여의 조건을 넣는 일이 FE 통합이었다. 다음에 비슷한 원형을 받는다면 디자인을 옮길 방법과 함께, 사용자가 누를 수 있는 입력과 기록할 사건이 무엇인지부터 확인하고 싶다.`})]})}function D(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(E,{...e})}):E(e)}var te=e({default:()=>A,frontmatter:()=>O}),O={title:`정리본으로 연결한 이전 글: automation-poc-design`,summary:`이 글의 유용한 내용은 자동화와 운영 책임에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/essays/automation-doesnt-reduce-work`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function k(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`자동화와 운영 책임 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function A(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(k,{...e})}):k(e)}var j=e({default:()=>P,frontmatter:()=>M}),M={title:`설정 조회 중의 UI 상태와 실행 조건 설계`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`문제 제안·디자인 협의·도메인 컴포넌트 구현`,period:`2022`,summary:`같은 토글인데 페이지가 열리자마자 누르면 확인 없이 바뀔 수 있었다. '규칙이 없음'과 '아직 읽지 못함'을 구분해야 했던 이유.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`비동기 상태`,`확인 흐름`,`컴포넌트 책임`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function N(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 소재 목록에는 소재를 켜고 끄는 토글이 있었다. 단순한 On/Off처럼 보이지만, 그 소재의 실행 상태에 자동화 규칙이 연결돼 있으면 수동 변경 전에 확인 모달을 거쳐야 했다. 같은 버튼이어도 연결된 규칙에 따라 필요한 절차가 달랐다.`}),`
`,(0,f.jsx)(t.p,{children:`문제는 페이지가 열릴 때 규칙 정보를 서버에서 따로 읽는다는 점이었다. 토글은 화면에 보이는데, 그 토글에 규칙이 있는지는 아직 응답을 기다리고 있었다. 이 잠깐의 상태는 '규칙이 없다'가 아니라 '아직 모른다'였다.`}),`
`,(0,f.jsx)(t.p,{children:`조회가 끝나기 전에 빠르게 누르면 아직 채워지지 않은 정보로 분기해 확인 없이 변경할 수 있었다. 조금 기다렸다가 같은 버튼을 누르면 확인 모달이 열린다. 사용자는 같은 화면에서 같은 행동을 했는데, 누른 시점과 응답 속도에 따라 다른 절차를 밟는 셈이었다.`}),`
`,(0,f.jsx)(t.p,{children:`변경을 결정할 정보가 오기 전까지 어떤 행동을 허용할지 정해야 했다. 로딩 상태를 보여주는 일과 그동안 실행해도 되는 동작이 연결된 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`클릭이 조회보다 빠를 때`}),`
`,(0,f.jsx)(t.p,{children:`흐름을 나눠보면 문제가 선명해진다. 화면이 열리면 규칙 정보를 비동기로 읽는다. 조회가 끝나기 전에 클릭하면 아직 채워지지 않은 존재 여부로 분기한다. 그 분기가 규칙 없음으로 이어지면 곧바로 상태 변경을 실행한다. 뒤늦게 규칙이 있다는 응답이 와도 이미 실행한 변경을 확인 모달로 되돌릴 수는 없다.`}),`
`,(0,f.jsx)(t.p,{children:`나는 조회보다 클릭이 먼저 도착하는 순서를 설명하고 조회 중 표시와 조작 제한을 제안했다. 그만큼 사용자는 정보를 기다리는 동안 토글을 바로 쓸 수 없다. 디자이너와는 그 제약을 두되 정상 응답이 빠를 때 스피너가 주는 부담과 아이콘 정렬도 함께 논의했다. 지연을 넣은 재현은 실제 지연 시간을 측정하려는 것이 아니라, 확인이 생략되는 실행 순서를 보여주기 위한 것이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`비활성 표시와 실행 가드를 함께 둔 이유`}),`
`,(0,f.jsx)(t.p,{children:`화면에서는 조회 중 토글을 비활성화했다. 이는 사용자가 지금 조작할 수 없는 이유를 보는 쪽의 처리다. 입력 함수에서도 조회 중이거나 다른 변경을 처리 중이면 돌아가도록 했다. 실제 상태를 바꾸는 함수가 같은 조건을 확인하므로, 표시를 고친 것만으로 실행을 막았다고 보지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`조회가 끝난 뒤에는 규칙이 없으면 바로 변경하고, 규칙이 있으면 확인 모달을 열도록 나눴다. 모달에서 취소하면 변경 함수를 실행하지 않고, 확인했을 때만 실행했다.`}),`
`,(0,f.jsx)(t.p,{children:`설명의 핵심만 줄이면 이런 흐름이다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`조회 중 또는 변경 처리 중 → 실행하지 않음
조회 완료, 연결된 규칙 없음 → 상태 변경
조회 완료, 연결된 규칙 있음 → 확인 모달
모달 취소 → 기존 상태 유지
모달 확인 → 상태 변경
`})}),`
`,(0,f.jsx)(t.p,{children:`여기서 조회와 변경을 각각 loading·processing으로 다룬 것도 중요했다. 정보를 읽는 중인지, 실제로 상태를 바꾸는 중인지에 따라 막아야 할 시점이 달랐다.`}),`
`,(0,f.jsx)(t.h2,{children:`일반 토글에 어디까지 책임을 둘까`}),`
`,(0,f.jsx)(t.p,{children:`리뷰에서는 이 확인 절차를 일반 토글의 사용처마다 직접 붙이면 빠뜨릴 수 있다는 문제가 나왔다. 반대로 모든 토글 사용을 강하게 통제하는 구조로 만들면 일반 컴포넌트의 책임이 너무 넓어질 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`나는 자동화 규칙의 존재를 조회하고, 필요한 확인을 거쳐 변경하는 동작을 도메인 컴포넌트에 묶는 쪽으로 설명했다. 단순한 On/Off UI는 일반 토글이 맡고, 자동화에 따른 행동은 그 도메인을 아는 컴포넌트가 맡도록 구분한 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`그 결과 자동화 상태를 바꾸는 사용처에서는 조회·확인 절차를 다시 조립하는 대신 그 동작을 가진 컴포넌트를 선택할 수 있었다. 일반 토글 전체에 도메인 지식을 넣지는 않지만, 사용처가 자동화-aware 동작을 골라야 한다는 비용은 남는다. 리뷰에서 논의한 강제 수준도 바로 그 선택의 책임에 관한 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 중 클릭은 더 이상 바로 변경으로 이어지지 않는다`}),`
`,(0,f.jsx)(t.p,{children:`규칙 정보를 기다리는 동안에는 사용자의 입력이 곧바로 변경으로 이어지지 않게 됐다. 조회가 끝나면 규칙이 없는 경우는 직접 변경하고, 있는 경우는 확인을 거친다. 빨리 눌렀다는 이유로 필요한 확인을 건너뛰던 경로를 막은 것이다. 기다리는 비용은 생기지만, 조회가 진행 중인 동안에는 아직 모르는 정보로 중요한 행동을 결정하지 않게 했다.`}),`
`,(0,f.jsx)(t.p,{children:`디자이너와 조작 제한·표시 부담을 맞추고, 리뷰에서는 확인 절차를 어느 컴포넌트가 맡을지 논의했다. 이 협의가 다룬 것은 스피너의 모양만이 아니라 버튼을 눌러도 되는 조건이었다. 화면에 상태를 보여주는 일과 실행 함수가 그 상태를 확인하는 일을 함께 다뤘다는 점이 이 작업의 배움으로 남는다.`}),`
`,(0,f.jsx)(t.p,{children:`그 기준으로 다시 읽으면 조회 실패도 다른 상태로 보인다. loading이 끝났어도 정보를 못 읽었다면 '없음'은 아니다. 다음에 같은 흐름을 만든다면 실패 뒤 재조회와 허용할 행동까지 먼저 정하고 싶다. 이번에 바꾼 클릭 경로와, 지금 추가로 설계해야 한다고 보는 정책을 나눠 생각하게 됐다.`})]})}function P(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(N,{...e})}):N(e)}var F=e({default:()=>re,frontmatter:()=>ne}),ne={title:`광고 SDK 관측 계층과 기존 API 계약 보존`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공용 계층`,role:`웹 브릿지 관측 계층 구현·계약/예외 경계 처리`,period:`2026`,summary:`광고가 끝나지 않았다는 기록만으로는 어디서 막혔는지 알 수 없었다. 확인할 정보를 더하면서도 원래 광고 호출을 흔들지 않게 한 과정.`,date:`2026-09-22`,dateBasis:`context`,collection:`records`,tags:[`계약 보존`,`관측`,`소비자 예외`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function I(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고가 끝나지 않았다는 문의를 읽어도, 그 말만으로 개발자가 볼 위치를 정할 수는 없었다. 광고를 호출할 준비 단계에서 막혔는지, 광고를 불러오는 호출이 실패했는지, 보여준 뒤 완료 신호가 늦는지에 따라 조사할 코드가 달랐다.`}),`
`,(0,f.jsx)(t.p,{children:`웹과 네이티브 광고 기능을 연결하는 브릿지에서는 호출의 완료나 오류를 받을 수 있었다. 하지만 마지막 결과만 읽으면 그 앞의 어느 작업에서 멈췄는지가 충분히 드러나지 않았다. 시작·완료·실패가 어떤 호출에 속하는지 연결할 정보가 필요했다.`}),`
`,(0,f.jsx)(t.p,{children:`그 정보를 받는 진단 코드를 붙일 때도 문제가 있었다. 이벤트를 읽는 코드가 오류를 내는 바람에 원래 광고 호출까지 실패한다면, 문제를 살피기 위해 추가한 기능이 새로운 문제를 만드는 셈이다. 기존 호출자가 받는 완료·오류의 의미도 달라져서는 안 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 이 작업에서는 관측할 정보와 원래 광고 호출의 결과를 나눠 봤다. 실행 과정을 더 잘 읽으면서도, 그 기록을 읽는 코드의 실패가 광고 흐름에 번지지 않게 하는 것이 필요했다.`}),`
`,(0,f.jsx)(t.h2,{children:`관측을 원래 반환값에 끼워 넣지 않기`}),`
`,(0,f.jsxs)(t.p,{children:[`기존 소비자는 브릿지의 `,(0,f.jsx)(t.code,{children:`Promise<void>`}),`가 완료되거나 원래 오류로 reject되는 계약을 사용하고 있었다. 여기에 새로운 관측 결과를 반환값으로 넣으면 소비자의 해석도 바뀐다. 오류를 문자열이나 새 객체로 바꿔 전달하는 것 역시 기존 소비자에게는 다른 오류가 될 수 있었다.`]}),`
`,(0,f.jsx)(t.p,{children:`나는 별도의 구독 구조를 두었다. 관측을 원하지 않는 호출자에게 새 반환값이나 오류 형식을 요구하지 않는 방식이었다. 원래 Promise는 이전 방식으로 끝나고, 구독한 소비자만 작업의 시작·완료·실패 이벤트를 받아본다. 새로운 진단 요구를 모든 기존 호출자의 변경으로 넓히지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`특히 실패에서는 기존 호출이 원래 오류 객체를 그대로 전달하도록 유지했다. 관측에 사용할 오류 정보의 정규화와 실제 API 오류의 전달을 같은 처리로 묶지 않은 것이다.`}),`
`,(0,f.jsx)(t.h2,{children:`이벤트에는 작업의 순서와 단계가 있어야 했다`}),`
`,(0,f.jsx)(t.p,{children:`load와 show 작업에 각각 operation ID를 부여하고 단계와 상태, 걸린 시간과 결과를 이벤트로 남겼다. 같은 광고 관련 이벤트라도 어느 작업의 시작과 종료인지 이어서 읽을 수 있어야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`작업이 시작된 뒤 구독하면 시작 이벤트 없이 종료 이벤트만 받을 수 있다. 그 결과를 구독 이후에 시작한 작업처럼 읽지 않도록, 구독 시점 이전에 시작한 operation은 해당 구독자에게 전달하지 않는 조건을 뒀다.`}),`
`,(0,f.jsx)(t.p,{children:`이 이벤트에서는 스크립트를 읽는 단계의 실패인지, load·show 호출의 거절인지, 어떤 operation의 결과인지 나눠 읽을 수 있다.`}),`
`,(0,f.jsx)(t.h2,{children:`구독자가 실패하면 누가 영향을 받을까`}),`
`,(0,f.jsx)(t.p,{children:`구독자 역시 코드를 실행한다. 이벤트를 처리하다가 동기 예외를 던질 수 있고, 비동기 작업이 rejection을 만들 수도 있었다. 이 실패가 원래 브릿지 호출에 전파되면 관측 기능을 켠 것만으로 광고 흐름이 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 이벤트 전달에서 구독자의 동기 예외를 잡고, 비동기 rejection도 별도로 처리했다. 한 구독자가 실패해도 다른 구독자는 이벤트를 받을 수 있어야 했다. 이 선택은 진단 코드의 실패를 광고 호출의 실패로 취급하지 않는다는 의미다. 이벤트를 모두 처리했다는 보장과는 별개로, 원래 기능에 미치는 영향을 먼저 제한했다.`}),`
`,(0,f.jsx)(t.p,{children:`오류 이벤트는 필요한 필드만 정리해 전달했다. 일반 Error와 객체 형태, 값이 빠진 경우를 다루고 결과 역시 필요한 항목으로 제한했다. 이는 관측 이벤트가 소비할 정보의 모양을 정한 것이며, 원래 오류 전달과는 별도였다.`}),`
`,(0,f.jsx)(t.h2,{children:`테스트에서는 기록과 반환 계약을 같이 봤다`}),`
`,(0,f.jsx)(t.p,{children:`관측 정보가 나오는지만 검사하면 새 정보가 기존 기능을 깨뜨리는 경우를 놓친다. 그래서 구독자가 실패하는 입력과 원래 호출이 실패하는 입력을 나눠 봤다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 설명을 위한 재구성이며 실제 회사 코드가 아니다. 이벤트 전달의 실패 처리와 원래 오류 재전달이 다른 위치에 있다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`async function observedCall(run) {
  safelyNotify({ phase: "start" });
  try {
    await run();
    safelyNotify({ phase: "complete" });
  } catch (originalError) {
    safelyNotify({ phase: "error", detail: normalize(originalError) });
    throw originalError;
  }
}
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`safelyNotify`}),`는 동기 예외뿐 아니라 구독자가 반환한 비동기 작업의 rejection도 처리해야 한다. 통지 함수가 바로 반환했다는 이유만으로 이후 구독자 실패까지 격리됐다고 판단할 수는 없다.`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력·순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`구독자 하나가 동기 예외 발생`}),(0,f.jsx)(t.td,{children:`원래 호출 진행, 다른 구독자 통지 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`구독자가 reject하는 비동기 작업 반환`}),(0,f.jsx)(t.td,{children:`관측 소비자의 실패 처리, 원래 호출 계약 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`원래 브릿지 호출이 오류 객체로 reject`}),(0,f.jsx)(t.td,{children:`같은 오류 객체로 reject`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`operation 시작 이후 새 구독`}),(0,f.jsx)(t.td,{children:`그 구독자에게 과거 operation 종료만 전달하지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`관측 없는 기존 호출자`}),(0,f.jsxs)(t.td,{children:[`기존 `,(0,f.jsx)(t.code,{children:`Promise<void>`}),` 소비 방식 유지`]})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`이 조건들은 관측 계층의 계약을 확인한다. 실제 장애 진단 시간이 얼마나 줄었는지나 공급사 호출이 모든 기기에서 성공했는지는 다른 측정이다.`}),`
`,(0,f.jsx)(t.h2,{children:`관측을 추가해도 기존 호출은 같은 방식으로 끝난다`}),`
`,(0,f.jsx)(t.p,{children:`조사하는 쪽에는 스크립트·load·show 중 어느 operation에서 막혔는지 이어 읽을 정보가 생겼다. 기존 호출자는 새 반환값이나 오류 형식을 받을 필요가 없었다. Promise는 이전 계약으로 끝나고 원래 오류 객체도 그대로 전달했다. 구독자의 동기·비동기 실패가 다른 구독자나 광고 호출로 번지지 않는 조건도 함께 검사했다.`}),`
`,(0,f.jsxs)(t.p,{children:[`오류를 관측하기 좋게 정규화하는 순간에 특히 주의했다. 관측용 표현과 함께 원래 reject 오류까지 바꾸면 호출자의 판단도 달라진다. 이 변경에서는 별도 구독으로 새 정보를 제공하며 기존 호출자의 수정 부담을 제한했다. 수집량을 다루는 `,(0,f.jsx)(t.a,{href:`/cases/playhub-diagnostic-sampling/`,children:`목적별 샘플링`}),`은 그 전달 계약 위에서 이어졌다.`]})]})}function re(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(I,{...e})}):I(e)}var ie=e({default:()=>oe,frontmatter:()=>ae}),ae={title:`광고 예산 자동화와 기존 설정의 호환성`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`FE/API 경계 구현·리뷰 대응·출시 조율`,period:`2021-2022`,summary:`예산 규칙 하나를 끄려는데 다른 규칙까지 사라지면 안 된다. 기존 설정이 남아 있는 운영 화면에 새 자동화를 넣으며 다룬 문제.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`호환성`,`API 계약`,`후속 수정`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function L(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 운영 화면의 자동화는 하나의 설정이 아니었다. 시간 조건을 사용하는 규칙과 예산 상태를 사용하는 규칙이 있었고, 광고나 개별 소재에 이미 연결된 설정도 남아 있었다. 새 예산 자동화를 넣어도 운영자가 이전에 구성한 규칙이 없어지는 것은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`문제를 작은 상황으로 보면 쉽다. 운영자가 예산 규칙 하나만 끄려고 토글을 바꿨는데, 그 변경이 시간 규칙까지 제거한다면 어떨까? 화면은 예산 설정을 바꾸는 것처럼 보였지만 실제로는 다른 작업까지 바꾼 셈이다.`}),`
`,(0,f.jsx)(t.p,{children:`조회에서도 같은 문제가 있었다. 새 형식의 규칙만 읽으면 기존 규칙만 가진 설정은 비어 보일 수 있다. 목록을 하나로 합쳐 보여주더라도, 저장하거나 삭제할 때는 어떤 규칙을 대상으로 한 행동인지 남아 있어야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업은 아무 설정도 없는 새 화면을 만드는 것과 달랐다. 이미 사용 중인 규칙을 읽고 유지하면서 새 규칙을 추가해야 했다. 토글 하나의 동작이 조회·저장·삭제에서 같은 범위를 뜻하도록 맞추는 일이 필요했다.`}),`
`,(0,f.jsx)(t.h2,{children:`리뷰가 화면 밖의 계약을 드러냈다`}),`
`,(0,f.jsx)(t.p,{children:`동료는 기존 규칙만 있는 경우에도 조회와 표시가 유지되는지 물었다. 나는 구·신 규칙을 함께 조회하는 처리와 권한을 맞추고 gateway도 수정했다고 대응했다. API 필드를 바꾼 뒤에는 영향을 받는 부분을 다시 리뷰해달라고 요청했다.`}),`
`,(0,f.jsx)(t.p,{children:`삭제에 대해서도 어떤 규칙을 없애는지 범위를 설명했다. 예산 규칙 제거와 시간 규칙 제거는 같은 작업이 아니었다. 새 화면의 토글을 모든 자동화 설정의 삭제 신호처럼 사용할 수는 없었다.`}),`
`,(0,f.jsx)(t.h2,{children:`규칙의 ID와 상태를 남긴 채 저장하기`}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 광고에 연결된 규칙과 각 소재에 연결된 규칙을 조회해 화면의 목록으로 합쳤다. 목록을 하나로 보여줘도 저장 대상을 하나로 뭉뚱그릴 수는 없었다. 각 규칙의 ID와 제거 상태를 유지해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`저장할 때는 그 상태로 작업을 골랐다. 기존 ID가 있고 제거된 규칙이면 삭제하고, 기존 ID가 남아 있으면 갱신하고, 새 규칙이면 생성했다. 아직 서버에 만들지 않은 규칙을 화면에서 지운 경우에는 저장 대상에서 제외했다.`}),`
`,(0,f.jsx)(t.p,{children:`예를 들어 아직 만들지 않은 규칙을 추가했다가 지우면 서버에 삭제 요청을 보낼 ID가 없다. 반대로 이미 저장된 규칙을 제거하면 그 ID에 대한 삭제가 필요하다. 화면에서 둘 다 ‘제거’처럼 보이더라도 같은 API 명령으로 처리할 수 없었다. 개별 규칙의 ID와 제거 상태를 남긴 이유가 여기서 드러난다.`}),`
`,(0,f.jsx)(t.p,{children:`gateway에도 조회·생성·수정·삭제 경로와 권한을 함께 맞췄다. FE의 폼이 준비된 것과 그 폼의 요청이 실제 계약을 통과하는 것은 서로 연결된 작업이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`기본값처럼 보였던 시간 분기가 새 규칙을 잘못 묶었다`}),`
`,(0,f.jsx)(t.p,{children:`후속 작업에서는 토글을 켜고 끌 때 규칙의 시간 조건이 잘못 저장되는 버그를 다뤘다. 여기서 첫 번째·두 번째 알림은 Slack으로 알림을 보내는 규칙의 구분이다. 수정한 코드는 광고 종료일을 비교할 기준 시각을 저장하는 부분이었다. 기존 분기는 첫 번째 알림이면 기본 시각을 쓰고, 그 밖의 규칙에는 별도 시각을 넣는 형태였다.`}),`
`,(0,f.jsx)(t.p,{children:`문제는 첫 번째가 아닌 것이 모두 두 번째 알림은 아니라는 점이다. 규칙 종류가 늘어난 상태에서 넓은 else가 원래 예외를 넘어 다른 규칙까지 묶을 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`수정에서는 두 번째 알림일 때만 별도 시각을 쓰고 나머지는 기본 시각을 쓰도록 조건을 좁혔다. 변경은 작았지만 조건의 의미가 달라졌다. “첫 번째가 아니면”이 아니라 “이 예외에 해당하면”으로 정책을 표현한 것이다.`}),`
`,(0,f.jsx)(t.h2,{children:`변경 뒤에 남은 것은 새 폼보다 공존하는 동작이었다`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 기존 규칙이 있는 설정을 새 화면에서도 읽고, 새 규칙을 추가하거나 각 ID에 맞춰 수정·삭제할 수 있게 됐다. 예산 규칙을 제거하는 행동이 다른 종류의 규칙까지 제거하는 명령이 되지 않도록 범위를 나눴다. 후속 시간 조건도 두 번째 알림에만 예외를 적용했다. 새 자동화를 쓰기 위해 기존 설정을 비워야 하는 화면이 아니라, 두 종류가 함께 남는 동작을 만든 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`동료가 기존 규칙만 있는 경우를 질문한 뒤 조회·권한·gateway를 함께 맞췄고, API 변경에는 다시 리뷰를 요청했다. 처음부터 화면의 폼만 보면 빠질 수 있는 사용 조건이 리뷰에서 드러났다. 이 과정을 지금 돌아보면 새 기능의 완성도에는 '추가한 것이 동작하는가'뿐 아니라 '기존 사용자가 유지해야 할 것은 남아 있는가'도 포함된다. 작은 else 수정이 중요한 이유도 그 적용 범위에 있었다.`})]})}function oe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(L,{...e})}):L(e)}var se=e({default:()=>le,frontmatter:()=>ce}),ce={title:`빌드 캐시 최적화와 호환성·회귀 대응`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`환경 개선`,role:`병목 분석·설정 변경·동료 적용 안내·후속 대응`,period:`2021-2022`,summary:`개발환경을 실행하고 확인할 준비가 느리면 작은 시도도 부담이 된다. 빌드를 빠르게 만들고, 배포 충돌로 되돌린 뒤 다시 구성한 이야기.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`개발환경`,`호환성`,`회귀`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function R(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`코드를 고쳤다고 바로 화면에서 확인할 수 있는 것은 아니다. 브라우저가 실행할 코드로 만드는 빌드가 먼저 끝나야 한다. 개발환경을 실행하고 다시 확인하는 준비가 느리면, 작은 변경을 시험하는 일 앞에도 기다림이 붙는다.`}),`
`,(0,f.jsx)(t.p,{children:`한 번 오래 걸리는 것보다 같은 대기를 반복하는 것이 문제였다. 개발자는 화면을 보고 다시 고칠 부분을 찾는데, 그 피드백을 받기 전에 기다리는 시간이 계속 들어간다. Dash 개발 빌드를 최적화할 때 줄이려던 것도 이런 반복 준비의 비용이었다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 '빌드가 느리다'는 말만으로 무엇을 바꿀지 정할 수는 없었다. 파일을 변환하는 작업, 라이브러리를 처리하는 작업, 분석 도구가 쓰는 시간이 섞여 있었다. 처음 실행과 이미 처리한 결과를 재사용하는 실행도 달랐다. 설정을 하나 바꿔 전체 숫자가 줄어도 어떤 조건에서 효과가 난 것인지 알아야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`이후에는 속도와 배포 호환성도 부딪혔다. 개발 중 빠르게 만든 구성을 새 의존성 조건에서 그대로 유지할 수 없었다. 어디에 시간이 쓰이는지부터 읽고, 빨라진 설정을 되돌린 뒤의 비용까지 따라가는 작업이 됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`느리다는 말을 loader와 plugin의 시간으로 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`개발 서버를 측정하는 별도 명령을 두고 loader·plugin별 시간을 볼 수 있도록 측정 도구와 분석을 연결했다. 느린 빌드를 하나의 숫자로만 보면 캐시와 변환 작업, 라이브러리 정리 중 무엇부터 할지 판단하기 어렵기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`먼저 바꾼 대상은 Vue·CSS·JavaScript를 처리하는 loader 앞의 캐시와 라이브러리 변환 설정이었다. 반복 빌드에서 다시 거치는 변환 작업을 재사용하는 쪽에 손댄 것이다. 미사용 파일이나 중복 라이브러리 정리도 가능했지만 당시에는 노력 대비 효과가 낮다고 판단해 뒤로 뒀다.`}),`
`,(0,f.jsx)(t.p,{children:`최초 빌드와 반복 빌드도 구분했다. 2021년 작업 기록에는 기존 빌드의 10회 평균이 약 45초, 변경 뒤 최초 빌드가 약 35~40초, 캐시 이후의 반복 빌드가 약 25초로 남아 있다. 명령·기기·캐시 초기화 조건을 고정해둔 기록은 아니므로 세 값을 하나의 개선율로 묶기보다 당시 관찰한 차이로 읽는다. 그때 보고한 변화는 처음 실행에서 기다림을 크게 없앤 것보다 반복 작업의 비용을 줄인 쪽에 있었다.`}),`
`,(0,f.jsx)(t.h2,{children:`측정 도구도 시간을 쓴다는 피드백`}),`
`,(0,f.jsx)(t.p,{children:`2021년의 loader 캐시 변경 뒤, 2022년에는 Webpack 5 전환을 별도로 진행했다. 이때 동료들에게 업데이트와 설치 방법을 안내하고, 처음 빌드는 시간이 걸리지만 이후 캐시 빌드는 더 빠르다고 설명했다. 적용 방법뿐 아니라 언제 효과가 나타나는지 함께 전달할 필요가 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`측정 화면을 본 동료는 BundleAnalyzerPlugin 자체도 약 2초를 쓰고 있다고 짚었다. 평소에는 분석을 항상 켜지 않으니, 분석 화면의 총 시간이 일반 개발 실행의 시간과 같지는 않다는 의견이었다. 나는 그 지적을 받아들였다.`}),`
`,(0,f.jsx)(t.p,{children:`무엇을 켠 실행인지, 캐시가 있는 실행인지에 따라 비교할 대상이 달라졌다. 최초·반복 빌드의 구분과 측정 도구의 비용을 함께 읽어야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`빨라진 설정을 배포 때문에 제거해야 했다`}),`
`,(0,f.jsx)(t.p,{children:`Webpack 전환 뒤에는 기존 cache-loader와의 의존성 충돌에 대응해야 했다. 배포 가능한 구성을 먼저 회복하기 위해 cache-loader를 의존성과 loader chain에서 제거했고, 당시의 Webpack filesystem cache 설정도 함께 뺐다. 개발 중 빨랐던 구성을 그대로 유지하는 것보다 배포 호환성을 먼저 맞춘 변경이었다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 설정을 뺐다고 일이 끝나지는 않았다. 이후 개발 빌드 속도가 예전 수준으로 돌아왔다고 팀에 알리고, Webpack과 각 loader가 제공하는 캐시로 다시 작업하고 있음을 공유했다. 호환 문제를 해결한 변경이 개발 피드백에 새로운 비용을 만든 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 변경은 작업 방향을 알리는 데서 끝나지 않았다. Webpack filesystem cache의 저장 위치를 정하고, Babel의 변환 캐시와 ESLint의 검사 캐시를 설정한 변경을 병합했다. 별도의 cache-loader를 각 변환 단계 앞에 다시 넣는 대신, 이미 사용하던 도구들이 자기 결과를 재사용하도록 구성을 바꿨다.`}),`
`,(0,f.jsx)(t.h2,{children:`회귀 공유에서 대체 설정의 병합까지`}),`
`,(0,f.jsx)(t.p,{children:`처음 최적화에서는 반복 빌드의 준비 비용을 줄이는 변화를 관찰했고, 이후 호환 문제로 제거한 캐시는 Webpack·Babel·ESLint가 제공하는 대체 설정으로 다시 구성해 병합했다. 개발자는 적용 안내를 따라 사용할 수 있는 설정을 받았고, 속도가 회귀했을 때도 그 상태와 후속 방향을 팀에 공유했다. 앞서 적은 약 25초는 2021년의 관찰값으로, 새 대체 구성의 최종 속도와는 구분한다.`}),`
`,(0,f.jsx)(t.p,{children:`동료가 분석 도구 자체의 시간도 포함됐다고 짚은 대화는 측정값을 함께 해석한 장면이었다. 후속 사용 대화에서는 내 기기의 속도 개선과 다른 기기의 성능 차이를 이야기했고, 장비 교체도 요청했다. 같은 설정의 숫자 하나만으로 모든 개발자의 환경을 설명할 수는 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 경험을 지금 돌아보면 최적화의 끝은 빠른 설정을 한 번 만드는 데 있지 않다. 어떤 실행에서 효과가 나는지 전달하고, 호환 문제로 되돌린 비용을 알리고, 다른 구성까지 이어가는 과정이 함께 있었다. 내 관심도 캐시를 유지할지에서 어느 도구가 캐시를 책임질지로 옮겨갔다. 코드의 속도와 동료가 실제로 쓰는 환경을 같이 읽게 한 작업이었다.`})]})}function le(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(R,{...e})}):R(e)}var ue=e({default:()=>fe,frontmatter:()=>de}),de={title:`일괄 등록의 부분 실패와 재시도 UX 설계`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`상태 표현 제안·제품/QA 협의·프론트엔드 구현`,period:`2022`,summary:`여러 광고 소재를 저장했는데 일부만 성공했다면 무엇을 다시 저장해야 할까? 이미 끝난 작업과 남은 입력을 함께 다룬 이야기.`,date:`2022`,dateBasis:`context`,collection:`records`,updated:`2026-10-02`,lastTendedAt:`2026-10-02`,tags:[`운영 UX`,`부분 실패`,`재시도`]};function z(e){let t={h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 소재를 일괄 등록하는 화면에서는 여러 광고 항목과 각 항목에 사용할 소재를 한꺼번에 입력했다. 소재는 사용자에게 보여줄 광고 내용을 담는 단위다. 운영자가 보기에는 입력을 모두 마친 뒤 저장 버튼을 한 번 누르는 작업이었다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 버튼 하나가 실제로는 소재별 생성 요청을 실행했다. 예를 들어 같은 광고 항목의 두 소재 중 하나는 저장되고 다른 하나는 실패할 수 있었다. 화면이 “실패했습니다”라고만 알려주면, 방금 입력한 것 중 무엇이 끝났는지부터 다시 확인해야 한다.`}),`
`,(0,f.jsx)(t.p,{children:`그 상태에서 전체를 다시 저장해도 되는지, 실패한 것만 고쳐야 하는지도 불분명하다. 이미 성공한 소재에도 생성 요청을 다시 보내면 끝난 일을 반복하게 된다. 반대로 화면을 비워버리면 아직 저장하지 못한 입력을 다시 구성해야 한다. 오류 메시지를 보여주는 것만으로는 다음 행동을 정할 수 없었다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 기능에서 풀어야 했던 것은 여러 항목을 한 번에 보내는 일뿐 아니라, `,(0,f.jsx)(t.strong,{children:`일부만 끝난 작업을 사용자가 어디서 이어갈 수 있게 할 것인가`}),`였다. 입력을 유지하는 방식과 저장 결과, 다음 저장의 동작을 함께 봐야 했다.`]}),`
`,(0,f.jsx)(t.h2,{children:`코드의 의존성을 사용자의 입력 순서로 만들 뻔했다`}),`
`,(0,f.jsx)(t.p,{children:`저장 전의 입력에서도 같은 차이가 드러났다. 화면에서는 묶음을 편집하지만 데이터는 개별 소재에 속해 있었다. 랜딩 URL의 입력 방식이 그 예였다. URL은 화면에서는 묶음의 공통 정보처럼 보였지만 데이터에서는 소재가 가진 속성이었다. 소재를 모두 지우면 소재에서 읽어오던 URL도 사라지는 구조였다.`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 소재를 먼저 추가한 뒤 URL을 입력하게 하면 되겠다고 제안했다. 구현의 의존성을 입력 순서로 풀려 한 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`동료는 다른 관점에서 봤다. 사용자는 여러 필드를 자유롭게 입력하는 화면을 보고 있는데, 실제로는 순서를 지켜야 한다면 화면이 보여주는 사용법과 동작이 맞지 않는다는 지적이었다. 이미 입력한 값이 소재 삭제와 함께 사라지는 것도 사용자에게는 예상하기 어려운 일이었다.`}),`
`,(0,f.jsx)(t.p,{children:`그 의견을 받아 소재를 모두 제거해도 입력한 URL이 남도록 수정했다. 코드에서 자연스러운 구조가 화면에서도 자연스러운 것은 아니라는 점이 드러난 협의였다. 사용자의 작업을 데이터 구조에 맞추기보다, 화면이 그 차이를 다뤄야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`부분 실패도 사용자가 다시 해석하게 두지 않기`}),`
`,(0,f.jsx)(t.p,{children:`저장 결과에서도 비슷한 질문이 생겼다. 같은 광고 항목의 네이티브 소재는 저장됐지만 HTML 소재는 실패할 수 있었다. 행 전체를 성공이나 실패로 표시하면 소재별로 다른 결과를 표현할 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 저장 오류를 각 소재에 보여주고 성공·실패 상태를 구분하는 표시를 제안했다. 동료들과 방식과 표시 위치를 논의했다. 운영자가 모든 입력을 다시 살피기 전에, 어느 소재의 작업이 남았는지 알 수 있어야 한다고 봤다.`}),`
`,(0,f.jsx)(t.p,{children:`표시만 세분화해서도 끝나지 않았다. 화면이 알려준 결과와 다음 저장 버튼의 동작이 이어져야 했다. 성공한 소재에 다시 생성 요청을 보내는 흐름이라면, 상태를 보여줘도 운영자의 다음 행동은 여전히 불분명하다.`}),`
`,(0,f.jsx)(t.h2,{children:`표시·저장·목록을 남기는 단위를 나누기`}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 각 소재의 저장 호출에서 오류를 처리했다. 한 호출이 실패해도 그 오류를 해당 소재의 상태에 남기고 다음 소재의 처리를 이어갔다. 성공한 소재에는 저장 완료 상태를 남겼다.`}),`
`,(0,f.jsx)(t.p,{children:`첫 저장이 끝난 뒤에는 아직 저장되지 않은 소재가 있는 묶음을 남겼다. 한 행은 공통 입력과 여러 소재를 함께 편집하는 단위였으므로, 남은 작업도 그 행에서 이어갔다. 결과적으로 성공한 소재와 실패한 소재가 같이 보여도 어떤 묶음에서 무엇이 끝났는지 읽을 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`동작을 작은 예로 보면 다음과 같다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`첫 저장 이후의 묶음`}),(0,f.jsx)(t.th,{children:`화면에 남기는 것`}),(0,f.jsx)(t.th,{children:`다음 저장에서 처리할 것`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 소재 모두 성공`}),(0,f.jsx)(t.td,{children:`묶음을 남기지 않음`}),(0,f.jsx)(t.td,{children:`없음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`한 소재 성공, 한 소재 실패`}),(0,f.jsx)(t.td,{children:`두 소재가 들어 있는 묶음`}),(0,f.jsx)(t.td,{children:`아직 저장되지 않은 소재`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 소재 모두 실패`}),(0,f.jsx)(t.td,{children:`두 소재가 들어 있는 묶음`}),(0,f.jsx)(t.td,{children:`두 소재`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`따라서 재시도에서는 묶음이 남아 있다는 사실만으로 그 안의 모든 소재를 다시 저장하면 안 됐다. 개별 소재의 저장 완료 상태를 확인해 이미 성공한 생성 호출은 건너뛰었다. 이 상태는 같은 화면에 남아 있는 저장 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`소재별 오류 표시와 일부 개별 필드의 비활성화도 저장 상태에 연결했다. 이미 저장된 소재의 이름과 삭제 버튼은 비활성화했고, 남은 소재는 수정해 다시 생성할 수 있게 했다. 공통 URL 입력은 화면에 남은 값에 반영되지만, 이미 저장된 소재에는 다음 생성 요청을 보내지 않는다. 이 화면의 재시도는 남은 소재를 만드는 절차이지 완료한 소재까지 수정하는 명령은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업에서 화면의 표시 단위는 소재, 남길 목록의 단위는 묶음, 재시도할 요청의 단위는 미저장 소재였다.`}),`
`,(0,f.jsx)(t.h2,{children:`입력을 유지하고 남은 소재를 이어서 저장할 수 있게`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 소재를 모두 지웠다가 다시 추가해도 이미 입력한 URL을 이어서 쓸 수 있게 됐다. 저장이 일부만 끝나도 남은 묶음을 다시 구성할 필요는 없었다. 같은 화면의 성공·실패 표시를 보고 미저장 소재를 수정해 다시 저장하며, 이미 성공한 소재의 생성 요청은 건너뛴다. 일괄 등록은 한 번 보내는 기능에서, 중간까지 끝난 작업을 이어갈 수 있는 화면이 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`부분 결과를 나눠 보여주는 제안에는 제품·QA 담당자가 긍정적으로 답했고, 표시 위치도 함께 논의했다. 사전 QA 확인 뒤에는 미리 확인한 보람이 있었다는 피드백도 주고받았다. 결과 표시와 다음 저장의 행동을 함께 맞춘 협의가 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`처음의 내 제안은 데이터 구조에 맞춰 사용자의 입력 순서를 제한하는 쪽이었다. 동료의 반론을 받아 수정하면서, 그 구조의 차이를 사용자가 감당하게 할지 화면이 다룰지를 다시 보게 됐다. 지금 이 경험에서 남는 배움은 오류를 잘 표시하는 것만이 아니다. 끝난 일을 보존하고 남은 일을 이어가게 만드는 것까지 사용자의 작업으로 봐야 한다는 점이다.`})]})}function fe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(z,{...e})}):z(e)}var pe=e({default:()=>he,frontmatter:()=>me}),me={title:`Canvas 입력과 레이아웃의 수명주기 설계`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`입력·배치 개선`,role:`스크래치 Canvas 크기·입력·초기화 경계와 프레임 레이아웃 보완`,period:`2026.03–2026.07`,summary:`복권을 긁는 입력은 계속 발생하지만 화면 크기 변화는 다른 시점에 일어났다. Canvas의 초기화·크기·입력 경로를 나눈 과정.`,date:`2026-07`,dateBasis:`context`,collection:`records`,tags:[`Canvas`,`입력 수명주기`,`레이아웃`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function B(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고와 미션 참여 뒤 사용자는 복권 표면을 긁어 리워드 결과를 확인한다. 화면은 배너와 영상, 복권을 함께 배치하고 있었고 웹뷰의 실제 크기와 입력 영역을 맞춰야 했다. Canvas가 준비되지 않았는데 준비됐다고 처리하면 긁는 화면과 다음 행동이 어긋난다. 진단을 위해 모든 포인터 이동마다 DOM 크기를 읽는 것도 별개의 부담이 된다.`}),`
`,(0,f.jsxs)(t.p,{children:[`내가 보완한 범위는 `,(0,f.jsx)(t.strong,{children:`크기가 필요한 순간과 반복 입력의 순간을 어떻게 나눌 것인가`}),`였다. 여기에는 초기화 실패, 정수 비트맵 크기, 배너가 차지하는 프레임 높이, 진단용 지오메트리 측정이 함께 있었다. 성능 향상률보다 먼저 동작의 조건을 정해야 했다.`]}),`
`,(0,f.jsx)(t.h2,{children:`CSS 크기와 비트맵 크기는 따로 맞췄다`}),`
`,(0,f.jsx)(t.p,{children:`화면이 차지하는 레이아웃 크기를 읽고 Canvas의 비트맵과 입력 영역에 맞췄다. 비트맵 크기는 정수로 정규화했다. 크기가 같으면 width와 height를 다시 쓰지 않는 조건을 뒀다.`}),`
`,(0,f.jsx)(t.p,{children:`Canvas의 width·height를 다시 설정하는 것은 일반 스타일 대입과 다르다. 그리기 상태에 영향을 줄 수 있으므로 단순히 매번 같은 값을 넣으면 안전하다고 볼 수 없었다. 실제 레이아웃을 기준으로 크기를 계산하되 같은 크기에서는 기존 그리기 상태를 유지하도록 했다.`}),`
`,(0,f.jsx)(t.p,{children:`설명용 의사코드이며 실제 회사 코드가 아니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`function syncSize() {
  const rect = measureLayout();
  const next = integerBitmapSize(rect);
  if (!sameBitmapSize(canvas, next)) {
    canvas.width = next.width;
    canvas.height = next.height;
    initializeDrawingContext();
  }
  updateInputArea(rect);
}
`})}),`
`,(0,f.jsx)(t.h2,{children:`초기화 실패를 READY로 넘기지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`Canvas ref가 없거나 초기화가 실패했으면 준비 상태로 가장하지 않고 오류 상태로 드러냈다. 하지만 표시 초기화 오류가 사용자의 결과 확인 경로까지 닫아버리지 않도록 기존 scratch→stop 흐름의 완료 경로를 유지했다.`}),`
`,(0,f.jsx)(t.p,{children:`당시 클라이언트의 완료는 긁은 뒤 입력이 멈추는 타이밍과 연결돼 있었다. 리워드 결과를 승인하는 서버 역할과 화면 입력 종료를 나눠 읽었다.`}),`
`,(0,f.jsx)(t.h2,{children:`배너 높이는 다음 paint를 기다리지 않게 했다`}),`
`,(0,f.jsx)(t.p,{children:`복권만의 크기를 맞춰도 위아래 레이아웃이 바뀌면 프레임이 달라졌다. 배너 등 예약 높이를 실제 프레임 계산에 반영하고, 예약 높이 prop이 변경됐을 때 paint 전에 레이아웃을 맞추도록 보완했다.`}),`
`,(0,f.jsx)(t.p,{children:`포인터 좌표가 맞는지와 전체 프레임이 화면 안에 들어오는지는 다른 질문이었다. 프레임 높이를 늦게 반영하면 처음 보이는 배치와 이후 배치가 달라질 수 있다. 그래서 그리기 입력 안에서 이 문제를 해결하기보다 프레임 계산의 수명주기에서 다뤘다.`}),`
`,(0,f.jsx)(t.h2,{children:`진단 측정은 반복 입력 밖으로 옮겼다`}),`
`,(0,f.jsx)(t.p,{children:`스크래치 문제를 조사하려면 DOM 크기와 입력 영역을 읽을 필요가 있었다. 그렇다고 포인터마다 그 진단 측정을 반복할 필요는 없었다. 화면 진입과 상태 전이에 진단 측정을 두고, 반복 포인터 액션에서는 지오메트리 측정을 하지 않도록 분리했다.`}),`
`,(0,f.jsx)(t.p,{children:`진단이 필요한 순간을 화면 진입과 상태 전이로 특정해, 빈번한 입력과 분리했다. 문제를 조사하는 기록이 사용자의 매번 반복되는 동작에 새 측정을 붙이지 않도록 한 선택이다.`}),`
`,(0,f.jsx)(t.h2,{children:`테스트는 서로 다른 실패를 한 완료 값으로 합치지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`당시 테스트 소스에는 다음 조건이 남아 있다. 초기화, 프레임, 입력은 각각 다른 기대 결과를 사용했다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`레이아웃 크기 변경`}),(0,f.jsx)(t.td,{children:`정규화한 정수 비트맵 크기로 반영`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Canvas 요소 없음`}),(0,f.jsx)(t.td,{children:`초기화 실패를 오류로 반환`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`controller 초기화 실패`}),(0,f.jsx)(t.td,{children:`hook 상태가 READY 대신 ERROR`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`ERROR 뒤 scratch→stopScratch`}),(0,f.jsx)(t.td,{children:`기존 클라이언트 완료 경로 도달`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`예약 높이 prop 변경`}),(0,f.jsx)(t.td,{children:`프레임 계산에 즉시 반영`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`반복 포인터 액션`}),(0,f.jsx)(t.td,{children:`진단 지오메트리 측정 미호출`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`당시 테스트는 크기·초기화·입력 조건을 고정했다. 같은 크기에서 setter를 호출하지 않는 조건은 구현에서 확인한 범위다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자의 입력을 살리는 보완`}),`
`,(0,f.jsx)(t.p,{children:`스크래치 화면은 광고·서버 결과·제품 참여 흐름에 연결돼 전달됐고, 이후 크기와 초기화·paint·진단 측정의 경계를 보완했다. 여기서 남긴 구체적인 변화는 초기화 실패가 준비 상태로 숨지 않고, 프레임 높이 변화가 반영되며, 반복 입력이 진단용 측정을 매번 수행하지 않도록 한 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`Canvas에서는 같은 값을 다시 쓰는 것도 그리기 상태를 바꿀 수 있었다. 그래서 크기가 같을 때는 비트맵을 건드리지 않고, 프레임 높이의 변화는 paint 전에 반영하며, 진단용 측정은 반복 포인터 입력 밖으로 옮겼다. 매번 최신 값을 읽기보다 무엇이 실제로 바뀌었는지를 먼저 물어야 했다. 사용자의 입력을 유지하는 일과 화면 배치를 갱신하는 일을 각각 필요한 순간에 실행하도록 만든 보완이었다.`})]})}function he(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(B,{...e})}):B(e)}var ge=e({default:()=>ve,frontmatter:()=>_e}),_e={title:`정리본으로 연결한 이전 글: claude-md-meta-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.04~05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function V(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function ve(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(V,{...e})}):V(e)}var ye=e({default:()=>xe,frontmatter:()=>be}),be={title:`적립 문의 관리 제품을 만들고, 실사용의 시간차를 해결하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`운영 제품`,role:`운영 제품 FE/API client/BFF 구현·서버 계약 조율·출시 및 상태 갱신 개선`,period:`2024.12–2025.05`,summary:`운영자가 근거를 보고 적립·완료를 판단하는 FE와 BFF를 구축했다. 첫 출시의 범위를 정하고, 실사용에서 발견한 상태 반영 지연과 다음 문의 이동까지 개선한 과정.`,date:`2025-05`,dateBasis:`context`,collection:`stories`,tags:[`운영 제품`,`BFF`,`비동기 처리`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function H(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t.p,{children:[`사용자가 광고 미션을 끝냈는데 리워드를 받지 못했다고 문의했다. 운영자는 무엇부터 확인해야 할까? 문의 문장만으로는 실제 참여가 끝났는지, 이미 적립됐는지, 반복 참여 중 어느 회차의 이야기인지 알 수 없다. 같은 사용자의 기록을 많이 보여주는 것만으로도 부족하다. `,(0,f.jsx)(t.strong,{children:`이번 문의의 대상과 시점에 맞는 근거를 읽고, 그 자리에서 다음 처리를 결정할 수 있어야 했다.`})]}),`
`,(0,f.jsx)(t.p,{children:`2024년 12월부터 광고 운영 대시보드의 문의 관리 제품을 개발했다. 나는 Vue 화면, TypeScript API client와 BFF의 조회·처리 경로를 맡았다. 서버 담당자는 참여·적립 서비스와 응답을 준비했고, 제품 담당자는 운영자의 판단 순서와 출시 범위를 함께 검토했다. 개발은 2025년 1월 첫 운영 출시로 이어졌고, 실제 사용이 알려준 문제를 보완한 뒤 5월에는 다음 문의로 이어지는 흐름도 추가했다.`}),`
`,(0,f.jsx)(t.h2,{children:`정보의 양보다 같은 문의를 설명하는 문맥`}),`
`,(0,f.jsx)(t.p,{children:`상세 화면에는 문의 내용, 사용자와 캠페인, 미션별 상태, 최근·전체 이벤트, 처리 이력을 연결했다. 각 영역의 조회가 성공하는 것보다 중요한 것은 그 정보들이 같은 문의를 설명하는가였다. 예를 들어 반복 참여에서는 마지막 적립 시각과 문의 시점이 다르면, 최근 성공 기록만 보고 이번 문의도 해결됐다고 판단할 수 없다.`}),`
`,(0,f.jsx)(t.p,{children:`화면은 판단과 실행의 순서를 따라 나눴다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`운영자의 질문`}),(0,f.jsx)(t.th,{children:`화면과 API가 연결할 것`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`어떤 참여에 대한 문의인가?`}),(0,f.jsx)(t.td,{children:`문의·사용자·캠페인의 식별자와 시점`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`해당 미션은 어떤 상태인가?`}),(0,f.jsx)(t.td,{children:`미션 유형·진행·적립 상태와 이벤트`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`지금 처리할 수 있는가?`}),(0,f.jsx)(t.td,{children:`적립 가능·불가능·요청 중의 구별`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`누가 무엇을 처리했는가?`}),(0,f.jsx)(t.td,{children:`완료 담당자와 처리 이력`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`목록은 문의의 완료 여부와 페이지네이션을, 상세는 현재 대상의 판단 근거를 맡았다. 미션 카드는 처리 상태를 표현하고 요청 중에는 같은 행동을 다시 실행하지 못하게 했다. BFF에서도 정보를 읽는 요청과 적립·완료처럼 상태를 바꾸는 요청을 읽기·쓰기 권한으로 나누어 연결했다.`}),`
`,(0,f.jsx)(t.p,{children:`화면 개발 중에는 응답만으로 판단할 수 없는 부분을 서버에 되돌렸다. 미션 유형과 복수 이벤트 문맥, 완료 처리자, 목록·이력의 페이지네이션을 확인했고 조회 오류도 재현 조건과 함께 전달했다. 서버 수정이 검증 환경에 반영된 뒤 조회 회복을 확인했다. API를 주어진 데이터로만 보지 않고, 운영자의 질문에 답할 계약으로 읽은 작업이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 요구를 첫 출시에 넣지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`QA 전에 제품 담당자에게 사용 편의성과 불필요하거나 빠진 기능을 먼저 봐 달라고 요청했다. 버튼이 정상 동작하는지와 운영자가 어떤 순서로 읽는지는 다른 검토였다.`}),`
`,(0,f.jsx)(t.p,{children:`사진 확대와 상단 정보 배치 의견은 반영했다. 이벤트 검색은 후속 논의, 완료 취소는 다음 스펙으로 남겼다. 다른 캠페인을 즉시 적용하는 기능은 공용 컴포넌트 변경이 필요했고 다른 우선순위도 있었다. 다음 스프린트로 나눌 수 있는지 제품 담당자와 합의했다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이때 지킨 첫 출시의 단위는 요구 목록 전체가 아니라 `,(0,f.jsx)(t.strong,{children:`근거를 읽고 적립·완료를 실행하는 한 작업`}),`이었다. 편의 기능을 미뤄도 이 흐름은 끊어지지 않아야 했다. 반대로 화면 몇 개만 완성했다고 출시하면 원래 해결하려던 운영 판단은 남는다.`]}),`
`,(0,f.jsx)(t.p,{children:`2025년 1월 14일 서버 반영 뒤 화면과 BFF를 전달했다. 개발자들의 런타임 관찰과 제품 담당자의 실제 사용 확인을 나눴고, 운영 화면에서 처리하기 편하다는 반응이 이어졌다.`}),`
`,(0,f.jsx)(t.h2,{children:`성공 응답이 운영자의 완료가 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`실사용에서는 적립 완료 표시와 다른 이벤트 이력이 맞지 않는 문제가 나왔다. 처음에는 적립 요청 API가 성공하면 완료 안내를 띄웠다. 그러나 서버가 요청을 받아들인 순간과 화면이 다시 읽는 미션 상태에 반영된 순간 사이에는 시간이 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`완료처럼 보인 화면을 다시 확인해야 한다면 운영자는 불필요하게 기다리거나, 아직 처리 중인 일을 놓칠 수 있다. 그렇다고 무한히 화면을 잠그는 것도 답은 아니었다. 서버 담당자와 지연 제약을 논의하고, 짧은 반영 지연은 조회로 확인하되 한도를 넘으면 후속 확인을 안내하는 쪽으로 정했다.`}),`
`,(0,f.jsx)(t.p,{children:`즉시 완료 안내를 제거하고 미션별 확인 중 상태를 넣었다. 1초 간격으로 조회하며 이전 상태의 변화 또는 적립 완료 상태를 관찰했다. 상한 초과와 조회 실패는 별도 안내로 남겼다. 아래는 당시 판단을 설명하는 재구성이다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`onRequestAccepted() {
  showConfirming();
}

onMissionRead(next) {
  if (next.status !== previous.status || next.status === "converted") {
    refreshMission(next);
    endConfirmation();
  }
}
`})}),`
`,(0,f.jsx)(t.p,{children:`이 조건은 화면에서 상태가 갱신됐음을 읽는 기준이다. 적립·정산의 최종 확정은 서버의 책임으로 남았다. 타이머에도 종료 조건을 두고, 상세 화면을 떠나면 타이머와 listener를 정리했다. 숨겨지거나 비활성인 화면의 일반 재조회도 억제했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 후속 변경은 1월 23일 배포와 페이지 진입 확인으로 이어졌다. 요청 함수의 성공을 표시한 화면에서, 운영자가 확인할 시간을 표현하는 화면으로 바뀐 것이다.`}),`
`,(0,f.jsx)(t.h2,{children:`한 건을 끝내는 일과 다음 건을 준비하는 일`}),`
`,(0,f.jsx)(t.p,{children:`5월에는 완료·반려 후 다음 미처리 문의로 이동하는 개선을 추가했다. 완료된 문의를 다시 처리 중으로 되돌리는 행동은 그 문의에 남아야 하므로, 모든 상태 변경을 다음 건 이동으로 묶지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`다음 문의는 화면의 첫 행으로 추측하지 않고 서버에 현재 문의 식별자로 요청했다. 결과가 있으면 이동하고, 없으면 남은 문의가 없음을, 조회 실패면 다음 건을 불러오지 못했음을 알렸다. 현재 문의 처리가 성공한 뒤의 조회 실패를 처리 실패로 다시 안내하지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`주소가 바뀐 뒤 상세 조회가 실패하면 이전 문의의 내용·사용자·캠페인·처리 정보를 비웠다. 새 문의의 주소에서 이전 사람의 자료를 읽는 상태를 남길 수는 없었다. FE와 gateway를 함께 연결해 목록 진입과 연속 처리의 흐름을 닫았다.`}),`
`,(0,f.jsx)(t.h2,{children:`실제 사용이 제품의 완료 조건을 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`처음 만든 결과는 운영자가 한 화면에서 참여·처리 근거를 읽고 적립·완료를 실행하는 제품이었다. 출시 뒤에는 성공 응답과 상태 반영 사이의 시간차를 UI에 넣었고, 이후 한 건을 끝내고 다음 건을 준비할 때의 실패까지 구별했다.`}),`
`,(0,f.jsx)(t.p,{children:`처음의 완료 안내는 잘못된 응답을 읽어서 생긴 문제는 아니었다. API가 받아들였다는 사실은 맞았지만, 그 사실을 운영자가 문의를 끝내도 된다는 설명으로 넓혀 버렸다. 그래서 완료 안내를 없앤 변경이 중요하게 남는다. 서버 처리를 빠르게 만들 수 없는 화면에서도, 기다리는 동안 무엇을 믿고 다음 행동을 해도 되는지는 더 정확히 표현할 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`첫 출시에서는 기능을 모두 넣는 대신 한 문의를 판단하고 처리하는 흐름을 지켰다. 실사용 뒤에는 그 흐름에 빠져 있던 시간을 넣었다. 요구사항에 있는 화면을 완성하는 것과 운영자의 작업이 끝나는 조건을 찾는 것이 다르다는 생각은, 이 두 번의 선택을 함께 볼 때 더 구체적이 된다.`})]})}function xe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(H,{...e})}):H(e)}var Se=e({default:()=>we,frontmatter:()=>Ce}),Ce={title:`날짜 필터와 프리셋의 상태 일관성`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`날짜 필터 동작 협의·공용 달력의 선택 상태와 query 처리`,period:`2023`,summary:`조회하는 날짜와 달력의 선택 표시가 다르면 지금 어떤 자료를 보고 있는지 헷갈린다. 날짜 선택과 초기화가 남기는 상태를 맞춘 이야기.`,date:`2023-04-03`,dateBasis:`context`,collection:`records`,tags:[`운영 필터`,`상태 표현`,`공용 컴포넌트`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function U(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리포트의 날짜 필터에는 ‘오늘’·‘어제’·‘직접 지정’ 같은 빠른 선택이 있었다. 프리셋은 날짜 범위를 고르는 단축 선택이다. 사용자는 그 항목을 누르거나 달력에서 시작·종료 날짜를 직접 골라 자료를 조회했다.`}),`
`,(0,f.jsx)(t.p,{children:`표시의 의미를 생각해보면 질문이 생긴다. ‘오늘’을 누른 뒤 날짜를 직접 바꿨다면, 다시 연 달력은 마지막으로 누른 버튼을 기억해야 할까, 지금 조회하는 기간을 보여줘야 할까? 실제 날짜와 선택 표시가 따로 남으면 사용자는 어느 쪽이 현재 조건인지 다시 확인해야 한다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 적용 버튼이 따로 없어서 날짜를 선택하면 창이 닫히고 자료가 바로 조회됐다. 나는 실제 기간으로 조회된다면 프리셋 표시를 꼭 일치시키지 않아도 큰 문제가 아닐 수 있지 않느냐고 질문했다. 하지만 닫힌 뒤에도 기간은 계속 조회 조건으로 남고, 다시 열었을 때 그 조건을 설명할 상태도 필요했다.`}),`
`,(0,f.jsx)(t.p,{children:`날짜 범위, 달력의 선택 표시, URL에 남는 조회 조건은 따로 바뀔 수 있었다. 한 곳에서 날짜를 바꿨을 때 나머지 상태가 무엇을 뜻해야 하는지 정해야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`직접 지정한 뒤 선택 표시가 사라지지 않게`}),`
`,(0,f.jsx)(t.p,{children:`프리셋은 오늘·어제·직접 지정으로 구성했다. 직접 날짜를 고르면 직접 지정 상태가 됐다. 초기 구현에는 입력을 적용한 뒤 직접 지정 표시를 비우는 처리가 있었고, 후속 수정에서는 그 초기화를 제거했다.`}),`
`,(0,f.jsx)(t.p,{children:`날짜 선택이 끝났다는 이유로 선택 상태까지 없는 것으로 만들 필요는 없었다. 선택한 기간이 남아 있다면, 직접 지정했다는 표시도 그 기간을 설명할 수 있어야 했다. 명령을 실행한 뒤 버튼 상태를 지우는 것과 필터의 현재 상태를 보여주는 것은 다른 일이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 조건을 바꿀 때 기존 조건은 유지하기`}),`
`,(0,f.jsx)(t.p,{children:`후속 구현에서는 날짜 선택을 날짜 query의 변경으로 연결했다. 시작·종료 날짜를 갱신하면서 다른 query는 유지했다. 기간을 바꾸는 행동이 다른 필터까지 초기화하는 동작이 되지 않도록 변경할 값을 좁혔다.`}),`
`,(0,f.jsx)(t.p,{children:`달력이 초기화될 때는 현재 날짜 범위와 날짜 query를 함께 읽어 프리셋 상태를 정했다. 날짜 query가 없다면 아무 프리셋도 선택하지 않고, 현재 범위가 오늘이나 어제와 같으면 해당 항목을, 그 밖이면 직접 지정을 표시했다.`}),`
`,(0,f.jsx)(t.p,{children:`범위를 지우는 행동은 따로 다뤘다. 날짜 query와 프리셋을 함께 비우고 달력의 내부 날짜도 다시 맞췄다. 화면의 선택 표시만 없애고 URL에 이전 기간을 남기는 초기화가 되지 않게 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`날짜를 고른 뒤에도 지금 조회하는 조건이 남도록`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 날짜를 직접 고른 뒤에도 직접 지정 상태를 볼 수 있고, 초기화할 때는 날짜 query와 선택 표시를 함께 비우는 흐름을 사용할 수 있게 됐다. 달력이 초기화될 때도 현재 기간과 query로 선택을 정한다. 오늘·어제·직접 지정의 단축 선택이 마지막으로 누른 명령만 기억하는 대신, 조회 조건을 읽는 정보로 이어진 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`변경은 공용 달력의 옵션으로 두고 필요한 리포트에서 사용했으며, 후속 수정과 함께 병합했다. 다른 사용처의 UI까지 한꺼번에 바꾸지는 않았다. 날짜를 바꾸는 동작이 다른 query를 지우지 않도록 한 것도 운영자가 이미 고른 조건을 보존하는 쪽의 처리였다.`}),`
`,(0,f.jsx)(t.p,{children:`당시 내 질문은 실제 기간으로 조회된다면 표시의 일치가 얼마나 중요한가였다. 지금 다시 읽으면 사용자의 확인은 달력이 닫힐 때 끝나지 않는다. 닫힌 뒤에도 자료는 그 기간으로 보이고, 다시 열었을 때도 조건을 이해해야 한다. 입력의 성공뿐 아니라 입력 이후 남는 설명까지 제품의 상태로 봐야 한다는 배움이 이 작업에 남는다.`})]})}function we(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(U,{...e})}):U(e)}var Te=e({default:()=>De,frontmatter:()=>Ee}),Ee={title:`배포 선택기를 편하게 만들다 공용 도구의 계약을 다시 정하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공용 도구`,role:`선택 모델 재설계·설정/API/CLI와 FE 통합·소비 버전 검증`,period:`2026.07–2026.08`,summary:`긴 환경 목록을 두 선택기로 나눈 뒤 제품 결합에 대한 반론을 받아 설정 기반 모델로 바꿨다. 원본 배포 대상·실제 환경 조합·늦은 응답을 보존하며 직접 소비 버전을 검증한 과정.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`개발 도구`,`설정 계약`,`비동기 상태`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function W(e){let t={h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`배포 화면에는 길고 비슷한 환경 이름들이 한 목록에 있었다. 원하는 프로젝트를 찾은 뒤 정확한 환경을 고르는 작업인데, 화면은 처음부터 모든 이름을 같은 수준으로 보여줬다. 환경을 새로 만드는 문제가 아니라 이미 있는 대상을 더 쉽게 찾는 문제였다.`}),`
`,(0,f.jsxs)(t.p,{children:[`처음에는 프로젝트와 환경을 두 번에 나눠 고르게 했다. 그런데 편리한 화면을 만든 뒤 공용 도구에 특정 제품의 이름이 들어갔다는 반론을 받았다. 이 경험의 중심은 두 선택 상자보다 `,(0,f.jsx)(t.strong,{children:`제품의 표시 규칙을 어디에 두고, 기존 배포의 의미를 어떻게 지킬 것인가`}),`에 있었다.`]}),`
`,(0,f.jsx)(t.h2,{children:`처음부터 큰 설정 모델을 만들지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`초기 설계에서 그룹을 표시한 긴 목록, Cascader, 두 Select, 공개 설정 스키마 확장을 비교했다. 긴 목록은 탐색 부담이 남았고, Cascader는 값 변환과 키보드 동작을 확인할 비용이 있었다. 처음의 단일 사례를 위해 설정 스키마까지 바로 바꾸는 선택은 영향 범위가 컸다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 제한적으로 활성화하는 FE 선택기를 먼저 만들었다. 프로젝트를 고르면 환경 후보를 좁히되, 각 옵션에는 원래 환경 객체를 유지했다. 표시를 나누는 정보와 배포할 대상의 식별자는 다르게 취급했다.`}),`
`,(0,f.jsx)(t.p,{children:`분류에 실패한 이름이 있으면 일부 환경만 조용히 숨기지 않고 원래 평면 목록으로 돌아갔다. 편의 기능의 실패 때문에 선택 가능한 배포 대상을 잃어서는 안 됐다. 제출 요청에도 프로젝트 같은 새 UI 필드를 추가하지 않고 기존 환경 이름을 보냈다.`}),`
`,(0,f.jsx)(t.h2,{children:`반론은 UI가 아니라 규칙의 주인을 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`제품 전용 이름을 공용 코드가 해석하면, 다른 저장소가 다른 순서를 쓸 때 도구 자체를 고쳐야 한다. 이 결합에 대한 리뷰를 수용해 표시 규칙을 소비 저장소의 선언으로 옮겼다.`}),`
`,(0,f.jsx)(t.p,{children:`정확히 두 차원의 이름·순서·표시와 허용 값을 설정으로 표현하고, 공용 도구는 그 선언과 원본 환경 목록을 읽도록 했다. Go 설정 처리와 API·CLI, 프론트엔드 소비 모델을 함께 바꿨다. AI에 구현과 변경 준비를 맡겼지만 바뀐 요구와 검증할 대상을 정하는 일은 내가 이어 갔다.`}),`
`,(0,f.jsx)(t.p,{children:`범용화한다고 무한한 계층 선택기를 만들지는 않았다. 필요한 두 차원을 선언하게 하고 기존 환경 식별자는 계속 보존했다. 변화의 크기를 문제에 맞춘 일반화였다.`}),`
`,(0,f.jsx)(t.h2,{children:`허용된 값의 곱이 실제 환경은 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`설정에 프로젝트와 환경의 허용 값이 있다고 그 모든 조합이 존재하는 것은 아니다. 예를 들어 프로젝트 A의 운영 환경만 있는데, 값 목록을 곱해 검증 환경까지 만들어 보여주면 선택할 수 없는 대상을 UI가 발명한다.`}),`
`,(0,f.jsx)(t.p,{children:`선택지는 실제 원본 환경들을 해석해 만들었다. 설정은 이름을 어떻게 읽을지 정하고, 존재 여부는 원본 환경 목록이 정했다. 그룹만 고른 이력 조회도 해당 그룹에 실제 존재하는 환경 이름들로 요청했다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`정보`}),(0,f.jsx)(t.th,{children:`맡은 의미`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`표시 설정`}),(0,f.jsx)(t.td,{children:`두 차원과 이름·순서를 해석하는 방법`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`원본 환경 목록`}),(0,f.jsx)(t.td,{children:`실제 선택하고 조회할 수 있는 대상`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`제출 값`}),(0,f.jsx)(t.td,{children:`기존 실행 계약의 원본 환경 이름`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`설정이 잘못됐을 때도 표시 설정의 오류와 core 배포 설정의 오류를 나눴다. 편의 설정은 경고와 평면 목록으로 돌아갈 수 있지만, 실행할 설정까지 잘못된 일을 정상처럼 넘기는 것은 다른 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`환경을 바꾸면 이전 조회의 권한도 끝난다`}),`
`,(0,f.jsx)(t.p,{children:`A의 배포 정보를 읽는 동안 사용자가 B로 바꿀 수 있었다. 선택 상자는 B인데 늦은 A의 응답이 화면을 채우면, 화면의 의미와 실제 대상이 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`환경 변경 때 현재·최근 결과와 pending request를 비웠다. 응답을 적용할 때는 요청 식별자와 요청했던 원본 환경이 지금 선택과 같은지 함께 확인했다. 같은 환경에서도 새 refresh가 시작될 수 있어 환경 이름만 비교하는 것으로는 부족했다.`}),`
`,(0,f.jsx)(t.p,{children:`Rollback에서는 조회 이력뿐 아니라 선택한 배포 대상도 초기화했다. 늦은 조회를 막았더라도 A에서 고른 실행 입력을 B에서 들고 있으면 문제가 남는다. 조회 데이터와 다음 명령의 대상이 같은 환경을 설명해야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`정상 화면이 새 구현의 성공을 증명하지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`새 설정이 들어가도 제품 전용 구 분기가 남아 있으면 같은 화면이 나올 수 있었다. 그 상태에서는 새 선언이 잘못돼도 이전 코드가 성공을 대신 설명한다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 소비 저장소의 선언과 공용 도구의 전용 분기 제거가 함께 들어간 버전을 검증 대상으로 다시 정했다. 배포는 직접 진행해 환경 선택과 실제 배포를 확인했다. 보이는 선택기의 모양뿐 아니라 원래 배포 대상이 요청에 남는지를 확인하는 작업이었다.`}),`
`,(0,f.jsx)(t.p,{children:`후속에서는 Home·Lock·Rollback의 탐색도 같은 계약으로 연결했다. Lock 환경별 탐색에 대한 동료의 감사가 있었고, 최근 배포 대상을 사용한 rollback도 확인했다. 오래된 SHA의 branch guard는 DevOps 동료의 작업이었다. 내가 바꾼 선택기와 배포 backend의 안전장치를 같은 성과로 합치지 않았다.`}),`
`,(0,f.jsx)(t.h2,{children:`편의를 더하면서 실행의 의미는 그대로 두기`}),`
`,(0,f.jsx)(t.p,{children:`저장소는 표시 규칙을 선언할 수 있게 됐고, 도구는 제품 이름을 덜 알아도 실제 환경을 보여줄 수 있었다. 선택 변경과 늦은 응답을 함께 다뤘고, 구 구현이 성공을 대신하지 못하는 조합에서 소비 동작을 확인했다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 이 작업을 돌아보면 두 번의 재판단이 남는다. 리뷰에서는 편리한 화면이 공용 도구에 제품 지식을 넣고 있다는 점을 봤고, 배포 확인에서는 정상 화면을 구 코드가 대신 만들 수 있다는 점을 봤다. 하나는 규칙을 어디에 둘지, 다른 하나는 무엇을 성공의 증거로 볼지를 바꿨다.`}),`
`,(0,f.jsx)(t.p,{children:`다음에 비슷한 편의 기능을 만든다면 화면의 모양보다 그 도구가 새로 알아야 할 것과 검증이 구별해야 할 것을 먼저 적고 싶다. 두 선택 상자를 잘 만드는 문제보다 그 질문이 오래 남은 경험이었다.`})]})}function De(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(W,{...e})}):W(e)}var Oe=e({default:()=>Ae,frontmatter:()=>ke}),ke={title:`오류 로그 설계: 진단 정보와 민감 값의 균형`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`정보 설계`,role:`오류 표현 보강·공통 전송 경계 정제·예외 입력 테스트`,period:`2026`,summary:`오류가 났다는 말만 남으면 원인을 찾기 어렵고, 원문을 다 보내면 민감한 값이 섞일 수 있다. 필요한 단서와 전송 범위를 함께 다룬 이야기.`,date:`2026-09-30`,dateBasis:`context`,collection:`records`,tags:[`진단 정보`,`전송 경계`,`오류 처리`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function G(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`문제가 난 뒤 오류 기록을 열었는데 “오류가 났다”는 정도만 알 수 있다면 다음 조사를 시작하기 어렵다. 어떤 조건에서 실패했는지 나타내는 코드나 설명이 있어야 볼 위치를 좁힐 수 있다. 기록을 남겼다는 사실과 그 기록이 질문에 답한다는 것은 달랐다.`}),`
`,(0,f.jsxs)(t.p,{children:[`객체 형태의 오류를 단순 문자열로 바꾸면 `,(0,f.jsx)(t.code,{children:`[object Object]`}),`가 될 수 있다. 이는 오류의 설명이 아니라 자바스크립트 객체라는 표시다. 안에 코드와 메시지가 있어도 그 내용이 텍스트에 남지 않으면 진단 단서가 사라진다.`]}),`
`,(0,f.jsx)(t.p,{children:`반대 방향에도 비용이 있었다. 받은 오류를 통째로 전송하면 메시지에 섞인 URL, 인증 정보, 사용자 식별값도 따라갈 수 있다. 고장 신고서에 필요한 설명과 보내지 말아야 할 값이 같이 적혀 있는 상황에 가깝다. 더 자세한 기록이 무조건 더 좋은 기록은 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`앞선 작업에서는 공통 오류 정제 경계를 넣었고, 후속 작업에서는 객체 오류의 표현을 보강했다. 읽을 단서를 보존하는 일과 전송할 정보를 제한하는 일을 함께 다루되, 한 번의 문자열 변환으로 모두 해결하려고 하지는 않았다.`}),`
`,(0,f.jsx)(t.h2,{children:`Error와 객체 오류를 같은 변환으로 다루지 않기`}),`
`,(0,f.jsxs)(t.p,{children:[`오류 메시지를 만드는 함수에서 `,(0,f.jsx)(t.code,{children:`Error`}),`이면 메시지를, 문자열이면 그 값을 사용했다. 그 밖의 값은 JSON 직렬화를 시도했다. 객체에 담긴 오류 코드와 설명이 단순한 객체 이름으로 사라지지 않게 하는 처리였다.`]}),`
`,(0,f.jsx)(t.p,{children:`이 과정에서도 예외가 생길 수 있다. 순환 참조가 있는 객체는 JSON으로 만들 수 없다. 그 경우에는 직렬화할 수 없다는 대체 메시지를 반환하고, 긴 결과에는 길이 제한과 잘렸다는 표시를 뒀다. 오류를 기록하는 코드가 또 다른 직렬화 오류를 남기며 원래 질문을 가리지 않도록 했다.`}),`
`,(0,f.jsx)(t.p,{children:`객체 코드가 보존되는 입력, 직렬화가 실패하는 입력, 긴 문자열을 테스트에 넣었다. 이 후속 변경은 정보를 더 많이 수집하려는 것이 아니라, 기존 오류 표현에서 사라지던 구조를 읽을 수 있게 하는 변경이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`수집하는 곳에서 한 번 더 경계를 두기`}),`
`,(0,f.jsx)(t.p,{children:`공통 이벤트 수집 쪽에서는 오류 메시지 계열의 문자열 필드에 정제를 적용했다. 개별 오류를 기록하는 사용처마다 같은 규칙을 직접 붙이는 대신, metadata를 더해 전송할 이벤트를 만들기 전에 처리했다.`}),`
`,(0,f.jsx)(t.p,{children:`안전한 오류 문맥은 유지하고, 이메일·전화번호·토큰 등 구현에서 정한 패턴은 치환하거나 메시지 전체를 가렸다. 인코딩이나 escape 때문에 원문에서 바로 보이지 않는 패턴도 검사하도록 했다. 정제 후에도 메시지가 길면 전송할 길이를 제한했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 선택에는 정보 손실의 비용이 있다. 민감한 값이 섞인 메시지를 가리면 원인을 좁힐 단서도 함께 없어질 수 있다. 그렇다고 판별하기 어려운 원문을 일단 모두 보내는 쪽으로 가지는 않았다. 오류 코드 같은 진단 문맥을 남길 수 있는 경우와, 메시지를 가려야 하는 경우를 나눴다.`}),`
`,(0,f.jsx)(t.h2,{children:`문자열을 고치는 일이 다른 필드를 바꾸지 않도록`}),`
`,(0,f.jsx)(t.p,{children:`정제 대상은 문자열인 오류 메시지 필드로 제한했다. 다른 이벤트 속성을 같은 규칙으로 바꾸거나 원본 객체를 직접 수정하지 않았다. 정제가 필요한 값이 있으면 새 객체를 만들고, 바꿀 값이 없으면 기존 참조를 유지했다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서는 일반 오류 문맥 유지, 인코딩된 민감 패턴, 긴 입력과 절단 경계, 원본 객체의 불변성을 다뤘다. 수집 정책이 다른 경로에서도 공통 정제 경계를 사용하는 검사도 있었다. 규칙을 만드는 것과 실제 전송 지점에서 그 규칙을 쓰는 것을 함께 확인해야 했기 때문이다.`}),`
`,(0,f.jsx)(t.h2,{children:`객체 오류의 표현과 전송 정보를 따로 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`오류를 살피는 쪽에는 단순한 객체 이름 대신 코드와 설명을 읽을 수 있는 표현이 생겼다. 직렬화할 수 없는 입력에는 대체 메시지를 남기고 긴 표현은 제한했다. 수집 경계에서는 오류 메시지 계열 필드와 구현한 패턴에 따라 전송할 정보를 줄였다. 공통 정제와 표현 보강은 각 변경으로 병합됐다.`}),`
`,(0,f.jsx)(t.p,{children:`이 결과의 의미는 오류 원문을 더 많이 모으는 것이 아니었다. 정보 손실 때문에 질문을 시작하지 못하는 경우와, 진단을 위해 다른 정보를 무작정 전달하는 경우 사이에 기준을 둔 것이다. 기존 이벤트 속성을 직접 바꾸지 않는 조건도 그 수집 흐름의 일부였다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 이 작업을 돌아보면 로그의 품질을 길이나 양으로만 판단할 수 없다는 점이 남는다. 어떤 오류인지 읽히는 모양과 전송해도 되는 범위를 함께 정해야 했다. 그래서 오류 표현을 만드는 코드와 전송할 정보를 제한하는 코드를 각각의 책임으로 뒀다.`})]})}function Ae(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(G,{...e})}):G(e)}var je=e({default:()=>Ne,frontmatter:()=>Me}),Me={title:`정리본으로 연결한 이전 글: dispatch-routing-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function K(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Ne(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(K,{...e})}):K(e)}var Pe=e({default:()=>Ie,frontmatter:()=>Fe}),Fe={title:`참여 화면의 라우팅과 추천 노출 조건 통합`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`판별 API 협의·라우팅 구현·리뷰 기반 범위 선택`,period:`2025`,summary:`같은 사용자라도 들어온 경로에 따라 화면과 추천 배너가 달라질 수 있었다. 이동 조건의 순서와 도착한 화면의 노출을 함께 맞춘 이야기.`,date:`2025`,dateBasis:`context`,collection:`records`,tags:[`라우팅`,`기존 데이터`,`리뷰`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function q(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`추천 배너를 특정 사용자군에만 보여주는 기능을 다뤘다. 같은 사용자와 캠페인이라면 추천 대상이라는 판정은 같아야 한다. 그런데 각 페이지가 이동 조건을 따로 해석하면, 어디로 들어왔는지에 따라 다른 화면으로 보내거나 다른 영역을 보여줄 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`이때는 게임·일반·추천 화면으로 가는 조건이 여러 곳에 걸쳐 있었다. 한 사람이 둘 이상의 조건을 만족할 수도 있었다. 예를 들어 게임 영상이 있는 캠페인에 들어온 사용자가 추천 대상이기도 하면, 게임 화면과 추천 화면 중 무엇을 먼저 선택해야 할까? 조건이 맞는지만 확인해서는 목적지가 정해지지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`이동을 맞춰도 도착한 화면에 문제가 남을 수 있었다. 추천을 제한할 대상 구분 없이 배너를 보여주면 라우터가 한 판정을 페이지가 다시 무너뜨린다. 실제로 게임 화면에서 실험군·대조군 구분 없이 추천 배너가 동작하던 수정도 함께 다뤘다.`}),`
`,(0,f.jsx)(t.p,{children:`나는 서버의 판별을 외부 API에서도 사용할 필요를 설명하고 요청했고, FE에서는 이동 조건을 공용 라우터로 모았다. 같은 사람을 어디로 보낼지와 그곳에서 무엇을 보여줄지가 이어져야 하는 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`분기를 한곳에 모아도 순서는 남는다`}),`
`,(0,f.jsx)(t.p,{children:`라우터에는 현재 경로와 판별에 필요한 context를 전달했다. 대상 경로가 현재와 같으면 다시 이동하지 않고, 판별 과정에서 오류가 나면 현재 흐름을 유지하도록 했다. 이동할 때는 기존 query 정보를 이어서 전달했다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 조건을 공용 함수에 모았다고 분기의 의미까지 자동으로 맞지는 않았다. 첫 구현에서는 추천 대상 판별이 게임 영상 조건보다 앞에 있었다. 두 조건을 모두 만족하는 경우 무엇이 우선인지가 여전히 문제였다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 변경에서는 게임 영상이 있는 경우의 경로를 먼저 고르고, 그다음 추천 대상, 그다음 설정된 경로를 보도록 순서를 바꿨다. 이렇게 하면 게임 영상 조건과 추천 대상이 겹쳐도 게임 경로가 먼저 선택된다. 기본 경로를 사용하는 context도 함께 맞췄다.`}),`
`,(0,f.jsx)(t.p,{children:`조건이 모두 참인지 검사하는 것과 어느 조건의 결과를 먼저 쓸지 정하는 것은 다른 일이었다. 이 순서는 단순 배열 배치가 아니라 상품이 요구하는 행동이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`노출 조건은 이동 뒤의 페이지에도 필요했다`}),`
`,(0,f.jsx)(t.p,{children:`실험군·대조군 구분 없이 추천 배너가 동작하던 문제를 수정해 배포했다고 보고한 기록도 있다. 이때 필요한 것은 목적지로 보내는 라우터만이 아니었다. 도착한 페이지에서 추천 API와 영역을 사용할 조건도 사용자군과 맞아야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`라우팅과 렌더링이 각자 판별하면 한쪽만 고쳐도 다른 쪽의 노출이 남는다. “어디로 보낼 것인가”와 “그 화면에서 무엇을 보여줄 것인가”를 같은 조건에서 읽어야 하는 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`새 캐시보다 이미 받은 데이터가 먼저였다`}),`
`,(0,f.jsx)(t.p,{children:`리뷰에서는 context를 이미 읽었는데 다시 조회하는 부분이 지적됐다. 캐시도 없는 상태라 같은 정보를 얻기 위해 요청이 겹치고 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`대안으로 이미 받은 context를 전달하는 방법과 요청 캐싱·네트워크 계층 정리가 논의됐다. 나는 먼저 페이지가 받은 context를 공용 라우터에 넘기는 좁은 변경을 선택했다. 판별을 위해 같은 정보를 다시 조회하지 않아도 됐고, 이동과 노출 조건의 정리에 집중할 수 있었다. 큰 네트워크 계층 리팩토링은 후속 기술부채로 남겼다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 조건을 페이지마다 다시 해석하지 않도록`}),`
`,(0,f.jsx)(t.p,{children:`바뀐 경로에서는 게임 영상 조건과 추천 대상이 겹쳐도 적용할 순서가 공용 라우터에 남는다. 도착한 화면에서 추천을 사용할 대상도 함께 맞췄고, 실험군·대조군 구분 없이 배너가 동작하던 문제의 수정·배포를 보고했다. 사용자에게 보낼 화면과 그 화면의 노출 조건을 따로 고쳐 서로 어긋나는 대신, 같은 판별을 이어서 쓰도록 만든 변화였다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 다시 조건을 읽는다면 한 페이지의 if문만 보지 않을 것이다. 같은 사람이 둘 이상의 조건을 만족할 때의 우선순위와, 도착한 화면에서도 그 판정이 유지되는지까지 이어서 봐야 한다. 이번 경험에서 중요했던 것은 분기를 한곳에 모은 사실보다, 한 사람의 화면 경험을 여러 경로에 걸쳐 설명할 수 있게 한 점이다.`})]})}function Ie(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(q,{...e})}):q(e)}var Le=e({default:()=>ze,frontmatter:()=>Re}),Re={title:`모바일 브라우저 진입 시 화면 잘림 진단`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`외부 진입 화면 진단·레이아웃과 navigation 경계 분리·호환 처리`,period:`2026`,summary:`처음 열면 화면이 잘리는데 새로고침하면 정상이다. 같은 페이지가 다르게 보이는 이유를 광고 공간과 브라우저 진입 조건으로 나눠 살핀 과정.`,date:`2026-09-03`,dateBasis:`context`,collection:`stories`,tags:[`모바일 브라우저`,`원인 진단`,`호환성`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function J(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`외부 앱에서 콘텐츠 링크를 누르면 iPhone Chrome의 새 탭이 열렸다. 그 첫 화면에서는 콘텐츠가 잘려 보였다. 그런데 같은 탭을 새로고침하면 정상으로 돌아왔다. 사용자가 처음 들어오는 순간에만 화면을 제대로 보기 어려운 문제였다.`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 작은 화면에 콘텐츠가 너무 큰 것인지, 상단 광고가 늦게 붙으며 내용을 밀어낸 것인지 의심할 수 있었다. 이 화면에는 광고 공간도 있었으므로 실제로 살펴볼 이유가 있는 가설이었다. 화면 높이나 CSS를 손대면 해결될 것처럼 보이기도 했다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 같은 페이지를 다시 읽는 것만으로 정상화된다면, 단순히 콘텐츠가 큰 것만으로는 설명이 부족했다. 화면이 잘린다는 모양만 보고 CSS를 바꾸기 전에, 광고가 붙는 시점과 외부 앱에서 브라우저를 처음 여는 순서가 어떤 차이를 만드는지 살펴볼 필요가 있었다.`}),`
`,(0,f.jsx)(t.h2,{children:`슬롯을 고친 뒤에도 남은 증상`}),`
`,(0,f.jsx)(t.p,{children:`광고 설정을 기다리는 동안 슬롯까지 사라지면, 광고가 준비된 뒤 콘텐츠가 아래로 밀린다. 슬롯을 비동기 설정 gate 밖에 두고 최초 HTML부터 공간을 예약하도록 바꿨다. 광고 요청 여부는 내부에서 판단하되 그 공간은 유지하는 방식이었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 변경은 광고 준비 상태에 따라 레이아웃이 달라지는 경로를 줄였지만, 외부 앱에서 처음 열었을 때의 화면 왜곡은 남았다. 하나의 수정으로 두 문제를 해결했다고 닫을 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`깨진 화면과 새로고침 뒤 정상 화면에서 viewport 높이, 문서 높이, 스크롤 위치, 배너 슬롯의 사각형을 비교했다. 관찰 시점의 값은 같았고, 슬롯도 이미 위쪽에 자리하고 있었다. 화면이 다르게 보인다는 사실을 DOM의 overflow나 슬롯 부재만으로 설명하기 어려워졌다.`}),`
`,(0,f.jsx)(t.h2,{children:`CSS를 더 바꾸기 전에 진입 경계를 나누기`}),`
`,(0,f.jsx)(t.p,{children:`문제는 같은 콘텐츠에서도 외부 앱에서 새 탭으로 처음 들어오는 조건에 묶여 있었다. 정상 상태의 geometry를 바꾸는 넓은 CSS 수정 대신, 첫 document navigation과 후속 navigation의 차이를 살폈다.`}),`
`,(0,f.jsx)(t.p,{children:`관찰이 가리킨 것은 페이지가 계산한 크기와 브라우저가 실제로 보여주는 영역 사이의 차이였다. 특정 브라우저 내부 callback을 원인으로 확정한 것은 아니었다. 브라우저의 표시 단계라는 가설과, 제품에서 적용할 수 있는 호환 처리를 나눴다.`}),`
`,(0,f.jsxs)(t.p,{children:[`최종 구현에서는 대상 최초 진입에만 같은 origin의 경량 문서를 거쳐 원래 화면으로 돌아오게 했다. hydration 전에 이동하고, 경량 문서의 `,(0,f.jsx)(t.code,{children:`pageshow`}),` 또는 완료 상태를 지난 뒤 두 번의 `,(0,f.jsx)(t.code,{children:`requestAnimationFrame`}),`을 거쳐 복귀했다. 단순히 화면 높이를 다시 계산하는 대신 후속 문서 이동을 통과시키는 절차였다.`]}),`
`,(0,f.jsx)(t.h2,{children:`우회도 실행 조건과 비용을 가진다`}),`
`,(0,f.jsx)(t.p,{children:`모든 화면과 모든 브라우저를 왕복시키지는 않았다. 대상 콘텐츠 경로, iOS Chrome, 최초 navigation, 비어 있는 referrer 조건을 확인했다. 같은 URL에 대한 marker로 복귀 후 다시 우회하는 반복을 막았다.`}),`
`,(0,f.jsxs)(t.p,{children:[`복귀 주소는 같은 origin과 허용한 콘텐츠 경로인지 검사했다. `,(0,f.jsx)(t.code,{children:`replace`}),`를 사용해 경량 문서가 별도의 뒤로 가기 단계로 남지 않게 했다. 정상 화면으로 돌아오는 것만큼 우회가 새로운 탐색 흐름을 만들지 않는 것도 중요했다.`]}),`
`,(0,f.jsx)(t.p,{children:`비용은 남았다. 대상 진입은 문서를 한 번 더 거치며 원래 HTML을 다시 요청할 수 있다. 이 절차를 제거하려면 브라우저 버전이 올랐다는 이유만으로 판단하기보다, 같은 외부 최초 진입에서 화면과 요청 흐름을 다시 비교해야 한다.`}),`
`,(0,f.jsx)(t.h2,{children:`정상화한 경로와 아직 설명하지 못한 내부 원인`}),`
`,(0,f.jsx)(t.p,{children:`당시 실제 기기에서 확인한 대상 환경에서는, 새로고침해야 정상으로 보이던 최초 진입 화면이 정상으로 표시됐다. 서로 다른 대상 콘텐츠에서 이 결과를 확인했고, 슬롯 예약·제한된 bootstrap 왕복·진입과 복귀 조건 테스트를 포함한 변경도 병합됐다. 사용자가 콘텐츠에 처음 들어오는 경로를 정상으로 보게 한 것이 이 작업에서 확인한 화면 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`정상화는 우회 절차 전체의 결과다. 두 프레임 대기만의 효과나 브라우저 내부 원인을 단독으로 확정한 것은 아니다.`}),`
`,(0,f.jsx)(t.p,{children:`내가 방향을 바꾼 계기는 깨진 화면과 정상 화면의 DOM 측정값이 같다는 관찰이었다. 그 값이 증상을 설명하지 못하는데 CSS를 계속 바꾸는 것은 답에 가까워지는 일이 아니었다. 새로운 수정안을 더 내기 전에, 내가 바꾸려는 값이 실제 화면의 차이를 설명하는지부터 물어야 했다.`})]})}function ze(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(J,{...e})}):J(e)}var Be=e({default:()=>Ue,frontmatter:()=>Ve}),Ve={title:`광고 참여 화면을 서버 템플릿에서 독립 FE 앱으로 옮기기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`구조 전환`,role:`제약 설명·팀/인프라 협업·정적 앱/workflow 구현`,period:`2023.12–2024.05`,summary:`화면 변경도 서버의 검토·배포를 거치던 구조에서 정적 FE 앱과 검사·전달 workflow를 만들었다. 기존 인프라를 재사용하고 일부 상품부터 전환하며 개발 구조와 운영 부담을 나눈 과정.`,date:`2024-05`,dateBasis:`context`,collection:`stories`,tags:[`전달 구조`,`단계 전환`,`협업`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function He(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`새 FE 앱의 초기 변경을 리뷰받을 때 상품 코드와 환경 설정을 별도 PR로 나눠 달라는 요청을 받았다. 앱을 실행하고 전달할 수 있게 만드는 것과, 동료가 그 변경을 검토할 수 있게 만드는 것은 같은 일이 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`전환 전 광고 참여 화면은 서버의 HTML 템플릿 안에 있었다. 화면의 문구와 표현을 바꾸는 변경도 서버의 리뷰·테스트·배포를 함께 거쳤고 FE 라이브러리와 컴포넌트 재사용에도 제약이 있었다. 이 구조를 나누는 작업이었지만, 단순히 폴더를 옮겨서는 새로운 검토와 전달의 경로가 생기지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`2023년 12월부터 팀과 방향을 논의했고 2024년 1월 초기 앱을 전달했다. 인프라 담당자의 협업을 받아 기존 전달 경로를 연결하고 일부 상품부터 전환했다. 렌더링과 운영 선택을 정리한 RFC는 구현 이후인 5월에 남겼다.`}),`
`,(0,f.jsx)(t.h2,{children:`앱을 분리하는 선택과 서버를 늘리는 선택`}),`
`,(0,f.jsx)(t.p,{children:`이전의 장단점을 동료에게 물었고, 기존 FE 프로젝트를 재사용하자는 추천을 받아 프론트엔드 동료들과 방향을 논의했다. 새 앱을 만들더라도 모노레포와 공유 패키지, 기존 인프라를 어디까지 이용할지는 함께 결정해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`Next.js를 선택했다고 요청마다 렌더링하는 새 서버까지 운영할 필요는 없었다. 구현은 정적 export로 파일을 만들고 기존 S3·CloudFront 전달 경로에 연결하는 방식으로 시작했다.`}),`
`,(0,f.jsx)(t.p,{children:`5월 후속 RFC에서는 광고에서 진입하는 화면의 낮은 SEO 필요, 당시 FE 인력과 별도 서버의 운영 대응 부담을 함께 설명했다. 정적 산출물로 시작하되 이후 서버 렌더링이 필요해질 여지는 남겼다. 초기 논의와 구현으로 먼저 경로를 전달하고, 사용하던 구조의 이유를 후속 문서로 정리한 순서였다.`}),`
`,(0,f.jsx)(t.p,{children:`이 구분은 프레임워크 이름보다 운영할 범위를 명확히 했다. FE 앱의 개발 구조를 바꾸는 것과 새로운 렌더링 서버의 장애·배포를 맡는 것은 다른 결정이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`검사한 파일이 실제 전달할 파일이어야 했다`}),`
`,(0,f.jsx)(t.p,{children:`새 앱에는 로컬 실행과 빌드뿐 아니라 PR 검사와 전달 workflow가 필요했다. 앱과 공유 패키지 변경을 검사하고, 실제 정적 빌드 결과를 기존 저장소에 동기화한 뒤 CDN 캐시를 갱신하도록 연결했다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`앱·공유 코드 변경
  → lint·format·test
  → 정적 빌드
  → 산출물 동기화
  → CDN 갱신
  → workflow의 성공·실패 보고
`})}),`
`,(0,f.jsx)(t.p,{children:`파일 업로드가 끝나도 CDN 갱신이 실패하면 전달의 마지막 단계가 남는다. 앞 단계가 실행됐다는 사실로 전체 성공을 선언하지 않도록 workflow 상태를 연결했다. 이것이 업로드를 원자적으로 롤백하는 시스템을 만든 것은 아니다. 내가 만든 범위는 검사한 산출물의 전달 순서와 실패 보고였다.`}),`
`,(0,f.jsx)(t.p,{children:`실행·검사·배포 방법을 같은 앱의 문서로 남겼다. 코드를 옮긴 사람만 실행할 수 있는 앱이 아니라, 다음 화면을 맡을 개발자도 변경 경로를 따라갈 수 있게 하려는 작업이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`리뷰는 실행 가능한 변경의 다른 비용을 보여줬다`}),`
`,(0,f.jsx)(t.p,{children:`초기 변경에는 앱 전달 구조와 상품 동작, 환경 설정이 함께 들어 있었다. 사람 리뷰에서 상품 코드와 환경 설정을 별도 PR로 나눠 달라는 요청을 받았다.`}),`
`,(0,f.jsx)(t.p,{children:`상품의 행동을 읽다가 환경의 위험을 놓치거나, 환경을 보다가 상품 규칙을 놓칠 수 있었다. 구현이 실행된다는 사실과 동료가 이해하고 검토할 수 있는 단위는 같지 않았다. 처음부터 깔끔하게 분리한 경험이 아니라, 전달할 변경을 어떻게 설명해야 하는지 피드백을 받은 경험이었다.`}),`
`,(0,f.jsx)(t.p,{children:`인프라 담당자의 도움도 필요했다. 정적 파일 전달 기반을 내가 새로 만들었다고 할 수는 없다. 독립 앱이 생성하는 산출물을 그 기반에 연결한 개발과 협업이 내 책임이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 화면을 한 번에 옮기지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`일부 시험 상품부터 새 경로를 사용하고 기존 경로와 함께 두었다. 오류 페이지와 남은 상품의 진행 상태도 따로 안내했다.`}),`
`,(0,f.jsx)(t.p,{children:`공존은 복잡성을 없애는 선택이 아니었다. 어느 상품이 어느 경로를 사용하는지 계속 설명해야 했다. 대신 기존 상품의 전달을 한 번에 바꾸지 않고 새 앱의 산출물을 쓰는 범위를 늘릴 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`전환 뒤에는 리워드 표시와 계측, CTA와 서버 이벤트 오류, 후속 상품을 같은 FE 환경에서 개발했다. 공유 컴포넌트를 추상화하고 재사용하는 변경도 이어졌다. 폴더 분리의 실험에서 끝나지 않고 실제 다음 개발이 사용하는 경로가 된 것이다.`}),`
`,(0,f.jsx)(t.h2,{children:`새 기술보다 변경을 전달할 경로가 남았다`}),`
`,(0,f.jsx)(t.p,{children:`개발자는 해당 화면을 설치·검사·빌드하고 정적 산출물을 기존 인프라로 전달할 수 있게 됐다. 일부 상품이 실제로 새 경로를 사용했고, 후속 상품과 공용 기능 개발이 이어졌다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 돌아보면 새 앱을 실행한 장면만으로 이 전환을 설명하기는 어렵다. 사람 리뷰에서 상품 코드와 환경 설정을 나눠 달라는 요청을 받은 장면이 함께 남는다. 내가 실행할 수 있는 변경과 동료가 검토해 다음으로 넘길 수 있는 변경은 같은 단위가 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`독립 앱의 의미도 그때의 선택을 함께 읽을수록 달라진다. 폴더와 프레임워크를 분리한 결과보다, 검사한 산출물을 기존 인프라에 전달하고 남은 상품의 경로를 설명할 수 있는 결과가 더 중요했다. 다음 사람이 무엇을 확인하고 어디서 이어갈지까지 연결한 것이 이 전환에서 남긴 일이었다.`})]})}function Ue(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(He,{...e})}):He(e)}var We=e({default:()=>Ke,frontmatter:()=>Ge}),Ge={title:`묶음 응답의 순서와 부분 실패 계약 테스트`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`AI와 묶음 응답의 위치·식별 계약 테스트 보강`,period:`2026`,summary:`둘째 결과가 없다고 셋째 결과를 둘째 칸에 넣으면 다른 요청의 결과가 된다. 빈 자리까지 지켜야 하는 묶음 응답의 약속을 테스트한 이야기.`,date:`2026-10-01`,dateBasis:`context`,collection:`records`,tags:[`외부 연동`,`부분 응답`,`계약 테스트`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function Y(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`A·B·C 세 요청을 한 묶음으로 보내고, 각각의 결과를 같은 번호의 칸에 받는다고 해보자. B의 결과가 없다고 그 칸을 지워버리면 C의 결과가 둘째 칸으로 당겨진다. 사용하는 쪽이 둘째 칸을 B의 결과라고 읽는 순간, 단순한 누락이 다른 대상에 잘못 붙는 문제로 바뀐다.`}),`
`,(0,f.jsx)(t.p,{children:`결과가 두 개 있다는 사실보다 어느 요청의 결과가 없는지를 남겨두는 것이 중요하다.`}),`
`,(0,f.jsx)(t.p,{children:`광고 공급사에 여러 요청을 묶어 보내는 adapter에서도 이 위치 계약이 있었다. adapter는 받은 소재를 각 요청의 결과로 바꾸는 중간 코드다. 공급사가 요청 수보다 적은 소재를 보내거나 중간 소재가 무효일 때도, 나머지를 다른 요청에 연결해서는 안 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`이 기존 동작을 AI와 함께 테스트로 보강했다. 광고가 몇 개 반환됐는지만 확인하는 대신, 비어 있는 위치와 앞뒤 요청의 식별 관계를 검사해야 하는 이유였다.`}),`
`,(0,f.jsx)(t.h2,{children:`없다는 결과도 자리를 가진다`}),`
`,(0,f.jsxs)(t.p,{children:[`기존 구현은 요청 수만큼 결과 배열을 만들었다. 유효한 소재를 받은 위치에만 결과를 넣고, 무효하거나 돌아오지 않은 위치는 `,(0,f.jsx)(t.code,{children:`nil`}),`로 남겼다. 일부가 비었다고 나머지 결과를 앞에서부터 채우는 방식은 아니었다.`]}),`
`,(0,f.jsx)(t.p,{children:`여기서 중요한 것은 광고가 있느냐뿐 아니라 어느 요청의 광고냐였다. 반환된 결과에는 원래 요청의 식별자가 붙어야 하고, 중간 소재가 무효라고 뒤 소재의 대응 관계가 달라져서는 안 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`검사할 입력은 두 종류로 나눴다. 공급사의 소재 수가 요청 수보다 적은 경우와, 소재 수는 맞지만 중간 소재가 무효인 경우다. 둘 다 일부 결과가 없지만 배열이 만들어지는 경로는 달랐다.`}),`
`,(0,f.jsx)(t.h2,{children:`짧은 응답과 중간의 무효 응답`}),`
`,(0,f.jsx)(t.p,{children:`첫 테스트에서는 세 요청에 두 소재만 반환하도록 했다. 요청 묶음의 크기가 공급사 호출에 전달되는지, 결과 길이는 여전히 세 칸인지 확인했다. 앞의 두 결과는 각각의 요청 식별자를 갖고, 마지막 결과는 비어 있어야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`두 번째 테스트에서는 첫째·셋째 소재는 유효하고 둘째 소재만 무효인 응답을 만들었다. 가운데 결과가 비어 있는지만 확인하지 않았다. 첫째와 셋째 결과의 식별자와 실제 소재 내용도 함께 확인했다.`}),`
`,(0,f.jsx)(t.p,{children:`설명의 핵심을 단순화하면 다음과 같다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`요청:      A       B       C
공급 응답: 소재 A   무효    소재 C
adapter:   A 결과   nil     C 결과
`})}),`
`,(0,f.jsx)(t.p,{children:`유효한 결과가 두 개라는 assertion만으로는 A와 C의 대응을 지킬 수 없다. 중간을 지우고 두 칸을 반환하는 구현도 개수만 보면 맞아 보일 수 있기 때문이다.`}),`
`,(0,f.jsx)(t.h2,{children:`기존 계약을 바꾸지 않고 테스트로 남기기`}),`
`,(0,f.jsx)(t.p,{children:`새 테스트에는 부족한 응답의 마지막 빈 자리와, 중간이 무효일 때 앞뒤 결과의 식별자·소재 내용이 남았다. 결과를 앞에서부터 모으거나 다른 요청에 붙이는 변경은 이 조건을 만족하지 못한다. 제품 함수는 그대로 두고, 기존 대응 관계를 확인하는 두 테스트를 추가해 CI의 테스트·린트 검사와 병합까지 마쳤다.`}),`
`,(0,f.jsx)(t.p,{children:`이 결과가 지키는 것은 광고 두 개의 개수보다 어느 요청의 결과가 없는지에 관한 정보다. 공급사의 모든 운영 응답을 확인한 것은 아니지만, 검증용 입력에서 단순 누락과 잘못된 대상 연결을 구분할 수 있게 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업을 돌아보면 부분 실패를 검사할 때 정상 데이터만 세는 기준은 부족했다. 빈 자리가 있어도 계약상 맞는 결과일 수 있고, 빈 자리를 지운 깔끔한 배열이 오히려 틀린 결과일 수 있다. AI와 테스트를 보강하며 남긴 배움은 성공한 값뿐 아니라 값과 대상 사이의 관계를 검증해야 한다는 점이다.`})]})}function Ke(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Y,{...e})}):Y(e)}var qe=e({default:()=>Ye,frontmatter:()=>Je}),Je={title:`공개 자료 수집에서 완전성과 운영 조건을 보기`,summary:`공개 자료를 가져오는 것과 필요한 자료가 다 모인 것은 다르다. 개인 수집 도구의 완전성과 관리 화면 재사용을 돌아본다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function X(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`공개 자료를 모으는 개인 프로젝트를 만들면 조회 기능보다 “다 모였는가”라는 질문이 오래 남는다. 요청이 성공해도 페이지 일부만 읽었을 수 있고, 여러 공급자 중 한 곳만 실패했을 수도 있다.`}),`
`,(0,f.jsx)(t.p,{children:`이 프로젝트의 기존 설계 기록을 다시 읽으며 중심에 둔 것은 수집 결과의 완전성과 운영 조건이다. 자동 수집이 끝났다는 말과 필요한 정보가 다 있다는 말은 같지 않았다.`}),`
`,(0,f.jsx)(t.h2,{children:`관리 화면을 새로 만들지 않는 선택`}),`
`,(0,f.jsx)(t.p,{children:`자료를 읽고 수정하는 데에는 기존 관리 도구를 재사용하는 선택이 있었다. 화면을 별도로 만드는 부담을 줄일 수 있지만 공급자 정책·오류·권한·후속 갱신은 남는다. UI를 빌렸다고 데이터의 계약까지 사라지지는 않는다.`}),`
`,(0,f.jsx)(t.p,{children:`정상적인 빈 결과와 요청 실패, 일부만 수집한 결과가 같은 성공 표시로 합쳐지지 않는지도 봐야 한다. 오래된 집계나 재시도·알림이 실제 상태를 어떻게 설명하는지도 연결된다.`}),`
`,(0,f.jsx)(t.h2,{children:`가져오는 것과 쓰는 것은 다른 문제`}),`
`,(0,f.jsx)(t.p,{children:`조회한 뒤 생성하는 writer에서는 다른 실행이 그 사이에 들어올 수 있다. 이 문제는 외부 API가 잘 응답했는지와 별개다. 자료 수집의 성공만 확인해서는 저장의 중복이나 실행의 겹침을 설명할 수 없다.`}),`
`,(0,f.jsxs)(t.p,{children:[`개인 도구의 규모보다 오래 남길 만한 것은 어떤 성공을 확인했는지 설명하는 습관이라고 생각한다. `,(0,f.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`외부 결과의 완전성`}),`, `,(0,f.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`관리 UI 재사용의 비용`}),`, `,(0,f.jsx)(t.a,{href:`/logs#2026-08-31-a-job-racing-itself`,children:`겹치는 실행의 기록`}),`에서 그 질문을 나눠 읽을 수 있다.`]})]})}function Ye(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(X,{...e})}):X(e)}var Xe=e({default:()=>Qe,frontmatter:()=>Ze}),Ze={title:`API 계약 테스트: 함수 예외에서 HTTP 응답까지`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`AI와 계약 테스트 보강·HTTP 검증 경계 수정`,period:`2026`,summary:`날짜가 빠진 요청을 거절하는 함수가 있어도, API가 올바른 오류를 돌려주는지는 별개다. 사용하는 쪽이 받는 결과까지 테스트 경계를 옮긴 이야기.`,date:`2026-10-01`,dateBasis:`context`,collection:`records`,tags:[`계약 테스트`,`HTTP`,`AI 협업`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function Z(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`통계를 조회하는 API에는 시작 날짜와 종료 날짜가 필요했다. 날짜 하나가 빠진 요청을 보내면 계산을 시작하기 전에 거절하고, 사용하는 쪽이 이유를 읽을 수 있는 오류 응답을 돌려줘야 했다. 단순히 서버 안에서 오류를 내는 것만으로는 그 약속을 확인할 수 없다.`}),`
`,(0,f.jsx)(t.p,{children:`웹 화면이나 다른 API 소비자가 받는 것은 서버 함수의 예외 객체가 아니다. 요청이 성공했는지 나타내는 HTTP 상태와 오류 코드·설명이 담긴 응답이다. 소비자는 그 결과를 읽어 잘못된 입력인지 다른 실패인지 구분할 수 있어야 한다.`}),`
`,(0,f.jsx)(t.p,{children:`AI와 함께 만든 첫 안은 view 메서드, 즉 요청을 처리하는 함수를 직접 호출했다. 날짜가 없으면 입력 오류가 발생하는지는 검사했지만, 소비자가 받는 HTTP 상태와 오류 JSON을 검사하려면 그 뒤의 변환 과정도 지나야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`테스트가 지나가지 않은 코드`}),`
`,(0,f.jsx)(t.p,{children:`입력 예외를 HTTP 상태와 오류 필드가 있는 JSON으로 바꾸는 것은 middleware였다. view를 직접 호출하면 이 코드를 지나가지 않아, 예외는 맞게 발생해도 응답 형식이 어긋나는 변경을 놓칠 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트를 Django client의 실제 요청 경로로 바꿨다. 서비스가 통계를 계산하는 부분은 mock으로 두되, 요청 파싱과 입력 검증, middleware의 오류 응답은 함께 실행하도록 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`거절과 정상 전달을 각각 확인하기`}),`
`,(0,f.jsx)(t.p,{children:`입력이 부족한 경우에는 종료 날짜가 없는 요청을 보냈다. 응답 상태가 422이고, 입력 오류 코드와 설명이 JSON에 담기는지 확인했다. 서비스가 생성되지 않았다는 조건도 함께 검사했다. 요청을 거절하면서 뒤의 통계 조회까지 실행하는 흐름이면 안 됐기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`정상 요청에서는 네트워크·기간·캠페인 조건이 서비스에 전달되는지, 서비스의 결과가 응답 JSON으로 돌아오는지 확인했다. 단순히 200을 받는 것과 올바른 조회 조건을 전달하는 것은 다른 검사였다.`}),`
`,(0,f.jsxs)(t.p,{children:[`서비스 mock도 자유롭게 메서드를 받아주는 형태에서 `,(0,f.jsx)(t.code,{children:`autospec`}),`을 사용하는 형태로 바꿨다. 실제 서비스의 시그니처와 맞지 않는 호출이 테스트에서 조용히 통과하지 않도록, 외부 계산을 대체하는 mock의 모양을 실제 인터페이스에 맞췄다.`]}),`
`,(0,f.jsx)(t.h2,{children:`어디를 실제로 실행할 것인가`}),`
`,(0,f.jsx)(t.p,{children:`보강한 테스트는 입력이 부족한 요청의 HTTP 상태·오류 JSON과, 정상 요청의 조회 조건 전달·응답 결과를 확인한다. 잘못된 입력에서 서비스를 만들지 않는 조건도 함께 남겼다. 계산 결과는 mock이지만, 요청을 사용하는 쪽이 받는 응답까지 실제 처리 경로를 지나며 검사하는 테스트가 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`두 테스트는 CI의 테스트·린트 검사를 통과해 병합됐다. 제품 API를 새로 만든 성과가 아니라, 기존 API를 바꿀 때 함수의 예외만 맞고 HTTP 응답은 어긋나는 변경을 검사할 경계를 넓힌 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`AI와 함께한 이 작업에서 남는 배움은 실행되는 초안과 필요한 계약을 검사하는 테스트를 같은 것으로 볼 수 없다는 점이다. 첫 안이 직접 호출한 함수 뒤에는 middleware의 처리가 남아 있었다. 테스트의 품질을 assertion의 수보다 실제 소비자가 받는 결과까지 어떤 코드를 실행했는지로 읽게 하는 사례였다.`})]})}function Qe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Z,{...e})}):Z(e)}var $e=e({default:()=>tt,frontmatter:()=>et}),et={title:`검색과 키보드 탐색의 행동을 나누기`,summary:`검색을 열고 닫는 순간에도 읽기는 이어진다. 입력 중 단축키와 초점 복귀, 좁은 화면의 탐색을 함께 살핀다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function Q(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`글이 있어도 원하는 글을 찾기 어려우면 읽기는 시작되지 않는다. 이 사이트에서 검색과 키보드 탐색을 살펴볼 때는 기능의 개수보다 한 동작이 다음 동작으로 어떻게 이어지는지에 주목했다.`}),`
`,(0,f.jsx)(t.p,{children:`검색을 열고 결과를 고른 뒤 본문으로 가는 일, 검색을 닫고 원래 위치로 돌아오는 일은 하나의 버튼 동작으로 끝나지 않는다.`}),`
`,(0,f.jsx)(t.h2,{children:`입력 중인 사용자에게도 같은 단축키를 적용할까`}),`
`,(0,f.jsx)(t.p,{children:`현재 코드에는 입력 대상을 보호하는 처리와 단축키, 검색 선택과 초점 복귀, 저장 실패를 다루는 경로가 있다. 글을 입력하는 동안의 키와 페이지를 탐색할 때의 키를 같은 방식으로 해석하면 사용자 행동을 방해할 수 있다.`}),`
`,(0,f.jsx)(t.p,{children:`모달도 열리는 장면만 보면 동작이 단순해 보인다. 하지만 닫힌 뒤 어디에 초점이 가는지, 결과를 키보드로 고를 수 있는지, 이동한 페이지에서 어떤 내용을 먼저 읽는지를 함께 봐야 한다.`}),`
`,(0,f.jsx)(t.h2,{children:`구현된 분기와 읽히는 화면`}),`
`,(0,f.jsx)(t.p,{children:`작은 화면에서는 넘침과 조작 영역, 링크의 순서가 다시 문제가 된다. 테마 저장에 실패하거나 처음 진입할 때도 내용은 읽을 수 있어야 한다. 코드의 분기와 브라우저에서의 동작은 각각 확인할 근거다.`}),`
`,(0,f.jsxs)(t.p,{children:[`정보를 찾는 기능은 내용과 따로 붙는 장식보다 읽기의 일부에 가깝다. `,(0,f.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`이 사이트의 읽기 경로`}),`와 `,(0,f.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`한글 본문의 비교`}),`를 연결한 이유도 탐색과 본문을 같은 경험으로 보기 위해서다.`]})]})}function tt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Q,{...e})}):Q(e)}var nt=e({default:()=>at,frontmatter:()=>rt}),rt={title:`개인 채팅 앱에서 변경한 좁은 계약`,summary:`개인 채팅 앱의 두 공개 PR을 다시 읽었다. 메시지 전달과 상태 갱신, 방을 떠난 뒤 남는 연결 작업을 설명한다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`개인 PR의 선택 구현`,period:`2023`,date:`2023`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function it(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`채팅 화면은 메시지 목록처럼 보이지만, 새 메시지를 어디서 받고 어느 상태에 반영하는지에 따라 동작이 달라진다. 개인 채팅 앱의 공개 PR을 다시 읽으며 남길 부분을 그 변경으로 좁혔다.`}),`
`,(0,f.jsx)(t.h2,{children:`메시지를 받는 경로와 상태를 갱신하는 방법`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://github.com/justinjeong5/j-chat/pull/23`,children:`메시지·연결 변경 PR`}),`에서는 WebSocket transport와 메시지 전달, 화면 상태 갱신을 변경했다. REST로 전송한 뒤 응답 상태를 바꾸는 경로 대신 메시지 이벤트를 전달하고, 받은 메시지는 functional update로 반영하는 작업이었다.`]}),`
`,(0,f.jsx)(t.h2,{children:`방을 떠나도 연결의 일은 남는다`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://github.com/justinjeong5/j-chat/pull/24`,children:`방 입퇴장 PR`}),`에는 방 입장·퇴장 UI와 이벤트가 있다. membership API, UI 이동, 이벤트 통지와 연결 등록·화면 정리를 연결한 작업이다. 화면의 이동과 연결의 정리는 같은 사건에 관련돼 있지만 같은 동작은 아니다.`]}),`
`,(0,f.jsxs)(t.p,{children:[`개인 프로젝트를 다시 소개할 때도 크게 보이는 이름보다 실제로 바꾼 계약을 남기고 싶다. `,(0,f.jsx)(t.a,{href:`/cases/latest-request-boundaries`,children:`최신 요청의 결과와 정리`}),`는 업무에서 다룬 별개의 흐름이지만, 상태 반영과 뒤에 남는 작업을 함께 본다는 질문으로 연결된다.`]})]})}function at(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(it,{...e})}):it(e)}var ot=e({default:()=>lt,frontmatter:()=>st}),st={title:`비동기 요청의 경쟁 조건과 상태 소유권`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`비동기 설계`,role:`요청/상태 경계 구현·취소/세대 처리·mock 테스트 구성`,period:`2026`,summary:`아까 광고가 없었다는 결과로 지금의 보너스 제안까지 결정해도 될까? 새로 조회한 결과가 이전 작업에 밀리지 않도록 다룬 이야기.`,date:`2026`,dateBasis:`context`,collection:`stories`,tags:[`최신성`,`취소`,`테스트 경계`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function ct(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`보너스 광고를 제안하려면 지금 보여줄 광고 후보가 있는지 먼저 조회해야 한다. 이 글에서 '준비'라고 부르는 것은 그 후보를 읽어 이번 제안이 가능한지 판단하는 과정이다. 광고가 없으면 제안을 진행할 재료도 없다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 미리 읽었을 때 광고가 없었다는 결과가, 나중에 다시 판단할 때도 광고가 없다는 뜻은 아니다. 기본 보상 화면에서 나오는 시점에 추가 제안이 광고를 요구하고 이전 준비가 empty라면, 새 할당을 조회해야 하는 흐름이 있었다. 이전의 빈 결과를 그대로 쓰면 그사이에 생긴 후보를 읽지 못할 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`새 요청을 보내는 것만으로 끝나지도 않았다. 이전 요청이 아직 진행 중인데 새 조회를 시작하면, 둘의 결과가 도착하는 순서는 시작한 순서와 다를 수 있다. 먼저 시작한 작업이 나중에 끝나면서 새 준비의 상태를 바꾸거나 정리해버리면, 새로 읽은 결과가 있어도 그 상태를 유지하지 못한다.`}),`
`,(0,f.jsx)(t.p,{children:`따라서 '다시 조회해야 하는 시점'과 '어느 작업이 지금의 상태를 바꿔도 되는가'를 함께 정해야 했다. 단순히 요청을 하나 더 보내는 문제보다, 이전 판단과 새 판단의 경계를 지키는 문제였다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 조회의 캐시 정책을 바꾸지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`보너스 판정에 필요한 요청을 일반 광고 조회와 분리했다. 공용 fetcher와 일반 Query 정책은 유지하고, 보너스 세션이 요구하는 최신성 조건을 그 범위에 넣었다.`}),`
`,(0,f.jsx)(t.p,{children:`이번 요구는 보너스 회차의 갱신 시점에 새 할당을 읽는 것이었다. 일반 조회까지 같은 갱신 정책으로 바꾸기보다, 그 시점을 아는 보너스 세션에서 요청을 직접 다루도록 했다. 공용 fetcher는 네트워크 호출을 맡고, 어떤 결과를 재사용할지는 이 준비 흐름이 정했다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 준비가 중복 호출된 경우에는 진행 중인 Promise를 함께 사용하고, 강제 재조회가 필요할 때는 새로운 세대로 넘어가도록 했다. 요청을 무조건 많이 보내는 것도, 무조건 같은 결과를 재사용하는 것도 답은 아니었다.`}),`
`,(0,f.jsx)(t.h2,{children:`취소와 결과 적용을 따로 보호하기`}),`
`,(0,f.jsx)(t.p,{children:`요청 키에는 보너스 회차와 광고를 요청하는 환경을 묶었다. 회차가 바뀌면 이전 준비를 그대로 이어갈 수 없고, 같은 회차라도 강제 재조회라면 새 시도여야 했다. generation은 그 시도를 구분했다. 키가 바뀌거나 강제로 다시 조회하면 세대를 올리고 이전 controller에 취소를 전달했다.`}),`
`,(0,f.jsx)(t.p,{children:`취소 신호만으로 상태를 보호할 수는 없었다. 이미 도착한 결과나 이어서 실행되는 Promise 처리도 있을 수 있기 때문이다. then·catch에서 현재 요청 키와 세대가 자신과 같은지 확인하고, 오래된 결과는 cancelled로 돌려줬다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 후보 생성과 최종 상태 반영에도 준비 키와 세대를 다시 확인했다. 할당 요청이 끝나는 시점과 그 결과로 후보를 만들고 화면 상태에 쓰는 시점 사이에도 작업의 소유권을 유지해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`취소는 이전 요청에 그만하라는 신호를 전달하고, 키·세대 검사는 그 작업이 결과를 써도 되는지 판단한다. 취소 요청 이후에 이어지는 then·catch에서도 이 조건을 확인하므로, 요청 시작과 상태 반영을 한 시점의 일로 보지 않았다.`}),`
`,(0,f.jsx)(t.h2,{children:`오래된 finally도 새 요청을 건드릴 수 있다`}),`
`,(0,f.jsx)(t.p,{children:`이전 요청이 끝나며 controller ref를 비우는 cleanup도 살폈다. 그사이에 새 요청이 ref를 차지했으면 이전 finally가 새 controller를 지우면 안 된다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 정리할 때는 현재 활성 객체가 자기 자신과 같은 경우에만 ref를 비웠다. 결과의 키·세대와 정리 객체의 동일성은 서로 다른 위치에서 같은 목적을 지켰다. 오래된 작업이 지금 작업의 상태를 바꾸지 않도록 하는 것이다.`}),`
`,(0,f.jsx)(t.h2,{children:`이전 요청은 cancelled, 새 후보는 ready로 남도록`}),`
`,(0,f.jsxs)(t.p,{children:[`핵심은 응답 처리뿐 아니라 `,(0,f.jsx)(t.code,{children:`finally`}),`에도 같은 소유권 검사가 필요하다는 점이었다. 아래는 설명을 위한 재구성이며 실제 회사 코드가 아니다.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`const mine = { key, generation: ++generation, controller };
active = mine;
try {
  const response = await fetchCandidates(controller.signal);
  if (active !== mine) return "cancelled";
  const candidate = await prepareCandidate(response);
  if (active !== mine) return "cancelled";
  commitReady(candidate);
} finally {
  if (active === mine) active = null;
}
`})}),`
`,(0,f.jsx)(t.p,{children:`후보를 준비하는 추가 비동기 단계가 있으므로 응답 직후 한 번만 비교해서는 부족하다. 그리고 오래된 작업의 종료는 새 작업의 취소 권한을 지우면 안 된다.`}),`
`,(0,f.jsx)(t.p,{children:`회귀 시나리오는 첫 요청이 진행 중일 때 강제 재조회로 두 번째 요청을 만드는 순서로 구성했다. mock HTTP 클라이언트는 첫 요청의 abort 신호를 받으면 AbortError로 reject한다. 두 번째 요청에는 광고 후보가 있는 응답을 돌려주고, 두 Promise가 끝난 뒤 첫 준비가 cancelled, 새 결과와 hook 상태가 ready인지 보도록 했다.`}),`
`,(0,f.jsx)(t.p,{children:`이 테스트가 확인한 순서는 진행 중인 첫 요청의 취소와 새 준비의 완료였다. 이전 empty 응답을 새 응답 뒤에 도착시키는 순서까지 구성한 것은 아니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`테스트 입력·순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 요청 진행 중 강제 갱신`}),(0,f.jsx)(t.td,{children:`첫 요청에 abort, 새 세대 시작`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 mock 요청이 abort로 reject`}),(0,f.jsx)(t.td,{children:`첫 준비는 cancelled`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 번째 요청에 광고 후보 반환`}),(0,f.jsx)(t.td,{children:`새 준비 결과와 hook 상태는 ready`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 작업의 finally 실행`}),(0,f.jsx)(t.td,{children:`새 활성 controller를 정리하지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`진행 중 Promise를 공유하는 것은 중복 호출을 합치는 정책이고, 취소 결과를 최종 성공처럼 재사용하는 것은 아니다. 관련 광고 세션에서도 사용자가 닫은 경우에는 다음 후보를 강제로 실행하지 않고 다시 시작할 수 있게 구분했다.`}),`
`,(0,f.jsx)(t.p,{children:`바뀐 흐름에서는 보너스의 새 판정이 필요한 시점에 이전 empty 결과를 그대로 쓰지 않고 새 할당을 조회한다. 같은 준비의 중복 호출은 진행 중인 Promise를 공유하고, 강제 갱신은 새 세대로 넘어간다. 일반 조회의 정책을 바꾸는 대신 이 준비 흐름이 요청과 적용·정리의 책임을 함께 갖게 했다.`}),`
`,(0,f.jsx)(t.p,{children:`가장 인상적인 지점은 응답이 아니라 오래된 finally였다. 새 요청이 활성 controller를 차지한 뒤에는 먼저 시작한 작업이 그것을 비워서는 안 됐다. 취소할 요청을 고르는 것과 상태를 정리할 권한을 확인하는 일을 함께 다뤄야 새 준비가 남았다.`})]})}function lt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(ct,{...e})}):ct(e)}var ut=e({default:()=>pt,frontmatter:()=>dt}),dt={title:`문의 처리 완료와 다음 작업의 상태 분리`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`문의 처리 후 이동 흐름·상세 상태 초기화·gateway 조회 경로 구현`,period:`2025.05`,summary:`문의를 완료한 뒤에는 무엇을 보여줘야 할까? 다음 건으로 넘어가는 행동과, 그 조회가 실패했을 때 남길 상태를 함께 다룬 과정.`,date:`2025-05-15`,dateBasis:`context`,archived:!0,supersededBy:`/cases/cs-workflow-product`,tags:[`운영 제품`,`작업 흐름`,`조회 실패`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function ft(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`문의 관리 화면에서 운영자는 한 건의 내용을 읽고 완료하거나 반려했다. 처리 버튼이 성공한 뒤에도 작업은 이어진다. 같은 문의의 결과를 확인할 수도 있고, 아직 처리하지 않은 다른 문의를 다룰 수도 있다. 화면을 어디에 남기느냐가 다음 작업의 출발점을 정한다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 변경은 문의 관리 제품을 처음 만든 작업이 아니라, 운영 중인 제품에 2025년 5월 추가한 후속 개선이다. 목록·상세와 적립·처리 이력을 연결한 초기 구축과 출시 뒤 상태 갱신은 `,(0,f.jsx)(t.a,{href:`/cases/cs-workflow-product/`,children:`운영자가 판단하고 처리할 수 있는 화면 만들기`}),`에 정리했다. 여기서는 한 건을 끝낸 뒤 다음 작업을 준비하는 흐름에 집중한다.`]}),`
`,(0,f.jsx)(t.p,{children:`기존 상세 화면은 처리 뒤 현재 문의를 다시 읽었다. 다음 미처리 건으로 이어지는 흐름을 넣으려면 버튼 뒤에 이동만 붙여서는 안 됐다. 완료와 반려는 한 건을 끝내는 행동이지만, 완료한 문의를 다시 처리중으로 되돌리는 행동은 그 문의를 계속 다루기 위한 것이다. 모든 상태 변경 뒤에 다음 건으로 보내면 행동의 의미가 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`처리와 이동 사이에도 실패가 들어갈 수 있었다. 현재 문의의 처리는 성공했는데 다음 건을 조회하지 못하면, 무엇이 끝났고 무엇이 남았는지를 나눠 알려줘야 한다. 다음 상세 주소로 갔지만 자료를 읽지 못한 경우에는 이전 문의의 정보가 남아 있는 것도 문제다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 이 변경에서는 처리 결과, 다음 문의의 유무, 다음 조회의 실패, 상세 정보의 수명을 함께 봤다. 운영자의 연속 작업을 잇되 새 화면이 어느 문의의 상태인지 설명할 수 있어야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`다음 건으로 이동할 행동부터 나누기`}),`
`,(0,f.jsx)(t.p,{children:`완료 처리 요청이 성공하면 다음 문의를 조회하도록 했다. 반대로 완료된 문의를 처리중으로 되돌릴 때는 다음 건 이동을 실행하지 않았다. 같은 토글 형태의 행동이어도 운영자가 끝낸 작업이 달랐다.`}),`
`,(0,f.jsx)(t.p,{children:`반려에는 별도 확인 흐름이 있었다. 반려 모달에서 취소하면 처리 요청을 보내지 않고, 반려 정보를 받아 요청이 성공한 뒤에 다음 건을 조회했다. 완료한 문의를 반려하거나 반려된 문의를 완료하는 조건도 상세 상태에 따라 제한했다.`}),`
`,(0,f.jsx)(t.p,{children:`여기서 처리 요청과 다음 조회는 서로 다른 결과를 가진다. 현재 문의는 처리됐어도 다음 조회가 실패할 수 있다. 그 실패를 현재 문의의 처리 실패와 같은 안내로 묶지 않도록 각각의 경로에서 다뤘다.`}),`
`,(0,f.jsx)(t.h2,{children:`다음 문의는 화면의 목록으로 추측하지 않기`}),`
`,(0,f.jsx)(t.p,{children:`상세 화면에서는 현재 문의의 식별자를 다음 미처리 문의 조회에 전달했다. 결과가 있으면 그 문의의 상세 주소와 관련 query로 이동했다. 결과가 없으면 미처리 건이 없다는 안내를, 조회가 실패하면 다음 건을 불러오지 못했다는 안내를 보였다.`}),`
`,(0,f.jsx)(t.p,{children:`목록의 진입 동작도 결과 없음·조회 실패·상세 이동을 나눴다. 조회 중 상태는 이 진입 동작에 따로 두었다. 목록에 보이는 첫 행을 다음 문의라고 추정해 이동하는 대신 서버가 반환한 대상을 사용했다.`}),`
`,(0,f.jsx)(t.p,{children:`gateway에는 해당 조회 경로와 읽기 권한을 연결했다. 화면에서 필요한 다음 작업의 대상을 서버에 묻고, 응답으로 받은 상세 정보를 이동에 쓰는 흐름이었다. 여러 운영자의 문의 선점이나 서버의 배정 정책까지 FE에서 만든 것은 아니다.`}),`
`,(0,f.jsx)(t.h2,{children:`주소가 바뀌면 상세 정보도 다른 작업의 것이 된다`}),`
`,(0,f.jsx)(t.p,{children:`상세 화면은 route query 변경을 상세 조회에 연결했다. 새 문의를 읽는 요청이 실패하면 내용·사용자·캠페인·처리 정보를 비웠다. 이전 문의의 정보가 새 주소에서 계속 남는 상태를 피하려는 처리였다.`}),`
`,(0,f.jsx)(t.p,{children:`이 부분은 다음 주소로 이동하는 코드만 보면 빠지기 쉽다. 이동이 성공해도 다음 상세 조회는 별도로 실패할 수 있다. 화면에 남은 데이터가 어느 문의의 것인지까지 함께 다뤄야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`처리 성공과 다음 작업의 준비를 분리하기`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 목록에서 미처리 건으로 진입하고, 상세에서 한 건을 완료·반려한 뒤 다음 미처리 문의로 이어갈 수 있게 됐다. 이미 완료한 문의를 처리중으로 되돌리는 행동은 그 문의에 남는다. 끝낸 작업과 계속 다룰 작업의 차이가 화면의 이동에도 반영됐다.`}),`
`,(0,f.jsx)(t.p,{children:`다음 조회가 실패하면 그 실패를 방금 끝낸 처리와 구분해 안내하고, 새 상세 조회가 실패하면 이전 문의의 정보를 비웠다. FE와 gateway를 연결한 변경은 함께 병합됐다. 연속 작업의 진입 경로를 만들면서, 그 경로가 끊겼을 때 무엇이 끝났고 어디를 다시 읽어야 하는지도 다룬 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`이 흐름을 지금 돌아보면 운영 화면의 완료는 처리 요청의 성공 응답 하나로 설명되지 않는다. 그다음 사용자가 무엇을 다룰 준비가 됐는지까지 연결돼야 한다. 문의 처리와 다음 문의 준비를 나눈 것이, 버튼을 추가하는 일보다 작업의 이어짐을 제품으로 보는 관점을 남겼다.`})]})}function pt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(ft,{...e})}):ft(e)}var mt=e({default:()=>_t,frontmatter:()=>ht}),ht={title:`정리본으로 연결한 이전 글: personal-repos-interview`,summary:`이 글의 유용한 내용은 개인 채팅 앱의 좁은 구현에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/cases/j-chat-first-production`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function gt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/cases/j-chat-first-production`,children:`개인 채팅 앱의 좁은 구현 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function _t(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(gt,{...e})}):gt(e)}var vt=e({default:()=>xt,frontmatter:()=>yt}),yt={title:`정리본으로 연결한 이전 글: personas-debate-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function bt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function xt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(bt,{...e})}):bt(e)}var St=e({default:()=>wt,frontmatter:()=>Ct}),Ct={title:`진단 로그를 줄이면서도 조사할 수 있는 흐름을 남기기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`수집 설계`,role:`진단 수집 계약·고정 표본·조사 대상 버퍼 구현, 데이터 플랫폼 이관 협의`,period:`2026.08–2026.09`,summary:`로그를 줄이면 문의를 조사할 단서도 사라질 수 있다. 제품 지표와 상세 진단을 다른 정책으로 다루고, 표본 밖 문의의 추가 수집과 데이터 조회 이관까지 연결한 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`관측`,`샘플링`,`데이터 계약`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function $(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`외부 콘텐츠를 읽고 돌아온 사용자의 리워드 안내가 사라졌다. 서버는 성공했는데 화면의 결과가 없고, 예외도 발생하지 않았다. 오류 로그 하나로는 설명하기 어려웠다. 클릭과 이동, 상태 조회와 복귀, 안내 표시를 한 흐름으로 이어 읽어야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`QA와 상용 확인에서 이런 문제를 다루며 상세 진단을 늘렸다. 상태와 버튼을 자주 기록하자 수집량도 커졌다. 이벤트마다 같은 확률로 버리면 양은 줄겠지만 시작만 남고 완료가 빠진 시계열로는 원인을 찾기 어렵다. 제품 분석까지 같은 정책으로 줄이면 퍼널의 분모도 달라진다.`}),`
`,(0,f.jsxs)(t.p,{children:[`내가 풀어야 했던 문제는 `,(0,f.jsx)(t.strong,{children:`로그를 적게 남기는 것보다, 줄인 뒤에도 동료가 같은 질문에 답할 수 있게 하는 것`}),`이었다. 8월에는 소비 목적과 표본을 정했고, 데이터 플랫폼팀과 적재·조회 이관을 진행했다. 9월에는 표본 밖 문의를 조사할 보충 경로를 구현했다.`]}),`
`,(0,f.jsx)(t.h2,{children:`비율보다 먼저 이벤트의 소비자를 확인했다`}),`
`,(0,f.jsx)(t.p,{children:`KPI에 사용하는 analytics와 상세 diagnostic을 이벤트별로 나눴다. 제품 참여를 집계하는 이벤트는 샘플링에서 제외하고, 상세 상태는 표본 정책에 넣었다.`}),`
`,(0,f.jsx)(t.p,{children:`처음부터 분류가 맞았던 것은 아니다. 자동 수령 성공을 진단으로 넣었다가 소비 KPI의 전수 집계 계약을 확인하고 analytics로 되돌렸다. 이름에 debug가 붙었다는 이유만으로 상세 로그라고 볼 수 없었다. 만드는 코드뿐 아니라 다른 사람이 그 이벤트를 어떤 분모와 분자로 읽는지 확인해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`정책상 전수 수집은 클라이언트가 샘플링으로 제외하지 않는다는 의미였다. 전송·적재의 실패까지 없어진 것은 아니다. 이 두 가지를 나눠야 수집량이 줄었다는 결과도 해석할 수 있었다.`}),`
`,(0,f.jsx)(t.h2,{children:`이벤트를 뽑는 대신 기기를 고정했다`}),`
`,(0,f.jsx)(t.p,{children:`상세 진단은 유효한 서버 기기 ID로 고정 bucket을 계산해 2%를 선택했다. 선택된 기기는 매 이벤트마다 다시 뽑지 않고 관련 진단을 이어 보냈다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`KPI 이벤트             → 표본 정책 밖
상세 진단 + 선택된 기기 → 관련 흐름을 이어 수집
상세 진단 + 나머지 기기 → 기본 수집에서 제외
`})}),`
`,(0,f.jsx)(t.p,{children:`사람이나 세션 전체를 선택한 것이 아니라 기기를 고른 정책이다. 한 기기의 흐름을 의도적으로 조각내지 않는 장점이 있지만, 모든 문의 기기가 표본에 포함되지는 않는다. 그 비용을 숨기지 않고 이후 추가 조사 경로로 보완했다.`}),`
`,(0,f.jsx)(t.p,{children:`고빈도 raw, 즉 상세 상태 로그는 전환 지점의 compact 요약과 연결했다. 계약 버전·전환 ID·발생 시각을 한 번 만들고 두 표현에 공유한 뒤 상세만 표본으로 전환했다. 요약 이름만 새로 붙이면 줄인 상세가 어느 전환의 것인지 대조할 수 없었기 때문이다.`}),`
`,(0,f.jsx)(t.h2,{children:`조사 대상 판정이 늦으면 어디까지 기다릴까`}),`
`,(0,f.jsx)(t.p,{children:`표본 밖에서 문의가 들어올 수 있다. 조사·내부 검증 대상을 기능 플래그로 추가 수집하도록 했지만, 대상 판정이 첫 행동보다 늦게 도착할 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`판정을 기다리는 표본 밖 진단에는 발생 시각과 순번을 붙여 제한된 메모리 버퍼에 보관했다. 대상이면 그 순서로 보내고, 비대상이면 비웠다. 먼저 발생한 항목을 상한까지 보관하며 넘친 양은 유실 수로 남겼다.`}),`
`,(0,f.jsx)(t.p,{children:`KPI까지 이 판정을 기다리게 하지는 않았다. 기본 집계 이벤트를 먼저 보내고, 표본 밖의 상세 속성은 별도 보충 이벤트로 버퍼에 넣었다. 나중에 활성화되면 같은 correlation ID로 상세를 보냈다. 이 식별자는 먼저 보낸 이벤트와 뒤의 상세가 같은 사건임을 잇는 단서다. 집계의 시점과 상세를 수집할 자격을 분리한 것이다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`KPI 기본 이벤트 → 즉시 발행
  └─ 상세 수집 판정 대기
       ├─ 활성 → 같은 상관 식별자로 상세 보충
       └─ 비활성 → 보관한 상세 폐기
`})}),`
`,(0,f.jsx)(t.p,{children:`KPI의 기본 이벤트가 먼저 나가며 상세 snapshot을 포함하지 않는 조건, 활성 판정 뒤 보충 이벤트가 같은 식별자를 가진 조건을 테스트에 남겼다. 다른 검사에서는 상한 100인 버퍼에 102개를 넣어 100개와 초과 2개를 구별했다. 이 숫자는 테스트 입력이며 실제 사용자 유실률이 아니다.`}),`
`,(0,f.jsx)(t.p,{children:`버퍼는 페이지가 살아 있는 동안 판정을 기다리는 구간을 위한 것이다. 종료한 페이지의 모든 과거 로그를 복구하거나 영속 큐처럼 무한히 보관하는 설계는 아니었다.`}),`
`,(0,f.jsx)(t.h2,{children:`보내지 않는 것과 보내지 못한 것은 다른 결과다`}),`
`,(0,f.jsx)(t.p,{children:`호출자가 발행 결과를 읽는 방식도 중요했다. 표본 정책으로 이벤트를 보내지 않는다고 false를 돌려주면, 호출자는 전송 실패로 읽고 같은 상태 전환을 계속 발행할 수 있다.`}),`
`,(0,f.jsx)(t.p,{children:`정책상 제외는 처리된 결과로 반환하고 실제 전송 함수인 sender의 실패는 실패로 남겼다. 상태·페이지 효과를 기록하는 호출자는 처리된 결과일 때만 중복 발행을 막는 마지막 상태를 갱신했다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`if (excludedByPolicy(event)) return true;
return sender.send(event);
`})}),`
`,(0,f.jsx)(t.p,{children:`위 코드는 반환값의 의미를 설명하기 위한 재구성이다. true는 최종 적재의 성공 영수증이 아니라 이 발행 시도를 처리했다는 값이다. 상한과 판정만 정하는 것으로 끝내지 않고, 정책을 사용하는 호출자까지 같은 의미로 읽도록 한 변경이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`수집과 조회의 부담은 다른 곳에서도 생겼다`}),`
`,(0,f.jsx)(t.p,{children:`클라이언트는 기존 전송 API와 이벤트 계약을 유지했다. 일반 분석이 상세 진단까지 함께 스캔하는 부담은 표본만으로 끝나지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`데이터 플랫폼팀에 진단 type 규칙·보관주기·기존 계약 보존과 전용 적재·조회 분리를 제안했다. 플랫폼팀은 적재·뷰·백필·정합성 확인을 맡았다. 나는 관리하던 조회의 소스를 옮기고 다른 조회의 사용 여부를 소유자에게 확인해 교체와 정리를 마쳤다.`}),`
`,(0,f.jsx)(t.p,{children:`8월 적용 후 담당자는 당시 실측에서 debug 이벤트가 약 86%, BI 전체 throughput이 약 54% 줄었다고 보고했다. 2%에서 역산한 값이나 청구 비용 절감률은 아니다. 9월의 추가 조사 경로가 이 앞선 수치를 만든 것처럼 합치지도 않았다.`}),`
`,(0,f.jsx)(t.h2,{children:`양을 줄인 뒤 무엇을 읽을 수 있는가`}),`
`,(0,f.jsx)(t.p,{children:`동료는 로그가 없었으면 디버깅하기 어려웠을 것이라고 반응했다. 그 관찰과 수집량 보고 사이에서 남긴 결과는, KPI의 집계와 선택된 기기의 상세 흐름을 다른 정책으로 다루고 표본 밖 조사도 별도 경로로 받을 수 있는 구조였다.`}),`
`,(0,f.jsx)(t.p,{children:`자동 수령 성공을 다시 분류한 변경은 작은 이름 교정처럼 보일 수 있다. 하지만 코드를 만드는 입장에서는 상세 진단이던 것이, 읽는 쪽에서는 제품 참여를 계산할 자료였다. 어떤 데이터를 줄여도 되는지는 생산한 위치보다 사용하는 질문에서 정해야 했다. 수집량보다 먼저 확인할 것이 바뀐 장면이었다.`}),`
`,(0,f.jsx)(t.p,{children:`그 뒤의 버퍼와 발행 결과도 같은 질문으로 읽힌다. 보내지 않은 이벤트를 실패라고 알려주면 호출자는 다시 보내려 하고, 상세를 기다리느라 집계를 늦추면 분석의 시간이 바뀐다. 로그를 얼마나 남길지보다 다음 사람이 그 결과를 어떻게 읽을지가 먼저라는 생각은 이 연결에서 더 분명해졌다.`})]})}function wt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)($,{...e})}):$(e)}var Tt=e({default:()=>Ot,frontmatter:()=>Et}),Et={title:`리워드 제품의 참여 흐름을 앱과 웹에 연결하기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,scopeLabel:`제품 구축`,role:`초기 허브 핵심 FE 구축·참여와 광고 흐름 설계·QA·매체 출시 후속`,period:`2025.11–2026.06`,summary:`초기 허브의 핵심 FE를 만들고 반복 참여 제품으로 확장했다. 서버 상태·광고 실행·리워드 안내를 나누어 설계하고, 공통화할 규칙과 환경별 차이를 결정해 QA와 매체 출시까지 전달한 과정.`,date:`2026-06`,dateBasis:`context`,collection:`stories`,tags:[`제품 설계`,`프론트엔드 아키텍처`,`출시`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function Dt(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`후속 참여 제품의 정각 QA에서 안내가 하나 빠졌다. 사용자는 이전 시간대에 받을 리워드가 남아 있었지만 새 시간대의 미션은 아직 끝내지 않았다. 현재 미션의 완료 여부로 복귀 수령 안내를 정하던 조건에서는 이 사용자가 안내를 받을 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`서버 담당자가 그 상태를 설명한 뒤 조건을 다시 읽었다. '이번 미션이 끝났는가'와 '지금 받을 리워드가 있는가'는 다른 질문이었다. 이 장면은 앱과 웹의 화면이 같은 서버 응답을 읽더라도, 다음 행동을 계산하는 기준부터 맞춰야 한다는 것을 분명하게 보여줬다.`}),`
`,(0,f.jsx)(t.p,{children:`PlayHub는 파트너 앱에서 광고·콘텐츠·미션에 참여하고 리워드를 받는 서비스다. 나는 기존 미션과 공용 기능 위에 초기 허브의 핵심 FE를 구축하고, 이후 반복 참여 제품의 메인·광고 흐름과 공유 상태를 개발했다. 서버는 참여·지급 정책을, 제품과 디자인은 상품 규칙과 표현을 함께 정했다. 이 글은 그 계약을 실제 행동으로 연결하며 바뀐 설계에 관한 이야기다.`}),`
`,(0,f.jsx)(t.p,{children:`그 질문의 시작으로 돌아가면 초기 허브도 단순한 카드 목록이 아니었다. 이미 끝난 콘텐츠, 지금 참여 가능한 콘텐츠, 외부 이동 뒤 바뀌는 상태, 아직 보여줄 결과가 함께 있었다. 이 글은 초기 구축에서 위의 후속 QA와 출시까지, 서로 다른 시간과 실행 환경의 정보를 사용자 행동으로 연결한 과정을 돌아본다.`}),`
`,(0,f.jsx)(t.h2,{children:`카드보다 먼저 다음 행동을 연결했다`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브에는 메뉴뿐 아니라 튜토리얼, 미션 진행과 완료, 랜덤박스와 리워드 안내가 있었다. 기존 기능을 모두 다시 만드는 대신 새 허브가 어떤 순서로 소개하고 이어 줄지를 정해야 했다.`}),`
`,(0,f.jsx)(t.p,{children:`콘텐츠 상태와 광고 조회를 연결해 참여 가능 여부와 완료 표시를 계산했다. 외부 콘텐츠에서 돌아오면 서버 상태를 다시 읽고, 미완료·유효 상태인 다음 안내를 골랐다. 지금 조회가 준비되지 않았다면 다음 행동도 성급히 확정하지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`반대로 이미 끝난 작업의 결과는 새 조회의 수명과 분리했다. 랜덤박스 성공 안내를 보여주는 동안 광고 데이터가 바뀌었다고 그 안내까지 사라져서는 안 된다. 사용자가 확인하는 것은 새 광고가 아니라 조금 전 작업의 결과다. 성공·오류 상태의 안내는 저장한 결과를 사용하고, 현재 콘텐츠의 제공 여부만으로 닫히지 않게 했다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`서버 상태 → 지금 참여할 수 있는 것과 다음 행동
광고 실행 → 이동·완료·복귀를 확인하는 방법
끝난 작업의 결과 → 사용자에게 아직 보여줄 안내
`})}),`
`,(0,f.jsx)(t.p,{children:`이것은 실제 모듈 이름이 아니라 책임을 설명한 흐름이다. 지금 돌아보면 '최신 상태를 다시 읽는다'는 말 안에 서로 다른 일이 있었다. 다음 참여를 위해 새 정보를 읽는 일과, 방금 끝난 참여의 결과를 설명하는 일이다. 후자를 전자에 매달아 두면 재조회가 오히려 사용자가 알아야 할 결과를 지울 수 있었다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 금액처럼 보여도 같은 상태는 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`반복 참여 제품에서는 광고 참여, 미션 진행, 복권, 리워드 수령, 다음 회차 대기가 연결됐다. 앱 안의 화면과 외부 웹의 참여 화면도 함께 다뤘다.`}),`
`,(0,f.jsx)(t.p,{children:`겉모양이 달라도 같은 서버 응답에서 사용자가 할 수 있는 행동은 일치해야 했다. 그래서 진행 수와 완료 여부, 카운터·버튼·대기 상태를 도출하는 공통 층을 만들었다. 진행 수는 전체 범위 안에서 읽고, 전체가 양수일 때만 완료로 판단했다. 빈 목록에서 수치만 비교해 완료를 만들어서는 안 됐다.`}),`
`,(0,f.jsx)(t.p,{children:`금액도 하나로 취급할 수 없었다. 이전 시간대의 미수령분, 현재 수령 가능분, 현재 시간대에 지급된 값은 다른 의미였다. 외부 웹의 카운터는 앱에서 받을 보상을, 인앱의 카운터는 이미 받은 보상을 설명할 수 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 차이는 정각 QA에서 드러났다. 이전 시간대에 일부 참여한 사용자가 새 시간대로 넘어왔고, 받을 보상이 남아 있었다. 현재 미션은 아직 끝나지 않았다는 이유로 복귀 수령 안내가 뜨지 않았다. 서버 담당자가 상태를 설명했고, 나는 기존 안내가 전체 미션 완료를 전제로 읽고 있음을 짚었다.`}),`
`,(0,f.jsx)(t.p,{children:`이전 보상이 있으면 현재 미션 완료와 무관하게 안내하도록 고쳤다. 보상 상태를 도출하는 함수와 팝업을 띄울지 판단하는 함수도 나눴다. 팝업에는 표시 지연과 문서 가시성, 복귀 경로의 조건이 추가되기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 핵심 조건을 줄인 설명용 코드다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`function needsReturnGuide(state) {
  if (positiveFinite(state.previousReward)) return true;
  return state.currentCycleComplete
    && positiveFinite(state.currentReward);
}
`})}),`
`,(0,f.jsx)(t.p,{children:`버튼과 팝업의 답을 무조건 같게 만들지는 않았다. 버튼은 참여 정책을, 팝업은 필요한 안내를 표현한다. 다만 둘 다 '이전 보상이 있는데 현재 미션은 미완료'라는 상태를 지워서는 안 됐다. 수정 후 같은 조건에서 동료들이 정상 노출을 확인했고, 해당 규칙과 소비자는 공동 제품 통합에 포함됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`공유할 것은 화면이 아니라 규칙과 실행의 책임이었다`}),`
`,(0,f.jsx)(t.p,{children:`광고 흐름은 화면별로 복제하는 방법과 공통 흐름에 실행 전략을 주입하는 방법을 비교했다. 복제하면 앱과 웹을 빨리 분리할 수 있지만 후보 순회·추적·빈 광고·실패 처리가 따로 바뀔 수 있다. 공통 흐름을 택하면 기존 동작을 유지하면서 환경별 실행을 연결할 비용이 생긴다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 서버 상태를 읽는 규칙과 후보 순회는 공유하고, 광고를 여는 방법과 완료를 확인하는 환경 차이는 남겼다. SDK의 완료 신호와 외부 이동 후 복귀는 같은 사건이 아니었다. 닫힘만 온 경우와 시청 완료 뒤 닫힘이 온 경우도 다르게 읽었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 선택을 돌아보면 가장 중요했던 것은 코드 중복의 양보다 완료를 믿을 근거였다. 앱과 웹을 같은 함수로 묶어도, 한쪽은 SDK 신호를 읽고 다른 쪽은 외부 복귀를 확인한다. 그 차이를 지워 얻는 단순함은 제품의 의미를 잃는 비용이었다. 공통화할 범위를 판단할 때 겉모양보다 같은 사실을 읽는지를 먼저 보게 된 이유다.`}),`
`,(0,f.jsx)(t.p,{children:`실행 전략을 구현한 것과 실제 소비자가 그 모드를 선택한 것은 다른 단계였다. 상품·매체의 조건에 따라 외부 복귀 경로가 남았고, 공통 코드를 만들었다고 모든 광고가 인앱에서 끝나게 된 것은 아니었다. 초기 CTA 연결과 실제 광고 surface 연결도 개발 단계로 나눴다.`}),`
`,(0,f.jsx)(t.h2,{children:`Promise의 성공과 제품의 성공을 나누었다`}),`
`,(0,f.jsx)(t.p,{children:`참여 요청의 409는 화면 상태와 서버의 현재 상태가 충돌한 결과로 반환해 재조회하도록 했다. 다른 기술 오류는 원래 오류로 던졌다. 모든 실패를 같은 토스트와 재시도에 넣으면 현재 상태를 확인할 상황과 요청 자체가 실패한 상황이 섞인다.`}),`
`,(0,f.jsx)(t.p,{children:`비동기 라이브러리의 성공 콜백도 지급 성공의 근거로 쓰지 않았다. Promise가 resolve되는 결과 안에 상태 충돌이 들어올 수 있었기 때문이다. 리워드 연출은 반환된 성공 여부와 데이터를 보고 열고, 충돌이면 재조회 후 연출 없이 종료했다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`확인한 조건`}),(0,f.jsx)(t.th,{children:`화면의 판단`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 보상 있음, 새 시간대 미완료`}),(0,f.jsx)(t.td,{children:`복귀 수령 안내`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 보상 없음, 현재 일부 참여`}),(0,f.jsx)(t.td,{children:`완료 안내를 앞당기지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`참여 요청 409`}),(0,f.jsx)(t.td,{children:`재조회, 성공 연출 생략`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`요청의 기술 오류`}),(0,f.jsx)(t.td,{children:`원래 오류 전달`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`같은 화면의 클릭 잠금은 중복 실행을 줄이는 장치였다. 서버 지급의 멱등성을 대신하는 장치로 해석하지 않았다. 상태 규칙의 단위 테스트와 실제 참여 QA가 서로 다른 질문에 답하는 이유이기도 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`출시에서는 코드보다 먼저 바뀌는 진입점이 있었다`}),`
`,(0,f.jsx)(t.p,{children:`QA에서는 참여 이력과 서버의 광고 할당 조건을 재현 조건으로 함께 맞췄다. 일부는 FE 수정으로 닫고, 일부는 설정·진입 제한·알려진 이슈를 담당자들과 출시 범위에 넣었다. 화면이 같다는 이유로 모든 관찰을 같은 버그로 읽지 않았다.`}),`
`,(0,f.jsx)(t.p,{children:`초기 상용 전달에서는 설정·서버·FE의 반영 순서를 설명하고 서버 완료 뒤 FE 배포를 이어 갔다. 실제 매체 진입과 제품 담당자의 상용 참여 확인까지 연결했다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 상품 교체에서는 사전 배포 후 공개 플래그를 켜는 계획을 다시 봤다. 새 진입점이 기존 상품의 진입점을 대체했기 때문이다. 화면을 숨기는 플래그가 매체의 진입 경로 변경까지 숨겨 주지는 않았다. 그 의존성을 설명하고 매체 준비와 배포 시간을 맞추는 방향으로 계획을 바꿨다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자에게 남는 제품으로 전달하기`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브는 기존 기능을 소개하는 목록에서 실제 참여·광고·결과 안내가 이어지는 제품으로 전달됐다. 반복 참여로 확장하면서 공유 상태와 환경별 실행을 나눴고, 정각 상태와 충돌 응답을 다음 행동으로 연결했다. 흐름 문서는 팀의 QA 체크리스트 준비 자료로 다시 요청됐다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 다시 이 제품을 설명하면 화면을 몇 개 만들었는지보다 정각 QA와 진입점 교체가 먼저 떠오른다. 현재 미션의 완료가 이전 리워드의 안내까지 결정할 수 없었고, 공개 플래그가 배포로 바뀌는 진입점까지 숨겨 주지는 않았다. 화면 안에서 옳아 보인 조건을 실제 참여와 전달의 조건에 다시 맞춰야 했다. 그 두 장면이 이 제품에서 무엇을 끝냈다고 말할 수 있는지 보는 기준을 바꿨다.`})]})}function Ot(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Dt,{...e})}):Dt(e)}var kt=e({default:()=>Mt,frontmatter:()=>At}),At={title:`앱·웹 참여 화면의 공통 상태 설계`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공통 설계`,role:`PlayHub 메인 참여·광고 흐름 설계·구현, 공유 상태 규칙과 공동 출시`,period:`2025.11–2026.06`,summary:`광고·복권·보상·다음 참여를 연결하는 제품을 만들면서, 화면은 달라도 서버 상태의 의미는 같아야 했던 이야기.`,date:`2026-06`,dateBasis:`context`,archived:!0,supersededBy:`/cases/playhub-product-architecture`,tags:[`제품 개발`,`파생 상태`,`참여 흐름`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function jt(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고와 미션에 참여해 리워드를 받는 PlayHub에서, 미션을 일부 진행한 사용자가 정각을 넘겼다. 새 시간대에는 아직 미션을 끝내지 않았지만, 이전 시간대에 받을 보상은 남아 있었다. 화면에는 수령할 금액이 표시되는데 앱으로 돌아가 수령하라는 팝업은 뜨지 않았다. ‘현재 미션 완료’와 ‘지금 받을 보상이 있음’을 같은 조건으로 읽은 결과였다.`}),`
`,(0,f.jsxs)(t.p,{children:[`나는 PlayHub의 초기 허브부터 반복 참여 제품으로 발전하는 동안 메인 참여와 광고 흐름의 프론트엔드 설계·구현·전달을 맡았다. 이 글의 질문은 그 과정에서 좁혀졌다. `,(0,f.jsx)(t.strong,{children:`다른 화면이 같은 서버 응답을 읽을 때, 무엇을 공유해야 사용자의 다음 행동이 일치할까?`})]}),`
`,(0,f.jsx)(t.h2,{children:`화면보다 먼저 연결해야 했던 사용자 행동`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브에서는 기존 콘텐츠와 미션을 메뉴·튜토리얼·보상 연출로 연결했다. 콘텐츠를 열고 외부로 이동했다 돌아오면 상태를 다시 읽어 다음 참여를 안내해야 했다. 이후에는 광고 참여, 미션 진행, 복권, 보상 수령, 다음 회차 대기가 한 흐름으로 이어졌다.`}),`
`,(0,f.jsx)(t.p,{children:`복권 화면을 그리는 것만으로 끝나는 개발은 아니었다. 광고를 닫았는지 완료했는지에 따라 참여 요청이 달라지고, 요청이 끝난 뒤 표시할 보상과 다음 미션도 달라졌다. 서버 상태 전이·보상 승인·확률 정책은 서버와 제품 담당의 영역이었다. 나는 그 의미를 화면에서 행동으로 연결하고, 디자인·광고 실행·복귀·계측과 맞추는 일을 맡았다. 초기 구현과 여러 후속 단계에는 AI 공동 작성도 포함됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`공통 규칙을 추출하되 실행 방식까지 같게 만들지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`반복 참여 제품은 앱 안의 화면과 외부 웹 참여 화면을 함께 다뤘다. 진행 단계와 다음 버튼을 각 페이지의 조건문으로 만들면 같은 응답으로도 다른 행동을 제안할 수 있었다. 그래서 카운터·진행·버튼·대기 상태를 도출하는 공통 층을 먼저 만들었다.`}),`
`,(0,f.jsx)(t.p,{children:`반면 보상을 즉시 보여주는지 앱 복귀 후 수령하는지, 광고 완료를 SDK 신호로 확인하는지 외부 복귀로 확인하는지는 실행 환경의 차이였다. 당시 광고 흐름을 복제하는 대안과 공통 흐름에 실행 전략을 주입하는 대안을 비교했다. 복제하면 표면을 빨리 분리할 수 있지만 후보 순회·추적·빈 광고·실패 처리가 따로 발전한다. 공통 흐름을 유지하고 여는 방식과 완료 판단을 나누는 쪽을 택했다.`}),`
`,(0,f.jsx)(t.p,{children:`전략을 구현한 것과 모든 소비자가 그 전략을 활성화한 것은 다르다. 통합 당시 페이지의 선택과 매체 기능에 따라 외부 복귀와 SDK 완료가 함께 쓰였다. 공통 코드를 만들었다고 모든 광고가 앱 안에서 끝나는 상품을 완성했다고 설명할 수는 없다.`}),`
`,(0,f.jsx)(t.h2,{children:`정각의 문제는 금액 필드의 의미부터 다시 읽었다`}),`
`,(0,f.jsx)(t.p,{children:`초기에는 하나의 보상 값으로 읽던 상태가 이전 시간대 미수령분, 현재 수령 가능분, 현재 시간대 지급분으로 나뉘었다. 같은 숫자처럼 보여도 카운터와 버튼과 복귀 안내가 소비하는 의미가 달랐다.`}),`
`,(0,f.jsx)(t.p,{children:`정각 QA에서 서버 담당자가 ‘이전 시간대에 일부 참여하고 수령하지 않은 상태’를 설명했다. 나는 기존 안내가 전체 미션 완료를 전제로 한다고 짚고, 이전 시간대에 받을 보상이 있으면 현재 완료 여부와 무관하게 안내하도록 조건을 정리했다. 보상 상태를 도출하는 함수와 팝업을 띄울지 판단하는 함수도 분리했다. 팝업에는 표시 지연·문서 가시성·복귀 경로 같은 추가 조건이 있기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 설명을 위한 재구성이며 실제 회사 코드가 아니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`function needsReturnGuide(status) {
  if (positiveFinite(status.previousReward)) return true;
  return status.currentCycleComplete
    && positiveFinite(status.currentReward);
}

function nextAction(status) {
  if (status.mustClaimPreviousReward) return "claim";
  if (status.adInProgress) return "wait";
  return deriveCurrentMissionAction(status);
}
`})}),`
`,(0,f.jsx)(t.p,{children:`이 두 함수의 결과가 같아야 한다고 강제하지 않았다. 버튼은 참여 정책을, 팝업은 필요한 안내를 표현한다. 다만 둘 다 ‘이전 보상이 있는데 현재 미션이 미완료’라는 상태를 지워서는 안 된다.`}),`
`,(0,f.jsx)(t.h2,{children:`상태 충돌을 보상 성공으로 읽지 않기`}),`
`,(0,f.jsx)(t.p,{children:`참여 요청의 409는 화면이 가지고 있던 상태와 서버의 현재 상태가 충돌한다는 결과로 돌려주고, 화면에서 재조회하도록 했다. 다른 기술 오류는 원래 오류로 던졌다. 모든 실패를 토스트와 재시도 한 경로에 넣으면 상태 확인이 필요한 상황과 요청 자체가 실패한 상황이 섞였다.`}),`
`,(0,f.jsx)(t.p,{children:`비동기 라이브러리의 성공 콜백도 주의했다. Promise가 resolve했다는 의미의 성공에는 409 결과가 포함될 수 있었다. 보상 연출은 콜백 이름이 아니라 반환된 성공 여부와 보상 데이터를 보고 열었다. 클릭 잠금은 같은 화면에서의 중복 실행을 줄이는 장치였고, 서버 지급의 멱등성을 대신하는 장치는 아니었다.`}),`
`,(0,f.jsx)(t.h2,{children:`버튼과 팝업을 별도로 확인한 조건`}),`
`,(0,f.jsx)(t.p,{children:`당시 단위 테스트에는 다음 입력을 서로 다른 결과로 고정했다. 이는 제품 동작의 회귀 조건이며 기기 전체의 지급 검증과는 범위가 다르다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력`}),(0,f.jsx)(t.th,{children:`기대하는 동작`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 시간대 보상 있음, 현재 미션 미완료`}),(0,f.jsx)(t.td,{children:`복귀 수령 안내 필요`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 보상 없음, 현재 일부 참여`}),(0,f.jsx)(t.td,{children:`완료 수령 안내를 앞당기지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`현재 미션 완료, 수령 가능 금액 있음`}),(0,f.jsx)(t.td,{children:`수령 안내 필요`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`참여 요청 409`}),(0,f.jsx)(t.td,{children:`상태 재조회, 성공 연출 생략`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`요청 500`}),(0,f.jsx)(t.td,{children:`원래 오류 유지`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`개발 순서도 데이터 계약과 상태 도출, 초기 참여 연결, 두 표면의 공유 추출, 실제 광고 연결, 디자인·QA의 순서로 나눴다. 초기 버튼이 요청을 보내는 단계만으로 광고 시청까지 완성됐다고 판단하지 않았다. 나는 흐름을 문서로 정리했고, 동료의 고객 문의 경로 추가 요청을 반영했다. 이후 이 문서는 팀의 QA 체크리스트를 만드는 자료로 다시 요청됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자가 다음 행동을 할 수 있는 끝점`}),`
`,(0,f.jsx)(t.p,{children:`정각 문제는 수정 후 같은 재현 조건에서 동료 두 명이 안내의 정상 노출을 확인했고, 해당 조건과 소비자는 공동 제품 통합에 포함됐다. 전체 제품에서는 동료의 진입점·문의 화면, 서버 정책, 디자인과 영상, 내가 담당한 참여·광고·공유 규칙이 합쳐져 출시됐다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 이 경험을 돌아보면 공유의 기준은 닮은 JSX보다 같은 상태를 읽는 의미에 있었다. 화면은 달라도 이전에 받을 보상을 새 시간대의 미완료 조건 뒤에 숨겨서는 안 됐다. 프론트엔드가 서버 응답을 화면에 전달하는 과정에서, 사용자가 할 수 있는 행동을 누락시키지 않는 책임을 구체적으로 배웠다.`})]})}function Mt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(jt,{...e})}):jt(e)}var Nt=e({default:()=>It,frontmatter:()=>Pt}),Pt={title:`외부 페이지 복귀 후 리워드 안내 복구`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`복귀 보상 안내의 미공개 기록·재생·가시성 경합 처리`,period:`2026.07`,summary:`서버의 보상 성공과 화면의 금액 공개를 나눠 기록했다. 문서 교체 뒤 안내를 복구하면서, 지연된 표시 확정이 만드는 중복도 다룬 이야기.`,date:`2026-07`,dateBasis:`context`,collection:`stories`,tags:[`복귀`,`보상 안내`,`문서 수명주기`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function Ft(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`외부로 이동했다 돌아온 사용자의 보상은 처리됐는데, 받았다는 안내가 사라지는 경우가 있었다. QA와 상용 확인에서 나온 문제였다. 고객 문의 담당자는 금액이 적어 보이거나 지급받지 못했다고 인지할 수 있고, 문의하지 않고 떠나는 사용자에게도 안내가 필요하다고 설명했다.`}),`
`,(0,f.jsxs)(t.p,{children:[`서버 성공 응답을 받은 함수 안에서 오버레이를 여는 것만으로는 부족했다. 이동·복귀 중 웹 문서가 교체되면 그 화면 상태도 사라질 수 있었다. `,(0,f.jsx)(t.strong,{children:`지급 요청을 다시 보내지 않고, 아직 공개하지 않은 안내만 이어갈 방법`}),`이 필요했다.`]}),`
`,(0,f.jsx)(t.h2,{children:`지급 요청을 다시 실행하는 문제로 보지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`보상 처리와 보상 금액 공개는 다른 사건이었다. 서버가 성공했다고 해서 새 문서가 사용자에게 금액을 보여줬다는 뜻은 아니다. 반대로 안내가 없다고 지급 요청을 다시 보내면 표시 문제를 서버 처리 문제로 바꾸게 된다.`}),`
`,(0,f.jsx)(t.p,{children:`나는 성공 결과를 받은 시점과 안내가 공개된 시점을 따로 기록했다. 새 문서가 이어서 사용할 UI의 성공 정보와 표시 여부를 보관하는 기록이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`문서가 바뀌어도 미공개 성공을 이어받게 했다`}),`
`,(0,f.jsx)(t.p,{children:`성공 후 아직 공개되지 않은 marker를 저장하고 새 문서에서 읽었다. 아무 기록이나 복구하면 다른 사용자나 오래된 보상이 섞이므로 신원·당일·유효기간 조건을 확인했다. 새 문서의 상태 조회가 준비된 뒤에만 재생하도록 했다.`}),`
`,(0,f.jsx)(t.p,{children:`신원이 맞지 않는다는 이유로 저장된 모든 기록을 지우지도 않았다. 아직 신선한 다른 신원의 기록은 함부로 소비하지 않았다. 복구할 자격을 판단하는 것과 저장공간 전체를 정리하는 것은 별개였다.`}),`
`,(0,f.jsx)(t.p,{children:`설명용 의사코드이며 실제 회사 코드가 아니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`onRewardSuccess(result) {
  savePendingReveal(result, identity, day, expiresAt);
}

onStatusReady() {
  const pending = readPendingReveal();
  if (matchesCurrentContext(pending)) showReveal(pending.amount);
}

onRevealVisibilityChange() {
  if (revealIsOpen && documentIsVisible) commitRevealNow();
}
`})}),`
`,(0,f.jsx)(t.h2,{children:`오래 보여준 뒤 확정하는 방식에도 경합이 있었다`}),`
`,(0,f.jsx)(t.p,{children:`첫 복구만으로 끝나지 않았다. 안내가 visible 상태가 된 뒤 일정 시간 기다려 표시 완료를 기록하는 구현에서는 그 사이 문서가 교체될 수 있었다. 이전 문서가 공개했어도 표시 확정 timer는 취소되고, 새 문서는 미공개 marker를 읽어 같은 금액을 다시 연출했다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 공개 상태와 문서 가시성이 함께 확인되는 즉시 표시 기록을 확정하도록 바꿨다. hidden 문서에서 오버레이 상태만 열렸다면 소비하지 않고, visible로 돌아오는 시점에 다시 확인했다.`}),`
`,(0,f.jsx)(t.p,{children:`표시 확정의 기준은 UI가 공개 상태이고 문서가 visible이라는 클라이언트 신호였다. 이 조건이 맞는 시점에 기록을 남겨 다음 문서가 다시 미공개 안내로 읽지 않게 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`지연 확정과 조기 소비를 서로 다른 테스트로 막았다`}),`
`,(0,f.jsx)(t.p,{children:`회귀 테스트는 ‘나중에 표시 기록이 생겼는가’보다 엄격한 시점을 사용했다. visible 상태로 안내가 열린 바로 그 시각에 표시 시각이 기록돼야 했다. 다시 timer를 넣으면 이 기대 결과를 만족하지 못한다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력·실행 순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`성공 기록→상태 준비→미공개 marker 읽기`}),(0,f.jsx)(t.td,{children:`안내 재생`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`신원·날짜·유효기간 불일치`}),(0,f.jsx)(t.td,{children:`해당 안내 재생 금지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`안내 공개, 문서 visible`}),(0,f.jsx)(t.td,{children:`같은 시점에 표시 기록 확정`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`안내 공개, 문서 hidden`}),(0,f.jsx)(t.td,{children:`표시 기록 미확정 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`hidden 공개 후 visible 복귀`}),(0,f.jsx)(t.td,{children:`복귀 시 표시 기록 확정`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`저장소 읽기·쓰기 실패`}),(0,f.jsx)(t.td,{children:`실패 경로 처리, 정상 저장으로 가장하지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`가짜 시간·가시성·저장소를 쓰는 hook 테스트로, 문서가 visible이 되는 시점에 표시 상태를 소비하는 판단을 고정했다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록은 발견 이후의 흐름도 읽게 했다`}),`
`,(0,f.jsx)(t.p,{children:`write·replay·discard·commit·error를 나눠 진단 이벤트를 남겼다. 단순히 안내가 열렸다는 하나의 이벤트보다, 성공 정보가 기록됐는지 새 문서에서 재생됐는지 어떤 조건으로 버려졌는지 읽을 수 있었다.`}),`
`,(0,f.jsxs)(t.p,{children:[`QA와 상용 확인에서 찾은 문제를, 구현 이후에는 이 기록으로 이어서 조사했다. 상태 흐름과 전후 관측을 읽을 때도 활용했다. 상세 로그를 어떻게 줄였는지는 `,(0,f.jsx)(t.a,{href:`/cases/playhub-diagnostic-sampling/`,children:`고정 표본 수집의 이야기`}),`에서 다룬다.`]}),`
`,(0,f.jsx)(t.h2,{children:`복귀한 사용자가 안내를 이어받는 변화`}),`
`,(0,f.jsx)(t.p,{children:`수정 후 나는 같은 길이의 전후 관측을 공유했고, 제품 담당자는 많이 개선됐다고 반응했다. 성공한 보상을 새 문서가 미공개 안내로 이어받고, 공개된 안내는 문서 교체 뒤 다시 재생하지 않도록 바꾼 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 돌아보면 보상 UI는 성공 응답 뒤에 잠깐 붙이는 장식이 아니었다. 성공이 존재하는 시간과 그 성공을 공개하는 문서의 수명이 달랐다. 그 사이를 잇는 작은 기록과 정확한 소비 시점이, 사용자가 이미 받은 혜택을 이해할 수 있는 흐름을 만들었다.`})]})}function It(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Ft,{...e})}):Ft(e)}var Lt=e({default:()=>Bt,frontmatter:()=>Rt}),Rt={title:`여러 업무 기록을 읽는 경로로 연결하기`,summary:`사실을 지켜 쓴 기록도 보고서처럼 읽힐 수 있었다. 경험을 찾는 입구와 한 글을 따라 읽는 흐름을 다시 정리한다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function zt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`이번 사이트 개편에서는 내용의 사실성을 앞세웠다. 그런데 근거와 미확인 범위를 앞에 배치하고 같은 설명을 반복하니, 실제 일을 읽기보다 조사 보고서를 읽는 모양이 됐다. 사실을 지키는 일과 이야기를 전달하는 일이 따로 남은 셈이다.`}),`
`,(0,f.jsx)(t.p,{children:`이 기록 공간에서 지금 다시 다루는 문제는 내 경험을 어떤 문장으로 멋지게 요약할지보다, 독자가 어떤 질문으로 들어와 어떤 일을 읽을 수 있을지다.`}),`
`,(0,f.jsx)(t.h2,{children:`경력을 바꾸지 않고 읽는 질문을 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`제품의 행동, 외부 응답의 계약, 기술 변경의 비용을 세 입구로 연결했다. 같은 사건이 여러 경로에 있을 수 있다. 다른 이력을 만들어 채우는 대신 같은 사실의 서로 다른 면을 읽는 구조다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 React·Vite·MDX 구조는 유지했다. 글과 메타데이터는 콘텐츠 파일에, 표현은 페이지 컴포넌트에 둔다. 글을 통합할 때는 원래 주소를 버리지 않고 정리본으로 안내하고, 목록·검색에서는 현재 글과 통합된 안내를 구분했다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록이 이야기로 읽히도록`}),`
`,(0,f.jsx)(t.p,{children:`업무 글에는 문제와 실제 선택·협업·구현이 먼저 나오도록 다시 썼다. 글마다 검증 보고서처럼 붙였던 안내를 빼고, 당시의 고민과 구현 과정을 본문에서 이어갈 수 있도록 다듬었다.`}),`
`,(0,f.jsx)(t.p,{children:`읽기 경로와 검색·링크, 생성된 HTML을 검사하고 실제 게시 사이트에서도 글을 열어본다. 그다음에는 직접 읽으며 어색한 문장과 끊기는 흐름을 다시 고친다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 사이트가 소개 문장을 모아놓은 곳보다 일을 읽고 질문할 수 있는 곳이었으면 한다. `,(0,f.jsx)(t.a,{href:`/essays/why-not-traditional-resume`,children:`기록을 먼저 연결하는 이유`}),`가 그 목적을, `,(0,f.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`파일 기반 콘텐츠`}),`가 편집할 때 남는 계약을 설명한다.`]})]})}function Bt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(zt,{...e})}):zt(e)}var Vt=e({default:()=>Wt,frontmatter:()=>Ht}),Ht={title:`정리본으로 연결한 이전 글: quality-gate-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function Ut(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Wt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Ut,{...e})}):Ut(e)}var Gt=e({default:()=>Jt,frontmatter:()=>Kt}),Kt={title:`리텐션 리포트의 데이터 변환과 CSV 내보내기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`리포트/CSV 구현·API 날짜 협의·한계 문구 참여`,period:`2021-2022`,summary:`화면의 빈칸이 내려받은 파일에서는 0으로 보인다면 같은 자료를 다르게 읽을 수 있다. 리텐션 표와 CSV를 만들며 놓친 구분을 돌아본다.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`운영 데이터`,`API 계약`,`데이터 해석`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function qt(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리텐션 리포트는 같은 기준일의 사용자 묶음을 놓고, 이후 날짜의 값을 비교하는 화면이었다. 운영자는 어느 날의 전환 수와 그 뒤의 리텐션 값을 표에서 살펴보고, 자료를 CSV 파일로 내려받을 수 있어야 했다. 2021년에 이 화면과 내보내기를 구현했다.`}),`
`,(0,f.jsx)(t.p,{children:`이런 표에서 숫자만큼 중요한 것이 빈칸이다. 빈칸을 보면 아직 값이 없는 것으로 읽을 수 있지만, 0을 보면 측정된 결과가 0이었다고 읽을 수 있다. 두 표현은 이후 비교나 계산에서 다른 판단으로 이어질 수 있다.`}),`
`,(0,f.jsx)(t.p,{children:`가령 화면에서는 한 칸이 비어 있는데 파일로 내려받으면 같은 위치에 0이 있다고 해보자. 어느 쪽이 잘못된 자료인지 묻게 되지만, 문제는 원자료가 다르지 않아도 생긴다. 빈 값을 채우고 화면에 표시하는 과정에서 같은 값이 서로 다르게 보일 수 있기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`당시 구현은 빠진 일자를 0으로 채우고, 그래프에서는 0을 빈 셀로 표시했다. 표와 파일을 만들어 같은 자료를 볼 수 있게 했지만, 다시 코드를 읽으니 '값이 없음'과 '실제 0'을 변환 단계에서 합친 부분이 남아 있었다. 이 글에서는 그 기능을 만든 과정과 지금 보이는 의미의 손실을 함께 돌아본다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 조건의 제안과 실제 화면 코드`}),`
`,(0,f.jsx)(t.p,{children:`서버 담당자에게는 FE가 광고의 시작·종료 날짜를 query로 보내는 경우와, query를 생략해 서버의 기본 기간을 사용하는 경우를 나눠 제안했다. 어느 쪽에서 기간을 정하느냐에 따라 화면이 설명할 조회 조건도 달라졌기 때문이다.`}),`
`,(0,f.jsx)(t.p,{children:`실제 화면의 조회 코드는 광고 ID를 전달했고, 그 응답을 받아 표와 CSV를 만들었다.`}),`
`,(0,f.jsx)(t.h2,{children:`응답을 그대로 그리지 않고 행과 열의 의미를 맞추기`}),`
`,(0,f.jsx)(t.p,{children:`리포트에서는 기준일별 코호트와 전환 수, 기준일 이후의 day-offset 값을 표의 행과 열로 바꿨다. 응답에 들어 있는 날짜와 배열의 순서만 따라 출력하는 것이 아니라, 각 값을 해당 날짜 열에 놓는 정규화가 필요했다.`}),`
`,(0,f.jsx)(t.p,{children:`빈 위치를 채우는 방식도 화면 표현과 연결됐다. 정규화에서는 빠진 일자의 값을 0으로 채우고, 그래프에서는 0인 위치를 빈 셀로 표시했다. 같은 열 구조는 만들었지만, 응답에 값이 없는 경우와 실제 값이 0인 경우가 여기서 합쳐졌다.`}),`
`,(0,f.jsx)(t.p,{children:`CSV도 날짜·전환 수와 일자별 값을 평평한 열로 만들었다. 표와 CSV가 공유한 것은 같은 응답을 날짜 열에 대응시키는 구조다. 그래프에서 빈 셀로 보이는 값이 CSV에서는 0으로 남을 수 있으므로, 같은 원자료를 내보낸다는 것과 같은 의미로 읽힌다는 것은 별도로 봐야 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`숫자 옆의 안내도 기능의 일부였다`}),`
`,(0,f.jsx)(t.p,{children:`데이터에는 표본과 실험적 성격, 완전성·갱신 시점, 작은 규모에서 제공되지 않는 값의 조건이 있었다. 이런 한계를 알리는 문구에도 참여했다. 선명한 그래프가 데이터의 조건까지 지워버리지 않도록 하는 설명이었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 안내가 설명한 것은 표본과 집계의 조건이었다. 특정 빈 셀이 미관측인지 실제 0인지는 그 문구만으로 구분되지 않는다. 데이터 전체의 사용 조건을 알리는 일과 개별 셀의 상태를 표현하는 일은 서로 다른 구현이 필요했다.`}),`
`,(0,f.jsx)(t.p,{children:`QA에서는 통계 서비스 상태 때문에 전체 결과를 확인하기 어려운 상황도 공유했다. 화면이 정상적으로 그려지는지와 실제 자료가 올바른 조건으로 조회되는지는 다른 곳에서 만나는 문제였다. FE와 gateway, 통계 담당자가 함께 맞춰야 하는 작업이었다.`}),`
`,(0,f.jsx)(t.h2,{children:`화면과 파일에서 같은 자료를 살펴볼 수 있게`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 기준일별 코호트를 같은 날짜 열에서 비교하고, 같은 자료를 CSV로 내려받아 살펴볼 수 있게 됐다. 데이터가 없는 화면과 표본·갱신 조건의 안내도 함께 제공했다. 조회한 응답을 화면과 파일에서 사용할 수 있게 만든 것이 당시의 제품 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 빈칸과 0의 구분까지 해결한 것은 아니었다. 이 코드를 다시 읽으며 지금의 평가 기준은 더 구체적이 됐다. 표가 나오고 파일이 다운로드된다는 것만으로, 사람이 두 결과를 같은 의미로 읽는다고 볼 수는 없다. 표시를 고치는 것보다 먼저 변환에서 잃은 상태를 봐야 한다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 사용량을 무엇으로 확인할지도 질문했다. 지금 다시 만든다면 값이 없는 셀과 실제 0을 응답을 읽는 단계부터 나누고, 화면과 CSV가 각각 그 차이를 전달하도록 정하고 싶다.`})]})}function Jt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(qt,{...e})}):qt(e)}var Yt=e({default:()=>Qt,frontmatter:()=>Xt}),Xt={title:`다국어 팝업의 암묵적 의존성 제거`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`공용 팝업의 번역 경계 수정·언어 선택과 독립 렌더링 테스트`,period:`2026`,summary:`같은 팝업인데 어떤 화면에서는 열리고, 상위 번역 설정이 없는 곳에서는 본문을 그리지 못하는 구조였다. 공용 기능의 숨은 실행 조건을 다룬 과정.`,date:`2026-05-27`,dateBasis:`context`,collection:`records`,tags:[`공용 컴포넌트`,`다국어`,`암묵적 의존성`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function Zt(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고를 제보하는 팝업은 여러 화면에서 호출하는 공용 기능이었다. 공용이라면 호출하는 화면을 바꿔도 필요한 안내와 버튼이 나와야 한다. 하지만 이 팝업에는 화면 밖에서 미리 제공해야 하는 번역 설정이 숨어 있었다.`}),`
`,(0,f.jsx)(t.p,{children:`React의 번역 Provider는 아래쪽 컴포넌트에 사용할 언어와 문구를 제공한다. 팝업 안에도 자체 Provider와 메시지가 있어서, 그 기능만 불러오면 필요한 설정이 갖춰질 것처럼 보였다. 실제로 번역 설정이 있는 화면에서는 그런 의존성을 알아차리기 어려웠다.`}),`
`,(0,f.jsx)(t.p,{children:`순서가 문제였다. 팝업이 내부 Provider를 만들기 전에 상위 Provider에서 언어부터 읽었다. 상위 설정이 없는 렌더링에서는 그 읽기가 실패해 팝업 본문까지 그릴 수 없었다. 문구를 잘못 번역하는 정도가 아니라, 공용 UI를 실행하기 위한 조건이 호출 화면에 남아 있었던 것이다.`}),`
`,(0,f.jsx)(t.p,{children:`화면별 번역 범위를 조정할 때도 이 의존성이 따라왔다. 한 화면의 설정을 옮기는 일 때문에 다른 곳에서 쓰는 팝업까지 그 설정을 마련해야 한다면, 기능이 메시지를 갖고 있다는 것만으로는 독립적이라고 볼 수 없었다.`}),`
`,(0,f.jsx)(t.h2,{children:`Provider가 있다는 것과 독립적으로 실행된다는 것`}),`
`,(0,f.jsx)(t.p,{children:`화면별 번역 설정의 범위를 조정하는 변경을 다루면서, 공용 기능이 어느 레이아웃의 설정을 전제로 하는지 함께 살폈다. 번역이 필요한 화면에 Provider를 두는 일과, 그 화면 밖에서도 쓰는 팝업의 실행 조건은 같은 문제가 아니었다.`}),`
`,(0,f.jsx)(t.p,{children:`팝업을 쓰는 모든 화면에 상위 Provider를 추가하는 방향으로 넓히지는 않았다. 언어를 고르는 입력을 팝업이 받을 수 있게 하고, 팝업 안의 번역 Provider가 그 선택을 사용하도록 바꿨다. 메시지를 소유한 기능이 언어 선택의 기준도 함께 갖는 구조였다.`}),`
`,(0,f.jsx)(t.p,{children:`중요했던 것은 Provider의 개수보다 읽는 순서였다. 내부 Provider의 자식은 그 설정을 사용할 수 있지만, Provider를 생성하는 바깥 함수가 읽는 언어까지 그 Provider가 제공하지는 않는다.`}),`
`,(0,f.jsx)(t.h2,{children:`브라우저 언어만으로 고르지 않은 이유`}),`
`,(0,f.jsx)(t.p,{children:`언어 선택에는 두 조건이 있었다. 해당 서비스가 다국어를 지원하는지와, 브라우저가 어떤 언어를 사용하는지다. 브라우저가 영어라고 해서 다국어를 제공하지 않는 서비스의 안내까지 영어로 바꾸면 기존 정책과 달라진다.`}),`
`,(0,f.jsx)(t.p,{children:`호출하는 쪽에서 서비스 정보를 전달하고, 다국어 지원 여부를 먼저 확인하도록 했다. 정보가 없거나 다국어를 지원하지 않으면 기본 한국어를 사용했다. 지원하는 경우에만 브라우저 언어를 지원 메시지에 대응시켰다. 지원 목록 밖의 언어도 기본값으로 돌아갔다.`}),`
`,(0,f.jsx)(t.p,{children:`언어 선택은 별도 함수로 나눴다. 번역 라이브러리의 context 없이도 입력과 기본값의 관계를 확인할 수 있어야 했다. 브라우저 정보가 없는 실행에서도 같은 기본값을 사용하도록 했다.`}),`
`,(0,f.jsx)(t.h2,{children:`상위 설정을 빼고 팝업을 그려보기`}),`
`,(0,f.jsx)(t.p,{children:`상위 번역 Provider가 없어도 기본 안내와 버튼을 그릴 수 있게 됐다. 번역을 위해 호출 화면마다 같은 상위 설정을 추가하는 대신, 서비스 정보를 팝업에 전달하고 팝업이 지원 정책과 브라우저 언어로 메시지를 선택한다. 서비스 정보가 없을 때는 기본값을 사용한다. 공용 기능을 쓰는 화면이 떠안을 번역 의존성을 줄인 결과였다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서는 지원 여부와 언어 매핑을 나누고, 상위 Provider를 실제로 빼고 팝업을 렌더링했다. 기본 안내와 버튼이 보이는지 확인한 변경을 함께 병합했다. 제거하려던 설정을 테스트 환경이 다시 제공하면 이 결과를 확인할 수 없었다.`}),`
`,(0,f.jsx)(t.p,{children:`이 경험에서 공용이라는 말의 기준을 다시 보게 된다. 메시지와 Provider를 내부에 갖고 있어도 처음 실행하는 함수가 바깥의 context를 읽으면 독립적으로 쓸 수 없다. 재사용할 코드의 위치보다 실행에 필요한 조건을 확인하고, 그 조건이 없는 테스트도 구성해야 한다는 점이 남았다.`})]})}function Qt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Zt,{...e})}):Zt(e)}var $t=e({default:()=>nn,frontmatter:()=>en}),en={title:`정리본으로 연결한 이전 글: team-onboarding-doc-system`,summary:`이 글의 유용한 내용은 온보딩의 정보 구조에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/onboarding-as-information-design`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2025-2026`,date:`2026`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function tn(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/onboarding-as-information-design`,children:`온보딩의 정보 구조 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 계약, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function nn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(tn,{...e})}):tn(e)}export{se as A,l as B,Oe as C,ge as D,ye as E,w as F,i as H,b as I,g as L,F as M,j as N,pe as O,te as P,ee as R,je as S,Se as T,c as V,qe as _,Lt as a,Le as b,Tt as c,mt as d,ut as f,Xe as g,$e as h,Vt as i,ie as j,ue as k,St as l,nt as m,Yt as n,Nt as o,ot as p,Gt as r,kt as s,$t as t,vt as u,We as v,Te as w,Pe as x,Be as y,d as z};