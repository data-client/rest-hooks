"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55352],{30433:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),s=n(86010),l=n(5730),o=n(20636),i=n(76602),p=n(63735),u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,i.U)(),[N,E]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==N&&(C(t),E(r),null!=m&&y(m,String(r)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:S,onClick:x},l,{className:(0,s.Z)("tabs__item",c,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(30433),a=n(65559),s=n(67294);function l(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(r.Z,{value:"ts"},t[0]),s.createElement(r.Z,{value:"js"},t[1]))}},94385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=(n(47885),n(65559)),l=n(30433);const o={title:"Controller"},i=void 0,p={unversionedId:"api/Controller",id:"version-6.3/api/Controller",title:"Controller",description:"Controller - Imperative Controls for Rest Hooks",source:"@site/versioned_docs/version-6.3/api/Controller.md",sourceDirName:"api",slug:"/api/Controller",permalink:"/docs/6.3/api/Controller",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Controller.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Controller"},sidebar:"docs",previous:{title:"TypeScript Types",permalink:"/docs/6.3/api/types"},next:{title:"Snapshot",permalink:"/docs/6.3/api/Snapshot"}},u={},c=[{value:"fetch(endpoint, ...args)",id:"fetch",level:2},{value:"Endpoint.sideEffect",id:"endpointsideeffect",level:3},{value:"true",id:"true",level:4},{value:"undefined",id:"undefined",level:4},{value:"useFetchInit()",id:"usefetchinit",level:3},{value:"invalidate(endpoint, ...args)",id:"invalidate",level:2},{value:"resetEntireStore()",id:"resetEntireStore",level:2},{value:"receive(endpoint, ...args, response)",id:"receive",level:2},{value:"receiveError(endpoint, ...args, error)",id:"receiveError",level:2},{value:"resolve(endpoint, { args, response, fetchedAt, error })",id:"resolve",level:2},{value:"subscribe(endpoint, ...args)",id:"subscribe",level:2},{value:"unsubscribe(endpoint, ...args)",id:"unsubscribe",level:2},{value:"getResponse(endpoint, ...args, state)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"Example",id:"example",level:3},{value:"getError(endpoint, ...args, state)",id:"getError",level:2},{value:"snapshot(state, fetchedAt)",id:"snapshot",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Controller - Imperative Controls for Rest Hooks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Controller {\n  /*************** Action Dispatchers ***************/\n  fetch(endpoint, ...args) => ReturnType<E>;\n  invalidate(endpoint, ...args) => Promise<void>;\n  resetEntireStore: () => Promise<void>;\n  receive(endpoint, ...args, response) => Promise<void>;\n  receiveError(endpoint, ...args, error) => Promise<void>;\n  resolve(endpoint, { args, response, fetchedAt, error }) => Promise<void>;\n  subscribe(endpoint, ...args) => Promise<void>;\n  unsubscribe(endpoint, ...args) => Promise<void>;\n  /*************** Data Access ***************/\n  getResponse(endpoint, ...args, state)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args, state)\u200b => ErrorTypes | undefined;\n  snapshot(state: State<unknown>, fetchedAt?: number): SnapshotInterface;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useController"},"useController()")," provides access in React components"),(0,a.kt)("h2",{id:"fetch"},"fetch(endpoint, ...args)"),(0,a.kt)("p",null,"Fetches the endpoint with given args, updating the Rest Hooks cache with\nthe response or error upon completion."),(0,a.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e => fetch(PostResource.create(), {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e =>\n        fetch(PostResource.update(), { id }, new FormData(e.target))\n      }\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const { fetch } = useController();\n\n  const handleDelete = useCallback(\n    async e => {\n      await fetch(PostResource.delete(), { id: post.id });\n      history.push('/');\n    },\n    [fetch, id],\n  );\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={handleDelete}>X</button>\n    </div>\n  );\n}\n")))),(0,a.kt)("h3",{id:"endpointsideeffect"},"Endpoint.sideEffect"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#sideeffect"},"sideEffect")," changes the behavior"),(0,a.kt)("h4",{id:"true"},"true"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"before")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Each call will always cause a new fetch.")),(0,a.kt)("h4",{id:"undefined"},"undefined"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"after")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Identical requests are deduplicated globally; allowing only one inflight request at a time.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To ensure a ",(0,a.kt)("em",{parentName:"li"},"new")," request is started, make sure to abort any existing inflight requests.")))),(0,a.kt)("h3",{id:"usefetchinit"},"useFetchInit()"),(0,a.kt)("p",null,"Overriding ",(0,a.kt)("a",{parentName:"p",href:"./rest/api/resource#useFetchInit"},"Resource.useFetchInit()")," makes it necessary to hoist all endpoint calls\nto the function render."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.create() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.create();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,a.kt)("h2",{id:"invalidate"},"invalidate(endpoint, ...args)"),(0,a.kt)("p",null,"Forces refetching and suspense on ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense")," with the same Endpoint\nand parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const { invalidate } = useController();\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidate(ArticleResource.detail(), { id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To refresh while continuing to display stale data - ",(0,a.kt)("a",{parentName:"p",href:"#fetch"},"Controller.fetch")," instead.")),(0,a.kt)("admonition",{title:"Invalidate many endpoints at once",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"schema.Delete")," to invalidate every endpoint that contains a given entity.")),(0,a.kt)("h2",{id:"resetEntireStore"},"resetEntireStore()"),(0,a.kt)("p",null,"Resets the entire Rest Hooks cache. All inflight requests will not resolve."),(0,a.kt)("p",null,"This is typically used when logging out or changing authenticated users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useSuspense(CurrentUserResource.detail(), { });\n  const { resetEntireStore } = useController();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // highlight-next-line\n    resetEntireStore();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"receive"},"receive(endpoint, ...args, response)"),(0,a.kt)("p",null,"Stores ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache for given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args."),(0,a.kt)("p",null,"Any components suspending for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args will resolve."),(0,a.kt)("p",null,"If data already exists for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args, it will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { receive } = useController();\n\nuseEffect(() => {\n  const websocket = new Websocket(url);\n\n  websocket.onmessage = event =>\n    receive(EndpointLookup[event.endpoint], ...event.args, event.data);\n\n  return () => websocket.close();\n});\n")),(0,a.kt)("h2",{id:"receiveError"},"receiveError(endpoint, ...args, error)"),(0,a.kt)("p",null,"Stores the result of ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args as the error provided."),(0,a.kt)("h2",{id:"resolve"},"resolve(endpoint, { args, response, fetchedAt, error })"),(0,a.kt)("p",null,"Resolves a specific fetch, storing the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache."),(0,a.kt)("p",null,"This is similar to receive, except it triggers resolution of an inflight fetch.\nThis means the corresponding optimistic update will no longer be applies."),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/NetworkManager"},"NetworkManager"),", and should be used when\nprocessing fetch requests."),(0,a.kt)("h2",{id:"subscribe"},"subscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks a new subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should increment the subscription."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSubscription"},"useSubscription")," calls this on mount."),(0,a.kt)("p",null,"This might be useful for custom hooks to sub/unsub based on other factors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const controller = useController();\nconst key = endpoint.key(...args);\n\nuseEffect(() => {\n  controller.subscribe(endpoint, ...args);\n  return () => controller.unsubscribe(endpoint, ...args);\n}, [controller, key]);\n")),(0,a.kt)("h2",{id:"unsubscribe"},"unsubscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks completion of subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should\ndecrement the subscription and if the count reaches 0, more updates won't be received automatically."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSubscription"},"useSubscription")," calls this on unmount."),(0,a.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args, state)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,a.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,a.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,a.kt)("h4",{id:"valid"},"Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will never suspend."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalid"},"Invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will always suspend"),(0,a.kt)("li",{parentName:"ul"},"Will always fetch")),(0,a.kt)("h3",{id:"expiresat"},"expiresAt"),(0,a.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useCache"},"useCache"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense")," and can be used in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/Manager"},"Managers")," to lookup a response with the state provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useCache.ts"',title:'"useCache.ts"'},"import {\n  useController,\n  StateContext,\n  EndpointInterface,\n} from '@rest-hooks/core';\n\n/** Oversimplified useCache */\nfunction useCache<E extends EntityInterface>(\n  endpoint: E,\n  ...args: readonly [...Parameters<E>]\n) {\n  const state = useContext(StateContext);\n  const controller = useController();\n  return controller.getResponse(endpoint, ...args, state).data;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyManager.ts"',title:'"MyManager.ts"'},"import type { Manager, Middleware, actionTypes } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class MyManager implements Manager {\n  protected declare middleware: Middleware;\n  constructor() {\n    this.middleware = ({ controller, getState }) => {\n      return next => async action => {\n        if (action.type === actionTypes.FETCH_TYPE) {\n          console.log('The existing response of the requested fetch');\n          console.log(\n            controller.getResponse(\n              action.endpoint,\n              ...(action.meta.args as Parameters<typeof action.endpoint>),\n              getState(),\n            ).data,\n          );\n        }\n        next(action);\n      };\n    };\n  }\n\n  cleanup() {\n    this.websocket.close();\n  }\n\n  getMiddleware<T extends StreamManager>(this: T) {\n    return this.middleware;\n  }\n}\n")),(0,a.kt)("h2",{id:"getError"},"getError(endpoint, ...args, state)"),(0,a.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,a.kt)("h2",{id:"snapshot"},"snapshot(state, fetchedAt)"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/Snapshot"},"Snapshot"),"."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);