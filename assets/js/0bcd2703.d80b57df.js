/*! For license information please see 0bcd2703.d80b57df.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71830],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=b.prototype=new g;k.constructor=b,h(k,v.prototype),k.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!P.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:C.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+_(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),M(i,t,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+_(l=e[c],c);s+=M(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=M(l=l.value,t,o,u=a+_(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function N(e,t,r){if(null==e)return e;var n=[],o=0;return M(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},78132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(27378),r(3905));const a={title:"<CacheProvider />"},i=void 0,l={unversionedId:"api/CacheProvider",id:"api/CacheProvider",title:"<CacheProvider />",description:"Manages state, providing all context needed to use the hooks. Should be placed as high as possible",source:"@site/../docs/core/api/CacheProvider.md",sourceDirName:"api",slug:"/api/CacheProvider",permalink:"/docs/api/CacheProvider",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/CacheProvider.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669082171,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"<CacheProvider />"},sidebar:"docs",previous:{title:"useLoading()",permalink:"/docs/api/useLoading"},next:{title:"<ExternalCacheProvider />",permalink:"/docs/api/ExternalCacheProvider"}},s={},c=[{value:"initialState: State&lt;unknown&gt;",id:"initialState",level:2},{value:"managers: Manager[]",id:"managers",level:2},{value:"Controller: typeof Controller",id:"Controller",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderProps {\n  children: ReactNode;\n  managers?: Manager[];\n  initialState?: State<unknown>;\n  Controller?: typeof Controller;\n}\n")),(0,o.kt)("p",null,"Manages state, providing all context needed to use the hooks. Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import { CacheProvider } from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n")),(0,o.kt)("h2",{id:"initialState"},"initialState: State<unknown",">"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type State<T> = Readonly<{\n  entities: Readonly<{ [fetchKey: string]: { [pk: string]: T } | undefined }>;\n  results: Readonly<{ [url: string]: unknown | PK[] | PK | undefined }>;\n  meta: Readonly<{\n    [url: string]: { date: number; error?: Error; expiresAt: number };\n  }>;\n}>;\n")),(0,o.kt)("p",null,"Instead of starting with an empty cache, you can provide your own initial state. This can\nbe useful for testing, or rehydrating the cache state when using server side rendering."),(0,o.kt)("h2",{id:"managers"},"managers: Manager[]"),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"[new NetworkManager(), new SubscriptionManager(PollingSubscription)];\n")),(0,o.kt)("p",null,"List of ",(0,o.kt)("a",{parentName:"p",href:"./Manager"},"Manager"),"s use. This is the main extensibility point of the provider."),(0,o.kt)("h2",{id:"Controller"},"Controller: typeof Controller"),(0,o.kt)("p",null,"This allows you to extend ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Controller"},"Controller")," to provide additional functionality.\nThis might be useful if you have additional actions you want to dispatch to custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Managers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class MyController extends Controller {\n  doSomething = () => {\n    console.log('hi');\n  };\n}\n\nconst RealApp = (\n  <CacheProvider Controller={MyController}>\n    <App />\n  </CacheProvider>\n);\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);