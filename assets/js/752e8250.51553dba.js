"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48729],{30433:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),l=n(63735),o=n(76775),i=n(34423),u=n(20636),c=n(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var g=n(5730),k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(30433),r=n(22808),s=n(67294);function l(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(a.Z,{value:"simple"},t[0]),s.createElement(a.Z,{value:"generics"},t[1]))}},76640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(88705);const l={id:"useresource",title:"useResource()"},o=void 0,i={unversionedId:"api/useresource",id:"version-6.4/api/useresource",title:"useResource()",description:"useResource() - Data fetching with Suspense",source:"@site/versioned_docs/version-6.4/api/useResource.md",sourceDirName:"api",slug:"/api/useresource",permalink:"/docs/6.4/api/useresource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResource.md",tags:[],version:"6.4",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{id:"useresource",title:"useResource()"},sidebar:"docs",previous:{title:"NetworkManager",permalink:"/docs/6.4/api/NetworkManager"},next:{title:"useRetrieve()",permalink:"/docs/6.4/api/useRetrieve"}},u={},c=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Parallel",id:"parallel",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useResource() - Data fetching with Suspense"),(0,r.kt)("meta",{name:"docsearch:pagerank",content:"-5"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.4/api/useSuspense"},"useSuspense()")," instead")),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource(endpoint: ReadEndpoint, params: object | null):\n  Denormalize<typeof endpoint.schema>;\n\nfunction useResource(...[endpoint: ReadEndpoint, params: object | null]):\n  Denormalize<typeof endpoint.schema>[];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null): Denormalize<S>;\n\nfunction useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(...[endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null]): Denormalize<S>[];\n"))),(0,r.kt)("p",null,"Excellent for retrieving the data you need."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useResource()")," ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,r.kt)("p",null,"Cache policy is ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.4/getting-started/expiry-policy"},"configurable"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or parameters change"),(0,r.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,r.kt)("li",{parentName:"ul"},"or imperative ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.4/api/Controller#invalidate"},"invalidation")," triggered"))),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throws error to be ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,r.kt)("li",{parentName:"ul"},"While Loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.4/api/Controller#invalidate"},"invalidation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResource(PostResource.list(), {});\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"parallel"},"Parallel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResource(\n    [UserResource.detail(), { id: userId }],\n    [PostResource.list(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"sequential"},"Sequential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResource(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useResource(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,r.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useResource(\n    PaginatedPostResource.list(),\n    { page },\n  );\n  // posts as PaginatedPostResource[]\n}\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detail()"),(0,r.kt)("li",{parentName:"ul"},"list()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," as well."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);