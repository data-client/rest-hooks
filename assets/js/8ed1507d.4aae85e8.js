"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62040],{30433:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010),l="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:r},t)}},22808:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(87462),a=r(67294),l=r(86010),i=r(63735),u=r(76775),o=r(34423),s=r(20636),c=r(99200);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,a.useEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var b=r(5730),v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g,i?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},88705:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(30433),a=r(22808),l=r(67294);function i(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(n.Z,{value:"simple"},t[0]),l.createElement(n.Z,{value:"generics"},t[1]))}},64610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(88705);const i={title:"useFetch()"},u=void 0,o={unversionedId:"api/useFetch",id:"version-6.4/api/useFetch",title:"useFetch()",description:"useFetch() - Declarative fetch triggers",source:"@site/versioned_docs/version-6.4/api/useFetch.md",sourceDirName:"api",slug:"/api/useFetch",permalink:"/docs/6.4/api/useFetch",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/useFetch.md",tags:[],version:"6.4",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"useFetch()"},sidebar:"docs",previous:{title:"useSubscription()",permalink:"/docs/6.4/api/useSubscription"},next:{title:"useDLE()",permalink:"/docs/6.4/api/useDLE"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Conditional",id:"conditional",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"useFetch() - Declarative fetch triggers"),(0,a.kt)("meta",{name:"docsearch:pagerank",content:"10"})),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetch(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Promise<any> | undefined;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetch<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(endpoint: E, ...args: Args): ReturnType<E>;\n"))),(0,a.kt)("p",null,"Great for retrieving resources optimistically before they are needed."),(0,a.kt)("p",null,"This can be useful for ensuring resources early in a render tree before they are needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"/docs/6.4/api/Controller#invalidate"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returned promise will reject"))),(0,a.kt)("li",{parentName:"ul"},"On fetch returns a promise else undefined.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use in combination with a data-binding hook (",(0,a.kt)("a",{parentName:"p",href:"/docs/6.4/api/useCache"},"useCache()"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.4/api/useSuspense"},"useSuspense()"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.4/api/useDLE"},"useDLE()"),")\nin another component.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id }: { id: number }) {\n  useFetch(PostResource.get, { id });\n  // ...\n}\n")),(0,a.kt)("h3",{id:"conditional"},"Conditional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id, doNotFetch }: { id: number; doNotFetch: boolean }) {\n  useFetch(PostResource.get, doNotFetch ? null : { id });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/createResource#get"},"get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/createResource#getlist"},"getList"))),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," as well."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);