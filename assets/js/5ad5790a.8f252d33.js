"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),s=r(86010),o=r(72389),l=r(67392),i=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[N,I]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==N&&v.some((t=>t.value===e))&&I(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==N&&(x(t),I(n),null!=f&&w(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(65488),a=r(85162),s=r(67294),o=r(75690);function l(e){let{pkgs:t,dev:r=!1}=e;return s.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var n=r(67294),a=r(72887);const s={React:n,...n,...a};t.Z=s},48475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),s=r(96497),o=r(65488),l=r(85162);const i={title:"Fetching Media"},u=void 0,c={unversionedId:"guides/binary-fetches",id:"version-6.0/guides/binary-fetches",title:"Fetching Media",description:"After setting up Rest Hooks for structured data fetching, you might want to incorporate",source:"@site/versioned_docs/version-6.0/guides/binary-fetches.md",sourceDirName:"guides",slug:"/guides/binary-fetches",permalink:"/docs/6.0/guides/binary-fetches",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/binary-fetches.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"Fetching Media"},sidebar:"version-6.0/docs",previous:{title:"Dealing with network errors",permalink:"/docs/6.0/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/6.0/guides/infinite-scrolling-pagination"}},p={},d=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],m={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,a.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,a.kt)(o.Z,{defaultValue:"useResource",values:[{label:"useResource",value:"useResource"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"useResource",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useResource(getPhoto, { userId });\n"))),(0,a.kt)(l.Z,{value:"useCache",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,a.kt)(l.Z,{value:"JS/Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,a.kt)("h2",{id:"just-images"},"Just Images"),(0,a.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("h4",{id:"prefetching"},"Prefetching"),(0,a.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource, useRetrieve } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useRetrieve(getImage, { src: imageSrc });\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("p",null,"When using the ",(0,a.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}f.isMDXComponent=!0}}]);