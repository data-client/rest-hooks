"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[39313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Upgrading @rest-hooks/test to 3"},i=void 0,s={unversionedId:"upgrade/upgrading-test-to-three",id:"version-6.1/upgrade/upgrading-test-to-three",title:"Upgrading @rest-hooks/test to 3",description:"@rest-hooks/test uses react-hooks-testing-library internally. Version 3",source:"@site/versioned_docs/version-6.1/upgrade/upgrading-test-to-three.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-three",permalink:"/docs/6.1/upgrade/upgrading-test-to-three",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-three.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Upgrading @rest-hooks/test to 3"},sidebar:"version-6.1/docs",previous:{title:"Upgrading @rest-hooks/test to 4",permalink:"/docs/6.1/upgrade/upgrading-test-to-four"}},l={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"react-hooks-testing-library")," internally. Version 3\nhas a major version upgrade for this library, so the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"breaking changes"),"\nalso apply to ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"result.current, result.error is now ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," after suspense, rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"interval will now default to 50ms in async utils"),(0,a.kt)("li",{parentName:"ul"},"timeout will now default to 1000ms in async utils"),(0,a.kt)("li",{parentName:"ul"},"suppressErrors has been removed from async utils"),(0,a.kt)("li",{parentName:"ul"},"Adjust types so that react renderer exports don't required extra generic parameter"),(0,a.kt)("li",{parentName:"ul"},"Importing from renderHook and act from @testing-library/react-hooks will now auto-detect which renderer to used based on the project's dependencies",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- peerDependencies are now optional to support different dependencies being required\n- This means there will be no warning if the dependency is not installed at all, but it will still warn if an incompatible version is installed\n- Auto-detection won't work with bundlers (e.g. Webpack). Please use as specific renderer import instead\n")),"(see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"),")")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/%40rest-hooks%2Ftest%403.0.0"},"Release notes")))}c.isMDXComponent=!0}}]);