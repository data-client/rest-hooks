/*! For license information please see 9e9a7dc2.0209f8d9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36544],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var k=g.prototype=new v;k.constructor=g,h(k,b.prototype),k.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,M={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o,a={},l=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,o)&&!N.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:l,ref:s,props:a,_owner:M.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,o,a,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return l=l(i=e),e=""===a?"."+E(i,0):a,w(l)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),j(l,t,o,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(i=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+E(s=e[c],c);i+=j(s,t,o,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=j(s=s.value,t,o,u=a+E(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],o=0;return j(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},_={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(86010),a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(67294),a=r(86010),l=r(72389),s=r(67392),i=r(7094),c=r(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:f,className:h}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[x,M]=(0,o.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&b.some((t=>t.value===e))&&M(e)}const S=e=>{const t=e.currentTarget,r=N.indexOf(t),n=b[r].value;n!==x&&(P(t),M(n),null!=f&&w(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:S,onClick:S},l,{className:(0,a.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,o.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(65488),o=r(85162),a=r(67294),l=r(75690);function s(e){let{pkgs:t,dev:r=!1}=e;return a.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(l.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(l.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var n=r(67294),o=r(72887);const a={React:n,...n,...o};t.Z=a},96925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(27378),r(3905)),a=r(96497),l=r(65488),s=r(85162);const i={id:"redux",title:"Redux integration"},c=void 0,u={unversionedId:"guides/redux",id:"guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/../docs/core/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/guides/redux",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/docs/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/guides/class-components"}},d={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,o.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,o.kt)("p",null,"First make sure you have redux installed:"),(0,o.kt)(a.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,o.kt)("p",null,"Note: react-redux is ",(0,o.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,o.kt)("p",null,"Then you'll want to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," instead of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/CacheProvider"},"<CacheProvider /",">")," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,o.kt)(l.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider\n    store={store}\n    selector={selector}\n    controller={controller}\n  >\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,o.kt)(s.Z,{value:"react-redux",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector} controller={controller}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,o.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,o.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,o.kt)("p",null,"Simply wrap the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      ...applyManager([networkManager, subscriptionManager], controller),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}f.isMDXComponent=!0}}]);