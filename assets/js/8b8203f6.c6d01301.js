"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={},i="What is Rooch",c={unversionedId:"what-is-rooch",id:"what-is-rooch",title:"What is Rooch",description:"Following the conclusion of Why Rooch?, we needed a new layered modular blockchain solution, so we designed Rooch.",source:"@site/docs/02-what-is-rooch.md",sourceDirName:".",slug:"/what-is-rooch",permalink:"/docs/what-is-rooch",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/02-what-is-rooch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why Rooch",permalink:"/docs/why-rooch"},next:{title:"Layer2 projects Overview",permalink:"/docs/layer2-overview"}},s={},l=[{value:"For Layer1",id:"for-layer1",level:2},{value:"For DApp",id:"for-dapp",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Multi-chain settlement Execution Layer",id:"multi-chain-settlement-execution-layer",level:3},{value:"Transaction and State Scaling for Layer1",id:"transaction-and-state-scaling-for-layer1",level:3},{value:"Seamless CrossLayer Interoperability",id:"seamless-crosslayer-interoperability",level:3},{value:"Secure and Instant transaction confirmation",id:"secure-and-instant-transaction-confirmation",level:3},{value:"SmartContract on State Channel",id:"smartcontract-on-state-channel",level:3}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-rooch"},"What is Rooch"),(0,o.kt)("p",null,"Following the conclusion of ",(0,o.kt)("a",{parentName:"p",href:"/docs/why-rooch"},"Why Rooch?"),", we needed a new layered modular blockchain solution, so we designed Rooch."),(0,o.kt)("p",null,"Rooch is an ",(0,o.kt)("strong",{parentName:"p"},"execution layer")," that supports ",(0,o.kt)("strong",{parentName:"p"},"multi-chain settlement"),", using ",(0,o.kt)("strong",{parentName:"p"},"Move")," as the smart contract language. It aims to connect the multi-chain ecosystem to Web3 DApp, provide ",(0,o.kt)("strong",{parentName:"p"},"transaction and state scaling")," for Layer1, provide the ",(0,o.kt)("strong",{parentName:"p"},"execution environment")," and ",(0,o.kt)("strong",{parentName:"p"},"settlement protocol")," for DApp."),(0,o.kt)("h2",{id:"for-layer1"},"For Layer1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction Scaling: Provide faster transaction execution and confirmation, and higher transaction throughput (higher TPS)."),(0,o.kt)("li",{parentName:"ul"},"State Scaling: Migrate Layer1 state to the execution layer, freeing up the state space consumed by smart contracts.")),(0,o.kt)("h2",{id:"for-dapp"},"For DApp"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aggregate multi-chain assets."),(0,o.kt)("li",{parentName:"ul"},"Provide secure and instant confirmed high-speed execution environment."),(0,o.kt)("li",{parentName:"ul"},"Provide a state-channel-based settlement protocol on P2P networks.")),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("h3",{id:"multi-chain-settlement-execution-layer"},"Multi-chain settlement Execution Layer"),(0,o.kt)("p",null,"Rooch takes benefit of the current multi-chain ecosystem through a modular blockchain architecture that connects multiple Layer1 settlement layers and focuses on building an execution layer. "),(0,o.kt)("p",null,"Normally, the modular blockchain solution has the settlement layer and arbitration layer in the same Layer1, but Rooch separates the two, thus enabling multi-chain settlement."),(0,o.kt)("p",null,"Each layer can be selected and adapted according to the features and cost of different Layer1. For detailed technical solutions, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/modular-blockchain-architecture/"},"modular blockchain architecture")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"},"multi-chain settlement protocol"),"."),(0,o.kt)("p",null,"And with such an implementation layer for multi-chain computing, we can securely aggregate multi-chain assets to provide DApps with rich assets as well as a unified settlement protocol."),(0,o.kt)("p",null,"And with such an execution layer for multi-chain settlement, we can securely aggregate multi-chain assets to DApps, provide a unified settlement protocol to DApps."),(0,o.kt)("h3",{id:"transaction-and-state-scaling-for-layer1"},"Transaction and State Scaling for Layer1"),(0,o.kt)("p",null,"The current major layered scaling solutions mainly focus on scaling Layer1 transaction execution, but not on Layer1 state scaling. We believe that the state explosion problem will become one of the bottlenecks of Layer1 in the future, and Rooch provides both transaction and state scaling for Layer1."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction scaling: through the ",(0,o.kt)("a",{parentName:"li",href:"/docs/technology/parallel-transaction-execution"},"parallel transaction execution")," to provide higher throughput."),(0,o.kt)("li",{parentName:"ul"},"State Scaling: Rooch uses the features provided by Move to migrate the state of smart contract, from Layer1 to the execution layer, thus enabling ",(0,o.kt)("a",{parentName:"li",href:"/docs/technology/state-scaling"},"state scaling")," for Layer1.")),(0,o.kt)("h3",{id:"seamless-crosslayer-interoperability"},"Seamless CrossLayer Interoperability"),(0,o.kt)("p",null,"In current layered solution, cross-layer interaction is basically implemented only for message communication. We believe that cross-layer contract invocation are more developer-friendly and helpful for building a cross-layer smart contract ecosystem."),(0,o.kt)("p",null,"In Rooch, an application's smart contracts can depend on and invoke contracts deployed in Move Layer1. The Move Layer1 is the module repository layer of Rooch."),(0,o.kt)("p",null,"This ensures the continuity of dependencies and combinations between applications, and extends the combinability of smart contracts figured out in the DeFi era to cross-layer combinability, enabling seamless ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/move-on-rooch/cross-layer-interoperability"},"cross-layer interoperability"),". ."),(0,o.kt)("p",null,"This bring the composability of smart contracts that was figured out in the DeFi era to cross-layer composability, ensuring ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/move-on-rooch/cross-layer-interoperability"},"seamless cross-layer interoperability"),"."),(0,o.kt)("h3",{id:"secure-and-instant-transaction-confirmation"},"Secure and Instant transaction confirmation"),(0,o.kt)("p",null,"The Layer2 solution does not rely on an asynchronous consensus mechanism to confirm transaction execution results, so it can achieve instant transaction confirmation. "),(0,o.kt)("p",null,"However, before the transaction is submitted to the consensus and data availability layer, the user needs to trust the execution result of the sequencer, because the sequencer can make profits by dropping the user's transaction or adjusting the order of the user's transaction."),(0,o.kt)("p",null,"And Rooch ensures security by providing ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/transaction-accumulator-proofs"},"transaction accumulator proofs")," mechanism to guarantee that if the sequencer ever changes the order of transactions, it will eventually be punished by the arbitration service."),(0,o.kt)("p",null,"At the same time, Rooch also designed a randomly ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/decentralized-validator-network"},"rotating sequencer solution")," to ensure high availability of the execution layer, while multiple validators can constrain each other to ensure that fraud can be challenged just in time."),(0,o.kt)("h3",{id:"smartcontract-on-state-channel"},"SmartContract on State Channel"),(0,o.kt)("p",null,"The State Channel, or Payment Channel, represented by the Lightning Network, is a proven scaling solution. The idea is that each participant pledges a certain amount of assets on the chain, and then maintains a local consensus state off-chain that contains only the participants, and each transaction only needs to be confirmed by the participants together\uff0cso it can support high frequency transactions in the channel."),(0,o.kt)("p",null,"However, current state channels are built on Layer1, the costs of Gas and time to create a channel is high and cannot be directly used in P2P networks. "),(0,o.kt)("p",null,"Rooch provides secure and instant transaction confirmation and low transaction costs, allowing nodes in a P2P network to create a network connection and upgrade it to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/state-channel/"},"state channel"),", thus enabling ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/state-channel/streaming-payment"},"high-frequency streaming payment")," in P2P networks."),(0,o.kt)("p",null,"Also, Rooch supports ",(0,o.kt)("a",{parentName:"p",href:"/docs/technology/state-channel/channel-contract"},"smart contract in state channel")," through the feature of Move, simplifying the design of game and DApp protocol on P2P networks."))}h.isMDXComponent=!0}}]);