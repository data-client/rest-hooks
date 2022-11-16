/*! For license information please see a467489a.9af0a958.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32557],{41535:(e,t)=>{var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var g=b.prototype=new y;g.constructor=b,h(g,k.prototype),g.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,E={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,a){var n,o={},l=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)N.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:E.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case a:i=!0}}if(i)return l=l(i=e),e=""===o?"."+C(i,0):o,w(l)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),T(l,t,n,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(x,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var p=o+C(s=e[u],u);i+=T(s,t,n,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)i+=T(s=s.value,t,n,p=o+C(s,u++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _(e,t,r){if(null==e)return e;var a=[],n=0;return T(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var Z={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},30433:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(87462),n=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),u=r(63735),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:f,groupId:m,className:h}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=f??v.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[N,E]=(0,n.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,r=S.indexOf(t),a=k[r].value;a!==N&&(j(t),E(a),null!=m&&w(m,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;r=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;r=S[t]??S[S.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},45633:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(65559),n=r(30433),o=r(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},o.createElement(n.Z,{value:"before"},t[0]),o.createElement(n.Z,{value:"after"},t[1]))}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(65559),n=r(30433),o=r(67294),l=r(13743);function s(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(n.Z,{value:"yarn"},o.createElement(l.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(n.Z,{value:"npm"},o.createElement(l.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(38970);const o={React:a,...a,...n};t.Z=o},25:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(27378),r(3905)),o=(r(45633),r(52393));const l={title:"Upgrading from 6 to 7"},s=void 0,i={unversionedId:"upgrade/upgrading-to-7",id:"upgrade/upgrading-to-7",title:"Upgrading from 6 to 7",description:"@rest-hooks/react is now a peerDependency",source:"@site/../docs/core/upgrade/upgrading-to-7.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-7",permalink:"/docs/upgrade/upgrading-to-7",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-7.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668612263,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Upgrading from 6 to 7"},sidebar:"docs",previous:{title:"useRetrieve()",permalink:"/docs/api/useRetrieve"},next:{title:"Upgrading from 5 to 6",permalink:"/docs/upgrade/upgrading-to-6"}},u={},p=[{value:"Removals",id:"removals",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"FetchShape -&gt; Endpoint",id:"fetchshape---endpoint",level:2},{value:"Test @9",id:"test-9",level:2},{value:"Preparing for the future",id:"preparing-for-the-future",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{pkgs:"rest-hooks@7 @rest-hooks/react@6 @rest-hooks/redux@6 @rest-hooks/test@9",upgrade:!0,mdxType:"PkgTabs"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/react"},"@rest-hooks/react")," is now a peerDependency\nso be sure to install it. The ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rest-hooks"},"rest-hooks")," will eventually\nonly proxy to exporting its members."),(0,n.kt)("h2",{id:"removals"},"Removals"),(0,n.kt)("p",null,"The following previously deprecated members were removed in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hasUsableData() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#getResponse"},"Controller.getResponse")),(0,n.kt)("li",{parentName:"ul"},"useFetcher() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("li",{parentName:"ul"},"useInvalidateDispatcher() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("li",{parentName:"ul"},"useInvalidator() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("li",{parentName:"ul"},"useResetter() -> ",(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/api/Controller#resetEntireStore"},"Controller.resetEntireStore"))),(0,n.kt)("p",null,"This functionality has been moved to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller"},"Controller"),", accessible through\n",(0,n.kt)("a",{parentName:"p",href:"/docs/api/useController"},"useController()")),(0,n.kt)("p",null,"Redux-related members have been moved to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/redux"},"@rest-hooks/redux"),"\nand have been removed from 'rest-hooks'. Be sure to update their import location to refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/redux"},"@rest-hooks/redux")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/ExternalCacheProvider"},"ExternalCacheProvider")),(0,n.kt)("li",{parentName:"ul"},"PromiseifyMiddleware"),(0,n.kt)("li",{parentName:"ul"},"mapMiddleware")),(0,n.kt)("h2",{id:"deprecations"},"Deprecations"),(0,n.kt)("p",null,"The following members have been marked as deprecated. Consider changing them after upgrade:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/useresource"},"useResource()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/useMeta"},"useMeta()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/useError"},"useError()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/useRetrieve"},"useRetrieve()")," -> ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,n.kt)("h2",{id:"fetchshape---endpoint"},"FetchShape -> Endpoint"),(0,n.kt)("p",null,"The new hooks only support ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface"),". ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"Endpoints"),"\nhave been around since 2020, so we expect most to already be upgraded by this point."),(0,n.kt)("p",null,"However, if you still have FetchShapes, you can easily convert them to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface")," by\nusing ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"'s shapeToEndpoint"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { shapeToEndpoint } from '@rest-hooks/legacy';\n\nfunction MyComponent() {\n  const endpoint: any = useMemo(() => {\n    return shapeToEndpoint(fetchShape);\n    // we currently don't support shape changes\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  const mydata = useSuspense(endpoint, params);\n  //...\n}\n")),(0,n.kt)("h2",{id:"test-9"},"Test @9"),(0,n.kt)("p",null,"Old-style fixtures using FetchShape were removed here."),(0,n.kt)("p",null,"Before:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fixtures = [\n  {\n    request: CoolerArticleResource.detailShape(),\n    params,\n    result: payload,\n  },\n];\n")),(0,n.kt)("p",null,"After:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fixtures = [\n  {\n    endpoint: shapeToEndpoint(CoolerArticleResource.detailShape()),\n    args: [payload],\n    response: payload,\n  },\n];\n")),(0,n.kt)("h2",{id:"preparing-for-the-future"},"Preparing for the future"),(0,n.kt)("p",null,"Once you have successfully upgraded, you can try converting all 'rest-hooks' imports to '@rest-hooks/react'.\nThis will become the recommended way to consume rest hooks when using React. The 'rest-hooks' package will\nstill work but eventually remove any additions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"import {} from 'rest-hooks'")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"import {} from '@rest-hooks/react'"))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);