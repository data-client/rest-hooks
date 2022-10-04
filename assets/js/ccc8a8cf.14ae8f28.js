(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[68884],{84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Oe});var r=n(67294),i=n(4391),s=n(12171),a=n(56265),o=n(78357),l=n(56855),c=n(99494),d=n(70794),u=n(86429),h=n(67288);class p extends a.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class m extends p{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const i=(0,h.Z)({path:t,schema:n,Endpoint:r}),s=i.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.partialUpdate.call(this,...t),id:t[0].id}}});return{...i,partialUpdate:s,create:i.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:m,Endpoint:f}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),E=n(49544),b=n(86010),k=n(95999),w=n(52263),x=n(72389),A=n(66412),O=n(55423),S=n(84195),Z=n(27093),N=n(26127),T=n(82038),P=n(83611),j=n(39714),C=n(7094),R=n(12466),_=n(91262);const I="playgroundContainer_sLUA",D="row_YGZs",F="hidden_Hh8i",U="playgroundHeader_Zx4K",z="playgroundEditor_lYwu",$="playgroundPreview_rk9R",L="playgroundError_sRnA",V="playgroundResult_tefG",M="debugToggle_zlro",H="tabControls_trxh",q="tabs_m54V",G="tab_bTGw",J="selected_QXZk";var B=n(32041),K=n(97723),X=n(92949);function Y(e){let{value:t}=e;const n="dark"===(0,X.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(K.L,{shouldExpandNode:Q,data:t,valueRenderer:ee,theme:s,hideRoot:!0})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;const i="y"===n?"0":"180";return r.createElement(r.Fragment,null,r.createElement("div",{className:M,onClick:t},"Store",r.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${i}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===n?r.createElement(ie,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(B.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Y,{value:t})}const ie=(0,r.memo)(re);function se(e){let{groupId:t,defaultOpen:n,row:i,fixtures:s}=e;const{tabGroupChoices:a,setTabGroupChoices:o}=(0,C.U)(),[l,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,R.o5)();if(null!=t){const e=a[t];null!=e&&e!==l&&c(e)}const u=(0,r.useCallback)((e=>{d(e.currentTarget),c((e=>"y"===e?"n":"y")),o(t,"y"===l?"n":"y")}),[d,t,l,o]),h=(0,r.useMemo)((()=>[new P.Z,new Z.Z(N.Z)]),[]),p=!("n"===l||!i);return r.createElement(T.nq,{managers:h},r.createElement(j.Z,{fixtures:s,silenceMissing:!0},r.createElement("div",{className:(0,b.Z)($,{[F]:p})},r.createElement(_.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(oe,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:L}))))),r.createElement(_.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(ne,{selectedValue:l,toggle:u})))))}const ae=(0,r.memo)(se);function oe(){return r.createElement("div",null,"Loading...")}function le(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(de,{fixture:e})))))}const ce=(0,r.memo)(le);function de(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function ue(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(U,n)},t)}function he(e){let{groupId:t,defaultOpen:n,row:i,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ue,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:V},r.createElement(ae,{groupId:t,defaultOpen:n,row:i,fixtures:s})))}function pe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(S.Z);return r.createElement("div",{className:q,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,b.Z)(G,{[J]:e===i}),onFocus:t,onClick:t,value:i},s)})))}function me(e){let{children:t}=e;return r.createElement(ue,{className:H},r.createElement("div",null,t),r.createElement(pe,null))}function fe(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(S.Z),s=i.length>0,a=(0,x.Z)();return r.createElement("div",null,n.length?r.createElement(r.Fragment,null,r.createElement(ue,null,"Fixtures"),r.createElement(ce,{fixtures:n})):null,s?r.createElement(me,null,t):r.createElement(ue,null,t),r.createElement(E.uz,{key:`${a}`,className:z}))}function ge(e){let{children:t,transformCode:n,groupId:i,defaultOpen:s,row:a,hidden:o,fixtures:l,...c}=e;const{liveCodeBlock:{playgroundPosition:d}}=(0,w.Z)().siteConfig.themeConfig,u=(0,A.p)();c.scope;return r.createElement("div",{className:(0,b.Z)(I,{[D]:a,[F]:o})},r.createElement(E.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>O.transpileModule(e,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText)(`${e};`)),theme:u},c),"top"===d?r.createElement(r.Fragment,null,r.createElement(he,{groupId:i,defaultOpen:s,row:a,fixtures:l}),r.createElement(fe,{fixtures:l})):r.createElement(r.Fragment,null,r.createElement(fe,{fixtures:l}),r.createElement(he,{groupId:i,defaultOpen:s,row:a,fixtures:l}))))}fe.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ge.defaultProps={row:!1,hidden:!1};var ye=n(64146),ve=n(82026);class Ee extends a.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ee.schema={updatedAt:Date};const be=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ee});const ke={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},we={...s,...o,...c,...l,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d.Z,lastUpdated:be,TimedEntity:Ee,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:s}=(0,ye.Z)();return r.createElement(ve.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:L},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{s(),i((e=>e+1))}},"Clear Error"))}},t)}},xe={...we,Todo:m,TodoResource:ke,TodoEndpoint:f},Ae=e=>{let{children:t,endpointCode:n,groupId:i,hidden:s=!1,defaultOpen:a,row:o=!1,fixtures:l}=e;return r.createElement(ge,{scope:n?we:xe,noInline:!0,groupId:i,defaultOpen:a,row:o,hidden:s,fixtures:l},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};Ae.defaultProps={defaultOpen:"n",fixtures:[]};const Oe=(0,r.memo)(Ae)},14333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>Z,default:()=>C,frontMatter:()=>S,metadata:()=>N,toc:()=>P});var r=n(87462),i=(n(27378),n(3905)),s=n(46313),a=n(70760),o=n(11857);function l(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let c=!1;try{Function()}catch(R){c=!0}class d extends Function{constructor(e,t){let n;return c?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),l(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=this.fetch,s=this.key;return this.extend({fetch(){return i.apply(null!=e?e:this,n)},key(){return s.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return l(n,{...this.options,...e}),n}}var u=n(92586);const h={};const p={};const m=Object.prototype,f=Object.getPrototypeOf;class g extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function y(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const v=e=>{let[t,,n]=e;return void 0!==t&&!n};const E=(e,t,n)=>{if(y(t))return function(e,t,n){let r=!0,i=!1;return[Object.keys(e).reduce(((t,s)=>{const a=`${s}`,[o,l,c]=n(t.get(a),e[a]);return l||(r=!1),c&&(i=!0),t.has(a)?t.set(a,o):t}),t),r,i]}(e,t,n);const r={...t};let i=!0,s=!1;return Object.keys(e).forEach((t=>{const[a,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),l&&(s=!0),o||(i=!1)})),[r,i,s]};function b(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,i,s){const a=this.inferSchema(e,t,n);if(!a)return e;const o=r(e,t,n,a,i,s);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(y(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:y(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,i,s){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,i,s))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(v).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,i,s,a)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=i(t[n],t,n,r,s,a);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return E(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const i={};for(const s of Object.keys(e))i[s]=r(e[s],t,n);return i}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=b(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function k(e,t){const n=b(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return{[e.key(...t(...s))]:e=>{const t=w(e,n),i=new Set(t),s=w(r,n).filter((e=>!i.has(e))),a=[...t,...s];return x(e,n,a)}}}}const w=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},x=(e,t,n)=>{if(0===t.length)return n;const r={...e};let i=r;for(let s=0;s<t.length-1;s++){const e=t[s];i=i[e]={...i[e]}}return i[t[t.length-1]]=n,r};var A=(0,o.Z)("hasBody");class O extends d{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=(0,a.Z)(this,A)[A]&&t.length<2?{}:t[0]||{},i=(0,a.Z)(this,A)[A]?t[t.length-1]:void 0;return this.fetchResponse(this.url(r),this.getRequestInit(i)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,A,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,a.Z)(this,A)[A]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,a.Z)(this,A)[A]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(h,n)||(h[n]=(0,u.MY)(n,{encode:encodeURIComponent,validate:!1})),h[n])(e);var n;const r=function(e){return Object.hasOwn(p,e)||(p[e]=new Set((0,u.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),p[e]}(this.path),i={};return Object.keys(e).forEach((t=>{r.has(t)||(i[t]=e[t])})),Object.keys(i).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(i)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&f(n)===m;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new g(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:k(this,e)})}}const S={title:"Entity Validation",sidebar_label:"Validation"},Z=void 0,N={unversionedId:"getting-started/validation",id:"getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/core/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664843343,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},T={},P=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],j={toc:P};function C(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}C.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);