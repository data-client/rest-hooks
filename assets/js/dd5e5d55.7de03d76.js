(self.webpackChunk=self.webpackChunk||[]).push([[78120],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),s=n(86010),a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,o),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),s=n(67294),a=n(86010),o=n(5730),l=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:h,className:f}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[x,Z]=(0,s.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=E[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&Z(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==x&&(C(t),Z(r),null!=h&&k(h,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:S,onFocus:N,onClick:N},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,s.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return s.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},88705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65559),s=n(30433),a=n(67294);function o(e){let{children:t}=e;return a.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},a.createElement(s.Z,{value:"simple"},t[0]),a.createElement(s.Z,{value:"generics"},t[1]))}},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>J});var r=n(67294),s=n(87462),a=n(49544),o=n(86010),l=n(11614),i=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var h=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g=n(62974),y=n(80086),b=n(45045),v=n(76226),E=n(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const r=E.Z.init();r.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s))return s.endsWith(".")||s.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[a,o,l,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${i} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.javascriptDefaults.setEagerModelSync(!0),s}))}}const x=(0,r.memo)(a.uz);function Z(e){let{onChange:t,code:n,path:s}=e;return r.createElement(x,{onChange:t,code:n})}const w=(0,r.memo)(v.ZP);const C={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"12.573px",lineHeight:"18.792px"};var N=n(3495).Z?function(e){let{onChange:t,code:n,path:s}=e;s.endsWith(".tsx")||s.endsWith(".ts")||(s+=".tsx"),function(e,t){const n=function(e){const t=(0,v.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${s}`).then((e=>{console.log(e.outputFiles[0].text),t(e.outputFiles[0].text)}))}),[t,s]);const[a,o]=(0,r.useState)("100%"),l=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const s=19*e.getModel().getLineCount()+10;t.style.height=s+"px",o(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const a=19*n.childElementCount+10;r=n.childElementCount,t.style.height=a+"px",o(s),e.layout()}),0)}))}),[]);return r.createElement(w,{path:s,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:C,theme:"prism",onMount:l,height:a,loading:r.createElement(Z,{onChange:()=>{},code:n,path:s})})}:Z;function S(){return r.createElement(r.Fragment,null,L.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),_.map(((e,t)=>r.createElement("link",{key:t+L.length,rel:"prefetch",href:e,as:"script"}))))}var D=(0,r.memo)(S);const L=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"],_=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var O;function P(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},a)})))}function T(e){let{children:t}=e;return r.createElement(g.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(P,null))}function j(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),a=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(T,null,t):null)}function I(e){let{children:t,transformCode:n,groupId:l,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,s.Z)({theme:b},g),r.createElement(M,{reverse:"top"===y,row:p,fixtures:h,includeEndpoints:f,groupId:l,defaultOpen:u},t)),r.createElement(D,null))}function M(e){let{reverse:t,children:n,row:s,fixtures:l,includeEndpoints:i,groupId:c,defaultOpen:u}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s}}))),[n]),[h,f]=(0,r.useReducer)($,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>m.map(((e,t)=>e=>{f({i:t,code:e})}))),[m.length]),[v,E]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),k=h.join("\n");return r.createElement(F,{reverse:t},r.createElement("div",null,r.createElement(j,{fixtures:!s&&l}),s&&m.length>1?r.createElement(H,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>E((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:a}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(z,{onClick:()=>E((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,o.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:v[t]})},r.createElement(N,{key:t,onChange:g[t],code:h[t],path:"/"+p+"/"+(a||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:i,groupId:c,defaultOpen:u,row:s,fixtures:l}))},r.createElement(A,{code:k,includeEndpoints:i,groupId:c,defaultOpen:u,row:s,fixtures:l})))}j.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},I.defaultProps={row:!1,hidden:!1};const R="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(O=navigator)?void 0:O.userAgent),A=(0,r.lazy)((()=>R?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,41380))));function F(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function $(e,t){const n=[...e];return n[t.i]=t.code,n}function z(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(g.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function H(e){let{titles:t,closedList:n,onClick:s}=e;const{values:a}=(0,r.useContext)(u.Z),l=a.length>0;return r.createElement(g.Z,{className:(0,o.Z)({[d.Z.small]:l,[d.Z.subtabs]:l},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}F.defaultProps={reverse:!1};const V=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:o=!1,fixtures:l}=e;return r.createElement(I,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:s,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};V.defaultProps={defaultOpen:"n",fixtures:[]};var J=(0,r.memo)(V)},52393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(65559),s=n(30433),a=n(67294),o=n(13743);function l(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(s.Z,{value:"yarn"},a.createElement(o.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(s.Z,{value:"npm"},a.createElement(o.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),s=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(67294),s=n(11614),a=n(27093),o=n(26127),l=n(82038),i=n(83611),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),h=n(32041),f=n(97723),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:E,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function k(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,a=s?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),s?r.createElement(w,null):null)}var x=(0,r.memo)(k);function Z(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const w=(0,r.memo)(Z);var C=n(45045);function N(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const E=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[v,t,y,g]),k=(0,r.useMemo)((()=>[new i.Z,new a.Z(o.Z)]),[]),Z=!("n"===y||!s);return r.createElement(l.nq,{managers:k},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:Z})},r.createElement(C.Z,{fallback:r.createElement(D,null)},r.createElement(L,null))),r.createElement(x,{selectedValue:y,toggle:E})))}var S=(0,r.memo)(N);function D(){return r.createElement("div",null,"Loading...")}const L=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var _=n(62974);function O(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(_.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var P=(0,r.memo)(O)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(72887);const a={React:r,...r,...s};t.Z=a},68634:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(87462),s=(n(27378),n(3905)),a=n(90008),o=n(26008),l=(n(52393),n(88705)),i=n(83323);const c={title:"useDLE()"},u=void 0,d={unversionedId:"api/useDLE",id:"api/useDLE",title:"useDLE()",description:"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching",source:"@site/../docs/core/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/api/useDLE",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667191206,formattedLastUpdatedAt:"Oct 31, 2022",frontMatter:{title:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/api/useFetch"},next:{title:"useMeta()",permalink:"/docs/api/useMeta"}},p={},m=[{value:"Hook usage",id:"hook-usage",level:2}],h={toc:m};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching")),(0,s.kt)(l.Z,{mdxType:"GenericsTabs"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): {\n  data: Denormalize<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): {\n  data: DenormalizeNullable<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n"))),(0,s.kt)("p",null,"In case you cannot use ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#async-fallbacks"},"suspense"),", useDLE() is just like ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,s.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,s.kt)(a.Z,{fixtures:[{endpoint:new o.Z({path:"/profiles"}),args:[],response:[{id:"1",fullName:"Einstein",bio:"Smart physicist"},{id:"2",fullName:"Elon Musk",bio:"CEO of Tesla, SpaceX and owner of Twitter"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Profile.ts" collapsed',title:'"api/Profile.ts"',collapsed:!0},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Profile extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ProfileResource = createResource({\n  path: '/profiles/:id',\n  schema: Profile,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useDLE } from 'rest-hooks';\nimport { ProfileResource } from './api/Profile';\n\nfunction ProfileList(): JSX.Element {\n  const { data, loading, error } = useDLE(ProfileResource.getList);\n  if (error) return <div>Error {error.status}</div>;\n  if (loading || !data) return <>loading...</>;\n  return (\n    <div>\n      {data.map(profile => (\n        <div key={profile.pk()}>\n          <h4>{profile.fullName}</h4>\n          <p>{profile.bio}</p>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<ProfileList />);\n"))),(0,s.kt)(i.ZP,{hook:"useDLE",mdxType:"ConditionalDependencies"}))}f.isMDXComponent=!0},83323:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l});var r=n(87462),s=(n(27378),n(3905)),a=n(13743);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,s.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}l.isMDXComponent=!0},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},26008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let o=!1;try{Function()}catch(Z){o=!0}class l extends Function{constructor(e,t){let n;return o?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var i=n(92586);const c={};const u={};const d=Object.prototype,p=Object.getPrototypeOf;class m extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const o=`${a}`,[l,i,c]=n(t.get(o),e[o]);return i||(r=!1),c&&(s=!0),t.has(o)?t.set(o,l):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[o,l,i]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=o),i&&(a=!0),l||(s=!1)})),[r,s,a]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const o=this.inferSchema(e,t,n);if(!o)return e;const l=r(e,t,n,o,s,a);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const o=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return o.map(((e,o)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,o)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],i=s(t[n],t,n,r,a,o);null==i?delete l[n]:l[n]=i})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];return{[e.key(...t(...a))]:e=>{const t=v(e,n),s=new Set(t),a=v(r,n).filter((e=>!s.has(e))),o=[...t,...a];return E(e,n,o)}}}}const v=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},E=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var k=(0,s.Z)("hasBody");class x extends l{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,k)[k]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,k)[k]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,k,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,k)[k]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,k)[k]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,i.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,i.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&p(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new m(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}}}]);