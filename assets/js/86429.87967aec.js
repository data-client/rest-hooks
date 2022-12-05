"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86429],{54539:(e,t,r)=>{r.d(t,{Z:()=>n});class n extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}},86429:(e,t,r)=>{function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}r.d(t,{Z:()=>f});var s=0;function o(e){return"__private_"+s+++"_"+e}var i=r(4391),a=r(54539),c=r(76729);var h=r(79882),u=o("hasBody");class f extends i.Z{constructor(e){var t;super(null!=(t=e.fetch)?t:function(...e){const t=n(this,u)[u]&&e.length<2?{}:e[0]||{},r=n(this,u)[u]?e[e.length-1]:void 0;return this.fetchResponse(this.url(t),this.getRequestInit(r)).then((e=>this.parseResponse(e))).then((t=>this.process(t,...e)))},e),Object.defineProperty(this,u,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),n(this,u)[u]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(...e){return`${this.method} ${this.url(n(this,u)[u]&&e.length<2?{}:e[0]||{})}`}url(e={}){const t=(0,h.MT)(this.path)(e),r=(0,h.P6)(this.path),n={};return Object.keys(e).forEach((t=>{r.has(t)||(n[t]=e[t])})),Object.keys(n).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(n)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=(0,h.Td)(e);t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new a.Z(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const r=new a.Z(e);throw r.status=404,r.message=`Unexpected text response for schema ${this.schema}`,r}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:(0,c.Z)(this,e)})}}},79882:(e,t,r)=>{r.d(t,{MT:()=>c,P6:()=>u,Td:()=>d,Ih:()=>l});r(46314);function n(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var s=1,o="";if("?"===e[a=r+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;)if("\\"!==e[a]){if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));o+=e[a++]}else o+=e[a++]+e[a++];if(s)throw new TypeError("Unbalanced pattern at ".concat(r));if(!o)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:o}),r=a}else{for(var i="",a=r+1;a<e.length;){var c=e.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;i+=e[a++]}if(!i)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:i}),r=a}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,s=void 0===n?"./":n,i="[^".concat(o(t.delimiter||"/#?"),"]+?"),a=[],c=0,h=0,u="",f=function(e){if(h<r.length&&r[h].type===e)return r[h++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[h],s=n.type,o=n.index;throw new TypeError("Unexpected ".concat(s," at ").concat(o,", expected ").concat(e))},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};h<r.length;){var l=f("CHAR"),v=f("NAME"),y=f("PATTERN");if(v||y){var E=l||"";-1===s.indexOf(E)&&(u+=E,E=""),u&&(a.push(u),u=""),a.push({name:v||c++,prefix:E,suffix:"",pattern:y||i,modifier:f("MODIFIER")||""})}else{var m=l||f("ESCAPED_CHAR");if(m)u+=m;else if(u&&(a.push(u),u=""),f("OPEN")){E=d();var g=f("NAME")||"",w=f("PATTERN")||"",x=d();p("CLOSE"),a.push({name:g||(w?c++:""),pattern:g&&!w?i:w,prefix:E,suffix:x,modifier:f("MODIFIER")||""})}else p("END")}}return a}function s(e,t){return function(e,t){void 0===t&&(t={});var r=i(t),n=t.encode,s=void 0===n?function(e){return e}:n,o=t.validate,a=void 0===o||o,c=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),r)}));return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o){var i=t?t[o.name]:void 0,h="?"===o.modifier||"*"===o.modifier,u="*"===o.modifier||"+"===o.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===i.length){if(h)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var f=0;f<i.length;f++){var p=s(i[f],o);if(a&&!c[n].test(p))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(p,'"'));r+=o.prefix+p+o.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!h){var d=u?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(d))}}else{p=s(String(i),o);if(a&&!c[n].test(p))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(p,'"'));r+=o.prefix+p+o.suffix}}else r+=o}return r}}(n(e,t),t)}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e&&e.sensitive?"":"i"}const a={};function c(e){return Object.hasOwn(a,e)||(a[e]=s(e,{encode:encodeURIComponent,validate:!1})),a[e]}const h={};function u(e){return Object.hasOwn(h,e)||(h[e]=new Set(n(e).map((e=>"string"==typeof e?e:`${e.name}`)))),h[e]}const f=Object.prototype,p=Object.getPrototypeOf;function d(e){return null!==e&&"object"==typeof e&&p(e)===f}function l(e){let t=e.substring(0,e.lastIndexOf(":"));return"/"===t[t.length-1]&&(t=t.substring(0,t.length-1)),t}},76729:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(44522),s=r(69360);function o(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof n.Z||Array.isArray(e))return[];const t=e instanceof s.ZP?e.schema:e;for(const r in t){if(!t[r])continue;const e=o(t[r]);if(!1!==e)return e.unshift(r),e}return!1}function i(e,t){const r=o(e.schema);if(!1===r)throw new Error("schema has no array");return(n,...s)=>({[e.key(...t(...s))]:e=>{const t=a(e,r),s=new Set(t),o=a(n,r).filter((e=>!s.has(e))),i=[...t,...o];return c(e,r,i)}})}const a=(e,t)=>{let r=e;for(const n of t){if(!r)return[];r=r[n]}return r||[]},c=(e,t,r)=>{if(0===t.length)return r;const n={...e};let s=n;for(let o=0;o<t.length-1;o++){const e=t[o];s=s[e]={...s[e]}}return s[t[t.length-1]]=r,n}}}]);