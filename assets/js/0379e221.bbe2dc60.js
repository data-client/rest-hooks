"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[30833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Capturing Mutation Side-Effects"},i=void 0,s={unversionedId:"guides/rpc",id:"version-6.2/guides/rpc",title:"Capturing Mutation Side-Effects",description:"How to deal with side-effects",source:"@site/versioned_docs/version-6.2/guides/rpc.md",sourceDirName:"guides",slug:"/guides/rpc",permalink:"/docs/6.2/guides/rpc",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rpc.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Capturing Mutation Side-Effects"},sidebar:"docs",previous:{title:"Nesting related resources (server-side join)",permalink:"/docs/6.2/guides/nested-response"},next:{title:"Custom networking library",permalink:"/docs/6.2/guides/custom-networking"}},c={},p=[{value:"How to deal with side-effects",id:"how-to-deal-with-side-effects",level:2},{value:"Example:",id:"example",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-deal-with-side-effects"},"How to deal with side-effects"),(0,o.kt)("p",null,"If you have an endpoint that updates many resources on your server,\nthere is a straightforward mechanism to get all those updates\nto your client in one request."),(0,o.kt)("p",null,"By defining a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint")," method on your resource,\nyou'll be able to use custom response endpoints that still\nupdated ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"' normalized cache."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("p",null,"You're running a crypto trading platform called ",(0,o.kt)("inlineCode",{parentName:"p"},"dogebase"),". Every time\na user creates a trade, you need to update some balance information\nin their accounts object. So upon ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"ing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/trade/")," endpoint,\nyou nest both the updated accounts object along with the trade you just\ncreated."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /trade/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trade": {\n    "id": 2893232,\n    "user": 1,\n    "amount": "50.2335324",\n    "coin": "doge",\n    "created_at": ""\n  },\n  "account": {\n    "id": 899,\n    "user": 1,\n    "balance": "1337.00",\n    "coin_value": "3.50"\n  }\n}\n')),(0,o.kt)("p",null,"To handle this, we just need to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," to include the custom\nendpoint."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TradeResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass TradeResource extends Resource {\n  // ...\n  static create<T extends typeof Resource>(this: T) {\n    return super.create().extend({\n      schema: {\n        trade: this,\n        account: AccountResource,\n      },\n    });\n  }\n}\n")),(0,o.kt)("p",null,"Now if when we use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource#create-endpoint"},"create()")," Endpoint generator method,\nwe will be happy knowing both the trade and account information will\nbe updated in the cache after the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request is complete."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CreateTrade.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function CreateTrade() {\n  const { fetch } = useController();\n  const create = (payload) => fetch(TradeResource.create(), {}, payload)\n  //...\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"Feel free to create completely new ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint")," methods for any custom\nendpoints you have. This endpoint tells ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks")," how to process any\nrequest.")))}d.isMDXComponent=!0}}]);