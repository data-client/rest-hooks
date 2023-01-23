(self.webpackChunk=self.webpackChunk||[]).push([[76178],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(5730),l=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:m,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.U)(),[x,E]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==x&&f.some((t=>t.value===e))&&E(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==x&&(N(t),E(r),null!=m&&y(m,String(r)))},Z=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:Z,onClick:C},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(67294),a=n(87462),o=n(99401),s=n(6832),l=n(86010),i=n(49544),c=n(45045);function u(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),h=n(45440);function f(e){let{children:t,transformCode:n,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:g,includeEndpoints:f,...k}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,y=(0,o.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.Z)(h.Z.playgroundContainer,{[h.Z.row]:p,[h.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:y},k),r.createElement(b,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:f,groupId:c,defaultOpen:u},t))),r.createElement(d,null))}function b(e){let{reverse:t,children:n,row:a,fixtures:o,includeEndpoints:s,groupId:l,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:h}=(0,m.h)(n),f=p.join("\n");return r.createElement(y,{reverse:t},r.createElement(m.L,{fixtures:o,row:a,codeTabs:h,handleCodeChange:d,codes:p}),r.createElement(c.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:s,groupId:l,defaultOpen:u,row:a,fixtures:o}))},r.createElement(v,{code:f,includeEndpoints:s,groupId:l,defaultOpen:u,row:a,fixtures:o})))}f.defaultProps={row:!1,hidden:!1};const k="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>k?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function y(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}y.defaultProps={reverse:!1};const x=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o,row:s=!1,fixtures:l}=e;return r.createElement(f,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:a,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};x.defaultProps={defaultOpen:"n",fixtures:[]};var E=(0,r.memo)(x)},52393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(13743),a=n(30433),o=n(65559),s=n(67294);function l(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),a=n(67294);function o(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),o=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,n,s?o.Z.clickable:null),onClick:s},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>Z,h:()=>P});var r=n(87462),a=n(11614),o=n(86010),s=n(67294),l=n(13743),i=n(45440);function c(e){let{fixtures:t}=e;return s.createElement("div",{className:i.Z.fixtureBlock},t.map(((e,t)=>s.createElement(p,{key:t,fixture:e}))))}var u=(0,s.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?s.createElement(l.Z,{language:"javascript",className:i.Z.fixtureJson},`${t.response}`):s.createElement(l.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?s.createElement("div",{key:t.endpoint.key(...t.args),className:i.Z.fixtureItem},s.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.key(...t.args)),s.createElement(d,{fixture:t})):s.createElement("div",{className:i.Z.fixtureItem},s.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),s.createElement(d,{fixture:t}))}var m=n(62974),g=n(49544);const h=(0,s.memo)(g.uz);var f=n(76226),b=n(87594),k=n.n(b),v=n(30573);let y;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!y){const r=v.Z.init();r.then((e=>{e&&(y=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[o,s,l,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${s} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const x=(0,s.memo)(f.ZP);const E={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...E,fontSize:14,lineHeight:20};var N=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:o=!1,...l}=e;const i=o?w:E;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,u]=(0,s.useState)("100%"),d=(0,s.useCallback)((e=>{a&&e.focus();const t=Object.keys(l).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(k());if(t.length){let n=t[0][0],r=n;const a=[];t[0].forEach((e=>{e===r?r++:(a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(a)}const n=i.lineHeight,r=e.getDomNode(),o=r.getElementsByClassName("view-lines")[0];let s=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??o.childElementCount)*n+10;s=o.childElementCount,r.style.height=t+"px",u(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return s.createElement(x,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:d,height:c,loading:s.createElement(g.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return s.createElement(h,{onChange:t,code:n})},C=n(69762);function Z(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:l,codes:c,large:u=!1,isPlayground:d=!0}=e;const p=(0,s.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,s.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return s.createElement("div",null,s.createElement(A,{fixtures:n?[]:t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?s.createElement(R,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:h,path:f,code:b,collapsed:k,...v}=e;return s.createElement(s.Fragment,{key:d},!n&&h?s.createElement(T,{onClick:()=>g((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:h,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&u}):null,s.createElement("div",{key:d,className:(0,o.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},s.createElement(N,(0,r.Z)({key:d,onChange:l[d],code:c[d],path:"/"+p+"/"+(f||h||"default.tsx")},v,{large:u}))))})))}function P(e){const t=(0,s.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...o}}))),[e]),[n,r]=(0,s.useReducer)(S,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,s.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function S(e,t){const n=[...e];return n[t.i]=t.code,n}function T(e){let{onClick:t,closed:n,title:r,collapsible:a=!1,lastChild:l=!1}=e;return a?s.createElement(m.Z,{className:(0,o.Z)(i.Z.small,{[i.Z.lastChild]:l&&n}),onClick:t},s.createElement("span",{className:(0,o.Z)(i.Z.arrow,n?i.Z.right:i.Z.down)},"\u25b6"),r):s.createElement("div",{className:i.Z.codeHeader},r)}function R(e){let{titles:t,closedList:n,onClick:r,isPlayground:a=!0}=e;const{values:l}=(0,s.useContext)(C.Z),c=l.length>0;return s.createElement(m.Z,{className:(0,o.Z)({[i.Z.small]:c||!a,[i.Z.subtabs]:c},i.Z.noupper,i.Z.tabControls)},s.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>s.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:!n[t]})},e)))))}function M(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,s.useContext)(C.Z);return s.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return s.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function L(e){let{children:t}=e;return s.createElement(m.Z,{className:i.Z.tabControls},s.createElement("div",{className:i.Z.title},t),s.createElement(M,null))}function A(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,s.useContext)(C.Z),a=r.length>0;return s.createElement(s.Fragment,null,n.length?s.createElement(s.Fragment,null,s.createElement(m.Z,{className:i.Z.small},"Fixtures"),s.createElement(u,{fixtures:n})):null,a?s.createElement(L,null,t):null)}A.defaultProps={title:s.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r=n(11614),a=n(67294),o=n(62974),s=n(76602),l=n(63735),i=n(78871),c=n(86010),u=n(92785),d=n(92954),p=n(48256),m=n(3604),g=n(45045),h=n(29451),f=n(70524),b=n(287);function k(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,a.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),s=(0,a.useMemo)(v,[]);return a.createElement(b.L,{shouldExpandNodeInitially:s,data:t,valueRenderer:x,theme:o,hideRoot:!0})}const v=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},y="undefined"!=typeof Intl;function x(e,t){const n=arguments.length<=2?void 0:arguments[2];return y&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=n(45440);function w(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,o=r?E.Z.right:E.Z.left;return a.createElement(a.Fragment,null,a.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",a.createElement("span",{className:(0,c.Z)(E.Z.arrow,o,E.Z.vertical)},"\u25b6")),r?a.createElement(Z,null):null)}var N=(0,a.memo)(w);function C(){const e=(0,a.useContext)(h.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return a.createElement(k,{value:t})}const Z=(0,a.memo)(C);function P(e){let{groupId:t,defaultOpen:n,row:r,fixtures:o}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,s.U)(),[b,k]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,l.o5)();if(null!=t){const e=h[t];null!=e&&e!==b&&k(e)}const y=(0,a.useCallback)((e=>{v(e.currentTarget),k((e=>"y"===e?"n":"y")),f(t,"y"===b?"n":"y")}),[v,t,b,f]),x=(0,a.useMemo)((()=>[new u.Z,new d.Z(p.Z)]),[]),w=!("n"===b||!r);return a.createElement(m.Z,{managers:x},a.createElement(i.Z,{fixtures:o,silenceMissing:!0},a.createElement("div",{className:(0,c.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:w})},a.createElement(g.Z,{fallback:a.createElement(T,null)},a.createElement(R,null))),a.createElement(N,{selectedValue:b,toggle:y})))}var S=(0,a.memo)(P);function T(){return a.createElement("div",null,"Loading...")}const R=(0,a.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function M(e){let{groupId:t,defaultOpen:n,row:s,fixtures:l}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(o.Z,null,a.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),a.createElement("div",{className:E.Z.playgroundResult},a.createElement(S,{groupId:t,defaultOpen:n,row:s,fixtures:l})))}var L=(0,a.memo)(M)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const o={React:r,...r,...a};t.Z=o},20760:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(52393),s=n(28423),l=n(65559),i=n(30433);const c={title:"v7 - React Native, Web and SSR upgrades and more",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","resource","endpoint"]},u=void 0,d={permalink:"/blog/2022/12/19/rest-hooks-7-react-native-web-nextjs",source:"@site/blog/2022-12-19-rest-hooks-7-react-native-web-nextjs.md",title:"v7 - React Native, Web and SSR upgrades and more",description:"Rest Hooks 7",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"rest",permalink:"/blog/tags/rest"},{label:"resource",permalink:"/blog/tags/resource"},{label:"endpoint",permalink:"/blog/tags/endpoint"}],readingTime:4.42,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"v7 - React Native, Web and SSR upgrades and more",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","resource","endpoint"]},nextItem:{title:"Query, getState() and partial hydration SSR improvements",permalink:"/blog/2022/11/09/Query-getState-SSR-partial-hydration"}},p={authorsImageUrls:[void 0]},m=[{value:"Rest Hooks 7",id:"rest-hooks-7",level:3},{value:"@rest-hooks/react@7",id:"rest-hooksreact7",level:3},{value:"React Native",id:"react-native",level:4},{value:"@rest-hooks/react@7.1",id:"rest-hooksreact71",level:3},{value:"@rest-hooks/ssr@0.7",id:"rest-hooksssr07",level:3},{value:"Demo",id:"demo",level:4},{value:"LogoutManager",id:"logoutmanager",level:3},{value:"useLive",id:"uselive",level:3},{value:"AsyncBoundary",id:"asyncboundary",level:3},{value:"Manager.getMiddleware() API changes",id:"managergetmiddleware-api-changes",level:3}],g={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"rest-hooks-7"},"Rest Hooks 7"),(0,a.kt)("p",null,"For most people, ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-7"},"upgrading to Rest Hooks 7")," is as easy as upgrading the packages as long as you aren\u2019t using previously (2 years ago) deprecated exports."),(0,a.kt)(o.Z,{pkgs:"rest-hooks@7 @rest-hooks/react@6 @rest-hooks/redux@6 @rest-hooks/test@9 @rest-hooks/img@0.7",upgrade:!0,mdxType:"PkgTabs"}),(0,a.kt)("p",null,"The big difference here is all react-specific code has been moved into\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/react"},"@rest-hooks/react"),", which is now a peer dependency of the other\npackages. The ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rest-hooks"},"rest-hooks")," package re-exports everything from @rest-hooks/react."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/upgrade/upgrading-to-7"},"Upgrade to Rest Hooks 7 guide")),(0,a.kt)("h3",{id:"rest-hooksreact7"},"@rest-hooks/react@7"),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks")," package is upgraded, you can optionally upgrade @rest-hooks/react to 7."),(0,a.kt)(o.Z,{pkgs:"@rest-hooks/react@7",upgrade:!0,mdxType:"PkgTabs"}),(0,a.kt)("h4",{id:"react-native"},"React Native"),(0,a.kt)("p",null,"Because the React Native and Web interfaces are the same, we ship them in the same package\nand delivery appropriate specializations where appropriate."),(0,a.kt)("p",null,"The only breaking change is that ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense"),", useSubscription,\nuseLive, useFetch are all react-native aware. This is unlikely to cause any issue, as\nscreen focus will trigger fetches on stale data."),(0,a.kt)("h3",{id:"rest-hooksreact71"},"@rest-hooks/react","@","7.1"),(0,a.kt)("p",null,"New additions in 7.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/LogoutManager"},"LogoutManager")," listens for 401 to trigger logout"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/useLive"},"useLive()")," combines useSuspense() with useSubscription()"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/AsyncBoundary"},"<","AsyncBoundary/>")," combines Suspense with NetworkErrorBoundary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/Manager"},"Middleware API gets full controller")),(0,a.kt)("li",{parentName:"ul"},"Block dispatches after unmount (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coinbase/rest-hooks/issues/2307"},"#2307"),")")),(0,a.kt)("h3",{id:"rest-hooksssr07"},"@rest-hooks/ssr","@","0.7"),(0,a.kt)("p",null,"Newly ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/ssr"},"added guide")," and utilities specific for making ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/ssr#nextjs"},"NextJS integration easier"),"."),(0,a.kt)(o.Z,{pkgs:"@rest-hooks/ssr @rest-hooks/redux redux",mdxType:"PkgTabs"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_document.tsx"',title:'"pages/_document.tsx"'},"import { RestHooksDocument } from '@rest-hooks/ssr/nextjs';\n\nexport default RestHooksDocument;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},"import { AppCacheProvider } from '@rest-hooks/ssr/nextjs';\nimport type { AppProps } from 'next/app';\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <AppCacheProvider>\n      <Component {...pageProps} />\n    </AppCacheProvider>\n  );\n}\n")),(0,a.kt)("h4",{id:"demo"},"Demo"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/nextjs?embed=1&file=pages%2FAssetPrice.tsx&hidedevtools=1&view=both&terminalHeight=0&hideNavigation=1",width:"100%",height:"500"}),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/ssr#nextjs"},"full SSR guide for NextJS")),(0,a.kt)("h3",{id:"logoutmanager"},"LogoutManager"),(0,a.kt)("p",null,"Secure authentication expires at some point. Typically this results in APIs responding with\na 401 status. To provide a batteries-included solution for this case, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/LogoutManager"},"LogoutManager"),"\nwas introduced. It's fully configurable so be sure to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/LogoutManager"},"check out the docs")," for more details."),(0,a.kt)(l.Z,{defaultValue:"18-web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"},{label:"NextJS",value:"nextjs"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider, LogoutManager } from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\n// highlight-next-line\nconst managers = [new LogoutManager(), ...CacheProvider.defaultProps.managers];\n\nReactDOM.render(\n  <CacheProvider managers={managers}>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,a.kt)(i.Z,{value:"18-web",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider, LogoutManager } from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\n// highlight-next-line\nconst managers = [new LogoutManager(), ...CacheProvider.defaultProps.managers];\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider managers={managers}>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,a.kt)(i.Z,{value:"native",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider, LogoutManager } from '@rest-hooks/react';\nimport { AppRegistry } from 'react-native';\n\n// highlight-next-line\nconst managers = [new LogoutManager(), ...CacheProvider.defaultProps.managers];\n\nconst Root = () => (\n  <CacheProvider managers={managers}>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n"))),(0,a.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},"import { CacheProvider, LogoutManager } from '@rest-hooks/react';\nimport { AppCacheProvider } from '@rest-hooks/ssr/nextjs';\nimport type { AppProps } from 'next/app';\n\n// highlight-next-line\nconst managers = [new LogoutManager(), ...CacheProvider.defaultProps.managers];\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <AppCacheProvider managers={managers}>\n      <Component {...pageProps} />\n    </AppCacheProvider>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/2293"},"PR #2293")),(0,a.kt)("h3",{id:"uselive"},"useLive"),(0,a.kt)("p",null,"Often ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," is used in the same components that ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," is. To reduce verbosity\nwe have introduced ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useLive"},"useLive()")," which simply calls both useSubscription() and useSuspense()."),(0,a.kt)(s.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/ExchangeRates.ts" collapsed',title:'"api/ExchangeRates.ts"',collapsed:!0},"import { Entity, RestEndpoint } from '@rest-hooks/rest';\n\nexport class ExchangeRates extends Entity {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n}\n\nexport const getExchangeRates = new RestEndpoint({\n  urlPrefix: 'https://www.coinbase.com/api/v2',\n  path: '/exchange-rates',\n  searchParams: {} as { currency: string },\n  schema: { data: ExchangeRates },\n  pollFrequency: 15000,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx" collapsed',title:'"ProfileList.tsx"',collapsed:!0},"import { useLive } from '@rest-hooks/react';\nimport { getExchangeRates } from './api/ExchangeRates';\n\nfunction AssetPrice({ symbol }: Props) {\n  const { data: price } = useLive(getExchangeRates, {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\ninterface Props {\n  symbol: string;\n}\nrender(<AssetPrice symbol=\"BTC\" />);\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/2287"},"PR #2287")),(0,a.kt)("h3",{id:"asyncboundary"},"AsyncBoundary"),(0,a.kt)("p",null,"Suspense and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/NetworkErrorBoundary"},"NetworkErrorBoundary")," are often co-located. To simplify this common\ncase we introduced ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/AsyncBoundary"},"AsyncBoundary")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5,8}","{5,8}":!0},"import { AsyncBoundary } from '@rest-hooks/react';\n\nfunction App() {\n  return (\n    <AsyncBoundary>\n      <AnotherRoute />\n      <TodoDetail id={5} />\n    </AsyncBoundary>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/2270"},"PR #2270")),(0,a.kt)("h3",{id:"managergetmiddleware-api-changes"},"Manager.getMiddleware() API changes"),(0,a.kt)("p",null,"Manager middleware has been designed to be compatible with redux. This means the original\nAPI had ",(0,a.kt)("inlineCode",{parentName:"p"},"{ dispatch, getState }")," as its arguments to the middleware."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller"},"Controller")," is a superset of this functionality, and its methods provide a more type-safe\nway of interacting with the flux lifecycle. Because of this we have moved to pass the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"whole controller"),", instead of just dispatch, and getState."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Controller {\n  /*************** Action Dispatchers ***************/\n  fetch(endpoint, ...args) => ReturnType<E>;\n  invalidate(endpoint, ...args) => Promise<void>;\n  resetEntireStore: () => Promise<void>;\n  receive(endpoint, ...args, response) => Promise<void>;\n  receiveError(endpoint, ...args, error) => Promise<void>;\n  resolve(endpoint, { args, response, fetchedAt, error }) => Promise<void>;\n  subscribe(endpoint, ...args) => Promise<void>;\n  unsubscribe(endpoint, ...args) => Promise<void>;\n  /*************** Data Access ***************/\n  getResponse(endpoint, ...args, state)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args, state)\u200b => ErrorTypes | undefined;\n  snapshot(state: State<unknown>, fetchedAt?: number): SnapshotInterface;\n  getState(): State<unknown>;\n}\n")),(0,a.kt)("p",null,"Of course existing Managers just using dispatch and/or getState will continue to work."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/2290"},"PR #2290")))}h.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);