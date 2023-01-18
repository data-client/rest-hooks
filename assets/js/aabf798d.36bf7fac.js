/*! For license information please see aabf798d.36bf7fac.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68311],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,g(k,y.prototype),k.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,M={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:s,ref:i,props:o,_owner:M.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,a,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return s=s(l=e),e=""===o?"."+N(l,0):o,w(s)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),E(s,t,a,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var p=o+N(i=e[c],c);l+=E(i,t,a,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(i=e.next()).done;)l+=E(i=i.value,t,a,p=o+N(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,r){if(null==e)return e;var n=[],a=0;return E(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},D={transition:null}},27378:(e,t,r)=>{r(41535)},76751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(27378),r(3905));const o={title:"Managers, Middleware, and Flux",sidebar_label:"Managers and Middleware"},s=void 0,i={unversionedId:"concepts/managers",id:"concepts/managers",title:"Managers, Middleware, and Flux",description:"Rest Hooks uses the flux store pattern, which is",source:"@site/../docs/core/concepts/managers.md",sourceDirName:"concepts",slug:"/concepts/managers",permalink:"/docs/concepts/managers",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/concepts/managers.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1673811824,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"Managers, Middleware, and Flux",sidebar_label:"Managers and Middleware"},sidebar:"docs",previous:{title:"Atomic Mutations",permalink:"/docs/concepts/atomic-mutations"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},l={},c=[{value:"Default managers",id:"default-managers",level:2},{value:"Extra managers",id:"extra-managers",level:2},{value:"Examples",id:"examples",level:2},{value:"Middleware logging",id:"middleware-logging",level:3},{value:"Middleware data stream (push-based)",id:"data-stream",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"docsearch:pagerank",content:"40"})),(0,a.kt)("p",null,"Rest Hooks uses the ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux/docs/in-depth-overview/"},"flux store")," pattern, which is\ncharacterized by an easy to understand and debug ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unidirectional_Data_Flow_(computer_science)"},"undirectional data flow"),". State updates are performed by a reducer function."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manager flux flow",src:r(3214).Z,width:"1600",height:"686"})),(0,a.kt)("p",null,"Rest Hooks improves type-safety and ergonomics by performing dispatches and store access with\nits ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller"},"Controller")),(0,a.kt)("p",null,"Finally, everything is orchestrated by ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Managers"),". Managers integrate with the flux\nlifecycle by intercepting and dispatching actions, as well as reading the internal state."),(0,a.kt)("p",null,"This central orchestration is how Rest Hooks is able to coordinate with all components, doing things\nlike automatic fetch deduplication, polling fetch coordinating eliminating many cases of overfetching."),(0,a.kt)("p",null,"It also means Rest Hooks behavior can be arbitrarily customized by writing your own Managers."),(0,a.kt)("h2",{id:"default-managers"},"Default managers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/NetworkManager"},"NetworkManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/SubscriptionManager"},"SubscriptionManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/DevToolsManager"},"DevToolsManager"))),(0,a.kt)("h2",{id:"extra-managers"},"Extra managers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/LogoutManager"},"LogoutManager"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"middleware-logging"},"Middleware logging"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Manager, Middleware } from '@rest-hooks/core';\n\nexport default class LoggingManager implements Manager {\n  getMiddleware = (): Middleware => controller => next => async action => {\n    console.log('before', action, controller.getState());\n    await next(action);\n    console.log('after', action, controller.getState());\n  };\n\n  cleanup() {}\n}\n")),(0,a.kt)("h3",{id:"data-stream"},"Middleware data stream (push-based)"),(0,a.kt)("p",null,"Adding a manager to process data pushed from the server by ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"websockets"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"},"Server Sent Events")," ensures\nwe can maintain fresh data when the data updates are independent of user action. For example, a trading app's\nprice, or a real-time collaborative editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Manager, Middleware } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class StreamManager implements Manager {\n  protected declare middleware: Middleware;\n  protected declare evtSource: WebSocket | EventSource;\n  protected declare endpoints: Record<string, EndpointInterface>;\n\n  constructor(\n    evtSource: WebSocket | EventSource,\n    endpoints: Record<string, EndpointInterface>,\n  ) {\n    this.evtSource = evtSource;\n    this.endpoints = endpoints;\n\n    // highlight-start\n    this.middleware = controller => {\n      this.evtSource.onmessage = event => {\n        try {\n          const msg = JSON.parse(event.data);\n          if (msg.type in this.endpoints)\n            controller.setResponse(this.endpoints[msg.type], ...msg.args, msg.data);\n        } catch (e) {\n          console.error('Failed to handle message');\n          console.error(e);\n        }\n      };\n      return next => async action => next(action);\n    };\n    // highlight-end\n  }\n\n  cleanup() {\n    this.evtSource.close();\n  }\n\n  getMiddleware() {\n    return this.middleware;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#setResponse"},"Controller.setResponse()")," updates the Rest Hooks store\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"event.data"),"."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3214:(e,t,r)=>{t.Z=r.p+"assets/images/managers-12ec42d958a182bcb3eb9a337a73cb90.png"}}]);