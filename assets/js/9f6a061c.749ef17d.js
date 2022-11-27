"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[551],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,p=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return n?r.createElement(p,i(i({ref:t},d),{},{components:n})):r.createElement(p,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=(n(7294),n(4137));const a={},i="Decentralized validator network",c={unversionedId:"technology/decentralized-validator-network",id:"technology/decentralized-validator-network",title:"Decentralized validator network",description:"In the current Layer2 solution, it is a challenge how to decentralize the sequencer. If the sequencer cannot be decentralized, on the one hand, there is a single point of risk that the whole network will be unavailable when the sequencer is down, and on the other hand, there is also the risk of sequencer fraud. Before transactions are written in batches to the data availability layer and the consensus layer, the sequencer can fraud by dropping transactions or adjusting the order of transactions.",source:"@site/docs/04-technology/04-decentralized-validator-network.md",sourceDirName:"04-technology",slug:"/technology/decentralized-validator-network",permalink:"/docs/technology/decentralized-validator-network",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/04-decentralized-validator-network.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Accumulator Proofs",permalink:"/docs/technology/transaction-accumulator-proofs"},next:{title:"Parallel Transaction Execution",permalink:"/docs/technology/parallel-transaction-execution"}},l={},s=[{value:"Validator Role Definition",id:"validator-role-definition",level:2},{value:"Decentralized Solutions",id:"decentralized-solutions",level:2},{value:"Incentives",id:"incentives",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decentralized-validator-network"},"Decentralized validator network"),(0,o.kt)("p",null,"In the current Layer2 solution, it is a challenge how to decentralize the sequencer. If the sequencer cannot be decentralized, on the one hand, there is a single point of risk that the whole network will be unavailable when the sequencer is down, and on the other hand, there is also the risk of sequencer fraud. Before transactions are written in batches to the data availability layer and the consensus layer, the sequencer can fraud by dropping transactions or adjusting the order of transactions."),(0,o.kt)("p",null,"Rooch was designed at the beginning with this in mind, trying to build a decentralized validator network."),(0,o.kt)("h2",{id:"validator-role-definition"},"Validator Role Definition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequencer"),": order and executes transactions, compute the root of the state tree, and the root of the transaction accumulator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Verifier"),": Fetches transactions from the consensus and data availability layers, executes and verifies them, and initiates fraud proofs to the arbitration layer if the results are found to be incorrect.")),(0,o.kt)("p",null,"The Sequencer and Verifier are called Validator in Rooch."),(0,o.kt)("h2",{id:"decentralized-solutions"},"Decentralized Solutions"),(0,o.kt)("p",null,"Since Layer2 consensus only needs to determine the order of transactions, the correctness of transaction execution can be guaranteed by challenge deterrence. To ensure the order of transactions, it is only necessary to write the transactions (or the transaction hash) to Layer1, which has the role of consensus layer."),(0,o.kt)("p",null,"Therefore, Layer2 or execution layer does not need to build a PBFT consensus network to decide the transaction order and execution results to achieve decentralization, but only needs to design a rotation mechanism of the sequencer and a data synchronization protocol on the P2P network."),(0,o.kt)("p",null,"The initial design idea is as follows."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Anyone can register as a validator on the chain by pledging a certain amount of Token. "),(0,o.kt)("li",{parentName:"ol"},"Each Epoch, the smart contract on the chain randomly selects a validator as a sequencer."),(0,o.kt)("li",{parentName:"ol"},"Nodes that are not selected as sequencer automatically become verifier."),(0,o.kt)("li",{parentName:"ol"},"All the verifiers form a P2P network, and the transactions received by the verifier will be forwarded to the sequencer, which will be ordered and executed and forwarded to the other verifiers with the root of the state tree after the transaction execution and the ",(0,o.kt)("a",{parentName:"li",href:"/docs/technology/transaction-accumulator-proofs"},"transaction accumulator proof"),".")),(0,o.kt)("h2",{id:"incentives"},"Incentives"),(0,o.kt)("p",null,"In the current Layer2 solution, there is no gain for the verifier to run the node, unless the fraud of the sequencer is detected and the challenge is successful. But this probability is too small to be an incentive to run a verifier node."),(0,o.kt)("p",null,"In Rooch, any verifier has the probability of being a sequencer and can earn user transaction fees, and the verifier has an incentive to keep running the node and play the role of a verifier."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TODO The need for a dedicated verifier reward requires further design")))}u.isMDXComponent=!0}}]);