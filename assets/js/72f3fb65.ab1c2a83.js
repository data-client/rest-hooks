/*! For license information please see 72f3fb65.ab1c2a83.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[60372],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=k.prototype=new b;v.constructor=k,m(v,h.prototype),v.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,O={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var L=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===a?"."+P(l,0):a,w(i)?(o="",null!=e&&(o=e.replace(L,"$&/")+"/"),T(i,t,o,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(L,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+P(s=e[c],c);l+=T(s,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,t,o,u=a+P(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function C(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},$={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(27378),n(3905));const a={title:"useLoading()"},i=void 0,s={unversionedId:"api/useLoading",id:"api/useLoading",title:"useLoading()",description:"Helps track loading state of imperative async functions.",source:"@site/../docs/core/api/useLoading.md",sourceDirName:"api",slug:"/api/useLoading",permalink:"/docs/api/useLoading",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useLoading.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"useLoading()"},sidebar:"docs",previous:{title:"useCancelling()",permalink:"/docs/api/useCancelling"},next:{title:"Endpoint",permalink:"/docs/api/Endpoint"}},l={},c=[{value:"Todo toggle example",id:"todo-toggle-example",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function useLoading<F extends (...args: any) => Promise<any>>(\n  func: F,\n  deps: readonly any[] = [],\n): [F, boolean];\n")),(0,o.kt)("p",null,"Helps track loading state of imperative async functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nfunction Button({ onClick, children, ...props }) {\n  const [clickHandler, loading, error] = useLoading(onClick);\n  return (\n    <button onClick={clickHandler} {...props}>\n      {loading ? 'Loading...' : children}\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"Part of ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")),(0,o.kt)("h3",{id:"todo-toggle-example"},"Todo toggle example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback } from 'react';\nimport { useController } from 'rest-hooks';\nimport { useLoading } from '@rest-hooks/hooks';\n\nimport TodoResource from 'resources/TodoResource';\n\ninterface Props {\n  todo: TodoResource;\n}\n\nfunction TodoListItem({ todo }) {\n  const { fetch } = useController();\n\n  const [toggleHandler, loading, error] = useLoading(\n    (e: ChangeEvent<HTMLInputElement>) =>\n      fetch(\n        TodoResource.partialUpdate(),\n        { id },\n        { completed: e.currentTarget.checked },\n      ),\n    [fetch],\n  );\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        checked={todo.completed}\n        onChange={toggleHandler}\n      />\n      {loading ? <Spinner /> : null}\n      {error ? <Error>{error}</Error> : null}\n      {todo.title}\n    </div>\n  );\n}\n")),(0,o.kt)("admonition",{title:"Eslint configuration",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Since we use the deps list, be sure to add useLoading to the 'additionalHooks' configuration\nof ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"react-hooks/exhaustive-deps")," rule if you use it."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "rules": {\n    // ...\n    "react-hooks/exhaustive-deps": ["warn", {\n      "additionalHooks": "(useLoading)"\n    }]\n  }\n}\n'))))}p.isMDXComponent=!0}}]);