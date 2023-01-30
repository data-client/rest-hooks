"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60053],{38450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"makeRenderRestHook()"},i=void 0,l={unversionedId:"api/makeRenderRestHook",id:"version-6.3/api/makeRenderRestHook",title:"makeRenderRestHook()",description:"makeRenderRestHook() is useful to test hooks that rely on the rest-hooks. It creates a renderRestHook()",source:"@site/versioned_docs/version-6.3/api/makeRenderRestHook.md",sourceDirName:"api",slug:"/api/makeRenderRestHook",permalink:"/docs/6.3/api/makeRenderRestHook",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/makeRenderRestHook.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666925835,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"makeRenderRestHook()"},sidebar:"docs",previous:{title:"<MockResolver />",permalink:"/docs/6.3/api/MockResolver"},next:{title:"makeCacheProvider()",permalink:"/docs/6.3/api/makeCacheProvider"}},s={},p=[{value:"Arguments",id:"arguments",level:2},{value:"makeProvider",id:"makeprovider",level:3},{value:"renderRestHook()",id:"renderresthook",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"callback",id:"callback",level:4},{value:"options.initialFixtures",id:"optionsinitialfixtures",level:4},{value:"options.resolverFixtures",id:"optionsresolverfixtures",level:3},{value:"options.initialProps",id:"optionsinitialprops",level:4},{value:"options.wrapper",id:"optionswrapper",level:4},{value:"cleanup()",id:"cleanup",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function makeRenderRestHook(makeProvider: ProviderType): RenderRestHookFunction;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"makeRenderRestHook()")," is useful to test hooks that rely on the ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". It creates a renderRestHook()\nfunction that mirrors ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()")," but does so with a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," boundary\nas well as in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider />")," context."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"makeprovider"},"makeProvider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProviderType = (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => React.ComponentType<{\n  children: React.ReactChild;\n}>;\n")),(0,a.kt)("p",null,"Function to generate the provider used in ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()"),". The purpose of this is to unify construction of\nproviders as they both are initialized in a very different fashion."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/6.3/api/makeCacheProvider"},"makeCacheProvider()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/6.3/api/makeExternalCacheProvider"},"makeExternalCacheProvider()"))),(0,a.kt)("h2",{id:"renderresthook"},"renderRestHook()"),(0,a.kt)("p",null,"Returned from makeRenderRestHook():"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type RenderRestHookFunction = {\n  <P, R>(\n    callback: (props: P) => R,\n    options?: {\n      initialProps?: P;\n      initialFixtures?: FixtureEndpoint[];\n      resolverFixtures?: FixtureEndpoint[];\n      wrapper?: React.ComponentType;\n      // @deprecated\n      results?: Fixture[];\n    },\n  ): {\n    readonly result: {\n      readonly current: R;\n      readonly error: Error;\n    };\n    readonly waitForNextUpdate: () => Promise<void>;\n    readonly unmount: () => boolean;\n    readonly rerender: (hookProps?: P | undefined) => void;\n  };\n  cleanup(): void;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("h4",{id:"callback"},"callback"),(0,a.kt)("p",null,"Hooks to run inside React. Return value will become available in ",(0,a.kt)("inlineCode",{parentName:"p"},"result")),(0,a.kt)("h4",{id:"optionsinitialfixtures"},"options.initialFixtures"),(0,a.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled. Takes same\n",(0,a.kt)("a",{parentName:"p",href:"../api/MockResolver#fixtures"},"array of fixtures as MockResolver")),(0,a.kt)("p",null,"This has the same effect as initializing ",(0,a.kt)("a",{parentName:"p",href:"../api/CacheProvider"},"<CacheProvider /",">")," with ",(0,a.kt)("a",{parentName:"p",href:"../api/mockInitialState"},"mockInitialState()")),(0,a.kt)("h3",{id:"optionsresolverfixtures"},"options.resolverFixtures"),(0,a.kt)("p",null,"These fixtures are used to resolve any new requests. This is most useful for mocking imperative fetches like mutations, but can also allow testing suspending states or transitions."),(0,a.kt)("p",null,"Wrrks by adding ",(0,a.kt)("a",{parentName:"p",href:"../api/MockResolver"},"MockResolver")," as a wrapper."),(0,a.kt)("h4",{id:"optionsinitialprops"},"options.initialProps"),(0,a.kt)("p",null,"The initial values to pass to the callback function"),(0,a.kt)("h4",{id:"optionswrapper"},"options.wrapper"),(0,a.kt)("p",null,"Pass a React Component as the wrapper option to have it rendered around the inner element"),(0,a.kt)("h3",{id:"cleanup"},"cleanup()"),(0,a.kt)("p",null,"Cleans up all managers used in tests. Should be run in ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach()")," to ensure each test starts fresh."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"result")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"current")," (",(0,a.kt)("inlineCode",{parentName:"li"},"any"),") - the return value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Error"),") - the error that was thrown if the ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," function threw an error during rendering"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"waitForNextUpdate")," (",(0,a.kt)("inlineCode",{parentName:"li"},"function"),") - returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise")," that resolves the next time the hook renders, commonly when state is updated as the result of a asynchronous action."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rerender")," (",(0,a.kt)("inlineCode",{parentName:"li"},"function([newProps])"),") - function to rerender the test component including any hooks called in the ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," function. If ",(0,a.kt)("inlineCode",{parentName:"li"},"newProps")," are passed, the will replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"initialProps")," passed the the ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," function for future renders."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unmount")," (",(0,a.kt)("inlineCode",{parentName:"li"},"function()"),") - function to unmount the test component, commonly used to trigger cleanup effects for ",(0,a.kt)("inlineCode",{parentName:"li"},"useEffect")," hooks.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-result"},"@testing-library/react-hooks reference")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\nconst payload = {\n  id: 5,\n  title: 'hi ho',\n  content: 'whatever',\n  tags: ['a', 'best', 'react'],\n};\n\nbeforeEach(() => {\n  nock('http://test.com')\n    .get(`/article-cooler/${payload.id}`)\n    .reply(200, payload);\n  renderRestHook = makeRenderRestHook(makeCacheProvider);\n});\n\nit('should resolve useSuspense()', async () => {\n  const { result, waitForNextUpdate } = renderRestHook(() => {\n    return useSuspense(ArticleResource.detail(), payload);\n  });\n  expect(result.current).toBeUndefined();\n  await waitForNextUpdate();\n  expect(result.current instanceof ArticleResource).toBe(true);\n  expect(result.current.title).toBe(payload.title);\n});\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);