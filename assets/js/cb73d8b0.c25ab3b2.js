"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[250],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},869:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6775),i="apiTable_BHCF";var l=(0,n.forwardRef)((function(e,t){var a=e.name,i=e.children,l=function(e){for(var t=e;(0,n.isValidElement)(t);)t=n.Children.toArray(t.props.children)[0];return t}(i),o=a?a+"-"+l:l,s="#"+o,c=(0,r.k6)();return n.createElement("tr",{id:o,tabIndex:0,ref:c.location.hash===s?t:void 0,onClick:function(){c.push(s)},onKeyDown:function(e){"Enter"===e.key&&c.push(s)}},i.props.children)}));function o(e){var t=e.children,a=e.name,r=n.Children.toArray(t.props.children),o=r[0],s=r[1],c=(0,n.useRef)(null);(0,n.useEffect)((function(){var e;null==(e=c.current)||e.focus()}),[c]);var p=n.Children.map(s.props.children,(function(e){return n.createElement(l,{name:a,ref:c},e)}));return n.createElement("table",{className:i},o,n.createElement("tbody",null,p))}},873:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=(a(869),["components"]),o={},s="Commands",c={unversionedId:"CLI/commands",id:"CLI/commands",title:"Commands",description:"All the CLI commands require the `--network` parameter, which can be either alpha-goerli or alpha-network.",source:"@site/docs/CLI/commands.md",sourceDirName:"CLI",slug:"/CLI/commands",permalink:"/starknet-docs/docs/CLI/commands",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CLI/commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hash functions",permalink:"/starknet-docs/docs/Hashing/hash-functions"},next:{title:"Contract ABI",permalink:"/starknet-docs/docs/Contracts/contract-abi"}},p=[{value:"starknet deploy_account",id:"starknet-deploy_account",children:[],level:3},{value:"starknet invoke",id:"starknet-invoke",children:[],level:3},{value:"starknet deploy",id:"starknet-deploy",children:[],level:3},{value:"starknet tx_status",id:"starknet-tx_status",children:[],level:3},{value:"starknet call",id:"starknet-call",children:[],level:3},{value:"starknet get_block",id:"starknet-get_block",children:[],level:3},{value:"starknet get_code",id:"starknet-get_code",children:[],level:3},{value:"starknet get_storage_at",id:"starknet-get_storage_at",children:[],level:3},{value:"starknet get_transaction",id:"starknet-get_transaction",children:[],level:3},{value:"starknet get_transaction_receipt",id:"starknet-get_transaction_receipt",children:[],level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"commands"},"Commands"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the CLI commands require the ",(0,i.kt)("inlineCode",{parentName:"p"},"--network")," parameter, which can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha-goerli")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha-network"),".\nYou can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"STARKNET_NETWORK")," environment variable, causing subsequent calls to the\nStarkNet CLI to use the specified network, e.g. to interact with testnet you can set:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"export STARKNET_NETWORK=alpha-goerli")))),(0,i.kt)("h3",{id:"starknet-deploy_account"},"starknet deploy_account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="deploy account"',title:'"deploy','account"':!0},"starknet deploy_account\n  --wallet <wallet_provider>\n  --account <account_name>\n")),(0,i.kt)("p",null,"Deploys an account contract, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account_name")," - the name given to the account, used for managing multiple accounts from the CLI (if not specified, the name\n",(0,i.kt)("inlineCode",{parentName:"li"},"__default__")," is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_provider"),"* - the path to module which manages the account (responsible for key generation, signing, etc.)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Today, the StarkNet CLI only works with the Open-Zeppelin account contract which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo"},"here"),". The wallet provider used by the CLI can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/wallets/open_zeppelin.py"},"here"),".\nTo use this provider, either set up the following environment variable or pass the same value directly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet_provider")," parameter:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"export STARKNET_WALLET=starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount\n")))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using the builtin wallet providers that are part of the cairo-lang package (starkware.starknet.wallets...) is ",(0,i.kt)("em",{parentName:"p"},"not secure")," (for example, the private key may be kept unencrypted and without backup in your home directory). You should only use them if you\u2019re not overly concerned with losing access to your accounts (for example, for testing purposes)."))),(0,i.kt)("h3",{id:"starknet-invoke"},"starknet invoke"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke"',title:'"invoke"'},"starknet invoke\n  --address <contract_address>\n  --abi <contract_abi>\n  --function <function_name>\n  --inputs <arguments>\n  --signature <signature_information>\n  --wallet <wallet_name>\n  --nonce <nonce>\n")),(0,i.kt)("p",null,"Sends a transaction to the StarkNet sequencer, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),"* - the address of the called contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_abi"),"* - a path to a JSON file containing the called ",(0,i.kt)("a",{parentName:"li",href:"https://www.cairo-lang.org/docs/hello_starknet/intro.html#the-contract-s-abi"},"contract\u2019s abi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function_name"),"*- the name of the called function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arguments"),"* - inputs to the called function, represented by a list of space-delimited values`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature_information")," - list of field elements as described ",(0,i.kt)("a",{parentName:"li",href:"../Blocks/transactions#signature"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_name")," - the name of the desired wallet, use ",(0,i.kt)("a",{parentName:"li",href:"./commands#starknet-deploy_account"},"deploy_account")," to set-up new accounts in the CLI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," - account nonce, only relevant if the call is going through an account")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Today, interaction with StarkNet may be done either via account or by a direct call. The ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," argument can only be provided in the case of a direct call, since otherwise providing the signature is the responssibility of the account module. To use an account you must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet_name"),", otherwise a direct call will be used (you may also explicitly perform a direct call by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--no_wallet")," to the command). Note that in the future direct calls will be deprecated and the only way to interact with the system would be through accounts."))),(0,i.kt)("h3",{id:"starknet-deploy"},"starknet deploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="deploy"',title:'"deploy"'},"starknet deploy\n  --salt <salt>\n  --contract <contract_definition>\n  --inputs <constructor_inputs>\n  --token <token>\n")),(0,i.kt)("p",null,"Deploys a new contract, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salt")," - a seed that is used in the computation of the contract\u2019s address (if not specified, the sequencer will choose a random string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_definition"),"* - path to a JSON file containing the contract\u2019s bytecode and abi (can be obtained by executing ",(0,i.kt)("a",{parentName:"li",href:"https://www.cairo-lang.org/docs/hello_starknet/intro.html#compile-the-contract"},"starknet-compile"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constructor_inputs"),"* - the arguments given to the contract\u2019s constructor, represented by a list of space-delimited values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token")," - a token allowing contract deployment (can be obtained by applying ",(0,i.kt)("a",{parentName:"li",href:"https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu"},"here"),"). Only used in the Alpha stages and will be deprecated in the future")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The deploy token is a temporary measure which will be deprecated when fees are incorporated in the system. Only relevant for mainnet."))),(0,i.kt)("h3",{id:"starknet-tx_status"},"starknet tx_status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tx_status"',title:'"tx_status"'},"starknet tx_status\n  --hash <transaction_hash>\n  --contract <contract_definition>\n  --error_message\n")),(0,i.kt)("p",null,"Returns the transaction status, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_hash"),"* - hash of the requested transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_definition")," - path to a JSON file containing the compiled contract to which the transaction was addressed. If supplied, the debug information from the compiled contract will be used to add error locations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error_message")," - if specified, only the error message will be returned (or empty response in case the transaction was successful)")),(0,i.kt)("p",null,"The possible statuses of a transaction are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOT_RECEIVED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECEIVED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PENDING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REJECTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCEPTED_ON_L2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCEPTED_ON_L1"))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"../Blocks/transaction-life-cycle"},"this")," section for more information about the transaction lifecycle."),(0,i.kt)("h3",{id:"starknet-call"},"starknet call"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="call"',title:'"call"'},"starknet call\n  --address <contract_address>\n  --abi <contract_abi>\n  --function <function_name>\n  --inputs <arguments>\n  --block_hash <block_hash>\n  --block_number <block_number>\n  --signature <signature_information>\n  --wallet <wallet_name>\n  --nonce <nonce>\n")),(0,i.kt)("p",null,"Calls a StarkNet contract without affecting the state, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_address"),"* - address of the called contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_abi"),"* - path to a JSON file containing the called ",(0,i.kt)("a",{parentName:"li",href:"https://www.cairo-lang.org/docs/hello_starknet/intro.html#the-contract-s-abi"},"contract\u2019s abi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function_name"),"* - name of the function which is called"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arguments"),"* - inputs to the called function, represented by a list of space-delimited values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_hash")," - the hash of the block used as the context for the call operation. If this argument is omitted, the latest block is used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_number")," - same as block_hash, but specifies the context block by number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature_information")," - list of field elements as described ",(0,i.kt)("a",{parentName:"li",href:"../Blocks/transactions#signature"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_name")," - the name of the desired wallet, use ",(0,i.kt)("a",{parentName:"li",href:"./commands#starknet-deploy_account"},"deploy_account")," to set-up new accounts in the CLI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," - account nonce, only relevant if the call is going through an account")),(0,i.kt)("h3",{id:"starknet-get_block"},"starknet get_block"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="get_block"',title:'"get_block"'},"starknet get_block\n--hash <block_hash>\n--number <block_number>\n")),(0,i.kt)("p",null,"Returns the requested block, exactly one of the following arguments must be given:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_hash")," - hash of the requested block"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_number")," - number of the requested block")),(0,i.kt)("h3",{id:"starknet-get_code"},"starknet get_code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="get_code"',title:'"get_code"'},"starknet get_code\n  --contract_address <contact_address>\n  --block_hash <block_hash>\n  --block_number <block_number>\n")),(0,i.kt)("p",null,"Returns the ABI and the byte code of the requested contract, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contact_address"),"* - address of the requested contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_hash")," - the hash of the block used as the context for the operation. If this argument is omitted, the latest block is used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_number")," - same as block_hash, but specifies the context block by number.")),(0,i.kt)("h3",{id:"starknet-get_storage_at"},"starknet get_storage_at"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="get_storage_at"',title:'"get_storage_at"'},"starknet get_storage_at\n  --contract_address <contract_address>\n  --key <key>\n  --block_hash <block_hash>\n  --block_number <block_number>\n")),(0,i.kt)("p",null,"Queries a contract\u2019s storage at a specific key, can take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract_address")," *- address of the requested contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),"* - the requested key from the given contract\u2019s storage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_hash")," - the hash of the block relative to which the storage will be provided. In case this argument is not given, the latest block is used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_number")," - same as block_hash, but specifies the context block by number")),(0,i.kt)("h3",{id:"starknet-get_transaction"},"starknet get_transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="get_transaction"',title:'"get_transaction"'},"starknet get_transaction --hash <transaction_hash>\n")),(0,i.kt)("p",null,"Returns the requested transaction, expects the following argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_hash"),"* - hash of the requested transaction")),(0,i.kt)("h3",{id:"starknet-get_transaction_receipt"},"starknet get_transaction_receipt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="get_transaction_receipt"',title:'"get_transaction_receipt"'},"starknet get_transaction_receipt --hash <transaction_hash>\n")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"../Blocks/transaction-life-cycle#transaction-receipt"},"receipt")," associated with the transaction, expects the following argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_hash"),"* - hash of the requested transaction")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Custom endpoints")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When working with the CLI, it's possible to manually choose the read/write endpoints for the\ninteraction with StarkNet, by adding the `",(0,i.kt)("inlineCode",{parentName:"p"},"--feeder_gateway_url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gateway_url")," parameters."),(0,i.kt)("p",{parentName:"div"},"The following are the endpoints for StarkNet testnet and mainnet:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Testnet feeder gateway URL: ",(0,i.kt)("a",{parentName:"li",href:"https://alpha4.starknet.io/feeder_gateway/"},"https://alpha4.starknet.io/feeder_gateway/")),(0,i.kt)("li",{parentName:"ul"},"Mainnet feeder gateway URL: ",(0,i.kt)("a",{parentName:"li",href:"https://alpha-mainnet.starknet.io/feeder_gateway/"},"https://alpha-mainnet.starknet.io/feeder_gateway/")),(0,i.kt)("li",{parentName:"ul"},"Testnet gateway URL: ",(0,i.kt)("a",{parentName:"li",href:"https://alpha4.starknet.io/gateway/"},"https://alpha4.starknet.io/gateway/")),(0,i.kt)("li",{parentName:"ul"},"Mainnet gateway URL: ",(0,i.kt)("a",{parentName:"li",href:"https://alpha-mainnet.starknet.io/gateway/"},"https://alpha-mainnet.starknet.io/gateway/"))))))}m.isMDXComponent=!0}}]);