(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[50250],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Oe});var r=n(67294),i=n(4391),a=n(12171),l=n(56265),o=n(78357),s=n(56855),c=n(99494),d=n(70794),u=n(86429),p=n(67288);class m extends l.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class g extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const h=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const i=(0,p.Z)({path:t,schema:n,Endpoint:r}),a=i.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.partialUpdate.call(this,...t),id:t[0].id}}});return{...i,partialUpdate:a,create:i.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:g}),y={...h,partialUpdate:h.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(h.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:h.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[h.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:h.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),E=n(49544),k=n(86010),b=n(95999),x=n(52263),w=n(72389),A=n(66412),O=n(55423),D=n(84195),T=n(27093),N=n(26127),P=n(82038),Z=n(83611),C=n(39714),S=n(7094),j=n(12466),F=n(91262);const I="playgroundContainer_sLUA",R="row_YGZs",U="hidden_Hh8i",L="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",M="playgroundPreview_rk9R",V="playgroundError_sRnA",H="playgroundResult_tefG",z="debugToggle_zlro",B="tabControls_trxh",$="tabs_m54V",q="tab_bTGw",G="selected_QXZk";var J=n(32041),X=n(97723),K=n(92949);function Y(e){let{value:t}=e;const n="dark"===(0,K.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(X.L,{shouldExpandNode:Q,data:t,valueRenderer:ee,theme:a,hideRoot:!0})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;const i="y"===n?"0":"180";return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store",r.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${i}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===n?r.createElement(ie,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Y,{value:t})}const ie=(0,r.memo)(re);function ae(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;const{tabGroupChoices:l,setTabGroupChoices:o}=(0,S.U)(),[s,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,j.o5)();if(null!=t){const e=l[t];null!=e&&e!==s&&c(e)}const u=(0,r.useCallback)((e=>{d(e.currentTarget),c((e=>"y"===e?"n":"y")),o(t,"y"===s?"n":"y")}),[d,t,s,o]),p=(0,r.useMemo)((()=>[new Z.Z,new T.Z(N.Z)]),[]),m=!("n"===s||!i);return r.createElement(P.nq,{managers:p},r.createElement(C.Z,{fixtures:a,silenceMissing:!1},r.createElement("div",{className:(0,k.Z)(M,{[U]:m})},r.createElement(F.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(oe,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:V})))))),r.createElement(ne,{selectedValue:s,toggle:u}))}const le=(0,r.memo)(ae);function oe(){return r.createElement("div",null,"Loading...")}function se(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(de,{fixture:e})))))}const ce=(0,r.memo)(se);function de(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function ue(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,k.Z)(L,n)},t)}function pe(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ue,null,r.createElement(b.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:H},r.createElement(le,{groupId:t,defaultOpen:n,row:i,fixtures:a})))}function me(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(D.Z);return r.createElement("div",{className:$,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,k.Z)(q,{[G]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function fe(e){let{children:t}=e;return r.createElement(ue,{className:B},r.createElement("div",null,t),r.createElement(me,null))}function ge(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(D.Z),a=i.length>0,l=(0,w.Z)();return r.createElement("div",null,n.length?r.createElement(r.Fragment,null,r.createElement(ue,null,"Fixtures"),r.createElement(ce,{fixtures:n})):null,a?r.createElement(fe,null,t):r.createElement(ue,null,t),r.createElement(E.uz,{key:`${l}`,className:_}))}function he(e){let{children:t,transformCode:n,groupId:i,defaultOpen:a,row:l,hidden:o,fixtures:s,...c}=e;const{liveCodeBlock:{playgroundPosition:d}}=(0,x.Z)().siteConfig.themeConfig,u=(0,A.p)();c.scope;return r.createElement("div",{className:(0,k.Z)(I,{[R]:l,[U]:o})},r.createElement(E.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>O.transpileModule(e,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText)(`${e};`)),theme:u},c),"top"===d?r.createElement(r.Fragment,null,r.createElement(pe,{groupId:i,defaultOpen:a,row:l,fixtures:s}),r.createElement(ge,{fixtures:s})):r.createElement(r.Fragment,null,r.createElement(ge,{fixtures:s}),r.createElement(pe,{groupId:i,defaultOpen:a,row:l,fixtures:s}))))}ge.defaultProps={title:r.createElement(b.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},he.defaultProps={row:!1,hidden:!1};var ye=n(64146),ve=n(82026);class Ee extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ee.schema={updatedAt:Date};const ke=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ee});const be={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},xe={...a,...o,...c,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d.Z,lastUpdated:ke,TimedEntity:Ee,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:a}=(0,ye.Z)();return r.createElement(ve.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),i((e=>e+1))}},"Clear Error"))}},t)}},we={...xe,Todo:f,TodoResource:be,TodoEndpoint:g},Ae=e=>{let{children:t,endpointCode:n,groupId:i,hidden:a=!1,defaultOpen:l,row:o=!1,fixtures:s}=e;return r.createElement(he,{scope:n?xe:we,noInline:!0,groupId:i,defaultOpen:l,row:o,hidden:a,fixtures:s},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};Ae.defaultProps={defaultOpen:"n",fixtures:[]};const Oe=(0,r.memo)(Ae)},26680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(46313);const l={title:"Entity Validation",sidebar_label:"Validation"},o=void 0,s={unversionedId:"getting-started/validation",id:"version-6.3/getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.3/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.3/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/6.3/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/6.3/guides/debugging"}},c={},d=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n      '3': { id: '3', title: { complex: 'second', object: 5 } },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockArticleList = mockFetch(\n  () => [\n    { id: '1', title: 'first' },\n    { id: '2', title: 'second' },\n  ],\n  'mockArticleList',\n);\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': {\n        id: '1',\n        title: 'first',\n        content: 'long',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n      '2': {\n        id: '2',\n        title: 'second',\n        content: 'short',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n    }[id]),\n  'mockArticleDetail',\n);\n\nclass ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst articleList = new Endpoint(mockArticleList, { schema: [ArticlePreview] });\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(articleDetail, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{cursor: 'pointer'}}>&lt;</a> {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(articleList, {});\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div key={article.pk()} onClick={() => setRoute(article.id)} style={{cursor: 'pointer'}}>\n            {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);