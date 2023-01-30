"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2637],{23144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"<NetworkErrorBoundary />"},l=void 0,i={unversionedId:"api/NetworkErrorBoundary",id:"version-6.5/api/NetworkErrorBoundary",title:"<NetworkErrorBoundary />",description:"Displays a fallback component when a network error happens in its subtree.",source:"@site/versioned_docs/version-6.5/api/NetworkErrorBoundary.md",sourceDirName:"api",slug:"/api/NetworkErrorBoundary",permalink:"/docs/6.5/api/NetworkErrorBoundary",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/NetworkErrorBoundary.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"<NetworkErrorBoundary />"},sidebar:"docs",previous:{title:"<ExternalCacheProvider />",permalink:"/docs/6.5/api/ExternalCacheProvider"},next:{title:"Manager",permalink:"/docs/6.5/api/Manager"}},c={},p=[],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Displays a fallback component when a network error happens in its subtree."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Catches any error with ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Props {\n  children: React.ReactNode;\n  fallbackComponent: React.ComponentType<{\n    error: NetworkError;\n  }>;\n}\nexport default class NetworkErrorBoundary extends React.Component<Props> {\n  static defaultProps: {\n    fallbackComponent: ({ error }: { error: NetworkError }) => JSX.Element;\n  };\n}\n")),(0,o.kt)("p",null,"Custom fallback usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { CacheProvider, NetworkErrorBoundary, NetworkError } from 'rest-hooks';\n\nfunction ErrorPage({ error }: { error: NetworkError }) {\n  return (\n    <div>\n      {error.status} {error.response && error.response.statusText}\n    </div>\n  );\n}\n\nexport default function App(): React.ReactElement {\n  return (\n    <CacheProvider>\n      <NetworkErrorBoundary fallbackComponent={ErrorPage}>\n        <Router />\n      </NetworkErrorBoundary>\n    </CacheProvider>\n  );\n}\n")),(0,o.kt)("p",null,"Note: Once ",(0,o.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary /\\>")," catches an error it will only render the fallback\nuntil it is remounted. To get around this you'll likely want to place the boundary at\nlocations that will cause remounts when the error should be cleared. This is usually\nbelow the route itself."))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);