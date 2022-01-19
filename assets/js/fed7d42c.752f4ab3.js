"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[241],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={slug:"/"},u="\ud83d\udc4b AnkiBridge Introduction",s={unversionedId:"intro",id:"intro",title:"\ud83d\udc4b AnkiBridge Introduction",description:"AnkiBridge is a plugin for [Obsidian] that allows seamless integration",source:"@site/docs/01-intro.md",sourceDirName:".",slug:"/",permalink:"/ObsidianAnkiBridge/",editUrl:"https://github.com/JeppeKlitgaard/ObsidianAnkiBridge/tree/master/docs/docs/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"\ud83d\udcbf Installation",permalink:"/ObsidianAnkiBridge/installation"}},d=[{value:"Features",id:"features",children:[{value:"\ud83d\udcd8 Blueprints",id:"-blueprints",children:[],level:3},{value:"\ud83d\udcca Rendering",id:"-rendering",children:[],level:3},{value:"\ud83e\udde0 Intuitive usage",id:"-intuitive-usage",children:[],level:3},{value:"\ud83d\udd27 Configurability",id:"-configurability",children:[],level:3},{value:"\ud83d\udd0f Never lose data",id:"-never-lose-data",children:[],level:3},{value:"\ud83d\udcaa Other features",id:"-other-features",children:[],level:3}],level:2},{value:"Upcoming Features",id:"upcoming-features",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-ankibridge-introduction"},"\ud83d\udc4b AnkiBridge Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AnkiBridge")," is a plugin for ",(0,r.kt)("a",{parentName:"p",href:"https://obsidian.md/"},"Obsidian")," that allows seamless integration\nwith the ",(0,r.kt)("a",{parentName:"p",href:"https://apps.ankiweb.net/"},"Anki")," spaced-repetition software."),(0,r.kt)("p",null,"You're ",(0,r.kt)("strong",{parentName:"p"},"highly")," encouraged to read through this documentation to get an\nunderstanding of how ",(0,r.kt)("strong",{parentName:"p"},"AnkiBridge")," works and pit-falls to avoid."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Alpha Software")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that ",(0,r.kt)("strong",{parentName:"p"},"AnkiBridge")," is still in the alpha stage.\nPolite feedback is much appreciated."),(0,r.kt)("p",{parentName:"div"},"Once the features mentioned below in ",(0,r.kt)("a",{parentName:"p",href:"#upcoming-features"},"Upcoming Features"),"\nhave all been implemented\nAnkiBridge will enter a beta phase (versions ",(0,r.kt)("inlineCode",{parentName:"p"},"1.x.y"),"). "),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"AnkiBridge does contain portions of code that modify files in your vault.\nIt could therefore delete data through a bug (though this ",(0,r.kt)("em",{parentName:"strong"},"should")," never happen).\nHaving a recent backup of your data is ",(0,r.kt)("em",{parentName:"strong"},"strongly")," encouraged.")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"While AnkiBridge is still under active development, it already has a few handy\nfeatures and is in use by me personally."),(0,r.kt)("h3",{id:"-blueprints"},"\ud83d\udcd8 Blueprints"),(0,r.kt)("p",null,"Parsing is done using 'blueprints' allowing for easy customisation and extension."),(0,r.kt)("p",null,"Unlike other projects AnkiBridge uses a powerful ",(0,r.kt)("inlineCode",{parentName:"p"},"PEG")," parser instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"regex")," approach.",(0,r.kt)("br",{parentName:"p"}),"\n","This makes parsing easier to debug and should make it very extensible too."),(0,r.kt)("p",null,"Directly in the Obsidian Vault you can specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anki Tags"),(0,r.kt)("li",{parentName:"ul"},"Anki Deck")),(0,r.kt)("p",null,"Currently implemented blueprints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd6a Sandwich Blueprint with ",(0,r.kt)("inlineCode",{parentName:"li"},"#anki/start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"#anki/---"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"#anki/end")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcbb BasicCodeBlock Blueprint with ",(0,r.kt)("inlineCode",{parentName:"li"},"```anki"))),(0,r.kt)("h3",{id:"-rendering"},"\ud83d\udcca Rendering"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddee Math rendering"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\uddbc Image rendering"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd09 Audio rendering"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf9 Video rendering"),(0,r.kt)("li",{parentName:"ul"},"\u2754 Cloze deletion"),(0,r.kt)("li",{parentName:"ul"},"\u2b07 Standard Markdown rendering"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd17 Link rendering (with Obsidian URI support)"),(0,r.kt)("li",{parentName:"ul"},"\u2693 Linking to source from Anki")),(0,r.kt)("h3",{id:"-intuitive-usage"},"\ud83e\udde0 Intuitive usage"),(0,r.kt)("p",null,"AnkiBridge should be intuitive to use and its codebase should be clean and free\nof too many tricks."),(0,r.kt)("h3",{id:"-configurability"},"\ud83d\udd27 Configurability"),(0,r.kt)("p",null,"Many of the features mentioned above can be enabled and disabled using the\nsettings tab of the plugin."),(0,r.kt)("h3",{id:"-never-lose-data"},"\ud83d\udd0f Never lose data"),(0,r.kt)("p",null,"Data is always stored in Obsidian and the syncing is just one-way.\nIf a note is updated or changed in Obsidian, it will be reflected in Anki after\nthe next sync."),(0,r.kt)("p",null,"You can still have flashcards that only exist in Anki."),(0,r.kt)("p",null,"This means that your Obsidian vault represents the truth and your Anki decks\nare always update to reflect the vault perfectly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udeae Delete notes from Anki via the ",(0,r.kt)("inlineCode",{parentName:"li"},"delete: true")," key"),(0,r.kt)("li",{parentName:"ul"},"\u27a1 Automatically moves cards to appropriate deck"),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd16 Automatically updates tags and field content when syncing ")),(0,r.kt)("h3",{id:"-other-features"},"\ud83d\udcaa Other features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\uddc3 Default deck matching"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcc2 Ignore folders"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfd3 Ping connection"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce6 Available through Community Plugins"),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddea Unit testing of blueprints")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: AnkiBridge considers the Obsidian Vault to be the 'ground truth'. Any\nchanges to bridged notes in Anki will be reverted upon sync.")),(0,r.kt)("h2",{id:"upcoming-features"},"Upcoming Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc69\u200d\ud83d\udcbb Code syntax highlighting"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf09 Syncing of Mathjax preamples (advanced feature)"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcc4 (More) Documentation"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd8 More blueprints")))}c.isMDXComponent=!0}}]);