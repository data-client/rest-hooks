"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[40050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"NetworkManager implements Manager",sidebar_label:"NetworkManager",id:"NetworkManager",original_id:"NetworkManager"},i=void 0,s={unversionedId:"api/NetworkManager",id:"version-4.5/api/NetworkManager",title:"NetworkManager implements Manager",description:"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests",source:"@site/versioned_docs/version-4.5/api/NetworkManager.md",sourceDirName:"api",slug:"/api/NetworkManager",permalink:"/docs/4.5/api/NetworkManager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/NetworkManager.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"NetworkManager implements Manager",sidebar_label:"NetworkManager",id:"NetworkManager",original_id:"NetworkManager"},sidebar:"version-4.5/docs",previous:{title:"Manager",permalink:"/docs/4.5/api/Manager"},next:{title:"SubscriptionManager",permalink:"/docs/4.5/api/SubscriptionManager"}},l={},c=[{value:"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)",id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000",level:2},{value:"Consumed Actions",id:"consumed-actions",level:2},{value:"Processed Actions",id:"processed-actions",level:2},{value:"Dispatched Actions",id:"dispatched-actions",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests\nit is able to dedupe identical requests if they are made using the throttle flag."),(0,a.kt)("h2",{id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000"},"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)"),(0,a.kt)("p",null,"Arguments represent the default time (in miliseconds) before a resource is considered 'stale'."),(0,a.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,a.kt)("p",null,"Will initiate network request and then dispatch upon completion."),(0,a.kt)("h2",{id:"processed-actions"},"Processed Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")),(0,a.kt)("p",null,"Marks request as complete."),(0,a.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")))}u.isMDXComponent=!0}}]);