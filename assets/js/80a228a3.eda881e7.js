(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[9916],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,r)=>{"use strict";r.d(t,{Z:()=>ye});var n=r(67294),o=r(98416),s=r(88300),a=r(81593),i=r(63312),l=r(33186),c=r(52803),u=r(44431),d=r.n(u),p=r(49909),m=r(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:r.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,r,n){return r.updatedAt<=n.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:b})}}h.urlRoot="/api/todos";const g=(e,t,r)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...r,updatedAt:e.fetchedAt}),y=(e,t,r)=>({...r,updatedAt:e.fetchedAt}),b=(e,t)=>({...t,updatedAt:e.fetchedAt});var v=r(87462),E=r(61313),k=r(86010),w=r(95999),R=r(52263),x=r(72389),O=r(51548),N=r(55423),T=r(84195),C=r(58699),S=r(28808),U=r(16909),P=r(28224),Z=r(91262);const A="playgroundContainer_sLUA",I="row_YGZs",j="hidden_Hh8i",D="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",F="playgroundPreview_rk9R",M="playgroundError_sRnA",B="playgroundResult_tefG",L="debugToggle_zlro",V="tabControls_trxh",z="tabs_m54V",G="tab_bTGw",H="selected_QXZk";var J=r(60522),X=r(83552);function $(e){let{value:t}=e;const{isDarkTheme:r}=(0,O.If)(),o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return n.createElement(X.L,{shouldExpandNode:K,data:t,valueRenderer:q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"}})}function K(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const Y="undefined"!=typeof Intl;function q(e,t){const r=arguments.length<=2?void 0:arguments[2];return Y&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function Q(e){let{toggle:t,selectedValue:r}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:L,onClick:t},"Store"),"y"===r?n.createElement(te,null):null)}const W=(0,n.memo)(Q);function ee(){const e=(0,n.useContext)(J.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return n.createElement($,{value:t})}const te=(0,n.memo)(ee);function re(e){let{groupId:t,defaultOpen:r,row:o}=e;const{tabGroupChoices:s,setTabGroupChoices:a}=(0,O.UB)(),[i,l]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:c}=(0,O.o5)();if(null!=t){const e=s[t];null!=e&&e!==i&&l(e)}const u=(0,n.useCallback)((e=>{c(e.currentTarget),l((e=>"y"===e?"n":"y")),a(t,"y"===i?"n":"y")}),[c,t,i,a]),d=(0,n.useMemo)((()=>[new P.Z,new C.Z(S.Z)]),[]),p=!("n"===i||!o);return n.createElement(U.nq,{managers:d},n.createElement("div",{className:(0,k.Z)(F,{[j]:p})},n.createElement(Z.Z,{fallback:n.createElement(oe,null)},(()=>n.createElement(n.Suspense,{fallback:n.createElement(oe,null)},n.createElement(E.i5,null),n.createElement(E.IF,{className:M}))))),n.createElement(W,{selectedValue:i,toggle:u}))}const ne=(0,n.memo)(re);function oe(){return n.createElement("div",null,"Loading...")}function se(e){let{children:t,className:r}=e;return n.createElement("div",{className:(0,k.Z)(D,r)},t)}function ae(e){let{groupId:t,defaultOpen:r,row:o}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(se,null,n.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:B},n.createElement(ne,{groupId:t,defaultOpen:r,row:o})))}function ie(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(T.Z);return n.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:s}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,k.Z)(G,{[H]:e===o}),onFocus:t,onClick:t,value:o},s)})))}function le(e){let{children:t}=e;return n.createElement(se,{className:V},n.createElement("div",null,t),n.createElement(ie,null))}function ce(e){let{title:t}=e;const{values:r}=(0,n.useContext)(T.Z),o=r.length>0,s=(0,x.Z)();return n.createElement("div",null,o?n.createElement(le,null,t):n.createElement(se,null,t),n.createElement(E.uz,{key:s,className:_}))}function ue(e){let{children:t,transformCode:r,groupId:o,defaultOpen:s,row:a,hidden:i=!1,...l}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,R.Z)(),u=(0,O.pJ)();l.scope;return n.createElement("div",{className:(0,k.Z)(A,{[I]:a,[j]:i})},n.createElement(E.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:r||(e=>(e=>N.transpileModule(e,{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},l),"top"===c?n.createElement(n.Fragment,null,n.createElement(ae,{groupId:o,defaultOpen:s,row:a}),n.createElement(ce,null)):n.createElement(n.Fragment,null,n.createElement(ce,null),n.createElement(ae,{groupId:o,defaultOpen:s,row:a}))))}ce.defaultProps={title:n.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};var de=r(71481),pe=r(42910);class me extends i.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}me.schema={updatedAt:Date};const fe=new s.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:me});const he={...o,...a,...c,...l,mockFetch:function(e,t,r){void 0===r&&(r=150);const n=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return new Promise((t=>setTimeout((()=>t(e(...n))),r)))};return t&&Object.defineProperty(n,"name",{value:t,writable:!1}),n},BigNumber:d(),lastUpdated:fe,TimedEntity:me,CurrentTime:function(){const[e,t]=(0,n.useState)((()=>new Date));return(0,n.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),n.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[r,o]=n.useState(0),{resetEntireStore:s}=(0,de.Z)();return n.createElement(pe.Z,{key:r,fallbackComponent:e=>{let{error:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:M},t.message," ",n.createElement("i",null,t.status)),n.createElement("button",{onClick:()=>{s(),o((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ge=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:s="n",row:a=!1}=e;return n.createElement(ue,{scope:he,noInline:!0,groupId:r,defaultOpen:s,row:a,hidden:o},"string"==typeof t?t:t.props.children.props.children)},ye=(0,n.memo)(ge)},67002:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(9790);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},i=void 0,l={unversionedId:"guides/nested-response",id:"version-6.2/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-6.2/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/6.2/guides/nested-response",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"docs",previous:{title:"Multi-column primary key",permalink:"/docs/6.2/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/6.2/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useSuspense(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);