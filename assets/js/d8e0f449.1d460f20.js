(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[31488],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r=n(67294),a=n(98416),l=n(88300),s=n(81593),o=n(63312),i=n(33186),c=n(52803),u=n(44431),d=n.n(u),p=n(49909),m=n(53775);class h extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class f extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:v})}}f.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(f.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),y=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var b=n(87462),E=n(61313),k=n(86010),w=n(95999),x=n(52263),D=n(72389),O=n(51548),T=n(55423),C=n(84195),N=n(58699),I=n(28808),R=n(16909),Z=n(28224),P=n(91262);const S="playgroundContainer_sLUA",U="row_YGZs",F="hidden_Hh8i",A="playgroundHeader_Zx4K",j="playgroundEditor_lYwu",M="playgroundPreview_rk9R",_="playgroundError_sRnA",L="playgroundResult_tefG",B="debugToggle_zlro",V="tabControls_trxh",H="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var X=n(60522),$=n(83552);function q(e){let{value:t}=e;const{isDarkTheme:n}=(0,O.If)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement($.L,{shouldExpandNode:J,data:t,valueRenderer:W,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const K="undefined"!=typeof Intl;function W(e,t){const n=arguments.length<=2?void 0:arguments[2];return K&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function Y(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B,onClick:t},"Store"),"y"===n?r.createElement(te,null):null)}const Q=(0,r.memo)(Y);function ee(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(q,{value:t})}const te=(0,r.memo)(ee);function ne(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:s}=(0,O.UB)(),[o,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,O.o5)();if(null!=t){const e=l[t];null!=e&&e!==o&&i(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),s(t,"y"===o?"n":"y")}),[c,t,o,s]),d=(0,r.useMemo)((()=>[new Z.Z,new N.Z(I.Z)]),[]),p=!("n"===o||!a);return r.createElement(R.nq,{managers:d},r.createElement("div",{className:(0,k.Z)(M,{[F]:p})},r.createElement(P.Z,{fallback:r.createElement(ae,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ae,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:_}))))),r.createElement(Q,{selectedValue:o,toggle:u}))}const re=(0,r.memo)(ne);function ae(){return r.createElement("div",null,"Loading...")}function le(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,k.Z)(A,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(le,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:L},r.createElement(re,{groupId:t,defaultOpen:n,row:a})))}function oe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(C.Z);return r.createElement("div",{className:H,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(z,{[G]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function ie(e){let{children:t}=e;return r.createElement(le,{className:V},r.createElement("div",null,t),r.createElement(oe,null))}function ce(e){let{title:t}=e;const{values:n}=(0,r.useContext)(C.Z),a=n.length>0,l=(0,D.Z)();return r.createElement("div",null,a?r.createElement(ie,null,t):r.createElement(le,null,t),r.createElement(E.uz,{key:l,className:j}))}function ue(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:s,hidden:o=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,x.Z)(),u=(0,O.pJ)();i.scope;return r.createElement("div",{className:(0,k.Z)(S,{[U]:s,[F]:o})},r.createElement(E.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(se,{groupId:a,defaultOpen:l,row:s}),r.createElement(ce,null)):r.createElement(r.Fragment,null,r.createElement(ce,null),r.createElement(se,{groupId:a,defaultOpen:l,row:s}))))}ce.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};var de=n(71481),pe=n(42910);class me extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}me.schema={updatedAt:Date};const he=new l.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:me});const fe={...a,...s,...c,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:he,TimedEntity:me,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,de.Z)();return r.createElement(pe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:_},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends f{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ge=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l="n",row:s=!1}=e;return r.createElement(ue,{scope:fe,noInline:!0,groupId:n,defaultOpen:l,row:s,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ye=(0,r.memo)(ge)},10119:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(9790);const s={title:"schema.Delete"},o=void 0,i={unversionedId:"api/Delete",id:"version-6.1/api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/docs/6.1/api/Delete",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Delete.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Delete"},sidebar:"version-6.1/docs",previous:{title:"schema.Values",permalink:"/docs/6.1/api/Values"},next:{title:"SimpleRecord",permalink:"/docs/6.1/api/SimpleRecord"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Batch Deletes",id:"batch-deletes",level:3},{value:"Impact on useResource()",id:"impact-on-useresource",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,a.kt)("p",null,"Describes entities to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useResource(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <a\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </a>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,a.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,a.kt)("p",null,"Constructing an article response using the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useResource(MyResource.list(), {});\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"impact-on-useresource"},"Impact on useResource()"),(0,a.kt)("p",null,"When entities are deleted in a result currently being presented in React, useResource()\nwill consider them invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,a.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);