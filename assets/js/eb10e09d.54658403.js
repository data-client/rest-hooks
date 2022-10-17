/*! For license information please see eb10e09d.54658403.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64693],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var k=g.prototype=new b;k.constructor=g,y(k,v.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,Z={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var l,a={},o=null,i=null;if(null!=t)for(l in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,l)&&!x.hasOwnProperty(l)&&(a[l]=t[l]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(l in s=e.defaultProps)void 0===a[l]&&(a[l]=s[l]);return{$$typeof:n,type:e,key:o,ref:i,props:a,_owner:Z.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,l,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===a?"."+_(s,0):a,E(o)?(l="",null!=e&&(l=e.replace(I,"$&/")+"/"),O(o,t,l,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,l+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(I,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",E(e))for(var u=0;u<e.length;u++){var c=a+_(i=e[u],u);s+=O(i,t,l,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=O(i=i.value,t,l,c=a+_(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],l=0;return O(e,r,"","",(function(e){return t.call(n,e,l++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var S={current:null},j={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(27378),n(3905));n(70523),n(107);const a={title:"Test"},o=void 0,i={unversionedId:"api/Test",id:"api/Test",title:"Test",description:"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by schema.Array or schema.Values but for non-collection fields.",source:"@site/../docs/rest/api/Test.md",sourceDirName:"api",slug:"/api/Test",permalink:"/rest/api/Test",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Test.md",tags:[],version:"current",frontMatter:{title:"Test"}},s={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,l.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,l.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,l.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,l.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'live title="api/Feed.ts" noInline',live:!0,title:'"api/Feed.ts"',noInline:!0},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nclass FeedItem extends Entity {\n  id = 0;\n  type;\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n   type = 'link' ;\n   url = '';\n   title = '';\n}\nclass Post extends FeedItem {\n   type = 'post' ;\n   content = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\nfunction FeedList() {\n  const feedItems = [];\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'live title="api/Feed.ts" noInline',live:!0,title:'"api/Feed.ts"',noInline:!0},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'live title="FeedList.tsx" noInline',live:!0,title:'"FeedList.tsx"',noInline:!0},"function FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n")))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),l=n(67294),a=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:f,className:y}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[w,Z]=(0,l.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&v.some((t=>t.value===e))&&Z(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==w&&(N(t),Z(r),null!=f&&E(f,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},y)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(67294),l=n(87462),a=n(49544),o=n(86010),i=n(95999),s=n(52263),u=n(66412),c=n(84195),d=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(p);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var y=n(60975),h=n(51523),v=n(1556);const b=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function g(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:l,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===l?0:-1,"aria-selected":e===l,key:l,className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:e===l}),onFocus:t,onClick:t,value:l},a)})))}function k(e){let{children:t}=e;return r.createElement(y.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(g,null))}function E(e){let{title:t,fixtures:n}=e;const{values:l}=(0,r.useContext)(c.Z),a=l.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:d.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,a?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:i,defaultOpen:c,row:p,hidden:m,fixtures:f,includeEndpoints:y,...h}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,b=(0,u.p)();return r.createElement("div",{className:(0,o.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,l.Z)({theme:b},h),r.createElement(Z,{reverse:"top"===v,row:p,fixtures:f,includeEndpoints:y,groupId:i,defaultOpen:c},t)))}function Z(e){let{reverse:t,children:n,row:l,fixtures:o,includeEndpoints:i,groupId:s,defaultOpen:u}=e;const c=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,p]=(0,r.useReducer)(N,void 0,(()=>c.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>c.map(((e,t)=>e=>p({i:t,code:e})))),[c.length]),[f,y]=(0,r.useState)((()=>c.map((e=>{let{collapsed:t}=e;return t})))),g=d.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!l&&o}),l&&c.length>1?r.createElement(O,{titles:c.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>y((t=>t.map(((t,n)=>n!==e))))}):null,c.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!l&&n?r.createElement(_,{onClick:()=>y((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(I,{key:t,onChange:m[t],code:d[t]}))}))),r.createElement(v.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:i,groupId:s,defaultOpen:u,row:l,fixtures:o}))},r.createElement(b,{code:g,includeEndpoints:i,groupId:s,defaultOpen:u,row:l,fixtures:o})))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const C=(0,r.memo)(a.uz);function I(e){let{onChange:t,code:n}=e;return r.createElement(C,{className:d.Z.playgroundEditor,onChange:t,code:n})}function _(e){let{onClick:t,closed:n,title:l}=e;return r.createElement(y.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),l)}function O(e){let{titles:t,closedList:n,onClick:l}=e;const{values:a}=(0,r.useContext)(c.Z),i=a.length>0;return r.createElement(y.Z,{className:(0,o.Z)({[d.Z.small]:i,[d.Z.subtabs]:i},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>l(t),className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const T=e=>{let{children:t,groupId:n,hidden:l=!1,defaultOpen:a,row:o=!1,fixtures:i}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:l,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};T.defaultProps={defaultOpen:"n",fixtures:[]};var P=(0,r.memo)(T)},70523:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),l=n(85162),a=n(67294);function o(e){let{children:t}=e;return a.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(l.Z,{value:"ts"},t[0]),a.createElement(l.Z,{value:"js"},t[1]))}},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),l=n(67294);function a(e){let{fallback:t,children:n}=e;return l.createElement(r.Z,{fallback:t},(()=>l.createElement(l.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,l.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(67294),l=n(95999),a=n(27093),o=n(26127),i=n(82038),s=n(83611),u=n(39714),c=n(86010),d=n(7094),p=n(12466),m=n(45440),f=n(32041),y=n(97723),h=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,l=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:l[t]}}},base0B:"rgb(191, 199, 213)"})),[n,l]);return r.createElement(y.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const g="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return g&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const l="y"===n,a=l?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),l?r.createElement(x,null):null)}var w=(0,r.memo)(E);function Z(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const x=(0,r.memo)(Z);var N=n(1556);function C(e){let{groupId:t,defaultOpen:n,row:l,fixtures:f}=e;const{tabGroupChoices:y,setTabGroupChoices:h}=(0,d.U)(),[v,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:g}=(0,p.o5)();if(null!=t){const e=y[t];null!=e&&e!==v&&b(e)}const k=(0,r.useCallback)((e=>{g(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===v?"n":"y")}),[g,t,v,h]),E=(0,r.useMemo)((()=>[new s.Z,new a.Z(o.Z)]),[]),Z=!("n"===v||!l);return r.createElement(i.nq,{managers:E},r.createElement(u.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:Z})},r.createElement(N.Z,{fallback:r.createElement(_,null)},r.createElement(O,null))),r.createElement(w,{selectedValue:v,toggle:k})))}var I=(0,r.memo)(C);function _(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var T=n(60975);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(T.Z,null,r.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(I,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var S=(0,r.memo)(P)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);