"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[941],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(n),h=r,d=y["".concat(c,".").concat(h)]||y[h]||p[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8599:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=n(3117),r=(n(7294),n(4137));const a={},i="Cross Layer Interoperability",s={unversionedId:"technology/move-on-rooch/cross-layer-interoperability",id:"technology/move-on-rooch/cross-layer-interoperability",title:"Cross Layer Interoperability",description:"Cross-layer interoperability is one of the challenges in a layered solution, and the following solutions for cross-layer interaction are provided in Rooch.",source:"@site/docs/04-technology/07-move-on-rooch/01-cross-layer-interoperability.md",sourceDirName:"04-technology/07-move-on-rooch",slug:"/technology/move-on-rooch/cross-layer-interoperability",permalink:"/docs/technology/move-on-rooch/cross-layer-interoperability",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/07-move-on-rooch/01-cross-layer-interoperability.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why Move?",permalink:"/docs/technology/move-on-rooch/"},next:{title:"Account Abstraction",permalink:"/docs/technology/move-on-rooch/account-abstraction"}},c={},l=[{value:"Cross-layer message communication",id:"cross-layer-message-communication",level:2},{value:"Cross-layer contract dependencies",id:"cross-layer-contract-dependencies",level:2},{value:"Cross-layer function invoke",id:"cross-layer-function-invoke",level:2},{value:"Continuation of state types",id:"continuation-of-state-types",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cross-layer-interoperability"},"Cross Layer Interoperability"),(0,r.kt)("p",null,"Cross-layer interoperability is one of the challenges in a layered solution, and the following solutions for cross-layer interaction are provided in Rooch."),(0,r.kt)("h2",{id:"cross-layer-message-communication"},"Cross-layer message communication"),(0,r.kt)("p",null,"Cross-layer message communication only passes messages and does not rely on state, which is easier to implement and is practiced in current Layer2 solutions."),(0,r.kt)("h2",{id:"cross-layer-contract-dependencies"},"Cross-layer contract dependencies"),(0,r.kt)("p",null,"In Rooch, an application's smart contracts can depend on contracts deployed in Move Layer1, Move Layer1 is Rooch's ",(0,r.kt)("a",{parentName:"p",href:"/docs/technology/modular-blockchain-architecture/"},"Module Repository Layer"),". This brings the potential for improving cross-layer interoperability , as well as building a unified Move application ecosystem."),(0,r.kt)("h2",{id:"cross-layer-function-invoke"},"Cross-layer function invoke"),(0,r.kt)("p",null,"Now that we have implemented cross-layer contract dependencies, we can directly invoke Layer1 function when the application is running in the execution layer or state channel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cross layer invoke",src:n(3066).Z,width:"741",height:"440"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the function does not read the on-chain state, it is equivalent to running the bytecode of the on-chain contract in the off-chain virtual machine, and the result depends only on the input parameters."),(0,r.kt)("li",{parentName:"ul"},"If the function reads the on-chain state, it is equivalent to taking a snapshot of the state at the height of Layer1, reading the state from the state snapshot, and computing the result."),(0,r.kt)("li",{parentName:"ul"},"If the function modifies the on-chain state, it needs to use ",(0,r.kt)("a",{parentName:"li",href:"/docs/technology/state-scaling"},"state migration")," and an asynchronous call to achieve cross-layer method invocation. Further research is needed on how to achieve a seamless developer experience.")),(0,r.kt)("h2",{id:"continuation-of-state-types"},"Continuation of state types"),(0,r.kt)("p",null,"In Move, state is identified by type, and Rooch's cross-layer state migration solution ensures continuation of state types and reduces user awareness costs. If Layer1 is an EVM chain, we can simulate the Move state in Solidity to ensure the continuation of contract addresses, this needs further researc. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/technology/state-scaling"},"State Migration")," for the solution."))}p.isMDXComponent=!0},3066:function(e,t,n){t.Z=n.p+"assets/images/rooch-cross-layer-invoke-b02f8c59c225c07f833d397a28926ed6.svg"}}]);