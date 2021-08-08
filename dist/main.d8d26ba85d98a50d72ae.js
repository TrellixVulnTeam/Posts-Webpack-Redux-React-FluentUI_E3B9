(()=>{"use strict";var e,t,r,n,o={1866:(e,t,r)=>{var n=r(7378),o=r(1542),a=r(5977),i=r(7766),l=r(7802),c=r(512),u=r(889),s="POST/FETCH_POSTS",f="POST/ADD_POST",p="POST/DELETE_POST",d="APP/TOGGLE_DIALOG",m="APP/TOGGLE_LOADER",y="APP/TOGGLE_MODAL";function g(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function b(){return{type:d}}function v(){return{type:m}}function h(){return{type:y}}var O=r(9293),j=r(2725);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D={toggleModal:h};const C=(0,a.$j)((function(e){return{isModal:e.app.modal}}),D)((function(e){var t=S((0,n.useState)({userId:101,id:"null",title:"",body:""}),2),r=t[0],o=t[1],a=function(e){o((function(t){return w(w({},t),E({},e.target.name,e.target.value))}))};return n.createElement(O.u,{isOpen:e.isModal,onDismiss:function(){return e.toggleModal()}},n.createElement(i.K,{styles:{root:{width:"90vw",maxWidth:"1000px",padding:"20px"}}},n.createElement(i.K.Item,{align:"center",style:{width:"70%"}},n.createElement("form",{onSubmit:function(t){t.preventDefault();var n=r.title,a=r.body;if(n.trim()&&a.trim()&&!(a.trim().length<15)){var i=w(w({},r),{},{id:Date.now().toString()});e.addPost(i),o(w(w({},r),{},{title:"",body:""})),e.toggleModal()}}},n.createElement(j.n,{name:"title",value:r.title,onChange:a,label:"Post title"}),n.createElement(j.n,{placeholder:"Minimum 15 characters",name:"body",value:r.body,onChange:a,label:"Post content",multiline:!0,autoAdjustHeight:!0,resizable:!1}),n.createElement(c.K,{type:"submit",text:"Create post",style:{margin:"20px 20px 0 0"}}),n.createElement(l.a,{text:"Cancel",onClick:function(){return e.toggleModal()},style:{marginTop:"20px"}})))))}));var x=r(8861),k=r(9755),T=r(437),M=r(6906),I=r(4462),_=r(2782),K=r(3663),L=r(2099),$={toggleDialog:b};const N=(0,a.$j)((function(e){return{isHidden:e.app.dialog}}),$)((function(e){var t={dialogStyles:{main:{maxWidth:450}},buttonStyles:{root:{transition:"0.15s",backgroundColor:"#e70000",border:"none"},rootHovered:{backgroundColor:"#d10000",border:"none"},rootPressed:{backgroundColor:"#c50000",border:"none"}}},r={type:_.i.normal,title:"Confirm Deletion",closeButtonAriaLabel:"Close",subText:"Are You sure You want to continue?"};return n.createElement(K.V,{styles:t.dialogStyles,hidden:e.isHidden,onDismiss:function(){return e.toggleDialog()},dialogContentProps:r},n.createElement(L.c,null,n.createElement(c.K,{text:"Delete",onClick:function(){e.remove(),e.toggleDialog()},styles:t.buttonStyles}),n.createElement(l.a,{text:"Cancel",onClick:function(){return e.toggleDialog()}})))}));var W=r(2504),G=r(823),z={};const H=function(){return n.createElement(W.$,{style:{position:"absolute",top:"50%",right:"50%"},size:G.E.large,className:z})};function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R={toggleDialog:b,deletePosts:function(e){return{type:p,payload:e}}};const Y=(0,a.$j)((function(e){return{loader:e.app.loader}}),R)((function(e){if((0,u.l)(),e.loader)return n.createElement(H,null);var t,r,o={container:{root:{width:"100%",padding:"20px 0"}},buttonStyles:{root:{transition:"0.15s",backgroundColor:"#e70000",border:"none"},rootHovered:{backgroundColor:"#d10000",border:"none"},rootPressed:{backgroundColor:"#c50000",border:"none"}}},a=U((0,n.useState)([]),2),l=a[0],s=a[1],f=(0,n.useMemo)((function(){return new x.Y({onSelectionChanged:function(){s(f.getSelection())},selectionMode:k.oW.multiple})}),[]);return n.createElement(i.K,{styles:o.container},n.createElement(N,{remove:function(){e.deletePosts(l),f.setAllSelected(!1)}}),n.createElement(i.K.Item,{align:"end"},n.createElement(c.K,{text:l.length<=1?"Delete selected post":"Delete selected posts (".concat(l.length,")"),disabled:!l.length,onClick:function(){return e.toggleDialog()},styles:o.buttonStyles})),n.createElement(i.K.Item,null,n.createElement(M.x,{selection:f},n.createElement(I.W,{items:e.posts,setKey:"set",selectionMode:k.oW.multiple,columns:(t=["User ID","ID","Title","Content"],r=(0,T.D)(e.posts),r.map((function(e,r){0!==r&&1!==r||(e.minWidth=50,e.maxWidth=60),e.name=t[r],e.isResizable=!0,e.isMultiline=!0})),r),selection:f,selectionPreservedOnEmptyClick:!0}))))}));var F={fetchPosts:function(){return function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t({type:s,payload:n}),setTimeout((function(){return t(v())}),1e3);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){g(a,n,o,i,l,"next",e)}function l(e){g(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},addPost:function(e){return{type:f,payload:e}},toggleModal:h};const q=(0,a.$j)((function(e){return{posts:e.posts.posts}}),F)((function(e){(0,u.l)();return n.createElement(i.K,{className:"app",styles:{root:{maxWidth:"1000px",margin:"0 auto",padding:"20px 0"}}},n.createElement(i.K,{horizontal:!0,horizontalAlign:"space-between"},n.createElement(l.a,{onClick:function(){return e.toggleModal()},text:"New post",iconProps:{iconName:"Add"}}),n.createElement(c.K,{text:"Load Posts",onClick:function(){return e.fetchPosts()}})),n.createElement(C,{addPost:e.addPost}),e.posts.length?n.createElement(Y,{posts:e.posts}):n.createElement(i.K.Item,{style:{position:"absolute",top:"45%",right:"45%"}},n.createElement("h3",null,"No posts yet...")))}));var V=r(256);function Z(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te={posts:[]};function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ae={dialog:!0,loader:!1,modal:!1};var ie=(0,V.UY)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:if(e.posts.length){var r=t.payload.filter((function(t){return!e.posts.find((function(e){return e.id===t.id}))}));return r.length?X(X({},e),{},{posts:[].concat(Z(r),Z(e.posts))}):e}return X(X({},e),{},{posts:[].concat(Z(e.posts),Z(t.payload))});case f:return X(X({},e),{},{posts:[t.payload].concat(Z(e.posts))});case p:return console.log(),X(X({},e),{},{posts:e.posts.filter((function(e){return!t.payload.some((function(t){return e.id===t.id}))}))});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return ne(ne({},e),{},{dialog:!e.dialog});case m:return ne(ne({},e),{},{loader:!e.loader});case y:return ne(ne({},e),{},{modal:!e.modal});default:return e}}}),le=r(5870),ce=(0,V.MT)(ie,(0,V.md)(le.Z));o.render(n.createElement(a.zt,{store:ce},n.createElement(n.StrictMode,null,n.createElement(q,null))),document.getElementById("root"))}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,n,o)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"fabric.async.53e32d2f28f6d4f647c0.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var a,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var s=c[u];if(s.getAttribute("src")==e){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=e),n[e]=[t];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=i.p+i.u(t),l=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,l,c]=r,u=0;for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(c)var s=c(i);for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return i.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.O(void 0,[54],(()=>i(1202)));var l=i.O(void 0,[54],(()=>i(1866)));l=i.O(l)})();
//# sourceMappingURL=main.d8d26ba85d98a50d72ae.js.map