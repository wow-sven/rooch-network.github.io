"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[951],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(4137));const a={},o="Contribution Guide",l={unversionedId:"miscellaneous/contributing",id:"miscellaneous/contributing",title:"Contribution Guide",description:"How to Contribute",source:"@site/docs/100-miscellaneous/99-contributing.md",sourceDirName:"100-miscellaneous",slug:"/miscellaneous/contributing",permalink:"/docs/miscellaneous/contributing",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/100-miscellaneous/99-contributing.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/docs/usecases/"}},s={},c=[{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"1. Clone the Document repo",id:"1-clone-the-document-repo",level:3},{value:"2. Installing Packages",id:"2-installing-packages",level:3},{value:"3. Running the Development Server",id:"3-running-the-development-server",level:3},{value:"4. Build",id:"4-build",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"File Structure Guidelines",id:"file-structure-guidelines",level:3},{value:"Document Style Guidelines",id:"document-style-guidelines",level:3},{value:"FAQ",id:"faq",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,i.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,i.kt)("h3",{id:"1-clone-the-document-repo"},"1. Clone the Document repo"),(0,i.kt)("p",null,"Fork rooch-network.github.io repo to make a copy of this document in your account. Then ",(0,i.kt)("strong",{parentName:"p"},"clone")," that repo to your development environment and navigate to the local repo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:your-username/rooch-network.github.io.git\ncd rooch-network.github.io\n")),(0,i.kt)("h3",{id:"2-installing-packages"},"2. Installing Packages"),(0,i.kt)("p",null,"Node.js and yarn are required to build this cookbook, read the ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"yarn installation page")," for details."),(0,i.kt)("p",null,"Execute the following command in the project root to install the packages and dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn\n")),(0,i.kt)("h3",{id:"3-running-the-development-server"},"3. Running the Development Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn start\n")),(0,i.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.kt)("p",null,"English locale is used by default. Start your localized site in dev mode, using the locale of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn start --locale zh\n")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Available locales defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),".")),(0,i.kt)("h3",{id:"4-build"},"4. Build"),(0,i.kt)("p",null,"This command generates static content into the ",(0,i.kt)("inlineCode",{parentName:"p"},"/build")," directory and can be served using any static contents hosting service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn build\n")),(0,i.kt)("p",null,"The default BaseUrl is ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", if you want to change it, you can specify it via environment variable before build."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ export BASE_URL='/rooch-network'\n")),(0,i.kt)("p",null,"(2) Run the following command, which will start a web service locally."),(0,i.kt)("p",null,"Then run serve to serving build directory at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn serve\n")),(0,i.kt)("p",null,"If you specify the BASE_URL environment variable as ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", the address will be: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("h3",{id:"file-structure-guidelines"},"File Structure Guidelines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A numerical prefix is required in the directory name and file, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"01-build.md"),", which indicates the order of the document in the sidebar."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"kebab-case")," naming convention is used in directory and file names."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")," in each directory is the front page of the directory."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"_category_.yaml")," is the configuration file for a directory, in which the ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," property is the title of this directory showing in the sidebar."),(0,i.kt)("li",{parentName:"ol"},"The default documents are in English, translations can be found in ",(0,i.kt)("inlineCode",{parentName:"li"},"i18n/<language-code>/docusaurus-plugin-content-docs/current"),". Translations should use the same file name as the English docs.")),(0,i.kt)("h3",{id:"document-style-guidelines"},"Document Style Guidelines"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Chinese version is following additional document conventions, read the Chinese document style for details.")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How to translate a section (directory)?"),(0,i.kt)("p",{parentName:"li"},"Adding Chinese translation for example. Run the following command after adding a new section (directory):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn write-translations --locale zh\n")),(0,i.kt)("p",{parentName:"li"},"Changes are made to ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/zh/docusaurus-plugin-content-docs/current.json"),", and new directory name is added. Editing the file to add translation."),(0,i.kt)("p",{parentName:"li"},"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"zh")," to the corresponding language code for other languages."))))}d.isMDXComponent=!0}}]);