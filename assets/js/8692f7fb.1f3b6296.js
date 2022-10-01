/*! For license information please see 8692f7fb.1f3b6296.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[13405],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var E=g.prototype=new v;E.constructor=g,h(E,y.prototype),E.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,o={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:l,ref:i,props:o,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===o?"."+T(s,0):o,k(l)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),_(l,t,a,"",(function(e){return e}))):null!=l&&(x(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+T(i=e[u],u);s+=_(i,t,a,c,l)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=_(i=i.value,t,a,c=o+T(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Z(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40513:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),o=(n(70523),n(9790));const l={title:"schema.Object"},i=void 0,s={unversionedId:"api/Object",id:"api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/../docs/graphql/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/graphql/api/Object",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/api/Object.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662248478,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"schema.Object"},sidebar:"docs",previous:{title:"Entity",permalink:"/graphql/api/Entity"},next:{title:"schema.Array",permalink:"/graphql/api/Array"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,a.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,a.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,a.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=f){const e=E[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==w&&(S(t),O(r),null!=f&&k(f,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:N,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var r=n(67294),a=n(4391),o=n(12171),l=n(56265),i=n(78357),s=n(56855),u=n(99494),c=n(70794),d=n(86429),p=n(67288);class m extends l.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const b=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),o=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:o,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...b,partialUpdate:b.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(b.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:b.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[b.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:b.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),g=n(49544),E=n(86010),k=n(95999),w=n(52263),O=n(72389),j=n(66412),S=n(55423),x=n(84195),N=n(27093),T=n(26127),_=n(82038),Z=n(54202),C=n(7094),I=n(12466),P=n(91262);const A="playgroundContainer_sLUA",U="row_YGZs",D="hidden_Hh8i",R="playgroundHeader_Zx4K",$="playgroundEditor_lYwu",q="playgroundPreview_rk9R",F="playgroundError_sRnA",L="playgroundResult_tefG",M="debugToggle_zlro",V="tabControls_trxh",z="tabs_m54V",B="tab_bTGw",G="selected_QXZk";var H=n(32041),X=n(97723),Y=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,Y.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:J,data:t,valueRenderer:Q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function Q(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:M,onClick:t},"Store"),"y"===n?r.createElement(re,null):null)}const te=(0,r.memo)(ee);function ne(){const e=(0,r.useContext)(H.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const re=(0,r.memo)(ne);function ae(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,C.U)(),[i,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,I.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&s(e)}const c=(0,r.useCallback)((e=>{u(e.currentTarget),s((e=>"y"===e?"n":"y")),l(t,"y"===i?"n":"y")}),[u,t,i,l]),d=(0,r.useMemo)((()=>[new Z.Z,new N.Z(T.Z)]),[]),p=!("n"===i||!a);return r.createElement(_.nq,{managers:d},r.createElement("div",{className:(0,E.Z)(q,{[D]:p})},r.createElement(P.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(g.i5,null),r.createElement(g.IF,{className:F}))))),r.createElement(te,{selectedValue:i,toggle:c}))}const oe=(0,r.memo)(ae);function le(){return r.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(R,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ie,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:L},r.createElement(oe,{groupId:t,defaultOpen:n,row:a})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(x.Z);return r.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(B,{[G]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function ce(e){let{children:t}=e;return r.createElement(ie,{className:V},r.createElement("div",null,t),r.createElement(ue,null))}function de(e){let{title:t}=e;const{values:n}=(0,r.useContext)(x.Z),a=n.length>0,o=(0,O.Z)();return r.createElement("div",null,a?r.createElement(ce,null,t):r.createElement(ie,null,t),r.createElement(g.uz,{key:o,className:$}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:l,hidden:i=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,w.Z)(),c=(0,j.p)();s.scope;return r.createElement("div",{className:(0,E.Z)(A,{[U]:l,[D]:i})},r.createElement(g.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>S.transpileModule(e,{compilerOptions:{module:S.ModuleKind.ESNext,target:S.ScriptTarget.ES2017,jsx:"react"}}).outputText)(`${e};`)),theme:c},s),"top"===u?r.createElement(r.Fragment,null,r.createElement(se,{groupId:a,defaultOpen:o,row:l}),r.createElement(de,null)):r.createElement(r.Fragment,null,r.createElement(de,null),r.createElement(se,{groupId:a,defaultOpen:o,row:l}))))}de.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(64146),fe=n(82026);class he extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}he.schema={updatedAt:Date};const be=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:he});const ye={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},ve={...o,...i,...u,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:be,TimedEntity:he,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=(0,me.Z)();return r.createElement(fe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:F},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)}},ge={...ve,Todo:f,TodoResource:ye,TodoEndpoint:h},Ee=e=>{let{children:t,endpointCode:n,groupId:a,hidden:o=!1,defaultOpen:l="n",row:i=!1}=e;return r.createElement(pe,{scope:n?ve:ge,noInline:!0,groupId:a,defaultOpen:l,row:i,hidden:o},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))},ke=(0,r.memo)(Ee)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);