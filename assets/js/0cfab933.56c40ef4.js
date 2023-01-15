(self.webpackChunk=self.webpackChunk||[]).push([[41450],{46138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),a=(n(65559),n(30433),n(47885),n(28423)),i=n(41191);const o={title:"schema.All"},l=void 0,c={unversionedId:"api/All",id:"api/All",title:"schema.All",description:"schema.All - Access every entity in the Rest Hooks store",source:"@site/../docs/rest/api/All.md",sourceDirName:"api",slug:"/api/All",permalink:"/rest/api/All",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/All.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1671318833,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{title:"schema.All"},sidebar:"docs",previous:{title:"schema.Delete",permalink:"/rest/api/Delete"},next:{title:"validateRequired",permalink:"/rest/api/validateRequired"}},u={},d=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Polymorphic types",id:"polymorphic-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"schema.All - Access every entity in the Rest Hooks store")),(0,s.kt)("p",null,"Retrieves all entities in cache as an Array."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,s.kt)("strong",{parentName:"li"},"required")," A singular ",(0,s.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entity")," that this array contains ",(0,s.kt)("em",{parentName:"li"},"or")," a mapping of attribute values to ",(0,s.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entities"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,s.kt)("em",{parentName:"li"},"optional")," (required if ",(0,s.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,s.kt)("em",{parentName:"li"}," ",(0,s.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,s.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,s.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,s.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,s.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,s.kt)("inlineCode",{parentName:"li"},"All")," constructor. This method tends to be useful for creating circular references in schema.")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"}],delay:150},{endpoint:new i.Z({path:"/users",method:"POST"}),args:[{name:"ABC"}],response:{id:"777",name:"ABC"},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  pk() {\n    return this.id;\n  }\n}\nexport const createUser = new RestEndpoint({\n  path: '/users',\n  schema: User,\n  body: { name: '' },\n  method: 'POST'\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="NewUser.tsx" collapsed',title:'"NewUser.tsx"',collapsed:!0},"import { useController } from '@rest-hooks/react';\nimport { createUser } from './api/User';\n\nexport default function NewUser() {\n  const ctrl = useController();\n  const handlePress = React.useCallback(\n    async (e: React.KeyboardEvent<HTMLInputElement>) => {\n      if (e.key === 'Enter') {\n        ctrl.fetch(createUser, {name: e.currentTarget.value});\n        e.currentTarget.value = '';\n      }\n    },\n    [fetch],\n  );\n  return <input onKeyPress={handlePress}/>;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx"',title:'"UsersPage.tsx"'},"import { schema, RestEndpoint } from '@rest-hooks/rest';\nimport { User } from './api/User';\nimport NewUser from './NewUser';\n\nconst getUsers = new RestEndpoint({\n  path: '/users',\n  schema: new schema.All(User),\n});\n\nfunction UsersPage() {\n  const users = useSuspense(getUsers);\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n      <NewUser />\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"polymorphic-types"},"Polymorphic types"),(0,s.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,s.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.All(\n    {\n      link: Link,\n      post: Post,\n    },\n    'type',\n  ),\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,s.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,s.kt)("p",null,"The return values should match a key in the ",(0,s.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.All(\n    {\n      links: Link,\n      posts: Post,\n    },\n    (input: Link | Post, parent, key) => `${input.type}s`,\n  ),\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}m.isMDXComponent=!0},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,i),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),s=n(67294),a=n(86010),i=n(5730),o=n(20636),l=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:m,className:h}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,l.U)(),[E,x]=(0,s.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),r=g[n].value;r!==E&&(Z(t),x(r),null!=m&&v(m,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:C,onClick:N},i,{className:(0,a.Z)("tabs__item",d,i?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return s.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),s=n(87462),a=n(99401),i=n(6832),o=n(86010),l=n(49544),c=n(45045);function u(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),h=n(80086),f=n(45440);function g(e){let{children:t,transformCode:n,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:g,...b}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,i.Z)().siteConfig.themeConfig,v=(0,a.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(l.nu,(0,s.Z)({theme:v},b),r.createElement(y,{reverse:"top"===k,row:p,fixtures:h,includeEndpoints:g,groupId:c,defaultOpen:u},t))),r.createElement(d,null))}function y(e){let{reverse:t,children:n,row:s,fixtures:a,includeEndpoints:i,groupId:o,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:f}=(0,m.h)(n),g=p.join("\n");return r.createElement(v,{reverse:t},r.createElement(m.L,{fixtures:a,row:s,codeTabs:f,handleCodeChange:d,codes:p}),r.createElement(c.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:i,groupId:o,defaultOpen:u,row:s,fixtures:a}))},r.createElement(k,{code:g,includeEndpoints:i,groupId:o,defaultOpen:u,row:s,fixtures:a})))}g.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),k=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function v(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}v.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:i=!1,fixtures:o}=e;return r.createElement(g,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:i,hidden:s,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30433),s=n(65559),a=n(67294);function i(e){let{children:t}=e;return a.createElement(s.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(r.Z,{value:"ts"},t[0]),a.createElement(r.Z,{value:"js"},t[1]))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),a=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,i?a.Z.clickable:null),onClick:i},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>w,h:()=>Z});var r=n(87462),s=n(11614),a=n(86010),i=n(67294),o=n(13743),l=n(45440);function c(e){let{fixtures:t}=e;return i.createElement("div",{className:l.Z.fixtureBlock},t.map((e=>i.createElement("div",{key:e.endpoint.key(...e.args),className:l.Z.fixtureItem},i.createElement("div",{className:l.Z.fixtureHeader},e.endpoint.key(...e.args)),i.createElement(d,{fixture:e})))))}var u=(0,i.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":i.createElement(o.Z,{language:"json",className:l.Z.fixtureJson},JSON.stringify(t.response))}var p=n(62974),m=n(49544);const h=(0,i.memo)(m.uz);var f=n(76226),g=n(30573);let y;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!y){const r=g.Z.init();r.then((e=>{e&&(y=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s)){if(s.endsWith(".")||s.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[a,i,o,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${i} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${i} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.typescriptDefaults.setEagerModelSync(!0),s}))}}const b=(0,i.memo)(f.ZP);const k={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},v={...k,fontSize:14,lineHeight:20};var E=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:s=!1,large:a=!1,...o}=e;const l=a?v:k;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,u]=(0,i.useState)("100%"),d=(0,i.useCallback)((e=>{s&&e.focus();const t=Object.keys(o).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=l.lineHeight,r=e.getDomNode(),a=r.getElementsByClassName("view-lines")[0];let i=0;const c=e.getModel().getLineCount()*n+10;r.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=a.childElementCount*n+10;i=a.childElementCount,r.style.height=t+"px",u(c),e.layout()}),0)}))}),[]);return i.createElement(b,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:l,theme:"prism",onMount:d,height:c,loading:i.createElement(m.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return i.createElement(h,{onChange:t,code:n})},x=n(69762);function w(e){let{fixtures:t,row:n,codeTabs:s,handleCodeChange:o,codes:c,large:u=!1}=e;const d=(0,i.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[p,m]=(0,i.useState)((()=>s.map((e=>{let{collapsed:t}=e;return t}))));return i.createElement("div",null,i.createElement(A,{fixtures:!n&&t,title:n&&1===s.length?s[0].title:void 0}),n&&s.length>1?i.createElement(S,{titles:s.map((e=>{let{title:t}=e;return t})),closedList:p,onClick:e=>m((t=>t.map(((t,n)=>n!==e))))}):null,s.map(((e,t)=>{let{title:h,path:f,code:g,collapsed:y,...b}=e;return i.createElement(i.Fragment,{key:t},!n&&h?i.createElement(C,{onClick:()=>m((e=>{const n=[...e];return n[t]=!n[t],n})),closed:p[t],title:h,collapsible:s.length>1}):null,i.createElement("div",{key:t,className:(0,a.Z)(l.Z.playgroundEditor,{[l.Z.hidden]:p[t]})},i.createElement(E,(0,r.Z)({key:t,onChange:o[t],code:c[t],path:"/"+d+"/"+(f||h||"default.tsx")},b,{large:u}))))})))}function Z(e){const t=(0,i.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s,...a}}))),[e]),[n,r]=(0,i.useReducer)(N,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,i.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function N(e,t){const n=[...e];return n[t.i]=t.code,n}function C(e){let{onClick:t,closed:n,title:r,collapsible:s=!1}=e;return s?i.createElement(p.Z,{className:l.Z.small,onClick:t},i.createElement("span",{className:(0,a.Z)(l.Z.arrow,n?l.Z.right:l.Z.down)},"\u25b6"),r):i.createElement("div",{className:l.Z.codeHeader},r)}function S(e){let{titles:t,closedList:n,onClick:r}=e;const{values:s}=(0,i.useContext)(x.Z),o=s.length>0;return i.createElement(p.Z,{className:(0,a.Z)({[l.Z.small]:o,[l.Z.subtabs]:o},l.Z.noupper,l.Z.tabControls)},i.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>i.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:!n[t]})},e)))))}function I(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,i.useContext)(x.Z);return i.createElement("div",{className:l.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:s}=n;return i.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,a.Z)(l.Z.tab,{[l.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},s)})))}function P(e){let{children:t}=e;return i.createElement(p.Z,{className:l.Z.tabControls},i.createElement("div",{className:l.Z.title},t),i.createElement(I,null))}function A(e){let{title:t,fixtures:n}=e;const{values:r}=(0,i.useContext)(x.Z),s=r.length>0;return i.createElement(i.Fragment,null,n.length?i.createElement(i.Fragment,null,i.createElement(p.Z,{className:l.Z.small},"Fixtures"),i.createElement(u,{fixtures:n})):null,s?i.createElement(P,null,t):null)}A.defaultProps={title:i.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r=n(67294),s=n(11614),a=n(76602),i=n(63735),o=n(39714),l=n(86010),c=n(92785),u=n(92954),d=n(48256),p=n(3604),m=n(45045),h=n(29451),f=n(287),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,a=s?E.Z.right:E.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,l.Z)(E.Z.arrow,a,E.Z.vertical)},"\u25b6")),s?r.createElement(N,null):null)}var w=(0,r.memo)(x);function Z(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const N=(0,r.memo)(Z);function C(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,a.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,i.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),x=(0,r.useMemo)((()=>[new c.Z,new u.Z(d.Z)]),[]),Z=!("n"===y||!s);return r.createElement(p.Z,{managers:x},r.createElement(o.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,l.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:Z})},r.createElement(m.Z,{fallback:r.createElement(I,null)},r.createElement(P,null))),r.createElement(w,{selectedValue:y,toggle:v})))}var S=(0,r.memo)(C);function I(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var A=n(62974);function T(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(A.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:E.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}var L=(0,r.memo)(T)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(64820);const a={React:r,...r,...s};t.Z=a},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let i=!1;try{Function()}catch(w){i=!0}class o extends Function{constructor(e,t){let n;return i?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}class l extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function c(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const d=(e,t,n)=>{if(c(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const i=`${a}`,[o,l,c]=n(t.get(i),e[i]);return l||(r=!1),c&&(s=!0),t.has(i)?t.set(i,o):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[i,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=i),l&&(a=!0),o||(s=!1)})),[r,s,a]};function p(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const i=this.inferSchema(e,t,n);if(!i)return e;const o=r(e,t,n,i,s,a);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(c(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:c(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const i=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return i.map(((e,i)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,i)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,a,i);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,s){const a={};for(const i of Object.keys(e))a[i]=r(e[i],t,n,s);return a}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=p(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function m(e,t){const n=p(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return{[e.key(...t(...a))]:e=>{const t=h(e,n),s=new Set(t),a=h(r,n).filter((e=>!s.has(e))),i=[...t,...a];return f(r,n,i)}}}}const h=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},f=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var g=n(92586);const y={};const b={};const k=Object.prototype,v=Object.getPrototypeOf;var E=(0,s.Z)("hasBody");class x extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,g.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(b,e)||(b[e]=new Set((0,g.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),b[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&v(n)===k;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new l(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new l(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:m(this,e)})}}}}]);