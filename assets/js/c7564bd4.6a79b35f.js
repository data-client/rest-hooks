/*! For license information please see c7564bd4.6a79b35f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83188,59550,70641,43796,58965,59661,70279,43543,58593,57556,74333,62384,61373,56806],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=k.prototype;var v=g.prototype=new b;v.constructor=g,h(v,k.prototype),v.isPureReactComponent=!0;var N=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,a){var r,o={},s=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return s=s(i=e),e=""===o?"."+D(i,0):o,N(s)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),O(s,t,r,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",N(e))for(var u=0;u<e.length;u++){var c=o+D(l=e[u],u);i+=O(l,t,r,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)i+=O(l=l.value,t,r,c=o+D(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var a=[],r=0;return O(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},R={transition:null}},27378:(e,t,n)=>{n(41535)},30433:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),s=n(63735),l=n(76775),i=n(34423),u=n(20636),c=n(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var y=n(5730),k="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function E(e){const t=(0,y.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(30433),r=n(22808),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},27084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(27378),n(3905)),o=n(22808),s=n(30433);n(47885);const l={title:"Entity and Data Normalization",sidebar_label:"Data Normalization"},i=void 0,u={unversionedId:"concepts/normalization",id:"concepts/normalization",title:"Entity and Data Normalization",description:"Entities have a primary key. This enables easy access via a lookup table.",source:"@site/../docs/core/concepts/normalization.md",sourceDirName:"concepts",slug:"/concepts/normalization",permalink:"/docs/concepts/normalization",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/concepts/normalization.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1673811824,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"Entity and Data Normalization",sidebar_label:"Data Normalization"},sidebar:"docs",previous:{title:"Comparison",permalink:"/docs/getting-started/comparison"},next:{title:"Expiry Policy",permalink:"/docs/concepts/expiry-policy"}},c={},p=[{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",level:2},{value:"Schema",id:"schema",level:2},{value:"Nesting",id:"nesting",level:3},{value:"Data Representations",id:"data-representations",level:3}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"docsearch:pagerank",content:"40"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,r.kt)(o.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"},{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"State",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entities cache",src:n(31923).Z,width:"1600",height:"596"}))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n'))),(0,r.kt)(s.Z,{value:"Endpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,r.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useSuspense(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,r.kt)("p",null,"Extracting entities from a response is known as ",(0,r.kt)("inlineCode",{parentName:"p"},"normalization"),". Accessing a response reverses\nthe process via ",(0,r.kt)("inlineCode",{parentName:"p"},"denormalization"),"."),(0,r.kt)("admonition",{title:"Global Referential Equality",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using entities expands Rest Hooks' global referential equality guarantee beyond the granularity of\nan entire endpoint response.")),(0,r.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,r.kt)("p",null,"When an endpoint changes data, this is known as a ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/rpc"},"side effect"),". Marking an endpoint with ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#sideeffect"},"sideEffect: true"),"\ntells Rest Hooks that this endpoint is not idempotent, and thus should not be allowed in hooks\nthat may call the endpoint an arbitrary number of times like ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useFetch"},"useFetch()")),(0,r.kt)("p",null,"By including the changed data in the endpoint's response, Rest Hooks is able to able to update\nany entities it extracts by specifying the schema."),(0,r.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint } from '@rest-hooks/rest';\n\nconst todoCreate = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos',\n  method: 'POST',\n  schema: Todo,\n});\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from '@rest-hooks/react';\n\nexport default function NewTodoForm() {\n  const ctrl = useController();\n  return (\n    <Form onSubmit={e => ctrl.fetch(todoCreate, new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint } from '@rest-hooks/rest';\n\nconst todoUpdate = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  method: 'PUT',\n  schema: Todo,\n});\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from '@rest-hooks/react';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  const ctrl = useController();\n  return (\n    <Form\n      onSubmit={e => ctrl.fetch(todoUpdate, { id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, RestEndpoint } from '@rest-hooks/rest';\n\nconst todoDelete = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  method: 'DELETE',\n  schema: new schema.Delete(Todo),\n});\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from '@rest-hooks/react';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const ctrl = useController();\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => ctrl.fetch(todoDelete, { id: todo.id })}>\n        Delete\n      </button>\n    </div>\n  );\n}\n"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mutations automatically update the normalized cache, resulting in consistent and fresh data.")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Schemas are a declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint } from '@rest-hooks/rest';\n\nconst getTodoList = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos',\n  // highlight-next-line\n  schema: [Todo],\n});\n")),(0,r.kt)("p",null,"Placing our ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo")," in an array, tells Rest Hooks to expect\nan array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Todos"),"."),(0,r.kt)("p",null,"Aside from array, there are a few more 'schemas' provided for various patterns. The first two (Object and Array)\nhave shorthands of using object and array literals."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Object"},"Object"),": maps with known keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Array"},"Array"),": variably sized arrays"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Union"},"Union"),": select from many different types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Values"},"Values"),": maps with any keys - variably sized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Delete"},"Delete"),": remove an entity")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Learn more")),(0,r.kt)("h3",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," themselves can specify ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"nested schemas"),"\nby specifying a ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"static schema")," member."),(0,r.kt)(o.Z,{defaultValue:"Entity",values:[{label:"Entity",value:"Entity"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  // highlight-start\n  static schema = {\n    user: User,\n  };\n  // highlight-end\n}\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly username: string = '';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5,\n  "user": {\n    "id": 10,\n    "username": "bob"\n  },\n  "title": "Write some Entities",\n  "completed": false\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"Learn more")),(0,r.kt)("h3",{id:"data-representations"},"Data Representations"),(0,r.kt)("p",null,"Additionally, any ",(0,r.kt)("inlineCode",{parentName:"p"},"newable")," class that has a toJSON() method, can be ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"used as a schema"),". This will simply construct the object during denormalization.\nThis might be useful with representations like ",(0,r.kt)("a",{parentName:"p",href:"https://mikemcl.github.io/bignumber.js/"},"bignumber")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n  // highlight-next-line\n  readonly dueDate: Date = new Date(0);\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static schema = {\n    user: User,\n    // highlight-next-line\n    dueDate: Date,\n  };\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Due to the global referential equality guarantee - construction of members only occurs once\nper update.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31923:(e,t,n)=>{t.Z=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"}}]);