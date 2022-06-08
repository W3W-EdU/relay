(self.webpackChunk=self.webpackChunk||[]).push([[62592],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){return function(t){var r=d(t.components);return n.createElement(e,a({},t,{components:r}))}},d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),p=i,h=s["".concat(o,".").concat(p)]||s[p]||m[p]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(79973),i=r(67294),a=r(73727),o=r(52263),c=r(13919),l=r(10412),u=(0,i.createContext)({collectLink:function(){}}),s=r(44996),d=r(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,r,m=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,g=e.isActive,w=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,x=(0,n.Z)(e,p),k=(0,o.default)().siteConfig,O=k.trailingSlash,E=k.baseUrl,R=(0,s.useBaseUrlUtils)().withBaseUrl,C=(0,i.useContext)(u),N=h||f,P=(0,c.Z)(N),A=null==N?void 0:N.replace("pathname://",""),j=void 0!==A?(r=A,y&&function(e){return e.startsWith("/")}(r)?R(r):r):void 0;j&&P&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:O,baseUrl:E}));var T=(0,i.useRef)(!1),U=m?a.OL:a.rU,M=l.default.canUseIntersectionObserver,D=(0,i.useRef)();(0,i.useEffect)((function(){return!M&&P&&null!=j&&window.docusaurus.prefetch(j),function(){M&&D.current&&D.current.disconnect()}}),[D,j,M,P]);var L=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,_=!j||!P||L;return j&&P&&!L&&!w&&C.collectLink(j),_?i.createElement("a",Object.assign({href:j},N&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(U,Object.assign({},x,{onMouseEnter:function(){T.current||null==j||(window.docusaurus.preload(j),T.current=!0)},innerRef:function(e){var t,r;M&&e&&P&&(t=e,r=function(){null!=j&&window.docusaurus.prefetch(j)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),r())}))})),D.current.observe(t))},to:j||""},m&&{isActive:g,activeClassName:v}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var n=r(52263),i=r(13919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(36742),i=r(44256),a=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return a.createElement(c,null,a.createElement(u,null),a.createElement(l,null),a.createElement(s,null))},p=function(){return a.createElement(c,null,a.createElement(l,null),a.createElement(s,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(d,null),external:a.createElement(p,null)})}},52848:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>s,toc:()=>d,default:()=>m});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=r(68629),c=["components"],l={id:"architecture-overview",title:"Architecture Overview",slug:"/principles-and-architecture/architecture-overview/",description:"Relay architecture overview guide",keywords:["architecture"]},u=void 0,s={unversionedId:"principles-and-architecture/architecture-overview",id:"principles-and-architecture/architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:"Relay architecture overview guide",source:"@site/docs/principles-and-architecture/architecture-overview.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/architecture-overview/",permalink:"/docs/next/principles-and-architecture/architecture-overview/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/principles-and-architecture/architecture-overview.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1654722976,formattedLastUpdatedAt:"6/8/2022",frontMatter:{id:"architecture-overview",title:"Architecture Overview",slug:"/principles-and-architecture/architecture-overview/",description:"Relay architecture overview guide",keywords:["architecture"]},sidebar:"docs",previous:{title:"Thinking in Relay",permalink:"/docs/next/principles-and-architecture/thinking-in-relay/"},next:{title:"Compiler Architecture",permalink:"/docs/next/principles-and-architecture/compiler-architecture/"}},d=[{value:"Core Modules",id:"core-modules",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This document, together with ",(0,a.mdx)("a",{parentName:"p",href:"../runtime-architecture/"},"Runtime Architecture")," and ",(0,a.mdx)("a",{parentName:"p",href:"../compiler-architecture/"},"Compiler Architecture"),", describes the high-level architecture of Relay. The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about ",(0,a.mdx)("em",{parentName:"p"},"using")," Relay to build products, the ",(0,a.mdx)("a",{parentName:"p",href:"../../guided-tour/"},"Guided Tour")," is the best resource."),(0,a.mdx)("h2",{id:"core-modules"},"Core Modules"),(0,a.mdx)("p",null,"Relay is composed of three core parts:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Relay Compiler:")," A GraphQL to GraphQL optimizing ",(0,a.mdx)("em",{parentName:"li"},"compiler"),", providing general utilities for transforming and optimizing queries as well as generating build artifacts. A novel feature of the compiler is that it facilitates experimentation with new GraphQL features - in the form of custom directives - by making it easy to translate code using these directives into standard, spec-compliant GraphQL."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Relay Runtime:")," A full-featured, high-performance GraphQL ",(0,a.mdx)("em",{parentName:"li"},"runtime"),' that can be used to build higher-level client APIs. The runtime features a normalized object cache, optimized "write" and "read" operations, a generic abstraction for incrementally fetching field data (such as for pagination), garbage collection for removing unreferenced cache entries, optimistic mutations with arbitrary logic, support for building subscriptions and live queries, and more.'),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"React/Relay:")," A high-level ",(0,a.mdx)("em",{parentName:"li"},"product API")," that integrates the Relay Runtime with React. This is the primary public interface to Relay for most product developers, featuring APIs to fetch the data for a query or define data dependencies for reusable components (e.g. ",(0,a.mdx)("inlineCode",{parentName:"li"},"useFragment"),").")),(0,a.mdx)("p",null,"Note that these modules are ",(0,a.mdx)("em",{parentName:"p"},"loosely coupled"),". For example, the compiler emits representations of queries in a well-defined format that the runtime consumes, such that the compiler implementation can be swapped out if desired. React/Relay relies only on the well-documented public interface of the runtime, such that the actual implementation can be swapped out. We hope that this loose coupling will allow the community to explore new use-cases such as the development of specialized product APIs using the Relay runtime or integrations of the runtime with view libraries other than React."),(0,a.mdx)(o.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);