(self.webpackChunk=self.webpackChunk||[]).push([[81324],{43221:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),s=(n(27378),n(3905)),a=n(41191),o=n(28423);const i={title:"Query",slug:"Query"},l=void 0,c={unversionedId:"api/Query",id:"api/Query",title:"Query",description:"Query - Programmatic performant store access",source:"@site/../docs/rest/api/Query.md",sourceDirName:"api",slug:"/api/Query",permalink:"/rest/api/Query",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/rest/api/Query.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1674317923,formattedLastUpdatedAt:"Jan 21, 2023",frontMatter:{title:"Query",slug:"Query"},sidebar:"docs",previous:{title:"hookifyResource",permalink:"/rest/api/hookifyResource"},next:{title:"Index",permalink:"/rest/api/Index"}},d={},u=[{value:"Query members",id:"query-members",level:2},{value:"schema",id:"schema",level:3},{value:"process(entries, ...args)",id:"process",level:3},{value:"key(...args)",id:"key",level:3},{value:"Usage",id:"usage",level:2},{value:"Simplest",id:"simplest",level:3},{value:"Sorting &amp; Filtering",id:"sorting--filtering",level:3},{value:"Aggregates",id:"aggregates",level:3},{value:"Client side joins",id:"client-side-joins",level:3}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Query - Programmatic performant store access"),(0,s.kt)("meta",{name:"docsearch:pagerank",content:"30"})),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Query")," provides programmatic access to the Rest Hooks cache while maintaining\nthe same high performance and referential equality guarantees expected of Rest Hooks."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Query<S extends SchemaSimple, P extends any[] = []> {\n  constructor(\n    schema: S,\n    process?: (entries: Denormalize<S>, ...args: P) => Denormalize<S>,\n  );\n\n  schema: S;\n  key(...args: P): string;\n\n  process: (entries: Denormalize<S>, ...args: P) => Denormalize<S>;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Query")," implements the ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface")," but without the fetch function, which\nmeans it can only be passed to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"data binding hook useCache()")),(0,s.kt)("h2",{id:"query-members"},"Query members"),(0,s.kt)("h3",{id:"schema"},"schema"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema")," used to retrieve/denormalize data from the Rest Hooks cache.\nMost cases will use ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/All"},"schema.All"),", which retrieves all entities of a given type found\nin the cache."),(0,s.kt)("h3",{id:"process"},"process(entries, ...args)"),(0,s.kt)("p",null,"Takes the (denormalized) response as entries and arguments and returns the new\nresponse for use with ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"useCache")),(0,s.kt)("h3",{id:"key"},"key(...args)"),(0,s.kt)("p",null,"Implements ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#key"},"Endpoint.key")," Used to determine recomputation of memoized values."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"simplest"},"Simplest"),(0,s.kt)(o.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new a.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx" {4}',title:'"UsersPage.tsx"',"{4}":!0},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\nconst allUsers = new Query(new schema.All(User));\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const users = useCache(allUsers);\n  if (!users) return <div>No users in cache yet</div>;\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"sorting--filtering"},"Sorting & Filtering"),(0,s.kt)(o.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new a.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"},{id:"777",name:"Albatras",isAdmin:!0}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx"',title:'"UsersPage.tsx"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\ninterface Args {\n  asc: boolean;\n  isAdmin?: boolean;\n}\nconst sortedUsers = new Query(\n  new schema.All(User),\n  (entries, { asc, isAdmin }: Args = { asc: false }) => {\n    let sorted = [...entries].sort((a, b) => a.name.localeCompare(b.name));\n    if (isAdmin !== undefined)\n      sorted = sorted.filter(user => user.isAdmin === isAdmin);\n    if (asc) return sorted;\n    return sorted.reverse();\n  },\n);\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const users = useCache(sortedUsers, { asc: true });\n  if (!users) return <div>No users in cache yet</div>;\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"aggregates"},"Aggregates"),(0,s.kt)(o.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new a.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"},{id:"777",name:"Albatras",isAdmin:!0}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User" collapsed',title:'"api/User"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage"',title:'"UsersPage"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\nconst getUserCount = new Query(\n  new schema.All(User),\n  (entries, { isAdmin } = { }) => {\n    if (isAdmin !== undefined)\n      return entries.filter(user => user.isAdmin === isAdmin).length;\n    return entries.length;\n  },\n);\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const userCount = useCache(getUserCount);\n  const adminCount = useCache(getUserCount, { isAdmin: true });\n  if (userCount === undefined) return <div>No users in cache yet</div>;\n  return (\n    <div>\n    <div>\n      Total users: {userCount}\n    </div>\n    <div>\n      Total admins: {adminCount}\n    </div>\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"client-side-joins"},"Client side joins"),(0,s.kt)("p",null,"Even if the network responses don't nest data, we can perform client-side joins by specifying\nthe relationship in ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"Entity.schema")),(0,s.kt)(o.Z,{mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = 0;\n  name = '';\n  email = '';\n  website = '';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const UserResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Todo.ts" collapsed',title:'"api/Todo.ts"',collapsed:!0},"import { User } from './User';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = User.fromJS({});\n  title = '';\n  completed = false;\n  pk() {\n    return `${this.id}`;\n  }\n  static schema = {\n    userId: User,\n  };\n}\nexport const TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoJoined.tsx"',title:'"TodoJoined.tsx"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { TodoResource, Todo } from './api/Todo';\nimport { UserResource, User } from './api/User';\n\nconst todosWithUser = new Query(\n  new schema.All(Todo),\n  (entries, { userId = 0 }) => {\n    return entries.filter(todo => todo.userId?.id === userId);\n  },\n);\n\nfunction TodosPage() {\n  useFetch(UserResource.getList);\n  useFetch(TodoResource.getList);\n  const todos = useCache(todosWithUser, { userId: 1 });\n  if (!todos) return <div>No Todos in cache yet</div>;\n  return (\n    <div>\n      {todos.map(todo => (\n        <div key={todo.pk()}>\n          {todo.title} by {todo.userId.name}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<TodosPage />);\n"))))}p.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(67294),s=n(87462),a=n(99401),o=n(6832),i=n(86010),l=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:m},type:"application/javascript"}))}var u=(0,r.memo)(d);const m=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var p=n(24338),h=n(80086),g=n(45440);function f(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:m,hidden:p,fixtures:h,includeEndpoints:f,...k}=e;const{liveCodeBlock:{playgroundPosition:b}}=(0,o.Z)().siteConfig.themeConfig,v=(0,a.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.Z)(g.Z.playgroundContainer,{[g.Z.row]:m,[g.Z.hidden]:p})},r.createElement(l.nu,(0,s.Z)({theme:v},k),r.createElement(y,{reverse:"top"===b,row:m,fixtures:h,includeEndpoints:f,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function y(e){let{reverse:t,children:n,row:s,fixtures:a,includeEndpoints:o,groupId:i,defaultOpen:d}=e;const{handleCodeChange:u,codes:m,codeTabs:g}=(0,p.h)(n),f=m.join("\n");return r.createElement(v,{reverse:t},r.createElement(p.L,{fixtures:a,row:s,codeTabs:g,handleCodeChange:u,codes:m}),r.createElement(c.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:o,groupId:i,defaultOpen:d,row:s,fixtures:a}))},r.createElement(b,{code:f,includeEndpoints:o,groupId:i,defaultOpen:d,row:s,fixtures:a})))}f.defaultProps={row:!1,hidden:!1};const k="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),b=(0,r.lazy)((()=>k?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function v(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}v.defaultProps={reverse:!1};const x=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:o=!1,fixtures:i}=e;return r.createElement(f,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:s,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};x.defaultProps={defaultOpen:"n",fixtures:[]};var E=(0,r.memo)(x)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),s=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>N,h:()=>S});var r=n(87462),s=n(11614),a=n(86010),o=n(67294),i=n(13743),l=n(45440);function c(e){let{fixtures:t}=e;return o.createElement("div",{className:l.Z.fixtureBlock},t.map(((e,t)=>o.createElement(m,{key:t,fixture:e}))))}var d=(0,o.memo)(c);function u(e){let{fixture:t}=e;return"function"==typeof t.response?o.createElement(i.Z,{language:"javascript",className:l.Z.fixtureJson},`${t.response}`):o.createElement(i.Z,{language:"json",className:l.Z.fixtureJson},JSON.stringify(t.response))}function m(e){let{fixture:t}=e;return"args"in t?o.createElement("div",{key:t.endpoint.key(...t.args),className:l.Z.fixtureItem},o.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.key(...t.args)),o.createElement(u,{fixture:t})):o.createElement("div",{className:l.Z.fixtureItem},o.createElement("div",{className:l.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),o.createElement(u,{fixture:t}))}var p=n(62974),h=n(49544);const g=(0,o.memo)(h.uz);var f=n(76226),y=n(87594),k=n.n(y),b=n(30573);let v;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!v){const r=b.Z.init();r.then((e=>{e&&(v=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s)){if(s.endsWith(".")||s.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[a,o,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${o} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.typescriptDefaults.setEagerModelSync(!0),s}))}}const x=(0,o.memo)(f.ZP);const E={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...E,fontSize:14,lineHeight:20};var C=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:s=!1,large:a=!1,...i}=e;const l=a?w:E;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,o.useState)("100%"),u=(0,o.useCallback)((e=>{s&&e.focus();const t=Object.keys(i).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(k());if(t.length){let n=t[0][0],r=n;const s=[];t[0].forEach((e=>{e===r?r++:(s.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),s.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(s)}const n=l.lineHeight,r=e.getDomNode(),a=r.getElementsByClassName("view-lines")[0];let o=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??a.childElementCount)*n+10;o=a.childElementCount,r.style.height=t+"px",d(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return o.createElement(x,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:l,theme:"prism",onMount:u,height:c,loading:o.createElement(h.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return o.createElement(g,{onChange:t,code:n})},Z=n(69762);function N(e){let{fixtures:t,row:n,codeTabs:s,handleCodeChange:i,codes:c,large:d=!1,isPlayground:u=!0}=e;const m=(0,o.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[p,h]=(0,o.useState)((()=>s.map((e=>{let{collapsed:t}=e;return t}))));return o.createElement("div",null,o.createElement(j,{fixtures:n?[]:t,title:n&&1===s.length?s[0].title:void 0}),n&&s.length>1?o.createElement(A,{titles:s.map((e=>{let{title:t}=e;return t})),closedList:p,onClick:e=>h((t=>t.map(((t,n)=>n!==e)))),isPlayground:u}):null,s.map(((e,u)=>{let{title:g,path:f,code:y,collapsed:k,...b}=e;return o.createElement(o.Fragment,{key:u},!n&&g?o.createElement(P,{onClick:()=>h((e=>{const t=[...e];return t[u]=!t[u],t})),closed:p[u],title:g,collapsible:s.length>1||t?.length,lastChild:u===s.length-1&&d}):null,o.createElement("div",{key:u,className:(0,a.Z)(l.Z.playgroundEditor,{[l.Z.hidden]:p[u]})},o.createElement(C,(0,r.Z)({key:u,onChange:i[u],code:c[u],path:"/"+m+"/"+(f||g||"default.tsx")},b,{large:d}))))})))}function S(e){const t=(0,o.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s,...a}}))),[e]),[n,r]=(0,o.useReducer)(U,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,o.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function U(e,t){const n=[...e];return n[t.i]=t.code,n}function P(e){let{onClick:t,closed:n,title:r,collapsible:s=!1,lastChild:i=!1}=e;return s?o.createElement(p.Z,{className:(0,a.Z)(l.Z.small,{[l.Z.lastChild]:i&&n}),onClick:t},o.createElement("span",{className:(0,a.Z)(l.Z.arrow,n?l.Z.right:l.Z.down)},"\u25b6"),r):o.createElement("div",{className:l.Z.codeHeader},r)}function A(e){let{titles:t,closedList:n,onClick:r,isPlayground:s=!0}=e;const{values:i}=(0,o.useContext)(Z.Z),c=i.length>0;return o.createElement(p.Z,{className:(0,a.Z)({[l.Z.small]:c||!s,[l.Z.subtabs]:c},l.Z.noupper,l.Z.tabControls)},o.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>o.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:!n[t]})},e)))))}function R(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,o.useContext)(Z.Z);return o.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:s}=n;return o.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},s)})))}function T(e){let{children:t}=e;return o.createElement(p.Z,{className:l.Z.tabControls},o.createElement("div",{className:l.Z.title},t),o.createElement(R,null))}function j(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,o.useContext)(Z.Z),s=r.length>0;return o.createElement(o.Fragment,null,n.length?o.createElement(o.Fragment,null,o.createElement(p.Z,{className:l.Z.small},"Fixtures"),o.createElement(d,{fixtures:n})):null,s?o.createElement(T,null,t):null)}j.defaultProps={title:o.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(11614),s=n(67294),a=n(62974),o=n(63735),i=n(78871),l=n(86010),c=n(92785),d=n(92954),u=n(48256),m=n(3604),p=n(45045),h=n(29451),g=n(70524),f=n(287);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,r=(0,s.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,s.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),o=(0,s.useMemo)(k,[]);return s.createElement(f.L,{shouldExpandNodeInitially:o,data:t,valueRenderer:v,theme:a,hideRoot:!0})}const k=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var x=n(45440);function E(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,a=r?x.Z.right:x.Z.left;return s.createElement(s.Fragment,null,s.createElement("div",{className:x.Z.debugToggle,onClick:t},"Store",s.createElement("span",{className:(0,l.Z)(x.Z.arrow,a,x.Z.vertical)},"\u25b6")),r?s.createElement(Z,null):null)}var w=(0,s.memo)(E);function C(){const e=(0,s.useContext)(h.sA),t=(0,s.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return s.createElement(y,{value:t})}const Z=(0,s.memo)(C);var N=n(32295);function S(e){let{groupId:t,defaultOpen:n,row:r,fixtures:a}=e;const[h,g]=(0,N.X)(`docusaurus.tab.${t}`),[f,y]=(0,s.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,o.o5)();null!=h&&h!==f&&y(h);const b=(0,s.useCallback)((e=>{k(e.currentTarget),y((e=>"y"===e?"n":"y")),g("y"===f?"n":"y")}),[k,f,g]),v=(0,s.useMemo)((()=>[new c.Z,new d.Z(u.Z)]),[]),E=!("n"===f||!r);return s.createElement(m.Z,{managers:v},s.createElement(i.Z,{fixtures:a,silenceMissing:!0},s.createElement("div",{className:(0,l.Z)(x.Z.playgroundPreview,{[x.Z.hidden]:E})},s.createElement(p.Z,{fallback:s.createElement(P,null)},s.createElement(A,null))),s.createElement(w,{selectedValue:f,toggle:b})))}var U=(0,s.memo)(S);function P(){return s.createElement("div",null,"Loading...")}const A=(0,s.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function R(e){let{groupId:t,defaultOpen:n,row:o,fixtures:i}=e;return s.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},s.createElement(a.Z,null,s.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),s.createElement("div",{className:x.Z.playgroundResult},s.createElement(U,{groupId:t,defaultOpen:n,row:o,fixtures:i})))}var T=(0,s.memo)(R)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(64820);const a={React:r,...r,...s};t.Z=a},32295:(e,t,n)=>{"use strict";n.d(t,{X:()=>a});var r=n(99200),s=n(67294);function a(e){const t=o(e),[n,a]=(0,r.Nk)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}const o=e=>`docusaurus.tab.${e}`},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let o=!1;try{Function()}catch(w){o=!0,console.error("Content Security Policy: The previous CSP log can be safely ignored - @rest-hooks/endpoint will use setPrototypeOf instead")}class i extends Function{constructor(e,t){let n;return o?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var l=n(92586);class c extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function d(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const m=(e,t,n)=>{if(d(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const o=`${a}`,[i,l,c]=n(t.get(o),e[o]);return l||(r=!1),c&&(s=!0),t.has(o)?t.set(o,i):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[o,i,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=o),l&&(a=!0),i||(s=!1)})),[r,s,a]};function p(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const o=this.inferSchema(e,t,n);if(!o)return e;const i=r(e,t,n,o,s,a);return this.isSingleSchema||null==i?i:{id:i,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(d(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:d(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const o=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return o.map(((e,o)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,o)=>{const i={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,a,o);null==l?delete i[n]:i[n]=l})),i})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,s){const a={};for(const o of Object.keys(e))a[o]=r(e[o],t,n,s);return a}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=p(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function h(e,t){const n=p(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];return{[e.key(...t(...a))]:e=>{const t=g(e,n),s=new Set(t),a=g(r,n).filter((e=>!s.has(e))),o=[...t,...a];return f(r,n,o)}}}}const g=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},f=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};const y={};const k={};const b=Object.prototype,v=Object.getPrototypeOf;var x=(0,s.Z)("hasBody");class E extends i{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,x)[x]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,x)[x]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,x,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,x)[x]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,x)[x]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(k,e)||(k[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),k[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&v(n)===b;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new c(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new c(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}get pathRegex(){return(0,l.Bo)(this.path)}testKey(e){const t=this.method+" "+this.urlPrefix;if(!e.startsWith(t))return!1;let n=e.lastIndexOf("?");return-1===n&&(n=void 0),this.pathRegex.test(e.substring(t.length,n))}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:h(this,e)})}}}}]);