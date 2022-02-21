"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[544],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return c}});var m=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,m)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,m,n=function(a,e){if(null==a)return{};var t,m,n={},r=Object.keys(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=m.createContext({}),o=function(a){var e=m.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},N=function(a){var e=o(a.components);return m.createElement(l.Provider,{value:e},a.children)},i={inlineCode:"code",wrapper:function(a){var e=a.children;return m.createElement(m.Fragment,{},e)}},k=m.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,l=a.parentName,N=p(a,["components","mdxType","originalType","parentName"]),k=o(t),c=n,d=k["".concat(l,".").concat(c)]||k[c]||i[c]||r;return t?m.createElement(d,s(s({ref:e},N),{},{components:t})):m.createElement(d,s({ref:e},N))}));function c(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,s=new Array(r);s[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:n,s[1]=p;for(var o=2;o<r;o++)s[o]=t[o];return m.createElement.apply(null,s)}return m.createElement.apply(null,t)}k.displayName="MDXCreateElement"},869:function(a,e,t){t.d(e,{Z:function(){return p}});var m=t(7294),n=t(6775),r="apiTable_BHCF";var s=(0,m.forwardRef)((function(a,e){var t=a.name,r=a.children,s=function(a){for(var e=a;(0,m.isValidElement)(e);)e=m.Children.toArray(e.props.children)[0];return e}(r),p=t?t+"-"+s:s,l="#"+p,o=(0,n.k6)();return m.createElement("tr",{id:p,tabIndex:0,ref:o.location.hash===l?e:void 0,onClick:function(){o.push(l)},onKeyDown:function(a){"Enter"===a.key&&o.push(l)}},r.props.children)}));function p(a){var e=a.children,t=a.name,n=m.Children.toArray(e.props.children),p=n[0],l=n[1],o=(0,m.useRef)(null);(0,m.useEffect)((function(){var a;null==(a=o.current)||a.focus()}),[o]);var N=m.Children.map(l.props.children,(function(a){return m.createElement(s,{name:t,ref:o},a)}));return m.createElement("table",{className:r},p,m.createElement("tbody",null,N))}},2905:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return N},toc:function(){return i},default:function(){return c}});var m=t(7462),n=t(3366),r=(t(7294),t(3905)),s=t(869),p=["components"],l={},o="Block structure",N={unversionedId:"Blocks/header",id:"Blocks/header",title:"Block structure",description:"In StarkNet, the block is defined as a list of transactions and a block header.",source:"@site/docs/Blocks/header.md",sourceDirName:"Blocks",slug:"/Blocks/header",permalink:"/starknet-docs/docs/Blocks/header",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blocks/header.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/starknet-docs/docs/intro"},next:{title:"Transaction Lifecycle",permalink:"/starknet-docs/docs/Blocks/transaction-life-cycle"}},i=[{value:"Block header",id:"block-header",children:[],level:2},{value:"Block hash",id:"block-hash",children:[],level:2}],k={toc:i};function c(a){var e=a.components,t=(0,n.Z)(a,p);return(0,r.kt)("wrapper",(0,m.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"block-structure"},"Block structure"),(0,r.kt)("p",null,"In StarkNet, the block is defined as a list of transactions and a block header."),(0,r.kt)("h2",{id:"block-header"},"Block header"),(0,r.kt)("p",null,"The following fields define the block header:"),(0,r.kt)(s.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Implemented"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parent_block_hash")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"The hash of this block's parent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block_number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"integer")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"pending"')),(0,r.kt)("td",{parentName:"tr",align:null},"The number (height) of this block"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"global_state_root")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"The hash of this block's parent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sequencer_address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ethereum address?")),(0,r.kt)("td",{parentName:"tr",align:null},"The Ethereum address of the sequencer submitting the state update that creates this block"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block_timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"The time the sequencer created this block before executing transactions"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transaction_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of transactions in a ablock"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transaction_commitment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"A commitment to the transactions included in the block"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of events"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event_commitment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field_element")),(0,r.kt)("td",{parentName:"tr",align:null},"A commitment to the events produced in this block"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"protocol_version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the StarkNet protocol used when creating this block"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"field element")),(0,r.kt)("td",{parentName:"tr",align:null},"Extraneous data that might be useful for running transactions"),(0,r.kt)("td",{parentName:"tr",align:"center"}))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"commitments")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The commitment fields transaction_commitment, event_commitment are the roots of a hieght 64 binary Merkle Patricia tree. The leaf at index ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," corresponds to the hash of the ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"i"),(0,r.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i'th")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," event/transaction."))),(0,r.kt)("h2",{id:"block-hash"},"Block hash"),(0,r.kt)("p",null,"The block hash is defined as the Pedersen hash over the header's elements."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mtable",{parentName:"semantics",rowspacing:"0.24999999999999992em",columnalign:"right left",columnspacing:"0em"},(0,r.kt)("mtr",{parentName:"mtable"},(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"},(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"=")))),(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"},(0,r.kt)("mrow",{parentName:"mrow"}),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"q"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","))))),(0,r.kt)("mtr",{parentName:"mtable"},(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"}))),(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"},(0,r.kt)("mrow",{parentName:"mrow"}),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","))))),(0,r.kt)("mtr",{parentName:"mtable"},(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"}))),(0,r.kt)("mtd",{parentName:"mtr"},(0,r.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,r.kt)("mrow",{parentName:"mstyle"},(0,r.kt)("mrow",{parentName:"mrow"}),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{aligned} h(B)=&h(block\\_number, global\\_state\\_root, sequencer\\_address, block\\_timestamp, \\\\ &transaction\\_count, transaction\\_commitment, event\\_count,\\\\ &event\\_commitment, 0, 0, parent\\_block\\_hash) \\end{aligned}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"4.500000000000002em",verticalAlign:"-2.000000000000001em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mtable"},(0,r.kt)("span",{parentName:"span",className:"col-align-r"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5000000000000004em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"})),(0,r.kt)("span",{parentName:"span",style:{top:"-1.6599999999999993em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"}))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.000000000000001em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"col-align-l"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5000000000000004em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,r.kt)("span",{parentName:"span",style:{top:"-1.6599999999999993em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.000000000000001em"}},(0,r.kt)("span",{parentName:"span"})))))))))))),(0,r.kt)("p",null,"Where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," is the ",(0,r.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#pedersen-hash"},"Pedersen")," hash."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"placeholders")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Zeroes inside the hash computation of an object are used as placeholders, to be replaced in the future by meaningful fields."))))}c.isMDXComponent=!0}}]);