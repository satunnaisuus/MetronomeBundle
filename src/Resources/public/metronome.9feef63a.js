(self.webpackChunk=self.webpackChunk||[]).push([[998],{673:(e,t,n)=>{var r={"./action_confirmation_controller.js":711,"./admin_data_table_controller.js":699,"./ajax_uploader_controller.js":843,"./crud_form_controller.js":0,"./form_collection_controller.js":286,"./menu_toggle_controller.js":191,"./resource_picker_controller.js":822,"./sidebar_controller.js":519,"./tooltip_controller.js":200};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=673},205:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},711:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}n.r(t),n.d(t,{default:()=>y});var f,s,p,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&a(e,t)}(l,e);var t,n,r,c=u(l);function l(){return o(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"connect",value:function(){var e=this.element,t=this.messageValue,n=this.csrfValue;e.addEventListener("click",(function(r){if(r.preventDefault(),confirm(t)){var o=new FormData;o.append("token",n),fetch(e.href,{method:"POST",body:o}).then((function(e){return e.json()})).then((function(e){e.redirect?window.location.href=e.redirect:window.location.reload()}))}}))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n(330).Qr);f=y,s="values",p={message:String,csrf:String},s in f?Object.defineProperty(f,s,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[s]=p},699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(330),o=n(616);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&c(e,t)}(f,e);var t,n,r,i=l(f);function f(){return a(this,f),i.apply(this,arguments)}return t=f,(n=[{key:"connect",value:function(){var e=this;"ajaxUrl"in this.element.dataset?fetch(this.element.dataset.ajaxUrl,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.text()})).then((function(t){e.element.innerHTML=t,new o.w(e.element.querySelector('[data-role="table-widget"]'),"ajax"in e.element.dataset)})):new o.w(this.element.querySelector('[data-role="table-widget"]'),"ajax"in this.element.dataset)}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Qr)},843:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:()=>s});var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&a(e,t)}(l,e);var t,n,r,c=u(l);function l(){return o(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"connect",value:function(){this.pathInputTarget.value?(this.linkTarget.href=this.pathInputTarget.value,this.sizeTarget.innerText=this.formatSize(this.sizeInputTarget.value),this.imageValue?this.thumbnailTarget.src=this.pathInputTarget.value:this.linkTarget.innerText=this.nameInputTarget.value):(this.linkTarget.style.display="none",this.sizeTarget.style.display="none")}},{key:"choice",value:function(){var e=this,t=this,n=document.createElement("input");n.type="file",n.click(),n.onchange=function(r){if(0!==n.files.length){var o=new FormData;o.append("upload",r.target.files[0]),e.spinnerTarget.style.display=null,e.uploadIconTarget.style.display="none",fetch(t.urlValue,{method:"post",body:o,headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(n){if(n.url)t.pathInputTarget.value=n.url,t.nameInputTarget.value=n.originalName,t.mimeTypeInputTarget.value=n.mimeType,t.sizeInputTarget.value=n.size,t.imageValue?t.thumbnailTarget.src=n.url:t.linkTarget.innerText=n.originalName,t.linkTarget.href=n.url,t.sizeTarget.innerText=t.formatSize(n.size),t.linkTarget.style.display=null,t.sizeTarget.style.display=null,e.spinnerTarget.style.display="none",e.uploadIconTarget.style.display=null;else if(Array.isArray(n))return Promise.reject(n.join(". "))})).catch((function(t){e.spinnerTarget.style.display="none",e.uploadIconTarget.style.display=null,alert(t)}))}}}},{key:"delete",value:function(){this.pathInputTarget.value=null,this.sizeInputTarget.value=null,this.mimeTypeInputTarget.value=null,this.nameInputTarget.value=null,this.linkTarget.style.display="none",this.sizeTarget.style.display="none"}},{key:"formatSize",value:function(e){if(!e)return"";var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]}},{key:"htmlToElements",value:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n(599).Qr);f(s,"targets",["pathInput","sizeInput","mimeTypeInput","nameInput","link","size","thumbnail","spinner","uploadIcon"]),f(s,"values",{image:Boolean,url:String})},0:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}n.r(t),n.d(t,{default:()=>y});var f,s,p,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&a(e,t)}(f,e);var t,n,c,l=u(f);function f(){return o(this,f),l.apply(this,arguments)}return t=f,(n=[{key:"initialize",value:function(){}},{key:"connect",value:function(){}},{key:"changeState",value:function(e){var t=e.params,n=t.key,o=t.value,i={};if(this.stateTarget.value){var a=JSON.parse(this.stateTarget.value);"object"==r(a)&&(i=a)}i[n]=o,this.stateTarget.value=JSON.stringify(i)}},{key:"ajaxSubmit",value:function(e){var t=this;e.preventDefault(),fetch(this.element.action,{method:this.element.method,body:new FormData(this.element),headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.text()})).then((function(e){t.element.parentElement.innerHTML=e}))}}])&&i(t.prototype,n),c&&i(t,c),Object.defineProperty(t,"prototype",{writable:!1}),f}(n(330).Qr);p=["state"],(s="targets")in(f=y)?Object.defineProperty(f,s,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[s]=p},286:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}n.r(t),n.d(t,{default:()=>h});var p,y,d,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&c(e,t)}(f,e);var t,n,r,i=l(f);function f(){return a(this,f),i.apply(this,arguments)}return t=f,(n=[{key:"initialize",value:function(){this.index=this.itemTargets.length}},{key:"connect",value:function(){}},{key:"add",value:function(e){var t=e.params,n=t.prototypeName,r=t.prototype;r=r.replace(new RegExp(n+"label__","g"),this.index).replace(new RegExp(n,"g"),this.index);var i=this.htmlToElements(r);if("string"==typeof i.dataset.sortingField){var a=i.querySelector("#"+i.dataset.sortingField);a&&(a.value=10*(this.index+1))}this.containerTarget.appendChild(i);var u,c=o(i.querySelectorAll("script"));try{for(c.s();!(u=c.n()).done;){var l,f=u.value,s=document.createElement("script"),p=o(f.attributes);try{for(p.s();!(l=p.n()).done;){var y=l.value;s.setAttribute(y.name,y.value)}}catch(e){p.e(e)}finally{p.f()}s.appendChild(document.createTextNode(f.innerHTML)),f.parentNode.replaceChild(s,f)}}catch(e){c.e(e)}finally{c.f()}this.index++}},{key:"delete",value:function(e){e.target.closest('[data-form-collection-target="item"]').remove()}},{key:"htmlToElements",value:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(n(330).Qr);d=["container","item"],(y="targets")in(p=h)?Object.defineProperty(p,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):p[y]=d},191:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}n.r(t),n.d(t,{default:()=>f});var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&a(e,t)}(l,e);var t,n,r,c=u(l);function l(){return o(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"connect",value:function(){this.element.addEventListener("click",(function(e){e.preventDefault(),window.dispatchEvent(new Event("admin.open-sidebar")),this.classList.toggle("menu-toggle__opened")}))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n(330).Qr)},822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(330),o=n(616),i=n(169);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&l(e,t)}(s,e);var t,n,r,a=f(s);function s(){return u(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"initialize",value:function(){this.value=JSON.parse(this.inputTarget.value)}},{key:"connect",value:function(){}},{key:"openModal",value:function(){var e=this,t=document.createElement("div");t.innerHTML='\n            <div class="modal" tabindex="-1">\n              <div class="modal-dialog modal-xl">\n                <div class="modal-content">\n                  <div class="modal-header">\n                    <div class="modal-title">Выбор ресурса</div>\n                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\n                  </div>\n                  <div class="modal-body" data-role="modal-body">\n                  </div>\n                  <div class="modal-footer">\n                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Отмена</button>\n                    <button type="button" class="btn btn-primary" data-role="select">Выбрать</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n        ',document.body.append(t);var n=t.querySelector(".modal"),r=new i.u_(n);r.show();var a=this.value;e.multipleValue&&!Array.isArray(a)&&(a=[]),n.querySelector('[data-role="select"]').addEventListener("click",(function(t){t.preventDefault(),r.hide(),e.updateValue(a)})),n.addEventListener("hidden.bs.modal",(function(e){t.remove()})),fetch(this.urlValue,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.text()})).then((function(t){n.querySelector('[data-role="modal-body"]').innerHTML=t;var r=new o.w(n.querySelector('[data-role="table-widget"]'),!0,(function(t){t.hideCheckAll(),e.multipleValue?a.forEach((function(e){return t.checkItem(e.id)})):null!==a&&t.checkItem(a.id)}));r.addEventListener("check",(function(t){t.detail.checked?e.multipleValue?a.push(t.detail.item):(r.uncheckAll(),r.checkItem(t.detail.item.id),a=t.detail.item):a=e.multipleValue?a.filter((function(e){return e.id!==t.detail.item.id})):null}))}))}},{key:"updateValue",value:function(e){var t=this;this.value=e,this.inputTarget.value=JSON.stringify(e),this.multipleValue?(this.containerTarget.innerHTML="",e.forEach((function(e){t.containerTarget.appendChild(t.htmlToElements(t.containerTarget.dataset.prototype.replace(/__id__/g,null===e?"":e.id).replace(/__label__/g,null===e?"":e.name)))}))):this.nameTarget.innerText=null===e?"":e.name}},{key:"delete",value:function(e){var t=e.target.closest('[data-resource-picker-target="element"]');this.multipleValue?this.updateValue(this.value.filter((function(e){return e.id!=t.dataset.id}))):this.updateValue(null)}},{key:"htmlToElements",value:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Qr);y(d,"targets",["input","container","element","name"]),y(d,"values",{multiple:Boolean,url:String,prototype:String})},519:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}n.r(t),n.d(t,{default:()=>f});var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&a(e,t)}(l,e);var t,n,r,c=u(l);function l(){return o(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"connect",value:function(){var e=this.element;window.addEventListener("admin.open-sidebar",(function(){e.classList.contains("admin-sidebar--opened")?(e.classList.remove("admin-sidebar--opened"),document.body.style.overflow=""):(e.classList.add("admin-sidebar--opened"),document.body.style.overflow="hidden")}))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n(330).Qr)},200:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(330),o=n(169);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var p,y,d,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&c(e,t)}(f,e);var t,n,r,i=l(f);function f(){return a(this,f),i.apply(this,arguments)}return t=f,(n=[{key:"connect",value:function(){new o.u(this.element,{boundary:document.body})}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Qr);p=h,y="values",d={title:String},y in p?Object.defineProperty(p,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):p[y]=d},827:(e,t,n)=>{"use strict";(0,n(192).x)(n(673)),n(169)},616:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)},c(e)}function l(e,t,n){return l=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&s(o,n.prototype),o},l.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}n.d(t,{w:()=>y});var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&s(e,t)}(i,e);var t,n,r=(t=i,n=f(),function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function i(e,t,n){var a;return o(this,i),(a=r.call(this)).element=e,a.tableConfig=new d(e.dataset.id),a.init(t,n),a}return a(i,[{key:"init",value:function(e,t){var n=this,r=this.element.querySelector('[data-role="open-filters"]'),o=this.element.querySelectorAll('[data-role="close-filters"]'),i=this.element.querySelector('[data-role="filters"]');r&&r.addEventListener("click",(function(e){i.classList.add("active")})),o&&o.forEach((function(e){e.addEventListener("click",(function(e){i.classList.remove("active")}))})),this.element.querySelectorAll('[data-role="check"]').forEach((function(e){var t=n;e.addEventListener("change",(function(e){var n=e.target.closest('[data-role="row"]');t.dispatchEvent(new CustomEvent("check",{detail:{checked:e.target.checked,item:{id:n.dataset.id,name:n.dataset.name}}}))}))})),this.element.querySelectorAll('[data-role="confirmation"]').forEach((function(r){var o=n;r.addEventListener("click",(function(n){if(n.preventDefault(),confirm(r.dataset.confirmationText)){var i=new FormData;i.append("token",o.element.dataset.csrf),fetch(r.href,{method:"POST",body:i}).then((function(){e?o.ajaxLoad(o.element.dataset.url,t):window.location.reload()}))}}))}));var a=function e(t,r){n.element.querySelectorAll('[data-role="row"][data-parent="'+t+'"]').forEach((function(t){r?(t.classList.add("d-none"),e(t.dataset.id,!0)):(t.classList.remove("d-none"),t.classList.contains("data-table__row--opened")&&e(t.dataset.id,!1))}))},u=function e(t){var r=n.element.querySelector('[data-role="row"][data-id="'+t.dataset.parent+'"]');return!r||r.classList.contains("data-table__row--opened")&&e(r)},c=this.element.querySelectorAll('[data-role="row"]');c.forEach((function(e){n.tableConfig.isOpenedRow(e.dataset.id)&&e.classList.add("data-table__row--opened")})),c.forEach((function(e){e.dataset.parent&&u(e)&&e.classList.remove("d-none")})),this.element.querySelectorAll('[data-role="collapse-children"]').forEach((function(e){e.addEventListener("click",(function(t){var r,o;t.preventDefault(),r=e.closest('[data-role="row"]'),o=r.classList.contains("data-table__row--opened"),r.classList.toggle("data-table__row--opened"),a(r.dataset.id,o),o?n.tableConfig.closeRow(r.dataset.id):n.tableConfig.openRow(r.dataset.id)}))})),e&&(this.element.querySelectorAll('[data-role="sort"]').forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),n.ajaxLoad(e.href,t)}))})),this.element.querySelectorAll('form[name="filter"]').forEach((function(e){e.addEventListener("submit",(function(r){r.preventDefault(),n.ajaxLoad(e.getAttribute("action")+"?"+new URLSearchParams(new FormData(e)).toString(),t)}))})),this.element.querySelectorAll('[data-role="pagination"] a').forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),n.ajaxLoad(e.href,t)}))})),this.element.querySelectorAll('form[name="search"]').forEach((function(e){e.addEventListener("submit",(function(r){r.preventDefault(),n.ajaxLoad(e.getAttribute("action")+"?"+new URLSearchParams(new FormData(e)).toString(),t)}))})),this.element.querySelectorAll('[data-role="reset-filters"]').forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),n.ajaxLoad(e.href,t)}))})),this.element.querySelectorAll('[data-role="reset-search"]').forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),n.ajaxLoad(e.href,t)}))}))),"function"==typeof t&&t(this)}},{key:"ajaxLoad",value:function(e,t,n){var r=this;(n=n||{}).headers=n.headers||{},n.headers["X-Requested-With"]="XMLHttpRequest",fetch(e,n).then((function(e){return e.text()})).then((function(e){var n=(new DOMParser).parseFromString(e,"text/html").body.childNodes[0];r.element.replaceWith(n),r.element=n,r.init(!0,t)}))}},{key:"checkItem",value:function(e){var t=this.element.querySelector('[data-role="row"][data-id="'+e+'"]');if(t){var n=t.querySelector('[data-role="check"]');n&&(n.checked=!0)}}},{key:"uncheckAll",value:function(){this.element.querySelectorAll('[data-role="check-all"], [data-role="check"]').forEach((function(e){e.checked=!1}))}},{key:"hideCheckAll",value:function(){var e=this.element.querySelector('[data-role="check-all"]');e&&(e.style.display="none")}}]),i}(c(EventTarget)),d=function(){function e(t){o(this,e),this.key="admin-table-"+t,this.config=JSON.parse(window.localStorage.getItem(this.key)),null===this.config&&(this.config={openedRows:{}})}return a(e,[{key:"openRow",value:function(e){this.config.openedRows[e]=!0,this.flush()}},{key:"closeRow",value:function(e){delete this.config.openedRows[e],this.flush()}},{key:"isOpenedRow",value:function(e){return!0===this.config.openedRows[e]}},{key:"flush",value:function(){window.localStorage.setItem(this.key,JSON.stringify(this.config))}}]),e}()}},e=>{e.O(0,[189],(()=>{return t=827,e(e.s=t);var t}));e.O()}]);