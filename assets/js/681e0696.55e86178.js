(self.webpackChunk=self.webpackChunk||[]).push([[47954],{49501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),o=n(90008),a=n(86429);const s={title:"Optimistic Updates"},l=void 0,c={unversionedId:"guides/optimistic-updates",id:"version-6.0/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic Updates - High performance mutations",source:"@site/rest_versioned_docs/version-6.0/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/rest/6.0/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/optimistic-updates.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Authentication",permalink:"/rest/6.0/guides/auth"},next:{title:"Transforming data on fetch",permalink:"/rest/6.0/guides/network-transform"}},u={},d=[{value:"Partial updates",id:"partial-updates",level:2},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Optimistic Updates - High performance mutations")),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  partialUpdate: BaseArticleResource.partialUpdate.extend({\n    // highlight-start\n    getOptimisticResponse(snap, params, body) {\n      return {\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      };\n    },\n    // highlight-end\n  }),\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="PublishButton.tsx"',title:'"PublishButton.tsx"'},"import { useController } from 'rest-hooks';\nimport { ArticleResource } from 'api/Article';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const controller = useController();\n\n  return (\n    <button\n      onClick={() =>\n        controller.fetch(\n          ArticleResource.partialUpdate,\n          { id },\n          { published: true },\n        )\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\nimport uuid from 'uuid/v4';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  create: BaseArticleResource.create.extend({\n    getRequestInit(body) {\n      if (body) {\n        return this.constructor.prototype.getRequestInit.call(this, {\n          // highlight-next-line\n          id: uuid(),\n          ...body,\n        });\n      }\n      return this.constructor.prototype.getRequestInit.call(this, body);\n    },\n    getOptimisticResponse(snap, params, body) {\n      return body;\n    },\n    update(newResourcePk: string) {\n      return {\n        [list.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      };\n    },\n  }),\n};\n")),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CreateArticle.tsx"',title:'"CreateArticle.tsx"'},"import { useController } from 'rest-hooks';\nimport { ArticleResource } from 'api/Article';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data => fetch(ArticleResource.create, data),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"/rest/6.0/api/RestEndpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  delete: BaseArticleResource.delete.extend({\n    // highlight-start\n    getOptimisticResponse(snap, params, body) {\n      return params;\n    },\n    // highlight-end\n  }),\n};\n")),(0,i.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,i.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,i.kt)(o.Z,{fixtures:[{endpoint:new a.Z({path:"/api/count"}),args:[],response:{count:0,updatedAt:new Date}}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Count.ts"',title:'"api/Count.ts"'},"export class CountEntity extends Entity {\n  count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nexport const getCount = new RestEndpoint({\n  path: '/api/count',\n  schema: CountEntity,\n  name: 'get',\n});\nexport const increment = new RestEndpoint({\n  path: '/api/count/increment',\n  method: 'POST',\n  name: 'increment',\n  schema: CountEntity,\n  getRequestInit() {\n    // substitute for super.getRequestInit()\n    return this.constructor.prototype.getRequestInit.call(this, {\n      updatedAt: Date.now(),\n    });\n  },\n  getOptimisticResponse(snap) {\n    const { data } = snap.getResponse(getCount);\n    if (!data) throw new AbortOptimistic();\n    return {\n      count: data.count + 1,\n    };\n  },\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CounterPage.tsx" collapsed',title:'"CounterPage.tsx"',collapsed:!0},"import { useLoading } from '@rest-hooks/hooks';\nimport { getCount, increment } from './api/Count';\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,i.kt)("p",null,"Try removing ",(0,i.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,i.kt)("a",{parentName:"p",href:"/rest/6.0/api/RestEndpoint"},"RestEndpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,i.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,i.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,i.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,i.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,i.kt)("a",{parentName:"p",href:"/rest/6.0/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,i.kt)("a",{parentName:"p",href:"/rest/6.0/api/RestEndpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,i.kt)(o.Z,{fixtures:[{endpoint:new a.Z({path:"/api/count"}),args:[],response:{count:0,updatedAt:new Date}}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Count.ts"',title:'"api/Count.ts"'},"export class CountEntity extends Entity {\n  count = 0;\n  updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nexport const getCount = new RestEndpoint({\n  path: '/api/count',\n  schema: CountEntity,\n  name: 'get',\n});\nexport const increment = new RestEndpoint({\n  path: '/api/count/increment',\n  method: 'POST',\n  name: 'increment',\n  schema: CountEntity,\n  getRequestInit() {\n    // substitute for super.getRequestInit()\n    return this.constructor.prototype.getRequestInit.call(this, {\n      updatedAt: Date.now(),\n    });\n  },\n  getOptimisticResponse(snap) {\n    const { data } = snap.getResponse(getCount);\n    if (!data) throw new AbortOptimistic();\n    return {\n      count: data.count + 1,\n      updatedAt: snap.fetchedAt,\n    };\n  },\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CounterPage.tsx" collapsed',title:'"CounterPage.tsx"',collapsed:!0},"import { useLoading } from '@rest-hooks/hooks';\nimport { getCount, increment } from './api/Count';\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}m.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(67294),i=n(87462),o=n(49544),a=n(86010),s=n(11614),l=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(h,{fixture:e})))))}var g=(0,r.memo)(m);function h(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var f=n(62974),y=n(80086),b=n(45045),k=n(76226),v=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=v.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i)){if(i.endsWith(".")||i.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[o,a,s,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),i.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.typescriptDefaults.setEagerModelSync(!0),i}))}}const E=(0,r.memo)(k.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const C=(0,r.memo)(o.uz);var N=n(3495).Z?function(e){let{onChange:t,code:n,path:i,autoFocus:a=!1,...s}=e;i.endsWith(".tsx")||i.endsWith(".ts")||(i+=".tsx"),function(e,t){const n=function(e){const t=(0,k.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${i}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,i]);const[l,c]=(0,r.useState)("100%"),u=(0,r.useCallback)((e=>{a&&e.focus();const t=Object.keys(s).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let i=0;const o=19*e.getModel().getLineCount()+10;n.style.height=o+"px",c(o),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;i=r.childElementCount,n.style.height=t+"px",c(o),e.layout()}),0)}))}),[]);return r.createElement(E,{path:i,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:x,theme:"prism",onMount:u,height:l,loading:r.createElement(o.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(C,{onChange:t,code:n})};function Z(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:O},type:"application/javascript"}))}var R=(0,r.memo)(Z);const O=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;function A(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},o)})))}function P(e){let{children:t}=e;return r.createElement(f.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(A,null))}function T(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(u.Z),o=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:d.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,o?r.createElement(P,null,t):null)}function S(e){let{children:t,transformCode:n,groupId:s,defaultOpen:u,row:p,hidden:m,fixtures:g,includeEndpoints:h,...f}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,a.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(o.nu,(0,i.Z)({theme:b},f),r.createElement(I,{reverse:"top"===y,row:p,fixtures:g,includeEndpoints:h,groupId:s,defaultOpen:u},t))),r.createElement(R,null))}function I(e){let{reverse:t,children:n,row:s,fixtures:l,includeEndpoints:c,groupId:u,defaultOpen:p}=e;const m=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i,...o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i,...o}}))),[n]),[h,f]=(0,r.useReducer)(_,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),k=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{f({i:t,code:e})}))),[g.length]),[v,w]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),E=h.join("\n");return r.createElement(L,{reverse:t},r.createElement("div",null,r.createElement(T,{fixtures:!s&&l}),s&&g.length>1?r.createElement(B,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>w((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:o,code:l,collapsed:c,...u}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(D,{onClick:()=>w((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,a.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:v[t]})},r.createElement(N,(0,i.Z)({key:t,onChange:k[t],code:h[t],path:"/"+m+"/"+(o||n||"default.tsx")},u))))}))),r.createElement(b.Z,{fallback:r.createElement(o.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:c,groupId:u,defaultOpen:p,row:s,fixtures:l}))},r.createElement(j,{code:E,includeEndpoints:c,groupId:u,defaultOpen:p,row:s,fixtures:l})))}T.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},S.defaultProps={row:!1,hidden:!1};const M="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),j=(0,r.lazy)((()=>M?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function L(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function _(e,t){const n=[...e];return n[t.i]=t.code,n}function D(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(f.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,a.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),i)}function B(e){let{titles:t,closedList:n,onClick:i}=e;const{values:o}=(0,r.useContext)(u.Z),s=o.length>0;return r.createElement(f.Z,{className:(0,a.Z)({[d.Z.small]:s,[d.Z.subtabs]:s},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}L.defaultProps={reverse:!1};const H=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:o,row:a=!1,fixtures:s}=e;return r.createElement(S,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:a,hidden:i,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};H.defaultProps={defaultOpen:"n",fixtures:[]};var F=(0,r.memo)(H)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),i=n(67294);function o(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),i=n(86010),o=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,i.Z)(o.Z.playgroundHeader,n,a?o.Z.clickable:null),onClick:a},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(67294),i=n(11614),o=n(92785),a=n(92954),s=n(48256),l=n(3604),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),g=n(29451),h=n(50634),f=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(h.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:o,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function w(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,o=i?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,o,m.Z.vertical)},"\u25b6")),i?r.createElement(C,null):null)}var E=(0,r.memo)(w);function x(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(x);var N=n(45045);function Z(e){let{groupId:t,defaultOpen:n,row:i,fixtures:g}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=h[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[k,t,y,f]),w=(0,r.useMemo)((()=>[new o.Z,new a.Z(s.Z)]),[]),x=!("n"===y||!i);return r.createElement(l.Z,{managers:w},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(N.Z,{fallback:r.createElement(O,null)},r.createElement(A,null))),r.createElement(E,{selectedValue:y,toggle:v})))}var R=(0,r.memo)(Z);function O(){return r.createElement("div",null,"Loading...")}const A=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var P=n(62974);function T(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(R,{groupId:t,defaultOpen:n,row:o,fixtures:a})))}var S=(0,r.memo)(T)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(64820);const o={React:r,...r,...i};t.Z=o},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i}}]);