"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[63536],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,c=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={},s="Query Basics",d={unversionedId:"tutorial/queries-1",id:"tutorial/queries-1",title:"Query Basics",description:"In this section:",source:"@site/docs/tutorial/queries-1.md",sourceDirName:"tutorial",slug:"/tutorial/queries-1",permalink:"/docs/next/tutorial/queries-1",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/queries-1.md",tags:[],version:"current",lastUpdatedBy:"Matt Mahoney",lastUpdatedAt:1712617162,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{},sidebar:"docs",previous:{title:"GraphQL and Relay",permalink:"/docs/next/tutorial/graphql"},next:{title:"Fragments",permalink:"/docs/next/tutorial/fragments-1"}},p={},u=[{value:"Relay and the Type System",id:"relay-and-the-type-system",level:2},{value:"Summary",id:"summary",level:2}],m={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"query-basics"},"Query Basics"),(0,o.mdx)("p",null,"In this section:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We\u2019ll take a React component that displays hard-coded placeholder data and modify it so that it fetches its data using a GraphQL query."),(0,o.mdx)("li",{parentName:"ul"},"We\u2019ll learn how to use the TypeScript types that Relay generates from your GraphQL to ensure type safety.")),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"With Relay, you fetch data using GraphQL Queries. A Query specifies a part of the GraphQL graph for your app to fetch, starting from some root node and traversing from node to node to retrieve a particular set of data in the shape of a tree."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"A query selects a particular subgraph",src:n(44540).Z,width:"1516",height:"1688"})),(0,o.mdx)("p",null,"Right now, our example app doesn\u2019t fetch any data, it just renders some placeholder data that\u2019s hard-coded into the React components. Let\u2019s modify it to fetch some data using Relay."),(0,o.mdx)("p",null,"Open up the file called ",(0,o.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx"),". (All of the components in the tutorial are in ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/components"),".) In it you should see a ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Newsfeed>")," component where the data is hard-coded:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'export default function Newsfeed() {\n  const story = {\n    title: "Placeholder Story",\n    summary:\n      "Placeholder data, to be replaced with data fetched via GraphQL",\n    poster: {\n      name: "Placeholder Person",\n      profilePicture: {\n        url: "/assets/cat_avatar.png",\n      },\n    },\n    thumbnail: {\n      url: "/assets/placeholder.jpeg",\n    },\n  };\n  return (\n    <div className="newsfeed">\n      <Story story={story} />\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"We\u2019re going to replace this placeholder data with data fetched from the server.  First we need to define a GraphQL query. Add the following declaration above the Newsfeed component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"import { graphql } from 'relay-runtime';\n\n// color1\nconst NewsfeedQuery = graphql`\n  // color2\n  query NewsfeedQuery {\n    topStory {\n      // color3\n      title\n      // color3\n      summary\n      // color4\n      poster {\n        name\n        profilePicture {\n          url\n        }\n      }\n      thumbnail {\n        url\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("p",null,"Let\u2019s break this down:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"To embed GraphQL within JavaScript, we put a string literal ",(0,o.mdx)("span",{class:"color1"},"marked with the ",(0,o.mdx)("code",null,"graphql``")," tag"),". This tag allows the Relay compiler to find and compile the GraphQL within a JavaScript codebase."),(0,o.mdx)("li",{parentName:"ul"},"Our GraphQL string consists of a ",(0,o.mdx)("span",{class:"color2"},"query declaration")," with the keyword ",(0,o.mdx)("inlineCode",{parentName:"li"},"query")," and then a query name. Note that the query name ",(0,o.mdx)("strong",{parentName:"li"},"must")," begin with the module name (in this case ",(0,o.mdx)("code",null,"Newsfeed"),")."),(0,o.mdx)("li",{parentName:"ul"},"Inside the query declaration are ",(0,o.mdx)("em",{parentName:"li"},"fields"),", which specify what information to query for",(0,o.mdx)("em",{parentName:"li"},":"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Some fields are ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("span",{class:"color3"},"scalar fields"))," that retrieve a string, number, or other unit of information."),(0,o.mdx)("li",{parentName:"ul"},"Other fields are ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("span",{class:"color4"},"edges"))," that let us traverse from one node in the graph to another. When a field is an edge, it\u2019s followed by another block ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ }")," containing fields for the node at the other end of the edge. Here, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"poster")," field is an edge that goes from a Story to a Person who posted it. Once we\u2019ve traversed to the Person, we can include fields about the Person such as their ",(0,o.mdx)("inlineCode",{parentName:"li"},"name"),".")))),(0,o.mdx)("p",null,"This illustrates the part of the graph that this query is asking for:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Parts of the GraphQL query",src:n(27497).Z,width:"1128",height:"1296"})),(0,o.mdx)("p",null,"Now that we\u2019ve defined the query, we need to do two things."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Run relay compiler so that it knows about the new Graphql query. ","[npm run relay.]"),(0,o.mdx)("li",{parentName:"ol"},"Modify our React component to fetch it and to use the data returned by the server.")),(0,o.mdx)("p",null,"If you open package.json you will find the script ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay")," is hooked up to run the relay-compiler. This is what npm run relay does. Once the compiler successfully updates/generated the new compiled query you will be able to find it in the ",(0,o.mdx)("strong",{parentName:"p"},"generated")," folder under src/components/ as NewsfeedQuery.graphql.ts. This project comes with precomputed fragments, so unless you do this step, you will not get the desired results."),(0,o.mdx)("p",null,"Next, turn back to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Newsfeed")," component and start by deleting the placeholder data. Then, replace it with this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'import { useLazyLoadQuery } from "react-relay";\n\nexport default function Newsfeed({}) {\n  const data = useLazyLoadQuery(\n    // color1\n    NewsfeedQuery,\n    // color2\n    {},\n  );\n  const story = data.topStory;\n  // As before:\n  return (\n    <div className="newsfeed">\n      <Story story={story} />\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," hook fetches and returns the data. It takes two arguments:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("span",{className:"color1"},"GraphQL query")," that we defined before."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("span",{className:"color2"},"Variables")," that are passed to the server with the query. This query doesn\u2019t declare any variables, so it\u2019s an empty object.")),(0,o.mdx)("p",null,"The object that ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," returns has the same shape as the query. For instance, if printed in JSON format it might look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'{\n  topStory: {\n    title: "Local Yak Named Yak of the Year",\n    summary: "The annual Yak of the Year awards ceremony ...",\n    poster: {\n      name: "Baller Bovine Board",\n      profilePicture: {\n        url: \'/images/baller_bovine_board.jpg\',\n      },\n    },\n    thumbnail: {\n      url: \'/images/max_the_yak.jpg\',\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"Notice that each field selected by the GraphQL query corresponds to a property in the JSON response."),(0,o.mdx)("p",null,"At this point, you should see a story fetched from the server:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Screenshot",src:n(47170).Z,width:"1406",height:"1594"})),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"The server's responses are artifically slowed down to make loading states perceptible, which will come in handy when we add more interactivity to the app. If you want to remove the delay, open ",(0,o.mdx)("inlineCode",{parentName:"p"},"server/index.js")," and remove the call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"sleep()"),".")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," hook fetches the data when the component is first rendered. Relay also has APIs for pre-fetching the data before your app has even loaded \u2014 these are covered later. In any case, Relay uses Suspense to show a loading indicator until the data is available."),(0,o.mdx)("p",null,"This is Relay in its most basic form: fetching the results of a GraphQL query when a component is rendered. As the tutorial progresses, we\u2019ll see how Relay\u2019s features fit together to make your app more maintainable \u2014 starting with a look at how Relay generates TypeScript types corresponding to each query."),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Deep dive: Suspense for Data Loading"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Suspense")," is a new API in React that lets React wait while data is loaded before it renders components that need that data. When a component needs to load data before rendering, React shows a loading indicator. You control the loading indicator's location and style using a special component called ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense"),"."),(0,o.mdx)("p",null,"Right now, there's a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," component inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"App.tsx"),", which is what shows the spinner while ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," is loading data."),(0,o.mdx)("p",null,"We'll look at Suspense in more detail in later sections when we add some more interactivity to the app.")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Deep dive: Queries are Static"),(0,o.mdx)("p",null,"All of the GraphQL strings in a Relay app are pre-processed by the Relay compiler and removed from the resulting bundled code. This means you can\u2019t construct GraphQL queries at runtime \u2014 they have to be static string literals so that they\u2019re known at compile time. But it comes with major advantages."),(0,o.mdx)("p",null,"First, it allows Relay to generate type definitions for the results of the query, making your code more type-safe."),(0,o.mdx)("p",null,"Second, Relay replaces the GraphQL string literal with an object that tells Relay what to do. This is much faster than using the GraphQL strings directly at runtime."),(0,o.mdx)("p",null,"Also, Relay\u2019s compiler can be configured to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/guides/persisted-queries/"},"save queries to the server")," when you build your app, so that at runtime the client need only send a query ID instead of the query itself. This saves bundle size and network bandwidth, and can prevent attackers from writing malicious queries since only those your app was built with need be available."),(0,o.mdx)("p",null,"So when you have a GraphQL tagged string literal in your program..."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"const MyQuery = graphql`\n  query MyQuery {\n    viewer {\n      name\n    }\n  }\n`;\n")),(0,o.mdx)("p",null,"... the JavaScript variable ",(0,o.mdx)("inlineCode",{parentName:"p"},"MyQuery")," is actually assigned to an object that looks something like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const MyQuery = {\n  kind: "query",\n  selections: [\n    {\n      name: "viewer",\n      kind: "LinkedField",\n      selections: [\n        name: "name",\n        kind: "ScalarField",\n      ],\n    }\n  ]\n};\n')),(0,o.mdx)("p",null,"along with various other properties and information. These data structures are carefully designed to allow the JIT to run Relay\u2019s payload processing code very quickly. If you\u2019re curious, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"/compiler-explorer"},"Relay Compiler Explorer")," to play with it.")),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"relay-and-the-type-system"},"Relay and the Type System"),(0,o.mdx)("p",null,"You might notice that TypeScript reports an error with this code as we\u2019ve written it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"const story = data.topStory;\n                   ^^^^^^^^\nProperty 'topStory' does not exist on type 'unknown'\n")),(0,o.mdx)("p",null,"To fix this, we need to annotate the call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," with types that Relay generates. That way, TypeScript will know what type ",(0,o.mdx)("inlineCode",{parentName:"p"},"data")," should have based on the fields we\u2019ve selected in our query. Add the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"// change-line\nimport type {NewsfeedQuery as NewsfeedQueryType} from './__generated__/NewsfeedQuery.graphql';\n\nfunction Newsfeed({}) {\n  const data = useLazyLoadQuery\n  // change-line\n  <NewsfeedQueryType>\n  (NewsfeedQuery, {});\n  ...\n}\n")),(0,o.mdx)("p",null,"If we look inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"__generated__/NewsfeedQuery.graphql")," we\u2019ll see the following type definition \u2014 with the annotation we\u2019ve just added, TypeScript knows that ",(0,o.mdx)("inlineCode",{parentName:"p"},"data")," should have this type:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"export type NewsfeedQuery$data = {\n  readonly topStory: {\n    readonly poster: {\n      readonly name: string | null;\n      readonly profilePicture: {\n        readonly url: string;\n      } | null;\n    };\n    readonly summary: string | null;\n    readonly thumbnail: {\n      readonly url: string;\n    } | null;\n    readonly title: string;\n  } | null;\n};\n")),(0,o.mdx)("p",null," The Relay compiler generates TypeScript types corresponding to every piece of GraphQL that you have in your app within a ",(0,o.mdx)("code",null,"graphql``")," literal. As long as ",(0,o.mdx)("code",null,"npm run dev")," is running, the Relay compiler will automatically regenerate these files whenever you save one of your JavaScript source files, so you don\u2019t need to refresh anything to keep them up to date."),(0,o.mdx)("p",null,"Using Relay\u2019s generated types makes your app safer and more maintainable. In addition to TypeScript, Relay supports the Flow type system if you want to use that instead. When using Flow, the extra annotation on ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," is not needed, because Flow directly understands the contents of the ",(0,o.mdx)("code",null,"graphql``")," tagged literal."),(0,o.mdx)("p",null,"We\u2019ll revisit types throughout this tutorial. But next, we'll look at an even more important way that Relay helps us with maintainability."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("p",null,"Queries are the foundation of fetching GraphQL data. We\u2019ve seen:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"How to define a GraphQL query within our app using the ",(0,o.mdx)("code",null,"graphql``")," tagged literal."),(0,o.mdx)("li",{parentName:"ul"},"How to use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," hook to fetch the results of a query when a component renders."),(0,o.mdx)("li",{parentName:"ul"},"How to import Relay's generated types for type safety.")),(0,o.mdx)("p",null,"In the next section, we\u2019ll look at Fragments, one of the most core and distinctive aspects of Relay. Fragments let each individual component define its own data requirements, while retaining the performance advantages of issuing a single query to the server."))}h.isMDXComponent=!0},47170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/queries-basic-screenshot-cdac7c0e384df7a0dbddaf1e3d3f3de2.png"},27497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-breakdown-56a29935576fa45104147bef7da35749.png"},44540:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-upon-graph-2209e828b9ce0ddc492555bb7a0a5a3c.png"}}]);