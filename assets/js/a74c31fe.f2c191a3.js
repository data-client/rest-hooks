(self.webpackChunk=self.webpackChunk||[]).push([[4149],{82997:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(28423),s=n(86429);const i={title:"Entities with nested structure",sidebar_label:"Nesting related data"},l=void 0,c={unversionedId:"guides/nested-response",id:"version-6.0/guides/nested-response",title:"Entities with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/rest_versioned_docs/version-6.0/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/6.0/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"Entities with nested structure",sidebar_label:"Nesting related data"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/rest/6.0/guides/abort"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/6.0/guides/rpc"}},d={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity"},"Entity")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new s.Z({urlPrefix:"http://fakeapi.com",path:"/article/:id"}),args:[{id:"5"}],response:{id:"5",author:{id:"123",name:"Jim"},content:"Happy day",contributors:[{id:"100",name:"Eliza"}]},delay:150}],mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Post.ts"',title:'"api/Post.ts"'},"export class User extends Entity {\n  id = '';\n  name = '';\n  pk() {\n    return this.id;\n  }\n}\nexport class Post extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly author: User = User.fromJS({});\n  readonly content: string = '';\n  readonly contributors: User[] = [];\n\n  static schema = {\n    author: User,\n    contributors: [User],\n  };\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const getPost = new RestEndpoint({\n  urlPrefix: 'http://fakeapi.com',\n  path: '/article/:id',\n  schema: Post,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostPage.tsx" collapsed',title:'"PostPage.tsx"',collapsed:!0},"import { getPost } from './api/Post';\n\nfunction PostPage() {\n  const post = useSuspense(getPost, { id: '5' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity"},"Entities")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity"},"Entities")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport { User } from './User';\n\nexport class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: User = User.fromJS({});\n  readonly contributors: User[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema: { [k: string]: Schema } = {\n    author: User,\n    contributors: [User],\n  };\n}\n\n// we set the schema here since we can correctly reference Article\n// highlight-start\nUser.schema = {\n  posts: [Article],\n};\n// highlight-end\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/User.ts"',title:'"api/User.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport type { Article } from './Article';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport class User extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: Article[] = [];\n  readonly createdAt: Date = new Date(0);\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema: Record<string, Schema | Date> = {\n    createdAt: Date,\n  };\n}\n")))}m.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),o=n(87462),a=n(99401),s=n(6832),i=n(86010),l=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var u=(0,r.memo)(d);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),f=n(45440);function h(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:h,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,E=(0,a.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(l.nu,(0,o.Z)({theme:E},b),r.createElement(y,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function y(e){let{reverse:t,children:n,row:o,fixtures:a,includeEndpoints:s,groupId:i,defaultOpen:d}=e;const{handleCodeChange:u,codes:p,codeTabs:f}=(0,m.h)(n),h=p.join("\n");return r.createElement(E,{reverse:t},r.createElement(m.L,{fixtures:a,row:o,codeTabs:f,handleCodeChange:u,codes:p}),r.createElement(c.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:s,groupId:i,defaultOpen:d,row:o,fixtures:a}))},r.createElement(v,{code:h,includeEndpoints:s,groupId:i,defaultOpen:d,row:o,fixtures:a})))}h.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function E(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}E.defaultProps={reverse:!1};const k=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:s=!1,fixtures:i}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:s,hidden:o,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};k.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(k)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n(86010),a=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,s?a.Z.clickable:null),onClick:s},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>N,h:()=>P});var r=n(87462),o=n(11614),a=n(86010),s=n(67294),i=n(13743),l=n(45440);function c(e){let{fixtures:t}=e;return s.createElement("div",{className:l.Z.fixtureBlock},t.map(((e,t)=>s.createElement(p,{key:t,fixture:e}))))}var d=(0,s.memo)(c);function u(e){let{fixture:t}=e;return"function"==typeof t.response?s.createElement(i.Z,{language:"javascript",className:l.Z.fixtureJson},`${t.response}`):s.createElement(i.Z,{language:"json",className:l.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?s.createElement("div",{key:t.endpoint.key(...t.args),className:l.Z.fixtureItem},s.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.key(...t.args)),s.createElement(u,{fixture:t})):s.createElement("div",{className:l.Z.fixtureItem},s.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),s.createElement(u,{fixture:t}))}var m=n(62974),g=n(49544);const f=(0,s.memo)(g.uz);var h=n(76226),y=n(87594),b=n.n(y),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const o=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const o=n.value,[a,s,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${s} }`),c.forEach(((t,n)=>{const r=e[n];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const k=(0,s.memo)(h.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...x,fontSize:14,lineHeight:20};var C=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:o=!1,large:a=!1,...i}=e;const l=a?w:x;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,s.useState)("100%"),u=(0,s.useCallback)((e=>{o&&e.focus();const t=Object.keys(i).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let n=t[0][0],r=n;const o=[];t[0].forEach((e=>{e===r?r++:(o.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),o.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(o)}const n=l.lineHeight,r=e.getDomNode(),a=r.getElementsByClassName("view-lines")[0];let s=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??a.childElementCount)*n+10;s=a.childElementCount,r.style.height=t+"px",d(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return s.createElement(k,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:l,theme:"prism",onMount:u,height:c,loading:s.createElement(g.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return s.createElement(f,{onChange:t,code:n})},Z=n(69762);function N(e){let{fixtures:t,row:n,codeTabs:o,handleCodeChange:i,codes:c,large:d=!1,isPlayground:u=!0}=e;const p=(0,s.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,s.useState)((()=>o.map((e=>{let{collapsed:t}=e;return t}))));return s.createElement("div",null,s.createElement(L,{fixtures:n?[]:t,title:n&&1===o.length?o[0].title:void 0}),n&&o.length>1?s.createElement(_,{titles:o.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:u}):null,o.map(((e,u)=>{let{title:f,path:h,code:y,collapsed:b,...v}=e;return s.createElement(s.Fragment,{key:u},!n&&f?s.createElement(O,{onClick:()=>g((e=>{const t=[...e];return t[u]=!t[u],t})),closed:m[u],title:f,collapsible:o.length>1||t?.length,lastChild:u===o.length-1&&d}):null,s.createElement("div",{key:u,className:(0,a.Z)(l.Z.playgroundEditor,{[l.Z.hidden]:m[u]})},s.createElement(C,(0,r.Z)({key:u,onChange:i[u],code:c[u],path:"/"+p+"/"+(h||f||"default.tsx")},v,{large:d}))))})))}function P(e){const t=(0,s.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:o,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:o,...a}}))),[e]),[n,r]=(0,s.useReducer)(S,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,s.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function S(e,t){const n=[...e];return n[t.i]=t.code,n}function O(e){let{onClick:t,closed:n,title:r,collapsible:o=!1,lastChild:i=!1}=e;return o?s.createElement(m.Z,{className:(0,a.Z)(l.Z.small,{[l.Z.lastChild]:i&&n}),onClick:t},s.createElement("span",{className:(0,a.Z)(l.Z.arrow,n?l.Z.right:l.Z.down)},"\u25b6"),r):s.createElement("div",{className:l.Z.codeHeader},r)}function _(e){let{titles:t,closedList:n,onClick:r,isPlayground:o=!0}=e;const{values:i}=(0,s.useContext)(Z.Z),c=i.length>0;return s.createElement(m.Z,{className:(0,a.Z)({[l.Z.small]:c||!o,[l.Z.subtabs]:c},l.Z.noupper,l.Z.tabControls)},s.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>s.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:!n[t]})},e)))))}function j(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,s.useContext)(Z.Z);return s.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:o}=n;return s.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},o)})))}function M(e){let{children:t}=e;return s.createElement(m.Z,{className:l.Z.tabControls},s.createElement("div",{className:l.Z.title},t),s.createElement(j,null))}function L(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,s.useContext)(Z.Z),o=r.length>0;return s.createElement(s.Fragment,null,n.length?s.createElement(s.Fragment,null,s.createElement(m.Z,{className:l.Z.small},"Fixtures"),s.createElement(d,{fixtures:n})):null,o?s.createElement(M,null,t):null)}L.defaultProps={title:s.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(11614),o=n(67294),a=n(62974),s=n(76602),i=n(63735),l=n(78871),c=n(86010),d=n(92785),u=n(92954),p=n(48256),m=n(3604),g=n(45045),f=n(29451),h=n(70524),y=n(287);function b(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,r=(0,o.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,o.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),s=(0,o.useMemo)(v,[]);return o.createElement(y.L,{shouldExpandNodeInitially:s,data:t,valueRenderer:k,theme:a,hideRoot:!0})}const v=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},E="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return E&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var x=n(45440);function w(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,a=r?x.Z.right:x.Z.left;return o.createElement(o.Fragment,null,o.createElement("div",{className:x.Z.debugToggle,onClick:t},"Store",o.createElement("span",{className:(0,c.Z)(x.Z.arrow,a,x.Z.vertical)},"\u25b6")),r?o.createElement(N,null):null)}var C=(0,o.memo)(w);function Z(){const e=(0,o.useContext)(f.sA),t=(0,o.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return o.createElement(b,{value:t})}const N=(0,o.memo)(Z);function P(e){let{groupId:t,defaultOpen:n,row:r,fixtures:a}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,s.U)(),[y,b]=(0,o.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,i.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const E=(0,o.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),k=(0,o.useMemo)((()=>[new d.Z,new u.Z(p.Z)]),[]),w=!("n"===y||!r);return o.createElement(m.Z,{managers:k},o.createElement(l.Z,{fixtures:a,silenceMissing:!0},o.createElement("div",{className:(0,c.Z)(x.Z.playgroundPreview,{[x.Z.hidden]:w})},o.createElement(g.Z,{fallback:o.createElement(O,null)},o.createElement(_,null))),o.createElement(C,{selectedValue:y,toggle:E})))}var S=(0,o.memo)(P);function O(){return o.createElement("div",null,"Loading...")}const _=(0,o.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function j(e){let{groupId:t,defaultOpen:n,row:s,fixtures:i}=e;return o.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},o.createElement(a.Z,null,o.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),o.createElement("div",{className:x.Z.playgroundResult},o.createElement(S,{groupId:t,defaultOpen:n,row:s,fixtures:i})))}var M=(0,o.memo)(j)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),o=n(64820);const a={React:r,...r,...o};t.Z=a},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,23)))}o.keys=()=>Object.keys(r),o.id=73795,e.exports=o}}]);