"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93676],{13987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Aborting Fetch"},i=void 0,s={unversionedId:"guides/abort",id:"version-7.0/guides/abort",title:"Aborting Fetch",description:"AbortController provides a new way of cancelling",source:"@site/versioned_docs/version-7.0/guides/abort.md",sourceDirName:"guides",slug:"/guides/abort",permalink:"/docs/7.0/guides/abort",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/guides/abort.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Aborting Fetch"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/7.0/guides/immediate-updates"},next:{title:"Redux integration",permalink:"/docs/7.0/guides/redux"}},l={},c=[{value:"Resource",id:"resource",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Cancelling on params change",id:"cancelling-on-params-change",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController")," provides a new way of cancelling\nfetches that are no longer considered relevant. This can be hooked into fetch via the second ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestInit")," parameter."),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("p",null,"Easy integration is provided with the ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," via the signal member:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const abort = new AbortController();\nconst AbortableArticle = CoolerArticleResource.get.extend({\n  signal: abort.signal,\n});\n// ...somewhere later trigger cancellation\nabort.abort();\n")),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,"Additionally similar functionality can easily be added to any endpoint using custom members."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Params = { id: string };\n\nconst UserDetail = new Endpoint(\n  function ({ id }: Params) {\n    const init: RequestInit = {};\n    if (this.signal) {\n      init.signal = this.signal;\n    }\n    return fetch(this.url({ id }), init).then(res => res.json()) as Promise<\n      typeof payload\n    >;\n  },\n  {\n    url({ id }: Params) { return `/users/${id}` },\n    signal: undefined as AbortSignal | undefined,\n  },\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const abort = new AbortController();\nconst AbortableUserDetail = UserDetail.extend({\n  signal: abort.signal,\n});\n// ...somewhere later trigger cancellation\nabort.abort();\n")),(0,a.kt)("h2",{id:"cancelling-on-params-change"},"Cancelling on params change"),(0,a.kt)("p",null,"Sometimes a user has the opportunity to fill out a field that is used to affect the results of a network call.\nIf this is a text input, they could potentially type quite quickly, thus creating a lot of network requests."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/hooks")," package with ",(0,a.kt)("a",{parentName:"p",href:"../api/useCancelling"},"useCancelling()")," will automatically cancel in-flight requests if the parameters\nchange before the request is resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCancelling } from '@rest-hooks/hooks';\n\nconst CancelingUserList = useCancelling(UserList, { query });\nconst users = useSuspense(CancelingUserList, { query });\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: Be careful when using this with many disjoint components fetching the same\narguments (Endpoint/params pair) to useSuspense(). This solution aborts fetches per-component,\nwhich means you might end up canceling a fetch that another component still cares about.")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);