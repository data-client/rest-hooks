(self.webpackChunk=self.webpackChunk||[]).push([[89340],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(67294),i=n(87462),l=n(49544),a=n(86010),o=n(11614),s=n(6832),c=n(99401),d=n(69762),u=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:u.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:u.Z.fixtureItem},r.createElement("div",{className:u.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:u.Z.fixtureJson},JSON.stringify(t.response))}var y=n(62974),h=n(80086),b=n(45045),v=n(76226),k=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=k.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i)){if(i.endsWith(".")||i.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{var n;const r=(null==(n=/\/\d+\//g.exec(t))?void 0:n[0])??"",i=t.substring(r.length-1);return{label:i,insertText:i.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[l,a,o,s,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),i.languages.typescript.typescriptDefaults.addExtraLib(l,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${s} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${s} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.typescriptDefaults.setEagerModelSync(!0),i}))}}const x=(0,r.memo)(v.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const Z=(0,r.memo)(l.uz);var C=n(3495).Z?function(e){let{onChange:t,code:n,path:i,autoFocus:a=!1,...o}=e;i.endsWith(".tsx")||i.endsWith(".ts")||(i+=".tsx"),function(e,t){const n=function(e){const t=(0,v.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${i}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,i]);const[s,c]=(0,r.useState)("100%"),d=(0,r.useCallback)((e=>{a&&e.focus();const t=Object.keys(o).map((e=>{var t;return null==(t=/\{(\d+)\}/.exec(e))?void 0:t[1]})).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let i=0;const l=19*e.getModel().getLineCount()+10;n.style.height=l+"px",c(l),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;i=r.childElementCount,n.style.height=t+"px",c(l),e.layout()}),0)}))}),[]);return r.createElement(x,{path:i,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:w,theme:"prism",onMount:d,height:s,loading:r.createElement(l.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(Z,{onChange:t,code:n})};function A(){return r.createElement(r.Fragment,null,O.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),P.map(((e,t)=>r.createElement("link",{key:t+O.length,rel:"prefetch",href:e,as:"script"}))))}var N=(0,r.memo)(A);const O=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.css","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/loader.js"],P=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var j;function S(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,a.Z)(u.Z.tab,{[u.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},l)})))}function D(e){let{children:t}=e;return r.createElement(y.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(S,null))}function T(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(d.Z),l=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:u.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,l?r.createElement(D,null,t):null)}function _(e){let{children:t,transformCode:n,groupId:o,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:f,...y}=e;const{liveCodeBlock:{playgroundPosition:h}}=(0,s.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,a.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(l.nu,(0,i.Z)({theme:b},y),r.createElement(L,{reverse:"top"===h,row:p,fixtures:g,includeEndpoints:f,groupId:o,defaultOpen:d},t))),r.createElement(N,null))}function L(e){let{reverse:t,children:n,row:o,fixtures:s,includeEndpoints:c,groupId:d,defaultOpen:p}=e;const m=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i,...l}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i,...l}}))),[n]),[f,y]=(0,r.useReducer)(F,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),v=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{y({i:t,code:e})}))),[g.length]),[k,E]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),x=f.join("\n");return r.createElement(I,{reverse:t},r.createElement("div",null,r.createElement(T,{fixtures:!o&&s}),o&&g.length>1?r.createElement(J,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>E((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:l,code:s,collapsed:c,...d}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(H,{onClick:()=>E((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,a.Z)(u.Z.playgroundEditor,{[u.Z.hidden]:k[t]})},r.createElement(C,(0,i.Z)({key:t,onChange:v[t],code:f[t],path:"/"+m+"/"+(l||n||"default.tsx")},d))))}))),r.createElement(b.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:c,groupId:d,defaultOpen:p,row:o,fixtures:s}))},r.createElement(R,{code:x,includeEndpoints:c,groupId:d,defaultOpen:p,row:o,fixtures:s})))}T.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},_.defaultProps={row:!1,hidden:!1};const M="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(j=navigator)?void 0:j.userAgent),R=(0,r.lazy)((()=>M?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(64359),n.e(26750)]).then(n.bind(n,41380))));function I(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function F(e,t){const n=[...e];return n[t.i]=t.code,n}function H(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(y.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,a.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),i)}function J(e){let{titles:t,closedList:n,onClick:i}=e;const{values:l}=(0,r.useContext)(d.Z),o=l.length>0;return r.createElement(y.Z,{className:(0,a.Z)({[u.Z.small]:o,[u.Z.subtabs]:o},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,a.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}I.defaultProps={reverse:!1};const V=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:l,row:a=!1,fixtures:o}=e;return r.createElement(_,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:a,hidden:i,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};V.defaultProps={defaultOpen:"n",fixtures:[]};var z=(0,r.memo)(V)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(19666),i=n(67294);function l(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),i=n(86010),l=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,i.Z)(l.Z.playgroundHeader,n,a?l.Z.clickable:null),onClick:a},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(67294),i=n(11614),l=n(27093),a=n(26127),o=n(82038),s=n(83611),c=n(39714),d=n(86010),u=n(76602),p=n(63735),m=n(45440),g=n(32041),f=n(97723),y=n(70524);function h(e){let{value:t}=e;const n="dark"===(0,y.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:l,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,l=i?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,l,m.Z.vertical)},"\u25b6")),i?r.createElement(Z,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(h,{value:t})}const Z=(0,r.memo)(w);var C=n(45045);function A(e){let{groupId:t,defaultOpen:n,row:i,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:y}=(0,u.U)(),[h,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==h&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),y(t,"y"===h?"n":"y")}),[v,t,h,y]),E=(0,r.useMemo)((()=>[new s.Z,new l.Z(a.Z)]),[]),w=!("n"===h||!i);return r.createElement(o.nq,{managers:E},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(C.Z,{fallback:r.createElement(O,null)},r.createElement(P,null))),r.createElement(x,{selectedValue:h,toggle:k})))}var N=(0,r.memo)(A);function O(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(64359),n.e(26750)]).then(n.bind(n,15929))));var j=n(62974);function S(e){let{groupId:t,defaultOpen:n,row:l,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(j.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:l,fixtures:a})))}var D=(0,r.memo)(S)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(38970);const l={React:r,...r,...i};t.Z=l},93929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),l=n(90008),a=n(86429);const o={title:"Entity Validation",sidebar_label:"Validation"},s=void 0,c={unversionedId:"getting-started/validation",id:"version-6.4/getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.4/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.4/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.4",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/6.4/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/6.4/guides/debugging"}},d={},u=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nexport const getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nexport class ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"import { getArticle, getArticleList } from './api/Article';\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState('');\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute('')} />;\n}\n\nrender(<ArticleList />);\n"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i}}]);