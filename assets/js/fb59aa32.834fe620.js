"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"useResetter()"},s=void 0,i={unversionedId:"api/useResetter",id:"version-6.1/api/useResetter",title:"useResetter()",description:"Use Controller.resetEntireStore() instead",source:"@site/versioned_docs/version-6.1/api/useResetter.md",sourceDirName:"api",slug:"/api/useResetter",permalink:"/docs/6.1/api/useResetter",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResetter.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"useResetter()"},sidebar:"version-6.1/docs",previous:{title:"useInvalidator()",permalink:"/docs/6.1/api/useInvalidator"},next:{title:"Upgrading from 5 to 6",permalink:"/docs/6.1/upgrade/upgrading-to-6"}},l={},c=[{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Controller#resetEntireStore"},"Controller.resetEntireStore()")," instead")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResetter(): () => void;\n")),(0,a.kt)("p",null,"Mostly useful for imperatively resetting the cache."),(0,a.kt)("p",null,"Does not accept any arguments will always reset when called."),(0,a.kt)("p",null,"This is more than just expiring the items.  Useful when so much has changed\ne.g. impersonating a user that the entire cache set must be thrown away and\nretrieved again."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\n// Server returns the logged in user\nexport default class CurrentUserResource extends Resource {\n  readonly id: string = null;\n  readonly name: string = '';\n  // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useResource(CurrentUserResource.detail(), { });\n  const resetCache = useResetter();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // Empty the cache\n    resetCache();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')))}p.isMDXComponent=!0}}]);