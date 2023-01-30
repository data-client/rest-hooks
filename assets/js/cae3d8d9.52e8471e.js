"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5072],{28153:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 4.0 Released"},s=void 0,i={permalink:"/blog/2019/12/24/Rest-Hooks-4.0-Released",source:"@site/blog/2019-12-24-Rest-Hooks-4.0-Released.md",title:"Rest Hooks 4.0 Released",description:"4.0 marks the end of the migration to the new useCache() and useResource() implementations first",date:"2019-12-24T00:00:00.000Z",formattedDate:"December 24, 2019",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:3.365,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 4.0 Released"},prevItem:{title:"Rest Hooks 4.1 Released",permalink:"/blog/2020/01/06/Rest-Hooks-4.1-Released"},nextItem:{title:"Rest Hooks 2.2 Released",permalink:"/blog/2019/10/28/Rest-Hooks-2.2-Released"}},l={authorsImageUrls:[void 0]},p=[{value:"Drop legacy",id:"drop-legacy",level:2},{value:"Using fetch() out of the box",id:"using-fetch-out-of-the-box",level:2},{value:"New supplemental libraries",id:"new-supplemental-libraries",level:2},{value:"@rest-hooks/test",id:"rest-hookstest",level:3},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:3},{value:"Drop IE support in ES6 module",id:"drop-ie-support-in-es6-module",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Final notes",id:"final-notes",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4.0 marks the end of the migration to the new useCache() and useResource() implementations first\nintroduced in 2.2. It also comes with a few other exciting features like a rewritten fetch based\non the actual browser ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/4.0/Web/API/Fetch_API"},"fetch API"),".\nRead below for more details and a ",(0,r.kt)("a",{parentName:"p",href:"#migration-guide"},"migration guide"),"."),(0,r.kt)("h2",{id:"drop-legacy"},"Drop legacy"),(0,r.kt)("p",null,"This marks the final stage of the rewritten selector hooks with useCacheLegacy() and useResourceLegacy() both\nbeing completely removed.\nThese legacy versions removed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/data-client/rest-hooks/pull/170/files"},"#170")," are wrappers\naround the new versions. Because of this if you want to continue using those selectors you can simply\ncopy the code removed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/data-client/rest-hooks/pull/170/files"},"#170")," into your own\napplication."),(0,r.kt)("h2",{id:"using-fetch-out-of-the-box"},"Using fetch() out of the box"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"Superagent")," has a nice API using the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Builder_pattern"},"Builder Pattern"),", as well as working server-side out of the box which made it a great default fetch implementation.\nHowever, it has not received much love recently and over time more functionality has been added to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/4.0/Web/API/Fetch_API"},"fetch")," standard. Furthermore,\ndevelopers have become increasingly familiar and used to it over other solutions."),(0,r.kt)("p",null,"For these reasons, we the default fetch implementation in ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/api/Resource"},"Resource")," now uses fetch. As such,\nif you are targetting old (read: IE) browsers or want to run your code in node (for unit tests or server side rendering),\nyou'll need to add a ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/whatwg-fetch"},"fetch polyfill"),". ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/whatwg-fetch"},"whatwg-ftech"),"\nis a great choice as it works both in node and in old browsers."),(0,r.kt)("p",null,"For those looking to continue using superagent, the old implementation is provided as an example ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/guides/custom-networking#superagent"},"custom\nfetch function"),"."),(0,r.kt)("p",null,"Along with this redesign comes some useful new ways of extending fetch for custom hooks.\nInstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchPlugin"),", there is a now a ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchOptionsPlugin")," which can be used to set\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/4.0/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch options")," like adding headers."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/api/resource#static-fetchresponsemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseresponse"},"fetchResponse()"),"\nis exposed which does the bulk of the fetching besides reading the data itself. This can be useful when\nbuilding custom fetch shapes that need ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/guides/network-transform#using-http-headers"},"access to things like headers"),".\nto build their response."),(0,r.kt)("h2",{id:"new-supplemental-libraries"},"New supplemental libraries"),(0,r.kt)("p",null,"Two new libraries were introduced in the last two months. These are both compatible with v3 and v4 of Rest Hooks."),(0,r.kt)("h3",{id:"rest-hookstest"},(0,r.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@rest-hooks/test"},"@rest-hooks/test")),(0,r.kt)("p",null,"Previously, ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/guides/unit-testing-hooks"},"testing utilities")," had been included in\nrest-hooks package directly. These were pulled out into their own library and are no longer\nincluded in v4 of Rest Hooks."),(0,r.kt)("h3",{id:"rest-hookslegacy"},(0,r.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy")),(0,r.kt)("p",null,"Legacy is a new package that included a hook similar to ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/api/useresource"},"useResource()"),", but that doesn't use Suspense.\nIn practice this can be useful even when Suspense is used, as certain scenarios having stateful indicators\nfor loading and error states can actually be more ergonomic. This is also essential to integrate currently\nwith any Server Side Rendering."),(0,r.kt)("p",null,"Previously ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.0/guides/no-suspense"},"useStatefulResource()")," had been provided as\nexample code in the docs. However, since it was not tested it would often grow incompatible as underlying\nchanges were made to Rest Hooks itself."),(0,r.kt)("p",null,"Now it's just an install and import away."),(0,r.kt)("h2",{id:"drop-ie-support-in-es6-module"},"Drop IE support in ES6 module"),(0,r.kt)("p",null,"Supporting Internet Explorer can be annoying. For many it is not even a requirement for their apps,\nand so including library code with compatibility adapters can make the code bloated and even slower."),(0,r.kt)("p",null,"For this reason, those using a bundler that recognizes ES6 modules like webpack or parcel will load\na somewhat ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/data-client/rest-hooks/blob/rest-hooks%404.0.0/package.json#L25"},"modern target"),"."),(0,r.kt)("p",null,"If you plan on supporting IE, you'll need to include transpiling Rest Hooks as part of your build process.\nNote that Create React App already does this, so no work is needed in that case."),(0,r.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transpile Rest Hooks if IE is to be supported"),(0,r.kt)("li",{parentName:"ul"},"Remove useCacheLegacy() and useResourceLegacy()"),(0,r.kt)("li",{parentName:"ul"},"rest-hooks/test -> @rest-hooks/test"),(0,r.kt)("li",{parentName:"ul"},"fetchPlugin -> fetchOptionsPlugin, which builds on ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/4.0/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch options")),(0,r.kt)("li",{parentName:"ul"},"No more SuperagentResource export"),(0,r.kt)("li",{parentName:"ul"},"url() and listUrl() params are no longer optional (TypeScript)"),(0,r.kt)("li",{parentName:"ul"},"Remove generic signatures to any Resource.fetch() overrides")),(0,r.kt)("h2",{id:"final-notes"},"Final notes"),(0,r.kt)("p",null,"Please try out the new release and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/data-client/rest-hooks/issues"},"give feedback"),"\nif there are any issues or if things are working great! We've got a lot of great new features\ncoming down the pipeline and we hope to see your contributions as well. \ud83d\ude0a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/data-client/rest-hooks/releases/tag/rest-hooks%404.0.0"},"Full set of 4.0 release commits")))}c.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(o),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);