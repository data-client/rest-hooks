"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[82799],{15721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(70523),s=a(65488),o=a(85162),i=a(96497);const u={id:"usage",title:"REST",sidebar_label:"Usage"},c=void 0,d={unversionedId:"usage",id:"version-5.2/usage",title:"REST",description:"Using REST APIs with Rest Hooks",source:"@site/rest_versioned_docs/version-5.2/usage.md",sourceDirName:".",slug:"/usage",permalink:"/rest/5.2/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/usage.md",tags:[],version:"5.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"usage",title:"REST",sidebar_label:"Usage"},sidebar:"docs",next:{title:"URL Patterns",permalink:"/rest/5.2/guides/url"}},p={},m=[{value:"Define a Resource",id:"define-a-resource",level:2},{value:"Use the Resource",id:"use-the-resource",level:2},{value:"Dispatch mutation",id:"dispatch-mutation",level:2}],h={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Using REST APIs with Rest Hooks")),(0,r.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/article.ts"',title:'"resources/article.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resources/article.js"',title:'"resources/article.js"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource"},"Resource"),"s are immutable. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,r.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#pk"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#urlRoot"},"static urlRoot")," is used as the basis of common ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/guides/url"},"url patterns")),(0,r.kt)("p",null,"APIs quickly get much more complicated! ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/guides/extending-endpoints"},"Customizing Resources to fit your API")),(0,r.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,r.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,r.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useSuspense(ArticleResource.list(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/Endpoint#dataexpirylength"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#async-fallbacks"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"/rest/5.2/api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)("h2",{id:"dispatch-mutation"},"Dispatch mutation"),(0,r.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(ArticleResource.create(), new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#create"},"create()")," then takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,r.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const { fetch } = useController();\n  return (\n    <Form\n      onSubmit={e => fetch(ArticleResource.update(), { id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#update"},"update()")," then takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nthen takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,r.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const { fetch } = useController();\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => fetch(ArticleResource.delete(), { id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")))),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,r.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}k.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),u=a(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[x,R]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&R(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==x&&(w(t),R(n),null!=h&&N(h,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:A,onClick:A},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},70523:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(65488),r=a(85162),l=a(67294);function s(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},96497:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(65488),r=a(85162),l=a(67294),s=a(75690);function o(e){let{pkgs:t,dev:a=!1}=e;return l.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(r.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),l.createElement(r.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(72887);const l={React:n,...n,...r}}}]);