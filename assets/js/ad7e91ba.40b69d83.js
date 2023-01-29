/*! For license information please see ad7e91ba.40b69d83.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52061],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function k(){}function E(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var b=E.prototype=new k;b.constructor=E,y(b,h.prototype),b.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!T.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+C(c,0):i,v(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var p=i+C(s=e[l],l);c+=P(s,t,o,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(s=e.next()).done;)c+=P(s=s.value,t,o,p=i+C(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function j(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},L={transition:null}},27378:(e,t,n)=>{n(41535)},54410:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),o=(n(27378),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n  subgraph Controller.fetch\n    direction TB\n    key("Endpoint.key(...args)")---\x3edispatch("dispatch(FETCH)")\n  end\n  subgraph managers\n    NetworkManager--\x3eendpoint("endpoint(...args)")\n    endpoint--rejects--\x3eController.resolve\n    Controller.resolve("Controller.resolve(error)")--\x3edispatchR("dispatch(SET)")\n  end\n  managers--FETCH--\x3ereducer:FETCH\n  Controller.fetch--FETCH--\x3emanagers\n  subgraph reducer:FETCH\n    optimistic("Endpoint.?getOptimisticResponse()")--\x3eSET\n    subgraph SET\n      normalize(normalize)--\x3eupdate("Endpoint.update()")\n    end\n  end\n  subgraph reducer:reduceError\n    direction LR\n    filterOptimistic(filterOptimistic)--\x3eerrorPolicy("Endpoint.errorPolicy()")\n  end\n  managers--SET:error--\x3ereducer:reduceError\n  click key "/rest/api/Endpoint#key"\n  click optimistic "/rest/api/Endpoint#getoptimisticresponse"\n  click update "/rest/api/Endpoint#update"\n  click errorPolicy "/rest/api/Endpoint#errorpolicy"\n  click NetworkManager "/docs/api/NetworkManager"'}))}a.isMDXComponent=!0},45889:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),o=(n(27378),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n  subgraph Controller.fetch\n    direction TB\n    key("Endpoint.key(...args)")---\x3edispatch("dispatch(FETCH)")\n  end\n  subgraph managers\n    NetworkManager--\x3eendpoint("endpoint(...args)")\n    endpoint--resolves--\x3eController.resolve\n    Controller.resolve("Controller.resolve(response)")--\x3edispatchR("dispatch(SET)")\n  end\n  managers--FETCH--\x3ereducer:FETCH\n  Controller.fetch--FETCH--\x3emanagers\n  subgraph reducer:FETCH\n    optimistic("Endpoint.?getOptimisticResponse()")--\x3eSET\n    subgraph SET\n      normalize(normalize)--\x3eupdate("Endpoint.update()")\n    end\n  end\n  subgraph reducer:SET\n    direction LR\n    normalize2(normalize)--\x3eupdate2("Endpoint.update()")\n  end\n  managers--SET--\x3ereducer:SET\n  click key "/rest/api/Endpoint#key"\n  click NetworkManager "/docs/api/NetworkManager"\n  click optimistic "/rest/api/Endpoint#getoptimisticresponse"\n  click update "/rest/api/Endpoint#update"\n  click update2 "/rest/api/Endpoint#update"'}))}a.isMDXComponent=!0},22606:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),o=(n(27378),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart BT\n  subgraph Controller.getResponse\n    infer("Entity.infer()")---pk2\n    pk2("Entity.pk()")--\x3edenormalize\n    subgraph Entity.denormalize\n      direction TB\n      validate2("Entity.validate()")---fromJS("Entity.fromJS()")\n      fromJS---denormNest("denormalize(this.schema)")\n    end\n  end\n  subgraph reducer:SET\n    direction LR\n    subgraph Entity.normalize\n      direction TB\n      process("Entity.process()")--\x3epk("Entity.pk()")\n      pk---validate("Entity.validate()")\n      process--\x3evalidate\n      validate---normNest("normalize(this.schema)")\n    end\n    Entity.normalize--processedEntity--\x3eaddEntity\n    subgraph addEntity\n      expiresAt("Entity.expiresAt()")---mergewithstore("Entity.mergeWithStore()")\n      expiresAt---merge("Entity.merge()")\n      mergewithstore---\x3emerge("Entity.merge()")\n    end\n  end\n  click process "/rest/api/Entity#process"\n  click pk "/rest/api/Entity#pk"\n  click pk2 "/rest/api/Entity#pk"\n  click fromJS "/rest/api/Entity#fromJS"\n  click validate "/rest/api/Entity#validate"\n  click validate2 "/rest/api/Entity#validate"\n  click expiresAt "/rest/api/Entity#expiresat"\n  click useincoming "/rest/api/Entity#useincoming"\n  click mergewithstore "/rest/api/Entity#mergeWithStore"\n  click merge "/rest/api/Entity#merge"\n  click infer "/rest/api/Entity#infer"'}))}a.isMDXComponent=!0},74124:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),o=(n(27378),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart TB\n    URL--\x3eresponse\n    INIT--\x3eresponse\n    subgraph Prepare Fetch\n      subgraph URL\n        direction BT\n        urlPrefix--\x3eurl("url(...args)")\n        path--\x3eurl\n      end\n      subgraph INIT\n      direction BT\n        getHeaders("getHeaders()")--\x3ereqinit("getRequestInit(...args)")\n        method--\x3ereqinit\n        signal--\x3ereqinit\n      end\n    end\n    subgraph Perform Fetch\n    response("fetchResponse()")--\x3eparse("parseResponse()")\n    parse--\x3eprocess("process()")\n    end\n    click url "/rest/api/RestEndpoint#url"\n    click urlPrefix "/rest/api/RestEndpoint#urlPrefix"\n    click path "/rest/api/RestEndpoint#path"\n    click getHeaders "/rest/api/RestEndpoint#getHeaders"\n    click method "/rest/api/RestEndpoint#method"\n    click signal "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"\n    click reqinit "/rest/api/RestEndpoint#getRequestInit"\n    click response "/rest/api/RestEndpoint#fetchResponse"\n    click parse "/rest/api/RestEndpoint#parseResponse"\n    click process "/rest/api/RestEndpoint#process"'}))}a.isMDXComponent=!0},55726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),i=n(74124),a=n(45889),s=n(54410),c=n(22606);const l={title:"Lifecycle controlflow diagrams using Mermaid",authors:["ntucker"],tags:["lifecycle","control flow","diagram","mermaid","docusarus","documentation"]},p=void 0,u={permalink:"/blog/2022/11/07/Lifecycle-controlflow-diagrams-mermaid",source:"@site/blog/2022-11-07-Lifecycle-controlflow-diagrams-mermaid.md",title:"Lifecycle controlflow diagrams using Mermaid",description:"Mermaid is a cool way of creating diagrams in markdown.",date:"2022-11-07T00:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"lifecycle",permalink:"/blog/tags/lifecycle"},{label:"control flow",permalink:"/blog/tags/control-flow"},{label:"diagram",permalink:"/blog/tags/diagram"},{label:"mermaid",permalink:"/blog/tags/mermaid"},{label:"docusarus",permalink:"/blog/tags/docusarus"},{label:"documentation",permalink:"/blog/tags/documentation"}],readingTime:.52,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Lifecycle controlflow diagrams using Mermaid",authors:["ntucker"],tags:["lifecycle","control flow","diagram","mermaid","docusarus","documentation"]},prevItem:{title:"Query, getState() and partial hydration SSR improvements",permalink:"/blog/2022/11/09/Query-getState-SSR-partial-hydration"},nextItem:{title:"Rest v6 - TypeScript HTTP endpoints from url path templates",permalink:"/blog/2022/10/23/Announcing-Rest-6"}},d={authorsImageUrls:[void 0]},m=[{value:"RestEndpoint",id:"restendpoint",level:3},{value:"Endpoint Success",id:"endpoint-success",level:3},{value:"Endpoint Error",id:"endpoint-error",level:3},{value:"Entity",id:"entity",level:3}],f={toc:m};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid/"},"Mermaid")," is a cool way of creating diagrams in markdown.\nIt was recently integrated into Github Markdown and ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/blog/releases/2.2#mermaid-diagrams"},"added to this site's framework"),"\nas well."),(0,o.kt)("p",null,"A lot of concepts are much easy to convey using visualizations so we quickly started using this\nin the docs. To start off we have added control flow diagrams to help with hooking into the lifecycles\nof Rest Hooks for customizations as well as understanding how it operates."),(0,o.kt)("h3",{id:"restendpoint"},(0,o.kt)("a",{parentName:"h3",href:"/rest/api/RestEndpoint#fetch-lifecycle"},"RestEndpoint")),(0,o.kt)(i.ZP,{mdxType:"RestEndpointLifecycle"}),(0,o.kt)("h3",{id:"endpoint-success"},(0,o.kt)("a",{parentName:"h3",href:"/rest/api/Endpoint#success"},"Endpoint Success")),(0,o.kt)(a.ZP,{mdxType:"EndpointLifecycle"}),(0,o.kt)("h3",{id:"endpoint-error"},(0,o.kt)("a",{parentName:"h3",href:"/rest/api/Endpoint#error"},"Endpoint Error")),(0,o.kt)(s.ZP,{mdxType:"EndpointErrorLifecycle"}),(0,o.kt)("h3",{id:"entity"},(0,o.kt)("a",{parentName:"h3",href:"/rest/api/Entity#data-lifecycle"},"Entity")),(0,o.kt)(c.ZP,{mdxType:"EntityLifeCycle"}))}y.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);