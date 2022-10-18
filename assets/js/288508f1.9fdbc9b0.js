"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(70523),s=r(65488),o=r(85162),i=r(96497);const u={id:"README",title:"REST",sidebar_label:"Usage"},c=void 0,p={unversionedId:"README",id:"version-5.0/README",title:"REST",description:"Using REST APIs with Rest Hooks",source:"@site/rest_versioned_docs/version-5.0/README.md",sourceDirName:".",slug:"/",permalink:"/rest/5.0/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/README.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{id:"README",title:"REST",sidebar_label:"Usage"},sidebar:"docs",next:{title:"URL Patterns",permalink:"/rest/5.0/guides/url"}},d={},m=[{value:"Define a Resource",id:"define-a-resource",level:2},{value:"Use the Resource",id:"use-the-resource",level:2},{value:"Dispatch mutation",id:"dispatch-mutation",level:2}],h={toc:m};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Using REST APIs with Rest Hooks")),(0,n.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,n.kt)(l.Z,{mdxType:"LanguageTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/article.ts"',title:'"resources/article.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resources/article.js"',title:'"resources/article.js"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resource"),"s are immutable. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,n.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#pk"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#urlRoot"},"static urlRoot")," is used as the basis of common ",(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/guides/url"},"url patterns")),(0,n.kt)("p",null,"APIs quickly get much more complicated! ",(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/guides/extending-endpoints"},"Customizing Resources to fit your API")),(0,n.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,n.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,n.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useSuspense(ArticleResource.list(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint#dataexpirylength"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#async-fallbacks"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,n.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,n.kt)("a",{parentName:"li",href:"/rest/5.0/api/Endpoint"},"endpoints"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,n.kt)("h2",{id:"dispatch-mutation"},"Dispatch mutation"),(0,n.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(ArticleResource.create(), new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#create"},"create()")," then takes any ",(0,n.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,n.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const { fetch } = useController();\n  return (\n    <Form\n      onSubmit={e => fetch(ArticleResource.update(), { id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#update"},"update()")," then takes any ",(0,n.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nthen takes any ",(0,n.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,n.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const { fetch } = useController();\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => fetch(ArticleResource.delete(), { id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")))),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,n.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}f.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),l=r(86010),s=r(72389),o=r(67392),i=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:m,groupId:h,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??y.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,o.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[w,E]=(0,n.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,r=x.indexOf(t),a=b[r].value;a!==w&&(R(t),E(a),null!=h&&N(h,String(a)))},A=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},b.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:A,onFocus:T,onClick:T},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},70523:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(65488),n=r(85162),l=r(67294);function s(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(n.Z,{value:"ts"},t[0]),l.createElement(n.Z,{value:"js"},t[1]))}},96497:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(65488),n=r(85162),l=r(67294),s=r(75690);function o(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var a=r(67294),n=r(72887);const l={React:a,...a,...n};t.Z=l}}]);