(self.webpackChunk=self.webpackChunk||[]).push([[52440],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(67294),o=n(87462),i=n(99401),a=n(6832),s=n(86010),l=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var u=(0,r.memo)(d);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),h=n(45440);function f(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:f,...b}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,a.Z)().siteConfig.themeConfig,v=(0,i.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,s.Z)(h.Z.playgroundContainer,{[h.Z.row]:p,[h.Z.hidden]:m})},r.createElement(l.nu,(0,o.Z)({theme:v},b),r.createElement(y,{reverse:"top"===k,row:p,fixtures:g,includeEndpoints:f,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function y(e){let{reverse:t,children:n,row:o,fixtures:i,includeEndpoints:a,groupId:s,defaultOpen:d}=e;const{handleCodeChange:u,codes:p,codeTabs:h}=(0,m.h)(n),f=p.join("\n");return r.createElement(v,{reverse:t},r.createElement(m.L,{fixtures:i,row:o,codeTabs:h,handleCodeChange:u,codes:p}),r.createElement(c.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:a,groupId:s,defaultOpen:d,row:o,fixtures:i}))},r.createElement(k,{code:f,includeEndpoints:a,groupId:s,defaultOpen:d,row:o,fixtures:i})))}f.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),k=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function v(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}v.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:i,row:a=!1,fixtures:s}=e;return r.createElement(f,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:a,hidden:o,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var w=(0,r.memo)(E)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(19666),o=n(67294);function i(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=n(86010),i=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,o.Z)(i.Z.playgroundHeader,n,a?i.Z.clickable:null),onClick:a},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>Z,h:()=>O});var r=n(87462),o=n(11614),i=n(86010),a=n(67294),s=n(13743),l=n(45440);function c(e){let{fixtures:t}=e;return a.createElement("div",{className:l.Z.fixtureBlock},t.map(((e,t)=>a.createElement(p,{key:t,fixture:e}))))}var d=(0,a.memo)(c);function u(e){let{fixture:t}=e;return"function"==typeof t.response?a.createElement(s.Z,{language:"javascript",className:l.Z.fixtureJson},`${t.response}`):a.createElement(s.Z,{language:"json",className:l.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?a.createElement("div",{key:t.endpoint.key(...t.args),className:l.Z.fixtureItem},a.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.key(...t.args)),a.createElement(u,{fixture:t})):a.createElement("div",{className:l.Z.fixtureItem},a.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),a.createElement(u,{fixture:t}))}var m=n(62974),g=n(49544);const h=(0,a.memo)(g.uz);var f=n(76226),y=n(87594),b=n.n(y),k=n(30573);let v;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!v){const r=k.Z.init();r.then((e=>{e&&(v=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const o=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const o=n.value,[i,a,s,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(i,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const E=(0,a.memo)(f.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},x={...w,fontSize:14,lineHeight:20};var C=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:o=!1,large:i=!1,...s}=e;const l=i?x:w;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,a.useState)("100%"),u=(0,a.useCallback)((e=>{o&&e.focus();const t=Object.keys(s).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let n=t[0][0],r=n;const o=[];t[0].forEach((e=>{e===r?r++:(o.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),o.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(o)}const n=l.lineHeight,r=e.getDomNode(),i=r.getElementsByClassName("view-lines")[0];let a=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??i.childElementCount)*n+10;a=i.childElementCount,r.style.height=t+"px",d(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return a.createElement(E,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:l,theme:"prism",onMount:u,height:c,loading:a.createElement(g.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return a.createElement(h,{onChange:t,code:n})},N=n(69762);function Z(e){let{fixtures:t,row:n,codeTabs:o,handleCodeChange:s,codes:c,large:d=!1,isPlayground:u=!0}=e;const p=(0,a.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,a.useState)((()=>o.map((e=>{let{collapsed:t}=e;return t}))));return a.createElement("div",null,a.createElement(j,{fixtures:n?[]:t,title:n&&1===o.length?o[0].title:void 0}),n&&o.length>1?a.createElement(A,{titles:o.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:u}):null,o.map(((e,u)=>{let{title:h,path:f,code:y,collapsed:b,...k}=e;return a.createElement(a.Fragment,{key:u},!n&&h?a.createElement(R,{onClick:()=>g((e=>{const t=[...e];return t[u]=!t[u],t})),closed:m[u],title:h,collapsible:o.length>1||t?.length,lastChild:u===o.length-1&&d}):null,a.createElement("div",{key:u,className:(0,i.Z)(l.Z.playgroundEditor,{[l.Z.hidden]:m[u]})},a.createElement(C,(0,r.Z)({key:u,onChange:s[u],code:c[u],path:"/"+p+"/"+(f||h||"default.tsx")},k,{large:d}))))})))}function O(e){const t=(0,a.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:o,...i}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:o,...i}}))),[e]),[n,r]=(0,a.useReducer)(T,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,a.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function T(e,t){const n=[...e];return n[t.i]=t.code,n}function R(e){let{onClick:t,closed:n,title:r,collapsible:o=!1,lastChild:s=!1}=e;return o?a.createElement(m.Z,{className:(0,i.Z)(l.Z.small,{[l.Z.lastChild]:s&&n}),onClick:t},a.createElement("span",{className:(0,i.Z)(l.Z.arrow,n?l.Z.right:l.Z.down)},"\u25b6"),r):a.createElement("div",{className:l.Z.codeHeader},r)}function A(e){let{titles:t,closedList:n,onClick:r,isPlayground:o=!0}=e;const{values:s}=(0,a.useContext)(N.Z),c=s.length>0;return a.createElement(m.Z,{className:(0,i.Z)({[l.Z.small]:c||!o,[l.Z.subtabs]:c},l.Z.noupper,l.Z.tabControls)},a.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>a.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,i.Z)(l.Z.tab,{[l.Z.selected]:!n[t]})},e)))))}function P(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(N.Z);return a.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:o}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,i.Z)(l.Z.tab,{[l.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},o)})))}function S(e){let{children:t}=e;return a.createElement(m.Z,{className:l.Z.tabControls},a.createElement("div",{className:l.Z.title},t),a.createElement(P,null))}function j(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,a.useContext)(N.Z),o=r.length>0;return a.createElement(a.Fragment,null,n.length?a.createElement(a.Fragment,null,a.createElement(m.Z,{className:l.Z.small},"Fixtures"),a.createElement(d,{fixtures:n})):null,o?a.createElement(S,null,t):null)}j.defaultProps={title:a.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(11614),o=n(67294),i=n(62974),a=n(76602),s=n(63735),l=n(78871),c=n(86010),d=n(92785),u=n(92954),p=n(48256),m=n(3604),g=n(45045),h=n(29451),f=n(70524),y=n(287);function b(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,r=(0,o.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,o.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),a=(0,o.useMemo)(k,[]);return o.createElement(y.L,{shouldExpandNodeInitially:a,data:t,valueRenderer:E,theme:i,hideRoot:!0})}const k=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},v="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var w=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,i=r?w.Z.right:w.Z.left;return o.createElement(o.Fragment,null,o.createElement("div",{className:w.Z.debugToggle,onClick:t},"Store",o.createElement("span",{className:(0,c.Z)(w.Z.arrow,i,w.Z.vertical)},"\u25b6")),r?o.createElement(Z,null):null)}var C=(0,o.memo)(x);function N(){const e=(0,o.useContext)(h.sA),t=(0,o.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return o.createElement(b,{value:t})}const Z=(0,o.memo)(N);function O(e){let{groupId:t,defaultOpen:n,row:r,fixtures:i}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,a.U)(),[y,b]=(0,o.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,s.o5)();if(null!=t){const e=h[t];null!=e&&e!==y&&b(e)}const v=(0,o.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[k,t,y,f]),E=(0,o.useMemo)((()=>[new d.Z,new u.Z(p.Z)]),[]),x=!("n"===y||!r);return o.createElement(m.Z,{managers:E},o.createElement(l.Z,{fixtures:i,silenceMissing:!0},o.createElement("div",{className:(0,c.Z)(w.Z.playgroundPreview,{[w.Z.hidden]:x})},o.createElement(g.Z,{fallback:o.createElement(R,null)},o.createElement(A,null))),o.createElement(C,{selectedValue:y,toggle:v})))}var T=(0,o.memo)(O);function R(){return o.createElement("div",null,"Loading...")}const A=(0,o.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:s}=e;return o.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},o.createElement(i.Z,null,o.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),o.createElement("div",{className:w.Z.playgroundResult},o.createElement(T,{groupId:t,defaultOpen:n,row:a,fixtures:s})))}var S=(0,o.memo)(P)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),o=n(64820);const i={React:r,...r,...o};t.Z=i},71212:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),i=n(28423);const a={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"version-6.3/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/versioned_docs/version-6.3/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/6.3/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/6.3/guides/immediate-updates"},next:{title:"Aborting Fetch",permalink:"/docs/6.3/guides/abort"}},c={},d=[{value:"Partial updates",id:"partial-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets",level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",level:3},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets-1",level:3},{value:"CreateArticle.tsx",id:"createarticletsx",level:3},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,o.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,o.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,o.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, SchemaDetail, AbstractInstanceType } from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      getOptimisticResponse: (snap, params, body) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,o.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <button\n      onClick={() =>\n        fetch(ArticleResource.partialUpdate(), { id }, { published: true })\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,o.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,o.kt)("p",null,"Optimistic updates can also be combined with ",(0,o.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,o.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,o.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, AbstractInstanceType } from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    const list = this.list();\n    return super.create().extend({\n      getOptimisticResponse: (snap, params, body) => body,\n      update: (newResourcePk: string) => ({\n        [list.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      }),\n    });\n  }\n}\n\n")),(0,o.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,o.kt)("p",null,"Since the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,o.kt)("p",null,"Once the network responds, it will have a different ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,o.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      fetch(ArticleResource.create(), { id: uuid(), ...data }),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,o.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,o.kt)("p",null,"Since deletes ",(0,o.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,o.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      getOptimisticResponse: (snap, params, body) => params,\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,o.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,o.kt)(i.Z,{mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,o.kt)("p",null,"Try removing ",(0,o.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,o.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,o.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,o.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,o.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.3/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,o.kt)(i.Z,{mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      // server already has this optimistic computation then do nothing\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,23)))}o.keys=()=>Object.keys(r),o.id=73795,e.exports=o}}]);