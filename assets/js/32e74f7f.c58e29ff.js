(self.webpackChunk=self.webpackChunk||[]).push([[53132],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(67294),o=n(87462),a=n(49544),s=n(86010),i=n(11614),l=n(6832),c=n(99401),u=n(69762),p=n(45440),d=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:p.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:p.Z.fixtureItem},r.createElement("div",{className:p.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(h,{fixture:e})))))}var g=(0,r.memo)(m);function h(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(d.Z,{language:"json",className:p.Z.fixtureJson},JSON.stringify(t.response))}var f=n(62974),y=n(80086),k=n(45045),b=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const o=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{var n;const r=(null==(n=/\/\d+\//g.exec(t))?void 0:n[0])??"",o=t.substring(r.length-1);return{label:o,insertText:o.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const o=n.value,[a,s,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const x=(0,r.memo)(b.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const R=(0,r.memo)(a.uz);var N=n(3495).Z?function(e){let{onChange:t,code:n,path:o,autoFocus:s=!1,...i}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx"),function(e,t){const n=function(e){const t=(0,b.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${o}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,o]);const[l,c]=(0,r.useState)("100%"),u=(0,r.useCallback)((e=>{s&&e.focus();const t=Object.keys(i).map((e=>{var t;return null==(t=/\{(\d+)\}/.exec(e))?void 0:t[1]})).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let o=0;const a=19*e.getModel().getLineCount()+10;n.style.height=a+"px",c(a),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;o=r.childElementCount,n.style.height=t+"px",c(a),e.layout()}),0)}))}),[]);return r.createElement(x,{path:o,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:w,theme:"prism",onMount:u,height:l,loading:r.createElement(a.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(R,{onChange:t,code:n})};function T(){return r.createElement(r.Fragment,null,Z.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),S.map(((e,t)=>r.createElement("link",{key:t+Z.length,rel:"prefetch",href:e,as:"script"}))))}var C=(0,r.memo)(T);const Z=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"],S=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var O;function I(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,s.Z)(p.Z.tab,{[p.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function A(e){let{children:t}=e;return r.createElement(f.Z,{className:p.Z.tabControls},r.createElement("div",{className:p.Z.title},t),r.createElement(I,null))}function P(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:p.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,a?r.createElement(A,null,t):null)}function M(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:d,hidden:m,fixtures:g,includeEndpoints:h,...f}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,k=(0,c.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,s.Z)(p.Z.playgroundContainer,{[p.Z.row]:d,[p.Z.hidden]:m})},r.createElement(a.nu,(0,o.Z)({theme:k},f),r.createElement(D,{reverse:"top"===y,row:d,fixtures:g,includeEndpoints:h,groupId:i,defaultOpen:u},t))),r.createElement(C,null))}function D(e){let{reverse:t,children:n,row:i,fixtures:l,includeEndpoints:c,groupId:u,defaultOpen:d}=e;const m=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:o,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:o,...a}}))),[n]),[h,f]=(0,r.useReducer)(F,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),b=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{f({i:t,code:e})}))),[g.length]),[v,E]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),x=h.join("\n");return r.createElement(_,{reverse:t},r.createElement("div",null,r.createElement(P,{fixtures:!i&&l}),i&&g.length>1?r.createElement(B,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>E((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:a,code:l,collapsed:c,...u}=e;return r.createElement(r.Fragment,{key:t},!i&&n?r.createElement(H,{onClick:()=>E((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,s.Z)(p.Z.playgroundEditor,{[p.Z.hidden]:v[t]})},r.createElement(N,(0,o.Z)({key:t,onChange:b[t],code:h[t],path:"/"+m+"/"+(a||n||"default.tsx")},u))))}))),r.createElement(k.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:c,groupId:u,defaultOpen:d,row:i,fixtures:l}))},r.createElement(j,{code:x,includeEndpoints:c,groupId:u,defaultOpen:d,row:i,fixtures:l})))}P.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},M.defaultProps={row:!1,hidden:!1};const L="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(O=navigator)?void 0:O.userAgent),j=(0,r.lazy)((()=>L?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(64359),n.e(26750)]).then(n.bind(n,41380))));function _(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function F(e,t){const n=[...e];return n[t.i]=t.code,n}function H(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(f.Z,{className:p.Z.small,onClick:t},r.createElement("span",{className:(0,s.Z)(p.Z.arrow,n?p.Z.right:p.Z.down)},"\u25b6"),o)}function B(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(f.Z,{className:(0,s.Z)({[p.Z.small]:i,[p.Z.subtabs]:i},p.Z.noupper,p.Z.tabControls)},r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,s.Z)(p.Z.tab,{[p.Z.selected]:!n[t]})},e)))))}_.defaultProps={reverse:!1};const q=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:s=!1,fixtures:i}=e;return r.createElement(M,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:s,hidden:o,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};q.defaultProps={defaultOpen:"n",fixtures:[]};var U=(0,r.memo)(q)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n(86010),a=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,s?a.Z.clickable:null),onClick:s},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(67294),o=n(11614),a=n(27093),s=n(26127),i=n(82038),l=n(83611),c=n(39714),u=n(86010),p=n(76602),d=n(63735),m=n(45440),g=n(32041),h=n(97723),f=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(h.L,{shouldExpandNode:k,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function k(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?r.createElement(R,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const R=(0,r.memo)(w);var N=n(45045);function T(e){let{groupId:t,defaultOpen:n,row:o,fixtures:g}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,p.U)(),[y,k]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,d.o5)();if(null!=t){const e=h[t];null!=e&&e!==y&&k(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),k((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[b,t,y,f]),E=(0,r.useMemo)((()=>[new l.Z,new a.Z(s.Z)]),[]),w=!("n"===y||!o);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(N.Z,{fallback:r.createElement(Z,null)},r.createElement(S,null))),r.createElement(x,{selectedValue:y,toggle:v})))}var C=(0,r.memo)(T);function Z(){return r.createElement("div",null,"Loading...")}const S=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(64359),n.e(26750)]).then(n.bind(n,15929))));var O=n(62974);function I(e){let{groupId:t,defaultOpen:n,row:a,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(O.Z,null,r.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:a,fixtures:s})))}var A=(0,r.memo)(I)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),o=n(38970);const a={React:r,...r,...o};t.Z=a},36146:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(90008);const s={title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},i=void 0,l={permalink:"/blog/2022/10/23/Announcing-Rest-6",source:"@site/blog/2022-10-23-Announcing-Rest-6.md",title:"Rest v6 - TypeScript HTTP endpoints from url path templates",description:"Today we're releasing @rest-hooks/rest version 6. While this is a pretty",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"rest",permalink:"/blog/tags/rest"},{label:"http",permalink:"/blog/tags/http"},{label:"path-to-regex",permalink:"/blog/tags/path-to-regex"},{label:"resource",permalink:"/blog/tags/resource"},{label:"endpoint",permalink:"/blog/tags/endpoint"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.445,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},prevItem:{title:"Lifecycle controlflow diagrams using Mermaid",permalink:"/blog/2022/11/07/Lifecycle-controlflow-diagrams-mermaid"},nextItem:{title:"Adding validation helpers for required field checks",permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields"}},c={authorsImageUrls:[void 0]},u=[{value:"RestEndpoint",id:"restendpoint",level:2},{value:"createResource",id:"createresource",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Problems",id:"problems",level:3},{value:"Custom Networking",id:"custom-networking",level:2},{value:"Base overrides for lifecycles",id:"base-overrides-for-lifecycles",level:3},{value:"Default values",id:"default-values",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Hook context for fetch construction",id:"hook-context-for-fetch-construction",level:2},{value:"Inheritance patterns for code sharing",id:"inheritance-patterns-for-code-sharing",level:2},{value:"Demo",id:"demo",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we're releasing ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"@rest-hooks/rest")," version 6. While this is a pretty\nradical departure from previous versions, there is no need to upgrade if previous versions are\nworking as they will continue to work with the current 6.4 release of Rest Hooks as well as many\nfuture versions."),(0,o.kt)("p",null,"First, we have completely decoupled the ",(0,o.kt)("em",{parentName:"p"},"networking lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"\nfrom the ",(0,o.kt)("em",{parentName:"p"},"data lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema"),". Collections of Endpoints that operate on the same\ndata can be consgtructed by calling ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"."),(0,o.kt)("h2",{id:"restendpoint"},"RestEndpoint"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/getTodo.ts"',title:'"api/getTodo.ts"'},"import { RestEndpoint } from '@rest-hooks/rest';\n\nexport const getTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { getTodo } from './api/getTodo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(getTodo, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," optimizes configuration based around HTTP\nnetworking. Urls are constructed based on simple named parameters, which are ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#typing"},"enforced with\nstrict TypeScript automatically"),"."),(0,o.kt)("h2",{id:"createresource"},"createResource"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = 0;\n  title = '';\n  completed = false;\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { TodoResource } from './api/Todo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(TodoResource.get, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource")," creates a simple collection of ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),".\nThese can be easily overidden, removed as appropriate - or not used altogether. ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"\nis intended as a quick start point and as a guide to best practices for API interface ergonomics. It is expected\nto extend or replace createResource based on the common patterns for your own API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { content: 'ntucker' });\ncontroller.fetch(TodoResource.update, { id: '5' }, { content: 'ntucker' });\ncontroller.fetch(\n  TodoResource.partialUpdate,\n  { id: '5' },\n  { content: 'ntucker' },\n);\ncontroller.fetch(TodoResource.delete, { id: '5' });\n")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Previously, ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource"},"Resource")," ",(0,o.kt)("em",{parentName:"p"},"was")," an ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/Entity"},"Entity"),". Endpoints are defined as ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#detail"},"static members"),"."),(0,o.kt)("p",null,"The motivation is for brevity: This allows one import to both define the expected type as well as access the endpoints to send as hook 'subjects'."),(0,o.kt)("h3",{id:"problems"},"Problems"),(0,o.kt)("p",null,"However, this lead to some problems. Originally it was thought many of these would be eliminated by improvements\nin related technologies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Class static side is not well supported by TypeScript. This leads to the somewhat confusing but also limiting ",(0,o.kt)("a",{parentName:"li",href:"https://resthooks.io/rest/5.2/guides/rest-types"},"generic workaround"),"."),(0,o.kt)("li",{parentName:"ol"},"Inheritance does not work well for providing out-of-the-box endpoint definitions. Overrides are better",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's a struggle between general types that allow overrides or precise types that help developers."),(0,o.kt)("li",{parentName:"ul"},"Hacks like \u2018SchemaDetail\u2019 are an attempt around this but are confusing, expensive for typescript to compute and likely break in certain configurations."))),(0,o.kt)("li",{parentName:"ol"},"Union Resources are awkward to define as their expected schema ends up not being the Entity.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In general, custom schemas are often shared by multiple endpoints, making it desirable to not require them to be just an Entity"))),(0,o.kt)("li",{parentName:"ol"},"Endpoints themselves don't maintain referential equality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This results in hacks in our hooks that violate expectations (ignoring referential changes to endpoints). There are legit reasons one might want to create a endpoint that changes and have that trigger fetches.")))),(0,o.kt)("p",null,"Probably most of all is that sharing data lifecycles with networking lifecycles made them quite a bit confusing in\nmany ways."),(0,o.kt)("h2",{id:"custom-networking"},"Custom Networking"),(0,o.kt)("p",null,"Customizations can be done easily with both ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#inheritance"},"RestEndpoint inheritance"),"\nas well as ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#extend"},"RestEndpoint.extend()"),". Explore the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#fetch-lifecycle"},"fetch lifecycle"),"\nto understand how these customizations affect fetch."),(0,o.kt)("h3",{id:"base-overrides-for-lifecycles"},"Base overrides for lifecycles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class GithubEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  getRequestInit(body: any): RequestInit {\n    if (body) {\n      return super.getRequestInit(deeplyApplyKeyTransform(body, snakeCase));\n    }\n    return super.getRequestInit();\n  }\n\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n\n  process(value: any, ...args: any) {\n    return deeplyApplyKeyTransform(value, camelCase);\n  }\n}\n")),(0,o.kt)("h3",{id:"default-values"},"Default values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class IssueEndpoint<O extends RestGenerics = any> extends GithubEndpoint<O> {\n  pollFrequency = 60000;\n}\n")),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/guides/pagination#infinite-scrolling"},"Infinite scrolling pagination")," can be achieved by creating a new pagination endpoint\nfor from any list endpoints ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#paginated"},"RestEndpoint.paginated()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MyResource.getNextPage = MyResource.getList.paginated(\n  ({\n    cursor,\n    ...rest\n  }: {\n    cursor: string | number;\n    group: string | number;\n  }) => [rest],\n);\n")),(0,o.kt)("h2",{id:"hook-context-for-fetch-construction"},"Hook context for fetch construction"),(0,o.kt)("p",null,"In cases where React context is needed to perform networking requests, we can construct hook\nendpoint generators with an augmentation function ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/hookifyResource"},"hookifyResource")),(0,o.kt)("p",null,"This utilizes the new key+string rewriting magic of TypeScript 4.2+. This means it won't be\nas strongly typed when using previous versions of TypeScript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ContextAuthdArticleResourceBase = createResource({\n  path: 'http\\\\://test.com/article/:id',\n  schema: Article,\n});\nexport const ContextAuthdArticleResource = hookifyResource(\n  {\n    ...ContextAuthdArticleResourceBase,\n    getListWithUser: ContextAuthdArticleResourceBase.getList.extend({\n      url: () =>\n        (ContextAuthdArticleResourceBase.getList.url as any)({\n          includeUser: true,\n        }),\n    }),\n  },\n  function useInit() {\n    const accessToken = useContext(AuthContext);\n    return {\n      headers: {\n        'Access-Token': accessToken,\n      },\n    };\n  },\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const article = useSuspense(ContextAuthdArticleResource.useGet(), { id });\nconst updateArticle = ContextAuthdArticleResource.useUpdate();\nconst onSubmit = () => controller.fetch(updateArticle, { id }, body);\n\nreturn <Form onSubmit={onSubmit} initialValues={article} />;\n")),(0,o.kt)("h2",{id:"inheritance-patterns-for-code-sharing"},"Inheritance patterns for code sharing"),(0,o.kt)("p",null,"For method overrides related to networking, you can ",(0,o.kt)("a",{parentName:"p",href:"/rest/guides/auth#cookie-auth"},"extend the RestEndpoint")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="AuthdEndpoint.ts"',title:'"AuthdEndpoint.ts"'},"import { RestEndpoint, type RestGenerics } from '@rest-hooks/rest';\n\nexport class AuthdEndpoint<\n  O extends RestGenerics = any,\n> extends RestEndpoint<O> {\n  getRequestInit(body: any): RequestInit {\n    return {\n      ...super.getRequestInit(body),\n      credentials: 'same-origin',\n    };\n  }\n}\n")),(0,o.kt)("p",null,"To customize data/schema shapes or which ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"collection of Endpoints")," to create,\nyou can ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#function-inheritance-patterns"},"create your own creation function")," that simply calls ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="createMyResource.ts"',title:'"createMyResource.ts"'},"import { createResource, type EndpointExtraOptions } from '@rest-hooks/rest';\nimport { AuthdEndpoint } from './AuthdEndpoint';\n\nexport function createMyResource<U extends string, S extends Schema>({\n  path,\n  schema,\n  Endpoint = AuthdEndpoint,\n  ...extraOptions\n}: {\n  // `readonly` is critical for the argument types to be inferred correctly\n  readonly path: U;\n  readonly schema: S;\n  readonly Endpoint?: typeof RestEndpoint;\n  urlPrefix?: string;\n} & EndpointExtraOptions) {\n  const BaseResource = createResource({\n    path,\n    Endpoint,\n    schema,\n    ...extraOptions,\n  });\n\n  return {\n    ...BaseResource,\n    getList: BaseResource.getList.extend({\n      schema: { results: [schema], total: 0, limit: 0, skip: 0 },\n    }),\n  };\n}\n")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Explore common patterns with this implementation using the GitHub API."),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/github-app?embed=1&file=src%2Fresources%2FIssue.tsx&hideNavigation=1&hideDevTools=1&view=editor",width:"738",height:"700",style:{width:"100%"}}),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"full documentation for @rest-hooks/rest@6")," for more detailed guides that cover all the functionality."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/2187"},"The PR for RestEndpoint, createResource, and hookifyResource")))}d.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,23)))}o.keys=()=>Object.keys(r),o.id=73795,e.exports=o}}]);