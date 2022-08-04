"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[40952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:b,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:E}=(0,l.U)(),[N,w]=(0,a.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(S(t),w(r),null!=b&&E(b,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},t[0]),o.createElement(a.Z,{value:"generics"},t[1]))}},57462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(11048);const s={title:"useSubscription()"},i=void 0,l={unversionedId:"api/useSubscription",id:"version-6.0/api/useSubscription",title:"useSubscription()",description:"Great for keeping resources up-to-date with frequent changes.",source:"@site/versioned_docs/version-6.0/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/6.0/api/useSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"useSubscription()"},sidebar:"version-6.0/docs",previous:{title:"useCache()",permalink:"/docs/6.0/api/useCache"},next:{title:"useRetrieve()",permalink:"/docs/6.0/api/useRetrieve"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): void;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): void;\n"))),(0,a.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,a.kt)("p",null,"When using the default ",(0,a.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Send ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every Endpoint */\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  useSubscription(PriceResource.detail(), { symbol });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detail(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,a.kt)("p",null,"Using the last argument ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Be sure to extend these ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint"),"s with a pollFrequency to set\nthe polling-rate."))}d.isMDXComponent=!0}}]);