(self.webpackChunk=self.webpackChunk||[]).push([[53132],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(67294),o=n(87462),a=n(49544),s=n(86010),i=n(11614),l=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var h=n(62974),k=n(80086),y=n(45045),b=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const o=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o))return o.endsWith(".")||o.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const o=n.value,[a,s,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.javascriptDefaults.setEagerModelSync(!0),o}))}}const x=(0,r.memo)(a.uz);function w(e){let{onChange:t,code:n,path:o}=e;return r.createElement(x,{onChange:t,code:n})}const N=(0,r.memo)(b.ZP);const R={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"12.573px",lineHeight:"18.792px"};var T=n(3495).Z?function(e){let{onChange:t,code:n,path:o}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx"),function(e,t){const n=function(e){const t=(0,b.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${o}`).then((e=>{console.log(e.outputFiles[0].text),t(e.outputFiles[0].text)}))}),[t,o]);const[a,s]=(0,r.useState)("100%"),i=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const o=19*e.getModel().getLineCount()+10;t.style.height=o+"px",s(o),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const a=19*n.childElementCount+10;r=n.childElementCount,t.style.height=a+"px",s(o),e.layout()}),0)}))}),[]);return r.createElement(N,{path:o,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:R,theme:"prism",onMount:i,height:a,loading:r.createElement(w,{onChange:()=>{},code:n,path:o})})}:w;function C(){return r.createElement(r.Fragment,null,S.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),O.map(((e,t)=>r.createElement("link",{key:t+S.length,rel:"prefetch",href:e,as:"script"}))))}var Z=(0,r.memo)(C);const S=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"],O=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var P;function A(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function I(e){let{children:t}=e;return r.createElement(h.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(A,null))}function D(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:d.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,a?r.createElement(I,null,t):null)}function j(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:p,hidden:m,fixtures:g,includeEndpoints:f,...h}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,l.Z)().siteConfig.themeConfig,y=(0,c.p)();return r.createElement("div",{className:(0,s.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,o.Z)({theme:y},h),r.createElement(M,{reverse:"top"===k,row:p,fixtures:g,includeEndpoints:f,groupId:i,defaultOpen:u},t)),r.createElement(Z,null))}function M(e){let{reverse:t,children:n,row:o,fixtures:i,includeEndpoints:l,groupId:c,defaultOpen:u}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:o}}))),[n]),[g,f]=(0,r.useReducer)(F,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>m.map(((e,t)=>e=>{f({i:t,code:e})}))),[m.length]),[b,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=g.join("\n");return r.createElement(H,{reverse:t},r.createElement("div",null,r.createElement(D,{fixtures:!o&&i}),o&&m.length>1?r.createElement(q,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:b,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:a}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(B,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:b[t],title:n}):null,r.createElement("div",{key:t,className:(0,s.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:b[t]})},r.createElement(T,{key:t,onChange:h[t],code:g[t],path:"/"+p+"/"+(a||n||"default.tsx")})))}))),r.createElement(y.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(k.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:u,row:o,fixtures:i}))},r.createElement(_,{code:E,includeEndpoints:l,groupId:c,defaultOpen:u,row:o,fixtures:i})))}D.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},j.defaultProps={row:!1,hidden:!1};const L="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(P=navigator)?void 0:P.userAgent),_=(0,r.lazy)((()=>L?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,41380))));function H(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function F(e,t){const n=[...e];return n[t.i]=t.code,n}function B(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(h.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,s.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),o)}function q(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(h.Z,{className:(0,s.Z)({[d.Z.small]:i,[d.Z.subtabs]:i},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}H.defaultProps={reverse:!1};const U=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:s=!1,fixtures:i}=e;return r.createElement(j,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:s,hidden:o,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};U.defaultProps={defaultOpen:"n",fixtures:[]};var z=(0,r.memo)(U)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n(86010),a=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,s?a.Z.clickable:null),onClick:s},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(67294),o=n(11614),a=n(27093),s=n(26127),i=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),g=n(32041),f=n(97723),h=n(70524);function k(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(f.L,{shouldExpandNode:y,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?r.createElement(N,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(k,{value:t})}const N=(0,r.memo)(w);var R=n(45045);function T(e){let{groupId:t,defaultOpen:n,row:o,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,d.U)(),[k,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==k&&y(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===k?"n":"y")}),[b,t,k,h]),E=(0,r.useMemo)((()=>[new l.Z,new a.Z(s.Z)]),[]),w=!("n"===k||!o);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(R.Z,{fallback:r.createElement(Z,null)},r.createElement(S,null))),r.createElement(x,{selectedValue:k,toggle:v})))}var C=(0,r.memo)(T);function Z(){return r.createElement("div",null,"Loading...")}const S=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var O=n(62974);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(O.Z,null,r.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:a,fixtures:s})))}var A=(0,r.memo)(P)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),o=n(72887);const a={React:r,...r,...o};t.Z=a},36146:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(90008);const s={title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},i=void 0,l={permalink:"/blog/2022/10/23/Announcing-Rest-6",source:"@site/blog/2022-10-23-Announcing-Rest-6.md",title:"Rest v6 - TypeScript HTTP endpoints from url path templates",description:"Today we're releasing @rest-hooks/rest version 6. While this is a pretty",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"rest",permalink:"/blog/tags/rest"},{label:"http",permalink:"/blog/tags/http"},{label:"path-to-regex",permalink:"/blog/tags/path-to-regex"},{label:"resource",permalink:"/blog/tags/resource"},{label:"endpoint",permalink:"/blog/tags/endpoint"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:4.63,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},nextItem:{title:"Adding validation helpers for required field checks",permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields"}},c={authorsImageUrls:[void 0]},u=[{value:"RestEndpoint",id:"restendpoint",level:2},{value:"createResource",id:"createresource",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Problems",id:"problems",level:3},{value:"Custom Networking",id:"custom-networking",level:2},{value:"Base overrides for lifecycles",id:"base-overrides-for-lifecycles",level:3},{value:"Default values",id:"default-values",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Hook context for fetch construction",id:"hook-context-for-fetch-construction",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we're releasing ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"@rest-hooks/rest")," version 6. While this is a pretty\nradical departure from previous versions, there is no need to upgrade if previous versions are\nworking as they will continue to work with the current 6.4 release of Rest Hooks as well as many\nfuture versions."),(0,o.kt)("p",null,"First, we have completely decoupled the ",(0,o.kt)("em",{parentName:"p"},"networking lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"\nfrom the ",(0,o.kt)("em",{parentName:"p"},"data lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema"),". Collections of Endpoints that operate on the same\ndata can be consgtructed by calling ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"."),(0,o.kt)("h2",{id:"restendpoint"},"RestEndpoint"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/getTodo.ts"',title:'"api/getTodo.ts"'},"import { RestEndpoint } from '@rest-hooks/rest';\n\nexport const getTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { getTodo } from './api/getTodo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(getTodo, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," optimizes configuration based around HTTP\nnetworking. Urls are constructed based on simple named parameters, which are ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#typing"},"enforced with\nstrict TypeScript automatically"),"."),(0,o.kt)("h2",{id:"createresource"},"createResource"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = 0;\n  title = '';\n  completed = false;\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { TodoResource } from './api/Todo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(TodoResource.get, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource")," creates a simple collection of ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),".\nThese can be easily overidden, removed as appropriate - or not used altogether. ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"\nis intended as a quick start point and as a guide to best practices for API interface ergonomics. It is expected\nto extend or replace createResource based on the common patterns for your own API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { content: 'ntucker' });\ncontroller.fetch(TodoResource.update, { id: '5' }, { content: 'ntucker' });\ncontroller.fetch(\n  TodoResource.partialUpdate,\n  { id: '5' },\n  { content: 'ntucker' },\n);\ncontroller.fetch(TodoResource.delete, { id: '5' });\n")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Previously, ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource"},"Resource")," ",(0,o.kt)("em",{parentName:"p"},"was")," an ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/Entity"},"Entity"),". Endpoints are defined as ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#detail"},"static members"),"."),(0,o.kt)("p",null,"The motivation is for brevity: This allows one import to both define the expected type as well as access the endpoints to send as hook 'subjects'."),(0,o.kt)("h3",{id:"problems"},"Problems"),(0,o.kt)("p",null,"However, this lead to some problems. Originally it was thought many of these would be eliminated by improvements\nin related technologies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Class static side is not well supported by TypeScript. This leads to the somewhat confusing but also limiting ",(0,o.kt)("a",{parentName:"li",href:"https://resthooks.io/rest/5.2/guides/rest-types"},"generic workaround"),"."),(0,o.kt)("li",{parentName:"ol"},"Inheritance does not work well for providing out-of-the-box endpoint definitions. Overrides are better",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's a struggle between general types that allow overrides or precise types that help developers."),(0,o.kt)("li",{parentName:"ul"},"Hacks like \u2018SchemaDetail\u2019 are an attempt around this but are confusing, expensive for typescript to compute and likely break in certain configurations."))),(0,o.kt)("li",{parentName:"ol"},"Union Resources are awkward to define as their expected schema ends up not being the Entity.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In general, custom schemas are often shared by multiple endpoints, making it desirable to not require them to be just an Entity"))),(0,o.kt)("li",{parentName:"ol"},"Endpoints themselves don't maintain referential equality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This results in hacks in our hooks that violate expectations (ignoring referential changes to endpoints). There are legit reasons one might want to create a endpoint that changes and have that trigger fetches.")))),(0,o.kt)("p",null,"Probably most of all is that sharing data lifecycles with networking lifecycles made them quite a bit confusing in\nmany ways."),(0,o.kt)("h2",{id:"custom-networking"},"Custom Networking"),(0,o.kt)("p",null,"Customizations can be done easily with both ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#inheritance"},"RestEndpoint inheritance"),"\nas well as ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#extend"},"RestEndpoint.extend()"),". Explore the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#fetch-lifecycle"},"fetch lifecycle"),"\nto understand how these customizations affect fetch."),(0,o.kt)("h3",{id:"base-overrides-for-lifecycles"},"Base overrides for lifecycles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class GithubEndpoint<\n  O extends RestGenerics = any,\n> extends RestEndpoint<O> {\n  getRequestInit(body: any): RequestInit {\n    if (body) {\n      return super.getRequestInit(deeplyApplyKeyTransform(body, snakeCase));\n    }\n    return super.getRequestInit();\n  }\n\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n\n  process(value: any, ...args: any) {\n    return deeplyApplyKeyTransform(value, camelCase);\n  }\n}\n")),(0,o.kt)("h3",{id:"default-values"},"Default values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class IssueEndpoint<O extends RestGenerics=any> extends GithubEndpoint<O> {\n  pollFrequency = 60000;\n}\n")),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/guides/pagination#infinite-scrolling"},"Infinite scrolling pagination")," can be achieved by creating a new pagination endpoint\nfor from any list endpoints ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#paginated"},"RestEndpoint.paginated()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MyResource.getNextPage = MyResource.getList.paginated(\n  ({\n    cursor,\n    ...rest\n  }: {\n    cursor: string | number;\n    group: string | number;\n  }) => [rest],\n);\n")),(0,o.kt)("h2",{id:"hook-context-for-fetch-construction"},"Hook context for fetch construction"),(0,o.kt)("p",null,"In cases where React context is needed to perform networking requests, we can construct hook\nendpoint generators with an augmentation function ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/hookifyResource"},"hookifyResource")),(0,o.kt)("p",null,"This utilizes the new key+string rewriting magic of TypeScript 4.2+. This means it won't be\nas strongly typed when using previous versions of TypeScript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ContextAuthdArticleResourceBase = createResource({\n  path: 'http\\\\://test.com/article/:id',\n  schema: Article,\n});\nexport const ContextAuthdArticleResource = hookifyResource(\n  {\n    ...ContextAuthdArticleResourceBase,\n    getListWithUser: ContextAuthdArticleResourceBase.getList.extend({\n      url: () =>\n        (ContextAuthdArticleResourceBase.getList.url as any)({\n          includeUser: true,\n        }),\n    }),\n  },\n  function useInit() {\n    const accessToken = useContext(AuthContext);\n    return {\n      headers: {\n        'Access-Token': accessToken,\n      },\n    };\n  },\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const article = useSuspense(ContextAuthdArticleResource.useGet(), { id });\nconst updateArticle = ContextAuthdArticleResource.useUpdate()\nconst onSubmit = () => controller.fetch(updateArticle, { id }, body);\n\nreturn <Form onSubmit={onSubmit} initialValues={article} />\n")),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Explore common patterns with this implementation using the GitHub API."),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/github-app?embed=1&file=src%2Fresources%2FIssue.tsx&hideNavigation=1&hideDevTools=1&view=editor",width:"738",height:"700",style:{width:"100%"}}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"full documentation for @rest-hooks/rest@6")," for more detailed guides that cover all the functionality."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/2187"},"The PR for RestEndpoint, createResource, and hookifyResource")))}p.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,23)))}o.keys=()=>Object.keys(r),o.id=73795,e.exports=o}}]);