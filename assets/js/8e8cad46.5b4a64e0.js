/*! For license information please see 8e8cad46.5b4a64e0.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[66198],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=k.prototype=new b;g.constructor=k,h(g,y.prototype),g.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,E={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,l={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,a)&&!S.hasOwnProperty(a)&&(l[a]=t[a]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:E.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===l?"."+T(s,0):l,w(o)?(a="",null!=e&&(a=e.replace(I,"$&/")+"/"),_(o,t,a,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(I,"$&/")+"/")+e)),t.push(o)),1;if(s=0,l=""===l?".":l+":",w(e))for(var u=0;u<e.length;u++){var c=l+T(i=e[u],u);s+=_(i,t,a,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=_(i=i.value,t,a,c=l+T(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function x(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},C={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:f,groupId:m,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[N,E]=(0,a.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&y.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=S.indexOf(t),r=y[n].value;r!==N&&(j(t),E(r),null!=m&&w(m,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:I,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(a.Z,{value:"simple"},t[0]),l.createElement(a.Z,{value:"generics"},t[1]))}},45085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),l=n(11048);const o={title:"useInvalidator()"},i=void 0,s={unversionedId:"api/useInvalidator",id:"api/useInvalidator",title:"useInvalidator()",description:"Use Controller.invalidate() instead",source:"@site/../docs/core/api/useInvalidator.md",sourceDirName:"api",slug:"/api/useInvalidator",permalink:"/docs/api/useInvalidator",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useInvalidator.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"useInvalidator()"},sidebar:"docs",previous:{title:"useFetcher()",permalink:"/docs/api/useFetcher"},next:{title:"useResetter()",permalink:"/docs/api/useResetter"}},u={},c=[{value:"Example",id:"example",level:3},{value:"Internals",id:"internals",level:3},{value:"Invalidate an entity",id:"invalidate-an-entity",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate()")," instead")),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator(\n  endpoint: ReadEndpoint,\n): (params: object | null) => void;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p: Params) => Promise<any>, S>,\n): (params: Params | null) => void;\n"))),(0,a.kt)("p",null,"Mostly useful for imperatively invalidating the cache, with a similar signature to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useFetcher"},"useFetcher"),"."),(0,a.kt)("p",null,"Sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to params results in a no-op."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Forces refetching and suspense on ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")," with the same Endpoint\nand parameters."),(0,a.kt)("p",{parentName:"blockquote"},"To refresh while continuing to display stale data - ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useFetcher"},"useFetcher")," instead.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const invalidateArticle = useInvalidator(ArticleResource.detail());\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"internals"},"Internals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set expiresAt to 0.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This triggers useFetch."))),(0,a.kt)("li",{parentName:"ul"},"deletes results entry.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This only allows direct read from the cache if inferred results."))),(0,a.kt)("li",{parentName:"ul"},"sets meta.invalidated to true.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is used to determine whether to throw promise (trigger suspense)")))),(0,a.kt)("h2",{id:"invalidate-an-entity"},"Invalidate an entity"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useInvalidator()")," invalidates a particular response. If you're looking to invalidate ",(0,a.kt)("em",{parentName:"p"},"every"),"\nresponse containing a particular entity, use the ",(0,a.kt)("a",{parentName:"p",href:"./Delete"},"Delete"),"\nSchema. This causes all responses with that entity marked as required to suspend."),(0,a.kt)("p",null,"In case this isn't an actual endpoint, simply fake the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  (params) => Promise.resolve(params),\n  { schema: new schemas.Delete(ArticleResource) }\n);\n\nfunction ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const invalidateAllWithArticle = useFetcher(InvalidateArticle);\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateAllWithArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"The fetch should resolve to an object that can compute the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," (like 'id')\nof the entity. This is needed so Rest Hooks knows which entity is being deleted."),(0,a.kt)("p",null,"If the actual server response does not include this information, typically\nyou can pass through relevant information from the params themselves."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  ({ id }) => {\n    // disregard response from API since it's just an empty string\n    await fetch(`/article/${id}`, { method: 'DELETE' });\n    return { id };\n  },\n  { schema: new schemas.Delete(ArticleResource) },\n);\n")),(0,a.kt)("p",null,"This is actually what the default ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/resource#delete-endpoint"},"Resource.delete()")," does."))}d.isMDXComponent=!0}}]);