(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[42835],{13841:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13841,e.exports=t},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),s=n(67392),i=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:p,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[w,O]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=E[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==w&&(x(t),O(r),null!=f&&k(f,String(r)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ee});var r=n(67294),a=n(67601),l=n(43329),o=n(65612),s=n(37814),i=n(9546),c=n(51111),u=n(44431),d=n.n(u),m=n(32257),p=n(66856);class f extends p.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:b})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new m.Z(this),getOptimisticResponse:v})}}h.urlRoot="/api/todos";const b=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),g=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var y=n(87462),E=n(10407),k=n(86010),w=n(95999),O=n(52263),N=n(72389),x=n(66412),T=n(94625),Z=n(84195),C=n(33625),j=n(85109),I=n(83477),S=n(33799),D=n(7094),A=n(12466),P=n(91262);const U="playgroundContainer_sLUA",_="row_YGZs",R="hidden_Hh8i",F="playgroundHeader_Zx4K",M="playgroundEditor_lYwu",V="playgroundPreview_rk9R",L="playgroundError_sRnA",z="playgroundResult_tefG",B="debugToggle_zlro",$="tabControls_trxh",G="tabs_m54V",q="tab_bTGw",H="selected_QXZk";var X=n(78914),Y=n(97723),K=n(92949);function J(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(Y.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(J,{value:t})}const ae=(0,r.memo)(re);function le(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:o}=(0,D.U)(),[s,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,A.o5)();if(null!=t){const e=l[t];null!=e&&e!==s&&i(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),o(t,"y"===s?"n":"y")}),[c,t,s,o]),d=(0,r.useMemo)((()=>[new S.Z,new C.Z(j.Z)]),[]),m=!("n"===s||!a);return r.createElement(I.nq,{managers:d},r.createElement("div",{className:(0,k.Z)(V,{[R]:m})},r.createElement(P.Z,{fallback:r.createElement(se,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(se,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:L}))))),r.createElement(ne,{selectedValue:s,toggle:u}))}const oe=(0,r.memo)(le);function se(){return r.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,k.Z)(F,n)},t)}function ce(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ie,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:z},r.createElement(oe,{groupId:t,defaultOpen:n,row:a})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(Z.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(q,{[H]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function de(e){let{children:t}=e;return r.createElement(ie,{className:$},r.createElement("div",null,t),r.createElement(ue,null))}function me(e){let{title:t}=e;const{values:n}=(0,r.useContext)(Z.Z),a=n.length>0,l=(0,N.Z)();return r.createElement("div",null,a?r.createElement(de,null,t):r.createElement(ie,null,t),r.createElement(E.uz,{key:l,className:M}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:s=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,O.Z)(),u=(0,x.p)();i.scope;return r.createElement("div",{className:(0,k.Z)(U,{[_]:o,[R]:s})},r.createElement(E.nu,(0,y.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(ce,{groupId:a,defaultOpen:l,row:o}),r.createElement(me,null)):r.createElement(r.Fragment,null,r.createElement(me,null),r.createElement(ce,{groupId:a,defaultOpen:l,row:o}))))}me.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var fe=n(32430),he=n(23212);class be extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}be.schema={updatedAt:Date};const ge=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:be});const ve={...l,...s,...c,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:ge,TimedEntity:be,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,fe.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:L},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ye=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l="n",row:o=!1}=e;return r.createElement(pe,{scope:ve,noInline:!0,groupId:n,defaultOpen:l,row:o,hidden:a},"string"==typeof t?t:t.props.children.props.children)},Ee=(0,r.memo)(ye)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},85792:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=(n(70523),n(9790));const o={title:"schema.Object"},s=void 0,i={unversionedId:"api/Object",id:"version-6.1/api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/docs/6.1/api/Object",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Object.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"schema.Object"},sidebar:"version-6.1/docs",previous:{title:"Entity",permalink:"/docs/6.1/api/Entity"},next:{title:"schema.Array",permalink:"/docs/6.1/api/Array"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,a.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,a.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useResource(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}m.isMDXComponent=!0},80444:()=>{},46170:()=>{},81206:()=>{}}]);