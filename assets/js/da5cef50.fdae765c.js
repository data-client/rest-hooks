"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),l=n(87462),i=n(49544),a=n(86010),o=n(95999),c=n(52263),s=n(66412),d=n(84195),u=n(45440),p=n(75690);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:u.Z.fixtureBlock},t.map((e=>r.createElement(r.Fragment,{key:e.endpoint.key(...e.args)},r.createElement("div",{className:u.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(g,{fixture:e})))))}var f=(0,r.memo)(m);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:u.Z.fixtureJson},JSON.stringify(t.response))}var y,v=n(60975),h=n(51523),k=n(1556);function b(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:l,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===l?0:-1,"aria-selected":e===l,key:l,className:(0,a.Z)(u.Z.tab,{[u.Z.selected]:e===l}),onFocus:t,onClick:t,value:l},i)})))}function E(e){let{children:t}=e;return r.createElement(v.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(b,null))}function Z(e){let{title:t,fixtures:n}=e;const{values:l}=(0,r.useContext)(d.Z),i=l.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(v.Z,{className:u.Z.small},"Fixtures"),r.createElement(f,{fixtures:n})):null,i?r.createElement(E,null,t):null)}function x(e){let{children:t,transformCode:n,groupId:o,defaultOpen:d,row:p,hidden:m,fixtures:f,includeEndpoints:g,...y}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,c.Z)().siteConfig.themeConfig,h=(0,s.p)();return r.createElement("div",{className:(0,a.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(i.nu,(0,l.Z)({theme:h},y),r.createElement(w,{reverse:"top"===v,row:p,fixtures:f,includeEndpoints:g,groupId:o,defaultOpen:d},t)))}function w(e){let{reverse:t,children:n,row:l,fixtures:a,includeEndpoints:o,groupId:c,defaultOpen:s}=e;const d=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[u,p]=(0,r.useReducer)(N,void 0,(()=>d.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>d.map(((e,t)=>e=>p({i:t,code:e})))),[d.length]),[f,g]=(0,r.useState)((()=>d.map((e=>{let{collapsed:t}=e;return t})))),y=u.join("\n");return r.createElement(C,{reverse:t},r.createElement("div",null,r.createElement(Z,{fixtures:!l&&a}),l&&d.length>1?r.createElement(T,{titles:d.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,n)=>n!==e))))}):null,d.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!l&&n?r.createElement(_,{onClick:()=>g((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(D,{key:t,onChange:m[t],code:u[t]}))}))),r.createElement(k.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:o,groupId:c,defaultOpen:s,row:l,fixtures:a}))},r.createElement(O,{code:y,includeEndpoints:o,groupId:c,defaultOpen:s,row:l,fixtures:a})))}Z.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},x.defaultProps={row:!1,hidden:!1};const A="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(y=navigator)?void 0:y.userAgent),O=(0,r.lazy)((()=>A?Promise.resolve({default:e=>null}):Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function C(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}C.defaultProps={reverse:!1};const P=(0,r.memo)(i.uz);function D(e){let{onChange:t,code:n}=e;return r.createElement(P,{className:u.Z.playgroundEditor,onChange:t,code:n})}function _(e){let{onClick:t,closed:n,title:l}=e;return r.createElement(v.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,a.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),l)}function T(e){let{titles:t,closedList:n,onClick:l}=e;const{values:i}=(0,r.useContext)(d.Z),o=i.length>0;return r.createElement(v.Z,{className:(0,a.Z)({[u.Z.small]:o,[u.Z.subtabs]:o},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>l(t),className:(0,a.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}const S=e=>{let{children:t,groupId:n,hidden:l=!1,defaultOpen:i,row:a=!1,fixtures:o}=e;return r.createElement(x,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:a,hidden:l,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};S.defaultProps={defaultOpen:"n",fixtures:[]};var j=(0,r.memo)(S)},1556:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(91262),l=n(67294);function i(e){let{fallback:t,children:n}=e;return l.createElement(r.Z,{fallback:t},(()=>l.createElement(l.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),l=n(86010),i=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,l.Z)(i.Z.playgroundHeader,n,a?i.Z.clickable:null),onClick:a},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),l=n(95999),i=n(27093),a=n(26127),o=n(82038),c=n(83611),s=n(39714),d=n(86010),u=n(7094),p=n(12466),m=n(45440),f=n(32041),g=n(97723),y=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,y.I)().colorMode,l=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:l[t]}}},base0B:"rgb(191, 199, 213)"})),[n,l]);return r.createElement(g.L,{shouldExpandNode:h,data:t,valueRenderer:b,theme:i,hideRoot:!0})}function h(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function b(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const l="y"===n,i=l?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,i,m.Z.vertical)},"\u25b6")),l?r.createElement(w,null):null)}var Z=(0,r.memo)(E);function x(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const w=(0,r.memo)(x);var A=n(1556);function O(e){let{groupId:t,defaultOpen:n,row:l,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:y}=(0,u.U)(),[v,h]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==v&&h(e)}const b=(0,r.useCallback)((e=>{k(e.currentTarget),h((e=>"y"===e?"n":"y")),y(t,"y"===v?"n":"y")}),[k,t,v,y]),E=(0,r.useMemo)((()=>[new c.Z,new i.Z(a.Z)]),[]),x=!("n"===v||!l);return r.createElement(o.nq,{managers:E},r.createElement(s.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(A.Z,{fallback:r.createElement(N,null)},r.createElement(P,null))),r.createElement(Z,{selectedValue:v,toggle:b})))}var C=(0,r.memo)(O);function N(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var D=n(60975);function _(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(D.Z,null,r.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:i,fixtures:a})))}var T=(0,r.memo)(_)},56922:(e,t,n)=>{var r=n(67294),l=n(72887);const i={React:r,...r,...l};t.Z=i},40940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),l=(n(67294),n(3905)),i=n(107);const a={title:"Validation"},o=void 0,c={unversionedId:"getting-started/validation",id:"version-6.2/getting-started/validation",title:"Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.2/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.2/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/6.2/getting-started/expiry-policy"},next:{title:"Usage",permalink:"/docs/6.2/rest/usage"}},s={},d=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,l.kt)("h2",{id:"field-check"},"Field check"),(0,l.kt)("p",null,"Validation happens after ",(0,l.kt)("a",{parentName:"p",href:"../api/Entity#process"},"Entity.process()")," but before ",(0,l.kt)("a",{parentName:"p",href:"../api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,l.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,l.kt)(i.Z,{mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n      '3': { id: '3', title: { complex: 'second', object: 5 } },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,l.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,l.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,l.kt)(i.Z,{mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,l.kt)("h2",{id:"partial-results"},"Partial results"),(0,l.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,l.kt)(i.Z,{mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockArticleList = mockFetch(\n  () => [\n    { id: '1', title: 'first' },\n    { id: '2', title: 'second' },\n  ],\n  'mockArticleList',\n);\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': {\n        id: '1',\n        title: 'first',\n        content: 'long',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n      '2': {\n        id: '2',\n        title: 'second',\n        content: 'short',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n    }[id]),\n  'mockArticleDetail',\n);\n\nclass ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst articleList = new Endpoint(mockArticleList, { schema: [ArticlePreview] });\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(articleDetail, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{cursor: 'pointer'}}>&lt;</a> {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(articleList, {});\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div key={article.pk()} onClick={() => setRoute(article.id)} style={{cursor: 'pointer'}}>\n            {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}p.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}}}]);