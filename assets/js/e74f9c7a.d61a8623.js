"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48956],{46425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"<MockProvider />"},i=void 0,s={unversionedId:"api/MockProvider",id:"version-6.6/api/MockProvider",title:"<MockProvider />",description:"&lt;MockResolver /\\> is a simple substitute provider to prefill the cache with fixtures so the 'happy path'",source:"@site/versioned_docs/version-6.6/api/MockProvider.md",sourceDirName:"api",slug:"/api/MockProvider",permalink:"/docs/6.6/api/MockProvider",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/MockProvider.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"<MockProvider />"},sidebar:"docs",previous:{title:"mockInitialState()",permalink:"/docs/6.6/api/mockInitialState"},next:{title:"useFetcher()",permalink:"/docs/6.6/api/useFetcher"}},c={},p=[{value:"Arguments",id:"arguments",level:2},{value:"results",id:"results",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"docsearch:pagerank",content:"-20"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function MockProvider({\n  children,\n  results,\n}: {\n  children: React.ReactChild;\n  results: Fixture[];\n}): JSX.Element;\n")),(0,a.kt)("p",null,"<","MockResolver /",">"," is a simple substitute provider to prefill the cache with fixtures so the 'happy path'\ncan be tested. This is useful for ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/guides/storybook"},"storybook")," as well as component testing."),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"./mockResolver"},"<MockResolver /",">")," instead as it also supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/Controller#fetch"},"imperative fetches")," like ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#create"},"create")," and ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"update"),"."),(0,a.kt)("p",{parentName:"admonition"},"Note: <MockProvider /",">"," disables dispatches, thus no fetches will occur. To simply initalize the\ncache, use ",(0,a.kt)("a",{parentName:"p",href:"./mockInitialState"},"mockInitialState()")," to construct initialState for the normal ",(0,a.kt)("a",{parentName:"p",href:"./CacheProvider"},"<CacheProvider /",">"))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"results"},"results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Fixture {\n  request: ReadEndpoint;\n  params: object;\n  result: object | string | number;\n}\n")),(0,a.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and params. ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"JSX.Element\n")),(0,a.kt)("p",null,"Renders the children prop."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MockProvider } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    request: ArticleResource.getList,\n    params: { maxResults: 10 },\n    result: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n];\n\n<MockProvider results={results}>\n  <MyComponentToTest />\n</MockProvider>\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);