/*! For license information please see 93879cd2.3510fd88.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2146],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var k=v.prototype=new g;k.constructor=v,y(k,b.prototype),k.isPureReactComponent=!0;var j=Array.isArray,O=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===a?"."+P(u,0):a,j(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),x(s,t,o,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(u=0,a=""===a?".":a+":",j(e))for(var c=0;c<e.length;c++){var l=a+P(i=e[c],c);u+=x(i,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(i=e.next()).done;)u+=x(i=i.value,t,o,l=a+P(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},U={transition:null}},27378:(e,t,r)=>{r(41535)},97893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(27378),r(3905));const a={title:"Computed Properties"},s=void 0,i={unversionedId:"guides/computed-properties",id:"guides/computed-properties",title:"Computed Properties",description:"Entity classes are just normal classes, so any common derived data can just be added as",source:"@site/../docs/rest/guides/computed-properties.md",sourceDirName:"guides",slug:"/guides/computed-properties",permalink:"/rest/guides/computed-properties",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/rest/guides/computed-properties.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1670261252,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{title:"Computed Properties"},sidebar:"docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/rest/guides/rpc"},next:{title:"Summary List Endpoints",permalink:"/rest/guides/summary-list"}},u={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," classes are just normal classes, so any common derived data can just be added as\ngetters to the class itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/rest';\n\nclass User extends Entity {\n  id = '';\n  firstName = '';\n  lastName = '';\n  username = '';\n  email = '';\n\n  pk() {\n    return this.id;\n  }\n\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n")),(0,o.kt)("p",null,"If the computations are expensive feel free to add some\nmemoization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/rest';\nimport { memoize } from 'lodash';\n\nclass User extends Entity {\n  truelyExpensiveValue = memoize(() => {\n    // compute that expensive thing!\n  });\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you simply want to ",(0,o.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize a field")," to a more useful form like ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber"),", you can use\nthe declarative ",(0,o.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"static schema"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/rest';\n\nclass User extends Entity {\n  id = '';\n  firstName = '';\n  lastName = '';\n  createdAt = new Date(0);\n\n  pk() {\n    return this.id;\n  }\n\n  // highlight-start\n  static schema = {\n    createdAt: Date,\n  };\n  // highlight-end\n}\n"))))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);