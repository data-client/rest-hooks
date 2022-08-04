"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47606],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27334:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"useError()"},i=void 0,s={unversionedId:"api/useError",id:"version-5.0/api/useError",title:"useError()",description:"NetworkError",source:"@site/versioned_docs/version-5.0/api/useError.md",sourceDirName:"api",slug:"/api/useError",permalink:"/docs/5.0/api/useError",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useError.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"useError()"},sidebar:"version-5.0/docs",previous:{title:"useMeta()",permalink:"/docs/5.0/api/useMeta"},next:{title:"useDebounce()",permalink:"/docs/5.0/api/useDebounce"}},u={},p=[],c={toc:p};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SyntheticError extends Error {\n  status: number;\n  response?: undefined;\n  synthetic: true;\n}\n\nfunction useError(\n  endpoint: Endpoint,\n  params: object | null,\n): NetworkError | Unknown | SyntheticError | undefined;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./types#networkerror"},"NetworkError")),(0,o.kt)("p",null,"Provides error information about a request. This builds on ",(0,o.kt)("a",{parentName:"p",href:"./useMeta"},"useMeta()"),",\nbut adds some additional logic."),(0,o.kt)("p",null,"Used in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useRetrieve"},"useRetrieve()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useResource"},"useResource()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useCache"},"useCache()"))))}l.isMDXComponent=!0}}]);