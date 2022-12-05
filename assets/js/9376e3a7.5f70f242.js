"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11919],{30433:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65559:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),s=a(5730),o=a(20636),i=a(76602),p=a(63735),u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:s,values:d,groupId:m,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[E,x]=(0,r.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,a=S.indexOf(t),n=h[a].value;n!==E&&(w(t),x(n),null!=m&&k(m,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:T,onClick:N},s,{className:(0,l.Z)("tabs__item",c,s?.className,{"tabs__item--active":E===t})}),a??t)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},88705:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(30433),r=a(65559),l=a(67294);function s(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(n.Z,{value:"simple"},t[0]),l.createElement(n.Z,{value:"generics"},t[1]))}},47885:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(30433),r=a(65559),l=a(67294);function s(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(n.Z,{value:"ts"},t[0]),l.createElement(n.Z,{value:"js"},t[1]))}},57489:(e,t,a)=>{var n=a(67294),r=a(64820);const l={React:n,...n,...r};t.Z=l},30297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=(a(47885),a(65559),a(30433),a(31922)),s=a(13743),o=a(88705);const i={title:"Snapshot"},p=void 0,u={unversionedId:"api/Snapshot",id:"version-6.5/api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/versioned_docs/version-6.5/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/6.5/api/Snapshot",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/6.5/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/6.5/api/useSuspense"}},c={},d=[{value:"getResponse(endpoint, ...args)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"getError(endpoint, ...args)",id:"getError",level:2},{value:"fetchedAt",id:"fetchedat",level:2}],m={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,r.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},l.Z)),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.5/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot")),(0,r.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,r.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,r.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,r.kt)("h3",{id:"data"},"data"),(0,r.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,r.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,r.kt)("h4",{id:"valid"},"Valid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will never suspend."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalid"},"Invalid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will always suspend"),(0,r.kt)("li",{parentName:"ul"},"Will always fetch")),(0,r.kt)("h3",{id:"expiresat"},"expiresAt"),(0,r.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,r.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,r.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,r.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,r.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}f.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31922:(e,t)=>{t.Z="import type { ErrorTypes } from './ErrorTypes.js';\nimport type { EndpointInterface } from './interface.js';\nimport type { DenormalizeNullable } from './normal.js';\n\nexport interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n\n// looser version to allow for cross-package version compatibility\nexport type ExpiryStatusInterface = 1 | 2 | 3;\n"}}]);