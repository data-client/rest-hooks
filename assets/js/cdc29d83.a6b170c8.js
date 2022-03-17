/*! For license information please see cdc29d83.a6b170c8.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[92046],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=k.prototype=new b;v.constructor=k,h(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,O={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:O.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return s=s(l=e),e=""===a?"."+x(l,0):a,w(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+x(i=e[u],u);l+=C(i,t,o,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(i=e.next()).done;)l+=C(i=i.value,t,o,c=a+x(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},$={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"Upgrading @rest-hooks/test to 3"},s=void 0,i={unversionedId:"upgrade/upgrading-test-to-three",id:"upgrade/upgrading-test-to-three",title:"Upgrading @rest-hooks/test to 3",description:"@rest-hooks/test uses react-hooks-testing-library internally. Version 3",source:"@site/../docs/upgrade/upgrading-test-to-three.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-three",permalink:"/docs/next/upgrade/upgrading-test-to-three",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-three.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Upgrading @rest-hooks/test to 3"},sidebar:"docs",previous:{title:"Upgrading @rest-hooks/test to 4",permalink:"/docs/next/upgrade/upgrading-test-to-four"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hooks-testing-library")," internally. Version 3\nhas a major version upgrade for this library, so the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"breaking changes"),"\nalso apply to ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result.current, result.error is now ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," after suspense, rather than ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"interval will now default to 50ms in async utils"),(0,o.kt)("li",{parentName:"ul"},"timeout will now default to 1000ms in async utils"),(0,o.kt)("li",{parentName:"ul"},"suppressErrors has been removed from async utils"),(0,o.kt)("li",{parentName:"ul"},"Adjust types so that react renderer exports don't required extra generic parameter"),(0,o.kt)("li",{parentName:"ul"},"Importing from renderHook and act from @testing-library/react-hooks will now auto-detect which renderer to used based on the project's dependencies",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- peerDependencies are now optional to support different dependencies being required\n- This means there will be no warning if the dependency is not installed at all, but it will still warn if an incompatible version is installed\n- Auto-detection won't work with bundlers (e.g. Webpack). Please use as specific renderer import instead\n")),"(see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"),")")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/%40rest-hooks%2Ftest%403.0.0"},"Release notes")))}p.isMDXComponent=!0}}]);