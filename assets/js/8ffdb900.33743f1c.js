"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47203],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>h,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(t),h=r,m=s["".concat(o,".").concat(h)]||s[h]||p[h]||i;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(39960),r=t(86341),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var c=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(c,null),i.createElement(s,null))},h=function(){return i.createElement(l,null,i.createElement(c,null),i.createElement(s,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(h,null)})}},82825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=(t(68629),["components"]),l={id:"catch-directive",title:"@catch Directive",slug:"/guides/catch-directive/",description:"Relay guide to @catch",keywords:["catch","directive","optional"]},c=void 0,d={unversionedId:"guides/catch-directive",id:"guides/catch-directive",title:"@catch Directive",description:"Relay guide to @catch",source:"@site/docs/guides/catch-directive.md",sourceDirName:"guides",slug:"/guides/catch-directive/",permalink:"/docs/next/guides/catch-directive/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/catch-directive.md",tags:[],version:"current",frontMatter:{id:"catch-directive",title:"@catch Directive",slug:"/guides/catch-directive/",description:"Relay guide to @catch",keywords:["catch","directive","optional"]}},s={},u=[{value:"What can be caught with <code>@catch</code>?",id:"what-can-be-caught-with-catch",level:2},{value:"Payload Errors",id:"payload-errors",level:3},{value:"@required(action: THROW) below an @catch",id:"requiredaction-throw-below-an-catch",level:3},{value:"Missing Data in response",id:"missing-data-in-response",level:3},{value:"How does <code>@catch</code> interact with <code>@throwOnFieldError</code>?",id:"how-does-catch-interact-with-throwonfielderror",level:2},{value:"<code>@catch</code> arguments",id:"catch-arguments",level:2},{value:"to: RESULT (default)",id:"to-result-default",level:3},{value:"to: NULL",id:"to-null",level:3}],h={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive can be added to fields in your Relay\nqueries/fragments/mutations to declare how exceptions and unexpected values\nshould be handled at runtime. Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," allows Relay to give you the\nexceptions in the response data instead of a null value (which has been the\ndefault behavior)."),(0,i.mdx)("p",null,"When a GraphQL response contains\n",(0,i.mdx)("a",{parentName:"p",href:"https://spec.graphql.org/October2021/#sec-Errors.Field-errors"},"field errors")," -\nRelay will look for the errors and - if a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive is present on that\nfield, or a parent field - will respond with either\n",(0,i.mdx)("inlineCode",{parentName:"p"},'{ok: true, value: "your value"}')," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ok: false, errors: [...]}"),"."),(0,i.mdx)("p",null,"If a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," error is caught directly on the field that the error originated\nfrom - the error is provided on that field. Here's an example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  viewer {\n    name @catch\n    age\n  }\n}\n")),(0,i.mdx)("p",null,"If ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," contains an error - it would be provided in the response data on the\n",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," field - like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n    viewer: {\n        name: {\n            ok: false,\n            errors: [\n                {\n                    message: \"Couldn't get name\",\n                    path: ['viewer', 'name']\n                }\n            ]\n        }\n        age: 39\n    }\n}\n")),(0,i.mdx)("p",null,"However, if ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," exists on one of the ancestors of a field, that error will\nbubble up to there, like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  viewer @catch {\n    name\n    age\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n    viewer: {\n        ok: false,\n        errors: [\n            {\n                message: \"Couldn't get name\",\n                path: ['viewer', 'name']\n            }\n        ]\n    }\n}\n")),(0,i.mdx)("h2",{id:"what-can-be-caught-with-catch"},"What can be caught with ",(0,i.mdx)("inlineCode",{parentName:"h2"},"@catch"),"?"),(0,i.mdx)("h3",{id:"payload-errors"},"Payload Errors"),(0,i.mdx)("p",null,"Payload errors are errors that occur as the result of a server-side exception\nwhile executing a given field's response. In this case, GraphQL servers provide\na null value where a value should be, and a separate errors object."),(0,i.mdx)("p",null,"When you ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," on a field, Relay takes those errors and provides them to you\nin-line instead, making them easier to handle, and no longer invisible."),(0,i.mdx)("p",null,"Another great side-effect is that if a field is nullable, you will now know if\nthe null was the result of an exception or a true null - because the shape would\neither contain ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ok: true}")," with the value ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),", or ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ok: false}")," with the\nactual error."),(0,i.mdx)("h3",{id:"requiredaction-throw-below-an-catch"},"@required(action: THROW) below an @catch"),(0,i.mdx)("p",null,"If you have an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@required(action: THROW)")," with an ancestor that contains a\n",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," - instead of throwing an exception, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@required")," error would bubble\nup and be provided in the same way normal errors would. Here's an example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  viewer @catch {\n    name @required(action: THROW)\n    age\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n    viewer: {\n        ok: false,\n        errors: [\n            {\n                message: \"Relay: Missing @required value at path 'viewer.name' in 'MyQuery'.\",\n            }\n        ]\n    }\n}\n")),(0,i.mdx)("h3",{id:"missing-data-in-response"},"Missing Data in response"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/next/debugging/why-null/#graph-relationship-change"},"Here is an example of where missing data may occur in Relay")),(0,i.mdx)("p",null,'If a field is expected to have a value, and that field is undefined - the field\nis considered to be "missing data". This is also an unexpected state - and when\nit happens with an ',(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," as an ancestor, it will also be caught like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'{\n    viewer: {\n        ok: false,\n        errors: [\n            {\n                message: "Relay: Missing data for one or more fields in MyQuery",\n            }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"how-does-catch-interact-with-throwonfielderror"},"How does ",(0,i.mdx)("inlineCode",{parentName:"h2"},"@catch")," interact with ",(0,i.mdx)("inlineCode",{parentName:"h2"},"@throwOnFieldError"),"?"),(0,i.mdx)("p",null,"Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError")," enables fields to throw a JavaScript exception when a\nfield error occurs. By using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," - you tell Relay that you don't want a\nJavaScript exception in this case. Instead, you are requesting that the error be\nproviced in the data object, with the same behaviors and rules as are listed\nabove (including bubbling to a parent field)."),(0,i.mdx)("p",null,"It is important to note that you can still use @catch without\n@throwOnFieldError. It will still provide you the error in the data object. But\nother fields that are not under a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," will still not throw - because\n",(0,i.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError")," would be missing."),(0,i.mdx)("p",null,"Read more about ",(0,i.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError"),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/next/api-reference/graphql-and-directives/#throwonfielderror-experimental"},"here"),"."),(0,i.mdx)("h2",{id:"catch-arguments"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@catch")," arguments"),(0,i.mdx)("h3",{id:"to-result-default"},"to: RESULT (default)"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@catch(to: RESULT)")," enables the behavior described above - with providing\nerrors in-line for same or child fields that contain an error. This is the\ndefault argument - which means you can write either ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," or\n",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch(to: RESULT)")," and the behavior will be identical."),(0,i.mdx)("h3",{id:"to-null"},"to: NULL"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@catch(to: NULL)")," will provide you with the exact same behavior as existed\nbefore ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," was possible. The field will be null if it contains an error."))}p.isMDXComponent=!0}}]);