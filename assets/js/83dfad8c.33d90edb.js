(self.webpackChunk=self.webpackChunk||[]).push([[34195],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),i=n(87462),s=n(99401),a=n(6832),o=n(86010),l=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var u=(0,r.memo)(d);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),h=n(80086),g=n(45440);function f(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:p,hidden:m,fixtures:h,includeEndpoints:f,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,a.Z)().siteConfig.themeConfig,k=(0,s.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)(g.Z.playgroundContainer,{[g.Z.row]:p,[g.Z.hidden]:m})},r.createElement(l.nu,(0,i.Z)({theme:k},b),r.createElement(y,{reverse:"top"===v,row:p,fixtures:h,includeEndpoints:f,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function y(e){let{reverse:t,children:n,row:i,fixtures:s,includeEndpoints:a,groupId:o,defaultOpen:d}=e;const{handleCodeChange:u,codes:p,codeTabs:g}=(0,m.h)(n),f=p.join("\n");return r.createElement(k,{reverse:t},r.createElement(m.L,{fixtures:s,row:i,codeTabs:g,handleCodeChange:u,codes:p}),r.createElement(c.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:a,groupId:o,defaultOpen:d,row:i,fixtures:s}))},r.createElement(v,{code:f,includeEndpoints:a,groupId:o,defaultOpen:d,row:i,fixtures:s})))}f.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function k(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}k.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:s,row:a=!1,fixtures:o}=e;return r.createElement(f,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:s,row:a,hidden:i,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(19666),i=n(67294);function s(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),i=n(86010),s=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,i.Z)(s.Z.playgroundHeader,n,a?s.Z.clickable:null),onClick:a},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>A,h:()=>S});var r=n(87462),i=n(11614),s=n(86010),a=n(67294),o=n(13743),l=n(45440);function c(e){let{fixtures:t}=e;return a.createElement("div",{className:l.Z.fixtureBlock},t.map(((e,t)=>a.createElement(p,{key:t,fixture:e}))))}var d=(0,a.memo)(c);function u(e){let{fixture:t}=e;return"function"==typeof t.response?a.createElement(o.Z,{language:"javascript",className:l.Z.fixtureJson},`${t.response}`):a.createElement(o.Z,{language:"json",className:l.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?a.createElement("div",{key:t.endpoint.key(...t.args),className:l.Z.fixtureItem},a.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.key(...t.args)),a.createElement(u,{fixture:t})):a.createElement("div",{className:l.Z.fixtureItem},a.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),a.createElement(u,{fixture:t}))}var m=n(62974),h=n(49544);const g=(0,a.memo)(h.uz);var f=n(76226),y=n(87594),b=n.n(y),v=n(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const r=v.Z.init();r.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i)){if(i.endsWith(".")||i.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[s,a,o,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),i.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.typescriptDefaults.setEagerModelSync(!0),i}))}}const E=(0,a.memo)(f.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...x,fontSize:14,lineHeight:20};var Z=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:i=!1,large:s=!1,...o}=e;const l=s?w:x;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,a.useState)("100%"),u=(0,a.useCallback)((e=>{i&&e.focus();const t=Object.keys(o).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let n=t[0][0],r=n;const i=[];t[0].forEach((e=>{e===r?r++:(i.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),i.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(i)}const n=l.lineHeight,r=e.getDomNode(),s=r.getElementsByClassName("view-lines")[0];let a=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??s.childElementCount)*n+10;a=s.childElementCount,r.style.height=t+"px",d(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return a.createElement(E,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:l,theme:"prism",onMount:u,height:c,loading:a.createElement(h.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return a.createElement(g,{onChange:t,code:n})},C=n(69762);function A(e){let{fixtures:t,row:n,codeTabs:i,handleCodeChange:o,codes:c,large:d=!1,isPlayground:u=!0}=e;const p=(0,a.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,h]=(0,a.useState)((()=>i.map((e=>{let{collapsed:t}=e;return t}))));return a.createElement("div",null,a.createElement(L,{fixtures:n?[]:t,title:n&&1===i.length?i[0].title:void 0}),n&&i.length>1?a.createElement(O,{titles:i.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>h((t=>t.map(((t,n)=>n!==e)))),isPlayground:u}):null,i.map(((e,u)=>{let{title:g,path:f,code:y,collapsed:b,...v}=e;return a.createElement(a.Fragment,{key:u},!n&&g?a.createElement(P,{onClick:()=>h((e=>{const t=[...e];return t[u]=!t[u],t})),closed:m[u],title:g,collapsible:i.length>1||t?.length,lastChild:u===i.length-1&&d}):null,a.createElement("div",{key:u,className:(0,s.Z)(l.Z.playgroundEditor,{[l.Z.hidden]:m[u]})},a.createElement(Z,(0,r.Z)({key:u,onChange:o[u],code:c[u],path:"/"+p+"/"+(f||g||"default.tsx")},v,{large:d}))))})))}function S(e){const t=(0,a.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i,...s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i,...s}}))),[e]),[n,r]=(0,a.useReducer)(N,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,a.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function N(e,t){const n=[...e];return n[t.i]=t.code,n}function P(e){let{onClick:t,closed:n,title:r,collapsible:i=!1,lastChild:o=!1}=e;return i?a.createElement(m.Z,{className:(0,s.Z)(l.Z.small,{[l.Z.lastChild]:o&&n}),onClick:t},a.createElement("span",{className:(0,s.Z)(l.Z.arrow,n?l.Z.right:l.Z.down)},"\u25b6"),r):a.createElement("div",{className:l.Z.codeHeader},r)}function O(e){let{titles:t,closedList:n,onClick:r,isPlayground:i=!0}=e;const{values:o}=(0,a.useContext)(C.Z),c=o.length>0;return a.createElement(m.Z,{className:(0,s.Z)({[l.Z.small]:c||!i,[l.Z.subtabs]:c},l.Z.noupper,l.Z.tabControls)},a.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>a.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,s.Z)(l.Z.tab,{[l.Z.selected]:!n[t]})},e)))))}function j(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(C.Z);return a.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:i}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,s.Z)(l.Z.tab,{[l.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},i)})))}function _(e){let{children:t}=e;return a.createElement(m.Z,{className:l.Z.tabControls},a.createElement("div",{className:l.Z.title},t),a.createElement(j,null))}function L(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,a.useContext)(C.Z),i=r.length>0;return a.createElement(a.Fragment,null,n.length?a.createElement(a.Fragment,null,a.createElement(m.Z,{className:l.Z.small},"Fixtures"),a.createElement(d,{fixtures:n})):null,i?a.createElement(_,null,t):null)}L.defaultProps={title:a.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(11614),i=n(67294),s=n(62974),a=n(76602),o=n(63735),l=n(78871),c=n(86010),d=n(92785),u=n(92954),p=n(48256),m=n(3604),h=n(45045),g=n(29451),f=n(70524),y=n(287);function b(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,r=(0,i.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,i.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),a=(0,i.useMemo)(v,[]);return i.createElement(y.L,{shouldExpandNodeInitially:a,data:t,valueRenderer:E,theme:s,hideRoot:!0})}const v=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},k="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var x=n(45440);function w(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,s=r?x.Z.right:x.Z.left;return i.createElement(i.Fragment,null,i.createElement("div",{className:x.Z.debugToggle,onClick:t},"Store",i.createElement("span",{className:(0,c.Z)(x.Z.arrow,s,x.Z.vertical)},"\u25b6")),r?i.createElement(A,null):null)}var Z=(0,i.memo)(w);function C(){const e=(0,i.useContext)(g.sA),t=(0,i.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return i.createElement(b,{value:t})}const A=(0,i.memo)(C);function S(e){let{groupId:t,defaultOpen:n,row:r,fixtures:s}=e;const{tabGroupChoices:g,setTabGroupChoices:f}=(0,a.U)(),[y,b]=(0,i.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,o.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,i.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[v,t,y,f]),E=(0,i.useMemo)((()=>[new d.Z,new u.Z(p.Z)]),[]),w=!("n"===y||!r);return i.createElement(m.Z,{managers:E},i.createElement(l.Z,{fixtures:s,silenceMissing:!0},i.createElement("div",{className:(0,c.Z)(x.Z.playgroundPreview,{[x.Z.hidden]:w})},i.createElement(h.Z,{fallback:i.createElement(P,null)},i.createElement(O,null))),i.createElement(Z,{selectedValue:y,toggle:k})))}var N=(0,i.memo)(S);function P(){return i.createElement("div",null,"Loading...")}const O=(0,i.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function j(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return i.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},i.createElement(s.Z,null,i.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),i.createElement("div",{className:x.Z.playgroundResult},i.createElement(N,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var _=(0,i.memo)(j)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(64820);const s={React:r,...r,...i};t.Z=s},71571:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(27378),n(3905)),s=n(28423),a=n(41191);const o={title:"Entity Validation",sidebar_label:"Validation"},l=void 0,c={unversionedId:"concepts/validation",id:"concepts/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/core/concepts/validation.md",sourceDirName:"concepts",slug:"/concepts/validation",permalink:"/docs/concepts/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/concepts/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1673811824,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/concepts/expiry-policy"},next:{title:"Atomic Mutations",permalink:"/docs/concepts/atomic-mutations"}},d={},u=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"docsearch:pagerank",content:"40"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nexport const getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nexport class ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"import { getArticle, getArticleList } from './api/Article';\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState('');\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute('')} />;\n}\n\nrender(<ArticleList />);\n"))))}m.isMDXComponent=!0},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),i=n(11857);function s(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let a=!1;try{Function()}catch(w){a=!0,console.error("Content Security Policy: The previous CSP log can be safely ignored - @rest-hooks/endpoint will use setPrototypeOf instead")}class o extends Function{constructor(e,t){let n;return a?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),s(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=this.fetch,s=this.key;return this.extend({fetch(){return i.apply(null!=e?e:this,n)},key(){return s.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return s(n,{...this.options,...e}),n}}var l=n(92586);class c extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function d(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const p=(e,t,n)=>{if(d(t))return function(e,t,n){let r=!0,i=!1;return[Object.keys(e).reduce(((t,s)=>{const a=`${s}`,[o,l,c]=n(t.get(a),e[a]);return l||(r=!1),c&&(i=!0),t.has(a)?t.set(a,o):t}),t),r,i]}(e,t,n);const r={...t};let i=!0,s=!1;return Object.keys(e).forEach((t=>{const[a,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),l&&(s=!0),o||(i=!1)})),[r,i,s]};function m(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,i,s){const a=this.inferSchema(e,t,n);if(!a)return e;const o=r(e,t,n,a,i,s);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(d(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:d(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,i,s){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,i,s))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,i,s,a)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=i(t[n],t,n,r,s,a);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return p(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,i){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n,i);return s}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=m(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function h(e,t){const n=m(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return{[e.key(...t(...s))]:e=>{const t=g(e,n),i=new Set(t),s=g(r,n).filter((e=>!i.has(e))),a=[...t,...s];return f(r,n,a)}}}}const g=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},f=(e,t,n)=>{if(0===t.length)return n;const r={...e};let i=r;for(let s=0;s<t.length-1;s++){const e=t[s];i=i[e]={...i[e]}}return i[t[t.length-1]]=n,r};const y={};const b={};const v=Object.prototype,k=Object.getPrototypeOf;var E=(0,i.Z)("hasBody");class x extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},s=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(i),this.getRequestInit(s)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(b,e)||(b[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),b[e]}(this.path),i={};return Object.keys(e).forEach((t=>{r.has(t)||(i[t]=e[t])})),Object.keys(i).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(i)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&k(n)===v;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new c(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new c(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}get pathRegex(){return(0,l.Bo)(this.path)}testKey(e){const t=this.method+" "+this.urlPrefix;if(!e.startsWith(t))return!1;let n=e.lastIndexOf("?");return-1===n&&(n=void 0),this.pathRegex.test(e.substring(t.length,n))}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:h(this,e)})}}}}]);