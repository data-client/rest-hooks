/*! For license information please see 39ed52e6.2ab477b3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22915],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var k=g.prototype=new v;k.constructor=g,m(k,h.prototype),k.isPureReactComponent=!0;var S=Array.isArray,w=Object.prototype.hasOwnProperty,P={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:P.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+M(c,0):a,S(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",S(e))for(var s=0;s<e.length;s++){var u=a+M(l=e[s],s);c+=C(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)c+=C(l=l.value,t,o,u=a+M(l,s++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function x(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},E={transition:null}},27378:(e,t,r)=>{r(41535)},92646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(27378),r(3905));const a={title:"PollingSubscription",sidebar_label:"PollingSubscription"},i=void 0,l={unversionedId:"api/PollingSubscription",id:"api/PollingSubscription",title:"PollingSubscription",description:"Will dispatch a fetch action at the minimum interval of all subscriptions to this",source:"@site/../docs/core/api/PollingSubscription.md",sourceDirName:"api",slug:"/api/PollingSubscription",permalink:"/docs/api/PollingSubscription",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/PollingSubscription.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1670358439,formattedLastUpdatedAt:"Dec 6, 2022",frontMatter:{title:"PollingSubscription",sidebar_label:"PollingSubscription"},sidebar:"docs",previous:{title:"SubscriptionManager",permalink:"/docs/api/SubscriptionManager"},next:{title:"DevToolsManager",permalink:"/docs/api/DevToolsManager"}},c={},s=[{value:"Dispatched Actions",id:"dispatched-actions",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Will dispatch a ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," action at the minimum interval of all subscriptions to this\nresource."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pauses when offline."),(0,o.kt)("li",{parentName:"ul"},"Immediately fetches when online status returns."),(0,o.kt)("li",{parentName:"ul"},"Immediately fetches any new subscriptions.")),(0,o.kt)("admonition",{title:"implements",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"PollingSubscription")," implements ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/SubscriptionManager#subscription"},"Subscription"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  CacheProvider,\n  NetworkManager,\n} from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\nconst managers = [\n  new NetworkManager(),\n  new SubscriptionManager(PollingSubscription)\n]\n\nReactDOM.render(\n  <CacheProvider managers={managers}>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"This is already used by ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheProvider")," by default.")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);