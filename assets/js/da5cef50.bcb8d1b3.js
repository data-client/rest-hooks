(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[74063],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r=n(67294),i=n(98416),a=n(88300),l=n(81593),o=n(63312),s=n(33186),c=n(52803),d=n(44431),u=n.n(d),p=n(49909),m=n(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class g extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:h})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:v})}}g.urlRoot="/api/todos";const h=(e,t,n)=>({id:t.id,...e.getResponse(g.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),y=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(87462),E=n(61313),b=n(86010),w=n(95999),A=n(52263),x=n(72389),O=n(51548),D=n(55423),T=n(84195),N=n(58699),P=n(28808),C=n(16909),S=n(28224),Z=n(91262);const j="playgroundContainer_sLUA",F="row_YGZs",I="hidden_Hh8i",R="playgroundHeader_Zx4K",U="playgroundEditor_lYwu",_="playgroundPreview_rk9R",L="playgroundError_sRnA",M="playgroundResult_tefG",H="debugToggle_zlro",V="tabControls_trxh",z="tabs_m54V",B="tab_bTGw",G="selected_QXZk";var J=n(60522),X=n(83552);function $(e){let{value:t}=e;const{isDarkTheme:n}=(0,O.If)(),i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:K,data:t,valueRenderer:q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"}})}function K(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Y="undefined"!=typeof Intl;function q(e,t){const n=arguments.length<=2?void 0:arguments[2];return Y&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function Q(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:t},"Store"),"y"===n?r.createElement(te,null):null)}const W=(0,r.memo)(Q);function ee(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement($,{value:t})}const te=(0,r.memo)(ee);function ne(e){let{groupId:t,defaultOpen:n,row:i}=e;const{tabGroupChoices:a,setTabGroupChoices:l}=(0,O.UB)(),[o,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,O.o5)();if(null!=t){const e=a[t];null!=e&&e!==o&&s(e)}const d=(0,r.useCallback)((e=>{c(e.currentTarget),s((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[c,t,o,l]),u=(0,r.useMemo)((()=>[new S.Z,new N.Z(P.Z)]),[]),p=!("n"===o||!i);return r.createElement(C.nq,{managers:u},r.createElement("div",{className:(0,b.Z)(_,{[I]:p})},r.createElement(Z.Z,{fallback:r.createElement(ie,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ie,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:L}))))),r.createElement(W,{selectedValue:o,toggle:d}))}const re=(0,r.memo)(ne);function ie(){return r.createElement("div",null,"Loading...")}function ae(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(R,n)},t)}function le(e){let{groupId:t,defaultOpen:n,row:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ae,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:M},r.createElement(re,{groupId:t,defaultOpen:n,row:i})))}function oe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,b.Z)(B,{[G]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function se(e){let{children:t}=e;return r.createElement(ae,{className:V},r.createElement("div",null,t),r.createElement(oe,null))}function ce(e){let{title:t}=e;const{values:n}=(0,r.useContext)(T.Z),i=n.length>0,a=(0,x.Z)();return r.createElement("div",null,i?r.createElement(se,null,t):r.createElement(ae,null,t),r.createElement(E.uz,{key:a,className:U}))}function de(e){let{children:t,transformCode:n,groupId:i,defaultOpen:a,row:l,hidden:o=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,A.Z)(),d=(0,O.pJ)();s.scope;return r.createElement("div",{className:(0,b.Z)(j,{[F]:l,[I]:o})},r.createElement(E.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>D.transpileModule(e,{compilerOptions:{module:D.ModuleKind.ESNext,target:D.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:d},s),"top"===c?r.createElement(r.Fragment,null,r.createElement(le,{groupId:i,defaultOpen:a,row:l}),r.createElement(ce,null)):r.createElement(r.Fragment,null,r.createElement(ce,null),r.createElement(le,{groupId:i,defaultOpen:a,row:l}))))}ce.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},de.defaultProps={row:!1};var ue=n(71481),pe=n(42910);class me extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}me.schema={updatedAt:Date};const fe=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:me});const ge={...i,...l,...c,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u(),lastUpdated:fe,TimedEntity:me,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:a}=(0,ue.Z)();return r.createElement(pe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:L},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),i((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},he=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a="n",row:l=!1}=e;return r.createElement(de,{scope:ge,noInline:!0,groupId:n,defaultOpen:a,row:l,hidden:i},"string"==typeof t?t:t.props.children.props.children)},ye=(0,r.memo)(he)},40940:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(9790);const l={title:"Validation"},o=void 0,s={unversionedId:"getting-started/validation",id:"version-6.2/getting-started/validation",title:"Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.2/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.2/getting-started/validation",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/6.2/getting-started/expiry-policy"},next:{title:"Usage",permalink:"/docs/6.2/rest/usage"}},c={},d=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n      '3': { id: '3', title: { complex: 'second', object: 5 } },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockArticleList = mockFetch(\n  () => [\n    { id: '1', title: 'first' },\n    { id: '2', title: 'second' },\n  ],\n  'mockArticleList',\n);\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': {\n        id: '1',\n        title: 'first',\n        content: 'long',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n      '2': {\n        id: '2',\n        title: 'second',\n        content: 'short',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n    }[id]),\n  'mockArticleDetail',\n);\n\nclass ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst articleList = new Endpoint(mockArticleList, { schema: [ArticlePreview] });\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(articleDetail, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{cursor: 'pointer'}}>&lt;</a> {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(articleList, {});\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div key={article.pk()} onClick={() => setRoute(article.id)} style={{cursor: 'pointer'}}>\n            {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);