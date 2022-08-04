"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[70816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=s.createContext({}),l=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?s.createElement(m,i(i({ref:t},c),{},{components:n})):s.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={title:"Typing REST Endpoints"},i=void 0,o={unversionedId:"guides/rest-types",id:"version-4.3/guides/rest-types",title:"Typing REST Endpoints",description:"In REST design, many operations can be performed on a given type of data.",source:"@site/versioned_docs/version-4.3/guides/rest-types.md",sourceDirName:"guides",slug:"/guides/rest-types",permalink:"/docs/4.3/guides/rest-types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rest-types.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Typing REST Endpoints"}},p={},l=[{value:"TL;DR",id:"tldr",level:2},{value:"RestEndpoint",id:"restendpoint",level:3},{value:"Usage",id:"usage",level:3},{value:"Problem",id:"problem",level:2},{value:"Generics, static methods, and this",id:"generics-static-methods-and-this",level:2},{value:"Solution: generics",id:"solution-generics",level:2},{value:"A limitation",id:"a-limitation",level:2},{value:"Workaround",id:"workaround",level:3},{value:"As Resource",id:"as-resource",level:2},{value:"Extending and adding endpoints",id:"extending-and-adding-endpoints",level:2},{value:"Typing rules of thumb",id:"typing-rules-of-thumb",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In REST design, many operations can be performed on a given type of data."),(0,r.kt)("p",null,"Attaching these operations to the type via static methods allows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A singular import for both class usage, typing, and endpoints"),(0,r.kt)("li",{parentName:"ul"},"Reducing code duplication by extracting common patterns into base classes")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," provides one such pattern, which makes getting started\nfast. However, even if the pattern generally matches your API design, there\nare often special operations or one-off cases where additional endpoints must\nbe extended or added."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("h3",{id:"restendpoint"},"RestEndpoint"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/types#restendpoint"},"RestEndpoint")," type is provided to conveniently declare\n",(0,r.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"RestEndpoint<\n  F extends FetchFunction = RestFetch,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Here's an example of each endpoint's return typed followed by usage. For\na full explanation, continue reading below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, RestEndpoint, RestFetch } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, SchemaList<AbstractInstanceType<T>>, undefined> {\n    return super.list();\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{}, Partial<AbstractInstanceType<T>>>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    return super.create();\n  }\n\n  static filteredAndPaginatedList<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ filterA: boolean; sortby: string }>,\n    { results: T[]; nextPage: string },\n    undefined\n  > {\n    return super.list().extend({ schema: { results: [this], nextPage: '' } });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import MyResource from 'resources/MyResource';\nimport { useResource } from 'rest-hooks';\n\nconst items = useResource(MyResource.list(), {});\nconst createMy = useFetcher(MyResource.create());\nconst { results, nextPage } = useResource(\n  MyResource.filteredAndPaginatedList(),\n  { filterA: true, sortby: 'first' },\n);\n")),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"To reduce code bloat, make development faster, reducing maintenance costs and reduce errors it is recommended\nto share common patterns in parent classes, and only specify what is specific to a given\nresource in that resource's class. Oftentimes this looks like simply its expected members\nand a pk() definition (though if you use a common field for pk() - you can also pull that up)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," is an example attempt that is useful for many common REST patterns that\ncan be further extended and easily customized like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class User {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/user/${id}`).then(res => res.json()),\n      { schema: User },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/user`).then(res => res.json()), {\n      schema: [User],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/post/${id}`).then(res => res.json()),\n      { schema: Post },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/post`).then(res => res.json()), {\n      schema: [Post],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static urlRoot = '/user';\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/post';\n}\n")),(0,r.kt)("p",null,"Even in this overly simplistic case we're more than halving the lines of code.\nOnce the complexities of the real world kick in, this improvement expands."),(0,r.kt)("p",null,"However, we now have a problem. Before we were explictily specifying the ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s'\nexpected shape via the ",(0,r.kt)("a",{parentName:"p",href:"../api/schema"},"schema"),". Now it if we use the common methods like .detail()\nwe lose our typing information."),(0,r.kt)("h2",{id:"generics-static-methods-and-this"},"Generics, static methods, and this"),(0,r.kt)("p",null,"To explain the solution - generic ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," - let's simplify the example."),(0,r.kt)("p",null,"Here we'll define a static method that returns the type of the class - ",(0,r.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory(): Base {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,r.kt)("p",null,"If we inspect the runtime value, it says the type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Base.factory();\n// print Base\nconsole.log(typeof obj);\n")),(0,r.kt)("p",null,"Now we extend that class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  another = 5;\n}\n")),(0,r.kt)("p",null,"And call the same static method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,r.kt)("p",null,"TypeScript will implicitly type ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Base"),", but at runtime, we can see it's really ",(0,r.kt)("inlineCode",{parentName:"p"},"Child")),(0,r.kt)("h2",{id:"solution-generics"},"Solution: generics"),(0,r.kt)("p",null,"Generics in TypeScript can be attached to parameters in any function and automatically inferred.\nSince ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is implicit, TypeScript allows you to explictly bind ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," if you want a method's\nreturn type based on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory<T extends Base>(this: T): T {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Child\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,r.kt)("p",null,"Now when we call the method defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," on any descendant, it is typed appropriately!"),(0,r.kt)("h2",{id:"a-limitation"},"A limitation"),(0,r.kt)("p",null,"While generic ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is powerful in allowing correct typing even for inherited classes, it\nhas one annoying bug: ",(0,r.kt)("inlineCode",{parentName:"p"},"super")," calls incorrectly resolve to the constraint, rather than the generic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    // @ts-expect-error - typescript says obj is not compatible with T\n    return obj;\n  }\n}\n")),(0,r.kt)("h3",{id:"workaround"},"Workaround"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")," is mostly to be avoided, but since we are careful to type our return\ntype correctly in the method, we can be confident the rest of our code will\nstill be protected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    return obj as any;\n  }\n}\n")),(0,r.kt)("p",null,"This is only needed if we are setting the type directly from the super call.\nWe'll see below we only need to do this when we retain the schema from the super call.\nThis is also not necessary if ",(0,r.kt)("inlineCode",{parentName:"p"},"this.method()")," is called as this bug ",(0,r.kt)("em",{parentName:"p"},"only")," affects ",(0,r.kt)("inlineCode",{parentName:"p"},"super")),(0,r.kt)("h2",{id:"as-resource"},"As Resource"),(0,r.kt)("p",null,"Applying this to our original example, we get something along the lines of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.url(props)).then(res => res.json()),\n      { schema: this },\n    );\n  }\n\n  static list<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.listUrl(props)).then(res => res.json()),\n      { schema: [this] },\n    );\n  }\n}\n")),(0,r.kt)("h2",{id:"extending-and-adding-endpoints"},"Extending and adding endpoints"),(0,r.kt)("p",null,"This means any time we define our own ",(0,r.kt)("a",{parentName:"p",href:"./extending-endpoints"},"custom endpoints")," we should\nbe sure to include generics so the types are alwalys correct."),(0,r.kt)("p",null,"For instance, we can change the expected response of the API to have the resource\ninside the 'data' attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n")),(0,r.kt)("p",null,"If we were to explicitly type thing, we could use ",(0,r.kt)("inlineCode",{parentName:"p"},"RestEndpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof result is { data: User }\nconst result = useResource(User.detail(), { id });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, { data: T }, undefined> {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof id is string\nconst result = useResource(User.detail(), { id });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ id: string }>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    undefined\n  > {\n    // super.detail() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.detail() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// works\nconst updateUser = useFetcher(User.update());\n// typeerror - protected against mutable operations\nconst user = useResource(User.update());\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const updateUser = useFetcher(User.update());\n\nconst handleClick = useCallback(() => {\n  // works\n  const response = await updateUser({ id }, { username: 'bob' });\n  // typeerror\n  const failed = await updateUser({ id }, { username: 5 });\n  // typeerror\n  const failed = await updateUser({ id }, { usernme: 'bob' });\n}, [updateUser]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<object, { username: string }>, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n")),(0,r.kt)("h2",{id:"typing-rules-of-thumb"},"Typing rules of thumb"),(0,r.kt)("p",null,"Generally you want to type return values as specific as possible, but accept\nfunction arguments as loose as possible (like in hooks). To follow this principal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/types#restendpoint"},"RestEndpoint")," for endpoints in ",(0,r.kt)("a",{parentName:"li",href:"../api/Resource"},"Resource"),"s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/types#endpointinstance"},"EndpointInstance")," for anything that uses the ",(0,r.kt)("a",{parentName:"li",href:"../api/Endpoint"},"Endpoint")," class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/types#endpointinterface"},"EndpointInterface")," for any hook arguments")))}d.isMDXComponent=!0}}]);