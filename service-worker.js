!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/english-for-kids/",n(n.s=4)}([function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(r){}},function(t,e,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(r){}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return A()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function g(){}function m(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,a)&&(b=x);var j=m.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=m,c(j,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),c(j,u,"Generator"),c(j,a,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}n(1);function s(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){return!e||"object"!==d(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t,e,n){return v=h()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o},v.apply(null,arguments)}function g(t){var e="function"===typeof Map?new Map:void 0;return g=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return v(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)},g(t)}var m=function(t){for(var e=t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.length>0&&(e+=" :: ".concat(JSON.stringify(r))),e};Error,new Set;"undefined"!==typeof registration&&registration.scope;function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}var j=function(){function t(e,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=o.onupgradeneeded,i=o.onversionchange;f(this,t),this._db=null,this._name=e,this._version=n,this._onupgradeneeded=a,this._onversionchange=i||function(){return r.close()}}return x(t,[{key:"db",get:function(){return this._db}},{key:"open",value:function(){var t=i(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._db){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,new Promise((function(t,n){var r=!1;setTimeout((function(){r=!0,n(new Error("The open request was blocked and timed out"))}),e.OPEN_TIMEOUT);var o=indexedDB.open(e._name,e._version);o.onerror=function(){return n(o.error)},o.onupgradeneeded=function(t){r?(o.transaction.abort(),o.result.close()):"function"===typeof e._onupgradeneeded&&e._onupgradeneeded(t)},o.onsuccess=function(){var n=o.result;r?n.close():(n.onversionchange=e._onversionchange.bind(e),t(n))}}));case 4:return this._db=t.sent,t.abrupt("return",this);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getKey",value:function(){var t=i(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllKeys(e,n,1);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=i(o.a.mark((function t(e,n,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:n,count:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"getAllKeys",value:function(){var t=i(o.a.mark((function t(e,n,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllMatching(e,{query:n,count:r,includeKeys:!0});case 2:return a=t.sent,t.abrupt("return",a.map((function(t){return t.key})));case 4:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"getAllMatching",value:function(){var t=i(o.a.mark((function t(e){var n,r,a,i,u,c,s,f,l,p=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},r=n.index,a=n.query,i=void 0===a?null:a,u=n.direction,c=void 0===u?"next":u,s=n.count,f=n.includeKeys,l=void 0!==f&&f,t.next=3,this.transaction([e],"readonly",(function(t,n){var o=t.objectStore(e),a=r?o.index(r):o,u=[],f=a.openCursor(i,c);f.onsuccess=function(){var t=f.result;t?(u.push(l?t:t.value),s&&u.length>=s?n(u):t.continue()):n(u)}}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"transaction",value:function(){var t=i(o.a.mark((function t(e,n,r){var a=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.open();case 2:return t.next=4,new Promise((function(t,o){var i=a._db.transaction(e,n);i.onabort=function(){return o(i.error)},i.oncomplete=function(){return t()},r(i,(function(e){return t(e)}))}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"_call",value:function(){var t=i(o.a.mark((function t(e,n,r){var a,i,u,c,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=s.length,i=new Array(a>3?a-3:0),u=3;u<a;u++)i[u-3]=s[u];return c=function(t,r){var o=t.objectStore(n),a=o[e].apply(o,i);a.onsuccess=function(){return r(a.result)}},t.next=4,this.transaction([n],r,c);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"close",value:function(){this._db&&(this._db.close(),this._db=null)}}]),t}();j.prototype.OPEN_TIMEOUT=2e3;for(var O=function(){var t,e=b(E[k],2),n=e[0],r=s(e[1]);try{var a=function(){var e=t.value;e in IDBObjectStore.prototype&&(j.prototype[e]=function(){var t=i(o.a.mark((function t(r){var a,i,u,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=c.length,i=new Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=c[u];return t.next=3,this._call.apply(this,[e,r,n].concat(i));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}())};for(r.s();!(t=r.n()).done;)a()}catch(u){r.e(u)}finally{r.f()}},k=0,E=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});k<E.length;k++)O();function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P,A;var I=new WeakMap,D=new WeakMap,B=new WeakMap,T=new WeakMap,M=new WeakMap;var N={get:function(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return D.get(t);if("objectStoreNames"===e)return t.objectStoreNames||B.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return W(t[e])},set:function(t,e,n){return t[e]=n,!0},has:function(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function F(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(A||(A=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(C(this),n),W(I.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return W(t.apply(C(this),n))}:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=t.call.apply(t,[C(this),e].concat(r));return B.set(a,e.sort?e.sort():[e]),W(a)}}function R(t){return"function"===typeof t?F(t):(t instanceof IDBTransaction&&function(t){if(!D.has(t)){var e=new Promise((function(e,n){var r=function(){t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=function(){e(),r()},a=function(){n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));D.set(t,e)}}(t),e=t,(P||(P=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(t){return e instanceof t}))?new Proxy(t,N):t);var e}function W(t){if(t instanceof IDBRequest)return function(t){var e=new Promise((function(e,n){var r=function(){t.removeEventListener("success",o),t.removeEventListener("error",a)},o=function(){e(W(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)}));return e.then((function(e){e instanceof IDBCursor&&I.set(e,t)})).catch((function(){})),M.set(e,t),e}(t);if(T.has(t))return T.get(t);var e=R(t);return e!==t&&(T.set(t,e),M.set(e,t)),e}var C=function(t){return M.get(t)};function K(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,o=n.upgrade,a=n.blocking,i=n.terminated,u=indexedDB.open(t,e),c=W(u);return o&&u.addEventListener("upgradeneeded",(function(t){o(W(u.result),t.oldVersion,t.newVersion,W(u.transaction))})),r&&u.addEventListener("blocked",(function(){return r()})),c.then((function(t){i&&t.addEventListener("close",(function(){return i()})),a&&t.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),c}var G=["get","getKey","getAll","getAllKeys","count"],q=["put","add","delete","clear"],U=new Map;function V(t,e){if(t instanceof IDBDatabase&&!(e in t)&&"string"===typeof e){if(U.get(e))return U.get(e);var n=e.replace(/FromIndex$/,""),r=e!==n,a=q.includes(n);if(n in(r?IDBIndex:IDBObjectStore).prototype&&(a||G.includes(n))){var u=function(){var t=i(o.a.mark((function t(e){var i,u,c,s,f,l,p=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(u=this.transaction(e,a?"readwrite":"readonly"),c=u.store,s=p.length,f=new Array(s>1?s-1:0),l=1;l<s;l++)f[l-1]=p[l];return r&&(c=c.index(f.shift())),t.next=6,Promise.all([(i=c)[n].apply(i,f),a&&u.done]);case 6:return t.abrupt("return",t.sent[0]);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return U.set(e,u),u}}}N=function(t){return S(S({},t),{},{get:function(e,n,r){return V(e,n)||t.get(e,n,r)},has:function(e,n){return!!V(e,n)||t.has(e,n)}})}(N);n(2);var Y="/english-for-kids";self.addEventListener("activate",(function(){return self.clients.claim()}));var $,J="".concat(Y,"/offline.html"),z=[{'revision':'68a2005877ff26708ff386150d66e993','url':'/english-for-kids/index.html'},{'revision':null,'url':'/english-for-kids/static/css/main.9f742799.chunk.css'},{'revision':null,'url':'/english-for-kids/static/js/2.8b0767c9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/3.3ded816a.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/main.cc3d24f9.chunk.js'},{'revision':null,'url':'/english-for-kids/static/js/runtime-main.0143308c.js'}].map((function(t){return"object"===typeof t?t.url:t})),H="::efk-data-static",Q="::efk-data-media",X="-v-0.0.1",Z="-v-0.0.1",tt=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}].reduce((function(t,e){return t.push("".concat(Y,"/").concat(e.image)),t}),[]).concat(z,J);function et(t,e){return nt.apply(this,arguments)}function nt(){return(nt=i(o.a.mark((function t(e,n){var r,a,i,u,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("CF"),!n.pathname.endsWith(".mp3")){t.next=17;break}return r=$.transaction("audios","readonly").store,t.next=5,r.get(n.pathname);case 5:return a=t.sent,t.t0=console,t.next=9,it(a,n.pathname);case 9:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.next=13,it(a,n.pathname);case 13:return i=t.sent,t.abrupt("return",null!==i&&void 0!==i?i:rt(e,n));case 17:return t.next=19,caches.match(e);case 19:if(!(u=t.sent)){t.next=24;break}return t.abrupt("return",u);case 24:return t.next=26,caches.open(Q+X);case 26:return c=t.sent,t.next=29,fetch(e);case 29:return s=t.sent,t.next=32,c.put(e,s.clone());case 32:return t.abrupt("return",s);case 33:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function rt(t,e){return ot.apply(this,arguments)}function ot(){return(ot=i(o.a.mark((function t(e,n){var r,a,i,u,c,s,f,l,p;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("no match in db NWF"),t.next=3,caches.open(Q+X);case 3:if(r=t.sent,t.prev=4,!n.pathname.endsWith(".mp3")){t.next=22;break}return t.next=8,fetch(e);case 8:return a=t.sent,i=a.clone(),t.next=12,a.blob();case 12:return u=t.sent,console.log(a),t.next=16,at(u);case 16:return c=t.sent,s=$.transaction("audios","readwrite").objectStore("audios"),s.put(c,n.pathname),t.abrupt("return",i);case 22:return t.next=24,fetch(e);case 24:return f=t.sent,t.next=27,r.put(e,f.clone());case 27:return t.abrupt("return",f);case 28:t.next=43;break;case 30:return t.prev=30,t.t0=t.catch(4),t.next=34,r.match(e);case 34:if(p=t.sent,null===(l=p)||void 0===l){t.next=39;break}t.t1=l,t.next=42;break;case 39:return t.next=41,caches.match(J);case 41:t.t1=t.sent;case 42:return t.abrupt("return",t.t1);case 43:case"end":return t.stop()}}),t,null,[[4,30]])})))).apply(this,arguments)}function at(t){return new Promise((function(e,n){var r=new FileReader;t&&r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))}function it(t,e){return ut.apply(this,arguments)}function ut(){return(ut=i(o.a.mark((function t(e,n){var r,a,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.next=5,r.blob();case 5:return a=t.sent,i={status:206,url:n,statusText:"audioFromIDB",redirecterd:!1},u=new Blob([a],{type:"audio/mp3"}),t.abrupt("return",new Response(u,i));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){var t=i(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K("efk-sound-database",1,{upgrade:function(t){t.objectStoreNames.contains("audios")||t.createObjectStore("audios")}});case 2:$=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),self.addEventListener("install",(function(t){console.log(tt),t.waitUntil(caches.open(H+Z).then((function(t){return t.addAll(tt)})))})),self.addEventListener("activate",function(){var t=i(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:return n=t.sent,t.next=5,Promise.all(n.filter((function(t){return t!==H+Z})).filter((function(t){return t!==Q+X})).map((function(t){return caches.delete(t)})));case 5:console.log("activated");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),self.addEventListener("fetch",function(){var t=i(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Fetch",e.request.url),n=e.request,(r=new URL(n.url)).origin===self.location.origin?e.respondWith(et(n,r)):e.respondWith(rt(n,r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}]);
//# sourceMappingURL=service-worker.js.map