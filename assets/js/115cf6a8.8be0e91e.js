(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[92638],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>we});var r=n(67294),a=n(4391),i=n(12171),l=n(56265),o=n(78357),s=n(56855),d=n(99494),c=n(70794),u=n(86429),p=n(67288);class m extends l.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),b=n(49544),k=n(86010),w=n(95999),E=n(52263),x=n(72389),T=n(66412),S=n(55423),O=n(84195),C=n(27093),I=n(26127),N=n(82038),A=n(54202),U=n(7094),D=n(12466),P=n(91262);const Z="playgroundContainer_sLUA",F="row_YGZs",R="hidden_Hh8i",j="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",L="playgroundPreview_rk9R",M="playgroundError_sRnA",H="playgroundResult_tefG",B="debugToggle_zlro",V="tabControls_trxh",G="tabs_m54V",z="tab_bTGw",X="selected_QXZk";var $=n(32041),q=n(97723),K=n(92949);function Y(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(q.L,{shouldExpandNode:Q,data:t,valueRenderer:J,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function J(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B,onClick:t},"Store"),"y"===n?r.createElement(re,null):null)}const te=(0,r.memo)(ee);function ne(){const e=(0,r.useContext)($.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Y,{value:t})}const re=(0,r.memo)(ne);function ae(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:i,setTabGroupChoices:l}=(0,U.U)(),[o,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,D.o5)();if(null!=t){const e=i[t];null!=e&&e!==o&&s(e)}const c=(0,r.useCallback)((e=>{d(e.currentTarget),s((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[d,t,o,l]),u=(0,r.useMemo)((()=>[new A.Z,new C.Z(I.Z)]),[]),p=!("n"===o||!a);return r.createElement(N.nq,{managers:u},r.createElement("div",{className:(0,k.Z)(L,{[R]:p})},r.createElement(P.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(b.i5,null),r.createElement(b.IF,{className:M}))))),r.createElement(te,{selectedValue:o,toggle:c}))}const ie=(0,r.memo)(ae);function le(){return r.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,k.Z)(j,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(oe,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:H},r.createElement(ie,{groupId:t,defaultOpen:n,row:a})))}function de(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(O.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(z,{[X]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function ce(e){let{children:t}=e;return r.createElement(oe,{className:V},r.createElement("div",null,t),r.createElement(de,null))}function ue(e){let{title:t}=e;const{values:n}=(0,r.useContext)(O.Z),a=n.length>0,i=(0,x.Z)();return r.createElement("div",null,a?r.createElement(ce,null,t):r.createElement(oe,null,t),r.createElement(b.uz,{key:i,className:_}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:l,hidden:o=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:d}}}}=(0,E.Z)(),c=(0,T.p)();s.scope;return r.createElement("div",{className:(0,k.Z)(Z,{[F]:l,[R]:o})},r.createElement(b.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>S.transpileModule(e,{compilerOptions:{module:S.ModuleKind.ESNext,target:S.ScriptTarget.ES2017,jsx:"react"}}).outputText)(`${e};`)),theme:c},s),"top"===d?r.createElement(r.Fragment,null,r.createElement(se,{groupId:a,defaultOpen:i,row:l}),r.createElement(ue,null)):r.createElement(r.Fragment,null,r.createElement(ue,null),r.createElement(se,{groupId:a,defaultOpen:i,row:l}))))}ue.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(64146),he=n(82026);class fe extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}fe.schema={updatedAt:Date};const ge=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:fe});const ye={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},ve={...i,...o,...d,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:ge,TimedEntity:fe,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=(0,me.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:M},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)}},be={...ve,Todo:h,TodoResource:ye,TodoEndpoint:f},ke=e=>{let{children:t,endpointCode:n,groupId:a,hidden:i=!1,defaultOpen:l="n",row:o=!1}=e;return r.createElement(pe,{scope:n?ve:be,noInline:!0,groupId:a,defaultOpen:l,row:o,hidden:i},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))},we=(0,r.memo)(ke)},64331:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(9790);const l={title:"Expiry Policy",sidebar_label:"Expiry Policy"},o=void 0,s={unversionedId:"getting-started/expiry-policy",id:"version-5.0/getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/versioned_docs/version-5.0/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/5.0/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1644636105,formattedLastUpdatedAt:"Feb 12, 2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"version-5.0/docs",previous:{title:"Entity",permalink:"/docs/5.0/getting-started/entity"},next:{title:"Usage",permalink:"/docs/5.0/rest/usage"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"const mockFetch = ({ id, delay = 150 }) =>\n  new Promise(resolve =>\n    setTimeout(\n      () =>\n        resolve({\n          id,\n          updatedAt: new Date().toISOString(),\n        }),\n      delay,\n    ),\n  );\nclass TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\n\nconst lastUpdated = new Endpoint(mockFetch, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useresource"},"useResource()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction ShowTime() {\n  const [id, setId] = React.useState('1');\n  const { updatedAt } = useResource(lastUpdated, { id });\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <div>\n        API Time:{' '}\n        <time>\n          {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(\n            updatedAt,\n          )}\n        </time>\n      </div>\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const refresh = useFetcher(lastUpdated);\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => refresh({ id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const invalidateLastUpdated = useInvalidator(lastUpdated);\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidateLastUpdated({ id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const fetchDelete = useFetcher(deleteLastUpdated);\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetchDelete({ id: '1' })}>Delete</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);