(self.webpackChunk=self.webpackChunk||[]).push([[80462],{29237:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(90008);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},l=void 0,i={unversionedId:"guides/nested-response",id:"version-5.1/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/rest_versioned_docs/version-5.1/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/5.1/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"docs",previous:{title:"Mocking unfinished endpoints",permalink:"/rest/5.1/guides/mocking-unfinished"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/5.1/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useSuspense(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema: { [k: string]: Schema } = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},90008:(e,t,r)=>{"use strict";r.d(t,{Z:()=>$});var n=r(67294),o=r(87462),s=r(49544),a=r(86010),l=r(11614),i=r(6832),c=r(99401),u=r(69762),d=r(45440),p=r(13743);function m(e){let{fixtures:t}=e;return n.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},n.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),n.createElement(g,{fixture:e})))))}var f=(0,n.memo)(m);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":n.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var h=r(62974),y=r(80086),b=r(45045),v=r(76226),k=r(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const n=k.Z.init();n.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const o=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{var r;const n=(null==(r=/\/\d+\//g.exec(t))?void 0:r[0])??"",o=t.substring(n.length-1);return{label:o,insertText:o.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const o=r.value,[s,a,l,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,r)=>{const n=e[r];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(n)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const x=(0,n.memo)(v.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const Z=(0,n.memo)(s.uz);var C=r(3495).Z?function(e){let{onChange:t,code:r,path:o,autoFocus:a=!1,...l}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx"),function(e,t){const r=function(e){const t=(0,v.Ik)(),r=(0,n.useRef)();return(0,n.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{r.current=e}))}),[t]),r}();(0,n.useCallback)((function(){r.current&&e(r.current)}),t)}((e=>{e.getEmitOutput(`file:///${o}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,o]);const[i,c]=(0,n.useState)("100%"),u=(0,n.useCallback)((e=>{a&&e.focus();const t=Object.keys(l).map((e=>{var t;return null==(t=/\{(\d+)\}/.exec(e))?void 0:t[1]})).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const r=e.getDomNode(),n=r.getElementsByClassName("view-lines")[0];let o=0;const s=19*e.getModel().getLineCount()+10;r.style.height=s+"px",c(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*n.childElementCount+10;o=n.childElementCount,r.style.height=t+"px",c(s),e.layout()}),0)}))}),[]);return n.createElement(x,{path:o,defaultLanguage:"typescript",onChange:t,defaultValue:r,options:w,theme:"prism",onMount:u,height:i,loading:n.createElement(s.uz,{language:"tsx",code:r,disabled:!0})})}:function(e){let{onChange:t,code:r}=e;return n.createElement(Z,{onChange:t,code:r})};function R(){return n.createElement(n.Fragment,null,n.createElement("script",{dangerouslySetInnerHTML:{__html:O},type:"application/javascript"}))}var N=(0,n.memo)(R);const O=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var S;function j(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(u.Z);return n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:s}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},s)})))}function P(e){let{children:t}=e;return n.createElement(h.Z,{className:d.Z.tabControls},n.createElement("div",{className:d.Z.title},t),n.createElement(j,null))}function _(e){let{title:t,fixtures:r}=e;const{values:o}=(0,n.useContext)(u.Z),s=o.length>0;return n.createElement(n.Fragment,null,r.length?n.createElement(n.Fragment,null,n.createElement(h.Z,{className:d.Z.small},"Fixtures"),n.createElement(f,{fixtures:r})):null,s?n.createElement(P,null,t):null)}function M(e){let{children:t,transformCode:r,groupId:l,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:g,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,b=(0,c.p)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,a.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},n.createElement(s.nu,(0,o.Z)({theme:b},h),n.createElement(T,{reverse:"top"===y,row:p,fixtures:f,includeEndpoints:g,groupId:l,defaultOpen:u},t))),n.createElement(N,null))}function T(e){let{reverse:t,children:r,row:l,fixtures:i,includeEndpoints:c,groupId:u,defaultOpen:p}=e;const m=(0,n.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),f=(0,n.useMemo)((()=>"string"==typeof r?[{code:r.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(r)?r:[r]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:o,...s}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:o,...s}}))),[r]),[g,h]=(0,n.useReducer)(A,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),v=(0,n.useMemo)((()=>f.map(((e,t)=>e=>{h({i:t,code:e})}))),[f.length]),[k,E]=(0,n.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t})))),x=g.join("\n");return n.createElement(D,{reverse:t},n.createElement("div",null,n.createElement(_,{fixtures:!l&&i}),l&&f.length>1?n.createElement(F,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>E((t=>t.map(((t,r)=>r!==e))))}):null,f.map(((e,t)=>{let{title:r,path:s,code:i,collapsed:c,...u}=e;return n.createElement(n.Fragment,{key:t},!l&&r?n.createElement(U,{onClick:()=>E((e=>{const r=[...e];return r[t]=!r[t],r})),closed:k[t],title:r}):null,n.createElement("div",{key:t,className:(0,a.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:k[t]})},n.createElement(C,(0,o.Z)({key:t,onChange:v[t],code:g[t],path:"/"+m+"/"+(s||r||"default.tsx")},u))))}))),n.createElement(b.Z,{fallback:n.createElement(s.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(y.Z,{key:"preview",includeEndpoints:c,groupId:u,defaultOpen:p,row:l,fixtures:i}))},n.createElement(L,{code:x,includeEndpoints:c,groupId:u,defaultOpen:p,row:l,fixtures:i})))}_.defaultProps={title:n.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},M.defaultProps={row:!1,hidden:!1};const I="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(S=navigator)?void 0:S.userAgent),L=(0,n.lazy)((()=>I?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,41380))));function D(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}function A(e,t){const r=[...e];return r[t.i]=t.code,r}function U(e){let{onClick:t,closed:r,title:o}=e;return n.createElement(h.Z,{className:d.Z.small,onClick:t},n.createElement("span",{className:(0,a.Z)(d.Z.arrow,r?d.Z.right:d.Z.down)},"\u25b6"),o)}function F(e){let{titles:t,closedList:r,onClick:o}=e;const{values:s}=(0,n.useContext)(u.Z),l=s.length>0;return n.createElement(h.Z,{className:(0,a.Z)({[d.Z.small]:l,[d.Z.subtabs]:l},d.Z.noupper,d.Z.tabControls)},n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>n.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:!r[t]})},e)))))}D.defaultProps={reverse:!1};const H=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:s,row:a=!1,fixtures:l}=e;return n.createElement(M,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:s,row:a,hidden:o,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};H.defaultProps={defaultOpen:"n",fixtures:[]};var $=(0,n.memo)(H)},45045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(19666),o=r(67294);function s(e){let{fallback:t,children:r}=e;return o.createElement(n.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},r)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),o=r(86010),s=r(45440);function a(e){let{children:t,className:r,onClick:a}=e;return n.createElement("div",{className:(0,o.Z)(s.Z.playgroundHeader,r,a?s.Z.clickable:null),onClick:a},t)}},80086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(67294),o=r(11614),s=r(92785),a=r(92954),l=r(48256),i=r(3604),c=r(39714),u=r(86010),d=r(76602),p=r(63735),m=r(45440),f=r(29451),g=r(97723),h=r(70524);function y(e){let{value:t}=e;const r="dark"===(0,h.I)().colorMode,o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[r,o]);return n.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:s,hideRoot:!0})}function b(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const r=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:r}=e;const o="y"===r,s=o?m.Z.right:m.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,u.Z)(m.Z.arrow,s,m.Z.vertical)},"\u25b6")),o?n.createElement(Z,null):null)}var x=(0,n.memo)(E);function w(){const e=(0,n.useContext)(f.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(y,{value:t})}const Z=(0,n.memo)(w);var C=r(45045);function R(e){let{groupId:t,defaultOpen:r,row:o,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,d.U)(),[y,b]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,n.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),E=(0,n.useMemo)((()=>[new s.Z,new a.Z(l.Z)]),[]),w=!("n"===y||!o);return n.createElement(i.Z,{managers:E},n.createElement(c.Z,{fixtures:f,silenceMissing:!0},n.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},n.createElement(C.Z,{fallback:n.createElement(O,null)},n.createElement(S,null))),n.createElement(x,{selectedValue:y,toggle:k})))}var N=(0,n.memo)(R);function O(){return n.createElement("div",null,"Loading...")}const S=(0,n.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,15929))));var j=r(62974);function P(e){let{groupId:t,defaultOpen:r,row:s,fixtures:a}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(j.Z,null,n.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:m.Z.playgroundResult},n.createElement(N,{groupId:t,defaultOpen:r,row:s,fixtures:a})))}var _=(0,n.memo)(P)},3495:(e,t)=>{"use strict";const r="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=r},57489:(e,t,r)=>{"use strict";var n=r(67294),o=r(64820);const s={React:n,...n,...o};t.Z=s},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r.t(o,23)))}o.keys=()=>Object.keys(n),o.id=73795,e.exports=o}}]);