/*! For license information please see 7b40e4ac.7ef91b72.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94289],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function h(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var g=k.prototype=new h;g.constructor=k,m(g,v.prototype),g.isPureReactComponent=!0;var x=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return s=s(l=e),e=""===a?"."+M(l,0):a,x(s)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),_(s,t,o,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",x(e))for(var c=0;c<e.length;c++){var u=a+M(i=e[c],c);l+=_(i,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=_(i=i.value,t,o,u=a+M(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},C={transition:null}},27378:(e,t,r)=>{r(41535)},64648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(27378),r(3905));const a={title:"<MockResolver />"},s=void 0,i={unversionedId:"api/MockResolver",id:"api/MockResolver",title:"<MockResolver />",description:"&lt;MockResolver /\\> enables easy loading of fixtures to see what different network responses might look like.",source:"@site/../docs/core/api/MockResolver.md",sourceDirName:"api",slug:"/api/MockResolver",permalink:"/docs/api/MockResolver",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/MockResolver.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1674511782,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{title:"<MockResolver />"},sidebar:"docs",previous:{title:"LogoutManager",permalink:"/docs/api/LogoutManager"},next:{title:"makeRenderRestHook()",permalink:"/docs/api/makeRenderRestHook"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"fixtures",id:"fixtures",level:4},{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function MockResolver({\n  children,\n  fixtures,\n}: {\n  children: React.ReactNode;\n  fixtures: (Fixture | Interceptor)[];\n}): JSX.Element;\n")),(0,o.kt)("p",null,"<","MockResolver /",">"," enables easy loading of fixtures to see what different network responses might look like.\nThis is useful for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/storybook"},"storybook")," as well as component testing."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"fixtures"},"fixtures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SuccessFixture<\n  E extends EndpointInterface = EndpointInterface,\n> {\n  readonly endpoint: E;\n  readonly args: Parameters<E>;\n  readonly response:\n    | ResolveType<E>\n    | ((...args: Parameters<E>) => ResolveType<E>);\n  readonly error?: false;\n  /** Number of miliseconds to wait before resolving */\n  readonly delay?: number;\n  /** Waits to run `response()` after `delay` time */\n  readonly delayCollapse?: boolean;\n}\n\nexport interface ErrorFixture<E extends EndpointInterface = EndpointInterface> {\n  readonly endpoint: E;\n  readonly args: Parameters<E>;\n  readonly response: any;\n  readonly error: true;\n  /** Number of miliseconds to wait before resolving */\n  readonly delay?: number;\n  /** Waits to run `response()` after `delay` time */\n  readonly delayCollapse?: boolean;\n}\n\nexport interface Interceptor<\n  E extends EndpointInterface & {\n    testKey(key: string): boolean;\n  } = EndpointInterface & { testKey(key: string): boolean },\n> {\n  readonly endpoint: E;\n  readonly response: (...args: Parameters<E>) => ResolveType<E>;\n  /** Number of miliseconds (or function that returns) to wait before resolving */\n  readonly delay?: number | ((...args: Parameters<E>) => number);\n  /** Waits to run `response()` after `delay` time */\n  readonly delayCollapse?: boolean;\n}\n\nexport type Fixture = SuccessFixture | ErrorFixture;\n")),(0,o.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and params. ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    endpoint: ArticleResource.getList,\n    args: [{ maxResults: 10 }] as const,\n    response: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n  {\n    endpoint: ArticleResource.partialUpdate,\n    response: ({ id }, body) => ({\n      ...body,\n      id,\n    }),\n  },\n];\n\nconst Template: Story = () => (\n  <MockResolver fixtures={results}>\n    <MyComponentToTest />\n  </MockResolver>\n);\n\nexport const MyStory = Template.bind({});\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);