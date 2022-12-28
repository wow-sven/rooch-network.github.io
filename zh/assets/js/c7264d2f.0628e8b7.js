"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[736],{4137:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>v});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},u=function(e){var o=s(e.components);return r.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),v=n,h=m["".concat(l,".").concat(v)]||m[v]||p[v]||c;return t?r.createElement(h,a(a({ref:o},u),{},{components:t})):r.createElement(h,a({ref:o},u))}));function v(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6228:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(3117),n=(t(7294),t(4137));const c={},a="MoveOS",i={unversionedId:"technology/move-on-rooch/moveos",id:"technology/move-on-rooch/moveos",title:"MoveOS",description:"MoveOS \u662f\u57fa\u4e8e MoveVM \u5f00\u53d1\u7684 Move \u6267\u884c\u73af\u5883\uff0c\u76ee\u7684\u662f\u5c4f\u853d\u4e0d\u540c\u7684 Move Layer1 \u4e4b\u95f4\u7684\u9002\u914d\u5c42\u7684\u5dee\u5f02\uff0c\u5bf9 Move \u5e94\u7528\u4f9b\u7edf\u4e00\u7684 Move \u8fd0\u884c\u73af\u5883\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5c06 Move \u96c6\u6210\u5230\u4e0d\u540c\u7684\u5e94\u7528\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/07-move-on-rooch/04-moveos.md",sourceDirName:"04-technology/07-move-on-rooch",slug:"/technology/move-on-rooch/moveos",permalink:"/zh/docs/technology/move-on-rooch/moveos",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/07-move-on-rooch/04-moveos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rooch Framework",permalink:"/zh/docs/technology/move-on-rooch/rooch-framework"},next:{title:"P2P \u7f51\u7edc\u4e0a\u7684\u72b6\u6001\u901a\u9053",permalink:"/zh/docs/technology/state-channel/"}},l={},s=[],u={toc:s};function p(e){let{components:o,...c}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,c,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"moveos"},"MoveOS"),(0,n.kt)("p",null,"MoveOS \u662f\u57fa\u4e8e MoveVM \u5f00\u53d1\u7684 Move \u6267\u884c\u73af\u5883\uff0c\u76ee\u7684\u662f\u5c4f\u853d\u4e0d\u540c\u7684 Move Layer1 \u4e4b\u95f4\u7684\u9002\u914d\u5c42\u7684\u5dee\u5f02\uff0c\u5bf9 Move \u5e94\u7528\u4f9b\u7edf\u4e00\u7684 Move \u8fd0\u884c\u73af\u5883\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5c06 Move \u96c6\u6210\u5230\u4e0d\u540c\u7684\u5e94\u7528\u4e2d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"modular",src:t(3304).Z,width:"681",height:"301"})),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u5b83\u8fd8\u4f1a\u96c6\u6210",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/fraud-proofs"},"\u6b3a\u8bc8\u8bc1\u660e"),"\u65b9\u6848\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5728\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u4e2d\u4f7f\u7528\u6b3a\u8bc8\u8bc1\u660e\u673a\u5236\u6765\u4fdd\u8bc1\u5b89\u5168\u3002"))}p.isMDXComponent=!0},3304:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/rooch-moveos-217eb2afcd791c8d90a4540a71615692.svg"}}]);