(self.webpackChunk=self.webpackChunk||[]).push([[80462],{29237:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(28423);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},l=void 0,i={unversionedId:"guides/nested-response",id:"version-5.1/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/rest_versioned_docs/version-5.1/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/5.1/guides/nested-response",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"docs",previous:{title:"Mocking unfinished endpoints",permalink:"/rest/5.1/guides/mocking-unfinished"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/5.1/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useSuspense(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema: { [k: string]: Schema } = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},28423:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(67294),o=r(87462),s=r(99401),a=r(6832),l=r(86010),i=r(49544),c=r(45045);function u(){return n.createElement(n.Fragment,null,n.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,n.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=r(24338),g=r(80086),f=r(45440);function h(e){let{children:t,transformCode:r,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:g,includeEndpoints:h,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,a.Z)().siteConfig.themeConfig,k=(0,s.p)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},n.createElement(i.nu,(0,o.Z)({theme:k},b),n.createElement(y,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:c,defaultOpen:u},t))),n.createElement(d,null))}function y(e){let{reverse:t,children:r,row:o,fixtures:s,includeEndpoints:a,groupId:l,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:f}=(0,m.h)(r),h=p.join("\n");return n.createElement(k,{reverse:t},n.createElement(m.L,{fixtures:s,row:o,codeTabs:f,handleCodeChange:d,codes:p}),n.createElement(c.Z,{fallback:n.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(g.Z,{key:"preview",includeEndpoints:a,groupId:l,defaultOpen:u,row:o,fixtures:s}))},n.createElement(v,{code:h,includeEndpoints:a,groupId:l,defaultOpen:u,row:o,fixtures:s})))}h.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,n.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(92765),r.e(26750)]).then(r.bind(r,41380))));function k(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}k.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:s,row:a=!1,fixtures:l}=e;return n.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:s,row:a,hidden:o,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,n.memo)(E)},45045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(19666),o=r(67294);function s(e){let{fallback:t,children:r}=e;return o.createElement(n.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},r)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),o=r(86010),s=r(45440);function a(e){let{children:t,className:r,onClick:a}=e;return n.createElement("div",{className:(0,o.Z)(s.Z.playgroundHeader,r,a?s.Z.clickable:null),onClick:a},t)}},24338:(e,t,r)=>{"use strict";r.d(t,{L:()=>N,h:()=>R});var n=r(87462),o=r(11614),s=r(86010),a=r(67294),l=r(13743),i=r(45440);function c(e){let{fixtures:t}=e;return a.createElement("div",{className:i.Z.fixtureBlock},t.map(((e,t)=>a.createElement(p,{key:t,fixture:e}))))}var u=(0,a.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?a.createElement(l.Z,{language:"javascript",className:i.Z.fixtureJson},`${t.response}`):a.createElement(l.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?a.createElement("div",{key:t.endpoint.key(...t.args),className:i.Z.fixtureItem},a.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.key(...t.args)),a.createElement(d,{fixture:t})):a.createElement("div",{className:i.Z.fixtureItem},a.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),a.createElement(d,{fixture:t}))}var m=r(62974),g=r(49544);const f=(0,a.memo)(g.uz);var h=r(76226),y=r(87594),b=r.n(y),v=r(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const n=v.Z.init();n.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const o=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const r=/\/\d+\//g.exec(t)?.[0]??"",n=t.substring(r.length-1);return{label:n,insertText:n.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const o=r.value,[s,a,l,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,r)=>{const n=e[r];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(n)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const E=(0,a.memo)(h.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...x,fontSize:14,lineHeight:20};var C=r(3495).Z?function(e){let{onChange:t,code:r,path:n,autoFocus:o=!1,large:s=!1,...l}=e;const i=s?w:x;n.endsWith(".tsx")||n.endsWith(".ts")||(n+=".tsx");const[c,u]=(0,a.useState)("100%"),d=(0,a.useCallback)((e=>{o&&e.focus();const t=Object.keys(l).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let r=t[0][0],n=r;const o=[];t[0].forEach((e=>{e===n?n++:(o.push({selectionStartLineNumber:r,selectionStartColumn:0,positionLineNumber:n,positionColumn:0}),r=e,n=e+1)})),o.push({selectionStartLineNumber:r,selectionStartColumn:0,positionLineNumber:n,positionColumn:0}),e.setSelections(o)}const r=i.lineHeight,n=e.getDomNode(),s=n.getElementsByClassName("view-lines")[0];let a=0;const c=e.getModel().getLineCount()*r+10;return n.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??s.childElementCount)*r+10;a=s.childElementCount,n.style.height=t+"px",u(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return a.createElement(E,{path:n,defaultLanguage:"typescript",onChange:t,defaultValue:r,options:i,theme:"prism",onMount:d,height:c,loading:a.createElement(g.uz,{language:"tsx",code:r,disabled:!0})})}:function(e){let{onChange:t,code:r}=e;return a.createElement(f,{onChange:t,code:r})},Z=r(69762);function N(e){let{fixtures:t,row:r,codeTabs:o,handleCodeChange:l,codes:c,large:u=!1,isPlayground:d=!0}=e;const p=(0,a.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,a.useState)((()=>o.map((e=>{let{collapsed:t}=e;return t}))));return a.createElement("div",null,a.createElement(M,{fixtures:r?[]:t,title:r&&1===o.length?o[0].title:void 0}),r&&o.length>1?a.createElement(P,{titles:o.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,r)=>r!==e)))),isPlayground:d}):null,o.map(((e,d)=>{let{title:f,path:h,code:y,collapsed:b,...v}=e;return a.createElement(a.Fragment,{key:d},!r&&f?a.createElement(O,{onClick:()=>g((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:f,collapsible:o.length>1||t?.length,lastChild:d===o.length-1&&u}):null,a.createElement("div",{key:d,className:(0,s.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},a.createElement(C,(0,n.Z)({key:d,onChange:l[d],code:c[d],path:"/"+p+"/"+(h||f||"default.tsx")},v,{large:u}))))})))}function R(e){const t=(0,a.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:o,...s}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:o,...s}}))),[e]),[r,n]=(0,a.useReducer)(S,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,a.useMemo)((()=>t.map(((e,t)=>e=>{n({i:t,code:e})}))),[t.length]),codes:r,codeTabs:t}}function S(e,t){const r=[...e];return r[t.i]=t.code,r}function O(e){let{onClick:t,closed:r,title:n,collapsible:o=!1,lastChild:l=!1}=e;return o?a.createElement(m.Z,{className:(0,s.Z)(i.Z.small,{[i.Z.lastChild]:l&&r}),onClick:t},a.createElement("span",{className:(0,s.Z)(i.Z.arrow,r?i.Z.right:i.Z.down)},"\u25b6"),n):a.createElement("div",{className:i.Z.codeHeader},n)}function P(e){let{titles:t,closedList:r,onClick:n,isPlayground:o=!0}=e;const{values:l}=(0,a.useContext)(Z.Z),c=l.length>0;return a.createElement(m.Z,{className:(0,s.Z)({[i.Z.small]:c||!o,[i.Z.subtabs]:c},i.Z.noupper,i.Z.tabControls)},a.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>a.createElement("div",{role:"tab",key:t,onClick:()=>n(t),className:(0,s.Z)(i.Z.tab,{[i.Z.selected]:!r[t]})},e)))))}function _(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,a.useContext)(Z.Z);return a.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:n,label:o}=r;return a.createElement("div",{role:"tab",tabIndex:e===n?0:-1,"aria-selected":e===n,key:n,className:(0,s.Z)(i.Z.tab,{[i.Z.selected]:e===n}),onFocus:t,onClick:t,value:n},o)})))}function j(e){let{children:t}=e;return a.createElement(m.Z,{className:i.Z.tabControls},a.createElement("div",{className:i.Z.title},t),a.createElement(_,null))}function M(e){let{title:t,fixtures:r=[]}=e;const{values:n}=(0,a.useContext)(Z.Z),o=n.length>0;return a.createElement(a.Fragment,null,r.length?a.createElement(a.Fragment,null,a.createElement(m.Z,{className:i.Z.small},"Fixtures"),a.createElement(u,{fixtures:r})):null,o?a.createElement(j,null,t):null)}M.defaultProps={title:a.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(11614),o=r(67294),s=r(62974),a=r(63735),l=r(78871),i=r(86010),c=r(92785),u=r(92954),d=r(48256),p=r(3604),m=r(45045),g=r(29451),f=r(70524),h=r(287);function y(e){let{value:t}=e;const r="dark"===(0,f.I)().colorMode,n=(0,o.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,o.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:n[t]}}},base0B:"rgb(191, 199, 213)"})),[r,n]),a=(0,o.useMemo)(b,[]);return o.createElement(h.L,{shouldExpandNodeInitially:a,data:t,valueRenderer:k,theme:s,hideRoot:!0})}const b=()=>{let e=0;return(t,r,n)=>0===n||(!(1!==n||!["entities","results"].includes(t[0]))||(2===n&&"entities"===t[1]||(2===n&&"results"===t[1]||(3===n&&"entities"===t[2]?e++<4:3===n&&"results"===t[2]))))},v="undefined"!=typeof Intl;function k(e,t){const r=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=r(45440);function x(e){let{toggle:t,selectedValue:r}=e;const n="y"===r,s=n?E.Z.right:E.Z.left;return o.createElement(o.Fragment,null,o.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",o.createElement("span",{className:(0,i.Z)(E.Z.arrow,s,E.Z.vertical)},"\u25b6")),n?o.createElement(Z,null):null)}var w=(0,o.memo)(x);function C(){const e=(0,o.useContext)(g.sA),t=(0,o.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return o.createElement(y,{value:t})}const Z=(0,o.memo)(C);var N=r(32295);function R(e){let{groupId:t,defaultOpen:r,row:n,fixtures:s}=e;const[g,f]=(0,N.X)(`docusaurus.tab.${t}`),[h,y]=(0,o.useState)(r),{blockElementScrollPositionUntilNextRender:b}=(0,a.o5)();null!=g&&g!==h&&y(g);const v=(0,o.useCallback)((e=>{b(e.currentTarget),y((e=>"y"===e?"n":"y")),f("y"===h?"n":"y")}),[b,h,f]),k=(0,o.useMemo)((()=>[new c.Z,new u.Z(d.Z)]),[]),x=!("n"===h||!n);return o.createElement(p.Z,{managers:k},o.createElement(l.Z,{fixtures:s,silenceMissing:!0},o.createElement("div",{className:(0,i.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:x})},o.createElement(m.Z,{fallback:o.createElement(O,null)},o.createElement(P,null))),o.createElement(w,{selectedValue:h,toggle:v})))}var S=(0,o.memo)(R);function O(){return o.createElement("div",null,"Loading...")}const P=(0,o.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(92765),r.e(26750)]).then(r.bind(r,15929))));function _(e){let{groupId:t,defaultOpen:r,row:a,fixtures:l}=e;return o.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},o.createElement(s.Z,null,o.createElement(n.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),o.createElement("div",{className:E.Z.playgroundResult},o.createElement(S,{groupId:t,defaultOpen:r,row:a,fixtures:l})))}var j=(0,o.memo)(_)},3495:(e,t)=>{"use strict";const r="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=r},57489:(e,t,r)=>{"use strict";var n=r(67294),o=r(64820);const s={React:n,...n,...o};t.Z=s},32295:(e,t,r)=>{"use strict";r.d(t,{X:()=>s});var n=r(99200),o=r(67294);function s(e){const t=a(e),[r,s]=(0,n.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}const a=e=>`docusaurus.tab.${e}`},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r.t(o,23)))}o.keys=()=>Object.keys(n),o.id=73795,e.exports=o}}]);