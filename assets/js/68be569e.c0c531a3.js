/*! For license information please see 68be569e.c0c531a3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94473],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function k(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var g=v.prototype=new k;g.constructor=v,m(g,h.prototype),g.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},c=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:j.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return c=c(i=e),e=""===a?"."+E(i,0):a,w(c)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),_(c,t,o,"",(function(e){return e}))):null!=c&&(A(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(i=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var s=a+E(l=e[u],u);i+=_(l,t,o,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)i+=_(l=l.value,t,o,s=a+E(l,u++),c);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},5833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"<AsyncBoundary />"},c=void 0,l={unversionedId:"api/AsyncBoundary",id:"api/AsyncBoundary",title:"<AsyncBoundary />",description:"&lt;AsyncBoundary /&gt; - Handle asynchronous loading and error conditions",source:"@site/../docs/core/api/AsyncBoundary.md",sourceDirName:"api",slug:"/api/AsyncBoundary",permalink:"/docs/api/AsyncBoundary",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/AsyncBoundary.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1671318833,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{title:"<AsyncBoundary />"},sidebar:"docs",previous:{title:"<ExternalCacheProvider />",permalink:"/docs/api/ExternalCacheProvider"},next:{title:"<NetworkErrorBoundary />",permalink:"/docs/api/NetworkErrorBoundary"}},i={},u=[{value:"Example",id:"example",level:2},{value:"Custom fallback example",id:"custom-fallback",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"<AsyncBoundary /> - Handle asynchronous loading and error conditions"),(0,o.kt)("meta",{name:"docsearch:pagerank",content:"20"})),(0,o.kt)("p",null,"Handles loading and error conditions of Suspense."),(0,o.kt)("p",null,"In React 18, this will create a concurrent split, and in 16 and 17 it will show loading fallbacks. If there is an\nirrecoverable API error, it will show an error fallback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function AsyncBoundary({\n  children,\n  errorComponent,\n  fallback,\n}: {\n  children: React.ReactNode;\n  fallback?: React.ReactNode;\n  errorComponent?: React.ComponentType<{\n    error: NetworkError;\n  }>;\n}): JSX.Element;\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about boundary placement by learning how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency"},"co-locate data dependencies"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { AsyncBoundary } from '@rest-hooks/react';\n\nexport default function MyPage() {\n  return (\n    <AsyncBoundary>\n      <SuspendingComponent />\n    </AsyncBoundary>\n  );\n}\n\nfunction SuspendingComponent() {\n  const data = useSuspense(MyEndpoint);\n\n  return <div>{data.text}</div>\n}\n")),(0,o.kt)("h2",{id:"custom-fallback"},"Custom fallback example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { CacheProvider, AsyncBoundary, NetworkError } from '@rest-hooks/react';\n\nfunction ErrorPage({ error }: { error: NetworkError }) {\n  return (\n    <div>\n      {error.status} {error.response && error.response.statusText}\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <CacheProvider>\n      <AsyncBoundary fallback=\"loading\" errorComponent={ErrorPage}>\n        <Router />\n      </AsyncBoundary>\n    </CacheProvider>\n  );\n}\n")),(0,o.kt)("p",null,"Note: Once ",(0,o.kt)("inlineCode",{parentName:"p"},"<AsyncBoundary />")," catches an error it will only render the fallback\nuntil it is remounted. To get around this you'll likely want to place the boundary at\nlocations that will cause remounts when the error should be cleared. This is usually\nbelow the route itself."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);