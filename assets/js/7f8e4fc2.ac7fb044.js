"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20943],{30433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},22808:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(67294),s=n(86010),o=n(63735),l=n(76775),i=n(34423),u=n(20636),p=n(99200);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,u]=h({queryString:n,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=i??c;return m({value:e,tabValues:s})?e:null})();(0,a.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var g=n(5730),v="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(c(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",k,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",v)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(30433),a=n(22808),s=n(67294);function o(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(r.Z,{value:"ts"},t[0]),s.createElement(r.Z,{value:"js"},t[1]))}},18144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=(n(47885),n(22808)),o=n(30433);const l={title:"Controller"},i=void 0,u={unversionedId:"api/Controller",id:"version-6.6/api/Controller",title:"Controller",description:"Controller - Imperative Controls for Rest Hooks",source:"@site/versioned_docs/version-6.6/api/Controller.md",sourceDirName:"api",slug:"/api/Controller",permalink:"/docs/6.6/api/Controller",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Controller.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Controller"},sidebar:"docs",previous:{title:"TypeScript Types",permalink:"/docs/6.6/api/types"},next:{title:"Snapshot",permalink:"/docs/6.6/api/Snapshot"}},p={},c=[{value:"fetch(endpoint, ...args)",id:"fetch",level:2},{value:"Endpoint.sideEffect",id:"endpointsideeffect",level:3},{value:"true",id:"true",level:4},{value:"undefined",id:"undefined",level:4},{value:"invalidate(endpoint, ...args)",id:"invalidate",level:2},{value:"resetEntireStore()",id:"resetEntireStore",level:2},{value:"receive(endpoint, ...args, response)",id:"receive",level:2},{value:"receiveError(endpoint, ...args, error)",id:"receiveError",level:2},{value:"resolve(endpoint, { args, response, fetchedAt, error })",id:"resolve",level:2},{value:"subscribe(endpoint, ...args)",id:"subscribe",level:2},{value:"unsubscribe(endpoint, ...args)",id:"unsubscribe",level:2},{value:"getResponse(endpoint, ...args, state)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"Example",id:"example",level:3},{value:"getError(endpoint, ...args, state)",id:"getError",level:2},{value:"snapshot(state, fetchedAt)",id:"snapshot",level:2},{value:"getState()",id:"getState",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Controller - Imperative Controls for Rest Hooks"),(0,a.kt)("meta",{name:"docsearch:pagerank",content:"30"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Controller {\n  /*************** Action Dispatchers ***************/\n  fetch(endpoint, ...args) => ReturnType<E>;\n  invalidate(endpoint, ...args) => Promise<void>;\n  resetEntireStore: () => Promise<void>;\n  receive(endpoint, ...args, response) => Promise<void>;\n  receiveError(endpoint, ...args, error) => Promise<void>;\n  resolve(endpoint, { args, response, fetchedAt, error }) => Promise<void>;\n  subscribe(endpoint, ...args) => Promise<void>;\n  unsubscribe(endpoint, ...args) => Promise<void>;\n  /*************** Data Access ***************/\n  getResponse(endpoint, ...args, state)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args, state)\u200b => ErrorTypes | undefined;\n  snapshot(state: State<unknown>, fetchedAt?: number): SnapshotInterface;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useController"},"useController()")," provides access in React components"),(0,a.kt)("h2",{id:"fetch"},"fetch(endpoint, ...args)"),(0,a.kt)("p",null,"Fetches the endpoint with given args, updating the Rest Hooks cache with\nthe response or error upon completion."),(0,a.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n\n  return (\n    <form onSubmit={e => fetch(PostResource.create, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e => fetch(PostResource.update, { id }, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const { fetch } = useController();\n\n  const handleDelete = useCallback(\n    async e => {\n      await fetch(PostResource.delete, { id: post.id });\n      history.push('/');\n    },\n    [fetch, id],\n  );\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={handleDelete}>X</button>\n    </div>\n  );\n}\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," has the same return value as the ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," passed to it.\nWhen using schemas, the denormalized value can be retrieved using a combination of\n",(0,a.kt)("a",{parentName:"p",href:"#getResponse"},"Controller.getResponse")," and ",(0,a.kt)("a",{parentName:"p",href:"#getState"},"Controller.getState")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await controller.fetch(PostResource.create, createPayload);\nconst denormalizedResponse = controller.getResponse(\n  PostResource.create,\n  createPayload,\n  controller.getState(),\n);\n"))),(0,a.kt)("h3",{id:"endpointsideeffect"},"Endpoint.sideEffect"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#sideeffect"},"sideEffect")," changes the behavior"),(0,a.kt)("h4",{id:"true"},"true"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"before")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Each call will always cause a new fetch.")),(0,a.kt)("h4",{id:"undefined"},"undefined"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"after")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Identical requests are deduplicated globally; allowing only one inflight request at a time.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To ensure a ",(0,a.kt)("em",{parentName:"li"},"new")," request is started, make sure to abort any existing inflight requests.")))),(0,a.kt)("h2",{id:"invalidate"},"invalidate(endpoint, ...args)"),(0,a.kt)("p",null,"Forces refetching and suspense on ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useSuspense"},"useSuspense")," with the same Endpoint\nand parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  const { invalidate } = useController();\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidate(ArticleResource.get, { id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To refresh while continuing to display stale data - ",(0,a.kt)("a",{parentName:"p",href:"#fetch"},"Controller.fetch")," instead.")),(0,a.kt)("admonition",{title:"Invalidate many endpoints at once",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"schema.Delete")," to invalidate every endpoint that contains a given entity.")),(0,a.kt)("h2",{id:"resetEntireStore"},"resetEntireStore()"),(0,a.kt)("p",null,"Resets/clears the entire Rest Hooks cache. All inflight requests will not resolve."),(0,a.kt)("p",null,"This is typically used when logging out or changing authenticated users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useSuspense(CurrentUserResource.get);\n  const { resetEntireStore } = useController();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // highlight-next-line\n    resetEntireStore();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"receive"},"receive(endpoint, ...args, response)"),(0,a.kt)("p",null,"Stores ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache for given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args."),(0,a.kt)("p",null,"Any components suspending for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args will resolve."),(0,a.kt)("p",null,"If data already exists for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args, it will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { receive } = useController();\n\nuseEffect(() => {\n  const websocket = new Websocket(url);\n\n  websocket.onmessage = event =>\n    receive(EndpointLookup[event.endpoint], ...event.args, event.data);\n\n  return () => websocket.close();\n});\n")),(0,a.kt)("h2",{id:"receiveError"},"receiveError(endpoint, ...args, error)"),(0,a.kt)("p",null,"Stores the result of ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args as the error provided."),(0,a.kt)("h2",{id:"resolve"},"resolve(endpoint, { args, response, fetchedAt, error })"),(0,a.kt)("p",null,"Resolves a specific fetch, storing the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache."),(0,a.kt)("p",null,"This is similar to receive, except it triggers resolution of an inflight fetch.\nThis means the corresponding optimistic update will no longer be applies."),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/NetworkManager"},"NetworkManager"),", and should be used when\nprocessing fetch requests."),(0,a.kt)("h2",{id:"subscribe"},"subscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks a new subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should increment the subscription."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useSubscription"},"useSubscription")," calls this on mount."),(0,a.kt)("p",null,"This might be useful for custom hooks to sub/unsub based on other factors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const controller = useController();\nconst key = endpoint.key(...args);\n\nuseEffect(() => {\n  controller.subscribe(endpoint, ...args);\n  return () => controller.unsubscribe(endpoint, ...args);\n}, [controller, key]);\n")),(0,a.kt)("h2",{id:"unsubscribe"},"unsubscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks completion of subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should\ndecrement the subscription and if the count reaches 0, more updates won't be received automatically."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useSubscription"},"useSubscription")," calls this on unmount."),(0,a.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args, state)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,a.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,a.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,a.kt)("h4",{id:"valid"},"Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will never suspend."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalid"},"Invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will always suspend"),(0,a.kt)("li",{parentName:"ul"},"Will always fetch")),(0,a.kt)("h3",{id:"expiresat"},"expiresAt"),(0,a.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useCache"},"useCache"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/useSuspense"},"useSuspense")," and can be used in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/Manager"},"Managers")," to lookup a response with the state provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useCache.ts"',title:'"useCache.ts"'},"import {\n  useController,\n  StateContext,\n  EndpointInterface,\n} from '@rest-hooks/core';\n\n/** Oversimplified useCache */\nfunction useCache<E extends EntityInterface>(\n  endpoint: E,\n  ...args: readonly [...Parameters<E>]\n) {\n  const state = useContext(StateContext);\n  const controller = useController();\n  return controller.getResponse(endpoint, ...args, state).data;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyManager.ts"',title:'"MyManager.ts"'},"import type { Manager, Middleware, actionTypes } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class MyManager implements Manager {\n  protected declare middleware: Middleware;\n  constructor() {\n    this.middleware = ({ controller, getState }) => {\n      return next => async action => {\n        if (action.type === actionTypes.FETCH_TYPE) {\n          console.log('The existing response of the requested fetch');\n          console.log(\n            controller.getResponse(\n              action.endpoint,\n              ...(action.meta.args as Parameters<typeof action.endpoint>),\n              getState(),\n            ).data,\n          );\n        }\n        next(action);\n      };\n    };\n  }\n\n  cleanup() {\n    this.websocket.close();\n  }\n\n  getMiddleware<T extends StreamManager>(this: T) {\n    return this.middleware;\n  }\n}\n")),(0,a.kt)("h2",{id:"getError"},"getError(endpoint, ...args, state)"),(0,a.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,a.kt)("h2",{id:"snapshot"},"snapshot(state, fetchedAt)"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.6/api/Snapshot"},"Snapshot"),"."),(0,a.kt)("h2",{id:"getState"},"getState()"),(0,a.kt)("p",null,"Gets the internal state of Rest Hooks that has ",(0,a.kt)("em",{parentName:"p"},"already been committed"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This should only be used in event handlers and not during React's render lifecycle.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const controller = useController();\n\nconst updateHandler = useCallback(\n  async updatePayload => {\n    const response = await controller.fetch(\n      MyResource.update,\n      { id },\n      updatePayload,\n    );\n    const denormalized = controller.getResponse(\n      MyResource.update,\n      { id },\n      updatePayload,\n      controller.getState(),\n    );\n    redirect(denormalized.getterUrl);\n  },\n  [id],\n);\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);