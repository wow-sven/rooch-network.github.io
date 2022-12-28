"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[918],{4137:(e,o,r)=>{r.d(o,{Zo:()=>p,kt:()=>m});var t=r(7294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function c(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?c(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),u=function(e){var o=t.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},p=function(e){var o=u(e.components);return t.createElement(i.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},s=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(i,".").concat(m)]||s[m]||h[m]||c;return r?t.createElement(f,a(a({ref:o},p),{},{components:r})):t.createElement(f,a({ref:o},p))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=s;var l={};for(var i in o)hasOwnProperty.call(o,i)&&(l[i]=o[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<c;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},630:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(3117),n=(r(7294),r(4137));const c={},a="Rooch Framework",l={unversionedId:"technology/move-on-rooch/rooch-framework",id:"technology/move-on-rooch/rooch-framework",title:"Rooch Framework",description:"Rooch Framework \u662f Rooch \u7684 Move \u57fa\u7840\u6846\u67b6\uff0c\u5b83\u4e3b\u8981\u6709\u4ee5\u4e0b\u6a21\u5757\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/07-move-on-rooch/03-rooch-framework.md",sourceDirName:"04-technology/07-move-on-rooch",slug:"/technology/move-on-rooch/rooch-framework",permalink:"/zh/docs/technology/move-on-rooch/rooch-framework",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/07-move-on-rooch/03-rooch-framework.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u6237\u62bd\u8c61\uff08Account Abstraction\uff09",permalink:"/zh/docs/technology/move-on-rooch/account-abstraction"},next:{title:"MoveOS",permalink:"/zh/docs/technology/move-on-rooch/moveos"}},i={},u=[{value:"\u8d26\u6237\u6a21\u5757",id:"\u8d26\u6237\u6a21\u5757",level:2},{value:"\u72b6\u6001\u8fc1\u79fb\u6a21\u5757",id:"\u72b6\u6001\u8fc1\u79fb\u6a21\u5757",level:2},{value:"Layer1 \u517c\u5bb9\u6a21\u5757",id:"layer1-\u517c\u5bb9\u6a21\u5757",level:2}],p={toc:u};function h(e){let{components:o,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rooch-framework"},"Rooch Framework"),(0,n.kt)("p",null,"Rooch Framework \u662f Rooch \u7684 Move \u57fa\u7840\u6846\u67b6\uff0c\u5b83\u4e3b\u8981\u6709\u4ee5\u4e0b\u6a21\u5757\uff1a"),(0,n.kt)("h2",{id:"\u8d26\u6237\u6a21\u5757"},"\u8d26\u6237\u6a21\u5757"),(0,n.kt)("p",null,"\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/move-on-rooch/account-abstraction"},"\u8d26\u6237\u62bd\u8c61"),"\uff0c\u6620\u5c04\u591a\u94fe\u8d26\u6237\uff0c\u7ef4\u62a4\u7528\u6237\u5728\u6267\u884c\u5c42\u7684\u72b6\u6001\u7a7a\u95f4\uff0c\u7ed9\u5e94\u7528\u5c42\u63d0\u4f9b\u7528\u6237\u72b6\u6001\u548c\u8d44\u4ea7\u4ea4\u4e92\u7684\u63a5\u53e3\u3002"),(0,n.kt)("h2",{id:"\u72b6\u6001\u8fc1\u79fb\u6a21\u5757"},"\u72b6\u6001\u8fc1\u79fb\u6a21\u5757"),(0,n.kt)("p",null,"\u5b9e\u73b0 Layer1 \u548c\u6267\u884c\u5c42\u4e4b\u95f4\u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/state-scaling"},"\u72b6\u6001\u8fc1\u79fb"),"\u3002"),(0,n.kt)("h2",{id:"layer1-\u517c\u5bb9\u6a21\u5757"},"Layer1 \u517c\u5bb9\u6a21\u5757"),(0,n.kt)("p",null,"\u5c3d\u91cf\u5c4f\u853d\u4e0d\u540c\u7684 Move Layer1 \u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u964d\u4f4e\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u6210\u672c\u3002"))}h.isMDXComponent=!0}}]);