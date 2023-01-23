(self.webpackChunk=self.webpackChunk||[]).push([[13131],{14852:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),l=(n(67294),n(3905)),a=n(28423),o=n(86429);const s={title:"schema.Delete"},i=void 0,c={unversionedId:"api/Delete",id:"version-6.0/api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/rest_versioned_docs/version-6.0/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/rest/6.0/api/Delete",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Delete.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"schema.Delete"},sidebar:"docs",previous:{title:"schema.Values",permalink:"/rest/6.0/api/Values"},next:{title:"validateRequired",permalink:"/rest/6.0/api/validateRequired"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Batch Deletes",id:"batch-deletes",level:3},{value:"Impact on useSuspense()",id:"impact-on-usesuspense",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,l.kt)("p",null,"Describes entities to be marked as ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new o.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"},{id:"555",name:"Phone"}],delay:150}],mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/User.ts"',title:'"api/User.ts"'},"const sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  id = '';\n  name = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new RestEndpoint({\n  path: '/users',\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UserPage.tsx"',title:'"UserPage.tsx"'},"function UsersPage() {\n  const users = useSuspense(userList);\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <span\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </span>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,l.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,l.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,l.kt)("p",null,"Constructing an article response using the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useSuspense(MyResource.list());\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,l.kt)("h3",{id:"impact-on-usesuspense"},"Impact on useSuspense()"),(0,l.kt)("p",null,"When entities are deleted in a result currently being presented in React, useSuspense()\nwill consider them invalid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,l.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}m.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),l=n(87462),a=n(99401),o=n(6832),s=n(86010),i=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var u=(0,r.memo)(d);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),f=n(45440);function h(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:h,...y}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,o.Z)().siteConfig.themeConfig,E=(0,a.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,s.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(i.nu,(0,l.Z)({theme:E},y),r.createElement(b,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function b(e){let{reverse:t,children:n,row:l,fixtures:a,includeEndpoints:o,groupId:s,defaultOpen:d}=e;const{handleCodeChange:u,codes:p,codeTabs:f}=(0,m.h)(n),h=p.join("\n");return r.createElement(E,{reverse:t},r.createElement(m.L,{fixtures:a,row:l,codeTabs:f,handleCodeChange:u,codes:p}),r.createElement(c.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:o,groupId:s,defaultOpen:d,row:l,fixtures:a}))},r.createElement(v,{code:h,includeEndpoints:o,groupId:s,defaultOpen:d,row:l,fixtures:a})))}h.defaultProps={row:!1,hidden:!1};const y="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>y?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function E(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}E.defaultProps={reverse:!1};const k=e=>{let{children:t,groupId:n,hidden:l=!1,defaultOpen:a,row:o=!1,fixtures:s}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:l,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};k.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(k)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),l=n(67294);function a(e){let{fallback:t,children:n}=e;return l.createElement(r.Z,{fallback:t},(()=>l.createElement(l.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,l.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>N,h:()=>D});var r=n(87462),l=n(11614),a=n(86010),o=n(67294),s=n(13743),i=n(45440);function c(e){let{fixtures:t}=e;return o.createElement("div",{className:i.Z.fixtureBlock},t.map(((e,t)=>o.createElement(p,{key:t,fixture:e}))))}var d=(0,o.memo)(c);function u(e){let{fixture:t}=e;return"function"==typeof t.response?o.createElement(s.Z,{language:"javascript",className:i.Z.fixtureJson},`${t.response}`):o.createElement(s.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?o.createElement("div",{key:t.endpoint.key(...t.args),className:i.Z.fixtureItem},o.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.key(...t.args)),o.createElement(u,{fixture:t})):o.createElement("div",{className:i.Z.fixtureItem},o.createElement("div",{className:i.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),o.createElement(u,{fixture:t}))}var m=n(62974),g=n(49544);const f=(0,o.memo)(g.uz);var h=n(76226),b=n(87594),y=n.n(b),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const l=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(l)){if(l.endsWith(".")||l.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const l=n.value,[a,o,s,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return l.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),l.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),l.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),l.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),l.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),l.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),l.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),l.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${o} }`),c.forEach(((t,n)=>{const r=e[n];l.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&l.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),l.languages.typescript.typescriptDefaults.setEagerModelSync(!0),l}))}}const k=(0,o.memo)(h.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...x,fontSize:14,lineHeight:20};var C=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:l=!1,large:a=!1,...s}=e;const i=a?w:x;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,o.useState)("100%"),u=(0,o.useCallback)((e=>{l&&e.focus();const t=Object.keys(s).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(y());if(t.length){let n=t[0][0],r=n;const l=[];t[0].forEach((e=>{e===r?r++:(l.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),l.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(l)}const n=i.lineHeight,r=e.getDomNode(),a=r.getElementsByClassName("view-lines")[0];let o=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??a.childElementCount)*n+10;o=a.childElementCount,r.style.height=t+"px",d(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return o.createElement(k,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:u,height:c,loading:o.createElement(g.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return o.createElement(f,{onChange:t,code:n})},Z=n(69762);function N(e){let{fixtures:t,row:n,codeTabs:l,handleCodeChange:s,codes:c,large:d=!1,isPlayground:u=!0}=e;const p=(0,o.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,o.useState)((()=>l.map((e=>{let{collapsed:t}=e;return t}))));return o.createElement("div",null,o.createElement(S,{fixtures:n?[]:t,title:n&&1===l.length?l[0].title:void 0}),n&&l.length>1?o.createElement(O,{titles:l.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:u}):null,l.map(((e,u)=>{let{title:f,path:h,code:b,collapsed:y,...v}=e;return o.createElement(o.Fragment,{key:u},!n&&f?o.createElement(M,{onClick:()=>g((e=>{const t=[...e];return t[u]=!t[u],t})),closed:m[u],title:f,collapsible:l.length>1||t?.length,lastChild:u===l.length-1&&d}):null,o.createElement("div",{key:u,className:(0,a.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[u]})},o.createElement(C,(0,r.Z)({key:u,onChange:s[u],code:c[u],path:"/"+p+"/"+(h||f||"default.tsx")},v,{large:d}))))})))}function D(e){const t=(0,o.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:l,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:l,...a}}))),[e]),[n,r]=(0,o.useReducer)(T,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,o.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function T(e,t){const n=[...e];return n[t.i]=t.code,n}function M(e){let{onClick:t,closed:n,title:r,collapsible:l=!1,lastChild:s=!1}=e;return l?o.createElement(m.Z,{className:(0,a.Z)(i.Z.small,{[i.Z.lastChild]:s&&n}),onClick:t},o.createElement("span",{className:(0,a.Z)(i.Z.arrow,n?i.Z.right:i.Z.down)},"\u25b6"),r):o.createElement("div",{className:i.Z.codeHeader},r)}function O(e){let{titles:t,closedList:n,onClick:r,isPlayground:l=!0}=e;const{values:s}=(0,o.useContext)(Z.Z),c=s.length>0;return o.createElement(m.Z,{className:(0,a.Z)({[i.Z.small]:c||!l,[i.Z.subtabs]:c},i.Z.noupper,i.Z.tabControls)},o.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>o.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,a.Z)(i.Z.tab,{[i.Z.selected]:!n[t]})},e)))))}function L(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,o.useContext)(Z.Z);return o.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:l}=n;return o.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,a.Z)(i.Z.tab,{[i.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},l)})))}function P(e){let{children:t}=e;return o.createElement(m.Z,{className:i.Z.tabControls},o.createElement("div",{className:i.Z.title},t),o.createElement(L,null))}function S(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,o.useContext)(Z.Z),l=r.length>0;return o.createElement(o.Fragment,null,n.length?o.createElement(o.Fragment,null,o.createElement(m.Z,{className:i.Z.small},"Fixtures"),o.createElement(d,{fixtures:n})):null,l?o.createElement(P,null,t):null)}S.defaultProps={title:o.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(11614),l=n(67294),a=n(62974),o=n(76602),s=n(63735),i=n(78871),c=n(86010),d=n(92785),u=n(92954),p=n(48256),m=n(3604),g=n(45045),f=n(29451),h=n(70524),b=n(287);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,r=(0,l.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,l.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),o=(0,l.useMemo)(v,[]);return l.createElement(b.L,{shouldExpandNodeInitially:o,data:t,valueRenderer:k,theme:a,hideRoot:!0})}const v=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},E="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return E&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var x=n(45440);function w(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,a=r?x.Z.right:x.Z.left;return l.createElement(l.Fragment,null,l.createElement("div",{className:x.Z.debugToggle,onClick:t},"Store",l.createElement("span",{className:(0,c.Z)(x.Z.arrow,a,x.Z.vertical)},"\u25b6")),r?l.createElement(N,null):null)}var C=(0,l.memo)(w);function Z(){const e=(0,l.useContext)(f.sA),t=(0,l.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return l.createElement(y,{value:t})}const N=(0,l.memo)(Z);function D(e){let{groupId:t,defaultOpen:n,row:r,fixtures:a}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,o.U)(),[b,y]=(0,l.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,s.o5)();if(null!=t){const e=f[t];null!=e&&e!==b&&y(e)}const E=(0,l.useCallback)((e=>{v(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===b?"n":"y")}),[v,t,b,h]),k=(0,l.useMemo)((()=>[new d.Z,new u.Z(p.Z)]),[]),w=!("n"===b||!r);return l.createElement(m.Z,{managers:k},l.createElement(i.Z,{fixtures:a,silenceMissing:!0},l.createElement("div",{className:(0,c.Z)(x.Z.playgroundPreview,{[x.Z.hidden]:w})},l.createElement(g.Z,{fallback:l.createElement(M,null)},l.createElement(O,null))),l.createElement(C,{selectedValue:b,toggle:E})))}var T=(0,l.memo)(D);function M(){return l.createElement("div",null,"Loading...")}const O=(0,l.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function L(e){let{groupId:t,defaultOpen:n,row:o,fixtures:s}=e;return l.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},l.createElement(a.Z,null,l.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),l.createElement("div",{className:x.Z.playgroundResult},l.createElement(T,{groupId:t,defaultOpen:n,row:o,fixtures:s})))}var P=(0,l.memo)(L)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),l=n(64820);const a={React:r,...r,...l};t.Z=a},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function l(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],l=t[0];return n.e(t[1]).then((()=>n.t(l,23)))}l.keys=()=>Object.keys(r),l.id=73795,e.exports=l}}]);