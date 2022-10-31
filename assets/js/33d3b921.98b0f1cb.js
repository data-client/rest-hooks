(self.webpackChunk=self.webpackChunk||[]).push([[40612],{75621:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),o=n(90008),i=n(26008);const a={title:"Entities with nested structure",sidebar_label:"Nesting related data"},l=void 0,c={unversionedId:"guides/nested-response",id:"guides/nested-response",title:"Entities with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/../docs/rest/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666925835,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"Entities with nested structure",sidebar_label:"Nesting related data"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/rest/guides/abort"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/guides/rpc"}},u={},d=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,s.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," definition.\nThese should be the primary keys of the entities we care about."),(0,s.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"schema")," member."),(0,s.kt)("h2",{id:"static-schema"},"static schema"),(0,s.kt)(o.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({urlPrefix:"http://fakeapi.com",path:"/article/:id"}),args:[{id:"5"}],response:{id:"5",author:{id:"123",name:"Jim"},content:"Happy day",contributors:[{id:"100",name:"Eliza"}]},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Post.ts"',title:'"api/Post.ts"'},"export class User extends Entity {\n  id = '';\n  name = '';\n  pk() {\n    return this.id;\n  }\n}\nexport class Post extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly author: User = User.fromJS({});\n  readonly content: string = '';\n  readonly contributors: User[] = [];\n\n  static schema = {\n    author: User,\n    contributors: [User],\n  };\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const getPost = new RestEndpoint({\n  urlPrefix: 'http://fakeapi.com',\n  path: '/article/:id',\n  schema: Post,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostPage.tsx" collapsed',title:'"PostPage.tsx"',collapsed:!0},"import { getPost } from './api/Post';\n\nfunction PostPage() {\n  const post = useSuspense(getPost, { id: '5' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,s.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,s.kt)("p",null,"If both ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," are in distinct files, this must be handled with care."),(0,s.kt)("p",null,"If two or more ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," include each other in their schema, you can dynamically override\none of their ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"schema")," to avoid circular imports."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport { User } from './User';\n\nexport class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: User = User.fromJS({});\n  readonly contributors: User[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema: { [k: string]: Schema } = {\n    author: User,\n    contributors: [User],\n  };\n}\n\n// we set the schema here since we can correctly reference Article\n// highlight-start\nUser.schema = {\n  posts: [Article],\n};\n// highlight-end\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/User.ts"',title:'"api/User.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport type { Article } from './Article';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport class User extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: Article[] = [];\n  readonly createdAt: Date = new Date(0);\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema: Record<string, Schema | Date> = {\n    createdAt: Date,\n  };\n}\n")))}m.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(67294),s=n(87462),o=n(49544),i=n(86010),a=n(11614),l=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var h=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g=n(62974),y=n(80086),b=n(45045),v=n(76226),E=n(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const r=E.Z.init();r.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s))return s.endsWith(".")||s.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[o,i,a,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${i} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${a} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.javascriptDefaults.setEagerModelSync(!0),s}))}}const x=(0,r.memo)(o.uz);function w(e){let{onChange:t,code:n,path:s}=e;return r.createElement(x,{onChange:t,code:n})}const Z=(0,r.memo)(v.ZP);const C={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"12.573px",lineHeight:"18.792px"};var S=n(3495).Z?function(e){let{onChange:t,code:n,path:s}=e;s.endsWith(".tsx")||s.endsWith(".ts")||(s+=".tsx"),function(e,t){const n=function(e){const t=(0,v.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${s}`).then((e=>{console.log(e.outputFiles[0].text),t(e.outputFiles[0].text)}))}),[t,s]);const[o,i]=(0,r.useState)("100%"),a=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const s=19*e.getModel().getLineCount()+10;t.style.height=s+"px",i(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const o=19*n.childElementCount+10;r=n.childElementCount,t.style.height=o+"px",i(s),e.layout()}),0)}))}),[]);return r.createElement(Z,{path:s,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:C,theme:"prism",onMount:a,height:o,loading:r.createElement(w,{onChange:()=>{},code:n,path:s})})}:w;function N(){return r.createElement(r.Fragment,null,P.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),O.map(((e,t)=>r.createElement("link",{key:t+P.length,rel:"prefetch",href:e,as:"script"}))))}var _=(0,r.memo)(N);const P=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"],O=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var j;function A(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},o)})))}function I(e){let{children:t}=e;return r.createElement(g.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(A,null))}function M(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),o=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,o?r.createElement(I,null,t):null)}function R(e){let{children:t,transformCode:n,groupId:a,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,i.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(o.nu,(0,s.Z)({theme:b},g),r.createElement(L,{reverse:"top"===y,row:p,fixtures:h,includeEndpoints:f,groupId:a,defaultOpen:u},t)),r.createElement(_,null))}function L(e){let{reverse:t,children:n,row:s,fixtures:a,includeEndpoints:l,groupId:c,defaultOpen:u}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s}}))),[n]),[h,f]=(0,r.useReducer)(F,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>m.map(((e,t)=>e=>{f({i:t,code:e})}))),[m.length]),[v,E]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),k=h.join("\n");return r.createElement(U,{reverse:t},r.createElement("div",null,r.createElement(M,{fixtures:!s&&a}),s&&m.length>1?r.createElement(J,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>E((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:o}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement($,{onClick:()=>E((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,i.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:v[t]})},r.createElement(S,{key:t,onChange:g[t],code:h[t],path:"/"+p+"/"+(o||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(o.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:a}))},r.createElement(D,{code:k,includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:a})))}M.defaultProps={title:r.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},R.defaultProps={row:!1,hidden:!1};const T="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(j=navigator)?void 0:j.userAgent),D=(0,r.lazy)((()=>T?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,41380))));function U(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function F(e,t){const n=[...e];return n[t.i]=t.code,n}function $(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(g.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function J(e){let{titles:t,closedList:n,onClick:s}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(g.Z,{className:(0,i.Z)({[d.Z.small]:a,[d.Z.subtabs]:a},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}U.defaultProps={reverse:!1};const z=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:o,row:i=!1,fixtures:a}=e;return r.createElement(R,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:i,hidden:s,fixtures:a},"string"==typeof t||Array.isArray(t)?t:t.props.children)};z.defaultProps={defaultOpen:"n",fixtures:[]};var H=(0,r.memo)(z)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),s=n(67294);function o(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),o=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,s.Z)(o.Z.playgroundHeader,n,i?o.Z.clickable:null),onClick:i},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(67294),s=n(11614),o=n(27093),i=n(26127),a=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),h=n(32041),f=n(97723),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:E,theme:o,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function k(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,o=s?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,o,m.Z.vertical)},"\u25b6")),s?r.createElement(Z,null):null)}var x=(0,r.memo)(k);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);var C=n(45045);function S(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const E=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[v,t,y,g]),k=(0,r.useMemo)((()=>[new l.Z,new o.Z(i.Z)]),[]),w=!("n"===y||!s);return r.createElement(a.nq,{managers:k},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(C.Z,{fallback:r.createElement(_,null)},r.createElement(P,null))),r.createElement(x,{selectedValue:y,toggle:E})))}var N=(0,r.memo)(S);function _(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var O=n(62974);function j(e){let{groupId:t,defaultOpen:n,row:o,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(O.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:o,fixtures:i})))}var A=(0,r.memo)(j)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(72887);const o={React:r,...r,...s};t.Z=o},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},26008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),s=n(11857);function o(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let i=!1;try{Function()}catch(w){i=!0}class a extends Function{constructor(e,t){let n;return i?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),o(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,o=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return o.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return o(n,{...this.options,...e}),n}}var l=n(92586);const c={};const u={};const d=Object.prototype,p=Object.getPrototypeOf;class m extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,o)=>{const i=`${o}`,[a,l,c]=n(t.get(i),e[i]);return l||(r=!1),c&&(s=!0),t.has(i)?t.set(i,a):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,o=!1;return Object.keys(e).forEach((t=>{const[i,a,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=i),l&&(o=!0),a||(s=!1)})),[r,s,o]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,o){const i=this.inferSchema(e,t,n);if(!i)return e;const a=r(e,t,n,i,s,o);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,o){const i=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return i.map(((e,i)=>this.normalizeValue(e,t,n,r,s,o))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,o,i)=>{const a={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,o,i);null==l?delete a[n]:a[n]=l})),a})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const o of Object.keys(e))s[o]=r(e[o],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,o=new Array(s>1?s-1:0),i=1;i<s;i++)o[i-1]=arguments[i];return{[e.key(...t(...o))]:e=>{const t=v(e,n),s=new Set(t),o=v(r,n).filter((e=>!s.has(e))),i=[...t,...o];return E(e,n,i)}}}}const v=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},E=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let o=0;o<t.length-1;o++){const e=t[o];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var k=(0,s.Z)("hasBody");class x extends a{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,k)[k]&&t.length<2?{}:t[0]||{},o=(0,r.Z)(this,k)[k]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(o)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,k,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,k)[k]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,k)[k]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&p(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new m(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}}}]);