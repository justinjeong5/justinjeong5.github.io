import{n as e,r as t,t as n}from"./rolldown-runtime-QTnfLwEv.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),f=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function _(){}_.prototype=g.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}var y=v.prototype=new _;y.constructor=v,m(y,g.prototype),y.isPureReactComponent=!0;var b=Array.isArray;function x(){}var S={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return w(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var D=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(x,x):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,b(o)?(i=``,c!=null&&(i=c.replace(D,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(D,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(b(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=A(a,r,i,s,o);else if(u=te(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function M(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=ee,e.Children=P,e.Component=g,e.Fragment=r,e.Profiler=a,e.PureComponent=v,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=m({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!C.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)C.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:M}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(x,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.7`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o={},s=a.createContext(o);function c(e){let t=a.useContext(s);return a.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}var u=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),d=n(((e,t)=>{t.exports=u()})),ee=e({default:()=>m,frontmatter:()=>te}),f=d(),te={title:`광고의 기다림을 줄이며 실제 노출의 의미 지키기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`실행 최적화`,role:`광고 분리 요청·hidden SDK 준비·표시 흐름 구현, 서버 협의와 출시 후 집계 분석`,period:`2026.06–2026.08`,summary:`광고를 누른 뒤의 기다림을 줄이려고 SDK 준비를 앞당겼다. 적용 조건을 맞춘 QA부터 실제 표시의 집계와 공급사 세션까지 확인하며, 빠른 화면과 운영 판단을 함께 다룬 과정.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`프리로딩`,`SDK 수명주기`,`집계 기준`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function p(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`사용자가 광고 보기 버튼을 눌러도 바로 광고가 나오지는 않았습니다. 광고를 할당받고 SDK를 준비하는 시간이 필요했기 때문입니다. 참여 의사를 밝힌 뒤에도 기다려야 하는 흐름이었고, 사업 담당자도 이 대기와 광고 건너뛰기를 연결된 문제로 보고 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`저는 6월부터 서버 담당과 요청·응답·timeout을 협의하고, 버튼을 누르기 전에 광고를 준비하는 프론트엔드 구현을 맡았습니다. 7월에는 제품에 통합해 적용했고, 8월에는 집계와 세션을 후속으로 살폈습니다. 디자인이 준비한 화면 시간 안에서 SDK를 준비하면 클릭 뒤의 기다림을 줄일 수 있었습니다. 다만 SDK를 먼저 만들면 공급사의 관측도 먼저 시작될 수 있어, `,(0,f.jsx)(t.strong,{children:`미리 준비한 광고를 언제부터 실제로 사용한 광고로 볼 것인가`}),`를 함께 정해야 했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`요청을 나눠도 표시 순서는 유지해야 했다`}),`
`,(0,f.jsx)(t.p,{children:`SDK 설정과 일반 광고 요청을 분리하면 SDK가 먼저 도착해 준비할 수 있었습니다. 다만 먼저 준비됐다는 이유로 표시 순서를 바꾸면 서버가 의도한 우선순위와 달라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`초기 협의에서 저는 최종 순서를 서버에서 받을 수 있는지 물었습니다. 요청을 분리할 때 서버가 관리해야 할 상태를 논의한 뒤, 프론트엔드에서 display weight를 기준으로 두 응답을 병합하기로 합의했습니다. timeout도 필터 조합의 부수 효과로 바꾸기보다 요청 입력으로 명시하자고 제안했습니다. 서버의 기본값·상한 방식에 동의했고, 프론트엔드는 분리 응답과 settle 상태를 소비했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`분리 흐름은 선택적으로 활성화하고 기존 단일 요청 경로를 유지했습니다. 서버의 할당 정책과 응답 필드는 서버 담당이, 표시·회차·flag·계측·mock과 QA 연결은 제가 맡았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`준비 완료와 사용자에게 표시됨을 분리했다`}),`
`,(0,f.jsx)(t.p,{children:`초기 hidden 방식은 응답 데이터만 cache한 것이 아니었습니다. SDK 광고를 생성하되 화면에서는 숨긴 뒤 실제 표시 시점에 드러냈습니다. 따라서 준비됨과 표시됨을 같은 상태로 처리할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 상태 구분을 설명하는 재구성이며 실제 회사 코드가 아닙니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`const responses = requestSdkAndOtherAdsSeparately();
responses.sdk.then(prepareHiddenSdk);

async function showNext() {
  const candidates = mergeByDisplayWeight(await settle(responses));
  const session = choosePreparedOrCreate(candidates);
  await session.show();
  markActuallyShown(session);
}
`})}),`
`,(0,f.jsx)(t.p,{children:`실제 구현에서는 각 응답의 timeout·완료 상태와 재조회 request ID를 관리하고, 준비 신호와 사용 신호도 따로 두었습니다. 요청을 먼저 보냈다는 이유로 사용자가 광고를 보기 시작했다고 기록하지 않기 위해서였습니다. 다만 이렇게 상태를 나눠도 모든 공급사의 내부 동작까지 프론트엔드에서 통제할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`빨라지지 않았다는 QA에는 적용 조건부터 확인했다`}),`
`,(0,f.jsx)(t.p,{children:`적용·미적용 영상을 공유한 뒤 일부 QA 대상은 빠르지 않다는 반응이 있었습니다. 먼저 같은 기능이 켜져 있는지 확인했고, 해당 대상의 flag가 누락돼 있었습니다. 타겟팅을 적용한 뒤 동료가 빠른 표시를 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 전의 QA에는 서로 다른 검증 환경과 mock 응답도 섞여 있었습니다. mock이 알려주는 준비 시간과 실제 공급사 SDK의 준비는 같지 않았고, 공급사마다 다른 대기도 남았습니다. 느리다는 반응을 구현 실패로 결론 내리기 전에, 비교 대상이 같은 실행 경로와 조건인지부터 맞춰야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`요청이 줄었다는 숫자만으로 실행 실패를 정하지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`프리로딩 적용 뒤 광고 기회와 노출 집계의 변화도 질문이 됐습니다. 저는 실제로 표시된 광고 기록과 최종 노출 로그를 맞춰 보는 분석을 진행했습니다. 미리 준비한 광고의 수와 사용자가 실제로 실행한 광고의 수는 같은 분모가 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`프리로딩이 아닌 경로에서도 기회가 줄어드는 모습이 있어, 준비 방식 하나로 전체 변화를 설명하기 어려웠습니다. 요일과 이용 패턴, 광고 구성처럼 함께 바뀔 수 있는 조건도 나눠 봐야 했습니다. 단순히 전후 총량을 나누면 실행 누락과 사용 기회의 변화가 한 숫자에 섞입니다.`}),`
`,(0,f.jsx)(t.p,{children:`실제 표시 기록과 노출 로그를 맞춰 보니 요청 수의 증감만으로는 설명하지 못하는 부분이 있었습니다. 실제 표시된 광고의 노출이 어디에 기록되는지, 공급사 내부의 클릭 감지가 언제부터 시작되는지도 확인할 필요가 있었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`우리 노출 callback을 미뤄도 공급사 클릭 추론은 움직였다`}),`
`,(0,f.jsx)(t.p,{children:`상용 적용 뒤 노출과 클릭 집계의 변화가 질문으로 돌아왔습니다. hidden SDK가 생성된 시점부터 공급사 내부의 화면 이탈·복귀 기반 클릭 추론이 활성화될 수 있었습니다. 우리 쪽 impression을 표시까지 보류해도 공급사 내부 집계까지 보류된다고 볼 수는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 코드와 관측을 연결해 이 차이를 설명하고, 실제 노출 신호 이후 클릭 감지를 활성화하는 계약을 공급사에 요청하자고 제안했습니다. 이는 공급사 내부 코드를 직접 확인한 결과가 아니라 당시 동작에 대한 분석이었습니다. 공급사 확인과 사업 판단은 해당 담당자들과 함께 진행했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`클릭 집계가 늘었다고 매출도 같은 비율로 늘었다고 읽지 않았습니다. 공급사에서 전달한 설명에서도 클릭과 매출은 집계 출처가 달랐습니다. 프리로딩의 성공 여부를 하나의 숫자로 판정하기 어려운 이유였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`DOM 정리 뒤에도 SDK 세션은 남을 수 있었다`}),`
`,(0,f.jsx)(t.p,{children:`이후 동료가 SDK의 close 호출과 같은 광고 세션 재사용을 보완했습니다. 화면 DOM을 없애는 것과 SDK의 진행 상태를 종료하는 것은 다르기 때문입니다. 후속 집계도 실제 표시된 세션의 광고를 기준으로 유지했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`제 역할은 그 수정 시점과 운영 관찰을 대조해, 같은 페이지에서 연속 광고가 같은 SDK를 사용할 때의 문제 경로를 재구성하는 것이었습니다. 동료가 구현한 세션 종료를 제 최초 프리로딩 구현에 합쳐 설명하지 않습니다. 당시 공급사 간 집계 차이와 세션 문제도 한 원인으로 합칠 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 사건을 확인할 때의 조건은 다음처럼 나뉩니다. 표는 상태와 확인 방법을 정리한 것이며 실기기 전체 통과를 뜻하지 않습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`조건`}),(0,f.jsx)(t.th,{children:`확인해야 하는 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`SDK 응답이 먼저 도착`}),(0,f.jsx)(t.td,{children:`미리 준비해도 최종 표시 순서는 weight 기준`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`분리 기능 비활성`}),(0,f.jsx)(t.td,{children:`기존 요청 경로 사용`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`준비 완료, 아직 표시 전`}),(0,f.jsx)(t.td,{children:`준비와 사용·표시 신호 구별`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`재조회가 시작됨`}),(0,f.jsx)(t.td,{children:`응답을 해당 request ID와 연결`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`SDK 세션 종료·동일 광고 재할당`}),(0,f.jsx)(t.td,{children:`DOM과 SDK 상태, 재사용한 실제 광고 추적을 함께 확인`})]})]})]}),`
`,(0,f.jsx)(t.h2,{children:`빠른 표시와 운영 판단을 함께 전달했다`}),`
`,(0,f.jsx)(t.p,{children:`프리로딩은 공동 제품에 통합됐고 상용 적용 보고로 이어졌습니다. 사업 담당자는 대기 단축과 건너뛰기 감소를 보고했습니다. 다만 동등한 기기·네트워크·광고 비중·측정 이벤트의 전후 실측을 확보한 결과는 아니어서 여기서는 정성적인 효과 보고로 남깁니다.`}),`
`,(0,f.jsx)(t.p,{children:`집계 차이로 롤백 요청이 나왔습니다. 팀은 추가 영향을 확인한 뒤 롤백하지 않고 매출을 모니터링하기로 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`SDK 생성을 앞당겨 버튼 뒤의 기다림을 줄이는 과정에서, 화면에 숨겨 둔 시간에도 공급사의 관측이 시작될 수 있다는 점까지 살폈습니다. 우리 표시 callback을 늦추는 조치만으로는 충분하지 않았습니다. 동료가 보완한 세션 종료와 운영 관찰까지 이어서 보며, 다음 프리로딩에서는 준비 시점뿐 아니라 노출·클릭 감지의 시작과 세션 종료 시점도 함께 확인해야 한다고 생각하게 됐습니다.`})]})}function m(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(p,{...e})}):p(e)}var h=e({default:()=>v,frontmatter:()=>g}),g={title:`광고 응답이 늦어도 사용자가 다음 행동을 선택하도록`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`복구 UX 제안·PM 협의·웹 생명주기 처리`,period:`2026`,summary:`광고를 봤는데 상자 열기로 넘어가지 않는다면 기다려야 할까, 다시 눌러야 할까? 완료 신호를 받지 못한 웹에서 사용자의 다음 선택을 다룬 이야기.`,date:`2026`,dateBasis:`context`,collection:`records`,tags:[`외부 의존성`,`복구 UX`,`비동기 상태`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function _(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`보너스 상자를 열려면 먼저 광고에 참여해야 했습니다. 광고를 본 사용자는 상자 열기로 넘어가기를 기대하지만, 실제로는 광고 참여와 상자 열기, 보상 지급이 각각의 처리를 거쳤습니다. 사용자 입장에서는 시청이 끝났어도 웹에는 아직 완료 응답이 도착하지 않을 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`관련 문의에는 광고를 본 뒤에도 상자 열기가 진행되지 않아 여러 번 다시 시도하다가 포기했다는 이야기가 있었습니다. 기다리는 사람에게는 시청이 끝나지 않은 것인지, 처리가 늦는 것인지, 다시 눌러야 하는지 구별하기 어렵습니다. 문제가 생긴 위치를 몰라도 다음 행동은 결정해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`웹이 아는 것은 외부 광고의 완료 응답이 아직 오지 않았다는 사실이었습니다. 늦은 응답이 올 수 있으니 곧바로 실패라고 확정하기도 어렵고, 시간이 지났다는 이유로 광고가 완료됐다고 처리할 수도 없었습니다. 그렇다고 사용자가 응답을 기약 없이 기다리게 두는 것도 제품의 문제였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`원인을 확인하는 동안에도 사용자는 다음 행동을 결정해야 했습니다. 그래서 웹에서 제공할 선택지를 정하고, 선택 이후에 도착한 응답이 그 결과를 바꾸지 않도록 처리하는 방법까지 함께 살폈습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`원인 확인을 기다리는 동안에도 선택지는 필요했다`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 AdMob의 timeout이나 callback 지연·누락을 의심하며 관련 담당자들과 확인했습니다. 저는 일정 시간 뒤 기존 skip UI를 사용할 수 있게 하는 방식을 제안했습니다. 외부 원인을 모두 통제할 수 없더라도 웹에서 제공할 다음 행동은 다룰 수 있었기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`PM과는 fullscreen 광고가 웹 UI를 가릴 수 있다는 제약도 논의했습니다. 웹에 선택지를 두어도 네이티브 광고 화면 위에서 그 버튼을 보이게 하는 것은 아닙니다. 제가 바꾼 대상은 웹이 완료 응답을 기다리는 상태와 그 뒤의 처리였고, fullscreen·callback 자체의 문제는 관련 담당자와 따로 살폈습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 제안에서 시간은 광고가 실패했다고 판정하는 기준이 아니었습니다. 사용자가 계속 기다릴지, 대기에서 빠져나올지 선택할 수 있게 하는 시점이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`시간이 지나도 자동 완료로 처리하지 않기`}),`
`,(0,f.jsx)(t.p,{children:`광고가 시작된 뒤 일정 대기가 지나면 수동 복구 UI를 열도록 했습니다. 타이머만 지났을 때는 참여 기록을 전송하지 않고, 사용자가 버튼을 눌렀을 때 skip을 한 번 실행하는 흐름이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`시간이 지났다는 이유로 참여 기록을 보내면 실제 광고 완료를 확인하지 못한 상태에서도 완료로 처리하게 됩니다. 정상 완료에서는 실제 광고 결과를 사용하고, 수동 복구에서는 별도의 결과로 다음 처리를 이어가도록 했습니다. 보상 지급 자체를 웹의 대기 시간으로 결정하지는 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서도 대기만 한 경우와 버튼을 누른 경우를 나눴습니다. 수동 복구에서는 실제 광고 식별값을 정상 완료처럼 넣지 않고, 정상 응답이 버튼 클릭보다 먼저 끝난 경우에는 skip을 실행하지 않는 조건을 구성했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`빠져나온 뒤에도 이전 광고의 작업은 남을 수 있다`}),`
`,(0,f.jsxs)(t.p,{children:[`구현에서는 현재 광고 시도(`,(0,f.jsx)(t.code,{children:`attempt`}),`)에 시작 여부·건너뛰기 여부·취소를 제어하는 `,(0,f.jsx)(t.code,{children:`controller`}),`를 묶었습니다. 사용자가 건너뛰기를 누르면 먼저 해당 시도에 그 선택을 기록하고 취소 신호를 전달했습니다. 같은 시도에서 건너뛰기를 반복 실행하지 않는 조건도 뒀습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`사용자가 건너뛰기를 고른 뒤에도 외부 Promise가 resolve되거나 reject될 수 있었습니다. 어느 경로로 끝나도 이미 건너뛴 광고의 결과는 수동 복구로 남겨야 했습니다. resolve 쪽만 보호하면 reject나 finally가 나중에 상태를 바꿀 수 있어, 버튼을 누른 뒤의 세 경로를 함께 읽었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정리 작업에서도 현재 광고 시도의 객체가 자신과 같은지 확인한 뒤 ref를 비웠습니다. 이전 실행의 finally가 새 실행의 controller를 지우는 일을 막기 위한 조건이었습니다. 화면을 떠날 때의 취소와 타이머 정리도 함께 다뤘습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자는 기다림을 끝낼 수 있고, 결과는 한 경로로 남는다`}),`
`,(0,f.jsx)(t.p,{children:`사용자는 정해진 대기 뒤 해당 광고에서 수동으로 빠져나올 선택을 갖게 됐습니다. 남은 후보가 있으면 그 처리를 이어가고, 후보 처리 뒤 참여 기록 요청이 성공하면 상자 화면으로 넘어가 상자를 열 수 있습니다. 계속 기다리는 것 외의 행동 경로를 웹에 만든 것이 제품에서 달라진 점이었습니다. 버튼 클릭을 즉시 보상 지급으로 처리하지는 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정상 응답이 먼저 끝나면 정상 결과를 사용하고, 복구를 선택한 시도의 늦은 응답은 이미 한 선택을 뒤집지 않도록 했습니다. 테스트도 시작 후 skip·중복 클릭·늦은 응답·정상 응답 선행을 나눴습니다. 탈출 버튼을 보이게 하는 것과 그 선택을 끝까지 유지하는 것은 함께 확인할 일이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 자체 점검에서는 해결된 것으로 보인다고 공유하고 추가 문의가 생기면 알려달라고 요청했습니다. 이는 기다림의 원인만 보는 데서 멈추지 않고, 변경 뒤의 문의 흐름까지 다시 확인하려 한 과정이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`PM과 논의한 fullscreen 제약은 이 변경 뒤에도 남았습니다. 웹 버튼이 네이티브 광고 화면 위에 보이게 되는 것은 아니었기 때문입니다. 제가 다룬 것은 웹이 응답을 기다리는 동안 제공할 선택과 그 이후의 처리였습니다. 외부 원인을 확인하는 일과 함께, 사용자가 대기에서 빠져나온 뒤에는 늦은 응답이나 정리 작업이 그 선택을 뒤집지 않게 했습니다. 지금 돌아보면, 원인의 확정을 기다리는 동안에도 제가 바꿀 수 있는 부분에서 다음 행동을 제공하고 그 이후까지 다룰 필요가 있었다고 생각합니다.`})]})}function v(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(_,{...e})}):_(e)}var y=e({default:()=>S,frontmatter:()=>b}),b={title:`광고주가 연동을 검증하고 집행을 결정하는 도구 만들기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`단계별 FE·ViewModel·API client·BFF 구현, QA와 고객 피드백 후속`,period:`2022.11–2023.01`,summary:`유형별 입력과 테스트 링크, 광고주의 실제 행동, 서버의 전환 조회를 한 도구로 연결했다. 실제 고객 검증이 집행 판단에 쓰인 뒤, 첫 테스트를 막던 과거 기록 조건을 다시 다룬 경험.`,date:`2023-01`,dateBasis:`context`,collection:`stories`,tags:[`광고주 도구`,`FE·BFF`,`제품 규칙`],updated:`2026-10-10`,lastTendedAt:`2026-10-10`};function x(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고를 집행하기 전에 광고주 쪽의 행동이 제대로 전환으로 들어오는지 확인해야 합니다. 테스트 링크를 만들었다는 사실만으로는 부족합니다. 광고주가 실제 행동을 하고, 그 행동에 해당하는 기록을 서버에서 찾을 수 있어야 다음 집행을 판단할 수 있습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`2022년 12월, 제품 담당자가 제가 개발한 도구로 실제 고객의 전환을 확인했습니다. 운영 담당자는 그 결과를 보고 추가 테스트 없이 예정된 집행을 진행할 수 있다고 판단했습니다. 이 판단을 하려면 `,(0,f.jsx)(t.strong,{children:`유형에 맞는 입력을 받고, 광고주가 실제 행동을 한 뒤, 서버에서 그 전환을 확인하는 과정`}),`이 하나의 작업으로 이어져야 했습니다. 이후 첫 테스트를 시작하지 못한다는 고객 피드백이 돌아와 1월에는 진행 조건을 다시 바꿨습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`연동 유형이 다르면 입력과 성공의 근거도 달랐다`}),`
`,(0,f.jsx)(t.p,{children:`문서로 설명하던 절차를 광고 운영 대시보드 안에서 수행할 수 있도록 만들었습니다. WEB·SDK·MMP는 같은 광고 연동처럼 보여도 필요한 값과 조회할 기록의 의미가 달랐습니다. MMP는 앱 전환을 전달하는 모바일 측정 파트너입니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`유형`}),(0,f.jsx)(t.th,{children:`입력·확인에서 다른 점`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`WEB`}),(0,f.jsx)(t.td,{children:`URL과 추적 식별자`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`SDK`}),(0,f.jsx)(t.td,{children:`광고 식별자`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`MMP`}),(0,f.jsx)(t.td,{children:`tracker·플랫폼·이벤트 이름과 발생 시각`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`저는 Vue 단계 화면, ViewModel과 상태, API 소비, Node.js BFF의 조회·권한·요청 조건 전달을 맡았습니다. 실제 전환의 수집과 판정은 서버가 담당했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기획이 모두 확정될 때까지 기다리기보다 API를 먼저 논의해 실제 응답과 필요한 조건을 확인하자고 제안했습니다. 화면의 순서만 정하고 나중에 응답을 붙이면, 진행할 수 있는 조건과 성공을 확인하는 조건이 달라질 수 있기 때문이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`단계 완료와 연동 성공을 같은 값으로 만들지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`도구의 흐름은 연동 대상 조회, 유형별 입력, 테스트 링크 생성, 광고주의 행동, 전환 기록 재조회로 나뉘었습니다. 입력 완료와 요청 중 상태, 화면 단계, 서버의 전환 판정을 따로 읽었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트 링크에는 QR과 복사, 유형별 안내를 연결했습니다. 링크 생성은 사용자가 테스트를 시작할 재료가 준비됐다는 뜻이지 실제 전환 성공은 아니었습니다. 결과 조회를 끝냈더라도 전환이 없으면 아직 성공으로 보여줄 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`링크 생성과 전환 성공을 안내 문구로만 구분해서는 화면이 잘못된 성공 상태를 보여줄 수 있었습니다. 화면의 상태와 서버 응답도 같은 기준으로 읽어야 했습니다. ViewModel에는 유형별 필드와 값 변환을 모으고, store가 서버 조회에 전달할 입력도 함께 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`입력한 값이 서버 판정까지 도착하는지 봤다`}),`
`,(0,f.jsx)(t.p,{children:`BFF에는 기존 인증과 프록시를 재사용해 조회 경로를 연결했습니다. 전환 조회에서는 화면 입력의 query가 상위 요청까지 전달돼야 했습니다. 화면이 값을 받고 API를 호출했다는 사실만으로 충분하지 않았고, 빠진 query 전달을 수정했습니다. 기존 관리 경로의 구·신 권한 이름 호환도 보완했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`QA 뒤에는 광고 식별자를 SDK에서만 입력하게 하고, MMP가 아니면 이벤트 이름을 비웠습니다. 해당 유형에서 보이지 않는 값이 이전 입력으로 남아 서버 조회에 영향을 주면 안 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`모델의 표시 조건·기본값·변환과 store의 요청 인자도 테스트에 남겼습니다. 어떤 필드가 화면에 보이는지와 그 값이 특정 전환을 찾는 요청에 실제로 쓰이는지를 함께 검증했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`실제 사용 뒤 첫 테스트의 모순이 드러났다`}),`
`,(0,f.jsx)(t.p,{children:`12월에는 도구가 실제 고객의 전환 확인과 예정 집행 판단에 사용됐습니다. 그러나 출시 뒤 다른 피드백에서는 올바른 연동 대상도 과거 포스트백이 없으면 첫 단계에서 막혔습니다. 아직 첫 이벤트를 만들려고 들어왔는데, 이전 이벤트가 있어야 시작할 수 있었던 셈입니다.`}),`
`,(0,f.jsx)(t.p,{children:`고객은 이 안내를 식별자 오입력으로 받아들였습니다. 제품 담당자가 피드백을 전달했고 팀은 기록이 없어도 다음 테스트로 진행하도록 규칙을 바꿨습니다. 저는 그 조건을 두 화면에 반영했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이벤트 소스 조회에서 빈 목록을 이유로 반환하던 분기를 없앴습니다. 동시에 다음 화면의 로그 조회 영역도 목록이 없다는 이유로 숨기지 않도록 바꿨습니다. 첫 화면만 통과시켜도 다음 화면의 재조회 버튼이 사라져 있다면 실제 테스트는 끝나지 않기 때문입니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`과거 이벤트 없음
  → 첫 테스트 링크 생성은 허용
  → 광고주가 실제 행동
  → 서버의 해당 전환을 재조회
  → 조회된 판정으로 성공 여부 표시
`})}),`
`,(0,f.jsx)(t.p,{children:`응답 형태와 연동 유형 확인은 유지했습니다. 시작 조건을 완화했다고 최종 성공의 기준까지 바꾼 것은 아니었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`도구가 끝내야 하는 일`}),`
`,(0,f.jsx)(t.p,{children:`초기 도구로 광고주가 실제 테스트를 하고 서버 기록을 확인할 수 있게 됐고, 그 결과가 집행 판단에 사용됐습니다. 1월에는 과거 기록이 없는 대상도 첫 테스트를 시작하고 결과를 재조회할 수 있도록 바꿨습니다. 12월의 고객 사용과 이후 진행 조건 수정은 각각 이 과정의 다른 부분을 확인해 주었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이전 기록이 없는 고객도 첫 이벤트를 만들 수 있어야 하지만, 테스트의 성공을 표시하려면 이번 전환을 확인해야 했습니다. 이 경험 이후에는 온보딩 도구의 단계뿐 아니라 사용자가 처음 들어왔을 때 무엇을 알고 있는지, 마지막에는 무엇을 확인해야 작업을 끝낼 수 있는지도 함께 봐야 한다고 생각합니다.`})]})}function S(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(x,{...e})}):x(e)}var C=e({default:()=>E,frontmatter:()=>w}),w={title:`프론트엔드 밖의 팀 병목을 AI와 함께 해결하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`업무 확장`,role:`서버 변경 범위 정의·AI 공동 구현·부수효과 검증·DB 반영 순서 조율`,period:`2026.08`,summary:`낯선 Python 서버에서 문의 분류와 지원 검증을 개발했다. AI의 조사·구현을 도움받으며 부수효과의 경계와 저장 호환, DBA 반영 뒤의 병합 순서를 연결한 경험.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`AI 협업`,`서버 계약`,`제품 전달`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function T(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`문의 기능의 서버 코드와 검토 자료를 준비했지만 바로 병합하지는 않았습니다. 새 분류를 사용하는 코드만 반영하면 DB가 그 값을 저장하지 못할 수 있었기 때문입니다. DB를 맡은 담당자의 반영 완료 보고를 받은 뒤 다음 변경을 진행했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 일은 새 보너스 화면의 문의 기능에서 시작했습니다. 앱별 문의 분류 조회, 생성 요청이 지원 대상인지 확인하는 검증, 새 분류를 저장할 DB 값이 모두 필요했습니다. Python 서버가 낯선 프론트엔드 개발자였지만, 팀에 남은 병목을 AI와 함께 맡아 기존 코드를 조사하고 구현했습니다. AI가 제안한 코드가 필요한 조건을 지키는지 검토하고, DB 변경과 코드 병합을 누가 어떤 순서로 진행할지도 함께 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`화면에 보이는 선택지와 서버가 허용할 입력`}),`
`,(0,f.jsx)(t.p,{children:`분류 조회와 문의 생성은 한 기능의 두 경로였습니다. 조회에서는 사용자가 고를 수 있는 항목을 제공합니다. 생성에서는 입력을 받아 DB 저장과 외부 문의 처리로 넘어갑니다. 조회에서 항목을 숨겨도 직접 생성 요청이 들어올 수 있으므로 화면의 제한으로 서버 검증을 대신할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`AI로 초안을 만들고 앱별 분류 조회, 기존 생성 경로를 조사하고 지원 앱과 미지원 앱을 나누었습니다. 제품의 적용 범위가 좁혀지는 후속 수정도 이어졌습니다. 구현할 항목 목록만 정하는 것보다, 지원 범위의 변경이 조회와 생성 양쪽에서 같은 의미를 갖는지를 봐야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`프론트엔드에서 다루던 입력과 행동의 관계를 서버에서도 확인했습니다. 화면에서 선택지를 제공하더라도 실제 요청을 실행하는 시점에 그 선택이 허용되는지 다시 검사해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`오류를 반환했어도 너무 늦을 수 있다`}),`
`,(0,f.jsx)(t.p,{children:`생성 요청에는 저장과 외부 문의 생성, 자동 처리 같은 부수효과가 있었습니다. 미지원 요청에 오류 응답을 추가해도 그 전에 문의가 저장됐다면 이미 처리할 일이 생깁니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 수정안을 검토할 때는 예외의 종류뿐 아니라 검증의 위치를 봤습니다. 잘못된 입력이 실행 단계에 들어가기 전에 멈춰야 했습니다. 설명용 흐름은 다음과 같습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`입력과 앱의 지원 범위 확인
  ├─ 미지원 → 거절, 저장·외부 처리 시작하지 않음
  └─ 지원 → 문의 저장 → 외부 처리 연결
`})}),`
`,(0,f.jsx)(t.p,{children:`테스트에도 미지원 요청에서는 DB에 문의가 남지 않고 외부 문의 생성과 자동 처리가 호출되지 않는 조건을 넣었습니다. 지원 요청은 저장된 앱과 분류, 외부 생성으로 이어지는 결과를 다뤘습니다.`}),`
`,(0,f.jsx)(t.p,{children:`AI의 수정안을 검토하려면 무엇을 막을지 먼저 정해야 했습니다. 제품이 허용하는 행동과 잘못된 요청에서 발생하면 안 되는 결과를 설명한 뒤, 코드와 테스트가 그 조건을 지키는지 읽었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 목록처럼 보여도 저장 순서는 다른 문제였다`}),`
`,(0,f.jsx)(t.p,{children:`새 문의 분류에는 DB의 ENUM 변경이 필요했습니다. 화면에서는 항목을 보기 좋은 위치에 놓고 싶지만, 기존 DB 값의 순서를 같은 이유로 움직일 수는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`DBA가 기존 값의 순서를 유지해야 한다는 의견을 줬을 때, 화면에 제공하는 Python 정의의 순서도 같아야 하는지 확인했습니다. 저장 순서와 화면 정렬은 따로 정할 수 있다는 데 의견을 맞춘 뒤, 새 값은 DB의 마지막에 추가하고 화면 순서는 Python 정의에서 다뤘습니다. AI와 준비한 DDL도 이 조건에 맞춰 검토 자료로 전달했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`여기서 AI와 준비한 것은 코드와 검토 자료였습니다. 공유 DB의 현행 스키마와 실행 방식은 DBA가 확인하고 운영·검증 환경에 반영했습니다. 같은 기능의 작업이어도 누가 실제 상태를 바꿀 수 있는지는 달랐습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`코드가 준비된 시점에 바로 병합하지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`서버가 새 분류를 쓰는데 DB가 아직 저장할 수 없다면 기능의 한쪽만 반영됩니다. AI와 검토하는 과정에서는 코드 병합과 배포를 별도 단계로 보는 설명도 나왔지만, 우리 팀에서는 다른 동료가 메인 브랜치를 수시로 배포하고 있었습니다. 제 변경을 병합한 뒤 누군가 배포할 수 있다는 운영 맥락까지 판단해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 DB 반영 완료 뒤 서버 변경을 병합하기로 정했습니다. 담당자의 완료 보고를 받은 뒤 그 순서로 이어 갔습니다. AI가 일반적으로 설명한 절차를 그대로 따르는 대신, 우리 팀에서 실제로 다음 상태를 바꿀 수 있는 사람과 시점을 확인한 선택이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`코드와 테스트를 준비하고 DBA의 DB 반영 완료 보고를 받은 뒤 서버 변경을 병합했습니다. 익숙하지 않은 언어로 코드를 만드는 것뿐 아니라, 그 코드가 적용되기 전에 필요한 DB 변경까지 확인한 작업이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`업무 경계를 넓힐 때 남는 판단`}),`
`,(0,f.jsx)(t.p,{children:`마지막 병합의 조건은 코드가 준비됐다는 것 하나가 아니었습니다. DBA의 완료 보고를 받아야 저장할 값이 준비됐음을 알 수 있었습니다. 이 순서를 되짚으면, 낯선 언어의 수정안을 이해한다는 말도 문법과 로직을 읽는 데서 끝나지 않습니다. 그 코드가 언제 적용되어도 되는지 설명하는 일까지 연결돼 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`프론트엔드 밖의 일을 맡으면서 모든 구현을 혼자 통제할 필요는 없었습니다. 다만 지원하지 않는 요청이 남기면 안 되는 흔적, 기존 저장 값과의 호환성, 다음 변경 전에 기다려야 할 완료 보고는 제가 설명할 수 있어야 했습니다. AI가 낯선 서버 코드에 진입하는 부담을 낮춰 줬고, 저는 이 세 조건을 확인하며 변경을 팀에 전달했습니다.`})]})}function E(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(T,{...e})}):T(e)}var ne=e({default:()=>k,frontmatter:()=>D}),D={title:`AI 광고 분석을 의사결정에 연결하기`,status:`Documented`,statusLabel:`제품 분석`,category:`product`,series:`work-evidence-2026`,role:`PM 질문의 데이터 조사·AI 분석 재검토·이벤트 해석 정정·대안과 리포트 전달`,period:`2026.09`,summary:`광고 응답과 노출이 다른 이유를 AI와 분석했다. 공급사 매핑 오류를 동료와 바로잡고 렌더링·노출의 의미를 다시 확인해, 기술 변경과 운영 접근을 판단할 자료로 전달한 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`AI 활용`,`제품 분석`,`광고 계측`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function O(e){let t={a:`a`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`서버에서는 광고를 내려줬는데 노출은 그만큼 잡히지 않았습니다. PM은 특정 공급사에 문제가 있는지, 프론트엔드의 대기시간 제한 때문에 광고를 건너뛰는지 물었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`두 답은 다음 행동을 다르게 만듭니다. 실행 코드가 광고를 너무 빨리 포기한다면 기다림을 바꿔야 합니다. 사용자가 광고를 실행하기 전에 떠났다면 같은 수정이 효과적이지 않을 수 있습니다. 공급사가 세는 시점과 우리가 세는 시점이 다르면, 먼저 비교 자체를 다시 봐야 합니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 팀이 지금 어떤 변경을 해야 할지 판단할 수 있도록 이 질문을 AI와 조사했습니다. FE 코드 밖의 데이터도 읽어야 했습니다. 첫 분석에는 그럴듯한 숫자가 있었지만, 공급사 구분과 이벤트의 의미를 두 차례 다시 확인해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`공급사부터 잘못 묶여 있었다`}),`
`,(0,f.jsx)(t.p,{children:`첫 답변을 본 PM이 공급사 구분이 잘못됐다고 짚었습니다. AI는 데이터베이스의 영문명을 놓치고 다른 광고 SDK를 같은 공급사로 연결하고 있었습니다. 저는 그 지적을 받아 매핑을 바로잡고 분석을 다시 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`광고 네트워크의 식별자와 실제 SDK 실행 경로는 이름이 비슷하다고 같은 것이 아닙니다. 한 SDK에만 들어간 timeout을 다른 공급사에도 적용된 기능으로 읽으면, 그 뒤의 대기시간과 노출 해석도 틀어집니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이때는 모델에게 같은 질문을 다시 하는 것보다 `,(0,f.jsx)(t.strong,{children:`제품의 공급사 구분과 코드의 적용 범위를 먼저 맞추는 일`}),`이 필요했습니다. 분석에 사용할 대상이 정해지지 않았는데 정교한 비율부터 계산한 셈이었습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`제가 ‘노출’이라고 부른 이벤트도 다시 읽어야 했다`}),`
`,(0,f.jsx)(t.p,{children:`매핑을 수정한 뒤에도 설명은 한 번 더 바뀌었습니다. 저는 처음에 광고가 렌더링될 때 남는 이벤트를 노출 성공처럼 설명했습니다. 다시 확인하고 그것은 실제 노출 집계가 아니라 렌더링 단계의 사건이라고 정정했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`광고의 다음 단계들은 비슷해 보여도 서로 다릅니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`기록`}),(0,f.jsx)(t.th,{children:`답하는 질문`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`서버의 할당 기록`}),(0,f.jsx)(t.td,{children:`광고 후보가 내려왔는가?`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`FE의 렌더링 이벤트`}),(0,f.jsx)(t.td,{children:`광고를 그리는 단계에 도달했는가?`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`노출 집계`}),(0,f.jsx)(t.td,{children:`노출 기준에 따라 해당 사건이 기록됐는가?`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`완료·리워드 결과`}),(0,f.jsx)(t.td,{children:`다음 참여나 수령을 진행할 조건을 충족했는가?`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`앞 단계가 거의 모두 성공했다고 뒤 단계도 같은 비율이어야 하는 것은 아닙니다. 사용자가 CTA를 누르지 않고 떠날 수도 있고, 광고를 미리 준비하는 경로가 있을 수도 있습니다. 준비와 표시 사이에는 제품이 정한 행동과 공급사의 관측이 함께 들어갑니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이름을 잘못 설명하면 PM이 수정할 위치도 달라질 수 있었습니다. 그래서 수치를 비교하기 전에 그 숫자가 `,(0,f.jsx)(t.strong,{children:`어떤 장면을 센 것인지`}),`부터 다시 설명했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`같은 날짜의 비율도 같은 요청의 전환율은 아니다`}),`
`,(0,f.jsx)(t.p,{children:`공급사별 할당과 노출을 같은 KST 날짜로 집계해 비교했습니다. 다만 그 두 count가 요청 하나하나를 연결한 값은 아니었습니다. 일별 총량의 비율은 어디를 더 조사할지 고르는 자료가 될 수 있지만, 개별 요청이 왜 실패했는지까지 설명하지는 않습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이를 바로 실패율이라고 읽지 않고, FE의 실제 실행 경로와 대기 로그, 다른 공급사에서 보이는 조건을 함께 확인했습니다. timeout이 적용된 공급사와 그렇지 않은 공급사도 나눴습니다. 같은 대기 제한이 없는데 비슷한 차이가 보인다면 그 제한 하나로 모든 현상을 설명할 수 없습니다.`}),`
`,(0,f.jsx)(t.p,{children:`AI는 이런 집계의 초안을 빨리 만드는 데 도움이 됐습니다. 대신 이벤트 이름, 사용자 키, 집계 단위, 코드가 실제로 실행되는 범위는 제가 제품 맥락에 맞춰 다시 읽어야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`하나의 개선안으로 서둘러 끝내지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`조사 뒤에는 기술 대안과 운영 접근을 나눠 전달했습니다. 로딩을 줄이는 변경, 준비를 앞당기는 프리로딩, 네이티브 광고 형식의 물량을 지원하는 방법은 같은 수정이 아니었습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`접근`}),(0,f.jsx)(t.th,{children:`먼저 확인할 비용과 책임`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`로딩 경로 개선`}),(0,f.jsx)(t.td,{children:`실제 기다리는 구간과 현재 실행 코드`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`광고 준비를 앞당김`}),(0,f.jsx)(t.td,{children:`준비·표시 시점, SDK의 관측과 세션 수명`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`네이티브 광고 물량 지원`}),(0,f.jsx)(t.td,{children:`지원할 광고 형식·공급 가능한 물량·매체 조건`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`공급사 운영 접근`}),(0,f.jsx)(t.td,{children:`공급사 조건과 사업 담당자의 확인`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`PM은 단기적으로 공급사와 운영에서 풀 부분을 먼저 보겠다고 했습니다. 제가 모든 해결책을 구현한 것은 아니지만, 코드 변경의 후보와 다른 담당자가 확인할 문제를 한 목록으로 섞지 않도록 설명할 수 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 과정은 `,(0,f.jsx)(t.a,{href:`/cases/ad-preload-lifecycle`,children:`광고 프리로딩의 준비·표시·집계`}),`에서 다룬 실행 경계와도 이어집니다. 최적화할 위치를 고르려면, 먼저 무엇이 준비되고 무엇이 실제로 표시됐는지를 같은 의미로 읽어야 합니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`숫자가 아니라 다음 질문을 전달했다`}),`
`,(0,f.jsx)(t.p,{children:`PM은 분석을 직접 더 확인할 경로를 요청했습니다. 저는 리포트를 공유했고, 데이터를 추출해 준 것만으로도 큰 도움이 됐다는 답을 받았습니다. 분석을 한 번 보여주는 데서 끝나지 않고 동료가 다음 질문을 이어 갈 자료가 된 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음 답변의 오류를 바로잡는 데는 PM의 도메인 지식과 제 코드·이벤트 설명이 모두 필요했습니다. AI가 분석 범위를 넓혀 줬지만, 그 결과를 제품의 판단 자료로 바꾼 것은 그 교차 확인이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 경험을 다시 보면 AI가 찾아낸 숫자만으로는 무엇을 바꿀지 정할 수 없었습니다. 비슷한 이름의 공급사를 구분하고, 렌더링을 노출로 읽었던 제 설명을 고친 뒤에야 기술 변경과 운영 확인을 나눠 제안할 수 있었습니다. 분석 결과를 전달할 때도 어떤 장면을 센 숫자인지부터 설명하려고 합니다.`})]})}function k(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(O,{...e})}):O(e)}var A=e({default:()=>N,frontmatter:()=>j}),j={title:`디자인 시안을 사용자가 참여하는 콘텐츠 기능으로 만들기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`디자인 원형의 제품 통합·런타임 응답 검증·복귀/계측·출시 협업`,period:`2026.09`,summary:`기사 카드 시안을 사용자가 열고 돌아올 수 있는 상용 기능으로 연결했다. 손상된 데이터와 새 광고 할당, 복귀 중 다른 카드를 여는 순서를 다루며 기존 추천의 동작도 지킨 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`제품 통합`,`런타임 검증`,`콘텐츠 계측`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`기사 섹션을 QA할 때 재할당 뒤의 노출이 빠지는 조건을 확인했습니다. 화면에는 같은 기사가 남아 있지만 계측할 광고는 새로운 회차였습니다. 카드가 그대로라는 사실만으로 이전 노출 타이머를 계속 써도 되는 것은 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`디자이너가 만든 카드 원형에는 이미지와 제목, 넘기기와 누르기 반응이 있었습니다. 제품에 연결하려면 화면에 표시할 콘텐츠와 사용자가 참여할 광고, 기록할 노출을 각각 구분해야 했습니다. 시안에 API를 붙이더라도 이들을 한 객체로 읽으면 같은 기사가 새 광고로 할당됐을 때 참여와 계측이 어긋났습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`PlayHub의 기사 섹션은 리워드 안내보다 콘텐츠의 매력을 앞세워 참여 반응을 확인하려는 시도였습니다. 실제 리워드가 없는 상품으로 바꾼 것은 아닙니다. 제품 가설과 시각 표현은 동료들의 작업이었고, 저는 `,(0,f.jsx)(t.strong,{children:`그 원형에 실제 데이터를 넣고 참여·복귀·계측이 이어지도록 연결하는 FE 통합`}),`을 맡았습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`화면의 모델을 API의 객체와 분리했다`}),`
`,(0,f.jsx)(t.p,{children:`원형이 사용하던 미션·광고 모델을 카드에 그대로 넘기면 응답 구조와 표현, 참여 로직이 함께 바뀝니다. 기사 카드가 필요한 식별자·제목·이미지·클릭·노출 정보를 독립 표시 모델로 만들고 준비 함수를 두었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`디자인 shell과 누를 때의 표현은 유지했습니다. 입력과 callback을 콘텐츠 기준으로 바꾸고, 중복 제거와 표시 상한, 진단용 metadata는 준비 단계로 옮겼습니다. 이미지를 표현하는 변경이 참여 가능한 데이터를 판단하는 코드를 함께 건드릴 이유를 줄였습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`준비 함수의 입력은 런타임에서 검증하지 않은 `,(0,f.jsx)(t.code,{children:`unknown`}),`이었습니다. TypeScript 응답 타입은 개발 중의 약속이지, 실제 서버 객체가 그 구조라는 증거는 아니었기 때문입니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`모든 실패를 빈 목록으로 바꾸지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`전체 응답 구조가 잘못된 것과 정상 목록 안의 한 항목이 손상된 것은 다른 상황입니다. 둘을 모두 빈 배열로 만들면 조회 실패가 정상적인 콘텐츠 소진처럼 보입니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력의 문제`}),(0,f.jsx)(t.th,{children:`사용할 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`바깥 응답 구조가 잘못됨`}),(0,f.jsx)(t.td,{children:`조회 오류`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`정상 목록이 비어 있음`}),(0,f.jsx)(t.td,{children:`정상적인 콘텐츠 없음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`항목의 참여 필수값이 잘못됨`}),(0,f.jsx)(t.td,{children:`해당 항목 제외, 이유 기록`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`참여 데이터는 유효하고 이미지만 실패`}),(0,f.jsx)(t.td,{children:`대체 이미지 표현`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`식별자·제목·클릭·계측 URL처럼 다음 행동에 필요한 값은 필수로 확인했습니다. 클릭할 수 없는 카드를 예쁜 이미지가 있다는 이유로 보여주면, 사용자가 눌렀을 때 작업이 끊깁니다. 반대로 이미지 실패 때문에 유효한 참여 전체를 버릴 필요는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`공개 URL은 HTTPS와 인증정보가 없는 형식을 확인하고, 개발용 로컬 HTTP 허용은 명시 옵션으로 나눴습니다. 입력 형식의 검사와 모든 목적지의 신뢰성을 보증하는 것은 다른 범위였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`새로운 섹션은 기존 추천을 덮으면 안 됐다`}),`
`,(0,f.jsx)(t.p,{children:`처음의 클라이언트 분할 경로에서 서버의 섹션 계약을 쓰는 방향으로 바꿨습니다. 기사 콘텐츠는 전용 섹션으로 조회하고, 기존 추천 요청에는 그 파라미터를 넣지 않았습니다. 섹션을 지정하지 않은 기존 응답에 새 콘텐츠가 섞이지 않는지도 서버와 확인해 계약을 맞췄습니다.`}),`
`,(0,f.jsx)(t.p,{children:`복귀 뒤 재조회도 같은 구분을 따라야 했습니다. 호출 때마다 옵션을 기억하게 하기보다 hook을 만들 때 대상 query key를 고정했습니다. 기사에서 돌아오면 기사 query를, 추천에서 돌아오면 추천 query를 갱신했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면을 두 구역으로 나눠도 갱신 함수가 잘못 연결되면 다른 구역의 완료를 읽거나 응답을 덮을 수 있었습니다. hook을 만들 때 query key를 고정해 각 구역이 자기 데이터를 갱신하도록 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 기사라고 같은 노출은 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`화면에는 같은 기사가 계속 남아 있는데 광고 할당이 바뀔 수 있었습니다. 콘텐츠 ID만으로 노출을 판단하면 새 할당을 놓치고, 배열 객체가 바뀔 때마다 새 노출로 읽으면 불필요하게 다시 기록합니다.`}),`
`,(0,f.jsx)(t.p,{children:`독자에게는 같은 기사여도 계측에서는 새로운 회차였습니다. 따라서 화면을 안정적으로 유지하는 key를 노출 판단에도 그대로 사용할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`표시에 사용할 콘텐츠 식별자와 계측의 할당·항목 식별자를 나누었습니다. 실제 할당 과정의 요청 식별자를 응답에 연결하는 작은 서버 변경에도 참여했습니다. 표시용 새 ID를 만들어 주는 것이 아니라, 계측이 읽어야 할 회차를 전달하는 변경이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`대상의 계측 식별자가 바뀌면 이전 노출 타이머를 취소하고 새 회차로 측정했습니다. React가 같은 카드를 유지하는 기준과 광고 노출이 새로 시작되는 기준은 같지 않았습니다. QA에서 재할당 시 노출이 빠지는 조건을 확인하고 수정 동작을 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`복귀를 기다리는 동안 다른 카드를 열 수 있었다`}),`
`,(0,f.jsx)(t.p,{children:`사용자가 외부 페이지에서 돌아와 재조회하는 동안 다른 콘텐츠를 열면 복귀 감시 listener가 교체될 수 있습니다. 이전 감시의 잠금이 남거나 늦은 완료가 새 시도를 건드리면 다음 행동이 막힙니다.`}),`
`,(0,f.jsx)(t.p,{children:`교체 때는 취소 callback으로 이전 잠금을 정리하고, 종료 여부와 generation으로 늦은 완료의 적용을 제한했습니다. 정상 복귀만 따라가면 보이지 않는 순서였습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`A 열기 → A 복귀·재조회 시작
  → B 열기, 감시 교체
  → A의 늦은 완료는 B 상태를 바꾸지 않음
`})}),`
`,(0,f.jsx)(t.p,{children:`완료 응답이 와도 이미 다른 카드를 열었다면 이전 작업의 결과를 적용하지 않아야 했습니다. 표현 단계의 이미지 fallback과 구형 모바일 보완도 이어졌습니다. 디자인의 색상 알고리즘을 처음 만든 작업은 동료의 기여이고, 제가 맡은 부분은 이를 실제 데이터와 실행 흐름에 통합하는 일이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`시안에서 상용 콘텐츠까지`}),`
`,(0,f.jsx)(t.p,{children:`9월 초 시각 원형을 받은 뒤 표현과 참여 QA를 진행했습니다. FE 배포 뒤 동료들의 공급·유닛 설정과 제한된 참여·적립 확인을 거쳐, 9월 9일 상용으로 전환됐습니다. 출시 다음 날에는 후속 회귀 테스트도 보강했습니다. 구현 뒤에 확인된 조건도 다시 테스트에 남기며 통합의 경계를 이어서 다뤘습니다.`}),`
`,(0,f.jsx)(t.p,{children:`내부 참여에서는 새 섹션이 눈에 띈다는 반응과 제목·소재 잘림 의견이 있었습니다. 초기 관측에는 QA가 섞여 있어 장기 클릭률이나 매출 변화로 정리하지 않았습니다. 확인된 제품의 변화는 사용자가 새 기사 카드를 열고 돌아올 수 있고, 기존 추천은 자기 조회를 유지하며, 데이터 손상·재할당·감시 교체가 각각 다른 결과로 다뤄지는 것이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 기사 카드라도 광고가 다시 할당되면 새 노출을 측정해야 했고, 응답의 전체 구조가 정상이더라도 한 항목은 참여에 필요한 값이 빠져 있을 수 있었습니다. 시안의 표현을 유지하면서 이런 조건을 처리해야 사용자가 카드를 열고 돌아오는 흐름이 이어졌습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다음에 비슷한 원형을 받는다면 디자인을 옮길 방법과 함께, 어떤 입력이 있어야 사용자가 누를 수 있는지, 그때 무엇을 하나의 사건으로 기록할지부터 확인하고 싶습니다.`})]})}function N(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(M,{...e})}):M(e)}var P=e({default:()=>ie,frontmatter:()=>re}),re={title:`정리본으로 연결한 이전 글: automation-poc-design`,summary:`이 글의 유용한 내용은 자동화와 운영 책임에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/essays/automation-doesnt-reduce-work`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function F(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`자동화와 운영 책임 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function ie(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(F,{...e})}):F(e)}var ae=e({default:()=>se,frontmatter:()=>oe}),oe={title:`아직 모르는 설정이 잘못된 변경으로 이어지지 않도록`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`문제 제안·디자인 협의·도메인 컴포넌트 구현`,period:`2022`,summary:`같은 토글인데 페이지가 열리자마자 누르면 확인 없이 바뀔 수 있었다. '규칙이 없음'과 '아직 읽지 못함'을 구분해야 했던 이유.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`비동기 상태`,`확인 흐름`,`컴포넌트 책임`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function I(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 소재 목록에는 소재를 켜고 끄는 토글이 있었습니다. 단순한 On/Off처럼 보이지만, 그 소재의 실행 상태에 자동화 규칙이 연결돼 있으면 수동 변경 전에 확인 모달을 거쳐야 했습니다. 같은 버튼이어도 연결된 규칙에 따라 필요한 절차가 달랐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`문제는 페이지가 열릴 때 규칙 정보를 서버에서 따로 읽는다는 점이었습니다. 토글은 화면에 보이는데, 그 토글에 규칙이 있는지는 아직 응답을 기다리고 있었습니다. 이 잠깐의 상태는 '규칙이 없다'가 아니라 '아직 모른다'였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`조회가 끝나기 전에 빠르게 누르면 아직 채워지지 않은 정보로 분기해 확인 없이 변경할 수 있었습니다. 조금 기다렸다가 같은 버튼을 누르면 확인 모달이 열립니다. 사용자는 같은 화면에서 같은 행동을 했는데, 누른 시점과 응답 속도에 따라 다른 절차를 밟는 셈이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`규칙 정보를 읽기 전에도 토글을 사용할 수 있게 둘지 정해야 했습니다. 로딩 표시를 추가하는 것만으로는 확인 없이 실행되는 변경을 막을 수 없어서, 조회 중 허용할 동작도 함께 정했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`클릭이 조회보다 빠를 때`}),`
`,(0,f.jsx)(t.p,{children:`화면이 열리면 규칙 정보를 비동기로 읽습니다. 조회가 끝나기 전에 클릭하면 아직 채워지지 않은 존재 여부로 분기하고, 이를 규칙 없음으로 읽으면 곧바로 상태를 변경합니다. 뒤늦게 규칙이 있다는 응답을 받아도 이미 실행한 변경에 확인 모달을 적용할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 조회보다 클릭이 먼저 도착하는 순서를 설명하고 조회 중 표시와 조작 제한을 제안했습니다. 그만큼 사용자는 정보를 기다리는 동안 토글을 바로 쓸 수 없습니다. 디자이너와는 그 제약을 두되 정상 응답이 빠를 때 스피너가 주는 부담과 아이콘 정렬도 함께 논의했습니다. 지연을 넣은 재현은 실제 지연 시간을 측정하려는 것이 아니라, 확인이 생략되는 실행 순서를 보여주기 위한 것이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`비활성 표시와 실행 가드를 함께 둔 이유`}),`
`,(0,f.jsx)(t.p,{children:`조회 중에는 토글을 비활성화해 지금 조작할 수 없음을 보여줬습니다. 입력 함수에서도 조회 중이거나 다른 변경을 처리 중이면 돌아가도록 했습니다. 표시가 바뀌는 것에만 의존하지 않고, 실제 상태를 바꾸는 함수가 실행 가능 여부를 확인하게 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`조회가 끝난 뒤에는 규칙이 없으면 바로 변경하고, 규칙이 있으면 확인 모달을 열도록 나눴습니다. 모달에서 취소하면 변경 함수를 실행하지 않고, 확인했을 때만 실행했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`설명의 핵심만 줄이면 이런 흐름입니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`조회 중 또는 변경 처리 중 → 실행하지 않음
조회 완료, 연결된 규칙 없음 → 상태 변경
조회 완료, 연결된 규칙 있음 → 확인 모달
모달 취소 → 기존 상태 유지
모달 확인 → 상태 변경
`})}),`
`,(0,f.jsx)(t.p,{children:`조회는 loading, 변경은 processing으로 나눴습니다. 정보를 읽는 동안에도, 실제 상태 변경을 처리하는 동안에도 추가 입력을 막아야 했기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`일반 토글에 어디까지 책임을 둘까`}),`
`,(0,f.jsx)(t.p,{children:`리뷰에서는 이 확인 절차를 일반 토글의 사용처마다 직접 붙이면 빠뜨릴 수 있다는 문제가 나왔습니다. 반대로 모든 토글 사용을 강하게 통제하는 구조로 만들면 일반 컴포넌트의 책임이 너무 넓어질 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 자동화 규칙의 존재를 조회하고, 필요한 확인을 거쳐 변경하는 동작을 도메인 컴포넌트에 묶는 쪽으로 설명했습니다. 단순한 On/Off UI는 일반 토글이 맡고, 자동화에 따른 행동은 그 도메인을 아는 컴포넌트가 맡도록 구분한 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 결과 자동화 상태를 바꾸는 사용처에서는 조회·확인 절차를 다시 조립하는 대신 그 동작을 가진 컴포넌트를 선택할 수 있었습니다. 일반 토글 전체에 도메인 지식을 넣지는 않지만, 사용처가 자동화-aware 동작을 골라야 한다는 비용은 남습니다. 리뷰에서 논의한 강제 수준도 바로 그 선택의 책임에 관한 문제였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 중 클릭은 더 이상 바로 변경으로 이어지지 않는다`}),`
`,(0,f.jsx)(t.p,{children:`규칙 정보를 기다리는 동안에는 사용자의 입력이 곧바로 변경으로 이어지지 않게 됐습니다. 조회가 끝나면 규칙이 없는 경우는 직접 변경하고, 있는 경우는 확인을 거칩니다. 빨리 눌렀다는 이유로 필요한 확인을 건너뛰던 경로를 막은 것입니다. 기다리는 비용은 생기지만, 조회가 진행 중인 동안에는 아직 모르는 정보로 중요한 행동을 결정하지 않게 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`디자이너와는 기다리는 동안의 조작 제한과 표시 부담을 맞췄고, 리뷰에서는 이 확인 절차를 어느 컴포넌트에 둘지 논의했습니다. 스피너를 어떻게 보여줄지 정하면서 버튼을 언제 실행할 수 있는지도 함께 정했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 다시 보면 조회 실패도 별도로 다뤄야 한다고 생각합니다. loading이 끝났더라도 정보를 읽지 못했다면 규칙이 없다고 판단할 수는 없습니다. 이번에는 조회 중 확인을 건너뛰던 클릭 경로를 막았습니다. 다음에 같은 흐름을 만든다면 실패 뒤 재조회와 그동안 허용할 행동까지 먼저 정하고 싶습니다.`})]})}function se(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(I,{...e})}):I(e)}var ce=e({default:()=>ue,frontmatter:()=>le}),le={title:`광고 실행을 바꾸지 않고 실패 지점을 관측하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공용 계층`,role:`웹 브릿지 관측 계층 구현·계약/예외 경계 처리`,period:`2026`,summary:`광고가 끝나지 않았다는 기록만으로는 어디서 막혔는지 알 수 없었다. 확인할 정보를 더하면서도 원래 광고 호출을 흔들지 않게 한 과정.`,date:`2026-09-22`,dateBasis:`context`,collection:`records`,tags:[`계약 보존`,`관측`,`구독자 예외`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function L(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고가 끝나지 않았다는 문의를 받으면 먼저 어느 단계에서 멈췄는지 알아야 했습니다. 호출을 준비하다가 막힌 것인지, 광고를 불러오지 못한 것인지, 이미 보여줬지만 완료 신호가 늦는 것인지에 따라 살펴볼 코드가 달랐습니다. 문의 내용만으로는 그 위치를 정하기 어려웠습니다.`}),`
`,(0,f.jsx)(t.p,{children:`웹과 네이티브 광고 기능을 연결하는 브릿지에서는 호출의 완료나 오류를 받을 수 있었습니다. 하지만 마지막 결과만 읽으면 그 앞의 어느 작업에서 멈췄는지가 충분히 드러나지 않았습니다. 시작·완료·실패가 어떤 호출에 속하는지 연결할 정보가 필요했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 정보를 받는 진단 코드를 붙일 때도 문제가 있었습니다. 이벤트를 읽는 코드가 오류를 내는 바람에 원래 광고 호출까지 실패한다면, 문제를 살피기 위해 추가한 기능이 새로운 문제를 만드는 셈입니다. 기존 호출자가 받는 완료·오류의 의미도 달라져서는 안 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 광고 호출의 실행 과정을 별도로 전달하되, 기존 호출자가 받던 결과는 유지하는 방식으로 구현했습니다. 진단 이벤트를 처리하는 코드가 실패해도 광고 호출이 그 오류 때문에 실패하지 않도록 처리했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`관측을 원래 반환값에 끼워 넣지 않기`}),`
`,(0,f.jsxs)(t.p,{children:[`기존 호출자는 브릿지의 `,(0,f.jsx)(t.code,{children:`Promise<void>`}),`가 완료되거나 원래 오류로 reject되는 계약을 사용하고 있었습니다. 여기에 새로운 관측 결과를 반환값으로 넣으면 소비자의 해석도 바뀝니다. 오류를 문자열이나 새 객체로 바꿔 전달하는 것 역시 기존 호출자에게는 다른 오류가 될 수 있었습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`별도의 구독 구조를 두면 기존 호출자는 새 반환값이나 오류 형식에 맞춰 코드를 바꿀 필요가 없었습니다. 원래 Promise는 이전 방식으로 끝나고, 이벤트 구독자만 작업의 시작·완료·실패 이벤트를 받도록 했습니다. 진단이 필요한 쪽에서 구독하면 되므로 모든 호출자에게 같은 변경을 요구하지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`특히 실패에서는 기존 호출이 원래 오류 객체를 그대로 전달하도록 유지했습니다. 관측에 사용할 오류 정보의 정규화와 실제 API 오류의 전달을 같은 처리로 묶지 않은 것입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`이벤트에는 작업의 순서와 단계가 있어야 했다`}),`
`,(0,f.jsx)(t.p,{children:`load와 show 작업에 각각 operation ID를 부여하고 단계와 상태, 걸린 시간과 결과를 이벤트로 남겼습니다. 같은 광고 관련 이벤트라도 어느 작업의 시작과 종료인지 이어서 읽을 수 있어야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`작업이 시작된 뒤 구독하면 시작 이벤트 없이 종료 이벤트만 받을 수 있습니다. 그 결과를 구독 이후에 시작한 작업처럼 읽지 않도록, 구독 시점 이전에 시작한 operation은 해당 구독자에게 전달하지 않는 조건을 뒀습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 이벤트에서는 스크립트를 읽는 단계의 실패인지, load·show 호출의 거절인지, 어떤 operation의 결과인지 나눠 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`구독자가 실패하면 누가 영향을 받을까`}),`
`,(0,f.jsx)(t.p,{children:`구독자 역시 코드를 실행합니다. 이벤트를 처리하다가 동기 예외를 던질 수 있고, 비동기 작업이 rejection을 만들 수도 있었습니다. 이 실패가 원래 브릿지 호출에 전파되면 관측 기능을 켠 것만으로 광고 흐름이 달라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`이벤트를 전달할 때 구독자의 동기 예외를 잡고, 반환된 비동기 작업의 rejection도 별도로 처리했습니다. 한 구독자의 실패 때문에 다른 구독자의 통지나 원래 광고 호출이 중단되지 않게 하기 위해서였습니다. 이 처리가 모든 이벤트의 소비를 보장하는 것은 아닙니다. 진단 코드가 실패했을 때 원래 기능에 미치는 영향을 제한한 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`오류 이벤트는 필요한 필드만 정리해 전달했습니다. 일반 Error와 객체 형태, 값이 빠진 경우를 다루고 결과 역시 필요한 항목으로 제한했습니다. 이는 관측 이벤트에 담을 데이터 구조를 정한 것이며, 원래 오류 전달과는 별도였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`테스트에서는 기록과 반환 계약을 같이 봤다`}),`
`,(0,f.jsx)(t.p,{children:`관측 정보가 나오는지만 검사하면 새 정보가 기존 기능을 깨뜨리는 경우를 놓칩니다. 그래서 구독자가 실패하는 입력과 원래 호출이 실패하는 입력을 나눠 봤습니다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 설명을 위한 재구성이며 실제 회사 코드가 아닙니다. 이벤트 전달의 실패 처리와 원래 오류 재전달이 다른 위치에 있습니다.`}),`
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
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`safelyNotify`}),`는 동기 예외뿐 아니라 구독자가 반환한 비동기 작업의 rejection도 처리해야 합니다. 통지 함수가 바로 반환했다는 이유만으로 이후 구독자 실패까지 격리됐다고 판단할 수는 없습니다.`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력·순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`구독자 하나가 동기 예외 발생`}),(0,f.jsx)(t.td,{children:`원래 호출 진행, 다른 구독자 통지 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`구독자가 reject하는 비동기 작업 반환`}),(0,f.jsx)(t.td,{children:`이벤트 구독자의 실패 처리, 원래 호출 계약 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`원래 브릿지 호출이 오류 객체로 reject`}),(0,f.jsx)(t.td,{children:`같은 오류 객체로 reject`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`operation 시작 이후 새 구독`}),(0,f.jsx)(t.td,{children:`그 구독자에게 과거 operation 종료만 전달하지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`관측 없는 기존 호출자`}),(0,f.jsxs)(t.td,{children:[`기존 `,(0,f.jsx)(t.code,{children:`Promise<void>`}),` 소비 방식 유지`]})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`이 조건들은 관측 계층의 계약을 확인합니다. 실제 장애 진단 시간이 얼마나 줄었는지나 공급사 호출이 모든 기기에서 성공했는지는 다른 측정입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`관측을 추가해도 기존 호출은 같은 방식으로 끝난다`}),`
`,(0,f.jsx)(t.p,{children:`조사하는 쪽에는 스크립트·load·show 중 어느 operation에서 막혔는지 이어 읽을 정보가 생겼습니다. 기존 호출자는 새 반환값이나 오류 형식을 받을 필요가 없었습니다. Promise는 이전 계약으로 끝나고 원래 오류 객체도 그대로 전달했습니다. 구독자의 동기·비동기 실패가 다른 구독자나 광고 호출로 번지지 않는 조건도 함께 검사했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`오류를 정규화할 때는 관측용 표현만 바꾸도록 주의했습니다. 원래 reject 오류까지 바꾸면 기존 호출자가 오류를 판단하는 방식도 달라질 수 있기 때문입니다. 별도 구독으로 조사에 필요한 정보를 제공하고, 기존 호출자는 같은 결과를 받도록 유지했습니다. 이후 수집량을 조절하는 `,(0,f.jsx)(t.a,{href:`/cases/playhub-diagnostic-sampling/`,children:`목적별 샘플링`}),`도 이 전달 방식 위에서 이어졌습니다.`]})]})}function ue(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(L,{...e})}):L(e)}var de=e({default:()=>pe,frontmatter:()=>fe}),fe={title:`기존 운영 규칙을 지키며 광고 예산 자동화 추가하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`FE/API 경계 구현·리뷰 대응·출시 조율`,period:`2021-2022`,summary:`예산 규칙 하나를 끄려는데 다른 규칙까지 사라지면 안 된다. 기존 설정이 남아 있는 운영 화면에 새 자동화를 넣으며 다룬 문제.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`호환성`,`API 계약`,`후속 수정`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function R(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 운영 화면의 자동화는 하나의 설정이 아니었습니다. 시간 조건을 사용하는 규칙과 예산 상태를 사용하는 규칙이 있었고, 광고나 개별 소재에 이미 연결된 설정도 남아 있었습니다. 새 예산 자동화를 넣어도 운영자가 이전에 구성한 규칙이 없어지는 것은 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`운영자가 예산 규칙 하나만 끄려고 토글을 바꿨는데 시간 규칙까지 제거된다면, 화면이 보여주는 행동과 실제 변경 범위가 달라집니다. 예산 설정을 바꾸는 화면에서는 그 규칙만 바뀌도록 해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`조회에서도 같은 문제가 있었습니다. 새 형식의 규칙만 읽으면 기존 규칙만 가진 설정은 비어 보일 수 있습니다. 목록을 하나로 합쳐 보여주더라도, 저장하거나 삭제할 때는 어떤 규칙을 대상으로 한 행동인지 남아 있어야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이미 사용 중인 규칙을 읽고 유지하면서 새 규칙을 추가해야 했습니다. 이를 위해 토글이 가리키는 대상과 조회·저장·삭제의 대상을 함께 맞췄습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`리뷰가 화면 밖의 계약을 드러냈다`}),`
`,(0,f.jsx)(t.p,{children:`동료는 기존 규칙만 있는 경우에도 조회와 표시가 유지되는지 물었습니다. 저는 구·신 규칙을 함께 조회하는 처리와 권한을 맞추고 gateway도 수정했다고 설명했습니다. API 필드를 바꾼 뒤에는 영향을 받는 부분을 다시 리뷰해달라고 요청했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`삭제에 대해서도 어떤 규칙을 없애는지 범위를 설명했습니다. 예산 규칙 제거와 시간 규칙 제거는 같은 작업이 아니었습니다. 새 화면의 토글을 모든 자동화 설정의 삭제 신호처럼 사용할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`규칙의 ID와 상태를 남긴 채 저장하기`}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 광고에 연결된 규칙과 각 소재에 연결된 규칙을 조회해 화면의 목록으로 합쳤습니다. 목록을 하나로 보여줘도 저장 대상을 하나로 뭉뚱그릴 수는 없었습니다. 각 규칙의 ID와 제거 상태를 유지해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저장할 때는 그 상태로 작업을 골랐습니다. 기존 ID가 있고 제거된 규칙이면 삭제하고, 기존 ID가 남아 있으면 갱신하고, 새 규칙이면 생성했습니다. 아직 서버에 만들지 않은 규칙을 화면에서 지운 경우에는 저장 대상에서 제외했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`아직 만들지 않은 규칙을 추가했다가 지우면 서버에 삭제 요청을 보낼 ID가 없습니다. 이미 저장된 규칙을 제거할 때는 그 ID에 대한 삭제가 필요합니다. 화면에서는 둘 다 ‘제거’로 보여도 API 요청은 달라야 해서, 개별 규칙의 ID와 제거 상태를 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`gateway에도 조회·생성·수정·삭제 경로와 권한을 함께 맞췄습니다. FE의 폼에서 만든 요청이 실제 조회와 저장까지 이어질 수 있도록 연결했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기본값처럼 보였던 시간 분기가 새 규칙을 잘못 묶었다`}),`
`,(0,f.jsx)(t.p,{children:`후속 작업에서는 토글을 켜고 끌 때 규칙의 시간 조건이 잘못 저장되는 버그를 다뤘습니다. 여기서 첫 번째·두 번째 알림은 Slack으로 알림을 보내는 규칙의 구분입니다. 수정한 코드는 광고 종료일을 비교할 기준 시각을 저장하는 부분이었습니다. 기존 분기는 첫 번째 알림이면 기본 시각을 쓰고, 그 밖의 규칙에는 별도 시각을 넣는 형태였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`문제는 첫 번째가 아닌 것이 모두 두 번째 알림은 아니라는 점입니다. 규칙 종류가 늘어난 상태에서 넓은 else가 원래 예외를 넘어 다른 규칙까지 묶을 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`두 번째 알림일 때만 별도 시각을 쓰고 나머지는 기본 시각을 쓰도록 조건을 좁혔습니다. 기존의 “첫 번째가 아니면” 조건이 늘어난 규칙까지 포함하므로, 별도 시각이 필요한 “이 예외에 해당하면”으로 바꿨습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`변경 뒤에 남은 것은 새 폼보다 공존하는 동작이었다`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 기존 규칙이 있는 설정을 새 화면에서도 읽고, 새 규칙을 추가하거나 각 ID에 맞춰 수정·삭제할 수 있게 됐습니다. 예산 규칙을 제거하는 행동이 다른 종류의 규칙까지 제거하는 명령이 되지 않도록 범위를 나눴습니다. 후속 시간 조건도 두 번째 알림에만 예외를 적용했습니다. 새 자동화를 쓰기 위해 기존 설정을 비워야 하는 화면이 아니라, 두 종류가 함께 남는 동작을 만든 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`동료가 기존 규칙만 있는 경우를 질문하면서 화면의 폼만으로는 확인하기 어려운 조건을 함께 살폈습니다. 조회·권한·gateway를 맞추고 API 변경에 다시 리뷰를 요청하면서 기존 설정을 유지해야 하는 조건도 확인했습니다. 지금 다시 보면 새 규칙을 추가할 때는 그 규칙의 동작과 함께 기존 입력이 어떤 조회와 분기로 들어가는지도 확인해야 한다고 생각합니다. 후속 else 수정에서도 예외를 적용할 범위를 그렇게 좁혔습니다.`})]})}function pe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(R,{...e})}):R(e)}var me=e({default:()=>ge,frontmatter:()=>he}),he={title:`반복 개발의 기다림을 줄이는 빌드 환경 개선`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`환경 개선`,role:`병목 분석·설정 변경·동료 적용 안내·후속 대응`,period:`2021-2022`,summary:`개발환경을 실행하고 확인할 준비가 느리면 작은 시도도 부담이 된다. 빌드를 빠르게 만들고, 배포 충돌로 되돌린 뒤 다시 구성한 이야기.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`개발환경`,`호환성`,`회귀`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function z(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`코드를 고친 뒤 화면에서 확인하려면 브라우저가 실행할 코드를 만드는 빌드부터 끝나야 합니다. 이 준비가 느리면 작은 변경을 시험할 때도 기다림이 붙습니다. 개발환경을 실행하고 다시 확인하는 과정에서 반복되는 대기를 줄일 필요가 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`한 번 오래 걸리는 것보다 같은 대기를 반복하는 것이 문제였습니다. 개발자는 화면을 보고 다시 고칠 부분을 찾는데, 그 피드백을 받기 전에 기다리는 시간이 계속 들어갑니다. Dash 개발 빌드를 최적화할 때 줄이려던 것도 이런 반복 준비의 비용이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`어떤 설정을 바꿀지는 전체 빌드 시간만 보고 정하기 어려웠습니다. 파일 변환과 라이브러리 처리, 분석 도구의 실행 시간이 섞여 있었고, 최초 실행과 캐시를 재사용하는 실행도 달랐습니다. 설정 변경 뒤 시간이 줄더라도 어느 조건에서 줄었는지 확인해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이후에는 속도와 배포 호환성도 부딪혔습니다. 개발 중 빠르게 만든 구성을 새 의존성 조건에서 그대로 유지할 수 없었습니다. 어디에 시간이 쓰이는지부터 읽고, 빨라진 설정을 되돌린 뒤의 비용까지 따라가는 작업이 됐습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`느리다는 말을 loader와 plugin의 시간으로 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`개발 서버를 측정하는 별도 명령을 두고 loader·plugin별 시간을 볼 수 있도록 측정 도구와 분석을 연결했습니다. 느린 빌드를 하나의 숫자로만 보면 캐시와 변환 작업, 라이브러리 정리 중 무엇부터 할지 판단하기 어렵기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`먼저 바꾼 대상은 Vue·CSS·JavaScript를 처리하는 loader 앞의 캐시와 라이브러리 변환 설정이었습니다. 반복 빌드에서 다시 거치는 변환 작업을 재사용하는 쪽에 손댄 것입니다. 미사용 파일이나 중복 라이브러리 정리도 가능했지만 당시에는 노력 대비 효과가 낮다고 판단해 뒤로 뒀습니다.`}),`
`,(0,f.jsx)(t.p,{children:`최초 빌드와 반복 빌드도 구분했습니다. 2021년 작업 기록에는 기존 빌드의 10회 평균이 약 45초, 변경 뒤 최초 빌드가 약 35~40초, 캐시 이후의 반복 빌드가 약 25초로 남아 있습니다. 명령·기기·캐시 초기화 조건을 고정해둔 기록은 아니므로 세 값을 하나의 개선율로 묶기보다 당시 관찰한 차이로 읽습니다. 그때 보고한 변화는 처음 실행에서 기다림을 크게 없앤 것보다 반복 작업의 비용을 줄인 쪽에 있었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`측정 도구도 시간을 쓴다는 피드백`}),`
`,(0,f.jsx)(t.p,{children:`2021년의 loader 캐시 변경 뒤, 2022년에는 Webpack 5 전환을 별도로 진행했습니다. 이때 동료들에게 업데이트와 설치 방법을 안내하고, 처음 빌드는 시간이 걸리지만 이후 캐시 빌드는 더 빠르다고 설명했습니다. 적용 방법뿐 아니라 언제 효과가 나타나는지 함께 전달할 필요가 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`측정 화면을 본 동료는 BundleAnalyzerPlugin 자체도 약 2초를 쓰고 있다고 짚었습니다. 평소에는 분석을 항상 켜지 않으니, 분석 화면의 총 시간이 일반 개발 실행의 시간과 같지는 않다는 의견이었습니다. 저는 그 지적을 받아들였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`무엇을 켠 실행인지, 캐시가 있는 실행인지에 따라 비교할 대상이 달라졌습니다. 최초·반복 빌드의 구분과 측정 도구의 비용을 함께 읽어야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`빨라진 설정을 배포 때문에 제거해야 했다`}),`
`,(0,f.jsx)(t.p,{children:`Webpack 전환 뒤에는 기존 cache-loader와의 의존성 충돌에 대응해야 했습니다. 배포 가능한 구성을 먼저 회복하기 위해 cache-loader를 의존성과 loader chain에서 제거했고, 당시의 Webpack filesystem cache 설정도 함께 뺐습니다. 개발 중 빨랐던 구성을 그대로 유지하는 것보다 배포 호환성을 먼저 맞춘 변경이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`하지만 설정을 뺐다고 일이 끝나지는 않았습니다. 이후 개발 빌드 속도가 예전 수준으로 돌아왔다고 팀에 알리고, Webpack과 각 loader가 제공하는 캐시로 다시 작업하고 있음을 공유했습니다. 호환 문제를 해결한 변경이 개발 피드백에 새로운 비용을 만든 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 변경은 작업 방향을 알리는 데서 끝나지 않았습니다. Webpack filesystem cache의 저장 위치를 정하고, Babel의 변환 캐시와 ESLint의 검사 캐시를 설정한 변경을 병합했습니다. 별도의 cache-loader를 각 변환 단계 앞에 다시 넣는 대신, 이미 사용하던 도구들이 자기 결과를 재사용하도록 구성을 바꿨습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`회귀 공유에서 대체 설정의 병합까지`}),`
`,(0,f.jsx)(t.p,{children:`처음 최적화에서는 반복 빌드의 준비 비용을 줄이는 변화를 관찰했고, 이후 호환 문제로 제거한 캐시는 Webpack·Babel·ESLint가 제공하는 대체 설정으로 다시 구성해 병합했습니다. 개발자는 적용 안내를 따라 사용할 수 있는 설정을 받았고, 속도가 회귀했을 때도 그 상태와 후속 방향을 팀에 공유했습니다. 앞서 적은 약 25초는 2021년의 관찰값으로, 새 대체 구성의 최종 속도와는 구분합니다.`}),`
`,(0,f.jsx)(t.p,{children:`동료가 분석 도구 자체의 시간도 포함됐다고 짚은 대화는 측정값을 함께 해석한 장면이었습니다. 후속 사용 대화에서는 제 기기의 속도 개선과 다른 기기의 성능 차이를 이야기했고, 장비 교체도 요청했습니다. 같은 설정의 숫자 하나만으로 모든 개발자의 환경을 설명할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 다시 보면 빠른 설정을 한 번 만드는 것만으로 이 작업이 끝나지는 않았습니다. 어떤 실행에서 효과가 나는지 안내하고, 호환 문제로 캐시를 제거했을 때 생긴 비용을 공유한 뒤 대체 구성까지 병합했습니다. 캐시를 유지할지뿐 아니라 어느 도구가 결과를 재사용할지 정해야 했고, 동료가 실제로 쓰는 환경과 코드의 속도를 함께 확인했습니다.`})]})}function ge(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(z,{...e})}):z(e)}var _e=e({default:()=>ye,frontmatter:()=>ve}),ve={title:`일괄 작업이 일부 실패해도 사용자의 일을 이어 주기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`상태 표현 제안·제품/QA 협의·프론트엔드 구현`,period:`2022`,summary:`여러 광고 소재를 저장했는데 일부만 성공했다면 무엇을 다시 저장해야 할까? 이미 끝난 작업과 남은 입력을 함께 다룬 이야기.`,date:`2022`,dateBasis:`context`,collection:`records`,updated:`2026-10-02`,lastTendedAt:`2026-10-02`,tags:[`운영 UX`,`부분 실패`,`재시도`]};function B(e){let t={h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 소재를 일괄 등록하는 화면에서는 여러 광고 항목과 각 항목에 사용할 소재를 한꺼번에 입력했습니다. 소재는 사용자에게 보여줄 광고 내용을 담는 단위입니다. 운영자가 보기에는 입력을 모두 마친 뒤 저장 버튼을 한 번 누르는 작업이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 버튼 하나가 실제로는 소재별 생성 요청을 실행했습니다. 예를 들어 같은 광고 항목의 두 소재 중 하나는 저장되고 다른 하나는 실패할 수 있었습니다. 화면이 “실패했습니다”라고만 알려주면, 방금 입력한 것 중 무엇이 끝났는지부터 다시 확인해야 합니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 상태에서 전체를 다시 저장해도 되는지, 실패한 것만 고쳐야 하는지도 불분명합니다. 이미 성공한 소재에도 생성 요청을 다시 보내면 끝난 일을 반복하게 됩니다. 반대로 화면을 비워버리면 아직 저장하지 못한 입력을 다시 구성해야 합니다. 오류 메시지를 보여주는 것만으로는 다음 행동을 정할 수 없었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`사용자가 `,(0,f.jsx)(t.strong,{children:`일부만 끝난 작업을 같은 화면에서 이어갈 수 있도록`}),` 입력 유지 방식과 저장 결과, 다음 저장의 동작을 함께 정해야 했습니다. 여러 항목을 보내는 기능이 있어도 이 세 가지가 맞지 않으면 무엇을 다시 저장할지 알기 어려웠습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`코드의 의존성을 사용자의 입력 순서로 만들 뻔했다`}),`
`,(0,f.jsx)(t.p,{children:`저장 전의 입력에서도 같은 차이가 드러났습니다. 화면에서는 묶음을 편집하지만 데이터는 개별 소재에 속해 있었습니다. 랜딩 URL의 입력 방식이 그 예였습니다. URL은 화면에서는 묶음의 공통 정보처럼 보였지만 데이터에서는 소재가 가진 속성이었습니다. 소재를 모두 지우면 소재에서 읽어오던 URL도 사라지는 구조였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 소재를 먼저 추가한 뒤 URL을 입력하게 하면 되겠다고 제안했습니다. 구현의 의존성을 입력 순서로 풀려 한 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`동료는 다른 관점에서 봤습니다. 사용자는 여러 필드를 자유롭게 입력하는 화면을 보고 있는데, 실제로는 순서를 지켜야 한다면 화면이 보여주는 사용법과 동작이 맞지 않는다는 지적이었습니다. 이미 입력한 값이 소재 삭제와 함께 사라지는 것도 사용자에게는 예상하기 어려운 일이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 의견을 받아 소재를 모두 제거해도 입력한 URL이 남도록 수정했습니다. URL이 소재의 속성이라는 이유로 입력 순서를 제한하면 사용자가 화면의 데이터 구조까지 이해해야 했습니다. 입력은 자유롭게 하되 그 값을 유지하는 처리는 화면에서 맡았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`부분 실패도 사용자가 다시 해석하게 두지 않기`}),`
`,(0,f.jsx)(t.p,{children:`저장 결과에서도 비슷한 질문이 생겼습니다. 같은 광고 항목의 네이티브 소재는 저장됐지만 HTML 소재는 실패할 수 있었습니다. 행 전체를 성공이나 실패로 표시하면 소재별로 다른 결과를 표현할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 저장 오류를 각 소재에 보여주고 성공·실패 상태를 구분하는 표시를 제안했습니다. 동료들과 방식과 표시 위치를 논의했습니다. 운영자가 모든 입력을 다시 살피기 전에, 어느 소재의 작업이 남았는지 알 수 있어야 한다고 봤습니다.`}),`
`,(0,f.jsx)(t.p,{children:`성공·실패 표시를 나눈 뒤에는 다음 저장도 그 결과를 따라야 했습니다. 성공한 소재에 다시 생성 요청을 보낸다면, 운영자는 상태를 보고도 무엇을 재시도할지 결정하기 어려웠습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`표시·저장·목록을 남기는 단위를 나누기`}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 각 소재의 저장 호출에서 오류를 처리했습니다. 한 호출이 실패해도 그 오류를 해당 소재의 상태에 남기고 다음 소재의 처리를 이어갔습니다. 성공한 소재에는 저장 완료 상태를 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`첫 저장이 끝난 뒤에는 아직 저장되지 않은 소재가 있는 묶음을 남겼습니다. 한 행은 공통 입력과 여러 소재를 함께 편집하는 단위였으므로, 남은 작업도 그 행에서 이어갔습니다. 결과적으로 성공한 소재와 실패한 소재가 같이 보여도 어떤 묶음에서 무엇이 끝났는지 읽을 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`동작을 작은 예로 보면 다음과 같습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`첫 저장 이후의 묶음`}),(0,f.jsx)(t.th,{children:`화면에 남기는 것`}),(0,f.jsx)(t.th,{children:`다음 저장에서 처리할 것`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 소재 모두 성공`}),(0,f.jsx)(t.td,{children:`묶음을 남기지 않음`}),(0,f.jsx)(t.td,{children:`없음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`한 소재 성공, 한 소재 실패`}),(0,f.jsx)(t.td,{children:`두 소재가 들어 있는 묶음`}),(0,f.jsx)(t.td,{children:`아직 저장되지 않은 소재`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 소재 모두 실패`}),(0,f.jsx)(t.td,{children:`두 소재가 들어 있는 묶음`}),(0,f.jsx)(t.td,{children:`두 소재`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`따라서 재시도에서는 묶음이 남아 있다는 사실만으로 그 안의 모든 소재를 다시 저장하면 안 됐습니다. 개별 소재의 저장 완료 상태를 확인해 이미 성공한 생성 호출은 건너뛰었습니다. 이 상태는 같은 화면에 남아 있는 저장 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`소재별 오류 표시와 일부 개별 필드의 비활성화도 저장 상태에 연결했습니다. 이미 저장된 소재의 이름과 삭제 버튼은 비활성화했고, 남은 소재는 수정해 다시 생성할 수 있게 했습니다. 공통 URL 입력은 화면에 남은 값에 반영되지만, 이미 저장된 소재에는 다음 생성 요청을 보내지 않습니다. 이 화면의 재시도는 남은 소재를 만드는 절차이지 완료한 소재까지 수정하는 명령은 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`소재별 결과를 표시하고, 남은 작업은 묶음 안에서 편집하게 했습니다. 다음 저장에서는 그 묶음의 미저장 소재만 요청하도록 연결했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`입력을 유지하고 남은 소재를 이어서 저장할 수 있게`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 소재를 모두 지웠다가 다시 추가해도 이미 입력한 URL을 이어서 쓸 수 있게 됐습니다. 저장이 일부만 끝나도 남은 묶음을 다시 구성할 필요는 없었습니다. 같은 화면의 성공·실패 표시를 보고 미저장 소재를 수정해 다시 저장하며, 이미 성공한 소재의 생성 요청은 건너뜁니다. 일괄 등록은 한 번 보내는 기능에서, 중간까지 끝난 작업을 이어갈 수 있는 화면이 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`부분 결과를 나눠 보여주는 제안에는 제품·QA 담당자가 긍정적으로 답했고, 표시 위치도 함께 논의했습니다. 사전 QA 확인 뒤에는 미리 확인한 보람이 있었다는 피드백도 주고받았습니다. 결과 표시와 다음 저장의 행동을 함께 맞춘 협의가 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 데이터 구조에 맞춰 사용자의 입력 순서를 제한하자고 제안했습니다. 동료의 반론을 듣고 입력한 값을 유지하는 방향으로 바꿨습니다. 오류가 난 소재를 알려주는 데서 멈추지 않고, 끝난 소재는 보존한 채 남은 입력을 고쳐 다시 저장할 수 있도록 해야 사용자의 작업이 이어진다고 생각합니다.`})]})}function ye(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(B,{...e})}):B(e)}var be=e({default:()=>Se,frontmatter:()=>xe}),xe={title:`기존 캠페인 탐색 경험에 새로운 광고 공급 연결하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`캠페인 모델·공유 클릭 입력·추적 및 랜딩 호출 코드 수정, 서버 협의`,period:`2024.12`,summary:`목록의 모양은 같아도 공급 종류가 바뀌면 클릭과 참여 목적지가 달라진다. URL 입력을 캠페인 객체로 넓히고, 해당 함수를 호출하는 목록·진행 카드·보너스도 함께 수정한 경험.`,date:`2024-12`,dateBasis:`context`,collection:`records`,tags:[`공급 통합`,`도메인 모델`,`기존 계약`],updated:`2026-10-10`,lastTendedAt:`2026-10-10`};function V(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`여러 캠페인을 탐색하고 진행 중인 참여를 확인하는 허브에 새로운 광고 공급을 넣었습니다. 목록에서는 같은 카드로 보여도 직영 캠페인과 광고 네트워크 캠페인의 참여 목적지는 달랐습니다. 카드에 URL 하나를 넘기던 입력만으로는 어느 실행 경로를 사용할지 설명하기 어려웠습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 허브는 일반 화면과 매체 전용 화면이 클릭 로직을 공유하고 있었습니다. 새로운 종류를 처리하는 분기 하나를 추가하면 끝나는 것이 아니라, 같은 callback을 부르는 목록과 진행 카드, 보너스도 바뀐 입력을 전달해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`먼저 종류가 어디까지 영향을 주는지 물었다`}),`
`,(0,f.jsx)(t.p,{children:`서버 담당자에게 종류 구분이 필요한 범위와 적용 매체, 기간 종료·예산 등 오류 응답을 확인했습니다. 다른 문의 제품의 일정에 미칠 영향도 제품 담당자에게 공유했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`초기에는 별도 요청과 서버 redirect 방식도 논의했습니다. 최종 FE 구현에서는 기존 클릭 생성 요청을 유지하고 확장된 응답을 사용했습니다. 초기 논의의 방식이 그대로 구현된 것은 아닙니다.`}),`
`,(0,f.jsx)(t.h2,{children:`URL보다 선택한 캠페인을 입력으로 받았다`}),`
`,(0,f.jsx)(t.p,{children:`공유 클릭 callback의 입력을 URL에서 캠페인 객체로 넓혔습니다. 클릭을 생성한 뒤 새 공급 종류라면 응답의 랜딩 URL과 추적값을 기존 광고 네트워크 참여 화면으로 연결했습니다. 일반·custom 캠페인의 분기는 유지했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`선택한 캠페인
  → 기존 클릭 생성 요청
  → 공급 종류와 응답의 랜딩·추적값
  → 해당 참여 화면
`})}),`
`,(0,f.jsx)(t.p,{children:`기존 광고 네트워크 참여 화면이 받는 값을 사용해 새 공급의 참여를 연결했습니다. 서버가 공급·할당을 정하면 FE는 그 결과로 사용자에게 열 목적지와 추적값을 전달했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`공유 함수를 바꾸면 실제 호출자도 함께 봐야 했다`}),`
`,(0,f.jsx)(t.p,{children:`입력 타입만 바꿔서는 호출자가 가진 캠페인 정보가 전달되지 않습니다. 전체·진행 중 목록과 보너스 dialog도 캠페인 객체를 넘기도록 바꿔, 공용 로직이 공급 종류를 판단할 수 있게 했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`당시 코드는 랜딩 응답을 타입 단언해서 사용했습니다. 이 변경에 모든 런타임 검증이 들어 있었다고 설명할 수는 없습니다. 이후 다른 제품에서 기사 카드를 통합할 때는 `,(0,f.jsx)(t.a,{href:`/cases/article-content-integration/`,children:`응답을 unknown으로 받아 실패 단위를 나눈 처리`}),`를 사용했습니다. 제품과 시기는 다르지만, 타입의 약속과 실제 입력을 구별하는 관점으로 비교할 수 있습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`같은 카드를 클릭하는 일이 달라졌다`}),`
`,(0,f.jsx)(t.p,{children:`새 공급을 기존 허브의 캠페인 모델과 호출 코드에 연결하고, 해당 참여 화면으로 이동하도록 수정한 코드가 병합됐습니다. 목록의 모양보다 그 카드가 어떤 참여를 시작하는지가 바뀐 작업이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`URL만 받던 함수에 캠페인 객체를 넘기면서 다음 참여 화면을 고를 정보를 전달할 수 있게 됐습니다. 이 경험 이후에는 공용 로직에 새 종류를 추가할 때, 분기 자체와 함께 실제 호출자가 판단에 필요한 값을 넘기는지도 확인해야 한다고 생각합니다.`})]})}function Se(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(V,{...e})}):V(e)}var Ce=e({default:()=>Te,frontmatter:()=>we}),we={title:`리워드를 확인하는 마지막 터치가 반응하지 않을 때`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`입력·배치 개선`,role:`입력 문의 조사·touch/click 계측·Canvas 크기/초기화/레이아웃 보완·운영 후속`,period:`2026.06–2026.07`,summary:`복권을 긁을 수 없다는 문의인데 오류 로그에는 원인이 보이지 않았다. 입력의 도달과 Canvas 준비를 나눠 관측하고, 크기·초기화·반복 입력의 책임을 보강해 CS 반응까지 확인한 과정.`,date:`2026-07`,dateBasis:`context`,collection:`records`,tags:[`Canvas`,`입력 계측`,`수명주기`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function H(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`사용자는 광고 참여를 마친 뒤 복권 표면을 긁어 리워드 결과를 확인합니다. 그런데 이 화면에서 입력이 반응하지 않으면, 참여를 끝냈어도 결과를 볼 수 없습니다. 복권이 긁히지 않는다는 문의는 이 마지막 동작에서 들어왔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`문의와 같은 조건을 바로 재현하기는 어려웠습니다. Canvas 오류를 찾아도 증상을 설명할 만한 예외가 보이지 않았습니다. 다만 예외가 없다는 것만으로 입력이 정상이라고 판단할 수는 없었습니다. 손가락의 동작이 Canvas까지 도달했는지, 준비 상태로 표시된 화면이 실제로도 맞는 영역에서 입력을 받는지 확인할 필요가 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`6월에는 touch/click 가설을 세우고 입력을 확인할 관측과 보강을 넣었습니다. 이후 6~7월에는 Canvas의 크기·초기화·프레임과 반복 입력의 수명주기를 함께 보완했습니다. 이 글의 질문은 `,(0,f.jsx)(t.strong,{children:`예외로 잡히지 않는 입력 문제를 어디에서 관찰하고, 어떤 상태를 보존할 것인가`}),`입니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`문의의 감소와 수정 적용 시점을 먼저 나눴다`}),`
`,(0,f.jsx)(t.p,{children:`조사 중 문의가 줄어드는 관찰도 있었습니다. 그때 저는 아직 수정이 배포되지 않았다고 알렸습니다. 뒤에 넣은 보강으로 그 이전의 감소를 설명할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`입력 관련 보강과 모니터링을 배포한 뒤에는 CS 담당자가 문의가 크게 줄었다고 답했습니다. 전날 오후의 적용 여부를 물었고, 저는 적용 시점을 확인했습니다. 재현이 어려운 문제여서 코드만 보고 끝내는 대신, 무엇을 언제 바꿨고 실제 문의에서는 어떤 변화가 보였는지 함께 대조했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 반응은 6월 중순의 입력 보강 직후 확인한 것입니다. 그 뒤의 크기·레이아웃·진단 측정 변경을 모두 합쳐 하나의 감소율로 설명하지는 않습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`CSS 크기와 비트맵 크기는 다른 갱신이었다`}),`
`,(0,f.jsx)(t.p,{children:`복권 위아래에는 배너와 영상이 함께 배치됐습니다. 화면의 레이아웃이 변하면 Canvas가 차지하는 크기와 손가락 좌표를 읽을 영역도 맞춰야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 Canvas의 width·height를 다시 설정하는 것은 일반 CSS 스타일을 다시 넣는 일과 다릅니다. 그리기 상태에 영향을 줄 수 있습니다. 같은 값이라도 계속 대입하면 진행 중인 긁기를 보존하기 어려워집니다.`}),`
`,(0,f.jsx)(t.p,{children:`실제 레이아웃을 읽어 비트맵 크기를 정수로 정규화하고, 크기가 달라졌을 때만 width·height를 갱신하도록 했습니다. 입력 영역은 그 레이아웃에 맞춰 연결했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 공개 설명용 의사코드입니다.`}),`
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
`,(0,f.jsx)(t.p,{children:`최신 레이아웃을 읽더라도 비트맵 크기가 같다면 width·height를 다시 설정하지 않도록 했습니다. 같은 값의 대입으로 이미 진행 중인 긁기를 건드리지 않으면서, 실제 크기가 바뀐 경우에는 입력 영역까지 맞추려는 처리였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`준비 실패를 READY로 넘기지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`Canvas ref가 없거나 controller 초기화가 실패했으면 준비 상태로 가장하지 않고 오류 상태로 드러냈습니다. 화면에 Canvas가 있다는 사실과 입력을 받을 준비가 끝났다는 사실은 달랐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`동시에 표시 초기화 오류가 기존 결과 확인 경로까지 끊지 않도록 scratch→stop 흐름의 클라이언트 완료 경로를 유지했습니다. 서버의 리워드 승인과 화면에서 긁는 입력의 종료는 같은 책임이 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이는 ERROR를 무조건 성공으로 바꾸는 선택이 아닙니다. 초기화 실패는 오류로 남기되, 사용자가 이어 갈 기존 완료 동작은 따로 보존했습니다. 하나의 READY 플래그에 초기화·입력·리워드의 모든 성공을 넣지 않으려는 보완이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`레이아웃은 paint 전에, 진단은 반복 입력 밖에서`}),`
`,(0,f.jsx)(t.p,{children:`복권의 크기만 맞춰도 배너 높이가 바뀌면 화면 전체의 프레임이 달라졌습니다. 예약 높이를 실제 프레임 계산에 반영하고, 그 prop이 바뀌었을 때 paint 전에 레이아웃을 맞추도록 보완했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`포인터 좌표가 맞는지와 전체 프레임이 화면 안에 들어오는지는 다른 문제였습니다. 손가락이 움직일 때마다 이 배치 문제를 다시 해결할 필요는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`진단에도 비슷한 구분이 필요했습니다. 문제를 조사하려고 DOM 크기와 hit-test 정보를 읽더라도 모든 포인터 이동에서 그 측정을 반복하면 빈번한 입력에 조사 비용이 붙습니다. 화면 진입과 상태 전이에 진단 측정을 두고, 반복 포인터 경로에서는 지오메트리 측정을 하지 않도록 나눴습니다.`}),`
`,(0,f.jsx)(t.p,{children:`진단에 필요한 값이 실제로 달라지는 시점을 기준으로 측정을 배치했습니다. 이렇게 해야 입력을 조사하기 위한 측정이 손가락을 움직일 때마다 반복되는 비용으로 붙지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`서로 다른 실패와 보존할 행동을 테스트로 나눴다`}),`
`,(0,f.jsx)(t.p,{children:`초기화·프레임·입력에는 서로 다른 기대 결과를 남겼습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`조건`}),(0,f.jsx)(t.th,{children:`확인할 동작`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Canvas 요소가 없거나 초기화가 실패`}),(0,f.jsx)(t.td,{children:`준비 상태로 넘기지 않고 오류 반환`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`ERROR 뒤 scratch→stopScratch`}),(0,f.jsx)(t.td,{children:`기존 클라이언트 완료 경로 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`레이아웃 크기 변경`}),(0,f.jsx)(t.td,{children:`정수 비트맵 크기 반영`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`예약 높이 prop 변경`}),(0,f.jsx)(t.td,{children:`프레임 계산 반영`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`반복 포인터 액션`}),(0,f.jsx)(t.td,{children:`진단 지오메트리 측정 미호출`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`같은 크기에서 비트맵을 다시 설정하지 않는 조건도 구현에 남겼습니다. 실제 문의를 좁힐 관측과 상태·입력 조건을 고정할 테스트는 각각 다른 질문에 답했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`마지막 입력도 제품의 일부였다`}),`
`,(0,f.jsx)(t.p,{children:`입력 보강 뒤에는 CS의 감소 확인이 돌아왔고, 후속에서는 초기화 실패와 프레임 변화, 반복 입력의 측정 비용을 따로 다뤘습니다. 사용자의 마지막 동작을 살리려면 Canvas만 볼 수 없었습니다. 광고 뒤의 참여 상태, 입력 준비, 실제 화면 크기, 결과 확인까지 이어져 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`조사를 시작할 때는 예외를 찾아봤지만, 오류 로그만으로는 손가락이 닿았는지와 준비된 영역이 맞는지 알 수 없었습니다. 입력이 도달하는 장면을 관측하고 크기 갱신이 진행 중인 긁기에 미치는 영향을 나눠 보니, 확인할 조건을 더 구체적으로 정할 수 있었습니다. CS 반응도 각 보강의 적용 시점과 맞춰 보며 후속으로 확인했습니다.`})]})}function Te(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(H,{...e})}):H(e)}var Ee=e({default:()=>Oe,frontmatter:()=>De}),De={title:`정리본으로 연결한 이전 글: claude-md-meta-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.04~05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function U(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Oe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(U,{...e})}):U(e)}var ke=e({default:()=>je,frontmatter:()=>Ae}),Ae={title:`문의 조회를 처리와 판단으로 이어 주는 운영 제품 만들기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`운영 제품`,role:`운영 제품 FE/API client/BFF 구현·서버 계약 조율·출시 및 상태 갱신 개선`,period:`2024.12–2025.05`,summary:`운영자가 근거를 보고 적립·완료를 판단하는 FE와 BFF를 구축했다. 첫 출시의 범위를 정하고, 실사용에서 발견한 상태 반영 지연과 다음 문의 이동까지 개선한 과정.`,date:`2025-05`,dateBasis:`context`,collection:`stories`,tags:[`운영 제품`,`BFF`,`비동기 처리`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function W(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t.p,{children:[`사용자가 광고 미션을 끝냈는데 리워드를 받지 못했다고 문의했습니다. 운영자가 문의 문장만 읽어서는 실제 참여가 끝났는지, 이미 적립됐는지, 반복 참여 중 어느 회차를 말하는지 알 수 없습니다. 같은 사용자의 기록을 많이 보여줘도 이번 문의와 연결되지 않으면 판단하기 어렵습니다. `,(0,f.jsx)(t.strong,{children:`문의 대상과 시점에 맞는 근거를 읽고, 그 자리에서 다음 처리를 결정할 수 있는 화면이 필요했습니다.`})]}),`
`,(0,f.jsx)(t.p,{children:`2024년 12월부터 광고 운영 대시보드의 문의 관리 제품을 개발했습니다. 저는 Vue 화면, TypeScript API client와 BFF의 조회·처리 경로를 맡았습니다. 서버 담당자는 참여·적립 서비스와 응답을 준비했고, 제품 담당자는 운영자의 판단 순서와 출시 범위를 함께 검토했습니다. 개발은 2025년 1월 첫 운영 출시로 이어졌고, 실제 사용이 알려준 문제를 보완한 뒤 5월에는 다음 문의로 이어지는 흐름도 추가했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`정보의 양보다 같은 문의를 설명하는 문맥`}),`
`,(0,f.jsx)(t.p,{children:`상세 화면에는 문의 내용, 사용자와 캠페인, 미션별 상태, 최근·전체 이벤트, 처리 이력을 연결했습니다. 각 영역의 조회가 성공하는 것보다 중요한 것은 그 정보들이 같은 문의를 설명하는가였습니다. 예를 들어 반복 참여에서는 마지막 적립 시각과 문의 시점이 다르면, 최근 성공 기록만 보고 이번 문의도 해결됐다고 판단할 수 없습니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면은 판단과 실행의 순서를 따라 나눴습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`운영자의 질문`}),(0,f.jsx)(t.th,{children:`화면과 API가 연결할 것`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`어떤 참여에 대한 문의인가?`}),(0,f.jsx)(t.td,{children:`문의·사용자·캠페인의 식별자와 시점`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`해당 미션은 어떤 상태인가?`}),(0,f.jsx)(t.td,{children:`미션 유형·진행·적립 상태와 이벤트`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`지금 처리할 수 있는가?`}),(0,f.jsx)(t.td,{children:`적립 가능·불가능·요청 중의 구별`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`누가 무엇을 처리했는가?`}),(0,f.jsx)(t.td,{children:`완료 담당자와 처리 이력`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`목록은 문의의 완료 여부와 페이지네이션을, 상세는 현재 대상의 판단 근거를 맡았습니다. 미션 카드는 처리 상태를 표현하고 요청 중에는 같은 행동을 다시 실행하지 못하게 했습니다. BFF에서도 정보를 읽는 요청과 적립·완료처럼 상태를 바꾸는 요청을 읽기·쓰기 권한으로 나누어 연결했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면 개발 중 응답만으로 판단하기 어려운 부분은 서버 담당자에게 다시 확인했습니다. 미션 유형과 복수 이벤트 문맥, 완료 처리자, 목록·이력의 페이지네이션을 확인했고 조회 오류도 재현 조건과 함께 전달했습니다. 서버 수정이 검증 환경에 반영된 뒤에는 조회가 회복됐는지 확인했습니다. 운영자가 각 정보를 읽고 판단할 수 있는지를 기준으로 필요한 응답을 맞췄습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 요구를 첫 출시에 넣지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`QA 전에 제품 담당자에게 사용 편의성과 불필요하거나 빠진 기능을 먼저 봐 달라고 요청했습니다. 버튼이 정상 동작하는지와 운영자가 어떤 순서로 읽는지는 다른 검토였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`사진 확대와 상단 정보 배치 의견은 반영했습니다. 이벤트 검색은 후속 논의, 완료 취소는 다음 스펙으로 남겼습니다. 다른 캠페인을 즉시 적용하는 기능은 공용 컴포넌트 변경이 필요했고 다른 우선순위도 있었습니다. 다음 스프린트로 나눌 수 있는지 제품 담당자와 합의했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`첫 출시에서는 `,(0,f.jsx)(t.strong,{children:`근거를 읽고 적립·완료를 실행하는 한 작업`}),`을 끝까지 할 수 있도록 범위를 정했습니다. 편의 기능을 미루더라도 이 흐름은 이어져야 했습니다. 화면 일부만 완성해 출시하면 운영자가 판단하고 처리하려던 문제를 해결하기 어려웠습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`2025년 1월 14일 서버 반영 뒤 화면과 BFF를 전달했습니다. 개발자들의 런타임 관찰과 제품 담당자의 실제 사용 확인을 나눴고, 운영 화면에서 처리하기 편하다는 반응이 이어졌습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`성공 응답이 운영자의 완료가 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`실사용에서는 적립 완료 표시와 다른 이벤트 이력이 맞지 않는 문제가 나왔습니다. 처음에는 적립 요청 API가 성공하면 완료 안내를 띄웠습니다. 그러나 서버가 요청을 받아들인 순간과 화면이 다시 읽는 미션 상태에 반영된 순간 사이에는 시간이 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`완료처럼 보인 화면을 다시 확인해야 한다면 운영자는 불필요하게 기다리거나, 아직 처리 중인 일을 놓칠 수 있습니다. 그렇다고 무한히 화면을 잠그는 것도 답은 아니었습니다. 서버 담당자와 지연 제약을 논의하고, 짧은 반영 지연은 조회로 확인하되 한도를 넘으면 후속 확인을 안내하는 쪽으로 정했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`즉시 완료 안내를 제거하고 미션별 확인 중 상태를 넣었습니다. 1초 간격으로 조회하며 이전 상태의 변화 또는 적립 완료 상태를 관찰했습니다. 상한 초과와 조회 실패는 별도 안내로 남겼습니다. 아래는 당시 판단을 설명하는 재구성입니다.`}),`
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
`,(0,f.jsx)(t.p,{children:`이 조건은 화면에서 상태가 갱신됐음을 읽는 기준입니다. 적립·정산의 최종 확정은 서버의 책임으로 남았습니다. 타이머에도 종료 조건을 두고, 상세 화면을 떠나면 타이머와 listener를 정리했습니다. 숨겨지거나 비활성인 화면의 일반 재조회도 억제했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 후속 변경은 1월 23일 배포와 페이지 진입 확인으로 이어졌습니다. 요청 함수가 성공한 뒤에도 확인 중 상태를 보여주고, 조회로 반영 여부를 확인할 수 있게 됐습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`한 건을 끝내는 일과 다음 건을 준비하는 일`}),`
`,(0,f.jsx)(t.p,{children:`5월에는 완료·반려 후 다음 미처리 문의로 이동하는 개선을 추가했습니다. 완료된 문의를 다시 처리 중으로 되돌리는 행동은 그 문의에 남아야 하므로, 모든 상태 변경을 다음 건 이동으로 묶지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다음 문의는 화면의 첫 행으로 추측하지 않고 서버에 현재 문의 식별자로 요청했습니다. 결과가 있으면 이동하고, 없으면 남은 문의가 없음을, 조회 실패면 다음 건을 불러오지 못했음을 알렸습니다. 현재 문의 처리가 성공한 뒤의 조회 실패를 처리 실패로 다시 안내하지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`주소가 바뀐 뒤 상세 조회가 실패하면 이전 문의의 내용·사용자·캠페인·처리 정보를 비웠습니다. 새 문의의 주소에서 이전 사람의 자료를 읽는 상태를 남길 수는 없었습니다. FE와 gateway를 함께 연결해 목록에서 상세로 들어가고 다음 문의를 이어서 처리할 수 있게 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`실제 사용이 제품의 완료 조건을 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`처음 만든 결과는 운영자가 한 화면에서 참여·처리 근거를 읽고 적립·완료를 실행하는 제품이었습니다. 출시 뒤에는 성공 응답과 상태 반영 사이의 시간차를 UI에 넣었고, 이후 한 건을 끝내고 다음 건을 준비할 때의 실패까지 구별했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음의 완료 안내는 API가 요청을 받아들였다는 사실을 운영자가 문의를 끝내도 된다는 의미로 보여줬습니다. 응답은 맞게 읽었지만 화면이 설명한 완료 시점이 너무 빨랐습니다. 즉시 완료 안내를 없애고 확인 중 상태를 넣으면서, 서버 반영을 기다리는 동안 어떤 상태인지 더 정확히 전달할 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`첫 출시에서는 한 문의를 판단하고 처리할 수 있게 범위를 정했고, 실사용 뒤에는 요청 성공과 상태 반영 사이의 시간을 표현했습니다. 이후에는 현재 문의의 처리와 다음 문의 조회도 나눴습니다. 이 과정을 겪으며 운영 제품에서는 화면이 동작하는지와 함께, 운영자가 어떤 상태를 확인하면 작업을 끝낼 수 있는지도 정해야 한다고 생각하게 됐습니다.`})]})}function je(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(W,{...e})}):W(e)}var Me=e({default:()=>Pe,frontmatter:()=>Ne}),Ne={title:`선택한 날짜와 실제 조회 결과가 같은 기간을 가리키도록`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`날짜 필터 동작 협의·공용 달력의 선택 상태와 query 처리`,period:`2023`,summary:`조회하는 날짜와 달력의 선택 표시가 다르면 지금 어떤 자료를 보고 있는지 헷갈린다. 날짜 선택과 초기화가 남기는 상태를 맞춘 이야기.`,date:`2023-04-03`,dateBasis:`context`,collection:`records`,tags:[`운영 필터`,`상태 표현`,`공용 컴포넌트`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function G(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리포트의 날짜 필터에는 ‘오늘’·‘어제’·‘직접 지정’ 같은 빠른 선택이 있었습니다. 프리셋은 날짜 범위를 고르는 단축 선택입니다. 사용자는 그 항목을 누르거나 달력에서 시작·종료 날짜를 직접 골라 자료를 조회했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`‘오늘’을 누른 뒤 날짜를 직접 바꾸면, 다시 연 달력에서는 지금 조회하는 기간을 설명할 수 있어야 합니다. 마지막으로 누른 프리셋과 실제 날짜가 따로 남으면 사용자가 어느 쪽이 현재 조건인지 다시 확인해야 하기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 적용 버튼이 따로 없어서 날짜를 선택하면 창이 닫히고 자료가 바로 조회됐습니다. 저는 실제 기간으로 조회된다면 프리셋 표시를 꼭 일치시키지 않아도 큰 문제가 아닐 수 있지 않느냐고 질문했습니다. 하지만 닫힌 뒤에도 기간은 계속 조회 조건으로 남고, 다시 열었을 때 그 조건을 설명할 상태도 필요했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`날짜 범위, 달력의 선택 표시, URL에 남는 조회 조건은 따로 바뀔 수 있었습니다. 한 곳에서 날짜를 바꿨을 때 나머지 상태가 무엇을 뜻해야 하는지 정해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`직접 지정한 뒤 선택 표시가 사라지지 않게`}),`
`,(0,f.jsx)(t.p,{children:`프리셋은 오늘·어제·직접 지정으로 구성했습니다. 직접 날짜를 고르면 직접 지정 상태가 됐습니다. 초기 구현에는 입력을 적용한 뒤 직접 지정 표시를 비우는 처리가 있었고, 후속 수정에서는 그 초기화를 제거했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`선택을 적용한 뒤에도 조회 기간은 남아 있습니다. 직접 지정 표시까지 비우면 그 기간을 어떻게 고른 것인지 달력에서 설명하기 어려웠습니다. 선택 완료 시 표시를 지우지 않고 현재 필터의 상태로 유지했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 조건을 바꿀 때 기존 조건은 유지하기`}),`
`,(0,f.jsx)(t.p,{children:`후속 구현에서는 날짜 선택을 날짜 query의 변경으로 연결했습니다. 시작·종료 날짜를 갱신하면서 다른 query는 유지했습니다. 기간을 바꾸는 행동이 다른 필터까지 초기화하는 동작이 되지 않도록 변경할 값을 좁혔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`달력이 초기화될 때는 현재 날짜 범위와 날짜 query를 함께 읽어 프리셋 상태를 정했습니다. 날짜 query가 없다면 아무 프리셋도 선택하지 않고, 현재 범위가 오늘이나 어제와 같으면 해당 항목을, 그 밖이면 직접 지정을 표시했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`범위를 지우는 행동은 따로 다뤘습니다. 날짜 query와 프리셋을 함께 비우고 달력의 내부 날짜도 다시 맞췄습니다. 화면의 선택 표시만 없애고 URL에 이전 기간을 남기는 초기화가 되지 않게 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`날짜를 고른 뒤에도 지금 조회하는 조건이 남도록`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 날짜를 직접 고른 뒤에도 직접 지정 상태를 볼 수 있고, 초기화할 때는 날짜 query와 선택 표시를 함께 비우는 흐름을 사용할 수 있게 됐습니다. 달력이 초기화될 때도 현재 기간과 query로 선택을 정합니다. 오늘·어제·직접 지정의 단축 선택은 마지막으로 누른 항목만 기억하는 대신, 현재 조회 중인 기간을 보여주는 표시가 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`변경은 공용 달력의 옵션으로 두고 필요한 리포트에서 사용했으며, 후속 수정과 함께 병합했습니다. 다른 사용처의 UI까지 한꺼번에 바꾸지는 않았습니다. 날짜를 바꾸는 동작이 다른 query를 지우지 않도록 한 것도 운영자가 이미 고른 조건을 보존하는 쪽의 처리였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 실제 기간으로 조회된다면 표시를 꼭 일치시켜야 하는지 질문했습니다. 지금 다시 보면 자료를 조회한 뒤에도 사용자는 달력을 다시 열어 조건을 확인합니다. 입력이 적용됐는지만 보던 질문에서, 적용 이후에도 그 조건을 설명할 수 있는지까지 살펴보게 됐습니다.`})]})}function Pe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(G,{...e})}):G(e)}var Fe=e({default:()=>Le,frontmatter:()=>Ie}),Ie={title:`여러 팀이 쓰는 배포 도구를 제품에 묶이지 않게 개선하기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공용 도구`,role:`선택 모델 재설계·설정/API/CLI와 FE 통합·공용 도구와 사용 제품의 버전 조합 검증`,period:`2026.07–2026.08`,summary:`긴 환경 목록을 두 선택기로 나눈 뒤 제품 결합에 대한 반론을 받아 설정 기반 모델로 바꿨다. 원본 배포 대상·실제 환경 조합·늦은 응답을 보존하며 실제로 적용한 버전을 검증한 과정.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`개발 도구`,`환경 설정 스키마와 배포 요청 규칙`,`비동기 상태`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function K(e){let t={h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`배포 화면에는 길고 비슷한 환경 이름이 한 목록에 있었습니다. 원하는 프로젝트를 찾은 다음 정확한 환경을 골라야 하는데, 화면에서는 모든 이름을 처음부터 같은 수준으로 보여줬습니다. 새 환경을 만드는 기능보다 기존 대상을 쉽게 찾을 방법이 필요했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`프로젝트와 환경을 두 번에 나눠 고르게 만들었습니다. 이후 공용 도구가 특정 제품의 이름을 해석하게 됐다는 반론을 받았습니다. 그 의견을 반영하면서 `,(0,f.jsx)(t.strong,{children:`표시 규칙을 어디에 둘지, 선택한 원래 환경을 배포 요청까지 어떻게 유지할지`}),`를 다시 정했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`처음부터 큰 설정 모델을 만들지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`초기 설계에서 그룹을 표시한 긴 목록, Cascader, 두 Select, 공개 설정 스키마 확장을 비교했습니다. 긴 목록은 탐색 부담이 남았고, Cascader는 값 변환과 키보드 동작을 확인할 비용이 있었습니다. 처음의 단일 사례를 위해 설정 스키마까지 바로 바꾸는 선택은 영향 범위가 컸습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 제한적으로 활성화하는 FE 선택기를 먼저 만들었습니다. 프로젝트를 고르면 환경 후보를 좁히되, 각 옵션에는 원래 환경 객체를 유지했습니다. 표시를 나누는 정보와 배포할 대상의 식별자는 다르게 취급했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`분류에 실패한 이름이 있으면 일부 환경만 조용히 숨기지 않고 원래 평면 목록으로 돌아갔습니다. 편의 기능의 실패 때문에 선택 가능한 배포 대상을 잃어서는 안 됐습니다. 제출 요청에도 프로젝트 같은 새 UI 필드를 추가하지 않고 기존 환경 이름을 보냈습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`반론은 UI가 아니라 규칙의 주인을 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`제품 전용 이름을 공용 코드가 해석하면, 다른 저장소가 다른 순서를 쓸 때 도구 자체를 고쳐야 합니다. 이 결합에 대한 리뷰를 수용해 표시 규칙을 서비스 저장소의 선언으로 옮겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정확히 두 차원의 이름·순서·표시와 허용 값을 설정으로 표현하고, 공용 도구는 그 선언과 원본 환경 목록을 읽도록 했습니다. Go 설정 처리와 API·CLI, 프론트엔드 설정 모델을 함께 바꿨습니다. AI에 구현과 변경 준비를 맡겼지만 바뀐 요구와 검증할 대상을 정하는 일은 제가 이어 갔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`설정으로 옮기면서도 무한한 계층을 고르는 기능까지 만들지는 않았습니다. 필요한 두 차원만 선언하게 하고 기존 환경 식별자는 유지했습니다. 현재 문제를 해결하는 범위에서 공용 도구의 결합을 줄였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`허용된 값의 곱이 실제 환경은 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`설정에 프로젝트와 환경의 허용 값이 있다고 그 모든 조합이 존재하는 것은 아닙니다. 예를 들어 프로젝트 A의 운영 환경만 있는데, 값 목록을 곱해 검증 환경까지 만들어 보여주면 선택할 수 없는 대상을 UI가 발명합니다.`}),`
`,(0,f.jsx)(t.p,{children:`선택지는 실제 원본 환경들을 해석해 만들었습니다. 설정은 이름을 어떻게 읽을지 정하고, 존재 여부는 원본 환경 목록이 정했습니다. 그룹만 고른 이력 조회도 해당 그룹에 실제 존재하는 환경 이름들로 요청했습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`정보`}),(0,f.jsx)(t.th,{children:`맡은 의미`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`표시 설정`}),(0,f.jsx)(t.td,{children:`두 차원과 이름·순서를 해석하는 방법`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`원본 환경 목록`}),(0,f.jsx)(t.td,{children:`실제 선택하고 조회할 수 있는 대상`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`제출 값`}),(0,f.jsx)(t.td,{children:`기존 실행 계약의 원본 환경 이름`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`설정이 잘못됐을 때도 표시 설정의 오류와 core 배포 설정의 오류를 나눴습니다. 편의 설정은 경고와 평면 목록으로 돌아갈 수 있지만, 실행할 설정까지 잘못된 일을 정상처럼 넘기는 것은 다른 문제였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`환경을 바꾸면 이전 조회의 권한도 끝난다`}),`
`,(0,f.jsx)(t.p,{children:`A의 배포 정보를 읽는 동안 사용자가 B로 바꿀 수 있었습니다. 선택 상자는 B인데 늦은 A의 응답이 화면을 채우면, 화면의 의미와 실제 대상이 달라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`환경 변경 때 현재·최근 결과와 pending request를 비웠습니다. 응답을 적용할 때는 요청 식별자와 요청했던 원본 환경이 지금 선택과 같은지 함께 확인했습니다. 같은 환경에서도 새 refresh가 시작될 수 있어 환경 이름만 비교하는 것으로는 부족했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`Rollback에서는 조회 이력뿐 아니라 선택한 배포 대상도 초기화했습니다. 늦은 조회를 막았더라도 A에서 고른 실행 입력을 B에서 들고 있으면 문제가 남습니다. 조회 데이터와 다음 명령의 대상이 같은 환경을 설명해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`정상 화면이 새 구현의 성공을 증명하지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`새 설정이 들어가도 제품 전용 구 분기가 남아 있으면 같은 화면이 나올 수 있었습니다. 그 상태에서는 새 선언이 잘못돼도 이전 코드가 성공을 대신 설명합니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 서비스 저장소의 선언과 공용 도구의 전용 분기 제거가 함께 들어간 버전을 검증 대상으로 다시 정했습니다. 배포는 직접 진행해 환경 선택과 실제 배포를 확인했습니다. 보이는 선택기의 모양뿐 아니라 원래 배포 대상이 요청에 남는지를 확인하는 작업이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속에서는 Home·Lock·Rollback의 탐색도 같은 계약으로 연결했습니다. Lock 환경별 탐색에 대한 동료의 감사가 있었고, 최근 배포 대상을 사용한 rollback도 확인했습니다. 오래된 SHA의 branch guard는 DevOps 동료의 작업이었습니다. 제가 바꾼 선택기와 배포 backend의 안전장치를 같은 성과로 합치지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`편의를 더하면서 실행의 의미는 그대로 두기`}),`
`,(0,f.jsx)(t.p,{children:`저장소는 표시 규칙을 선언할 수 있게 됐고, 도구는 제품 이름을 덜 알아도 실제 환경을 보여줄 수 있었습니다. 선택 변경과 늦은 응답을 함께 다뤘고, 구 구현이 성공을 대신하지 못하는 조합에서 사용 제품에서의 동작을 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 이 작업을 돌아보면 두 번의 재판단이 남습니다. 리뷰에서는 편리한 화면이 공용 도구에 제품 지식을 넣고 있다는 점을 봤고, 배포 확인에서는 정상 화면을 구 코드가 대신 만들 수 있다는 점을 봤습니다. 하나는 규칙을 어디에 둘지, 다른 하나는 무엇을 성공의 증거로 볼지를 바꿨습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다음에 비슷한 편의 기능을 만든다면 화면을 어떻게 나눌지와 함께 도구가 어떤 제품 규칙을 알아야 하는지부터 적어 보려고 합니다. 이번에는 두 선택 상자를 만든 뒤 표시 규칙의 위치를 바꿨고, 검증에서도 구 코드가 성공을 대신하지 않는 조합을 골라야 했습니다. 편리해진 화면이 원래 배포 대상을 그대로 실행하는지 확인하는 데까지 작업이 이어졌습니다.`})]})}function Le(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(K,{...e})}):K(e)}var Re=e({default:()=>Be,frontmatter:()=>ze}),ze={title:`오류 로그 설계: 진단 정보와 민감 값의 균형`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`정보 설계`,role:`오류 표현 보강·공통 전송 경계 정제·예외 입력 테스트`,period:`2026`,summary:`오류가 났다는 말만 남으면 원인을 찾기 어렵고, 원문을 다 보내면 민감한 값이 섞일 수 있다. 필요한 단서와 전송 범위를 함께 다룬 이야기.`,date:`2026-09-30`,dateBasis:`context`,collection:`records`,tags:[`진단 정보`,`전송 경계`,`오류 처리`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function q(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`오류 기록을 열었는데 실패했다는 사실만 보이면, 어느 코드를 먼저 살펴볼지 정하기 어렵습니다. 실패 조건을 나타내는 코드나 설명이 있어야 조사를 시작할 수 있습니다. 객체 오류를 문자열로 바꾸는 과정에서는 이런 단서가 사라질 수 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`객체 형태의 오류를 단순 문자열로 바꾸면 `,(0,f.jsx)(t.code,{children:`[object Object]`}),`가 될 수 있습니다. 이는 오류의 설명이 아니라 자바스크립트 객체라는 표시입니다. 안에 코드와 메시지가 있어도 그 내용이 텍스트에 남지 않으면 진단 단서가 사라집니다.`]}),`
`,(0,f.jsx)(t.p,{children:`오류를 통째로 전송하는 방법에도 문제가 있었습니다. 메시지에 URL, 인증 정보, 사용자 식별값이 섞여 있으면 진단에 필요한 설명과 함께 전달될 수 있습니다. 따라서 객체 안의 코드와 설명을 읽을 수 있게 하면서도, 전송하는 값은 따로 제한해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`앞선 작업에서는 이벤트를 전송하기 전에 오류 메시지를 공통으로 정제하도록 했고, 후속 작업에서는 객체에 담긴 오류 내용을 문자열로 표현하는 처리를 보강했습니다. 원인을 찾을 단서는 남기면서 전송할 정보는 제한하되, 두 일을 하나의 문자열 변환에 맡기지는 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`Error와 객체 오류를 같은 변환으로 다루지 않기`}),`
`,(0,f.jsxs)(t.p,{children:[`오류 메시지를 만드는 함수에서 `,(0,f.jsx)(t.code,{children:`Error`}),`이면 메시지를, 문자열이면 그 값을 사용했습니다. 그 밖의 값은 JSON 직렬화를 시도했습니다. 객체에 담긴 오류 코드와 설명이 단순한 객체 이름으로 사라지지 않게 하는 처리였습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`이 과정에서도 예외가 생길 수 있습니다. 순환 참조가 있는 객체는 JSON으로 만들 수 없습니다. 그 경우에는 직렬화할 수 없다는 대체 메시지를 반환하고, 긴 결과에는 길이 제한과 잘렸다는 표시를 뒀습니다. 오류를 기록하는 코드가 또 다른 직렬화 오류를 남기며 원래 질문을 가리지 않도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`객체에 담긴 오류 코드가 보존되는 입력, 직렬화가 실패하는 입력, 긴 문자열을 테스트에 넣었습니다. 오류 정보를 문자열로 바꿔도 필요한 내용이 남는지, 메시지를 만드는 도중 오류가 발생하는 경우도 처리하는지 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`수집하는 곳에서 한 번 더 경계를 두기`}),`
`,(0,f.jsx)(t.p,{children:`공통 이벤트 수집 쪽에서는 오류 메시지 계열의 문자열 필드에 정제를 적용했습니다. 개별 오류를 기록하는 사용처마다 같은 규칙을 직접 붙이는 대신, metadata를 더해 전송할 이벤트를 만들기 전에 처리했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`안전한 오류 문맥은 유지하고, 이메일·전화번호·토큰 등 구현에서 정한 패턴은 치환하거나 메시지 전체를 가렸습니다. 인코딩이나 escape 때문에 원문에서 바로 보이지 않는 패턴도 검사하도록 했습니다. 정제 후에도 메시지가 길면 전송할 길이를 제한했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 선택에는 정보 손실의 비용이 있습니다. 민감한 값이 섞인 메시지를 가리면 원인을 좁힐 단서도 함께 없어질 수 있습니다. 그렇다고 판별하기 어려운 원문을 일단 모두 보내는 쪽으로 가지는 않았습니다. 오류 코드 같은 진단 문맥을 남길 수 있는 경우와, 메시지를 가려야 하는 경우를 나눴습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`문자열을 고치는 일이 다른 필드를 바꾸지 않도록`}),`
`,(0,f.jsx)(t.p,{children:`정제 대상은 문자열인 오류 메시지 필드로 제한했습니다. 다른 이벤트 속성을 같은 규칙으로 바꾸거나 원본 객체를 직접 수정하지 않았습니다. 정제가 필요한 값이 있으면 새 객체를 만들고, 바꿀 값이 없으면 기존 참조를 유지했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서는 일반 오류 문맥 유지, 인코딩된 민감 패턴, 긴 입력과 절단 경계, 원본 객체의 불변성을 다뤘습니다. 수집 정책이 다른 경로에서도 같은 정제 처리를 거치는지 검사했습니다. 규칙을 만드는 것과 실제 전송 지점에서 그 규칙을 쓰는 것을 함께 확인해야 했기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`객체 오류의 표현과 전송 정보를 따로 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`오류를 살피는 쪽에는 단순한 객체 이름 대신 코드와 설명을 읽을 수 있는 표현이 생겼습니다. 직렬화할 수 없는 입력에는 대체 메시지를 남기고 긴 표현은 제한했습니다. 수집 경계에서는 오류 메시지 계열 필드와 구현한 패턴에 따라 전송할 정보를 줄였습니다. 공통 정제와 표현 보강은 각 변경으로 병합됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`객체 오류의 코드와 설명을 남기면서도 전송 지점에서는 구현한 패턴에 따라 값을 가렸습니다. 표현을 보강했다고 원문을 모두 보내게 되는 것은 아니었습니다. 정제 과정에서 기존 이벤트 속성을 직접 바꾸지 않는 조건도 유지했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 돌아보면, 오류를 읽을 수 있는지와 그 내용을 전송해도 되는지는 각각 확인할 질문이었다고 생각합니다. 표현을 만드는 함수에서는 직렬화 실패와 길이를 다루고, 공통 전송 지점에서는 민감한 패턴과 다른 필드에 미치는 영향을 다뤘습니다. 한 번의 변환에 두 판단을 맡기지 않은 이유입니다.`})]})}function Be(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(q,{...e})}):q(e)}var Ve=e({default:()=>Ue,frontmatter:()=>He}),He={title:`정리본으로 연결한 이전 글: dispatch-routing-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function J(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Ue(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(J,{...e})}):J(e)}var We=e({default:()=>Ke,frontmatter:()=>Ge}),Ge={title:`다음 캠페인 참여를 만드는 추천·보너스 흐름 개발`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`추천 API·배너/카드·참여 진입·보너스/만료 표시·실험 조건의 FE 구현`,period:`2025.06–2025.07`,summary:`첫 캠페인 참여를 다음 참여로 이어 주는 추천 기능을 만들었다. 배너 한 장이 아니라 추천 조건, 새 참여 식별자, 제한 시간, 여러 화면의 보너스 표시와 실험 노출을 연결한 과정.`,date:`2025-07`,dateBasis:`context`,collection:`stories`,tags:[`제품 개발`,`추천 실험`,`기간 한정 혜택`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function Y(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리워드 광고에서 사용자는 앱을 설치하거나 게임의 미션을 수행한 뒤 리워드를 받습니다. 한 캠페인에서 의미 있는 행동을 끝냈더라도, 다른 캠페인을 찾아 다시 참여하는 일은 별개의 선택입니다. 목록을 다시 열고, 무엇을 할지 고르고, 받을 혜택을 비교해야 합니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`제품팀은 이 두 번째 선택을 돕고 싶어 했습니다. 광고주 과금 조건에 도달한 사용자에게 아직 참여하지 않은 캠페인을 추천하고, 추천을 통해 들어오면 일정 시간 동안 추가 리워드를 제공하는 기능이었습니다. 너무 일찍 다른 게임을 권하면 기존 캠페인에 깊게 참여할 시간을 나눌 수 있었습니다. 이 때문에 추천할 캠페인을 고르는 조건과 함께 `,(0,f.jsx)(t.strong,{children:`언제 추천을 보여줄지`}),`도 정해야 했습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`서버는 추천 자격과 캠페인 선정, 보너스 지급을 맡았습니다. 저는 추천 API를 화면에 연결하고, 배너를 누른 다음의 참여 진입과 혜택·남은 시간 표시, 기존 미션과 탐색 화면까지 이어지는 FE를 구현했습니다. 추천 배너에서 안내한 혜택을 사용자가 다음 화면에서도 확인하려면, 여러 화면이 같은 참여의 정보를 읽도록 연결해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`배너를 누른 뒤에도 같은 혜택을 설명해야 했다`}),`
`,(0,f.jsx)(t.p,{children:`추천 결과는 없을 수도, 하나일 수도, 둘일 수도 있었습니다. 한 캠페인은 배너로, 여러 캠페인은 카드 선택으로 표현했습니다. 추천을 열고 닫거나 캠페인을 선택할 때는 해당 캠페인 정보도 함께 기록했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`어려운 부분은 카드를 누른 다음이었습니다. 추천을 보고 일반 캠페인 주소로만 이동하면, 도착한 화면은 사용자가 어떤 경로로 들어왔는지 모릅니다. 추가 혜택을 보여줘야 하는 참여와 원래의 참여가 같은 화면에 섞입니다.`}),`
`,(0,f.jsx)(t.p,{children:`추천을 통한 진입에서는 서버에 보너스 참여 문맥을 전달하며 새 참여 식별자를 받아 이동하도록 연결했습니다. 다른 경로의 진입은 기존 동작을 유지했습니다. 도착한 미션 화면은 그 참여의 응답을 읽어 보너스 UI를 선택했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`추천 자격·캠페인 조회
  → 배너 또는 카드 선택
  → 추천 경유임을 담아 새 참여 시작
  → 해당 참여의 혜택·만료 시각 조회
  → 미션 화면과 탐색 목록에서 같은 혜택 표시
`})}),`
`,(0,f.jsxs)(t.p,{children:[`배너에서 안내한 혜택을 다음 화면에서도 보여주려면 `,(0,f.jsx)(t.strong,{children:`어떤 참여로 이동했는지`}),` 알아야 했습니다. FE에서 지급 자격을 다시 계산하지 않고, 해당 참여에 대해 서버가 내려준 정보를 다음 화면에서도 사용하도록 했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`두 개의 시계를 하나로 만들지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`이 기능에는 시간이 두 가지 있었습니다. 추천을 닫은 뒤 다시 보여주지 않을 시간과, 추천으로 참여한 캠페인의 보너스가 끝날 시간입니다.`}),`
`,(0,f.jsx)(t.p,{children:`닫힘 기록은 참여 식별자에 연결해 하루 동안 추천 재노출을 제한했습니다. 이는 사용자가 거절한 배너를 계속 열지 않기 위한 화면 규칙입니다. 반면 보너스의 남은 시간은 서버가 내려준 만료 시각으로 표시했습니다. 닫힘 기록이 있다는 이유로 혜택을 지급하거나, 배너를 다시 열었다고 혜택 시간을 새로 시작할 수는 없었습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`// 설명용 재구성. 실제 API나 저장 구조를 복사한 코드는 아니다.
const canOpenBanner = !isRecentlyDismissed(entryId);
const remaining = timeUntil(serverBonus.expiresAt);

if (remaining <= 0) {
  refreshParticipation();
}
`})}),`
`,(0,f.jsx)(t.p,{children:`만료 뒤에는 참여 데이터를 다시 읽도록 했습니다. 화면의 카운트다운이 끝난 것과 서버가 적용하는 혜택이 같아야 했기 때문입니다. 안내에는 제한 시간이 끝나면 기본 리워드가 적용된다는 의미도 담았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`추천을 다시 열지 않을 기간은 사용자의 닫기 선택에 따라 로컬에서 관리했습니다. 혜택이 유효한지는 서버의 만료 시각을 따라야 했습니다. 두 시간을 나눠 읽어야 배너를 닫거나 다시 열었을 때 지급 조건이 바뀌지 않습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`한 화면을 바꾸려다 기존 리워드의 의미도 드러났다`}),`
`,(0,f.jsx)(t.p,{children:`보너스는 새 미션 화면에서만 보이면 충분하지 않았습니다. 사용자는 탐색 목록의 캠페인 카드와 참여 중인 목록, 개별 미션에서도 받을 리워드를 비교합니다. 한곳에는 기본값, 다른 곳에는 추가 혜택이 포함된 값이 보이면 같은 캠페인을 다르게 이해하게 됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`기본 리워드와 보너스가 적용된 리워드를 구별해서 읽도록 표시 모델을 연결했습니다. 미션의 기존 리워드 값도 그 구분에 맞춰 정리했습니다. 두 값이 같을 때는 불필요한 취소선이나 할인처럼 보이는 표현을 만들지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`추천 카드에 새 UI를 추가한 뒤에는 기존 목록과 미션이 읽는 값도 확인했습니다. 서버가 계산한 혜택을 어느 화면에서든 일관되게 설명하려면 기존 표시 모델까지 연결해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`실험 조건은 라우터에서 끝나지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`후속에서는 게임 영상·일반·추천 화면의 진입 조건을 공용 라우터로 모았습니다. 같은 사용자가 게임 영상 조건과 추천 대상 조건을 동시에 만족할 수 있었습니다. 첫 구현의 조건 순서가 항상 원하는 화면을 설명하지는 못했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`게임 영상 경로를 먼저 고르고, 그다음 추천 대상, 그다음 설정된 경로를 읽도록 순서를 보완했습니다. 현재 경로와 같으면 다시 이동하지 않았고, 이동할 때는 기존 query를 이어 썼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 올바른 화면에 보냈다고 실험 노출도 맞는 것은 아니었습니다. 도착한 게임 화면에서 대상 구분 없이 추천을 조회하고 보여주던 부분을 함께 수정했습니다. 라우팅과 추천 조회·렌더링이 같은 조건을 이어서 사용해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`리뷰에서는 이미 읽은 context를 다시 조회하는 부분도 지적됐습니다. 저는 먼저 그 context를 공용 라우터에 넘기는 좁은 변경을 택했습니다. 추천 조건을 고치는 작업에 새 네트워크 계층까지 한꺼번에 도입하기보다, 실제로 중복된 조회부터 없애는 선택이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`다음 참여를 평가할 수 있는 제품으로 전달하기`}),`
`,(0,f.jsx)(t.p,{children:`추천은 새 참여 진입, 보너스와 만료 표시, 기존 목록·미션, 실험 대상의 노출까지 연결됐습니다. 6월의 후속에서는 게임 화면에서 대상 구분 없이 추천 배너가 동작하던 부분을 수정하고 배포를 보고했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이후 제품팀의 추천배너 실험 보고에는 설치당 광고주 과금 이벤트 평균과 구매 건수가 좋아졌고, 추가 리워드 비용에도 수익률을 유지했다는 평가가 담겼습니다. 추천·인센티브·서버·디자인·FE가 함께 만든 팀의 결과입니다. 제가 직접 맡은 부분은 그 전략을 실제 화면과 참여 흐름으로 전달하는 일이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업을 돌아보면 혜택을 읽고 설명하는 방식이 가장 많이 달라졌다고 생각합니다. 추천을 받았더라도 추천 경로로 참여하지 않으면 같은 혜택을 보여줄 수 없고, 추천으로 시작한 참여라도 만료 시각이 지나면 기본 리워드를 안내해야 했습니다. API를 읽는 시점부터 새 참여로 이동하는 과정, 여러 화면의 표시까지 이 조건을 연결해야 사용자가 배너에서 제안받은 혜택을 실제 참여에서도 이해할 수 있었습니다.`})]})}function Ke(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Y,{...e})}):Y(e)}var qe=e({default:()=>Ye,frontmatter:()=>Je}),Je={title:`처음 들어온 모바일 사용자에게 화면이 잘리는 이유 찾기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`외부 진입 화면 진단·레이아웃과 navigation 경계 분리·호환 처리`,period:`2026`,summary:`처음 열면 화면이 잘리는데 새로고침하면 정상이다. 같은 페이지가 다르게 보이는 이유를 광고 공간과 브라우저 진입 조건으로 나눠 살핀 과정.`,date:`2026-09-03`,dateBasis:`context`,collection:`records`,tags:[`모바일 브라우저`,`원인 진단`,`호환성`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function X(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`외부 앱의 콘텐츠 링크를 누르면 iPhone Chrome에 새 탭이 열렸습니다. 그 첫 화면에서는 콘텐츠가 잘렸는데, 같은 탭을 새로고침하면 정상으로 보였습니다. 같은 페이지라도 처음 들어오는 순간과 다시 읽는 순간의 표시가 달랐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 작은 화면에 콘텐츠가 너무 큰 것인지, 상단 광고가 늦게 붙으며 내용을 밀어낸 것인지 의심할 수 있었습니다. 이 화면에는 광고 공간도 있었으므로 실제로 살펴볼 이유가 있는 가설이었습니다. 화면 높이나 CSS를 손대면 해결될 것처럼 보이기도 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다만 새로고침만으로 정상화되는 증상은 콘텐츠 크기만으로 설명하기 어려웠습니다. 저는 CSS를 바꾸기 전에 광고가 붙는 시점과 외부 앱에서 브라우저를 처음 여는 순서를 나눠 살폈습니다. 어느 조건이 실제 화면의 차이를 만드는지 확인하려고 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`슬롯을 고친 뒤에도 남은 증상`}),`
`,(0,f.jsx)(t.p,{children:`광고 설정을 기다리는 동안 슬롯까지 사라지면, 광고가 준비된 뒤 콘텐츠가 아래로 밀립니다. 슬롯을 비동기 설정 gate 밖에 두고 최초 HTML부터 공간을 예약하도록 바꿨습니다. 광고 요청 여부는 내부에서 판단하되 그 공간은 유지하는 방식이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`슬롯을 유지하니 광고 준비 상태 때문에 레이아웃이 달라지는 경로는 줄었습니다. 하지만 외부 앱에서 처음 열 때의 화면 왜곡은 그대로 남았습니다. 슬롯 예약과 최초 진입의 표시 문제를 계속 나눠 조사해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`깨진 화면과 새로고침 뒤 정상 화면에서 viewport 높이, 문서 높이, 스크롤 위치, 배너 슬롯의 사각형을 비교했습니다. 관찰 시점의 값은 같았고, 슬롯도 이미 위쪽에 자리하고 있었습니다. 화면이 다르게 보인다는 사실을 DOM의 overflow나 슬롯 부재만으로 설명하기 어려워졌습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`CSS를 더 바꾸기 전에 진입 경계를 나누기`}),`
`,(0,f.jsx)(t.p,{children:`문제는 같은 콘텐츠에서도 외부 앱에서 새 탭으로 처음 들어오는 조건에 묶여 있었습니다. 정상 상태의 geometry를 바꾸는 넓은 CSS 수정 대신, 첫 document navigation과 후속 navigation의 차이를 살폈습니다.`}),`
`,(0,f.jsx)(t.p,{children:`관찰이 가리킨 것은 페이지가 계산한 크기와 브라우저가 실제로 보여주는 영역 사이의 차이였습니다. 특정 브라우저 내부 callback을 원인으로 확정한 것은 아니었습니다. 브라우저의 표시 단계라는 가설과, 제품에서 적용할 수 있는 호환 처리를 나눴습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`최종 구현에서는 대상 최초 진입에만 같은 origin의 경량 문서를 거쳐 원래 화면으로 돌아오게 했습니다. hydration 전에 이동하고, 경량 문서의 `,(0,f.jsx)(t.code,{children:`pageshow`}),` 또는 완료 상태를 지난 뒤 두 번의 `,(0,f.jsx)(t.code,{children:`requestAnimationFrame`}),`을 거쳐 복귀했습니다. 단순히 화면 높이를 다시 계산하는 대신 후속 문서 이동을 통과시키는 절차였습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`우회도 실행 조건과 비용을 가진다`}),`
`,(0,f.jsx)(t.p,{children:`모든 화면과 모든 브라우저를 왕복시키지는 않았습니다. 대상 콘텐츠 경로, iOS Chrome, 최초 navigation, 비어 있는 referrer 조건을 확인했습니다. 같은 URL에 대한 marker로 복귀 후 다시 우회하는 반복을 막았습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`복귀 주소는 같은 origin과 허용한 콘텐츠 경로인지 검사했습니다. `,(0,f.jsx)(t.code,{children:`replace`}),`를 사용해 경량 문서가 별도의 뒤로 가기 단계로 남지 않게 했습니다. 정상 화면으로 돌아오는 것만큼 우회가 새로운 탐색 흐름을 만들지 않는 것도 중요했습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`비용은 남았습니다. 대상 진입은 문서를 한 번 더 거치며 원래 HTML을 다시 요청할 수 있습니다. 이 절차를 제거하려면 브라우저 버전이 올랐다는 이유만으로 판단하기보다, 같은 외부 최초 진입에서 화면과 요청 흐름을 다시 비교해야 합니다.`}),`
`,(0,f.jsx)(t.h2,{children:`정상화한 경로와 아직 설명하지 못한 내부 원인`}),`
`,(0,f.jsx)(t.p,{children:`당시 실제 기기에서 확인한 대상 환경에서는, 새로고침해야 정상으로 보이던 최초 진입 화면이 정상으로 표시됐습니다. 서로 다른 대상 콘텐츠에서 이 결과를 확인했고, 슬롯 예약·제한된 bootstrap 왕복·진입과 복귀 조건 테스트를 포함한 변경도 병합됐습니다. 사용자가 콘텐츠에 처음 들어오는 경로를 정상으로 보게 한 것이 이 작업에서 확인한 화면 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정상화는 우회 절차 전체의 결과입니다. 두 프레임 대기만의 효과나 브라우저 내부 원인을 단독으로 확정한 것은 아닙니다.`}),`
`,(0,f.jsx)(t.p,{children:`제가 조사 방향을 바꾼 것은 깨진 화면과 정상 화면의 DOM 측정값이 같았기 때문입니다. 측정한 geometry가 표시 차이를 설명하지 못해, CSS 크기를 더 바꾸기보다 최초 document navigation과 후속 navigation을 비교했습니다. 실제 기기에서 확인한 정상화는 이 비교를 거쳐 적용한 우회 절차 전체의 결과로 남겼습니다. 이 경험 이후에는 새 수정안을 정하기 전에, 바꾸려는 값이 실제 화면의 차이를 설명하는지부터 확인해야 한다고 생각합니다.`})]})}function Ye(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(X,{...e})}):X(e)}var Xe=e({default:()=>Qe,frontmatter:()=>Ze}),Ze={title:`일부 참여 화면부터 시작한 프론트엔드 개발·배포 분리`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`구조 전환`,role:`제약 설명·팀/인프라 협업·정적 앱/workflow 구현`,period:`2023.12–2024.05`,summary:`화면 변경도 서버의 검토·배포를 거치던 구조에서 정적 FE 앱과 검사·배포 워크플로를 만들었다. 기존 인프라를 재사용하고 일부 상품부터 전환하며 개발 구조와 운영 부담을 나눈 과정.`,date:`2024-05`,dateBasis:`context`,collection:`stories`,tags:[`전달 구조`,`단계 전환`,`협업`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function Z(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 참여 화면의 문구나 표현을 바꾸려면 광고 서버의 리뷰·테스트·배포도 함께 거쳐야 했습니다. 화면이 서버의 HTML 템플릿 안에 있어서 FE 라이브러리와 컴포넌트를 재사용하는 데도 제약이 있었습니다. 자주 바꾸는 화면 코드와 서버 코드를 같은 경로로 전달하면서 생기는 비용이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`별도 FE 앱으로 옮기면 화면 개발의 구조를 나눌 수 있었습니다. 하지만 새 폴더와 프레임워크를 만드는 것만으로 끝나지는 않습니다. 누가 검사하고, 어떤 산출물을 어디에 전달하며, 아직 옮기지 않은 상품은 어떤 경로를 사용할지도 함께 정해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`2023년 12월부터 팀과 방향을 논의했고 2024년 1월 초기 앱을 배포했습니다. 인프라 담당자의 협업을 받아 기존 배포 경로를 연결하고 일부 상품부터 전환했습니다. 렌더링과 운영 선택을 정리한 RFC는 구현 이후인 5월에 남겼습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`앱을 분리하는 선택과 서버를 늘리는 선택`}),`
`,(0,f.jsx)(t.p,{children:`이전의 장단점을 동료에게 물었고, 기존 FE 프로젝트를 재사용하자는 추천을 받아 프론트엔드 동료들과 방향을 논의했습니다. 새 앱을 만들더라도 모노레포와 공유 패키지, 기존 인프라를 어디까지 이용할지는 함께 결정해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`Next.js를 선택했다고 요청마다 렌더링하는 새 서버까지 운영할 필요는 없었습니다. 구현은 정적 export로 파일을 만들고 기존 S3·CloudFront 배포 경로에 연결하는 방식으로 시작했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`5월 후속 RFC에서는 광고에서 진입하는 화면의 낮은 SEO 필요, 당시 FE 인력과 별도 서버의 운영 대응 부담을 함께 설명했습니다. 정적 산출물로 시작하되 이후 서버 렌더링이 필요해질 여지는 남겼습니다. 초기 논의와 구현으로 먼저 경로를 전달하고, 사용하던 구조의 이유를 후속 문서로 정리한 순서였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`Next.js를 쓰는 것과 렌더링 서버를 새로 운영하는 일을 나눠 결정했습니다. FE 개발 구조는 바꾸되 새 서버의 장애 대응과 배포까지 늘릴 필요는 없었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`검사한 파일이 실제 전달할 파일이어야 했다`}),`
`,(0,f.jsx)(t.p,{children:`새 앱에는 로컬 실행과 빌드뿐 아니라 PR 검사와 배포 워크플로가 필요했습니다. 앱과 공유 패키지 변경을 검사하고, 실제 정적 빌드 결과를 기존 저장소에 동기화한 뒤 CDN 캐시를 갱신하도록 연결했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`앱·공유 코드 변경
  → lint·format·test
  → 정적 빌드
  → 산출물 동기화
  → CDN 갱신
  → workflow의 성공·실패 보고
`})}),`
`,(0,f.jsx)(t.p,{children:`파일 업로드가 끝나도 CDN 갱신이 실패하면 전달의 마지막 단계가 남습니다. 앞 단계가 실행됐다는 사실로 전체 성공을 선언하지 않도록 workflow 상태를 연결했습니다. 이것이 업로드를 원자적으로 롤백하는 시스템을 만든 것은 아닙니다. 제가 만든 범위는 검사한 산출물의 전달 순서와 실패 보고였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`실행·검사·배포 방법을 같은 앱의 문서로 남겼습니다. 코드를 옮긴 사람만 실행할 수 있는 앱이 아니라, 다음 화면을 맡을 개발자도 변경 경로를 따라갈 수 있게 하려는 작업이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`리뷰는 실행 가능한 변경의 다른 비용을 보여줬다`}),`
`,(0,f.jsx)(t.p,{children:`초기 변경에는 앱 빌드·배포 구조와 상품 동작, 환경 설정이 함께 들어 있었습니다. 사람 리뷰에서 상품 코드와 환경 설정을 별도 PR로 나눠 달라는 요청을 받았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`상품의 행동을 읽다가 환경의 위험을 놓치거나, 환경을 보다가 상품 규칙을 놓칠 수 있었습니다. 구현이 실행된다는 사실과 동료가 이해하고 검토할 수 있는 단위는 같지 않았습니다. 처음부터 깔끔하게 분리한 경험이 아니라, 전달할 변경을 어떻게 설명해야 하는지 피드백을 받은 경험이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`인프라 담당자의 도움도 필요했습니다. 정적 파일 배포 기반을 제가 새로 만들었다고 할 수는 없습니다. 독립 앱이 생성하는 산출물을 그 기반에 연결한 개발과 협업이 제 책임이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 화면을 한 번에 옮기지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`일부 시험 상품부터 새 경로를 사용하고 기존 경로와 함께 두었습니다. 오류 페이지와 남은 상품의 진행 상태도 따로 안내했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`공존은 복잡성을 없애는 선택이 아니었습니다. 어느 상품이 어느 경로를 사용하는지 계속 설명해야 했습니다. 대신 기존 상품의 전달을 한 번에 바꾸지 않고 새 앱의 산출물을 쓰는 범위를 늘릴 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`전환 뒤에는 리워드 표시와 계측, CTA와 서버 이벤트 오류, 후속 상품을 같은 FE 환경에서 개발했습니다. 공유 컴포넌트를 추상화하고 재사용하는 변경도 이어졌습니다. 폴더 분리의 실험에서 끝나지 않고 실제 다음 개발이 사용하는 경로가 된 것입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`새 기술보다 변경을 전달할 경로가 남았다`}),`
`,(0,f.jsx)(t.p,{children:`개발자는 해당 FE 앱의 실행 환경을 준비하고, 검사·빌드한 정적 산출물을 기존 인프라로 전달할 수 있게 됐습니다. 일부 상품이 실제로 새 경로를 사용했고, 후속 상품과 공용 기능 개발이 이어졌습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정적 앱으로 시작하면 새 렌더링 서버의 운영 부담을 늘리지 않을 수 있었습니다. 반면 상품 코드와 환경 설정을 나눠 달라는 리뷰를 통해, 실행 가능한 변경이어도 검토할 때는 다른 단위가 필요하다는 것을 확인했습니다. 다음 전환에서는 코드의 위치뿐 아니라 동료가 무엇을 확인하고 어디서 다음 개발을 이어갈지도 함께 정하려고 합니다.`})]})}function Qe(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Z,{...e})}):Z(e)}var $e=e({default:()=>tt,frontmatter:()=>et}),et={title:`WebView 진입에서 페이지 이동 대신 실행 환경을 선택하기`,status:`Documented`,statusLabel:`기술 기록`,category:`product`,series:`work-evidence-2026`,role:`앱 연동 모듈·지원 기능 조회·URL 동기화·목적 화면 렌더링·공통 레이아웃 구현`,period:`2026.06`,summary:`앱 안과 외부 웹 중 실행할 화면을 고르는 중간 페이지의 전환을 없앴다. URL 갱신과 앱의 지원 기능 조회를 기다린 뒤 같은 경로에서 렌더링하고, 기존 레이아웃의 테마·광고 설정도 유지한 과정.`,date:`2026-06`,dateBasis:`context`,collection:`records`,tags:[`WebView`,`상태 동기화`,`렌더링 구조`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function Q(e){let t={code:`code`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t.p,{children:[`참여 링크를 열면 중간 단계에서 앱 안의 화면과 외부 웹 화면 중 목적지를 골랐습니다. 앱 연동 모듈(`,(0,f.jsx)(t.code,{children:`publisher`}),`)의 초기화를 기다리고, 앱이 제공하는 기능(`,(0,f.jsx)(t.code,{children:`capability`}),`)을 조회한 뒤 실행할 화면을 결정하는 흐름이었습니다.`]}),`
`,(0,f.jsxs)(t.p,{children:[`중간 단계에서 클라이언트 사이드 라우팅으로 페이지를 전환하면 목적지 컴포넌트를 마운트하는 과정이 추가됩니다. 특정 Android WebView에서 빈 화면을 재현한 동료와 조건을 살펴본 뒤, 저는 같은 경로에서 목적지 컴포넌트를 렌더링하는 PoC와 후속 구현을 진행했습니다. 이동을 생략하려면 `,(0,f.jsx)(t.strong,{children:`페이지를 이동하지 않는 대신 무엇을 더 동기화해야 하는가`}),`도 확인해야 했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`목적지보다 먼저 준비될 입력을 구별했다`}),`
`,(0,f.jsx)(t.p,{children:`publisher가 아직 준비되지 않았는데 capability를 읽거나, target이 URL에 반영되기 전에 외부 웹 모드를 렌더하면 다른 실행 환경으로 시작할 수 있었습니다. 기다릴 조건을 나누고 준비된 결과로 목적지를 선택했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`capability 조회가 실패한 경우는 외부 웹으로 연결하는 fallback을 사용했습니다. 성공·실패의 경로가 모두 같은 화면 진입을 설명해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`query는 바꾸되 pathname은 유지했다`}),`
`,(0,f.jsxs)(t.p,{children:[`다음 페이지로 이동하는 대신 같은 경로에서 목적지 컴포넌트를 렌더링했습니다. 목적 화면을 고르는 `,(0,f.jsx)(t.code,{children:`target`}),` 값을 바꿀 때는 URL의 쿼리 문자열(`,(0,f.jsx)(t.code,{children:`search`}),`)만 `,(0,f.jsx)(t.code,{children:`history.replaceState`}),`로 갱신해 `,(0,f.jsx)(t.code,{children:`pathname`}),`과 `,(0,f.jsx)(t.code,{children:`basePath`}),`를 유지했고, 갱신된 값을 읽은 뒤 올바른 화면을 렌더링했습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`target을 URL에 반영하기 전에 모드를 결정하면 이전 입력으로 다른 화면이 시작될 수 있었습니다. 그래서 URL을 바꾸고 반영된 target을 읽은 뒤에 목적지를 렌더하도록 순서를 연결했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`target을 주입한 변화 때문에 capability effect가 다시 실행되지 않도록, 그 입력에서는 target을 제외했습니다. 실행 환경을 알아내기 위한 입력과 알아낸 환경을 URL에 남기는 출력을 구별한 것입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`목적지만 렌더하면 원래 layout의 책임이 빠진다`}),`
`,(0,f.jsx)(t.p,{children:`페이지 이동을 생략하면 원래 목적지 layout을 통과하지 않습니다. 목적지 컴포넌트만 넣는 것으로는 theme과 외부 웹의 광고 설정이 따라오지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`공통 레이아웃을 재사용해 직접 렌더링할 때도 기존 구성을 유지했습니다. 목적지 페이지로 이동할 때와 같은 설정으로 실행하려면, 컴포넌트 내용뿐 아니라 기존 레이아웃이 적용하던 테마와 광고 설정도 함께 적용해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기다림과 늦은 결과를 다른 입력으로 검증했다`}),`
`,(0,f.jsx)(t.p,{children:`publisher 대기, capability 실패의 fallback, target 반영 전의 대기와 언마운트 조건을 구분했습니다. 타이머가 늦어지는 조건과 중복 BI 발행도 테스트 사례에 남겼습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`조건`}),(0,f.jsx)(t.th,{children:`지켜야 할 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`publisher가 준비되지 않음`}),(0,f.jsx)(t.td,{children:`목적지 판단을 앞당기지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`capability 조회 실패`}),(0,f.jsx)(t.td,{children:`외부 웹 fallback`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`URL target이 아직 반영되지 않음`}),(0,f.jsx)(t.td,{children:`잘못된 모드로 먼저 시작하지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`컴포넌트 종료`}),(0,f.jsx)(t.td,{children:`이후 결과가 종료한 흐름을 이어가지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`같은 진입을 다시 읽음`}),(0,f.jsx)(t.td,{children:`계측을 중복 발행하지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`이 구현은 6월에 main으로 통합됐습니다. 당시 기기의 모든 흰 화면이 없어졌거나 브라우저 엔진의 원인을 확정했다는 결과와는 구별합니다. 제가 바꾼 것은 중간 이동과 목적지 실행을 연결하는 FE 구조였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`이동을 줄이려면 없어지는 책임도 찾아야 했다`}),`
`,(0,f.jsx)(t.p,{children:`같은 경로에서 목적지를 렌더하면서 중간 이동의 hop은 없어졌습니다. 그 대신 URL이 반영될 때까지 기다리고, 원래 목적지 layout이 준비하던 theme과 광고 설정을 직접 렌더에도 연결해야 했습니다. 기다림과 준비를 어디에서 처리할지가 바뀐 구현이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업을 돌아보면, 목적지 컴포넌트를 넣는 것만으로는 이동을 생략할 수 없었다고 생각합니다. 다음에 진입 흐름을 줄일 때도 생략할 화면이 준비하던 상태와 설정을 먼저 확인하고, 늦은 결과가 종료한 흐름을 다시 이어가지 않는 조건까지 살펴보려고 합니다.`})]})}function tt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Q,{...e})}):Q(e)}var nt=e({default:()=>at,frontmatter:()=>rt}),rt={title:`묶음 응답의 순서와 부분 실패 계약 테스트`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`AI와 묶음 응답의 위치·식별 계약 테스트 보강`,period:`2026`,summary:`둘째 결과가 없다고 셋째 결과를 둘째 칸에 넣으면 다른 요청의 결과가 된다. 빈 자리까지 지켜야 하는 묶음 응답의 약속을 테스트한 이야기.`,date:`2026-10-01`,dateBasis:`context`,collection:`records`,tags:[`외부 연동`,`부분 응답`,`계약 테스트`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function it(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`A·B·C 세 요청을 묶어 보내고 각 결과를 같은 번호의 칸에 받는 경우를 생각해 보겠습니다. B의 결과가 없다고 그 칸을 지우면 C의 결과가 둘째 칸으로 당겨집니다. 사용하는 쪽이 둘째 칸을 B의 결과로 읽으면, 누락된 결과뿐 아니라 남아 있는 결과도 다른 대상에 잘못 연결됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`남은 결과가 두 개라는 것만으로는 부족합니다. 어느 요청의 결과가 없는지도 응답에서 읽을 수 있어야 합니다.`}),`
`,(0,f.jsx)(t.p,{children:`광고 공급사에 여러 요청을 묶어 보내는 adapter에서도 요청과 응답의 위치를 대응시키는 규칙이 있었습니다. adapter는 받은 소재를 각 요청의 결과로 바꾸는 중간 코드입니다. 공급사가 요청 수보다 적은 소재를 보내거나 중간 소재가 무효일 때도, 나머지를 다른 요청에 연결해서는 안 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 기존 동작을 AI와 함께 테스트로 보강했습니다. 광고가 몇 개 반환됐는지만 확인하지 않고, 비어 있는 위치와 앞뒤 요청의 식별 관계도 검사했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`없다는 결과도 자리를 가진다`}),`
`,(0,f.jsxs)(t.p,{children:[`기존 구현은 요청 수만큼 결과 배열을 만들었습니다. 유효한 소재를 받은 위치에만 결과를 넣고, 무효하거나 돌아오지 않은 위치는 `,(0,f.jsx)(t.code,{children:`nil`}),`로 남겼습니다. 일부가 비었다고 나머지 결과를 앞에서부터 채우는 방식은 아니었습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`반환된 광고에는 원래 요청의 식별자가 붙어야 했습니다. 광고가 있는지만 확인하지 않고, 중간 소재가 무효여도 뒤 소재가 원래 요청에 연결되는지 함께 검사했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`검사할 입력은 두 종류로 나눴습니다. 공급사의 소재 수가 요청 수보다 적은 경우와, 소재 수는 맞지만 중간 소재가 무효인 경우입니다. 둘 다 일부 결과가 없지만 배열이 만들어지는 경로는 달랐습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`짧은 응답과 중간의 무효 응답`}),`
`,(0,f.jsx)(t.p,{children:`첫 테스트에서는 세 요청에 두 소재만 반환하도록 했습니다. 요청 묶음의 크기가 공급사 호출에 전달되는지, 결과 길이는 여전히 세 칸인지 확인했습니다. 앞의 두 결과는 각각의 요청 식별자를 갖고, 마지막 결과는 비어 있어야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`두 번째 테스트에서는 첫째·셋째 소재는 유효하고 둘째 소재만 무효인 응답을 만들었습니다. 가운데 결과가 비어 있는지만 확인하지 않았습니다. 첫째와 셋째 결과의 식별자와 실제 소재 내용도 함께 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`설명의 핵심을 단순화하면 다음과 같습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`요청:      A       B       C
공급 응답: 소재 A   무효    소재 C
adapter:   A 결과   nil     C 결과
`})}),`
`,(0,f.jsx)(t.p,{children:`유효한 결과가 두 개라는 assertion만으로는 A와 C의 대응을 지킬 수 없습니다. 중간을 지우고 두 칸을 반환하는 구현도 개수만 보면 맞아 보일 수 있기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기존 계약을 바꾸지 않고 테스트로 남기기`}),`
`,(0,f.jsx)(t.p,{children:`새 테스트에는 부족한 응답의 마지막 빈 자리와, 중간이 무효일 때 앞뒤 결과의 식별자·소재 내용이 남았습니다. 결과를 앞에서부터 모으거나 다른 요청에 붙이는 변경은 이 조건을 만족하지 못합니다. 제품 함수는 그대로 두고, 기존 대응 관계를 확인하는 두 테스트를 추가해 CI의 테스트·린트 검사와 병합까지 마쳤습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 결과가 지키는 것은 광고 두 개의 개수보다 어느 요청의 결과가 없는지에 관한 정보입니다. 공급사의 모든 운영 응답을 확인한 것은 아니지만, 검증용 입력에서 단순 누락과 잘못된 대상 연결을 구분할 수 있게 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`부분 실패를 검사할 때 정상 결과의 개수만 세면 이런 변경을 놓칠 수 있습니다. 빈 자리를 남기는 것이 맞는 응답일 수 있고, 빈 자리를 지운 배열은 보기에는 깔끔해도 요청과 결과를 잘못 연결할 수 있습니다. AI와 테스트를 보강하면서 성공한 값의 개수와 함께 그 값이 어느 요청에 속하는지도 확인했습니다.`})]})}function at(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(it,{...e})}):it(e)}var ot=e({default:()=>lt,frontmatter:()=>st}),st={title:`공개 자료 수집에서 완전성과 운영 조건을 보기`,summary:`공개 자료를 가져오는 것과 필요한 자료가 다 모인 것은 다르다. 개인 수집 도구의 완전성과 관리 화면 재사용을 돌아본다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function ct(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`공개 자료를 모으는 개인 프로젝트에서는 요청이 성공한 뒤에도 필요한 자료가 다 모였는지 확인해야 합니다. 페이지 일부만 읽었거나 여러 공급자 중 한 곳만 실패했을 수 있기 때문입니다. 이 프로젝트의 설계 기록도 그 조건을 중심으로 다시 읽었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`자동 수집이 끝났더라도 필요한 정보가 모두 있다는 뜻은 아니었습니다. 기존 설계 기록에서 수집 결과의 완전성과 운영 조건을 함께 확인한 이유입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`관리 화면을 새로 만들지 않는 선택`}),`
`,(0,f.jsx)(t.p,{children:`자료를 읽고 수정하는 데에는 기존 관리 도구를 재사용하는 선택이 있었습니다. 화면을 별도로 만드는 부담을 줄일 수 있지만 공급자 정책·오류·권한·후속 갱신은 남습니다. UI를 빌렸다고 데이터의 계약까지 사라지지는 않습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정상적인 빈 결과와 요청 실패, 일부만 수집한 결과가 같은 성공 표시로 합쳐지지 않는지도 봐야 합니다. 오래된 집계나 재시도·알림이 실제 상태를 어떻게 설명하는지도 연결됩니다.`}),`
`,(0,f.jsx)(t.h2,{children:`가져오는 것과 쓰는 것은 다른 문제`}),`
`,(0,f.jsx)(t.p,{children:`조회한 뒤 생성하는 writer에서는 다른 실행이 그 사이에 들어올 수 있습니다. 이 문제는 외부 API가 잘 응답했는지와 별개입니다. 자료 수집의 성공만 확인해서는 저장의 중복이나 실행의 겹침을 설명할 수 없습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 개인 도구에서는 규모보다 무엇을 성공으로 확인했는지 설명하는 방법을 남기고 싶습니다. 필요한 자료가 다 모였는지와 관리 화면을 재사용해도 남는 비용, 저장 중 다른 실행이 들어오는 조건을 따로 설명해야 하기 때문입니다. `,(0,f.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`외부 결과의 완전성`}),`, `,(0,f.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`관리 UI 재사용의 비용`}),`, `,(0,f.jsx)(t.a,{href:`/logs#2026-08-31-a-job-racing-itself`,children:`겹치는 실행의 기록`}),`에서 각각의 질문을 이어 읽을 수 있습니다.`]})]})}function lt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(ct,{...e})}):ct(e)}var ut=e({default:()=>pt,frontmatter:()=>dt}),dt={title:`API 계약 테스트: 함수 예외에서 HTTP 응답까지`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`AI와 계약 테스트 보강·HTTP 검증 경계 수정`,period:`2026`,summary:`날짜가 빠진 요청을 거절하는 함수가 있어도, API가 올바른 오류를 돌려주는지는 별개다. 사용하는 쪽이 받는 결과까지 테스트 경계를 옮긴 이야기.`,date:`2026-10-01`,dateBasis:`context`,collection:`records`,tags:[`계약 테스트`,`HTTP`,`AI 협업`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function ft(e){let t={code:`code`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`통계 조회 API에는 시작 날짜와 종료 날짜가 필요했습니다. 날짜 하나가 빠진 요청은 계산 전에 거절하고, 사용하는 쪽에 이유를 읽을 수 있는 오류 응답을 돌려줘야 했습니다. 서버 함수에서 예외가 발생하는지 확인하는 것만으로는 그 응답까지 검사할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`웹 화면이나 다른 API 소비자가 받는 것은 서버 함수의 예외 객체가 아닙니다. 요청이 성공했는지 나타내는 HTTP 상태와 오류 코드·설명이 담긴 응답입니다. 소비자는 그 결과를 읽어 잘못된 입력인지 다른 실패인지 구분할 수 있어야 합니다.`}),`
`,(0,f.jsx)(t.p,{children:`AI와 만든 첫 안에서는 요청을 처리하는 view 메서드를 직접 호출했습니다. 이 방식으로 날짜가 없을 때 입력 오류가 발생하는지는 확인했습니다. 다만 HTTP 상태와 오류 JSON까지 확인하려면 함수 뒤에서 응답을 변환하는 코드도 지나야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`테스트가 지나가지 않은 코드`}),`
`,(0,f.jsx)(t.p,{children:`입력 예외를 HTTP 상태와 오류 필드가 있는 JSON으로 바꾸는 것은 middleware였습니다. view를 직접 호출하면 이 코드를 지나가지 않아, 예외는 맞게 발생해도 응답 형식이 어긋나는 변경을 놓칠 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트를 Django client의 실제 요청 경로로 바꿨습니다. 서비스가 통계를 계산하는 부분은 mock으로 두되, 요청 파싱과 입력 검증, middleware의 오류 응답은 함께 실행하도록 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`거절과 정상 전달을 각각 확인하기`}),`
`,(0,f.jsx)(t.p,{children:`입력이 부족한 경우에는 종료 날짜가 없는 요청을 보냈습니다. 응답 상태가 422이고, 입력 오류 코드와 설명이 JSON에 담기는지 확인했습니다. 서비스가 생성되지 않았다는 조건도 함께 검사했습니다. 요청을 거절하면서 뒤의 통계 조회까지 실행하는 흐름이면 안 됐기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`정상 요청에서는 네트워크·기간·캠페인 조건이 서비스에 전달되는지, 서비스의 결과가 응답 JSON으로 돌아오는지 확인했습니다. 단순히 200을 받는 것과 올바른 조회 조건을 전달하는 것은 다른 검사였습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`서비스 mock도 자유롭게 메서드를 받아주는 형태에서 `,(0,f.jsx)(t.code,{children:`autospec`}),`을 사용하는 형태로 바꿨습니다. 실제 서비스의 시그니처와 맞지 않는 호출이 테스트에서 조용히 통과하지 않도록, 외부 계산을 대체하는 mock의 모양을 실제 인터페이스에 맞췄습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`어디를 실제로 실행할 것인가`}),`
`,(0,f.jsx)(t.p,{children:`보강한 테스트는 입력이 부족한 요청의 HTTP 상태·오류 JSON과, 정상 요청의 조회 조건 전달·응답 결과를 확인합니다. 잘못된 입력에서 서비스를 만들지 않는 조건도 함께 남겼습니다. 계산 결과는 mock이지만, 요청을 사용하는 쪽이 받는 응답까지 실제 처리 경로를 지나며 검사하는 테스트가 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`두 테스트는 CI의 테스트·린트 검사를 통과해 병합됐습니다. 제품 API를 새로 만든 작업은 아닙니다. 기존 API를 바꿀 때 함수의 예외뿐 아니라 HTTP 응답도 올바른지 검사하도록 테스트 범위를 넓혔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`첫 안에서 직접 호출한 함수 뒤에는 middleware의 응답 변환이 남아 있었습니다. 테스트를 실제 요청 경로로 옮기면서 그 코드도 함께 실행하도록 했습니다. AI가 만든 테스트를 읽을 때는 assertion이 몇 개인지보다, 소비자가 받는 결과까지 필요한 코드가 실행되는지를 확인하게 된 작업이었습니다.`})]})}function pt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(ft,{...e})}):ft(e)}var mt=e({default:()=>_t,frontmatter:()=>ht}),ht={title:`외부 웹에서 앱 안으로 콘텐츠 참여 경험 확장하기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`인앱 진입·랜딩·복귀·완료 UI 통합, 서버 계약·QA·공동 상용 출시`,period:`2026.08`,summary:`SDK와 외부 참여 경로를 함께 유지하며 기존 콘텐츠의 새 인앱 흐름을 출시했다. 추적 URL·최종 랜딩·외부 폴백을 나누고, 출시 뒤 완료 기록을 할당·회차·이번 클릭에 맞춰 적용한 과정.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`제품 확장`,`앱·웹 연동`,`SDK`],updated:`2026-10-10`,lastTendedAt:`2026-10-10`};function gt(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`같은 광고 카드를 눌러도 어떤 진입점은 SDK를 사용하고, 어떤 경로는 외부 참여 페이지를 엽니다. 기존 콘텐츠에 인앱 광고 참여를 추가하려면 이후 참여 요청도 실제 실행 환경을 알아야 했습니다. 앱 호출에 실패해 외부로 열리는 경우에는 URL이 전달하는 인앱 참여 여부까지 바꿔야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 인앱 참여의 진입·랜딩·복귀·완료 UI를 맡았고 동료는 미디에이션, 즉 광고 공급사를 연결하는 계층을 리팩터링했습니다. 교차 추천은 별도 작업으로 두고 핵심 참여부터 전달하기로 했습니다. 서버·디자인·매체 앱의 역할과 연결하면서 기존 외부 경로도 유지했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`추적 링크와 사용자가 도착할 URL은 같지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`상단 카드와 오퍼월, 콘텐츠 내부 추천은 진입점별 URL 조립 규칙이 달랐습니다. 어떤 진입점에는 최종 콘텐츠 URL을 결정하는 코드(resolver)가 있지만 다른 경로에는 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`초기 FE 조립 방식을 바꾸면서, 서버가 최종 콘텐츠 URL에 인앱 표식을 넣은 뒤 추적 링크로 감싸서 내려주는 계약에 맞췄습니다. 화면에서 이미 감싸진 추적 URL을 고쳐도 모든 목적지의 콘텐츠에 같은 인앱 참여 여부가 전달된다고 볼 수는 없었습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`실제 콘텐츠 URL에 인앱 참여 여부 연결
  → 추적 URL로 감싸기
  → 사용자 진입
  → 콘텐츠가 인앱 참여 여부를 읽고 참여
`})}),`
`,(0,f.jsx)(t.p,{children:`클라이언트는 표식을 읽어 실행 방법을 정했습니다. 표식이 있다는 것만으로 실제 앱 실행이나 시청을 인증하지는 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`폴백에서는 실패한 실행의 문맥도 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`앱 인터페이스 호출에 실패해 외부 브라우저를 열면 내부 콘텐츠의 인앱 표식을 제거했습니다. 실제 실행은 외부인데 URL은 인앱이라고 말하면 다음 요청도 잘못된 조건을 읽을 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 이름의 query라고 아무 목적지에서 지우지는 않았습니다. 내부 콘텐츠의 표식만 다루고 광고주의 동명 파라미터는 보존했습니다. 열기 방식의 폴백이 광고주 URL의 의미까지 바꾸면 안 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`복귀 리스너는 화면을 열기 전에 등록했습니다. 빠르게 돌아오는 경우를 놓치지 않기 위해서였습니다. 열기에 실패하면 리스너를 해제했습니다. 화면 열기와 복귀 감시를 함께 시작하고, 열기 실패나 화면 종료 때 감시도 정리하도록 연결했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`먼저 출시한 뒤 완료 표시의 범위를 좁혔다`}),`
`,(0,f.jsx)(t.p,{children:`8월 19일 공동 상용 출시 뒤 동료들의 실제 정상 참여 확인을 받았습니다. 이후에는 완료 UI를 맞추기 위한 로컬 신호를 추가하고 적용 조건을 보완했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이전 회차에서 완료한 기록이 새 카드의 표시를 바꿀 수 있었습니다. 같은 콘텐츠라고 해도 광고 할당이 다르거나 현재 클릭보다 앞선 완료라면 이번 참여의 근거로 쓸 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`완료 기록은 다음 조건을 함께 확인하도록 좁혔습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`확인할 것`}),(0,f.jsx)(t.th,{children:`필요한 이유`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`광고 할당`}),(0,f.jsx)(t.td,{children:`같은 콘텐츠의 새 광고를 이전 기록으로 완료 처리하지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`회차`}),(0,f.jsx)(t.td,{children:`이전 시간대의 완료를 현재 회차로 이어 쓰지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`현재 클릭 이후 시각`}),(0,f.jsx)(t.td,{children:`이번에 시작하기 전의 기록을 새 결과로 읽지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`8월 하순에는 할당 조건까지 강화해 후속 통합했습니다. storage와 화면 복귀, 다른 할당·회차·이전 클릭을 무시하는 조건도 회귀 테스트에 포함했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`로컬 기록은 완료 UI를 동기화하는 데 사용했습니다. 외부 폴백에서는 서버의 전환 확인을 유지했고, 승인과 지급도 서버 상태를 따랐습니다. 빠르게 완료를 보여주는 로컬 신호를 서버 판정으로 사용하지 않도록 적용 범위를 나눴습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`새로운 실행 경로를 넣으면서 기존 참여를 지키기`}),`
`,(0,f.jsx)(t.p,{children:`사용자는 기존 콘텐츠에서 새 인앱 참여 흐름을 이용할 수 있게 됐고, 실행이 외부로 넘어가는 경로도 남았습니다. 초기에 공동 출시한 결과와 이후 완료 동기화를 보완한 결과는 단계가 달랐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 경험에서 문맥을 전달하는 범위를 더 넓게 보게 됐습니다. 인앱 표식을 붙인 URL이 실제로 외부에서 열리면 표식을 바꿔야 했고, 복귀 뒤 완료를 보여줄 때도 이번 할당·회차·클릭의 기록인지 확인해야 했습니다. 기존 제품에 실행 경로를 추가할 때는 새 경로의 정상 동작과 함께, 실패해서 이전 방식으로 돌아간 뒤 어떤 값을 읽게 되는지도 확인해야 한다고 생각합니다.`})]})}function _t(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(gt,{...e})}):gt(e)}var vt=e({default:()=>xt,frontmatter:()=>yt}),yt={title:`검색과 키보드 탐색의 행동을 나누기`,summary:`검색을 열고 닫는 순간에도 읽기는 이어진다. 입력 중 단축키와 초점 복귀, 좁은 화면의 탐색을 함께 살핀다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function bt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`이 사이트에서 검색과 키보드 탐색을 살펴보면서, 글이 있어도 원하는 글을 찾기 어려우면 읽기를 시작하기 어렵다는 점을 봤습니다. 기능을 몇 개 넣었는지보다 검색을 연 다음 어떤 동작으로 본문에 도달하는지를 따라갔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`검색을 여는 버튼만 확인해서는 부족했습니다. 결과를 골라 본문으로 이동하는 경로와 검색을 닫은 뒤 원래 위치로 돌아오는 경로도 이어서 봐야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`입력 중인 사용자에게도 같은 단축키를 적용할까`}),`
`,(0,f.jsx)(t.p,{children:`현재 코드에는 입력 대상을 보호하는 처리와 단축키, 검색 선택과 초점 복귀, 저장 실패를 다루는 경로가 있습니다. 글을 입력하는 동안의 키와 페이지를 탐색할 때의 키를 같은 방식으로 해석하면 사용자 행동을 방해할 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:`모달도 열리는 장면만 보면 동작이 단순해 보입니다. 하지만 닫힌 뒤 어디에 초점이 가는지, 결과를 키보드로 고를 수 있는지, 이동한 페이지에서 어떤 내용을 먼저 읽는지를 함께 봐야 합니다.`}),`
`,(0,f.jsx)(t.h2,{children:`구현된 분기와 읽히는 화면`}),`
`,(0,f.jsx)(t.p,{children:`작은 화면에서는 넘침과 조작 영역, 링크의 순서가 다시 문제가 됩니다. 테마 저장에 실패하거나 처음 진입할 때도 내용은 읽을 수 있어야 합니다. 코드의 분기와 브라우저에서의 동작은 각각 확인할 근거입니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`검색과 키보드 탐색은 본문 밖에 붙는 장식으로만 보기 어려웠습니다. 원하는 글을 찾은 뒤 읽고, 검색을 닫으면 원래 위치로 돌아올 수 있어야 했기 때문입니다. `,(0,f.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`이 사이트의 읽기 경로`}),`와 `,(0,f.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`한글 본문의 비교`}),`를 연결한 것도 탐색과 본문을 함께 살펴보기 위해서였습니다.`]})]})}function xt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(bt,{...e})}):bt(e)}var St=e({default:()=>Tt,frontmatter:()=>Ct}),Ct={title:`개인 채팅 앱에서 변경한 좁은 계약`,summary:`개인 채팅 앱의 두 공개 PR을 다시 읽었다. 메시지 전달과 상태 갱신, 방을 떠난 뒤 남는 연결 작업을 설명한다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`개인 PR의 선택 구현`,period:`2023`,date:`2023`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function wt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`채팅 화면은 메시지 목록처럼 보이지만, 메시지를 받는 경로와 받은 값을 반영하는 상태에 따라 동작이 달라집니다. 개인 채팅 앱의 공개 PR을 다시 읽으면서, 이 글에서는 실제로 바꾼 메시지 전달과 상태 갱신을 설명하려고 합니다.`}),`
`,(0,f.jsx)(t.h2,{children:`메시지를 받는 경로와 상태를 갱신하는 방법`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://github.com/justinjeong5/j-chat/pull/23`,children:`메시지·연결 변경 PR`}),`에서는 WebSocket transport와 메시지 전달, 화면 상태 갱신을 변경했습니다. REST로 전송한 뒤 응답 상태를 바꾸는 경로 대신 메시지 이벤트를 전달하고, 받은 메시지는 functional update로 반영하는 작업이었습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`방을 떠나도 연결의 일은 남는다`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://github.com/justinjeong5/j-chat/pull/24`,children:`방 입퇴장 PR`}),`에는 방 입장·퇴장 UI와 이벤트가 있습니다. membership API와 UI 이동에 이벤트 통지, 연결 등록과 화면 정리를 연결했습니다. 방을 떠나며 화면을 옮겨도 연결을 정리하는 작업은 따로 다뤄야 했습니다.`]}),`
`,(0,f.jsxs)(t.p,{children:[`개인 프로젝트를 소개할 때도 큰 이름보다 실제로 바꾼 동작을 남기려고 합니다. 이 두 PR에서는 메시지를 어떻게 반영하는지와 방을 떠난 뒤 연결을 어떻게 정리하는지를 함께 다뤘습니다. 업무의 `,(0,f.jsx)(t.a,{href:`/cases/latest-request-boundaries`,children:`최신 요청의 결과와 정리`}),`는 별개의 흐름이지만, 상태를 갱신한 뒤에도 남는 작업을 확인한다는 질문은 이어집니다.`]})]})}function Tt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(wt,{...e})}):wt(e)}var Et=e({default:()=>kt,frontmatter:()=>Dt}),Dt={title:`사용자가 실제로 도착한 곳을 분석할 수 있도록`,status:`Documented`,statusLabel:`계측 설계`,category:`product`,series:`work-evidence-2026`,role:`데이터 소비자 요구 협의·방문/유입 의미 정의·FE 이벤트와 진입 경로 보완`,period:`2025.09`,summary:`다음 화면으로 이동했다는 기록과 실제 도착했다는 기록은 달랐다. PM의 유입 분석 질문에서 방문 이벤트의 의미를 다시 정하고, 기존 지표를 사용하는 분석이 계속 이어지도록 한 과정.`,date:`2025-09`,dateBasis:`context`,collection:`records`,tags:[`사용자 여정`,`이벤트 계측`,`호환성`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function Ot(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`사용자가 메뉴에서 캠페인 목록을 누른 뒤, 화면이 열리기 전에 앱을 닫았다고 가정해 보겠습니다. 메뉴 클릭은 기록되지만 목록을 실제로 방문한 것은 아닙니다. 이동을 시작한 기록을 방문 수에 그대로 포함하면 이 두 행동을 구분할 수 없습니다.`}),`
`,(0,f.jsx)(t.p,{children:`PM이 목록의 유입 데이터를 분석하면서 이벤트의 출발지를 물었습니다. 어디에서 목록으로 들어왔는지 알아야 탐색 경로를 비교할 수 있습니다. 하지만 출발 화면에서 ‘이동했다’고 기록한 값을 도착 방문처럼 세면 중간에 떠난 사람도 같은 방문에 들어갑니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`저는 `,(0,f.jsx)(t.strong,{children:`도착 화면의 방문 이벤트에 출발지를 함께 남기는 것`}),`을 제안했습니다. 실제로 열린 화면에서 방문을 기록하면서 어디에서 시작한 이동인지도 읽을 수 있도록, 클릭과 방문이 각각 설명하는 행동을 나눴습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`버튼보다 도착한 화면에서 방문을 기록했다`}),`
`,(0,f.jsx)(t.p,{children:`출발 화면은 사용자의 의도를 압니다. 메뉴를 눌렀는지, 진행 중인 캠페인을 골랐는지, 다른 진입점에서 왔는지를 알고 있습니다. 반면 도착 화면은 해당 화면이 실제로 열린 시점을 압니다.`}),`
`,(0,f.jsx)(t.p,{children:`출발 화면에서 이동할 때 진입 정보를 전달하고, 도착 화면에서는 그 정보를 방문 이벤트에 함께 기록하도록 연결했습니다. 이동 중에 떠난 사용자는 도착 방문과 구분할 수 있었습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`출발: 어디에서 무엇을 눌렀는가?
  → 이동과 함께 출발 문맥 전달
  → 도착: 어느 화면을 방문했는가?
  → 그 방문의 출발 문맥을 기록
`})}),`
`,(0,f.jsx)(t.p,{children:`이 방식에서는 버튼 클릭 수와 방문 수가 달라도 됩니다. 이동 중에 이탈한 경우를 도착 방문에 넣지 않으면서, 실제 도착한 사용자의 출발지를 분석할 수 있게 하려는 계측이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`출발지는 URL에 영구히 붙어 있을 정보가 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`메뉴의 이동 정보와 다른 진입 경로에서 필요한 source를 전달했습니다. 도착 화면에서는 그 값을 방문 이벤트에 쓰고 URL에서 제거했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`출발 문맥은 이번 방문을 설명하는 값입니다. 이후 같은 화면을 다시 읽을 때도 이전 source가 남아 있으면 새 방문을 이전 이동으로 해석할 수 있습니다. 그래서 값을 전달하는 경로뿐 아니라 어느 시점에 소비하고 정리할지도 구현에 넣었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 그 의도를 설명한 재구성입니다. 실제 이벤트명이나 회사 코드는 사용하지 않았습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`const origin = readEntryOrigin();
collectVisit({ page: currentPage(), origin });
removeEntryOriginFromUrl();
`})}),`
`,(0,f.jsx)(t.p,{children:`이 정리가 모든 새로고침·뒤로가기의 중복을 해결하는 것은 아닙니다. URL의 유입 정보, 브라우저의 navigation 정보, SPA 내부 이동 상태는 생성되고 초기화되는 시점이 다릅니다. 후속에서는 같은 referrer 경로라는 이유만으로 일반 이동을 새로고침처럼 읽던 판단도 보완했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`이미 분석에 쓰는 이벤트는 깔끔하게 바꾸는 것만으로 끝나지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`방문·집중·스크롤은 같은 사용자 활동이라도 다른 질문에 답합니다. 페이지별로 어떤 행동을 수집할지 매핑하고, 실제 소비자가 읽는 의미와 맞췄습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 이벤트 이름에는 정리하고 싶은 표기도 있었습니다. 그러나 이미 분석에서 소비 중인 이름을 소스 코드의 깔끔함만 보고 바꾸면, 분석가는 변화가 실제 행동의 변화인지 계측의 변경인지 다시 구분해야 합니다. 기존 이름의 호환성을 유지하면서 새 문맥을 연결했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`메뉴뿐 아니라 진행 중인 항목과 다른 진입 경로에서도 source가 전달되는지 확인했습니다. 대표 경로 하나만 연결하면 나머지 방문의 문맥이 빠지거나 특정 경로의 유입처럼 읽힐 수 있기 때문입니다. 수집 함수를 수정한 뒤에는 실제로 그 함수를 호출하는 경로까지 함께 살폈습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`지표 사용자의 질문이 완료 조건을 바꿨다`}),`
`,(0,f.jsx)(t.p,{children:`명세와 점검할 경로를 동료와 공유했고, 방문·유입 이벤트의 연결과 후속 판단을 코드에 반영했습니다. 동료는 점검 덕분에 지표를 믿고 볼 수 있겠다는 반응을 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 반응이 모든 방문의 정확도를 보증하는 것은 아닙니다. 대신 무엇을 방문으로 읽고 어디에서 온 방문인지, 기존 분석과 무엇이 이어지는지를 서로 설명할 수 있게 된 변화는 분명했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업에서는 이벤트가 전송되는지와 함께 PM이 그 기록으로 유입 경로를 비교할 수 있는지 확인했습니다. 출발 화면이 아는 정보는 도착 방문에 연결하고, 소비한 source는 URL에서 정리했습니다. 이미 분석에 쓰이던 이름도 유지해, 계측 변경이 기존 지표의 해석을 흔들지 않도록 했습니다. 이 일을 돌아보면 계측의 완료를 이벤트 발행만으로 설명하기는 어렵다고 생각합니다. 데이터를 읽는 사람의 질문에서 시작해, 출발과 도착에서 아는 사실이 분석에 어떻게 연결되는지까지 확인한 경험이었습니다.`})]})}function kt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Ot,{...e})}):Ot(e)}var At=e({default:()=>Nt,frontmatter:()=>jt}),jt={title:`비동기 요청의 경쟁 조건과 상태 소유권`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`비동기 설계`,role:`요청/상태 경계 구현·취소/세대 처리·mock 테스트 구성`,period:`2026`,summary:`아까 광고가 없었다는 결과로 지금의 보너스 제안까지 결정해도 될까? 새로 조회한 결과가 이전 작업에 밀리지 않도록 다룬 이야기.`,date:`2026`,dateBasis:`context`,collection:`records`,tags:[`최신성`,`취소`,`테스트 경계`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function Mt(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`보너스 광고를 제안할 때는 먼저 지금 보여줄 후보가 있는지 조회합니다. 여기서 '준비'는 후보를 읽고 이번 제안이 가능한지 판단하는 과정입니다. 광고가 없으면 제안을 이어갈 재료도 없으므로, 어느 시점의 결과를 사용할지가 중요했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그런데 미리 읽었을 때 광고가 없었다는 결과가, 나중에 다시 판단할 때도 광고가 없다는 뜻은 아닙니다. 기본 보상 화면에서 나오는 시점에 추가 제안이 광고를 요구하고 이전 준비가 empty라면, 새 할당을 조회해야 하는 흐름이 있었습니다. 이전의 빈 결과를 그대로 쓰면 그사이에 생긴 후보를 읽지 못할 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`새 요청을 보내는 것만으로 끝나지도 않았습니다. 이전 요청이 아직 진행 중인데 새 조회를 시작하면, 둘의 결과가 도착하는 순서는 시작한 순서와 다를 수 있습니다. 먼저 시작한 작업이 나중에 끝나면서 새 준비의 상태를 바꾸거나 정리해버리면, 새로 읽은 결과가 있어도 그 상태를 유지하지 못합니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 다시 조회할 시점과 그 결과를 현재 상태에 반영할 조건을 함께 정했습니다. 새 요청을 보내더라도 이전 요청의 응답이나 정리 작업이 나중에 새 준비를 바꿀 수 있었기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`모든 조회의 캐시 정책을 바꾸지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`보너스 판정에 필요한 요청을 일반 광고 조회와 분리했습니다. 공용 fetcher와 일반 Query 정책은 유지하고, 보너스 세션이 요구하는 최신성 조건을 그 범위에 넣었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이번 요구는 보너스 회차의 갱신 시점에 새 할당을 읽는 것이었습니다. 일반 조회까지 같은 갱신 정책으로 바꾸기보다, 그 시점을 아는 보너스 세션에서 요청을 직접 다루도록 했습니다. 공용 fetcher는 네트워크 호출을 맡고, 어떤 결과를 재사용할지는 이 준비 흐름이 정했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 준비를 중복 호출하면 진행 중인 Promise를 함께 사용하도록 했습니다. 다만 강제 재조회가 필요한 경우에는 같은 결과를 기다리지 않고 새 세대로 넘어갔습니다. 중복 호출을 합치는 경우와 새 할당을 읽어야 하는 경우를 나눠 처리했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`취소와 결과 적용을 따로 보호하기`}),`
`,(0,f.jsx)(t.p,{children:`요청 키에는 보너스 회차와 광고를 요청하는 환경을 묶었습니다. 회차가 바뀌면 이전 준비를 그대로 이어갈 수 없고, 같은 회차라도 강제 재조회라면 새 시도여야 했습니다. generation은 그 시도를 구분했습니다. 키가 바뀌거나 강제로 다시 조회하면 세대를 올리고 이전 controller에 취소를 전달했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`취소 신호만으로 상태를 보호할 수는 없었습니다. 이미 도착한 결과나 이어서 실행되는 Promise 처리도 있을 수 있기 때문입니다. then·catch에서 현재 요청 키와 세대가 자신과 같은지 확인하고, 오래된 결과는 cancelled로 돌려줬습니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 후보 생성과 최종 상태 반영에도 준비 키와 세대를 다시 확인했습니다. 할당 요청이 끝나는 시점과 그 결과로 후보를 만들고 화면 상태에 쓰는 시점 사이에도 작업의 소유권을 유지해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`취소 신호를 전달한 뒤에도 then·catch가 이어질 수 있어 키·세대를 다시 확인했습니다. 이전 요청에 중단을 요청하는 처리와 그 결과를 상태에 써도 되는지 판단하는 처리를 함께 둔 것입니다. 요청이 시작될 때만 확인해서는 이후 상태 반영을 보호할 수 없었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`오래된 finally도 새 요청을 건드릴 수 있다`}),`
`,(0,f.jsx)(t.p,{children:`이전 요청이 끝나며 controller ref를 비우는 cleanup도 살폈습니다. 그사이에 새 요청이 ref를 차지했으면 이전 finally가 새 controller를 지우면 안 됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 정리할 때는 현재 활성 객체가 자기 자신과 같은 경우에만 ref를 비웠습니다. 결과의 키·세대와 정리 객체의 동일성은 서로 다른 위치에서 같은 목적을 지켰습니다. 오래된 작업이 지금 작업의 상태를 바꾸지 않도록 하는 것입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`이전 요청은 cancelled, 새 후보는 ready로 남도록`}),`
`,(0,f.jsxs)(t.p,{children:[`핵심은 응답 처리뿐 아니라 `,(0,f.jsx)(t.code,{children:`finally`}),`에도 같은 소유권 검사가 필요하다는 점이었습니다. 아래는 설명을 위한 재구성이며 실제 회사 코드가 아닙니다.`]}),`
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
`,(0,f.jsx)(t.p,{children:`후보를 준비하는 추가 비동기 단계가 있으므로 응답 직후 한 번만 비교해서는 부족합니다. 그리고 오래된 작업의 종료는 새 작업의 취소 권한을 지우면 안 됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`회귀 시나리오는 첫 요청이 진행 중일 때 강제 재조회로 두 번째 요청을 만드는 순서로 구성했습니다. mock HTTP 클라이언트는 첫 요청의 abort 신호를 받으면 AbortError로 reject합니다. 두 번째 요청에는 광고 후보가 있는 응답을 돌려주고, 두 Promise가 끝난 뒤 첫 준비가 cancelled, 새 결과와 hook 상태가 ready인지 보도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 테스트가 확인한 순서는 진행 중인 첫 요청의 취소와 새 준비의 완료였습니다. 이전 empty 응답을 새 응답 뒤에 도착시키는 순서까지 구성한 것은 아닙니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`테스트 입력·순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 요청 진행 중 강제 갱신`}),(0,f.jsx)(t.td,{children:`첫 요청에 abort, 새 세대 시작`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 mock 요청이 abort로 reject`}),(0,f.jsx)(t.td,{children:`첫 준비는 cancelled`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`두 번째 요청에 광고 후보 반환`}),(0,f.jsx)(t.td,{children:`새 준비 결과와 hook 상태는 ready`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`첫 작업의 finally 실행`}),(0,f.jsx)(t.td,{children:`새 활성 controller를 정리하지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`진행 중 Promise를 공유하는 것은 중복 호출을 합치는 정책이고, 취소 결과를 최종 성공처럼 재사용하는 것은 아닙니다. 관련 광고 세션에서도 사용자가 닫은 경우에는 다음 후보를 강제로 실행하지 않고 다시 시작할 수 있게 구분했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`바뀐 흐름에서는 보너스의 새 판정이 필요한 시점에 이전 empty 결과를 그대로 쓰지 않고 새 할당을 조회합니다. 같은 준비의 중복 호출은 진행 중인 Promise를 공유하고, 강제 갱신은 새 세대로 넘어갑니다. 일반 조회의 정책을 바꾸는 대신 이 준비 흐름이 요청과 적용·정리의 책임을 함께 갖게 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 다시 보면 응답만큼이나 오래된 finally를 살펴본 부분이 기억에 남습니다. 응답 적용 조건을 정한 뒤에도, 이전 finally가 새 controller ref를 비우면 새 요청의 취소 권한이 사라질 수 있었습니다. 결과에는 키·세대를 확인하고 정리에는 활성 객체의 동일성을 확인해, 먼저 시작한 작업이 새 준비를 건드리지 않도록 했습니다.`})]})}function Nt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Mt,{...e})}):Mt(e)}var Pt=e({default:()=>Lt,frontmatter:()=>Ft}),Ft={title:`문의 처리 완료와 다음 작업의 상태 분리`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`문의 처리 후 이동 흐름·상세 상태 초기화·gateway 조회 경로 구현`,period:`2025.05`,summary:`문의를 완료한 뒤에는 무엇을 보여줘야 할까? 다음 건으로 넘어가는 행동과, 그 조회가 실패했을 때 남길 상태를 함께 다룬 과정.`,date:`2025-05-15`,dateBasis:`context`,archived:!0,supersededBy:`/cases/cs-workflow-product`,tags:[`운영 제품`,`작업 흐름`,`조회 실패`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function It(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`문의 관리 화면에서 운영자는 한 건의 내용을 읽고 완료하거나 반려했다. 처리 버튼이 성공한 뒤에도 작업은 이어진다. 같은 문의의 결과를 확인할 수도 있고, 아직 처리하지 않은 다른 문의를 다룰 수도 있다. 화면을 어디에 남기느냐가 다음 작업의 출발점을 정한다.`}),`
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
`,(0,f.jsx)(t.p,{children:`이 흐름을 지금 돌아보면 운영 화면의 완료는 처리 요청의 성공 응답 하나로 설명되지 않는다. 그다음 사용자가 무엇을 다룰 준비가 됐는지까지 연결돼야 한다. 문의 처리와 다음 문의 준비를 나눈 것이, 버튼을 추가하는 일보다 작업의 이어짐을 제품으로 보는 관점을 남겼다.`})]})}function Lt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(It,{...e})}):It(e)}var Rt=e({default:()=>Vt,frontmatter:()=>zt}),zt={title:`정리본으로 연결한 이전 글: personal-repos-interview`,summary:`이 글의 유용한 내용은 개인 채팅 앱의 좁은 구현에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/cases/j-chat-first-production`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function Bt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/cases/j-chat-first-production`,children:`개인 채팅 앱의 좁은 구현 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Vt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Bt,{...e})}):Bt(e)}var Ht=e({default:()=>Gt,frontmatter:()=>Ut}),Ut={title:`정리본으로 연결한 이전 글: personas-debate-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function Wt(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Gt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Wt,{...e})}):Wt(e)}var Kt=e({default:()=>Yt,frontmatter:()=>qt}),qt={title:`새 보너스 상품을 실제 참여 경험으로 연결하기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`보너스 상태·광고 세션·상자 UI 개발, 서버 계약·문의·QA·출시 연결`,period:`2026.08`,summary:`참여 전에 보여줄 혜택 때문에 서버 상태 응답을 바꾸고, 회차별 완료와 광고의 진행·완료·취소를 다른 정책으로 다뤘다. 새로운 보너스를 실제 참여와 문의, 상용 출시까지 연결한 과정.`,date:`2026-08`,dateBasis:`context`,collection:`stories`,tags:[`제품 개발`,`상태 모델`,`광고 세션`],updated:`2026-10-10`,lastTendedAt:`2026-10-10`};function Jt(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`사용자가 추가 혜택을 광고를 본 뒤 결과 화면에서 처음 알게 된다면, 그 혜택을 보고 참여를 결정할 수는 없습니다. 새 보너스 기능을 만들 때 서버는 결과 응답에 추가 금액을 제공하려 했습니다. 하지만 화면에서 참여 전에 혜택을 안내하려면 이벤트 적용 여부를 그보다 먼저 알아야 했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`저는 상태 응답에도 적용 여부가 필요하다고 요청했습니다. 서버 담당자와 boolean 필드를 제공하는 계약을 맞추고, 상태·참여·리워드 결과와 상자 UI를 연결했습니다. 참여 전 안내에 필요한 값을 결과 응답보다 먼저 받아야 했기 때문에, `,(0,f.jsx)(t.strong,{children:`새 상품의 각 단계에서 필요한 정보`}),`를 먼저 맞췄습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`광고를 보고 상자를 여는 흐름에 늦은 조회와 광고 취소, 새 회차, 문의 뒤 인정 상태가 들어올 수도 있었습니다. 버튼을 누른 뒤 이 결과들이 어느 참여에 적용돼야 하는지 함께 정해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`먼저 참여 상태를 만들고 실제 실행을 붙였다`}),`
`,(0,f.jsx)(t.p,{children:`8월에는 서버 상태를 해석하는 규칙부터 만들었습니다. 광고가 필요한지, 상자를 열 준비가 됐는지, 현재 참여할 수 없는지를 화면의 행동으로 도출했습니다. 이후 실행 가능한 광고 후보와 세션을 연결하고 상자·제안 UI, 클릭과 연출 완료를 실제 참여 흐름에 붙였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그 순서는 다음처럼 이어졌습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`서버 상태 → 지금 가능한 행동
  → 광고 후보 준비와 실행 세션
  → 서버의 시청 인정·리워드 결과
  → 상자 UI와 다음 상태 조회
`})}),`
`,(0,f.jsx)(t.p,{children:`광고 SDK가 끝났다는 사실과 서버가 시청을 인정한 결과도 같은 단계는 아니었습니다. 문의를 제출한 뒤에는 상태를 다시 읽고 서버의 인정 상태를 확인해야 했습니다. 제출 성공만으로 상자 준비를 확정하지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`늦은 응답은 항상 최신의 사실이 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`광고를 마친 직후 이전에 시작한 상태 조회가 도착할 수 있었습니다. 서버 값으로 로컬 상태를 무조건 덮으면 방금 완료한 시청이 미완료로 돌아갈 수 있습니다. 반대로 로컬 완료를 무조건 지키면 새 회차에서도 이전 시청을 이어 쓰게 됩니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`초기화 시각으로 같은 회차인지 확인하고, `,(0,f.jsx)(t.strong,{children:`같은 회차의 유효한 상태에서만 진행을 보존`}),`했습니다. 새 회차나 서버 비활성화, 비정상 응답에서는 이전 완료를 그대로 이어 쓰지 않았습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`같은 회차의 지연 응답, 회차 변경, 참여 불가 응답을 서로 다른 기대 결과로 테스트했습니다. 이 판단은 UI의 진행을 맞추는 규칙입니다. 서버의 지급 정책을 클라이언트 기록으로 대신하는 것은 아니었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`광고를 다시 부르는 세 가지 이유를 구별했다`}),`
`,(0,f.jsx)(t.p,{children:`상자 앞의 광고 실행이 여러 곳에서 요청될 수 있었습니다. 요청마다 새 광고를 실행하면 같은 참여 안에서 광고가 겹칩니다. 그렇다고 모든 결과를 계속 재사용하면 사용자가 취소한 뒤 다시 시작할 방법도 사라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`세션 시작 때 실행 가능한 후보를 고정하고, 호출 시점의 상태에 따라 다르게 처리했습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`세션 상태`}),(0,f.jsx)(t.th,{children:`다음 호출의 의미`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`아직 실행 중`}),(0,f.jsx)(t.td,{children:`같은 Promise를 공유`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이미 완료`}),(0,f.jsx)(t.td,{children:`완료 결과를 재사용하고 광고 재실행 생략`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`사용자가 취소`}),(0,f.jsx)(t.td,{children:`다음 후보를 강제로 열지 않고 재시작 허용`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`진행 중의 두 호출이 같은 Promise를 받고 runner가 한 번만 실행되는 조건과, 취소 뒤 다시 실행할 수 있는 조건을 따로 테스트했습니다. 진행 중 요청을 합치더라도 취소 결과까지 계속 재사용하면 재시작을 막게 되므로 별도로 처리했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`후보를 고정하는 범위도 이 세션이었습니다. 새 회차의 판단까지 과거 후보와 완료를 이어 쓸 수는 없었습니다. 더 자세한 요청 적용·정리의 문제는 `,(0,f.jsx)(t.a,{href:`/cases/latest-request-boundaries/`,children:`비동기 요청의 소유권`}),`에서 다룹니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`검증 환경과 서버 설정도 참여 흐름의 일부였다`}),`
`,(0,f.jsx)(t.p,{children:`검증 환경에서 실제 SDK를 사용할 수 있는지 서버 담당자와 맞췄습니다. 화면이 잘 만들어졌어도 광고 실행 경로가 다른 환경에서는 같은 기능을 확인할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`문의의 외부 인입과 리워드 요청 오류도 따로 확인했습니다. 리워드 오류는 서버 설정 누락을 추적하고 담당자 조치 뒤 정상 동작을 확인했습니다. 서버 설정을 제가 바꾼 것은 아니지만, FE 오류로만 읽고 끝냈다면 다음 단계가 남았을 상황이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`참여 전 이벤트 안내에 필요한 응답을 8월 27일 맞췄고, 28일에는 QA 피드백을 수정·배포했습니다. CS·디자인·제품 담당자의 확인과 함께 실제 참여할 수 있는 핵심 흐름을 상용으로 전달했습니다. 이후에도 헤더와 다크 모드 등 후속 작업을 이어갔습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`추가 혜택을 실제로 참여할 수 있는 상품으로`}),`
`,(0,f.jsx)(t.p,{children:`상태 응답에 이벤트 적용 여부를 넣어 참여 전에 안내하고, 광고 세션을 연결해 실행과 완료·취소를 처리했습니다. 광고를 본 뒤에는 서버의 인정과 상자 결과를 읽고, 문의를 제출한 뒤에는 다시 확인하도록 했습니다. 이 흐름을 함께 연결해 새 보너스를 출시했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`결과 화면에 필요한 값만 받아서는 참여 전 혜택을 안내할 수 없었습니다. 진행 중 호출을 재사용하는 처리도 취소 뒤 재시작에는 그대로 적용할 수 없었습니다. 이런 조건을 다루면서 새 상품을 화면에 옮길 때는 사용자가 다음 행동을 결정하는 순간에 어떤 정보를 알고 있어야 하는지부터 확인하게 됐습니다.`})]})}function Yt(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Jt,{...e})}):Jt(e)}var Xt=e({default:()=>$t,frontmatter:()=>Zt}),Zt={title:`운영에 필요한 관측은 남기고 로그 처리량 줄이기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`수집 설계`,role:`진단 수집 정책·고정 표본·조사 대상 버퍼 구현, 데이터 플랫폼 이관 협의`,period:`2026.08–2026.09`,summary:`제품 KPI와 상세 진단을 다른 정책으로 나누고, 적용 뒤 진단 이벤트 약 86%·해당 BI 이벤트 처리량 약 54% 감소 보고를 받았다. 기기 고정 표본과 표본 밖 조사, 데이터 조회 이관까지 연결한 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`관측`,`샘플링`,`데이터 계약`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function Qt(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`외부 콘텐츠를 읽고 돌아왔는데 리워드 안내가 사라지는 문제가 있었습니다. 서버는 성공했지만 화면에는 결과가 없었고, 예외도 발생하지 않았습니다. 어디서 안내가 끊겼는지 확인하려면 클릭과 이동, 상태 조회와 복귀, 안내 표시의 순서를 이어서 읽어야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`QA와 상용 확인에서 이런 문제를 다루며 상세 진단을 늘렸습니다. 상태와 버튼을 자주 기록하자 수집량도 커졌습니다. 이벤트마다 같은 확률로 버리면 양은 줄겠지만 시작만 남고 완료가 빠진 시계열로는 원인을 찾기 어렵습니다. 제품 분석까지 같은 정책으로 줄이면 퍼널의 분모도 달라집니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`저는 로그를 줄인 뒤에도 동료가 이런 흐름을 조사할 수 있도록 수집 방식을 정했습니다. `,(0,f.jsx)(t.strong,{children:`줄인 뒤에도 동료가 같은 질문에 답할 수 있게 하는 것`}),`을 기준으로, 8월에는 사용 목적과 표본을 정하고 데이터 플랫폼팀과 적재·조회 이관을 진행했습니다. 9월에는 표본에 없는 기기의 문의도 조사할 수 있는 보충 경로를 구현했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`비율보다 먼저 이벤트의 소비자를 확인했다`}),`
`,(0,f.jsx)(t.p,{children:`KPI에 사용하는 analytics와 상세 diagnostic을 이벤트별로 나눴습니다. 제품 참여를 집계하는 이벤트는 샘플링에서 제외하고, 상세 상태는 표본 정책에 넣었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음부터 분류가 맞았던 것은 아닙니다. 자동 수령 성공을 진단으로 넣었다가, 해당 KPI는 이벤트 전체를 집계해야 한다는 조건을 확인하고 analytics로 되돌렸습니다. 이름에 debug가 붙었다는 이유만으로 상세 로그라고 볼 수 없었습니다. 이벤트를 만드는 코드뿐 아니라, 분석할 때 그 이벤트가 어떤 분모와 분자에 쓰이는지도 확인해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정책상 전수 수집은 클라이언트가 샘플링으로 제외하지 않는다는 의미였습니다. 전송·적재의 실패까지 없어진 것은 아닙니다. 이 두 가지를 나눠야 수집량이 줄었다는 결과도 해석할 수 있었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`이벤트를 뽑는 대신 기기를 고정했다`}),`
`,(0,f.jsx)(t.p,{children:`상세 진단은 유효한 서버 기기 ID로 고정 bucket을 계산해 2%를 선택했습니다. 선택된 기기는 매 이벤트마다 다시 뽑지 않고 관련 진단을 이어 보냈습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`KPI 이벤트             → 표본 정책 밖
상세 진단 + 선택된 기기 → 관련 흐름을 이어 수집
상세 진단 + 나머지 기기 → 기본 수집에서 제외
`})}),`
`,(0,f.jsx)(t.p,{children:`사람이나 세션 전체를 선택한 것이 아니라 기기를 고른 정책입니다. 한 기기의 흐름을 의도적으로 조각내지 않는 장점이 있지만, 모든 문의 기기가 표본에 포함되지는 않습니다. 그 비용을 숨기지 않고 이후 추가 조사 경로로 보완했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`자주 발생하는 raw, 즉 상세 상태 로그는 전환 지점의 compact 요약과 연결했습니다. 이벤트 스키마 버전·전환 ID·발생 시각을 한 번 만들어 두 표현이 같이 쓰도록 하고, 상세만 표본으로 전환했습니다. 요약 이름만 바꾸는 것으로는 해당 상세가 어느 전환에 속하는지 대조할 수 없었기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`조사 대상 판정이 늦으면 어디까지 기다릴까`}),`
`,(0,f.jsx)(t.p,{children:`표본 밖에서 문의가 들어올 수 있습니다. 조사·내부 검증 대상을 기능 플래그로 추가 수집하도록 했지만, 대상 판정이 첫 행동보다 늦게 도착할 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`판정을 기다리는 표본 밖 진단에는 발생 시각과 순번을 붙여 제한된 메모리 버퍼에 보관했습니다. 대상이면 그 순서로 보내고, 비대상이면 비웠습니다. 먼저 발생한 항목을 상한까지 보관하며 넘친 양은 유실 수로 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`KPI까지 이 판정을 기다리게 하지는 않았습니다. 기본 집계 이벤트를 먼저 보내고, 표본 밖의 상세 속성은 별도 보충 이벤트로 버퍼에 넣었습니다. 나중에 활성화되면 같은 correlation ID로 상세를 보냈습니다. 이 식별자는 먼저 보낸 이벤트와 뒤의 상세가 같은 사건임을 잇는 단서입니다. 집계의 시점과 상세를 수집할 자격을 분리한 것입니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`KPI 기본 이벤트 → 즉시 발행
  └─ 상세 수집 판정 대기
       ├─ 활성 → 같은 상관 식별자로 상세 보충
       └─ 비활성 → 보관한 상세 폐기
`})}),`
`,(0,f.jsx)(t.p,{children:`KPI의 기본 이벤트가 먼저 나가며 상세 snapshot을 포함하지 않는 조건, 활성 판정 뒤 보충 이벤트가 같은 식별자를 가진 조건을 테스트에 남겼습니다. 다른 검사에서는 상한 100인 버퍼에 102개를 넣어 100개와 초과 2개를 구별했습니다. 이 숫자는 테스트 입력이며 실제 사용자 유실률이 아닙니다.`}),`
`,(0,f.jsx)(t.p,{children:`버퍼는 페이지가 살아 있는 동안 판정을 기다리는 구간을 위한 것입니다. 종료한 페이지의 모든 과거 로그를 복구하거나 영속 큐처럼 무한히 보관하는 설계는 아니었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`보내지 않는 것과 보내지 못한 것은 다른 결과다`}),`
`,(0,f.jsx)(t.p,{children:`호출자가 발행 결과를 읽는 방식도 중요했습니다. 표본 정책으로 이벤트를 보내지 않는다고 false를 돌려주면, 호출자는 전송 실패로 읽고 같은 상태 전환을 계속 발행할 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:`정책상 제외는 처리된 결과로 반환하고 실제 전송 함수인 sender의 실패는 실패로 남겼습니다. 상태·페이지 효과를 기록하는 호출자는 처리된 결과일 때만 중복 발행을 막는 마지막 상태를 갱신했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`if (excludedByPolicy(event)) return true;
return sender.send(event);
`})}),`
`,(0,f.jsx)(t.p,{children:`위 코드는 반환값의 의미를 설명하기 위한 재구성입니다. true는 최종 적재의 성공 영수증이 아니라 이 발행 시도를 처리했다는 값입니다. 상한과 판정만 정하는 것으로 끝내지 않고, 정책을 사용하는 호출자까지 같은 의미로 읽도록 한 변경이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`수집과 조회의 부담은 다른 곳에서도 생겼다`}),`
`,(0,f.jsx)(t.p,{children:`클라이언트는 기존 전송 API와 이벤트 계약을 유지했습니다. 일반 분석이 상세 진단까지 함께 스캔하는 부담은 표본만으로 끝나지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`데이터 플랫폼팀에 진단 type 규칙·보관주기·기존 계약 보존과 전용 적재·조회 분리를 제안했습니다. 플랫폼팀은 적재·뷰·백필·정합성 확인을 맡았습니다. 저는 관리하던 조회의 소스를 옮기고 다른 조회의 사용 여부를 소유자에게 확인해 교체와 정리를 마쳤습니다.`}),`
`,(0,f.jsx)(t.p,{children:`8월 적용 후 데이터 플랫폼 담당자는 당시 실측에서 진단 이벤트 약 86%, 해당 BI 이벤트 처리량 약 54% 감소를 보고했습니다. 2%에서 역산한 값이나 청구 비용 절감률은 아닙니다. 9월의 추가 조사 경로가 이 앞선 수치를 만든 것처럼 합치지도 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`양을 줄인 뒤 무엇을 읽을 수 있는가`}),`
`,(0,f.jsx)(t.p,{children:`동료는 로그가 없었으면 디버깅하기 어려웠을 것이라고 반응했습니다. 그 관찰과 수집량 보고 사이에서 남긴 결과는, KPI의 집계와 선택된 기기의 상세 흐름을 다른 정책으로 다루고 표본 밖 조사도 별도 경로로 받을 수 있는 구조였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`자동 수령 성공을 analytics로 되돌린 일은 이벤트 이름만으로 수집 정책을 정할 수 없다는 것을 보여줬습니다. 만드는 쪽에서는 상세 진단으로 분류했지만, 소비자는 제품 참여를 계산할 때 그 기록을 사용하고 있었습니다. 그래서 줄여도 되는 이벤트인지 판단할 때는 먼저 어떤 분모와 분자로 쓰이는지 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 버퍼와 발행 결과에서도 소비 방식까지 함께 살폈습니다. 정책상 보내지 않은 이벤트를 실패로 반환하면 호출자가 다시 발행할 수 있고, 상세 판정을 기다리며 KPI를 늦추면 집계 시점이 바뀝니다. 이 경험을 돌아보면, 수집 비율을 정한 뒤에도 호출자와 데이터 소비자가 그 결과를 어떻게 읽는지 계속 확인할 필요가 있었다고 생각합니다.`})]})}function $t(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Qt,{...e})}):Qt(e)}var en=e({default:()=>rn,frontmatter:()=>tn}),tn={title:`앱과 웹에서 이어지는 리워드 제품 만들기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,scopeLabel:`제품 구축`,role:`초기 허브 핵심 FE 구축·참여와 광고 흐름 설계·QA·매체 출시 후속`,period:`2025.11–2026.09`,summary:`초기 허브의 핵심 FE를 만들고 반복 참여 제품으로 확장했다. 서버 상태·광고 실행·리워드 안내를 나누어 설계하고, 공통화할 규칙과 환경별 차이를 결정해 QA와 매체 출시까지 전달한 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`제품 설계`,`프론트엔드 아키텍처`,`출시`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function nn(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`콘텐츠를 고르고, 광고를 보고, 미션을 끝내고, 리워드를 확인한 뒤 다음 참여로 넘어갑니다. 사용자가 보기에는 한 흐름이지만, 개발할 때는 서버 상태와 광고 SDK, 앱 안의 화면과 외부 웹이 서로 다른 시점에 결과를 알려줍니다. 화면을 각각 완성하는 것만으로는 이 흐름을 끝낼 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`PlayHub는 파트너 앱에서 광고·콘텐츠·미션에 참여하고 리워드를 받는 서비스입니다. 저는 기존 미션과 공용 기능 위에 초기 허브의 핵심 FE를 구축하고, 이후 반복 참여 제품의 메인·광고 흐름과 공유 상태를 개발했습니다. 서버는 참여·지급 정책을, 제품과 디자인은 상품 규칙과 표현을 함께 정했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`초기 제품을 만들고 앱과 웹의 공통 규칙을 추출한 뒤, 실제 참여와 매체 출시까지 연결하는 과정`}),`에서 상태를 해석하는 기준을 여러 번 확인했습니다. 후속 제품의 정각 QA에서는 현재 미션이 끝나지 않았더라도 이전 시간대에 받을 리워드가 남아 있을 수 있었습니다. 사용자가 지금 할 수 있는 행동을 계산할 때 현재 화면의 완료 여부만 읽어서는 부족했던 조건입니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`카드보다 먼저 다음 행동을 연결했다`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브에는 메뉴뿐 아니라 튜토리얼, 미션 진행과 완료, 랜덤박스와 리워드 안내가 있었습니다. 기존 기능을 모두 다시 만드는 대신 새 허브가 어떤 순서로 소개하고 이어 줄지를 정해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`콘텐츠 상태와 광고 조회를 연결해 참여 가능 여부와 완료 표시를 계산했습니다. 외부 콘텐츠에서 돌아오면 서버 상태를 다시 읽고, 미완료·유효 상태인 다음 안내를 골랐습니다. 지금 조회가 준비되지 않았다면 다음 행동도 성급히 확정하지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`반대로 이미 끝난 작업의 결과는 새 조회의 수명과 분리했습니다. 랜덤박스 성공 안내를 보여주는 동안 광고 데이터가 바뀌었다고 그 안내까지 사라져서는 안 됩니다. 사용자가 확인하는 것은 새 광고가 아니라 조금 전 작업의 결과입니다. 성공·오류 상태의 안내는 저장한 결과를 사용하고, 현재 콘텐츠의 제공 여부만으로 닫히지 않게 했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`서버 상태 → 지금 참여할 수 있는 것과 다음 행동
광고 실행 → 이동·완료·복귀를 확인하는 방법
끝난 작업의 결과 → 사용자에게 아직 보여줄 안내
`})}),`
`,(0,f.jsx)(t.p,{children:`위 흐름은 실제 모듈 이름 대신 각 부분이 하는 일을 설명한 것입니다. 다음 참여를 위해 읽는 최신 상태와 방금 끝난 참여의 결과는 따로 유지해야 했습니다. 새 조회 결과에 안내를 종속시키면 재조회가 사용자가 아직 확인하지 못한 결과를 지울 수 있었기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`작은 동작을 연결한 뒤 공유할 규칙을 추출했다`}),`
`,(0,f.jsx)(t.p,{children:`처음부터 두 환경의 화면과 광고를 한 번에 묶지는 않았습니다. API와 상태 규칙을 먼저 만들고, 초기 앱 화면에서 버튼을 누른 뒤 요청·리워드 안내·재조회로 이어지는 흐름을 연결했습니다. 외부 웹을 붙이면서 진행·영상·버튼의 공통 규칙을 공유 위치로 옮겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`앱에서는 바로 처리할 수 있는 일도 외부 웹에서는 앱으로 돌아온 뒤 처리해야 했습니다. 같은 상태를 읽는 부분은 공유하되, 그 상태를 바꾸는 실행과 복귀 처리는 남겼습니다. 실제 광고와 복권, 동료의 디자인, QA 조건은 후속 단계에서 통합했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`API·상태 규칙
  → 초기 앱의 버튼·요청·안내·재조회
  → 외부 웹 연결과 공통 규칙 추출
  → 실제 광고·복권·디자인 통합
  → 참여 조건 QA와 매체 출시
`})}),`
`,(0,f.jsx)(t.p,{children:`두 화면의 공통 구조를 먼저 만들기보다 실제 실행을 연결한 뒤, 같은 입력에서 같은 행동을 계산하는 부분을 공유했습니다. 다음 기능을 붙일 때도 이 기준을 유지해 환경마다 다른 완료 신호는 별도로 남겼습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 금액처럼 보여도 같은 상태는 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`반복 참여 제품에서는 광고 참여, 미션 진행, 복권, 리워드 수령, 다음 회차 대기가 연결됐습니다. 앱 안의 화면과 외부 웹의 참여 화면도 함께 다뤘습니다.`}),`
`,(0,f.jsx)(t.p,{children:`겉모양이 달라도 같은 서버 응답에서 사용자가 할 수 있는 행동은 일치해야 했습니다. 그래서 진행 수와 완료 여부, 카운터·버튼·대기 상태를 도출하는 공통 층을 만들었습니다. 진행 수는 전체 범위 안에서 읽고, 전체가 양수일 때만 완료로 판단했습니다. 빈 목록에서 수치만 비교해 완료를 만들어서는 안 됐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`금액도 하나로 취급할 수 없었습니다. 이전 시간대의 미수령분, 현재 수령 가능분, 현재 시간대에 지급된 값은 다른 의미였습니다. 외부 웹의 카운터는 앱에서 받을 보상을, 인앱의 카운터는 이미 받은 보상을 설명할 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 차이는 정각 QA에서 드러났습니다. 이전 시간대에 일부 참여한 사용자가 새 시간대로 넘어왔고, 받을 보상이 남아 있었습니다. 현재 미션은 아직 끝나지 않았다는 이유로 복귀 수령 안내가 뜨지 않았습니다. 서버 담당자가 상태를 설명했고, 저는 기존 안내가 전체 미션 완료를 전제로 읽고 있음을 짚었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이전 보상이 있으면 현재 미션 완료와 무관하게 안내하도록 고쳤습니다. 보상 상태를 도출하는 함수와 팝업을 띄울지 판단하는 함수도 나눴습니다. 팝업에는 표시 지연과 문서 가시성, 복귀 경로의 조건이 추가되기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`아래는 핵심 조건을 줄인 설명용 코드입니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`function needsReturnGuide(state) {
  if (positiveFinite(state.previousReward)) return true;
  return state.currentCycleComplete
    && positiveFinite(state.currentReward);
}
`})}),`
`,(0,f.jsx)(t.p,{children:`버튼의 동작과 팝업의 표시를 무조건 같은 조건으로 결정하지는 않았습니다. 버튼은 참여 정책을 따르고, 팝업은 필요한 안내를 보여줍니다. 다만 둘 다 '이전 보상이 있는데 현재 미션은 미완료'라는 상태를 놓쳐서는 안 됐습니다. 수정 후 같은 조건에서 동료들이 정상 노출을 확인했고, 해당 규칙과 이를 사용하는 코드가 함께 제품에 통합됐습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`공유할 것은 화면이 아니라 규칙과 실행의 책임이었다`}),`
`,(0,f.jsx)(t.p,{children:`광고 흐름은 화면별로 복제하는 방법과 공통 흐름에 실행 전략을 주입하는 방법을 비교했습니다. 복제하면 앱과 웹을 빨리 분리할 수 있지만 후보 순회·추적·빈 광고·실패 처리가 따로 바뀔 수 있습니다. 공통 흐름을 택하면 기존 동작을 유지하면서 환경별 실행을 연결할 비용이 생깁니다.`}),`
`,(0,f.jsx)(t.p,{children:`같은 서버 상태를 읽는 규칙과 후보 순회는 공유하고, 광고를 여는 방법과 완료를 확인하는 환경 차이는 남겼습니다. SDK의 완료 신호와 외부 이동 후 복귀는 같은 사건이 아니었습니다. 닫힘만 온 경우와 공급사의 완료 조건을 충족한 뒤 닫힘이 온 경우도 다르게 읽었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`앱과 웹이 같은 함수를 사용하더라도 한쪽은 SDK 신호를 읽고 다른 쪽은 외부 복귀를 확인했습니다. 둘을 같은 완료로 처리하면 코드가 줄어도 실제 참여를 잘못 판단할 수 있었습니다. 이 선택을 돌아보면 공통화할 때는 코드가 얼마나 닮았는지와 함께, 같은 사실을 읽고 완료를 판단하는지부터 봐야 한다고 생각합니다.`}),`
`,(0,f.jsx)(t.p,{children:`환경별 실행 로직을 구현하는 것과 각 제품에서 해당 모드를 사용하는 것은 다른 단계였습니다. 상품·매체의 조건에 따라 외부 복귀 경로가 남았고, 공통 코드를 만들었다고 모든 광고가 인앱에서 끝나게 된 것은 아니었습니다. 버튼의 참여 요청을 연결하는 단계와 실제 SDK 광고를 실행하는 단계도 나눴습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`Promise의 성공과 제품의 성공을 나누었다`}),`
`,(0,f.jsx)(t.p,{children:`참여 요청의 409는 화면 상태와 서버의 현재 상태가 충돌한 결과로 반환해 재조회하도록 했습니다. 다른 기술 오류는 원래 오류로 던졌습니다. 모든 실패를 같은 토스트와 재시도에 넣으면 현재 상태를 확인할 상황과 요청 자체가 실패한 상황이 섞입니다.`}),`
`,(0,f.jsx)(t.p,{children:`비동기 라이브러리의 성공 콜백도 지급 성공의 근거로 쓰지 않았습니다. Promise가 resolve되는 결과 안에 상태 충돌이 들어올 수 있었기 때문입니다. 리워드 연출은 반환된 성공 여부와 데이터를 보고 열고, 충돌이면 재조회 후 연출 없이 종료했습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`확인한 조건`}),(0,f.jsx)(t.th,{children:`화면의 판단`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 보상 있음, 새 시간대 미완료`}),(0,f.jsx)(t.td,{children:`복귀 수령 안내`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`이전 보상 없음, 현재 일부 참여`}),(0,f.jsx)(t.td,{children:`완료 안내를 앞당기지 않음`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`참여 요청 409`}),(0,f.jsx)(t.td,{children:`재조회, 성공 연출 생략`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`요청의 기술 오류`}),(0,f.jsx)(t.td,{children:`원래 오류 전달`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`같은 화면의 클릭 잠금으로 중복 실행을 줄였지만, 서버 지급의 멱등성을 대신하지는 않았습니다. 상태 규칙의 단위 테스트로 화면의 판단을 검증하고, 실제 참여 QA에서는 실행과 결과가 이어지는지 별도로 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`출시에서는 코드보다 먼저 바뀌는 진입점이 있었다`}),`
`,(0,f.jsx)(t.p,{children:`QA에서는 참여 이력과 서버의 광고 할당 조건을 재현 조건으로 함께 맞췄습니다. 일부는 FE 수정으로 닫고, 일부는 설정·진입 제한·알려진 이슈를 담당자들과 출시 범위에 넣었습니다. 화면이 같다는 이유로 모든 관찰을 같은 버그로 읽지 않았습니다.`}),`
`,(0,f.jsx)(t.p,{children:`초기 상용 전달에서는 설정·서버·FE의 반영 순서를 설명하고 서버 완료 뒤 FE 배포를 이어 갔습니다. 실제 매체 진입과 제품 담당자의 상용 참여 확인까지 연결했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`후속 상품 교체에서는 사전 배포 후 공개 플래그를 켜는 계획을 다시 봤습니다. 새 진입점이 기존 상품의 진입점을 대체했기 때문입니다. 화면을 숨기는 플래그가 매체의 진입 경로 변경까지 숨겨 주지는 않았습니다. 그 의존성을 설명하고 매체 준비와 배포 시간을 맞추는 방향으로 계획을 바꿨습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자에게 남는 제품으로 전달하기`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브는 기존 기능을 소개하는 목록에서 실제 참여·광고·결과 안내가 이어지는 제품으로 전달됐습니다. 반복 참여로 확장하면서 공유 상태와 환경별 실행을 나눴고, 정각 상태와 충돌 응답을 다음 행동으로 연결했습니다. 흐름 문서는 팀의 QA 체크리스트 준비 자료로 다시 요청됐습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이후 상용 운영에서는 다수의 기기에서 매일 참여와 적립이 반복됐습니다. 같은 화면의 작은 누락도 여러 매체의 사용자 경험으로 이어질 수 있었습니다. 8~9월의 보너스와 콘텐츠 확장에서도 새 상품을 기존 참여와 복귀에 연결하는 일을 이어 갔습니다. `,(0,f.jsx)(t.a,{href:`/cases/playhub-bonus-session`,children:`보너스의 실행·취소·안내`}),`는 이 초기 구조가 후속 상품에서 어떤 조건을 더 만나게 됐는지를 보여줍니다.`]}),`
`,(0,f.jsx)(t.p,{children:`정각 QA에서는 현재 미션이 끝나지 않아도 이전 리워드를 안내해야 한다는 조건을 반영했고, 진입점 교체에서는 공개 플래그만으로 매체의 경로 변경을 숨길 수 없어 배포 계획을 바꿨습니다. 처음 연결한 정상 경로를 실제 참여와 출시 조건에 맞춰 다시 조정했습니다. 이 과정을 겪으며 제품의 구조는 초기 구현뿐 아니라, QA와 운영에서 확인한 조건을 반영하는 과정에서도 계속 만들어진다고 생각하게 됐습니다.`})]})}function rn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(nn,{...e})}):nn(e)}var an=e({default:()=>cn,frontmatter:()=>on}),on={title:`앱·웹 참여 화면의 공통 상태 설계`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,scopeLabel:`공통 설계`,role:`PlayHub 메인 참여·광고 흐름 설계·구현, 공유 상태 규칙과 공동 출시`,period:`2025.11–2026.06`,summary:`광고·복권·보상·다음 참여를 연결하는 제품을 만들면서, 화면은 달라도 서버 상태의 의미는 같아야 했던 이야기.`,date:`2026-06`,dateBasis:`context`,archived:!0,supersededBy:`/cases/playhub-product-architecture`,tags:[`제품 개발`,`파생 상태`,`참여 흐름`],updated:`2026-10-08`,lastTendedAt:`2026-10-08`};function sn(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고와 미션에 참여해 리워드를 받는 PlayHub에서, 미션을 일부 진행한 사용자가 정각을 넘겼다. 새 시간대에는 아직 미션을 끝내지 않았지만, 이전 시간대에 받을 보상은 남아 있었다. 화면에는 수령할 금액이 표시되는데 앱으로 돌아가 수령하라는 팝업은 뜨지 않았다. ‘현재 미션 완료’와 ‘지금 받을 보상이 있음’을 같은 조건으로 읽은 결과였다.`}),`
`,(0,f.jsxs)(t.p,{children:[`나는 PlayHub의 초기 허브부터 반복 참여 제품으로 발전하는 동안 메인 참여와 광고 흐름의 프론트엔드 설계·구현·전달을 맡았다. 이 글의 질문은 그 과정에서 좁혀졌다. `,(0,f.jsx)(t.strong,{children:`다른 화면이 같은 서버 응답을 읽을 때, 무엇을 공유해야 사용자의 다음 행동이 일치할까?`})]}),`
`,(0,f.jsx)(t.h2,{children:`화면보다 먼저 연결해야 했던 사용자 행동`}),`
`,(0,f.jsx)(t.p,{children:`초기 허브에서는 기존 콘텐츠와 미션을 메뉴·튜토리얼·보상 연출로 연결했다. 콘텐츠를 열고 외부로 이동했다 돌아오면 상태를 다시 읽어 다음 참여를 안내해야 했다. 이후에는 광고 참여, 미션 진행, 복권, 보상 수령, 다음 회차 대기가 한 흐름으로 이어졌다.`}),`
`,(0,f.jsx)(t.p,{children:`복권 화면을 그리는 것만으로 끝나는 개발은 아니었다. 광고를 닫았는지 완료했는지에 따라 참여 요청이 달라지고, 요청이 끝난 뒤 표시할 보상과 다음 미션도 달라졌다. 서버 상태 전이·보상 승인·확률 정책은 서버와 제품 담당의 영역이었다. 나는 그 의미를 화면에서 행동으로 연결하고, 디자인·광고 실행·복귀·계측과 맞추는 일을 맡았다. 초기 구현과 여러 후속 단계에는 AI 공동 작성도 포함됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`공통 규칙을 추출하되 실행 방식까지 같게 만들지는 않았다`}),`
`,(0,f.jsx)(t.p,{children:`반복 참여 제품은 앱 안의 화면과 외부 웹 참여 화면을 함께 다뤘다. 진행 단계와 다음 버튼을 각 페이지의 조건문으로 만들면 같은 응답으로도 다른 행동을 제안할 수 있었다. 그래서 카운터·진행·버튼·대기 상태를 도출하는 공통 층을 먼저 만들었다.`}),`
`,(0,f.jsx)(t.p,{children:`반면 보상을 즉시 보여주는지 앱 복귀 후 수령하는지, 광고 완료를 SDK 신호로 확인하는지 외부 복귀로 확인하는지는 실행 환경의 차이였다. 당시 광고 흐름을 복제하는 대안과 공통 흐름에 실행 전략을 주입하는 대안을 비교했다. 복제하면 앱과 외부 웹을 빨리 나눌 수 있지만 후보 순회·추적·광고 미할당·실패 처리가 각 화면에서 따로 바뀐다. 후보를 고르는 공통 흐름은 유지하고, 광고를 여는 방법과 완료를 확인하는 로직은 환경별로 나누는 쪽을 택했다.`}),`
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
`,(0,f.jsx)(t.p,{children:`먼저 API 응답에서 카운터·버튼·수령 안내를 계산하는 규칙을 정하고 초기 참여 요청을 연결했다. 그다음 앱과 외부 웹이 함께 쓸 로직을 분리하고, 실제 광고 실행과 디자인·QA를 연결했다. 버튼이 요청을 보내는 단계만으로 광고 시청까지 완성됐다고 판단하지 않았다. 나는 흐름을 문서로 정리했고, 동료의 고객 문의 경로 추가 요청을 반영했다. 이후 이 문서는 팀의 QA 체크리스트를 만드는 자료로 다시 요청됐다.`}),`
`,(0,f.jsx)(t.h2,{children:`사용자가 다음 행동을 할 수 있는 끝점`}),`
`,(0,f.jsx)(t.p,{children:`정각 문제는 수정 후 같은 재현 조건에서 동료 두 명이 안내의 정상 노출을 확인했고, 수정한 조건은 공통 로직을 사용하는 참여 화면에 반영됐다. 전체 제품에서는 동료의 진입점·문의 화면, 서버 정책, 디자인과 영상, 내가 담당한 참여·광고·공유 규칙이 합쳐져 출시됐다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 이 경험을 돌아보면 공통화의 기준은 닮은 JSX보다 같은 서버 상태에서 같은 다음 행동을 계산하는 것이었다. 화면은 달라도 이전에 받을 보상을 새 시간대의 미완료 조건 뒤에 숨겨서는 안 됐다. 프론트엔드가 서버 응답을 화면에 전달하는 과정에서, 사용자가 할 수 있는 행동을 누락시키지 않는 책임을 구체적으로 배웠다.`})]})}function cn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(sn,{...e})}):sn(e)}var ln=e({default:()=>fn,frontmatter:()=>un}),un={title:`리워드 지급과 사용자의 확인 사이에 남은 문제 풀기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`복귀 보상 안내의 미공개 기록·재생·가시성 경합 처리`,period:`2026.07`,summary:`서버의 보상 성공과 화면의 금액 공개를 나눠 기록했다. 문서 교체 뒤 안내를 복구하면서, 지연된 표시 확정이 만드는 중복도 다룬 이야기.`,date:`2026-07`,dateBasis:`context`,collection:`stories`,tags:[`복귀`,`보상 안내`,`문서 수명주기`],updated:`2026-10-09`,lastTendedAt:`2026-10-09`};function dn(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`QA와 상용 확인 중, 외부로 이동했다 돌아왔을 때 보상은 처리됐지만 안내가 사라지는 경우가 있었습니다. 고객 문의 담당자는 이 경우 받은 금액이 적어 보이거나 지급받지 못했다고 인지할 수 있다고 설명했습니다. 문의하지 않고 떠나는 사용자에게도 안내가 필요하다는 의견이었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`서버 성공 응답을 받는 함수에서 오버레이를 열더라도, 이동·복귀 중 웹 문서가 교체되면 화면 상태가 사라질 수 있었습니다. 저는 `,(0,f.jsx)(t.strong,{children:`지급 요청을 다시 보내지 않고, 아직 공개하지 않은 안내만 이어갈 방법`}),`을 구현했습니다. 성공 정보와 화면에서 공개한 시점을 나눠 새 문서가 이어받게 했습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`지급 요청을 다시 실행하는 문제로 보지 않았다`}),`
`,(0,f.jsx)(t.p,{children:`보상 처리와 보상 금액 공개는 다른 사건이었습니다. 서버가 성공했다고 해서 새 문서가 사용자에게 금액을 보여줬다는 뜻은 아닙니다. 반대로 안내가 없다고 지급 요청을 다시 보내면 표시 문제를 서버 처리 문제로 바꾸게 됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 성공 결과를 받은 시점과 안내가 공개된 시점을 따로 기록했습니다. 새 문서가 이어서 사용할 UI의 성공 정보와 표시 여부를 보관하는 기록이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`문서가 바뀌어도 미공개 성공을 이어받게 했다`}),`
`,(0,f.jsx)(t.p,{children:`성공 후 아직 공개되지 않은 marker를 저장하고 새 문서에서 읽었습니다. 아무 기록이나 복구하면 다른 사용자나 오래된 보상이 섞이므로 신원·당일·유효기간 조건을 확인했습니다. 새 문서의 상태 조회가 준비된 뒤에만 재생하도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`현재 신원과 맞지 않는 기록을 발견해도 저장된 기록을 모두 지우지는 않았습니다. 아직 신선한 다른 신원의 기록까지 소비하지 않도록, 이번 안내를 복구할 수 있는지 판단하는 조건과 저장공간을 정리하는 처리를 나눴습니다.`}),`
`,(0,f.jsx)(t.p,{children:`설명용 의사코드이며 실제 회사 코드가 아닙니다.`}),`
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
`,(0,f.jsx)(t.p,{children:`첫 복구만으로 끝나지 않았습니다. 안내가 visible 상태가 된 뒤 일정 시간 기다려 표시 완료를 기록하는 구현에서는 그 사이 문서가 교체될 수 있었습니다. 이전 문서가 공개했어도 표시 확정 timer는 취소되고, 새 문서는 미공개 marker를 읽어 같은 금액을 다시 연출했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`그래서 공개 상태와 문서 가시성이 함께 확인되는 즉시 표시 기록을 확정하도록 바꿨습니다. hidden 문서에서 오버레이 상태만 열렸다면 소비하지 않고, visible로 돌아오는 시점에 다시 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`표시 확정의 기준은 UI가 공개 상태이고 문서가 visible이라는 클라이언트 신호였습니다. 이 조건이 맞는 시점에 기록을 남겨 다음 문서가 다시 미공개 안내로 읽지 않게 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`표시 기록을 늦게 남기거나 너무 일찍 남기지 않도록`}),`
`,(0,f.jsx)(t.p,{children:`회귀 테스트는 ‘나중에 표시 기록이 생겼는가’보다 엄격한 시점을 사용했습니다. visible 상태로 안내가 열린 바로 그 시각에 표시 시각이 기록돼야 했습니다. 다시 timer를 넣으면 이 기대 결과를 만족하지 못합니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`입력·실행 순서`}),(0,f.jsx)(t.th,{children:`기대 결과`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`성공 기록→상태 준비→미공개 marker 읽기`}),(0,f.jsx)(t.td,{children:`안내 재생`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`신원·날짜·유효기간 불일치`}),(0,f.jsx)(t.td,{children:`해당 안내 재생 금지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`안내 공개, 문서 visible`}),(0,f.jsx)(t.td,{children:`같은 시점에 표시 기록 확정`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`안내 공개, 문서 hidden`}),(0,f.jsx)(t.td,{children:`표시 기록 미확정 유지`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`hidden 공개 후 visible 복귀`}),(0,f.jsx)(t.td,{children:`복귀 시 표시 기록 확정`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`저장소 읽기·쓰기 실패`}),(0,f.jsx)(t.td,{children:`실패 경로 처리, 정상 저장으로 가장하지 않음`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`가짜 시간·가시성·저장소를 쓰는 hook 테스트로, 문서가 visible이 되는 시점에 해당 안내를 이미 표시한 것으로 기록하는 조건을 검증했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록은 발견 이후의 흐름도 읽게 했다`}),`
`,(0,f.jsx)(t.p,{children:`write·replay·discard·commit·error를 나눠 진단 이벤트를 남겼습니다. 단순히 안내가 열렸다는 하나의 이벤트보다, 성공 정보가 기록됐는지 새 문서에서 재생됐는지 어떤 조건으로 버려졌는지 읽을 수 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`QA와 상용 확인에서 찾은 문제를, 구현 이후에는 이 기록으로 이어서 조사했습니다. 상태 흐름과 전후 관측을 읽을 때도 활용했습니다. 상세 로그를 어떻게 줄였는지는 `,(0,f.jsx)(t.a,{href:`/cases/playhub-diagnostic-sampling/`,children:`고정 표본 수집의 이야기`}),`에서 다룹니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`복귀한 사용자가 안내를 이어받는 변화`}),`
`,(0,f.jsx)(t.p,{children:`수정 후 저는 같은 길이의 전후 관측을 공유했고, 제품 담당자는 많이 개선됐다고 반응했습니다. 성공한 보상을 새 문서가 미공개 안내로 이어받고, 공개된 안내는 문서 교체 뒤 다시 재생하지 않도록 바꾼 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금 돌아보면 서버 성공 이후에도 안내가 유지되는 조건을 따로 다뤄야 했다고 생각합니다. 성공 결과는 존재하지만 그것을 보여주던 문서는 교체될 수 있었기 때문입니다. 미공개 기록을 새 문서에 전달하고, UI가 공개 상태이면서 문서가 visible인 시점에 소비해 안내의 유실과 재연출을 함께 다뤘습니다.`})]})}function fn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(dn,{...e})}):dn(e)}var pn=e({default:()=>gn,frontmatter:()=>mn}),mn={title:`AI 코딩 도구의 사용 한도를 믿고 확인할 수 있도록`,status:`Documented`,statusLabel:`오픈소스 기여`,category:`product`,series:`personal-projects`,scopeLabel:`오픈소스`,role:`한도 provider·모델·화면 연동, 토큰 파일과 캐시 처리 보완, 유지보수자 리뷰 대응`,period:`2026.08–2026.09`,summary:`Swift 메뉴바 앱에 새 사용량 한도를 연결했다. 갱신한 캐시는 살리되 계정 전환 뒤 이전 한도를 보여주지 않도록, 파일과 캐시의 관계를 다시 정하고 공개 리뷰의 반례를 테스트에 연결한 과정.`,date:`2026-09`,dateBasis:`context`,collection:`stories`,tags:[`오픈소스`,`외부 연동`,`캐시`,`AI 협업`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function hn(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`코딩 도구의 계정을 바꿨는데 메뉴바에는 이전 계정의 사용 한도가 남아 있다면, 사용자는 어느 숫자를 믿어야 할까요? 조회 자체는 성공했으니 오류 메시지도 없습니다. 숫자가 자연스럽게 갱신되고 있다는 점이 오히려 문제를 알아보기 어렵게 만듭니다.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar`,children:`PokeTokenBar`}),`는 AI 코딩 도구의 사용량을 보여주는 macOS 메뉴바 앱입니다. 저는 이 오픈소스에 Antigravity의 한도 조회 기능을 추가하고, 이후 토큰 파일의 형식과 만료·갱신을 보완했습니다. Swift 구현에는 AI의 도움을 받았고, 변경을 PR로 제안해 유지보수자와 리뷰를 주고받았습니다.`]}),`
`,(0,f.jsxs)(t.p,{children:[`처음에는 새 도구의 한도를 읽어 화면에 연결하는 일이었습니다. 그런데 토큰을 갱신한 캐시를 유지하려다 보니 다른 질문이 생겼습니다. `,(0,f.jsx)(t.strong,{children:`아직 유효한 캐시라도, 지금 사용자가 선택한 계정의 정보일까요?`})]}),`
`,(0,f.jsx)(t.h2,{children:`API 응답을 화면까지 연결하기`}),`
`,(0,f.jsx)(t.p,{children:`사용량과 사용 한도는 다른 정보였습니다. 로컬 기록에서 오늘 얼마나 썼는지 알 수 있어도, 계정에 남은 한도와 초기화 시각까지 계산할 수는 없었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`새 provider에서는 API 응답의 모델군과 한도 구간, 남은 비율, 초기화 시각을 읽었습니다. 이를 앱이 쓰는 모델로 바꾸고 `,(0,f.jsx)(t.code,{children:`UsageStore`}),`의 갱신 흐름, 메뉴 표시와 팝오버에 연결했습니다. 일부 값만 읽는 함수가 아니라 사용자가 기존 도구의 한도와 함께 확인할 수 있는 기능을 만드는 작업이었습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`이 연동에서는 인증을 다시 얻는 과정도 사용자 경험의 일부였습니다. 주기적인 백그라운드 갱신이 암호 입력을 계속 요구하면, 메뉴바에 조용히 두려던 앱이 작업을 방해합니다. 기존의 자동 갱신과 수동 갱신 정책을 유지하면서, 파일에 있는 토큰으로 답할 수 있는 경로를 보완했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`파일이 바뀌었는지 먼저 읽었다`}),`
`,(0,f.jsx)(t.p,{children:`외부 도구가 저장하는 토큰 파일은 형태가 한 가지가 아니었습니다. 토큰 객체 안에 값이 들어 있는 형태와 최상위에 있는 형태, 이전 형식을 구별해서 읽어야 했습니다. 계정을 바꾸면 같은 경로에 다른 토큰이 기록될 수도 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`파일을 메모리 캐시보다 먼저 읽는 기존 순서는 유지했습니다. 이번 보완에서는 그 순서에서 실제 파일의 여러 형식을 읽도록 했습니다. 캐시가 아직 유효하다는 이유만으로 바로 반환하면, 디스크에서 일어난 계정 전환을 놓칠 수 있기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`여기서 반대 방향의 문제가 나타났습니다. 앱이 refresh token으로 새 access token을 받아 캐시에 보관해도, 외부 도구의 파일에는 만료된 옛 토큰이 남을 수 있습니다. 파일을 무조건 우선하면 이미 갱신한 토큰을 다시 옛 값으로 덮어쓰게 됩니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음 보완한 조건은 만료된 파일보다 유효한 캐시를 유지하는 것이었습니다. 같은 계정이라면 필요한 동작이었지만, 만료 여부만 비교해서는 충분하지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`리뷰에서 계정 전환의 반례가 나왔다`}),`
`,(0,f.jsx)(t.p,{children:`유지보수자가 다음 순서의 문제를 재현했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`A 계정으로 조회해 유효한 캐시를 만든다
  → 파일을 만료 임박한 B 계정의 토큰으로 바꾼다
  → 다시 조회한다
  → 유효한 A의 캐시가 반환된다
`})}),`
`,(0,f.jsx)(t.p,{children:`캐시를 오래 보관해서 생긴 문제만은 아니었습니다. 파일과 캐시가 서로 다른 계정인데도, 유효기간을 기준으로 하나를 골랐다는 것이 핵심이었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`반례를 받아 `,(0,f.jsx)(t.strong,{children:`갱신된 캐시를 유지하는 조건에 같은 출처인지 확인하는 판단`}),`을 추가했습니다. access token이 같거나, 비어 있지 않은 refresh token이 같을 때 같은 출처로 취급했습니다. 갱신 과정에서 access token은 달라질 수 있으므로 access token의 일치만 확인해서도 안 됐습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`의미를 줄여 쓰면 다음과 같습니다. 실제 코드의 토큰 값 대신 조건만 남겼습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-swift`,children:`if cacheIsValid && fileTokenIsExpired && sameCredentialSource {
    return cachedToken
}
return try await resolveTokenFromFile()
`})}),`
`,(0,f.jsx)(t.p,{children:`이 조건은 토큰을 비교하는 구현상의 기준이지, 별도의 사용자 ID로 계정 전체를 검증하는 절차는 아닙니다. 다만 이전 계정의 캐시를 새 계정 파일보다 먼저 고르는 반례는 이 기준으로 구별할 수 있었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`토큰 문자열보다 갱신의 순서를 테스트하기`}),`
`,(0,f.jsx)(t.p,{children:`파일 형식을 읽는 테스트만으로는 이 문제를 설명하기 어려웠습니다. 같은 파일 경로를 두 번 읽고, 그 사이에 계정과 유효기간이 바뀌어야 했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`테스트에서는 A 계정으로 캐시를 만든 뒤 B 계정 파일로 교체해 이전 캐시가 반환되지 않는 조건을 남겼습니다. 토큰 갱신에는 `,(0,f.jsx)(t.code,{children:`URLSession`}),`을 주입하고 mock HTTP 응답으로 새 토큰을 받은 다음, 후속 조회에서도 갱신한 캐시를 유지하는 흐름을 확인하도록 했습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`두 검사는 서로 반대 방향을 지켰습니다. 계정이 바뀌었을 때는 이전 캐시를 버려야 하고, 같은 계정의 토큰을 갱신했을 때는 새 캐시를 살려야 했습니다. 한쪽만 고치면 다른 쪽을 다시 깨뜨릴 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`리뷰 중에는 설명도 좁혔습니다. 자동 경로에서 인증창을 피하는 것과 모든 환경에서 사용자 개입이 사라지는 것은 같지 않았습니다. 수동 갱신의 인증 경로는 남아 있었고, 처음의 넓은 표현보다 어떤 경로에서 무엇을 보장하는지 설명하는 편이 정확했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`공개 버전으로 전달하고 남은 기준`}),`
`,(0,f.jsxs)(t.p,{children:[`새 한도 기능은 `,(0,f.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar/pull/210`,children:`#210`}),`, 파일 형식과 갱신·계정 전환 보완은 `,(0,f.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar/pull/274`,children:`#274`}),`로 병합됐습니다. 각각 `,(0,f.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar/releases/tag/v2.5.2`,children:`v2.5.2`}),`와 `,(0,f.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar/releases/tag/v2.5.4`,children:`v2.5.4`}),`의 공개 버전에 포함됐습니다. 기존 앱에서 새 도구의 한도를 확인할 수 있게 했고, 같은 계정의 갱신과 다른 계정으로의 전환을 서로 다른 조건으로 다루게 됐습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`이번 기여에서 가장 기억에 남는 것은 유지보수자의 재현이 캐시의 조건을 바꾼 장면입니다. AI를 활용해 구현을 준비한 뒤에도, 다른 사람이 만든 입력 순서를 받아 조건과 테스트를 고치는 과정이 필요했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`돌아보면 캐시를 재사용할 때는 아직 쓸 수 있는지와 함께, `,(0,f.jsx)(t.strong,{children:`지금 읽으려는 대상의 값인지`}),`도 확인해야 했습니다. 새 provider를 붙이는 작업이 그 두 가지를 나누어 생각하는 경험으로 남았습니다.`]})]})}function gn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(hn,{...e})}):hn(e)}var _n=e({default:()=>bn,frontmatter:()=>vn}),vn={title:`여러 업무 기록을 읽는 경로로 연결하기`,summary:`사실을 지켜 쓴 기록도 보고서처럼 읽힐 수 있었다. 경험을 찾는 입구와 한 글을 따라 읽는 흐름을 다시 정리한다.`,status:`Documented`,statusLabel:`설계/구현 기록`,category:`builder-log`,role:`설계와 source의 기록`,period:`2026`,date:`2026`,dateBasis:`context`,updated:`2026-10-01`,lastTendedAt:`2026-10-01`,tags:[`설계`,`경계`]};function yn(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`이번 사이트 개편에서는 내용의 사실성을 먼저 지키려 했습니다. 근거와 미확인 범위를 앞에 두고 같은 안내를 반복했더니, 실제 업무보다 조사 보고서를 읽는 모양이 됐습니다. 사실을 남긴 뒤에도 그 일을 따라 읽을 수 있게 문장을 정리할 필요가 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`지금은 경험을 멋지게 요약하는 문장보다, 독자가 어떤 질문으로 들어와 어느 일을 읽을 수 있는지부터 다시 보고 있습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`경력을 바꾸지 않고 읽는 질문을 바꾸기`}),`
`,(0,f.jsx)(t.p,{children:`제품의 행동, 외부 응답의 계약, 기술 변경의 비용을 세 입구로 연결했습니다. 같은 사건이 여러 경로에 있을 수 있습니다. 다른 이력을 만들어 채우는 대신 같은 사실의 서로 다른 면을 읽는 구조입니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 React·Vite·MDX 구조는 유지했습니다. 글과 메타데이터는 콘텐츠 파일에, 표현은 페이지 컴포넌트에 둡니다. 글을 통합할 때는 원래 주소를 버리지 않고 정리본으로 안내하고, 목록·검색에서는 현재 글과 통합된 안내를 구분했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록이 이야기로 읽히도록`}),`
`,(0,f.jsx)(t.p,{children:`업무 글에는 문제와 실제 선택·협업·구현이 먼저 나오도록 다시 썼습니다. 글마다 검증 보고서처럼 붙였던 안내를 빼고, 당시의 고민과 구현 과정을 본문에서 이어갈 수 있도록 다듬었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`읽기 경로와 검색·링크, 생성된 HTML을 검사하고 실제 게시 사이트에서도 글을 열어봅니다. 그다음에는 직접 읽으며 어색한 문장과 끊기는 흐름을 다시 고칩니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`이 사이트가 소개 문장을 모아 둔 곳보다는 일을 읽고 질문할 수 있는 공간이기를 바랍니다. 그래서 읽는 입구와 한 글의 흐름을 함께 정리하고 있습니다. `,(0,f.jsx)(t.a,{href:`/essays/why-not-traditional-resume`,children:`기록을 먼저 연결하는 이유`}),`는 그 목적을, `,(0,f.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`파일 기반 콘텐츠`}),`는 편집하면서 유지할 구성을 설명합니다.`]})]})}function bn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(yn,{...e})}):yn(e)}var xn=e({default:()=>wn,frontmatter:()=>Sn}),Sn={title:`AI와 함께 운동 코칭 앱을 기획하고 완성하기`,status:`Documented`,statusLabel:`개인 제품 개발`,category:`product`,series:`personal-projects`,scopeLabel:`개인 제품`,role:`제품 범위와 규칙 정의, 실제 사용 피드백, AI 구현·구조 전환의 요구사항과 검증 기준 설정`,period:`2026.10.08–2026.10.11`,summary:`오늘 할 운동부터 세트 기록, 다음 계획과 성장 확인까지 이어지는 앱을 만들었다. AI와 제품을 다듬고, 기존 기록과 사용 경험을 보존하며 Next.js로 전환해 브라우저·배포 환경에서 검증한 과정.`,date:`2026-10-11`,dateBasis:`context`,collection:`stories`,tags:[`개인 제품`,`제품 설계`,`Next.js`,`데이터 이전`,`AI 협업`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function Cn(e){let t={a:`a`,h2:`h2`,p:`p`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`턱걸이 30회를 목표로 운동하려면 횟수를 적는 것 외에도 기억할 것이 있습니다. 오늘은 맨몸과 중량 중 무엇을 해야 하는지, 지난번에는 어느 무게로 몇 세트를 끝냈는지, 다음에는 횟수나 중량을 올려도 되는지입니다. 운동을 기록한 뒤에도 이 판단을 제가 다시 해야 한다면, 앱은 메모장 역할에서 크게 벗어나지 못합니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`제가 원한 `,(0,f.jsx)(t.a,{href:`https://pullup-30-coach.vercel.app/`,children:`풀업 30`}),`은 `,(0,f.jsx)(t.strong,{children:`오늘 할 운동을 보고, 수행을 남기면 다음 계획과 성장 확인까지 이어지는 개인 코칭 앱`}),`이었습니다. AI와 대화하며 HTML·JavaScript 기반 PWA를 만들고 직접 확인하면서 다듬었습니다. 이후 기존 동작과 데이터를 유지하는 조건으로 Next.js·React·TypeScript 전환까지 진행했습니다.`]}),`
`,(0,f.jsxs)(t.p,{children:[`처음부터 이 모든 구성이 정해져 있던 것은 아닙니다. 초기 앱에는 바꾼 중량을 저장해도 다음 목표가 기본값으로 돌아가는 문제가 있었습니다. 세트 입력은 있어도 지금 어느 세트를 진행하는지 모호했고, 기록을 저장한 뒤에도 입력 화면이 남아 있었습니다. 하나씩 고치면서 제가 확인할 대상도 기능의 존재에서 `,(0,f.jsx)(t.strong,{children:`운동 전·중·후의 흐름이 이어지는지`}),`로 바뀌었습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`오늘 할 일에 집중할 수 있는 제품으로 범위를 정했다`}),`
`,(0,f.jsx)(t.p,{children:`여러 운동을 관리하는 범용 기록장을 만들기보다, 턱걸이 목표에 필요한 맨몸·중량 운동과 측정, 휴식으로 범위를 좁혔습니다. 로그인과 서버 동기화도 넣지 않았습니다. 개인적으로 바로 쓰는 도구를 만드는 데 먼저 집중하고, 기록은 브라우저에 저장하며 JSON 백업으로 옮길 수 있게 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면은 사용하는 시점에 따라 나눴습니다. 운동 탭은 오늘 할 일과 현재 진행을, 달력·기록은 과거 수행과 측정의 변화를, 설정·백업은 앞으로의 일정과 기록 관리를 맡습니다. 최고 기록과 다음 목표가 같은 숫자를 보여주는 것이 아니라, 서로 다른 질문에 답하도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`예를 들어 훈련 목표를 한 단계 올렸다고 실제 최대 수행 횟수가 늘었다고 표시하지 않습니다. 측정 기록이 없으면 최고 기록은 미측정으로 남기고, 첫 운동을 제안하는 계산용 기본값은 따로 사용합니다. 계획상 휴식과 실제로 남긴 휴식도 구별했습니다. 달력에 일정이 있다는 사실을 운동한 사실로 바꾸지 않으려는 선택이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이렇게 범위를 정하니 새로운 정보를 넣을 때도 기준이 생겼습니다. 더 많은 수치를 보여줄 수 있는지가 아니라, 운동할 때 무엇을 해야 하는지 또는 기록을 돌아볼 때 무엇을 알 수 있는지를 먼저 봤습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록·추천·달력이 같은 수행을 읽게 했다`}),`
`,(0,f.jsx)(t.p,{children:`초기 추천 문제를 고치려면 저장한 중량을 화면에 다시 보여주는 것만으로는 부족했습니다. 실제 수행이 다음 계획을 계산하는 기준으로 들어가야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`추천은 대상 날짜 이전의 기록을 순서대로 읽습니다. 중량 예정이었어도 맨몸으로 기록했다면 실제 맨몸 수행을 사용합니다. 휴식이나 과거의 미기록 날짜를 운동한 것으로 세지 않고, 앞으로의 일정은 아직 수행하지 않은 계획으로 읽습니다. 과거 기록을 수정하면 그 이후 목표도 다시 계산합니다.`}),`
`,(0,f.jsx)(t.p,{children:`중량이 바뀌면 연속 성공의 기준도 바뀝니다. 이전 무게에서의 성공을 새 무게의 성공으로 이어 세지 않도록, 실제 중량이 달라졌을 때 성공 횟수를 초기화하고 그 기록의 목표와 수행을 비교했습니다. 요일 변경은 다음 날부터 적용하고 과거의 일정 이력은 유지했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`단순히 모든 화면을 같은 값으로 채우는 문제가 아니었습니다. 입력 화면은 지금 수행할 목표를, 기록 화면은 당시 수행한 값을, 추천은 그 이력을 읽은 다음 계획을 보여줘야 했습니다. `,(0,f.jsx)(t.strong,{children:`하나의 기록이 어느 날짜의 어떤 판단에 쓰이는지`}),`를 정해야 화면 사이의 불일치를 설명할 수 있었습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`운동 중에는 입력보다 진행 상태가 먼저 보이도록`}),`
`,(0,f.jsx)(t.p,{children:`운동 화면에서는 숫자 폼보다 세트를 진행하는 경험이 중요했습니다. 완료한 세트, 지금 진행하는 세트, 아직 시작하지 않은 세트를 구별하고 순서대로 열도록 했습니다. 손가락이 누른 영역을 가릴 수 있으니 터치 반응은 화면의 토스트로도 알려주도록 요청했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`입력한 숫자가 있다는 것과 운동을 완료했다는 것도 달랐습니다. 세트에 목표 횟수가 미리 들어 있어도 마지막 세트를 마치기 전에는 완료 기록으로 저장할 수 없게 했습니다. 반대로 이미 완료한 기록을 수정할 때는 새 운동을 처음부터 진행하도록 만들면 안 됐습니다. 새 기록과 수정의 저장 조건을 나눈 이유입니다.`}),`
`,(0,f.jsx)(t.p,{children:`앱을 나갔다 돌아오는 경우에는 진행 초안을 복원하되 완료 이력과 섞지 않았습니다. 날짜·운동 종류별로 보관하고 목표와 보관 시간을 확인합니다. 종류를 바꿨다가 돌아오거나 새로고침했을 때도 입력 맥락이 유지되는지 살폈습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저장 이후에는 입력 폼 대신 완료한 기록을 보여주고, 수정은 별도 행동으로 뒀습니다. 달력에서 과거 날짜를 고르는 것과 오늘의 운동으로 돌아오는 것도 다른 흐름으로 다뤘습니다. 이 과정에서 저장 버튼 하나를 고치는 일보다, 저장 전후에 사용자가 어느 상태에 있는지 설명하는 일이 더 중요해졌습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`화면이 완성된 뒤에는 변경하기 쉬운 구조가 필요했다`}),`
`,(0,f.jsx)(t.p,{children:`기능과 표현을 반복해서 다듬자 원래 HTML에는 계산·저장·화면 코드와 후속 스크립트가 겹쳤습니다. 나중에 붙인 코드가 입력을 숨기거나 DOM을 옮기고, 이전 핸들러의 동작을 다시 바꿨습니다. 새 화면을 하나 더 붙이는 방식으로는 어느 코드가 최종 상태를 결정하는지 따라가기 어려워졌습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`Next.js로 전환할 때 제가 요구한 것은 코드의 모양을 바꾸는 일이 아니었습니다. `,(0,f.jsx)(t.strong,{children:`기존 제품의 기능·디자인·기록을 유지하면서, 다음 변경을 검증할 수 있는 구조로 옮기는 것`}),`이었습니다. AI에 원본 소스와 테스트, 저장 형식, 실제 화면을 먼저 확보하고 책임을 나눠 구현하도록 요청했습니다. 인증과 DB는 이 작업에 섞지 않았습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`구현에서는 화면을 운동·달력·측정·설정·백업 기능으로 나누고, 추천과 측정 계산은 순수 도메인 모듈로, 브라우저 저장과 데이터 이전은 저장소 계층으로 분리했습니다. 실제 UI와 테스트가 같은 TypeScript 계산 모듈을 사용하도록 했습니다. 테스트용 계산만 맞고 앱 안의 별도 계산은 틀릴 수 있는 구조를 피하려는 방향이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 디자인을 다시 꾸미는 것도 이번 전환의 목적은 아니었습니다. 원래 화면을 비교 기준으로 두고 호환 스타일을 유지하며, 새 영역은 CSS Modules로 분리했습니다. 기술 구조가 달라졌다는 이유로 이미 익숙해진 사용 경험까지 함께 바꾸지 않도록 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기록을 가진 앱의 전환은 데이터부터 지켜야 했다`}),`
`,(0,f.jsx)(t.p,{children:`브라우저 저장형 앱에서 코드만 잘 옮겨도 기록이 사라지면 사용할 수 없습니다. 기존 저장 키를 바로 새 형식으로 덮어쓰는 대신, 원본을 보존한 채 검증한 데이터를 별도 키에 저장하는 방식을 사용했습니다. 원본 스냅샷과 이전 저장본도 나눴습니다.`}),`
`,(0,f.jsx)(t.p,{children:`여기서는 정상 데이터의 읽기만 확인하지 않았습니다. 이전을 다시 실행해도 같은 결과가 나오는지, 알 수 없는 필드와 과거 형식이 유지되는지, 손상된 JSON이나 저장 실패가 원본을 덮지 않는지 확인했습니다. 가져오기에서도 빈 객체를 유효한 백업으로 취급하지 않도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`새 앱을 별도 도메인에 배포하면 기존 브라우저의 기록을 자동으로 읽을 수 없습니다. 그래서 JSON 내보내기·가져오기 경로를 함께 제공했습니다. 원본 앱을 유지한 채 전환한 앱을 별도로 검증한 것도 같은 이유였습니다. 배포를 되돌리는 것과 새 앱에서 추가한 기록을 되돌리는 것은 다르므로, 데이터 이동을 코드 배포의 부속 작업으로 두지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`AI의 완료 보고 대신 같은 상황을 다시 실행했다`}),`
`,(0,f.jsx)(t.p,{children:`AI를 활용하면서 가장 자주 생긴 간격은 ‘구현했다’는 설명과 실제 사용 결과 사이였습니다. 그래서 전환 때는 요구사항을 문장으로 전달하는 데서 멈추지 않고, 원본과 새 앱이 같은 입력에서 무엇을 보여줘야 하는지 비교할 수 있도록 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 함수 실행으로 기대값을 만들고, 미측정·실제 수행·휴식·과거 수정·중량 변경·손상된 백업·진행 초안 같은 조건을 고정 데이터로 준비했습니다. 브라우저에서는 저장·수정·삭제·백업 복원을 실제 버튼으로 실행했습니다. 화면 비교도 빈 페이지 하나가 아니라 입력 중, 완료 조회, 모달과 밝은·어두운 테마까지 포함했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다섯 화면 크기에서 같은 시나리오를 반복한 검사를 포함해, 425건의 브라우저 검사가 로컬과 배포 환경에서 각각 통과했습니다. 추천 계산뿐 아니라 기록을 입력하고 다시 읽는 전체 경로를 확인한 결과입니다.`}),`
`,(0,f.jsx)(t.p,{children:`PWA에서는 개발 서버와 배포 결과가 다를 수 있다는 것도 드러났습니다. 로컬 빌드의 자산 이름을 캐시 대상으로 삼았지만, 배포된 앱에서 참조하는 자산과 맞지 않아 오프라인 캐시가 실패했습니다. 최종 구현은 배포 HTML에서 실제 JS·CSS 주소를 찾고, 필요한 자산을 확보한 뒤 화면을 캐시하도록 바뀌었습니다. 온라인에서 한 번 더 새로고침하지 않아도 첫 진입 뒤 오프라인으로 다시 열리는지 별도로 검사했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`AI는 이 수정의 구현과 브라우저 검증을 실행했고, 저는 제품의 요구사항과 전환 조건, 비교 기준을 정했습니다. 직접 사용하며 어긋난 흐름은 다시 설명했습니다. 구현을 위임해도 무엇을 유지해야 하는지와 무엇을 확인한 뒤 다음 단계로 갈지는 정해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`기능을 만드는 것에서 사용할 수 있는 제품을 끝내는 것으로`}),`
`,(0,f.jsxs)(t.p,{children:[`지금 앱에는 오늘 운동의 확인과 세트 진행, 기록 조회·수정, 달력과 측정 현황, 일정 설정과 백업이 연결돼 있습니다. Next.js 전환본도 구현을 마치고 `,(0,f.jsx)(t.a,{href:`https://pullup-30-next-preview-dakqyry9r-justinjeong-1612s-projects.vercel.app/`,children:`별도 배포 환경`}),`에서 브라우저 비교와 오프라인 검증을 마쳤습니다. 기존 운영 앱은 그대로 유지했습니다. 실제 iPhone·Android의 설치 경험과 운영 도메인 전환은 그 다음 확인 대상으로 분리했습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`처음에는 다음 추천이 기본값으로 돌아가는 것이 가장 눈에 띄는 문제였습니다. 전체를 만들고 나니 추천 하나만 맞는 것으로는 충분하지 않았습니다. 진행 중인 입력은 이어져야 하고, 완료 기록은 다시 읽을 수 있어야 하며, 구조를 바꿔도 쌓아 둔 기록은 남아야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`돌아보면 AI 덕분에 구현을 넓게 시도할 수 있었지만, 제품이 좋아지는 방향까지 자동으로 정해지지는 않았습니다. 실제로 사용해 보고 기대와 다른 장면을 설명하고, 그 장면을 다시 확인할 기준으로 바꾸는 과정이 필요했습니다. 작은 개인 앱에서도 제가 끝내야 할 일은 화면을 채우는 것보다, 사용자가 다음 날 다시 열어 이어서 사용할 수 있는 흐름을 만드는 쪽에 가까웠습니다.`})]})}function wn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Cn,{...e})}):Cn(e)}var Tn=e({default:()=>Dn,frontmatter:()=>En}),En={title:`정리본으로 연결한 이전 글: quality-gate-system`,summary:`이 글의 유용한 내용은 AI의 판단 지원과 실제 검증에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/ai-supported-decisions`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2026.05`,date:`2026-05`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function $(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/ai-supported-decisions`,children:`AI의 판단 지원과 실제 검증 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Dn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)($,{...e})}):$(e)}var On=e({default:()=>jn,frontmatter:()=>kn}),kn={title:`고객의 계산·취합 업무까지 이어지는 리포트 만들기`,status:`Documented`,statusLabel:`제품 개선`,category:`product`,series:`work-evidence-2026`,role:`고객 의견 조사·업무 확인·데이터 타입/표시 구현·회귀와 동료 수정 전달`,period:`2023.06–2023.10`,summary:`날짜가 계산에 쓰이지 않는 고객 불편을 문자열 문제에서 데이터 타입 문제로 다시 정의했다. 실제 취합 업무를 확인해 값과 표시를 나누고, 후속 날짜 오류의 수정·사용자 확인까지 이어간 과정.`,date:`2023-10`,dateBasis:`context`,collection:`stories`,tags:[`고객 문제`,`데이터 의미`,`운영 제품`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function An(e){let t={code:`code`,h2:`h2`,p:`p`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리포트를 내려받은 고객이 날짜를 계산에 사용할 수 없다고 했습니다. 화면에서도 날짜가 보이고 파일에도 값이 있었지만, 문자열로 저장된 날짜는 며칠이 지났는지 계산하거나 다른 자료와 맞추기 전에 다시 변환해야 했습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`처음에는 문자 깨짐이나 표시 형식의 문제로 읽었습니다. 고객 설문을 직접 확인하고 다시 질문하면서, 불편의 중심이 `,(0,f.jsx)(t.strong,{children:`보이는 날짜가 아니라 계산에 사용할 날짜`}),`라는 것을 알게 됐습니다. 글자의 구분자를 바꾸는 것과 값의 타입을 바꾸는 것은 다른 해결이었습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`2023년에는 이 질문에서 리포트의 후처리 업무를 개선했습니다. 최초 다운로드 기능을 만든 시기와는 별개의 작업입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 모양의 셀도 같은 데이터는 아니었다`}),`
`,(0,f.jsxs)(t.p,{children:[`화면에 `,(0,f.jsx)(t.code,{children:`2023-08-03`}),`이라고 표시된 두 셀을 생각해 보겠습니다. 하나는 그 문자를 그대로 가진 문자열이고, 다른 하나는 날짜 값에 표시 형식을 적용한 결과일 수 있습니다. 사용자는 둘을 같은 날짜로 보지만 계산과 정렬은 다른 값을 읽습니다.`]}),`
`,(0,f.jsx)(t.p,{children:`값의 타입과 화면에 표시할 형식을 나눠 다뤘습니다. 날짜·숫자·비율 등의 필드에서 계산할 값은 유지하고, 리포트를 읽을 때 필요한 형식은 따로 적용했습니다. 필드의 표시 조건과 변환 결과도 테스트로 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`구현의 목적은 파일의 장식이 아니라 고객이 다음 작업에서 다시 타입을 고치는 부담을 없애는 것이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`금액이라고 항상 통화 표시가 필요한 것은 아니었다`}),`
`,(0,f.jsx)(t.p,{children:`운영 담당자에게 자료를 어떻게 취합하는지 물었습니다. 복사해 붙이고 다른 표와 합치는 업무를 확인한 뒤, 통화가 아니라 숫자 표시를 사용하는 선택을 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`금액이라는 도메인 이름만으로 형식을 정하면 사용자가 이어서 할 작업을 놓칠 수 있었습니다. 화면에서 읽을 때 자연스러운 표현과 다른 표에서 계산할 값이 같지 않을 수 있기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`취합 방식을 확인하니 변환 방법만 고르면 되는 작업이 아니었습니다. 고객과 운영자가 다른 표에서 다시 계산할 수 있는 값을 전달해야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`포맷을 넣은 뒤의 회귀도 같은 작업이었다`}),`
`,(0,f.jsx)(t.p,{children:`포맷팅은 첫 구현 뒤 수정과 되돌림, 재도입을 거쳤습니다. 날짜를 실제 값으로 옮기는 과정에서 시간 표현과 실행 환경에 따라 달라지는 조건도 다뤄야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`제가 만든 formatter와 테스트의 결과만으로 모든 환경의 문제가 해결됐다고 판단하지는 않았습니다. 이후 시간대·OS 조건의 수정은 동료의 구현을 통합·배포하며 이어 갔습니다. 10월에는 배포 안내 뒤 제보자가 정상 동작을 확인했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`처음 문제를 정의하고 직접 구현한 범위와, 동료의 수정으로 전달한 후속을 나눠 설명해야 이 작업의 흐름이 정확해집니다. 사용자에게는 둘 다 리포트를 다시 쓸 수 있게 하는 과정이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`다운로드 이후의 일을 제품 안으로 가져오기`}),`
`,(0,f.jsx)(t.p,{children:`리포트는 화면에서 조회가 끝나거나 파일이 만들어졌을 때만 완성되는 기능이 아니었습니다. 날짜를 계산하고 값을 합치는 다음 작업에서 데이터가 어떤 의미를 유지하는지도 제품의 일부였습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`고객이 어떤 도구를 쓰는지뿐 아니라 `,(0,f.jsx)(t.strong,{children:`그 도구에서 무엇을 하려는지`}),`를 확인하면서 구현이 달라졌습니다. 날짜의 구분자를 바꾸는 대신 값의 타입을 바꿨고, 금액 표시도 자료 취합 방식을 물은 뒤 숫자로 정했습니다. 다음 데이터 기능에서도 출력 형식을 고르기 전에 그 결과를 다시 사용하는 작업부터 확인하려고 합니다.`]})]})}function jn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(An,{...e})}):An(e)}var Mn=e({default:()=>Fn,frontmatter:()=>Nn}),Nn={title:`리텐션 리포트가 화면과 파일에서 다른 의미를 전한 이유`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`리포트/CSV 구현·API 날짜 협의·한계 문구 참여`,period:`2021-2022`,summary:`화면의 빈칸이 내려받은 파일에서는 0으로 보인다면 같은 자료를 다르게 읽을 수 있다. 리텐션 표와 CSV를 만들며 놓친 구분을 돌아본다.`,date:`2022`,dateBasis:`context`,collection:`records`,tags:[`운영 데이터`,`API 계약`,`데이터 해석`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function Pn(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`리텐션 리포트에서는 같은 기준일의 사용자 묶음을 놓고 이후 날짜의 값을 비교했습니다. 운영자가 전환 수와 그 뒤의 리텐션 값을 표에서 살펴보고 CSV 파일로 내려받을 수 있도록, 저는 2021년에 화면과 내보내기를 구현했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이런 표에서는 빈칸을 어떻게 표현하는지도 비교 결과에 영향을 줍니다. 빈칸은 아직 값이 없는 것으로 읽을 수 있고, 0은 측정된 결과가 0이었다고 읽을 수 있습니다. 두 상태를 같은 값으로 바꾸면 이후 비교나 계산에서도 구분이 사라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`가령 화면에서는 한 칸이 비어 있는데 파일로 내려받으면 같은 위치에 0이 있는 경우를 생각해 보겠습니다. 어느 쪽이 잘못된 자료인지 묻게 되지만, 문제는 원자료가 다르지 않아도 생깁니다. 빈 값을 채우고 화면에 표시하는 과정에서 같은 값이 서로 다르게 보일 수 있기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 빠진 일자를 0으로 채우고 그래프에서 0을 빈 셀로 표시했습니다. 표와 파일로 같은 자료를 제공했지만, 지금 코드를 다시 읽어보니 변환 단계에서 '값이 없음'과 '실제 0'을 합친 부분이 남아 있었습니다. 여기서는 당시 구현한 흐름을 설명하고, 현재 돌아보며 확인한 의미의 손실도 함께 짚어보겠습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`조회 조건의 제안과 실제 화면 코드`}),`
`,(0,f.jsx)(t.p,{children:`서버 담당자에게는 FE가 광고의 시작·종료 날짜를 query로 보내는 경우와, query를 생략해 서버의 기본 기간을 사용하는 경우를 나눠 제안했습니다. 어느 쪽에서 기간을 정하느냐에 따라 화면이 설명할 조회 조건도 달라졌기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`실제 화면의 조회 코드는 광고 ID를 전달했고, 그 응답을 받아 표와 CSV를 만들었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`응답을 그대로 그리지 않고 행과 열의 의미를 맞추기`}),`
`,(0,f.jsx)(t.p,{children:`리포트에서는 기준일별 코호트와 전환 수, 기준일 이후의 day-offset 값을 표의 행과 열로 바꿨습니다. 응답에 들어 있는 날짜와 배열의 순서만 따라 출력하는 것이 아니라, 각 값을 해당 날짜 열에 놓는 정규화가 필요했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`빈 위치를 채우는 방식도 화면 표현과 연결됐습니다. 정규화에서는 빠진 일자의 값을 0으로 채우고, 그래프에서는 0인 위치를 빈 셀로 표시했습니다. 같은 열 구조는 만들었지만, 응답에 값이 없는 경우와 실제 값이 0인 경우가 여기서 합쳐졌습니다.`}),`
`,(0,f.jsx)(t.p,{children:`CSV도 날짜·전환 수와 일자별 값을 평평한 열로 만들었습니다. 표와 CSV가 공유한 것은 같은 응답을 날짜 열에 대응시키는 구조입니다. 그래프에서 빈 셀로 보이는 값이 CSV에서는 0으로 남을 수 있으므로, 같은 원자료를 내보낸다는 것과 같은 의미로 읽힌다는 것은 별도로 봐야 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`숫자 옆의 안내도 기능의 일부였다`}),`
`,(0,f.jsx)(t.p,{children:`데이터에는 표본과 실험적 성격, 완전성·갱신 시점, 작은 규모에서 제공되지 않는 값의 조건이 있었습니다. 이런 한계를 알리는 문구에도 참여했습니다. 선명한 그래프가 데이터의 조건까지 지워버리지 않도록 하는 설명이었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 안내가 설명한 것은 표본과 집계의 조건이었습니다. 특정 빈 셀이 미관측인지 실제 0인지는 그 문구만으로 구분되지 않습니다. 데이터 전체의 사용 조건을 알리는 일과 개별 셀의 상태를 표현하는 일은 서로 다른 구현이 필요했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`QA에서는 통계 서비스 상태 때문에 전체 결과를 확인하기 어려운 상황도 공유했습니다. 화면이 정상적으로 그려지는지와 실제 자료가 올바른 조건으로 조회되는지는 다른 곳에서 만나는 문제였습니다. FE와 gateway, 통계 담당자가 함께 맞춰야 하는 작업이었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`화면과 파일에서 같은 자료를 살펴볼 수 있게`}),`
`,(0,f.jsx)(t.p,{children:`운영자는 기준일별 코호트를 같은 날짜 열에서 비교하고, 같은 자료를 CSV로 내려받아 살펴볼 수 있게 됐습니다. 데이터가 없는 화면과 표본·갱신 조건의 안내도 함께 제공했습니다. 조회한 응답을 화면과 파일에서 사용할 수 있게 만든 것이 당시의 제품 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다만 빈칸과 0을 구분하는 문제까지 해결한 것은 아니었습니다. 지금 다시 평가하면 표가 나오고 파일을 내려받을 수 있는지에 더해, 두 결과가 같은 상태를 같은 의미로 전달하는지도 확인해야 한다고 생각합니다. 표시 단계에서만 수정하려 하면 변환 과정에서 이미 합쳐진 상태를 되찾을 수 없기 때문입니다.`}),`
`,(0,f.jsx)(t.p,{children:`당시에는 사용량을 무엇으로 확인할지도 질문했습니다. 지금 다시 만든다면 응답을 읽는 단계부터 값이 없는 셀과 실제 0을 나누고, 그 차이를 화면과 CSV에서 각각 어떻게 전달할지 정하겠습니다. 이는 당시 해결한 결과가 아니라, 코드를 다시 읽으며 정리한 후속 개선 방향입니다.`})]})}function Fn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Pn,{...e})}):Pn(e)}var In=e({default:()=>zn,frontmatter:()=>Ln}),Ln={title:`운영자의 구성과 사용자의 선택을 연결하는 미션 상품 만들기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`운영 검증·복제 입력·Gateway 연결, 참여 FE 공동 통합·QA·전달`,period:`2025.04`,summary:`기존 미션 목록의 규칙을 세트별 설정으로 옮기고, 사용자 선택과 기존 참여 화면을 연결했다. 복제된 식별자와 FE·서버·Gateway의 전달 순서를 다루며 새 상품을 기존 제품에 넣은 과정.`,date:`2025-04`,dateBasis:`context`,collection:`stories`,tags:[`상품 개발`,`운영 도구`,`기존 제품 통합`],updated:`2026-10-10`,lastTendedAt:`2026-10-10`};function Rn(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`운영자가 여러 미션을 세트로 구성하고 사용자는 그중 하나를 골라 참여하는 상품을 만들었습니다. 사용자에게는 선택 화면이 하나 추가되지만, 운영자는 기존 미션을 복사하고 그룹과 옵션을 바꾸며 새로운 구성을 저장합니다. 두 화면이 같은 상품의 규칙을 읽어야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 목록 기준으로만 검증하면 새 상품의 세트별 제한을 확인할 수 없었습니다. 모든 미션을 새 규칙으로 바꾸면 기존 상품의 설정이 달라집니다. 새 상품에는 세트별 검증을 적용하면서 기존 상품의 목록 기준은 유지해야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 Gateway의 조회·쓰기 연결과 운영 화면의 검증·복제 입력을 수정했고, 동료들과 사용자 참여 FE를 통합했습니다. 서버는 상품의 저장·선택·참여 정책을 제공했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`선택한 화면과 제출한 선택은 달랐다`}),`
`,(0,f.jsx)(t.p,{children:`참여 화면은 세트 목록과 이미 제출했는지를 조회했습니다. 기존 선택이 있다면 다시 고르게 하지 않고 기존 참여 화면으로 연결했습니다. 아직 제출하지 않았다면 세트를 살펴보고 하나를 선택해 제출할 수 있게 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면에서 미리 고른 상태만으로는 서버에 선택이 제출된 것이 아닙니다. 제출에 성공하면 기존 query를 유지해 참여 화면으로 이어 가고, 실패하면 안내하면서 제출 중 상태를 풀었습니다. 선택 화면에서 들어갈 미션을 확정한 뒤 기존 참여 경로를 사용하도록 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`검증할 단위를 상품에 맞췄다`}),`
`,(0,f.jsx)(t.p,{children:`운영 QA에서는 기존 목록을 검사하는 범위와 세트마다 검사할 범위를 구별했습니다. 새 상품은 기여 확인(eligibility) 유형의 미션이 세트마다 최대 하나인지 검사하고, 기존 상품은 원래 목록 기준을 유지했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`전체 목록에 검증기를 한 번 적용하면 서로 다른 세트의 미션이 같은 제한을 적용받을 수 있었습니다. UI를 세트별로 나누는 것과 함께, 실제 저장·참여 단위에 맞춰 검증 범위도 나눴습니다.`}),`
`,(0,f.jsx)(t.p,{children:`기존 단가 값과 새 설정의 저장 관계도 QA에서 확인했습니다. 한 화면이 정상적으로 저장되는지만 보는 대신, 다른 상품의 입력이 남아 있는 조건을 함께 읽었습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`복제는 같은 내용을 새 대상으로 만드는 일이다`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 복제 문제를 재현하지 못했습니다. 동료가 캠페인을 복사하고 그룹과 옵션을 바꾼 뒤, 기존 미션을 복사하고 다시 세트를 복제하는 순서를 전달했습니다. 같은 순서를 따라가자 단순히 새 세트 하나를 만드는 테스트에서는 보이지 않던 문제가 드러났습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`기존 미션 ID를 그대로 넘기면 새 구성을 만들려던 동작이 기존 대상을 가리킬 수 있었습니다. 전체 세트 객체를 복사하기보다 `,(0,f.jsx)(t.strong,{children:`새 template 선택과 복사할 missions 입력을 분리`}),`하고, 기존 미션 식별자를 제거했습니다. 세트의 제목·설명도 실제 대상을 표시하도록 보완했습니다.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`복사할 미션의 내용
  + 새 세트를 만들 template
  - 기존 미션의 식별자
  → 새로운 구성의 입력
`})}),`
`,(0,f.jsx)(t.p,{children:`기존 미션의 내용은 재사용하되 기존 대상을 가리키는 식별자는 빼야 했습니다. 객체 전체를 복사하면 새로 만드는 입력에도 기존 관계가 남을 수 있어, 서버로 보낼 값을 나눠 구성했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`코드 통합 뒤에도 전달할 경로가 남았다`}),`
`,(0,f.jsx)(t.p,{children:`서버 반영 뒤 FE를 전달했지만 Gateway 연결이 빠진 조건이 다시 발견됐습니다. 화면·서버·Gateway가 함께 연결돼야 운영 설정과 실제 참여가 이어질 수 있었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`수정과 배포 보고 뒤 동료의 특정 동작 확인을 받았습니다. 이미 잘못 저장된 데이터가 자동으로 고쳐진 것은 아니어서 그 데이터를 재사용하지 않도록 안내했습니다. 코드를 고친 결과와 이전 데이터가 유지하는 결과는 별개였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`재현 순서를 맞춘 QA와 동료의 동작 확인으로 수정 결과를 확인했습니다. 신규 설정을 저장하거나 기존 미션을 반복해서 복사하는 등 운영자가 실제로 만드는 입력 순서를 따라갔습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`두 사용자가 같은 상품을 다루게 하기`}),`
`,(0,f.jsx)(t.p,{children:`새 상품은 운영자의 세트 구성에서 사용자 선택과 기존 참여까지 연결됐습니다. 검증 단위를 나누고 복제 입력을 정리하며, 기존 상품의 규칙을 그대로 유지할 범위도 남겼습니다.`}),`
`,(0,f.jsx)(t.p,{children:`이 작업에서는 동료가 재현 순서를 공유해 준 과정이 기억에 남습니다. 처음 확인한 단순 입력에서는 재현되지 않았지만, 운영자는 기존 캠페인과 미션을 계속 재사용하고 있었습니다. 전달받은 복사 순서를 따라가면서 어떤 식별자를 새 입력에서 제거해야 하는지 확인할 수 있었습니다. 운영 도구를 만들 때는 새 기능에 처음 값을 넣는 경우와 함께, 이전 작업의 값을 가져와 다음 구성을 만드는 경우도 확인해야 한다고 생각합니다.`})]})}function zn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Rn,{...e})}):Rn(e)}var Bn=e({default:()=>Un,frontmatter:()=>Vn}),Vn={title:`다른 제품에서도 사용할 수 있는 공용 광고 실행 구조 만들기`,status:`Documented`,statusLabel:`제품 개발`,category:`product`,series:`work-evidence-2026`,role:`광고 실행·공급사 adapter·입력 검증·다른 제품의 호출 코드 연결, 타팀 QA·배포`,period:`2026.01–2026.04`,summary:`제품의 광고 후보 순회와 공급사의 실행을 나누어 공통 흐름을 만들었다. 내부 노출 집계와 실제 SDK 실행이 다른 조건을 추적하고, 다른 팀 제품의 호출 경로에 연결해 QA·배포까지 마친 과정.`,date:`2026-04`,dateBasis:`context`,collection:`stories`,tags:[`광고 연동`,`공용 인터페이스`,`팀 간 전달`],updated:`2026-10-11`,lastTendedAt:`2026-10-11`};function Hn(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`제품에 여러 종류의 광고가 들어오면 서버가 고른 후보를 실행하고 그 결과를 다음 미션이나 리워드 안내로 연결해야 합니다. 그런데 공급사마다 실행과 완료를 알려주는 방식이 다릅니다. 화면에서 모든 SDK를 직접 다루면 새 공급사를 붙일 때마다 화면의 판단도 바꿔야 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 1월에 광고 후보를 순회하는 제품 흐름과 공급사별 표시·완료를 처리하는 adapter를 나눴습니다. 이후 4월에 다른 팀의 제품을 지원하면서, 그 제품에서도 광고 실행 코드가 제대로 연결됐는지 확인해야 했습니다. 내부에는 노출이 집계되는데 공급사 로그에는 실행 흔적이 없는 문제가 있었습니다.`}),`
`,(0,f.jsxs)(t.p,{children:[`같은 서버에서 광고 데이터를 받더라도 SDK를 실행하는 코드까지 같다고 볼 수는 없었습니다. 그래서 `,(0,f.jsx)(t.strong,{children:`다른 팀의 FE에도 해당 SDK를 실행하는 코드가 연결돼 있는지`}),` 확인하며, 입력 데이터와 광고 종류에 따른 실행 분기를 살폈습니다.`]}),`
`,(0,f.jsx)(t.h2,{children:`제품이 원하는 결과와 공급사가 보내는 사건`}),`
`,(0,f.jsx)(t.p,{children:`공통 흐름은 후보를 고르고 실행 결과에 따라 다음 행동을 정했습니다. 공급사 adapter는 SDK 호출과 시작·완료·닫힘 신호를 제품이 읽을 결과로 바꿨습니다.`}),`
`,(0,f.jsx)(t.p,{children:`1월의 handler에서는 공급사 완료 신호가 왔는지를 기록하고 닫힘 때 Promise를 끝냈습니다. 이 광고의 완료 조건은 클릭이었으므로, 사용자가 닫았다는 사건만으로 완료를 만들어서는 안 됐습니다. 완료 뒤 닫힘과 완료 없는 닫힘은 다른 결과였습니다. 영상의 시청 완료와도 같은 이름으로 묶지 않았습니다.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`실행 순서`}),(0,f.jsx)(t.th,{children:`제품이 읽을 의미`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`공급사 완료 신호 → 닫힘`}),(0,f.jsx)(t.td,{children:`해당 광고의 완료 조건을 충족하고 종료`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`완료 신호 없이 닫힘`}),(0,f.jsx)(t.td,{children:`미완료로 종료`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`tracker·BI의 동기 호출 오류`}),(0,f.jsx)(t.td,{children:`실제 광고 실행의 결과와 분리`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`두 완료 순서는 별도 테스트 조건으로 남겼습니다. 관측 호출의 동기 예외를 잡는 코드도 있었습니다. 관측 호출의 동기 예외가 광고 실행에 영향을 주지 않도록 한 처리입니다.`}),`
`,(0,f.jsx)(t.p,{children:`영상 코어를 나눈 작업도 비슷했습니다. 재생·source·가시성·음소거는 앱 내부 코어에 두고, 광고 추적과 외부 클릭 정책은 제품 wrapper에 남겼습니다. wrapper에서 새 코어를 사용하도록 연결했습니다. 재사용할 재생 기능과 상품이 정하는 다음 행동을 같은 모듈에 넣지 않았습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`같은 서버를 쓰는 다른 화면에는 실행 코드가 없었다`}),`
`,(0,f.jsx)(t.p,{children:`4월의 문제를 조사해 보니 타팀 FE에는 해당 광고 source를 처리할 handler가 없었습니다. 공용 데이터에 SDK 정보가 들어와도, 그 제품에서는 기본 fallback이 실행되고 있었습니다. 내부 tracker가 호출된 것은 공급사 SDK가 시작됐다는 증거가 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`저는 서버가 내려준 입력값뿐 아니라 제품 코드의 실행 분기와 공급사 SDK 호출 경로까지 이어서 확인했습니다. source·provider와 필수 SDK parameter를 읽고 실제 호출에 전달할 조건을 정했습니다. 서버 parameter가 nested 또는 root 형태로 들어오는 경로도 구별했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`SDK 정보가 없거나 다른 provider인 조건, 필수값 누락과 유효한 입력을 나눈 테스트를 보강했습니다. 잘못된 입력을 실제 실행 가능한 후보처럼 읽지 않게 하는 준비 단계였습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`adapter 하나와 제품의 loop는 함께 연결돼야 했다`}),`
`,(0,f.jsx)(t.p,{children:`입력 검증 뒤 SDK 호출·callback·timeout을 Promise 결과로 연결하고, 그 결과를 처리하는 제품의 광고 후보 순회 로직에도 연결했습니다. 실행 함수만 추가하고 해당 source 분기에 연결하지 않으면 SDK 대신 기존 fallback이 계속 실행될 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:`4월에 연결한 제품의 boolean 결과와 1월 handler의 완료 판정도 이름만 보고 같은 것으로 취급하지 않았습니다. 공급사가 보내는 신호를 각 제품이 정한 성공 조건에 맞춰 해석해야 했습니다.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-text`,children:`서버의 광고 후보
  → 실행 가능한 source·입력 확인
  → 공급사 adapter
  → 해당 제품이 읽을 완료 결과
  → 다음 후보 또는 다음 참여
`})}),`
`,(0,f.jsx)(t.p,{children:`실행 함수를 공용으로 두는 작업과 함께, 실제 호출자가 어떤 입력으로 그 함수를 부르고 결과에 따라 다음 후보를 고르는지도 확인했습니다. 함수가 있어도 source 분기에 연결되지 않으면 이전 fallback이 계속 실행될 수 있었기 때문입니다.`}),`
`,(0,f.jsx)(t.h2,{children:`낯선 제품의 전달은 소유 팀과 함께 확인했다`}),`
`,(0,f.jsx)(t.p,{children:`제품을 소유한 팀에는 로컬 실행·진입·전체 QA의 도움이 필요하다고 설명했습니다. 제가 구현을 준비할 수 있다는 사실과 그 제품의 모든 동작을 혼자 확인할 수 있다는 것은 달랐습니다.`}),`
`,(0,f.jsx)(t.p,{children:`4월 17일에는 누락된 실행 경로와 검증 환경을 공유했습니다. 이후 SDK QA를 진행하고, 21일에는 소유 제품의 담당자들과 광고뿐 아니라 기존 콘텐츠의 동작도 확인한 뒤 배포했습니다. 확인과 배포 뒤 감사의 반응이 이어졌습니다.`}),`
`,(0,f.jsx)(t.p,{children:`다른 팀 제품이 서버에서 받은 광고 정보로 실제 SDK를 실행하도록 연결했습니다. 공급사 SDK 자체를 개발한 것은 아니지만, 해당 제품이 기대하는 입력과 완료 결과에 맞춰 연동하고 소유 팀과 QA·배포까지 함께 진행했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`공용 코드가 실제 제품에서도 실행되도록`}),`
`,(0,f.jsx)(t.p,{children:`처음에는 공급사의 사건을 제품 결과로 바꾸는 흐름을 만들었습니다. 다른 팀을 지원하면서는 그 인터페이스가 실제로 사용되는지까지 확인해야 했습니다. 내부 집계와 공급사 실행이 달랐던 장면이 이 차이를 선명하게 보여줬습니다.`}),`
`,(0,f.jsx)(t.p,{children:`공용 모듈에 추가한 실행이 제품에서 사용되려면 입력 검증과 완료 결과의 의미를 맞추고, 실제 source 분기에 연결한 뒤 소유 팀과 QA·배포까지 확인해야 했습니다. 다음에 공용 기능을 만들 때도 API를 정하면서, 어느 코드가 호출하는지와 해당 제품에서 어디까지 확인해야 하는지를 함께 살펴보려고 합니다.`})]})}function Un(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Hn,{...e})}):Hn(e)}var Wn=e({default:()=>qn,frontmatter:()=>Gn}),Gn={title:`화면의 번역 설정에 의존하지 않는 공용 팝업 만들기`,status:`Documented`,statusLabel:`과정 기록`,category:`product`,series:`work-evidence-2026`,role:`공용 팝업의 번역 경계 수정·언어 선택과 독립 렌더링 테스트`,period:`2026`,summary:`같은 팝업인데 어떤 화면에서는 열리고, 상위 번역 설정이 없는 곳에서는 본문을 그리지 못하는 구조였다. 공용 기능의 숨은 실행 조건을 다룬 과정.`,date:`2026-05-27`,dateBasis:`context`,collection:`records`,tags:[`공용 컴포넌트`,`다국어`,`암묵적 의존성`],updated:`2026-10-02`,lastTendedAt:`2026-10-02`};function Kn(e){let t={h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`광고 제보 팝업은 여러 화면에서 호출했습니다. 호출 화면이 달라도 안내와 버튼이 나와야 하는 기능이었는데, 상위 번역 설정이 없는 곳에서는 본문을 그리지 못했습니다. 팝업 내부에 번역 설정이 있어도 실행 순서 때문에 바깥 설정을 필요로 했습니다.`}),`
`,(0,f.jsx)(t.p,{children:`React의 번역 Provider는 아래쪽 컴포넌트에 사용할 언어와 문구를 제공합니다. 팝업 안에도 자체 Provider와 메시지가 있어서, 그 기능만 불러오면 필요한 설정이 갖춰질 것처럼 보였습니다. 실제로 번역 설정이 있는 화면에서는 그런 의존성을 알아차리기 어려웠습니다.`}),`
`,(0,f.jsx)(t.p,{children:`순서가 문제였습니다. 팝업이 내부 Provider를 만들기 전에 상위 Provider에서 언어부터 읽었습니다. 상위 설정이 없는 렌더링에서는 그 읽기가 실패해 팝업 본문까지 그릴 수 없었습니다. 문구를 잘못 번역하는 정도가 아니라, 공용 UI를 실행하기 위한 조건이 호출 화면에 남아 있었던 것입니다.`}),`
`,(0,f.jsx)(t.p,{children:`화면별 번역 범위를 조정할 때도 이 의존성을 살펴야 했습니다. 한 화면의 설정을 옮기면 다른 곳에서 쓰는 팝업을 위해 상위 설정을 다시 마련해야 할 수 있었습니다. 저는 팝업이 메시지를 갖고 있는지뿐 아니라, 그 메시지를 쓰기 전에 어떤 설정을 읽는지 확인했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`Provider가 있다는 것과 독립적으로 실행된다는 것`}),`
`,(0,f.jsx)(t.p,{children:`화면별 번역 설정의 범위를 조정하는 변경을 다루면서, 공용 기능이 어느 레이아웃의 설정을 전제로 하는지 함께 살폈습니다. 번역이 필요한 화면에 Provider를 두는 일과, 그 화면 밖에서도 쓰는 팝업의 실행 조건은 같은 문제가 아니었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`팝업을 쓰는 모든 화면에 상위 Provider를 추가하는 방향으로 넓히지는 않았습니다. 언어를 고르는 입력을 팝업이 받을 수 있게 하고, 팝업 안의 번역 Provider가 그 선택을 사용하도록 바꿨습니다. 메시지를 소유한 기능이 언어 선택의 기준도 함께 갖는 구조였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`내부 Provider의 자식은 그 설정을 사용할 수 있습니다. 하지만 Provider를 만드는 바깥 함수가 먼저 읽는 언어를 같은 Provider가 제공할 수는 없습니다. 따라서 내부 설정을 추가하는 대신, 먼저 언어를 고르는 입력과 그 선택을 내부 Provider에 전달하는 순서를 바꿨습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`브라우저 언어만으로 고르지 않은 이유`}),`
`,(0,f.jsx)(t.p,{children:`언어 선택에는 두 조건이 있었습니다. 해당 서비스가 다국어를 지원하는지와, 브라우저가 어떤 언어를 사용하는지입니다. 브라우저가 영어라고 해서 다국어를 제공하지 않는 서비스의 안내까지 영어로 바꾸면 기존 정책과 달라집니다.`}),`
`,(0,f.jsx)(t.p,{children:`호출하는 쪽에서 서비스 정보를 전달하고, 다국어 지원 여부를 먼저 확인하도록 했습니다. 정보가 없거나 다국어를 지원하지 않으면 기본 한국어를 사용했습니다. 지원하는 경우에만 브라우저 언어를 지원 메시지에 대응시켰습니다. 지원 목록 밖의 언어도 기본값으로 돌아갔습니다.`}),`
`,(0,f.jsx)(t.p,{children:`언어 선택은 별도 함수로 나눴습니다. 번역 라이브러리의 context 없이도 입력과 기본값의 관계를 확인할 수 있어야 했습니다. 브라우저 정보가 없는 실행에서도 같은 기본값을 사용하도록 했습니다.`}),`
`,(0,f.jsx)(t.h2,{children:`상위 설정을 빼고 팝업을 그려보기`}),`
`,(0,f.jsx)(t.p,{children:`상위 번역 Provider가 없어도 기본 안내와 버튼을 그릴 수 있게 됐습니다. 번역을 위해 호출 화면마다 같은 상위 설정을 추가하는 대신, 서비스 정보를 팝업에 전달하고 팝업이 지원 정책과 브라우저 언어로 메시지를 선택합니다. 서비스 정보가 없을 때는 기본값을 사용합니다. 공용 기능을 쓰는 화면이 떠안을 번역 의존성을 줄인 결과였습니다.`}),`
`,(0,f.jsx)(t.p,{children:`테스트에서는 지원 여부와 언어 매핑을 나누고, 상위 Provider를 실제로 빼고 팝업을 렌더링했습니다. 기본 안내와 버튼이 보이는지 확인한 변경을 함께 병합했습니다. 제거하려던 설정을 테스트 환경이 다시 제공하면 이 결과를 확인할 수 없었습니다.`}),`
`,(0,f.jsx)(t.p,{children:`메시지와 Provider를 내부에 두었어도 처음 실행하는 함수가 바깥 context를 읽고 있으면 호출 화면의 설정이 필요했습니다. 이번에는 그 읽기를 서비스 정보와 언어 선택 함수로 바꾸고, 상위 Provider가 없는 렌더링으로 확인했습니다. 공용 기능을 점검할 때는 내부에 둔 코드뿐 아니라 실행 전에 필요한 조건도 함께 봐야 한다고 생각합니다.`})]})}function qn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Kn,{...e})}):Kn(e)}var Jn=e({default:()=>Zn,frontmatter:()=>Yn}),Yn={title:`정리본으로 연결한 이전 글: team-onboarding-doc-system`,summary:`이 글의 유용한 내용은 온보딩의 정보 구조에 합쳤습니다. 이전 주소는 정리본으로 안내합니다.`,archived:!0,supersededBy:`/notes/onboarding-as-information-design`,status:`Archived`,statusLabel:`통합한 이전 글`,category:`builder-log`,role:`이전 기록`,period:`2025-2026`,date:`2026`,dateBasis:`context`,lastTendedAt:`2026-10-01`};function Xn(e){let t={a:`a`,h2:`h2`,p:`p`,...c(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h2,{children:`정리본에서 이어 읽기`}),`
`,(0,f.jsx)(t.p,{children:`이 글은 아래 정리본에 합쳤습니다. 이어지는 내용은 정리본에서 읽을 수 있습니다.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`/notes/onboarding-as-information-design`,children:`온보딩의 정보 구조 읽기`})}),`
`,(0,f.jsxs)(t.p,{children:[`현재 업무 과정은 `,(0,f.jsx)(t.a,{href:`/cases`,children:`경험 기록`}),`에서 제품·운영, 외부 시스템 연동, 기술 선택의 관점으로 연결해 볼 수 있습니다.`]})]})}function Zn(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(Xn,{...e})}):Xn(e)}export{c as $,We as A,me as B,mt as C,$e as D,nt as E,ke as F,A as G,ce as H,Ee as I,y as J,ne as K,Ce as L,Re as M,Fe as N,Xe as O,Me as P,l as Q,be as R,vt as S,ot as T,ae as U,de as V,P as W,ee as X,h as Y,d as Z,Rt as _,Mn as a,Et as b,xn as c,ln as d,i as et,an as f,Ht as g,Kt as h,In as i,Ve as j,qe as k,_n as l,Xt as m,Wn as n,On as o,en as p,C as q,Bn as r,Tn as s,Jn as t,pn as u,Pt as v,ut as w,St as x,At as y,_e as z};