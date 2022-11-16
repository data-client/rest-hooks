"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49732],{30433:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(86010),a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),s=n(5730),l=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:k,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[x,N]=(0,o.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==x&&v.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==x&&(T(t),N(r),null!=k&&w(k,String(r)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},h)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:R,onClick:j},s,{className:(0,a.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},52393:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65559),o=n(30433),a=n(67294),s=n(13743);function l(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},57489:(e,t,n)=>{var r=n(67294),o=n(38970);const a={React:r,...r,...o};t.Z=a},75798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(52393),s=n(65559),l=n(30433);const i={title:"Unit testing hooks"},c=void 0,u={unversionedId:"guides/unit-testing-hooks",id:"version-6.6/guides/unit-testing-hooks",title:"Unit testing hooks",description:"Be careful when using jest.mock on modules like rest-hooks. Eliminating expected",source:"@site/versioned_docs/version-6.6/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/6.6/guides/unit-testing-hooks",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Unit testing hooks"},sidebar:"docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/6.6/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/6.6/guides/unit-testing-components"}},p={},d=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",level:3},{value:"Example:",id:"example",level:3}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Be careful when using ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options"},"jest.mock")," on modules like rest-hooks. Eliminating expected\nexports can lead to hard-to trace\nerrors like ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeError: Class extends value undefined is not a function or null"),"."),(0,o.kt)("p",{parentName:"admonition"},"Instead either do a ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-functions#mocking-partials"},"partial mock"),",\nor better ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-functions#mocking-modules"},"mockResolvedValue")," on your\nendpoints.")),(0,o.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,o.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,o.kt)("p",null,"We want a ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,o.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,o.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state.")),(0,o.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,o.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,o.kt)(a.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,o.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"jest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.get, {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,o.kt)(l.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.get, {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);