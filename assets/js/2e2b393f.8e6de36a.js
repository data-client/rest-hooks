/*! For license information please see 2e2b393f.8e6de36a.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[90737],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=k.prototype=new b;v.constructor=k,g(v,h.prototype),v.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)P.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:x.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===a?"."+j(u,0):a,w(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),_(s,t,o,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var c=a+j(i=e[l],l);u+=_(i,t,o,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(i=e.next()).done;)u+=_(i=i.value,t,o,c=a+j(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(27378),n(3905));const a={title:"Infinite Scrolling"},s=void 0,i={unversionedId:"guides/infinite-scrolling-pagination",id:"guides/infinite-scrolling-pagination",title:"Infinite Scrolling",description:"Add Update Function matching network schema",source:"@site/../docs/core/guides/infinite-scrolling-pagination.md",sourceDirName:"guides",slug:"/guides/infinite-scrolling-pagination",permalink:"/docs/guides/infinite-scrolling-pagination",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/infinite-scrolling-pagination.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Infinite Scrolling"},sidebar:"docs",previous:{title:"Images and other Media",permalink:"/docs/guides/img-media"},next:{title:"Fetching multiple resources at once",permalink:"/docs/guides/fetch-multiple"}},u={},l=[{value:"Add Update Function matching network schema",id:"add-update-function-matching-network-schema",level:2},{value:"Create pagination hook",id:"create-pagination-hook",level:2},{value:"NewsList example",id:"newslist-example",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-update-function-matching-network-schema"},"Add Update Function matching network schema"),(0,o.kt)("p",null,"If your API follows a common pattern, adding the ",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),"\nto a base class can make adding pagination behavior to any of your endpoints quite easy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Params = { cursor: string; [k: string]: any };\nabstract class BaseResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    FetchFunction<Params>,\n    { results: T[]; cursor: string | null },\n    undefined\n  > {\n    return super.list().extend({\n      schema: { results: [this], cursor: null },\n      update: (newResults: any, { cursor, ...rest }: Params) => ({\n        [this.list().key({ ...rest })]: BaseResource.appendList.bind(\n          BaseResource,\n          newResults,\n        ),\n      }),\n    });\n  }\n\n  static appendList(\n    newResults: { results: string[] },\n    existingResults: { results: string[] } | undefined,\n  ) {\n    const existingList = existingResults?.results ?? [];\n    const existingSet: Set<string> = new Set(existingList);\n    const addedList = newResults.results.filter(\n      (pk: string) => !existingSet.has(pk),\n    );\n    const mergedResults: string[] = [...existingList, ...addedList];\n    return {\n      ...newResults,\n      results: mergedResults,\n    };\n  }\n}\n")),(0,o.kt)("h2",{id:"create-pagination-hook"},"Create pagination hook"),(0,o.kt)("p",null,"Here we'll define a helper hook for pagination that uses the BaseResource\n",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),".\nThis can then be used for any Resources that conform to this schema. Most likely\nthat is the same as those extending from BaseResource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useMemo } from 'react';\nimport { ReadEndpoint, useController } from 'rest-hooks';\n\nfunction usePaginator<\n  E extends ReadEndpoint<(params: any) => Promise<any>, any>,\n>(endpoint: E, params: Omit<Parameters<E>[0], 'cursor'> | null) {\n  const { fetch } = useController();\n\n  return useMemo(\n    () => {\n      if (!params) return null;\n      return (cursor: string) => {\n        const p: Parameters<E> = [{ ...params, cursor }] as any;\n        return fetch(endpoint, ...p);\n      };\n    },\n    // \"params && endpoint.key(params)\" is a method to serialize params\n    [fetch, params && endpoint.key(params)],\n  );\n}\n")),(0,o.kt)("h2",{id:"newslist-example"},"NewsList example"),(0,o.kt)("p",null,"We'll extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseResource")," created above, to define the correct\nschema for list()."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import BaseResource from 'resources/BaseResource';\n\nclass NewsResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly title = '';\n  readonly url = '';\n  readonly previewImage = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/news';\n}\n")),(0,o.kt)("p",null,"Now we can declare our data depency to get list results with ",(0,o.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense"),",\nand get an imperative handler ",(0,o.kt)("inlineCode",{parentName:"p"},"getNextPage")," using our new hook."),(0,o.kt)("p",null,"Since UI behaviors vary widely, and implementations vary from platform (react-native or web),\nwe'll just assume a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," component is built, that uses a callback to trigger next\npage fetching. On web, it is recommended to use something based on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observers")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Pagination />")," is assumed to call its ",(0,o.kt)("inlineCode",{parentName:"p"},"onPaginate")," prop when a user scrolls and its\n",(0,o.kt)("inlineCode",{parentName:"p"},"nextCursor")," is not falsy. It will then pass the nextCursor prop as the sole argument to\n",(0,o.kt)("inlineCode",{parentName:"p"},"onPaginate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport NewsResource from 'resources/NewsResource';\nimport usePaginator from 'resources/basePaginator';\n\nfunction NewsList() {\n  const { results, cursor } = useSuspense(NewsResource.list(), {});\n  const getNextPage = usePaginator(NewsResource.list(), {});\n\n  return (\n    <Pagination onPaginate={getNextPage} nextCursor={cursor}>\n      <NewsList data={results} />\n    </Pagination>\n  );\n}\n")))}p.isMDXComponent=!0}}]);