"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64003],{30433:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(86010),a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),o=n(67294),a=n(86010),s=n(63735),u=n(76775),l=n(34423),i=n(20636),c=n(99200);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,i]=f({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=l??d;return m({value:e,tabValues:a})?e:null})();(0,o.useEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),h(e)}),[i,h,a]),tabValues:a}}var b=n(5730),g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:u,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==u&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",k,s?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(y,(0,r.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},52393:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(13743),o=n(30433),a=n(22808),s=n(67294);function u(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(o.Z,{value:"yarn"},s.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(o.Z,{value:"npm"},s.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},57489:(e,t,n)=>{var r=n(67294),o=n(64820);const a={React:r,...r,...o};t.Z=a},49067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(52393);const s={title:"Usage with class components"},u=void 0,l={unversionedId:"guides/class-components",id:"version-5.0/guides/class-components",title:"Usage with class components",description:"Hooks are great, but many of us are working with existing codebases or libraries",source:"@site/versioned_docs/version-5.0/guides/class-components.md",sourceDirName:"guides",slug:"/guides/class-components",permalink:"/docs/5.0/guides/class-components",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/class-components.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Usage with class components"},sidebar:"version-5.0/docs",previous:{title:"Redux integration",permalink:"/docs/5.0/guides/redux"},next:{title:"Usage without Suspense",permalink:"/docs/5.0/guides/no-suspense"}},i={},c=[{value:"Install hook-hoc",id:"install-hook-hoc",level:2},{value:"Use with class",id:"use-with-class",level:2},{value:"Extracting the function",id:"extracting-the-function",level:2},{value:"Filters, debounce and more",id:"filters-debounce-and-more",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks are great, but many of us are working with existing codebases or libraries\nwith class based components. Some might be easy to migrate but others might be\nmore diffcult. Should this block you from adopting rest-hooks? Of course not!"),(0,o.kt)("p",null,"Using the simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")," interop library\nwe can create Higher Order Components from hooks quite easily. This enables us\nto easily replace any existing HOC with ease."),(0,o.kt)("h2",{id:"install-hook-hoc"},"Install ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")),(0,o.kt)(a.Z,{pkgs:"hook-hoc",mdxType:"PkgTabs"}),(0,o.kt)("h2",{id:"use-with-class"},"Use with class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(({ id }: { id: number }) => {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n})(Profile);\n")),(0,o.kt)("p",null,"Here you can see the return value of the function you pass in gets injected into the props\nof the component you wrap."),(0,o.kt)("h2",{id:"extracting-the-function"},"Extracting the function"),(0,o.kt)("p",null,"You might notice the function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"withHook()")," is a function that calls\nhooks. That makes it a hook by definition. To make this detectable by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"rules of hooks"),"\nand also potentially reusable, let's move it out to a named function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n}\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(useProfile)(Profile);\n")),(0,o.kt)("h2",{id:"filters-debounce-and-more"},"Filters, debounce and more"),(0,o.kt)("p",null,"Often times you'll be doing a bit more than just retrieving the data. We can\ndo all of that extra work in the hook we just created. Here we'll add some\nclient-side filtering as well as ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useDebounce/"},"debouncing")," the requests themselves."),(0,o.kt)("p",null,"You can combine any hooks here - the sky's the limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const debouncedId = useDebounce(id, 150);\n\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  const realFriends = friends.filter(friend => friend.isReal);\n\n  return { user, friends: realFriends };\n}\n\n// rest of file...\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);