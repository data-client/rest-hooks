"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76575],{30433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(86010),s="tabItem_Ymn6";function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,a),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(67294),s=r(86010),a=r(5730),l=r(20636),i=r(76602),c=r(63735),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:a,defaultValue:d,values:m,groupId:f,className:y}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[A,w]=(0,o.useState)(v),R=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==A&&g.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=R.indexOf(t),n=g[r].value;n!==A&&(N(t),w(n),null!=f&&x(f,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;r=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;r=R[t]??R[R.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},y)},g.map((e=>{let{value:t,label:r,attributes:a}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>R.push(e),onKeyDown:T,onClick:O},a,{className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":A===t})}),r??t)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,a.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},48804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),s=r(65559),a=r(30433);const l={title:"Mocking data for Storybook"},i=void 0,c={unversionedId:"guides/storybook",id:"version-6.6/guides/storybook",title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/versioned_docs/version-6.6/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/6.6/guides/storybook",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Mocking data for Storybook"},sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/6.6/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/6.6/guides/unit-testing-hooks"}},u={},p=[{value:"Setup",id:"setup",level:2},{value:"Fixtures",id:"fixtures",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Story",id:"story",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/6.6/api/MockResolver"},"<MockResolver /",">")," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.6/api/Controller#fetch"},"imperative fetches")," usually used with side-effect endpoints like ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#create"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(s.Z,{defaultValue:"ArticleResource.ts",values:[{label:"Resource",value:"ArticleResource.ts"},{label:"Component",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"export class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n\nexport let ArticleFixtures: Record<string, FixtureEndpoint> = {};\n"))),(0,o.kt)(a.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.tsx"',title:'"ArticleList.tsx"'},"import { ArticleResource } from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useSuspense(ArticleResource.getList, { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"// leave out in production so we don't bloat the bundle\nif (process.env.NODE_ENV !== 'production') {\n  ArticleFixtures = {\n    full: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: [\n          {\n            id: 5,\n            content: 'have a merry christmas',\n            author: 2,\n            contributors: [],\n          },\n          {\n            id: 532,\n            content: 'never again',\n            author: 23,\n            contributors: [5],\n          },\n        ],\n      },\n      {\n        endpoint: ArticleResource.update,\n        args: [{ id: 532 }] as const,\n        response: {\n          id: 532,\n          content: 'updated \"never again\"',\n          author: 23,\n          contributors: [5],\n        },\n      },\n    ],\n    empty: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: [],\n      },\n    ],\n    error: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: { message: 'Bad request', status: 400, name: 'Not Found' },\n        error: true,\n      },\n    ],\n    loading: [],\n  };\n}\n")),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title=".storybook/preview.tsx"',title:'".storybook/preview.tsx"'},"import { Suspense } from 'react';\nimport { CacheProvider, AsyncBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <AsyncBoundary fallback=\"loading\">\n        <Story />\n      </AsyncBoundary>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.6/api/MockResolver"},"<MockResolver /",">")," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.stories.tsx"',title:'"ArticleList.stories.tsx"'},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport { ArticleFixtures } from 'resources/ArticleResource';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(ArticleFixtures),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  // highlight-next-line\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n    // highlight-next-line\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);