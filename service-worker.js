!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/english-for-kids/",n(n.s=4)}([function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(r){}},function(t,e,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(r){}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?y:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function g(){}function m(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(A([])));x&&x!==n&&r.call(x,i)&&(b=x);var _=m.prototype=v.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,c(_,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(k.prototype),c(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),c(_,u,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}n(1);function s(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t,e,n){return v=h()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o},v.apply(null,arguments)}function g(t){var e="function"===typeof Map?new Map:void 0;return g=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return v(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)},g(t)}var m=function(t){for(var e=t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.length>0&&(e+=" :: ".concat(JSON.stringify(r))),e};Error,new Set;"undefined"!==typeof registration&&registration.scope;function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}var _=function(){function t(e,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.onupgradeneeded,a=o.onversionchange;l(this,t),this._db=null,this._name=e,this._version=n,this._onupgradeneeded=i,this._onversionchange=a||function(){return r.close()}}return x(t,[{key:"db",get:function(){return this._db}},{key:"open",value:function(){var t=a(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._db){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,new Promise((function(t,n){var r=!1;setTimeout((function(){r=!0,n(new Error("The open request was blocked and timed out"))}),e.OPEN_TIMEOUT);var o=indexedDB.open(e._name,e._version);o.onerror=function(){return n(o.error)},o.onupgradeneeded=function(t){r?(o.transaction.abort(),o.result.close()):"function"===typeof e._onupgradeneeded&&e._onupgradeneeded(t)},o.onsuccess=function(){var n=o.result;r?n.close():(n.onversionchange=e._onversionchange.bind(e),t(n))}}));case 4:return this._db=t.sent,t.abrupt("return",this);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getKey",value:function(){var t=a(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllKeys(e,n,1);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=a(o.a.mark((function t(e,n,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:n,count:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"getAllKeys",value:function(){var t=a(o.a.mark((function t(e,n,r){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:n,count:r,includeKeys:!0});case 2:return i=t.sent,t.abrupt("return",i.map((function(t){return t.key})));case 4:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"getAllMatching",value:function(){var t=a(o.a.mark((function t(e){var n,r,i,a,u,c,s,l,f,p=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},r=n.index,i=n.query,a=void 0===i?null:i,u=n.direction,c=void 0===u?"next":u,s=n.count,l=n.includeKeys,f=void 0!==l&&l,t.next=3,this.transaction([e],"readonly",(function(t,n){var o=t.objectStore(e),i=r?o.index(r):o,u=[],l=i.openCursor(a,c);l.onsuccess=function(){var t=l.result;t?(u.push(f?t:t.value),s&&u.length>=s?n(u):t.continue()):n(u)}}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"transaction",value:function(){var t=a(o.a.mark((function t(e,n,r){var i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.open();case 2:return t.next=4,new Promise((function(t,o){var a=i._db.transaction(e,n);a.onabort=function(){return o(a.error)},a.oncomplete=function(){return t()},r(a,(function(e){return t(e)}))}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"_call",value:function(){var t=a(o.a.mark((function t(e,n,r){var i,a,u,c,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=s.length,a=new Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=s[u];return c=function(t,r){var o=t.objectStore(n),i=o[e].apply(o,a);i.onsuccess=function(){return r(i.result)}},t.next=4,this.transaction([n],r,c);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"close",value:function(){this._db&&(this._db.close(),this._db=null)}}]),t}();_.prototype.OPEN_TIMEOUT=2e3;for(var j=function(){var t,e=b(E[k],2),n=e[0],r=s(e[1]);try{var i=function(){var e=t.value;e in IDBObjectStore.prototype&&(_.prototype[e]=function(){var t=a(o.a.mark((function t(r){var i,a,u,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=c.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=c[u];return t.next=3,this._call.apply(this,[e,r,n].concat(a));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}())};for(r.s();!(t=r.n()).done;)i()}catch(u){r.e(u)}finally{r.f()}},k=0,E=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});k<E.length;k++)j();n(2);var O="/english-for-kids";self.addEventListener("activate",(function(){return self.clients.claim()}));var S="".concat(O,"/offline.html"),L=[{'revision':'68a2005877ff26708ff386150d66e993','url':'/english-for-kids/index.html'},{'revision':null,'url':'/english-for-kids/static/css/main.9f742799.chunk.css'},{'revision':null,'url':'/english-for-kids/static/js/2.8b0767c9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/3.3ded816a.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/main.cc3d24f9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/runtime-main.0143308c.js'}].map((function(t){return"object"===typeof t?t.url:t})),A="::efk-data-media",P="-v-0.0.1",T=indexedDB.open("efk-sound-database",1),M=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}].reduce((function(t,e){return t.push("".concat(O,"/").concat(e.image)),t}),[]).concat(L,S);function N(){return(N=a(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.match(e);case 2:return n=t.sent,t.abrupt("return",null!==n&&void 0!==n?n:F(e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t){return I.apply(this,arguments)}function I(){return(I=a(o.a.mark((function t(e){var n,r,i,a,u,c,s,l,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(A+P);case 2:if(n=t.sent,r=new URL(e.url),i=T.result,t.prev=5,console.log("nF 1"),!r.pathname.endsWith(".mp3")){t.next=19;break}return console.log("audio here, add some logic1"),t.next=11,fetch(e);case 11:return a=t.sent,u=fetch(e).then((function(t){return t.blob()})).catch((function(t){return console.log(t)})),console.log(u),c=i.transaction("audios","readwrite"),c.objectStore("audios"),t.abrupt("return",a);case 19:return t.next=21,fetch(e);case 21:return s=t.sent,t.next=24,n.put(e,s.clone());case 24:return t.abrupt("return",s);case 25:t.next=41;break;case 27:return t.prev=27,t.t0=t.catch(5),console.log("nF 2"),t.next=32,n.match(e);case 32:if(f=t.sent,null===(l=f)||void 0===l){t.next=37;break}t.t1=l,t.next=40;break;case 37:return t.next=39,caches.match(S);case 39:t.t1=t.sent;case 40:return t.abrupt("return",t.t1);case 41:case"end":return t.stop()}}),t,null,[[5,27]])})))).apply(this,arguments)}self.addEventListener("install",(function(t){console.log(M),t.waitUntil(caches.open("::efk-data-static-v-0.0.1").then((function(t){return t.addAll(M)})))})),T.addEventListener("upgradeneeded",(function(){console.log("upgrdneeded");var t=T.result;t.objectStoreNames.contains("audios")||t.createObjectStore("audios",{keyPath:"id"})})),T.addEventListener("error",(function(){console.error(T.error)})),T.addEventListener("success",(function(){console.log(T.result)})),self.addEventListener("activate",(function(t){console.log("activated")})),self.addEventListener("fetch",(function(t){console.log("Fetch",t.request.url);var e=t.request,n=new URL(e.url);n.origin===self.location.origin?(console.log("try to chache first"),console.log(n.origin+" / "+self.location.origin),t.respondWith(function(t){return N.apply(this,arguments)}(e))):(console.log("try to network first"),console.log(n.origin+" / "+self.location.origin),t.respondWith(F(e)))}))}]);
//# sourceMappingURL=service-worker.js.map