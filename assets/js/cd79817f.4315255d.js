"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32075],{20046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Immediate Mutation Updates"},o=void 0,i={unversionedId:"guides/immediate-updates",id:"version-7.0/guides/immediate-updates",title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/versioned_docs/version-7.0/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/7.0/guides/immediate-updates",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Immediate Mutation Updates"},sidebar:"docs",previous:{title:"Render as you Fetch",permalink:"/docs/7.0/guides/render-as-you-fetch"},next:{title:"Aborting Fetch",permalink:"/docs/7.0/guides/abort"}},d={},u=[{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Create",id:"create",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,a.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,a.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response endpoints,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update endpoints ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"Resource.update")," and\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#partialupdate"},"Resource.partialUpdate")," both do this automatically. ",(0,a.kt)("a",{parentName:"p",href:"/rest/guides/rpc"},"Read more about defining other\nupdate endpoints")),(0,a.kt)("h2",{id:"delete"},"Delete"),(0,a.kt)("p",null,"Rest Hooks automatically deletes entity entries ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"schema.Delete")," is used.\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#delete"},"Resource.delete"),"\nprovides such an endpoint."),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useSuspense() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#update"},"Endpoint.update")," handles this case"),(0,a.kt)("p",null,"Simplest case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,a.kt)("p",null,"More updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,a.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,a.kt)("p",null,"This is usage with a ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\nconst BaseTodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id'\n})\nexport const TodoResource = {\n  ...BaseTodoResource,\n  create: BaseTodoResource.create.extend({\n    // highlight-start\n    update: (newResourcePk: string) => ({\n      [todoList.key({})]: (resourcePks: string[] = []) => [\n        ...resourcePks,\n        newResourcePk,\n      ],\n    }),\n    // highlight-end\n  })\n}\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||s;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);