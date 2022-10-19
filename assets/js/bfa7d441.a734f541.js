"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34265],{15790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),a=n(107),i=n(16187);const o={title:"Transforming data on fetch"},l=void 0,c={unversionedId:"guides/network-transform",id:"guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/../docs/rest/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/rest/guides/network-transform",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/network-transform.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"Transforming data on fetch"},sidebar:"docs",previous:{title:"Optimistic Updates",permalink:"/rest/guides/optimistic-updates"},next:{title:"Mocking unfinished endpoints",permalink:"/rest/guides/mocking-unfinished"}},u={},d=[{value:"Snakes to camels",id:"snakes-to-camels",level:2},{value:"Deserializing fields",id:"deserializing-fields",level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",level:2},{value:"Using HTTP Headers",id:"using-http-headers",level:2},{value:"Name calling",id:"name-calling",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All network requests flow through the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Note: If you retain control over the API design, generally it's preferred to\nupdate the data sent over the network. Keeping the client as ",(0,s.kt)("inlineCode",{parentName:"p"},"thin")," as possible\nis helpful to both performance and complexity."),(0,s.kt)("p",{parentName:"admonition"},"That said, in many cases you want to consume APIs you don't have control over -\nbe they public APIs, or due to internal organizational structure.")),(0,s.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,s.kt)("p",null,"Commonly APIs are designed with keys using ",(0,s.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,s.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CamelResource.ts"',title:'"CamelResource.ts"'},"import { camelCase, snakeCase } from 'lodash';\nimport { RestEndpoint, RestGenerics  } from '@rest-hooks/rest';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: Record<string, any> = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\nclass CamelEndpoint<O Extends RestGenerics = any> extends RestEndpoint<O> {\n  getRequestInit(body) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body) {\n      return super.getRequestInit(deeplyApplyKeyTransform(body, snakeCase));\n    }\n    return super.getRequestInit(body);\n  }\n  process(value) {\n    return deeplyApplyKeyTransform(value, camelCase);\n  }\n}\n")),(0,s.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,s.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,s.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,s.kt)("p",null,"In this case, simply use the ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"static schema")," with ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber")),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/price/:exchangePair"}),args:[{exchangePair:"btc-usd"}],response:{exchangePair:"btc-usd",price:"32982389239823983298329832.238923982389328932893298",updatedAt:(new Date).toISOString()},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Price.ts"',title:'"api/Price.ts"'},"class ExchangePrice extends Entity {\n  readonly exchangePair = '';\n  readonly updatedAt = new Date(0);\n  readonly price = new BigNumber(0);\n  pk() {\n    return this.exchangePair;\n  }\n\n  static schema = {\n    updatedAt: Date,\n    price: BigNumber,\n  };\n}\nconst getPrice = new RestEndpoint({\n  path: '/price/:exchangePair',\n  schema: ExchangePrice,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PricePage.tsx"',title:'"PricePage.tsx"'},"function PricePage() {\n  const currentPrice = useSuspense(getPrice, { exchangePair: 'btc-usd' });\n  return (\n    <div>\n      {currentPrice.price.toPrecision(2)} as of{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          currentPrice.updatedAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PricePage />);\n"))),(0,s.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,s.kt)("inlineCode",{parentName:"h2"},"Id")),(0,s.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,s.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,s.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,s.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GET https://mystreamsite.tv/ntucker/"',title:'"GET','https://mystreamsite.tv/ntucker/"':!0},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Stream.ts"',title:'"api/Stream.ts"'},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nclass Stream extends Entity {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n}\n\nconst getStream = new RestEndpoint({\n  urlPrefix: 'https://mystreamsite.tv',\n  path: '/:username',\n  schema: Stream,\n  process(value, { username }) {\n    value.username = username;\n    return value;\n  },\n});\n")),(0,s.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,s.kt)("p",null,"HTTP ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#fetchResponse"},"RestEndpoint.fetchResponse()"),"\ncan be used to construct ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"."),(0,s.kt)("p",null,"Sometimes this is used for cursor based ",(0,s.kt)("a",{parentName:"p",href:"/rest/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestGenerics } from '@rest-hooks/rest';\n\nclass GithubEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n}\n")),(0,s.kt)("h2",{id:"name-calling"},"Name calling"),(0,s.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"class RenamedEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  getRequestInit(body) {\n    if (body && 'carrotsUsed' in body) {\n      const newBody = { ...body, carrotsUSedIsThisNameTooLong: carrotsUsed };\n      delete newBody.carrotsUsed;\n      return super.getRequestInit(newBody);\n    }\n    return super.getRequestInit(body);\n  }\n  process(value) {\n    if ('carrotsUsedIsThisNameTooLong' in value) {\n      // ok to mutate jsonResponse since we control it\n      value.carrotsUsed = value.carrotsUsedIsThisNameTooLong;\n      delete value.carrotsUsedIsThisNameTooLong;\n    }\n    return value;\n  }\n}\n")))}p.isMDXComponent=!0},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),s=n(87462),a=n(49544),i=n(86010),o=n(95999),l=n(52263),c=n(66412),u=n(84195),d=n(45440),m=n(75690);function p(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var h=(0,r.memo)(p);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(m.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g,y=n(60975),k=n(51523),b=n(1556);function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},a)})))}function E(e){let{children:t}=e;return r.createElement(y.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(v,null))}function w(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),a=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(E,null,t):null)}function x(e){let{children:t,transformCode:n,groupId:o,defaultOpen:u,row:m,hidden:p,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,k=(0,c.p)();return r.createElement("div",{className:(0,i.Z)(d.Z.playgroundContainer,{[d.Z.row]:m,[d.Z.hidden]:p})},r.createElement(a.nu,(0,s.Z)({theme:k},g),r.createElement(Z,{reverse:"top"===y,row:m,fixtures:h,includeEndpoints:f,groupId:o,defaultOpen:u},t)))}function Z(e){let{reverse:t,children:n,row:s,fixtures:i,includeEndpoints:o,groupId:l,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,m]=(0,r.useReducer)(C,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),p=(0,r.useMemo)((()=>u.map(((e,t)=>e=>m({i:t,code:e})))),[u.length]),[h,f]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),g=d.join("\n");return r.createElement(S,{reverse:t},r.createElement("div",null,r.createElement(w,{fixtures:!s&&i}),s&&u.length>1?r.createElement(A,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:h,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(I,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:h[t],title:n}):null,h[t]?null:r.createElement(R,{key:t,onChange:p[t],code:d[t]}))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(k.Z,{key:"preview",includeEndpoints:o,groupId:l,defaultOpen:c,row:s,fixtures:i}))},r.createElement(P,{code:g,includeEndpoints:o,groupId:l,defaultOpen:c,row:s,fixtures:i})))}w.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},x.defaultProps={row:!1,hidden:!1};const N="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(g=navigator)?void 0:g.userAgent),P=(0,r.lazy)((()=>N?Promise.resolve({default:e=>null}):Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function S(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function C(e,t){const n=[...e];return n[t.i]=t.code,n}S.defaultProps={reverse:!1};const O=(0,r.memo)(a.uz);function R(e){let{onChange:t,code:n}=e;return r.createElement(O,{className:d.Z.playgroundEditor,onChange:t,code:n})}function I(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(y.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function A(e){let{titles:t,closedList:n,onClick:s}=e;const{values:a}=(0,r.useContext)(u.Z),o=a.length>0;return r.createElement(y.Z,{className:(0,i.Z)({[d.Z.small]:o,[d.Z.subtabs]:o},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const T=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:i=!1,fixtures:o}=e;return r.createElement(x,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:i,hidden:s,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};T.defaultProps={defaultOpen:"n",fixtures:[]};var _=(0,r.memo)(T)},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),a=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,i?a.Z.clickable:null),onClick:i},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),s=n(95999),a=n(27093),i=n(26127),o=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(7094),m=n(12466),p=n(45440),h=n(32041),f=n(97723),g=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:k,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function k(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,a=s?p.Z.right:p.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:p.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(p.Z.arrow,a,p.Z.vertical)},"\u25b6")),s?r.createElement(Z,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(x);var N=n(1556);function P(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,k]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,m.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&k(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),k((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[b,t,y,g]),E=(0,r.useMemo)((()=>[new l.Z,new a.Z(i.Z)]),[]),x=!("n"===y||!s);return r.createElement(o.nq,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(p.Z.playgroundPreview,{[p.Z.hidden]:x})},r.createElement(N.Z,{fallback:r.createElement(C,null)},r.createElement(O,null))),r.createElement(w,{selectedValue:y,toggle:v})))}var S=(0,r.memo)(P);function C(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var R=n(60975);function I(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(R.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:p.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}var A=(0,r.memo)(I)},56922:(e,t,n)=>{var r=n(67294),s=n(72887);const a={React:r,...r,...s};t.Z=a},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},16187:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let i=!1;try{Function()}catch(x){i=!0}class o extends Function{constructor(e,t){let n;return i?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var l=n(92586);const c={};const u={};const d=Object.prototype,m=Object.getPrototypeOf;class p extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const i=`${a}`,[o,l,c]=n(t.get(i),e[i]);return l||(r=!1),c&&(s=!0),t.has(i)?t.set(i,o):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[i,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=i),l&&(a=!0),o||(s=!1)})),[r,s,a]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const i=this.inferSchema(e,t,n);if(!i)return e;const o=r(e,t,n,i,s,a);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const i=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return i.map(((e,i)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,i)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,a,i);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function k(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return{[e.key(...t(...a))]:e=>{const t=b(e,n),s=new Set(t),a=b(r,n).filter((e=>!s.has(e))),i=[...t,...a];return v(e,n,i)}}}}const b=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},v=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var E=(0,s.Z)("hasBody");class w extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&m(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new p(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:k(this,e)})}}}}]);