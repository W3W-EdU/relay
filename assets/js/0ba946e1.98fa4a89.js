(self.webpackChunk=self.webpackChunk||[]).push([[22381],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(r),g=i,v=u["".concat(l,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>v});var n,i=r(22122),a=r(19756),o=(r(67294),r(3905)),d=["components"],l={id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},c=void 0,p={unversionedId:"debugging/declarative-mutation-directives",id:"version-v13.0.0/debugging/declarative-mutation-directives",isDocsHomePage:!1,title:"Debugging Declarative Mutation Directives",description:"Debugging declarative mutation directives",source:"@site/versioned_docs/version-v13.0.0/debugging/declarative-mutation-directives.md",sourceDirName:"debugging",slug:"/debugging/declarative-mutation-directives/",permalink:"/docs/debugging/declarative-mutation-directives/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/debugging/declarative-mutation-directives.md",version:"v13.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1642630497,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},sidebar:"version-v13.0.0/docs",previous:{title:"Inconsistent Typename Error",permalink:"/docs/debugging/inconsistent-typename-error/"},next:{title:"Thinking in GraphQL",permalink:"/docs/principles-and-architecture/thinking-in-graphql/"}},s=[],u=(n="FbEnvHandlerExample",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:s};function v(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you see an error similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RelayFBHandlerProvider: No handler defined for `deleteRecord`. [Caught in: An uncaught error was thrown inside `RelayObservable`.]\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RelayModernEnvironment: Expected a handler to be provided for handle `deleteRecord`.\n")),(0,o.kt)("p",null,"This probably means that you are using a Relay environment to which a ",(0,o.kt)("inlineCode",{parentName:"p"},"handlerProvider")," is passed. However, the handler provider does not know how to accept the handles ",(0,o.kt)("inlineCode",{parentName:"p"},'"deleteRecord"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"appendEdge"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"prependEdge"'),". If this is the case, you should return ",(0,o.kt)("inlineCode",{parentName:"p"},"MutationHandlers.DeleteRecordHandler"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MutationHandlers.AppendEdgeHandler"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"MutationHandlers.PrependEdgeHandler")," respectively (these can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"relay-runtime"),")."),(0,o.kt)(u,{mdxType:"FbEnvHandlerExample"}))}v.isMDXComponent=!0}}]);