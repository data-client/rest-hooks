"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15102],{35767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Fetching multiple resources at once"},s=void 0,l={unversionedId:"guides/fetch-multiple",id:"version-6.6/guides/fetch-multiple",title:"Fetching multiple resources at once",description:"Parallel",source:"@site/versioned_docs/version-6.6/guides/fetch-multiple.md",sourceDirName:"guides",slug:"/guides/fetch-multiple",permalink:"/docs/6.6/guides/fetch-multiple",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/fetch-multiple.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Fetching multiple resources at once"}},i={},u=[{value:"Parallel",id:"parallel",level:2},{value:"Sequential",id:"sequential",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parallel"},"Parallel"),(0,o.kt)("p",null,"If you have the parameters you needs to fetch, they will all happen in parallel!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useSuspense } from "rest-hooks";\nimport { PostResource, TaskResource } from "/rest/api/resources";\n\nexport default function Post({ name }: { name: string }) {\n  const [post, tasks] = useSuspense(\n    [PostResource.detail(), { name }],\n    [TaskResource.detail(), { name }],\n  );\n  return (\n    <div>\n      <Post post={post} />\n      <Task task={task} />\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"sequential"},"Sequential"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," call ensures the resource returned is available. That means\nthat until that point it will yield running the rest of the component function\nwhen it is loading or errored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useSuspense } from "rest-hooks";\nimport { PostResource, UserResource } from "/rest/api/resources";\n\nexport default function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.detail(), { id });\n  const author = useSuspense(\n    UserResource.detail(),\n    {\n      id: post.userId\n    }\n  );\n  return (\n    <div>\n      <h1>\n        {post.title} by {author && author.name}\n      </h1>\n      <p>{post.body}</p>\n    </div>\n  );\n}\n')))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);