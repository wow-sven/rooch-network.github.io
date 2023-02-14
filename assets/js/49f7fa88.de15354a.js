"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[535],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||n;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(3117),o=(a(7294),a(4137));const n={},i="Modular Architecture",l={unversionedId:"technology/modular-blockchain-architecture/index",id:"technology/modular-blockchain-architecture/index",title:"Modular Architecture",description:"Why Modular?",source:"@site/docs/04-technology/01-modular-blockchain-architecture/index.md",sourceDirName:"04-technology/01-modular-blockchain-architecture",slug:"/technology/modular-blockchain-architecture/",permalink:"/docs/technology/modular-blockchain-architecture/",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/01-modular-blockchain-architecture/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technology Overview",permalink:"/docs/technology/"},next:{title:"Multi-chain Settlement protocol",permalink:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"}},c={},s=[{value:"Why Modular?",id:"why-modular",level:2},{value:"Rooch&#39;s modular layering",id:"roochs-modular-layering",level:2},{value:"Modular combination",id:"modular-combination",level:2}],u={toc:s};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modular-architecture"},"Modular Architecture"),(0,o.kt)("h2",{id:"why-modular"},"Why Modular?"),(0,o.kt)("p",null,"Modular architecture is a natural evolution of the Layer2 Rollup solution."),(0,o.kt)("p",null,"With the Layer2 Rollup experiment, we migrate the execution of transactions from Layer1 to Layer2, where only transactions are recorded on Layer1 to guarantee data availability, and no transactions are executed on Layer1. So it is natural to think that data availability should can be guaranteed in other ways, and it is not necessary to Rollup transactions to the original Layer1."),(0,o.kt)("p",null,"The industry is still figuring out how to split the module layer in the modular blockchain. As shown in the figure below, it is split into an execution layer, a settlement layer, a consensus and a data availability layer. Where the settlement layer also takes on the role of arbitration."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(Above figure is from: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular"},"https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular"),")")),(0,o.kt)("p",null,"Rooch improves on this by splitting the arbitration role from the settlement layer, thus can supporting multiple settlement layers. For the settlement protocol, please refer to:",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"},"Multi-chain settlement protocol")),(0,o.kt)("h2",{id:"roochs-modular-layering"},"Rooch's modular layering"),(0,o.kt)("p",null,"In the modular architecture of Rooch, the roles of the different layers are split as follows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modular",src:a(1850).Z,width:"626",height:"268"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution Layer"),": executes smart contract transactions and keeps the state of the execution. The application mainly interoperates with the protocols and services provided by the execution layer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module Repository Layer"),": In Rooch, the application's contracts can depend on the Move contract modules deployed on Move Layer1. The Move Layer1 can be used as a Move module repository layer, thus ensuring the continuation of dependencies and combinations between applications. Current Move Layer1s, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin"},"Starcoin"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OLSF/libra"},"0L"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aptos-labs/aptos-core"},"Aptos"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/MystenLabs/sui"},"Sui"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Availability Layer"),": ensures that the transaction data of the execution layer is publicly available, thus ensuring the availability of the data on which the fraud proofs relies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consensus Layer"),": guarantees that the order of transactions in the execution layer is deterministic and non-tamperable. in Rooch, the consensus layer also takes responsibility for the ",(0,o.kt)("a",{parentName:"li",href:"/docs/technology/transaction-accumulator-proofs"},"transaction accumulator")," generation and validation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Settlement layer"),": performs ",(0,o.kt)("a",{parentName:"li",href:"/docs/technology/state-scaling"},"state migration")," and asset settlement between Layer1 and the execution layer. Settlement period depends on the final deterministic period of the arbitration layer. Multiple Layer1s can be supported simultaneously as settlement layer, including the previously mentioned Move public chain and EVM public chains such as Ethereum and BSC, and all Layer1s with Turing-complete smart contracts will be supported in the future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arbitration layer"),": executes fraud proofs and makes arbitrations. In the Optimistic scenario, the Arbitration layer waits for the challenge period to pass. If no challenge occurs, it considers the execution layer's transactions to have reached finality and notifies the settlement layer for settlement."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CrossChain Message Layer"),": Since the above different layers will be on different Layer1, an inter-chain communication mechanism between Layer1 is needed to collaborate to complete the settlement as well as arbitration.")),(0,o.kt)("h2",{id:"modular-combination"},"Modular combination"),(0,o.kt)("p",null,"Based on modular architecture, Rooch provides different combinations to deal with different application scenarios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rooch Ethereum Layer2: Rooch(Execution) + Layer1s(Settlement) + Ethereum(Arbitration) + DA"),(0,o.kt)("li",{parentName:"ol"},"XChain Modular DApp: Rooch(Execution) + XChain(Settlement + Arbitration) + DA"),(0,o.kt)("li",{parentName:"ol"},"Rooch Layer3 Modular DApp: Rooch(Execution) + Rooch Layer2(Settlement + Arbitration) + DA")))}h.isMDXComponent=!0},1850:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg"}}]);