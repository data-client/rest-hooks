"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38037],{86856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(22808),s=n(30433);const o={title:"Custom endpoints"},u=void 0,l={unversionedId:"guides/extending-endpoints",id:"version-5.1/guides/extending-endpoints",title:"Custom endpoints",description:"Previously we saw how we could use",source:"@site/rest_versioned_docs/version-5.1/guides/extending-endpoints.md",sourceDirName:"guides",slug:"/guides/extending-endpoints",permalink:"/rest/5.1/guides/extending-endpoints",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/rest/guides/extending-endpoints.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"Custom endpoints"},sidebar:"docs",previous:{title:"URL Patterns",permalink:"/rest/5.1/guides/url"},next:{title:"Typing REST Endpoints",permalink:"/rest/5.1/guides/rest-types"}},d={},p=[{value:"Overriding endpoints",id:"overriding-endpoints",level:2},{value:"Default schema",id:"default-schema",level:3},{value:"Example schema",id:"example-schema",level:3},{value:"Resource definition",id:"resource-definition",level:3},{value:"Additional endpoints",id:"additional-endpoints",level:2},{value:"RPC",id:"rpc",level:3},{value:"Custom GET",id:"custom-get",level:3},{value:"Usage",id:"usage",level:4},{value:"Custom List Endpoints",id:"custom-list-endpoints",level:3},{value:"Usage",id:"usage-1",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/#use-the-resource"},"Previously we saw how we could use"),"\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," hooks to read and mutate\ndata. The first argument of these hooks is known as a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint"),".\nEndpoints are the minimal definition of instructions needed to tell Rest Hooks how to handle\nthose types of requests."),(0,r.kt)("p",null,"Resource comes with a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource#static-network-methods-and-properties"},"small handleful Endpoints"),"\nfor each of the typical ",(0,r.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"CRUD operations"),". This is often not enough."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"TypeScript does not infer ",(0,r.kt)("inlineCode",{parentName:"p"},"super")," properly. When overriding you can either include\nthe schema, or explicitly specify the ",(0,r.kt)("a",{parentName:"p",href:"./rest-types"},"return type")," of the endpoint.")),(0,r.kt)("h2",{id:"overriding-endpoints"},"Overriding endpoints"),(0,r.kt)("p",null,"By default the list() assumes an array of entities returned while detail() assumes\njust the entity returned."),(0,r.kt)("h3",{id:"default-schema"},"Default schema"),(0,r.kt)(i.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "postId": 1,\n  "id": 1,\n  "name": "id labore ex et quam laborum",\n  "email": "Eliseo@gardner.biz",\n  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  },\n  {\n    "postId": 1,\n    "id": 2,\n    "name": "quo vero reiciendis velit similique earum",\n    "email": "Jayne_Kuhic@sydney.com",\n    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n  },\n  {\n    "postId": 1,\n    "id": 3,\n    "name": "odio adipisci rerum aut animi",\n    "email": "Nikita@garfield.biz",\n    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n  }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,r.kt)("h3",{id:"example-schema"},"Example schema"),(0,r.kt)("p",null,"However, often the data is not returned quite so simply. For instance, maybe it can be found in a 'data'\nkey of an object:"),(0,r.kt)(i.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "postId": 1,\n      "id": 1,\n      "name": "id labore ex et quam laborum",\n      "email": "Eliseo@gardner.biz",\n      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n    },\n    {\n      "postId": 1,\n      "id": 2,\n      "name": "quo vero reiciendis velit similique earum",\n      "email": "Jayne_Kuhic@sydney.com",\n      "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n    },\n    {\n      "postId": 1,\n      "id": 3,\n      "name": "odio adipisci rerum aut animi",\n      "email": "Nikita@garfield.biz",\n      "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,r.kt)("h3",{id:"resource-definition"},"Resource definition"),(0,r.kt)("p",null,"In this case, you'll need to override your detail() and list() definitions to reflect\nthe structure of your data. This is known as a 'schema' definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class CommentResource extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      schema: { data: this },\n    });\n  }\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { data: [this] },\n    });\n  }\n}\n")),(0,r.kt)("p",null,"Here we only overrode the 'schema' part of the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint")," - taking advantage\nof ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"},"super")," to keep\nthe other pieces the same. See ",(0,r.kt)("a",{parentName:"p",href:"./pagination"},"pagination"),", ",(0,r.kt)("a",{parentName:"p",href:"./nested-response"},"nested resources"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"./rpc"},"mutation side-effects")," guide for more examples of custom schemas and overriding\nendpoints."),(0,r.kt)("h2",{id:"additional-endpoints"},"Additional endpoints"),(0,r.kt)("p",null,"In many cases there are more means of interacting with a given resource than the basic CRUD\noperations. Often this means a custom RPC call, or even a custom retrieval endpoint. We'll demonstrate\na few examples here, but be sure to learn more about ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint"),"s to\ndefine exactly what your endpoint needs."),(0,r.kt)("h3",{id:"rpc"},"RPC"),(0,r.kt)("p",null,"In this example, we have an RPC endpoint located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/[id]/make_manager"),". This endpoint\ndoesn't expect any body, but is a POST request. Because it is so similar to a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource#create"},"create()"),"\nwe'll be extended that schema definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  static makeManager<T extends typeof Resource>(this: T) {\n    const endpoint = this.create();\n    return endpoint.extend({\n      url({ id }: { id: number }) { return `/users/${id}/make_manager` },\n      fetch({ id }: { id: number }) {\n        return endpoint.fetch.call(this, { id });\n      }\n    });\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Params of { id: number }"),(0,r.kt)("li",{parentName:"ul"},"No Body"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h3",{id:"custom-get"},"Custom GET"),(0,r.kt)("p",null,"Normally we can look up user resources like any other - with their 'id'. However,\nhow do we get the currently logged in user? One way is to define a special url\njust for retrieving the current user. In this case - ",(0,r.kt)("inlineCode",{parentName:"p"},"/current_user/"),". Since there\nis only one - we won't need to send any params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static current<T extends typeof Resource>(this: T) {\n    const endpoint = this.detail();\n    return endpoint.extend({\n      fetch() { return endpoint.call(this); }\n      url() { return '/current_user/' },\n    })\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No params"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nexport default function CurrentUserProfilePage() {\n  const loggedInUser = useSuspense(UserResource.current());\n\n  return <ProfileDetail user={loggedInUser} />;\n}\n")),(0,r.kt)("h3",{id:"custom-list-endpoints"},"Custom List Endpoints"),(0,r.kt)("p",null,"Sometimes we have endpoints that select particular results. We set the url\nin our custom ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint")," function,\nand ensure the data is normalized and typed\ncorrectly via the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint#schema"},"schema")," definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class BirthdayResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly name: string = '';\n  readonly image: string = '';\n  readonly source: string = '';\n  readonly date: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/api/birthdays/';\n\n  /** Lists all upcoming birthdays */\n  static upcoming<T extends typeof Resource>(this: T) {\n    const endpoint = this.list();\n    return this.list().extend({\n      fetch() { return endpoint.fetch.call(this); }\n      url() { return '/current_user/' },\n      schema: {\n        withinSevenDays: [this],\n        withinThirtyDays: [this],\n      },\n    });\n  }\n}\n")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport BirthdayResource from 'resources/user';\n\nexport default function UpcomingBirthdays() {\n  const { withinSevenDays, withinThirtyDays } = useSuspense(\n    BirthdayResource.upcoming(),\n    {},\n  );\n\n  return (\n    <div>\n      <h2>Next Seven</h2>\n      <div>\n        {withinSevenDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n      <h2>Next Thirty</h2>\n      <div>\n        {withinThirtyDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0},30433:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),s=n(63735),o=n(76775),u=n(34423),l=n(20636),d=n(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,l]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),l(e),f(e)}),[l,f,i]),tabValues:i}}var y=n(5730),g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=l[n].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},s,{className:(0,i.Z)("tabs__item",v,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);