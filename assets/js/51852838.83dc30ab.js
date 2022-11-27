"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[995],{4137:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=n(3117),a=(n(7294),n(4137));const r={},i="State Scaling for Layer1",s={unversionedId:"technology/state-scaling",id:"technology/state-scaling",title:"State Scaling for Layer1",description:"Blockchain wants to carry massive users, in addition to solving the throughput problem of transaction execution, there is also a problem that the industry has not yet generally concerned about is the state expansion. Obviously, if hundreds of millions of users hold many types of assets and application states on the chain, the state explosion problem will soon have to be faced.",source:"@site/docs/04-technology/06-state-scaling.md",sourceDirName:"04-technology",slug:"/technology/state-scaling",permalink:"/docs/technology/state-scaling",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/06-state-scaling.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel Transaction Execution",permalink:"/docs/technology/parallel-transaction-execution"},next:{title:"Move on Rooch",permalink:"/docs/technology/move-on-rooch/"}},l={},c=[{value:"State Migration",id:"state-migration",level:2},{value:"Rollup State Tree",id:"rollup-state-tree",level:3},{value:"Move chain state migration",id:"move-chain-state-migration",level:3},{value:"EVM chain state migration",id:"evm-chain-state-migration",level:3},{value:"Related links",id:"related-links",level:3}],h={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-scaling-for-layer1"},"State Scaling for Layer1"),(0,a.kt)("p",null,"Blockchain wants to carry massive users, in addition to solving the throughput problem of transaction execution, there is also a problem that the industry has not yet generally concerned about is the state expansion. Obviously, if hundreds of millions of users hold many types of assets and application states on the chain, the state explosion problem will soon have to be faced."),(0,a.kt)("p",null,"This problem was not obvious in the Token era, after all, Tokens can be split and merged, and only need to be represented by a number. In the era of NFT explosion, this problem is obvious, a large number of NFT issuers want to save the NFT metadata and even images on the chain. When the next Web3 applications explode, new assets or application states created by various applications will have to solve the problem of state explosion if they all want to be saved on the chain."),(0,a.kt)("p",null,"The main idea of solving the state explosion on Layer1 is to charge fee for the state, forcing users to use the state on the chain carefully through the cost, and motivate them to delete useless states. However, this approach cannot fundamentally solve the state explosion problem, but can only delay the problem."),(0,a.kt)("p",null,"Rooch uses the state feature of Move to design a cross-layer state migration solution, which can migrate state from Layer1 to Layer2 and thus scale the Layer1 state."),(0,a.kt)("h2",{id:"state-migration"},"State Migration"),(0,a.kt)("p",null,"The idea of state migration is to maintain a state tree on the chain that only records the root on the chain and stores the whole data off-chain, which we can call ",(0,a.kt)("strong",{parentName:"p"},"Rollup State Tree"),", or RST for short."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"state move",src:n(7540).Z,width:"682",height:"271"})),(0,a.kt)("p",null,"When the user state on the chain is migrated into RST, the state disappears from the chain, as NFT1 in the above figure. the Validate node of Rooch will apply the state tree operation off-chain, NFT1 appears in the state tree off-chain, and the user can retrieve it from the state tree off-chain to achieve state migration."),(0,a.kt)("p",null,"When the off-chain state needs to be migrated back to the chain, it is necessary to take the proof of inclusion of the RST leaf node and perform the operation on the chain."),(0,a.kt)("h3",{id:"rollup-state-tree"},"Rollup State Tree"),(0,a.kt)("p",null,"RST is a Sparse Merkle Tree. A Sparse Merkle Tree can provide proof of non-inclusion, and with a proof of non-inclusion, on-chain updates can be implemented without global data."),(0,a.kt)("p",null,"If we want to insert a non-inclusion leaf node in RST, we need to provide the non-inclusion proof of that leaf node at the current root, and the value of the new node, and the contract can verify the non-inclusion proof and compute the new root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"non-inclusion proof + new value = inclusion proof => new root\n")),(0,a.kt)("p",null,"If we want to update a leaf node, we need to provide the proof of inclusion of the node, and the new value, and the new root can be computed by replacing the leaf node in the proof with the new value."),(0,a.kt)("p",null,"If we want to delete a leaf node, we need to provide the proof of inclusion of that node, and replace the value of that node with the default value of Sparse Merkle Tree, and we can computed the new root."),(0,a.kt)("p",null,"Scenarios of RST usage."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If all update operations occur on the chain, the RST can be used as an off-chain state storage solution that is fully secured by the contract."),(0,a.kt)("li",{parentName:"ol"},"If a function is provided to update the RST root hash directly, but with the condition that the finalized root is achieved through a challenge period, then it can be used as an execution layer state migration solution."),(0,a.kt)("li",{parentName:"ol"},"If a function is provided to update the RST root hash directly, but with the condition that the root is signed by all participants, then it can be used as a state migration solution in the state channel.")),(0,a.kt)("p",null,"Since the state mechanisms of Move and EVM are different, this solution is used differently on the two different chains."),(0,a.kt)("h3",{id:"move-chain-state-migration"},"Move chain state migration"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A diagram is needed here")),(0,a.kt)("p",null,'Move allows state to be moved between contracts through the resource-oriented programming pattern implemented by linear types, which we call "free state", and the most common "free state" is mainly asset-based state, Token and NFT.'),(0,a.kt)("p",null,'If Layer1 is a Move chain, we can also take advantage of this feature to achieve "free state" migration cross layers. The application simply transfers state to the RST in the Rooch Framework, and the Rooch Framework provides the contract to migrate the state cross layer.'),(0,a.kt)("h3",{id:"evm-chain-state-migration"},"EVM chain state migration"),(0,a.kt)("p",null,'The state in EVM cannot be moved cross contracts, but each contract can maintain an internal RST to enable state migration. Once the state is mapped to the execution layer, it can be changed to "free state" by Move.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Here is another diagram")),(0,a.kt)("p",null,"But this approach is only suitable for new contracts, how to support already deployed contracts needs further research."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"TODO need some Solidity code example ")),(0,a.kt)("h3",{id:"related-links"},"Related links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/movefuns/movefuns/issues/10"},"RollupMap"))))}u.isMDXComponent=!0},7540:function(e,t,n){t.Z=n.p+"assets/images/rooch-state-move-500da3f0c022e7eb642efdb17ac25277.svg"}}]);