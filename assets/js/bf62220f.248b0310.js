(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[77178],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Oe});var n=r(67294),o=r(4391),s=r(12171),a=r(56265),i=r(78357),l=r(56855),c=r(99494),u=r(70794),d=r(86429),p=r(67288);class m extends a.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,r,n){return void 0===r.updatedAt||r.updatedAt<=n.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:r,Endpoint:n=d.Z}=e;const o=(0,p.Z)({path:t,schema:r,Endpoint:n}),s=o.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{...await o.partialUpdate.call(this,...t),id:t[0].id}}});return{...o,partialUpdate:s,create:o.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{...await o.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,r)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...r,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var b=r(87462),v=r(49544),E=r(86010),k=r(95999),x=r(52263),w=r(72389),R=r(66412),O=r(55423),N=r(84195),T=r(27093),C=r(26127),Z=r(82038),U=r(83611),P=r(39714),S=r(7094),A=r(12466),I=r(91262);const j="playgroundContainer_sLUA",D="row_YGZs",_="hidden_Hh8i",F="playgroundHeader_Zx4K",M="playgroundEditor_lYwu",L="playgroundPreview_rk9R",z="playgroundError_sRnA",V="playgroundResult_tefG",B="debugToggle_zlro",$="tabControls_trxh",G="tabs_m54V",J="tab_bTGw",H="selected_QXZk";var X=r(32041),q=r(97723),K=r(92949);function Y(e){let{value:t}=e;const r="dark"===(0,K.I)().colorMode,o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[r,o]);return n.createElement(q.L,{shouldExpandNode:Q,data:t,valueRenderer:ee,theme:s,hideRoot:!0})}function Q(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function ee(e,t){const r=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:r}=e;const o="y"===r?"0":"180";return n.createElement(n.Fragment,null,n.createElement("div",{className:B,onClick:t},"Store",n.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${o}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===r?n.createElement(oe,null):null)}const re=(0,n.memo)(te);function ne(){const e=(0,n.useContext)(X.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return n.createElement(Y,{value:t})}const oe=(0,n.memo)(ne);function se(e){let{groupId:t,defaultOpen:r,row:o,fixtures:s}=e;const{tabGroupChoices:a,setTabGroupChoices:i}=(0,S.U)(),[l,c]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:u}=(0,A.o5)();if(null!=t){const e=a[t];null!=e&&e!==l&&c(e)}const d=(0,n.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),i(t,"y"===l?"n":"y")}),[u,t,l,i]),p=(0,n.useMemo)((()=>[new U.Z,new T.Z(C.Z)]),[]),m=!("n"===l||!o);return n.createElement(Z.nq,{managers:p},n.createElement(P.Z,{fixtures:s,silenceMissing:!1},n.createElement("div",{className:(0,E.Z)(L,{[_]:m})},n.createElement(I.Z,{fallback:n.createElement(ie,null)},(()=>n.createElement(n.Suspense,{fallback:n.createElement(ie,null)},n.createElement(v.i5,null),n.createElement(v.IF,{className:z})))))),n.createElement(re,{selectedValue:l,toggle:d}))}const ae=(0,n.memo)(se);function ie(){return n.createElement("div",null,"Loading...")}function le(e){let{fixtures:t}=e;return n.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args)},n.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",n.createElement(ue,{fixture:e})))))}const ce=(0,n.memo)(le);function ue(e){let{fixture:t}=e;return n.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function de(e){let{children:t,className:r}=e;return n.createElement("div",{className:(0,E.Z)(F,r)},t)}function pe(e){let{groupId:t,defaultOpen:r,row:o,fixtures:s}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(de,null,n.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:V},n.createElement(ae,{groupId:t,defaultOpen:r,row:o,fixtures:s})))}function me(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(N.Z);return n.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:s}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,E.Z)(J,{[H]:e===o}),onFocus:t,onClick:t,value:o},s)})))}function fe(e){let{children:t}=e;return n.createElement(de,{className:$},n.createElement("div",null,t),n.createElement(me,null))}function he(e){let{title:t,fixtures:r}=e;const{values:o}=(0,n.useContext)(N.Z),s=o.length>0,a=(0,w.Z)();return n.createElement("div",null,r.length?n.createElement(n.Fragment,null,n.createElement(de,null,"Fixtures"),n.createElement(ce,{fixtures:r})):null,s?n.createElement(fe,null,t):n.createElement(de,null,t),n.createElement(v.uz,{key:`${a}`,className:M}))}function ge(e){let{children:t,transformCode:r,groupId:o,defaultOpen:s,row:a,hidden:i,fixtures:l,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,x.Z)().siteConfig.themeConfig,d=(0,R.p)();c.scope;return n.createElement("div",{className:(0,E.Z)(j,{[D]:a,[_]:i})},n.createElement(v.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:r||(e=>(e=>O.transpileModule(e,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText)(`${e};`)),theme:d},c),"top"===u?n.createElement(n.Fragment,null,n.createElement(pe,{groupId:o,defaultOpen:s,row:a,fixtures:l}),n.createElement(he,{fixtures:l})):n.createElement(n.Fragment,null,n.createElement(he,{fixtures:l}),n.createElement(pe,{groupId:o,defaultOpen:s,row:a,fixtures:l}))))}he.defaultProps={title:n.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ge.defaultProps={row:!1,hidden:!1};var ye=r(64146),be=r(82026);class ve extends a.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ve.schema={updatedAt:Date};const Ee=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ve});const ke={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},xe={...s,...i,...c,...l,mockFetch:function(e,t,r){void 0===r&&(r=150);const n=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return new Promise((t=>setTimeout((()=>t(e(...n))),r)))};return t&&Object.defineProperty(n,"name",{value:t,writable:!1}),n},BigNumber:u.Z,lastUpdated:Ee,TimedEntity:ve,CurrentTime:function(){const[e,t]=(0,n.useState)((()=>new Date));return(0,n.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),n.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[r,o]=n.useState(0),{resetEntireStore:s}=(0,ye.Z)();return n.createElement(be.Z,{key:r,fallbackComponent:e=>{let{error:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:z},t.message," ",n.createElement("i",null,t.status)),n.createElement("button",{onClick:()=>{s(),o((e=>e+1))}},"Clear Error"))}},t)}},we={...xe,Todo:f,TodoResource:ke,TodoEndpoint:h},Re=e=>{let{children:t,endpointCode:r,groupId:o,hidden:s=!1,defaultOpen:a,row:i=!1,fixtures:l}=e;return n.createElement(ge,{scope:r?xe:we,noInline:!0,groupId:o,defaultOpen:a,row:i,hidden:s,fixtures:l},(r?r+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};Re.defaultProps={defaultOpen:"n",fixtures:[]};const Oe=(0,n.memo)(Re)},24815:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(46313);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},i=void 0,l={unversionedId:"guides/nested-response",id:"version-6.1/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-6.1/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/6.1/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"version-6.1/docs",previous:{title:"Multi-column primary key",permalink:"/docs/6.1/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/6.1/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useResource(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);