"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[11121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"DevToolsManager implements Manager",sidebar_label:"DevToolsManager"},i=void 0,s={unversionedId:"api/DevToolsManager",id:"version-6.0/api/DevToolsManager",title:"DevToolsManager implements Manager",description:"Integrates with Redux DevTools to track",source:"@site/versioned_docs/version-6.0/api/DevToolsManager.md",sourceDirName:"api",slug:"/api/DevToolsManager",permalink:"/docs/6.0/api/DevToolsManager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/DevToolsManager.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"DevToolsManager implements Manager",sidebar_label:"DevToolsManager"},sidebar:"version-6.0/docs",previous:{title:"PollingSubscription",permalink:"/docs/6.0/api/PollingSubscription"},next:{title:"<MockResolver />",permalink:"/docs/6.0/api/MockResolver"}},l={},p=[{value:"constructor(options: Arguments)",id:"constructoroptions-arguments",level:2},{value:"More info",id:"more-info",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class DevToolsManager implements Manager\n")),(0,o.kt)("p",null,"Integrates with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools")," to track\nstate and actions. Note: does not integrate time-travel."),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")," to your\nbrowser to get started."),(0,o.kt)("h2",{id:"constructoroptions-arguments"},"constructor(options: Arguments)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md"},"Arguments"),"\nto send to redux devtools."),(0,o.kt)("h2",{id:"more-info"},"More info"),(0,o.kt)("p",null,"Using this Manager allows ",(0,o.kt)("a",{parentName:"p",href:"../guides/debugging"},"debugging")," with redux-devtools."))}u.isMDXComponent=!0}}]);