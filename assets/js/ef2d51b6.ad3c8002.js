"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23660],{82050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Schema Quick Start",sidebar_label:"Quick Start"},i=void 0,s={unversionedId:"api/schema",id:"version-4.5/api/schema",title:"Schema Quick Start",description:"Consider a typical blog post. The API response for a single post might look something like this:",source:"@site/versioned_docs/version-4.5/api/schema.md",sourceDirName:"api",slug:"/api/schema",permalink:"/docs/4.5/api/schema",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/api/schema.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Schema Quick Start",sidebar_label:"Quick Start"}},l={},c=[],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consider a typical blog post. The API response for a single post might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "author": {\n    "id": "1",\n    "name": "Paul"\n  },\n  "title": "My awesome blog post",\n  "comments": [\n    {\n      "id": "324",\n      "createdAt": "2013-05-29T00:00:00-04:00",\n      "commenter": {\n        "id": "2",\n        "name": "Nicole"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"We have two nested entity types within our ",(0,a.kt)("inlineCode",{parentName:"p"},"article"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"comments"),". Using various ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),", we can normalize all three entity types down:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  readonly id: string = '';\n  readonly name: string = '';\n\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  readonly id: string = '';\n  readonly createdAt: Date = new Date(0);\n  readonly commenter: User = User.fromJS({});\n\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly author: User = User.fromJS({});\n  readonly comments: Comment[] = [];\n\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n")),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"normalizedData")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  result: "123",\n  entities: {\n    "articles": Article {\n      "123": {\n        id: "123",\n        author: "1",\n        title: "My awesome blog post",\n        comments: [ "324" ]\n      }\n    },\n    "users": {\n      "1": User { "id": "1", "name": "Paul" },\n      "2": User { "id": "2", "name": "Nicole" }\n    },\n    "comments": {\n      "324": Comment {\n        id: "324",\n        "createdAt": Date(`May 29, 2013`),\n        "commenter": "2"\n      }\n    }\n  }\n}\n')))}p.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(y,i(i({ref:n},m),{},{components:t})):r.createElement(y,i({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);