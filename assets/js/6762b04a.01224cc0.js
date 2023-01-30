"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48072],{52125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"validateRequired"},s=void 0,i={unversionedId:"api/validateRequired",id:"version-5.1/api/validateRequired",title:"validateRequired",description:"Returns a string message if any keys of requiredDefaults are missing in processedEntity. This",source:"@site/rest_versioned_docs/version-5.1/api/validateRequired.md",sourceDirName:"api",slug:"/api/validateRequired",permalink:"/rest/5.1/api/validateRequired",draft:!1,editUrl:"https://github.com/data-client/rest-hooks/edit/master/docs/rest/api/validateRequired.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"validateRequired"},sidebar:"docs",previous:{title:"schema.Delete",permalink:"/rest/5.1/api/Delete"},next:{title:"SimpleRecord",permalink:"/rest/5.1/api/SimpleRecord"}},o={},u=[{value:"Partial/full results",id:"partialfull-results",level:2},{value:"Optional fields",id:"optional-fields",level:2},{value:"Full results only have optional fields",id:"full-results-only-have-optional-fields",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function validateRequired(processedEntity: any, requiredDefaults: Record<string, unknown>): string | undefined;\n")),(0,r.kt)("p",null,"Returns a string message if any keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredDefaults")," are missing in ",(0,r.kt)("inlineCode",{parentName:"p"},"processedEntity"),". This\ncan be used to ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#validate"},"validate")," fields that must be provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomBaseResource extends Resource {\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, this.defaults) || super.validate(processedEntity);\n  }\n}\n")),(0,r.kt)("h2",{id:"partialfull-results"},"Partial/full results"),(0,r.kt)("p",null,"This can be useful to automatically validate for ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/validation#partial-results"},"partial results")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class SummaryAnalysis extends Resource {\n  readonly id: string = '';\n  readonly createdAt: Date = new Date(0);\n  readonly meanValue: number = 0;\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n\nclass FullAnalysis extends SummaryAnalysis {\n  readonly graph: number[] = [];\n}\n")),(0,r.kt)("h2",{id:"optional-fields"},"Optional fields"),(0,r.kt)("p",null,"In case we have a field that won't always be present (like ",(0,r.kt)("inlineCode",{parentName:"p"},"lastRun")," here), we can simply\n'exclude' it from the fields we require."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class FullAnalysis extends SummaryAnalysis {\n  readonly graph: number[] = [];\n  readonly lastRun?: Date = new Date(0);\n\n  static schema = {\n    lastRun: Date,\n  }\n\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, exclude(this.defaults, ['lastRun']));\n  }\n}\n")),(0,r.kt)("details",{collapsed:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"exclude()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="exclude"',title:'"exclude"'},"function exclude<O extends Record<string, unknown>>(\n  obj: O,\n  keys: string[],\n): Partial<O> {\n  const r: any = {};\n  Object.keys(obj).forEach(k => {\n    if (!keys.includes(k)) r[k] = obj[k];\n  });\n  return r;\n}\n"))),(0,r.kt)("h3",{id:"full-results-only-have-optional-fields"},"Full results only have optional fields"),(0,r.kt)("p",null,"In case every field of the 'full' resource was optional:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class FullAnalysis extends SummaryAnalysis {\n  readonly graph?: number[] = [];\n  readonly lastRun?: Date = new Date(0);\n\n  static schema = {\n    lastRun: Date,\n  }\n\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, exclude(this.defaults, ['graph', 'lastRun']));\n  }\n}\n")),(0,r.kt)("p",null,"This code would not successfully know to fetch the 'full' resource if the summary is already provided.\nThere would be no way of knowing whether the fields simply don't exist for that data, or were not fetched.\nIn this case, it is best to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," default for ",(0,r.kt)("em",{parentName:"p"},"at least")," one field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class FullAnalysis extends SummaryAnalysis {\n  readonly graph: number[] = null;\n  readonly lastRun?: Date = new Date(0);\n\n  static schema = {\n    lastRun: Date,\n  }\n\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, exclude(this.defaults, ['lastRun']));\n  }\n}\n")),(0,r.kt)("p",null,"This enables the client to understand whether the 'full' resource has been fetched at all."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(o,".").concat(f)]||p[f]||c[f]||l;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);