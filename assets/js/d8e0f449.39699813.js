(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[31488],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},46313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>De});var r=n(67294),a=n(4391),l=n(12171),o=n(56265),s=n(78357),i=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),E=n(49544),b=n(86010),k=n(95999),x=n(52263),w=n(72389),O=n(66412),D=n(55423),T=n(84195),C=n(27093),N=n(26127),R=n(82038),Z=n(83611),I=n(39714),P=n(7094),S=n(12466),U=n(91262);const A="playgroundContainer_sLUA",F="row_YGZs",j="hidden_Hh8i",M="playgroundHeader_Zx4K",L="playgroundEditor_lYwu",_="playgroundPreview_rk9R",B="playgroundError_sRnA",V="playgroundResult_tefG",z="debugToggle_zlro",H="tabControls_trxh",$="tabs_m54V",q="tab_bTGw",G="selected_QXZk";var J=n(32041),X=n(97723),K=n(92949);function W(e){let{value:t}=e;const n="dark"===(0,K.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(X.L,{shouldExpandNode:Y,data:t,valueRenderer:ee,theme:l,hideRoot:!0})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;const a="y"===n?"0":"180";return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store",r.createElement("span",{style:{transition:"all 200ms ease 0s",transform:`rotateZ(${a}deg)`,transformOrigin:"45% 50% 0px",position:"relative",display:"inline-block",fontSize:"90%",float:"right"}},"\u25b6")),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(W,{value:t})}const ae=(0,r.memo)(re);function le(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,P.U)(),[i,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,S.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[u,t,i,s]),p=(0,r.useMemo)((()=>[new Z.Z,new C.Z(N.Z)]),[]),m=!("n"===i||!a);return r.createElement(R.nq,{managers:p},r.createElement(I.Z,{fixtures:l,silenceMissing:!1},r.createElement("div",{className:(0,b.Z)(_,{[j]:m})},r.createElement(U.Z,{fallback:r.createElement(se,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(se,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:B})))))),r.createElement(ne,{selectedValue:i,toggle:d}))}const oe=(0,r.memo)(le);function se(){return r.createElement("div",null,"Loading...")}function ie(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(ue,{fixture:e})))))}const ce=(0,r.memo)(ie);function ue(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function de(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(M,n)},t)}function pe(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(de,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:V},r.createElement(oe,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}function me(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:$,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,b.Z)(q,{[G]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function fe(e){let{children:t}=e;return r.createElement(de,{className:H},r.createElement("div",null,t),r.createElement(me,null))}function he(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(T.Z),l=a.length>0,o=(0,w.Z)();return r.createElement("div",null,n.length?r.createElement(r.Fragment,null,r.createElement(de,null,"Fixtures"),r.createElement(ce,{fixtures:n})):null,l?r.createElement(fe,null,t):r.createElement(de,null,t),r.createElement(E.uz,{key:`${o}`,className:L}))}function ge(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:s,fixtures:i,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,x.Z)().siteConfig.themeConfig,d=(0,O.p)();c.scope;return r.createElement("div",{className:(0,b.Z)(A,{[F]:o,[j]:s})},r.createElement(E.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>D.transpileModule(e,{compilerOptions:{module:D.ModuleKind.ESNext,target:D.ScriptTarget.ES2017,jsx:D.JsxEmit.React}}).outputText)(`${e};`)),theme:d},c),"top"===u?r.createElement(r.Fragment,null,r.createElement(pe,{groupId:a,defaultOpen:l,row:o,fixtures:i}),r.createElement(he,{fixtures:i})):r.createElement(r.Fragment,null,r.createElement(he,{fixtures:i}),r.createElement(pe,{groupId:a,defaultOpen:l,row:o,fixtures:i}))))}he.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ge.defaultProps={row:!1,hidden:!1};var ye=n(64146),ve=n(82026);class Ee extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ee.schema={updatedAt:Date};const be=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ee});const ke={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},xe={...l,...s,...c,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:be,TimedEntity:Ee,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,ye.Z)();return r.createElement(ve.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},we={...xe,Todo:f,TodoResource:ke,TodoEndpoint:h},Oe=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:o,row:s=!1,fixtures:i}=e;return r.createElement(ge,{scope:n?xe:we,noInline:!0,groupId:a,defaultOpen:o,row:s,hidden:l,fixtures:i},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))};Oe.defaultProps={defaultOpen:"n",fixtures:[]};const De=(0,r.memo)(Oe)},10119:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(46313);const o={title:"schema.Delete"},s=void 0,i={unversionedId:"api/Delete",id:"version-6.1/api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/docs/6.1/api/Delete",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Delete.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"schema.Delete"},sidebar:"version-6.1/docs",previous:{title:"schema.Values",permalink:"/docs/6.1/api/Values"},next:{title:"SimpleRecord",permalink:"/docs/6.1/api/SimpleRecord"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Batch Deletes",id:"batch-deletes",level:3},{value:"Impact on useResource()",id:"impact-on-useresource",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,a.kt)("p",null,"Describes entities to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useResource(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <a\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </a>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,a.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,a.kt)("p",null,"Constructing an article response using the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useResource(MyResource.list(), {});\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"impact-on-useresource"},"Impact on useResource()"),(0,a.kt)("p",null,"When entities are deleted in a result currently being presented in React, useResource()\nwill consider them invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,a.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);