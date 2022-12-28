"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[547],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(3117),o=(r(7294),r(4137));const a={},i="Fraud Proofs",s={unversionedId:"technology/fraud-proofs",id:"technology/fraud-proofs",title:"Fraud Proofs",description:"Fraud Proof is the most critical part of the Layer2 project to ensure security. Only when fraud-proof is implemented, and fraud on Layer2 can be punished at the arbitration layer, we can guarantee the security of users' assets.",source:"@site/docs/04-technology/02-fraud-proofs.md",sourceDirName:"04-technology",slug:"/technology/fraud-proofs",permalink:"/docs/technology/fraud-proofs",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/02-fraud-proofs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi-chain Settlement protocol",permalink:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"},next:{title:"Transaction Accumulator Proofs",permalink:"/docs/technology/transaction-accumulator-proofs"}},c={},p=[{value:"OMO",id:"omo",level:2},{value:"Interactive Arbitration",id:"interactive-arbitration",level:2}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fraud-proofs"},"Fraud Proofs"),(0,o.kt)("p",null,"Fraud Proof is the most critical part of the Layer2 project to ensure security. Only when fraud-proof is implemented, and fraud on Layer2 can be punished at the arbitration layer, we can guarantee the security of users' assets."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modular",src:r(353).Z,width:"506",height:"521"})),(0,o.kt)("p",null,"Rooch provides interactive on-chain Arbitration based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/omo"},"OMO"),"."),(0,o.kt)("h2",{id:"omo"},"OMO"),(0,o.kt)("p",null,"OMO is a general bytecode emulator with per-step state proof:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Design for multi-chain VM execution: rich implementation of instructions and system calls"),(0,o.kt)("li",{parentName:"ol"},"CPU & OS interface for multi-platform supports."),(0,o.kt)("li",{parentName:"ol"},"Clear and accurate per-step state proof general solution: instruction-level process state ")),(0,o.kt)("h2",{id:"interactive-arbitration"},"Interactive Arbitration"),(0,o.kt)("p",null,"Assume that a block takes ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," steps to execute. The accuser and defense first provide proof of their respective states after the final execution (i.e., step ",(0,o.kt)("inlineCode",{parentName:"p"},"N"),"), and if the judge finds that the results are inconsistent, it can ask both sides to provide proof of the state of step ",(0,o.kt)("inlineCode",{parentName:"p"},"N/2")," again.\nIf the results are consistent at this point, the disagreement is between steps ",(0,o.kt)("inlineCode",{parentName:"p"},"N/2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"N"),", and the judge may ask the parties to provide evidence of step ",(0,o.kt)("inlineCode",{parentName:"p"},"(N/2 + N) / 2"),".\nIf the results are inconsistent, the disagreement is between step ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and step ",(0,o.kt)("inlineCode",{parentName:"p"},"N/2"),", and the judge can take evidence from both sides for step ",(0,o.kt)("inlineCode",{parentName:"p"},"(N/2) / 2"),".\nWith this multiple rounds of interaction, the judge keeps comparing the evidence submitted by both sides until he finds a step (say ",(0,o.kt)("inlineCode",{parentName:"p"},"m"),") where the evidence of the two sides diverges (the intermediate states of the two sides prove inconsistent)."),(0,o.kt)("p",null,"At this point, the accuser and defense have already agreed on the intermediate state proof of the previous step (",(0,o.kt)("inlineCode",{parentName:"p"},"m-1"),"), and the judge only needs to perform the ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," step based on the state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"m-1")," step, and then compare the generated state proof with the proofs provided by the accuser and defense to determine which side has submitted the right evidence."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/omo/blob/main/docs/guidelines.md"},"learn more about OMO")))}d.isMDXComponent=!0},353:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rooch-omo-50d659ffdd3c6dc7d0ce214221792776.svg"}}]);