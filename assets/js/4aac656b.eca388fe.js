"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[19269],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),i=t(86010),o=t(72389),l=t(67392),s=t(7094),u=t(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,l.l)(y,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&y.some((n=>n.value===e))&&T(e)}const j=e=>{const n=e.currentTarget,t=O.indexOf(n),a=y[t].value;a!==N&&(E(n),T(a),null!=h&&w(h,String(a)))},U=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>O.push(e),onKeyDown:U,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},70523:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(65488),r=t(85162),i=t(67294);function o(e){let{children:n}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},n[0]),i.createElement(r.Z,{value:"js"},n[1]))}},86198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905)),i=t(70523);const o={title:"Union"},l=void 0,s={unversionedId:"api/Union",id:"version-5.0/api/Union",title:"Union",description:"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by schema.Array or schema.Values but for non-collection fields.",source:"@site/versioned_docs/version-5.0/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/docs/5.0/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Union.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Union"},sidebar:"version-5.0/docs",previous:{title:"Array",permalink:"/docs/5.0/api/Array"},next:{title:"Values",permalink:"/docs/5.0/api/Values"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4},{value:"Output",id:"output",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,r.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  readonly name: string = '';\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: { '1': { id: 1, type: 'user', name: 'Anne' } }\n  },\n  result: { owner: { id: 1, schema: 'User' } }\n}\n")))}d.isMDXComponent=!0}}]);