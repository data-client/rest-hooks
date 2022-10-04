(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[5842],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),i=n(86010),s=n(72389),l=n(67392),o=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:h,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,l.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,o.U)(),[x,N]=(0,a.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==x&&(T(t),N(r),null!=h&&E(h,String(r)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:A,onFocus:S,onClick:S},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Te});var r=n(67294),a=n(4391),i=n(12171),s=n(56265),l=n(78357),o=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends s.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var k=n(87462),v=n(49544),b=n(86010),E=n(95999),x=n(52263),N=n(72389),w=n(66412),T=n(55423),S=n(84195),A=n(27093),C=n(26127),O=n(82038),I=n(83611),Z=n(39714),R=n(7094),P=n(12466),D=n(91262);const U="playgroundContainer_sLUA",j="row_YGZs",M="hidden_Hh8i",_="playgroundHeader_Zx4K",z="playgroundEditor_lYwu",F="playgroundPreview_rk9R",L="playgroundError_sRnA",q="playgroundResult_tefG",V="debugToggle_zlro",B="tabControls_trxh",J="tabs_m54V",$="tab_bTGw",H="selected_QXZk";var G=n(32041),W=n(97723),K=n(92949);function X(e){let{value:t}=e;const n="dark"===(0,K.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(W.L,{shouldExpandNode:Y,data:t,valueRenderer:ee,theme:i,hideRoot:!0})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;const a="y"===n?"0":"180";return r.createElement(r.Fragment,null,r.createElement("div",{className:V,onClick:t},"Store",r.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${a}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(G.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(X,{value:t})}const ae=(0,r.memo)(re);function ie(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;const{tabGroupChoices:s,setTabGroupChoices:l}=(0,R.U)(),[o,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,P.o5)();if(null!=t){const e=s[t];null!=e&&e!==o&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[u,t,o,l]),p=(0,r.useMemo)((()=>[new I.Z,new A.Z(C.Z)]),[]),m=!("n"===o||!a);return r.createElement(O.nq,{managers:p},r.createElement(Z.Z,{fixtures:i,silenceMissing:!0},r.createElement("div",{className:(0,b.Z)(F,{[M]:m})},r.createElement(D.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(v.i5,null),r.createElement(v.IF,{className:L}))))),r.createElement(D.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(ne,{selectedValue:o,toggle:d})))))}const se=(0,r.memo)(ie);function le(){return r.createElement("div",null,"Loading...")}function oe(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(ue,{fixture:e})))))}const ce=(0,r.memo)(oe);function ue(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function de(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(_,n)},t)}function pe(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(de,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:q},r.createElement(se,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}function me(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(S.Z);return r.createElement("div",{className:J,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,b.Z)($,{[H]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function he(e){let{children:t}=e;return r.createElement(de,{className:B},r.createElement("div",null,t),r.createElement(me,null))}function fe(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(S.Z),i=a.length>0,s=(0,N.Z)();return r.createElement("div",null,n.length?r.createElement(r.Fragment,null,r.createElement(de,null,"Fixtures"),r.createElement(ce,{fixtures:n})):null,i?r.createElement(he,null,t):r.createElement(de,null,t),r.createElement(v.uz,{key:`${s}`,className:z}))}function ge(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:s,hidden:l,fixtures:o,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,x.Z)().siteConfig.themeConfig,d=(0,w.p)();c.scope;return r.createElement("div",{className:(0,b.Z)(U,{[j]:s,[M]:l})},r.createElement(v.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES2017,jsx:T.JsxEmit.React}}).outputText)(`${e};`)),theme:d},c),"top"===u?r.createElement(r.Fragment,null,r.createElement(pe,{groupId:a,defaultOpen:i,row:s,fixtures:o}),r.createElement(fe,{fixtures:o})):r.createElement(r.Fragment,null,r.createElement(fe,{fixtures:o}),r.createElement(pe,{groupId:a,defaultOpen:i,row:s,fixtures:o}))))}fe.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ge.defaultProps={row:!1,hidden:!1};var ye=n(64146),ke=n(82026);class ve extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ve.schema={updatedAt:Date};const be=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ve});const Ee={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},xe={...i,...l,...c,...o,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:be,TimedEntity:ve,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=(0,ye.Z)();return r.createElement(ke.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:L},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)}},Ne={...xe,Todo:h,TodoResource:Ee,TodoEndpoint:f},we=e=>{let{children:t,endpointCode:n,groupId:a,hidden:i=!1,defaultOpen:s,row:l=!1,fixtures:o}=e;return r.createElement(ge,{scope:n?xe:Ne,noInline:!0,groupId:a,defaultOpen:s,row:l,hidden:i,fixtures:o},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};we.defaultProps={defaultOpen:"n",fixtures:[]};const Te=(0,r.memo)(we)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),i=n(67294);function s(e){let{children:t}=e;return i.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(a.Z,{value:"ts"},t[0]),i.createElement(a.Z,{value:"js"},t[1]))}},86605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(46313),s=n(70523);const l={title:"Entity"},o=void 0,c={unversionedId:"api/Entity",id:"version-6.2/api/Entity",title:"Entity",description:"Entity - Declarative Data Normalization | Rest Hooks",source:"@site/versioned_docs/version-6.2/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/6.2/api/Entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Entity"},sidebar:"docs",previous:{title:"Schema",permalink:"/docs/6.2/api/schema"},next:{title:"schema.Object",permalink:"/docs/6.2/api/Object"}},u={},d=[{value:"Methods",id:"methods",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",level:3},{value:"process(input, parent, key): processedEntity",id:"processinput-parent-key-processedentity",level:3},{value:"abstract pk: (parent?, key?): pk?",id:"pk",level:3},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Entities",id:"singleton-entities",level:4},{value:"static get key(): string",id:"key",level:3},{value:"static useIncoming(existingMeta, incomingMeta, existing, incoming): mergedValue",id:"useincoming",level:3},{value:"Example",id:"example",level:4},{value:"static merge(existing, incoming): mergedValue",id:"merge",level:3},{value:"static validate(processedEntity): errorMessage?",id:"validate",level:3},{value:"static infer(args, indexes, recurse): pk?",id:"infer",level:3},{value:"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt",id:"expiresat",level:3},{value:"static indexes?: (keyof this)[]",id:"indexes",level:3},{value:"useSuspense()",id:"usesuspense",level:4},{value:"useCache()",id:"usecache",level:4},{value:"static schema: { k: keyof this: Schema }",id:"schema",level:3},{value:"Optional members",id:"optional-members",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Entity - Declarative Data Normalization | Rest Hooks")),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,a.kt)("p",null,"By defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,a.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,a.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,a.kt)("h3",{id:"processinput-parent-key-processedentity"},"process(input, parent, key): processedEntity"),(0,a.kt)("p",null,"Run at the start of normalization for this entity. Return value is saved in store\nand sent to ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defaults")," to simply copying the response (",(0,a.kt)("inlineCode",{parentName:"p"},"{...input}"),")"),(0,a.kt)("h3",{id:"pk"},"abstract pk: (parent?, key?): pk?"),(0,a.kt)("p",null,"PK stands for ",(0,a.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,a.kt)("h4",{id:"undefined-value"},"undefined value"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,a.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,a.kt)("h4",{id:"other-uses"},"Other uses"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,a.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,a.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,a.kt)("h3",{id:"key"},"static get key(): string"),(0,a.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,a.kt)("h3",{id:"useincoming"},"static useIncoming(existingMeta, incomingMeta, existing, incoming): mergedValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static useIncoming(\n  existingMeta: { date: number; fetchedAt: number },\n  incomingMeta: { date: number; fetchedAt: number },\n  existing: any,\n  incoming: any,\n) {\n  return existingMeta.fetchedAt <= incomingMeta.fetchedAt;\n}\n")),(0,a.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static useIncoming(\n    existingMeta: { date: number; fetchedAt: number },\n    incomingMeta: { date: number; fetchedAt: number },\n    existing: any,\n    incoming: any,\n  ) {\n    return existing.timestamp <= incoming.timestamp;\n  }\n}\n")),(0,a.kt)("h3",{id:"merge"},"static merge(existing, incoming): mergedValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(\n  existing: InstanceType<T>,\n  incoming: InstanceType<T>,\n  ) => InstanceType<T>\n")),(0,a.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,a.kt)("h3",{id:"validate"},"static validate(processedEntity): errorMessage?"),(0,a.kt)("p",null,"Runs during both normalize and denormalize. Returning a string indicates an error (the string is the message)."),(0,a.kt)("p",null,"During normalization a validation failure will result in an error for that fetch."),(0,a.kt)("p",null,"During denormalization a validation failure will mark that result as 'invalid' and thus\nwill block on fetching a result."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," does some basic field existance checks in development mode only. Override to\ndisable or customize."),(0,a.kt)("h3",{id:"infer"},"static infer(args, indexes, recurse): pk?"),(0,a.kt)("p",null,"Allows Rest Hooks to build a response without having to fetch if its entities can be found."),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," will not infer this entity"),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," string will attempt to lookup this entity and use in the response."),(0,a.kt)("p",null,"When inferring a response, this entity's expiresAt is used to compute the expiry policy."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," uses the first argument to lookup in ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()")," and ",(0,a.kt)("a",{parentName:"p",href:"#indexes"},"indexes")),(0,a.kt)("h3",{id:"expiresat"},"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt"),(0,a.kt)("p",null,"This determines expiry time when entity is part of a result that is inferred."),(0,a.kt)("p",null,"Overriding can be used to change TTL policy specifically for inferred responses."),(0,a.kt)("h3",{id:"indexes"},"static indexes?: (keyof this)[]"),(0,a.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,a.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,a.kt)("h4",{id:"usesuspense"},"useSuspense()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useSuspense"},"useSuspense()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useSuspense(UserResource.detail(), { username: 'bob' });\n")),(0,a.kt)("h4",{id:"usecache"},"useCache()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,a.kt)("p",null,"Some top level component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useSuspense(AssetResource.list(), {});\n")),(0,a.kt)("p",null,"Nested below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,a.kt)("h3",{id:"schema"},"static schema: { ","[k: keyof this]",": Schema }"),(0,a.kt)("p",null,"Set this to ",(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,a.kt)("p",null,"Additionally can be used to ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,a.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const postSample = () =>\n  Promise.resolve({\n    id: '5',\n    author: { id: '123', name: 'Jim' },\n    content: 'Happy day',\n    createdAt: '2019-01-23T06:07:48.311Z',\n  });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nclass Post extends Entity {\n  readonly author: User = User.fromJS({});\n  readonly createdAt: Date = new Date(0);\n  static schema = {\n    author: User,\n    createdAt: Date,\n  };\n  pk() {\n    return this.id;\n  }\n}\nconst postDetail = new Endpoint(postSample, {\n  schema: Post,\n});\nfunction PostPage() {\n  const post = useSuspense(postDetail, { id: '123' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          post.createdAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,a.kt)("h4",{id:"optional-members"},"Optional members"),(0,a.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  };\n}\n")))}m.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);