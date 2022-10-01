(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[34537],{88487:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a=n(87462),r=(n(67294),n(3905)),l=n(70523),s=n(65488),i=n(85162),o=n(96497),u=n(9790);const c={id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},d=void 0,p={unversionedId:"usage",id:"version-0.2/usage",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/graphql_versioned_docs/version-0.2/usage.md",sourceDirName:".",slug:"/usage",permalink:"/graphql/0.2/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/usage.md",tags:[],version:"0.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Authentication",permalink:"/graphql/0.2/auth"}},m={},g=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],h={toc:g};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,r.kt)(o.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/0.2/api/Entity"},"Entity"),"s are immutable. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using GQLEntities is not required, but is important to achieve data consistency.")),(0,r.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,r.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,r.kt)(i.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/graphql/0.2/api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"/graphql/0.2/api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"SWAPI Demo")),(0,r.kt)(u.Z,{mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,r.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,r.kt)("p",null,"We're using ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,r.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,r.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}f.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),s=n(72389),i=n(67392),o=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,o.U)(),[w,x]=(0,r.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=g){const e=E[g];null!=e&&e!==w&&v.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==w&&(Z(t),x(a),null!=g&&k(g,String(a)))},U=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:U,onFocus:T,onClick:T},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var a=n(67294),r=n(4391),l=n(12171),s=n(56265),i=n(78357),o=n(56855),u=n(99494),c=n(70794),d=n(86429),p=n(67288);class m extends s.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class g extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,a){return void 0===n.updatedAt||n.updatedAt<=a.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const f=function(e){let{path:t,schema:n,Endpoint:a=d.Z}=e;const r=(0,p.Z)({path:t,schema:n,Endpoint:a}),l=r.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await r.partialUpdate.call(this,...t),id:t[0].id}}});return{...r,partialUpdate:l,create:r.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await r.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:g,Endpoint:h}),v={...f,partialUpdate:f.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(f.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:f.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[f.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:f.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var y=n(87462),b=n(49544),E=n(86010),k=n(95999),w=n(52263),x=n(72389),N=n(66412),Z=n(55423),T=n(84195),U=n(27093),S=n(26127),q=n(82038),C=n(54202),I=n(7094),L=n(12466),D=n(91262);const P="playgroundContainer_sLUA",R="row_YGZs",G="hidden_Hh8i",A="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",F="playgroundPreview_rk9R",Q="playgroundError_sRnA",O="playgroundResult_tefG",$="debugToggle_zlro",V="tabControls_trxh",M="tabs_m54V",j="tab_bTGw",z="selected_QXZk";var B=n(32041),H=n(97723),W=n(92949);function Y(e){let{value:t}=e;const{isDarkTheme:n}=(0,W.I)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(H.L,{shouldExpandNode:K,data:t,valueRenderer:J,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function K(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const X="undefined"!=typeof Intl;function J(e,t){const n=arguments.length<=2?void 0:arguments[2];return X&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:$,onClick:t},"Store"),"y"===n?a.createElement(ae,null):null)}const te=(0,a.memo)(ee);function ne(){const e=(0,a.useContext)(B.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(Y,{value:t})}const ae=(0,a.memo)(ne);function re(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:l,setTabGroupChoices:s}=(0,I.U)(),[i,o]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,L.o5)();if(null!=t){const e=l[t];null!=e&&e!==i&&o(e)}const c=(0,a.useCallback)((e=>{u(e.currentTarget),o((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[u,t,i,s]),d=(0,a.useMemo)((()=>[new C.Z,new U.Z(S.Z)]),[]),p=!("n"===i||!r);return a.createElement(q.nq,{managers:d},a.createElement("div",{className:(0,E.Z)(F,{[G]:p})},a.createElement(D.Z,{fallback:a.createElement(se,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(se,null)},a.createElement(b.i5,null),a.createElement(b.IF,{className:Q}))))),a.createElement(te,{selectedValue:i,toggle:c}))}const le=(0,a.memo)(re);function se(){return a.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,E.Z)(A,n)},t)}function oe(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(ie,null,a.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),a.createElement("div",{className:O},a.createElement(le,{groupId:t,defaultOpen:n,row:r})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(T.Z);return a.createElement("div",{className:M,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:l}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,E.Z)(j,{[z]:e===r}),onFocus:t,onClick:t,value:r},l)})))}function ce(e){let{children:t}=e;return a.createElement(ie,{className:V},a.createElement("div",null,t),a.createElement(ue,null))}function de(e){let{title:t}=e;const{values:n}=(0,a.useContext)(T.Z),r=n.length>0,l=(0,x.Z)();return a.createElement("div",null,r?a.createElement(ce,null,t):a.createElement(ie,null,t),a.createElement(b.uz,{key:l,className:_}))}function pe(e){let{children:t,transformCode:n,groupId:r,defaultOpen:l,row:s,hidden:i=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,w.Z)(),c=(0,N.p)();o.scope;return a.createElement("div",{className:(0,E.Z)(P,{[R]:s,[G]:i})},a.createElement(b.nu,(0,y.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>Z.transpileModule(e,{compilerOptions:{module:Z.ModuleKind.ESNext,target:Z.ScriptTarget.ES2017,jsx:"react"}}).outputText)(`${e};`)),theme:c},o),"top"===u?a.createElement(a.Fragment,null,a.createElement(oe,{groupId:r,defaultOpen:l,row:s}),a.createElement(de,null)):a.createElement(a.Fragment,null,a.createElement(de,null),a.createElement(oe,{groupId:r,defaultOpen:l,row:s}))))}de.defaultProps={title:a.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(64146),ge=n(82026);class he extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}he.schema={updatedAt:Date};const fe=new r.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:he});const ve={...v,getList:v.getList.extend({process:e=>e.slice(0,7)})},ye={...l,...i,...u,...o,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:c.Z,lastUpdated:fe,TimedEntity:he,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:l}=(0,me.Z)();return a.createElement(ge.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:Q},t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{l(),r((e=>e+1))}},"Clear Error"))}},t)}},be={...ye,Todo:g,TodoResource:ve,TodoEndpoint:h},Ee=e=>{let{children:t,endpointCode:n,groupId:r,hidden:l=!1,defaultOpen:s="n",row:i=!1}=e;return a.createElement(pe,{scope:n?ye:be,noInline:!0,groupId:r,defaultOpen:s,row:i,hidden:l},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))},ke=(0,a.memo)(Ee)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),l=n(67294);function s(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(65488),r=n(85162),l=n(67294),s=n(75690);function i(e){let{pkgs:t,dev:n=!1}=e;return l.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(r.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),l.createElement(r.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294),r=n(72887);const l={React:a,...a,...r}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);