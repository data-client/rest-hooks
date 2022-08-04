"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[10377],{85162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),s=t(86010);const r="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,o),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),s=t(67294),r=t(86010),o=t(72389),l=t(67392),i=t(7094),u=t(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var a;const{lazy:t,block:o,defaultValue:p,values:m,groupId:g,className:h}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,l.l)(f,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[w,E]=(0,s.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&f.some((a=>a.value===e))&&E(e)}const T=e=>{const a=e.currentTarget,t=P.indexOf(a),n=f[t].value;n!==w&&(S(a),E(n),null!=g&&N(g,String(n)))},x=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]??P[P.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:a,label:t,attributes:o}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>P.push(e),onKeyDown:x,onFocus:T,onClick:T},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,s.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function m(e){const a=(0,o.Z)();return s.createElement(p,(0,n.Z)({key:String(a)},e))}},96497:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(65488),s=t(85162),r=t(67294),o=t(38436);function l(e){let{pkgs:a,dev:t=!1}=e;return r.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(s.Z,{value:"yarn"},r.createElement(o.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",a)),r.createElement(s.Z,{value:"npm"},r.createElement(o.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",a)))}},56922:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),s=t(55468);const r={React:n,...n,...s}},80796:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(87462),s=(t(67294),t(3905)),r=t(96497);const o={title:"Usage without Suspense"},l=void 0,i={unversionedId:"guides/no-suspense",id:"version-6.1/guides/no-suspense",title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-6.1/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/6.1/guides/no-suspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Usage without Suspense"},sidebar:"version-6.1/docs",previous:{title:"Usage with class components",permalink:"/docs/6.1/guides/class-components"},next:{title:"Legacy browser support",permalink:"/docs/6.1/guides/legacy-browser"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>resources/ProfileResource.ts</code>",id:"resourcesprofileresourcets",level:4},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4},{value:"API",id:"api",level:2}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Some libraries you work with may take a ",(0,s.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,s.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(r.Z,{pkgs:"@rest-hooks/legacy",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,s.kt)("h4",{id:"resourcesprofileresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,s.kt)("h4",{id:"profilelisttsx"},(0,s.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null\n  ): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}p.isMDXComponent=!0}}]);