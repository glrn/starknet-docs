"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[101],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return h}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=i(t),h=r,k=N["".concat(o,".").concat(h)]||N[h]||c[h]||m;return t?n.createElement(k,s(s({ref:e},l),{},{components:t})):n.createElement(k,s({ref:e},l))}));function h(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},7523:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return N}});var n=t(7462),r=t(3366),m=(t(7294),t(3905)),s=["components"],p={},o="Contract Hash",i={unversionedId:"Contracts/contract-hash",id:"Contracts/contract-hash",title:"Contract Hash",description:"The contract hash is a hash of its definition. The elements defining a contract are:",source:"@site/docs/Contracts/contract-hash.md",sourceDirName:"Contracts",slug:"/Contracts/contract-hash",permalink:"/starknet-docs/docs/Contracts/contract-hash",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Contracts/contract-hash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract Address",permalink:"/starknet-docs/docs/Contracts/contract-address"},next:{title:"Contract Storage",permalink:"/starknet-docs/docs/Contracts/contract-storage"}},l=[],c={toc:l};function N(a){var e=a.components,t=(0,r.Z)(a,s);return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"contract-hash"},"Contract Hash"),(0,m.kt)("p",null,"The contract hash is a hash of its definition. The elements defining a contract are:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"API version (the version under which the contract was deployed)"),(0,m.kt)("li",{parentName:"ul"},"Array of external functions entry points ",(0,m.kt)("sup",{parentName:"li",id:"fnref-1"},(0,m.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,m.kt)("li",{parentName:"ul"},"Array of ",(0,m.kt)("a",{parentName:"li",href:"https://www.cairo-lang.org/docs/hello_starknet/l1l2.html#receiving-a-message-from-l1"},"L1 handlers")," entry points"),(0,m.kt)("li",{parentName:"ul"},"Array of constructors entry points (currently, the compiler allows only one constructor)"),(0,m.kt)("li",{parentName:"ul"},"Array of used builtin names ",(0,m.kt)("sup",{parentName:"li",id:"fnref-2"},(0,m.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (ordered by declaration)"),(0,m.kt)("li",{parentName:"ul"},"Keccak",(0,m.kt)("sup",{parentName:"li",id:"fnref-3"},(0,m.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," of the contract\u2019s program. Here, the contract\u2019s program stands for the JSON obtained by executing  ",(0,m.kt)("inlineCode",{parentName:"li"},"starknet-compile")," with the ",(0,m.kt)("inlineCode",{parentName:"li"},"--no_debug_info")," flag. To see the exact computation of this field, see ",(0,m.kt)("a",{parentName:"li",href:"https://github.com/starkware-libs/cairo-lang/blob/7712b21fc3b1cb02321a58d0c0579f5370147a8b/src/starkware/starknet/core/os/contract_hash.py#L116"},"our repo"),"."),(0,m.kt)("li",{parentName:"ul"},"Bytecode (represented by an array of field elements)")),(0,m.kt)("p",null,"The contract\u2019s hash is the chain hash",(0,m.kt)("sup",{parentName:"p",id:"fnref-4"},(0,m.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," of the above, computed as follows:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"start with ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"v"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(0,api\\_version)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"for every line in the above (excluding the first), compute ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"v"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(h(previous\\_line), new\\_line)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where the hash of an array is defined ",(0,m.kt)("a",{parentName:"li",href:"../Hashing/hash-functions#array-hashing"},"here"),"."),(0,m.kt)("li",{parentName:"ul"},"let ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"c")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))," denote the cumulative hash resulting from applying the above process; the contract\u2019s hash is then ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mtext",{parentName:"mrow"},"number_of_lines"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(c, \\textrm{number\\_of\\_lines})")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"number_of_lines")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"number_of_lines")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{number\\_of\\_lines}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.00444em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"number_of_lines"))))))," is 7.\nFor more details, see the ",(0,m.kt)("a",{parentName:"li",href:"https://github.com/starkware-libs/cairo-lang/blob/7712b21fc3b1cb02321a58d0c0579f5370147a8b/src/starkware/starknet/core/os/contracts.cairo#L47"},"Cairo implementation"),".")),(0,m.kt)("div",{className:"footnotes"},(0,m.kt)("hr",{parentName:"div"}),(0,m.kt)("ol",{parentName:"div"},(0,m.kt)("li",{parentName:"ol",id:"fn-1"},(0,m.kt)("p",{parentName:"li"},"An entry point is a pair ",(0,m.kt)("inlineCode",{parentName:"p"},"(selector, offset)"),", where offset is the offset of the instruction that should be called inside the contract\u2019s bytecode"),(0,m.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Function selector")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"The selector is an identifier through which the function is callable in transactions or in other contracts. The selector is the ",(0,m.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#starknet-keccak"},"starknet_keccak")," hash of the function name, encoded in ASCII."))),(0,m.kt)("p",{parentName:"li"},(0,m.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))),(0,m.kt)("li",{parentName:"ol",id:"fn-2"},(0,m.kt)("p",{parentName:"li"},"ASCII encoding of the builtin names",(0,m.kt)("a",{parentName:"p",href:"#fnref-2",className:"footnote-backref"},"\u21a9"))),(0,m.kt)("li",{parentName:"ol",id:"fn-3"},(0,m.kt)("p",{parentName:"li"},"Here we mean ",(0,m.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#starknet-keccak"},"starknet_keccak"),(0,m.kt)("a",{parentName:"p",href:"#fnref-3",className:"footnote-backref"},"\u21a9"))),(0,m.kt)("li",{parentName:"ol",id:"fn-4"},(0,m.kt)("p",{parentName:"li"},(0,m.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#pedersen-hash"},"Pedersen hash"),(0,m.kt)("a",{parentName:"p",href:"#fnref-4",className:"footnote-backref"},"\u21a9"))))))}N.isMDXComponent=!0}}]);