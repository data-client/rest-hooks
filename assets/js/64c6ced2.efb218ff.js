"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92531],{30433:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},22808:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(63735),s=r(76775),u=r(34423),i=r(20636),p=r(99200);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=h({queryString:r,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),k=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var k=r(5730),g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=i[r].value;a!==s&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},45633:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(30433),n=r(22808),o=r(67294);function l(e){let{children:t}=e;return o.createElement(n.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},o.createElement(a.Z,{value:"before"},t[0]),o.createElement(a.Z,{value:"after"},t[1]))}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(13743),n=r(30433),o=r(22808),l=r(67294);function s(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(a.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(a.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(64820);const o={React:a,...a,...n};t.Z=o},47170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=(r(45633),r(52393));const l={title:"Upgrading from 6 to 7"},s=void 0,u={unversionedId:"upgrade/upgrading-to-7",id:"version-7.0/upgrade/upgrading-to-7",title:"Upgrading from 6 to 7",description:"@rest-hooks/react is now a peerDependency",source:"@site/versioned_docs/version-7.0/upgrade/upgrading-to-7.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-7",permalink:"/docs/7.0/upgrade/upgrading-to-7",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-7.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Upgrading from 6 to 7"},sidebar:"docs",previous:{title:"useRetrieve()",permalink:"/docs/7.0/api/useRetrieve"},next:{title:"Upgrading from 5 to 6",permalink:"/docs/7.0/upgrade/upgrading-to-6"}},i={},p=[{value:"Removals",id:"removals",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"FetchShape -&gt; Endpoint",id:"fetchshape---endpoint",level:2},{value:"Test @9",id:"test-9",level:2},{value:"Preparing for the future",id:"preparing-for-the-future",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{pkgs:"rest-hooks@7 @rest-hooks/react@6 @rest-hooks/redux@6 @rest-hooks/test@9",upgrade:!0,mdxType:"PkgTabs"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/react"},"@rest-hooks/react")," is now a peerDependency\nso be sure to install it. The ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rest-hooks"},"rest-hooks")," will eventually\nonly proxy to exporting its members."),(0,n.kt)("h2",{id:"removals"},"Removals"),(0,n.kt)("p",null,"The following previously deprecated members were removed in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hasUsableData() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#getResponse"},"Controller.getResponse")),(0,n.kt)("li",{parentName:"ul"},"useFetcher() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("li",{parentName:"ul"},"useInvalidateDispatcher() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("li",{parentName:"ul"},"useInvalidator() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("li",{parentName:"ul"},"useResetter() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#resetEntireStore"},"Controller.resetEntireStore"))),(0,n.kt)("p",null,"This functionality has been moved to ",(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/api/Controller"},"Controller"),", accessible through\n",(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/api/useController"},"useController()")),(0,n.kt)("p",null,"Redux-related members have been moved to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/redux"},"@rest-hooks/redux"),"\nand have been removed from 'rest-hooks'. Be sure to update their import location to refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/redux"},"@rest-hooks/redux")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/ExternalCacheProvider"},"ExternalCacheProvider")),(0,n.kt)("li",{parentName:"ul"},"PromiseifyMiddleware"),(0,n.kt)("li",{parentName:"ul"},"mapMiddleware")),(0,n.kt)("h2",{id:"deprecations"},"Deprecations"),(0,n.kt)("p",null,"The following members have been marked as deprecated. Consider changing them after upgrade:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useresource"},"useResource()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useSuspense"},"useSuspense()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useMeta"},"useMeta()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useError"},"useError()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useRetrieve"},"useRetrieve()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/7.0/api/useFetch"},"useFetch()"))),(0,n.kt)("h2",{id:"fetchshape---endpoint"},"FetchShape -> Endpoint"),(0,n.kt)("p",null,"The new hooks only support ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface"),". ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"Endpoints"),"\nhave been around since 2020, so we expect most to already be upgraded by this point."),(0,n.kt)("p",null,"However, if you still have FetchShapes, you can easily convert them to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface")," by\nusing ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"'s shapeToEndpoint"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { shapeToEndpoint } from '@rest-hooks/legacy';\n\nfunction MyComponent() {\n  const endpoint: any = useMemo(() => {\n    return shapeToEndpoint(fetchShape);\n    // we currently don't support shape changes\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  const mydata = useSuspense(endpoint, params);\n  //...\n}\n")),(0,n.kt)("h2",{id:"test-9"},"Test @9"),(0,n.kt)("p",null,"Old-style fixtures using FetchShape were removed here."),(0,n.kt)("p",null,"Before:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fixtures = [\n  {\n    request: CoolerArticleResource.detailShape(),\n    params,\n    result: payload,\n  },\n];\n")),(0,n.kt)("p",null,"After:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fixtures = [\n  {\n    endpoint: shapeToEndpoint(CoolerArticleResource.detailShape()),\n    args: [payload],\n    response: payload,\n  },\n];\n")),(0,n.kt)("h2",{id:"preparing-for-the-future"},"Preparing for the future"),(0,n.kt)("p",null,"Once you have successfully upgraded, you can try converting all 'rest-hooks' imports to '@rest-hooks/react'.\nThis will become the recommended way to consume rest hooks when using React. The 'rest-hooks' package will\nstill work but eventually remove any additions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"import {} from 'rest-hooks'")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"import {} from '@rest-hooks/react'"))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);