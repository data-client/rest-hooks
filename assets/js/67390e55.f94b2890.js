/*! For license information please see 67390e55.f94b2890.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[71728],{41535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=g.prototype=new v;b.constructor=g,k(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,N={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!R.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=o;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:N.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function H(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return s=s(l=e),e=""===a?"."+H(l,0):a,w(s)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),T(s,t,r,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+H(i=e[u],u);l+=T(i,t,r,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(i=e.next()).done;)l+=T(i=i.value,t,r,c=a+H(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _(e,t,n){if(null==e)return e;var o=[],r=0;return T(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},U={transition:null}},27378:(e,t,n)=>{n(41535)},96497:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(9877),r=n(58215),a=n(67294),s=n(87799);function i(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(r.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(15814);const a={React:o,...o,...r}},93037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(27378),n(3905)),a=n(96497),s=n(9877),i=n(58215);const l={title:"Unit testing hooks"},u=void 0,c={unversionedId:"guides/unit-testing-hooks",id:"guides/unit-testing-hooks",title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/../docs/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/next/guides/unit-testing-hooks",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Unit testing hooks"},sidebar:"docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/next/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/next/guides/unit-testing-components"}},p={},d=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",level:3},{value:"Example:",id:"example",level:3}],f={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,r.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,r.kt)("p",null,"We want a ",(0,r.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,r.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,r.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,r.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state."))),(0,r.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,r.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,r.kt)(a.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,r.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"jest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,r.kt)(i.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}m.isMDXComponent=!0}}]);