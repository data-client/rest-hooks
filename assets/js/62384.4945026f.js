/*! For license information please see 62384.4945026f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62384,59550,70641,43796,58965,59661,70279,43543,58593,57556,74333,61373,56806],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),b=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var w=g.prototype=new v;w.constructor=g,y(w,h.prototype),w.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var a,o={},u=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),i=0;i<c;i++)s[i]=arguments[i+2];o.children=s}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:r,type:e,key:u,ref:l,props:o,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function V(e,t,a,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===o?"."+T(c,0):o,k(u)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),V(u,t,a,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,a+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(c=0,o=""===o?".":o+":",k(e))for(var s=0;s<e.length;s++){var i=o+T(l=e[s],s);c+=V(l,t,a,i,u)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(l=e.next()).done;)c+=V(l=l.value,t,a,i=o+T(l,s++),u);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function x(e,t,r){if(null==e)return e;var n=[],a=0;return V(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null}},27378:(e,t,r)=>{r(41535)},30433:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},22808:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(87462),a=r(67294),o=r(86010),u=r(63735),l=r(76775),c=r(34423),s=r(20636),i=r(99200);function f(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??f(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=d({queryString:r,groupId:n}),[f,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),m=(()=>{const e=c??f;return b({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),y(e)}),[s,y,o]),tabValues:o}}var m=r(5730),h="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:f}=(0,u.o5)(),p=e=>{const t=e.currentTarget,r=i.indexOf(t),n=s[r].value;n!==l&&(f(t),c(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:b,onClick:p},u,{className:(0,o.Z)("tabs__item",v,u?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function S(e){const t=(0,m.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return r?n.createElement(d,u(u({ref:t},i),{},{components:r})):n.createElement(d,u({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);