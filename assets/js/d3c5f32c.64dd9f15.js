"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),i=n(87462),a=n(49544),o=n(86010),s=n(95999),l=n(52263),c=n(66412),u=n(84195),d=n(45440),p=n(75690);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var h=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g,y=n(60975),b=n(51523),k=n(1556);function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function w(e){let{children:t}=e;return r.createElement(y.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(u.Z),a=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(w,null,t):null)}function x(e){let{children:t,transformCode:n,groupId:s,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,i.Z)({theme:b},g),r.createElement(C,{reverse:"top"===y,row:p,fixtures:h,includeEndpoints:f,groupId:s,defaultOpen:u},t)))}function C(e){let{reverse:t,children:n,row:i,fixtures:o,includeEndpoints:s,groupId:l,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,p]=(0,r.useReducer)(T,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>u.map(((e,t)=>e=>p({i:t,code:e})))),[u.length]),[h,f]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),g=d.join("\n");return r.createElement(O,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!i&&o}),i&&u.length>1?r.createElement(S,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:h,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!i&&n?r.createElement(P,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:h[t],title:n}):null,h[t]?null:r.createElement(A,{key:t,onChange:m[t],code:d[t]}))}))),r.createElement(k.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(b.Z,{key:"preview",includeEndpoints:s,groupId:l,defaultOpen:c,row:i,fixtures:o}))},r.createElement(N,{code:g,includeEndpoints:s,groupId:l,defaultOpen:c,row:i,fixtures:o})))}E.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},x.defaultProps={row:!1,hidden:!1};const Z="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(g=navigator)?void 0:g.userAgent),N=(0,r.lazy)((()=>Z?Promise.resolve({default:e=>null}):Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function O(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function T(e,t){const n=[...e];return n[t.i]=t.code,n}O.defaultProps={reverse:!1};const R=(0,r.memo)(a.uz);function A(e){let{onChange:t,code:n}=e;return r.createElement(R,{className:d.Z.playgroundEditor,onChange:t,code:n})}function P(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(y.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),i)}function S(e){let{titles:t,closedList:n,onClick:i}=e;const{values:a}=(0,r.useContext)(u.Z),s=a.length>0;return r.createElement(y.Z,{className:(0,o.Z)({[d.Z.small]:s,[d.Z.subtabs]:s},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const I=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a,row:o=!1,fixtures:s}=e;return r.createElement(x,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:i,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};I.defaultProps={defaultOpen:"n",fixtures:[]};var _=(0,r.memo)(I)},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),i=n(67294);function a(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,i.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(67294),i=n(95999),a=n(27093),o=n(26127),s=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(7094),p=n(12466),m=n(45440),h=n(32041),f=n(97723),g=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function w(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,a=i?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),i?r.createElement(C,null):null)}var E=(0,r.memo)(w);function x(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(x);var Z=n(1556);function N(e){let{groupId:t,defaultOpen:n,row:i,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),w=(0,r.useMemo)((()=>[new l.Z,new a.Z(o.Z)]),[]),x=!("n"===y||!i);return r.createElement(s.nq,{managers:w},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(Z.Z,{fallback:r.createElement(T,null)},r.createElement(R,null))),r.createElement(E,{selectedValue:y,toggle:v})))}var O=(0,r.memo)(N);function T(){return r.createElement("div",null,"Loading...")}const R=(0,r.lazy)((()=>Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var A=n(60975);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(A.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(O,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var S=(0,r.memo)(P)},56922:(e,t,n)=>{var r=n(67294),i=n(72887);const a={React:r,...r,...i};t.Z=a},66109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),a=n(107);const o={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"version-6.3/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/versioned_docs/version-6.3/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/6.3/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/6.3/guides/immediate-updates"},next:{title:"Aborting Fetch",permalink:"/docs/6.3/guides/abort"}},c={},u=[{value:"Partial updates",id:"partial-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets",level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",level:3},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets-1",level:3},{value:"CreateArticle.tsx",id:"createarticletsx",level:3},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, SchemaDetail, AbstractInstanceType } from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      getOptimisticResponse: (snap, params, body) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <button\n      onClick={() =>\n        fetch(ArticleResource.partialUpdate(), { id }, { published: true })\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, AbstractInstanceType } from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    const list = this.list();\n    return super.create().extend({\n      getOptimisticResponse: (snap, params, body) => body,\n      update: (newResourcePk: string) => ({\n        [list.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      }),\n    });\n  }\n}\n\n")),(0,i.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      fetch(ArticleResource.create(), { id: uuid(), ...data }),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      getOptimisticResponse: (snap, params, body) => params,\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,i.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,i.kt)("p",null,"Try removing ",(0,i.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,i.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,i.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,i.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,i.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.3/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      // server already has this optimistic computation then do nothing\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}p.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}}}]);