"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92080],{30433:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),d=r(63735),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:h,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[x,M]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,d.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&M(e)}const E=e=>{const t=e.currentTarget,r=N.indexOf(t),n=v[r].value;n!==x&&(P(t),M(n),null!=h&&y(h,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(65559),a=r(30433),o=r(67294),l=r(13743);function s(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(l.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(l.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var n=r(67294),a=r(38970);const o={React:n,...n,...a};t.Z=o},92880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(52393),l=r(65559),s=r(30433);const i={id:"redux",title:"Redux integration"},d=void 0,c={unversionedId:"guides/redux",id:"version-6.6/guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-6.6/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/6.6/guides/redux",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/docs/6.6/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/6.6/guides/class-components"}},u={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,a.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,a.kt)("p",null,"First make sure you have redux installed:"),(0,a.kt)(o.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,a.kt)("p",null,"Note: react-redux is ",(0,a.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,a.kt)("p",null,"Then you'll want to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," instead of\n",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/CacheProvider"},"<CacheProvider /",">")," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,a.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,a.kt)(l.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider\n    store={store}\n    selector={selector}\n    controller={controller}\n  >\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,a.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider/\\>")," to specify\nwhere in the state tree the rest-hooks information is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,a.kt)(s.Z,{value:"react-redux",mdxType:"TabItem"},(0,a.kt)("h4",{id:"indextsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector} controller={controller}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,a.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider/\\>")," to specify\nwhere in the state tree the rest-hooks information is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,a.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,a.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,a.kt)("p",null,"Simply wrap the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      ...applyManager([networkManager, subscriptionManager], controller),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}h.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);