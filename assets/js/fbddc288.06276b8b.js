"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70146],{37725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),i=n(107),a=n(16187);const l={title:"Summary List Endpoints"},o=void 0,c={unversionedId:"guides/summary-list",id:"guides/summary-list",title:"Summary List Endpoints",description:"Sometimes you have a list endpoint that includes",source:"@site/../docs/rest/guides/summary-list.md",sourceDirName:"guides",slug:"/guides/summary-list",permalink:"/rest/guides/summary-list",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/summary-list.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665940115,formattedLastUpdatedAt:"Oct 16, 2022",frontMatter:{title:"Summary List Endpoints"},sidebar:"docs",previous:{title:"Computed Properties",permalink:"/rest/guides/computed-properties"},next:{title:"RestEndpoint",permalink:"/rest/api/RestEndpoint"}},u={},d=[{value:"Detail data in nested entity",id:"detail-data-in-nested-entity",level:2}],m={toc:d};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sometimes you have a ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/createResource#getlist"},"list endpoint")," that includes\nonly a subset of fields."),(0,s.kt)("p",null,"In this case we can use ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," to ensure\nwe have the full response when needed (detail views), while keeping our state ",(0,s.kt)("a",{parentName:"p",href:"https://deviq.com/principles/dont-repeat-yourself"},"DRY")," and normalized to ensure data integrity."),(0,s.kt)(i.Z,{fixtures:[{endpoint:new a.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class ArticleSummary extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  // this ensures `Article` maps to the same entity\n  static get key() {\n    return 'Article';\n  }\n}\n\nclass Article extends ArticleSummary {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    return (\n      validateRequired(processedEntity, this.defaults) ||\n      super.validate(processedEntity)\n    );\n  }\n}\n\nconst BaseArticleResource = new createResource({\n  path: '/article/:id',\n  schema: Article,\n});\nconst ArticleResource = {\n  ...BaseArticleResource,\n  getList: BaseArticleResource.getList.extend({ schema: [ArticleSummary] }),\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"function ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(ArticleResource.getList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))),(0,s.kt)("h2",{id:"detail-data-in-nested-entity"},"Detail data in nested entity"),(0,s.kt)("p",null,"It's often better to move expensive data into another entity to simplify conditional\nlogic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class ArticleSummary extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  pk() {\n    return this.id;\n  }\n  // this ensures `Article` maps to the same entity\n  static get key() {\n    return 'Article';\n  }\n}\n\nclass Article extends ArticleSummary {\n  // highlight-start\n  readonly meta: ArticleMeta = ArticleMeta.fromJS({});\n\n  static schema = {\n    ...super.schema,\n    meta: ArticleMeta,\n  }\n  // highlight-end\n\n  static validate(processedEntity) {\n    return (\n      validateRequired(processedEntity, this.defaults) ||\n      super.validate(processedEntity)\n    );\n  }\n}\n\nclass ArticleMeta extends Entity {\n  readonly viewCount: number = 0;\n  readonly likeCount: number = 0;\n  readonly relatedArticles: ArticleSummary[] = [];\n\n  static schema = {\n    relatedArticles: [ArticleSummary],\n  }\n}\n\nconst BaseArticleResource = new createResource({\n  path: '/article/:id',\n  schema: Article,\n});\nconst ArticleResource = {\n  ...BaseArticleResource,\n  getList: BaseArticleResource.getList.extend({ schema: [ArticleSummary] }),\n};\n")))}h.isMDXComponent=!0},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(67294),s=n(87462),i=n(49544),a=n(86010),l=n(95999),o=n(52263),c=n(66412),u=n(84195),d=n(45440),m=n(75690);function h(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement(r.Fragment,{key:e.endpoint.key(...e.args)},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var p=(0,r.memo)(h);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(m.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g,y=n(60975),v=n(51523),b=n(1556);function E(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},i)})))}function k(e){let{children:t}=e;return r.createElement(y.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(E,null))}function Z(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),i=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:d.Z.small},"Fixtures"),r.createElement(p,{fixtures:n})):null,i?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:l,defaultOpen:u,row:m,hidden:h,fixtures:p,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,v=(0,c.p)();return r.createElement("div",{className:(0,a.Z)(d.Z.playgroundContainer,{[d.Z.row]:m,[d.Z.hidden]:h})},r.createElement(i.nu,(0,s.Z)({theme:v},g),r.createElement(x,{reverse:"top"===y,row:m,fixtures:p,includeEndpoints:f,groupId:l,defaultOpen:u},t)))}function x(e){let{reverse:t,children:n,row:s,fixtures:a,includeEndpoints:l,groupId:o,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,m]=(0,r.useReducer)(O,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>u.map(((e,t)=>e=>m({i:t,code:e})))),[u.length]),[p,f]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),g=d.join("\n");return r.createElement(C,{reverse:t},r.createElement("div",null,r.createElement(Z,{fixtures:!s&&a}),s&&u.length>1?r.createElement(P,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:p,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(N,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:p[t],title:n}):null,p[t]?null:r.createElement(_,{key:t,onChange:h[t],code:d[t]}))}))),r.createElement(b.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(v.Z,{key:"preview",includeEndpoints:l,groupId:o,defaultOpen:c,row:s,fixtures:a}))},r.createElement(S,{code:g,includeEndpoints:l,groupId:o,defaultOpen:c,row:s,fixtures:a})))}Z.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1};const A="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(g=navigator)?void 0:g.userAgent),S=(0,r.lazy)((()=>A?Promise.resolve({default:e=>null}):Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function C(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function O(e,t){const n=[...e];return n[t.i]=t.code,n}C.defaultProps={reverse:!1};const R=(0,r.memo)(i.uz);function _(e){let{onChange:t,code:n}=e;return r.createElement(R,{className:d.Z.playgroundEditor,onChange:t,code:n})}function N(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(y.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,a.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function P(e){let{titles:t,closedList:n,onClick:s}=e;const{values:i}=(0,r.useContext)(u.Z),l=i.length>0;return r.createElement(y.Z,{className:(0,a.Z)({[d.Z.small]:l,[d.Z.subtabs]:l},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const j=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:i,row:a=!1,fixtures:l}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:a,hidden:s,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};j.defaultProps={defaultOpen:"n",fixtures:[]};var D=(0,r.memo)(j)},1556:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(91262),s=n(67294);function i(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),s=n(86010),i=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,s.Z)(i.Z.playgroundHeader,n,a?i.Z.clickable:null),onClick:a},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(67294),s=n(95999),i=n(27093),a=n(26127),l=n(82038),o=n(83611),c=n(39714),u=n(86010),d=n(7094),m=n(12466),h=n(45440),p=n(32041),f=n(97723),g=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:v,data:t,valueRenderer:E,theme:i,hideRoot:!0})}function v(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function k(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,i=s?h.Z.right:h.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:h.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(h.Z.arrow,i,h.Z.vertical)},"\u25b6")),s?r.createElement(x,null):null)}var Z=(0,r.memo)(k);function w(){const e=(0,r.useContext)(p.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const x=(0,r.memo)(w);var A=n(1556);function S(e){let{groupId:t,defaultOpen:n,row:s,fixtures:p}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,v]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,m.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&v(e)}const E=(0,r.useCallback)((e=>{b(e.currentTarget),v((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[b,t,y,g]),k=(0,r.useMemo)((()=>[new o.Z,new i.Z(a.Z)]),[]),w=!("n"===y||!s);return r.createElement(l.nq,{managers:k},r.createElement(c.Z,{fixtures:p,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(h.Z.playgroundPreview,{[h.Z.hidden]:w})},r.createElement(A.Z,{fallback:r.createElement(O,null)},r.createElement(R,null))),r.createElement(Z,{selectedValue:y,toggle:E})))}var C=(0,r.memo)(S);function O(){return r.createElement("div",null,"Loading...")}const R=(0,r.lazy)((()=>Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var _=n(60975);function N(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(_.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:h.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:i,fixtures:a})))}var P=(0,r.memo)(N)},56922:(e,t,n)=>{var r=n(67294),s=n(72887);const i={React:r,...r,...s};t.Z=i},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},16187:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(70760),s=n(11857);function i(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let a=!1;try{Function()}catch(w){a=!0}class l extends Function{constructor(e,t){let n;return a?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),i(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,i=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return i.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return i(n,{...this.options,...e}),n}}var o=n(92586);const c={};const u={};const d=Object.prototype,m=Object.getPrototypeOf;class h extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function p(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(p(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,i)=>{const a=`${i}`,[l,o,c]=n(t.get(a),e[a]);return o||(r=!1),c&&(s=!0),t.has(a)?t.set(a,l):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,i=!1;return Object.keys(e).forEach((t=>{const[a,l,o]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),o&&(i=!0),l||(s=!1)})),[r,s,i]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,i){const a=this.inferSchema(e,t,n);if(!a)return e;const l=r(e,t,n,a,s,i);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(p(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:p(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,i){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,s,i))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,i,a)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],o=s(t[n],t,n,r,i,a);null==o?delete l[n]:l[n]=o})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const i of Object.keys(e))s[i]=r(e[i],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function v(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];return{[e.key(...t(...i))]:e=>{const t=b(e,n),s=new Set(t),i=b(r,n).filter((e=>!s.has(e))),a=[...t,...i];return E(e,n,a)}}}}const b=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},E=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let i=0;i<t.length-1;i++){const e=t[i];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var k=(0,s.Z)("hasBody");class Z extends l{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,k)[k]&&t.length<2?{}:t[0]||{},i=(0,r.Z)(this,k)[k]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(i)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,k,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,k)[k]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,k)[k]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,o.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,o.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&m(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new h(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:v(this,e)})}}}}]);