!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/english-for-kids/",r(r.s=4)}([function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(n){}},function(t,e,r){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(n){}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?y:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",v={};function d(){}function g(){}function m(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(A([])));x&&x!==r&&n.call(x,i)&&(b=x);var _=m.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,c(_,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(k.prototype),c(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),c(_,u,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}r(1);function s(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,r){return d=h()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&l(o,r.prototype),o},d.apply(null,arguments)}function g(t){var e="function"===typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return d(t,arguments,p(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)},g(t)}var m=function(t){for(var e=t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.length>0&&(e+=" :: ".concat(JSON.stringify(n))),e};Error,new Set;"undefined"!==typeof registration&&registration.scope;function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e,r){return e&&w(t.prototype,e),r&&w(t,r),t}var _=function(){function t(e,r){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.onupgradeneeded,a=o.onversionchange;f(this,t),this._db=null,this._name=e,this._version=r,this._onupgradeneeded=i,this._onversionchange=a||function(){return n.close()}}return x(t,[{key:"db",get:function(){return this._db}},{key:"open",value:function(){var t=a(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._db){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,new Promise((function(t,r){var n=!1;setTimeout((function(){n=!0,r(new Error("The open request was blocked and timed out"))}),e.OPEN_TIMEOUT);var o=indexedDB.open(e._name,e._version);o.onerror=function(){return r(o.error)},o.onupgradeneeded=function(t){n?(o.transaction.abort(),o.result.close()):"function"===typeof e._onupgradeneeded&&e._onupgradeneeded(t)},o.onsuccess=function(){var r=o.result;n?r.close():(r.onversionchange=e._onversionchange.bind(e),t(r))}}));case 4:return this._db=t.sent,t.abrupt("return",this);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getKey",value:function(){var t=a(o.a.mark((function t(e,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllKeys(e,r,1);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=a(o.a.mark((function t(e,r,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:r,count:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"getAllKeys",value:function(){var t=a(o.a.mark((function t(e,r,n){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:r,count:n,includeKeys:!0});case 2:return i=t.sent,t.abrupt("return",i.map((function(t){return t.key})));case 4:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"getAllMatching",value:function(){var t=a(o.a.mark((function t(e){var r,n,i,a,u,c,s,f,l,p=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=p.length>1&&void 0!==p[1]?p[1]:{},n=r.index,i=r.query,a=void 0===i?null:i,u=r.direction,c=void 0===u?"next":u,s=r.count,f=r.includeKeys,l=void 0!==f&&f,t.next=3,this.transaction([e],"readonly",(function(t,r){var o=t.objectStore(e),i=n?o.index(n):o,u=[],f=i.openCursor(a,c);f.onsuccess=function(){var t=f.result;t?(u.push(l?t:t.value),s&&u.length>=s?r(u):t.continue()):r(u)}}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"transaction",value:function(){var t=a(o.a.mark((function t(e,r,n){var i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.open();case 2:return t.next=4,new Promise((function(t,o){var a=i._db.transaction(e,r);a.onabort=function(){return o(a.error)},a.oncomplete=function(){return t()},n(a,(function(e){return t(e)}))}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"_call",value:function(){var t=a(o.a.mark((function t(e,r,n){var i,a,u,c,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=s.length,a=new Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=s[u];return c=function(t,n){var o=t.objectStore(r),i=o[e].apply(o,a);i.onsuccess=function(){return n(i.result)}},t.next=4,this.transaction([r],n,c);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"close",value:function(){this._db&&(this._db.close(),this._db=null)}}]),t}();_.prototype.OPEN_TIMEOUT=2e3;for(var j=function(){var t,e=b(O[k],2),r=e[0],n=s(e[1]);try{var i=function(){var e=t.value;e in IDBObjectStore.prototype&&(_.prototype[e]=function(){var t=a(o.a.mark((function t(n){var i,a,u,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=c.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=c[u];return t.next=3,this._call.apply(this,[e,n,r].concat(a));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}())};for(n.s();!(t=n.n()).done;)i()}catch(u){n.e(u)}finally{n.f()}},k=0,O=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});k<O.length;k++)j();r(2);var E="/english-for-kids";self.addEventListener("activate",(function(){return self.clients.claim()}));var S="".concat(E,"/offline.html"),L=[{'revision':'68a2005877ff26708ff386150d66e993','url':'/english-for-kids/index.html'},{'revision':null,'url':'/english-for-kids/static/css/main.9f742799.chunk.css'},{'revision':null,'url':'/english-for-kids/static/js/2.8b0767c9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/3.3ded816a.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/main.cc3d24f9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/runtime-main.0143308c.js'}].map((function(t){return"object"===typeof t?t.url:t})),A="::efk-data-media",P="-v-0.0.1",T=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}].reduce((function(t,e){return t.push("".concat(E,"/").concat(e.image)),t}),[]).concat(L,S);function M(){return(M=a(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.match(e);case 2:if(null===(r=t.sent)||void 0===r){t.next=7;break}t.t0=r,t.next=10;break;case 7:return t.next=9,fetch(e);case 9:t.t0=t.sent;case 10:return t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=a(o.a.mark((function t(e){var r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(A+P);case 2:return r=t.sent,t.prev=3,console.log("nF 1"),t.next=7,fetch(e);case 7:return n=t.sent,t.next=10,r.put(e,n.clone());case 10:return t.abrupt("return",n);case 13:return t.prev=13,t.t0=t.catch(3),console.log("nF 2"),t.next=18,r.match(e);case 18:if(a=t.sent,null===(i=a)||void 0===i){t.next=23;break}t.t1=i,t.next=26;break;case 23:return t.next=25,caches.match(S);case 25:t.t1=t.sent;case 26:return t.abrupt("return",t.t1);case 27:case"end":return t.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}self.addEventListener("install",(function(t){console.log(T),t.waitUntil(caches.open("::efk-data-static-v-0.0.1").then((function(t){return t.addAll(T)})))})),self.addEventListener("activate",(function(t){console.log("activated")})),self.addEventListener("fetch",(function(t){console.log("Fetch",t.request.url);var e=t.request;new URL(e.url).origin===self.location.origin?(console.log("try to chache first"),t.respondWith(function(t){return M.apply(this,arguments)}(e))):(console.log("try to network first"),t.respondWith(function(t){return F.apply(this,arguments)}(e)))}))}]);
//# sourceMappingURL=service-worker.js.map