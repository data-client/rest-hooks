(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[20197],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10764:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=(n(70523),n(9790));const i={title:"schema.Values"},o=void 0,s={unversionedId:"api/Values",id:"version-0.2/api/Values",title:"schema.Values",description:"schema.Values - Representing Objects with arbitrary keys | Rest Hooks",source:"@site/graphql_versioned_docs/version-0.2/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/graphql/0.2/api/Values",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/api/Values.md",tags:[],version:"0.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"schema.Values"},sidebar:"docs",previous:{title:"schema.Union",permalink:"/graphql/0.2/api/Union"},next:{title:"schema.Delete",permalink:"/graphql/0.2/api/Delete"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with arbitrary keys | Rest Hooks")),(0,a.kt)("p",null,"Like ",(0,a.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,a.kt)("p",null,"Describes a map whose values follow the given schema."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,a.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("em",{parentName:"li"},"optional")," (required if ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ firstThing: { id: 1 }, secondThing: { id: 2 } });\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() {\n    return `${this.id}`;\n  }\n}\nconst itemValues = new Endpoint(sampleData, {\n  schema: new schema.Values(Item),\n});\nfunction ItemPage() {\n  const items = useSuspense(itemValues, {});\n  return <pre>{JSON.stringify(items, undefined, 2)}</pre>;\n}\nrender(<ItemPage />);\n"))),(0,a.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,a.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,a.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,a.kt)("p",null,"The return values should match a key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        links: Link,\n        posts: Post,\n      },\n(input: any, parent: unknown, key: string) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:h,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,s.U)(),[w,N]=(0,a.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==w&&(x(t),N(r),null!=h&&E(h,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ee});var r=n(67294),a=n(4391),l=n(12171),i=n(56265),o=n(78357),s=n(56855),u=n(99494),c=n(70794),d=n(86429),p=n(67288);class m extends i.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const y=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),g={...y,partialUpdate:y.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(y.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:y.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[y.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:y.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),k=n(49544),b=n(86010),E=n(95999),w=n(52263),N=n(72389),I=n(66412),x=n(55423),T=n(84195),O=n(27093),C=n(26127),Z=n(82038),P=n(54202),D=n(7094),A=n(12466),j=n(91262);const S="playgroundContainer_sLUA",L="row_YGZs",V="hidden_Hh8i",F="playgroundHeader_Zx4K",U="playgroundEditor_lYwu",_="playgroundPreview_rk9R",R="playgroundError_sRnA",q="playgroundResult_tefG",M="debugToggle_zlro",$="tabControls_trxh",z="tabs_m54V",H="tab_bTGw",B="selected_QXZk";var G=n(32041),X=n(97723),J=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,J.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:Y,data:t,valueRenderer:Q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function Q(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:M,onClick:t},"Store"),"y"===n?r.createElement(re,null):null)}const te=(0,r.memo)(ee);function ne(){const e=(0,r.useContext)(G.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const re=(0,r.memo)(ne);function ae(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:i}=(0,D.U)(),[o,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,A.o5)();if(null!=t){const e=l[t];null!=e&&e!==o&&s(e)}const c=(0,r.useCallback)((e=>{u(e.currentTarget),s((e=>"y"===e?"n":"y")),i(t,"y"===o?"n":"y")}),[u,t,o,i]),d=(0,r.useMemo)((()=>[new P.Z,new O.Z(C.Z)]),[]),p=!("n"===o||!a);return r.createElement(Z.nq,{managers:d},r.createElement("div",{className:(0,b.Z)(_,{[V]:p})},r.createElement(j.Z,{fallback:r.createElement(ie,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ie,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:R}))))),r.createElement(te,{selectedValue:o,toggle:c}))}const le=(0,r.memo)(ae);function ie(){return r.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(F,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(oe,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:q},r.createElement(le,{groupId:t,defaultOpen:n,row:a})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,b.Z)(H,{[B]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function ce(e){let{children:t}=e;return r.createElement(oe,{className:$},r.createElement("div",null,t),r.createElement(ue,null))}function de(e){let{title:t}=e;const{values:n}=(0,r.useContext)(T.Z),a=n.length>0,l=(0,N.Z)();return r.createElement("div",null,a?r.createElement(ce,null,t):r.createElement(oe,null,t),r.createElement(k.uz,{key:l,className:U}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:i,hidden:o=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,w.Z)(),c=(0,I.p)();s.scope;return r.createElement("div",{className:(0,b.Z)(S,{[L]:i,[V]:o})},r.createElement(k.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>x.transpileModule(e,{compilerOptions:{module:x.ModuleKind.ESNext,target:x.ScriptTarget.ES2017,jsx:"react"}}).outputText)(`${e};`)),theme:c},s),"top"===u?r.createElement(r.Fragment,null,r.createElement(se,{groupId:a,defaultOpen:l,row:i}),r.createElement(de,null)):r.createElement(r.Fragment,null,r.createElement(de,null),r.createElement(se,{groupId:a,defaultOpen:l,row:i}))))}de.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(64146),he=n(82026);class fe extends i.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}fe.schema={updatedAt:Date};const ye=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:fe});const ge={...g,getList:g.getList.extend({process:e=>e.slice(0,7)})},ve={...l,...o,...u,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:ye,TimedEntity:fe,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,me.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:R},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},ke={...ve,Todo:h,TodoResource:ge,TodoEndpoint:f},be=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:i="n",row:o=!1}=e;return r.createElement(pe,{scope:n?ve:ke,noInline:!0,groupId:a,defaultOpen:i,row:o,hidden:l},(n?n+"\n\n":"")+("string"==typeof t?t:t.props.children.props.children))},Ee=(0,r.memo)(be)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(65488),a=n(85162),l=n(67294);function i(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);