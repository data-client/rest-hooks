/*! For license information please see dd5e5d55.6d41d337.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[78120],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var k=g.prototype=new v;k.constructor=g,y(k,h.prototype),k.isPureReactComponent=!0;var E=Array.isArray,D=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var a,o={},s=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)D.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];o.children=i}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var L=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===o?"."+Z(u,0):o,E(s)?(a="",null!=e&&(a=e.replace(L,"$&/")+"/"),T(s,t,a,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(L,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",E(e))for(var i=0;i<e.length;i++){var c=o+Z(l=e[i],i);u+=T(l,t,a,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),i=0;!(l=e.next()).done;)u+=T(l=l.value,t,a,c=o+Z(l,i++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function x(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},C={transition:null}},27378:(e,t,n)=>{n(41535)},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),l=n(67392),u=n(7094),i=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:f,groupId:m,className:y}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,u.U)(),[D,S]=(0,a.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==D&&h.some((t=>t.value===e))&&S(e)}const N=e=>{const t=e.currentTarget,n=_.indexOf(t),r=h[n].value;r!==D&&(w(t),S(r),null!=m&&E(m,String(r)))},L=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},y)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>_.push(e),onKeyDown:L,onFocus:N,onClick:N},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":D===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function f(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},t[0]),o.createElement(a.Z,{value:"generics"},t[1]))}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),o=n(67294),s=n(38436);function l(e){let{pkgs:t,dev:n=!1}=e;return o.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(55468);const o={React:r,...r,...a}},90451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=(n(96497),n(11048)),s=n(85761);const l={title:"useDLE()"},u=void 0,i={unversionedId:"api/useDLE",id:"api/useDLE",title:"useDLE()",description:"In case you cannot use suspense, useDLE() is just like useSuspense() but returns [D]ata [L]oading [E]rror values.",source:"@site/../docs/core/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/api/useDLE",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/api/useFetch"},next:{title:"useMeta()",permalink:"/docs/api/useMeta"}},c={},p=[{value:"Hook usage",id:"hook-usage",level:2}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): {\n  data: Denormalize<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): {\n  data: DenormalizeNullable<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n"))),(0,a.kt)("p",null,"In case you cannot use suspense, useDLE() is just like ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ProfileResource.ts"',title:'"resources/ProfileResource.ts"'},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useDLE } from 'rest-hooks';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useDLE(ProfileResource.list());\n  if (error) return <div>Error {error.status}</div>;\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      {data.map(profile => (\n        <Meta\n          key={profile.pk()}\n          avatar={<Avatar src={profile.img} />}\n          title={profile.fullName}\n          description={profile.bio}\n        />\n      ))}\n    </Card>\n  );\n}\n")),(0,a.kt)(s.ZP,{hook:"useDLE",mdxType:"ConditionalDependencies"}))}f.isMDXComponent=!0},85761:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),a=(n(27378),n(3905)),o=n(38436);const s={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}l.isMDXComponent=!0}}]);