"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38025],{30433:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),s=n(86010),o=n(63735),i=n(76775),l=n(34423),u=n(20636),p=n(99200);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var y=n(5730),k="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,s.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(30433),r=n(22808),s=n(67294);function o(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(a.Z,{value:"ts"},t[0]),s.createElement(a.Z,{value:"js"},t[1]))}},10836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(22808),o=n(30433);n(47885);const i={title:"Entity and Data Normalization",sidebar_label:"Entity"},l=void 0,u={unversionedId:"getting-started/entity",id:"version-6.3/getting-started/entity",title:"Entity and Data Normalization",description:"Entities have a primary key. This enables easy access via a lookup table.",source:"@site/versioned_docs/version-6.3/getting-started/entity.md",sourceDirName:"getting-started",slug:"/getting-started/entity",permalink:"/docs/6.3/getting-started/entity",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/getting-started/entity.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Entity and Data Normalization",sidebar_label:"Entity"},sidebar:"docs",previous:{title:"Data Dependencies",permalink:"/docs/6.3/getting-started/data-dependency"},next:{title:"Expiry Policy",permalink:"/docs/6.3/getting-started/expiry-policy"}},p={},d=[{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",level:2},{value:"Schema",id:"schema",level:2},{value:"Nesting",id:"nesting",level:3},{value:"Data Representations",id:"data-representations",level:3}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,r.kt)(s.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"},{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"State",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entities cache",src:n(31923).Z,width:"1600",height:"596"}))),(0,r.kt)(o.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n'))),(0,r.kt)(o.Z,{value:"Endpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,r.kt)(o.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useSuspense(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,r.kt)("p",null,"Extracting entities from a response is known as ",(0,r.kt)("inlineCode",{parentName:"p"},"normalization"),". Accessing a response reverses\nthe process via ",(0,r.kt)("inlineCode",{parentName:"p"},"denormalization"),"."),(0,r.kt)("admonition",{title:"Global Referential Equality",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using entities expands Rest Hooks' global referential equality guarantee beyond the granularity of\nan entire endpoint response.")),(0,r.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,r.kt)("p",null,"When an endpoint changes data, this is known as a ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/rpc"},"side effect"),". Marking an endpoint with ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#sideeffect"},"sideEffect: true"),"\ntells Rest Hooks that this endpoint is not idempotent, and thus should not be allowed in hooks\nthat may call the endpoint an arbitrary number of times like ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/useFetch"},"useFetch()")),(0,r.kt)("p",null,"By including the changed data in the endpoint's response, Rest Hooks is able to able to update\nany entities it extracts by specifying the schema."),(0,r.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoCreate = new Endpoint(\n  (body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/`, {\n      method: 'POST',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nexport default function NewTodoForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(todoCreate, new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoUpdate = new Endpoint(\n  ({ id }: { id: number }, body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'PUT',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  const { fetch } = useController();\n  return (\n    <Form\n      onSubmit={e => fetch(todoUpdate, { id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoDelete = new Endpoint(\n  ({ id }: { id: number }) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'DELETE',\n    }).then(() => ({ id })),\n  { schema: new schema.Delete(Todo), sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const { fetch } = useController();\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => del(todoDelete, { id: todo.id })}>Delete</button>\n    </div>\n  );\n}\n"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mutations automatically update the normalized cache, resulting in consistent and fresh data.")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Schemas are a declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoList = (params: any) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.json());\n\nconst todoList = new Endpoint(fetchTodoList, {\n  // highlight-next-line\n  schema: [Todo],\n  sideEffect: true,\n});\n")),(0,r.kt)("p",null,"Placing our ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo")," in an array, tells Rest Hooks to expect\nan array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Todos"),"."),(0,r.kt)("p",null,"Aside from array, there are a few more 'schemas' provided for various patterns. The first two (Object and Array)\nhave shorthands of using object and array literals."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Object"},"Object"),": maps with known keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Array"},"Array"),": variably sized arrays"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Union"},"Union"),": select from many different types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Values"},"Values"),": maps with any keys - variably sized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Delete"},"Delete"),": remove an entity")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Learn more")),(0,r.kt)("h3",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," themselves can specify ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"nested")," ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"schemas"),"\nby specifying a ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"static schema")," member."),(0,r.kt)(s.Z,{defaultValue:"Entity",values:[{label:"Entity",value:"Entity"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  // highlight-start\n  static schema = {\n    user: User,\n  };\n  // highlight-end\n}\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly username: string = '';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5,\n  "user": {\n    "id": 10,\n    "username": "bob",\n  },\n  "title": "Write some Entities",\n  "completed": false\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"Learn more")),(0,r.kt)("h3",{id:"data-representations"},"Data Representations"),(0,r.kt)("p",null,"Additionally, any ",(0,r.kt)("inlineCode",{parentName:"p"},"newable")," class that has a toJSON() method, can be ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"used as a schema"),". This will simply construct the object during denormalization.\nThis might be useful with representations like ",(0,r.kt)("a",{parentName:"p",href:"https://mikemcl.github.io/bignumber.js/"},"bignumber")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n  // highlight-next-line\n  readonly dueDate: Date = new Date(0);\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static schema = {\n    user: User,\n    // highlight-next-line\n    dueDate: Date,\n  };\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Due to the global referential equality guarantee - construction of members only occurs once\nper update.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31923:(e,t,n)=>{t.Z=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"}}]);