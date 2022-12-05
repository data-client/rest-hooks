"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48093],{30433:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),i=n(5730),l=n(20636),s=n(76602),d=n(63735),p="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:i,values:u,groupId:m,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[w,E]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,d.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&g.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==w&&(N(t),E(a),null!=m&&k(m,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:j},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(30433),o=n(65559),r=n(67294);function i(e){let{children:t}=e;return r.createElement(o.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(a.Z,{value:"ts"},t[0]),r.createElement(a.Z,{value:"js"},t[1]))}},73593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=(n(65559),n(30433),n(47885));const i={title:"Define API Endpoint",sidebar_label:"Endpoint"},l=void 0,s={unversionedId:"getting-started/endpoint",id:"version-6.3/getting-started/endpoint",title:"Define API Endpoint",description:"TypeScript Standard Endpoints",source:"@site/versioned_docs/version-6.3/getting-started/endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/endpoint",permalink:"/docs/6.3/getting-started/endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/endpoint.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Define API Endpoint",sidebar_label:"Endpoint"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/6.3/getting-started/installation"},next:{title:"Data Dependencies",permalink:"/docs/6.3/getting-started/data-dependency"}},d={},p=[{value:"More than just a function",id:"more-than-just-a-function",level:2},{value:"Members",id:"members",level:3},{value:"Endpoint.extend()",id:"endpointextend",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"TypeScript Standard Endpoints")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoints")," describe an asynchronous ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),". This includes both runtime behavior as well as (optionally) typing."),(0,o.kt)(r.Z,{mdxType:"LanguageTabs"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await todoDetail({ id: '1' }));\n")),(0,o.kt)("samp",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}\n')))),(0,o.kt)("p",null,"We will likely want to use this endpoint in many places with differing needs.\nBy defining a reusable function of ",(0,o.kt)("em",{parentName:"p"},"just")," the network definition, we empower\nits use in ",(0,o.kt)("em",{parentName:"p"},"any")," context."),(0,o.kt)("p",null,"This is especially useful when we start adding more information related to the\nendpoint. For instance, TypeScript definitions help us avoid common mistakes, typos\nand speed up development with autocomplete."),(0,o.kt)("p",null,"By ",(0,o.kt)("em",{parentName:"p"},"tightly coupling")," the interface definition, while ",(0,o.kt)("em",{parentName:"p"},"loosely coupling")," its usage,\nwe reduce boilerplate, complexity, and common mistakes, while increasing performance and\nenabling global application consistency and integrity even in the face of unreliable\nasynchronous data."),(0,o.kt)("h2",{id:"more-than-just-a-function"},"More than just a function"),(0,o.kt)("p",null,"In addition to an async function and (optional) types, ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),"s are objects,\nallowing them to provide any additional relevant information about the endpoint itself."),(0,o.kt)("p",null,"For instance, to allow integration into a cache as well as knowing when to recompute and/or refetch\nwhen parameters change, Endpoints have a ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#key-params--string"},"key()")," member that serializes\nthe endpoint and parameters to a unique string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log(todoDetail.key({ id: \'1\' }));\n// fetchTodoDetail {"id":"1"}\n')),(0,o.kt)("h3",{id:"members"},"Members"),(0,o.kt)("p",null,"The second optional arg is an object to initialize the endpoint with. By avoiding arrow functions,\nwe can use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this"),"\nto access other members we defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todoDetailWithCustomizedKey = new Endpoint(fetchTodoDetail, {\n  key({ id }) {\n    return `${this.endpointIdentifier}/${id}`;\n  },\n  endpointIdentifier: 'todoDetail',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(todoDetailWithCustomizedKey.key({ id: '1' }));\n// todoDetail/1\n")),(0,o.kt)("h3",{id:"endpointextend"},"Endpoint.extend()"),(0,o.kt)("p",null,"For convenience, ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#extend"},"extend()")," allows type-correct\nprototypical inheritance extensions of an endpoint."),(0,o.kt)("p",null,"This is greatly reduces boilerplate when strong patterns are established for an API like\nauthentication."),(0,o.kt)("p",null,"Here we show the benefits of customizing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"method")," member."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = function ({ id }) {\n  return fetch(`${this.urlBase}/todos/${id}`, { method: this.method }).then(\n    res => res.json(),\n  );\n};\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  method: 'GET',\n  urlBase: 'https://jsonplaceholder.typicode.com',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todoCreate = todoDetail.extend({ method: 'POST' });\nconst todoUpdate = todoDetail.extend({ method: 'PUT' });\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);