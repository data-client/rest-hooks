(self.webpackChunk=self.webpackChunk||[]).push([[97775],{2166:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=(n(47885),n(28423));const o={title:"schema.Union"},i=void 0,s={unversionedId:"api/Union",id:"version-5.0/api/Union",title:"schema.Union",description:"schema.Union - Representing a Union of possible types | Rest Hooks",source:"@site/rest_versioned_docs/version-5.0/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/rest/5.0/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Union.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"schema.Union"},sidebar:"docs",previous:{title:"schema.Array",permalink:"/rest/5.0/api/Array"},next:{title:"schema.Values",permalink:"/rest/5.0/api/Values"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Union - Representing a Union of possible types | Rest Hooks")),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\n\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(5730),i=n(20636),s=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:m,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[E,x]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==E&&(C(t),x(r),null!=m&&k(m,String(r)))},N=e=>{let t=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:N,onClick:Z},o,{className:(0,l.Z)("tabs__item",d,o?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),a=n(87462),l=n(99401),o=n(6832),i=n(86010),s=n(49544),c=n(45045);function u(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),f=n(80086),g=n(45440);function h(e){let{children:t,transformCode:n,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:h,...y}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,o.Z)().siteConfig.themeConfig,k=(0,l.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.Z)(g.Z.playgroundContainer,{[g.Z.row]:p,[g.Z.hidden]:m})},r.createElement(s.nu,(0,a.Z)({theme:k},y),r.createElement(b,{reverse:"top"===v,row:p,fixtures:f,includeEndpoints:h,groupId:c,defaultOpen:u},t))),r.createElement(d,null))}function b(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:o,groupId:i,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:g}=(0,m.h)(n),h=p.join("\n");return r.createElement(k,{reverse:t},r.createElement(m.L,{fixtures:l,row:a,codeTabs:g,handleCodeChange:d,codes:p}),r.createElement(c.Z,{fallback:r.createElement(s.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(f.Z,{key:"preview",includeEndpoints:o,groupId:i,defaultOpen:u,row:a,fixtures:l}))},r.createElement(v,{code:h,includeEndpoints:o,groupId:i,defaultOpen:u,row:a,fixtures:l})))}h.defaultProps={row:!1,hidden:!1};const y="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>y?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,41380))));function k(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}k.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:o=!1,fixtures:i}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:o,hidden:a,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(30433),a=n(65559),l=n(67294);function o(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(19666),a=n(67294);function l(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,o?l.Z.clickable:null),onClick:o},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>N,h:()=>T});var r=n(87462),a=n(11614),l=n(86010),o=n(67294),i=n(13743),s=n(45440);function c(e){let{fixtures:t}=e;return o.createElement("div",{className:s.Z.fixtureBlock},t.map(((e,t)=>o.createElement(p,{key:t,fixture:e}))))}var u=(0,o.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?o.createElement(i.Z,{language:"javascript",className:s.Z.fixtureJson},`${t.response}`):o.createElement(i.Z,{language:"json",className:s.Z.fixtureJson},JSON.stringify(t.response))}function p(e){let{fixture:t}=e;return"args"in t?o.createElement("div",{key:t.endpoint.key(...t.args),className:s.Z.fixtureItem},o.createElement("div",{className:s.Z.fixtureHeader},t.endpoint.key(...t.args)),o.createElement(d,{fixture:t})):o.createElement("div",{className:s.Z.fixtureItem},o.createElement("div",{className:s.Z.fixtureHeader},t.endpoint.method," ",t.endpoint.path),o.createElement(d,{fixture:t}))}var m=n(62974),f=n(49544);const g=(0,o.memo)(f.uz);var h=n(76226),b=n(87594),y=n.n(b),v=n(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const r=v.Z.init();r.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[l,o,i,s,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(l,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${s} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${o} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const E=(0,o.memo)(h.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},w={...x,fontSize:14,lineHeight:20};var C=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:l=!1,...i}=e;const s=l?w:x;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,u]=(0,o.useState)("100%"),d=(0,o.useCallback)((e=>{a&&e.focus();const t=Object.keys(i).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(y());if(t.length){let n=t[0][0],r=n;const a=[];t[0].forEach((e=>{e===r?r++:(a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(a)}const n=s.lineHeight,r=e.getDomNode(),l=r.getElementsByClassName("view-lines")[0];let o=0;const c=e.getModel().getLineCount()*n+10;return r.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??l.childElementCount)*n+10;o=l.childElementCount,r.style.height=t+"px",u(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return o.createElement(E,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:s,theme:"prism",onMount:d,height:c,loading:o.createElement(f.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return o.createElement(g,{onChange:t,code:n})},Z=n(69762);function N(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:i,codes:c,large:u=!1,isPlayground:d=!0}=e;const p=(0,o.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,f]=(0,o.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return o.createElement("div",null,o.createElement(P,{fixtures:n?[]:t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?o.createElement(j,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>f((t=>t.map(((t,n)=>n!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:g,path:h,code:b,collapsed:y,...v}=e;return o.createElement(o.Fragment,{key:d},!n&&g?o.createElement(_,{onClick:()=>f((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:g,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&u}):null,o.createElement("div",{key:d,className:(0,l.Z)(s.Z.playgroundEditor,{[s.Z.hidden]:m[d]})},o.createElement(C,(0,r.Z)({key:d,onChange:i[d],code:c[d],path:"/"+p+"/"+(h||g||"default.tsx")},v,{large:u}))))})))}function T(e){const t=(0,o.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...l}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...l}}))),[e]),[n,r]=(0,o.useReducer)(I,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,o.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function I(e,t){const n=[...e];return n[t.i]=t.code,n}function _(e){let{onClick:t,closed:n,title:r,collapsible:a=!1,lastChild:i=!1}=e;return a?o.createElement(m.Z,{className:(0,l.Z)(s.Z.small,{[s.Z.lastChild]:i&&n}),onClick:t},o.createElement("span",{className:(0,l.Z)(s.Z.arrow,n?s.Z.right:s.Z.down)},"\u25b6"),r):o.createElement("div",{className:s.Z.codeHeader},r)}function j(e){let{titles:t,closedList:n,onClick:r,isPlayground:a=!0}=e;const{values:i}=(0,o.useContext)(Z.Z),c=i.length>0;return o.createElement(m.Z,{className:(0,l.Z)({[s.Z.small]:c||!a,[s.Z.subtabs]:c},s.Z.noupper,s.Z.tabControls)},o.createElement("div",{className:s.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>o.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,l.Z)(s.Z.tab,{[s.Z.selected]:!n[t]})},e)))))}function L(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,o.useContext)(Z.Z);return o.createElement("div",{className:s.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return o.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,l.Z)(s.Z.tab,{[s.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function O(e){let{children:t}=e;return o.createElement(m.Z,{className:s.Z.tabControls},o.createElement("div",{className:s.Z.title},t),o.createElement(L,null))}function P(e){let{title:t,fixtures:n=[]}=e;const{values:r}=(0,o.useContext)(Z.Z),a=r.length>0;return o.createElement(o.Fragment,null,n.length?o.createElement(o.Fragment,null,o.createElement(m.Z,{className:s.Z.small},"Fixtures"),o.createElement(u,{fixtures:n})):null,a?o.createElement(O,null,t):null)}P.defaultProps={title:o.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(11614),a=n(67294),l=n(62974),o=n(76602),i=n(63735),s=n(78871),c=n(86010),u=n(92785),d=n(92954),p=n(48256),m=n(3604),f=n(45045),g=n(29451),h=n(70524),b=n(287);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,a.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]),o=(0,a.useMemo)(v,[]);return a.createElement(b.L,{shouldExpandNodeInitially:o,data:t,valueRenderer:E,theme:l,hideRoot:!0})}const v=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},k="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var x=n(45440);function w(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,l=r?x.Z.right:x.Z.left;return a.createElement(a.Fragment,null,a.createElement("div",{className:x.Z.debugToggle,onClick:t},"Store",a.createElement("span",{className:(0,c.Z)(x.Z.arrow,l,x.Z.vertical)},"\u25b6")),r?a.createElement(N,null):null)}var C=(0,a.memo)(w);function Z(){const e=(0,a.useContext)(g.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return a.createElement(y,{value:t})}const N=(0,a.memo)(Z);function T(e){let{groupId:t,defaultOpen:n,row:r,fixtures:l}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,o.U)(),[b,y]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,i.o5)();if(null!=t){const e=g[t];null!=e&&e!==b&&y(e)}const k=(0,a.useCallback)((e=>{v(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===b?"n":"y")}),[v,t,b,h]),E=(0,a.useMemo)((()=>[new u.Z,new d.Z(p.Z)]),[]),w=!("n"===b||!r);return a.createElement(m.Z,{managers:E},a.createElement(s.Z,{fixtures:l,silenceMissing:!0},a.createElement("div",{className:(0,c.Z)(x.Z.playgroundPreview,{[x.Z.hidden]:w})},a.createElement(f.Z,{fallback:a.createElement(_,null)},a.createElement(j,null))),a.createElement(C,{selectedValue:b,toggle:k})))}var I=(0,a.memo)(T);function _(){return a.createElement("div",null,"Loading...")}const j=(0,a.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(92765),n.e(26750)]).then(n.bind(n,15929))));function L(e){let{groupId:t,defaultOpen:n,row:o,fixtures:i}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(l.Z,null,a.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),a.createElement("div",{className:x.Z.playgroundResult},a.createElement(I,{groupId:t,defaultOpen:n,row:o,fixtures:i})))}var O=(0,a.memo)(L)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const l={React:r,...r,...a};t.Z=l},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);