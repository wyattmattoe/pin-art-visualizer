var Iy=Object.defineProperty;var Fy=(r,t,i)=>t in r?Iy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var vn=(r,t,i)=>Fy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _d={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function zy(){if(lv)return wl;lv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return wl.Fragment=t,wl.jsx=i,wl.jsxs=i,wl}var cv;function By(){return cv||(cv=1,_d.exports=zy()),_d.exports}var kt=By(),vd={exports:{}},Cl={},xd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function Hy(){return uv||(uv=1,(function(r){function t(I,H){var rt=I.length;I.push(H);t:for(;0<rt;){var dt=rt-1>>>1,Tt=I[dt];if(0<l(Tt,H))I[dt]=H,I[rt]=Tt,rt=dt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],rt=I.pop();if(rt!==H){I[0]=rt;t:for(var dt=0,Tt=I.length,B=Tt>>>1;dt<B;){var Q=2*(dt+1)-1,_t=I[Q],Ut=Q+1,Nt=I[Ut];if(0>l(_t,rt))Ut<Tt&&0>l(Nt,_t)?(I[dt]=Nt,I[Ut]=rt,dt=Ut):(I[dt]=_t,I[Q]=rt,dt=Q);else if(Ut<Tt&&0>l(Nt,rt))I[dt]=Nt,I[Ut]=rt,dt=Ut;else break t}}return H}function l(I,H){var rt=I.sortIndex-H.sortIndex;return rt!==0?rt:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,T=!1,D=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=I)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(I){if(D=!1,C(I),!T)if(i(m)!==null)T=!0,N||(N=!0,Y());else{var H=i(p);H!==null&&W(z,H.startTime-I)}}var N=!1,P=-1,E=5,O=-1;function k(){return M?!0:!(r.unstable_now()-O<E)}function G(){if(M=!1,N){var I=r.unstable_now();O=I;var H=!0;try{t:{T=!1,D&&(D=!1,A(P),P=-1),y=!0;var rt=g;try{e:{for(C(I),v=i(m);v!==null&&!(v.expirationTime>I&&k());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,g=v.priorityLevel;var Tt=dt(v.expirationTime<=I);if(I=r.unstable_now(),typeof Tt=="function"){v.callback=Tt,C(I),H=!0;break e}v===i(m)&&s(m),C(I)}else s(m);v=i(m)}if(v!==null)H=!0;else{var B=i(p);B!==null&&W(z,B.startTime-I),H=!1}}break t}finally{v=null,g=rt,y=!1}H=void 0}}finally{H?Y():N=!1}}}var Y;if(typeof U=="function")Y=function(){U(G)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ct=nt.port2;nt.port1.onmessage=G,Y=function(){ct.postMessage(null)}}else Y=function(){x(G,0)};function W(I,H){P=x(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var rt=g;g=H;try{return I()}finally{g=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var rt=g;g=I;try{return H()}finally{g=rt}},r.unstable_scheduleCallback=function(I,H,rt){var dt=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?dt+rt:dt):rt=dt,I){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=rt+Tt,I={id:_++,callback:H,priorityLevel:I,startTime:rt,expirationTime:Tt,sortIndex:-1},rt>dt?(I.sortIndex=rt,t(p,I),i(m)===null&&I===i(p)&&(D?(A(P),P=-1):D=!0,W(z,rt-dt))):(I.sortIndex=Tt,t(m,I),T||y||(T=!0,N||(N=!0,Y()))),I},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(I){var H=g;return function(){var rt=g;g=H;try{return I.apply(this,arguments)}finally{g=rt}}}})(Sd)),Sd}var fv;function Gy(){return fv||(fv=1,xd.exports=Hy()),xd.exports}var Md={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function Vy(){if(hv)return xe;hv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function x(B,Q,_t){this.props=B,this.context=Q,this.refs=M,this.updater=_t||T}x.prototype.isReactComponent={},x.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=x.prototype;function U(B,Q,_t){this.props=B,this.context=Q,this.refs=M,this.updater=_t||T}var C=U.prototype=new A;C.constructor=U,D(C,x.prototype),C.isPureReactComponent=!0;var z=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(B,Q,_t){var Ut=_t.ref;return{$$typeof:r,type:B,key:Q,ref:Ut!==void 0?Ut:null,props:_t}}function k(B,Q){return O(B.type,Q,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function Y(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(_t){return Q[_t]})}var nt=/\/+/g;function ct(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?Y(""+B.key):Q.toString(36)}function W(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(N,N):(B.status="pending",B.then(function(Q){B.status==="pending"&&(B.status="fulfilled",B.value=Q)},function(Q){B.status==="pending"&&(B.status="rejected",B.reason=Q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,Q,_t,Ut,Nt){var it=typeof B;(it==="undefined"||it==="boolean")&&(B=null);var mt=!1;if(B===null)mt=!0;else switch(it){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(B.$$typeof){case r:case t:mt=!0;break;case _:return mt=B._init,I(mt(B._payload),Q,_t,Ut,Nt)}}if(mt)return Nt=Nt(B),mt=Ut===""?"."+ct(B,0):Ut,z(Nt)?(_t="",mt!=null&&(_t=mt.replace(nt,"$&/")+"/"),I(Nt,Q,_t,"",function(te){return te})):Nt!=null&&(G(Nt)&&(Nt=k(Nt,_t+(Nt.key==null||B&&B.key===Nt.key?"":(""+Nt.key).replace(nt,"$&/")+"/")+mt)),Q.push(Nt)),1;mt=0;var Mt=Ut===""?".":Ut+":";if(z(B))for(var Dt=0;Dt<B.length;Dt++)Ut=B[Dt],it=Mt+ct(Ut,Dt),mt+=I(Ut,Q,_t,it,Nt);else if(Dt=y(B),typeof Dt=="function")for(B=Dt.call(B),Dt=0;!(Ut=B.next()).done;)Ut=Ut.value,it=Mt+ct(Ut,Dt++),mt+=I(Ut,Q,_t,it,Nt);else if(it==="object"){if(typeof B.then=="function")return I(W(B),Q,_t,Ut,Nt);throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return mt}function H(B,Q,_t){if(B==null)return B;var Ut=[],Nt=0;return I(B,Ut,"","",function(it){return Q.call(_t,it,Nt++)}),Ut}function rt(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(_t){(B._status===0||B._status===-1)&&(B._status=1,B._result=_t)},function(_t){(B._status===0||B._status===-1)&&(B._status=2,B._result=_t)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var dt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Tt={map:H,forEach:function(B,Q,_t){H(B,function(){Q.apply(this,arguments)},_t)},count:function(B){var Q=0;return H(B,function(){Q++}),Q},toArray:function(B){return H(B,function(Q){return Q})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return xe.Activity=v,xe.Children=Tt,xe.Component=x,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=U,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,xe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return P.H.useMemoCache(B)}},xe.cache=function(B){return function(){return B.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(B,Q,_t){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ut=D({},B.props),Nt=B.key;if(Q!=null)for(it in Q.key!==void 0&&(Nt=""+Q.key),Q)!E.call(Q,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Q.ref===void 0||(Ut[it]=Q[it]);var it=arguments.length-2;if(it===1)Ut.children=_t;else if(1<it){for(var mt=Array(it),Mt=0;Mt<it;Mt++)mt[Mt]=arguments[Mt+2];Ut.children=mt}return O(B.type,Nt,Ut)},xe.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},xe.createElement=function(B,Q,_t){var Ut,Nt={},it=null;if(Q!=null)for(Ut in Q.key!==void 0&&(it=""+Q.key),Q)E.call(Q,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(Nt[Ut]=Q[Ut]);var mt=arguments.length-2;if(mt===1)Nt.children=_t;else if(1<mt){for(var Mt=Array(mt),Dt=0;Dt<mt;Dt++)Mt[Dt]=arguments[Dt+2];Nt.children=Mt}if(B&&B.defaultProps)for(Ut in mt=B.defaultProps,mt)Nt[Ut]===void 0&&(Nt[Ut]=mt[Ut]);return O(B,it,Nt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(B){return{$$typeof:d,render:B}},xe.isValidElement=G,xe.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:rt}},xe.memo=function(B,Q){return{$$typeof:p,type:B,compare:Q===void 0?null:Q}},xe.startTransition=function(B){var Q=P.T,_t={};P.T=_t;try{var Ut=B(),Nt=P.S;Nt!==null&&Nt(_t,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(N,dt)}catch(it){dt(it)}finally{Q!==null&&_t.types!==null&&(Q.types=_t.types),P.T=Q}},xe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},xe.use=function(B){return P.H.use(B)},xe.useActionState=function(B,Q,_t){return P.H.useActionState(B,Q,_t)},xe.useCallback=function(B,Q){return P.H.useCallback(B,Q)},xe.useContext=function(B){return P.H.useContext(B)},xe.useDebugValue=function(){},xe.useDeferredValue=function(B,Q){return P.H.useDeferredValue(B,Q)},xe.useEffect=function(B,Q){return P.H.useEffect(B,Q)},xe.useEffectEvent=function(B){return P.H.useEffectEvent(B)},xe.useId=function(){return P.H.useId()},xe.useImperativeHandle=function(B,Q,_t){return P.H.useImperativeHandle(B,Q,_t)},xe.useInsertionEffect=function(B,Q){return P.H.useInsertionEffect(B,Q)},xe.useLayoutEffect=function(B,Q){return P.H.useLayoutEffect(B,Q)},xe.useMemo=function(B,Q){return P.H.useMemo(B,Q)},xe.useOptimistic=function(B,Q){return P.H.useOptimistic(B,Q)},xe.useReducer=function(B,Q,_t){return P.H.useReducer(B,Q,_t)},xe.useRef=function(B){return P.H.useRef(B)},xe.useState=function(B){return P.H.useState(B)},xe.useSyncExternalStore=function(B,Q,_t){return P.H.useSyncExternalStore(B,Q,_t)},xe.useTransition=function(){return P.H.useTransition()},xe.version="19.2.5",xe}var dv;function rm(){return dv||(dv=1,Md.exports=Vy()),Md.exports}var yd={exports:{}},ii={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function ky(){if(pv)return ii;pv=1;var r=rm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ii.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ii.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},ii.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},ii.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},ii.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ii.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ii.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},ii.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ii.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},ii.requestFormReset=function(m){s.d.r(m)},ii.unstable_batchedUpdates=function(m,p){return m(p)},ii.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},ii.useFormStatus=function(){return f.H.useHostTransitionStatus()},ii.version="19.2.5",ii}var mv;function Xy(){if(mv)return yd.exports;mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=ky(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Wy(){if(gv)return Cl;gv=1;var r=Gy(),t=rm(),i=Xy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,w=u.child;w;){if(w===a){S=!0,a=u,o=h;break}if(w===o){S=!0,o=u,a=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===a){S=!0,a=h,o=u;break}if(w===o){S=!0,o=h,a=u;break}w=w.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var W=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},dt=[],Tt=-1;function B(e){return{current:e}}function Q(e){0>Tt||(e.current=dt[Tt],dt[Tt]=null,Tt--)}function _t(e,n){Tt++,dt[Tt]=e.current,e.current=n}var Ut=B(null),Nt=B(null),it=B(null),mt=B(null);function Mt(e,n){switch(_t(it,n),_t(Nt,e),_t(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?U_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=U_(n),e=N_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Ut),_t(Ut,e)}function Dt(){Q(Ut),Q(Nt),Q(it)}function te(e){e.memoizedState!==null&&_t(mt,e);var n=Ut.current,a=N_(n,e.type);n!==a&&(_t(Nt,e),_t(Ut,a))}function ie(e){Nt.current===e&&(Q(Ut),Q(Nt)),mt.current===e&&(Q(mt),El._currentValue=rt)}var Ie,wt;function Et(e){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",wt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+wt}var Ct=!1;function ne(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){ot=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var V=S.split(`
`),st=w.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var gt=`
`+V[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Et(a):""}function he(e,n){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return Et("Activity");default:return""}}function Fe(e){try{var n="",a=null;do n+=he(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,Ke=r.unstable_cancelCallback,ge=r.unstable_shouldYield,Le=r.unstable_requestPaint,Pt=r.unstable_now,Ve=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,F=r.unstable_NormalPriority,ht=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,It=r.log,Ot=r.unstable_setDisableYieldValue,lt=null,ft=null;function Gt(e){if(typeof It=="function"&&Ot(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(lt,e)}catch{}}var Vt=Math.clz32?Math.clz32:se,Ft=Math.log,bt=Math.LN2;function se(e){return e>>>=0,e===0?32:31-(Ft(e)/bt|0)|0}var ce=256,Me=262144,X=4194304;function Lt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Lt(o):(S&=w,S!==0?u=Lt(S):a||(a=w&~e,a!==0&&(u=Lt(a))))):(w=o&~h,w!==0?u=Lt(w):S!==0?u=Lt(S):a||(a=o&~e,a!==0&&(u=Lt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Bt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function Qt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ue(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tn(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-Vt(a),yt=1<<gt;w[gt]=0,V[gt]=-1;var ot=st[gt];if(ot!==null)for(st[gt]=null,gt=0;gt<ot.length;gt++){var ut=ot[gt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&Ce(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Ce(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function re(e,n){var a=n&-n;return a=(a&42)!==0?1:Ae(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ia(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xt(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:ev(e.type))}function gi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var fn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+fn,gn="__reactProps$"+fn,_i="__reactContainer$"+fn,wi="__reactEvents$"+fn,Ca="__reactListeners$"+fn,vi="__reactHandles$"+fn,Ci="__reactResources$"+fn,Hn="__reactMarker$"+fn;function Gn(e){delete e[Qe],delete e[gn],delete e[wi],delete e[Ca],delete e[vi]}function Di(e){var n=e[Qe];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[Qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=B_(e);e!==null;){if(a=e[Qe])return a;e=B_(e)}return n}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[Qe]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $n(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ci(e){var n=e[Ci];return n||(n=e[Ci]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qe(e){e[Hn]=!0}var Da=new Set,R={};function j(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(R[e]=n,e=0;e<n.length;e++)Da.add(n[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},Ht={};function qt(e){return Ze.call(Ht,e)?!0:Ze.call(tt,e)?!1:$.test(e)?Ht[e]=!0:(tt[e]=!0,!1)}function zt(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fe(e){if(!e._valueTracker){var n=oe(e)?"checked":"value";e._valueTracker=$t(e,n,""+e[n])}}function cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ke=/[\n"\\]/g;function Be(e){return e.replace(ke,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function jt(e,n,a,o,u,h,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?be(e,S,Jt(n)):a!=null?be(e,S,Jt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Jt(w):e.removeAttribute("name")}function hn(e,n,a,o,u,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){fe(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),fe(e)}function be(e,n,a){n==="number"&&Je(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ti(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function xi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),fe(e)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var He=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||He.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Si(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&sn(e,h,n[h])}function Xe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(e){return Yi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Cr=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,ss=null;function rc(e){var n=Jn(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(jt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));jt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&cn(o)}break t;case"textarea":ti(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var Dr=!1;function oc(e,n,a){if(Dr)return e(n,a);Dr=!0;try{var o=e(n);return o}finally{if(Dr=!1,(as!==null||ss!==null)&&(Xc(),as&&(n=as,e=ss,ss=as=null,rc(n),e)))for(n=0;n<e.length;n++)rc(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=!1;if(sa)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Vo=!1}var ra=null,ko=null,Ur=null;function lc(){if(Ur)return Ur;var e,n=ko,a=n.length,o,u="value"in ra?ra.value:ra.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return Ur=u.slice(e,1<o?1-o:void 0)}function Nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function Or(){return!1}function ni(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Lr:Or,this.isPropagationStopped=Or,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=ni(Na),os=v({},Na,{view:0,detail:0}),ve=ni(os),$e,Nn,Ln,ls=v({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?($e=e.screenX-Ln.screenX,Nn=e.screenY-Ln.screenY):Nn=$e=0,Ln=e),$e)},movementY:function(e){return"movementY"in e?e.movementY:Nn}}),Xo=ni(ls),Mi=v({},ls,{dataTransfer:0}),Sf=ni(Mi),Mf=v({},os,{relatedTarget:0}),Pr=ni(Mf),zS=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=ni(zS),HS=v({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),GS=ni(HS),VS=v({},Na,{data:0}),Pm=ni(VS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=WS[e])?!!n[e]:!1}function yf(){return YS}var qS=v({},os,{key:function(e){if(e.key){var n=kS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?XS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jS=ni(qS),ZS=v({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=ni(ZS),KS=v({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),QS=ni(KS),JS=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=ni(JS),tM=v({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eM=ni(tM),nM=v({},Na,{newState:0,oldState:0}),iM=ni(nM),aM=[9,13,27,32],bf=sa&&"CompositionEvent"in window,Wo=null;sa&&"documentMode"in document&&(Wo=document.documentMode);var sM=sa&&"TextEvent"in window&&!Wo,Fm=sa&&(!bf||Wo&&8<Wo&&11>=Wo),zm=" ",Bm=!1;function Hm(e,n){switch(e){case"keyup":return aM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function rM(e,n){switch(e){case"compositionend":return Gm(n);case"keypress":return n.which!==32?null:(Bm=!0,zm);case"textInput":return e=n.data,e===zm&&Bm?null:e;default:return null}}function oM(e,n){if(Ir)return e==="compositionend"||!bf&&Hm(e,n)?(e=lc(),Ur=ko=ra=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fm&&n.locale!=="ko"?null:n.data;default:return null}}var lM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lM[e.type]:n==="textarea"}function km(e,n,a,o){as?ss?ss.push(o):ss=[o]:as=o,n=Qc(n,"onChange"),0<n.length&&(a=new Ys("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Yo=null,qo=null;function cM(e){T_(e,0)}function cc(e){var n=$n(e);if(cn(n))return e}function Xm(e,n){if(e==="change")return n}var Wm=!1;if(sa){var Ef;if(sa){var Tf="oninput"in document;if(!Tf){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Tf=typeof Ym.oninput=="function"}Ef=Tf}else Ef=!1;Wm=Ef&&(!document.documentMode||9<document.documentMode)}function qm(){Yo&&(Yo.detachEvent("onpropertychange",jm),qo=Yo=null)}function jm(e){if(e.propertyName==="value"&&cc(qo)){var n=[];km(n,qo,e,Xs(e)),oc(cM,n)}}function uM(e,n,a){e==="focusin"?(qm(),Yo=n,qo=a,Yo.attachEvent("onpropertychange",jm)):e==="focusout"&&qm()}function fM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(qo)}function hM(e,n){if(e==="click")return cc(n)}function dM(e,n){if(e==="input"||e==="change")return cc(n)}function pM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ui=typeof Object.is=="function"?Object.is:pM;function jo(e,n){if(Ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ze.call(n,u)||!Ui(e[u],n[u]))return!1}return!0}function Zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Km(e,n){var a=Zm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zm(a)}}function Qm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Je(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Je(e.document)}return n}function Af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var mM=sa&&"documentMode"in document&&11>=document.documentMode,Fr=null,Rf=null,Zo=null,wf=!1;function $m(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wf||Fr==null||Fr!==Je(o)||(o=Fr,"selectionStart"in o&&Af(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zo&&jo(Zo,o)||(Zo=o,o=Qc(Rf,"onSelect"),0<o.length&&(n=new Ys("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function qs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},Cf={},t0={};sa&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function js(e){if(Cf[e])return Cf[e];if(!zr[e])return e;var n=zr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in t0)return Cf[e]=n[a];return e}var e0=js("animationend"),n0=js("animationiteration"),i0=js("animationstart"),gM=js("transitionrun"),_M=js("transitionstart"),vM=js("transitioncancel"),a0=js("transitionend"),s0=new Map,Df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Df.push("scrollEnd");function oa(e,n){s0.set(e,n),j(n,[e])}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qi=[],Br=0,Uf=0;function fc(){for(var e=Br,n=Uf=Br=0;n<e;){var a=qi[n];qi[n++]=null;var o=qi[n];qi[n++]=null;var u=qi[n];qi[n++]=null;var h=qi[n];if(qi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&r0(a,u,h)}}function hc(e,n,a,o){qi[Br++]=e,qi[Br++]=n,qi[Br++]=a,qi[Br++]=o,Uf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nf(e,n,a,o){return hc(e,n,a,o),dc(e)}function Zs(e,n){return hc(e,null,null,n),dc(e)}function r0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function dc(e){if(50<_l)throw _l=0,Gh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function xM(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,n,a,o){return new xM(e,n,a,o)}function Lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,n){var a=e.alternate;return a===null?(a=Ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function o0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pc(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Lf(e)&&(S=1);else if(typeof e=="string")S=Ey(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=Ni(31,a,n,u),e.elementType=O,e.lanes=h,e;case D:return Ks(a.children,u,h,n);case M:S=8,u|=24;break;case x:return e=Ni(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case z:return e=Ni(13,a,n,u),e.elementType=z,e.lanes=h,e;case N:return e=Ni(19,a,n,u),e.elementType=N,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case A:S=9;break t;case C:S=11;break t;case P:S=14;break t;case E:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Ni(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ks(e,n,a,o){return e=Ni(7,e,o,n),e.lanes=a,e}function Of(e,n,a){return e=Ni(6,e,null,n),e.lanes=a,e}function l0(e){var n=Ni(18,null,null,0);return n.stateNode=e,n}function Pf(e,n,a){return n=Ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var c0=new WeakMap;function ji(e,n){if(typeof e=="object"&&e!==null){var a=c0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Fe(n)},c0.set(e,n),n)}return{value:e,source:n,stack:Fe(n)}}var Gr=[],Vr=0,mc=null,Ko=0,Zi=[],Ki=0,cs=null,va=1,xa="";function Oa(e,n){Gr[Vr++]=Ko,Gr[Vr++]=mc,mc=e,Ko=n}function u0(e,n,a){Zi[Ki++]=va,Zi[Ki++]=xa,Zi[Ki++]=cs,cs=e;var o=va;e=xa;var u=32-Vt(o)-1;o&=~(1<<u),a+=1;var h=32-Vt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,va=1<<32-Vt(n)+u|a<<u|o,xa=h+e}else va=1<<h|a<<u|o,xa=e}function If(e){e.return!==null&&(Oa(e,1),u0(e,1,0))}function Ff(e){for(;e===mc;)mc=Gr[--Vr],Gr[Vr]=null,Ko=Gr[--Vr],Gr[Vr]=null;for(;e===cs;)cs=Zi[--Ki],Zi[Ki]=null,xa=Zi[--Ki],Zi[Ki]=null,va=Zi[--Ki],Zi[Ki]=null}function f0(e,n){Zi[Ki++]=va,Zi[Ki++]=xa,Zi[Ki++]=cs,va=n.id,xa=n.overflow,cs=e}var qn=null,pn=null,Oe=!1,us=null,Qi=!1,zf=Error(s(519));function fs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qo(ji(n,e)),zf}function h0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Qe]=e,n[gn]=o,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<xl.length;a++)we(xl[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),hn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),xi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C_(n.textContent,a)?(o.popover!=null&&(we("beforetoggle",n),we("toggle",n)),o.onScroll!=null&&we("scroll",n),o.onScrollEnd!=null&&we("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||fs(e,!0)}function d0(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 31:case 13:Qi=!1;return;case 27:case 3:Qi=!0;return;default:qn=qn.return}}function kr(e){if(e!==qn)return!1;if(!Oe)return d0(e),Oe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nd(e.type,e.memoizedProps)),a=!a),a&&pn&&fs(e),d0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=z_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=z_(e)}else n===27?(n=pn,Ts(e.type)?(e=od,od=null,pn=e):pn=n):pn=qn?$i(e.stateNode.nextSibling):null;return!0}function Qs(){pn=qn=null,Oe=!1}function Bf(){var e=us;return e!==null&&(Ti===null?Ti=e:Ti.push.apply(Ti,e),us=null),e}function Qo(e){us===null?us=[e]:us.push(e)}var Hf=B(null),Js=null,Pa=null;function hs(e,n,a){_t(Hf,n._currentValue),n._currentValue=a}function Ia(e){e._currentValue=Hf.current,Q(Hf)}function Gf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Vf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var V=0;V<n.length;V++)if(w.context===n[V]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Gf(h.return,a,e),o||(S=null);break t}h=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Gf(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Xr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=u.type;Ui(u.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(u===mt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}u=u.return}e!==null&&Vf(n,e,a,o),n.flags|=262144}function gc(e){for(e=e.firstContext;e!==null;){if(!Ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $s(e){Js=e,Pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jn(e){return p0(Js,e)}function _c(e,n){return Js===null&&$s(e),p0(e,n)}function p0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pa===null){if(e===null)throw Error(s(308));Pa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pa=Pa.next=n;return a}var SM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},MM=r.unstable_scheduleCallback,yM=r.unstable_NormalPriority,Rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kf(){return{controller:new SM,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&MM(yM,function(){e.controller.abort()})}var $o=null,Xf=0,Wr=0,Yr=null;function bM(e,n){if($o===null){var a=$o=[];Xf=0,Wr=qh(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xf++,n.then(m0,m0),n}function m0(){if(--Xf===0&&$o!==null){Yr!==null&&(Yr.status="fulfilled");var e=$o;$o=null,Wr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function EM(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var g0=I.S;I.S=function(e,n){$g=Pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&bM(e,n),g0!==null&&g0(e,n)};var tr=B(null);function Wf(){var e=tr.current;return e!==null?e:un.pooledCache}function vc(e,n){n===null?_t(tr,tr.current):_t(tr,n.pool)}function _0(){var e=Wf();return e===null?null:{parent:Rn._currentValue,pool:e}}var qr=Error(s(460)),Yf=Error(s(474)),xc=Error(s(542)),Sc={then:function(){}};function v0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function x0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,M0(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=un,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,M0(e),e}throw nr=n,qr}}function er(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,qr):a}}var nr=null;function S0(){if(nr===null)throw Error(s(459));var e=nr;return nr=null,e}function M0(e){if(e===qr||e===xc)throw Error(s(483))}var jr=null,tl=0;function Mc(e){var n=tl;return tl+=1,jr===null&&(jr=[]),x0(jr,e,n)}function el(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function y0(e){function n(J,Z){if(e){var at=J.deletions;at===null?(J.deletions=[Z],J.flags|=16):at.push(Z)}}function a(J,Z){if(!e)return null;for(;Z!==null;)n(J,Z),Z=Z.sibling;return null}function o(J){for(var Z=new Map;J!==null;)J.key!==null?Z.set(J.key,J):Z.set(J.index,J),J=J.sibling;return Z}function u(J,Z){return J=La(J,Z),J.index=0,J.sibling=null,J}function h(J,Z,at){return J.index=at,e?(at=J.alternate,at!==null?(at=at.index,at<Z?(J.flags|=67108866,Z):at):(J.flags|=67108866,Z)):(J.flags|=1048576,Z)}function S(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function w(J,Z,at,St){return Z===null||Z.tag!==6?(Z=Of(at,J.mode,St),Z.return=J,Z):(Z=u(Z,at),Z.return=J,Z)}function V(J,Z,at,St){var le=at.type;return le===D?gt(J,Z,at.props.children,St,at.key):Z!==null&&(Z.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===E&&er(le)===Z.type)?(Z=u(Z,at.props),el(Z,at),Z.return=J,Z):(Z=pc(at.type,at.key,at.props,null,J.mode,St),el(Z,at),Z.return=J,Z)}function st(J,Z,at,St){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==at.containerInfo||Z.stateNode.implementation!==at.implementation?(Z=Pf(at,J.mode,St),Z.return=J,Z):(Z=u(Z,at.children||[]),Z.return=J,Z)}function gt(J,Z,at,St,le){return Z===null||Z.tag!==7?(Z=Ks(at,J.mode,St,le),Z.return=J,Z):(Z=u(Z,at),Z.return=J,Z)}function yt(J,Z,at){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Of(""+Z,J.mode,at),Z.return=J,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return at=pc(Z.type,Z.key,Z.props,null,J.mode,at),el(at,Z),at.return=J,at;case T:return Z=Pf(Z,J.mode,at),Z.return=J,Z;case E:return Z=er(Z),yt(J,Z,at)}if(W(Z)||Y(Z))return Z=Ks(Z,J.mode,at,null),Z.return=J,Z;if(typeof Z.then=="function")return yt(J,Mc(Z),at);if(Z.$$typeof===U)return yt(J,_c(J,Z),at);yc(J,Z)}return null}function ot(J,Z,at,St){var le=Z!==null?Z.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return le!==null?null:w(J,Z,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===le?V(J,Z,at,St):null;case T:return at.key===le?st(J,Z,at,St):null;case E:return at=er(at),ot(J,Z,at,St)}if(W(at)||Y(at))return le!==null?null:gt(J,Z,at,St,null);if(typeof at.then=="function")return ot(J,Z,Mc(at),St);if(at.$$typeof===U)return ot(J,Z,_c(J,at),St);yc(J,at)}return null}function ut(J,Z,at,St,le){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return J=J.get(at)||null,w(Z,J,""+St,le);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return J=J.get(St.key===null?at:St.key)||null,V(Z,J,St,le);case T:return J=J.get(St.key===null?at:St.key)||null,st(Z,J,St,le);case E:return St=er(St),ut(J,Z,at,St,le)}if(W(St)||Y(St))return J=J.get(at)||null,gt(Z,J,St,le,null);if(typeof St.then=="function")return ut(J,Z,at,Mc(St),le);if(St.$$typeof===U)return ut(J,Z,at,_c(Z,St),le);yc(Z,St)}return null}function ee(J,Z,at,St){for(var le=null,We=null,ae=Z,Ee=Z=0,Ue=null;ae!==null&&Ee<at.length;Ee++){ae.index>Ee?(Ue=ae,ae=null):Ue=ae.sibling;var Ye=ot(J,ae,at[Ee],St);if(Ye===null){ae===null&&(ae=Ue);break}e&&ae&&Ye.alternate===null&&n(J,ae),Z=h(Ye,Z,Ee),We===null?le=Ye:We.sibling=Ye,We=Ye,ae=Ue}if(Ee===at.length)return a(J,ae),Oe&&Oa(J,Ee),le;if(ae===null){for(;Ee<at.length;Ee++)ae=yt(J,at[Ee],St),ae!==null&&(Z=h(ae,Z,Ee),We===null?le=ae:We.sibling=ae,We=ae);return Oe&&Oa(J,Ee),le}for(ae=o(ae);Ee<at.length;Ee++)Ue=ut(ae,J,Ee,at[Ee],St),Ue!==null&&(e&&Ue.alternate!==null&&ae.delete(Ue.key===null?Ee:Ue.key),Z=h(Ue,Z,Ee),We===null?le=Ue:We.sibling=Ue,We=Ue);return e&&ae.forEach(function(Ds){return n(J,Ds)}),Oe&&Oa(J,Ee),le}function de(J,Z,at,St){if(at==null)throw Error(s(151));for(var le=null,We=null,ae=Z,Ee=Z=0,Ue=null,Ye=at.next();ae!==null&&!Ye.done;Ee++,Ye=at.next()){ae.index>Ee?(Ue=ae,ae=null):Ue=ae.sibling;var Ds=ot(J,ae,Ye.value,St);if(Ds===null){ae===null&&(ae=Ue);break}e&&ae&&Ds.alternate===null&&n(J,ae),Z=h(Ds,Z,Ee),We===null?le=Ds:We.sibling=Ds,We=Ds,ae=Ue}if(Ye.done)return a(J,ae),Oe&&Oa(J,Ee),le;if(ae===null){for(;!Ye.done;Ee++,Ye=at.next())Ye=yt(J,Ye.value,St),Ye!==null&&(Z=h(Ye,Z,Ee),We===null?le=Ye:We.sibling=Ye,We=Ye);return Oe&&Oa(J,Ee),le}for(ae=o(ae);!Ye.done;Ee++,Ye=at.next())Ye=ut(ae,J,Ee,Ye.value,St),Ye!==null&&(e&&Ye.alternate!==null&&ae.delete(Ye.key===null?Ee:Ye.key),Z=h(Ye,Z,Ee),We===null?le=Ye:We.sibling=Ye,We=Ye);return e&&ae.forEach(function(Py){return n(J,Py)}),Oe&&Oa(J,Ee),le}function ln(J,Z,at,St){if(typeof at=="object"&&at!==null&&at.type===D&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var le=at.key;Z!==null;){if(Z.key===le){if(le=at.type,le===D){if(Z.tag===7){a(J,Z.sibling),St=u(Z,at.props.children),St.return=J,J=St;break t}}else if(Z.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===E&&er(le)===Z.type){a(J,Z.sibling),St=u(Z,at.props),el(St,at),St.return=J,J=St;break t}a(J,Z);break}else n(J,Z);Z=Z.sibling}at.type===D?(St=Ks(at.props.children,J.mode,St,at.key),St.return=J,J=St):(St=pc(at.type,at.key,at.props,null,J.mode,St),el(St,at),St.return=J,J=St)}return S(J);case T:t:{for(le=at.key;Z!==null;){if(Z.key===le)if(Z.tag===4&&Z.stateNode.containerInfo===at.containerInfo&&Z.stateNode.implementation===at.implementation){a(J,Z.sibling),St=u(Z,at.children||[]),St.return=J,J=St;break t}else{a(J,Z);break}else n(J,Z);Z=Z.sibling}St=Pf(at,J.mode,St),St.return=J,J=St}return S(J);case E:return at=er(at),ln(J,Z,at,St)}if(W(at))return ee(J,Z,at,St);if(Y(at)){if(le=Y(at),typeof le!="function")throw Error(s(150));return at=le.call(at),de(J,Z,at,St)}if(typeof at.then=="function")return ln(J,Z,Mc(at),St);if(at.$$typeof===U)return ln(J,Z,_c(J,at),St);yc(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Z!==null&&Z.tag===6?(a(J,Z.sibling),St=u(Z,at),St.return=J,J=St):(a(J,Z),St=Of(at,J.mode,St),St.return=J,J=St),S(J)):a(J,Z)}return function(J,Z,at,St){try{tl=0;var le=ln(J,Z,at,St);return jr=null,le}catch(ae){if(ae===qr||ae===xc)throw ae;var We=Ni(29,ae,null,J.mode);return We.lanes=St,We.return=J,We}finally{}}}var ir=y0(!0),b0=y0(!1),ds=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ps(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ms(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dc(e),r0(e,null,a),n}return hc(e,o,n,a),dc(e)}function nl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,vt(e,a)}}function Zf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Kf=!1;function il(){if(Kf){var e=Yr;if(e!==null)throw e}}function al(e,n,a,o){Kf=!1;var u=e.updateQueue;ds=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var V=w,st=V.next;V.next=null,S===null?h=st:S.next=st,S=V;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,w=gt.lastBaseUpdate,w!==S&&(w===null?gt.firstBaseUpdate=st:w.next=st,gt.lastBaseUpdate=V))}if(h!==null){var yt=u.baseState;S=0,gt=st=V=null,w=h;do{var ot=w.lane&-536870913,ut=ot!==w.lane;if(ut?(De&ot)===ot:(o&ot)===ot){ot!==0&&ot===Wr&&(Kf=!0),gt!==null&&(gt=gt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ee=e,de=w;ot=n;var ln=a;switch(de.tag){case 1:if(ee=de.payload,typeof ee=="function"){yt=ee.call(ln,yt,ot);break t}yt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=de.payload,ot=typeof ee=="function"?ee.call(ln,yt,ot):ee,ot==null)break t;yt=v({},yt,ot);break t;case 2:ds=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},gt===null?(st=gt=ut,V=yt):gt=gt.next=ut,S|=ot;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ut=w,w=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);gt===null&&(V=yt),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),Ss|=S,e.lanes=S,e.memoizedState=yt}}function E0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function T0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)E0(a[e],n)}var Zr=B(null),bc=B(0);function A0(e,n){e=Wa,_t(bc,e),_t(Zr,n),Wa=e|n.baseLanes}function Qf(){_t(bc,Wa),_t(Zr,Zr.current)}function Jf(){Wa=bc.current,Q(Zr),Q(bc)}var Li=B(null),Ji=null;function gs(e){var n=e.alternate;_t(En,En.current&1),_t(Li,e),Ji===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(Ji=e)}function $f(e){_t(En,En.current),_t(Li,e),Ji===null&&(Ji=e)}function R0(e){e.tag===22?(_t(En,En.current),_t(Li,e),Ji===null&&(Ji=e)):_s()}function _s(){_t(En,En.current),_t(Li,Li.current)}function Oi(e){Q(Li),Ji===e&&(Ji=null),Q(En)}var En=B(0);function Ec(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||rd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=0,ye=null,rn=null,wn=null,Tc=!1,Kr=!1,ar=!1,Ac=0,sl=0,Qr=null,TM=0;function Sn(){throw Error(s(321))}function th(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ui(e[a],n[a]))return!1;return!0}function eh(e,n,a,o,u,h){return Fa=h,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?ug:gh,ar=!1,h=a(o,u),ar=!1,Kr&&(h=C0(n,a,o,u)),w0(e),h}function w0(e){I.H=ll;var n=rn!==null&&rn.next!==null;if(Fa=0,wn=rn=ye=null,Tc=!1,sl=0,Qr=null,n)throw Error(s(300));e===null||Cn||(e=e.dependencies,e!==null&&gc(e)&&(Cn=!0))}function C0(e,n,a,o){ye=e;var u=0;do{if(Kr&&(Qr=null),sl=0,Kr=!1,25<=u)throw Error(s(301));if(u+=1,wn=rn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=fg,h=n(a,o)}while(Kr);return h}function AM(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?rl(n):n,e=e.useState()[0],(rn!==null?rn.memoizedState:null)!==e&&(ye.flags|=1024),n}function nh(){var e=Ac!==0;return Ac=0,e}function ih(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ah(e){if(Tc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tc=!1}Fa=0,wn=rn=ye=null,Kr=!1,sl=Ac=0,Qr=null}function ui(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?ye.memoizedState=wn=e:wn=wn.next=e,wn}function Tn(){if(rn===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=rn.next;var n=wn===null?ye.memoizedState:wn.next;if(n!==null)wn=n,rn=e;else{if(e===null)throw ye.alternate===null?Error(s(467)):Error(s(310));rn=e,e={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},wn===null?ye.memoizedState=wn=e:wn=wn.next=e}return wn}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var n=sl;return sl+=1,Qr===null&&(Qr=[]),e=x0(Qr,e,n),n=ye,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?ug:gh),e}function wc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===U)return jn(e)}throw Error(s(438,String(e)))}function sh(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rc(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=k;return n.index++,a}function za(e,n){return typeof n=="function"?n(e):n}function Cc(e){var n=Tn();return rh(n,rn,e)}function rh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var w=S=null,V=null,st=n,gt=!1;do{var yt=st.lane&-536870913;if(yt!==st.lane?(De&yt)===yt:(Fa&yt)===yt){var ot=st.revertLane;if(ot===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),yt===Wr&&(gt=!0);else if((Fa&ot)===ot){st=st.next,ot===Wr&&(gt=!0);continue}else yt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(w=V=yt,S=h):V=V.next=yt,ye.lanes|=ot,Ss|=ot;yt=st.action,ar&&a(h,yt),h=st.hasEagerState?st.eagerState:a(h,yt)}else ot={lane:yt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(w=V=ot,S=h):V=V.next=ot,ye.lanes|=yt,Ss|=yt;st=st.next}while(st!==null&&st!==n);if(V===null?S=h:V.next=w,!Ui(h,e.memoizedState)&&(Cn=!0,gt&&(a=Yr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function oh(e){var n=Tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Ui(h,n.memoizedState)||(Cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function D0(e,n,a){var o=ye,u=Tn(),h=Oe;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Ui((rn||u).memoizedState,a);if(S&&(u.memoizedState=a,Cn=!0),u=u.queue,uh(L0.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||wn!==null&&wn.memoizedState.tag&1){if(o.flags|=2048,Jr(9,{destroy:void 0},N0.bind(null,o,u,a,n),null),un===null)throw Error(s(349));h||(Fa&127)!==0||U0(o,n,a)}return a}function U0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=Rc(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function N0(e,n,a,o){n.value=a,n.getSnapshot=o,O0(n)&&P0(e)}function L0(e,n,a){return a(function(){O0(n)&&P0(e)})}function O0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ui(e,a)}catch{return!0}}function P0(e){var n=Zs(e,2);n!==null&&Ai(n,e,2)}function lh(e){var n=ui();if(typeof e=="function"){var a=e;if(e=a(),ar){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},n}function I0(e,n,a,o){return e.baseState=a,rh(e,rn,typeof o=="function"?o:za)}function RM(e,n,a,o,u){if(Nc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,F0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function F0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,S={};I.T=S;try{var w=a(u,o),V=I.S;V!==null&&V(S,w),z0(e,n,w)}catch(st){ch(e,n,st)}finally{h!==null&&S.types!==null&&(h.types=S.types),I.T=h}}else try{h=a(u,o),z0(e,n,h)}catch(st){ch(e,n,st)}}function z0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){B0(e,n,o)},function(o){return ch(e,n,o)}):B0(e,n,a)}function B0(e,n,a){n.status="fulfilled",n.value=a,H0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,F0(e,a)))}function ch(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,H0(n),n=n.next;while(n!==o)}e.action=null}function H0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function G0(e,n){return n}function V0(e,n){if(Oe){var a=un.formState;if(a!==null){t:{var o=ye;if(Oe){if(pn){e:{for(var u=pn,h=Qi;u.nodeType!==8;){if(!h){u=null;break e}if(u=$i(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){pn=$i(u.nextSibling),o=u.data==="F!";break t}}fs(o)}o=!1}o&&(n=a[0])}}return a=ui(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G0,lastRenderedState:n},a.queue=o,a=og.bind(null,ye,o),o.dispatch=a,o=lh(!1),h=mh.bind(null,ye,!1,o.queue),o=ui(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=RM.bind(null,ye,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function k0(e){var n=Tn();return X0(n,rn,e)}function X0(e,n,a){if(n=rh(e,n,G0)[0],e=Cc(za)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=rl(n)}catch(S){throw S===qr?xc:S}else o=n;n=Tn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,Jr(9,{destroy:void 0},wM.bind(null,u,a),null)),[o,h,e]}function wM(e,n){e.action=n}function W0(e){var n=Tn(),a=rn;if(a!==null)return X0(n,a,e);Tn(),n=n.memoizedState,a=Tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Rc(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Y0(){return Tn().memoizedState}function Dc(e,n,a,o){var u=ui();ye.flags|=e,u.memoizedState=Jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Uc(e,n,a,o){var u=Tn();o=o===void 0?null:o;var h=u.memoizedState.inst;rn!==null&&o!==null&&th(o,rn.memoizedState.deps)?u.memoizedState=Jr(n,h,a,o):(ye.flags|=e,u.memoizedState=Jr(1|n,h,a,o))}function q0(e,n){Dc(8390656,8,e,n)}function uh(e,n){Uc(2048,8,e,n)}function CM(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=Rc(),ye.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function j0(e){var n=Tn().memoizedState;return CM({ref:n,nextImpl:e}),function(){if((je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Z0(e,n){return Uc(4,2,e,n)}function K0(e,n){return Uc(4,4,e,n)}function Q0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function J0(e,n,a){a=a!=null?a.concat([e]):null,Uc(4,4,Q0.bind(null,n,e),a)}function fh(){}function $0(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&th(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function tg(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&th(n,o[1]))return o[0];if(o=e(),ar){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function hh(e,n,a){return a===void 0||(Fa&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=e_(),ye.lanes|=e,Ss|=e,a)}function eg(e,n,a,o){return Ui(a,n)?a:Zr.current!==null?(e=hh(e,a,o),Ui(e,n)||(Cn=!0),e):(Fa&42)===0||(Fa&1073741824)!==0&&(De&261930)===0?(Cn=!0,e.memoizedState=a):(e=e_(),ye.lanes|=e,Ss|=e,n)}function ng(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var S=I.T,w={};I.T=w,mh(e,!1,n,a);try{var V=u(),st=I.S;if(st!==null&&st(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var gt=EM(V,o);ol(e,n,gt,Fi(e))}else ol(e,n,o,Fi(e))}catch(yt){ol(e,n,{then:function(){},status:"rejected",reason:yt},Fi())}finally{H.p=h,S!==null&&w.types!==null&&(S.types=w.types),I.T=S}}function DM(){}function dh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ig(e).queue;ng(e,u,n,rt,a===null?DM:function(){return ag(e),a(o)})}function ig(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ag(e){var n=ig(e);n.next===null&&(n=e.alternate.memoizedState),ol(e,n.next.queue,{},Fi())}function ph(){return jn(El)}function sg(){return Tn().memoizedState}function rg(){return Tn().memoizedState}function UM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Fi();e=ps(a);var o=ms(n,e,a);o!==null&&(Ai(o,n,a),nl(o,n,a)),n={cache:kf()},e.payload=n;return}n=n.return}}function NM(e,n,a){var o=Fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nc(e)?lg(n,a):(a=Nf(e,n,a,o),a!==null&&(Ai(a,e,o),cg(a,n,o)))}function og(e,n,a){var o=Fi();ol(e,n,a,o)}function ol(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))lg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,w=h(S,a);if(u.hasEagerState=!0,u.eagerState=w,Ui(w,S))return hc(e,n,u,0),un===null&&fc(),!1}catch{}finally{}if(a=Nf(e,n,u,o),a!==null)return Ai(a,e,o),cg(a,n,o),!0}return!1}function mh(e,n,a,o){if(o={lane:2,revertLane:qh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nc(e)){if(n)throw Error(s(479))}else n=Nf(e,a,o,2),n!==null&&Ai(n,e,2)}function Nc(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function lg(e,n){Kr=Tc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function cg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,vt(e,a)}}var ll={readContext:jn,use:wc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};ll.useEffectEvent=Sn;var ug={readContext:jn,use:wc,useCallback:function(e,n){return ui().memoizedState=[e,n===void 0?null:n],e},useContext:jn,useEffect:q0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Dc(4194308,4,Q0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Dc(4194308,4,e,n)},useInsertionEffect:function(e,n){Dc(4,2,e,n)},useMemo:function(e,n){var a=ui();n=n===void 0?null:n;var o=e();if(ar){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ui();if(a!==void 0){var u=a(n);if(ar){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=NM.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var n=ui();return e={current:e},n.memoizedState=e},useState:function(e){e=lh(e);var n=e.queue,a=og.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:fh,useDeferredValue:function(e,n){var a=ui();return hh(a,e,n)},useTransition:function(){var e=lh(!1);return e=ng.bind(null,ye,e.queue,!0,!1),ui().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ye,u=ui();if(Oe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),un===null)throw Error(s(349));(De&127)!==0||U0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,q0(L0.bind(null,o,h,e),[e]),o.flags|=2048,Jr(9,{destroy:void 0},N0.bind(null,o,h,a,n),null),a},useId:function(){var e=ui(),n=un.identifierPrefix;if(Oe){var a=xa,o=va;a=(o&~(1<<32-Vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ac++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=TM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ph,useFormState:V0,useActionState:V0,useOptimistic:function(e){var n=ui();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mh.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:sh,useCacheRefresh:function(){return ui().memoizedState=UM.bind(null,ye)},useEffectEvent:function(e){var n=ui(),a={impl:e};return n.memoizedState=a,function(){if((je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gh={readContext:jn,use:wc,useCallback:$0,useContext:jn,useEffect:uh,useImperativeHandle:J0,useInsertionEffect:Z0,useLayoutEffect:K0,useMemo:tg,useReducer:Cc,useRef:Y0,useState:function(){return Cc(za)},useDebugValue:fh,useDeferredValue:function(e,n){var a=Tn();return eg(a,rn.memoizedState,e,n)},useTransition:function(){var e=Cc(za)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:D0,useId:sg,useHostTransitionStatus:ph,useFormState:k0,useActionState:k0,useOptimistic:function(e,n){var a=Tn();return I0(a,rn,e,n)},useMemoCache:sh,useCacheRefresh:rg};gh.useEffectEvent=j0;var fg={readContext:jn,use:wc,useCallback:$0,useContext:jn,useEffect:uh,useImperativeHandle:J0,useInsertionEffect:Z0,useLayoutEffect:K0,useMemo:tg,useReducer:oh,useRef:Y0,useState:function(){return oh(za)},useDebugValue:fh,useDeferredValue:function(e,n){var a=Tn();return rn===null?hh(a,e,n):eg(a,rn.memoizedState,e,n)},useTransition:function(){var e=oh(za)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:D0,useId:sg,useHostTransitionStatus:ph,useFormState:W0,useActionState:W0,useOptimistic:function(e,n){var a=Tn();return rn!==null?I0(a,rn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sh,useCacheRefresh:rg};fg.useEffectEvent=j0;function _h(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Fi(),u=ps(o);u.payload=n,a!=null&&(u.callback=a),n=ms(e,u,o),n!==null&&(Ai(n,e,o),nl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Fi(),u=ps(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ms(e,u,o),n!==null&&(Ai(n,e,o),nl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Fi(),o=ps(a);o.tag=2,n!=null&&(o.callback=n),n=ms(e,o,a),n!==null&&(Ai(n,e,a),nl(n,e,a))}};function hg(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!jo(a,o)||!jo(u,h):!0}function dg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vh.enqueueReplaceState(n,n.state,null)}function sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function pg(e){uc(e)}function mg(e){console.error(e)}function gg(e){uc(e)}function Lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _g(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xh(e,n,a){return a=ps(a),a.tag=3,a.payload={element:null},a.callback=function(){Lc(e,n)},a}function vg(e){return e=ps(e),e.tag=3,e}function xg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){_g(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){_g(n,a,o),typeof u!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function LM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=Li.current,a!==null){switch(a.tag){case 31:case 13:return Ji===null?Wc():a.alternate===null&&Mn===0&&(Mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xh(e,o,u)),!1;case 22:return a.flags|=65536,o===Sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xh(e,o,u)),!1}throw Error(s(435,a.tag))}return Xh(e,o,u),Wc(),!1}if(Oe)return n=Li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zf&&(e=Error(s(422),{cause:o}),Qo(ji(e,a)))):(o!==zf&&(n=Error(s(423),{cause:o}),Qo(ji(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ji(o,a),u=xh(e.stateNode,o,u),Zf(e,u),Mn!==4&&(Mn=2)),!1;var h=Error(s(520),{cause:o});if(h=ji(h,a),gl===null?gl=[h]:gl.push(h),Mn!==4&&(Mn=2),n===null)return!0;o=ji(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xh(a.stateNode,o,e),Zf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ms===null||!Ms.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=vg(u),xg(u,e,a,o),Zf(a,u),!1}a=a.return}while(a!==null);return!1}var Sh=Error(s(461)),Cn=!1;function Zn(e,n,a,o){n.child=e===null?b0(n,null,a,o):ir(n,e.child,a,o)}function Sg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return $s(n),o=eh(e,n,a,S,h,u),w=nh(),e!==null&&!Cn?(ih(e,n,u),Ba(e,n,u)):(Oe&&w&&If(n),n.flags|=1,Zn(e,n,o,u),n.child)}function Mg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Lf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,yg(e,n,h,o,u)):(e=pc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!wh(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(S,o)&&e.ref===n.ref)return Ba(e,n,u)}return n.flags|=1,e=La(h,o),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(jo(h,o)&&e.ref===n.ref)if(Cn=!1,n.pendingProps=o=h,wh(e,u))(e.flags&131072)!==0&&(Cn=!0);else return n.lanes=e.lanes,Ba(e,n,u)}return Mh(e,n,a,o,u)}function bg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Eg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vc(n,h!==null?h.cachePool:null),h!==null?A0(n,h):Qf(),R0(n);else return o=n.lanes=536870912,Eg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(vc(n,h.cachePool),A0(n,h),_s(),n.memoizedState=null):(e!==null&&vc(n,null),Qf(),_s());return Zn(e,n,u,a),n.child}function cl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(e,n,a,o,u){var h=Wf();return h=h===null?null:{parent:Rn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&vc(n,null),Qf(),R0(n),e!==null&&Xr(e,n,o,!0),n.childLanes=u,null}function Oc(e,n){return n=Ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tg(e,n,a){return ir(n,e.child,null,a),e=Oc(n,n.pendingProps),e.flags|=2,Oi(n),n.memoizedState=null,e}function OM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Oe){if(o.mode==="hidden")return e=Oc(n,o),n.lanes=536870912,cl(null,e);if($f(n),(e=pn)?(e=F_(e,Qi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:cs!==null?{id:va,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},a=l0(e),a.return=n,n.child=a,qn=n,pn=null)):e=null,e===null)throw fs(n);return n.lanes=536870912,null}return Oc(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if($f(n),u)if(n.flags&256)n.flags&=-257,n=Tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Cn||Xr(e,n,a,!1),u=(a&e.childLanes)!==0,Cn||u){if(o=un,o!==null&&(S=re(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Zs(e,S),Ai(o,e,S),Sh;Wc(),n=Tg(e,n,a)}else e=h.treeContext,pn=$i(S.nextSibling),qn=n,Oe=!0,us=null,Qi=!1,e!==null&&f0(n,e),n=Oc(n,o),n.flags|=4096;return n}return e=La(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mh(e,n,a,o,u){return $s(n),a=eh(e,n,a,o,void 0,u),o=nh(),e!==null&&!Cn?(ih(e,n,u),Ba(e,n,u)):(Oe&&o&&If(n),n.flags|=1,Zn(e,n,a,u),n.child)}function Ag(e,n,a,o,u,h){return $s(n),n.updateQueue=null,a=C0(n,o,a,u),w0(e),o=nh(),e!==null&&!Cn?(ih(e,n,h),Ba(e,n,h)):(Oe&&o&&If(n),n.flags|=1,Zn(e,n,a,h),n.child)}function Rg(e,n,a,o,u){if($s(n),n.stateNode===null){var h=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(h=jn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},qf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?jn(S):Hr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_h(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&vh.enqueueReplaceState(h,h.state,null),al(n,o,h,u),il(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,V=sr(a,w);h.props=V;var st=h.context,gt=a.contextType;S=Hr,typeof gt=="object"&&gt!==null&&(S=jn(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||st!==S)&&dg(n,h,o,S),ds=!1;var ot=n.memoizedState;h.state=ot,al(n,o,h,u),il(),st=n.memoizedState,w||ot!==st||ds?(typeof yt=="function"&&(_h(n,a,yt,o),st=n.memoizedState),(V=ds||hg(n,a,V,o,ot,st,S))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=S,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,jf(e,n),S=n.memoizedProps,gt=sr(a,S),h.props=gt,yt=n.pendingProps,ot=h.context,st=a.contextType,V=Hr,typeof st=="object"&&st!==null&&(V=jn(st)),w=a.getDerivedStateFromProps,(st=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==yt||ot!==V)&&dg(n,h,o,V),ds=!1,ot=n.memoizedState,h.state=ot,al(n,o,h,u),il();var ut=n.memoizedState;S!==yt||ot!==ut||ds||e!==null&&e.dependencies!==null&&gc(e.dependencies)?(typeof w=="function"&&(_h(n,a,w,o),ut=n.memoizedState),(gt=ds||hg(n,a,gt,o,ot,ut,V)||e!==null&&e.dependencies!==null&&gc(e.dependencies))?(st||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=V,o=gt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Pc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=ir(n,e.child,null,u),n.child=ir(n,null,a,u)):Zn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ba(e,n,u),e}function wg(e,n,a,o){return Qs(),n.flags|=256,Zn(e,n,a,o),n.child}var yh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bh(e){return{baseLanes:e,cachePool:_0()}}function Eh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ii),e}function Cg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(En.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Oe){if(u?gs(n):_s(),(e=pn)?(e=F_(e,Qi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:cs!==null?{id:va,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},a=l0(e),a.return=n,n.child=a,qn=n,pn=null)):e=null,e===null)throw fs(n);return rd(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(_s(),u=n.mode,w=Ic({mode:"hidden",children:w},u),o=Ks(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=bh(a),o.childLanes=Eh(e,S,a),n.memoizedState=yh,cl(null,o)):(gs(n),Th(n,w))}var V=e.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(h)n.flags&256?(gs(n),n.flags&=-257,n=Ah(e,n,a)):n.memoizedState!==null?(_s(),n.child=e.child,n.flags|=128,n=null):(_s(),w=o.fallback,u=n.mode,o=Ic({mode:"visible",children:o.children},u),w=Ks(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,ir(n,e.child,null,a),o=n.child,o.memoizedState=bh(a),o.childLanes=Eh(e,S,a),n.memoizedState=yh,n=cl(null,o));else if(gs(n),rd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var st=S.dgst;S=st,o=Error(s(419)),o.stack="",o.digest=S,Qo({value:o,source:null,stack:null}),n=Ah(e,n,a)}else if(Cn||Xr(e,n,a,!1),S=(a&e.childLanes)!==0,Cn||S){if(S=un,S!==null&&(o=re(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Zs(e,o),Ai(S,e,o),Sh;sd(w)||Wc(),n=Ah(e,n,a)}else sd(w)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,pn=$i(w.nextSibling),qn=n,Oe=!0,us=null,Qi=!1,e!==null&&f0(n,e),n=Th(n,o.children),n.flags|=4096);return n}return u?(_s(),w=o.fallback,u=n.mode,V=e.child,st=V.sibling,o=La(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?w=La(st,w):(w=Ks(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,cl(null,o),o=n.child,w=e.child.memoizedState,w===null?w=bh(a):(u=w.cachePool,u!==null?(V=Rn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=_0(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Eh(e,S,a),n.memoizedState=yh,cl(e.child,o)):(gs(n),a=e.child,e=a.sibling,a=La(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Th(e,n){return n=Ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ic(e,n){return e=Ni(22,e,null,n),e.lanes=0,e}function Ah(e,n,a){return ir(n,e.child,null,a),e=Th(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Gf(e.return,n,a)}function Rh(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function Ug(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=En.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,_t(En,S),Zn(e,n,o,a),o=Oe?Ko:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dg(e,a,n);else if(e.tag===19)Dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ec(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rh(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ec(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Rh(n,!0,a,null,h,o);break;case"together":Rh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ba(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ss|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=La(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=La(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gc(e)))}function PM(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),hs(n,Rn,e.memoizedState.cache),Qs();break;case 27:case 5:te(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:hs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$f(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(gs(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(e,n,a):(gs(n),e=Ba(e,n,a),e!==null?e.sibling:null);gs(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(En,En.current),o)break;return null;case 22:return n.lanes=0,bg(e,n,a,n.pendingProps);case 24:hs(n,Rn,e.memoizedState.cache)}return Ba(e,n,a)}function Ng(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Cn=!0;else{if(!wh(e,a)&&(n.flags&128)===0)return Cn=!1,PM(e,n,a);Cn=(e.flags&131072)!==0}else Cn=!1,Oe&&(n.flags&1048576)!==0&&u0(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=er(n.elementType),n.type=e,typeof e=="function")Lf(e)?(o=sr(e,o),n.tag=1,n=Rg(null,n,e,o,a)):(n.tag=0,n=Mh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Sg(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=Mg(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Mh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=sr(o,n.pendingProps),Rg(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,jf(e,n),al(n,o,null,a);var S=n.memoizedState;if(o=S.cache,hs(n,Rn,o),o!==h.cache&&Vf(n,[Rn],a,!0),il(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=wg(e,n,o,a);break t}else if(o!==u){u=ji(Error(s(424)),n),Qo(u),n=wg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pn=$i(e.firstChild),qn=n,Oe=!0,us=null,Qi=!0,a=b0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qs(),o===u){n=Ba(e,n,a);break t}Zn(e,n,o,a)}n=n.child}return n;case 26:return Pc(e,n),e===null?(a=k_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Oe||(a=n.type,e=n.pendingProps,o=Jc(it.current).createElement(a),o[Qe]=n,o[gn]=e,Kn(o,a,e),qe(o),n.stateNode=o):n.memoizedState=k_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Oe&&(o=n.stateNode=H_(n.type,n.pendingProps,it.current),qn=n,Qi=!0,u=pn,Ts(n.type)?(od=u,pn=$i(o.firstChild)):pn=u),Zn(e,n,n.pendingProps.children,a),Pc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Oe&&((u=o=pn)&&(o=fy(o,n.type,n.pendingProps,Qi),o!==null?(n.stateNode=o,qn=n,pn=$i(o.firstChild),Qi=!1,u=!0):u=!1),u||fs(n)),te(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,nd(u,h)?o=null:S!==null&&nd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=eh(e,n,AM,null,null,a),El._currentValue=u),Pc(e,n),Zn(e,n,o,a),n.child;case 6:return e===null&&Oe&&((e=a=pn)&&(a=hy(a,n.pendingProps,Qi),a!==null?(n.stateNode=a,qn=n,pn=null,e=!0):e=!1),e||fs(n)),null;case 13:return Cg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ir(n,null,o,a):Zn(e,n,o,a),n.child;case 11:return Sg(e,n,n.type,n.pendingProps,a);case 7:return Zn(e,n,n.pendingProps,a),n.child;case 8:return Zn(e,n,n.pendingProps.children,a),n.child;case 12:return Zn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,hs(n,n.type,o.value),Zn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,$s(n),u=jn(u),o=o(u),n.flags|=1,Zn(e,n,o,a),n.child;case 14:return Mg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return Ug(e,n,a);case 31:return OM(e,n,a);case 22:return bg(e,n,a,n.pendingProps);case 24:return $s(n),o=jn(Rn),e===null?(u=Wf(),u===null&&(u=un,h=kf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},qf(n),hs(n,Rn,u)):((e.lanes&a)!==0&&(jf(e,n),al(n,null,null,a),il()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),hs(n,Rn,o)):(o=h.cache,hs(n,Rn,o),o!==u.cache&&Vf(n,[Rn],a,!0))),Zn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ha(e){e.flags|=4}function Ch(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(s_())e.flags|=8192;else throw nr=Sc,Yf}else e.flags&=-16777217}function Lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j_(n))if(s_())e.flags|=8192;else throw nr=Sc,Yf}function Fc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,no|=n)}function ul(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function IM(e,n,a){var o=n.pendingProps;switch(Ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ia(Rn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?Ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bf())),mn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Ha(n),h!==null?(mn(n),Lg(n,h)):(mn(n),Ch(n,u,null,o,a))):h?h!==e.memoizedState?(Ha(n),mn(n),Lg(n,h)):(mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ha(n),mn(n),Ch(n,u,e,o,a)),null;case 27:if(ie(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}e=Ut.current,kr(n)?h0(n):(e=H_(u,o,a),n.stateNode=e,Ha(n))}return mn(n),null;case 5:if(ie(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(h=Ut.current,kr(n))h0(n);else{var S=Jc(it.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[Qe]=n,h[gn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(Kn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ha(n)}}return mn(n),Ch(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=qn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Qe]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C_(e.nodeValue,a)),e||fs(n,!0)}else e=Jc(e).createTextNode(o),e[Qe]=n,n.stateNode=e}return mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=kr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qe]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),e=!1}else a=Bf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Oi(n),n):(Oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qe]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),u=!1}else u=Bf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Oi(n),n):(Oi(n),null)}return Oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fc(n,n.updateQueue),mn(n),null);case 4:return Dt(),e===null&&Qh(n.stateNode.containerInfo),mn(n),null;case 10:return Ia(n.type),mn(n),null;case 19:if(Q(En),o=n.memoizedState,o===null)return mn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)ul(o,!1);else{if(Mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ec(e),h!==null){for(n.flags|=128,ul(o,!1),e=h.updateQueue,n.updateQueue=e,Fc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)o0(a,e),a=a.sibling;return _t(En,En.current&1|2),Oe&&Oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Pt()>Vc&&(n.flags|=128,u=!0,ul(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ec(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fc(n,e),ul(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Oe)return mn(n),null}else 2*Pt()-o.renderingStartTime>Vc&&a!==536870912&&(n.flags|=128,u=!0,ul(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Pt(),e.sibling=null,a=En.current,_t(En,u?a&1|2:a&1),Oe&&Oa(n,o.treeForkCount),e):(mn(n),null);case 22:case 23:return Oi(n),Jf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),a=n.updateQueue,a!==null&&Fc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ia(Rn),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function FM(e,n){switch(Ff(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ia(Rn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(Oi(n),n.alternate===null)throw Error(s(340));Qs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(En),null;case 4:return Dt(),null;case 10:return Ia(n.type),null;case 22:case 23:return Oi(n),Jf(),e!==null&&Q(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ia(Rn),null;case 25:return null;default:return null}}function Og(e,n){switch(Ff(n),n.tag){case 3:Ia(Rn),Dt();break;case 26:case 27:case 5:ie(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&Oi(n);break;case 13:Oi(n);break;case 19:Q(En);break;case 10:Ia(n.type);break;case 22:case 23:Oi(n),Jf(),e!==null&&Q(tr);break;case 24:Ia(Rn)}}function fl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(w){nn(n,n.return,w)}}function vs(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var V=a,st=w;try{st()}catch(gt){nn(u,V,gt)}}}o=o.next}while(o!==h)}}catch(gt){nn(n,n.return,gt)}}function Pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{T0(n,a)}catch(o){nn(e,e.return,o)}}}function Ig(e,n,a){a.props=sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function hl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function Sa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function Fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function Dh(e,n,a){try{var o=e.stateNode;sy(o,e.type,a,n),o[gn]=n}catch(u){nn(e,e.return,u)}}function zg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ts(e.type)||e.tag===4}function Uh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&Ts(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Nh(e,n,a),e=e.sibling;e!==null;)Nh(e,n,a),e=e.sibling}function zc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ts(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zc(e,n,a),e=e.sibling;e!==null;)zc(e,n,a),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Kn(n,o,a),n[Qe]=e,n[gn]=a}catch(h){nn(e,e.return,h)}}var Ga=!1,Dn=!1,Lh=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,kn=null;function zM(e,n){if(e=e.containerInfo,td=su,e=Jm(e),Af(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,w=-1,V=-1,st=0,gt=0,yt=e,ot=null;e:for(;;){for(var ut;yt!==a||u!==0&&yt.nodeType!==3||(w=S+u),yt!==h||o!==0&&yt.nodeType!==3||(V=S+o),yt.nodeType===3&&(S+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===e)break e;if(ot===a&&++st===u&&(w=S),ot===h&&++gt===o&&(V=S),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}a=w===-1||V===-1?null:{start:w,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:e,selectionRange:a},su=!1,kn=n;kn!==null;)if(n=kn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,kn=e;else for(;kn!==null;){switch(n=kn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ee=sr(a.type,u);e=o.getSnapshotBeforeUpdate(ee,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){nn(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ad(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,kn=e;break}kn=n.return}}function Gg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ka(e,a),o&4&&fl(5,a);break;case 1:if(ka(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){nn(a,a.return,S)}else{var u=sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){nn(a,a.return,S)}}o&64&&Pg(a),o&512&&hl(a,a.return);break;case 3:if(ka(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{T0(e,n)}catch(S){nn(a,a.return,S)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:ka(e,a),n===null&&o&4&&Fg(a),o&512&&hl(a,a.return);break;case 12:ka(e,a);break;case 31:ka(e,a),o&4&&Xg(e,a);break;case 13:ka(e,a),o&4&&Wg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qM.bind(null,a),dy(e,a))));break;case 22:if(o=a.memoizedState!==null||Ga,!o){n=n!==null&&n.memoizedState!==null||Dn,u=Ga;var h=Dn;Ga=o,(Dn=n)&&!h?Xa(e,a,(a.subtreeFlags&8772)!==0):ka(e,a),Ga=u,Dn=h}break;case 30:break;default:ka(e,a)}}function Vg(e){var n=e.alternate;n!==null&&(e.alternate=null,Vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _n=null,yi=!1;function Va(e,n,a){for(a=a.child;a!==null;)kg(e,n,a),a=a.sibling}function kg(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:Dn||Sa(a,n),Va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dn||Sa(a,n);var o=_n,u=yi;Ts(a.type)&&(_n=a.stateNode,yi=!1),Va(e,n,a),Ml(a.stateNode),_n=o,yi=u;break;case 5:Dn||Sa(a,n);case 6:if(o=_n,u=yi,_n=null,Va(e,n,a),_n=o,yi=u,_n!==null)if(yi)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(a.stateNode)}catch(h){nn(a,n,h)}else try{_n.removeChild(a.stateNode)}catch(h){nn(a,n,h)}break;case 18:_n!==null&&(yi?(e=_n,P_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),uo(e)):P_(_n,a.stateNode));break;case 4:o=_n,u=yi,_n=a.stateNode.containerInfo,yi=!0,Va(e,n,a),_n=o,yi=u;break;case 0:case 11:case 14:case 15:vs(2,a,n),Dn||vs(4,a,n),Va(e,n,a);break;case 1:Dn||(Sa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),Va(e,n,a);break;case 21:Va(e,n,a);break;case 22:Dn=(o=Dn)||a.memoizedState!==null,Va(e,n,a),Dn=o;break;default:Va(e,n,a)}}function Xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{uo(e)}catch(a){nn(n,n.return,a)}}}function Wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{uo(e)}catch(a){nn(n,n.return,a)}}function BM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Hg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Hg),n;default:throw Error(s(435,e.tag))}}function Bc(e,n){var a=BM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jM.bind(null,e,o);o.then(u,u)}})}function bi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,w=S;t:for(;w!==null;){switch(w.tag){case 27:if(Ts(w.type)){_n=w.stateNode,yi=!1;break t}break;case 5:_n=w.stateNode,yi=!1;break t;case 3:case 4:_n=w.stateNode.containerInfo,yi=!0;break t}w=w.return}if(_n===null)throw Error(s(160));kg(h,S,u),_n=null,yi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Yg(n,e),n=n.sibling}var la=null;function Yg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bi(n,e),Ei(e),o&4&&(vs(3,e,e.return),fl(3,e),vs(5,e,e.return));break;case 1:bi(n,e),Ei(e),o&512&&(Dn||a===null||Sa(a,a.return)),o&64&&Ga&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=la;if(bi(n,e),Ei(e),o&512&&(Dn||a===null||Sa(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Hn]||h[Qe]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Kn(h,o,a),h[Qe]=e,qe(h),o=h;break t;case"link":var S=Y_("link","href",u).get(o+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break e}}h=u.createElement(o),Kn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Y_("meta","content",u).get(o+(a.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break e}}h=u.createElement(o),Kn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Qe]=e,qe(h),o=h}e.stateNode=o}else q_(u,e.type,e.stateNode);else e.stateNode=W_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?q_(u,e.type,e.stateNode):W_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Dh(e,e.memoizedProps,a.memoizedProps)}break;case 27:bi(n,e),Ei(e),o&512&&(Dn||a===null||Sa(a,a.return)),a!==null&&o&4&&Dh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bi(n,e),Ei(e),o&512&&(Dn||a===null||Sa(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(ee){nn(e,e.return,ee)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Dh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lh=!0);break;case 6:if(bi(n,e),Ei(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ee){nn(e,e.return,ee)}}break;case 3:if(eu=null,u=la,la=$c(n.containerInfo),bi(n,e),la=u,Ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{uo(n.containerInfo)}catch(ee){nn(e,e.return,ee)}Lh&&(Lh=!1,qg(e));break;case 4:o=la,la=$c(e.stateNode.containerInfo),bi(n,e),Ei(e),la=o;break;case 12:bi(n,e),Ei(e);break;case 31:bi(n,e),Ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bc(e,o)));break;case 13:bi(n,e),Ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gc=Pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=Ga,gt=Dn;if(Ga=st||u,Dn=gt||V,bi(n,e),Dn=gt,Ga=st,Ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Ga||Dn||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=V.stateNode;var yt=V.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(ee){nn(V,V.return,ee)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ee){nn(V,V.return,ee)}}}else if(n.tag===18){if(a===null){V=n;try{var ut=V.stateNode;u?I_(ut,!0):I_(V.stateNode,!1)}catch(ee){nn(V,V.return,ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bc(e,a))));break;case 19:bi(n,e),Ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bc(e,o)));break;case 30:break;case 21:break;default:bi(n,e),Ei(e)}}function Ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(zg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Uh(e);zc(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(Vn(S,""),a.flags&=-33);var w=Uh(e);zc(e,w,S);break;case 3:case 4:var V=a.stateNode.containerInfo,st=Uh(e);Nh(e,st,V);break;default:throw Error(s(161))}}catch(gt){nn(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ka(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:vs(4,n,n.return),rr(n);break;case 1:Sa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),rr(n);break;case 27:Ml(n.stateNode);case 26:case 5:Sa(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function Xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Xa(u,h,a),fl(4,h);break;case 1:if(Xa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){nn(o,o.return,st)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)E0(V[u],w)}catch(st){nn(o,o.return,st)}}a&&S&64&&Pg(h),hl(h,h.return);break;case 27:Bg(h);case 26:case 5:Xa(u,h,a),a&&o===null&&S&4&&Fg(h),hl(h,h.return);break;case 12:Xa(u,h,a);break;case 31:Xa(u,h,a),a&&S&4&&Xg(u,h);break;case 13:Xa(u,h,a),a&&S&4&&Wg(u,h);break;case 22:h.memoizedState===null&&Xa(u,h,a),hl(h,h.return);break;case 30:break;default:Xa(u,h,a)}n=n.sibling}}function Oh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function Ph(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jo(e))}function ca(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(e,n,a,o),n=n.sibling}function jg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ca(e,n,a,o),u&2048&&fl(9,n);break;case 1:ca(e,n,a,o);break;case 3:ca(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jo(e)));break;case 12:if(u&2048){ca(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){nn(n,n.return,V)}}else ca(e,n,a,o);break;case 31:ca(e,n,a,o);break;case 13:ca(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?ca(e,n,a,o):dl(e,n):h._visibility&2?ca(e,n,a,o):(h._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Oh(S,n);break;case 24:ca(e,n,a,o),u&2048&&Ph(n.alternate,n);break;default:ca(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,w=a,V=o,st=S.flags;switch(S.tag){case 0:case 11:case 15:$r(h,S,w,V,u),fl(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&2?$r(h,S,w,V,u):dl(h,S):(gt._visibility|=2,$r(h,S,w,V,u)),u&&st&2048&&Oh(S.alternate,S);break;case 24:$r(h,S,w,V,u),u&&st&2048&&Ph(S.alternate,S);break;default:$r(h,S,w,V,u)}n=n.sibling}}function dl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:dl(a,o),u&2048&&Oh(o.alternate,o);break;case 24:dl(a,o),u&2048&&Ph(o.alternate,o);break;default:dl(a,o)}n=n.sibling}}var pl=8192;function to(e,n,a){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)Zg(e,n,a),e=e.sibling}function Zg(e,n,a){switch(e.tag){case 26:to(e,n,a),e.flags&pl&&e.memoizedState!==null&&Ty(a,la,e.memoizedState,e.memoizedProps);break;case 5:to(e,n,a);break;case 3:case 4:var o=la;la=$c(e.stateNode.containerInfo),to(e,n,a),la=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=pl,pl=16777216,to(e,n,a),pl=o):to(e,n,a));break;default:to(e,n,a)}}function Kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ml(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];kn=o,Jg(o,e)}Kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qg(e),e=e.sibling}function Qg(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&vs(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hc(e)):ml(e);break;default:ml(e)}}function Hc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];kn=o,Jg(o,e)}Kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:vs(8,n,n.return),Hc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hc(n));break;default:Hc(n)}e=e.sibling}}function Jg(e,n){for(;kn!==null;){var a=kn;switch(a.tag){case 0:case 11:case 15:vs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,kn=o;else t:for(a=e;kn!==null;){o=kn;var u=o.sibling,h=o.return;if(Vg(o),o===a){kn=null;break t}if(u!==null){u.return=h,kn=u;break t}kn=h}}}var HM={getCacheForType:function(e){var n=jn(Rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return jn(Rn).controller.signal}},GM=typeof WeakMap=="function"?WeakMap:Map,je=0,un=null,Re=null,De=0,en=0,Pi=null,xs=!1,eo=!1,Ih=!1,Wa=0,Mn=0,Ss=0,or=0,Fh=0,Ii=0,no=0,gl=null,Ti=null,zh=!1,Gc=0,$g=0,Vc=1/0,kc=null,Ms=null,On=0,ys=null,io=null,Ya=0,Bh=0,Hh=null,t_=null,_l=0,Gh=null;function Fi(){return(je&2)!==0&&De!==0?De&-De:I.T!==null?qh():xt()}function e_(){if(Ii===0)if((De&536870912)===0||Oe){var e=Me;Me<<=1,(Me&3932160)===0&&(Me=262144),Ii=e}else Ii=536870912;return e=Li.current,e!==null&&(e.flags|=32),Ii}function Ai(e,n,a){(e===un&&(en===2||en===9)||e.cancelPendingCommit!==null)&&(ao(e,0),bs(e,De,Ii,!1)),ue(e,a),((je&2)===0||e!==un)&&(e===un&&((je&2)===0&&(or|=a),Mn===4&&bs(e,De,Ii,!1)),Ma(e))}function n_(e,n,a){if((je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=o?XM(e,n):kh(e,n,!0),h=o;do{if(u===0){eo&&!o&&bs(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!VM(a)){u=kh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var w=e;u=gl;var V=w.current.memoizedState.isDehydrated;if(V&&(ao(w,S).flags|=256),S=kh(w,S,!1),S!==2){if(Ih&&!V){w.errorRecoveryDisabledLanes|=h,or|=h,u=4;break t}h=Ti,Ti=u,h!==null&&(Ti===null?Ti=h:Ti.push.apply(Ti,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){ao(e,0),bs(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:bs(o,n,Ii,!xs);break t;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Gc+300-Pt(),10<u)){if(bs(o,n,Ii,!xs),pt(o,0,!0)!==0)break t;Ya=n,o.timeoutHandle=L_(i_.bind(null,o,a,Ti,kc,zh,n,Ii,or,no,xs,h,"Throttled",-0,0),u);break t}i_(o,a,Ti,kc,zh,n,Ii,or,no,xs,h,null,-0,0)}}break}while(!0);Ma(e)}function i_(e,n,a,o,u,h,S,w,V,st,gt,yt,ot,ut){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Zg(n,h,yt);var ee=(h&62914560)===h?Gc-Pt():(h&4194048)===h?$g-Pt():0;if(ee=Ay(yt,ee),ee!==null){Ya=h,e.cancelPendingCommit=ee(f_.bind(null,e,n,h,a,o,u,S,w,V,gt,yt,null,ot,ut)),bs(e,h,S,!st);return}}f_(e,n,h,a,o,u,S,w,V)}function VM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Ui(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bs(e,n,a,o){n&=~Fh,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Vt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Ce(e,a,n)}function Xc(){return(je&6)===0?(vl(0),!1):!0}function Vh(){if(Re!==null){if(en===0)var e=Re.return;else e=Re,Pa=Js=null,ah(e),jr=null,tl=0,e=Re;for(;e!==null;)Og(e.alternate,e),e=e.return;Re=null}}function ao(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ly(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ya=0,Vh(),un=e,Re=a=La(e.current,null),De=n,en=0,Pi=null,xs=!1,eo=Xt(e,n),Ih=!1,no=Ii=Fh=or=Ss=Mn=0,Ti=gl=null,zh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Vt(o),h=1<<u;n|=e[u],o&=~h}return Wa=n,fc(),a}function a_(e,n){ye=null,I.H=ll,n===qr||n===xc?(n=S0(),en=3):n===Yf?(n=S0(),en=4):en=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Pi=n,Re===null&&(Mn=1,Lc(e,ji(n,e.current)))}function s_(){var e=Li.current;return e===null?!0:(De&4194048)===De?Ji===null:(De&62914560)===De||(De&536870912)!==0?e===Ji:!1}function r_(){var e=I.H;return I.H=ll,e===null?ll:e}function o_(){var e=I.A;return I.A=HM,e}function Wc(){Mn=4,xs||(De&4194048)!==De&&Li.current!==null||(eo=!0),(Ss&134217727)===0&&(or&134217727)===0||un===null||bs(un,De,Ii,!1)}function kh(e,n,a){var o=je;je|=2;var u=r_(),h=o_();(un!==e||De!==n)&&(kc=null,ao(e,n)),n=!1;var S=Mn;t:do try{if(en!==0&&Re!==null){var w=Re,V=Pi;switch(en){case 8:Vh(),S=6;break t;case 3:case 2:case 9:case 6:Li.current===null&&(n=!0);var st=en;if(en=0,Pi=null,so(e,w,V,st),a&&eo){S=0;break t}break;default:st=en,en=0,Pi=null,so(e,w,V,st)}}kM(),S=Mn;break}catch(gt){a_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Pa=Js=null,je=o,I.H=u,I.A=h,Re===null&&(un=null,De=0,fc()),S}function kM(){for(;Re!==null;)l_(Re)}function XM(e,n){var a=je;je|=2;var o=r_(),u=o_();un!==e||De!==n?(kc=null,Vc=Pt()+500,ao(e,n)):eo=Xt(e,n);t:do try{if(en!==0&&Re!==null){n=Re;var h=Pi;e:switch(en){case 1:en=0,Pi=null,so(e,n,h,1);break;case 2:case 9:if(v0(h)){en=0,Pi=null,c_(n);break}n=function(){en!==2&&en!==9||un!==e||(en=7),Ma(e)},h.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:v0(h)?(en=0,Pi=null,c_(n)):(en=0,Pi=null,so(e,n,h,7));break;case 5:var S=null;switch(Re.tag){case 26:S=Re.memoizedState;case 5:case 27:var w=Re;if(S?j_(S):w.stateNode.complete){en=0,Pi=null;var V=w.sibling;if(V!==null)Re=V;else{var st=w.return;st!==null?(Re=st,Yc(st)):Re=null}break e}}en=0,Pi=null,so(e,n,h,5);break;case 6:en=0,Pi=null,so(e,n,h,6);break;case 8:Vh(),Mn=6;break t;default:throw Error(s(462))}}WM();break}catch(gt){a_(e,gt)}while(!0);return Pa=Js=null,I.H=o,I.A=u,je=a,Re!==null?0:(un=null,De=0,fc(),Mn)}function WM(){for(;Re!==null&&!ge();)l_(Re)}function l_(e){var n=Ng(e.alternate,e,Wa);e.memoizedProps=e.pendingProps,n===null?Yc(e):Re=n}function c_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ag(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=Ag(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:ah(n);default:Og(a,n),n=Re=o0(n,Wa),n=Ng(a,n,Wa)}e.memoizedProps=e.pendingProps,n===null?Yc(e):Re=n}function so(e,n,a,o){Pa=Js=null,ah(n),jr=null,tl=0;var u=n.return;try{if(LM(e,u,n,a,De)){Mn=1,Lc(e,ji(a,e.current)),Re=null;return}}catch(h){if(u!==null)throw Re=u,h;Mn=1,Lc(e,ji(a,e.current)),Re=null;return}n.flags&32768?(Oe||o===1?e=!0:eo||(De&536870912)!==0?e=!1:(xs=e=!0,(o===2||o===9||o===3||o===6)&&(o=Li.current,o!==null&&o.tag===13&&(o.flags|=16384))),u_(n,e)):Yc(n)}function Yc(e){var n=e;do{if((n.flags&32768)!==0){u_(n,xs);return}e=n.return;var a=IM(n.alternate,n,Wa);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);Mn===0&&(Mn=5)}function u_(e,n){do{var a=FM(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);Mn=6,Re=null}function f_(e,n,a,o,u,h,S,w,V){e.cancelPendingCommit=null;do qc();while(On!==0);if((je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Uf,tn(e,a,h,S,w,V),e===un&&(Re=un=null,De=0),io=n,ys=e,Ya=a,Bh=h,Hh=u,t_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ZM(F,function(){return g_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,S=je,je|=4;try{zM(e,n,a)}finally{je=S,H.p=u,I.T=o}}On=1,h_(),d_(),p_()}}function h_(){if(On===1){On=0;var e=ys,n=io,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=je;je|=4;try{Yg(n,e);var h=ed,S=Jm(e.containerInfo),w=h.focusedElem,V=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&Qm(w.ownerDocument.documentElement,w)){if(V!==null&&Af(w)){var st=V.start,gt=V.end;if(gt===void 0&&(gt=st),"selectionStart"in w)w.selectionStart=st,w.selectionEnd=Math.min(gt,w.value.length);else{var yt=w.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),ee=w.textContent.length,de=Math.min(V.start,ee),ln=V.end===void 0?de:Math.min(V.end,ee);!ut.extend&&de>ln&&(S=ln,ln=de,de=S);var J=Km(w,de),Z=Km(w,ln);if(J&&Z&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==Z.node||ut.focusOffset!==Z.offset)){var at=yt.createRange();at.setStart(J.node,J.offset),ut.removeAllRanges(),de>ln?(ut.addRange(at),ut.extend(Z.node,Z.offset)):(at.setEnd(Z.node,Z.offset),ut.addRange(at))}}}}for(yt=[],ut=w;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var St=yt[w];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}su=!!td,ed=td=null}finally{je=u,H.p=o,I.T=a}}e.current=n,On=2}}function d_(){if(On===2){On=0;var e=ys,n=io,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=je;je|=4;try{Gg(e,n.alternate,n)}finally{je=u,H.p=o,I.T=a}}On=3}}function p_(){if(On===4||On===3){On=0,Le();var e=ys,n=io,a=Ya,o=t_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,io=ys=null,m_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ms=null),ia(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var w=o[S];h(w.value,{componentStack:w.stack})}}finally{I.T=n,H.p=u}}(Ya&3)!==0&&qc(),Ma(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Gh?_l++:(_l=0,Gh=e):_l=0,vl(0)}}function m_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jo(n)))}function qc(){return h_(),d_(),p_(),g_()}function g_(){if(On!==5)return!1;var e=ys,n=Bh;Bh=0;var a=ia(Ya),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Hh,Hh=null;var h=ys,S=Ya;if(On=0,io=ys=null,Ya=0,(je&6)!==0)throw Error(s(331));var w=je;if(je|=4,Qg(h.current),jg(h,h.current,S,a),je=w,vl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(lt,h)}catch{}return!0}finally{H.p=u,I.T=o,m_(e,n)}}function __(e,n,a){n=ji(a,n),n=xh(e.stateNode,n,2),e=ms(e,n,2),e!==null&&(ue(e,2),Ma(e))}function nn(e,n,a){if(e.tag===3)__(e,e,a);else for(;n!==null;){if(n.tag===3){__(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ms===null||!Ms.has(o))){e=ji(a,e),a=vg(2),o=ms(n,a,2),o!==null&&(xg(a,o,n,e),ue(o,2),Ma(o));break}}n=n.return}}function Xh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new GM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ih=!0,u.add(a),e=YM.bind(null,e,n,a),n.then(e,e))}function YM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,un===e&&(De&a)===a&&(Mn===4||Mn===3&&(De&62914560)===De&&300>Pt()-Gc?(je&2)===0&&ao(e,0):Fh|=a,no===De&&(no=0)),Ma(e)}function v_(e,n){n===0&&(n=At()),e=Zs(e,n),e!==null&&(ue(e,n),Ma(e))}function qM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),v_(e,a)}function jM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),v_(e,a)}function ZM(e,n){return q(e,n)}var jc=null,ro=null,Wh=!1,Zc=!1,Yh=!1,Es=0;function Ma(e){e!==ro&&e.next===null&&(ro===null?jc=ro=e:ro=ro.next=e),Zc=!0,Wh||(Wh=!0,QM())}function vl(e,n){if(!Yh&&Zc){Yh=!0;do for(var a=!1,o=jc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Vt(42|e)+1)-1,h&=u&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,y_(o,h))}else h=De,h=pt(o,o===un?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Xt(o,h)||(a=!0,y_(o,h));o=o.next}while(a);Yh=!1}}function KM(){x_()}function x_(){Zc=Wh=!1;var e=0;Es!==0&&oy()&&(e=Es);for(var n=Pt(),a=null,o=jc;o!==null;){var u=o.next,h=S_(o,n);h===0?(o.next=null,a===null?jc=u:a.next=u,u===null&&(ro=a)):(a=o,(e!==0||(h&3)!==0)&&(Zc=!0)),o=u}On!==0&&On!==5||vl(e),Es!==0&&(Es=0)}function S_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Vt(h),w=1<<S,V=u[S];V===-1?((w&a)===0||(w&o)!==0)&&(u[S]=Bt(w,n)):V<=n&&(e.expiredLanes|=w),h&=~w}if(n=un,a=De,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(en===2||en===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ke(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ke(o),ia(a)){case 2:case 8:a=b;break;case 32:a=F;break;case 268435456:a=Rt;break;default:a=F}return o=M_.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ke(o),e.callbackPriority=2,e.callbackNode=null,2}function M_(e,n){if(On!==0&&On!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qc()&&e.callbackNode!==a)return null;var o=De;return o=pt(e,e===un?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(n_(e,o,n),S_(e,Pt()),e.callbackNode!=null&&e.callbackNode===a?M_.bind(null,e):null)}function y_(e,n){if(qc())return null;n_(e,n,!0)}function QM(){cy(function(){(je&6)!==0?q(L,KM):x_()})}function qh(){if(Es===0){var e=Wr;e===0&&(e=ce,ce<<=1,(ce&261888)===0&&(ce=256)),Es=e}return Es}function b_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ua(""+e)}function E_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function JM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=b_((u[gn]||null).action),S=o.submitter;S&&(n=(n=S[gn]||null)?b_(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var w=new Ys("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Es!==0){var V=S?E_(u,S):new FormData(u);dh(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(w.preventDefault(),V=S?E_(u,S):new FormData(u),dh(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var jh=0;jh<Df.length;jh++){var Zh=Df[jh],$M=Zh.toLowerCase(),ty=Zh[0].toUpperCase()+Zh.slice(1);oa($M,"on"+ty)}oa(e0,"onAnimationEnd"),oa(n0,"onAnimationIteration"),oa(i0,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(gM,"onTransitionRun"),oa(_M,"onTransitionStart"),oa(vM,"onTransitionCancel"),oa(a0,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function T_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],V=w.instance,st=w.currentTarget;if(w=w.listener,V!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=st;try{h(u)}catch(gt){uc(gt)}u.currentTarget=null,h=V}else for(S=0;S<o.length;S++){if(w=o[S],V=w.instance,st=w.currentTarget,w=w.listener,V!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=st;try{h(u)}catch(gt){uc(gt)}u.currentTarget=null,h=V}}}}function we(e,n){var a=n[wi];a===void 0&&(a=n[wi]=new Set);var o=e+"__bubble";a.has(o)||(A_(n,e,2,!1),a.add(o))}function Kh(e,n,a){var o=0;n&&(o|=4),A_(a,e,o,n)}var Kc="_reactListening"+Math.random().toString(36).slice(2);function Qh(e){if(!e[Kc]){e[Kc]=!0,Da.forEach(function(a){a!=="selectionchange"&&(ey.has(a)||Kh(a,!1,e),Kh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kc]||(n[Kc]=!0,Kh("selectionchange",!1,n))}}function A_(e,n,a,o){switch(ev(n)){case 2:var u=Cy;break;case 8:u=Dy;break;default:u=hd}a=u.bind(null,n,a,e),u=void 0,!Vo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Jh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=Di(w),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=h=S;continue t}w=w.parentNode}}o=o.return}oc(function(){var st=h,gt=Xs(a),yt=[];t:{var ot=s0.get(e);if(ot!==void 0){var ut=Ys,ee=e;switch(e){case"keypress":if(Nr(a)===0)break t;case"keydown":case"keyup":ut=jS;break;case"focusin":ee="focus",ut=Pr;break;case"focusout":ee="blur",ut=Pr;break;case"beforeblur":case"afterblur":ut=Pr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=QS;break;case e0:case n0:case i0:ut=BS;break;case a0:ut=$S;break;case"scroll":case"scrollend":ut=ve;break;case"wheel":ut=eM;break;case"copy":case"cut":case"paste":ut=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Im;break;case"toggle":case"beforetoggle":ut=iM}var de=(n&4)!==0,ln=!de&&(e==="scroll"||e==="scrollend"),J=de?ot!==null?ot+"Capture":null:ot;de=[];for(var Z=st,at;Z!==null;){var St=Z;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||J===null||(St=Ws(Z,J),St!=null&&de.push(Sl(Z,St,at))),ln)break;Z=Z.return}0<de.length&&(ot=new ut(ot,ee,null,a,gt),yt.push({event:ot,listeners:de}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==Cr&&(ee=a.relatedTarget||a.fromElement)&&(Di(ee)||ee[_i]))break t;if((ut||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(ee=a.relatedTarget||a.toElement,ut=st,ee=ee?Di(ee):null,ee!==null&&(ln=c(ee),de=ee.tag,ee!==ln||de!==5&&de!==27&&de!==6)&&(ee=null)):(ut=null,ee=st),ut!==ee)){if(de=Xo,St="onMouseLeave",J="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(de=Im,St="onPointerLeave",J="onPointerEnter",Z="pointer"),ln=ut==null?ot:$n(ut),at=ee==null?ot:$n(ee),ot=new de(St,Z+"leave",ut,a,gt),ot.target=ln,ot.relatedTarget=at,St=null,Di(gt)===st&&(de=new de(J,Z+"enter",ee,a,gt),de.target=at,de.relatedTarget=ln,St=de),ln=St,ut&&ee)e:{for(de=ny,J=ut,Z=ee,at=0,St=J;St;St=de(St))at++;St=0;for(var le=Z;le;le=de(le))St++;for(;0<at-St;)J=de(J),at--;for(;0<St-at;)Z=de(Z),St--;for(;at--;){if(J===Z||Z!==null&&J===Z.alternate){de=J;break e}J=de(J),Z=de(Z)}de=null}else de=null;ut!==null&&R_(yt,ot,ut,de,!1),ee!==null&&ln!==null&&R_(yt,ln,ee,de,!0)}}t:{if(ot=st?$n(st):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var We=Xm;else if(Vm(ot))if(Wm)We=dM;else{We=fM;var ae=uM}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&Xe(st.elementType)&&(We=Xm):We=hM;if(We&&(We=We(e,st))){km(yt,We,a,gt);break t}ae&&ae(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&be(ot,"number",ot.value)}switch(ae=st?$n(st):window,e){case"focusin":(Vm(ae)||ae.contentEditable==="true")&&(Fr=ae,Rf=st,Zo=null);break;case"focusout":Zo=Rf=Fr=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,$m(yt,a,gt);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":$m(yt,a,gt)}var Ee;if(bf)t:{switch(e){case"compositionstart":var Ue="onCompositionStart";break t;case"compositionend":Ue="onCompositionEnd";break t;case"compositionupdate":Ue="onCompositionUpdate";break t}Ue=void 0}else Ir?Hm(e,a)&&(Ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ue="onCompositionStart");Ue&&(Fm&&a.locale!=="ko"&&(Ir||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Ir&&(Ee=lc()):(ra=gt,ko="value"in ra?ra.value:ra.textContent,Ir=!0)),ae=Qc(st,Ue),0<ae.length&&(Ue=new Pm(Ue,e,null,a,gt),yt.push({event:Ue,listeners:ae}),Ee?Ue.data=Ee:(Ee=Gm(a),Ee!==null&&(Ue.data=Ee)))),(Ee=sM?rM(e,a):oM(e,a))&&(Ue=Qc(st,"onBeforeInput"),0<Ue.length&&(ae=new Pm("onBeforeInput","beforeinput",null,a,gt),yt.push({event:ae,listeners:Ue}),ae.data=Ee)),JM(yt,e,st,a,gt)}T_(yt,n)})}function Sl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Qc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ws(e,a),u!=null&&o.unshift(Sl(e,u,h)),u=Ws(e,n),u!=null&&o.push(Sl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ny(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R_(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var w=a,V=w.alternate,st=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||st===null||(V=st,u?(st=Ws(a,h),st!=null&&S.unshift(Sl(a,st,V))):u||(st=Ws(a,h),st!=null&&S.push(Sl(a,st,V)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var iy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function w_(e){return(typeof e=="string"?e:""+e).replace(iy,`
`).replace(ay,"")}function C_(e,n){return n=w_(n),w_(e)===n}function on(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Kt(e,"class",o);break;case"tabIndex":Kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,a,o);break;case"style":Si(e,o,h);break;case"data":if(n!=="object"){Kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ua(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&on(e,n,"name",u.name,u,null),on(e,n,"formEncType",u.formEncType,u,null),on(e,n,"formMethod",u.formMethod,u,null),on(e,n,"formTarget",u.formTarget,u,null)):(on(e,n,"encType",u.encType,u,null),on(e,n,"method",u.method,u,null),on(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ua(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ua(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),zt(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ei.get(a)||a,zt(e,a,o))}}function $h(e,n,a,o,u,h){switch(a){case"style":Si(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[gn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):zt(e,a,o)}}}function Kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:on(e,n,h,S,a,null)}}u&&on(e,n,"srcSet",a.srcSet,a,null),o&&on(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var w=h=S=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":S=gt;break;case"checked":V=gt;break;case"defaultChecked":st=gt;break;case"value":h=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:on(e,n,o,gt,a,null)}}hn(e,h,w,V,st,S,u,!1);return;case"select":we("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:on(e,n,u,w,a,null)}n=h,a=S,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":we("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:on(e,n,S,w,a,null)}xi(e,o,u,h);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:on(e,n,V,o,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<xl.length;o++)we(xl[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:on(e,n,st,o,a,null)}return;default:if(Xe(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&$h(e,n,gt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&on(e,n,w,o,a,null))}function sy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,w=null,V=null,st=null,gt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=yt;default:o.hasOwnProperty(ut)||on(e,n,ut,null,o,yt)}}for(var ot in o){var ut=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":h=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":gt=ut;break;case"value":S=ut;break;case"defaultValue":w=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==yt&&on(e,n,ot,ut,o,yt)}}jt(e,S,w,V,st,gt,h,u);return;case"select":ut=S=w=ot=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(h)||on(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ot=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==V&&on(e,n,u,h,o,V)}n=w,a=S,o=ut,ot!=null?xn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:on(e,n,w,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&on(e,n,S,u,o,h)}ti(e,ot,ut);return;case"option":for(var ee in a)if(ot=a[ee],a.hasOwnProperty(ee)&&ot!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:on(e,n,ee,null,o,ot)}for(V in o)if(ot=o[V],ut=a[V],o.hasOwnProperty(V)&&ot!==ut&&(ot!=null||ut!=null))switch(V){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:on(e,n,V,ot,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)ot=a[de],a.hasOwnProperty(de)&&ot!=null&&!o.hasOwnProperty(de)&&on(e,n,de,null,o,ot);for(st in o)if(ot=o[st],ut=a[st],o.hasOwnProperty(st)&&ot!==ut&&(ot!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:on(e,n,st,ot,o,ut)}return;default:if(Xe(n)){for(var ln in a)ot=a[ln],a.hasOwnProperty(ln)&&ot!==void 0&&!o.hasOwnProperty(ln)&&$h(e,n,ln,void 0,o,ot);for(gt in o)ot=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||ot===ut||ot===void 0&&ut===void 0||$h(e,n,gt,ot,o,ut);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!o.hasOwnProperty(J)&&on(e,n,J,null,o,ot);for(yt in o)ot=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||on(e,n,yt,ot,o,ut)}function D_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,w=u.duration;if(h&&w&&D_(S)){for(S=0,w=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],st=V.startTime;if(st>w)break;var gt=V.transferSize,yt=V.initiatorType;gt&&D_(yt)&&(V=V.responseEnd,S+=gt*(V<w?1:(w-st)/(V-st)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var td=null,ed=null;function Jc(e){return e.nodeType===9?e:e.ownerDocument}function U_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function nd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function oy(){var e=window.event;return e&&e.type==="popstate"?e===id?!1:(id=e,!0):(id=null,!1)}var L_=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,O_=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof O_<"u"?function(e){return O_.resolve(null).then(e).catch(uy)}:L_;function uy(e){setTimeout(function(){throw e})}function Ts(e){return e==="head"}function P_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),uo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ml(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ml(a);for(var h=a.firstChild;h;){var S=h.nextSibling,w=h.nodeName;h[Hn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Ml(e.ownerDocument.body);a=u}while(a);uo(n)}function I_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ad(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),Gn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Hn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=$i(e.nextSibling),e===null)break}return null}function hy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$i(e.nextSibling),e===null))return null;return e}function F_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$i(e.nextSibling),e===null))return null;return e}function sd(e){return e.data==="$?"||e.data==="$~"}function rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function $i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var od=null;function z_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return $i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function B_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function H_(e,n,a){switch(n=Jc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ml(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gn(e)}var ta=new Map,G_=new Set;function $c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qa=H.d;H.d={f:py,r:my,D:gy,C:_y,L:vy,m:xy,X:My,S:Sy,M:yy};function py(){var e=qa.f(),n=Xc();return e||n}function my(e){var n=Jn(e);n!==null&&n.tag===5&&n.type==="form"?ag(n):qa.r(e)}var oo=typeof document>"u"?null:document;function V_(e,n,a){var o=oo;if(o&&typeof n=="string"&&n){var u=Be(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),G_.has(u)||(G_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Kn(n,"link",e),qe(n),o.head.appendChild(n)))}}function gy(e){qa.D(e),V_("dns-prefetch",e,null)}function _y(e,n){qa.C(e,n),V_("preconnect",e,n)}function vy(e,n,a){qa.L(e,n,a);var o=oo;if(o&&e&&n){var u='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Be(a.imageSizes)+'"]')):u+='[href="'+Be(e)+'"]';var h=u;switch(n){case"style":h=lo(e);break;case"script":h=co(e)}ta.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ta.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(yl(h))||n==="script"&&o.querySelector(bl(h))||(n=o.createElement("link"),Kn(n,"link",e),qe(n),o.head.appendChild(n)))}}function xy(e,n){qa.m(e,n);var a=oo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Be(o)+'"][href="'+Be(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=co(e)}if(!ta.has(h)&&(e=v({rel:"modulepreload",href:e},n),ta.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(h)))return}o=a.createElement("link"),Kn(o,"link",e),qe(o),a.head.appendChild(o)}}}function Sy(e,n,a){qa.S(e,n,a);var o=oo;if(o&&e){var u=ci(o).hoistableStyles,h=lo(e);n=n||"default";var S=u.get(h);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(yl(h)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ta.get(h))&&ld(e,a);var V=S=o.createElement("link");qe(V),Kn(V,"link",e),V._p=new Promise(function(st,gt){V.onload=st,V.onerror=gt}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,tu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(h,S)}}}function My(e,n){qa.X(e,n);var a=oo;if(a&&e){var o=ci(a).hoistableScripts,u=co(e),h=o.get(u);h||(h=a.querySelector(bl(u)),h||(e=v({src:e,async:!0},n),(n=ta.get(u))&&cd(e,n),h=a.createElement("script"),qe(h),Kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function yy(e,n){qa.M(e,n);var a=oo;if(a&&e){var o=ci(a).hoistableScripts,u=co(e),h=o.get(u);h||(h=a.querySelector(bl(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=ta.get(u))&&cd(e,n),h=a.createElement("script"),qe(h),Kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function k_(e,n,a,o){var u=(u=it.current)?$c(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lo(a.href),a=ci(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lo(a.href);var h=ci(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(yl(e)))&&!h._p&&(S.instance=h,S.state.loading=5),ta.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ta.set(e,a),h||by(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=co(a),a=ci(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lo(e){return'href="'+Be(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function X_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function by(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Kn(n,"link",a),qe(n),e.head.appendChild(n))}function co(e){return'[src="'+Be(e)+'"]'}function bl(e){return"script[async]"+e}function W_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Be(a.href)+'"]');if(o)return n.instance=o,qe(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),qe(o),Kn(o,"style",u),tu(o,a.precedence,e),n.instance=o;case"stylesheet":u=lo(a.href);var h=e.querySelector(yl(u));if(h)return n.state.loading|=4,n.instance=h,qe(h),h;o=X_(a),(u=ta.get(u))&&ld(o,u),h=(e.ownerDocument||e).createElement("link"),qe(h);var S=h;return S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),Kn(h,"link",o),n.state.loading|=4,tu(h,a.precedence,e),n.instance=h;case"script":return h=co(a.src),(u=e.querySelector(bl(h)))?(n.instance=u,qe(u),u):(o=a,(u=ta.get(h))&&(o=v({},a),cd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),qe(u),Kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,e));return n.instance}function tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var eu=null;function Y_(e,n,a){if(eu===null){var o=new Map,u=eu=new Map;u.set(a,o)}else u=eu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Hn]||h[Qe]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var w=o.get(S);w?w.push(h):o.set(S,[h])}}return o}function q_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ty(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lo(o.href),h=n.querySelector(yl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,qe(h);return}h=n.ownerDocument||n,o=X_(o),(u=ta.get(u))&&ld(o,u),h=h.createElement("link"),qe(h);var S=h;S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),Kn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ud=0;function Ay(e,n){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&ud===0&&(ud=62500*ry());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>ud?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var iu=null;function au(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,n.forEach(Ry,e),iu=null,nu.call(e))}function Ry(e,n){if(!(n.state.loading&4)){var a=iu.get(e);if(a)var o=a.get(null);else{a=new Map,iu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=nu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var El={$$typeof:U,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function wy(e,n,a,o,u,h,S,w,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.hiddenUpdates=Qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Z_(e,n,a,o,u,h,S,w,V,st,gt,yt){return e=new wy(e,n,a,S,V,st,gt,yt,w),n=1,h===!0&&(n|=24),h=Ni(3,null,null,n),e.current=h,h.stateNode=e,n=kf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},qf(h),e}function K_(e){return e?(e=Hr,e):Hr}function Q_(e,n,a,o,u,h){u=K_(u),o.context===null?o.context=u:o.pendingContext=u,o=ps(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ms(e,o,n),a!==null&&(Ai(a,e,n),nl(a,e,n))}function J_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fd(e,n){J_(e,n),(e=e.alternate)&&J_(e,n)}function $_(e){if(e.tag===13||e.tag===31){var n=Zs(e,67108864);n!==null&&Ai(n,e,67108864),fd(e,67108864)}}function tv(e){if(e.tag===13||e.tag===31){var n=Fi();n=Ae(n);var a=Zs(e,n);a!==null&&Ai(a,e,n),fd(e,n)}}var su=!0;function Cy(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=2,hd(e,n,a,o)}finally{H.p=h,I.T=u}}function Dy(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=8,hd(e,n,a,o)}finally{H.p=h,I.T=u}}function hd(e,n,a,o){if(su){var u=dd(o);if(u===null)Jh(e,n,o,ru,a),nv(e,o);else if(Ny(u,e,n,a,o))o.stopPropagation();else if(nv(e,o),n&4&&-1<Uy.indexOf(e)){for(;u!==null;){var h=Jn(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Lt(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var V=1<<31-Vt(S);w.entanglements[1]|=V,S&=~V}Ma(h),(je&6)===0&&(Vc=Pt()+500,vl(0))}}break;case 31:case 13:w=Zs(h,2),w!==null&&Ai(w,h,2),Xc(),fd(h,2)}if(h=dd(o),h===null&&Jh(e,n,o,ru,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Jh(e,n,o,null,a)}}function dd(e){return e=Xs(e),pd(e)}var ru=null;function pd(e){if(ru=null,e=Di(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ru=e,null}function ev(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case L:return 2;case b:return 8;case F:case ht:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var md=!1,As=null,Rs=null,ws=null,Tl=new Map,Al=new Map,Cs=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(e,n){switch(e){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":Tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(n.pointerId)}}function Rl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Jn(n),n!==null&&$_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ny(e,n,a,o,u){switch(n){case"focusin":return As=Rl(As,e,n,a,o,u),!0;case"dragenter":return Rs=Rl(Rs,e,n,a,o,u),!0;case"mouseover":return ws=Rl(ws,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Tl.set(h,Rl(Tl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Al.set(h,Rl(Al.get(h)||null,e,n,a,o,u)),!0}return!1}function iv(e){var n=Di(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,gi(e.priority,function(){tv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,gi(e.priority,function(){tv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Cr=o,a.target.dispatchEvent(o),Cr=null}else return n=Jn(a),n!==null&&$_(n),e.blockedOn=a,!1;n.shift()}return!0}function av(e,n,a){ou(e)&&a.delete(n)}function Ly(){md=!1,As!==null&&ou(As)&&(As=null),Rs!==null&&ou(Rs)&&(Rs=null),ws!==null&&ou(ws)&&(ws=null),Tl.forEach(av),Al.forEach(av)}function lu(e,n){e.blockedOn===n&&(e.blockedOn=null,md||(md=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ly)))}var cu=null;function sv(e){cu!==e&&(cu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var h=Jn(a);h!==null&&(e.splice(n,3),n-=3,dh(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function uo(e){function n(V){return lu(V,e)}As!==null&&lu(As,e),Rs!==null&&lu(Rs,e),ws!==null&&lu(ws,e),Tl.forEach(n),Al.forEach(n);for(var a=0;a<Cs.length;a++){var o=Cs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)iv(a),a.blockedOn===null&&Cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[gn]||null;if(typeof h=="function")S||sv(a);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[gn]||null)w=S.formAction;else if(pd(u)!==null)continue}else w=S.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),sv(a)}}}function rv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(e){this._internalRoot=e}uu.prototype.render=gd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Fi();Q_(a,o,e,n,null,null)},uu.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Q_(e.current,2,null,e,null,null),Xc(),n[_i]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var n=xt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Cs.length&&n!==0&&n<Cs[a].priority;a++);Cs.splice(a,0,e),a===0&&iv(e)}};var ov=t.version;if(ov!=="19.2.5")throw Error(s(527,ov,"19.2.5"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Oy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{lt=fu.inject(Oy),ft=fu}catch{}}return Cl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=pg,h=mg,S=gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Z_(e,1,!1,null,null,a,o,null,u,h,S,rv),e[_i]=n.current,Qh(e),new gd(n)},Cl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=pg,S=mg,w=gg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Z_(e,1,!0,n,a??null,o,u,V,h,S,w,rv),n.context=K_(null),a=n.current,o=Fi(),o=Ae(o),u=ps(o),u.callback=null,ms(a,u,o),a=o,n.current.lanes=a,ue(n,a),Ma(n),e[_i]=n.current,Qh(e),new uu(n)},Cl.version="19.2.5",Cl}var _v;function Yy(){if(_v)return vd.exports;_v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vd.exports=Wy(),vd.exports}var qy=Yy(),Wt=rm();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Wn=96,Gi=96,jy=220,Zy=95,Ky=55,Qy=.045,Jy=.022;function da(r){return Math.min(1,Math.max(0,r))}function Jx(){return{bass:0,lowMid:0,mid:0,highMid:0,treble:0,volume:0,beat:!1,beatEnergy:0,snareOnset:!1,snareEnergy:0,hatOnset:!1,hatEnergy:0,spectralFlux:0,spectralCentroid:0,rmsEnergy:0,spectrum:new Float32Array(Wn),waveform:new Float32Array(Gi)}}function om(){const r=window.AudioContext??window.webkitAudioContext;if(!r)throw new Error("Web Audio is not supported in this browser.");return r}function Dl(r,t,i,s){const l=t/2,c=Math.max(0,Math.floor(i/l*r.length)),f=Math.min(r.length-1,Math.ceil(s/l*r.length));if(f<c)return 0;let d=0;for(let m=c;m<=f;m+=1)d+=r[m];return da(d/((f-c+1)*255))}function zs(){const r=Jx();return{getFrame:()=>r,dispose:()=>{}}}class lm{constructor(t,i,s,l){vn(this,"frame",Jx());vn(this,"frequencyData");vn(this,"timeData");vn(this,"source");vn(this,"lastBeatTime",0);vn(this,"smoothedBass",0);vn(this,"smoothedVolume",0);vn(this,"peakBass",0);vn(this,"peakLowMid",0);vn(this,"peakMid",0);vn(this,"peakHighMid",0);vn(this,"peakTreble",0);vn(this,"previousLowMid",0);vn(this,"previousMid",0);vn(this,"previousHighMid",0);vn(this,"previousTreble",0);vn(this,"smoothedSnareFlux",0);vn(this,"smoothedHatFlux",0);vn(this,"lastSnareTime",0);vn(this,"lastHatTime",0);vn(this,"energyHistory",[]);vn(this,"ENERGY_HISTORY_SIZE",43);this.audioContext=t,this.analyser=i,this.cleanup=l,this.source=s,this.frequencyData=new Uint8Array(i.frequencyBinCount),this.timeData=new Uint8Array(i.fftSize)}getFrame(t){this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeData);const i=this.audioContext.sampleRate;this.frame.bass=Dl(this.frequencyData,i,20,140),this.frame.lowMid=Dl(this.frequencyData,i,140,420),this.frame.mid=Dl(this.frequencyData,i,420,1800),this.frame.highMid=Dl(this.frequencyData,i,1800,5200),this.frame.treble=Dl(this.frequencyData,i,5200,14e3),this.energyHistory.push(this.frame.bass),this.energyHistory.length>this.ENERGY_HISTORY_SIZE&&this.energyHistory.shift();const s=this.energyHistory.length>0?this.energyHistory.reduce((M,x)=>M+x,0)/this.energyHistory.length:0;this.frame.volume=da(this.frame.bass*.34+this.frame.lowMid*.2+this.frame.mid*.2+this.frame.highMid*.12+this.frame.treble*.14),this.smoothedBass=this.smoothedBass*.9+this.frame.bass*.1,this.smoothedVolume=this.smoothedVolume*.93+this.frame.volume*.07;const l=s*1.5;this.frame.beat=this.frame.bass>l&&t-this.lastBeatTime>jy,this.frame.beatEnergy=this.frame.beat?da(this.frame.bass+this.frame.volume*.35):Math.max(0,this.frame.beatEnergy*.86-.008),this.frame.beat&&(this.lastBeatTime=t);const c=this.frame.lowMid,f=this.frame.mid,d=this.frame.highMid,m=this.frame.treble,p=Math.max(0,c-this.previousLowMid),_=Math.max(0,(d+m)*.5-(this.previousHighMid+this.previousTreble)*.5);this.smoothedSnareFlux=this.smoothedSnareFlux*.86+p*.14,this.smoothedHatFlux=this.smoothedHatFlux*.82+_*.18,this.frame.snareOnset=p>Qy&&p>this.smoothedSnareFlux*1.65&&t-this.lastSnareTime>Zy,this.frame.snareOnset?(this.lastSnareTime=t,this.frame.snareEnergy=da(p*5+c*.4)):this.frame.snareEnergy=Math.max(0,this.frame.snareEnergy*.84-.01),this.frame.hatOnset=_>Jy&&_>this.smoothedHatFlux*1.55&&t-this.lastHatTime>Ky,this.frame.hatOnset?(this.lastHatTime=t,this.frame.hatEnergy=da(_*6+m*.32)):this.frame.hatEnergy=Math.max(0,this.frame.hatEnergy*.78-.012),this.frame.spectralFlux=da(p+Math.max(0,f-this.previousMid)+Math.max(0,d-this.previousHighMid)+Math.max(0,m-this.previousTreble)),this.previousLowMid=c,this.previousMid=f,this.previousHighMid=d,this.previousTreble=m;const v=.92;this.peakBass=this.frame.bass>this.peakBass?this.frame.bass:Math.max(this.frame.bass,this.peakBass*v),this.peakLowMid=this.frame.lowMid>this.peakLowMid?this.frame.lowMid:Math.max(this.frame.lowMid,this.peakLowMid*v),this.peakMid=this.frame.mid>this.peakMid?this.frame.mid:Math.max(this.frame.mid,this.peakMid*v),this.peakHighMid=this.frame.highMid>this.peakHighMid?this.frame.highMid:Math.max(this.frame.highMid,this.peakHighMid*v),this.peakTreble=this.frame.treble>this.peakTreble?this.frame.treble:Math.max(this.frame.treble,this.peakTreble*v),this.frame.bass=this.peakBass,this.frame.lowMid=this.peakLowMid,this.frame.mid=this.peakMid,this.frame.highMid=this.peakHighMid,this.frame.treble=this.peakTreble,this.frame.volume=da(this.peakBass*.34+this.peakLowMid*.2+this.peakMid*.2+this.peakHighMid*.12+this.peakTreble*.14),this.frame.volume<.01&&(this.peakBass*=.95,this.peakLowMid*=.95,this.peakMid*=.95,this.peakHighMid*=.95,this.peakTreble*=.95,this.frame.bass=this.peakBass,this.frame.lowMid=this.peakLowMid,this.frame.mid=this.peakMid,this.frame.highMid=this.peakHighMid,this.frame.treble=this.peakTreble,this.frame.volume=da(this.peakBass*.34+this.peakLowMid*.2+this.peakMid*.2+this.peakHighMid*.12+this.peakTreble*.14));let g=0,y=0;const T=i/2;for(let M=0;M<this.frequencyData.length;M+=1){const x=this.frequencyData[M],A=M/this.frequencyData.length*T;g+=A*x,y+=x}this.frame.spectralCentroid=y>0?da(g/y/T):0;let D=0;for(let M=0;M<this.timeData.length;M+=1){const x=(this.timeData[M]-128)/128;D+=x*x}this.frame.rmsEnergy=da(Math.sqrt(D/this.timeData.length)*3.2);for(let M=0;M<Wn;M+=1){const x=Math.floor(M/Wn*this.frequencyData.length),A=Math.max(x+1,Math.floor((M+1)/Wn*this.frequencyData.length));let U=0;for(let C=x;C<A;C+=1)U+=this.frequencyData[C];this.frame.spectrum[M]=da(U/((A-x)*255))}for(let M=0;M<Gi;M+=1){const x=Math.floor(M/Gi*this.timeData.length);this.frame.waveform[M]=(this.timeData[x]-128)/128}return this.frame}dispose(){this.source.disconnect(),this.analyser.disconnect(),this.cleanup()}}function cm(r){const t=r.createAnalyser();return t.fftSize=2048,t.minDecibels=-88,t.maxDecibels=-18,t.smoothingTimeConstant=.78,t}async function $y(){var c;if(!((c=navigator.mediaDevices)!=null&&c.getUserMedia))throw new Error("Microphone input is not supported in this browser.");const r=om(),t=new r,i=cm(t);let s;try{s=await navigator.mediaDevices.getUserMedia({audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1}})}catch(f){throw t.close(),f}const l=t.createMediaStreamSource(s);return l.connect(i),await t.resume(),new lm(t,i,l,()=>{s.getTracks().forEach(f=>f.stop()),t.close()})}async function tb(r){var v,g;if(!((v=navigator.mediaDevices)!=null&&v.getDisplayMedia))throw new Error("Browser tab audio capture is not supported in this browser.");const t=om(),i=new t,s=cm(i),l={audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1,suppressLocalAudioPlayback:!1},monitorTypeSurfaces:"exclude",preferCurrentTab:!1,selfBrowserSurface:"exclude",surfaceSwitching:"include",systemAudio:"exclude",video:{displaySurface:"browser"},windowAudio:"exclude"};let c;try{c=await navigator.mediaDevices.getDisplayMedia(l)}catch(y){throw i.close(),y}const f=c.getAudioTracks(),d=(g=c.getVideoTracks()[0])==null?void 0:g.getSettings().displaySurface;if(d&&d!=="browser")throw c.getTracks().forEach(y=>y.stop()),i.close(),new Error("Choose a Chrome tab with audio sharing enabled. Screen and window audio are not used.");if(f.length===0)throw c.getTracks().forEach(y=>y.stop()),i.close(),new Error("No tab audio was shared. Choose the Chrome Tab section and enable audio sharing.");const m=new MediaStream(f),p=i.createMediaStreamSource(m),_=()=>r==null?void 0:r();return c.getTracks().forEach(y=>{y.addEventListener("ended",_,{once:!0})}),p.connect(s),await i.resume(),new lm(i,s,p,()=>{c.getTracks().forEach(y=>{y.removeEventListener("ended",_),y.stop()}),i.close()})}async function eb(r){const t=om(),i=new t,s=cm(i),l=URL.createObjectURL(r),c=new Audio(l);c.loop=!1,c.preload="auto",c.src=l;const f=i.createMediaElementSource(c);f.connect(s),s.connect(i.destination),await i.resume(),await c.play();const d=new lm(i,s,f,()=>{c.pause(),c.removeAttribute("src"),c.load(),URL.revokeObjectURL(l),i.close()});return Object.assign(d,{getPlaybackState:()=>({currentTime:Number.isFinite(c.currentTime)?c.currentTime:0,duration:Number.isFinite(c.duration)?c.duration:0,isPaused:c.paused,isEnded:c.ended}),pause:()=>c.pause(),play:async()=>{await i.resume(),c.ended&&(c.currentTime=0),await c.play()},seek:m=>{const p=Number.isFinite(c.duration)?c.duration:0;c.currentTime=p>0?Math.min(p,Math.max(0,m)):0},togglePlayback:async()=>c.paused||c.ended?(await i.resume(),c.ended&&(c.currentTime=0),await c.play(),!0):(c.pause(),!1)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="184",nb=0,vv=1,ib=2,qu=1,ab=2,ql=3,Gs=0,Ri=1,Ta=2,_a=0,No=1,Vs=2,xv=3,Sv=4,sb=5,mr=100,rb=101,ob=102,lb=103,cb=104,ub=200,fb=201,hb=202,db=203,cp=204,up=205,pb=206,mb=207,gb=208,_b=209,vb=210,xb=211,Sb=212,Mb=213,yb=214,fp=0,hp=1,dp=2,Oo=3,pp=4,mp=5,gp=6,_p=7,$x=0,bb=1,Eb=2,Ra=0,tS=1,eS=2,nS=3,fm=4,iS=5,aS=6,sS=7,rS=300,Mr=301,Po=302,bd=303,Ed=304,mf=306,vp=1e3,es=1001,xp=1002,Pn=1003,Tb=1004,hu=1005,oi=1006,Td=1007,_r=1008,Xi=1009,oS=1010,lS=1011,Jl=1012,hm=1013,wa=1014,ma=1015,di=1016,dm=1017,pm=1018,$l=1020,cS=35902,uS=35899,fS=1021,hS=1022,ga=1023,is=1026,vr=1027,mm=1028,gm=1029,yr=1030,_m=1031,vm=1033,ju=33776,Zu=33777,Ku=33778,Qu=33779,Sp=35840,Mp=35841,yp=35842,bp=35843,Ep=36196,Tp=37492,Ap=37496,Rp=37488,wp=37489,$u=37490,Cp=37491,Dp=37808,Up=37809,Np=37810,Lp=37811,Op=37812,Pp=37813,Ip=37814,Fp=37815,zp=37816,Bp=37817,Hp=37818,Gp=37819,Vp=37820,kp=37821,Xp=36492,Wp=36494,Yp=36495,qp=36283,jp=36284,tf=36285,Zp=36286,Ab=3200,Kp=0,Rb=1,Bs="",Hi="srgb",ef="srgb-linear",nf="linear",an="srgb",fo=7680,Mv=519,wb=512,Cb=513,Db=514,xm=515,Ub=516,Nb=517,Sm=518,Lb=519,yv=35044,bv="300 es",Aa=2e3,tc=2001;function Ob(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function af(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pb(){const r=af("canvas");return r.style.display="block",r}const Ev={};function Tv(...r){const t="THREE."+r.shift();console.log(t,...r)}function dS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function me(...r){r=dS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ge(...r){r=dS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Qp(...r){const t=r.join(" ");t in Ev||(Ev[t]=!0,me(...r))}function Ib(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Fb={[fp]:hp,[dp]:gp,[pp]:_p,[Oo]:mp,[hp]:fp,[gp]:dp,[_p]:pp,[mp]:Oo};class Er{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Av=1234567;const Zl=Math.PI/180,ec=180/Math.PI;function Bo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ai[r&255]+ai[r>>8&255]+ai[r>>16&255]+ai[r>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[i&63|128]+ai[i>>8&255]+"-"+ai[i>>16&255]+ai[i>>24&255]+ai[s&255]+ai[s>>8&255]+ai[s>>16&255]+ai[s>>24&255]).toLowerCase()}function Ne(r,t,i){return Math.max(t,Math.min(i,r))}function Mm(r,t){return(r%t+t)%t}function zb(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Bb(r,t,i){return r!==t?(i-r)/(t-r):0}function Kl(r,t,i){return(1-i)*r+i*t}function Hb(r,t,i,s){return Kl(r,t,1-Math.exp(-i*s))}function Gb(r,t=1){return t-Math.abs(Mm(r,t*2)-t)}function Vb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function kb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Xb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Wb(r,t){return r+Math.random()*(t-r)}function Yb(r){return r*(.5-Math.random())}function qb(r){r!==void 0&&(Av=r);let t=Av+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jb(r){return r*Zl}function Zb(r){return r*ec}function Kb(r){return(r&r-1)===0&&r!==0}function Qb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $b(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),T=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*T,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*T,d*p);break;case"ZYZ":r.set(m*T,m*y,d*_,d*p);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Co(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:Zl,RAD2DEG:ec,generateUUID:Bo,clamp:Ne,euclideanModulo:Mm,mapLinear:zb,inverseLerp:Bb,lerp:Kl,damp:Hb,pingpong:Gb,smoothstep:Vb,smootherstep:kb,randInt:Xb,randFloat:Wb,randFloatSpread:Yb,seededRandom:qb,degToRad:jb,radToDeg:Zb,isPowerOfTwo:Kb,ceilPowerOfTwo:Qb,floorPowerOfTwo:Jb,setQuaternionFromProperEuler:$b,normalize:fi,denormalize:Co},Dm=class Dm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ne(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dm.prototype.isVector2=!0;let _e=Dm;class Tr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],T=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==y||_!==T){let M=m*g+p*y+_*T+v*D;M<0&&(g=-g,y=-y,T=-T,D=-D,M=-M);let x=1-d;if(M<.9995){const A=Math.acos(M),U=Math.sin(A);x=Math.sin(x*A)/U,d=Math.sin(d*A)/U,m=m*x+g*d,p=p*x+y*d,_=_*x+T*d,v=v*x+D*d}else{m=m*x+g*d,p=p*x+y*d,_=_*x+T*d,v=v*x+D*d;const A=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=A,p*=A,_*=A,v*=A}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],T=c[f+3];return t[i]=d*T+_*v+m*y-p*g,t[i+1]=m*T+_*g+p*v-d*y,t[i+2]=p*T+_*y+d*g-m*v,t[i+3]=_*T-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v-g*y*T;break;case"YXZ":this._x=g*_*v+p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v+g*y*T;break;case"ZXY":this._x=g*_*v-p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v-g*y*T;break;case"ZYX":this._x=g*_*v-p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v+g*y*T;break;case"YZX":this._x=g*_*v+p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v-g*y*T;break;case"XZY":this._x=g*_*v-p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v+g*y*T;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Um=class Um{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Rv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Rv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ne(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Um.prototype.isVector3=!0;let K=Um;const Ad=new K,Rv=new Tr,Nm=class Nm{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],T=s[8],D=l[0],M=l[3],x=l[6],A=l[1],U=l[4],C=l[7],z=l[2],N=l[5],P=l[8];return c[0]=f*D+d*A+m*z,c[3]=f*M+d*U+m*N,c[6]=f*x+d*C+m*P,c[1]=p*D+_*A+v*z,c[4]=p*M+_*U+v*N,c[7]=p*x+_*C+v*P,c[2]=g*D+y*A+T*z,c[5]=g*M+y*U+T*N,c[8]=g*x+y*C+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,T=i*v+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=v*D,t[1]=(l*p-_*s)*D,t[2]=(d*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-d*i)*D,t[6]=y*D,t[7]=(s*m-p*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rd.makeScale(t,i)),this}rotate(t){return this.premultiply(Rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nm.prototype.isMatrix3=!0;let Se=Nm;const Rd=new Se,wv=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const r={enabled:!0,workingColorSpace:ef,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===an&&(l.r=ns(l.r),l.g=ns(l.g),l.b=ns(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===an&&(l.r=Lo(l.r),l.g=Lo(l.g),l.b=Lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Bs?nf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ef]:{primaries:t,whitePoint:s,transfer:nf,toXYZ:wv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:t,whitePoint:s,transfer:an,toXYZ:wv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),r}const Pe=tE();function ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ho;class eE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ho===void 0&&(ho=af("canvas")),ho.width=t.width,ho.height=t.height;const l=ho.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ho}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=af("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ns(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ns(i[s]/255)*255):i[s]=ns(i[s]);return{data:i,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nE=0;class ym{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(wd(l[f].image)):c.push(wd(l[f]))}else c=wd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let iE=0;const Cd=new K;class pi extends Er{constructor(t=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,s=es,l=es,c=oi,f=_r,d=ga,m=Xi,p=pi.DEFAULT_ANISOTROPY,_=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Bo(),this.name="",this.source=new ym(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vp:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case xp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vp:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case xp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=rS;pi.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],T=m[9],D=m[2],M=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(y+1)/2,z=(x+1)/2,N=(_+g)/4,P=(v+D)/4,E=(T+M)/4;return U>C&&U>z?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=N/s,c=P/s):C>z?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=N/l,c=E/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=P/c,l=E/c),this.set(s,l,c,i),this}let A=Math.sqrt((M-T)*(M-T)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(M-T)/A,this.y=(v-D)/A,this.z=(g-_)/A,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this.w=Ne(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this.w=Ne(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let bn=Lm;class aE extends Er{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new pi(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ym(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends aE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class pS extends pi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sE extends pi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=class pf{constructor(t,i,s,l,c,f,d,m,p,_,v,g,y,T,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,y,T,D,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,y,T,D,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=g,x[3]=y,x[7]=T,x[11]=D,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/po.setFromMatrixColumn(t,0).length(),c=1/po.setFromMatrixColumn(t,1).length(),f=1/po.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,T=d*_,D=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+T*p,i[5]=g-D*p,i[9]=-d*m,i[2]=D-g*p,i[6]=T+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,T=p*_,D=p*v;i[0]=g+D*d,i[4]=T*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=y*d-T,i[6]=D+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,T=p*_,D=p*v;i[0]=g-D*d,i[4]=-f*v,i[8]=T+y*d,i[1]=y+T*d,i[5]=f*_,i[9]=D-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,T=d*_,D=d*v;i[0]=m*_,i[4]=T*p-y,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,T=d*m,D=d*p;i[0]=m*_,i[4]=D-g*v,i[8]=T*v+y,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+T,i[10]=g-D*v}else if(t.order==="XZY"){const g=f*m,y=f*p,T=d*m,D=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=y*v-T,i[2]=T*v-y,i[6]=d*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rE,t,oE)}lookAt(t,i,s){const l=this.elements;return zi.subVectors(t,i),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),Us.crossVectors(s,zi),Us.lengthSq()===0&&(Math.abs(s.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),Us.crossVectors(s,zi)),Us.normalize(),du.crossVectors(zi,Us),l[0]=Us.x,l[4]=du.x,l[8]=zi.x,l[1]=Us.y,l[5]=du.y,l[9]=zi.y,l[2]=Us.z,l[6]=du.z,l[10]=zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],T=s[2],D=s[6],M=s[10],x=s[14],A=s[3],U=s[7],C=s[11],z=s[15],N=l[0],P=l[4],E=l[8],O=l[12],k=l[1],G=l[5],Y=l[9],nt=l[13],ct=l[2],W=l[6],I=l[10],H=l[14],rt=l[3],dt=l[7],Tt=l[11],B=l[15];return c[0]=f*N+d*k+m*ct+p*rt,c[4]=f*P+d*G+m*W+p*dt,c[8]=f*E+d*Y+m*I+p*Tt,c[12]=f*O+d*nt+m*H+p*B,c[1]=_*N+v*k+g*ct+y*rt,c[5]=_*P+v*G+g*W+y*dt,c[9]=_*E+v*Y+g*I+y*Tt,c[13]=_*O+v*nt+g*H+y*B,c[2]=T*N+D*k+M*ct+x*rt,c[6]=T*P+D*G+M*W+x*dt,c[10]=T*E+D*Y+M*I+x*Tt,c[14]=T*O+D*nt+M*H+x*B,c[3]=A*N+U*k+C*ct+z*rt,c[7]=A*P+U*G+C*W+z*dt,c[11]=A*E+U*Y+C*I+z*Tt,c[15]=A*O+U*nt+C*H+z*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],T=t[3],D=t[7],M=t[11],x=t[15],A=m*y-p*g,U=d*y-p*v,C=d*g-m*v,z=f*y-p*_,N=f*g-m*_,P=f*v-d*_;return i*(D*A-M*U+x*C)-s*(T*A-M*z+x*N)+l*(T*U-D*z+x*P)-c*(T*C-D*N+M*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],T=t[12],D=t[13],M=t[14],x=t[15],A=i*d-s*f,U=i*m-l*f,C=i*p-c*f,z=s*m-l*d,N=s*p-c*d,P=l*p-c*m,E=_*D-v*T,O=_*M-g*T,k=_*x-y*T,G=v*M-g*D,Y=v*x-y*D,nt=g*x-y*M,ct=A*nt-U*Y+C*G+z*k-N*O+P*E;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ct;return t[0]=(d*nt-m*Y+p*G)*W,t[1]=(l*Y-s*nt-c*G)*W,t[2]=(D*P-M*N+x*z)*W,t[3]=(g*N-v*P-y*z)*W,t[4]=(m*k-f*nt-p*O)*W,t[5]=(i*nt-l*k+c*O)*W,t[6]=(M*C-T*P-x*U)*W,t[7]=(_*P-g*C+y*U)*W,t[8]=(f*Y-d*k+p*E)*W,t[9]=(s*k-i*Y-c*E)*W,t[10]=(T*N-D*C+x*A)*W,t[11]=(v*C-_*N-y*A)*W,t[12]=(d*O-f*G-m*E)*W,t[13]=(i*G-s*O+l*E)*W,t[14]=(D*U-T*z-M*A)*W,t[15]=(_*z-v*U+g*A)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,T=c*v,D=f*_,M=f*v,x=d*v,A=m*p,U=m*_,C=m*v,z=s.x,N=s.y,P=s.z;return l[0]=(1-(D+x))*z,l[1]=(y+C)*z,l[2]=(T-U)*z,l[3]=0,l[4]=(y-C)*N,l[5]=(1-(g+x))*N,l[6]=(M+A)*N,l[7]=0,l[8]=(T+U)*P,l[9]=(M-A)*P,l[10]=(1-(g+D))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=po.set(l[0],l[1],l[2]).length();const d=po.set(l[4],l[5],l[6]).length(),m=po.set(l[8],l[9],l[10]).length();c<0&&(f=-f),ua.copy(this);const p=1/f,_=1/d,v=1/m;return ua.elements[0]*=p,ua.elements[1]*=p,ua.elements[2]*=p,ua.elements[4]*=_,ua.elements[5]*=_,ua.elements[6]*=_,ua.elements[8]*=v,ua.elements[9]*=v,ua.elements[10]*=v,i.setFromRotationMatrix(ua),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Aa,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,D;if(m)T=c/(f-c),D=f*c/(f-c);else if(d===Aa)T=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(d===tc)T=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Aa,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,D;if(m)T=1/(f-c),D=f/(f-c);else if(d===Aa)T=-2/(f-c),D=-(f+c)/(f-c);else if(d===tc)T=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};pf.prototype.isMatrix4=!0;let dn=pf;const po=new K,ua=new dn,rE=new K(0,0,0),oE=new K(1,1,1),Us=new K,du=new K,zi=new K,Dv=new dn,Uv=new Tr;class ks{constructor(t=0,i=0,s=0,l=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Dv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class mS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lE=0;const Nv=new K,mo=new Tr,ja=new dn,pu=new K,Ul=new K,cE=new K,uE=new Tr,Lv=new K(1,0,0),Ov=new K(0,1,0),Pv=new K(0,0,1),Iv={type:"added"},fE={type:"removed"},go={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Fn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new K,i=new ks,s=new Tr,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new Se}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mo.setFromAxisAngle(t,i),this.quaternion.multiply(mo),this}rotateOnWorldAxis(t,i){return mo.setFromAxisAngle(t,i),this.quaternion.premultiply(mo),this}rotateX(t){return this.rotateOnAxis(Lv,t)}rotateY(t){return this.rotateOnAxis(Ov,t)}rotateZ(t){return this.rotateOnAxis(Pv,t)}translateOnAxis(t,i){return Nv.copy(t).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Lv,t)}translateY(t){return this.translateOnAxis(Ov,t)}translateZ(t){return this.translateOnAxis(Pv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ja.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pu.copy(t):pu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ja.lookAt(Ul,pu,this.up):ja.lookAt(pu,Ul,this.up),this.quaternion.setFromRotationMatrix(ja),l&&(ja.extractRotation(l.matrixWorld),mo.setFromRotationMatrix(ja),this.quaternion.premultiply(mo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iv),go.child=t,this.dispatchEvent(go),go.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fE),Dd.child=t,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ja.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ja.multiply(t.parent.matrixWorld)),t.applyMatrix4(ja),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iv),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,t,cE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,uE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new K(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uo extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hE={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),x=this._getHandJoint(p,D);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Uo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const gS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Nd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Pe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Pe.workingColorSpace){if(t=Mm(t,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Nd(f,c,t+1/3),this.g=Nd(f,c,t),this.b=Nd(f,c,t-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(t,i=Hi){function s(c){c!==void 0&&parseFloat(c)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Hi){const s=gS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hi){return Pe.workingToColorSpace(si.copy(this),t),Math.round(Ne(si.r*255,0,255))*65536+Math.round(Ne(si.g*255,0,255))*256+Math.round(Ne(si.b*255,0,255))}getHexString(t=Hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pe.workingColorSpace){Pe.workingToColorSpace(si.copy(this),i);const s=si.r,l=si.g,c=si.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Pe.workingColorSpace){return Pe.workingToColorSpace(si.copy(this),i),t.r=si.r,t.g=si.g,t.b=si.b,t}getStyle(t=Hi){Pe.workingToColorSpace(si.copy(this),t);const i=si.r,s=si.g,l=si.b;return t!==Hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+i,Ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ns),t.getHSL(mu);const s=Kl(Ns.h,mu.h,i),l=Kl(Ns.s,mu.s,i),c=Kl(Ns.l,mu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new pe;pe.NAMES=gS;class bm{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(t),this.density=i}clone(){return new bm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dE extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const fa=new K,Za=new K,Ld=new K,Ka=new K,_o=new K,vo=new K,Fv=new K,Od=new K,Pd=new K,Id=new K,Fd=new bn,zd=new bn,Bd=new bn;class pa{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),fa.subVectors(t,i),l.cross(fa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){fa.subVectors(l,i),Za.subVectors(s,i),Ld.subVectors(t,i);const f=fa.dot(fa),d=fa.dot(Za),m=fa.dot(Ld),p=Za.dot(Za),_=Za.dot(Ld),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,T=(f*_-d*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ka)===null?!1:Ka.x>=0&&Ka.y>=0&&Ka.x+Ka.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Ka)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ka.x),m.addScaledVector(f,Ka.y),m.addScaledVector(d,Ka.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Fd.setScalar(0),zd.setScalar(0),Bd.setScalar(0),Fd.fromBufferAttribute(t,i),zd.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fd,c.x),f.addScaledVector(zd,c.y),f.addScaledVector(Bd,c.z),f}static isFrontFacing(t,i,s,l){return fa.subVectors(s,i),Za.subVectors(t,i),fa.cross(Za).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fa.subVectors(this.c,this.b),Za.subVectors(this.a,this.b),fa.cross(Za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return pa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return pa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;_o.subVectors(l,s),vo.subVectors(c,s),Od.subVectors(t,s);const m=_o.dot(Od),p=vo.dot(Od);if(m<=0&&p<=0)return i.copy(s);Pd.subVectors(t,l);const _=_o.dot(Pd),v=vo.dot(Pd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(_o,f);Id.subVectors(t,c);const y=_o.dot(Id),T=vo.dot(Id);if(T>=0&&y<=T)return i.copy(c);const D=y*p-m*T;if(D<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(vo,d);const M=_*T-y*v;if(M<=0&&v-_>=0&&y-T>=0)return Fv.subVectors(c,l),d=(v-_)/(v-_+(y-T)),i.copy(l).addScaledVector(Fv,d);const x=1/(M+D+g);return f=D*x,d=g*x,i.copy(s).addScaledVector(_o,f).addScaledVector(vo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ar{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ha.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ha.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ha.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,ha):ha.fromBufferAttribute(c,f),ha.applyMatrix4(t.matrixWorld),this.expandByPoint(ha);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gu.copy(s.boundingBox)),gu.applyMatrix4(t.matrixWorld),this.union(gu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ha),ha.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nl),_u.subVectors(this.max,Nl),xo.subVectors(t.a,Nl),So.subVectors(t.b,Nl),Mo.subVectors(t.c,Nl),Ls.subVectors(So,xo),Os.subVectors(Mo,So),lr.subVectors(xo,Mo);let i=[0,-Ls.z,Ls.y,0,-Os.z,Os.y,0,-lr.z,lr.y,Ls.z,0,-Ls.x,Os.z,0,-Os.x,lr.z,0,-lr.x,-Ls.y,Ls.x,0,-Os.y,Os.x,0,-lr.y,lr.x,0];return!Hd(i,xo,So,Mo,_u)||(i=[1,0,0,0,1,0,0,0,1],!Hd(i,xo,So,Mo,_u))?!1:(vu.crossVectors(Ls,Os),i=[vu.x,vu.y,vu.z],Hd(i,xo,So,Mo,_u))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ha).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ha).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qa=[new K,new K,new K,new K,new K,new K,new K,new K],ha=new K,gu=new Ar,xo=new K,So=new K,Mo=new K,Ls=new K,Os=new K,lr=new K,Nl=new K,_u=new K,vu=new K,cr=new K;function Hd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){cr.fromArray(r,c);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),_=s.dot(cr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Un=new K,xu=new _e;let pE=0;class mi extends Er{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=yv,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xu.fromBufferAttribute(this,i),xu.applyMatrix3(t),this.setXY(i,xu.x,xu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix3(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Co(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=fi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array),l=fi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array),l=fi(l,this.array),c=fi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yv&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class _S extends mi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vS extends mi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Yn extends mi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const mE=new Ar,Ll=new K,Gd=new K;class Rr{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):mE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ll.subVectors(t,this.center);const i=Ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ll,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ll.copy(t.center).add(Gd)),this.expandByPoint(Ll.copy(t.center).sub(Gd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gE=0;const ea=new dn,Vd=new Fn,yo=new K,Bi=new Ar,Ol=new Ar,Xn=new K;class Qn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ob(t)?vS:_S)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ea.makeRotationFromQuaternion(t),this.applyMatrix4(ea),this}rotateX(t){return ea.makeRotationX(t),this.applyMatrix4(ea),this}rotateY(t){return ea.makeRotationY(t),this.applyMatrix4(ea),this}rotateZ(t){return ea.makeRotationZ(t),this.applyMatrix4(ea),this}translate(t,i,s){return ea.makeTranslation(t,i,s),this.applyMatrix4(ea),this}scale(t,i,s){return ea.makeScale(t,i,s),this.applyMatrix4(ea),this}lookAt(t){return Vd.lookAt(t),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Yn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Bi.setFromBufferAttribute(c),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Bi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Xn.addVectors(Bi.min,Ol.min),Bi.expandByPoint(Xn),Xn.addVectors(Bi.max,Ol.max),Bi.expandByPoint(Xn)):(Bi.expandByPoint(Ol.min),Bi.expandByPoint(Ol.max))}Bi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Xn.fromBufferAttribute(d,p),m&&(yo.fromBufferAttribute(t,p),Xn.add(yo)),l=Math.max(l,s.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let E=0;E<s.count;E++)d[E]=new K,m[E]=new K;const p=new K,_=new K,v=new K,g=new _e,y=new _e,T=new _e,D=new K,M=new K;function x(E,O,k){p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,O),v.fromBufferAttribute(s,k),g.fromBufferAttribute(c,E),y.fromBufferAttribute(c,O),T.fromBufferAttribute(c,k),_.sub(p),v.sub(p),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(D.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(G),d[E].add(D),d[O].add(D),d[k].add(D),m[E].add(M),m[O].add(M),m[k].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,O=A.length;E<O;++E){const k=A[E],G=k.start,Y=k.count;for(let nt=G,ct=G+Y;nt<ct;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const U=new K,C=new K,z=new K,N=new K;function P(E){z.fromBufferAttribute(l,E),N.copy(z);const O=d[E];U.copy(O),U.sub(z.multiplyScalar(z.dot(O))).normalize(),C.crossVectors(N,O);const G=C.dot(m[E])<0?-1:1;f.setXYZW(E,U.x,U.y,U.z,G)}for(let E=0,O=A.length;E<O;++E){const k=A[E],G=k.start,Y=k.count;for(let nt=G,ct=G+Y;nt<ct;nt+=3)P(t.getX(nt+0)),P(t.getX(nt+1)),P(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,f=new K,d=new K,m=new K,p=new K,_=new K,v=new K;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),D=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Xn.fromBufferAttribute(t,i),Xn.normalize(),t.setXYZ(i,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,T=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*_;for(let x=0;x<_;x++)g[T++]=p[y++]}return new mi(g,_,v)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _E=0;class wr extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=No,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=up,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(s.blending=this.blending),this.side!==Gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cp&&(s.blendSrc=this.blendSrc),this.blendDst!==up&&(s.blendDst=this.blendDst),this.blendEquation!==mr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ja=new K,kd=new K,Su=new K,Ps=new K,Xd=new K,Mu=new K,Wd=new K;class Em{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ja)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ja.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ja.copy(this.origin).addScaledVector(this.direction,i),Ja.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){kd.copy(t).add(i).multiplyScalar(.5),Su.copy(i).sub(t).normalize(),Ps.copy(this.origin).sub(kd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Su),d=Ps.dot(this.direction),m=-Ps.dot(Su),p=Ps.lengthSq(),_=Math.abs(1-f*f);let v,g,y,T;if(_>0)if(v=f*m-d,g=f*d-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const D=1/_;v*=D,g*=D,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(kd).addScaledVector(Su,g),y}intersectSphere(t,i){Ja.subVectors(t.center,this.origin);const s=Ja.dot(this.direction),l=Ja.dot(Ja)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ja)!==null}intersectTriangle(t,i,s,l,c){Xd.subVectors(i,t),Mu.subVectors(s,t),Wd.crossVectors(Xd,Mu);let f=this.direction.dot(Wd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ps.subVectors(this.origin,t);const m=d*this.direction.dot(Mu.crossVectors(Ps,Mu));if(m<0)return null;const p=d*this.direction.dot(Xd.cross(Ps));if(p<0||m+p>f)return null;const _=-d*Ps.dot(Wd);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gf extends wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zv=new dn,ur=new Em,yu=new Rr,Bv=new K,bu=new K,Eu=new K,Tu=new K,Yd=new K,Au=new K,Hv=new K,Ru=new K;class Wi extends Fn{constructor(t=new Qn,i=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Au.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(Yd.fromBufferAttribute(v,t),f?Au.addScaledVector(Yd,_):Au.addScaledVector(Yd.sub(i),_))}i.add(Au)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(c),ur.copy(t.ray).recast(t.near),!(yu.containsPoint(ur.origin)===!1&&(ur.intersectSphere(yu,Bv)===null||ur.origin.distanceToSquared(Bv)>(t.far-t.near)**2))&&(zv.copy(c).invert(),ur.copy(t.ray).applyMatrix4(zv),!(s.boundingBox!==null&&ur.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,D=g.length;T<D;T++){const M=g[T],x=f[M.materialIndex],A=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=A,z=U;C<z;C+=3){const N=d.getX(C),P=d.getX(C+1),E=d.getX(C+2);l=wu(this,x,t,s,p,_,v,N,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=T,x=D;M<x;M+=3){const A=d.getX(M),U=d.getX(M+1),C=d.getX(M+2);l=wu(this,f,t,s,p,_,v,A,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,D=g.length;T<D;T++){const M=g[T],x=f[M.materialIndex],A=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=A,z=U;C<z;C+=3){const N=C,P=C+1,E=C+2;l=wu(this,x,t,s,p,_,v,N,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=T,x=D;M<x;M+=3){const A=M,U=M+1,C=M+2;l=wu(this,f,t,s,p,_,v,A,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vE(r,t,i,s,l,c,f,d){let m;if(t.side===Ri?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Gs,d),m===null)return null;Ru.copy(d),Ru.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ru);return p<i.near||p>i.far?null:{distance:p,point:Ru.clone(),object:r}}function wu(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,bu),r.getVertexPosition(m,Eu),r.getVertexPosition(p,Tu);const _=vE(r,t,i,s,bu,Eu,Tu,Hv);if(_){const v=new K;pa.getBarycoord(Hv,bu,Eu,Tu,v),l&&(_.uv=pa.getInterpolatedAttribute(l,d,m,p,v,new _e)),c&&(_.uv1=pa.getInterpolatedAttribute(c,d,m,p,v,new _e)),f&&(_.normal=pa.getInterpolatedAttribute(f,d,m,p,v,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new K,materialIndex:0};pa.getNormal(bu,Eu,Tu,g.normal),_.face=g,_.barycoord=v}return _}class xS extends pi{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Pn,_=Pn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rf extends mi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bo=new dn,Gv=new dn,Cu=[],Vv=new Ar,xE=new dn,Pl=new Wi,Il=new Rr;class kv extends Wi{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new rf(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,xE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ar),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,bo),Vv.copy(t.boundingBox).applyMatrix4(bo),this.boundingBox.union(Vv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,bo),Il.copy(t.boundingSphere).applyMatrix4(bo),this.boundingSphere.union(Il)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Pl.geometry=this.geometry,Pl.material=this.material,Pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(s),t.ray.intersectsSphere(Il)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,bo),Gv.multiplyMatrices(s,bo),Pl.matrixWorld=Gv,Pl.raycast(t,Cu);for(let f=0,d=Cu.length;f<d;f++){const m=Cu[f];m.instanceId=c,m.object=this,i.push(m)}Cu.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new rf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new xS(new Float32Array(l*this.count),l,this.count,mm,ma));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qd=new K,SE=new K,ME=new Se;class pr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=qd.subVectors(s,i).cross(SE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(qd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ME.getNormalMatrix(t),l=this.coplanarPoint(qd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Rr,yE=new _e(.5,.5),Du=new K;class Tm{constructor(t=new pr,i=new pr,s=new pr,l=new pr,c=new pr,f=new pr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Aa,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],T=c[8],D=c[9],M=c[10],x=c[11],A=c[12],U=c[13],C=c[14],z=c[15];if(l[0].setComponents(p-f,y-_,x-T,z-A).normalize(),l[1].setComponents(p+f,y+_,x+T,z+A).normalize(),l[2].setComponents(p+d,y+v,x+D,z+U).normalize(),l[3].setComponents(p-d,y-v,x-D,z-U).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(p-m,y-g,x-M,z-C).normalize();else if(l[4].setComponents(p-m,y-g,x-M,z-C).normalize(),i===Aa)l[5].setComponents(p+m,y+g,x+M,z+C).normalize();else if(i===tc)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=yE.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jp extends wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const of=new K,lf=new K,Xv=new dn,Fl=new Em,Uu=new Rr,jd=new K,Wv=new K;class SS extends Fn{constructor(t=new Qn,i=new Jp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)of.fromBufferAttribute(i,l-1),lf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=of.distanceTo(lf);t.setAttribute("lineDistance",new Yn(s,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uu.copy(s.boundingSphere),Uu.applyMatrix4(l),Uu.radius+=c,t.ray.intersectsSphere(Uu)===!1)return;Xv.copy(l).invert(),Fl.copy(t.ray).applyMatrix4(Xv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let D=y,M=T-1;D<M;D+=p){const x=_.getX(D),A=_.getX(D+1),U=Nu(this,t,Fl,m,x,A,D);U&&i.push(U)}if(this.isLineLoop){const D=_.getX(T-1),M=_.getX(y),x=Nu(this,t,Fl,m,D,M,T-1);x&&i.push(x)}}else{const y=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let D=y,M=T-1;D<M;D+=p){const x=Nu(this,t,Fl,m,D,D+1,D);x&&i.push(x)}if(this.isLineLoop){const D=Nu(this,t,Fl,m,T-1,y,T-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nu(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(of.fromBufferAttribute(d,l),lf.fromBufferAttribute(d,c),i.distanceSqToSegment(of,lf,jd,Wv)>s)return;jd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jd);if(!(p<t.near||p>t.far))return{distance:p,point:Wv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class bE extends SS{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class MS extends wr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yv=new dn,$p=new Em,Lu=new Rr,Ou=new K;class EE extends Fn{constructor(t=new Qn,i=new MS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lu.copy(s.boundingSphere),Lu.applyMatrix4(l),Lu.radius+=c,t.ray.intersectsSphere(Lu)===!1)return;Yv.copy(l).invert(),$p.copy(t.ray).applyMatrix4(Yv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const g=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let T=g,D=y;T<D;T++){const M=p.getX(T);Ou.fromBufferAttribute(v,M),qv(Ou,M,m,l,t,i,this)}}else{const g=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let T=g,D=y;T<D;T++)Ou.fromBufferAttribute(v,T),qv(Ou,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function qv(r,t,i,s,l,c,f){const d=$p.distanceSqToPoint(r);if(d<i){const m=new K;$p.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class yS extends pi{constructor(t=[],i=Mr,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Io extends pi{constructor(t,i,s=wa,l,c,f,d=Pn,m=Pn,p,_=is,v=1){if(_!==is&&_!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ym(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class TE extends Io{constructor(t,i=wa,s=Mr,l,c,f=Pn,d=Pn,m,p=is){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bS extends pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ac extends Qn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(v,2));function T(D,M,x,A,U,C,z,N,P,E,O){const k=C/P,G=z/E,Y=C/2,nt=z/2,ct=N/2,W=P+1,I=E+1;let H=0,rt=0;const dt=new K;for(let Tt=0;Tt<I;Tt++){const B=Tt*G-nt;for(let Q=0;Q<W;Q++){const _t=Q*k-Y;dt[D]=_t*A,dt[M]=B*U,dt[x]=ct,p.push(dt.x,dt.y,dt.z),dt[D]=0,dt[M]=0,dt[x]=N>0?1:-1,_.push(dt.x,dt.y,dt.z),v.push(Q/P),v.push(1-Tt/E),H+=1}}for(let Tt=0;Tt<E;Tt++)for(let B=0;B<P;B++){const Q=g+B+W*Tt,_t=g+B+W*(Tt+1),Ut=g+(B+1)+W*(Tt+1),Nt=g+(B+1)+W*Tt;m.push(Q,_t,Nt),m.push(_t,Ut,Nt),rt+=6}d.addGroup(y,rt,O),y+=rt,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Am extends Qn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],y=[];let T=0;const D=[],M=s/2;let x=0;A(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new Yn(v,3)),this.setAttribute("normal",new Yn(g,3)),this.setAttribute("uv",new Yn(y,2));function A(){const C=new K,z=new K;let N=0;const P=(i-t)/s;for(let E=0;E<=c;E++){const O=[],k=E/c,G=k*(i-t)+t;for(let Y=0;Y<=l;Y++){const nt=Y/l,ct=nt*m+d,W=Math.sin(ct),I=Math.cos(ct);z.x=G*W,z.y=-k*s+M,z.z=G*I,v.push(z.x,z.y,z.z),C.set(W,P,I).normalize(),g.push(C.x,C.y,C.z),y.push(nt,1-k),O.push(T++)}D.push(O)}for(let E=0;E<l;E++)for(let O=0;O<c;O++){const k=D[O][E],G=D[O+1][E],Y=D[O+1][E+1],nt=D[O][E+1];(t>0||O!==0)&&(_.push(k,G,nt),N+=3),(i>0||O!==c-1)&&(_.push(G,Y,nt),N+=3)}p.addGroup(x,N,0),x+=N}function U(C){const z=T,N=new _e,P=new K;let E=0;const O=C===!0?t:i,k=C===!0?1:-1;for(let Y=1;Y<=l;Y++)v.push(0,M*k,0),g.push(0,k,0),y.push(.5,.5),T++;const G=T;for(let Y=0;Y<=l;Y++){const ct=Y/l*m+d,W=Math.cos(ct),I=Math.sin(ct);P.x=O*I,P.y=M*k,P.z=O*W,v.push(P.x,P.y,P.z),g.push(0,k,0),N.x=W*.5+.5,N.y=I*.5*k+.5,y.push(N.x,N.y),T++}for(let Y=0;Y<l;Y++){const nt=z+Y,ct=G+Y;C===!0?_.push(ct,ct+1,nt):_.push(ct+1,ct,nt),E+=3}p.addGroup(x,E,C===!0?1:2),x+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Am(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rm extends Qn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),p(s),_(),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(c.slice(),3)),this.setAttribute("uv",new Yn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(A){const U=new K,C=new K,z=new K;for(let N=0;N<i.length;N+=3)y(i[N+0],U),y(i[N+1],C),y(i[N+2],z),m(U,C,z,A)}function m(A,U,C,z){const N=z+1,P=[];for(let E=0;E<=N;E++){P[E]=[];const O=A.clone().lerp(C,E/N),k=U.clone().lerp(C,E/N),G=N-E;for(let Y=0;Y<=G;Y++)Y===0&&E===N?P[E][Y]=O:P[E][Y]=O.clone().lerp(k,Y/G)}for(let E=0;E<N;E++)for(let O=0;O<2*(N-E)-1;O++){const k=Math.floor(O/2);O%2===0?(g(P[E][k+1]),g(P[E+1][k]),g(P[E][k])):(g(P[E][k+1]),g(P[E+1][k+1]),g(P[E+1][k]))}}function p(A){const U=new K;for(let C=0;C<c.length;C+=3)U.x=c[C+0],U.y=c[C+1],U.z=c[C+2],U.normalize().multiplyScalar(A),c[C+0]=U.x,c[C+1]=U.y,c[C+2]=U.z}function _(){const A=new K;for(let U=0;U<c.length;U+=3){A.x=c[U+0],A.y=c[U+1],A.z=c[U+2];const C=M(A)/2/Math.PI+.5,z=x(A)/Math.PI+.5;f.push(C,1-z)}T(),v()}function v(){for(let A=0;A<f.length;A+=6){const U=f[A+0],C=f[A+2],z=f[A+4],N=Math.max(U,C,z),P=Math.min(U,C,z);N>.9&&P<.1&&(U<.2&&(f[A+0]+=1),C<.2&&(f[A+2]+=1),z<.2&&(f[A+4]+=1))}}function g(A){c.push(A.x,A.y,A.z)}function y(A,U){const C=A*3;U.x=t[C+0],U.y=t[C+1],U.z=t[C+2]}function T(){const A=new K,U=new K,C=new K,z=new K,N=new _e,P=new _e,E=new _e;for(let O=0,k=0;O<c.length;O+=9,k+=6){A.set(c[O+0],c[O+1],c[O+2]),U.set(c[O+3],c[O+4],c[O+5]),C.set(c[O+6],c[O+7],c[O+8]),N.set(f[k+0],f[k+1]),P.set(f[k+2],f[k+3]),E.set(f[k+4],f[k+5]),z.copy(A).add(U).add(C).divideScalar(3);const G=M(z);D(N,k+0,A,G),D(P,k+2,U,G),D(E,k+4,C,G)}}function D(A,U,C,z){z<0&&A.x===1&&(f[U]=A.x-1),C.x===0&&C.z===0&&(f[U]=z/2/Math.PI+.5)}function M(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rm(t.vertices,t.indices,t.radius,t.detail)}}class wm extends Rm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new wm(t.radius,t.detail)}}class sc extends Qn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,y=[],T=[],D=[],M=[];for(let x=0;x<_;x++){const A=x*g-f;for(let U=0;U<p;U++){const C=U*v-c;T.push(C,-A,0),D.push(0,0,1),M.push(U/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<d;A++){const U=A+p*x,C=A+p*(x+1),z=A+1+p*(x+1),N=A+1+p*x;y.push(U,C,N),y.push(C,z,N)}this.setIndex(y),this.setAttribute("position",new Yn(T,3)),this.setAttribute("normal",new Yn(D,3)),this.setAttribute("uv",new Yn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.width,t.height,t.widthSegments,t.heightSegments)}}function Fo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(jv(l))l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(jv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function hi(r){const t={};for(let i=0;i<r.length;i++){const s=Fo(r[i]);for(const l in s)t[l]=s[l]}return t}function jv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function AE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ES(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const br={clone:Fo,merge:hi};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=wE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=AE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class CE extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DE extends wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kp,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class UE extends wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cm extends Fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Zd=new dn,Zv=new K,Kv=new K;class TS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tm,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Zv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zv),Kv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Kv),i.updateMatrixWorld(),Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===tc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Zd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pu=new K,Iu=new Tr,ya=new K;class AS extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pu,Iu,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,ya.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pu,Iu,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Is=new K,Qv=new _e,Jv=new _e;class Vi extends AS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Is.x,Is.y).multiplyScalar(-t/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Is.x,Is.y).multiplyScalar(-t/Is.z)}getViewSize(t,i){return this.getViewBounds(t,Qv,Jv),i.subVectors(Jv,Qv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class LE extends TS{constructor(){super(new Vi(90,1,.5,500)),this.isPointLightShadow=!0}}class $v extends Cm{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class _f extends AS{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OE extends TS{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PE extends Cm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new OE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class IE extends Cm{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Eo=-90,To=1;class FE extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Vi(Eo,To,t,i);l.layers=this.layers,this.add(l);const c=new Vi(Eo,To,t,i);c.layers=this.layers,this.add(c);const f=new Vi(Eo,To,t,i);f.layers=this.layers,this.add(f);const d=new Vi(Eo,To,t,i);d.layers=this.layers,this.add(d);const m=new Vi(Eo,To,t,i);m.layers=this.layers,this.add(m);const p=new Vi(Eo,To,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class zE extends Vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class BE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=HE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function HE(){this._document.hidden===!1&&this.reset()}const Om=class Om{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Om.prototype.isMatrix2=!0;let tx=Om;function ex(r,t,i,s){const l=GE(s);switch(i){case fS:return r*t;case mm:return r*t/l.components*l.byteLength;case gm:return r*t/l.components*l.byteLength;case yr:return r*t*2/l.components*l.byteLength;case _m:return r*t*2/l.components*l.byteLength;case hS:return r*t*3/l.components*l.byteLength;case ga:return r*t*4/l.components*l.byteLength;case vm:return r*t*4/l.components*l.byteLength;case ju:case Zu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ku:case Qu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mp:case bp:return Math.max(r,16)*Math.max(t,8)/4;case Sp:case yp:return Math.max(r,8)*Math.max(t,8)/2;case Ep:case Tp:case Rp:case wp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ap:case $u:case Cp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Up:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Np:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Op:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ip:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xp:case Wp:case Yp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qp:case jp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case tf:case Zp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GE(r){switch(r){case Xi:case oS:return{byteLength:1,components:1};case Jl:case lS:case di:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case wa:case hm:case ma:return{byteLength:4,components:1};case cS:case uS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function RS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function VE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<v.length;y++){const T=v[g],D=v[y];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,v[g]=D)}v.length=g+1;for(let y=0,T=v.length;y<T;y++){const D=v[y];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,p1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,P1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ST=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:kE,alphahash_pars_fragment:XE,alphamap_fragment:WE,alphamap_pars_fragment:YE,alphatest_fragment:qE,alphatest_pars_fragment:jE,aomap_fragment:ZE,aomap_pars_fragment:KE,batching_pars_vertex:QE,batching_vertex:JE,begin_vertex:$E,beginnormal_vertex:t1,bsdfs:e1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:c1,color_pars_vertex:u1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:_1,emissivemap_pars_fragment:v1,colorspace_fragment:x1,colorspace_pars_fragment:S1,envmap_fragment:M1,envmap_common_pars_fragment:y1,envmap_pars_fragment:b1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:P1,envmap_vertex:T1,fog_vertex:A1,fog_pars_vertex:R1,fog_fragment:w1,fog_pars_fragment:C1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:U1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:L1,lights_pars_begin:O1,lights_toon_fragment:I1,lights_toon_pars_fragment:F1,lights_phong_fragment:z1,lights_phong_pars_fragment:B1,lights_physical_fragment:H1,lights_physical_pars_fragment:G1,lights_fragment_begin:V1,lights_fragment_maps:k1,lights_fragment_end:X1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:j1,logdepthbuf_vertex:Z1,map_fragment:K1,map_pars_fragment:Q1,map_particle_fragment:J1,map_particle_pars_fragment:$1,metalnessmap_fragment:tT,metalnessmap_pars_fragment:eT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:aT,morphtarget_pars_vertex:sT,morphtarget_vertex:rT,normal_fragment_begin:oT,normal_fragment_maps:lT,normal_pars_fragment:cT,normal_pars_vertex:uT,normal_vertex:fT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:gT,opaque_fragment:_T,packing:vT,premultiplied_alpha_fragment:xT,project_vertex:ST,dithering_fragment:MT,dithering_pars_fragment:yT,roughnessmap_fragment:bT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:AT,shadowmap_vertex:RT,shadowmask_pars_fragment:wT,skinbase_vertex:CT,skinning_pars_vertex:DT,skinning_vertex:UT,skinnormal_vertex:NT,specularmap_fragment:LT,specularmap_pars_fragment:OT,tonemapping_fragment:PT,tonemapping_pars_fragment:IT,transmission_fragment:FT,transmission_pars_fragment:zT,uv_pars_fragment:BT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:VT,background_vert:kT,background_frag:XT,backgroundCube_vert:WT,backgroundCube_frag:YT,cube_vert:qT,cube_frag:jT,depth_vert:ZT,depth_frag:KT,distance_vert:QT,distance_frag:JT,equirect_vert:$T,equirect_frag:tA,linedashed_vert:eA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:sA,meshlambert_frag:rA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:hA,meshphysical_vert:dA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:xA,shadow_frag:SA,sprite_vert:MA,sprite_frag:yA},Zt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Ea={basic:{uniforms:hi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:hi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:hi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:hi([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:hi([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:hi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:hi([Zt.points,Zt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:hi([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:hi([Zt.common,Zt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:hi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:hi([Zt.sprite,Zt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:hi([Zt.common,Zt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:hi([Zt.lights,Zt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ea.physical={uniforms:hi([Ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Fu={r:0,b:0,g:0},bA=new dn,wS=new Se;wS.set(-1,0,0,0,1,0,0,0,1);function EA(r,t,i,s,l,c){const f=new pe(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const C=A.backgroundBlurriness>0;U=t.get(U,C)}return U}function T(A){let U=!1;const C=y(A);C===null?M(f,d):C&&C.isColor&&(M(C,1),U=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(A,U){const C=y(U);C&&(C.isCubeTexture||C.mapping===mf)?(p===void 0&&(p=new Wi(new ac(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Fo(Ea.backgroundCube.uniforms),vertexShader:Ea.backgroundCube.vertexShader,fragmentShader:Ea.backgroundCube.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bA.makeRotationFromEuler(U.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(wS),p.material.toneMapped=Pe.getTransfer(C.colorSpace)!==an,(_!==C||v!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Wi(new sc(2,2),new In({name:"BackgroundMaterial",uniforms:Fo(Ea.background.uniforms),vertexShader:Ea.background.vertexShader,fragmentShader:Ea.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Pe.getTransfer(C.colorSpace)!==an,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function M(A,U){A.getRGB(Fu,ES(r)),i.buffers.color.setClear(Fu.r,Fu.g,Fu.b,U,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,U=1){f.set(A),d=U,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,M(f,d)},render:T,addToRenderList:D,dispose:x}}function TA(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,Y,nt,ct,W){let I=!1;const H=v(G,ct,nt,Y);c!==H&&(c=H,p(c.object)),I=y(G,ct,nt,W),I&&T(G,ct,nt,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,C(G,Y,nt,ct),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,Y,nt,ct){const W=ct.wireframe===!0;let I=s[Y.id];I===void 0&&(I={},s[Y.id]=I);const H=G.isInstancedMesh===!0?G.id:0;let rt=I[H];rt===void 0&&(rt={},I[H]=rt);let dt=rt[nt.id];dt===void 0&&(dt={},rt[nt.id]=dt);let Tt=dt[W];return Tt===void 0&&(Tt=g(m()),dt[W]=Tt),Tt}function g(G){const Y=[],nt=[],ct=[];for(let W=0;W<i;W++)Y[W]=0,nt[W]=0,ct[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:nt,attributeDivisors:ct,object:G,attributes:{},index:null}}function y(G,Y,nt,ct){const W=c.attributes,I=Y.attributes;let H=0;const rt=nt.getAttributes();for(const dt in rt)if(rt[dt].location>=0){const B=W[dt];let Q=I[dt];if(Q===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==ct}function T(G,Y,nt,ct){const W={},I=Y.attributes;let H=0;const rt=nt.getAttributes();for(const dt in rt)if(rt[dt].location>=0){let B=I[dt];B===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),W[dt]=Q,H++}c.attributes=W,c.attributesNum=H,c.index=ct}function D(){const G=c.newAttributes;for(let Y=0,nt=G.length;Y<nt;Y++)G[Y]=0}function M(G){x(G,0)}function x(G,Y){const nt=c.newAttributes,ct=c.enabledAttributes,W=c.attributeDivisors;nt[G]=1,ct[G]===0&&(r.enableVertexAttribArray(G),ct[G]=1),W[G]!==Y&&(r.vertexAttribDivisor(G,Y),W[G]=Y)}function A(){const G=c.newAttributes,Y=c.enabledAttributes;for(let nt=0,ct=Y.length;nt<ct;nt++)Y[nt]!==G[nt]&&(r.disableVertexAttribArray(nt),Y[nt]=0)}function U(G,Y,nt,ct,W,I,H){H===!0?r.vertexAttribIPointer(G,Y,nt,W,I):r.vertexAttribPointer(G,Y,nt,ct,W,I)}function C(G,Y,nt,ct){D();const W=ct.attributes,I=nt.getAttributes(),H=Y.defaultAttributeValues;for(const rt in I){const dt=I[rt];if(dt.location>=0){let Tt=W[rt];if(Tt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Tt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Tt=G.instanceColor)),Tt!==void 0){const B=Tt.normalized,Q=Tt.itemSize,_t=t.get(Tt);if(_t===void 0)continue;const Ut=_t.buffer,Nt=_t.type,it=_t.bytesPerElement,mt=Nt===r.INT||Nt===r.UNSIGNED_INT||Tt.gpuType===hm;if(Tt.isInterleavedBufferAttribute){const Mt=Tt.data,Dt=Mt.stride,te=Tt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ie=0;ie<dt.locationSize;ie++)x(dt.location+ie,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ie=0;ie<dt.locationSize;ie++)M(dt.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let ie=0;ie<dt.locationSize;ie++)U(dt.location+ie,Q/dt.locationSize,Nt,B,Dt*it,(te+Q/dt.locationSize*ie)*it,mt)}else{if(Tt.isInstancedBufferAttribute){for(let Mt=0;Mt<dt.locationSize;Mt++)x(dt.location+Mt,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Mt=0;Mt<dt.locationSize;Mt++)M(dt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Mt=0;Mt<dt.locationSize;Mt++)U(dt.location+Mt,Q/dt.locationSize,Nt,B,Q*it,Q/dt.locationSize*Mt*it,mt)}}else if(H!==void 0){const B=H[rt];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(dt.location,B);break;case 3:r.vertexAttrib3fv(dt.location,B);break;case 4:r.vertexAttrib4fv(dt.location,B);break;default:r.vertexAttrib1fv(dt.location,B)}}}}A()}function z(){O();for(const G in s){const Y=s[G];for(const nt in Y){const ct=Y[nt];for(const W in ct){const I=ct[W];for(const H in I)_(I[H].object),delete I[H];delete ct[W]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const Y=s[G.id];for(const nt in Y){const ct=Y[nt];for(const W in ct){const I=ct[W];for(const H in I)_(I[H].object),delete I[H];delete ct[W]}}delete s[G.id]}function P(G){for(const Y in s){const nt=s[Y];for(const ct in nt){const W=nt[ct];if(W[G.id]===void 0)continue;const I=W[G.id];for(const H in I)_(I[H].object),delete I[H];delete W[G.id]}}}function E(G){for(const Y in s){const nt=s[Y],ct=G.isInstancedMesh===!0?G.id:0,W=nt[ct];if(W!==void 0){for(const I in W){const H=W[I];for(const rt in H)_(H[rt].object),delete H[rt];delete W[I]}delete nt[ct],Object.keys(nt).length===0&&delete s[Y]}}}function O(){k(),f=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:M,disableUnusedAttributes:A}}function AA(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function RA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ga&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const E=P===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Xi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ma&&!E)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(me("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:C,maxSamples:z,samples:N}}function wA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new pr,d=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const T=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const A=c?0:s,U=A*4;let C=x.clippingState||null;m.value=C,C=_(T,g,U,y);for(let z=0;z!==U;++z)C[z]=i[z];x.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,T){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,T!==!0||M===null){const x=y+D*4,A=g.matrixWorldInverse;d.getNormalMatrix(A),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,C=y;U!==D;++U,C+=4)f.copy(v[U]).applyMatrix4(A,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const Hs=4,nx=[.125,.215,.35,.446,.526,.582],gr=20,CA=256,zl=new _f,ix=new pe;let Kd=null,Qd=0,Jd=0,$d=!1;const DA=new K;class ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=DA}=c;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Mr||t.mapping===Po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:di,format:ga,colorSpace:ef,depthBuffer:!1},l=sx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UA(c)),this._blurMaterial=LA(c,t,i),this._ggxMaterial=NA(c,t,i)}return l}_compileMaterial(t){const i=new Wi(new Qn,t);this._renderer.compile(i,zl)}_sceneToCubeUV(t,i,s,l,c){const m=new Vi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(ix),v.toneMapping=Ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ac,new gf({name:"PMREM.Background",side:Ri,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let x=!1;const A=t.background;A?A.isColor&&(M.color.copy(A),t.background=null,x=!0):(M.color.copy(ix),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const z=this._cubeSize;Ao(l,C*z,U>2?z:0,z,z),v.setRenderTarget(l),x&&v.render(D,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Mr||t.mapping===Po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ao(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,zl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:T}=this,D=this._sizeLods[s],M=3*D*(s>T-Hs?s-T+Hs:0),x=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Ao(c,M,x,3*D,2*D),l.setRenderTarget(c),l.render(d,zl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Ao(t,M,x,3*D,2*D),l.setRenderTarget(t),l.render(d,zl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*gr-1),D=c/T,M=isFinite(c)?1+Math.floor(_*D):gr;M>gr&&me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${gr}`);const x=[];let A=0;for(let P=0;P<gr;++P){const E=P/D,O=Math.exp(-E*E/2);x.push(O),P===0?A+=O:P<M&&(A+=2*O)}for(let P=0;P<x.length;P++)x[P]=x[P]/A;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:U}=this;g.dTheta.value=T,g.mipInt.value=U-s;const C=this._sizeLods[l],z=3*C*(l>U-Hs?l-U+Hs:0),N=4*(this._cubeSize-C);Ao(i,z,N,3*C,2*C),m.setRenderTarget(i),m.render(v,zl)}}function UA(r){const t=[],i=[],s=[];let l=r;const c=r-Hs+1+nx.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-Hs?m=nx[f-r+Hs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,D=3,M=2,x=1,A=new Float32Array(D*T*y),U=new Float32Array(M*T*y),C=new Float32Array(x*T*y);for(let N=0;N<y;N++){const P=N%3*2/3-1,E=N>2?0:-1,O=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];A.set(O,D*T*N),U.set(g,M*T*N);const k=[N,N,N,N,N,N];C.set(k,x*T*N)}const z=new Qn;z.setAttribute("position",new mi(A,D)),z.setAttribute("uv",new mi(U,M)),z.setAttribute("faceIndex",new mi(C,x)),s.push(new Wi(z,null)),l>Hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function sx(r,t,i){const s=new li(r,t,i);return s.texture.mapping=mf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ao(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function NA(r,t,i){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function LA(r,t,i){const s=new Float32Array(gr),l=new K(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function rx(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ox(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class CS extends li{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ac(5,5,5),c=new In({name:"CubemapFromEquirect",uniforms:Fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ri,blending:_a});c.uniforms.tEquirect.value=i;const f=new Wi(l,c),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=oi),new FE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function OA(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===bd||y===Ed)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new CS(T.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),d(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,T=y===bd||y===Ed,D=y===Mr||y===Po;if(T||D){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new ax(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const A=g.image;return T&&A&&A.height>0||D&&A&&m(A)?(s===null&&(s=new ax(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===bd?g.mapping=Mr:y===Ed&&(g.mapping=Po),g}function m(g){let y=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function PA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qp("WebGLRenderer: "+s+" extension not supported."),l}}}function IA(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(y!==null){const A=y.array;D=y.version;for(let U=0,C=A.length;U<C;U+=3){const z=A[U+0],N=A[U+1],P=A[U+2];g.push(z,N,N,P,P,z)}}else{const A=T.array;D=T.version;for(let U=0,C=A.length/3-1;U<C;U+=3){const z=U+0,N=U+1,P=U+2;g.push(z,N,N,P,P,z)}}const M=new(T.count>=65535?vS:_S)(g,1);M.version=D;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function FA(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),i.update(g,s,1)}function p(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,v*f,y),i.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let D=0;for(let M=0;M<y;M++)D+=g[M];i.update(D,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function zA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ge("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function BA(r,t,i){const s=new WeakMap,l=new bn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let k=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var y=k;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),D===!0&&(C=2),M===!0&&(C=3);let z=d.attributes.position.count*C,N=1;z>t.maxTextureSize&&(N=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*N*4*v),E=new pS(P,z,N,v);E.type=ma,E.needsUpdate=!0;const O=C*4;for(let G=0;G<v;G++){const Y=x[G],nt=A[G],ct=U[G],W=z*N*4*G;for(let I=0;I<Y.count;I++){const H=I*O;T===!0&&(l.fromBufferAttribute(Y,I),P[W+H+0]=l.x,P[W+H+1]=l.y,P[W+H+2]=l.z,P[W+H+3]=0),D===!0&&(l.fromBufferAttribute(nt,I),P[W+H+4]=l.x,P[W+H+5]=l.y,P[W+H+6]=l.z,P[W+H+7]=0),M===!0&&(l.fromBufferAttribute(ct,I),P[W+H+8]=l.x,P[W+H+9]=l.y,P[W+H+10]=l.z,P[W+H+11]=ct.itemSize===4?l.w:1)}}g={count:v,texture:E,size:new _e(z,N)},s.set(d,g),d.addEventListener("dispose",k)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const D=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function HA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const GA={[tS]:"LINEAR_TONE_MAPPING",[eS]:"REINHARD_TONE_MAPPING",[nS]:"CINEON_TONE_MAPPING",[fm]:"ACES_FILMIC_TONE_MAPPING",[aS]:"AGX_TONE_MAPPING",[sS]:"NEUTRAL_TONE_MAPPING",[iS]:"CUSTOM_TONE_MAPPING"};function VA(r,t,i,s,l){const c=new li(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Io(t,i):void 0}),f=new li(t,i,{type:di,depthBuffer:!1,stencilBuffer:!1}),d=new Qn;d.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const m=new CE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Wi(d,m),_=new _f(-1,1,1,-1,0,1);let v=null,g=null,y=!1,T,D=null,M=[],x=!1;this.setSize=function(A,U){c.setSize(A,U),f.setSize(A,U);for(let C=0;C<M.length;C++){const z=M[C];z.setSize&&z.setSize(A,U)}},this.setEffects=function(A){M=A,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,C=c.height;for(let z=0;z<M.length;z++){const N=M[z];N.setSize&&N.setSize(U,C)}},this.begin=function(A,U){if(y||A.toneMapping===Ra&&M.length===0)return!1;if(D=U,U!==null){const C=U.width,z=U.height;(c.width!==C||c.height!==z)&&this.setSize(C,z)}return x===!1&&A.setRenderTarget(c),T=A.toneMapping,A.toneMapping=Ra,!0},this.hasRenderPass=function(){return x},this.end=function(A,U){A.toneMapping=T,y=!0;let C=c,z=f;for(let N=0;N<M.length;N++){const P=M[N];if(P.enabled!==!1&&(P.render(A,z,C,U),P.needsSwap!==!1)){const E=C;C=z,z=E}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,m.defines={},Pe.getTransfer(v)===an&&(m.defines.SRGB_TRANSFER="");const N=GA[g];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(D),A.render(p,_),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const DS=new pi,tm=new Io(1,1),US=new pS,NS=new sE,LS=new yS,lx=[],cx=[],ux=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function Ho(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=lx[l];if(c===void 0&&(c=new Float32Array(l),lx[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function zn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Bn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function xf(r,t){let i=cx[t];i===void 0&&(i=new Int32Array(t),cx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function XA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;r.uniform2fv(this.addr,t),Bn(i,t)}}function WA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(zn(i,t))return;r.uniform3fv(this.addr,t),Bn(i,t)}}function YA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;r.uniform4fv(this.addr,t),Bn(i,t)}}function qA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Bn(i,t)}else{if(zn(i,s))return;hx.set(s),r.uniformMatrix2fv(this.addr,!1,hx),Bn(i,s)}}function jA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Bn(i,t)}else{if(zn(i,s))return;fx.set(s),r.uniformMatrix3fv(this.addr,!1,fx),Bn(i,s)}}function ZA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Bn(i,t)}else{if(zn(i,s))return;ux.set(s),r.uniformMatrix4fv(this.addr,!1,ux),Bn(i,s)}}function KA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function QA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;r.uniform2iv(this.addr,t),Bn(i,t)}}function JA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;r.uniform3iv(this.addr,t),Bn(i,t)}}function $A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;r.uniform4iv(this.addr,t),Bn(i,t)}}function t2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function e2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;r.uniform2uiv(this.addr,t),Bn(i,t)}}function n2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;r.uniform3uiv(this.addr,t),Bn(i,t)}}function i2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;r.uniform4uiv(this.addr,t),Bn(i,t)}}function a2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tm.compareFunction=i.isReversedDepthBuffer()?Sm:xm,c=tm):c=DS,i.setTexture2D(t||c,l)}function s2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||NS,l)}function r2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||LS,l)}function o2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||US,l)}function l2(r){switch(r){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return YA;case 35674:return qA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return t2;case 36294:return e2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return o2}}function c2(r,t){r.uniform1fv(this.addr,t)}function u2(r,t){const i=Ho(t,this.size,2);r.uniform2fv(this.addr,i)}function f2(r,t){const i=Ho(t,this.size,3);r.uniform3fv(this.addr,i)}function h2(r,t){const i=Ho(t,this.size,4);r.uniform4fv(this.addr,i)}function d2(r,t){const i=Ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function p2(r,t){const i=Ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function m2(r,t){const i=Ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function g2(r,t){r.uniform1iv(this.addr,t)}function _2(r,t){r.uniform2iv(this.addr,t)}function v2(r,t){r.uniform3iv(this.addr,t)}function x2(r,t){r.uniform4iv(this.addr,t)}function S2(r,t){r.uniform1uiv(this.addr,t)}function M2(r,t){r.uniform2uiv(this.addr,t)}function y2(r,t){r.uniform3uiv(this.addr,t)}function b2(r,t){r.uniform4uiv(this.addr,t)}function E2(r,t,i){const s=this.cache,l=t.length,c=xf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),Bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tm:f=DS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function T2(r,t,i){const s=this.cache,l=t.length,c=xf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),Bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||NS,c[f])}function A2(r,t,i){const s=this.cache,l=t.length,c=xf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),Bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||LS,c[f])}function R2(r,t,i){const s=this.cache,l=t.length,c=xf(i,l);zn(s,c)||(r.uniform1iv(this.addr,c),Bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||US,c[f])}function w2(r){switch(r){case 5126:return c2;case 35664:return u2;case 35665:return f2;case 35666:return h2;case 35674:return d2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return _2;case 35668:case 35672:return v2;case 35669:case 35673:return x2;case 5125:return S2;case 36294:return M2;case 36295:return y2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return R2}}class C2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=l2(i.type)}}class D2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w2(i.type)}}class U2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function dx(r,t){r.seq.push(t),r.map[t.id]=t}function N2(r,t,i){const s=r.name,l=s.length;for(tp.lastIndex=0;;){const c=tp.exec(s),f=tp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){dx(i,p===void 0?new C2(d,r,t):new D2(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new U2(d),dx(i,v)),i=v}}}class Ju{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);N2(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function px(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const L2=37297;let O2=0;function P2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const mx=new Se;function I2(r){Pe._getMatrix(mx,Pe.workingColorSpace,r);const t=`mat3( ${mx.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(r)){case nf:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+P2(r.getShaderSource(t),d)}else return c}function F2(r,t){const i=I2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const z2={[tS]:"Linear",[eS]:"Reinhard",[nS]:"Cineon",[fm]:"ACESFilmic",[aS]:"AgX",[sS]:"Neutral",[iS]:"Custom"};function B2(r,t){const i=z2[t];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new K;function H2(){Pe.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),t=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jl).join(`
`)}function V2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function k2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function jl(r){return r!==""}function _x(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(r){return r.replace(X2,Y2)}const W2=new Map;function Y2(r,t){let i=Te[t];if(i===void 0){const s=W2.get(t);if(s!==void 0)i=Te[s],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return em(i)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(r){return r.replace(q2,j2)}function j2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Sx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z2={[qu]:"SHADOWMAP_TYPE_PCF",[ql]:"SHADOWMAP_TYPE_VSM"};function K2(r){return Z2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q2={[Mr]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE",[mf]:"ENVMAP_TYPE_CUBE_UV"};function J2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Q2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const $2={[Po]:"ENVMAP_MODE_REFRACTION"};function tR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":$2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eR={[$x]:"ENVMAP_BLENDING_MULTIPLY",[bb]:"ENVMAP_BLENDING_MIX",[Eb]:"ENVMAP_BLENDING_ADD"};function nR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eR[r.combine]||"ENVMAP_BLENDING_NONE"}function iR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function aR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=K2(i),p=J2(i),_=tR(i),v=nR(i),g=iR(i),y=G2(i),T=V2(c),D=l.createProgram();let M,x,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jl).join(`
`),x.length>0&&(x+=`
`)):(M=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),x=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?Te.tonemapping_pars_fragment:"",i.toneMapping!==Ra?B2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,F2("linearToOutputTexel",i.outputColorSpace),H2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jl).join(`
`)),f=em(f),f=_x(f,i),f=vx(f,i),d=em(d),d=_x(d,i),d=vx(d,i),f=xx(f),d=xx(d),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=A+M+f,C=A+x+d,z=px(l,l.VERTEX_SHADER,U),N=px(l,l.FRAGMENT_SHADER,C);l.attachShader(D,z),l.attachShader(D,N),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function P(G){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(D)||"",nt=l.getShaderInfoLog(z)||"",ct=l.getShaderInfoLog(N)||"",W=Y.trim(),I=nt.trim(),H=ct.trim();let rt=!0,dt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,z,N);else{const Tt=gx(l,z,"vertex"),B=gx(l,N,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+Tt+`
`+B)}else W!==""?me("WebGLProgram: Program Info Log:",W):(I===""||H==="")&&(dt=!1);dt&&(G.diagnostics={runnable:rt,programLog:W,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(N),E=new Ju(l,D),O=k2(l,D)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(D,L2)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O2++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=z,this.fragmentShader=N,this}let sR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new oR(t),i.set(t,s)),s}}class oR{constructor(t){this.id=sR++,this.code=t,this.usedTimes=0}}function lR(r){return r===yr||r===$u||r===tf}function cR(r,t,i,s,l,c){const f=new mS,d=new rR,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function D(E,O,k,G,Y,nt){const ct=G.fog,W=Y.geometry,I=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,rt=t.get(E.envMap||I,H),dt=rt&&rt.mapping===mf?rt.image.height:null,Tt=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&me("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=B!==void 0?B.length:0;let _t=0;W.morphAttributes.position!==void 0&&(_t=1),W.morphAttributes.normal!==void 0&&(_t=2),W.morphAttributes.color!==void 0&&(_t=3);let Ut,Nt,it,mt;if(Tt){const ue=Ea[Tt];Ut=ue.vertexShader,Nt=ue.fragmentShader}else Ut=E.vertexShader,Nt=E.fragmentShader,d.update(E),it=d.getVertexShaderID(E),mt=d.getFragmentShaderID(E);const Mt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),te=Y.isInstancedMesh===!0,ie=Y.isBatchedMesh===!0,Ie=!!E.map,wt=!!E.matcap,Et=!!rt,Ct=!!E.aoMap,ne=!!E.lightMap,he=!!E.bumpMap,Fe=!!E.normalMap,Ze=!!E.displacementMap,q=!!E.emissiveMap,Ke=!!E.metalnessMap,ge=!!E.roughnessMap,Le=E.anisotropy>0,Pt=E.clearcoat>0,Ve=E.dispersion>0,L=E.iridescence>0,b=E.sheen>0,F=E.transmission>0,ht=Le&&!!E.anisotropyMap,Rt=Pt&&!!E.clearcoatMap,It=Pt&&!!E.clearcoatNormalMap,Ot=Pt&&!!E.clearcoatRoughnessMap,lt=L&&!!E.iridescenceMap,ft=L&&!!E.iridescenceThicknessMap,Gt=b&&!!E.sheenColorMap,Vt=b&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,bt=!!E.specularColorMap,se=!!E.specularIntensityMap,ce=F&&!!E.transmissionMap,Me=F&&!!E.thicknessMap,X=!!E.gradientMap,Lt=!!E.alphaMap,pt=E.alphaTest>0,Xt=!!E.alphaHash,Bt=!!E.extensions;let At=Ra;E.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(At=r.toneMapping);const Qt={shaderID:Tt,shaderType:E.type,shaderName:E.name,vertexShader:Ut,fragmentShader:Nt,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ie,batchingColor:ie&&Y._colorsTexture!==null,instancing:te,instancingColor:te&&Y.instanceColor!==null,instancingMorph:te&&Y.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ie,matcap:wt,envMap:Et,envMapMode:Et&&rt.mapping,envMapCubeUVHeight:dt,aoMap:Ct,lightMap:ne,bumpMap:he,normalMap:Fe,displacementMap:Ze,emissiveMap:q,normalMapObjectSpace:Fe&&E.normalMapType===Rb,normalMapTangentSpace:Fe&&E.normalMapType===Kp,packedNormalMap:Fe&&E.normalMapType===Kp&&lR(E.normalMap.format),metalnessMap:Ke,roughnessMap:ge,anisotropy:Le,anisotropyMap:ht,clearcoat:Pt,clearcoatMap:Rt,clearcoatNormalMap:It,clearcoatRoughnessMap:Ot,dispersion:Ve,iridescence:L,iridescenceMap:lt,iridescenceThicknessMap:ft,sheen:b,sheenColorMap:Gt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:bt,specularIntensityMap:se,transmission:F,transmissionMap:ce,thicknessMap:Me,gradientMap:X,opaque:E.transparent===!1&&E.blending===No&&E.alphaToCoverage===!1,alphaMap:Lt,alphaTest:pt,alphaHash:Xt,combine:E.combine,mapUv:Ie&&T(E.map.channel),aoMapUv:Ct&&T(E.aoMap.channel),lightMapUv:ne&&T(E.lightMap.channel),bumpMapUv:he&&T(E.bumpMap.channel),normalMapUv:Fe&&T(E.normalMap.channel),displacementMapUv:Ze&&T(E.displacementMap.channel),emissiveMapUv:q&&T(E.emissiveMap.channel),metalnessMapUv:Ke&&T(E.metalnessMap.channel),roughnessMapUv:ge&&T(E.roughnessMap.channel),anisotropyMapUv:ht&&T(E.anisotropyMap.channel),clearcoatMapUv:Rt&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:It&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&T(E.sheenRoughnessMap.channel),specularMapUv:Ft&&T(E.specularMap.channel),specularColorMapUv:bt&&T(E.specularColorMap.channel),specularIntensityMapUv:se&&T(E.specularIntensityMap.channel),transmissionMapUv:ce&&T(E.transmissionMap.channel),thicknessMapUv:Me&&T(E.thicknessMap.channel),alphaMapUv:Lt&&T(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Fe||Le),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Ie||Lt),fog:!!ct,useFog:E.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Fe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:_t,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&Pe.getTransfer(E.map.colorSpace)===an,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(E.emissiveMap.colorSpace)===an,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ta,flipSided:E.side===Ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qt.vertexUv1s=m.has(1),Qt.vertexUv2s=m.has(2),Qt.vertexUv3s=m.has(3),m.clear(),Qt}function M(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)O.push(k),O.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(x(O,E),A(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function x(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function A(E,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),E.push(f.mask)}function U(E){const O=y[E.type];let k;if(O){const G=Ea[O];k=br.clone(G.uniforms)}else k=E.uniforms;return k}function C(E,O){let k=_.get(O);return k!==void 0?++k.usedTimes:(k=new aR(r,O,E,l),p.push(k),_.set(O,k)),k}function z(E){if(--E.usedTimes===0){const O=p.indexOf(E);p[O]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function N(E){d.remove(E)}function P(){d.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:U,acquireProgram:C,releaseProgram:z,releaseShaderCache:N,programs:p,dispose:P}}function uR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function fR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Mx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function yx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,D,M,x){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:y,material:T,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:x},r[t]=A):(A.id=g.id,A.object=g,A.geometry=y,A.material=T,A.materialVariant=f(g),A.groupOrder=D,A.renderOrder=g.renderOrder,A.z=M,A.group=x),t++,A}function m(g,y,T,D,M,x){const A=d(g,y,T,D,M,x);T.transmission>0?s.push(A):T.transparent===!0?l.push(A):i.push(A)}function p(g,y,T,D,M,x){const A=d(g,y,T,D,M,x);T.transmission>0?s.unshift(A):T.transparent===!0?l.unshift(A):i.unshift(A)}function _(g,y){i.length>1&&i.sort(g||fR),s.length>1&&s.sort(y||Mx),l.length>1&&l.sort(y||Mx)}function v(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function hR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new yx,r.set(s,[f])):l>=c.length?(f=new yx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function dR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new pe};break;case"SpotLight":i={position:new K,direction:new K,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function pR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let mR=0;function gR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _R(r){const t=new dR,i=pR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new dn,f=new dn;function d(p){let _=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,T=0,D=0,M=0,x=0,A=0,U=0,C=0,z=0,N=0,P=0;p.sort(gR);for(let O=0,k=p.length;O<k;O++){const G=p[O],Y=G.color,nt=G.intensity,ct=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===yr?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Y.r*nt,v+=Y.g*nt,g+=Y.b*nt;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],nt);P++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=G.shadow.matrix,A++}s.directional[y]=I,y++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Y).multiplyScalar(nt),I.distance=ct,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[D]=I;const H=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[D]=H.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.spotShadow[D]=rt,s.spotShadowMap[D]=W,C++}D++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Y).multiplyScalar(nt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,rt.shadowCameraNear=H.camera.near,rt.shadowCameraFar=H.camera.far,s.pointShadow[T]=rt,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=G.shadow.matrix,U++}s.point[T]=I,T++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(nt),I.groundColor.copy(G.groundColor).multiplyScalar(nt),s.hemi[x]=I,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Zt.LTC_FLOAT_1,s.rectAreaLTC2=Zt.LTC_FLOAT_2):(s.rectAreaLTC1=Zt.LTC_HALF_1,s.rectAreaLTC2=Zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==y||E.pointLength!==T||E.spotLength!==D||E.rectAreaLength!==M||E.hemiLength!==x||E.numDirectionalShadows!==A||E.numPointShadows!==U||E.numSpotShadows!==C||E.numSpotMaps!==z||E.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+z-N,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=P,E.directionalLength=y,E.pointLength=T,E.spotLength=D,E.rectAreaLength=M,E.hemiLength=x,E.numDirectionalShadows=A,E.numPointShadows=U,E.numSpotShadows=C,E.numSpotMaps=z,E.numLightProbes=P,s.version=mR++)}function m(p,_){let v=0,g=0,y=0,T=0,D=0;const M=_.matrixWorldInverse;for(let x=0,A=p.length;x<A;x++){const U=p[x];if(U.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(U.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),g++}else if(U.isHemisphereLight){const C=s.hemi[D];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:s}}function bx(r){const t=new _R(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function vR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new bx(r),t.set(l,[d])):c>=f.length?(d=new bx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MR=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],yR=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Ex=new dn,Bl=new K,ep=new K;function bR(r,t,i){let s=new Tm;const l=new _e,c=new _e,f=new bn,d=new UE,m=new NE,p={},_=i.maxTextureSize,v={[Gs]:Ri,[Ri]:Gs,[Ta]:Ta},g=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:xR,fragmentShader:SR}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Qn;T.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Wi(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let x=this.type;this.render=function(N,P,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===ab&&(me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qu);const O=r.getRenderTarget(),k=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(_a),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const nt=x!==this.type;nt&&P.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(W=>W.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,W=N.length;ct<W;ct++){const I=N[ct],H=I.shadow;if(H===void 0){me("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const rt=H.getFrameExtents();l.multiply(rt),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/rt.x),l.x=c.x*rt.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/rt.y),l.y=c.y*rt.y,H.mapSize.y=c.y));const dt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=dt,H.map===null||nt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ql){if(I.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new li(l.x,l.y,{format:yr,type:di,minFilter:oi,magFilter:oi,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Io(l.x,l.y,ma),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=is,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else I.isPointLight?(H.map=new CS(l.x),H.map.depthTexture=new TE(l.x,wa)):(H.map=new li(l.x,l.y),H.map.depthTexture=new Io(l.x,l.y,wa)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=is,this.type===qu?(H.map.depthTexture.compareFunction=dt?Sm:xm,H.map.depthTexture.minFilter=oi,H.map.depthTexture.magFilter=oi):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const Tt=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<Tt;B++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,B),r.clear();else{B===0&&(r.setRenderTarget(H.map),r.clear());const Q=H.getViewport(B);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Y.viewport(f)}if(I.isPointLight){const Q=H.camera,_t=H.matrix,Ut=I.distance||Q.far;Ut!==Q.far&&(Q.far=Ut,Q.updateProjectionMatrix()),Bl.setFromMatrixPosition(I.matrixWorld),Q.position.copy(Bl),ep.copy(Q.position),ep.add(MR[B]),Q.up.copy(yR[B]),Q.lookAt(ep),Q.updateMatrixWorld(),_t.makeTranslation(-Bl.x,-Bl.y,-Bl.z),Ex.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ex,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),C(P,E,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===ql&&A(H,E),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(O,k,G)};function A(N,P){const E=t.update(D);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new li(l.x,l.y,{format:yr,type:di})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(P,null,E,g,D,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(P,null,E,y,D,null)}function U(N,P,E,O){let k=null;const G=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)k=G;else if(k=E.isPointLight===!0?m:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=k.uuid,nt=P.uuid;let ct=p[Y];ct===void 0&&(ct={},p[Y]=ct);let W=ct[nt];W===void 0&&(W=k.clone(),ct[nt]=W,P.addEventListener("dispose",z)),k=W}if(k.visible=P.visible,k.wireframe=P.wireframe,O===ql?k.side=P.shadowSide!==null?P.shadowSide:P.side:k.side=P.shadowSide!==null?P.shadowSide:v[P.side],k.alphaMap=P.alphaMap,k.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,k.map=P.map,k.clipShadows=P.clipShadows,k.clippingPlanes=P.clippingPlanes,k.clipIntersection=P.clipIntersection,k.displacementMap=P.displacementMap,k.displacementScale=P.displacementScale,k.displacementBias=P.displacementBias,k.wireframeLinewidth=P.wireframeLinewidth,k.linewidth=P.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=r.properties.get(k);Y.light=E}return k}function C(N,P,E,O,k){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===ql)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const nt=t.update(N),ct=N.material;if(Array.isArray(ct)){const W=nt.groups;for(let I=0,H=W.length;I<H;I++){const rt=W[I],dt=ct[rt.materialIndex];if(dt&&dt.visible){const Tt=U(N,dt,O,k);N.onBeforeShadow(r,N,P,E,nt,Tt,rt),r.renderBufferDirect(E,null,nt,Tt,N,rt),N.onAfterShadow(r,N,P,E,nt,Tt,rt)}}}else if(ct.visible){const W=U(N,ct,O,k);N.onBeforeShadow(r,N,P,E,nt,W,null),r.renderBufferDirect(E,null,nt,W,N,null),N.onAfterShadow(r,N,P,E,nt,W,null)}}const Y=N.children;for(let nt=0,ct=Y.length;nt<ct;nt++)C(Y[nt],P,E,O,k)}function z(N){N.target.removeEventListener("dispose",z);for(const E in p){const O=p[E],k=N.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}}function ER(r,t){function i(){let X=!1;const Lt=new bn;let pt=null;const Xt=new bn(0,0,0,0);return{setMask:function(Bt){pt!==Bt&&!X&&(r.colorMask(Bt,Bt,Bt,Bt),pt=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,At,Qt,ue,tn){tn===!0&&(Bt*=ue,At*=ue,Qt*=ue),Lt.set(Bt,At,Qt,ue),Xt.equals(Lt)===!1&&(r.clearColor(Bt,At,Qt,ue),Xt.copy(Lt))},reset:function(){X=!1,pt=null,Xt.set(-1,0,0,0)}}}function s(){let X=!1,Lt=!1,pt=null,Xt=null,Bt=null;return{setReversed:function(At){if(Lt!==At){const Qt=t.get("EXT_clip_control");At?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Lt=At;const ue=Bt;Bt=null,this.setClear(ue)}},getReversed:function(){return Lt},setTest:function(At){At?Mt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(At){pt!==At&&!X&&(r.depthMask(At),pt=At)},setFunc:function(At){if(Lt&&(At=Fb[At]),Xt!==At){switch(At){case fp:r.depthFunc(r.NEVER);break;case hp:r.depthFunc(r.ALWAYS);break;case dp:r.depthFunc(r.LESS);break;case Oo:r.depthFunc(r.LEQUAL);break;case pp:r.depthFunc(r.EQUAL);break;case mp:r.depthFunc(r.GEQUAL);break;case gp:r.depthFunc(r.GREATER);break;case _p:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xt=At}},setLocked:function(At){X=At},setClear:function(At){Bt!==At&&(Bt=At,Lt&&(At=1-At),r.clearDepth(At))},reset:function(){X=!1,pt=null,Xt=null,Bt=null,Lt=!1}}}function l(){let X=!1,Lt=null,pt=null,Xt=null,Bt=null,At=null,Qt=null,ue=null,tn=null;return{setTest:function(Ce){X||(Ce?Mt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ce){Lt!==Ce&&!X&&(r.stencilMask(Ce),Lt=Ce)},setFunc:function(Ce,vt,re){(pt!==Ce||Xt!==vt||Bt!==re)&&(r.stencilFunc(Ce,vt,re),pt=Ce,Xt=vt,Bt=re)},setOp:function(Ce,vt,re){(At!==Ce||Qt!==vt||ue!==re)&&(r.stencilOp(Ce,vt,re),At=Ce,Qt=vt,ue=re)},setLocked:function(Ce){X=Ce},setClear:function(Ce){tn!==Ce&&(r.clearStencil(Ce),tn=Ce)},reset:function(){X=!1,Lt=null,pt=null,Xt=null,Bt=null,At=null,Qt=null,ue=null,tn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},y=new WeakMap,T=[],D=null,M=!1,x=null,A=null,U=null,C=null,z=null,N=null,P=null,E=new pe(0,0,0),O=0,k=!1,G=null,Y=null,nt=null,ct=null,W=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,rt=0;const dt=r.getParameter(r.VERSION);dt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(dt)[1]),H=rt>=1):dt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),H=rt>=2);let Tt=null,B={};const Q=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),Ut=new bn().fromArray(Q),Nt=new bn().fromArray(_t);function it(X,Lt,pt,Xt){const Bt=new Uint8Array(4),At=r.createTexture();r.bindTexture(X,At),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<pt;Qt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Xt,0,r.RGBA,r.UNSIGNED_BYTE,Bt):r.texImage2D(Lt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Bt);return At}const mt={};mt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),mt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),mt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(Oo),he(!1),Fe(vv),Mt(r.CULL_FACE),Ct(_a);function Mt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Dt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function te(X,Lt){return g[X]!==Lt?(r.bindFramebuffer(X,Lt),g[X]=Lt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Lt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function ie(X,Lt){let pt=T,Xt=!1;if(X){pt=y.get(Lt),pt===void 0&&(pt=[],y.set(Lt,pt));const Bt=X.textures;if(pt.length!==Bt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let At=0,Qt=Bt.length;At<Qt;At++)pt[At]=r.COLOR_ATTACHMENT0+At;pt.length=Bt.length,Xt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Xt=!0);Xt&&r.drawBuffers(pt)}function Ie(X){return D!==X?(r.useProgram(X),D=X,!0):!1}const wt={[mr]:r.FUNC_ADD,[rb]:r.FUNC_SUBTRACT,[ob]:r.FUNC_REVERSE_SUBTRACT};wt[lb]=r.MIN,wt[cb]=r.MAX;const Et={[ub]:r.ZERO,[fb]:r.ONE,[hb]:r.SRC_COLOR,[cp]:r.SRC_ALPHA,[vb]:r.SRC_ALPHA_SATURATE,[gb]:r.DST_COLOR,[pb]:r.DST_ALPHA,[db]:r.ONE_MINUS_SRC_COLOR,[up]:r.ONE_MINUS_SRC_ALPHA,[_b]:r.ONE_MINUS_DST_COLOR,[mb]:r.ONE_MINUS_DST_ALPHA,[xb]:r.CONSTANT_COLOR,[Sb]:r.ONE_MINUS_CONSTANT_COLOR,[Mb]:r.CONSTANT_ALPHA,[yb]:r.ONE_MINUS_CONSTANT_ALPHA};function Ct(X,Lt,pt,Xt,Bt,At,Qt,ue,tn,Ce){if(X===_a){M===!0&&(Dt(r.BLEND),M=!1);return}if(M===!1&&(Mt(r.BLEND),M=!0),X!==sb){if(X!==x||Ce!==k){if((A!==mr||z!==mr)&&(r.blendEquation(r.FUNC_ADD),A=mr,z=mr),Ce)switch(X){case No:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vs:r.blendFunc(r.ONE,r.ONE);break;case xv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",X);break}else switch(X){case No:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xv:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",X);break}U=null,C=null,N=null,P=null,E.set(0,0,0),O=0,x=X,k=Ce}return}Bt=Bt||Lt,At=At||pt,Qt=Qt||Xt,(Lt!==A||Bt!==z)&&(r.blendEquationSeparate(wt[Lt],wt[Bt]),A=Lt,z=Bt),(pt!==U||Xt!==C||At!==N||Qt!==P)&&(r.blendFuncSeparate(Et[pt],Et[Xt],Et[At],Et[Qt]),U=pt,C=Xt,N=At,P=Qt),(ue.equals(E)===!1||tn!==O)&&(r.blendColor(ue.r,ue.g,ue.b,tn),E.copy(ue),O=tn),x=X,k=!1}function ne(X,Lt){X.side===Ta?Dt(r.CULL_FACE):Mt(r.CULL_FACE);let pt=X.side===Ri;Lt&&(pt=!pt),he(pt),X.blending===No&&X.transparent===!1?Ct(_a):Ct(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Xt=X.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(X){G!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),G=X)}function Fe(X){X!==nb?(Mt(r.CULL_FACE),X!==Y&&(X===vv?r.cullFace(r.BACK):X===ib?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),Y=X}function Ze(X){X!==nt&&(H&&r.lineWidth(X),nt=X)}function q(X,Lt,pt){X?(Mt(r.POLYGON_OFFSET_FILL),(ct!==Lt||W!==pt)&&(ct=Lt,W=pt,f.getReversed()&&(Lt=-Lt),r.polygonOffset(Lt,pt))):Dt(r.POLYGON_OFFSET_FILL)}function Ke(X){X?Mt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ge(X){X===void 0&&(X=r.TEXTURE0+I-1),Tt!==X&&(r.activeTexture(X),Tt=X)}function Le(X,Lt,pt){pt===void 0&&(Tt===null?pt=r.TEXTURE0+I-1:pt=Tt);let Xt=B[pt];Xt===void 0&&(Xt={type:void 0,texture:void 0},B[pt]=Xt),(Xt.type!==X||Xt.texture!==Lt)&&(Tt!==pt&&(r.activeTexture(pt),Tt=pt),r.bindTexture(X,Lt||mt[X]),Xt.type=X,Xt.texture=Lt)}function Pt(){const X=B[Tt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ve(){try{r.compressedTexImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function b(){try{r.texSubImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function F(){try{r.texSubImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Rt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function It(){try{r.texStorage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Ot(){try{r.texStorage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function lt(){try{r.texImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function ft(){try{r.texImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Gt(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Vt(X,Lt){v[X]!==Lt&&(r.pixelStorei(X,Lt),v[X]=Lt)}function Ft(X){Ut.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ut.copy(X))}function bt(X){Nt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Nt.copy(X))}function se(X,Lt){let pt=p.get(Lt);pt===void 0&&(pt=new WeakMap,p.set(Lt,pt));let Xt=pt.get(X);Xt===void 0&&(Xt=r.getUniformBlockIndex(Lt,X.name),pt.set(X,Xt))}function ce(X,Lt){const Xt=p.get(Lt).get(X);m.get(Lt)!==Xt&&(r.uniformBlockBinding(Lt,Xt,X.__bindingPointIndex),m.set(Lt,Xt))}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Tt=null,B={},g={},y=new WeakMap,T=[],D=null,M=!1,x=null,A=null,U=null,C=null,z=null,N=null,P=null,E=new pe(0,0,0),O=0,k=!1,G=null,Y=null,nt=null,ct=null,W=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Mt,disable:Dt,bindFramebuffer:te,drawBuffers:ie,useProgram:Ie,setBlending:Ct,setMaterial:ne,setFlipSided:he,setCullFace:Fe,setLineWidth:Ze,setPolygonOffset:q,setScissorTest:Ke,activeTexture:ge,bindTexture:Le,unbindTexture:Pt,compressedTexImage2D:Ve,compressedTexImage3D:L,texImage2D:lt,texImage3D:ft,pixelStorei:Vt,getParameter:Gt,updateUBOMapping:se,uniformBlockBinding:ce,texStorage2D:It,texStorage3D:Ot,texSubImage2D:b,texSubImage3D:F,compressedTexSubImage2D:ht,compressedTexSubImage3D:Rt,scissor:Ft,viewport:bt,reset:Me}}function TR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(L,b){return T?new OffscreenCanvas(L,b):af("canvas")}function M(L,b,F){let ht=1;const Rt=Ve(L);if((Rt.width>F||Rt.height>F)&&(ht=F/Math.max(Rt.width,Rt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const It=Math.floor(ht*Rt.width),Ot=Math.floor(ht*Rt.height);g===void 0&&(g=D(It,Ot));const lt=b?D(It,Ot):g;return lt.width=It,lt.height=Ot,lt.getContext("2d").drawImage(L,0,0,It,Ot),me("WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+It+"x"+Ot+")."),lt}else return"data"in L&&me("WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),L;return L}function x(L){return L.generateMipmaps}function A(L){r.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,b,F,ht,Rt,It=!1){if(L!==null){if(r[L]!==void 0)return r[L];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ot;ht&&(Ot=t.get("EXT_texture_norm16"),Ot||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=b;if(b===r.RED&&(F===r.FLOAT&&(lt=r.R32F),F===r.HALF_FLOAT&&(lt=r.R16F),F===r.UNSIGNED_BYTE&&(lt=r.R8),F===r.UNSIGNED_SHORT&&Ot&&(lt=Ot.R16_EXT),F===r.SHORT&&Ot&&(lt=Ot.R16_SNORM_EXT)),b===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(lt=r.R8UI),F===r.UNSIGNED_SHORT&&(lt=r.R16UI),F===r.UNSIGNED_INT&&(lt=r.R32UI),F===r.BYTE&&(lt=r.R8I),F===r.SHORT&&(lt=r.R16I),F===r.INT&&(lt=r.R32I)),b===r.RG&&(F===r.FLOAT&&(lt=r.RG32F),F===r.HALF_FLOAT&&(lt=r.RG16F),F===r.UNSIGNED_BYTE&&(lt=r.RG8),F===r.UNSIGNED_SHORT&&Ot&&(lt=Ot.RG16_EXT),F===r.SHORT&&Ot&&(lt=Ot.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(lt=r.RG8UI),F===r.UNSIGNED_SHORT&&(lt=r.RG16UI),F===r.UNSIGNED_INT&&(lt=r.RG32UI),F===r.BYTE&&(lt=r.RG8I),F===r.SHORT&&(lt=r.RG16I),F===r.INT&&(lt=r.RG32I)),b===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),F===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),F===r.UNSIGNED_INT&&(lt=r.RGB32UI),F===r.BYTE&&(lt=r.RGB8I),F===r.SHORT&&(lt=r.RGB16I),F===r.INT&&(lt=r.RGB32I)),b===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),F===r.UNSIGNED_INT&&(lt=r.RGBA32UI),F===r.BYTE&&(lt=r.RGBA8I),F===r.SHORT&&(lt=r.RGBA16I),F===r.INT&&(lt=r.RGBA32I)),b===r.RGB&&(F===r.UNSIGNED_SHORT&&Ot&&(lt=Ot.RGB16_EXT),F===r.SHORT&&Ot&&(lt=Ot.RGB16_SNORM_EXT),F===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(lt=r.R11F_G11F_B10F)),b===r.RGBA){const ft=It?nf:Pe.getTransfer(Rt);F===r.FLOAT&&(lt=r.RGBA32F),F===r.HALF_FLOAT&&(lt=r.RGBA16F),F===r.UNSIGNED_BYTE&&(lt=ft===an?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT&&Ot&&(lt=Ot.RGBA16_EXT),F===r.SHORT&&Ot&&(lt=Ot.RGBA16_SNORM_EXT),F===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function z(L,b){let F;return L?b===null||b===wa||b===$l?F=r.DEPTH24_STENCIL8:b===ma?F=r.DEPTH32F_STENCIL8:b===Jl&&(F=r.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wa||b===$l?F=r.DEPTH_COMPONENT24:b===ma?F=r.DEPTH_COMPONENT32F:b===Jl&&(F=r.DEPTH_COMPONENT16),F}function N(L,b){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==oi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),O(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),G(b)}function O(L){const b=s.get(L);if(b.__webglInit===void 0)return;const F=L.source,ht=y.get(F);if(ht){const Rt=ht[b.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&k(L),Object.keys(ht).length===0&&y.delete(F)}s.remove(L)}function k(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const F=L.source,ht=y.get(F);delete ht[b.__cacheKey],f.memory.textures--}function G(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let Rt=0;Rt<b.__webglFramebuffer[ht].length;Rt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][Rt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=L.textures;for(let ht=0,Rt=F.length;ht<Rt;ht++){const It=s.get(F[ht]);It.__webglTexture&&(r.deleteTexture(It.__webglTexture),f.memory.textures--),s.remove(F[ht])}s.remove(L)}let Y=0;function nt(){Y=0}function ct(){return Y}function W(L){Y=L}function I(){const L=Y;return L>=l.maxTextures&&me("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Y+=1,L}function H(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function rt(L,b){const F=s.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const ht=L.image;if(ht===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(F,L,b);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+b)}function dt(L,b){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){Dt(F,L,b);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+b)}function Tt(L,b){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){Dt(F,L,b);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+b)}function B(L,b){const F=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){te(F,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+b)}const Q={[vp]:r.REPEAT,[es]:r.CLAMP_TO_EDGE,[xp]:r.MIRRORED_REPEAT},_t={[Pn]:r.NEAREST,[Tb]:r.NEAREST_MIPMAP_NEAREST,[hu]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Td]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},Ut={[wb]:r.NEVER,[Lb]:r.ALWAYS,[Cb]:r.LESS,[xm]:r.LEQUAL,[Db]:r.EQUAL,[Sm]:r.GEQUAL,[Ub]:r.GREATER,[Nb]:r.NOTEQUAL};function Nt(L,b){if(b.type===ma&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===oi||b.magFilter===Td||b.magFilter===hu||b.magFilter===_r||b.minFilter===oi||b.minFilter===Td||b.minFilter===hu||b.minFilter===_r)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,_t[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==hu&&b.minFilter!==_r||b.type===ma&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function it(L,b){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const ht=b.source;let Rt=y.get(ht);Rt===void 0&&(Rt={},y.set(ht,Rt));const It=H(b);if(It!==L.__cacheKey){Rt[It]===void 0&&(Rt[It]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,F=!0),Rt[It].usedTimes++;const Ot=Rt[L.__cacheKey];Ot!==void 0&&(Rt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&k(b)),L.__cacheKey=It,L.__webglTexture=Rt[It].texture}return F}function mt(L,b,F){return Math.floor(Math.floor(L/F)/b)}function Mt(L,b,F,ht){const It=L.updateRanges;if(It.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,F,ht,b.data);else{It.sort((Vt,Ft)=>Vt.start-Ft.start);let Ot=0;for(let Vt=1;Vt<It.length;Vt++){const Ft=It[Ot],bt=It[Vt],se=Ft.start+Ft.count,ce=mt(bt.start,b.width,4),Me=mt(Ft.start,b.width,4);bt.start<=se+1&&ce===Me&&mt(bt.start+bt.count-1,b.width,4)===ce?Ft.count=Math.max(Ft.count,bt.start+bt.count-Ft.start):(++Ot,It[Ot]=bt)}It.length=Ot+1;const lt=i.getParameter(r.UNPACK_ROW_LENGTH),ft=i.getParameter(r.UNPACK_SKIP_PIXELS),Gt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Vt=0,Ft=It.length;Vt<Ft;Vt++){const bt=It[Vt],se=Math.floor(bt.start/4),ce=Math.ceil(bt.count/4),Me=se%b.width,X=Math.floor(se/b.width),Lt=ce,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Me,X,Lt,pt,F,ht,b.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,lt),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,Gt)}}function Dt(L,b,F){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const Rt=it(L,b),It=b.source;i.bindTexture(ht,L.__webglTexture,r.TEXTURE0+F);const Ot=s.get(It);if(It.version!==Ot.__version||Rt===!0){if(i.activeTexture(r.TEXTURE0+F),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pt=Pe.getPrimaries(Pe.workingColorSpace),Xt=b.colorSpace===Bs?null:Pe.getPrimaries(b.colorSpace),Bt=b.colorSpace===Bs||pt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ft=M(b.image,!1,l.maxTextureSize);ft=Pt(b,ft);const Gt=c.convert(b.format,b.colorSpace),Vt=c.convert(b.type);let Ft=C(b.internalFormat,Gt,Vt,b.normalized,b.colorSpace,b.isVideoTexture);Nt(ht,b);let bt;const se=b.mipmaps,ce=b.isVideoTexture!==!0,Me=Ot.__version===void 0||Rt===!0,X=It.dataReady,Lt=N(b,ft);if(b.isDepthTexture)Ft=z(b.format===vr,b.type),Me&&(ce?i.texStorage2D(r.TEXTURE_2D,1,Ft,ft.width,ft.height):i.texImage2D(r.TEXTURE_2D,0,Ft,ft.width,ft.height,0,Gt,Vt,null));else if(b.isDataTexture)if(se.length>0){ce&&Me&&i.texStorage2D(r.TEXTURE_2D,Lt,Ft,se[0].width,se[0].height);for(let pt=0,Xt=se.length;pt<Xt;pt++)bt=se[pt],ce?X&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,bt.width,bt.height,Gt,Vt,bt.data):i.texImage2D(r.TEXTURE_2D,pt,Ft,bt.width,bt.height,0,Gt,Vt,bt.data);b.generateMipmaps=!1}else ce?(Me&&i.texStorage2D(r.TEXTURE_2D,Lt,Ft,ft.width,ft.height),X&&Mt(b,ft,Gt,Vt)):i.texImage2D(r.TEXTURE_2D,0,Ft,ft.width,ft.height,0,Gt,Vt,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&Me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Ft,se[0].width,se[0].height,ft.depth);for(let pt=0,Xt=se.length;pt<Xt;pt++)if(bt=se[pt],b.format!==ga)if(Gt!==null)if(ce){if(X)if(b.layerUpdates.size>0){const Bt=ex(bt.width,bt.height,b.format,b.type);for(const At of b.layerUpdates){const Qt=bt.data.subarray(At*Bt/bt.data.BYTES_PER_ELEMENT,(At+1)*Bt/bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,At,bt.width,bt.height,1,Gt,Qt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ft.depth,Gt,bt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Ft,bt.width,bt.height,ft.depth,0,bt.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ft.depth,Gt,Vt,bt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Ft,bt.width,bt.height,ft.depth,0,Gt,Vt,bt.data)}else{ce&&Me&&i.texStorage2D(r.TEXTURE_2D,Lt,Ft,se[0].width,se[0].height);for(let pt=0,Xt=se.length;pt<Xt;pt++)bt=se[pt],b.format!==ga?Gt!==null?ce?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,bt.width,bt.height,Gt,bt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Ft,bt.width,bt.height,0,bt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,bt.width,bt.height,Gt,Vt,bt.data):i.texImage2D(r.TEXTURE_2D,pt,Ft,bt.width,bt.height,0,Gt,Vt,bt.data)}else if(b.isDataArrayTexture)if(ce){if(Me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Ft,ft.width,ft.height,ft.depth),X)if(b.layerUpdates.size>0){const pt=ex(ft.width,ft.height,b.format,b.type);for(const Xt of b.layerUpdates){const Bt=ft.data.subarray(Xt*pt/ft.data.BYTES_PER_ELEMENT,(Xt+1)*pt/ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Xt,ft.width,ft.height,1,Gt,Vt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Gt,Vt,ft.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,Gt,Vt,ft.data);else if(b.isData3DTexture)ce?(Me&&i.texStorage3D(r.TEXTURE_3D,Lt,Ft,ft.width,ft.height,ft.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Gt,Vt,ft.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,Gt,Vt,ft.data);else if(b.isFramebufferTexture){if(Me)if(ce)i.texStorage2D(r.TEXTURE_2D,Lt,Ft,ft.width,ft.height);else{let pt=ft.width,Xt=ft.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Ft,pt,Xt,0,Gt,Vt,null),pt>>=1,Xt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ft.parentNode!==pt){pt.appendChild(ft),v.add(b),pt.onpaint=ue=>{const tn=ue.changedElements;for(const Ce of v)tn.includes(Ce.image)&&(Ce.needsUpdate=!0)},pt.requestPaint();return}const Xt=0,Bt=r.RGBA,At=r.RGBA,Qt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Xt,Bt,At,Qt,ft),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(se.length>0){if(ce&&Me){const pt=Ve(se[0]);i.texStorage2D(r.TEXTURE_2D,Lt,Ft,pt.width,pt.height)}for(let pt=0,Xt=se.length;pt<Xt;pt++)bt=se[pt],ce?X&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Gt,Vt,bt):i.texImage2D(r.TEXTURE_2D,pt,Ft,Gt,Vt,bt);b.generateMipmaps=!1}else if(ce){if(Me){const pt=Ve(ft);i.texStorage2D(r.TEXTURE_2D,Lt,Ft,pt.width,pt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,Vt,ft)}else i.texImage2D(r.TEXTURE_2D,0,Ft,Gt,Vt,ft);x(b)&&A(ht),Ot.__version=It.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function te(L,b,F){if(b.image.length!==6)return;const ht=it(L,b),Rt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+F);const It=s.get(Rt);if(Rt.version!==It.__version||ht===!0){i.activeTexture(r.TEXTURE0+F);const Ot=Pe.getPrimaries(Pe.workingColorSpace),lt=b.colorSpace===Bs?null:Pe.getPrimaries(b.colorSpace),ft=b.colorSpace===Bs||Ot===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Vt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let At=0;At<6;At++)!Gt&&!Vt?Ft[At]=M(b.image[At],!0,l.maxCubemapSize):Ft[At]=Vt?b.image[At].image:b.image[At],Ft[At]=Pt(b,Ft[At]);const bt=Ft[0],se=c.convert(b.format,b.colorSpace),ce=c.convert(b.type),Me=C(b.internalFormat,se,ce,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Lt=It.__version===void 0||ht===!0,pt=Rt.dataReady;let Xt=N(b,bt);Nt(r.TEXTURE_CUBE_MAP,b);let Bt;if(Gt){X&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,Me,bt.width,bt.height);for(let At=0;At<6;At++){Bt=Ft[At].mipmaps;for(let Qt=0;Qt<Bt.length;Qt++){const ue=Bt[Qt];b.format!==ga?se!==null?X?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt,0,0,ue.width,ue.height,se,ue.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt,Me,ue.width,ue.height,0,ue.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt,0,0,ue.width,ue.height,se,ce,ue.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt,Me,ue.width,ue.height,0,se,ce,ue.data)}}}else{if(Bt=b.mipmaps,X&&Lt){Bt.length>0&&Xt++;const At=Ve(Ft[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,Me,At.width,At.height)}for(let At=0;At<6;At++)if(Vt){X?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Ft[At].width,Ft[At].height,se,ce,Ft[At].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Me,Ft[At].width,Ft[At].height,0,se,ce,Ft[At].data);for(let Qt=0;Qt<Bt.length;Qt++){const tn=Bt[Qt].image[At].image;X?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt+1,0,0,tn.width,tn.height,se,ce,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt+1,Me,tn.width,tn.height,0,se,ce,tn.data)}}else{X?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,se,ce,Ft[At]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Me,se,ce,Ft[At]);for(let Qt=0;Qt<Bt.length;Qt++){const ue=Bt[Qt];X?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt+1,0,0,se,ce,ue.image[At]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Qt+1,Me,se,ce,ue.image[At])}}}x(b)&&A(r.TEXTURE_CUBE_MAP),It.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ie(L,b,F,ht,Rt,It){const Ot=c.convert(F.format,F.colorSpace),lt=c.convert(F.type),ft=C(F.internalFormat,Ot,lt,F.normalized,F.colorSpace),Gt=s.get(b),Vt=s.get(F);if(Vt.__renderTarget=b,!Gt.__hasExternalTextures){const Ft=Math.max(1,b.width>>It),bt=Math.max(1,b.height>>It);Rt===r.TEXTURE_3D||Rt===r.TEXTURE_2D_ARRAY?i.texImage3D(Rt,It,ft,Ft,bt,b.depth,0,Ot,lt,null):i.texImage2D(Rt,It,ft,Ft,bt,0,Ot,lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,Rt,Vt.__webglTexture,0,Ke(b)):(Rt===r.TEXTURE_2D||Rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,Rt,Vt.__webglTexture,It),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(L,b,F){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const ht=b.depthTexture,Rt=ht&&ht.isDepthTexture?ht.type:null,It=z(b.stencilBuffer,Rt),Ot=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke(b),It,b.width,b.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke(b),It,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,It,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,L)}else{const ht=b.textures;for(let Rt=0;Rt<ht.length;Rt++){const It=ht[Rt],Ot=c.convert(It.format,It.colorSpace),lt=c.convert(It.type),ft=C(It.internalFormat,Ot,lt,It.normalized,It.colorSpace);ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke(b),ft,b.width,b.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(L,b,F){const ht=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Rt=s.get(b.depthTexture);if(Rt.__renderTarget=b,(!Rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht){if(Rt.__webglInit===void 0&&(Rt.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),Rt.__webglTexture===void 0){Rt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Rt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Gt=c.convert(b.depthTexture.format),Vt=c.convert(b.depthTexture.type);let Ft;b.depthTexture.format===is?Ft=r.DEPTH_COMPONENT24:b.depthTexture.format===vr&&(Ft=r.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Ft,b.width,b.height,0,Gt,Vt,null)}}else rt(b.depthTexture,0);const It=Rt.__webglTexture,Ot=Ke(b),lt=ht?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,ft=b.depthTexture.format===vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===is)ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,lt,It,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,ft,lt,It,0);else if(b.depthTexture.format===vr)ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,lt,It,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,ft,lt,It,0);else throw new Error("Unknown depthTexture format")}function Et(L){const b=s.get(L),F=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const Rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",Rt)};ht.addEventListener("dispose",Rt),b.__depthDisposeCallback=Rt}b.__boundDepthTexture=ht}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(F)for(let ht=0;ht<6;ht++)wt(b.__webglFramebuffer[ht],L,ht);else{const ht=L.texture.mipmaps;ht&&ht.length>0?wt(b.__webglFramebuffer[0],L,0):wt(b.__webglFramebuffer,L,0)}else if(F){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Ie(b.__webglDepthbuffer[ht],L,!1);else{const Rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,It),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,It)}}else{const ht=L.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ie(b.__webglDepthbuffer,L,!1);else{const Rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,It),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,It)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(L,b,F){const ht=s.get(L);b!==void 0&&ie(ht.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Et(L)}function ne(L){const b=L.texture,F=s.get(L),ht=s.get(b);L.addEventListener("dispose",E);const Rt=L.textures,It=L.isWebGLCubeRenderTarget===!0,Ot=Rt.length>1;if(Ot||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,f.memory.textures++),It){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let ft=0;ft<b.mipmaps.length;ft++)F.__webglFramebuffer[lt][ft]=r.createFramebuffer()}else F.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)F.__webglFramebuffer[lt]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let lt=0,ft=Rt.length;lt<ft;lt++){const Gt=s.get(Rt[lt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&ge(L)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<Rt.length;lt++){const ft=Rt[lt];F.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const Gt=c.convert(ft.format,ft.colorSpace),Vt=c.convert(ft.type),Ft=C(ft.internalFormat,Gt,Vt,ft.normalized,ft.colorSpace,L.isXRRenderTarget===!0),bt=Ke(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,Ft,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(It){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)ie(F.__webglFramebuffer[lt][ft],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else ie(F.__webglFramebuffer[lt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);x(b)&&A(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let lt=0,ft=Rt.length;lt<ft;lt++){const Gt=Rt[lt],Vt=s.get(Gt);let Ft=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ft=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ft,Vt.__webglTexture),Nt(Ft,Gt),ie(F.__webglFramebuffer,L,Gt,r.COLOR_ATTACHMENT0+lt,Ft,0),x(Gt)&&A(Ft)}i.unbindTexture()}else{let lt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(lt,ht.__webglTexture),Nt(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)ie(F.__webglFramebuffer[ft],L,b,r.COLOR_ATTACHMENT0,lt,ft);else ie(F.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,lt,0);x(b)&&A(lt),i.unbindTexture()}L.depthBuffer&&Et(L)}function he(L){const b=L.textures;for(let F=0,ht=b.length;F<ht;F++){const Rt=b[F];if(x(Rt)){const It=U(L),Ot=s.get(Rt).__webglTexture;i.bindTexture(It,Ot),A(It),i.unbindTexture()}}}const Fe=[],Ze=[];function q(L){if(L.samples>0){if(ge(L)===!1){const b=L.textures,F=L.width,ht=L.height;let Rt=r.COLOR_BUFFER_BIT;const It=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(L),lt=b.length>1;if(lt)for(let Gt=0;Gt<b.length;Gt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const ft=L.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Gt=0;Gt<b.length;Gt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Rt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Rt|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Gt]);const Vt=s.get(b[Gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,F,ht,0,0,F,ht,Rt,r.NEAREST),m===!0&&(Fe.length=0,Ze.length=0,Fe.push(r.COLOR_ATTACHMENT0+Gt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Fe.push(It),Ze.push(It),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let Gt=0;Gt<b.length;Gt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Gt]);const Vt=s.get(b[Gt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,Vt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ke(L){return Math.min(l.maxSamples,L.samples)}function ge(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(L){const b=f.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Pt(L,b){const F=L.colorSpace,ht=L.format,Rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==ef&&F!==Bs&&(Pe.getTransfer(F)===an?(ht!==ga||Rt!==Xi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",F)),b}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=I,this.resetTextureUnits=nt,this.getTextureUnits=ct,this.setTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=dt,this.setTexture3D=Tt,this.setTextureCube=B,this.rebindTextures=Ct,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function AR(r,t){function i(s,l=Bs){let c;const f=Pe.getTransfer(l);if(s===Xi)return r.UNSIGNED_BYTE;if(s===dm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===uS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===oS)return r.BYTE;if(s===lS)return r.SHORT;if(s===Jl)return r.UNSIGNED_SHORT;if(s===hm)return r.INT;if(s===wa)return r.UNSIGNED_INT;if(s===ma)return r.FLOAT;if(s===di)return r.HALF_FLOAT;if(s===fS)return r.ALPHA;if(s===hS)return r.RGB;if(s===ga)return r.RGBA;if(s===is)return r.DEPTH_COMPONENT;if(s===vr)return r.DEPTH_STENCIL;if(s===mm)return r.RED;if(s===gm)return r.RED_INTEGER;if(s===yr)return r.RG;if(s===_m)return r.RG_INTEGER;if(s===vm)return r.RGBA_INTEGER;if(s===ju||s===Zu||s===Ku||s===Qu)if(f===an)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ku)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sp||s===Mp||s===yp||s===bp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ep||s===Tp||s===Ap||s===Rp||s===wp||s===$u||s===Cp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ep||s===Tp)return f===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ap)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rp)return c.COMPRESSED_R11_EAC;if(s===wp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===$u)return c.COMPRESSED_RG11_EAC;if(s===Cp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===Ip||s===Fp||s===zp||s===Bp||s===Hp||s===Gp||s===Vp||s===kp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Up)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ip)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kp)return f===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xp||s===Wp||s===Yp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xp)return f===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qp||s===jp||s===tf||s===Zp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===qp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$l?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new bS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new In({vertexShader:RR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new sc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DR extends Er{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,T=null;const D=typeof XRWebGLBinding<"u",M=new CR,x={},A=i.getContextAttributes();let U=null,C=null;const z=[],N=[],P=new _e;let E=null;const O=new Vi;O.viewport=new bn;const k=new Vi;k.viewport=new bn;const G=[O,k],Y=new zE;let nt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let mt=z[it];return mt===void 0&&(mt=new Ud,z[it]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(it){let mt=z[it];return mt===void 0&&(mt=new Ud,z[it]=mt),mt.getGripSpace()},this.getHand=function(it){let mt=z[it];return mt===void 0&&(mt=new Ud,z[it]=mt),mt.getHandSpace()};function W(it){const mt=N.indexOf(it.inputSource);if(mt===-1)return;const Mt=z[mt];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,p||f),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let it=0;it<z.length;it++){const mt=N[it];mt!==null&&(N[it]=null,z[it].disconnect(mt))}nt=null,ct=null,M.reset();for(const it in x)delete x[it];t.setRenderTarget(U),y=null,g=null,v=null,l=null,C=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Dt=null,te=null;A.depth&&(te=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=A.stencil?vr:is,Dt=A.stencil?$l:wa);const ie={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ie),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new li(g.textureWidth,g.textureHeight,{format:ga,type:Xi,depthTexture:new Io(g.textureWidth,g.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new li(y.framebufferWidth,y.framebufferHeight,{format:ga,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(it){for(let mt=0;mt<it.removed.length;mt++){const Mt=it.removed[mt],Dt=N.indexOf(Mt);Dt>=0&&(N[Dt]=null,z[Dt].disconnect(Mt))}for(let mt=0;mt<it.added.length;mt++){const Mt=it.added[mt];let Dt=N.indexOf(Mt);if(Dt===-1){for(let ie=0;ie<z.length;ie++)if(ie>=N.length){N.push(Mt),Dt=ie;break}else if(N[ie]===null){N[ie]=Mt,Dt=ie;break}if(Dt===-1)break}const te=z[Dt];te&&te.connect(Mt)}}const rt=new K,dt=new K;function Tt(it,mt,Mt){rt.setFromMatrixPosition(mt.matrixWorld),dt.setFromMatrixPosition(Mt.matrixWorld);const Dt=rt.distanceTo(dt),te=mt.projectionMatrix.elements,ie=Mt.projectionMatrix.elements,Ie=te[14]/(te[10]-1),wt=te[14]/(te[10]+1),Et=(te[9]+1)/te[5],Ct=(te[9]-1)/te[5],ne=(te[8]-1)/te[0],he=(ie[8]+1)/ie[0],Fe=Ie*ne,Ze=Ie*he,q=Dt/(-ne+he),Ke=q*-ne;if(mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(q),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),te[10]===-1)it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const ge=Ie+q,Le=wt+q,Pt=Fe-Ke,Ve=Ze+(Dt-Ke),L=Et*wt/Le*ge,b=Ct*wt/Le*ge;it.projectionMatrix.makePerspective(Pt,Ve,L,b,ge,Le),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function B(it,mt){mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let mt=it.near,Mt=it.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),Y.near=k.near=O.near=mt,Y.far=k.far=O.far=Mt,(nt!==Y.near||ct!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),nt=Y.near,ct=Y.far),Y.layers.mask=it.layers.mask|6,O.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Dt=it.parent,te=Y.cameras;B(Y,Dt);for(let ie=0;ie<te.length;ie++)B(te[ie],Dt);te.length===2?Tt(Y,O,k):Y.projectionMatrix.copy(O.projectionMatrix),Q(it,Y,Dt)};function Q(it,mt,Mt){Mt===null?it.matrix.copy(mt.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ec*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(it){return x[it]};let _t=null;function Ut(it,mt){if(_=mt.getViewerPose(p||f),T=mt,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Dt=!1;Mt.length!==Y.cameras.length&&(Y.cameras.length=0,Dt=!0);for(let wt=0;wt<Mt.length;wt++){const Et=Mt[wt];let Ct=null;if(y!==null)Ct=y.getViewport(Et);else{const he=v.getViewSubImage(g,Et);Ct=he.viewport,wt===0&&(t.setRenderTargetTextures(C,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(C))}let ne=G[wt];ne===void 0&&(ne=new Vi,ne.layers.enable(wt),ne.viewport=new bn,G[wt]=ne),ne.matrix.fromArray(Et.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Et.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),wt===0&&(Y.matrix.copy(ne.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Dt===!0&&Y.cameras.push(ne)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const wt=v.getDepthInformation(Mt[0]);wt&&wt.isValid&&wt.texture&&M.init(wt,l.renderState)}if(te&&te.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let wt=0;wt<Mt.length;wt++){const Et=Mt[wt].camera;if(Et){let Ct=x[Et];Ct||(Ct=new bS,x[Et]=Ct);const ne=v.getCameraImage(Et);Ct.sourceTexture=ne}}}}for(let Mt=0;Mt<z.length;Mt++){const Dt=N[Mt],te=z[Mt];Dt!==null&&te!==void 0&&te.update(Dt,mt,p||f)}_t&&_t(it,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const Nt=new RS;Nt.setAnimationLoop(Ut),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const UR=new dn,OS=new Se;OS.set(-1,0,0,0,1,0,0,0,1);function NR(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,ES(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,A,U,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),D(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,A,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Ri&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Ri&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const A=t.get(x),U=A.envMap,C=A.envMapRotation;U&&(M.envMap.value=U,M.envMapRotation.value.setFromMatrix4(UR.makeRotationFromEuler(C)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(OS),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,A,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*A,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,A){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ri&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function D(M,x){const A=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function LR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const C=U.program;s.uniformBlockBinding(A,C)}function p(A,U){let C=l[A.id];C===void 0&&(T(A),C=_(A),l[A.id]=C,A.addEventListener("dispose",M));const z=U.program;s.updateUBOMapping(A,z);const N=t.render.frame;c[A.id]!==N&&(g(A),c[A.id]=N)}function _(A){const U=v();A.__bindingPointIndex=U;const C=r.createBuffer(),z=A.__size,N=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,z,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function v(){for(let A=0;A<d;A++)if(f.indexOf(A)===-1)return f.push(A),A;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const U=l[A.id],C=A.uniforms,z=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let N=0,P=C.length;N<P;N++){const E=Array.isArray(C[N])?C[N]:[C[N]];for(let O=0,k=E.length;O<k;O++){const G=E[O];if(y(G,N,O,z)===!0){const Y=G.__offset,nt=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let W=0;W<nt.length;W++){const I=nt[W],H=D(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Y+ct,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):ArrayBuffer.isView(I)?G.__data.set(new I.constructor(I.buffer,I.byteOffset,G.__data.length)):(I.toArray(G.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(A,U,C,z){const N=A.value,P=U+"_"+C;if(z[P]===void 0)return typeof N=="number"||typeof N=="boolean"?z[P]=N:ArrayBuffer.isView(N)?z[P]=N.slice():z[P]=N.clone(),!0;{const E=z[P];if(typeof N=="number"||typeof N=="boolean"){if(E!==N)return z[P]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(E.equals(N)===!1)return E.copy(N),!0}}return!1}function T(A){const U=A.uniforms;let C=0;const z=16;for(let P=0,E=U.length;P<E;P++){const O=Array.isArray(U[P])?U[P]:[U[P]];for(let k=0,G=O.length;k<G;k++){const Y=O[k],nt=Array.isArray(Y.value)?Y.value:[Y.value];for(let ct=0,W=nt.length;ct<W;ct++){const I=nt[ct],H=D(I),rt=C%z,dt=rt%H.boundary,Tt=rt+dt;C+=dt,Tt!==0&&z-Tt<H.storage&&(C+=z-Tt),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=H.storage}}}const N=C%z;return N>0&&(C+=z-N),A.__size=C,A.__cache={},this}function D(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(U.boundary=16,U.storage=A.byteLength):me("WebGLRenderer: Unsupported uniform value type.",A),U}function M(A){const U=A.target;U.removeEventListener("dispose",M);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const A in l)r.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const OR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ba=null;function PR(){return ba===null&&(ba=new xS(OR,16,16,yr,di),ba.name="DFG_LUT",ba.minFilter=oi,ba.magFilter=oi,ba.wrapS=es,ba.wrapT=es,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class IR{constructor(t={}){const{canvas:i=Pb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Xi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const D=y,M=new Set([vm,_m,gm]),x=new Set([Xi,wa,Jl,$l,dm,pm]),A=new Uint32Array(4),U=new Int32Array(4),C=new K;let z=null,N=null;const P=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,Y=null;this._outputColorSpace=Hi;let nt=0,ct=0,W=null,I=-1,H=null;const rt=new bn,dt=new bn;let Tt=null;const B=new pe(0);let Q=0,_t=i.width,Ut=i.height,Nt=1,it=null,mt=null;const Mt=new bn(0,0,_t,Ut),Dt=new bn(0,0,_t,Ut);let te=!1;const ie=new Tm;let Ie=!1,wt=!1;const Et=new dn,Ct=new K,ne=new bn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ze(){return W===null?Nt:1}let q=s;function Ke(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${um}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",Qt,!1),i.addEventListener("webglcontextcreationerror",ue,!1),q===null){const j="webgl2";if(q=Ke(j,R),q===null)throw Ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ge("WebGLRenderer: "+R.message),R}let ge,Le,Pt,Ve,L,b,F,ht,Rt,It,Ot,lt,ft,Gt,Vt,Ft,bt,se,ce,Me,X,Lt,pt;function Xt(){ge=new PA(q),ge.init(),X=new AR(q,ge),Le=new RA(q,ge,t,X),Pt=new ER(q,ge),Le.reversedDepthBuffer&&g&&Pt.buffers.depth.setReversed(!0),Ve=new zA(q),L=new uR,b=new TR(q,ge,Pt,L,Le,X,Ve),F=new OA(k),ht=new VE(q),Lt=new TA(q,ht),Rt=new IA(q,ht,Ve,Lt),It=new HA(q,Rt,ht,Lt,Ve),se=new BA(q,Le,b),Vt=new wA(L),Ot=new cR(k,F,ge,Le,Lt,Vt),lt=new NR(k,L),ft=new hR,Gt=new vR(ge),bt=new EA(k,F,Pt,It,T,m),Ft=new bR(k,It,Le),pt=new LR(q,Ve,Le,Pt),ce=new AA(q,ge,Ve),Me=new FA(q,ge,Ve),Ve.programs=Ot.programs,k.capabilities=Le,k.extensions=ge,k.properties=L,k.renderLists=ft,k.shadowMap=Ft,k.state=Pt,k.info=Ve}Xt(),D!==Xi&&(O=new VA(D,i.width,i.height,l,c));const Bt=new DR(k,q);this.xr=Bt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(R){R!==void 0&&(Nt=R,this.setSize(_t,Ut,!1))},this.getSize=function(R){return R.set(_t,Ut)},this.setSize=function(R,j,et=!0){if(Bt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=R,Ut=j,i.width=Math.floor(R*Nt),i.height=Math.floor(j*Nt),et===!0&&(i.style.width=R+"px",i.style.height=j+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(_t*Nt,Ut*Nt).floor()},this.setDrawingBufferSize=function(R,j,et){_t=R,Ut=j,Nt=et,i.width=Math.floor(R*et),i.height=Math.floor(j*et),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(D===Xi){Ge("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){me("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(rt)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,j,et,$){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,j,et,$),Pt.viewport(rt.copy(Mt).multiplyScalar(Nt).round())},this.getScissor=function(R){return R.copy(Dt)},this.setScissor=function(R,j,et,$){R.isVector4?Dt.set(R.x,R.y,R.z,R.w):Dt.set(R,j,et,$),Pt.scissor(dt.copy(Dt).multiplyScalar(Nt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(R){Pt.setScissorTest(te=R)},this.setOpaqueSort=function(R){it=R},this.setTransparentSort=function(R){mt=R},this.getClearColor=function(R){return R.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,et=!0){let $=0;if(R){let tt=!1;if(W!==null){const Ht=W.texture.format;tt=M.has(Ht)}if(tt){const Ht=W.texture.type,qt=x.has(Ht),zt=bt.getClearColor(),Kt=bt.getClearAlpha(),Yt=zt.r,Jt=zt.g,oe=zt.b;qt?(A[0]=Yt,A[1]=Jt,A[2]=oe,A[3]=Kt,q.clearBufferuiv(q.COLOR,0,A)):(U[0]=Yt,U[1]=Jt,U[2]=oe,U[3]=Kt,q.clearBufferiv(q.COLOR,0,U))}else $|=q.COLOR_BUFFER_BIT}j&&($|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&($|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&q.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",Qt,!1),i.removeEventListener("webglcontextcreationerror",ue,!1),bt.dispose(),ft.dispose(),Gt.dispose(),L.dispose(),F.dispose(),It.dispose(),Lt.dispose(),pt.dispose(),Ot.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",xt),Bt.removeEventListener("sessionend",gi),fn.stop()};function At(R){R.preventDefault(),Tv("WebGLRenderer: Context Lost."),G=!0}function Qt(){Tv("WebGLRenderer: Context Restored."),G=!1;const R=Ve.autoReset,j=Ft.enabled,et=Ft.autoUpdate,$=Ft.needsUpdate,tt=Ft.type;Xt(),Ve.autoReset=R,Ft.enabled=j,Ft.autoUpdate=et,Ft.needsUpdate=$,Ft.type=tt}function ue(R){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tn(R){const j=R.target;j.removeEventListener("dispose",tn),Ce(j)}function Ce(R){vt(R),L.remove(R)}function vt(R){const j=L.get(R).programs;j!==void 0&&(j.forEach(function(et){Ot.releaseProgram(et)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,et,$,tt,Ht){j===null&&(j=he);const qt=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=Di(R,j,et,$,tt);Pt.setMaterial($,qt);let Kt=et.index,Yt=1;if($.wireframe===!0){if(Kt=Rt.getWireframeAttribute(et),Kt===void 0)return;Yt=2}const Jt=et.drawRange,oe=et.attributes.position;let $t=Jt.start*Yt,fe=(Jt.start+Jt.count)*Yt;Ht!==null&&($t=Math.max($t,Ht.start*Yt),fe=Math.min(fe,(Ht.start+Ht.count)*Yt)),Kt!==null?($t=Math.max($t,0),fe=Math.min(fe,Kt.count)):oe!=null&&($t=Math.max($t,0),fe=Math.min(fe,oe.count));const cn=fe-$t;if(cn<0||cn===1/0)return;Lt.setup(tt,$,zt,et,Kt);let Je,ke=ce;if(Kt!==null&&(Je=ht.get(Kt),ke=Me,ke.setIndex(Je)),tt.isMesh)$.wireframe===!0?(Pt.setLineWidth($.wireframeLinewidth*Ze()),ke.setMode(q.LINES)):ke.setMode(q.TRIANGLES);else if(tt.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),Pt.setLineWidth(Be*Ze()),tt.isLineSegments?ke.setMode(q.LINES):tt.isLineLoop?ke.setMode(q.LINE_LOOP):ke.setMode(q.LINE_STRIP)}else tt.isPoints?ke.setMode(q.POINTS):tt.isSprite&&ke.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))ke.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Be=tt._multiDrawStarts,jt=tt._multiDrawCounts,hn=tt._multiDrawCount,be=Kt?ht.get(Kt).bytesPerElement:1,xn=L.get($).currentProgram.getUniforms();for(let ti=0;ti<hn;ti++)xn.setValue(q,"_gl_DrawID",ti),ke.render(Be[ti]/be,jt[ti])}else if(tt.isInstancedMesh)ke.renderInstances($t,cn,tt.count);else if(et.isInstancedBufferGeometry){const Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,jt=Math.min(et.instanceCount,Be);ke.renderInstances($t,cn,jt)}else ke.render($t,cn)};function re(R,j,et){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=Ri,R.needsUpdate=!0,vi(R,j,et),R.side=Gs,R.needsUpdate=!0,vi(R,j,et),R.side=Ta):vi(R,j,et)}this.compile=function(R,j,et=null){et===null&&(et=R),N=Gt.get(et),N.init(j),E.push(N),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),R!==et&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),N.setupLights();const $=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ht=tt.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){const zt=Ht[qt];re(zt,et,tt),$.add(zt)}else re(Ht,et,tt),$.add(Ht)}),N=E.pop(),$},this.compileAsync=function(R,j,et=null){const $=this.compile(R,j,et);return new Promise(tt=>{function Ht(){if($.forEach(function(qt){L.get(qt).currentProgram.isReady()&&$.delete(qt)}),$.size===0){tt(R);return}setTimeout(Ht,10)}ge.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Ae=null;function ia(R){Ae&&Ae(R)}function xt(){fn.stop()}function gi(){fn.start()}const fn=new RS;fn.setAnimationLoop(ia),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){Ae=R,Bt.setAnimationLoop(R),R===null?fn.stop():fn.start()},Bt.addEventListener("sessionstart",xt),Bt.addEventListener("sessionend",gi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(R,j);const et=Bt.enabled===!0&&Bt.isPresenting===!0,$=O!==null&&(W===null||et)&&O.begin(k,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(j),j=Bt.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,j,W),N=Gt.get(R,E.length),N.init(j),N.state.textureUnits=b.getTextureUnits(),E.push(N),Et.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ie.setFromProjectionMatrix(Et,Aa,j.reversedDepth),wt=this.localClippingEnabled,Ie=Vt.init(this.clippingPlanes,wt),z=ft.get(R,P.length),z.init(),P.push(z),Bt.enabled===!0&&Bt.isPresenting===!0){const qt=k.xr.getDepthSensingMesh();qt!==null&&Qe(qt,j,-1/0,k.sortObjects)}Qe(R,j,0,k.sortObjects),z.finish(),k.sortObjects===!0&&z.sort(it,mt),Fe=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Fe&&bt.addToRenderList(z,R),this.info.render.frame++,Ie===!0&&Vt.beginShadows();const tt=N.state.shadowsArray;if(Ft.render(tt,R,j),Ie===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&O.hasRenderPass())===!1){const qt=z.opaque,zt=z.transmissive;if(N.setupLights(),j.isArrayCamera){const Kt=j.cameras;if(zt.length>0)for(let Yt=0,Jt=Kt.length;Yt<Jt;Yt++){const oe=Kt[Yt];_i(qt,zt,R,oe)}Fe&&bt.render(R);for(let Yt=0,Jt=Kt.length;Yt<Jt;Yt++){const oe=Kt[Yt];gn(z,R,oe,oe.viewport)}}else zt.length>0&&_i(qt,zt,R,j),Fe&&bt.render(R),gn(z,R,j)}W!==null&&ct===0&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),$&&O.end(k),R.isScene===!0&&R.onAfterRender(k,R,j),Lt.resetDefaultState(),I=-1,H=null,E.pop(),E.length>0?(N=E[E.length-1],b.setTextureUnits(N.state.textureUnits),Ie===!0&&Vt.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?z=P[P.length-1]:z=null,Y!==null&&Y.renderEnd()};function Qe(R,j,et,$){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){$&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const qt=It.update(R),zt=R.material;zt.visible&&z.push(R,qt,zt,et,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const qt=It.update(R),zt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ne.copy(qt.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(zt)){const Kt=qt.groups;for(let Yt=0,Jt=Kt.length;Yt<Jt;Yt++){const oe=Kt[Yt],$t=zt[oe.materialIndex];$t&&$t.visible&&z.push(R,qt,$t,et,ne.z,oe)}}else zt.visible&&z.push(R,qt,zt,et,ne.z,null)}}const Ht=R.children;for(let qt=0,zt=Ht.length;qt<zt;qt++)Qe(Ht[qt],j,et,$)}function gn(R,j,et,$){const{opaque:tt,transmissive:Ht,transparent:qt}=R;N.setupLightsView(et),Ie===!0&&Vt.setGlobalState(k.clippingPlanes,et),$&&Pt.viewport(rt.copy($)),tt.length>0&&wi(tt,j,et),Ht.length>0&&wi(Ht,j,et),qt.length>0&&wi(qt,j,et),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function _i(R,j,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[$.id]===void 0){const $t=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:$t?di:Xi,minFilter:_r,samples:Math.max(4,Le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Ht=N.state.transmissionRenderTarget[$.id],qt=$.viewport||rt;Ht.setSize(qt.z*k.transmissionResolutionScale,qt.w*k.transmissionResolutionScale);const zt=k.getRenderTarget(),Kt=k.getActiveCubeFace(),Yt=k.getActiveMipmapLevel();k.setRenderTarget(Ht),k.getClearColor(B),Q=k.getClearAlpha(),Q<1&&k.setClearColor(16777215,.5),k.clear(),Fe&&bt.render(et);const Jt=k.toneMapping;k.toneMapping=Ra;const oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),N.setupLightsView($),Ie===!0&&Vt.setGlobalState(k.clippingPlanes,$),wi(R,et,$),b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht),ge.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let fe=0,cn=j.length;fe<cn;fe++){const Je=j[fe],{object:ke,geometry:Be,material:jt,group:hn}=Je;if(jt.side===Ta&&ke.layers.test($.layers)){const be=jt.side;jt.side=Ri,jt.needsUpdate=!0,Ca(ke,et,$,Be,jt,hn),jt.side=be,jt.needsUpdate=!0,$t=!0}}$t===!0&&(b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht))}k.setRenderTarget(zt,Kt,Yt),k.setClearColor(B,Q),oe!==void 0&&($.viewport=oe),k.toneMapping=Jt}function wi(R,j,et){const $=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,Ht=R.length;tt<Ht;tt++){const qt=R[tt],{object:zt,geometry:Kt,group:Yt}=qt;let Jt=qt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),zt.layers.test(et.layers)&&Ca(zt,j,et,Kt,Jt,Yt)}}function Ca(R,j,et,$,tt,Ht){R.onBeforeRender(k,j,et,$,tt,Ht),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(k,j,et,$,R,Ht),tt.transparent===!0&&tt.side===Ta&&tt.forceSinglePass===!1?(tt.side=Ri,tt.needsUpdate=!0,k.renderBufferDirect(et,j,$,tt,R,Ht),tt.side=Gs,tt.needsUpdate=!0,k.renderBufferDirect(et,j,$,tt,R,Ht),tt.side=Ta):k.renderBufferDirect(et,j,$,tt,R,Ht),R.onAfterRender(k,j,et,$,tt,Ht)}function vi(R,j,et){j.isScene!==!0&&(j=he);const $=L.get(R),tt=N.state.lights,Ht=N.state.shadowsArray,qt=tt.state.version,zt=Ot.getParameters(R,tt.state,Ht,j,et,N.state.lightProbeGridArray),Kt=Ot.getProgramCacheKey(zt);let Yt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,$.fog=j.fog;const Jt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=F.get(R.envMap||$.environment,Jt),$.envMapRotation=$.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",tn),Yt=new Map,$.programs=Yt);let oe=Yt.get(Kt);if(oe!==void 0){if($.currentProgram===oe&&$.lightsStateVersion===qt)return Hn(R,zt),oe}else zt.uniforms=Ot.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,et,zt),R.onBeforeCompile(zt,k),oe=Ot.acquireProgram(zt,Kt),Yt.set(Kt,oe),$.uniforms=zt.uniforms;const $t=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Vt.uniform),Hn(R,zt),$.needsLights=$n(R),$.lightsStateVersion=qt,$.needsLights&&($t.ambientLightColor.value=tt.state.ambient,$t.lightProbe.value=tt.state.probe,$t.directionalLights.value=tt.state.directional,$t.directionalLightShadows.value=tt.state.directionalShadow,$t.spotLights.value=tt.state.spot,$t.spotLightShadows.value=tt.state.spotShadow,$t.rectAreaLights.value=tt.state.rectArea,$t.ltc_1.value=tt.state.rectAreaLTC1,$t.ltc_2.value=tt.state.rectAreaLTC2,$t.pointLights.value=tt.state.point,$t.pointLightShadows.value=tt.state.pointShadow,$t.hemisphereLights.value=tt.state.hemi,$t.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,$t.spotLightMatrix.value=tt.state.spotLightMatrix,$t.spotLightMap.value=tt.state.spotLightMap,$t.pointShadowMatrix.value=tt.state.pointShadowMatrix),$.lightProbeGrid=N.state.lightProbeGridArray.length>0,$.currentProgram=oe,$.uniformsList=null,oe}function Ci(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ju.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Hn(R,j){const et=L.get(R);et.outputColorSpace=j.outputColorSpace,et.batching=j.batching,et.batchingColor=j.batchingColor,et.instancing=j.instancing,et.instancingColor=j.instancingColor,et.instancingMorph=j.instancingMorph,et.skinning=j.skinning,et.morphTargets=j.morphTargets,et.morphNormals=j.morphNormals,et.morphColors=j.morphColors,et.morphTargetsCount=j.morphTargetsCount,et.numClippingPlanes=j.numClippingPlanes,et.numIntersection=j.numClipIntersection,et.vertexAlphas=j.vertexAlphas,et.vertexTangents=j.vertexTangents,et.toneMapping=j.toneMapping}function Gn(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(j.matrixWorld);for(let et=0,$=R.length;et<$;et++){const tt=R[et];if(tt.texture!==null&&tt.boundingBox.containsPoint(C))return tt}return null}function Di(R,j,et,$,tt){j.isScene!==!0&&(j=he),b.resetTextureUnits();const Ht=j.fog,qt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?j.environment:null,zt=W===null?k.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pe.workingColorSpace,Kt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Yt=F.get($.envMap||qt,Kt),Jt=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,oe=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),$t=!!et.morphAttributes.position,fe=!!et.morphAttributes.normal,cn=!!et.morphAttributes.color;let Je=Ra;$.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Je=k.toneMapping);const ke=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=ke!==void 0?ke.length:0,jt=L.get($),hn=N.state.lights;if(Ie===!0&&(wt===!0||R!==H)){const Xe=R===H&&$.id===I;Vt.setState($,R,Xe)}let be=!1;$.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==hn.state.version||jt.outputColorSpace!==zt||tt.isBatchedMesh&&jt.batching===!1||!tt.isBatchedMesh&&jt.batching===!0||tt.isBatchedMesh&&jt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&jt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&jt.instancing===!1||!tt.isInstancedMesh&&jt.instancing===!0||tt.isSkinnedMesh&&jt.skinning===!1||!tt.isSkinnedMesh&&jt.skinning===!0||tt.isInstancedMesh&&jt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&jt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&jt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&jt.instancingMorph===!1&&tt.morphTexture!==null||jt.envMap!==Yt||$.fog===!0&&jt.fog!==Ht||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Vt.numPlanes||jt.numIntersection!==Vt.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==oe||jt.morphTargets!==$t||jt.morphNormals!==fe||jt.morphColors!==cn||jt.toneMapping!==Je||jt.morphTargetsCount!==Be||!!jt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,jt.__version=$.version);let xn=jt.currentProgram;be===!0&&(xn=vi($,j,tt),Y&&$.isNodeMaterial&&Y.onUpdateProgram($,xn,jt));let ti=!1,xi=!1,Vn=!1;const He=xn.getUniforms(),sn=jt.uniforms;if(Pt.useProgram(xn.program)&&(ti=!0,xi=!0,Vn=!0),$.id!==I&&(I=$.id,xi=!0),jt.needsLights){const Xe=Gn(N.state.lightProbeGridArray,tt);jt.lightProbeGrid!==Xe&&(jt.lightProbeGrid=Xe,xi=!0)}if(ti||H!==R){Pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(q,"projectionMatrix",R.projectionMatrix),He.setValue(q,"viewMatrix",R.matrixWorldInverse);const ei=He.map.cameraPosition;ei!==void 0&&ei.setValue(q,Ct.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&He.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&He.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,xi=!0,Vn=!0)}if(jt.needsLights&&(hn.state.directionalShadowMap.length>0&&He.setValue(q,"directionalShadowMap",hn.state.directionalShadowMap,b),hn.state.spotShadowMap.length>0&&He.setValue(q,"spotShadowMap",hn.state.spotShadowMap,b),hn.state.pointShadowMap.length>0&&He.setValue(q,"pointShadowMap",hn.state.pointShadowMap,b)),tt.isSkinnedMesh){He.setOptional(q,tt,"bindMatrix"),He.setOptional(q,tt,"bindMatrixInverse");const Xe=tt.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),He.setValue(q,"boneTexture",Xe.boneTexture,b))}tt.isBatchedMesh&&(He.setOptional(q,tt,"batchingTexture"),He.setValue(q,"batchingTexture",tt._matricesTexture,b),He.setOptional(q,tt,"batchingIdTexture"),He.setValue(q,"batchingIdTexture",tt._indirectTexture,b),He.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&He.setValue(q,"batchingColorTexture",tt._colorsTexture,b));const Si=et.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&se.update(tt,et,xn),(xi||jt.receiveShadow!==tt.receiveShadow)&&(jt.receiveShadow=tt.receiveShadow,He.setValue(q,"receiveShadow",tt.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&j.environment!==null&&(sn.envMapIntensity.value=j.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=PR()),xi){if(He.setValue(q,"toneMappingExposure",k.toneMappingExposure),jt.needsLights&&Jn(sn,Vn),Ht&&$.fog===!0&&lt.refreshFogUniforms(sn,Ht),lt.refreshMaterialUniforms(sn,$,Nt,Ut,N.state.transmissionRenderTarget[R.id]),jt.needsLights&&jt.lightProbeGrid){const Xe=jt.lightProbeGrid;sn.probesSH.value=Xe.texture,sn.probesMin.value.copy(Xe.boundingBox.min),sn.probesMax.value.copy(Xe.boundingBox.max),sn.probesResolution.value.copy(Xe.resolution)}Ju.upload(q,Ci(jt),sn,b)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ju.upload(q,Ci(jt),sn,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&He.setValue(q,"center",tt.center),He.setValue(q,"modelViewMatrix",tt.modelViewMatrix),He.setValue(q,"normalMatrix",tt.normalMatrix),He.setValue(q,"modelMatrix",tt.matrixWorld),$.uniformsGroups!==void 0){const Xe=$.uniformsGroups;for(let ei=0,Yi=Xe.length;ei<Yi;ei++){const Ua=Xe[ei];pt.update(Ua,xn),pt.bind(Ua,xn)}}return xn}function Jn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function $n(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,et){const $=L.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),L.get(R.texture).__webglTexture=j,L.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:et,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const et=L.get(R);et.__webglFramebuffer=j,et.__useDefaultFramebuffer=j===void 0};const ci=q.createFramebuffer();this.setRenderTarget=function(R,j=0,et=0){W=R,nt=j,ct=et;let $=null,tt=!1,Ht=!1;if(R){const zt=L.get(R);if(zt.__useDefaultFramebuffer!==void 0){Pt.bindFramebuffer(q.FRAMEBUFFER,zt.__webglFramebuffer),rt.copy(R.viewport),dt.copy(R.scissor),Tt=R.scissorTest,Pt.viewport(rt),Pt.scissor(dt),Pt.setScissorTest(Tt),I=-1;return}else if(zt.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(zt.__hasExternalTextures)b.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&L.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ht=!0);const Yt=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[j])?$=Yt[j][et]:$=Yt[j],tt=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?$=L.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?$=Yt[et]:$=Yt,rt.copy(R.viewport),dt.copy(R.scissor),Tt=R.scissorTest}else rt.copy(Mt).multiplyScalar(Nt).floor(),dt.copy(Dt).multiplyScalar(Nt).floor(),Tt=te;if(et!==0&&($=ci),Pt.bindFramebuffer(q.FRAMEBUFFER,$)&&Pt.drawBuffers(R,$),Pt.viewport(rt),Pt.scissor(dt),Pt.setScissorTest(Tt),tt){const zt=L.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,et)}else if(Ht){const zt=j;for(let Kt=0;Kt<R.textures.length;Kt++){const Yt=L.get(R.textures[Kt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Kt,Yt.__webglTexture,et,zt)}}else if(R!==null&&et!==0){const zt=L.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zt.__webglTexture,et)}I=-1},this.readRenderTargetPixels=function(R,j,et,$,tt,Ht,qt,zt=0){if(!(R&&R.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){Pt.bindFramebuffer(q.FRAMEBUFFER,Kt);try{const Yt=R.textures[zt],Jt=Yt.format,oe=Yt.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+zt),!Le.textureFormatReadable(Jt)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(oe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-$&&et>=0&&et<=R.height-tt&&q.readPixels(j,et,$,tt,X.convert(Jt),X.convert(oe),Ht)}finally{const Yt=W!==null?L.get(W).__webglFramebuffer:null;Pt.bindFramebuffer(q.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,j,et,$,tt,Ht,qt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(j>=0&&j<=R.width-$&&et>=0&&et<=R.height-tt){Pt.bindFramebuffer(q.FRAMEBUFFER,Kt);const Yt=R.textures[zt],Jt=Yt.format,oe=Yt.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+zt),!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,$t),q.bufferData(q.PIXEL_PACK_BUFFER,Ht.byteLength,q.STREAM_READ),q.readPixels(j,et,$,tt,X.convert(Jt),X.convert(oe),0);const fe=W!==null?L.get(W).__webglFramebuffer:null;Pt.bindFramebuffer(q.FRAMEBUFFER,fe);const cn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ib(q,cn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,$t),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ht),q.deleteBuffer($t),q.deleteSync(cn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,et=0){const $=Math.pow(2,-et),tt=Math.floor(R.image.width*$),Ht=Math.floor(R.image.height*$),qt=j!==null?j.x:0,zt=j!==null?j.y:0;b.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,qt,zt,tt,Ht),Pt.unbindTexture()};const qe=q.createFramebuffer(),Da=q.createFramebuffer();this.copyTextureToTexture=function(R,j,et=null,$=null,tt=0,Ht=0){let qt,zt,Kt,Yt,Jt,oe,$t,fe,cn;const Je=R.isCompressedTexture?R.mipmaps[Ht]:R.image;if(et!==null)qt=et.max.x-et.min.x,zt=et.max.y-et.min.y,Kt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,Jt=et.min.y,oe=et.isBox3?et.min.z:0;else{const sn=Math.pow(2,-tt);qt=Math.floor(Je.width*sn),zt=Math.floor(Je.height*sn),R.isDataArrayTexture?Kt=Je.depth:R.isData3DTexture?Kt=Math.floor(Je.depth*sn):Kt=1,Yt=0,Jt=0,oe=0}$!==null?($t=$.x,fe=$.y,cn=$.z):($t=0,fe=0,cn=0);const ke=X.convert(j.format),Be=X.convert(j.type);let jt;j.isData3DTexture?(b.setTexture3D(j,0),jt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),jt=q.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),jt=q.TEXTURE_2D),Pt.activeTexture(q.TEXTURE0),Pt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),Pt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Pt.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const hn=Pt.getParameter(q.UNPACK_ROW_LENGTH),be=Pt.getParameter(q.UNPACK_IMAGE_HEIGHT),xn=Pt.getParameter(q.UNPACK_SKIP_PIXELS),ti=Pt.getParameter(q.UNPACK_SKIP_ROWS),xi=Pt.getParameter(q.UNPACK_SKIP_IMAGES);Pt.pixelStorei(q.UNPACK_ROW_LENGTH,Je.width),Pt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Je.height),Pt.pixelStorei(q.UNPACK_SKIP_PIXELS,Yt),Pt.pixelStorei(q.UNPACK_SKIP_ROWS,Jt),Pt.pixelStorei(q.UNPACK_SKIP_IMAGES,oe);const Vn=R.isDataArrayTexture||R.isData3DTexture,He=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const sn=L.get(R),Si=L.get(j),Xe=L.get(sn.__renderTarget),ei=L.get(Si.__renderTarget);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Yi=0;Yi<Kt;Yi++)Vn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(R).__webglTexture,tt,oe+Yi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(j).__webglTexture,Ht,cn+Yi)),q.blitFramebuffer(Yt,Jt,qt,zt,$t,fe,qt,zt,q.DEPTH_BUFFER_BIT,q.NEAREST);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||L.has(R)){const sn=L.get(R),Si=L.get(j);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,qe),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Da);for(let Xe=0;Xe<Kt;Xe++)Vn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,sn.__webglTexture,tt,oe+Xe):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,sn.__webglTexture,tt),He?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Si.__webglTexture,Ht,cn+Xe):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Si.__webglTexture,Ht),tt!==0?q.blitFramebuffer(Yt,Jt,qt,zt,$t,fe,qt,zt,q.COLOR_BUFFER_BIT,q.NEAREST):He?q.copyTexSubImage3D(jt,Ht,$t,fe,cn+Xe,Yt,Jt,qt,zt):q.copyTexSubImage2D(jt,Ht,$t,fe,Yt,Jt,qt,zt);Pt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else He?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(jt,Ht,$t,fe,cn,qt,zt,Kt,ke,Be,Je.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(jt,Ht,$t,fe,cn,qt,zt,Kt,ke,Je.data):q.texSubImage3D(jt,Ht,$t,fe,cn,qt,zt,Kt,ke,Be,Je):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ht,$t,fe,qt,zt,ke,Be,Je.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ht,$t,fe,Je.width,Je.height,ke,Je.data):q.texSubImage2D(q.TEXTURE_2D,Ht,$t,fe,qt,zt,ke,Be,Je);Pt.pixelStorei(q.UNPACK_ROW_LENGTH,hn),Pt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,be),Pt.pixelStorei(q.UNPACK_SKIP_PIXELS,xn),Pt.pixelStorei(q.UNPACK_SKIP_ROWS,ti),Pt.pixelStorei(q.UNPACK_SKIP_IMAGES,xi),Ht===0&&j.generateMipmaps&&q.generateMipmap(jt),Pt.unbindTexture()},this.initRenderTarget=function(R){L.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){nt=0,ct=0,W=null,Pt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pe._getUnpackColorSpace()}}class Go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FR=new _f(-1,1,1,-1,0,1);class zR extends Qn{constructor(){super(),this.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yn([0,2,0,0,2,0],2))}}const BR=new zR;class cf{constructor(t){this._mesh=new Wi(BR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},np={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class HR extends Go{constructor(t=.96){super(),this.uniforms=br.clone(np.uniforms),this.damp=t,this.compFsMaterial=new In({uniforms:this.uniforms,vertexShader:np.vertexShader,fragmentShader:np.fragmentShader}),this.copyFsMaterial=new In({uniforms:br.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,blending:_a,depthTest:!1,depthWrite:!1}),this._textureComp=new li(window.innerWidth,window.innerHeight,{magFilter:Pn,type:di}),this._textureOld=new li(window.innerWidth,window.innerHeight,{magFilter:Pn,type:di}),this._compFsQuad=new cf(this.compFsMaterial),this._copyFsQuad=new cf(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(t){this.uniforms.damp.value=t}render(t,i,s){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=s.texture,t.setRenderTarget(this._textureComp),this._compFsQuad.render(t),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this._copyFsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(),this._copyFsQuad.render(t));const l=this._textureOld;this._textureOld=this._textureComp,this._textureComp=l}setSize(t,i){this._textureComp.setSize(t,i),this._textureOld.setSize(t,i)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}class nm extends Go{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof In?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=br.clone(t.uniforms),this.material=new In({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new cf(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Tx extends Go{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class GR extends Go{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class VR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new _e);this._width=s.width,this._height=s.height,i=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nm(xr),this.copyPass.material.blending=_a,this.timer=new BE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Tx!==void 0&&(f instanceof Tx?s=!0:f instanceof GR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kR extends Go{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const XR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zo extends Go{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new _e(t.x,t.y):new _e(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new li(c,f,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new li(c,f,{type:di});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new li(c,f,{type:di});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const d=XR;this.highPassUniforms=br.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new _e(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=br.clone(xr.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,premultipliedAlpha:!0,blending:Vs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new gf,this._fsQuad=new cf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new _e(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=zo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=zo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new In({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new In({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}zo.BlurDirectionX=new _e(1,0);zo.BlurDirectionY=new _e(0,1);const WR={name:"RGBShiftShader",uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ri=124,na=76,hr=ri*na,uf=.82,Ax=.15,im=.34,Ql=10,ip=Ql+im*.3,ff=-15,hf=(ri-1)*uf/2,nc=(na-1)*uf/2,ic=Math.sqrt(hf*hf+nc*nc),ze=nc*1.05,YR=.82,Rx=ze*4.75,df=ze+Ql*3.05+28,qR=1.18,jR=.66,PS=df*.08,ZR=df*.09,wx=.0048,KR=new K(0,1,0),Hl=ze*1.75,Cx=ze*.72,QR=68,am=1.65,Dx=7.2,Ux=8,ap=7,Gl=220,Nx=hf*2.45,Lx=nc*2.1,Ox=5,sp=260,JR=ic*.13,$R=hf*2.65,tw=nc*2.35,ew=.085,nw=.76,iw=.028,aw=.12,dr=3e3,sw=60,rw=.95,ow=.94,lw=.48,rp=9999,Bu=new pe(526344),ts=[new pe(4359668),new pe(15352629),new pe(16497669),new pe(3450963)],cw={uniforms:{tDiffuse:{value:null},time:{value:0},strength:{value:0},bass:{value:0},mid:{value:0},treble:{value:0},beat:{value:0}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float strength;
    uniform float bass;
    uniform float mid;
    uniform float treble;
    uniform float beat;
    varying vec2 vUv;

    void main() {
      vec2 centered = vUv - 0.5;
      float dist = length(centered);
      float angle = atan(centered.y, centered.x);
      float edgeReach = smoothstep(0.15, 0.78, dist);
      vec2 radialDirection = centered / max(dist, 0.001);
      vec2 tangentDirection = vec2(-radialDirection.y, radialDirection.x);

      float radialWave = sin(dist * 44.0 - time * (2.1 + bass * 8.5) + beat * 4.0);
      float diagonalWave = sin(vUv.x * 15.0 + vUv.y * 19.0 + time * (1.4 + mid * 5.6));
      float swirlWave = sin(angle * 4.0 + dist * 28.0 - time * (1.7 + treble * 7.0));

      vec2 offset =
        radialDirection * radialWave * strength * (0.35 + edgeReach * 0.95) +
        tangentDirection * swirlWave * strength * 0.58 +
        vec2(diagonalWave, -diagonalWave) * strength * 0.26;

      vec4 color = texture2D(tDiffuse, vUv + offset);
      vec4 echo = texture2D(tDiffuse, vUv - offset * (1.55 + beat * 1.35));
      vec3 edgeBlue = vec3(0.2588, 0.5216, 0.9569);
      vec3 edgeRed = vec3(0.9176, 0.2627, 0.2078);
      vec3 edgeGold = vec3(0.9843, 0.7373, 0.0196);
      vec3 edgeGreen = vec3(0.2039, 0.6588, 0.3255);
      vec3 edgeTint = mix(mix(edgeBlue, edgeRed, 0.5 + 0.5 * sin(time * 0.31)), mix(edgeGold, edgeGreen, 0.5 + 0.5 * cos(time * 0.27)), 0.5 + 0.5 * sin(angle * 2.0 + time * 0.22));
      float edgeGlow = smoothstep(0.36, 0.82, dist) * (0.018 + bass * 0.14 + treble * 0.11 + beat * 0.16 + strength * 22.0);
      vec4 mixedColor = mix(color, echo, 0.07 + beat * 0.08);
      mixedColor.rgb = max(vec3(0.0), (mixedColor.rgb - vec3(0.018)) * (0.92 + beat * 0.22 + treble * 0.1));
      mixedColor.rgb += edgeTint * edgeGlow;
      gl_FragColor = mixedColor;
    }
  `},op={uniforms:{time:{value:0},bass:{value:0},lowMid:{value:0},mid:{value:0},highMid:{value:0},treble:{value:0},volume:{value:0},beat:{value:0},colorA:{value:new pe(4359668)},colorB:{value:new pe(15352629)},colorC:{value:new pe(16497669)}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform float bass;
    uniform float lowMid;
    uniform float mid;
    uniform float highMid;
    uniform float treble;
    uniform float volume;
    uniform float beat;
    uniform vec3 colorA;
    uniform vec3 colorB;
    uniform vec3 colorC;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 centered = vUv - 0.5;
      float dist = length(centered);
      float angle = atan(centered.y, centered.x);
      vec2 flowUv = centered * (3.0 + lowMid * 2.4);
      float swirl = sin(angle * (5.0 + highMid * 5.0) + dist * (26.0 + bass * 18.0) - time * (1.1 + treble * 3.8));
      float cells = noise(flowUv * 3.0 + vec2(time * (0.18 + bass * 0.42), -time * (0.12 + mid * 0.38)));
      float filaments = sin((vUv.x + cells * 0.18) * 34.0 + time * (1.8 + treble * 5.5)) *
        cos((vUv.y - cells * 0.16) * 26.0 - time * (1.2 + highMid * 4.0));
      float ellipseDist = length(centered / vec2(0.52, 0.4));
      float ovalMask = 1.0 - smoothstep(0.72, 1.0, ellipseDist);
      float borderMask =
        smoothstep(0.0, 0.14, vUv.x) *
        smoothstep(0.0, 0.14, 1.0 - vUv.x) *
        smoothstep(0.0, 0.18, vUv.y) *
        smoothstep(0.0, 0.18, 1.0 - vUv.y);
      float glowMask = ovalMask * borderMask;
      float edgeEnergy = smoothstep(0.18, 0.62, dist) * (1.0 - smoothstep(0.58, 0.82, dist));
      float coreEnergy = 1.0 - smoothstep(0.04, 0.62, dist);
      float plasma = smoothstep(0.16, 1.0, cells * 0.62 + filaments * 0.22 + swirl * 0.18 + beat * 0.25);
      plasma = pow(plasma, 1.28);
      vec3 color = mix(colorA, colorB, 0.5 + 0.5 * sin(time * 0.34 + plasma * 2.4 + angle));
      color = mix(color, colorC, 0.32 + 0.35 * sin(dist * 16.0 - time * 0.47 + treble * 2.0));
      float alpha = (0.026 + volume * 0.16 + beat * 0.18) * plasma;
      alpha += edgeEnergy * (0.018 + highMid * 0.1 + treble * 0.12 + beat * 0.05);
      alpha += coreEnergy * bass * 0.05;
      alpha *= glowMask;

      if (alpha < 0.001) {
        discard;
      }

      gl_FragColor = vec4(color * (0.56 + volume * 1.8 + beat * 1.45 + plasma * 0.68), alpha);
    }
  `};function An(r){return Math.min(1,Math.max(0,r))}function sm(r,t,i){const s=An((i-r)/(t-r));return s*s*(3-2*s)}function uw(r){const t=r.getBoundingClientRect();return{width:Math.max(1,Math.floor(t.width||window.innerWidth)),height:Math.max(1,Math.floor(t.height||window.innerHeight))}}function fw(r,t,i){const s=r/t,l=sf.degToRad(i),c=2*Math.atan(Math.tan(l/2)*s),f=An((1-s)/.72),d=Math.max(jR,.82-f*.12),m=df/Math.tan(l/2)/d,p=df/Math.tan(c/2),_=Math.max(m,p)*qR,v=-(PS+f*ZR);return{distance:_,targetY:v}}function Px(r,t){return r/Math.max(.35,t)}function Sr(r,t,i=0,s){const l=t+i,c=l-Math.floor(l);if(s){const p=.34+Math.pow(.5+.5*Math.sin(c*Math.PI*2),1.15)*1.28;r.copy(s).multiplyScalar(p);return}const f=c*ts.length,d=Math.floor(f)%ts.length,m=(d+1)%ts.length;r.copy(ts[d]).lerp(ts[m],f-d)}function Ix(r,t){const i=Math.min(r.length-1,Math.max(0,Math.floor(t*r.length)));return r[i]??0}function IS(r){return r-Math.floor(r)}function Fx(r,t,i){return IS(Math.sin(r*12.9898+t*78.233+i*37.719)*43758.5453)}function ki(r,t,i,s,l,c){const f=new K(s,l,c).normalize(),d=new K(r,t,i);return d.lengthSq()<=1e-6?d.copy(f):d.normalize(),{baseX:r,baseY:t,baseZ:i,normalX:f.x,normalY:f.y,normalZ:f.z,longitude:Math.atan2(d.x,d.z),latitude:Math.asin(sf.clamp(d.y,-1,1)),orientation:new Tr().setFromUnitVectors(KR,f)}}function hw(r,t){const i=Math.cos(t),s=Math.sin(r)*i,l=Math.sin(t),c=Math.cos(r)*i;return ki(s*ze,l*ze,c*ze,s,l,c)}function dw(r,t){const i=(t+.5)/na*6,s=Math.min(5,Math.floor(i)),l=(r+.5)/ri*2-1,c=(i-s)*2-1,f=ze*.68;switch(s){case 0:return ki(l*f,c*f,f,0,0,1);case 1:return ki(f,c*f,-l*f,1,0,0);case 2:return ki(-l*f,c*f,-f,0,0,-1);case 3:return ki(-f,c*f,l*f,-1,0,0);case 4:return ki(l*f,f,-c*f,0,1,0);default:return ki(l*f,-f,c*f,0,-1,0)}}function pw(r,t){const i=ze*1.12,s=[new K(1,1,1).normalize().multiplyScalar(i),new K(-1,-1,1).normalize().multiplyScalar(i),new K(-1,1,-1).normalize().multiplyScalar(i),new K(1,-1,-1).normalize().multiplyScalar(i)],l=[[0,1,2],[0,3,1],[0,2,3],[1,3,2]],c=(t+.5)/na*l.length,f=Math.min(l.length-1,Math.floor(c));let d=(r+.5)/ri,m=c-f;d+m>1&&(d=1-d,m=1-m);const[p,_,v]=l[f],g=s[p],y=s[_],T=s[v],D=new K().copy(g).multiplyScalar(1-d-m).addScaledVector(y,d).addScaledVector(T,m),M=new K().copy(g).add(y).add(T).normalize();return ki(D.x,D.y,D.z,M.x,M.y,M.z)}function mw(r,t){const i=(r+.5)/ri*Math.PI*2,s=((t+.5)/na*2-1)*ze*.38,l=ze*.82,c=i*.5,f=Math.sin(i),d=Math.cos(i),m=Math.sin(c),p=Math.cos(c),_=l+s*p,v=_*f,g=s*m,y=_*d,T=new K(-s*.5*m*f+_*d,s*.5*p,-s*.5*m*d-_*f),D=new K(p*f,m,p*d),M=new K().crossVectors(D,T).normalize();return M.lengthSq()<=1e-6&&M.set(v,g,y).normalize(),ki(v,g,y,M.x,M.y,M.z)}function gw(r,t){const i=(r+.5)/ri,s=(t+.5)/na,l=Math.PI*2,c=3.85,f=ze*2.52,d=ze*.64,m=ze*.062,p=.22,_=18,v=f/(c*l),g=mt=>(mt*c+.04)*l,y=mt=>(.5-mt)*f,T=(mt,Mt)=>{const Dt=g(mt)+Mt;return new K(Math.sin(Dt)*d,y(mt),Math.cos(Dt)*d)},D=(mt,Mt)=>{const Dt=g(mt)+Mt;return new K(Math.sin(Dt),0,Math.cos(Dt)).normalize()},M=(mt,Mt)=>{const Dt=g(mt)+Mt;return new K(Math.cos(Dt)*d,-v,-Math.sin(Dt)*d).normalize()},x=(mt,Mt)=>new K().crossVectors(M(mt,Mt),D(mt,Mt)).normalize();if(i<p||i>1-p){const mt=i>1-p,Mt=mt?(i-(1-p))/p:i/p,Dt=mt?Math.PI:0,te=Mt*l+Math.sin(s*_*l)*.18,ie=T(s,Dt),Ie=D(s,Dt),wt=x(s,Dt),Et=.92+Math.pow(.5+.5*Math.cos(s*_*l),3)*.26,Ct=new K().copy(Ie).multiplyScalar(Math.cos(te)).addScaledVector(wt,Math.sin(te)).normalize(),ne=ie.addScaledVector(Ct,m*Et);return ki(ne.x,ne.y,ne.z,Ct.x,Ct.y,Ct.z)}const A=(i-p)/(1-p*2),U=s*_,C=(Math.floor(U)+.5)/_,z=Math.abs(IS(U)-.5)*2,N=1-sm(.18,.58,z),P=T(C,0),E=T(C,Math.PI),O=D(C,0),k=D(C,Math.PI),G=new K(-O.z,0,O.x).normalize(),Y=new K().copy(P).addScaledVector(O,-m*.55),nt=new K().copy(E).addScaledVector(k,-m*.55),ct=Math.sin(A*Math.PI),W=new K().copy(Y).lerp(nt,A).addScaledVector(G,ct*m*.52),I=new K().copy(G).multiplyScalar(.68).addScaledVector(A<.5?O:k,.42).normalize(),H=A<.5?0:Math.PI,rt=A<.5?A/.5:(A-.5)/.5,dt=T(s,H),Tt=D(s,H),B=x(s,H),Q=(rt-.5)*Math.PI,_t=new K().copy(Tt).multiplyScalar(Math.cos(Q)).addScaledVector(B,Math.sin(Q)*.82).normalize(),Nt=dt.addScaledVector(_t,m*1.18).addScaledVector(M(s,H),(rt-.5)*m*1.1).lerp(W,N),it=_t.lerp(I,N).normalize();return ki(Nt.x,Nt.y,Nt.z,it.x,it.y,it.z)}function _w(r,t){const i=(r+.5)/ri,s=(t+.5)/na,l=Math.PI*2,c=(x,A,U,C,z,N,P=0)=>{const E=Math.cos(C),O=Math.sin(C),k=x+E*z,G=U+O*N,Y=new K(E/Math.max(z,.001),P,O/Math.max(N,.001)).normalize();return ki(k,A,G,Y.x,Y.y,Y.z)};if(s<.18){const x=s/.18,A=i*l,U=(x*.9+.05)*Math.PI,C=Math.sin(U),z=Math.cos(U),N=ze*.31,P=ze*.35,E=ze*.29,O=ze*.9,k=Math.cos(A)*N*C,G=O+z*P,Y=Math.sin(A)*E*C,nt=new K(Math.cos(A)*C/N,z/P,Math.sin(A)*C/E).normalize();return ki(k,G,Y,nt.x,nt.y,nt.z)}if(s<.24){const x=(s-.18)/.06,A=i*l,U=ze*.18,C=ze*.16,z=ze*(.59-x*.18);return c(0,z,0,A,U,C,-.08)}if(s<.58){const x=(s-.24)/.34,A=i<.18?-1:i>.82?1:0;if(A!==0){const O=A<0?i/.18:(i-.82)/.18,k=x,G=O*l,Y=ze*(.1+Math.sin(k*Math.PI)*.035),nt=ze*(.095+Math.sin(k*Math.PI)*.025),ct=A*ze*(.58+k*.12),W=ze*(.42-k*.82);return c(ct,W,0,G,Y,nt,-.08)}const C=(i-.18)/.64*l,z=ze*(.47-x*.14+Math.sin(x*Math.PI)*.07),N=ze*(.25+Math.sin(x*Math.PI)*.05),P=ze*(.43-x*.85),E=(.5-x)*.1;return c(0,P,0,C,z,N,E)}const f=(s-.58)/.42,d=i>=.5,p=(d?(i-.5)*2:i*2)*l,_=d?1:-1,v=ze*(.18-f*.035),g=ze*(.15-f*.025),y=ze*(.16+f*.08),T=ze*(-.48-f*.95),D=sm(.78,1,f)*ze*.13,M=sm(.78,1,f)*_*ze*.16;return c(_*y+M,T,0,p,v+D,g+D*.45,-.04)}function vw(r,t,i){const s=[];let l=0;for(let c=0;c<na;c+=1)for(let f=0;f<ri;f+=1){const d=(f-(ri-1)/2)*uf,m=(c-(na-1)/2)*uf,p=f/ri*Math.PI*2+Math.PI,v=(.5-(c+.5)/na)*Math.PI,g=hw(p,v),y=dw(f,c),T=pw(f,c),D=mw(f,c),M=gw(f,c),x=_w(f,c),A=Fx(f,c,g.normalZ*17),U=.18+Math.pow(An(.5+.5*Math.cos(v*3.2)*Math.cos(p*2)),1.55)*.82,C=.18+Math.pow(An(.5+.5*Math.sin(v*4.1+p*2.5)),1.4)*.82,z=.18+Math.pow(An(.5+.5*Math.cos(p*5.5-v*2.8)),1.35)*.82,N=.18+Math.pow(An(.5+.5*Math.sin(p*7.5+v*5.2)),1.55)*.82,P=.16+Math.pow(An(.5+.5*Math.sin(p*13-v*9+A*Math.PI*2)),1.75)*.84,E={x:d,y:m,baseX:g.baseX,baseY:g.baseY,baseZ:g.baseZ,normalX:g.normalX,normalY:g.normalY,normalZ:g.normalZ,longitude:g.longitude,latitude:g.latitude,orientation:g.orientation.clone(),surfaces:{sphere:g,cube:y,tetrahedron:T,mobius:D,doubleHelix:M,human:x},bassAffinity:U,lowMidAffinity:C,midAffinity:z,highMidAffinity:N,trebleAffinity:P,beatAffinity:.35+Fx(f*.37,c*.61,4.7)*.65,resonancePhase:A*Math.PI*2,centerDistance:Math.sqrt(d*d+m*m),normalizedX:f/(ri-1),normalizedY:c/(na-1),currentZ:ff,targetZ:ff,velocityZ:0,currentColor:Bu.clone(),targetColor:Bu.clone()};s.push(E),i.position.set(E.baseX,E.baseY,E.baseZ),i.quaternion.copy(E.orientation),i.updateMatrix(),r.setMatrixAt(l,i.matrix),r.setColorAt(l,Bu),i.position.set(E.baseX+E.normalX*ip,E.baseY+E.normalY*ip,E.baseZ+E.normalZ*ip),i.updateMatrix(),t.setMatrixAt(l,i.matrix),t.setColorAt(l,Bu),l+=1}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),s}function xw(r){const t=new Qn,i=new Float32Array(dr*3),s=new Float32Array(dr*3),l=new Float32Array(dr*3),c=new Float32Array(dr),f=T=>{const D=T*3;i[D]=rp,i[D+1]=rp,i[D+2]=rp};for(let T=0;T<dr;T+=1)f(T),s[T*3]=1,s[T*3+1]=1,s[T*3+2]=1,c[T]=-1;const d=new mi(i,3),m=new mi(s,3);t.setAttribute("position",d),t.setAttribute("color",m);const p=new MS({size:.42,vertexColors:!0,transparent:!0,opacity:.74,blending:Vs,depthWrite:!1}),_=new EE(t,p);return r.add(_),{trigger:(T,D)=>{const M=.65+T*.55;for(let x=0;x<dr;x+=1){const A=x*3;i[A]=(Math.random()-.5)*2,i[A+1]=(Math.random()-.5)*2,i[A+2]=0;const U=D??ts[Math.floor(Math.random()*ts.length)],C=1.05+T*1.35+Math.random()*.75;s[A]=U.r*C,s[A+1]=U.g*C,s[A+2]=U.b*C;const z=2*Math.PI*Math.random(),N=Math.acos(2*Math.random()-1),P=(48+Math.random()*105)*M;l[A]=Math.sin(N)*Math.cos(z)*P,l[A+1]=Math.sin(N)*Math.sin(z)*P,l[A+2]=Math.abs(Math.cos(N))*P*1.45+40,c[x]=.75+T*.45}d.needsUpdate=!0,m.needsUpdate=!0},update:T=>{let D=!1,M=!1;const x=T*60,A=Math.pow(rw,x),U=Math.pow(ow,x);for(let C=0;C<dr;C+=1){if(c[C]<=0)continue;const z=C*3;c[C]-=lw*T,l[z+1]-=sw*T,l[z]*=A,l[z+1]*=A,l[z+2]*=A,i[z]+=l[z]*T,i[z+1]+=l[z+1]*T,i[z+2]+=l[z+2]*T,s[z]*=U,s[z+1]*=U,s[z+2]*=U,c[C]<=0&&(c[C]=-1,f(C)),D=!0,M=!0}D&&(d.needsUpdate=!0),M&&(m.needsUpdate=!0)},dispose:()=>{r.remove(_),t.dispose(),p.dispose()}}}function Sw(r){const t=new pe,i=new pe,s=new pe,l=new sc($R,tw),c=new In({uniforms:br.clone(op.uniforms),vertexShader:op.vertexShader,fragmentShader:op.fragmentShader,transparent:!0,blending:Vs,depthWrite:!1,depthTest:!0,side:Ta}),f=new Wi(l,c);return f.position.z=-18,f.renderOrder=2,f.frustumCulled=!1,r.add(f),{update:(p,_,v=0,g)=>{const y=p/1e3;f.rotation.z=Math.sin(y*.08)*(.025+_.lowMid*.03),f.scale.setScalar(1+_.volume*.025+_.beatEnergy*.035),c.uniforms.time.value=y,c.uniforms.bass.value=_.bass,c.uniforms.lowMid.value=_.lowMid,c.uniforms.mid.value=_.mid,c.uniforms.highMid.value=_.highMid,c.uniforms.treble.value=_.treble,c.uniforms.volume.value=_.volume,c.uniforms.beat.value=_.beatEnergy,Sr(t,y*.055+_.bass*.18,v,g),Sr(i,y*.071+.31+_.highMid*.2,v,g),Sr(s,y*.047+.62+_.treble*.22,v,g),c.uniforms.colorA.value.copy(t).multiplyScalar(.9+_.volume*1.4),c.uniforms.colorB.value.copy(i).multiplyScalar(.75+_.highMid*1.6+_.beatEnergy*.7),c.uniforms.colorC.value.copy(s).multiplyScalar(.68+_.treble*1.8+_.beatEnergy*.65)},dispose:()=>{r.remove(f),l.dispose(),c.dispose()}}}function Mw(r){const t=new Uo,i=[],s=[],l=new pe;t.renderOrder=5,r.add(t);for(let d=0;d<ap;d+=1){const m=new Qn,p=new Float32Array(Gl*3),_=new mi(p,3),v=-Lx/2+d/Math.max(1,ap-1)*Lx,g=new Jp({color:16777215,transparent:!0,opacity:.08,blending:Vs,depthWrite:!1,depthTest:!1}),y=new SS(m,g);for(let T=0;T<Gl;T+=1){const D=T*3,M=T/Math.max(1,Gl-1);p[D]=(M-.5)*Nx,p[D+1]=v,p[D+2]=2}m.setAttribute("position",_),y.frustumCulled=!1,t.add(y),i.push({positions:p,positionAttribute:_,material:g,baseY:v,phase:d*.81})}for(let d=0;d<Ox;d+=1){const m=new Qn,p=new Float32Array(sp*3),_=new mi(p,3),v=new Jp({color:16777215,transparent:!0,opacity:.07,blending:Vs,depthWrite:!1,depthTest:!1}),g=new bE(m,v);m.setAttribute("position",_),g.frustumCulled=!1,t.add(g),s.push({positions:p,positionAttribute:_,material:v,baseRadius:ic*.78+d*JR,phase:d*1.17})}return{update:(d,m,p=0,_)=>{const v=d/1e3;for(let g=0;g<i.length;g+=1){const y=i[g],T=y.positions,M=1-Math.abs(g-(i.length-1)/2)/Math.max(1,i.length-1)*.45,x=v*(.65+m.lowMid*2.2+g*.035);for(let A=0;A<Gl;A+=1){const U=A*3,C=A/Math.max(1,Gl-1),z=(C-.5)*Nx,N=Ix(m.waveform,C),P=Ix(m.spectrum,C),E=Math.sin(z*.075-x+y.phase)*(1.35+m.lowMid*7.2),O=Math.sin(z*.22+v*(2.1+m.treble*8.5)+y.phase)*(m.treble*4.2+m.highMid*1.8);T[U]=z,T[U+1]=y.baseY+E+O+N*(2.4+m.volume*9.5)+Math.sin(v*.52+y.phase)*m.beatEnergy*5.5,T[U+2]=4.5+P*(9.5+m.highMid*9)+N*(4.2+m.volume*8.5)+Math.sin(z*.052+x)*(1.2+m.mid*4.5)+m.beatEnergy*3.2}y.positionAttribute.needsUpdate=!0,y.material.opacity=Math.min(.42,(.045+m.volume*.18+m.beatEnergy*.08)*M),Sr(l,g/ap+v*.045+m.treble*.16,p,_),y.material.color.copy(l).multiplyScalar(.85+m.volume*1.55)}for(let g=0;g<s.length;g+=1){const y=s[g],T=y.positions,D=Math.sin(v*(.56+m.lowMid*1.8)+y.phase)*(2+m.lowMid*10)+m.beatEnergy*(3+g*1.2),M=(y.baseRadius+D)*(1+m.volume*.08),x=1.3+m.highMid*.08,A=.86+m.mid*.05;for(let U=0;U<sp;U+=1){const C=U*3,z=U/sp*Math.PI*2,N=Math.sin(z*6+v*(1.8+m.treble*6.4)+y.phase)*(1.1+m.treble*8+m.beatEnergy*3);T[C]=Math.cos(z)*(M*x+N),T[C+1]=Math.sin(z)*(M*A+N*.72),T[C+2]=-2+Math.sin(z*3-v*(1.25+m.mid*4.2)+y.phase)*(1.4+m.mid*5)+m.beatEnergy*4}y.positionAttribute.needsUpdate=!0,y.material.opacity=Math.min(.34,.038+m.volume*.1+m.beatEnergy*.075),Sr(l,g/Ox+v*.035+m.lowMid*.18,p,_),y.material.color.copy(l).multiplyScalar(.72+m.volume*1.2)}},dispose:()=>{r.remove(t);for(const d of i)d.positionAttribute.array=new Float32Array(0),d.material.dispose();for(const d of s)d.positionAttribute.array=new Float32Array(0),d.material.dispose();t.traverse(d=>{var p;(p=d.geometry)==null||p.dispose()})}}}function yw(r,t,i){let s=0;for(const l of i){const c=(t-l.startedAt)/1e3;if(c<0||c>am)continue;const f=c*QR,d=r-f;if(Math.abs(d)<=Dx){const m=1-c/am;s+=Math.cos(d*Math.PI/(Dx*2))*l.strength*7*m}}return s}function bw(r,t,i,s,l,c){const f=.38+An(r.centerDistance/ic)*.72,d=Math.sin(r.centerDistance*.17-t*(2.25+i.bass*6.4))*(i.bass*5.8+i.beatEnergy*3.2)*f,m=Math.sin(r.x*.085+r.y*.13-t*(1.35+i.lowMid*4.6))*(i.lowMid*5.2+i.volume*2.2)*f,p=Math.sin((r.x-r.y)*.105+t*(1.7+i.highMid*5.2)+l*2.6)*(i.highMid*3.9+i.treble*2.4)*(.48+f*.52),_=Math.sin(r.y*.2+t*(1.4+i.mid*3.8)+s*3.2)*l*(3.5+i.volume*7.2),v=Math.sin((r.normalizedX-r.normalizedY)*Math.PI*5+t*(1.1+i.treble*4.4))*c*(2.3+i.highMid*5.2);return d+m+p+_+v}function Ew(r,t={}){const i=zs(),s=new dE,l=new bm(0,wx);s.fog=l;const c=new Vi(45,1,.1,1e3);c.position.set(0,0,Rx);const f=new IR({antialias:!0,alpha:!0});f.outputColorSpace=Hi,f.toneMapping=fm,f.toneMappingExposure=1.08,f.setClearColor(0,1),f.domElement.style.display="block",f.domElement.style.width="100%",f.domElement.style.height="100%",f.domElement.style.cursor="grab",f.domElement.style.touchAction="none",f.domElement.setAttribute("aria-hidden","true"),r.appendChild(f.domElement);const d=new VR(f),m=new kR(s,c),p=new nm(cw),_=new zo(new _e(1,1),.22,.52,.82),v=new nm(WR),g=new HR;p.uniforms.strength.value=0,v.uniforms.amount.value=.008,v.uniforms.angle.value=0,g.uniforms.damp.value=.94,d.addPass(m),d.addPass(p),d.addPass(_),d.addPass(v),d.addPass(g),s.add(new IE(16777215,.74));const y=new PE(16777215,1.08);y.position.set(0,-10,48),s.add(y);const T=new $v(16777215,3.2,150);T.position.set(0,0,44),s.add(T);const D=ts.map((wt,Et)=>{const Ct=new $v(wt,1.4,Hl*2.6,1.45),ne=Et/ts.length*Math.PI*2;return Ct.position.set(Math.cos(ne)*Hl,Math.sin(ne*1.7)*Cx,Math.sin(ne)*Hl),s.add(Ct),Ct}),M=new Uo;s.add(M);const x=new Am(Ax,Ax,Ql,8);x.translate(0,Ql/2,0);const A=new wm(im,2),U=new DE({color:16777215,emissive:16777215,emissiveIntensity:.04,metalness:.9,roughness:.3}),C=new gf({color:16777215,transparent:!0,opacity:.86,blending:Vs,depthWrite:!1,toneMapped:!1}),z=new kv(x,U,hr);z.frustumCulled=!1,z.instanceColor=new rf(new Float32Array(hr*3),3),M.add(z);const N=new kv(A,C,hr);N.frustumCulled=!1,N.instanceColor=new rf(new Float32Array(hr*3),3),M.add(N);const P=new Fn,E=vw(z,N,P),O=new Float32Array(hr),k=xw(s),G=Sw(s),Y=Mw(s),nt=[],ct=new pe;let W=performance.now(),I=0,H=!1,rt=!1,dt=Rx,Tt=-PS,B=0,Q=0,_t=null,Ut=0,Nt=0;const it=wt=>{if(_t===wt.pointerId){try{f.domElement.releasePointerCapture(wt.pointerId)}catch{}_t=null,f.domElement.style.cursor="grab",wt.preventDefault()}},mt=wt=>{wt.button!==0&&wt.pointerType==="mouse"||(_t=wt.pointerId,Ut=wt.clientX,Nt=wt.clientY,f.domElement.style.cursor="grabbing",f.domElement.setPointerCapture(wt.pointerId),wt.preventDefault())},Mt=wt=>{if(_t!==wt.pointerId)return;const Et=wt.clientX-Ut,Ct=wt.clientY-Nt;B-=Et*.006,Q=sf.clamp(Q-Ct*.0045,-1.15,1.15),Ut=wt.clientX,Nt=wt.clientY,wt.preventDefault()};f.domElement.addEventListener("pointerdown",mt),window.addEventListener("pointermove",Mt),window.addEventListener("pointerup",it),window.addEventListener("pointercancel",it);const Dt=()=>{var he;const{width:wt,height:Et}=uw(r),Ct=Math.min(window.devicePixelRatio||1,2),ne=fw(wt,Et,c.fov);c.aspect=wt/Et,dt=ne.distance,Tt=ne.targetY,c.position.z=Px(dt,((he=t.getZoom)==null?void 0:he.call(t))??1),c.updateProjectionMatrix(),c.lookAt(0,Tt,0),f.setPixelRatio(Ct),f.setSize(wt,Et,!1),d.setSize(wt,Et),_.setSize(wt,Et)},te=new ResizeObserver(Dt);te.observe(r),window.addEventListener("resize",Dt),Dt();const ie=(wt,Et,Ct,ne)=>{var Le,Pt,Ve,L;const he=wt/1e3,Fe=he*(.09+Et.volume*.08),Ze=((Le=t.getShape)==null?void 0:Le.call(t))??"sphere",q=((Pt=t.getColorIntensity)==null?void 0:Pt.call(t))??1,Ke=((Ve=t.getPinHeight)==null?void 0:Ve.call(t))??1,ge=((L=t.getPinSize)==null?void 0:L.call(t))??1;for(let b=0;b<hr;b+=1)O[b]=E[b].currentZ;for(let b=0;b<hr;b+=1){const F=E[b],ht=F.surfaces[Ze];F.baseX=ht.baseX,F.baseY=ht.baseY,F.baseZ=ht.baseZ,F.normalX=ht.normalX,F.normalY=ht.normalY,F.normalZ=ht.normalZ,F.longitude=ht.longitude,F.latitude=ht.latitude,F.orientation.copy(ht.orientation);const Rt=Math.abs(F.normalizedX-.5)*2,It=Math.abs(F.normalizedY-.5)*2,Ot=An(1-F.centerDistance/(ic*.78)),lt=Math.pow(An(F.centerDistance/ic),.7),ft=Math.min(Wn-1,Math.floor(F.normalizedX*Wn)),Gt=Math.min(Wn-1,Math.floor((1-Rt)*(Wn-1))),Vt=Math.min(Gi-1,Math.floor(F.normalizedX*Gi)),Ft=Math.min(Gi-1,Math.floor(F.normalizedY*Gi)),bt=Math.min(Gi-1,Math.floor((F.normalizedX+F.normalizedY)*.5*Gi)),se=Et.spectrum[ft]*.62+Et.spectrum[Gt]*.38,ce=Et.waveform[Vt],Me=Et.waveform[Ft]*.65+Et.waveform[bt]*.35,X=Et.bass*F.bassAffinity,Lt=Et.lowMid*F.lowMidAffinity,pt=Et.mid*F.midAffinity,Xt=Et.highMid*F.highMidAffinity,Bt=Et.treble*F.trebleAffinity,At=An(X*.9+Lt*.7+pt*.62+Xt*.58+Bt*.68+se*.5),Qt=An(Et.volume*.36+Et.bass*.2+Et.lowMid*.16+Et.mid*.14+Et.highMid*.14+Et.treble*.18+Et.beatEnergy*.22),ue=An(.5+.5*Math.sin(F.normalX*7.5+F.normalZ*5.2+he*(1.35+Et.highMid*5.8+Et.treble*3.2))),tn=An(.5+.5*Math.cos(F.normalY*9.2-F.normalZ*4.4+he*(1.05+Et.lowMid*4.2+Et.mid*4.8))),Ce=Math.abs(Math.sin(F.longitude*3+F.latitude*4+F.resonancePhase*.18))*Math.abs(Math.cos(F.latitude*5.5-he*(.35+Et.bass*1.8))),vt=Math.abs(Math.sin(F.longitude*7-F.latitude*6+he*(.5+Et.mid*2.6)+F.resonancePhase))*Math.abs(Math.cos((F.normalX-F.normalZ)*8.5+he*(.4+Et.lowMid*2.2))),re=Math.pow(Math.abs(Math.sin(F.longitude*15+F.latitude*11+he*(1.2+Et.treble*7.5)+F.resonancePhase*1.7)),2.2),Ae=An(Ce*X+vt*(Lt+pt)*.72+re*(Xt+Bt)*.82+Et.beatEnergy*F.beatAffinity*.42),ia=Math.sin(F.longitude*4.5+F.latitude*5.5+he*(.62+Et.lowMid*4.8)+Me*3.8+F.resonancePhase),xt=Math.cos(F.longitude*-5.8+F.latitude*3.7-he*(.7+Et.mid*4.1)+ce*4.2),gi=ia*xt,fn=An(Math.abs(gi)*(Et.lowMid*.58+Et.mid*.5+Et.volume*.34)+se*.22),Qe=An(Qt*.72+se*.58+(ue*Et.highMid+tn*Et.treble)*.54+At*.56+Ae*.62+fn*.38+Et.beatEnergy*.34),gn=ce*(1-Math.min(1,Math.abs(F.normalizedY-.5)*2.3)),_i=Et.bass*Ot*Ot*12.5,wi=Qt*(1.8+ue*2.7+tn*1.4)+At*(1.4+Ae*3.4)+Et.beatEnergy*F.beatAffinity*(1.2+ue*2.5),Ca=Math.sin((F.normalX+F.normalY*.7-F.normalZ*.45)*8.5+he*(1.4+Et.mid*4.6))*Qt*2.4,vi=Ae*(3.2+X*4.8+Bt*3.5),Ci=gi*fn*(4.8+Et.volume*5.5),Hn=Math.sin(F.x*.16+he*(1.6+Et.mid*5))*Math.cos(F.y*.12-he*(1.2+Et.lowMid*4))*(.55+Et.mid*3.2),Gn=Math.sin((F.x+F.y)*.62+he*18)*Et.treble*(.4+It*1.4),Di=se*(4+Et.volume*8)*(.35+(1-It)*.85),Jn=yw(F.centerDistance,wt,nt),$n=bw(F,he,Et,ce,Me,se);F.targetZ=ff+(_i+Di+gn*6+Hn+Gn+wi+Ca+vi+Ci+$n+Jn)*Ke;const ci=(F.targetZ-F.currentZ)*ew,qe=b%ri,Da=(b-qe)/ri;let R=0;qe>0&&(R+=O[b-1]-F.currentZ),qe<ri-1&&(R+=O[b+1]-F.currentZ),Da>0&&(R+=O[b-ri]-F.currentZ),Da<na-1&&(R+=O[b+ri]-F.currentZ),F.velocityZ=(F.velocityZ+ci+R*iw)*nw,F.currentZ+=F.velocityZ,Sr(F.targetColor,F.normalizedX*.34+F.normalizedY*.2+Fe+se*.22+Et.bass*Ot*.16+Qe*.2+At*.18+Ae*.16+gi*.025+lt*(.12+Et.highMid*.18+Et.treble*.18)+$n*.006,Ct,ne);const j=An(se*.5+Qe*.68+At*.7+Ae*.56+fn*.32+Ot*Et.bass*.6+Qt*.44+Et.treble*.16+lt*(Et.highMid*.28+Et.treble*.32+Et.volume*.12)+Math.abs($n)*.024),et=Math.pow(An(F.normalZ*.5+.5),.8)*.16,$=Math.pow(Math.abs(F.normalY),.9)*.08,tt=Ze==="human"?Math.pow(Math.abs(F.normalZ),.78)*.18+Math.pow(Math.abs(F.normalX),.9)*.06:0;F.targetColor.multiplyScalar((.42+Et.volume*.7+Qt*.55+j*1.22+lt*.28+et+$+tt)*q),F.targetColor.addScalar((.018+Qe*.08+Et.beatEnergy*(Ot*.1+lt*.16)+Et.volume*lt*.06+tt*.08)*q),F.currentColor.lerp(F.targetColor,aw);const Ht=(F.currentZ-ff)*YR,qt=X*(.85+Ce*.95),zt=(Lt+pt)*(.48+vt*.72+fn*.55),Kt=(Xt+Bt)*(.34+re*.58),Yt=An(qt*.78+zt*.48+Kt*.34+At*.42+Et.beatEnergy*F.beatAffinity*.36),Jt=.72+(Yt*1.38+X*.42+Et.beatEnergy*F.beatAffinity*.3)*ge,oe=.72+(Yt*.72+Bt*.32+fn*.26+Et.beatEnergy*F.beatAffinity*.16)*ge,$t=Ht+Ql*Jt+im*(.55+Yt*.65*ge),fe=.76+(Yt*1.05+Qe*.36+Et.beatEnergy*.24)*ge;P.scale.set(oe,Jt,oe),P.position.set(F.baseX+F.normalX*Ht,F.baseY+F.normalY*Ht,F.baseZ+F.normalZ*Ht),P.quaternion.copy(F.orientation),P.updateMatrix(),z.setMatrixAt(b,P.matrix),z.setColorAt(b,F.currentColor),P.scale.setScalar(fe),P.position.set(F.baseX+F.normalX*$t,F.baseY+F.normalY*$t,F.baseZ+F.normalZ*$t),P.updateMatrix(),N.setMatrixAt(b,P.matrix),N.setColorAt(b,F.currentColor)}z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0),N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0)},Ie=wt=>{var ht,Rt,It,Ot,lt,ft,Gt;if(H)return;I=window.requestAnimationFrame(Ie),rt||(rt=!0,(ht=t.onReady)==null||ht.call(t));const Et=Math.min(Math.max((wt-W)/1e3,0),1/30);W=wt;const Ct=((Rt=t.getAudioFrame)==null?void 0:Rt.call(t,wt))??i.getFrame(wt),ne=((It=t.getColorShift)==null?void 0:It.call(t))??0,he=(Ot=t.getSolidColorEnabled)!=null&&Ot.call(t)?ct.set(((lt=t.getSolidColor)==null?void 0:lt.call(t))??16777215):null;for(Ct.beat&&(nt.push({startedAt:wt,strength:Math.max(.35,Ct.beatEnergy||Ct.bass)}),nt.length>Ux&&nt.shift(),Ct.beatEnergy>.52&&k.trigger(Ct.beatEnergy,he)),Ct.snareOnset&&(nt.push({startedAt:wt,strength:Math.max(.18,Ct.snareEnergy*.55)}),nt.length>Ux&&nt.shift());nt.length>0&&(wt-nt[0].startedAt)/1e3>am;)nt.shift();const Fe=Ct.rmsEnergy*.52+Ct.highMid*.24+Ct.treble*.28+Ct.beatEnergy*.45,Ze=Ct.spectralCentroid*Ct.rmsEnergy,q=[Ct.bass,Ct.lowMid,Ct.mid,Ct.highMid,Ct.treble];f.toneMappingExposure=.96+Ct.rmsEnergy*.22+Ct.beatEnergy*.18+Ze*.12,_.strength=Math.min(.95,.18+Ct.rmsEnergy*.42+Ct.spectralCentroid*.34+Ct.treble*.12+Ct.beatEnergy*.3+Ct.hatEnergy*.16),_.radius=.38+Ct.mid*.18+Ct.spectralCentroid*.16+Ct.treble*.08+Ct.hatEnergy*.05,T.intensity=2.2+Fe*5.8+Ze*2.4,y.intensity=.88+Ct.rmsEnergy*.6+Ct.beatEnergy*.38,U.emissiveIntensity=.02+Fe*.22+Ze*.14,D.forEach((Vt,Ft)=>{const bt=q[Ft%q.length],se=wt*(28e-5+Ft*25e-6)+Ft/D.length*Math.PI*2,ce=wt*(21e-5+Ft*19e-6)+Ft*1.3;Vt.position.set(Math.cos(se)*Hl,Math.sin(ce)*Cx,Math.sin(se)*Hl),Sr(Vt.color,Ft/D.length,ne,he),Vt.intensity=1.15+Ct.volume*2.8+bt*5.8+Ct.beatEnergy*3.6}),p.uniforms.time.value=wt/1e3,p.uniforms.strength.value=.0022+Ct.volume*.011+Ct.bass*.007+Ct.beatEnergy*.012,p.uniforms.bass.value=Ct.bass,p.uniforms.mid.value=Ct.mid,p.uniforms.treble.value=Ct.treble,p.uniforms.beat.value=Ct.beatEnergy,v.uniforms.amount.value=.004+Ct.treble*.014+Ct.highMid*.004+Ct.beatEnergy*.007+Ct.hatEnergy*.006,g.uniforms.damp.value=.91+An(Ct.lowMid+Ct.mid)*.035,ie(wt,Ct,ne,he),G.update(wt,Ct,ne,he),Y.update(wt,Ct,ne,he),k.update(Et);const Ke=Px(dt,((ft=t.getZoom)==null?void 0:ft.call(t))??1);l.density=Math.min(wx,1.22/Ke);const ge=((Gt=t.getOrbitEnabled)==null?void 0:Gt.call(t))??!1,Le=ge?wt*3e-4:0,Pt=ge?Math.sin(wt*12e-5)*.22:0,Ve=Le+B,L=sf.clamp(Pt+Q,-1.18,1.18),b=Math.max(12,Ke-Ct.beatEnergy*2.4),F=Math.cos(L)*b;c.position.set(Math.sin(Ve)*F+Math.sin(wt*18e-5)*Ct.lowMid*2.4,Math.sin(L)*b+Math.cos(wt*15e-5)*Ct.mid*1.4,Math.cos(Ve)*F),M.rotation.y=wt*7e-5+Ct.lowMid*.12,M.rotation.x=Math.sin(wt*11e-5)*.08+Ct.highMid*.05,c.lookAt(0,Tt,0),d.render()};return I=window.requestAnimationFrame(Ie),{dispose:()=>{H=!0,window.cancelAnimationFrame(I),window.removeEventListener("resize",Dt),f.domElement.removeEventListener("pointerdown",mt),window.removeEventListener("pointermove",Mt),window.removeEventListener("pointerup",it),window.removeEventListener("pointercancel",it),te.disconnect(),s.remove(M);for(const wt of D)s.remove(wt);k.dispose(),G.dispose(),Y.dispose(),i.dispose(),m.dispose(),p.dispose(),_.dispose(),v.dispose(),g.dispose(),d.dispose(),x.dispose(),A.dispose(),U.dispose(),C.dispose(),f.renderLists.dispose(),f.dispose(),f.domElement.parentElement===r&&r.removeChild(f.domElement)}}}const Vl=25,Hu=300,zx=5,Bx={tab:100,microphone:140,file:100},Ro=50,kl=200,lp=5,Hx=100,Xl=10,Gu=200,Gx=5,Vx=100,Vu=0,$a=360,kx=1,Xx=0,Wl=0,ku=200,Wx=5,Yx=100,Yl=0,Xu=200,qx=5,jx=100,Fs=[{label:"Sphere",value:"sphere"},{label:"Cube",value:"cube"},{label:"Tetrahedron",value:"tetrahedron"},{label:"Mobius Strip",value:"mobius"},{label:"Double Helix",value:"doubleHelix"},{label:"Human Figure",value:"human"}],Do=[{label:"Blue",value:4359668,hex:"#4285f4"},{label:"Red",value:15352629,hex:"#ea4335"},{label:"Gold",value:16497669,hex:"#fbbc05"},{label:"Green",value:3450963,hex:"#34a853"},{label:"Violet",value:10181887,hex:"#9b5cff"},{label:"Cyan",value:2151935,hex:"#20d5ff"}],Wu=Do[0].value;function yn(r){return Math.min(1,Math.max(0,r))}function Tw(r){return Math.min(1,Math.max(-1,r))}function Zx(){return{bass:0,lowMid:0,mid:0,highMid:0,treble:0,volume:0,beat:!1,beatEnergy:0,snareOnset:!1,snareEnergy:0,hatOnset:!1,hatEnergy:0,spectralFlux:0,spectralCentroid:0,rmsEnergy:0,spectrum:new Float32Array(Wn),waveform:new Float32Array(Gi)}}function Aw(r,t,i){const s=Math.max(0,i),l=.75+s*.25;t.bass=Math.tanh(r.bass*s),t.lowMid=Math.tanh(r.lowMid*s),t.mid=Math.tanh(r.mid*s),t.highMid=Math.tanh(r.highMid*s),t.treble=Math.tanh(r.treble*s),t.volume=Math.tanh(r.volume*s),t.beat=r.beat,t.beatEnergy=Math.tanh(r.beatEnergy*s),t.snareOnset=r.snareOnset,t.snareEnergy=Math.tanh(r.snareEnergy*s),t.hatOnset=r.hatOnset,t.hatEnergy=Math.tanh(r.hatEnergy*s),t.spectralFlux=Math.tanh(r.spectralFlux*s),t.spectralCentroid=r.spectralCentroid,t.rmsEnergy=Math.tanh(r.rmsEnergy*s);for(let c=0;c<Wn;c+=1)t.spectrum[c]=Math.tanh((r.spectrum[c]??0)*s);for(let c=0;c<Gi;c+=1)t.waveform[c]=Tw((r.waveform[c]??0)*l);return t}function Yu(r){return r instanceof Error?r.message:"Something went wrong while starting audio."}function Kx(r){if(!Number.isFinite(r)||r<=0)return"0:00";const t=Math.floor(r),i=Math.floor(t/60),s=t%60;return`${i}:${s.toString().padStart(2,"0")}`}function wo(){return{currentTime:0,duration:0,isPaused:!0,isEnded:!1}}function Qx(){return{sensitivity:!1,zoom:!1,colorIntensity:!1,colorShift:!1,solidColor:!1,pinHeight:!1,pinSize:!1,shape:!1,orbit:!1}}function Rw(){const r=Wt.useRef(null),t=Wt.useRef(null),i=Wt.useRef(null),s=Wt.useRef(null),l=Wt.useRef(null),c=Wt.useRef(Bx.tab/100),f=Wt.useRef("tab"),d=Wt.useRef(Hx/100),m=Wt.useRef("sphere"),p=Wt.useRef(Vx/100),_=Wt.useRef(Xx/$a),v=Wt.useRef(!1),g=Wt.useRef(Wu),y=Wt.useRef(Yx/100),T=Wt.useRef(jx/100),[D,M]=Wt.useState(!0),[x,A]=Wt.useState("tab"),[U,C]=Wt.useState("Tab audio off"),[z,N]=Wt.useState("Browser tab audio"),[P,E]=Wt.useState(null),[O,k]=Wt.useState(!1),[G,Y]=Wt.useState(()=>Bx),[nt,ct]=Wt.useState(Hx),[W,I]=Wt.useState(Vx),[H,rt]=Wt.useState(Xx),[dt,Tt]=Wt.useState(!1),[B,Q]=Wt.useState(Wu),[_t,Ut]=Wt.useState(Yx),[Nt,it]=Wt.useState(jx),[mt,Mt]=Wt.useState("sphere"),[Dt,te]=Wt.useState(()=>wo()),[ie,Ie]=Wt.useState(!1),[wt,Et]=Wt.useState(!1),Ct=Wt.useRef(!1),ne=Wt.useRef(Qx()),[he,Fe]=Wt.useState(!1),Ze=Wt.useRef(!1);i.current||(i.current=zs()),l.current||(l.current=Zx());const q=G[x],Ke=(q-Vl)/(Hu-Vl)*100,ge=(nt-Ro)/(kl-Ro)*100,Le=(W-Xl)/(Gu-Xl)*100,Pt=(H-Vu)/($a-Vu)*100,Ve=(_t-Wl)/(ku-Wl)*100,L=(Nt-Yl)/(Xu-Yl)*100,b=Wt.useCallback((vt,re=null)=>{var Ae;(Ae=i.current)==null||Ae.dispose(),i.current=vt,s.current=re},[]),F=Wt.useCallback(()=>{b(zs()),A("tab"),C("Tab audio off"),N("Browser tab audio"),E(null),k(!1),te(wo())},[b]),ht=Wt.useCallback(async()=>{try{C("Choose a Chrome tab"),E(null);const vt=await tb(()=>{b(zs()),A("tab"),C("Tab audio off"),N("Browser tab audio"),k(!1)});b(vt),A("tab"),C("Capturing tab audio"),N("Browser tab audio"),k(!0),te(wo())}catch(vt){b(zs()),A("tab"),C("Tab audio off"),N("Browser tab audio"),k(!1),te(wo()),E(Yu(vt))}},[b]),Rt=Wt.useCallback(()=>{if(O){F();return}ht()},[O,ht,F]),It=Wt.useCallback(async()=>{try{C("Requesting microphone"),E(null),k(!1),te(wo());const vt=await $y();b(vt),A("microphone"),C("Listening"),N("Microphone input")}catch(vt){b(zs()),C("Microphone unavailable"),E(Yu(vt))}},[b]),Ot=Wt.useCallback(async vt=>{if(!vt.type.startsWith("audio/")){E("Choose an audio file to visualize.");return}try{C("Loading audio"),E(null),k(!1),te(wo());const re=await eb(vt);b(re,re),A("file"),C("Playing"),N(vt.name),te(re.getPlaybackState())}catch(re){b(zs()),C("Audio file unavailable"),E(Yu(re))}},[b]),lt=Wt.useCallback(()=>{var vt;(vt=t.current)==null||vt.click()},[]),ft=Wt.useCallback(vt=>{var Ae;const re=(Ae=vt.target.files)==null?void 0:Ae[0];vt.target.value="",re&&Ot(re)},[Ot]),Gt=Wt.useCallback(vt=>{vt.preventDefault();const re=Array.from(vt.dataTransfer.files).find(Ae=>Ae.type.startsWith("audio/"));re&&Ot(re)},[Ot]),Vt=Wt.useCallback(async()=>{const vt=s.current;if(vt)try{const re=await vt.togglePlayback(),Ae=vt.getPlaybackState();te(Ae),C(re?"Playing":"Paused"),E(null)}catch(re){E(Yu(re))}},[]),Ft=Wt.useCallback(vt=>{const re=s.current;re&&(re.seek(Number(vt.target.value)),te(re.getPlaybackState()))},[]),bt=Wt.useCallback(vt=>{Ct.current&&(ne.current[vt]=!0)},[]),se=Wt.useCallback(vt=>{const re=Number(vt.target.value);bt("sensitivity"),Y(Ae=>({...Ae,[x]:re}))},[bt,x]),ce=Wt.useCallback(vt=>{bt("zoom"),ct(Number(vt.target.value))},[bt]),Me=Wt.useCallback(vt=>{const re=vt.target;if(re instanceof HTMLElement&&re.closest('[data-controls-panel="true"]')||vt.deltaY===0)return;vt.preventDefault(),bt("zoom");const Ae=vt.deltaY>0?-1:1,ia=Math.max(1,Math.min(4,Math.ceil(Math.abs(vt.deltaY)/120)));ct(xt=>Math.min(kl,Math.max(Ro,xt+Ae*lp*ia)))},[bt]),X=Wt.useCallback(vt=>{bt("colorIntensity"),I(Number(vt.target.value))},[bt]),Lt=Wt.useCallback(vt=>{bt("colorShift"),rt(Number(vt.target.value))},[bt]),pt=Wt.useCallback(vt=>{bt("solidColor"),Q(vt)},[bt]),Xt=Wt.useCallback(()=>{bt("solidColor"),Tt(vt=>!vt)},[bt]),Bt=Wt.useCallback(vt=>{bt("pinHeight"),Ut(Number(vt.target.value))},[bt]),At=Wt.useCallback(vt=>{bt("pinSize"),it(Number(vt.target.value))},[bt]),Qt=Wt.useCallback(vt=>{bt("shape"),Mt(vt)},[bt]),ue=Wt.useCallback(()=>{bt("orbit"),Fe(vt=>!vt)},[bt]);Wt.useEffect(()=>{const vt=r.current;if(!vt)return;M(!0);const re=Ew(vt,{getAudioFrame:Ae=>(i.current||(i.current=zs()),Aw(i.current.getFrame(Ae),l.current??Zx(),c.current)),getZoom:()=>d.current,getShape:()=>m.current,getColorIntensity:()=>p.current,getColorShift:()=>_.current,getSolidColorEnabled:()=>v.current,getSolidColor:()=>g.current,getPinHeight:()=>y.current,getPinSize:()=>T.current,getOrbitEnabled:()=>Ze.current,onReady:()=>M(!1)});return()=>re.dispose()},[]),Wt.useEffect(()=>{f.current=x},[x]),Wt.useEffect(()=>{c.current=q/100},[q]),Wt.useEffect(()=>{d.current=nt/100},[nt]),Wt.useEffect(()=>{p.current=W/100},[W]),Wt.useEffect(()=>{_.current=H/$a},[H]),Wt.useEffect(()=>{v.current=dt},[dt]),Wt.useEffect(()=>{g.current=B},[B]),Wt.useEffect(()=>{y.current=_t/100},[_t]),Wt.useEffect(()=>{T.current=Nt/100},[Nt]),Wt.useEffect(()=>{m.current=mt},[mt]),Wt.useEffect(()=>{Ct.current=wt,ne.current=Qx()},[wt]),Wt.useEffect(()=>{Ze.current=he},[he]),Wt.useEffect(()=>{if(!wt)return;const vt={sensitivity:q,colorIntensity:W,colorShift:H,pinHeight:_t,pinSize:Nt,zoom:nt},re=new Float32Array(Wn),Ae=new Array(Fs.length).fill(0),ia=new Map(Fs.map(({value:R},j)=>[R,j])),xt={energy:0,body:0,brightness:0,motion:0,mass:0,focus:0,chaos:0,spaciousness:0,texture:0,flux:0,beatDensity:0,contrast:0,groove:0};let gi=.35,fn=1,Qe=0,gn=performance.now(),_i=performance.now(),wi=performance.now(),Ca=performance.now(),vi=Ze.current,Ci=v.current,Hn=Do.findIndex(R=>R.value===g.current),Gn=Fs.findIndex(R=>R.value===mt);Gn<0&&(Gn=0),Hn<0&&(Hn=0);let Di=0,Jn=0;const $n=Math.random()*Math.PI*2,ci=(R,j)=>{const et=Math.max(0,Math.min(Wn-1,Math.floor(R*Wn))),$=Math.max(et+1,Math.min(Wn,Math.ceil(j*Wn)));let tt=0;for(let Ht=et;Ht<$;Ht+=1)tt+=re[Ht];return tt/($-et)},qe=(R,j,et)=>{const $=ia.get(j);$!==void 0&&(R[$]=et)},Da=window.setInterval(()=>{var Ys,os;if(!Ct.current)return;const R=l.current;if(!R)return;const j=R.bass,et=R.lowMid,$=R.mid,tt=R.highMid,Ht=R.treble,qt=R.volume,zt=R.beatEnergy,Kt=R.spectralCentroid,Yt=R.rmsEnergy,Jt=R.beat,oe=performance.now(),$t=oe/1e3,fe=ne.current;let cn=0,Je=0,ke=0,Be=0;for(let ve=0;ve<Wn;ve+=1){const $e=R.spectrum[ve]??0,Nn=re[ve]??0,Ln=$e-Nn;cn+=Math.abs(Ln),Je+=Math.max(0,Ln),re[ve]=Nn+Ln*.34}for(let ve=0;ve<Gi;ve+=1){const $e=Math.abs(R.waveform[ve]??0);ke+=$e,Be=Math.max(Be,$e)}const jt=yn(cn/Wn*2.8),hn=yn(Je/Wn*4.2),be=yn(ke/Gi*1.7+Be*.28),xn=ci(0,.14),ti=ci(.14,.42),xi=ci(.42,.72),Vn=ci(.72,1),He=[j,et,$,tt,Ht],sn=Math.max(...He),Si=He.indexOf(sn),Xe=Math.min(...He),ei=yn(sn-Xe),Yi=1-ei,Ua=yn(qt*.48+Yt*.38+zt*.34),aa=1-yn(qt*1.15+zt*.85),Cr=yn(tt*.45+Ht*.55+Kt*.36),Xs=yn(j*.5+et*.34+$*.22),as=yn(Math.abs(Ht-j)*.38+zt*.4+Yt*.22+jt*.5+be*.32),ss=yn(Xs*.48+qt*.28+Yt*.24+xn*.22+ti*.18),rc=yn(xi*.3+Vn*.32+hn*.42+be*.24),Dr=yn(jt*.62+hn*.42+zt*.25+be*.28+ei*.18),oc=yn(sn*.48+Yi*.28+(1-Dr)*.24),Ws=yn(Math.abs(Cr-Xs)*.82+ei*.28),sa=yn(zt*.38+j*.28+et*.26+xt.beatDensity*.36);xt.energy+=(Ua-xt.energy)*.18,xt.body+=(Xs-xt.body)*.16,xt.brightness+=(Cr-xt.brightness)*.2,xt.motion+=(as-xt.motion)*.2,xt.mass+=(ss-xt.mass)*.16,xt.focus+=(oc-xt.focus)*.14,xt.chaos+=(Dr-xt.chaos)*.22,xt.spaciousness+=(aa-xt.spaciousness)*.12,xt.texture+=(rc-xt.texture)*.2,xt.flux+=(jt-xt.flux)*.24,xt.contrast+=(Ws-xt.contrast)*.18,xt.groove+=(sa-xt.groove)*.18,xt.beatDensity=yn(xt.beatDensity*.92+(Jt?.18+zt*.22:hn*.015)),Jn=yn(Jn*.82+(Jt?zt*.58+xt.groove*.18:hn*.08));const Vo=.5+.5*Math.sin($t*(.48+xt.groove*1.6)+$n),rs=.5+.5*Math.sin($t*(1.8+xt.chaos*4.8)+$n*.37+xt.flux*2),ra=yn(xt.chaos*.4+xt.beatDensity*.32+hn*.32+Jn*.22),ko=66+xt.spaciousness*82+xt.texture*46+hn*34+xt.focus*18-xt.energy*26-xt.beatDensity*18,Ur=24+xt.energy*52+xt.brightness*64+xt.chaos*54+xt.beatDensity*34+Jn*30+rs*16,lc=14+xt.mass*116+xt.groove*42+xt.flux*44+zt*54+(Si===0?24:0)+Vo*16,Nr=24+xt.texture*58+xt.motion*48+xt.brightness*32+xt.beatDensity*42+ei*24+(Si>=3?18:0),Lr=110-xt.mass*30-xt.beatDensity*22+xt.brightness*26+xt.focus*20+xt.chaos*12+Math.sin($t*(.82+xt.motion*2.8)+$n)*(5+xt.chaos*9);gi=gi*.82+fn*(.18+Kt*.54+Math.max(0,Ht-j)*.72+xt.flux*1.9+xt.chaos*1.35+xt.beatDensity*1.45+rs*.24),Jt&&(gi+=fn*(2.2+zt*5.8+xt.brightness*2.8+hn*3.5)),(Jt&&zt>.52||ra>.7&&oe-Ca>620)&&(fn=xt.brightness+Vn>=xt.body+xn?1:-1,Ca=oe);const Or=.055+xt.flux*.05+xt.beatDensity*.035;vt.sensitivity+=(ko-vt.sensitivity)*(.035+xt.spaciousness*.025),vt.colorIntensity+=(Ur-vt.colorIntensity)*Or,vt.pinHeight+=(lc-vt.pinHeight)*(Or+xt.mass*.02),vt.pinSize+=(Nr-vt.pinSize)*(Or+xt.texture*.018),vt.zoom+=(Lr-vt.zoom)*(.045+xt.focus*.03+xt.chaos*.025),vt.colorShift=(vt.colorShift+gi+$a)%$a;const ni=yn(xt.focus*.42+xt.mass*.26+xt.spaciousness*.18+(Jt&&zt>.62?.18:0)),Na=yn(xt.chaos*.48+xt.brightness*.36+xt.flux*.34+xt.beatDensity*.22);if(fe.solidColor){const ve=Do.findIndex($e=>$e.value===g.current);Ci=v.current,ve>=0&&(Hn=ve)}else{if(oe-wi>2600){const Nn=ni>Na+.16&&xt.energy>.08;Nn!==Ci&&(Ci=Nn,v.current=Ci,wi=oe)}const ve=[j+et*.34+xt.mass*.24,zt+tt*.32+xt.chaos*.22,et*.5+$*.38+xt.focus*.2,$*.42+xt.body*.3+Yi*.16,Ht*.42+Kt*.38+xt.texture*.24,tt*.42+Vn*.34+xt.flux*.34],$e=ve.indexOf(Math.max(...ve));$e>=0&&($e!==Hn||Jt)&&(Hn=$e,g.current=((Ys=Do[Hn])==null?void 0:Ys.value)??Wu)}if(!fe.sensitivity){const ve=Math.min(Hu,Math.max(Vl,vt.sensitivity))/100;c.current+=(ve-c.current)*.05}if(!fe.colorIntensity){const ve=Math.min(Gu,Math.max(Xl,vt.colorIntensity))/100;p.current+=(ve-p.current)*.05}if(!fe.colorShift){const ve=vt.colorShift/$a;_.current+=(ve-_.current)*.05}if(!fe.pinHeight){const ve=Math.min(ku,Math.max(Wl,vt.pinHeight))/100;y.current+=(ve-y.current)*.05}if(!fe.pinSize){const ve=Math.min(Xu,Math.max(Yl,vt.pinSize))/100;T.current+=(ve-T.current)*.05}if(!fe.zoom){const ve=Math.min(kl,Math.max(Ro,vt.zoom))/100;d.current+=(ve-d.current)*.05}if(fe.shape){const ve=Fs.findIndex($e=>$e.value===m.current);ve>=0&&(Gn=ve)}else{Jt&&(Qe+=1);const ve=850+(1-xt.chaos)*1450+xt.focus*500;if(oe-gn>ve){const $e=new Array(Fs.length).fill(0);qe($e,"sphere",.3+Yi*.36+xt.focus*.42+xt.spaciousness*.2-xt.chaos*.14),qe($e,"cube",.18+$*.36+tt*.3+xt.beatDensity*.46+hn*.28),qe($e,"tetrahedron",.16+Ht*.54+xt.brightness*.36+xt.chaos*.42+Vn*.22),qe($e,"mobius",.18+xt.contrast*.34+xt.flux*.6+xt.motion*.34+hn*.26),qe($e,"doubleHelix",.2+xt.texture*.48+xt.groove*.42+ei*.24+xi*.26),qe($e,"human",.16+xt.mass*.58+xt.body*.36+ti*.24+qt*.24+(1-xt.chaos)*.16);let Nn=Gn,Ln=Number.NEGATIVE_INFINITY;for(let Mi=0;Mi<$e.length;Mi+=1){Ae[Mi]+=(($e[Mi]??0)-Ae[Mi])*.24;const Sf=Mi===Gn?-.08:Math.min(.16,(oe-gn)/9e3)*.08,Mf=Math.sin($n+$t*(.42+xt.motion)+Mi*1.73)*xt.chaos*.05,Pr=Ae[Mi]+Sf+Mf;Pr>Ln&&(Ln=Pr,Nn=Mi)}const ls=Ae[Gn]??0;Nn!==Gn&&(Jt&&zt>.38+xt.focus*.12||Qe>=Math.max(3,Math.round(7-xt.chaos*3))||ra>.64||oe-gn>7200)&&Ln>ls+.035&&(Gn=Nn,m.current=Fs[Gn].value,gn=oe,Qe=0)}}if(fe.orbit)vi=Ze.current;else if(oe-_i>1e3+xt.focus*950){const ve=yn(xt.chaos*.44+xt.flux*.34+xt.brightness*.28+xt.beatDensity*.24+Jn*.24),$e=yn(xt.mass*.36+xt.focus*.32+xt.spaciousness*.24+(1-xt.motion)*.14),Nn=ve>$e+.1,Ln=$e>ve+.18;Nn!==vi&&(Nn||Ln)&&(vi=Nn,Ze.current=vi,_i=oe)}if(Di+=1,Di%4===0){const ve=(Ln,ls,Xo,Mi)=>Math.round(Math.min(Xo,Math.max(ls,Ln))/Mi)*Mi,$e=ve(vt.sensitivity,Vl,Hu,zx),Nn=f.current;fe.sensitivity||Y(Ln=>({...Ln,[Nn]:$e})),fe.colorIntensity||I(ve(vt.colorIntensity,Xl,Gu,Gx)),fe.colorShift||rt(ve(vt.colorShift,Vu,$a,kx)%$a),fe.pinHeight||Ut(ve(vt.pinHeight,Wl,ku,Wx)),fe.pinSize||it(ve(vt.pinSize,Yl,Xu,qx)),fe.zoom||ct(ve(vt.zoom,Ro,kl,lp)),fe.solidColor||(Tt(Ci),Q(((os=Do[Hn])==null?void 0:os.value)??Wu)),fe.shape||Mt(Fs[Gn].value),fe.orbit||Fe(vi)}},50);return()=>window.clearInterval(Da)},[wt]),Wt.useEffect(()=>()=>{var vt;return(vt=i.current)==null?void 0:vt.dispose()},[]),Wt.useEffect(()=>{if(x!=="file")return;const vt=window.setInterval(()=>{var Ae;const re=(Ae=s.current)==null?void 0:Ae.getPlaybackState();re&&(te(re),C(re.isEnded?"Ended":re.isPaused?"Paused":"Playing"))},180);return()=>window.clearInterval(vt)},[x]);const tn=vt=>`min-w-24 rounded border px-3 py-2 text-sm font-medium transition ${x===vt?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10"}`,Ce=Dt.duration>0?Math.min(100,Dt.currentTime/Dt.duration*100):0;return kt.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-[#050505] font-sans text-white",onDragOver:vt=>vt.preventDefault(),onDrop:Gt,onWheel:Me,children:[kt.jsx("div",{ref:r,className:"absolute inset-0 z-0"}),kt.jsx("div",{className:"crt-overlay","aria-hidden":"true"}),kt.jsxs("button",{type:"button",role:"switch","aria-checked":wt,onClick:()=>Et(vt=>!vt),className:`pointer-events-auto absolute top-4 right-3 left-16 z-50 flex min-h-14 items-center justify-between gap-4 border px-4 py-3 text-left shadow-2xl backdrop-blur-md transition sm:left-auto sm:min-w-72 ${wt?"border-white bg-white text-black shadow-white/30":"border-white/25 bg-black/60 text-white shadow-black/45 hover:border-white/65 hover:bg-white/10"}`,children:[kt.jsxs("span",{className:"min-w-0",children:[kt.jsx("span",{className:`block text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${wt?"text-black/55":"text-white/45"}`,children:wt?"Director Online":"Activate Director"}),kt.jsx("span",{className:"mt-0.5 block truncate text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl",children:"GOD MODE"})]}),kt.jsx("span",{className:`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition ${wt?"bg-black":"bg-white/15"}`,"aria-hidden":"true",children:kt.jsx("span",{className:`h-6 w-6 rounded-full transition ${wt?"translate-x-6 bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]":"translate-x-0 bg-white/85"}`})})]}),kt.jsx("button",{type:"button",onClick:()=>Ie(!ie),className:"pointer-events-auto absolute top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-white/55 hover:bg-white/10","aria-label":ie?"Show controls":"Hide controls","aria-expanded":!ie,children:kt.jsxs("div",{className:"flex flex-col gap-[3px]",children:[kt.jsx("span",{className:"block h-[2px] w-5 bg-white"}),kt.jsx("span",{className:"block h-[2px] w-5 bg-white"}),kt.jsx("span",{className:"block h-[2px] w-5 bg-white"})]})}),!ie&&kt.jsx("div",{className:"pointer-events-none absolute left-3 right-3 top-24 z-50 sm:top-16 sm:left-4 sm:right-auto sm:w-[min(23rem,calc(100vw-2rem))]",children:kt.jsxs("div",{"data-controls-panel":"true",className:"pointer-events-auto max-h-[calc(100vh-7rem)] overflow-y-auto border border-white/12 bg-black/35 p-3 shadow-xl shadow-black/35 backdrop-blur-sm sm:max-h-[calc(100vh-5rem)]",children:[kt.jsxs("div",{className:"min-w-0 w-full",children:[kt.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.24em] text-white/55",children:"Pin Art Visualizer"}),kt.jsx("h1",{className:"mt-1 truncate text-base font-medium text-white",children:z}),kt.jsx("p",{className:"mt-1 text-xs text-white/65","aria-live":"polite",children:P??U}),kt.jsxs("div",{className:"mt-3 grid max-w-xl grid-cols-2 gap-x-3 gap-y-2",children:[kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"audio-sensitivity",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Sensitivity",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[q,"%"]})]})}),kt.jsx("input",{id:"audio-sensitivity",type:"range",min:Vl,max:Hu,step:zx,value:q,onChange:se,className:"audio-progress w-full",style:{"--progress":`${Ke}%`},"aria-label":`${x} audio sensitivity`})]}),kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"visualizer-zoom",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Zoom",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[nt,"%"]})]})}),kt.jsx("input",{id:"visualizer-zoom",type:"range",min:Ro,max:kl,step:lp,value:nt,onChange:ce,className:"audio-progress w-full",style:{"--progress":`${ge}%`},"aria-label":"Visualizer zoom"})]}),kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"color-intensity",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Color Intensity",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[W,"%"]})]})}),kt.jsx("input",{id:"color-intensity",type:"range",min:Xl,max:Gu,step:Gx,value:W,onChange:X,className:"audio-progress w-full",style:{"--progress":`${Le}%`},"aria-label":"Color intensity"})]}),kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"color-shift",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Color Shift",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[H," deg"]})]})}),kt.jsx("input",{id:"color-shift",type:"range",min:Vu,max:$a,step:kx,value:H,onChange:Lt,className:"audio-progress w-full",style:{"--progress":`${Pt}%`},"aria-label":"Color shift"})]}),kt.jsxs("div",{className:"col-span-2 border border-white/10 bg-black/20 p-2 transition-opacity",children:[kt.jsxs("div",{className:"flex items-center justify-between gap-3",children:[kt.jsx("p",{className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:"Solid Color"}),kt.jsxs("button",{type:"button",role:"switch","aria-checked":dt,className:`flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium transition ${dt?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10"}`,onClick:Xt,children:[kt.jsx("span",{className:`flex h-4 w-8 items-center rounded-full p-0.5 transition ${dt?"bg-black/80":"bg-white/20"}`,"aria-hidden":"true",children:kt.jsx("span",{className:`h-3 w-3 rounded-full bg-white transition ${dt?"translate-x-4":"translate-x-0"}`})}),dt?"On":"Off"]})]}),kt.jsx("div",{className:"mt-2 grid grid-cols-6 gap-2",children:Do.map(vt=>kt.jsx("button",{type:"button","aria-label":`Use ${vt.label} solid color`,"aria-pressed":B===vt.value,className:`aspect-square min-h-8 border transition ${B===vt.value?"border-white":"border-white/20 hover:border-white/60"}`,style:{backgroundColor:vt.hex,boxShadow:B===vt.value?`0 0 16px ${vt.hex}`:void 0},onClick:()=>pt(vt.value)},vt.value))})]}),kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"pin-height",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Pin Height",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[_t,"%"]})]})}),kt.jsx("input",{id:"pin-height",type:"range",min:Wl,max:ku,step:Wx,value:_t,onChange:Bt,className:"audio-progress w-full",style:{"--progress":`${Ve}%`},"aria-label":"Pin height"})]}),kt.jsxs("div",{className:"transition-opacity",children:[kt.jsx("div",{className:"mb-1",children:kt.jsxs("label",{htmlFor:"pin-size",className:"text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:["Pin Size",kt.jsxs("span",{className:"ml-2 tracking-normal text-white/65",children:[Nt,"%"]})]})}),kt.jsx("input",{id:"pin-size",type:"range",min:Yl,max:Xu,step:qx,value:Nt,onChange:At,className:"audio-progress w-full",style:{"--progress":`${L}%`},"aria-label":"Pin size"})]})]}),kt.jsxs("div",{className:"mt-3 min-w-0 w-full max-w-full overflow-hidden transition-opacity sm:max-w-xl",children:[kt.jsx("p",{className:"mb-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:"Shape"}),kt.jsx("div",{className:"grid min-w-0 w-full max-w-full grid-cols-2 gap-2 sm:grid-cols-3",children:Fs.map(({label:vt,value:re})=>kt.jsx("button",{type:"button","aria-pressed":mt===re,className:`min-w-0 overflow-hidden text-ellipsis whitespace-nowrap border px-2 py-2 text-[0.66rem] font-medium tracking-normal transition sm:text-xs ${mt===re?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10"}`,onClick:()=>Qt(re),children:vt},re))})]}),kt.jsxs("div",{className:"mt-3 max-w-xl border border-white/10 bg-black/20 p-2 transition-opacity",children:[kt.jsx("p",{className:"mb-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55",children:"Camera"}),kt.jsxs("button",{type:"button",role:"switch","aria-checked":he,className:`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${he?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10"}`,onClick:ue,children:[kt.jsx("span",{className:`flex h-5 w-9 items-center rounded-full p-0.5 transition ${he?"bg-black/80":"bg-white/20"}`,"aria-hidden":"true",children:kt.jsx("span",{className:`h-4 w-4 rounded-full bg-white transition ${he?"translate-x-4":"translate-x-0"}`})}),"Orbit"]})]}),x==="file"&&kt.jsxs("div",{className:"mt-3 flex max-w-xl items-center gap-3",children:[kt.jsx("button",{type:"button",className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white text-black transition hover:scale-105 hover:bg-white/90",onClick:()=>void Vt(),"aria-label":Dt.isPaused||Dt.isEnded?"Play audio file":"Pause audio file",children:kt.jsx("span",{className:Dt.isPaused||Dt.isEnded?"playback-icon playback-icon-play":"playback-icon playback-icon-pause","aria-hidden":"true"})}),kt.jsx("span",{className:"w-10 shrink-0 text-right text-xs tabular-nums text-white/65",children:Kx(Dt.currentTime)}),kt.jsx("input",{type:"range",min:"0",max:Math.max(0,Dt.duration),step:"0.01",value:Math.min(Dt.currentTime,Dt.duration||0),onChange:Ft,className:"audio-progress min-w-0 flex-1",style:{"--progress":`${Ce}%`},"aria-label":"Audio playback position"}),kt.jsx("span",{className:"w-10 shrink-0 text-xs tabular-nums text-white/65",children:Kx(Dt.duration)})]})]}),kt.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[kt.jsxs("button",{type:"button",role:"switch","aria-checked":O,className:`flex min-w-32 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${O?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10"}`,onClick:Rt,children:[kt.jsx("span",{className:`flex h-5 w-9 items-center rounded-full p-0.5 transition ${O?"bg-black/80":"bg-white/20"}`,"aria-hidden":"true",children:kt.jsx("span",{className:`h-4 w-4 rounded-full bg-white transition ${O?"translate-x-4":"translate-x-0"}`})}),"Tab Audio"]}),kt.jsx("button",{type:"button",className:tn("microphone"),onClick:()=>void It(),children:"Mic"}),kt.jsx("button",{type:"button",className:tn("file"),onClick:lt,children:"Audio File"})]})]})}),kt.jsx("input",{ref:t,type:"file",accept:"audio/*",className:"hidden",onChange:ft}),kt.jsx("div",{"aria-live":"polite","aria-hidden":!D,className:`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-light tracking-widest text-white transition-opacity duration-500 sm:text-2xl ${D?"opacity-100":"opacity-0"}`,children:"Initializing Lattice..."})]})}const FS=document.getElementById("root");if(!FS)throw new Error("Unable to start app: root element was not found.");qy.createRoot(FS).render(kt.jsx(Wt.StrictMode,{children:kt.jsx(Rw,{})}));
