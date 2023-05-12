(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  width: 30%;\r\n  margin: auto;\r\n  margin-top: 140px;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  box-shadow: 2px 1px 10px 3px rgba(0, 0, 0, 0.3);\r\n  border-radius: 4px;\r\n}\r\n\r\nhr {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.today,\r\n#error-message {\r\n  margin-left: 10px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 15px;\r\n}\r\n\r\n.add {\r\n  border: none;\r\n  background-color: #ffff;\r\n}\r\n\r\n#type-todo {\r\n  border: none;\r\n  margin-left: 5px;\r\n  font-size: 15px;\r\n  width: 100%;\r\n}\r\n\r\n#todo-list {\r\n  list-style-type: none;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 15px;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\nli.check {\r\n  color: black;\r\n  text-decoration: line-through;\r\n}\r\n\r\n#submit {\r\n  border: none;\r\n  background-color: #dcd9d9cc;\r\n  font-size: 15px;\r\n  padding: 11px;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  width: 100%;\r\n}\r\n\r\n.more-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.submit-btn {\r\n  height: 40px;\r\n  margin-top: -8px;\r\n  width: 100%;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-item {\r\n  align-items: center;\r\n}\r\n\r\n.todo-item input[type="checkbox"] {\r\n  margin-right: 5px;\r\n}\r\n',""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{var e={};n.r(e);var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),d=n.n(i),c=n(565),s=n.n(c),l=n(216),p=n.n(l),u=n(589),m=n.n(u),f=n(28),y={};y.styleTagTransform=m(),y.setAttributes=s(),y.insert=d().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;const h=[];function g(){const e=document.getElementById("todo-list");h.sort(((e,t)=>e.index-t.index)),e.innerHTML=h.map((e=>`<li class="todo-item ${e.completed?"completed":""}">\n          <input type="checkbox" ${e.completed?"checked":""}>\n          <span>${e.description}</span>\n          <hr class="todo-hr">\n        </li>`)).join("")}g();const v=document.getElementById("todo-list"),x={},b=()=>{localStorage.setItem("tasks",JSON.stringify(x))};v.addEventListener("click",(e=>{if("checkbox"===e.target.type){const{index:t}=e.target.parentNode.parentNode.dataset;x[t].completed=e.target.checked,b()}else if(e.target.classList.contains("delete-btn")){const{index:t}=e.target.dataset;(e=>{const t=v.querySelector(`li[data-index="${e}"]`);t&&(v.removeChild(t),delete x[e],b())})(t)}}));const E=()=>{localStorage.setItem("tasks",JSON.stringify(h))};document.getElementById("type-todo").addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),(()=>{const e=document.querySelector("#type-todo"),t=document.getElementById("todo-list"),n=document.querySelector("#error-message"),r={description:e.value.trim(),completed:!1,index:h.length};if(""!==r.description){h.push(r),E();const o=document.createElement("li");o.classList.add("task-item");const a=document.createElement("input");a.type="checkbox",a.addEventListener("click",(e=>{const{index:t}=e.target.parentNode.dataset;h[t].completed=e.target.checked,E(),e.target.checked?e.target.parentNode.classList.add("completed"):e.target.parentNode.classList.remove("completed")}));const i=document.createTextNode(`   ${r.description}`);o.appendChild(a),o.appendChild(document.createTextNode("   ")),o.appendChild(i);const d=document.createElement("button"),c=document.createElement("button"),s=document.createElement("button");c.textContent="Edit",c.classList.add("edit-button"),c.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",e.value=i.nodeValue.trim(),e.addEventListener("keydown",(t=>{"Enter"===t.key&&(i.nodeValue=`   ${e.value.trim()}`,o.removeChild(e),o.appendChild(a),o.appendChild(document.createTextNode("   ")),o.appendChild(i),c.style.display="none",s.style.display="none",d.style.display="inline-block",h[o.dataset.index].description=e.value.trim(),E())})),o.removeChild(i),o.appendChild(e),e.focus()})),s.textContent="Delete",s.classList.add("delete-button"),s.addEventListener("click",(()=>{t.removeChild(o),h.splice(o.dataset.index,1),E()})),d.textContent="•••",d.classList.add("more-button"),d.addEventListener("click",(()=>{const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.appendChild(c),t.appendChild(s),e.appendChild(t),o.appendChild(e),c.style.display="block",s.style.display="block",c.style.width="40px",c.style.textDecoration="none",s.style.width="55px",d.style.display="none"})),d.style.float="right",d.style.marginRight="10px",c.style.marginTop="-20px",c.style.marginLeft="90%",s.style.float="right",s.style.marginLeft="88%",d.style.border="none",d.style.backgroundColor="white",o.appendChild(d),o.dataset.index=h.length-1,t.appendChild(o);const l=document.createElement("hr");t.appendChild(l),s.addEventListener("click",(()=>{t.removeChild(l)})),e.value="",n.textContent=""}else n.textContent="Task cannot be empty!!";setTimeout((()=>{n.textContent=""}),2e3)})())})),document.getElementById("submit").addEventListener("click",(()=>{const e=document.getElementById("todo-list"),t=e.getElementsByTagName("li");for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(r.querySelector("input[type='checkbox']").checked){const t=r.nextElementSibling;e.removeChild(r),t&&"HR"===t.tagName&&e.removeChild(t)}}E()})),function(){const e=JSON.parse(localStorage.getItem("tasks"))||[];h.length=0,h.push(e),g()}(),localStorage.clear();const k=document.getElementById("todo-list");k.addEventListener("dragstart",e.handleDragStart),k.addEventListener("dragover",e.handleDragOver),k.addEventListener("drop",e.handleDrop)})()})();