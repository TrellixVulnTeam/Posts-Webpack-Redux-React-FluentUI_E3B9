(()=>{"use strict";var e,t,r,n={2270:(e,t,r)=>{var n=r(7378),o=r(1542),a=r(5977),i=r(7766),l=r(7802),c=r(512),u=r(889),s="POST/FETCH_POSTS",f="POST/ADD_POST",p="POST/DELETE_POST",d="APP/TOGGLE_DIALOG",y="APP/TOGGLE_LOADER",m="APP/TOGGLE_MODAL";function b(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function g(){return{type:d}}function v(){return{type:y}}function h(){return{type:m}}var O=r(2725),j=r(9293);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x={toggleModal:h};const A=(0,a.$j)((function(e){return{isModal:e.app.modal}}),x)((function(e){var t=S((0,n.useState)({userId:101,id:"null",title:"",body:""}),2),r=t[0],o=t[1],a=function(e){o((function(t){return w(w({},t),E({},e.target.name,e.target.value))}))};return n.createElement(j.u,{isOpen:e.isModal,onDismiss:function(){return e.toggleModal()}},n.createElement(i.K,{styles:{root:{width:"90vw",maxWidth:"1000px",padding:"20px"}}},n.createElement(i.K.Item,{align:"center",style:{width:"70%"}},n.createElement("form",{onSubmit:function(t){t.preventDefault();var n=r.title,a=r.body;if(n.trim()&&a.trim()&&!(a.trim().length<15)){var i=w(w({},r),{},{id:Date.now().toString()});e.addPost(i),o(w(w({},r),{},{title:"",body:""})),e.toggleModal()}}},n.createElement(O.n,{name:"title",value:r.title,onChange:a,label:"Post title"}),n.createElement(O.n,{placeholder:"Minimum 15 characters",name:"body",value:r.body,onChange:a,label:"Post content",multiline:!0,autoAdjustHeight:!0,resizable:!1}),n.createElement(c.K,{type:"submit",text:"Create post",style:{margin:"20px 20px 0 0"}}),n.createElement(l.a,{text:"Cancel",onClick:function(){return e.toggleModal()},style:{marginTop:"20px"}})))))}));var C=r(8861),M=r(9755),T=r(6906),k=r(437),I=r(4462),_=r(2782),K=r(3663),L=r(2099),W={toggleDialog:g};const $=(0,a.$j)((function(e){return{isHidden:e.app.dialog}}),W)((function(e){var t={dialogStyles:{main:{maxWidth:450}},buttonStyles:{root:{transition:"0.15s",backgroundColor:"#e70000",border:"none"},rootHovered:{backgroundColor:"#d10000",border:"none"},rootPressed:{backgroundColor:"#c50000",border:"none"}}},r={type:_.i.normal,title:"Confirm Deletion",closeButtonAriaLabel:"Close",subText:"Are You sure You want to continue?"};return n.createElement(K.V,{styles:t.dialogStyles,hidden:e.isHidden,onDismiss:function(){return e.toggleDialog()},dialogContentProps:r},n.createElement(L.c,null,n.createElement(c.K,{text:"Delete",onClick:function(){e.remove(),e.toggleDialog()},styles:t.buttonStyles}),n.createElement(l.a,{text:"Cancel",onClick:function(){return e.toggleDialog()}})))}));var G=r(2504),z=r(823),H={};const N=function(){return n.createElement(G.$,{style:{position:"absolute",top:"50%",right:"50%"},size:z.E.large,className:H})};function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(0,u.l)();var Y={toggleDialog:g,deletePosts:function(e){return{type:p,payload:e}}};const B=(0,a.$j)((function(e){return{loader:e.app.loader}}),Y)((function(e){if(e.loader)return n.createElement(N,null);var t,r,o={container:{root:{width:"100%",padding:"20px 0"}},buttonStyles:{root:{transition:"0.15s",backgroundColor:"#e70000",border:"none"},rootHovered:{backgroundColor:"#d10000",border:"none"},rootPressed:{backgroundColor:"#c50000",border:"none"}}},a=U((0,n.useState)([]),2),l=a[0],u=a[1],s=(0,n.useMemo)((function(){return new C.Y({onSelectionChanged:function(){u(s.getSelection())},selectionMode:M.oW.multiple})}),[]);return n.createElement(i.K,{styles:o.container},n.createElement($,{remove:function(){e.deletePosts(l),s.setAllSelected(!1)}}),n.createElement(i.K.Item,{align:"end"},n.createElement(c.K,{text:l.length<=1?"Delete selected post":"Delete selected posts (".concat(l.length,")"),disabled:!l.length,onClick:function(){return e.toggleDialog()},styles:o.buttonStyles})),n.createElement(i.K.Item,null,n.createElement(T.x,{selection:s},n.createElement(I.W,{items:e.posts,setKey:"set",selectionMode:M.oW.multiple,columns:(t=["User ID","ID","Title","Content"],r=(0,k.D)(e.posts),r.map((function(e,r){0!==r&&1!==r||(e.minWidth=50,e.maxWidth=60),e.name=t[r],e.isResizable=!0,e.isMultiline=!0})),r),selection:s,selectionPreservedOnEmptyClick:!0}))))}));(0,u.l)();var F={fetchPosts:function(){return function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t({type:s,payload:n}),setTimeout((function(){return t(v())}),1e3);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){b(a,n,o,i,l,"next",e)}function l(e){b(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},addPost:function(e){return{type:f,payload:e}},toggleModal:h};const V=(0,a.$j)((function(e){return{posts:e.posts.posts}}),F)((function(e){return n.createElement(i.K,{className:"app",styles:{root:{maxWidth:"1000px",margin:"0 auto",padding:"20px 0"}}},n.createElement(i.K,{horizontal:!0,horizontalAlign:"space-between"},n.createElement(l.a,{onClick:function(){return e.toggleModal()},text:"New post",iconProps:{iconName:"Add"}}),n.createElement(c.K,{text:"Load Posts",onClick:function(){return e.fetchPosts()}})),n.createElement(A,{addPost:e.addPost}),e.posts.length?n.createElement(B,{posts:e.posts}):n.createElement(i.K.Item,{style:{position:"absolute",top:"45%",right:"45%"}},n.createElement("h3",null,"No posts yet...")))}));var Z=r(256);function q(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te={posts:[]};function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ae={dialog:!0,loader:!1,modal:!1};var ie=(0,Z.UY)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:if(e.posts.length){var r=t.payload.filter((function(t){return!e.posts.find((function(e){return e.id===t.id}))}));return r.length?X(X({},e),{},{posts:[].concat(q(r),q(e.posts))}):e}return X(X({},e),{},{posts:[].concat(q(e.posts),q(t.payload))});case f:return X(X({},e),{},{posts:[t.payload].concat(q(e.posts))});case p:return console.log(),X(X({},e),{},{posts:e.posts.filter((function(e){return!t.payload.some((function(t){return e.id===t.id}))}))});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return ne(ne({},e),{},{dialog:!e.dialog});case y:return ne(ne({},e),{},{loader:!e.loader});case m:return ne(ne({},e),{},{modal:!e.modal});default:return e}}}),le=r(5870),ce=(0,Z.MT)(ie,(0,Z.md)(le.Z));o.render(n.createElement(a.zt,{store:ce},n.createElement(n.StrictMode,null,n.createElement(V,null))),document.getElementById("root"))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,c]=r,u=0;for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a);for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return a.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.O(void 0,[54],(()=>a(1202)));var i=a.O(void 0,[54],(()=>a(2270)));i=a.O(i)})();
//# sourceMappingURL=index.76b798793f214e6508e9.js.map