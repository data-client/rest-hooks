(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[37919],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39756:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=(n(70523),n(46313));const o={title:"schema.Object"},i=void 0,s={unversionedId:"api/Object",id:"version-5.2/api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/rest_versioned_docs/version-5.2/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/rest/5.2/api/Object",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Object.md",tags:[],version:"5.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"schema.Object"},sidebar:"docs",previous:{title:"Entity",permalink:"/rest/5.2/api/Entity"},next:{title:"schema.Array",permalink:"/rest/5.2/api/Array"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,a.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,a.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}m.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:p,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,s.U)(),[w,x]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=f){const e=E[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==w&&(N(t),x(r),null!=f&&k(f,String(r)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:Z,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ne});var r=n(67294),a=n(4391),l=n(12171),o=n(56265),i=n(78357),s=n(56855),c=n(99494),u=n(70794),d=n(86429),m=n(67288);class p extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends p{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,m.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),b={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),y=n(49544),E=n(86010),k=n(95999),w=n(52263),x=n(72389),O=n(66412),N=n(55423),T=n(84195),Z=n(27093),C=n(26127),j=n(82038),I=n(83611),S=n(39714),A=n(7094),P=n(12466),D=n(91262);const U="playgroundContainer_sLUA",_="row_YGZs",R="hidden_Hh8i",F="playgroundHeader_Zx4K",L="playgroundEditor_lYwu",M="playgroundPreview_rk9R",V="playgroundError_sRnA",z="playgroundResult_tefG",$="debugToggle_zlro",B="tabControls_trxh",q="tabs_m54V",G="tab_bTGw",H="selected_QXZk";var J=n(32041),X=n(97723),Y=n(92949);function K(e){let{value:t}=e;const n="dark"===(0,Y.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(X.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:l,hideRoot:!0})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;const a="y"===n?"0":"180";return r.createElement(r.Fragment,null,r.createElement("div",{className:$,onClick:t},"Store",r.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${a}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const ae=(0,r.memo)(re);function le(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:o,setTabGroupChoices:i}=(0,A.U)(),[s,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,P.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),i(t,"y"===s?"n":"y")}),[u,t,s,i]),m=(0,r.useMemo)((()=>[new I.Z,new Z.Z(C.Z)]),[]),p=!("n"===s||!a);return r.createElement(j.nq,{managers:m},r.createElement(S.Z,{fixtures:l,silenceMissing:!1},r.createElement("div",{className:(0,E.Z)(M,{[R]:p})},r.createElement(D.Z,{fallback:r.createElement(ie,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ie,null)},r.createElement(y.i5,null),r.createElement(y.IF,{className:V})))))),r.createElement(ne,{selectedValue:s,toggle:d}))}const oe=(0,r.memo)(le);function ie(){return r.createElement("div",null,"Loading...")}function se(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(ue,{fixture:e})))))}const ce=(0,r.memo)(se);function ue(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function de(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(F,n)},t)}function me(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(de,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:z},r.createElement(oe,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}function pe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:q,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(G,{[H]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function fe(e){let{children:t}=e;return r.createElement(de,{className:B},r.createElement("div",null,t),r.createElement(pe,null))}function he(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(T.Z),l=a.length>0,o=(0,x.Z)();return r.createElement("div",null,n.length?r.createElement(r.Fragment,null,r.createElement(de,null,"Fixtures"),r.createElement(ce,{fixtures:n})):null,l?r.createElement(fe,null,t):r.createElement(de,null,t),r.createElement(y.uz,{key:`${o}`,className:L}))}function ge(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:i,fixtures:s,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,w.Z)().siteConfig.themeConfig,d=(0,O.p)();c.scope;return r.createElement("div",{className:(0,E.Z)(U,{[_]:o,[R]:i})},r.createElement(y.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>N.transpileModule(e,{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES2017,jsx:N.JsxEmit.React}}).outputText)(`${e};`)),theme:d},c),"top"===u?r.createElement(r.Fragment,null,r.createElement(me,{groupId:a,defaultOpen:l,row:o,fixtures:s}),r.createElement(he,{fixtures:s})):r.createElement(r.Fragment,null,r.createElement(he,{fixtures:s}),r.createElement(me,{groupId:a,defaultOpen:l,row:o,fixtures:s}))))}he.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ge.defaultProps={row:!1,hidden:!1};var be=n(64146),ve=n(82026);class ye extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ye.schema={updatedAt:Date};const Ee=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ye});const ke={...b,getList:b.getList.extend({process:e=>e.slice(0,7)})},we={...l,...i,...c,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:Ee,TimedEntity:ye,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,be.Z)();return r.createElement(ve.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},xe={...we,Todo:f,TodoResource:ke,TodoEndpoint:h},Oe=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:o,row:i=!1,fixtures:s}=e;return r.createElement(ge,{scope:n?we:xe,noInline:!0,groupId:a,defaultOpen:o,row:i,hidden:l,fixtures:s},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};Oe.defaultProps={defaultOpen:"n",fixtures:[]};const Ne=(0,r.memo)(Oe)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);