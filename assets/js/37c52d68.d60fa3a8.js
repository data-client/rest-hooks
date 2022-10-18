/*! For license information please see 37c52d68.d60fa3a8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53111],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,h(k,y.prototype),k.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a,o={},s=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,a)&&!I.hasOwnProperty(a)&&(o[a]=t[a]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];o.children=i}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:r,type:e,key:s,ref:l,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===o?"."+j(u,0):o,w(s)?(a="",null!=e&&(a=e.replace(O,"$&/")+"/"),P(s,t,a,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",w(e))for(var i=0;i<e.length;i++){var c=o+j(l=e[i],i);u+=P(l,t,a,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),i=0;!(l=e.next()).done;)u+=P(l=l.value,t,a,c=o+j(l,i++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},Z={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),o=r(86010),s=r(72389),l=r(67392),u=r(7094),i=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var t;const{lazy:r,block:s,defaultValue:f,values:d,groupId:m,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===f?f:f??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,u.U)(),[N,S]=(0,a.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&y.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,r=I.indexOf(t),n=y[r].value;n!==N&&(x(t),S(n),null!=m&&w(m,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;r=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;r=I[t]??I[I.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(65488),a=r(85162),o=r(67294),s=r(75690);function l(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var n=r(67294),a=r(72887);const o={React:n,...n,...a};t.Z=o},5414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var n=r(87462),a=(r(27378),r(3905)),o=r(96497),s=r(65488),l=r(85162);const u={title:"Images and other Media"},i=void 0,c={unversionedId:"guides/img-media",id:"guides/img-media",title:"Images and other Media",description:"Using React Suspense with Images and other Media | Rest Hooks",source:"@site/../docs/core/guides/img-media.md",sourceDirName:"guides",slug:"/guides/img-media",permalink:"/docs/guides/img-media",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/img-media.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Images and other Media"},sidebar:"docs",previous:{title:"Dealing with network errors",permalink:"/docs/concepts/network-errors"},next:{title:"Render as you Fetch",permalink:"/docs/guides/render-as-you-fetch"}},p={},f=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],d={toc:f};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Using React Suspense with Images and other Media | Rest Hooks")),(0,a.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,a.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource")," and ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,a.kt)(s.Z,{defaultValue:"useSuspense",values:[{label:"useSuspense",value:"useSuspense"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"useSuspense",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useSuspense(getPhoto, { userId });\n"))),(0,a.kt)(l.Z,{value:"useCache",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,a.kt)(l.Z,{value:"JS/Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,a.kt)("h2",{id:"just-images"},"Just Images"),(0,a.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Profile.tsx"',title:'"Profile.tsx"'},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useSuspense(UserResource.get, { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n")),(0,a.kt)("h4",{id:"prefetching"},"Prefetching"),(0,a.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Profile.tsx"',title:'"Profile.tsx"'},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense, useFetch } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useFetch(getImage, { src: imageSrc });\n  const user = useSuspense(UserResource.get, { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"When using the ",(0,a.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," to preload the image."))}m.isMDXComponent=!0}}]);