(self.webpackChunk=self.webpackChunk||[]).push([[21323],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},39141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(67294),i=n(87462),a=n(49544),o=n(86010),s=n(11614),l=n(6832),c=n(99401),d=n(69762),u=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:u.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:u.Z.fixtureItem},r.createElement("div",{className:u.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:u.Z.fixtureJson},JSON.stringify(t.response))}var h=n(62974),y=n(80086),b=n(45045),k=n(76226),v=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=v.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i))return i.endsWith(".")||i.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[a,o,s,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;"),i.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.javascriptDefaults.setEagerModelSync(!0),i}))}}const E=(0,r.memo)(k.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1},C=(0,r.memo)(a.uz);var N,Z="undefined"==typeof window||/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)?function(e){let{onChange:t,code:n,path:i}=e;return r.createElement(C,{onChange:t,code:n})}:function(e){let{onChange:t,code:n,path:i}=e;i.endsWith(".tsx")||i.endsWith(".ts")||(i+=".tsx");const[a,o]=(0,r.useState)(50),s=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const i=19*e.getModel().getLineCount()+10;t.style.height=i+"px",o(i),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const a=19*n.childElementCount+10;r=n.childElementCount,t.style.height=a+"px",o(i),e.layout()}),0)}))}),[]);return r.createElement(E,{path:i,defaultLanguage:"typescript",onChange:t,value:n,options:x,theme:"prism",onMount:s,height:a})};function O(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,o.Z)(u.Z.tab,{[u.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function T(e){let{children:t}=e;return r.createElement(h.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(O,null))}function R(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(d.Z),a=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:u.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,a?r.createElement(T,null,t):null)}function A(e){let{children:t,transformCode:n,groupId:s,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:f,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(a.nu,(0,i.Z)({theme:b},h),r.createElement(P,{reverse:"top"===y,row:p,fixtures:g,includeEndpoints:f,groupId:s,defaultOpen:d},t)))}function P(e){let{reverse:t,children:n,row:i,fixtures:s,includeEndpoints:l,groupId:c,defaultOpen:d}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i}}))),[n]),[g,f]=(0,r.useReducer)(_,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>m.map(((e,t)=>e=>f({i:t,code:e})))),[m.length]),[k,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),w=g.join("\n");return r.createElement(I,{reverse:t},r.createElement("div",null,r.createElement(R,{fixtures:!i&&s}),i&&m.length>1?r.createElement(j,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:a}=e;return r.createElement(r.Fragment,{key:t},!i&&n?r.createElement(M,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,o.Z)(u.Z.playgroundEditor,{[u.Z.hidden]:k[t]})},r.createElement(Z,{key:t,onChange:h[t],code:g[t],path:"/"+p+"/"+(a||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:d,row:i,fixtures:s}))},r.createElement(D,{code:w,includeEndpoints:l,groupId:c,defaultOpen:d,row:i,fixtures:s})))}R.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},A.defaultProps={row:!1,hidden:!1};const S="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(N=navigator)?void 0:N.userAgent),D=(0,r.lazy)((()=>S?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,37097))));function I(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function _(e,t){const n=[...e];return n[t.i]=t.code,n}function M(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(h.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),i)}function j(e){let{titles:t,closedList:n,onClick:i}=e;const{values:a}=(0,r.useContext)(d.Z),s=a.length>0;return r.createElement(h.Z,{className:(0,o.Z)({[u.Z.small]:s,[u.Z.subtabs]:s},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,o.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}I.defaultProps={reverse:!1};const L=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a,row:o=!1,fixtures:s}=e;return r.createElement(A,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:i,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};L.defaultProps={defaultOpen:"n",fixtures:[]};var H=(0,r.memo)(L)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),i=n(67294);function a(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),i=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,i.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(67294),i=n(11614),a=n(27093),o=n(26127),s=n(82038),l=n(83611),c=n(39714),d=n(86010),u=n(76602),p=n(63735),m=n(45440),g=n(32041),f=n(97723),h=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function w(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,a=i?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),i?r.createElement(C,null):null)}var E=(0,r.memo)(w);function x(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(x);var N=n(45045);function Z(e){let{groupId:t,defaultOpen:n,row:i,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,u.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[k,t,y,h]),w=(0,r.useMemo)((()=>[new l.Z,new a.Z(o.Z)]),[]),x=!("n"===y||!i);return r.createElement(s.nq,{managers:w},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(N.Z,{fallback:r.createElement(T,null)},r.createElement(R,null))),r.createElement(E,{selectedValue:y,toggle:v})))}var O=(0,r.memo)(Z);function T(){return r.createElement("div",null,"Loading...")}const R=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var A=n(62974);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(A.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(O,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var S=(0,r.memo)(P)},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(72887);const a={React:r,...r,...i};t.Z=a},14199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(39141);const o={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"version-6.2/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/versioned_docs/version-6.2/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/6.2/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/6.2/guides/immediate-updates"},next:{title:"Aborting Fetch",permalink:"/docs/6.2/guides/abort"}},c={},d=[{value:"Partial updates",id:"partial-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets",level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",level:3},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets-1",level:3},{value:"CreateArticle.tsx",id:"createarticletsx",level:3},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, SchemaDetail, AbstractInstanceType } from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      getOptimisticResponse: (snap, params, body) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <button\n      onClick={() =>\n        fetch(ArticleResource.partialUpdate(), { id }, { published: true })\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, AbstractInstanceType } from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.create().extend({\n      getOptimisticResponse: (snap, params, body) => body,\n    });\n  }\n}\n\nexport const appendUpdater = (\n  newArticleID: string,\n  articleIDs: string[] | undefined,\n) => [...(articleIDs || []), newArticleID];\n")),(0,i.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      fetch(ArticleResource.create(), {}, { id: uuid(), ...data }, [\n        [ArticleResource.list(), {}, appendUpdater],\n      ]),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      getOptimisticResponse: (snap, params, body) => params,\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,i.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,i.kt)("p",null,"Try removing ",(0,i.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,i.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,i.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,i.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,i.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      // server already has this optimistic computation then do nothing\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i}}]);