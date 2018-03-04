/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===T.call(t)}function i(t){return"[object ArrayBuffer]"===T.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===T.call(t)}function p(t){return"[object File]"===T.call(t)}function d(t){return"[object Blob]"===T.call(t)}function h(t){return"[object Function]"===T.call(t)}function v(t){return l(t)&&h(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function m(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function _(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=_(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)b(arguments[n],t);return e}function w(t,e,n){return b(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(3),C=n(17),T=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:i,isBuffer:C,isFormData:o,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:h,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:b,merge:_,extend:w,trim:m}},function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i=n(0),o=n(20),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(4):void 0!==e&&(t=n(4)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){s.headers[t]={}}),i.forEach(["post","put","patch"],function(t){s.headers[t]=i.merge(a)}),t.exports=s}).call(e,n(19))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";var r=n(0),i=n(21),o=n(23),a=n(24),s=n(25),u=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(26);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var g=t.auth.username||"",m=t.auth.password||"";p.Authorization="Basic "+c(g+":"+m)}if(d.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,o={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};i(e,l,o),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(27),b=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;b&&(p[t.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(t,e,n){"use strict";var r=n(22);t.exports=function(t,e,n,i,o){var a=new Error(t);return r(a,e,n,i,o)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){n(9),t.exports=n(40)},function(t,e,n){n(10),window.Vue=n(35),Vue.component("example-component",n(36));new Vue({el:"#app"})},function(t,e,n){window._=n(11);try{window.$=window.jQuery=n(13),n(14)}catch(t){}window.axios=n(15),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r&&(window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content)},function(t,e,n){(function(t,r){var i;(function(){function o(t,e){return t.set(e[0],e[1]),t}function a(t,e){return t.add(e),t}function s(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function u(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}function c(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function l(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function f(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function p(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}function d(t,e){return!!(null==t?0:t.length)&&T(t,e,0)>-1}function h(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function v(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function g(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function m(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function y(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function b(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function _(t){return t.split("")}function w(t){return t.match(qe)||[]}function x(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function C(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function T(t,e,n){return e===e?G(t,e,n):C(t,A,n)}function $(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function A(t){return t!==t}function k(t,e){var n=null==t?0:t.length;return n?N(t,e)/n:Lt}function E(t){return function(e){return null==e?it:e[t]}}function S(t){return function(e){return null==t?it:t[e]}}function O(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function j(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function N(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);o!==it&&(n=n===it?o:n+o)}return n}function D(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function I(t,e){return v(e,function(e){return[e,t[e]]})}function L(t){return function(e){return t(e)}}function R(t,e){return v(e,function(e){return t[e]})}function P(t,e){return t.has(e)}function F(t,e){for(var n=-1,r=t.length;++n<r&&T(e,t[n],0)>-1;);return n}function M(t,e){for(var n=t.length;n--&&T(e,t[n],0)>-1;);return n}function q(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}function H(t){return"\\"+En[t]}function B(t,e){return null==t?it:t[e]}function U(t){return bn.test(t)}function W(t){return _n.test(t)}function z(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function V(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function X(t,e){return function(n){return t(e(n))}}function K(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n];a!==e&&a!==lt||(t[n]=lt,o[i++]=n)}return o}function J(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function Q(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t]}),n}function G(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Z(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}function Y(t){return U(t)?et(t):zn(t)}function tt(t){return U(t)?nt(t):_(t)}function et(t){for(var e=mn.lastIndex=0;mn.test(t);)++e;return e}function nt(t){return t.match(mn)||[]}function rt(t){return t.match(yn)||[]}var it,ot=200,at="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",st="Expected a function",ut="__lodash_hash_undefined__",ct=500,lt="__lodash_placeholder__",ft=1,pt=2,dt=4,ht=1,vt=2,gt=1,mt=2,yt=4,bt=8,_t=16,wt=32,xt=64,Ct=128,Tt=256,$t=512,At=30,kt="...",Et=800,St=16,Ot=1,jt=2,Nt=1/0,Dt=9007199254740991,It=1.7976931348623157e308,Lt=NaN,Rt=4294967295,Pt=Rt-1,Ft=Rt>>>1,Mt=[["ary",Ct],["bind",gt],["bindKey",mt],["curry",bt],["curryRight",_t],["flip",$t],["partial",wt],["partialRight",xt],["rearg",Tt]],qt="[object Arguments]",Ht="[object Array]",Bt="[object AsyncFunction]",Ut="[object Boolean]",Wt="[object Date]",zt="[object DOMException]",Vt="[object Error]",Xt="[object Function]",Kt="[object GeneratorFunction]",Jt="[object Map]",Qt="[object Number]",Gt="[object Null]",Zt="[object Object]",Yt="[object Proxy]",te="[object RegExp]",ee="[object Set]",ne="[object String]",re="[object Symbol]",ie="[object Undefined]",oe="[object WeakMap]",ae="[object WeakSet]",se="[object ArrayBuffer]",ue="[object DataView]",ce="[object Float32Array]",le="[object Float64Array]",fe="[object Int8Array]",pe="[object Int16Array]",de="[object Int32Array]",he="[object Uint8Array]",ve="[object Uint8ClampedArray]",ge="[object Uint16Array]",me="[object Uint32Array]",ye=/\b__p \+= '';/g,be=/\b(__p \+=) '' \+/g,_e=/(__e\(.*?\)|\b__t\)) \+\n'';/g,we=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,Ce=RegExp(we.source),Te=RegExp(xe.source),$e=/<%-([\s\S]+?)%>/g,Ae=/<%([\s\S]+?)%>/g,ke=/<%=([\s\S]+?)%>/g,Ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/,Oe=/^\./,je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ne=/[\\^$.*+?()[\]{}|]/g,De=RegExp(Ne.source),Ie=/^\s+|\s+$/g,Le=/^\s+/,Re=/\s+$/,Pe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Fe=/\{\n\/\* \[wrapped with (.+)\] \*/,Me=/,? & /,qe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,He=/\\(\\)?/g,Be=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ue=/\w*$/,We=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,Ve=/^\[object .+?Constructor\]$/,Xe=/^0o[0-7]+$/i,Ke=/^(?:0|[1-9]\d*)$/,Je=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qe=/($^)/,Ge=/['\n\r\u2028\u2029\\]/g,Ze="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ye="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tn="["+Ye+"]",en="["+Ze+"]",nn="[a-z\\xdf-\\xf6\\xf8-\\xff]",rn="[^\\ud800-\\udfff"+Ye+"\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",on="\\ud83c[\\udffb-\\udfff]",an="(?:\\ud83c[\\udde6-\\uddff]){2}",sn="[\\ud800-\\udbff][\\udc00-\\udfff]",un="[A-Z\\xc0-\\xd6\\xd8-\\xde]",cn="(?:"+nn+"|"+rn+")",ln="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",fn="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",an,sn].join("|")+")[\\ufe0e\\ufe0f]?"+ln+")*",pn="[\\ufe0e\\ufe0f]?"+ln+fn,dn="(?:"+["[\\u2700-\\u27bf]",an,sn].join("|")+")"+pn,hn="(?:"+["[^\\ud800-\\udfff]"+en+"?",en,an,sn,"[\\ud800-\\udfff]"].join("|")+")",vn=RegExp("['’]","g"),gn=RegExp(en,"g"),mn=RegExp(on+"(?="+on+")|"+hn+pn,"g"),yn=RegExp([un+"?"+nn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[tn,un,"$"].join("|")+")","(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[tn,un+cn,"$"].join("|")+")",un+"?"+cn+"+(?:['’](?:d|ll|m|re|s|t|ve))?",un+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)","\\d+",dn].join("|"),"g"),bn=RegExp("[\\u200d\\ud800-\\udfff"+Ze+"\\ufe0e\\ufe0f]"),_n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],xn=-1,Cn={};Cn[ce]=Cn[le]=Cn[fe]=Cn[pe]=Cn[de]=Cn[he]=Cn[ve]=Cn[ge]=Cn[me]=!0,Cn[qt]=Cn[Ht]=Cn[se]=Cn[Ut]=Cn[ue]=Cn[Wt]=Cn[Vt]=Cn[Xt]=Cn[Jt]=Cn[Qt]=Cn[Zt]=Cn[te]=Cn[ee]=Cn[ne]=Cn[oe]=!1;var Tn={};Tn[qt]=Tn[Ht]=Tn[se]=Tn[ue]=Tn[Ut]=Tn[Wt]=Tn[ce]=Tn[le]=Tn[fe]=Tn[pe]=Tn[de]=Tn[Jt]=Tn[Qt]=Tn[Zt]=Tn[te]=Tn[ee]=Tn[ne]=Tn[re]=Tn[he]=Tn[ve]=Tn[ge]=Tn[me]=!0,Tn[Vt]=Tn[Xt]=Tn[oe]=!1;var $n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},kn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},En={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Sn=parseFloat,On=parseInt,jn="object"==typeof t&&t&&t.Object===Object&&t,Nn="object"==typeof self&&self&&self.Object===Object&&self,Dn=jn||Nn||Function("return this")(),In="object"==typeof e&&e&&!e.nodeType&&e,Ln=In&&"object"==typeof r&&r&&!r.nodeType&&r,Rn=Ln&&Ln.exports===In,Pn=Rn&&jn.process,Fn=function(){try{return Pn&&Pn.binding&&Pn.binding("util")}catch(t){}}(),Mn=Fn&&Fn.isArrayBuffer,qn=Fn&&Fn.isDate,Hn=Fn&&Fn.isMap,Bn=Fn&&Fn.isRegExp,Un=Fn&&Fn.isSet,Wn=Fn&&Fn.isTypedArray,zn=E("length"),Vn=S($n),Xn=S(An),Kn=S(kn),Jn=function t(e){function n(t){if(ou(t)&&!mp(t)&&!(t instanceof _)){if(t instanceof i)return t;if(gl.call(t,"__wrapped__"))return na(t)}return new i(t)}function r(){}function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=it}function _(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Rt,this.__views__=[]}function S(){var t=new _(this.__wrapped__);return t.__actions__=Pi(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Pi(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Pi(this.__views__),t}function G(){if(this.__filtered__){var t=new _(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function et(){var t=this.__wrapped__.value(),e=this.__dir__,n=mp(t),r=e<0,i=n?t.length:0,o=ko(0,i,this.__views__),a=o.start,s=o.end,u=s-a,c=r?s:a-1,l=this.__iteratees__,f=l.length,p=0,d=Vl(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return yi(t,this.__actions__);var h=[];t:for(;u--&&p<d;){c+=e;for(var v=-1,g=t[c];++v<f;){var m=l[v],y=m.iteratee,b=m.type,_=y(g);if(b==jt)g=_;else if(!_){if(b==Ot)continue t;break t}}h[p++]=g}return h}function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function qe(){this.__data__=nf?nf(null):{},this.size=0}function Ze(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Ye(t){var e=this.__data__;if(nf){var n=e[t];return n===ut?it:n}return gl.call(e,t)?e[t]:it}function tn(t){var e=this.__data__;return nf?e[t]!==it:gl.call(e,t)}function en(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=nf&&e===it?ut:e,this}function nn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rn(){this.__data__=[],this.size=0}function on(t){var e=this.__data__,n=Qn(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ol.call(e,n,1),--this.size,!0)}function an(t){var e=this.__data__,n=Qn(e,t);return n<0?it:e[n][1]}function sn(t){return Qn(this.__data__,t)>-1}function un(t,e){var n=this.__data__,r=Qn(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function cn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ln(){this.size=0,this.__data__={hash:new nt,map:new(Zl||nn),string:new nt}}function fn(t){var e=Co(this,t).delete(t);return this.size-=e?1:0,e}function pn(t){return Co(this,t).get(t)}function dn(t){return Co(this,t).has(t)}function hn(t,e){var n=Co(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function mn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new cn;++e<n;)this.add(t[e])}function yn(t){return this.__data__.set(t,ut),this}function bn(t){return this.__data__.has(t)}function _n(t){var e=this.__data__=new nn(t);this.size=e.size}function $n(){this.__data__=new nn,this.size=0}function An(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function kn(t){return this.__data__.get(t)}function En(t){return this.__data__.has(t)}function jn(t,e){var n=this.__data__;if(n instanceof nn){var r=n.__data__;if(!Zl||r.length<ot-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new cn(r)}return n.set(t,e),this.size=n.size,this}function Nn(t,e){var n=mp(t),r=!n&&gp(t),i=!n&&!r&&bp(t),o=!n&&!r&&!i&&Tp(t),a=n||r||i||o,s=a?D(t.length,cl):[],u=s.length;for(var c in t)!e&&!gl.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Lo(c,u))||s.push(c);return s}function In(t){var e=t.length;return e?t[Yr(0,e-1)]:it}function Ln(t,e){return Zo(Pi(t),nr(e,0,t.length))}function Pn(t){return Zo(Pi(t))}function Fn(t,e,n){(n===it||zs(t[e],n))&&(n!==it||e in t)||tr(t,e,n)}function zn(t,e,n){var r=t[e];gl.call(t,e)&&zs(r,n)&&(n!==it||e in t)||tr(t,e,n)}function Qn(t,e){for(var n=t.length;n--;)if(zs(t[n][0],e))return n;return-1}function Gn(t,e,n,r){return vf(t,function(t,i,o){e(r,t,n(t),o)}),r}function Zn(t,e){return t&&Fi(e,qu(e),t)}function Yn(t,e){return t&&Fi(e,Hu(e),t)}function tr(t,e,n){"__proto__"==e&&Il?Il(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function er(t,e){for(var n=-1,r=e.length,i=nl(r),o=null==t;++n<r;)i[n]=o?it:Pu(t,e[n]);return i}function nr(t,e,n){return t===t&&(n!==it&&(t=t<=n?t:n),e!==it&&(t=t>=e?t:e)),t}function rr(t,e,n,r,i,o){var a,s=e&ft,u=e&pt,l=e&dt;if(n&&(a=i?n(t,r,i,o):n(t)),a!==it)return a;if(!iu(t))return t;var f=mp(t);if(f){if(a=Oo(t),!s)return Pi(t,a)}else{var p=kf(t),d=p==Xt||p==Kt;if(bp(t))return $i(t,s);if(p==Zt||p==qt||d&&!i){if(a=u||d?{}:jo(t),!s)return u?qi(t,Yn(a,t)):Mi(t,Zn(a,t))}else{if(!Tn[p])return i?t:{};a=No(t,p,rr,s)}}o||(o=new _n);var h=o.get(t);if(h)return h;o.set(t,a);var v=l?u?bo:yo:u?Hu:qu,g=f?it:v(t);return c(g||t,function(r,i){g&&(i=r,r=t[i]),zn(a,i,rr(r,e,n,i,t,o))}),a}function ir(t){var e=qu(t);return function(n){return or(n,t,e)}}function or(t,e,n){var r=n.length;if(null==t)return!r;for(t=sl(t);r--;){var i=n[r],o=e[i],a=t[i];if(a===it&&!(i in t)||!o(a))return!1}return!0}function ar(t,e,n){if("function"!=typeof t)throw new ll(st);return Of(function(){t.apply(it,n)},e)}function sr(t,e,n,r){var i=-1,o=d,a=!0,s=t.length,u=[],c=e.length;if(!s)return u;n&&(e=v(e,L(n))),r?(o=h,a=!1):e.length>=ot&&(o=P,a=!1,e=new mn(e));t:for(;++i<s;){var l=t[i],f=null==n?l:n(l);if(l=r||0!==l?l:0,a&&f===f){for(var p=c;p--;)if(e[p]===f)continue t;u.push(l)}else o(e,f,r)||u.push(l)}return u}function ur(t,e){var n=!0;return vf(t,function(t,r,i){return n=!!e(t,r,i)}),n}function cr(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],a=e(o);if(null!=a&&(s===it?a===a&&!gu(a):n(a,s)))var s=a,u=o}return u}function lr(t,e,n,r){var i=t.length;for(n=xu(n),n<0&&(n=-n>i?0:i+n),r=r===it||r>i?i:xu(r),r<0&&(r+=i),r=n>r?0:Cu(r);n<r;)t[n++]=e;return t}function fr(t,e){var n=[];return vf(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function pr(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=Io),i||(i=[]);++o<a;){var s=t[o];e>0&&n(s)?e>1?pr(s,e-1,n,r,i):g(i,s):r||(i[i.length]=s)}return i}function dr(t,e){return t&&mf(t,e,qu)}function hr(t,e){return t&&yf(t,e,qu)}function vr(t,e){return p(e,function(e){return eu(t[e])})}function gr(t,e){e=Ci(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[Yo(e[n++])];return n&&n==r?t:it}function mr(t,e,n){var r=e(t);return mp(t)?r:g(r,n(t))}function yr(t){return null==t?t===it?ie:Gt:Dl&&Dl in sl(t)?Ao(t):Vo(t)}function br(t,e){return t>e}function _r(t,e){return null!=t&&gl.call(t,e)}function wr(t,e){return null!=t&&e in sl(t)}function xr(t,e,n){return t>=Vl(e,n)&&t<zl(e,n)}function Cr(t,e,n){for(var r=n?h:d,i=t[0].length,o=t.length,a=o,s=nl(o),u=1/0,c=[];a--;){var l=t[a];a&&e&&(l=v(l,L(e))),u=Vl(l.length,u),s[a]=!n&&(e||i>=120&&l.length>=120)?new mn(a&&l):it}l=t[0];var f=-1,p=s[0];t:for(;++f<i&&c.length<u;){var g=l[f],m=e?e(g):g;if(g=n||0!==g?g:0,!(p?P(p,m):r(c,m,n))){for(a=o;--a;){var y=s[a];if(!(y?P(y,m):r(t[a],m,n)))continue t}p&&p.push(m),c.push(g)}}return c}function Tr(t,e,n,r){return dr(t,function(t,i,o){e(r,n(t),i,o)}),r}function $r(t,e,n){e=Ci(e,t),t=Ko(t,e);var r=null==t?t:t[Yo(wa(e))];return null==r?it:s(r,t,n)}function Ar(t){return ou(t)&&yr(t)==qt}function kr(t){return ou(t)&&yr(t)==se}function Er(t){return ou(t)&&yr(t)==Wt}function Sr(t,e,n,r,i){return t===e||(null==t||null==e||!ou(t)&&!ou(e)?t!==t&&e!==e:Or(t,e,n,r,Sr,i))}function Or(t,e,n,r,i,o){var a=mp(t),s=mp(e),u=a?Ht:kf(t),c=s?Ht:kf(e);u=u==qt?Zt:u,c=c==qt?Zt:c;var l=u==Zt,f=c==Zt,p=u==c;if(p&&bp(t)){if(!bp(e))return!1;a=!0,l=!1}if(p&&!l)return o||(o=new _n),a||Tp(t)?ho(t,e,n,r,i,o):vo(t,e,u,n,r,i,o);if(!(n&ht)){var d=l&&gl.call(t,"__wrapped__"),h=f&&gl.call(e,"__wrapped__");if(d||h){var v=d?t.value():t,g=h?e.value():e;return o||(o=new _n),i(v,g,n,r,o)}}return!!p&&(o||(o=new _n),go(t,e,n,r,i,o))}function jr(t){return ou(t)&&kf(t)==Jt}function Nr(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=sl(t);i--;){var s=n[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){s=n[i];var u=s[0],c=t[u],l=s[1];if(a&&s[2]){if(c===it&&!(u in t))return!1}else{var f=new _n;if(r)var p=r(c,l,u,t,e,f);if(!(p===it?Sr(l,c,ht|vt,r,f):p))return!1}}return!0}function Dr(t){return!(!iu(t)||qo(t))&&(eu(t)?xl:Ve).test(ta(t))}function Ir(t){return ou(t)&&yr(t)==te}function Lr(t){return ou(t)&&kf(t)==ee}function Rr(t){return ou(t)&&ru(t.length)&&!!Cn[yr(t)]}function Pr(t){return"function"==typeof t?t:null==t?Oc:"object"==typeof t?mp(t)?Ur(t[0],t[1]):Br(t):Fc(t)}function Fr(t){if(!Ho(t))return Wl(t);var e=[];for(var n in sl(t))gl.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Mr(t){if(!iu(t))return zo(t);var e=Ho(t),n=[];for(var r in t)("constructor"!=r||!e&&gl.call(t,r))&&n.push(r);return n}function qr(t,e){return t<e}function Hr(t,e){var n=-1,r=Vs(t)?nl(t.length):[];return vf(t,function(t,i,o){r[++n]=e(t,i,o)}),r}function Br(t){var e=To(t);return 1==e.length&&e[0][2]?Uo(e[0][0],e[0][1]):function(n){return n===t||Nr(n,t,e)}}function Ur(t,e){return Po(t)&&Bo(e)?Uo(Yo(t),e):function(n){var r=Pu(n,t);return r===it&&r===e?Mu(n,t):Sr(e,r,ht|vt)}}function Wr(t,e,n,r,i){t!==e&&mf(e,function(o,a){if(iu(o))i||(i=new _n),zr(t,e,a,n,Wr,r,i);else{var s=r?r(t[a],o,a+"",t,e,i):it;s===it&&(s=o),Fn(t,a,s)}},Hu)}function zr(t,e,n,r,i,o,a){var s=t[n],u=e[n],c=a.get(u);if(c)return void Fn(t,n,c);var l=o?o(s,u,n+"",t,e,a):it,f=l===it;if(f){var p=mp(u),d=!p&&bp(u),h=!p&&!d&&Tp(u);l=u,p||d||h?mp(s)?l=s:Xs(s)?l=Pi(s):d?(f=!1,l=$i(u,!0)):h?(f=!1,l=Ni(u,!0)):l=[]:du(u)||gp(u)?(l=s,gp(s)?l=$u(s):(!iu(s)||r&&eu(s))&&(l=jo(u))):f=!1}f&&(a.set(u,l),i(l,u,r,o,a),a.delete(u)),Fn(t,n,l)}function Vr(t,e){var n=t.length;if(n)return e+=e<0?n:0,Lo(e,n)?t[e]:it}function Xr(t,e,n){var r=-1;return e=v(e.length?e:[Oc],L(xo())),j(Hr(t,function(t,n,i){return{criteria:v(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return Ii(t,e,n)})}function Kr(t,e){return Jr(t,e,function(e,n){return Mu(t,n)})}function Jr(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=gr(t,a);n(s,a)&&oi(o,Ci(a,t),s)}return o}function Qr(t){return function(e){return gr(e,t)}}function Gr(t,e,n,r){var i=r?$:T,o=-1,a=e.length,s=t;for(t===e&&(e=Pi(e)),n&&(s=v(t,L(n)));++o<a;)for(var u=0,c=e[o],l=n?n(c):c;(u=i(s,l,u,r))>-1;)s!==t&&Ol.call(s,u,1),Ol.call(t,u,1);return t}function Zr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;Lo(i)?Ol.call(t,i,1):vi(t,i)}}return t}function Yr(t,e){return t+Ml(Jl()*(e-t+1))}function ti(t,e,n,r){for(var i=-1,o=zl(Fl((e-t)/(n||1)),0),a=nl(o);o--;)a[r?o:++i]=t,t+=n;return a}function ei(t,e){var n="";if(!t||e<1||e>Dt)return n;do{e%2&&(n+=t),(e=Ml(e/2))&&(t+=t)}while(e);return n}function ni(t,e){return jf(Xo(t,e,Oc),t+"")}function ri(t){return In(Yu(t))}function ii(t,e){var n=Yu(t);return Zo(n,nr(e,0,n.length))}function oi(t,e,n,r){if(!iu(t))return t;e=Ci(e,t);for(var i=-1,o=e.length,a=o-1,s=t;null!=s&&++i<o;){var u=Yo(e[i]),c=n;if(i!=a){var l=s[u];c=r?r(l,u,s):it,c===it&&(c=iu(l)?l:Lo(e[i+1])?[]:{})}zn(s,u,c),s=s[u]}return t}function ai(t){return Zo(Yu(t))}function si(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=nl(i);++r<i;)o[r]=t[r+e];return o}function ui(t,e){var n;return vf(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function ci(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=Ft){for(;r<i;){var o=r+i>>>1,a=t[o];null!==a&&!gu(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return li(t,e,Oc,n)}function li(t,e,n,r){e=n(e);for(var i=0,o=null==t?0:t.length,a=e!==e,s=null===e,u=gu(e),c=e===it;i<o;){var l=Ml((i+o)/2),f=n(t[l]),p=f!==it,d=null===f,h=f===f,v=gu(f);if(a)var g=r||h;else g=c?h&&(r||p):s?h&&p&&(r||!d):u?h&&p&&!d&&(r||!v):!d&&!v&&(r?f<=e:f<e);g?i=l+1:o=l}return Vl(o,Pt)}function fi(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a;if(!n||!zs(s,u)){var u=s;o[i++]=0===a?0:a}}return o}function pi(t){return"number"==typeof t?t:gu(t)?Lt:+t}function di(t){if("string"==typeof t)return t;if(mp(t))return v(t,di)+"";if(gu(t))return df?df.call(t):"";var e=t+"";return"0"==e&&1/t==-Nt?"-0":e}function hi(t,e,n){var r=-1,i=d,o=t.length,a=!0,s=[],u=s;if(n)a=!1,i=h;else if(o>=ot){var c=e?null:Cf(t);if(c)return J(c);a=!1,i=P,u=new mn}else u=e?[]:s;t:for(;++r<o;){var l=t[r],f=e?e(l):l;if(l=n||0!==l?l:0,a&&f===f){for(var p=u.length;p--;)if(u[p]===f)continue t;e&&u.push(f),s.push(l)}else i(u,f,n)||(u!==s&&u.push(f),s.push(l))}return s}function vi(t,e){return e=Ci(e,t),null==(t=Ko(t,e))||delete t[Yo(wa(e))]}function gi(t,e,n,r){return oi(t,e,n(gr(t,e)),r)}function mi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?si(t,r?0:o,r?o+1:i):si(t,r?o+1:0,r?i:o)}function yi(t,e){var n=t;return n instanceof _&&(n=n.value()),m(e,function(t,e){return e.func.apply(e.thisArg,g([t],e.args))},n)}function bi(t,e,n){var r=t.length;if(r<2)return r?hi(t[0]):[];for(var i=-1,o=nl(r);++i<r;)for(var a=t[i],s=-1;++s<r;)s!=i&&(o[i]=sr(o[i]||a,t[s],e,n));return hi(pr(o,1),e,n)}function _i(t,e,n){for(var r=-1,i=t.length,o=e.length,a={};++r<i;){var s=r<o?e[r]:it;n(a,t[r],s)}return a}function wi(t){return Xs(t)?t:[]}function xi(t){return"function"==typeof t?t:Oc}function Ci(t,e){return mp(t)?t:Po(t,e)?[t]:Nf(ku(t))}function Ti(t,e,n){var r=t.length;return n=n===it?r:n,!e&&n>=r?t:si(t,e,n)}function $i(t,e){if(e)return t.slice();var n=t.length,r=Al?Al(n):new t.constructor(n);return t.copy(r),r}function Ai(t){var e=new t.constructor(t.byteLength);return new $l(e).set(new $l(t)),e}function ki(t,e){var n=e?Ai(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Ei(t,e,n){return m(e?n(V(t),ft):V(t),o,new t.constructor)}function Si(t){var e=new t.constructor(t.source,Ue.exec(t));return e.lastIndex=t.lastIndex,e}function Oi(t,e,n){return m(e?n(J(t),ft):J(t),a,new t.constructor)}function ji(t){return pf?sl(pf.call(t)):{}}function Ni(t,e){var n=e?Ai(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Di(t,e){if(t!==e){var n=t!==it,r=null===t,i=t===t,o=gu(t),a=e!==it,s=null===e,u=e===e,c=gu(e);if(!s&&!c&&!o&&t>e||o&&a&&u&&!s&&!c||r&&a&&u||!n&&u||!i)return 1;if(!r&&!o&&!c&&t<e||c&&n&&i&&!r&&!o||s&&n&&i||!a&&i||!u)return-1}return 0}function Ii(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;++r<a;){var u=Di(i[r],o[r]);if(u){if(r>=s)return u;return u*("desc"==n[r]?-1:1)}}return t.index-e.index}function Li(t,e,n,r){for(var i=-1,o=t.length,a=n.length,s=-1,u=e.length,c=zl(o-a,0),l=nl(u+c),f=!r;++s<u;)l[s]=e[s];for(;++i<a;)(f||i<o)&&(l[n[i]]=t[i]);for(;c--;)l[s++]=t[i++];return l}function Ri(t,e,n,r){for(var i=-1,o=t.length,a=-1,s=n.length,u=-1,c=e.length,l=zl(o-s,0),f=nl(l+c),p=!r;++i<l;)f[i]=t[i];for(var d=i;++u<c;)f[d+u]=e[u];for(;++a<s;)(p||i<o)&&(f[d+n[a]]=t[i++]);return f}function Pi(t,e){var n=-1,r=t.length;for(e||(e=nl(r));++n<r;)e[n]=t[n];return e}function Fi(t,e,n,r){var i=!n;n||(n={});for(var o=-1,a=e.length;++o<a;){var s=e[o],u=r?r(n[s],t[s],s,n,t):it;u===it&&(u=t[s]),i?tr(n,s,u):zn(n,s,u)}return n}function Mi(t,e){return Fi(t,$f(t),e)}function qi(t,e){return Fi(t,Af(t),e)}function Hi(t,e){return function(n,r){var i=mp(n)?u:Gn,o=e?e():{};return i(n,t,xo(r,2),o)}}function Bi(t){return ni(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:it,a=i>2?n[2]:it;for(o=t.length>3&&"function"==typeof o?(i--,o):it,a&&Ro(n[0],n[1],a)&&(o=i<3?it:o,i=1),e=sl(e);++r<i;){var s=n[r];s&&t(e,s,r,o)}return e})}function Ui(t,e){return function(n,r){if(null==n)return n;if(!Vs(n))return t(n,r);for(var i=n.length,o=e?i:-1,a=sl(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Wi(t){return function(e,n,r){for(var i=-1,o=sl(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i];if(!1===n(o[u],u,o))break}return e}}function zi(t,e,n){function r(){return(this&&this!==Dn&&this instanceof r?o:t).apply(i?n:this,arguments)}var i=e&gt,o=Ki(t);return r}function Vi(t){return function(e){e=ku(e);var n=U(e)?tt(e):it,r=n?n[0]:e.charAt(0),i=n?Ti(n,1).join(""):e.slice(1);return r[t]()+i}}function Xi(t){return function(e){return m($c(oc(e).replace(vn,"")),t,"")}}function Ki(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=hf(t.prototype),r=t.apply(n,e);return iu(r)?r:n}}function Ji(t,e,n){function r(){for(var o=arguments.length,a=nl(o),u=o,c=wo(r);u--;)a[u]=arguments[u];var l=o<3&&a[0]!==c&&a[o-1]!==c?[]:K(a,c);return(o-=l.length)<n?ao(t,e,Zi,r.placeholder,it,a,l,it,it,n-o):s(this&&this!==Dn&&this instanceof r?i:t,this,a)}var i=Ki(t);return r}function Qi(t){return function(e,n,r){var i=sl(e);if(!Vs(e)){var o=xo(n,3);e=qu(e),n=function(t){return o(i[t],t,i)}}var a=t(e,n,r);return a>-1?i[o?e[a]:a]:it}}function Gi(t){return mo(function(e){var n=e.length,r=n,o=i.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new ll(st);if(o&&!s&&"wrapper"==_o(a))var s=new i([],!0)}for(r=s?r:n;++r<n;){a=e[r];var u=_o(a),c="wrapper"==u?Tf(a):it;s=c&&Mo(c[0])&&c[1]==(Ct|bt|wt|Tt)&&!c[4].length&&1==c[9]?s[_o(c[0])].apply(s,c[3]):1==a.length&&Mo(a)?s[u]():s.thru(a)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&mp(r))return s.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}function Zi(t,e,n,r,i,o,a,s,u,c){function l(){for(var m=arguments.length,y=nl(m),b=m;b--;)y[b]=arguments[b];if(h)var _=wo(l),w=q(y,_);if(r&&(y=Li(y,r,i,h)),o&&(y=Ri(y,o,a,h)),m-=w,h&&m<c){var x=K(y,_);return ao(t,e,Zi,l.placeholder,n,y,x,s,u,c-m)}var C=p?n:this,T=d?C[t]:t;return m=y.length,s?y=Jo(y,s):v&&m>1&&y.reverse(),f&&u<m&&(y.length=u),this&&this!==Dn&&this instanceof l&&(T=g||Ki(T)),T.apply(C,y)}var f=e&Ct,p=e&gt,d=e&mt,h=e&(bt|_t),v=e&$t,g=d?it:Ki(t);return l}function Yi(t,e){return function(n,r){return Tr(n,t,e(r),{})}}function to(t,e){return function(n,r){var i;if(n===it&&r===it)return e;if(n!==it&&(i=n),r!==it){if(i===it)return r;"string"==typeof n||"string"==typeof r?(n=di(n),r=di(r)):(n=pi(n),r=pi(r)),i=t(n,r)}return i}}function eo(t){return mo(function(e){return e=v(e,L(xo())),ni(function(n){var r=this;return t(e,function(t){return s(t,r,n)})})})}function no(t,e){e=e===it?" ":di(e);var n=e.length;if(n<2)return n?ei(e,t):e;var r=ei(e,Fl(t/Y(e)));return U(e)?Ti(tt(r),0,t).join(""):r.slice(0,t)}function ro(t,e,n,r){function i(){for(var e=-1,u=arguments.length,c=-1,l=r.length,f=nl(l+u),p=this&&this!==Dn&&this instanceof i?a:t;++c<l;)f[c]=r[c];for(;u--;)f[c++]=arguments[++e];return s(p,o?n:this,f)}var o=e&gt,a=Ki(t);return i}function io(t){return function(e,n,r){return r&&"number"!=typeof r&&Ro(e,n,r)&&(n=r=it),e=wu(e),n===it?(n=e,e=0):n=wu(n),r=r===it?e<n?1:-1:wu(r),ti(e,n,r,t)}}function oo(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Tu(e),n=Tu(n)),t(e,n)}}function ao(t,e,n,r,i,o,a,s,u,c){var l=e&bt,f=l?a:it,p=l?it:a,d=l?o:it,h=l?it:o;e|=l?wt:xt,(e&=~(l?xt:wt))&yt||(e&=~(gt|mt));var v=[t,e,i,d,f,h,p,s,u,c],g=n.apply(it,v);return Mo(t)&&Sf(g,v),g.placeholder=r,Qo(g,t,e)}function so(t){var e=al[t];return function(t,n){if(t=Tu(t),n=null==n?0:Vl(xu(n),292)){var r=(ku(t)+"e").split("e");return r=(ku(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}function uo(t){return function(e){var n=kf(e);return n==Jt?V(e):n==ee?Q(e):I(e,t(e))}}function co(t,e,n,r,i,o,a,s){var u=e&mt;if(!u&&"function"!=typeof t)throw new ll(st);var c=r?r.length:0;if(c||(e&=~(wt|xt),r=i=it),a=a===it?a:zl(xu(a),0),s=s===it?s:xu(s),c-=i?i.length:0,e&xt){var l=r,f=i;r=i=it}var p=u?it:Tf(t),d=[t,e,n,r,i,l,f,o,a,s];if(p&&Wo(d,p),t=d[0],e=d[1],n=d[2],r=d[3],i=d[4],s=d[9]=d[9]===it?u?0:t.length:zl(d[9]-c,0),!s&&e&(bt|_t)&&(e&=~(bt|_t)),e&&e!=gt)h=e==bt||e==_t?Ji(t,e,s):e!=wt&&e!=(gt|wt)||i.length?Zi.apply(it,d):ro(t,e,n,r);else var h=zi(t,e,n);return Qo((p?bf:Sf)(h,d),t,e)}function lo(t,e,n,r){return t===it||zs(t,dl[n])&&!gl.call(r,n)?e:t}function fo(t,e,n,r,i,o){return iu(t)&&iu(e)&&(o.set(e,t),Wr(t,e,it,fo,o),o.delete(e)),t}function po(t){return du(t)?it:t}function ho(t,e,n,r,i,o){var a=n&ht,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var c=o.get(t);if(c&&o.get(e))return c==e;var l=-1,f=!0,p=n&vt?new mn:it;for(o.set(t,e),o.set(e,t);++l<s;){var d=t[l],h=e[l];if(r)var v=a?r(h,d,l,e,t,o):r(d,h,l,t,e,o);if(v!==it){if(v)continue;f=!1;break}if(p){if(!b(e,function(t,e){if(!P(p,e)&&(d===t||i(d,t,n,r,o)))return p.push(e)})){f=!1;break}}else if(d!==h&&!i(d,h,n,r,o)){f=!1;break}}return o.delete(t),o.delete(e),f}function vo(t,e,n,r,i,o,a){switch(n){case ue:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case se:return!(t.byteLength!=e.byteLength||!o(new $l(t),new $l(e)));case Ut:case Wt:case Qt:return zs(+t,+e);case Vt:return t.name==e.name&&t.message==e.message;case te:case ne:return t==e+"";case Jt:var s=V;case ee:var u=r&ht;if(s||(s=J),t.size!=e.size&&!u)return!1;var c=a.get(t);if(c)return c==e;r|=vt,a.set(t,e);var l=ho(s(t),s(e),r,i,o,a);return a.delete(t),l;case re:if(pf)return pf.call(t)==pf.call(e)}return!1}function go(t,e,n,r,i,o){var a=n&ht,s=yo(t),u=s.length;if(u!=yo(e).length&&!a)return!1;for(var c=u;c--;){var l=s[c];if(!(a?l in e:gl.call(e,l)))return!1}var f=o.get(t);if(f&&o.get(e))return f==e;var p=!0;o.set(t,e),o.set(e,t);for(var d=a;++c<u;){l=s[c];var h=t[l],v=e[l];if(r)var g=a?r(v,h,l,e,t,o):r(h,v,l,t,e,o);if(!(g===it?h===v||i(h,v,n,r,o):g)){p=!1;break}d||(d="constructor"==l)}if(p&&!d){var m=t.constructor,y=e.constructor;m!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof m&&m instanceof m&&"function"==typeof y&&y instanceof y)&&(p=!1)}return o.delete(t),o.delete(e),p}function mo(t){return jf(Xo(t,it,da),t+"")}function yo(t){return mr(t,qu,$f)}function bo(t){return mr(t,Hu,Af)}function _o(t){for(var e=t.name+"",n=of[e],r=gl.call(of,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function wo(t){return(gl.call(n,"placeholder")?n:t).placeholder}function xo(){var t=n.iteratee||jc;return t=t===jc?Pr:t,arguments.length?t(arguments[0],arguments[1]):t}function Co(t,e){var n=t.__data__;return Fo(e)?n["string"==typeof e?"string":"hash"]:n.map}function To(t){for(var e=qu(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Bo(i)]}return e}function $o(t,e){var n=B(t,e);return Dr(n)?n:it}function Ao(t){var e=gl.call(t,Dl),n=t[Dl];try{t[Dl]=it;var r=!0}catch(t){}var i=bl.call(t);return r&&(e?t[Dl]=n:delete t[Dl]),i}function ko(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=Vl(e,t+a);break;case"takeRight":t=zl(t,e-a)}}return{start:t,end:e}}function Eo(t){var e=t.match(Fe);return e?e[1].split(Me):[]}function So(t,e,n){e=Ci(e,t);for(var r=-1,i=e.length,o=!1;++r<i;){var a=Yo(e[r]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&ru(i)&&Lo(a,i)&&(mp(t)||gp(t))}function Oo(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&gl.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function jo(t){return"function"!=typeof t.constructor||Ho(t)?{}:hf(kl(t))}function No(t,e,n,r){var i=t.constructor;switch(e){case se:return Ai(t);case Ut:case Wt:return new i(+t);case ue:return ki(t,r);case ce:case le:case fe:case pe:case de:case he:case ve:case ge:case me:return Ni(t,r);case Jt:return Ei(t,r,n);case Qt:case ne:return new i(t);case te:return Si(t);case ee:return Oi(t,r,n);case re:return ji(t)}}function Do(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Pe,"{\n/* [wrapped with "+e+"] */\n")}function Io(t){return mp(t)||gp(t)||!!(jl&&t&&t[jl])}function Lo(t,e){return!!(e=null==e?Dt:e)&&("number"==typeof t||Ke.test(t))&&t>-1&&t%1==0&&t<e}function Ro(t,e,n){if(!iu(n))return!1;var r=typeof e;return!!("number"==r?Vs(n)&&Lo(e,n.length):"string"==r&&e in n)&&zs(n[e],t)}function Po(t,e){if(mp(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!gu(t))||(Se.test(t)||!Ee.test(t)||null!=e&&t in sl(e))}function Fo(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Mo(t){var e=_o(t),r=n[e];if("function"!=typeof r||!(e in _.prototype))return!1;if(t===r)return!0;var i=Tf(r);return!!i&&t===i[0]}function qo(t){return!!yl&&yl in t}function Ho(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||dl)}function Bo(t){return t===t&&!iu(t)}function Uo(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==it||t in sl(n)))}}function Wo(t,e){var n=t[1],r=e[1],i=n|r,o=i<(gt|mt|Ct),a=r==Ct&&n==bt||r==Ct&&n==Tt&&t[7].length<=e[8]||r==(Ct|Tt)&&e[7].length<=e[8]&&n==bt;if(!o&&!a)return t;r&gt&&(t[2]=e[2],i|=n&gt?0:yt);var s=e[3];if(s){var u=t[3];t[3]=u?Li(u,s,e[4]):s,t[4]=u?K(t[3],lt):e[4]}return s=e[5],s&&(u=t[5],t[5]=u?Ri(u,s,e[6]):s,t[6]=u?K(t[5],lt):e[6]),s=e[7],s&&(t[7]=s),r&Ct&&(t[8]=null==t[8]?e[8]:Vl(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function zo(t){var e=[];if(null!=t)for(var n in sl(t))e.push(n);return e}function Vo(t){return bl.call(t)}function Xo(t,e,n){return e=zl(e===it?t.length-1:e,0),function(){for(var r=arguments,i=-1,o=zl(r.length-e,0),a=nl(o);++i<o;)a[i]=r[e+i];i=-1;for(var u=nl(e+1);++i<e;)u[i]=r[i];return u[e]=n(a),s(t,this,u)}}function Ko(t,e){return e.length<2?t:gr(t,si(e,0,-1))}function Jo(t,e){for(var n=t.length,r=Vl(e.length,n),i=Pi(t);r--;){var o=e[r];t[r]=Lo(o,n)?i[o]:it}return t}function Qo(t,e,n){var r=e+"";return jf(t,Do(r,ea(Eo(r),n)))}function Go(t){var e=0,n=0;return function(){var r=Xl(),i=St-(r-n);if(n=r,i>0){if(++e>=Et)return arguments[0]}else e=0;return t.apply(it,arguments)}}function Zo(t,e){var n=-1,r=t.length,i=r-1;for(e=e===it?r:e;++n<e;){var o=Yr(n,i),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}function Yo(t){if("string"==typeof t||gu(t))return t;var e=t+"";return"0"==e&&1/t==-Nt?"-0":e}function ta(t){if(null!=t){try{return vl.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ea(t,e){return c(Mt,function(n){var r="_."+n[0];e&n[1]&&!d(t,r)&&t.push(r)}),t.sort()}function na(t){if(t instanceof _)return t.clone();var e=new i(t.__wrapped__,t.__chain__);return e.__actions__=Pi(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function ra(t,e,n){e=(n?Ro(t,e,n):e===it)?1:zl(xu(e),0);var r=null==t?0:t.length;if(!r||e<1)return[];for(var i=0,o=0,a=nl(Fl(r/e));i<r;)a[o++]=si(t,i,i+=e);return a}function ia(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i}function oa(){var t=arguments.length;if(!t)return[];for(var e=nl(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return g(mp(n)?Pi(n):[n],pr(e,1))}function aa(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===it?1:xu(e),si(t,e<0?0:e,r)):[]}function sa(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===it?1:xu(e),e=r-e,si(t,0,e<0?0:e)):[]}function ua(t,e){return t&&t.length?mi(t,xo(e,3),!0,!0):[]}function ca(t,e){return t&&t.length?mi(t,xo(e,3),!0):[]}function la(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&Ro(t,e,n)&&(n=0,r=i),lr(t,e,n,r)):[]}function fa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:xu(n);return i<0&&(i=zl(r+i,0)),C(t,xo(e,3),i)}function pa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==it&&(i=xu(n),i=n<0?zl(r+i,0):Vl(i,r-1)),C(t,xo(e,3),i,!0)}function da(t){return(null==t?0:t.length)?pr(t,1):[]}function ha(t){return(null==t?0:t.length)?pr(t,Nt):[]}function va(t,e){return(null==t?0:t.length)?(e=e===it?1:xu(e),pr(t,e)):[]}function ga(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r}function ma(t){return t&&t.length?t[0]:it}function ya(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:xu(n);return i<0&&(i=zl(r+i,0)),T(t,e,i)}function ba(t){return(null==t?0:t.length)?si(t,0,-1):[]}function _a(t,e){return null==t?"":Ul.call(t,e)}function wa(t){var e=null==t?0:t.length;return e?t[e-1]:it}function xa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==it&&(i=xu(n),i=i<0?zl(r+i,0):Vl(i,r-1)),e===e?Z(t,e,i):C(t,A,i,!0)}function Ca(t,e){return t&&t.length?Vr(t,xu(e)):it}function Ta(t,e){return t&&t.length&&e&&e.length?Gr(t,e):t}function $a(t,e,n){return t&&t.length&&e&&e.length?Gr(t,e,xo(n,2)):t}function Aa(t,e,n){return t&&t.length&&e&&e.length?Gr(t,e,it,n):t}function ka(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=xo(e,3);++r<o;){var a=t[r];e(a,r,t)&&(n.push(a),i.push(r))}return Zr(t,i),n}function Ea(t){return null==t?t:Ql.call(t)}function Sa(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Ro(t,e,n)?(e=0,n=r):(e=null==e?0:xu(e),n=n===it?r:xu(n)),si(t,e,n)):[]}function Oa(t,e){return ci(t,e)}function ja(t,e,n){return li(t,e,xo(n,2))}function Na(t,e){var n=null==t?0:t.length;if(n){var r=ci(t,e);if(r<n&&zs(t[r],e))return r}return-1}function Da(t,e){return ci(t,e,!0)}function Ia(t,e,n){return li(t,e,xo(n,2),!0)}function La(t,e){if(null==t?0:t.length){var n=ci(t,e,!0)-1;if(zs(t[n],e))return n}return-1}function Ra(t){return t&&t.length?fi(t):[]}function Pa(t,e){return t&&t.length?fi(t,xo(e,2)):[]}function Fa(t){var e=null==t?0:t.length;return e?si(t,1,e):[]}function Ma(t,e,n){return t&&t.length?(e=n||e===it?1:xu(e),si(t,0,e<0?0:e)):[]}function qa(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===it?1:xu(e),e=r-e,si(t,e<0?0:e,r)):[]}function Ha(t,e){return t&&t.length?mi(t,xo(e,3),!1,!0):[]}function Ba(t,e){return t&&t.length?mi(t,xo(e,3)):[]}function Ua(t){return t&&t.length?hi(t):[]}function Wa(t,e){return t&&t.length?hi(t,xo(e,2)):[]}function za(t,e){return e="function"==typeof e?e:it,t&&t.length?hi(t,it,e):[]}function Va(t){if(!t||!t.length)return[];var e=0;return t=p(t,function(t){if(Xs(t))return e=zl(t.length,e),!0}),D(e,function(e){return v(t,E(e))})}function Xa(t,e){if(!t||!t.length)return[];var n=Va(t);return null==e?n:v(n,function(t){return s(e,it,t)})}function Ka(t,e){return _i(t||[],e||[],zn)}function Ja(t,e){return _i(t||[],e||[],oi)}function Qa(t){var e=n(t);return e.__chain__=!0,e}function Ga(t,e){return e(t),t}function Za(t,e){return e(t)}function Ya(){return Qa(this)}function ts(){return new i(this.value(),this.__chain__)}function es(){this.__values__===it&&(this.__values__=_u(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?it:this.__values__[this.__index__++]}}function ns(){return this}function rs(t){for(var e,n=this;n instanceof r;){var i=na(n);i.__index__=0,i.__values__=it,e?o.__wrapped__=i:e=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,e}function is(){var t=this.__wrapped__;if(t instanceof _){var e=t;return this.__actions__.length&&(e=new _(this)),e=e.reverse(),e.__actions__.push({func:Za,args:[Ea],thisArg:it}),new i(e,this.__chain__)}return this.thru(Ea)}function os(){return yi(this.__wrapped__,this.__actions__)}function as(t,e,n){var r=mp(t)?f:ur;return n&&Ro(t,e,n)&&(e=it),r(t,xo(e,3))}function ss(t,e){return(mp(t)?p:fr)(t,xo(e,3))}function us(t,e){return pr(hs(t,e),1)}function cs(t,e){return pr(hs(t,e),Nt)}function ls(t,e,n){return n=n===it?1:xu(n),pr(hs(t,e),n)}function fs(t,e){return(mp(t)?c:vf)(t,xo(e,3))}function ps(t,e){return(mp(t)?l:gf)(t,xo(e,3))}function ds(t,e,n,r){t=Vs(t)?t:Yu(t),n=n&&!r?xu(n):0;var i=t.length;return n<0&&(n=zl(i+n,0)),vu(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&T(t,e,n)>-1}function hs(t,e){return(mp(t)?v:Hr)(t,xo(e,3))}function vs(t,e,n,r){return null==t?[]:(mp(e)||(e=null==e?[]:[e]),n=r?it:n,mp(n)||(n=null==n?[]:[n]),Xr(t,e,n))}function gs(t,e,n){var r=mp(t)?m:O,i=arguments.length<3;return r(t,xo(e,4),n,i,vf)}function ms(t,e,n){var r=mp(t)?y:O,i=arguments.length<3;return r(t,xo(e,4),n,i,gf)}function ys(t,e){return(mp(t)?p:fr)(t,Ns(xo(e,3)))}function bs(t){return(mp(t)?In:ri)(t)}function _s(t,e,n){return e=(n?Ro(t,e,n):e===it)?1:xu(e),(mp(t)?Ln:ii)(t,e)}function ws(t){return(mp(t)?Pn:ai)(t)}function xs(t){if(null==t)return 0;if(Vs(t))return vu(t)?Y(t):t.length;var e=kf(t);return e==Jt||e==ee?t.size:Fr(t).length}function Cs(t,e,n){var r=mp(t)?b:ui;return n&&Ro(t,e,n)&&(e=it),r(t,xo(e,3))}function Ts(t,e){if("function"!=typeof e)throw new ll(st);return t=xu(t),function(){if(--t<1)return e.apply(this,arguments)}}function $s(t,e,n){return e=n?it:e,e=t&&null==e?t.length:e,co(t,Ct,it,it,it,it,e)}function As(t,e){var n;if("function"!=typeof e)throw new ll(st);return t=xu(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=it),n}}function ks(t,e,n){e=n?it:e;var r=co(t,bt,it,it,it,it,it,e);return r.placeholder=ks.placeholder,r}function Es(t,e,n){e=n?it:e;var r=co(t,_t,it,it,it,it,it,e);return r.placeholder=Es.placeholder,r}function Ss(t,e,n){function r(e){var n=p,r=d;return p=d=it,y=e,v=t.apply(r,n)}function i(t){return y=t,g=Of(s,e),b?r(t):v}function o(t){var n=t-m,r=t-y,i=e-n;return _?Vl(i,h-r):i}function a(t){var n=t-m,r=t-y;return m===it||n>=e||n<0||_&&r>=h}function s(){var t=op();if(a(t))return u(t);g=Of(s,o(t))}function u(t){return g=it,w&&p?r(t):(p=d=it,v)}function c(){g!==it&&xf(g),y=0,p=m=d=g=it}function l(){return g===it?v:u(op())}function f(){var t=op(),n=a(t);if(p=arguments,d=this,m=t,n){if(g===it)return i(m);if(_)return g=Of(s,e),r(m)}return g===it&&(g=Of(s,e)),v}var p,d,h,v,g,m,y=0,b=!1,_=!1,w=!0;if("function"!=typeof t)throw new ll(st);return e=Tu(e)||0,iu(n)&&(b=!!n.leading,_="maxWait"in n,h=_?zl(Tu(n.maxWait)||0,e):h,w="trailing"in n?!!n.trailing:w),f.cancel=c,f.flush=l,f}function Os(t){return co(t,$t)}function js(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new ll(st);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(js.Cache||cn),n}function Ns(t){if("function"!=typeof t)throw new ll(st);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ds(t){return As(2,t)}function Is(t,e){if("function"!=typeof t)throw new ll(st);return e=e===it?e:xu(e),ni(t,e)}function Ls(t,e){if("function"!=typeof t)throw new ll(st);return e=null==e?0:zl(xu(e),0),ni(function(n){var r=n[e],i=Ti(n,0,e);return r&&g(i,r),s(t,this,i)})}function Rs(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new ll(st);return iu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ss(t,e,{leading:r,maxWait:e,trailing:i})}function Ps(t){return $s(t,1)}function Fs(t,e){return fp(xi(e),t)}function Ms(){if(!arguments.length)return[];var t=arguments[0];return mp(t)?t:[t]}function qs(t){return rr(t,dt)}function Hs(t,e){return e="function"==typeof e?e:it,rr(t,dt,e)}function Bs(t){return rr(t,ft|dt)}function Us(t,e){return e="function"==typeof e?e:it,rr(t,ft|dt,e)}function Ws(t,e){return null==e||or(t,e,qu(e))}function zs(t,e){return t===e||t!==t&&e!==e}function Vs(t){return null!=t&&ru(t.length)&&!eu(t)}function Xs(t){return ou(t)&&Vs(t)}function Ks(t){return!0===t||!1===t||ou(t)&&yr(t)==Ut}function Js(t){return ou(t)&&1===t.nodeType&&!du(t)}function Qs(t){if(null==t)return!0;if(Vs(t)&&(mp(t)||"string"==typeof t||"function"==typeof t.splice||bp(t)||Tp(t)||gp(t)))return!t.length;var e=kf(t);if(e==Jt||e==ee)return!t.size;if(Ho(t))return!Fr(t).length;for(var n in t)if(gl.call(t,n))return!1;return!0}function Gs(t,e){return Sr(t,e)}function Zs(t,e,n){n="function"==typeof n?n:it;var r=n?n(t,e):it;return r===it?Sr(t,e,it,n):!!r}function Ys(t){if(!ou(t))return!1;var e=yr(t);return e==Vt||e==zt||"string"==typeof t.message&&"string"==typeof t.name&&!du(t)}function tu(t){return"number"==typeof t&&Bl(t)}function eu(t){if(!iu(t))return!1;var e=yr(t);return e==Xt||e==Kt||e==Bt||e==Yt}function nu(t){return"number"==typeof t&&t==xu(t)}function ru(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Dt}function iu(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function ou(t){return null!=t&&"object"==typeof t}function au(t,e){return t===e||Nr(t,e,To(e))}function su(t,e,n){return n="function"==typeof n?n:it,Nr(t,e,To(e),n)}function uu(t){return pu(t)&&t!=+t}function cu(t){if(Ef(t))throw new il(at);return Dr(t)}function lu(t){return null===t}function fu(t){return null==t}function pu(t){return"number"==typeof t||ou(t)&&yr(t)==Qt}function du(t){if(!ou(t)||yr(t)!=Zt)return!1;var e=kl(t);if(null===e)return!0;var n=gl.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&vl.call(n)==_l}function hu(t){return nu(t)&&t>=-Dt&&t<=Dt}function vu(t){return"string"==typeof t||!mp(t)&&ou(t)&&yr(t)==ne}function gu(t){return"symbol"==typeof t||ou(t)&&yr(t)==re}function mu(t){return t===it}function yu(t){return ou(t)&&kf(t)==oe}function bu(t){return ou(t)&&yr(t)==ae}function _u(t){if(!t)return[];if(Vs(t))return vu(t)?tt(t):Pi(t);if(Nl&&t[Nl])return z(t[Nl]());var e=kf(t);return(e==Jt?V:e==ee?J:Yu)(t)}function wu(t){if(!t)return 0===t?t:0;if((t=Tu(t))===Nt||t===-Nt){return(t<0?-1:1)*It}return t===t?t:0}function xu(t){var e=wu(t),n=e%1;return e===e?n?e-n:e:0}function Cu(t){return t?nr(xu(t),0,Rt):0}function Tu(t){if("number"==typeof t)return t;if(gu(t))return Lt;if(iu(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=iu(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ie,"");var n=ze.test(t);return n||Xe.test(t)?On(t.slice(2),n?2:8):We.test(t)?Lt:+t}function $u(t){return Fi(t,Hu(t))}function Au(t){return t?nr(xu(t),-Dt,Dt):0===t?t:0}function ku(t){return null==t?"":di(t)}function Eu(t,e){var n=hf(t);return null==e?n:Zn(n,e)}function Su(t,e){return x(t,xo(e,3),dr)}function Ou(t,e){return x(t,xo(e,3),hr)}function ju(t,e){return null==t?t:mf(t,xo(e,3),Hu)}function Nu(t,e){return null==t?t:yf(t,xo(e,3),Hu)}function Du(t,e){return t&&dr(t,xo(e,3))}function Iu(t,e){return t&&hr(t,xo(e,3))}function Lu(t){return null==t?[]:vr(t,qu(t))}function Ru(t){return null==t?[]:vr(t,Hu(t))}function Pu(t,e,n){var r=null==t?it:gr(t,e);return r===it?n:r}function Fu(t,e){return null!=t&&So(t,e,_r)}function Mu(t,e){return null!=t&&So(t,e,wr)}function qu(t){return Vs(t)?Nn(t):Fr(t)}function Hu(t){return Vs(t)?Nn(t,!0):Mr(t)}function Bu(t,e){var n={};return e=xo(e,3),dr(t,function(t,r,i){tr(n,e(t,r,i),t)}),n}function Uu(t,e){var n={};return e=xo(e,3),dr(t,function(t,r,i){tr(n,r,e(t,r,i))}),n}function Wu(t,e){return zu(t,Ns(xo(e)))}function zu(t,e){if(null==t)return{};var n=v(bo(t),function(t){return[t]});return e=xo(e),Jr(t,n,function(t,n){return e(t,n[0])})}function Vu(t,e,n){e=Ci(e,t);var r=-1,i=e.length;for(i||(i=1,t=it);++r<i;){var o=null==t?it:t[Yo(e[r])];o===it&&(r=i,o=n),t=eu(o)?o.call(t):o}return t}function Xu(t,e,n){return null==t?t:oi(t,e,n)}function Ku(t,e,n,r){return r="function"==typeof r?r:it,null==t?t:oi(t,e,n,r)}function Ju(t,e,n){var r=mp(t),i=r||bp(t)||Tp(t);if(e=xo(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:iu(t)&&eu(o)?hf(kl(t)):{}}return(i?c:dr)(t,function(t,r,i){return e(n,t,r,i)}),n}function Qu(t,e){return null==t||vi(t,e)}function Gu(t,e,n){return null==t?t:gi(t,e,xi(n))}function Zu(t,e,n,r){return r="function"==typeof r?r:it,null==t?t:gi(t,e,xi(n),r)}function Yu(t){return null==t?[]:R(t,qu(t))}function tc(t){return null==t?[]:R(t,Hu(t))}function ec(t,e,n){return n===it&&(n=e,e=it),n!==it&&(n=Tu(n),n=n===n?n:0),e!==it&&(e=Tu(e),e=e===e?e:0),nr(Tu(t),e,n)}function nc(t,e,n){return e=wu(e),n===it?(n=e,e=0):n=wu(n),t=Tu(t),xr(t,e,n)}function rc(t,e,n){if(n&&"boolean"!=typeof n&&Ro(t,e,n)&&(e=n=it),n===it&&("boolean"==typeof e?(n=e,e=it):"boolean"==typeof t&&(n=t,t=it)),t===it&&e===it?(t=0,e=1):(t=wu(t),e===it?(e=t,t=0):e=wu(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=Jl();return Vl(t+i*(e-t+Sn("1e-"+((i+"").length-1))),e)}return Yr(t,e)}function ic(t){return Qp(ku(t).toLowerCase())}function oc(t){return(t=ku(t))&&t.replace(Je,Vn).replace(gn,"")}function ac(t,e,n){t=ku(t),e=di(e);var r=t.length;n=n===it?r:nr(xu(n),0,r);var i=n;return(n-=e.length)>=0&&t.slice(n,i)==e}function sc(t){return t=ku(t),t&&Te.test(t)?t.replace(xe,Xn):t}function uc(t){return t=ku(t),t&&De.test(t)?t.replace(Ne,"\\$&"):t}function cc(t,e,n){t=ku(t),e=xu(e);var r=e?Y(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return no(Ml(i),n)+t+no(Fl(i),n)}function lc(t,e,n){t=ku(t),e=xu(e);var r=e?Y(t):0;return e&&r<e?t+no(e-r,n):t}function fc(t,e,n){t=ku(t),e=xu(e);var r=e?Y(t):0;return e&&r<e?no(e-r,n)+t:t}function pc(t,e,n){return n||null==e?e=0:e&&(e=+e),Kl(ku(t).replace(Le,""),e||0)}function dc(t,e,n){return e=(n?Ro(t,e,n):e===it)?1:xu(e),ei(ku(t),e)}function hc(){var t=arguments,e=ku(t[0]);return t.length<3?e:e.replace(t[1],t[2])}function vc(t,e,n){return n&&"number"!=typeof n&&Ro(t,e,n)&&(e=n=it),(n=n===it?Rt:n>>>0)?(t=ku(t),t&&("string"==typeof e||null!=e&&!xp(e))&&!(e=di(e))&&U(t)?Ti(tt(t),0,n):t.split(e,n)):[]}function gc(t,e,n){return t=ku(t),n=null==n?0:nr(xu(n),0,t.length),e=di(e),t.slice(n,n+e.length)==e}function mc(t,e,r){var i=n.templateSettings;r&&Ro(t,e,r)&&(e=it),t=ku(t),e=Sp({},e,i,lo);var o,a,s=Sp({},e.imports,i.imports,lo),u=qu(s),c=R(s,u),l=0,f=e.interpolate||Qe,p="__p += '",d=ul((e.escape||Qe).source+"|"+f.source+"|"+(f===ke?Be:Qe).source+"|"+(e.evaluate||Qe).source+"|$","g"),h="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++xn+"]")+"\n";t.replace(d,function(e,n,r,i,s,u){return r||(r=i),p+=t.slice(l,u).replace(Ge,H),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+e.length,e}),p+="';\n";var v=e.variable;v||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace(ye,""):p).replace(be,"$1").replace(_e,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Gp(function(){return ol(u,h+"return "+p).apply(it,c)});if(g.source=p,Ys(g))throw g;return g}function yc(t){return ku(t).toLowerCase()}function bc(t){return ku(t).toUpperCase()}function _c(t,e,n){if((t=ku(t))&&(n||e===it))return t.replace(Ie,"");if(!t||!(e=di(e)))return t;var r=tt(t),i=tt(e);return Ti(r,F(r,i),M(r,i)+1).join("")}function wc(t,e,n){if((t=ku(t))&&(n||e===it))return t.replace(Re,"");if(!t||!(e=di(e)))return t;var r=tt(t);return Ti(r,0,M(r,tt(e))+1).join("")}function xc(t,e,n){if((t=ku(t))&&(n||e===it))return t.replace(Le,"");if(!t||!(e=di(e)))return t;var r=tt(t);return Ti(r,F(r,tt(e))).join("")}function Cc(t,e){var n=At,r=kt;if(iu(e)){var i="separator"in e?e.separator:i;n="length"in e?xu(e.length):n,r="omission"in e?di(e.omission):r}t=ku(t);var o=t.length;if(U(t)){var a=tt(t);o=a.length}if(n>=o)return t;var s=n-Y(r);if(s<1)return r;var u=a?Ti(a,0,s).join(""):t.slice(0,s);if(i===it)return u+r;if(a&&(s+=u.length-s),xp(i)){if(t.slice(s).search(i)){var c,l=u;for(i.global||(i=ul(i.source,ku(Ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(l);)var f=c.index;u=u.slice(0,f===it?s:f)}}else if(t.indexOf(di(i),s)!=s){var p=u.lastIndexOf(i);p>-1&&(u=u.slice(0,p))}return u+r}function Tc(t){return t=ku(t),t&&Ce.test(t)?t.replace(we,Kn):t}function $c(t,e,n){return t=ku(t),e=n?it:e,e===it?W(t)?rt(t):w(t):t.match(e)||[]}function Ac(t){var e=null==t?0:t.length,n=xo();return t=e?v(t,function(t){if("function"!=typeof t[1])throw new ll(st);return[n(t[0]),t[1]]}):[],ni(function(n){for(var r=-1;++r<e;){var i=t[r];if(s(i[0],this,n))return s(i[1],this,n)}})}function kc(t){return ir(rr(t,ft))}function Ec(t){return function(){return t}}function Sc(t,e){return null==t||t!==t?e:t}function Oc(t){return t}function jc(t){return Pr("function"==typeof t?t:rr(t,ft))}function Nc(t){return Br(rr(t,ft))}function Dc(t,e){return Ur(t,rr(e,ft))}function Ic(t,e,n){var r=qu(e),i=vr(e,r);null!=n||iu(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=vr(e,qu(e)));var o=!(iu(n)&&"chain"in n&&!n.chain),a=eu(t);return c(i,function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__);return(n.__actions__=Pi(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,g([this.value()],arguments))})}),t}function Lc(){return Dn._===this&&(Dn._=wl),this}function Rc(){}function Pc(t){return t=xu(t),ni(function(e){return Vr(e,t)})}function Fc(t){return Po(t)?E(Yo(t)):Qr(t)}function Mc(t){return function(e){return null==t?it:gr(t,e)}}function qc(){return[]}function Hc(){return!1}function Bc(){return{}}function Uc(){return""}function Wc(){return!0}function zc(t,e){if((t=xu(t))<1||t>Dt)return[];var n=Rt,r=Vl(t,Rt);e=xo(e),t-=Rt;for(var i=D(r,e);++n<t;)e(n);return i}function Vc(t){return mp(t)?v(t,Yo):gu(t)?[t]:Pi(Nf(ku(t)))}function Xc(t){var e=++ml;return ku(t)+e}function Kc(t){return t&&t.length?cr(t,Oc,br):it}function Jc(t,e){return t&&t.length?cr(t,xo(e,2),br):it}function Qc(t){return k(t,Oc)}function Gc(t,e){return k(t,xo(e,2))}function Zc(t){return t&&t.length?cr(t,Oc,qr):it}function Yc(t,e){return t&&t.length?cr(t,xo(e,2),qr):it}function tl(t){return t&&t.length?N(t,Oc):0}function el(t,e){return t&&t.length?N(t,xo(e,2)):0}e=null==e?Dn:Jn.defaults(Dn.Object(),e,Jn.pick(Dn,wn));var nl=e.Array,rl=e.Date,il=e.Error,ol=e.Function,al=e.Math,sl=e.Object,ul=e.RegExp,cl=e.String,ll=e.TypeError,fl=nl.prototype,pl=ol.prototype,dl=sl.prototype,hl=e["__core-js_shared__"],vl=pl.toString,gl=dl.hasOwnProperty,ml=0,yl=function(){var t=/[^.]+$/.exec(hl&&hl.keys&&hl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),bl=dl.toString,_l=vl.call(sl),wl=Dn._,xl=ul("^"+vl.call(gl).replace(Ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Cl=Rn?e.Buffer:it,Tl=e.Symbol,$l=e.Uint8Array,Al=Cl?Cl.allocUnsafe:it,kl=X(sl.getPrototypeOf,sl),El=sl.create,Sl=dl.propertyIsEnumerable,Ol=fl.splice,jl=Tl?Tl.isConcatSpreadable:it,Nl=Tl?Tl.iterator:it,Dl=Tl?Tl.toStringTag:it,Il=function(){try{var t=$o(sl,"defineProperty");return t({},"",{}),t}catch(t){}}(),Ll=e.clearTimeout!==Dn.clearTimeout&&e.clearTimeout,Rl=rl&&rl.now!==Dn.Date.now&&rl.now,Pl=e.setTimeout!==Dn.setTimeout&&e.setTimeout,Fl=al.ceil,Ml=al.floor,ql=sl.getOwnPropertySymbols,Hl=Cl?Cl.isBuffer:it,Bl=e.isFinite,Ul=fl.join,Wl=X(sl.keys,sl),zl=al.max,Vl=al.min,Xl=rl.now,Kl=e.parseInt,Jl=al.random,Ql=fl.reverse,Gl=$o(e,"DataView"),Zl=$o(e,"Map"),Yl=$o(e,"Promise"),tf=$o(e,"Set"),ef=$o(e,"WeakMap"),nf=$o(sl,"create"),rf=ef&&new ef,of={},af=ta(Gl),sf=ta(Zl),uf=ta(Yl),cf=ta(tf),lf=ta(ef),ff=Tl?Tl.prototype:it,pf=ff?ff.valueOf:it,df=ff?ff.toString:it,hf=function(){function t(){}return function(e){if(!iu(e))return{};if(El)return El(e);t.prototype=e;var n=new t;return t.prototype=it,n}}();n.templateSettings={escape:$e,evaluate:Ae,interpolate:ke,variable:"",imports:{_:n}},n.prototype=r.prototype,n.prototype.constructor=n,i.prototype=hf(r.prototype),i.prototype.constructor=i,_.prototype=hf(r.prototype),_.prototype.constructor=_,nt.prototype.clear=qe,nt.prototype.delete=Ze,nt.prototype.get=Ye,nt.prototype.has=tn,nt.prototype.set=en,nn.prototype.clear=rn,nn.prototype.delete=on,nn.prototype.get=an,nn.prototype.has=sn,nn.prototype.set=un,cn.prototype.clear=ln,cn.prototype.delete=fn,cn.prototype.get=pn,cn.prototype.has=dn,cn.prototype.set=hn,mn.prototype.add=mn.prototype.push=yn,mn.prototype.has=bn,_n.prototype.clear=$n,_n.prototype.delete=An,_n.prototype.get=kn,_n.prototype.has=En,_n.prototype.set=jn;var vf=Ui(dr),gf=Ui(hr,!0),mf=Wi(),yf=Wi(!0),bf=rf?function(t,e){return rf.set(t,e),t}:Oc,_f=Il?function(t,e){return Il(t,"toString",{configurable:!0,enumerable:!1,value:Ec(e),writable:!0})}:Oc,wf=ni,xf=Ll||function(t){return Dn.clearTimeout(t)},Cf=tf&&1/J(new tf([,-0]))[1]==Nt?function(t){return new tf(t)}:Rc,Tf=rf?function(t){return rf.get(t)}:Rc,$f=ql?function(t){return null==t?[]:(t=sl(t),p(ql(t),function(e){return Sl.call(t,e)}))}:qc,Af=ql?function(t){for(var e=[];t;)g(e,$f(t)),t=kl(t);return e}:qc,kf=yr;(Gl&&kf(new Gl(new ArrayBuffer(1)))!=ue||Zl&&kf(new Zl)!=Jt||Yl&&"[object Promise]"!=kf(Yl.resolve())||tf&&kf(new tf)!=ee||ef&&kf(new ef)!=oe)&&(kf=function(t){var e=yr(t),n=e==Zt?t.constructor:it,r=n?ta(n):"";if(r)switch(r){case af:return ue;case sf:return Jt;case uf:return"[object Promise]";case cf:return ee;case lf:return oe}return e});var Ef=hl?eu:Hc,Sf=Go(bf),Of=Pl||function(t,e){return Dn.setTimeout(t,e)},jf=Go(_f),Nf=function(t){var e=js(t,function(t){return n.size===ct&&n.clear(),t}),n=e.cache;return e}(function(t){var e=[];return Oe.test(t)&&e.push(""),t.replace(je,function(t,n,r,i){e.push(r?i.replace(He,"$1"):n||t)}),e}),Df=ni(function(t,e){return Xs(t)?sr(t,pr(e,1,Xs,!0)):[]}),If=ni(function(t,e){var n=wa(e);return Xs(n)&&(n=it),Xs(t)?sr(t,pr(e,1,Xs,!0),xo(n,2)):[]}),Lf=ni(function(t,e){var n=wa(e);return Xs(n)&&(n=it),Xs(t)?sr(t,pr(e,1,Xs,!0),it,n):[]}),Rf=ni(function(t){var e=v(t,wi);return e.length&&e[0]===t[0]?Cr(e):[]}),Pf=ni(function(t){var e=wa(t),n=v(t,wi);return e===wa(n)?e=it:n.pop(),n.length&&n[0]===t[0]?Cr(n,xo(e,2)):[]}),Ff=ni(function(t){var e=wa(t),n=v(t,wi);return e="function"==typeof e?e:it,e&&n.pop(),n.length&&n[0]===t[0]?Cr(n,it,e):[]}),Mf=ni(Ta),qf=mo(function(t,e){var n=null==t?0:t.length,r=er(t,e);return Zr(t,v(e,function(t){return Lo(t,n)?+t:t}).sort(Di)),r}),Hf=ni(function(t){return hi(pr(t,1,Xs,!0))}),Bf=ni(function(t){var e=wa(t);return Xs(e)&&(e=it),hi(pr(t,1,Xs,!0),xo(e,2))}),Uf=ni(function(t){var e=wa(t);return e="function"==typeof e?e:it,hi(pr(t,1,Xs,!0),it,e)}),Wf=ni(function(t,e){return Xs(t)?sr(t,e):[]}),zf=ni(function(t){return bi(p(t,Xs))}),Vf=ni(function(t){var e=wa(t);return Xs(e)&&(e=it),bi(p(t,Xs),xo(e,2))}),Xf=ni(function(t){var e=wa(t);return e="function"==typeof e?e:it,bi(p(t,Xs),it,e)}),Kf=ni(Va),Jf=ni(function(t){var e=t.length,n=e>1?t[e-1]:it;return n="function"==typeof n?(t.pop(),n):it,Xa(t,n)}),Qf=mo(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return er(e,t)};return!(e>1||this.__actions__.length)&&r instanceof _&&Lo(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Za,args:[o],thisArg:it}),new i(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(it),t})):this.thru(o)}),Gf=Hi(function(t,e,n){gl.call(t,n)?++t[n]:tr(t,n,1)}),Zf=Qi(fa),Yf=Qi(pa),tp=Hi(function(t,e,n){gl.call(t,n)?t[n].push(e):tr(t,n,[e])}),ep=ni(function(t,e,n){var r=-1,i="function"==typeof e,o=Vs(t)?nl(t.length):[];return vf(t,function(t){o[++r]=i?s(e,t,n):$r(t,e,n)}),o}),np=Hi(function(t,e,n){tr(t,n,e)}),rp=Hi(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),ip=ni(function(t,e){if(null==t)return[];var n=e.length;return n>1&&Ro(t,e[0],e[1])?e=[]:n>2&&Ro(e[0],e[1],e[2])&&(e=[e[0]]),Xr(t,pr(e,1),[])}),op=Rl||function(){return Dn.Date.now()},ap=ni(function(t,e,n){var r=gt;if(n.length){var i=K(n,wo(ap));r|=wt}return co(t,r,e,n,i)}),sp=ni(function(t,e,n){var r=gt|mt;if(n.length){var i=K(n,wo(sp));r|=wt}return co(e,r,t,n,i)}),up=ni(function(t,e){return ar(t,1,e)}),cp=ni(function(t,e,n){return ar(t,Tu(e)||0,n)});js.Cache=cn;var lp=wf(function(t,e){e=1==e.length&&mp(e[0])?v(e[0],L(xo())):v(pr(e,1),L(xo()));var n=e.length;return ni(function(r){for(var i=-1,o=Vl(r.length,n);++i<o;)r[i]=e[i].call(this,r[i]);return s(t,this,r)})}),fp=ni(function(t,e){var n=K(e,wo(fp));return co(t,wt,it,e,n)}),pp=ni(function(t,e){var n=K(e,wo(pp));return co(t,xt,it,e,n)}),dp=mo(function(t,e){return co(t,Tt,it,it,it,e)}),hp=oo(br),vp=oo(function(t,e){return t>=e}),gp=Ar(function(){return arguments}())?Ar:function(t){return ou(t)&&gl.call(t,"callee")&&!Sl.call(t,"callee")},mp=nl.isArray,yp=Mn?L(Mn):kr,bp=Hl||Hc,_p=qn?L(qn):Er,wp=Hn?L(Hn):jr,xp=Bn?L(Bn):Ir,Cp=Un?L(Un):Lr,Tp=Wn?L(Wn):Rr,$p=oo(qr),Ap=oo(function(t,e){return t<=e}),kp=Bi(function(t,e){if(Ho(e)||Vs(e))return void Fi(e,qu(e),t);for(var n in e)gl.call(e,n)&&zn(t,n,e[n])}),Ep=Bi(function(t,e){Fi(e,Hu(e),t)}),Sp=Bi(function(t,e,n,r){Fi(e,Hu(e),t,r)}),Op=Bi(function(t,e,n,r){Fi(e,qu(e),t,r)}),jp=mo(er),Np=ni(function(t){return t.push(it,lo),s(Sp,it,t)}),Dp=ni(function(t){return t.push(it,fo),s(Fp,it,t)}),Ip=Yi(function(t,e,n){t[e]=n},Ec(Oc)),Lp=Yi(function(t,e,n){gl.call(t,e)?t[e].push(n):t[e]=[n]},xo),Rp=ni($r),Pp=Bi(function(t,e,n){Wr(t,e,n)}),Fp=Bi(function(t,e,n,r){Wr(t,e,n,r)}),Mp=mo(function(t,e){var n={};if(null==t)return n;var r=!1;e=v(e,function(e){return e=Ci(e,t),r||(r=e.length>1),e}),Fi(t,bo(t),n),r&&(n=rr(n,ft|pt|dt,po));for(var i=e.length;i--;)vi(n,e[i]);return n}),qp=mo(function(t,e){return null==t?{}:Kr(t,e)}),Hp=uo(qu),Bp=uo(Hu),Up=Xi(function(t,e,n){return e=e.toLowerCase(),t+(n?ic(e):e)}),Wp=Xi(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),zp=Xi(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),Vp=Vi("toLowerCase"),Xp=Xi(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),Kp=Xi(function(t,e,n){return t+(n?" ":"")+Qp(e)}),Jp=Xi(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),Qp=Vi("toUpperCase"),Gp=ni(function(t,e){try{return s(t,it,e)}catch(t){return Ys(t)?t:new il(t)}}),Zp=mo(function(t,e){return c(e,function(e){e=Yo(e),tr(t,e,ap(t[e],t))}),t}),Yp=Gi(),td=Gi(!0),ed=ni(function(t,e){return function(n){return $r(n,t,e)}}),nd=ni(function(t,e){return function(n){return $r(t,n,e)}}),rd=eo(v),id=eo(f),od=eo(b),ad=io(),sd=io(!0),ud=to(function(t,e){return t+e},0),cd=so("ceil"),ld=to(function(t,e){return t/e},1),fd=so("floor"),pd=to(function(t,e){return t*e},1),dd=so("round"),hd=to(function(t,e){return t-e},0);return n.after=Ts,n.ary=$s,n.assign=kp,n.assignIn=Ep,n.assignInWith=Sp,n.assignWith=Op,n.at=jp,n.before=As,n.bind=ap,n.bindAll=Zp,n.bindKey=sp,n.castArray=Ms,n.chain=Qa,n.chunk=ra,n.compact=ia,n.concat=oa,n.cond=Ac,n.conforms=kc,n.constant=Ec,n.countBy=Gf,n.create=Eu,n.curry=ks,n.curryRight=Es,n.debounce=Ss,n.defaults=Np,n.defaultsDeep=Dp,n.defer=up,n.delay=cp,n.difference=Df,n.differenceBy=If,n.differenceWith=Lf,n.drop=aa,n.dropRight=sa,n.dropRightWhile=ua,n.dropWhile=ca,n.fill=la,n.filter=ss,n.flatMap=us,n.flatMapDeep=cs,n.flatMapDepth=ls,n.flatten=da,n.flattenDeep=ha,n.flattenDepth=va,n.flip=Os,n.flow=Yp,n.flowRight=td,n.fromPairs=ga,n.functions=Lu,n.functionsIn=Ru,n.groupBy=tp,n.initial=ba,n.intersection=Rf,n.intersectionBy=Pf,n.intersectionWith=Ff,n.invert=Ip,n.invertBy=Lp,n.invokeMap=ep,n.iteratee=jc,n.keyBy=np,n.keys=qu,n.keysIn=Hu,n.map=hs,n.mapKeys=Bu,n.mapValues=Uu,n.matches=Nc,n.matchesProperty=Dc,n.memoize=js,n.merge=Pp,n.mergeWith=Fp,n.method=ed,n.methodOf=nd,n.mixin=Ic,n.negate=Ns,n.nthArg=Pc,n.omit=Mp,n.omitBy=Wu,n.once=Ds,n.orderBy=vs,n.over=rd,n.overArgs=lp,n.overEvery=id,n.overSome=od,n.partial=fp,n.partialRight=pp,n.partition=rp,n.pick=qp,n.pickBy=zu,n.property=Fc,n.propertyOf=Mc,n.pull=Mf,n.pullAll=Ta,n.pullAllBy=$a,n.pullAllWith=Aa,n.pullAt=qf,n.range=ad,n.rangeRight=sd,n.rearg=dp,n.reject=ys,n.remove=ka,n.rest=Is,n.reverse=Ea,n.sampleSize=_s,n.set=Xu,n.setWith=Ku,n.shuffle=ws,n.slice=Sa,n.sortBy=ip,n.sortedUniq=Ra,n.sortedUniqBy=Pa,n.split=vc,n.spread=Ls,n.tail=Fa,n.take=Ma,n.takeRight=qa,n.takeRightWhile=Ha,n.takeWhile=Ba,n.tap=Ga,n.throttle=Rs,n.thru=Za,n.toArray=_u,n.toPairs=Hp,n.toPairsIn=Bp,n.toPath=Vc,n.toPlainObject=$u,n.transform=Ju,n.unary=Ps,n.union=Hf,n.unionBy=Bf,n.unionWith=Uf,n.uniq=Ua,n.uniqBy=Wa,n.uniqWith=za,n.unset=Qu,n.unzip=Va,n.unzipWith=Xa,n.update=Gu,n.updateWith=Zu,n.values=Yu,n.valuesIn=tc,n.without=Wf,n.words=$c,n.wrap=Fs,n.xor=zf,n.xorBy=Vf,n.xorWith=Xf,n.zip=Kf,n.zipObject=Ka,n.zipObjectDeep=Ja,n.zipWith=Jf,n.entries=Hp,n.entriesIn=Bp,n.extend=Ep,n.extendWith=Sp,Ic(n,n),n.add=ud,n.attempt=Gp,n.camelCase=Up,n.capitalize=ic,n.ceil=cd,n.clamp=ec,n.clone=qs,n.cloneDeep=Bs,n.cloneDeepWith=Us,n.cloneWith=Hs,n.conformsTo=Ws,n.deburr=oc,n.defaultTo=Sc,n.divide=ld,n.endsWith=ac,n.eq=zs,n.escape=sc,n.escapeRegExp=uc,n.every=as,n.find=Zf,n.findIndex=fa,n.findKey=Su,n.findLast=Yf,n.findLastIndex=pa,n.findLastKey=Ou,n.floor=fd,n.forEach=fs,n.forEachRight=ps,n.forIn=ju,n.forInRight=Nu,n.forOwn=Du,n.forOwnRight=Iu,n.get=Pu,n.gt=hp,n.gte=vp,n.has=Fu,n.hasIn=Mu,n.head=ma,n.identity=Oc,n.includes=ds,n.indexOf=ya,n.inRange=nc,n.invoke=Rp,n.isArguments=gp,n.isArray=mp,n.isArrayBuffer=yp,n.isArrayLike=Vs,n.isArrayLikeObject=Xs,n.isBoolean=Ks,n.isBuffer=bp,n.isDate=_p,n.isElement=Js,n.isEmpty=Qs,n.isEqual=Gs,n.isEqualWith=Zs,n.isError=Ys,n.isFinite=tu,n.isFunction=eu,n.isInteger=nu,n.isLength=ru,n.isMap=wp,n.isMatch=au,n.isMatchWith=su,n.isNaN=uu,n.isNative=cu,n.isNil=fu,n.isNull=lu,n.isNumber=pu,n.isObject=iu,n.isObjectLike=ou,n.isPlainObject=du,n.isRegExp=xp,n.isSafeInteger=hu,n.isSet=Cp,n.isString=vu,n.isSymbol=gu,n.isTypedArray=Tp,n.isUndefined=mu,n.isWeakMap=yu,n.isWeakSet=bu,n.join=_a,n.kebabCase=Wp,n.last=wa,n.lastIndexOf=xa,n.lowerCase=zp,n.lowerFirst=Vp,n.lt=$p,n.lte=Ap,n.max=Kc,n.maxBy=Jc,n.mean=Qc,n.meanBy=Gc,n.min=Zc,n.minBy=Yc,n.stubArray=qc,n.stubFalse=Hc,n.stubObject=Bc,n.stubString=Uc,n.stubTrue=Wc,n.multiply=pd,n.nth=Ca,n.noConflict=Lc,n.noop=Rc,n.now=op,n.pad=cc,n.padEnd=lc,n.padStart=fc,n.parseInt=pc,n.random=rc,n.reduce=gs,n.reduceRight=ms,n.repeat=dc,n.replace=hc,n.result=Vu,n.round=dd,n.runInContext=t,n.sample=bs,n.size=xs,n.snakeCase=Xp,n.some=Cs,n.sortedIndex=Oa,n.sortedIndexBy=ja,n.sortedIndexOf=Na,n.sortedLastIndex=Da,n.sortedLastIndexBy=Ia,n.sortedLastIndexOf=La,n.startCase=Kp,n.startsWith=gc,n.subtract=hd,n.sum=tl,n.sumBy=el,n.template=mc,n.times=zc,n.toFinite=wu,n.toInteger=xu,n.toLength=Cu,n.toLower=yc,n.toNumber=Tu,n.toSafeInteger=Au,n.toString=ku,n.toUpper=bc,n.trim=_c,n.trimEnd=wc,n.trimStart=xc,n.truncate=Cc,n.unescape=Tc,n.uniqueId=Xc,n.upperCase=Jp,n.upperFirst=Qp,n.each=fs,n.eachRight=ps,n.first=ma,Ic(n,function(){var t={};return dr(n,function(e,r){gl.call(n.prototype,r)||(t[r]=e)}),t}(),{chain:!1}),n.VERSION="4.17.4",c(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){n[t].placeholder=n}),c(["drop","take"],function(t,e){_.prototype[t]=function(n){n=n===it?1:zl(xu(n),0);var r=this.__filtered__&&!e?new _(this):this.clone();return r.__filtered__?r.__takeCount__=Vl(n,r.__takeCount__):r.__views__.push({size:Vl(n,Rt),type:t+(r.__dir__<0?"Right":"")}),r},_.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),c(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==Ot||3==n;_.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:xo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),c(["head","last"],function(t,e){var n="take"+(e?"Right":"");_.prototype[t]=function(){return this[n](1).value()[0]}}),c(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");_.prototype[t]=function(){return this.__filtered__?new _(this):this[n](1)}}),_.prototype.compact=function(){return this.filter(Oc)},_.prototype.find=function(t){return this.filter(t).head()},_.prototype.findLast=function(t){return this.reverse().find(t)},_.prototype.invokeMap=ni(function(t,e){return"function"==typeof t?new _(this):this.map(function(n){return $r(n,t,e)})}),_.prototype.reject=function(t){return this.filter(Ns(xo(t)))},_.prototype.slice=function(t,e){t=xu(t);var n=this;return n.__filtered__&&(t>0||e<0)?new _(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==it&&(e=xu(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},_.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},_.prototype.toArray=function(){return this.take(Rt)},dr(_.prototype,function(t,e){var r=/^(?:filter|find|map|reject)|While$/.test(e),o=/^(?:head|last)$/.test(e),a=n[o?"take"+("last"==e?"Right":""):e],s=o||/^find/.test(e);a&&(n.prototype[e]=function(){var e=this.__wrapped__,u=o?[1]:arguments,c=e instanceof _,l=u[0],f=c||mp(e),p=function(t){var e=a.apply(n,g([t],u));return o&&d?e[0]:e};f&&r&&"function"==typeof l&&1!=l.length&&(c=f=!1);var d=this.__chain__,h=!!this.__actions__.length,v=s&&!d,m=c&&!h;if(!s&&f){e=m?e:new _(this);var y=t.apply(e,u);return y.__actions__.push({func:Za,args:[p],thisArg:it}),new i(y,d)}return v&&m?t.apply(this,u):(y=this.thru(p),v?o?y.value()[0]:y.value():y)})}),c(["pop","push","shift","sort","splice","unshift"],function(t){var e=fl[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);n.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var n=this.value();return e.apply(mp(n)?n:[],t)}return this[r](function(n){return e.apply(mp(n)?n:[],t)})}}),dr(_.prototype,function(t,e){var r=n[e];if(r){var i=r.name+"";(of[i]||(of[i]=[])).push({name:e,func:r})}}),of[Zi(it,mt).name]=[{name:"wrapper",func:it}],_.prototype.clone=S,_.prototype.reverse=G,_.prototype.value=et,n.prototype.at=Qf,n.prototype.chain=Ya,n.prototype.commit=ts,n.prototype.next=es,n.prototype.plant=rs,n.prototype.reverse=is,n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=os,n.prototype.first=n.prototype.head,Nl&&(n.prototype[Nl]=ns),n}();Dn._=Jn,(i=function(){return Jn}.call(e,n,e,r))!==it&&(r.exports=i)}).call(this)}).call(e,n(2),n(12)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r,i;!function(e,n){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,o){"use strict";function a(t,e){e=e||at;var n=e.createElement("script");n.text=t,e.head.appendChild(n).parentNode.removeChild(n)}function s(t){var e=!!t&&"length"in t&&t.length,n=yt.type(t);return"function"!==n&&!yt.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function u(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}function c(t,e,n){return yt.isFunction(e)?yt.grep(t,function(t,r){return!!e.call(t,r,t)!==n}):e.nodeType?yt.grep(t,function(t){return t===e!==n}):"string"!=typeof e?yt.grep(t,function(t){return ft.call(e,t)>-1!==n}):Et.test(e)?yt.filter(e,t,n):(e=yt.filter(e,t),yt.grep(t,function(t){return ft.call(e,t)>-1!==n&&1===t.nodeType}))}function l(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function f(t){var e={};return yt.each(t.match(Dt)||[],function(t,n){e[n]=!0}),e}function p(t){return t}function d(t){throw t}function h(t,e,n,r){var i;try{t&&yt.isFunction(i=t.promise)?i.call(t).done(e).fail(n):t&&yt.isFunction(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}function v(){at.removeEventListener("DOMContentLoaded",v),n.removeEventListener("load",v),yt.ready()}function g(){this.expando=yt.expando+g.uid++}function m(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:qt.test(t)?JSON.parse(t):t)}function y(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(Ht,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(r))){try{n=m(n)}catch(t){}Mt.set(t,e,n)}else n=void 0;return n}function b(t,e,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return yt.css(t,e,"")},u=s(),c=n&&n[3]||(yt.cssNumber[e]?"":"px"),l=(yt.cssNumber[e]||"px"!==c&&+u)&&Ut.exec(yt.css(t,e));if(l&&l[3]!==c){c=c||l[3],n=n||[],l=+u||1;do{o=o||".5",l/=o,yt.style(t,e,l+c)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}function _(t){var e,n=t.ownerDocument,r=t.nodeName,i=Xt[r];return i||(e=n.body.appendChild(n.createElement(r)),i=yt.css(e,"display"),e.parentNode.removeChild(e),"none"===i&&(i="block"),Xt[r]=i,i)}function w(t,e){for(var n,r,i=[],o=0,a=t.length;o<a;o++)r=t[o],r.style&&(n=r.style.display,e?("none"===n&&(i[o]=Ft.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&zt(r)&&(i[o]=_(r))):"none"!==n&&(i[o]="none",Ft.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(t[o].style.display=i[o]);return t}function x(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&u(t,e)?yt.merge([t],n):n}function C(t,e){for(var n=0,r=t.length;n<r;n++)Ft.set(t[n],"globalEval",!e||Ft.get(e[n],"globalEval"))}function T(t,e,n,r,i){for(var o,a,s,u,c,l,f=e.createDocumentFragment(),p=[],d=0,h=t.length;d<h;d++)if((o=t[d])||0===o)if("object"===yt.type(o))yt.merge(p,o.nodeType?[o]:o);else if(Zt.test(o)){for(a=a||f.appendChild(e.createElement("div")),s=(Jt.exec(o)||["",""])[1].toLowerCase(),u=Gt[s]||Gt._default,a.innerHTML=u[1]+yt.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;yt.merge(p,a.childNodes),a=f.firstChild,a.textContent=""}else p.push(e.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&yt.inArray(o,r)>-1)i&&i.push(o);else if(c=yt.contains(o.ownerDocument,o),a=x(f.appendChild(o),"script"),c&&C(a),n)for(l=0;o=a[l++];)Qt.test(o.type||"")&&n.push(o);return f}function $(){return!0}function A(){return!1}function k(){try{return at.activeElement}catch(t){}}function E(t,e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=void 0);for(s in e)E(t,s,n,r,e[s],o);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=A;else if(!i)return t;return 1===o&&(a=i,i=function(t){return yt().off(t),a.apply(this,arguments)},i.guid=a.guid||(a.guid=yt.guid++)),t.each(function(){yt.event.add(this,e,i,r,n)})}function S(t,e){return u(t,"table")&&u(11!==e.nodeType?e:e.firstChild,"tr")?yt(">tbody",t)[0]||t:t}function O(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function j(t){var e=ae.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function N(t,e){var n,r,i,o,a,s,u,c;if(1===e.nodeType){if(Ft.hasData(t)&&(o=Ft.access(t),a=Ft.set(e,o),c=o.events)){delete a.handle,a.events={};for(i in c)for(n=0,r=c[i].length;n<r;n++)yt.event.add(e,i,c[i][n])}Mt.hasData(t)&&(s=Mt.access(t),u=yt.extend({},s),Mt.set(e,u))}}function D(t,e){var n=e.nodeName.toLowerCase();"input"===n&&Kt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function I(t,e,n,r){e=ct.apply([],e);var i,o,s,u,c,l,f=0,p=t.length,d=p-1,h=e[0],v=yt.isFunction(h);if(v||p>1&&"string"==typeof h&&!mt.checkClone&&oe.test(h))return t.each(function(i){var o=t.eq(i);v&&(e[0]=h.call(this,i,o.html())),I(o,e,n,r)});if(p&&(i=T(e,t[0].ownerDocument,!1,t,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=yt.map(x(i,"script"),O),u=s.length;f<p;f++)c=i,f!==d&&(c=yt.clone(c,!0,!0),u&&yt.merge(s,x(c,"script"))),n.call(t[f],c,f);if(u)for(l=s[s.length-1].ownerDocument,yt.map(s,j),f=0;f<u;f++)c=s[f],Qt.test(c.type||"")&&!Ft.access(c,"globalEval")&&yt.contains(l,c)&&(c.src?yt._evalUrl&&yt._evalUrl(c.src):a(c.textContent.replace(se,""),l))}return t}function L(t,e,n){for(var r,i=e?yt.filter(e,t):t,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||yt.cleanData(x(r)),r.parentNode&&(n&&yt.contains(r.ownerDocument,r)&&C(x(r,"script")),r.parentNode.removeChild(r));return t}function R(t,e,n){var r,i,o,a,s=t.style;return n=n||le(t),n&&(a=n.getPropertyValue(e)||n[e],""!==a||yt.contains(t.ownerDocument,t)||(a=yt.style(t,e)),!mt.pixelMarginRight()&&ce.test(a)&&ue.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function P(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function F(t){if(t in ge)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=ve.length;n--;)if((t=ve[n]+e)in ge)return t}function M(t){var e=yt.cssProps[t];return e||(e=yt.cssProps[t]=F(t)||t),e}function q(t,e,n){var r=Ut.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function H(t,e,n,r,i){var o,a=0;for(o=n===(r?"border":"content")?4:"width"===e?1:0;o<4;o+=2)"margin"===n&&(a+=yt.css(t,n+Wt[o],!0,i)),r?("content"===n&&(a-=yt.css(t,"padding"+Wt[o],!0,i)),"margin"!==n&&(a-=yt.css(t,"border"+Wt[o]+"Width",!0,i))):(a+=yt.css(t,"padding"+Wt[o],!0,i),"padding"!==n&&(a+=yt.css(t,"border"+Wt[o]+"Width",!0,i)));return a}function B(t,e,n){var r,i=le(t),o=R(t,e,i),a="border-box"===yt.css(t,"boxSizing",!1,i);return ce.test(o)?o:(r=a&&(mt.boxSizingReliable()||o===t.style[e]),"auto"===o&&(o=t["offset"+e[0].toUpperCase()+e.slice(1)]),(o=parseFloat(o)||0)+H(t,e,n||(a?"border":"content"),r,i)+"px")}function U(t,e,n,r,i){return new U.prototype.init(t,e,n,r,i)}function W(){ye&&(!1===at.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(W):n.setTimeout(W,yt.fx.interval),yt.fx.tick())}function z(){return n.setTimeout(function(){me=void 0}),me=yt.now()}function V(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)n=Wt[r],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function X(t,e,n){for(var r,i=(Q.tweeners[e]||[]).concat(Q.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,e,t))return r}function K(t,e,n){var r,i,o,a,s,u,c,l,f="width"in e||"height"in e,p=this,d={},h=t.style,v=t.nodeType&&zt(t),g=Ft.get(t,"fxshow");n.queue||(a=yt._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,yt.queue(t,"fx").length||a.empty.fire()})}));for(r in e)if(i=e[r],be.test(i)){if(delete e[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;v=!0}d[r]=g&&g[r]||yt.style(t,r)}if((u=!yt.isEmptyObject(e))||!yt.isEmptyObject(d)){f&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=g&&g.display,null==c&&(c=Ft.get(t,"display")),l=yt.css(t,"display"),"none"===l&&(c?l=c:(w([t],!0),c=t.style.display||c,l=yt.css(t,"display"),w([t]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===yt.css(t,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(g?"hidden"in g&&(v=g.hidden):g=Ft.access(t,"fxshow",{display:c}),o&&(g.hidden=!v),v&&w([t],!0),p.done(function(){v||w([t]),Ft.remove(t,"fxshow");for(r in d)yt.style(t,r,d[r])})),u=X(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,u.start=0))}}function J(t,e){var n,r,i,o,a;for(n in t)if(r=yt.camelCase(n),i=e[r],o=t[n],Array.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),(a=yt.cssHooks[r])&&"expand"in a){o=a.expand(o),delete t[r];for(n in o)n in t||(t[n]=o[n],e[n]=i)}else e[r]=i}function Q(t,e,n){var r,i,o=0,a=Q.prefilters.length,s=yt.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var e=me||z(),n=Math.max(0,c.startTime+c.duration-e),r=n/c.duration||0,o=1-r,a=0,u=c.tweens.length;a<u;a++)c.tweens[a].run(o);return s.notifyWith(t,[c,o,n]),o<1&&u?n:(u||s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c]),!1)},c=s.promise({elem:t,props:yt.extend({},e),opts:yt.extend(!0,{specialEasing:{},easing:yt.easing._default},n),originalProperties:e,originalOptions:n,startTime:me||z(),duration:n.duration,tweens:[],createTween:function(e,n){var r=yt.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c,e])):s.rejectWith(t,[c,e]),this}}),l=c.props;for(J(l,c.opts.specialEasing);o<a;o++)if(r=Q.prefilters[o].call(c,t,l,c.opts))return yt.isFunction(r.stop)&&(yt._queueHooks(c.elem,c.opts.queue).stop=yt.proxy(r.stop,r)),r;return yt.map(l,X,c),yt.isFunction(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),yt.fx.timer(yt.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}function G(t){return(t.match(Dt)||[]).join(" ")}function Z(t){return t.getAttribute&&t.getAttribute("class")||""}function Y(t,e,n,r){var i;if(Array.isArray(e))yt.each(e,function(e,i){n||Oe.test(t)?r(t,i):Y(t+"["+("object"==typeof i&&null!=i?e:"")+"]",i,n,r)});else if(n||"object"!==yt.type(e))r(t,e);else for(i in e)Y(t+"["+i+"]",e[i],n,r)}function tt(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(Dt)||[];if(yt.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function et(t,e,n,r){function i(s){var u;return o[s]=!0,yt.each(t[s]||[],function(t,s){var c=s(e,n,r);return"string"!=typeof c||a||o[c]?a?!(u=c):void 0:(e.dataTypes.unshift(c),i(c),!1)}),u}var o={},a=t===Be;return i(e.dataTypes[0])||!o["*"]&&i("*")}function nt(t,e){var n,r,i=yt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&yt.extend(!0,t,r),t}function rt(t,e,n){for(var r,i,o,a,s=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||t.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function it(t,e,n,r){var i,o,a,s,u,c={},l=t.dataTypes.slice();if(l[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(o=l.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!u&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if(s=i.split(" "),s[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+u+" to "+o}}}return{state:"success",data:e}}var ot=[],at=n.document,st=Object.getPrototypeOf,ut=ot.slice,ct=ot.concat,lt=ot.push,ft=ot.indexOf,pt={},dt=pt.toString,ht=pt.hasOwnProperty,vt=ht.toString,gt=vt.call(Object),mt={},yt=function(t,e){return new yt.fn.init(t,e)},bt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,_t=/^-ms-/,wt=/-([a-z])/g,xt=function(t,e){return e.toUpperCase()};yt.fn=yt.prototype={jquery:"3.2.1",constructor:yt,length:0,toArray:function(){return ut.call(this)},get:function(t){return null==t?ut.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=yt.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return yt.each(this,t)},map:function(t){return this.pushStack(yt.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(ut.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:lt,sort:ot.sort,splice:ot.splice},yt.extend=yt.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||yt.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(t=arguments[s]))for(e in t)n=a[e],r=t[e],a!==r&&(c&&r&&(yt.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&yt.isPlainObject(n)?n:{},a[e]=yt.extend(c,o,r)):void 0!==r&&(a[e]=r));return a},yt.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===yt.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=yt.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==dt.call(t))&&(!(e=st(t))||"function"==typeof(n=ht.call(e,"constructor")&&e.constructor)&&vt.call(n)===gt)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?pt[dt.call(t)]||"object":typeof t},globalEval:function(t){a(t)},camelCase:function(t){return t.replace(_t,"ms-").replace(wt,xt)},each:function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n&&!1!==e.call(t[r],r,t[r]);r++);else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},trim:function(t){return null==t?"":(t+"").replace(bt,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(s(Object(t))?yt.merge(n,"string"==typeof t?[t]:t):lt.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:ft.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r=[],i=0,o=t.length,a=!n;i<o;i++)!e(t[i],i)!==a&&r.push(t[i]);return r},map:function(t,e,n){var r,i,o=0,a=[];if(s(t))for(r=t.length;o<r;o++)null!=(i=e(t[o],o,n))&&a.push(i);else for(o in t)null!=(i=e(t[o],o,n))&&a.push(i);return ct.apply([],a)},guid:1,proxy:function(t,e){var n,r,i;if("string"==typeof e&&(n=t[e],e=t,t=n),yt.isFunction(t))return r=ut.call(arguments,2),i=function(){return t.apply(e||this,r.concat(ut.call(arguments)))},i.guid=t.guid=t.guid||yt.guid++,i},now:Date.now,support:mt}),"function"==typeof Symbol&&(yt.fn[Symbol.iterator]=ot[Symbol.iterator]),yt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){pt["[object "+e+"]"]=e.toLowerCase()});var Ct=function(t){function e(t,e,n,r){var i,o,a,s,u,l,p,d=e&&e.ownerDocument,h=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==h&&9!==h&&11!==h)return n;if(!r&&((e?e.ownerDocument||e:M)!==j&&O(e),e=e||j,D)){if(11!==h&&(u=vt.exec(t)))if(i=u[1]){if(9===h){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(d&&(a=d.getElementById(i))&&P(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return Q.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&_.getElementsByClassName&&e.getElementsByClassName)return Q.apply(n,e.getElementsByClassName(i)),n}if(_.qsa&&!W[t+" "]&&(!I||!I.test(t))){if(1!==h)d=e,p=t;else if("object"!==e.nodeName.toLowerCase()){for((s=e.getAttribute("id"))?s=s.replace(bt,_t):e.setAttribute("id",s=F),l=T(t),o=l.length;o--;)l[o]="#"+s+" "+f(l[o]);p=l.join(","),d=gt.test(t)&&c(e.parentNode)||e}if(p)try{return Q.apply(n,d.querySelectorAll(p)),n}catch(t){}finally{s===F&&e.removeAttribute("id")}}}return A(t.replace(ot,"$1"),e,n,r)}function n(){function t(n,r){return e.push(n+" ")>w.cacheLength&&delete t[e.shift()],t[n+" "]=r}var e=[];return t}function r(t){return t[F]=!0,t}function i(t){var e=j.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function o(t,e){for(var n=t.split("|"),r=n.length;r--;)w.attrHandle[n[r]]=e}function a(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function s(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&xt(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function u(t){return r(function(e){return e=+e,r(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(t){return t&&void 0!==t.getElementsByTagName&&t}function l(){}function f(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function p(t,e,n){var r=e.dir,i=e.next,o=i||r,a=n&&"parentNode"===o,s=H++;return e.first?function(e,n,i){for(;e=e[r];)if(1===e.nodeType||a)return t(e,n,i);return!1}:function(e,n,u){var c,l,f,p=[q,s];if(u){for(;e=e[r];)if((1===e.nodeType||a)&&t(e,n,u))return!0}else for(;e=e[r];)if(1===e.nodeType||a)if(f=e[F]||(e[F]={}),l=f[e.uniqueID]||(f[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=l[o])&&c[0]===q&&c[1]===s)return p[2]=c[2];if(l[o]=p,p[2]=t(e,n,u))return!0}return!1}}function d(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function h(t,n,r){for(var i=0,o=n.length;i<o;i++)e(t,n[i],r);return r}function v(t,e,n,r,i){for(var o,a=[],s=0,u=t.length,c=null!=e;s<u;s++)(o=t[s])&&(n&&!n(o,r,i)||(a.push(o),c&&e.push(s)));return a}function g(t,e,n,i,o,a){return i&&!i[F]&&(i=g(i)),o&&!o[F]&&(o=g(o,a)),r(function(r,a,s,u){var c,l,f,p=[],d=[],g=a.length,m=r||h(e||"*",s.nodeType?[s]:s,[]),y=!t||!r&&e?m:v(m,p,t,s,u),b=n?o||(r?t:g||i)?[]:a:y;if(n&&n(y,b,s,u),i)for(c=v(b,d),i(c,[],s,u),l=c.length;l--;)(f=c[l])&&(b[d[l]]=!(y[d[l]]=f));if(r){if(o||t){if(o){for(c=[],l=b.length;l--;)(f=b[l])&&c.push(y[l]=f);o(null,b=[],c,u)}for(l=b.length;l--;)(f=b[l])&&(c=o?Z(r,f):p[l])>-1&&(r[c]=!(a[c]=f))}}else b=v(b===a?b.splice(g,b.length):b),o?o(null,a,b,u):Q.apply(a,b)})}function m(t){for(var e,n,r,i=t.length,o=w.relative[t[0].type],a=o||w.relative[" "],s=o?1:0,u=p(function(t){return t===e},a,!0),c=p(function(t){return Z(e,t)>-1},a,!0),l=[function(t,n,r){var i=!o&&(r||n!==k)||((e=n).nodeType?u(t,n,r):c(t,n,r));return e=null,i}];s<i;s++)if(n=w.relative[t[s].type])l=[p(d(l),n)];else{if(n=w.filter[t[s].type].apply(null,t[s].matches),n[F]){for(r=++s;r<i&&!w.relative[t[r].type];r++);return g(s>1&&d(l),s>1&&f(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(ot,"$1"),n,s<r&&m(t.slice(s,r)),r<i&&m(t=t.slice(r)),r<i&&f(t))}l.push(n)}return d(l)}function y(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,u,c){var l,f,p,d=0,h="0",g=r&&[],m=[],y=k,b=r||o&&w.find.TAG("*",c),_=q+=null==y?1:Math.random()||.1,x=b.length;for(c&&(k=a===j||a||c);h!==x&&null!=(l=b[h]);h++){if(o&&l){for(f=0,a||l.ownerDocument===j||(O(l),s=!D);p=t[f++];)if(p(l,a||j,s)){u.push(l);break}c&&(q=_)}i&&((l=!p&&l)&&d--,r&&g.push(l))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,a,s);if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=K.call(u));m=v(m)}Q.apply(u,m),c&&!r&&m.length>0&&d+n.length>1&&e.uniqueSort(u)}return c&&(q=_,k=y),g};return i?r(a):a}var b,_,w,x,C,T,$,A,k,E,S,O,j,N,D,I,L,R,P,F="sizzle"+1*new Date,M=t.document,q=0,H=0,B=n(),U=n(),W=n(),z=function(t,e){return t===e&&(S=!0),0},V={}.hasOwnProperty,X=[],K=X.pop,J=X.push,Q=X.push,G=X.slice,Z=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},Y="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",tt="[\\x20\\t\\r\\n\\f]",et="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",nt="\\["+tt+"*("+et+")(?:"+tt+"*([*^$|!~]?=)"+tt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+et+"))|)"+tt+"*\\]",rt=":("+et+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+nt+")*)|.*)\\)|)",it=new RegExp(tt+"+","g"),ot=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g"),at=new RegExp("^"+tt+"*,"+tt+"*"),st=new RegExp("^"+tt+"*([>+~]|"+tt+")"+tt+"*"),ut=new RegExp("="+tt+"*([^\\]'\"]*?)"+tt+"*\\]","g"),ct=new RegExp(rt),lt=new RegExp("^"+et+"$"),ft={ID:new RegExp("^#("+et+")"),CLASS:new RegExp("^\\.("+et+")"),TAG:new RegExp("^("+et+"|[*])"),ATTR:new RegExp("^"+nt),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+tt+"*(even|odd|(([+-]|)(\\d*)n|)"+tt+"*(?:([+-]|)"+tt+"*(\\d+)|))"+tt+"*\\)|)","i"),bool:new RegExp("^(?:"+Y+")$","i"),needsContext:new RegExp("^"+tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+tt+"*((?:-\\d)?\\d*)"+tt+"*\\)|)(?=[^-]|$)","i")},pt=/^(?:input|select|textarea|button)$/i,dt=/^h\d$/i,ht=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gt=/[+~]/,mt=new RegExp("\\\\([\\da-f]{1,6}"+tt+"?|("+tt+")|.)","ig"),yt=function(t,e,n){var r="0x"+e-65536;return r!==r||n?e:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},bt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,_t=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},wt=function(){O()},xt=p(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{Q.apply(X=G.call(M.childNodes),M.childNodes),X[M.childNodes.length].nodeType}catch(t){Q={apply:X.length?function(t,e){J.apply(t,G.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}_=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},O=e.setDocument=function(t){var e,n,r=t?t.ownerDocument||t:M;return r!==j&&9===r.nodeType&&r.documentElement?(j=r,N=j.documentElement,D=!C(j),M!==j&&(n=j.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",wt,!1):n.attachEvent&&n.attachEvent("onunload",wt)),_.attributes=i(function(t){return t.className="i",!t.getAttribute("className")}),_.getElementsByTagName=i(function(t){return t.appendChild(j.createComment("")),!t.getElementsByTagName("*").length}),_.getElementsByClassName=ht.test(j.getElementsByClassName),_.getById=i(function(t){return N.appendChild(t).id=F,!j.getElementsByName||!j.getElementsByName(F).length}),_.getById?(w.filter.ID=function(t){var e=t.replace(mt,yt);return function(t){return t.getAttribute("id")===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&D){var n=e.getElementById(t);return n?[n]:[]}}):(w.filter.ID=function(t){var e=t.replace(mt,yt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&D){var n,r,i,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(i=e.getElementsByName(t),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),w.find.TAG=_.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):_.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=_.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&D)return e.getElementsByClassName(t)},L=[],I=[],(_.qsa=ht.test(j.querySelectorAll))&&(i(function(t){N.appendChild(t).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+tt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||I.push("\\["+tt+"*(?:value|"+Y+")"),t.querySelectorAll("[id~="+F+"-]").length||I.push("~="),t.querySelectorAll(":checked").length||I.push(":checked"),t.querySelectorAll("a#"+F+"+*").length||I.push(".#.+[+~]")}),i(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=j.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&I.push("name"+tt+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&I.push(":enabled",":disabled"),N.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&I.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),I.push(",.*:")})),(_.matchesSelector=ht.test(R=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&i(function(t){_.disconnectedMatch=R.call(t,"*"),R.call(t,"[s!='']:x"),L.push("!=",rt)}),I=I.length&&new RegExp(I.join("|")),L=L.length&&new RegExp(L.join("|")),e=ht.test(N.compareDocumentPosition),P=e||ht.test(N.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},z=e?function(t,e){if(t===e)return S=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!_.sortDetached&&e.compareDocumentPosition(t)===n?t===j||t.ownerDocument===M&&P(M,t)?-1:e===j||e.ownerDocument===M&&P(M,e)?1:E?Z(E,t)-Z(E,e):0:4&n?-1:1)}:function(t,e){if(t===e)return S=!0,0;var n,r=0,i=t.parentNode,o=e.parentNode,s=[t],u=[e];if(!i||!o)return t===j?-1:e===j?1:i?-1:o?1:E?Z(E,t)-Z(E,e):0;if(i===o)return a(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===M?-1:u[r]===M?1:0},j):j},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==j&&O(t),n=n.replace(ut,"='$1']"),_.matchesSelector&&D&&!W[n+" "]&&(!L||!L.test(n))&&(!I||!I.test(n)))try{var r=R.call(t,n);if(r||_.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(t){}return e(n,j,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==j&&O(t),P(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==j&&O(t);var n=w.attrHandle[e.toLowerCase()],r=n&&V.call(w.attrHandle,e.toLowerCase())?n(t,e,!D):void 0;return void 0!==r?r:_.attributes||!D?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},e.escape=function(t){return(t+"").replace(bt,_t)},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],r=0,i=0;if(S=!_.detectDuplicates,E=!_.sortStable&&t.slice(0),t.sort(z),S){for(;e=t[i++];)e===t[i]&&(r=n.push(i));for(;r--;)t.splice(n[r],1)}return E=null,t},x=e.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=x(t)}else if(3===i||4===i)return t.nodeValue}else for(;e=t[r++];)n+=x(e);return n},w=e.selectors={cacheLength:50,createPseudo:r,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(mt,yt),t[3]=(t[3]||t[4]||t[5]||"").replace(mt,yt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ft.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ct.test(n)&&(e=T(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(mt,yt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+tt+")"+t+"("+tt+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(it," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var c,l,f,p,d,h,v=o!==a?"nextSibling":"previousSibling",g=e.parentNode,m=s&&e.nodeName.toLowerCase(),y=!u&&!s,b=!1;if(g){if(o){for(;v;){for(p=e;p=p[v];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(p=g,f=p[F]||(p[F]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),c=l[t]||[],d=c[0]===q&&c[1],b=d&&c[2],p=d&&g.childNodes[d];p=++d&&p&&p[v]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===e){l[t]=[q,d,b];break}}else if(y&&(p=e,f=p[F]||(p[F]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),c=l[t]||[],d=c[0]===q&&c[1],b=d),!1===b)for(;(p=++d&&p&&p[v]||(b=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++b||(y&&(f=p[F]||(p[F]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),l[t]=[q,b]),p!==e)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(t,n){var i,o=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(n):o.length>1?(i=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,e){for(var r,i=o(t,n),a=i.length;a--;)r=Z(t,i[a]),t[r]=!(e[r]=i[a])}):function(t){return o(t,0,i)}):o}},pseudos:{not:r(function(t){var e=[],n=[],i=$(t.replace(ot,"$1"));return i[F]?r(function(t,e,n,r){for(var o,a=i(t,null,r,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))}):function(t,r,o){return e[0]=t,i(e,null,o,n),e[0]=null,!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(t){return t=t.replace(mt,yt),function(e){return(e.textContent||e.innerText||x(e)).indexOf(t)>-1}}),lang:r(function(t){return lt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(mt,yt).toLowerCase(),function(e){var n;do{if(n=D?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===N},focus:function(t){return t===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:s(!1),disabled:s(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!w.pseudos.empty(t)},header:function(t){return dt.test(t.nodeName)},input:function(t){return pt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[n<0?n+e:n]}),even:u(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:u(function(t,e,n){for(var r=n<0?n+e:n;--r>=0;)t.push(r);return t}),gt:u(function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t})}},w.pseudos.nth=w.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[b]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(b);for(b in{submit:!0,reset:!0})w.pseudos[b]=function(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}(b);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,T=e.tokenize=function(t,n){var r,i,o,a,s,u,c,l=U[t+" "];if(l)return n?0:l.slice(0);for(s=t,u=[],c=w.preFilter;s;){r&&!(i=at.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=st.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ot," ")}),s=s.slice(r.length));for(a in w.filter)!(i=ft[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):U(t,u).slice(0)},$=e.compile=function(t,e){var n,r=[],i=[],o=W[t+" "];if(!o){for(e||(e=T(t)),n=e.length;n--;)o=m(e[n]),o[F]?r.push(o):i.push(o);o=W(t,y(i,r)),o.selector=t}return o},A=e.select=function(t,e,n,r){var i,o,a,s,u,l="function"==typeof t&&t,p=!r&&T(t=l.selector||t);if(n=n||[],1===p.length){if(o=p[0]=p[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===e.nodeType&&D&&w.relative[o[1].type]){if(!(e=(w.find.ID(a.matches[0].replace(mt,yt),e)||[])[0]))return n;l&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(i=ft.needsContext.test(t)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(mt,yt),gt.test(o[0].type)&&c(e.parentNode)||e))){if(o.splice(i,1),!(t=r.length&&f(o)))return Q.apply(n,r),n;break}}return(l||$(t,p))(r,e,!D,n,!e||gt.test(t)&&c(e.parentNode)||e),n},_.sortStable=F.split("").sort(z).join("")===F,_.detectDuplicates=!!S,O(),_.sortDetached=i(function(t){return 1&t.compareDocumentPosition(j.createElement("fieldset"))}),i(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||o("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),_.attributes&&i(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||o("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),i(function(t){return null==t.getAttribute("disabled")})||o(Y,function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),e}(n);yt.find=Ct,yt.expr=Ct.selectors,yt.expr[":"]=yt.expr.pseudos,yt.uniqueSort=yt.unique=Ct.uniqueSort,yt.text=Ct.getText,yt.isXMLDoc=Ct.isXML,yt.contains=Ct.contains,yt.escapeSelector=Ct.escape;var Tt=function(t,e,n){for(var r=[],i=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(i&&yt(t).is(n))break;r.push(t)}return r},$t=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},At=yt.expr.match.needsContext,kt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Et=/^.[^:#\[\.,]*$/;yt.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?yt.find.matchesSelector(r,t)?[r]:[]:yt.find.matches(t,yt.grep(e,function(t){return 1===t.nodeType}))},yt.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!=typeof t)return this.pushStack(yt(t).filter(function(){for(e=0;e<r;e++)if(yt.contains(i[e],this))return!0}));for(n=this.pushStack([]),e=0;e<r;e++)yt.find(t,i[e],n);return r>1?yt.uniqueSort(n):n},filter:function(t){return this.pushStack(c(this,t||[],!1))},not:function(t){return this.pushStack(c(this,t||[],!0))},is:function(t){return!!c(this,"string"==typeof t&&At.test(t)?yt(t):t||[],!1).length}});var St,Ot=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(yt.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||St,"string"==typeof t){if(!(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:Ot.exec(t))||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof yt?e[0]:e,yt.merge(this,yt.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:at,!0)),kt.test(r[1])&&yt.isPlainObject(e))for(r in e)yt.isFunction(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return i=at.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):yt.isFunction(t)?void 0!==n.ready?n.ready(t):t(yt):yt.makeArray(t,this)}).prototype=yt.fn,St=yt(at);var jt=/^(?:parents|prev(?:Until|All))/,Nt={children:!0,contents:!0,next:!0,prev:!0};yt.fn.extend({has:function(t){var e=yt(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(yt.contains(this,e[t]))return!0})},closest:function(t,e){var n,r=0,i=this.length,o=[],a="string"!=typeof t&&yt(t);if(!At.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&yt.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?yt.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?ft.call(yt(t),this[0]):ft.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(yt.uniqueSort(yt.merge(this.get(),yt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),yt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return Tt(t,"parentNode")},parentsUntil:function(t,e,n){return Tt(t,"parentNode",n)},next:function(t){return l(t,"nextSibling")},prev:function(t){return l(t,"previousSibling")},nextAll:function(t){return Tt(t,"nextSibling")},prevAll:function(t){return Tt(t,"previousSibling")},nextUntil:function(t,e,n){return Tt(t,"nextSibling",n)},prevUntil:function(t,e,n){return Tt(t,"previousSibling",n)},siblings:function(t){return $t((t.parentNode||{}).firstChild,t)},children:function(t){return $t(t.firstChild)},contents:function(t){return u(t,"iframe")?t.contentDocument:(u(t,"template")&&(t=t.content||t),yt.merge([],t.childNodes))}},function(t,e){yt.fn[t]=function(n,r){var i=yt.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=yt.filter(r,i)),this.length>1&&(Nt[t]||yt.uniqueSort(i),jt.test(t)&&i.reverse()),this.pushStack(i)}});var Dt=/[^\x20\t\r\n\f]+/g;yt.Callbacks=function(t){t="string"==typeof t?f(t):yt.extend({},t);var e,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||t.once,r=e=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&t.stopOnFalse&&(s=o.length,n=!1);t.memory||(n=!1),e=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!e&&(s=o.length-1,a.push(n)),function e(n){yt.each(n,function(n,r){yt.isFunction(r)?t.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==yt.type(r)&&e(r)})}(arguments),n&&!e&&u()),this},remove:function(){return yt.each(arguments,function(t,e){for(var n;(n=yt.inArray(e,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(t){return t?yt.inArray(t,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||e||(o=n=""),this},locked:function(){return!!i},fireWith:function(t,n){return i||(n=n||[],n=[t,n.slice?n.slice():n],a.push(n),e||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},yt.extend({Deferred:function(t){var e=[["notify","progress",yt.Callbacks("memory"),yt.Callbacks("memory"),2],["resolve","done",yt.Callbacks("once memory"),yt.Callbacks("once memory"),0,"resolved"],["reject","fail",yt.Callbacks("once memory"),yt.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return yt.Deferred(function(n){yt.each(e,function(e,r){var i=yt.isFunction(t[r[4]])&&t[r[4]];o[r[1]](function(){var t=i&&i.apply(this,arguments);t&&yt.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[t]:arguments)})}),t=null}).promise()},then:function(t,r,i){function o(t,e,r,i){return function(){var s=this,u=arguments,c=function(){var n,c;if(!(t<a)){if((n=r.apply(s,u))===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,yt.isFunction(c)?i?c.call(n,o(a,e,p,i),o(a,e,d,i)):(a++,c.call(n,o(a,e,p,i),o(a,e,d,i),o(a,e,p,e.notifyWith))):(r!==p&&(s=void 0,u=[n]),(i||e.resolveWith)(s,u))}},l=i?c:function(){try{c()}catch(n){yt.Deferred.exceptionHook&&yt.Deferred.exceptionHook(n,l.stackTrace),t+1>=a&&(r!==d&&(s=void 0,u=[n]),e.rejectWith(s,u))}};t?l():(yt.Deferred.getStackHook&&(l.stackTrace=yt.Deferred.getStackHook()),n.setTimeout(l))}}var a=0;return yt.Deferred(function(n){e[0][3].add(o(0,n,yt.isFunction(i)?i:p,n.notifyWith)),e[1][3].add(o(0,n,yt.isFunction(t)?t:p)),e[2][3].add(o(0,n,yt.isFunction(r)?r:d))}).promise()},promise:function(t){return null!=t?yt.extend(t,i):i}},o={};return yt.each(e,function(t,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add(function(){r=s},e[3-t][2].disable,e[0][2].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,n=e,r=Array(n),i=ut.call(arguments),o=yt.Deferred(),a=function(t){return function(n){r[t]=this,i[t]=arguments.length>1?ut.call(arguments):n,--e||o.resolveWith(r,i)}};if(e<=1&&(h(t,o.done(a(n)).resolve,o.reject,!e),"pending"===o.state()||yt.isFunction(i[n]&&i[n].then)))return o.then();for(;n--;)h(i[n],a(n),o.reject);return o.promise()}});var It=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;yt.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&It.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},yt.readyException=function(t){n.setTimeout(function(){throw t})};var Lt=yt.Deferred();yt.fn.ready=function(t){return Lt.then(t).catch(function(t){yt.readyException(t)}),this},yt.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--yt.readyWait:yt.isReady)||(yt.isReady=!0,!0!==t&&--yt.readyWait>0||Lt.resolveWith(at,[yt]))}}),yt.ready.then=Lt.then,"complete"===at.readyState||"loading"!==at.readyState&&!at.documentElement.doScroll?n.setTimeout(yt.ready):(at.addEventListener("DOMContentLoaded",v),n.addEventListener("load",v));var Rt=function(t,e,n,r,i,o,a){var s=0,u=t.length,c=null==n;if("object"===yt.type(n)){i=!0;for(s in n)Rt(t,e,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,yt.isFunction(r)||(a=!0),c&&(a?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(yt(t),n)})),e))for(;s<u;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:c?e.call(t):u?e(t[0],n):o},Pt=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};g.uid=1,g.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Pt(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"==typeof e)i[yt.camelCase(e)]=n;else for(r in e)i[yt.camelCase(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][yt.camelCase(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){Array.isArray(e)?e=e.map(yt.camelCase):(e=yt.camelCase(e),e=e in r?[e]:e.match(Dt)||[]),n=e.length;for(;n--;)delete r[e[n]]}(void 0===e||yt.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!yt.isEmptyObject(e)}};var Ft=new g,Mt=new g,qt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ht=/[A-Z]/g;yt.extend({hasData:function(t){return Mt.hasData(t)||Ft.hasData(t)},data:function(t,e,n){return Mt.access(t,e,n)},removeData:function(t,e){Mt.remove(t,e)},_data:function(t,e,n){return Ft.access(t,e,n)},_removeData:function(t,e){Ft.remove(t,e)}}),yt.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(i=Mt.get(o),1===o.nodeType&&!Ft.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=yt.camelCase(r.slice(5)),y(o,r,i[r])));Ft.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof t?this.each(function(){Mt.set(this,t)}):Rt(this,function(e){var n;if(o&&void 0===e){if(void 0!==(n=Mt.get(o,t)))return n;if(void 0!==(n=y(o,t)))return n}else this.each(function(){Mt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Mt.remove(this,t)})}}),yt.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=Ft.get(t,e),n&&(!r||Array.isArray(n)?r=Ft.access(t,e,yt.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=yt.queue(t,e),r=n.length,i=n.shift(),o=yt._queueHooks(t,e),a=function(){yt.dequeue(t,e)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Ft.get(t,n)||Ft.access(t,n,{empty:yt.Callbacks("once memory").add(function(){Ft.remove(t,[e+"queue",n])})})}}),yt.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?yt.queue(this[0],t):void 0===e?this:this.each(function(){var n=yt.queue(this,t,e);yt._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&yt.dequeue(this,t)})},dequeue:function(t){return this.each(function(){yt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=yt.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(n=Ft.get(o[a],t+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var Bt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ut=new RegExp("^(?:([+-])=|)("+Bt+")([a-z%]*)$","i"),Wt=["Top","Right","Bottom","Left"],zt=function(t,e){return t=e||t,"none"===t.style.display||""===t.style.display&&yt.contains(t.ownerDocument,t)&&"none"===yt.css(t,"display")},Vt=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i},Xt={};yt.fn.extend({show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){zt(this)?yt(this).show():yt(this).hide()})}});var Kt=/^(?:checkbox|radio)$/i,Jt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Qt=/^$|\/(?:java|ecma)script/i,Gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Gt.optgroup=Gt.option,Gt.tbody=Gt.tfoot=Gt.colgroup=Gt.caption=Gt.thead,Gt.th=Gt.td;var Zt=/<|&#?\w+;/;!function(){var t=at.createDocumentFragment(),e=t.appendChild(at.createElement("div")),n=at.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),mt.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",mt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Yt=at.documentElement,te=/^key/,ee=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ne=/^([^.]*)(?:\.(.+)|)/;yt.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Ft.get(t);if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&yt.find.matchesSelector(Yt,i),n.guid||(n.guid=yt.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(e){return void 0!==yt&&yt.event.triggered!==e.type?yt.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(Dt)||[""],c=e.length;c--;)s=ne.exec(e[c])||[],d=v=s[1],h=(s[2]||"").split(".").sort(),d&&(f=yt.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=yt.event.special[d]||{},l=yt.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&yt.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),yt.event.global[d]=!0)},remove:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Ft.hasData(t)&&Ft.get(t);if(g&&(u=g.events)){for(e=(e||"").match(Dt)||[""],c=e.length;c--;)if(s=ne.exec(e[c])||[],d=v=s[1],h=(s[2]||"").split(".").sort(),d){for(f=yt.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(t,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(t,h,g.handle)||yt.removeEvent(t,d,g.handle),delete u[d])}else for(d in u)yt.event.remove(t,d+e[c],n,r,!0);yt.isEmptyObject(u)&&Ft.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,o,a,s=yt.event.fix(t),u=new Array(arguments.length),c=(Ft.get(this,"events")||{})[s.type]||[],l=yt.event.special[s.type]||{};for(u[0]=s,e=1;e<arguments.length;e++)u[e]=arguments[e];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=yt.event.handlers.call(this,s,c),e=0;(i=a[e++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((yt.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(t,e){var n,r,i,o,a,s=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)r=e[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?yt(i,this).index(c)>-1:yt.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<e.length&&s.push({elem:c,handlers:e.slice(u)}),s},addProp:function(t,e){Object.defineProperty(yt.Event.prototype,t,{enumerable:!0,configurable:!0,get:yt.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[yt.expando]?t:new yt.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==k()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===k()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},_default:function(t){return u(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},yt.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},yt.Event=function(t,e){if(!(this instanceof yt.Event))return new yt.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?$:A,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&yt.extend(this,e),this.timeStamp=t&&t.timeStamp||yt.now(),this[yt.expando]=!0},yt.Event.prototype={constructor:yt.Event,isDefaultPrevented:A,isPropagationStopped:A,isImmediatePropagationStopped:A,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=$,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=$,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=$,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},yt.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&te.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&ee.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},yt.event.addProp),yt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){yt.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;return i&&(i===r||yt.contains(r,i))||(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n}}}),yt.fn.extend({on:function(t,e,n,r){return E(this,t,e,n,r)},one:function(t,e,n,r){return E(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,yt(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=A),this.each(function(){yt.event.remove(this,t,n,e)})}});var re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ie=/<script|<style|<link/i,oe=/checked\s*(?:[^=]|=\s*.checked.)/i,ae=/^true\/(.*)/,se=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;yt.extend({htmlPrefilter:function(t){return t.replace(re,"<$1></$2>")},clone:function(t,e,n){var r,i,o,a,s=t.cloneNode(!0),u=yt.contains(t.ownerDocument,t);if(!(mt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||yt.isXMLDoc(t)))for(a=x(s),o=x(t),r=0,i=o.length;r<i;r++)D(o[r],a[r]);if(e)if(n)for(o=o||x(t),a=a||x(s),r=0,i=o.length;r<i;r++)N(o[r],a[r]);else N(t,s);return a=x(s,"script"),a.length>0&&C(a,!u&&x(t,"script")),s},cleanData:function(t){for(var e,n,r,i=yt.event.special,o=0;void 0!==(n=t[o]);o++)if(Pt(n)){if(e=n[Ft.expando]){if(e.events)for(r in e.events)i[r]?yt.event.remove(n,r):yt.removeEvent(n,r,e.handle);n[Ft.expando]=void 0}n[Mt.expando]&&(n[Mt.expando]=void 0)}}}),yt.fn.extend({detach:function(t){return L(this,t,!0)},remove:function(t){return L(this,t)},text:function(t){return Rt(this,function(t){return void 0===t?yt.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return I(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){S(this,t).appendChild(t)}})},prepend:function(){return I(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=S(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return I(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return I(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(yt.cleanData(x(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return yt.clone(this,t,e)})},html:function(t){return Rt(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!ie.test(t)&&!Gt[(Jt.exec(t)||["",""])[1].toLowerCase()]){t=yt.htmlPrefilter(t);try{for(;n<r;n++)e=this[n]||{},1===e.nodeType&&(yt.cleanData(x(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return I(this,arguments,function(e){var n=this.parentNode;yt.inArray(this,t)<0&&(yt.cleanData(x(this)),n&&n.replaceChild(e,this))},t)}}),yt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){yt.fn[t]=function(t){for(var n,r=[],i=yt(t),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),yt(i[a])[e](n),lt.apply(r,n.get());return this.pushStack(r)}});var ue=/^margin/,ce=new RegExp("^("+Bt+")(?!px)[a-z%]+$","i"),le=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)};!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Yt.appendChild(a);var t=n.getComputedStyle(s);e="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Yt.removeChild(a),s=null}}var e,r,i,o,a=at.createElement("div"),s=at.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",mt.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),yt.extend(mt,{pixelPosition:function(){return t(),e},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}();var fe=/^(none|table(?!-c[ea]).+)/,pe=/^--/,de={position:"absolute",visibility:"hidden",display:"block"},he={letterSpacing:"0",fontWeight:"400"},ve=["Webkit","Moz","ms"],ge=at.createElement("div").style;yt.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=R(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=yt.camelCase(e),u=pe.test(e),c=t.style;if(u||(e=M(s)),a=yt.cssHooks[e]||yt.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:c[e];o=typeof n,"string"===o&&(i=Ut.exec(n))&&i[1]&&(n=b(t,e,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(yt.cssNumber[s]?"":"px")),mt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(n=a.set(t,n,r))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,o,a,s=yt.camelCase(e);return pe.test(e)||(e=M(s)),a=yt.cssHooks[e]||yt.cssHooks[s],a&&"get"in a&&(i=a.get(t,!0,n)),void 0===i&&(i=R(t,e,r)),"normal"===i&&e in he&&(i=he[e]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),yt.each(["height","width"],function(t,e){yt.cssHooks[e]={get:function(t,n,r){if(n)return!fe.test(yt.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?B(t,e,r):Vt(t,de,function(){return B(t,e,r)})},set:function(t,n,r){var i,o=r&&le(t),a=r&&H(t,e,r,"border-box"===yt.css(t,"boxSizing",!1,o),o);return a&&(i=Ut.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=yt.css(t,e)),q(t,n,a)}}}),yt.cssHooks.marginLeft=P(mt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(R(t,"marginLeft"))||t.getBoundingClientRect().left-Vt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),yt.each({margin:"",padding:"",border:"Width"},function(t,e){yt.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[t+Wt[r]+e]=o[r]||o[r-2]||o[0];return i}},ue.test(t)||(yt.cssHooks[t+e].set=q)}),yt.fn.extend({css:function(t,e){return Rt(this,function(t,e,n){var r,i,o={},a=0;if(Array.isArray(e)){for(r=le(t),i=e.length;a<i;a++)o[e[a]]=yt.css(t,e[a],!1,r);return o}return void 0!==n?yt.style(t,e,n):yt.css(t,e)},t,e,arguments.length>1)}}),yt.Tween=U,U.prototype={constructor:U,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||yt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(yt.cssNumber[n]?"":"px")},cur:function(){var t=U.propHooks[this.prop];return t&&t.get?t.get(this):U.propHooks._default.get(this)},run:function(t){var e,n=U.propHooks[this.prop];return this.options.duration?this.pos=e=yt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):U.propHooks._default.set(this),this}},U.prototype.init.prototype=U.prototype,U.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=yt.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){yt.fx.step[t.prop]?yt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[yt.cssProps[t.prop]]&&!yt.cssHooks[t.prop]?t.elem[t.prop]=t.now:yt.style(t.elem,t.prop,t.now+t.unit)}}},U.propHooks.scrollTop=U.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},yt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},yt.fx=U.prototype.init,yt.fx.step={};var me,ye,be=/^(?:toggle|show|hide)$/,_e=/queueHooks$/;yt.Animation=yt.extend(Q,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return b(n.elem,t,Ut.exec(e),n),n}]},tweener:function(t,e){yt.isFunction(t)?(e=t,t=["*"]):t=t.match(Dt);for(var n,r=0,i=t.length;r<i;r++)n=t[r],Q.tweeners[n]=Q.tweeners[n]||[],Q.tweeners[n].unshift(e)},prefilters:[K],prefilter:function(t,e){e?Q.prefilters.unshift(t):Q.prefilters.push(t)}}),yt.speed=function(t,e,n){var r=t&&"object"==typeof t?yt.extend({},t):{complete:n||!n&&e||yt.isFunction(t)&&t,duration:t,easing:n&&e||e&&!yt.isFunction(e)&&e};return yt.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in yt.fx.speeds?r.duration=yt.fx.speeds[r.duration]:r.duration=yt.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){yt.isFunction(r.old)&&r.old.call(this),r.queue&&yt.dequeue(this,r.queue)},r},yt.fn.extend({fadeTo:function(t,e,n,r){return this.filter(zt).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=yt.isEmptyObject(t),o=yt.speed(e,n,r),a=function(){var e=Q(this,yt.extend({},t),o);(i||Ft.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=yt.timers,a=Ft.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&_e.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));!e&&n||yt.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=Ft.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=yt.timers,a=r?r.length:0;for(n.finish=!0,yt.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<a;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),yt.each(["toggle","show","hide"],function(t,e){var n=yt.fn[e];yt.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(V(e,!0),t,r,i)}}),yt.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){yt.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),yt.timers=[],yt.fx.tick=function(){var t,e=0,n=yt.timers;for(me=yt.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||yt.fx.stop(),me=void 0},yt.fx.timer=function(t){yt.timers.push(t),yt.fx.start()},yt.fx.interval=13,yt.fx.start=function(){ye||(ye=!0,W())},yt.fx.stop=function(){ye=null},yt.fx.speeds={slow:600,fast:200,_default:400},yt.fn.delay=function(t,e){return t=yt.fx?yt.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,r){var i=n.setTimeout(e,t);r.stop=function(){n.clearTimeout(i)}})},function(){var t=at.createElement("input"),e=at.createElement("select"),n=e.appendChild(at.createElement("option"));t.type="checkbox",mt.checkOn=""!==t.value,mt.optSelected=n.selected,t=at.createElement("input"),t.value="t",t.type="radio",mt.radioValue="t"===t.value}();var we,xe=yt.expr.attrHandle;yt.fn.extend({attr:function(t,e){return Rt(this,yt.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){yt.removeAttr(this,t)})}}),yt.extend({attr:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?yt.prop(t,e,n):(1===o&&yt.isXMLDoc(t)||(i=yt.attrHooks[e.toLowerCase()]||(yt.expr.match.bool.test(e)?we:void 0)),void 0!==n?null===n?void yt.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:(r=yt.find.attr(t,e),null==r?void 0:r))},attrHooks:{type:{set:function(t,e){if(!mt.radioValue&&"radio"===e&&u(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(Dt);if(i&&1===t.nodeType)for(;n=i[r++];)t.removeAttribute(n)}}),we={set:function(t,e,n){return!1===e?yt.removeAttr(t,n):t.setAttribute(n,n),n}},yt.each(yt.expr.match.bool.source.match(/\w+/g),function(t,e){var n=xe[e]||yt.find.attr;xe[e]=function(t,e,r){var i,o,a=e.toLowerCase();return r||(o=xe[a],xe[a]=i,i=null!=n(t,e,r)?a:null,xe[a]=o),i}});var Ce=/^(?:input|select|textarea|button)$/i,Te=/^(?:a|area)$/i;yt.fn.extend({prop:function(t,e){return Rt(this,yt.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[yt.propFix[t]||t]})}}),yt.extend({prop:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&yt.isXMLDoc(t)||(e=yt.propFix[e]||e,i=yt.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=yt.find.attr(t,"tabindex");return e?parseInt(e,10):Ce.test(t.nodeName)||Te.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),mt.optSelected||(yt.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),yt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){yt.propFix[this.toLowerCase()]=this}),yt.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(yt.isFunction(t))return this.each(function(e){yt(this).addClass(t.call(this,e,Z(this)))});if("string"==typeof t&&t)for(e=t.match(Dt)||[];n=this[u++];)if(i=Z(n),r=1===n.nodeType&&" "+G(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=G(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(yt.isFunction(t))return this.each(function(e){yt(this).removeClass(t.call(this,e,Z(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(Dt)||[];n=this[u++];)if(i=Z(n),r=1===n.nodeType&&" "+G(i)+" "){for(a=0;o=e[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=G(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):yt.isFunction(t)?this.each(function(n){yt(this).toggleClass(t.call(this,n,Z(this),e),e)}):this.each(function(){var e,r,i,o;if("string"===n)for(r=0,i=yt(this),o=t.match(Dt)||[];e=o[r++];)i.hasClass(e)?i.removeClass(e):i.addClass(e);else void 0!==t&&"boolean"!==n||(e=Z(this),e&&Ft.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Ft.get(this,"__className__")||""))})},hasClass:function(t){var e,n,r=0;for(e=" "+t+" ";n=this[r++];)if(1===n.nodeType&&(" "+G(Z(n))+" ").indexOf(e)>-1)return!0;return!1}});var $e=/\r/g;yt.fn.extend({val:function(t){var e,n,r,i=this[0];{if(arguments.length)return r=yt.isFunction(t),this.each(function(n){var i;1===this.nodeType&&(i=r?t.call(this,n,yt(this).val()):t,null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=yt.map(i,function(t){return null==t?"":t+""})),(e=yt.valHooks[this.type]||yt.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))});if(i)return(e=yt.valHooks[i.type]||yt.valHooks[i.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace($e,""):null==n?"":n)}}}),yt.extend({valHooks:{option:{get:function(t){var e=yt.find.attr(t,"value");return null!=e?e:G(yt.text(t))}},select:{get:function(t){var e,n,r,i=t.options,o=t.selectedIndex,a="select-one"===t.type,s=a?null:[],c=a?o+1:i.length;for(r=o<0?c:a?o:0;r<c;r++)if(n=i[r],(n.selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){if(e=yt(n).val(),a)return e;s.push(e)}return s},set:function(t,e){for(var n,r,i=t.options,o=yt.makeArray(e),a=i.length;a--;)r=i[a],(r.selected=yt.inArray(yt.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),yt.each(["radio","checkbox"],function(){yt.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=yt.inArray(yt(t).val(),e)>-1}},mt.checkOn||(yt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var Ae=/^(?:focusinfocus|focusoutblur)$/;yt.extend(yt.event,{trigger:function(t,e,r,i){var o,a,s,u,c,l,f,p=[r||at],d=ht.call(t,"type")?t.type:t,h=ht.call(t,"namespace")?t.namespace.split("."):[];if(a=s=r=r||at,3!==r.nodeType&&8!==r.nodeType&&!Ae.test(d+yt.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),c=d.indexOf(":")<0&&"on"+d,t=t[yt.expando]?t:new yt.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:yt.makeArray(e,[t]),f=yt.event.special[d]||{},i||!f.trigger||!1!==f.trigger.apply(r,e))){if(!i&&!f.noBubble&&!yt.isWindow(r)){for(u=f.delegateType||d,Ae.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||at)&&p.push(s.defaultView||s.parentWindow||n)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,l=(Ft.get(a,"events")||{})[t.type]&&Ft.get(a,"handle"),l&&l.apply(a,e),(l=c&&a[c])&&l.apply&&Pt(a)&&(t.result=l.apply(a,e),!1===t.result&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),e)||!Pt(r)||c&&yt.isFunction(r[d])&&!yt.isWindow(r)&&(s=r[c],s&&(r[c]=null),yt.event.triggered=d,r[d](),yt.event.triggered=void 0,s&&(r[c]=s)),t.result}},simulate:function(t,e,n){var r=yt.extend(new yt.Event,n,{type:t,isSimulated:!0});yt.event.trigger(r,null,e)}}),yt.fn.extend({trigger:function(t,e){return this.each(function(){yt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return yt.event.trigger(t,e,n,!0)}}),yt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){yt.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),yt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),mt.focusin="onfocusin"in n,mt.focusin||yt.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){yt.event.simulate(e,t.target,yt.event.fix(t))};yt.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=Ft.access(r,e);i||r.addEventListener(t,n,!0),Ft.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ft.access(r,e)-1;i?Ft.access(r,e,i):(r.removeEventListener(t,n,!0),Ft.remove(r,e))}}});var ke=n.location,Ee=yt.now(),Se=/\?/;yt.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||yt.error("Invalid XML: "+t),e};var Oe=/\[\]$/,je=/\r?\n/g,Ne=/^(?:submit|button|image|reset|file)$/i,De=/^(?:input|select|textarea|keygen)/i;yt.param=function(t,e){var n,r=[],i=function(t,e){var n=yt.isFunction(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!yt.isPlainObject(t))yt.each(t,function(){i(this.name,this.value)});else for(n in t)Y(n,t[n],e,i);return r.join("&")},yt.fn.extend({serialize:function(){return yt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=yt.prop(this,"elements");return t?yt.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!yt(this).is(":disabled")&&De.test(this.nodeName)&&!Ne.test(t)&&(this.checked||!Kt.test(t))}).map(function(t,e){var n=yt(this).val();return null==n?null:Array.isArray(n)?yt.map(n,function(t){return{name:e.name,value:t.replace(je,"\r\n")}}):{name:e.name,value:n.replace(je,"\r\n")}}).get()}});var Ie=/%20/g,Le=/#.*$/,Re=/([?&])_=[^&]*/,Pe=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Me=/^(?:GET|HEAD)$/,qe=/^\/\//,He={},Be={},Ue="*/".concat("*"),We=at.createElement("a");We.href=ke.href,yt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ke.href,type:"GET",isLocal:Fe.test(ke.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ue,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":yt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?nt(nt(t,yt.ajaxSettings),e):nt(yt.ajaxSettings,t)},ajaxPrefilter:tt(He),ajaxTransport:tt(Be),ajax:function(t,e){function r(t,e,r,s){var c,p,d,_,w,x=e;l||(l=!0,u&&n.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(_=rt(h,C,r)),_=it(h,_,C,c),c?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(yt.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(yt.etag[o]=w)),204===t||"HEAD"===h.type?x="nocontent":304===t?x="notmodified":(x=_.state,p=_.data,d=_.error,c=!d)):(d=x,!t&&x||(x="error",t<0&&(t=0))),C.status=t,C.statusText=(e||x)+"",c?m.resolveWith(v,[p,x,C]):m.rejectWith(v,[C,x,d]),C.statusCode(b),b=void 0,f&&g.trigger(c?"ajaxSuccess":"ajaxError",[C,h,c?p:d]),y.fireWith(v,[C,x]),f&&(g.trigger("ajaxComplete",[C,h]),--yt.active||yt.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,o,a,s,u,c,l,f,p,d,h=yt.ajaxSetup({},e),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?yt(v):yt.event,m=yt.Deferred(),y=yt.Callbacks("once memory"),b=h.statusCode||{},_={},w={},x="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(l){if(!s)for(s={};e=Pe.exec(a);)s[e[1].toLowerCase()]=e[2];e=s[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return l?a:null},setRequestHeader:function(t,e){return null==l&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,_[t]=e),this},overrideMimeType:function(t){return null==l&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(l)C.always(t[C.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||x;return i&&i.abort(e),r(0,e),this}};if(m.promise(C),h.url=((t||h.url||ke.href)+"").replace(qe,ke.protocol+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Dt)||[""],null==h.crossDomain){c=at.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=We.protocol+"//"+We.host!=c.protocol+"//"+c.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=yt.param(h.data,h.traditional)),et(He,h,e,C),l)return C;f=yt.event&&h.global,f&&0==yt.active++&&yt.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Me.test(h.type),o=h.url.replace(Le,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ie,"+")):(d=h.url.slice(o.length),h.data&&(o+=(Se.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Re,"$1"),d=(Se.test(o)?"&":"?")+"_="+Ee+++d),h.url=o+d),h.ifModified&&(yt.lastModified[o]&&C.setRequestHeader("If-Modified-Since",yt.lastModified[o]),yt.etag[o]&&C.setRequestHeader("If-None-Match",yt.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||e.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Ue+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(v,C,h)||l))return C.abort();if(x="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=et(Be,h,e,C)){if(C.readyState=1,f&&g.trigger("ajaxSend",[C,h]),l)return C;h.async&&h.timeout>0&&(u=n.setTimeout(function(){C.abort("timeout")},h.timeout));try{l=!1,i.send(_,r)}catch(t){if(l)throw t;r(-1,t)}}else r(-1,"No Transport");return C},getJSON:function(t,e,n){return yt.get(t,e,n,"json")},getScript:function(t,e){return yt.get(t,void 0,e,"script")}}),yt.each(["get","post"],function(t,e){yt[e]=function(t,n,r,i){return yt.isFunction(n)&&(i=i||r,r=n,n=void 0),yt.ajax(yt.extend({url:t,type:e,dataType:i,data:n,success:r},yt.isPlainObject(t)&&t))}}),yt._evalUrl=function(t){return yt.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},yt.fn.extend({wrapAll:function(t){var e;return this[0]&&(yt.isFunction(t)&&(t=t.call(this[0])),e=yt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return yt.isFunction(t)?this.each(function(e){yt(this).wrapInner(t.call(this,e))}):this.each(function(){var e=yt(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=yt.isFunction(t);return this.each(function(n){yt(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){yt(this).replaceWith(this.childNodes)}),this}}),yt.expr.pseudos.hidden=function(t){return!yt.expr.pseudos.visible(t)},yt.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},yt.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var ze={0:200,1223:204},Ve=yt.ajaxSettings.xhr();mt.cors=!!Ve&&"withCredentials"in Ve,mt.ajax=Ve=!!Ve,yt.ajaxTransport(function(t){var e,r;if(mt.cors||Ve&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);e=function(t){return function(){e&&(e=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(ze[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=e(),r=s.onerror=e("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){e&&r()})},e=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),yt.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),yt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return yt.globalEval(t),t}}}),yt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),yt.ajaxTransport("script",function(t){if(t.crossDomain){var e,n;return{send:function(r,i){e=yt("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),at.head.appendChild(e[0])},abort:function(){n&&n()}}}});var Xe=[],Ke=/(=)\?(?=&|$)|\?\?/;yt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Xe.pop()||yt.expando+"_"+Ee++;return this[t]=!0,t}}),yt.ajaxPrefilter("json jsonp",function(t,e,r){var i,o,a,s=!1!==t.jsonp&&(Ke.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ke.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=yt.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ke,"$1"+i):!1!==t.jsonp&&(t.url+=(Se.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||yt.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){void 0===o?yt(n).removeProp(i):n[i]=o,t[i]&&(t.jsonpCallback=e.jsonpCallback,Xe.push(i)),a&&yt.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),mt.createHTMLDocument=function(){var t=at.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),yt.parseHTML=function(t,e,n){if("string"!=typeof t)return[];"boolean"==typeof e&&(n=e,e=!1);var r,i,o;return e||(mt.createHTMLDocument?(e=at.implementation.createHTMLDocument(""),r=e.createElement("base"),r.href=at.location.href,e.head.appendChild(r)):e=at),i=kt.exec(t),o=!n&&[],i?[e.createElement(i[1])]:(i=T([t],e,o),o&&o.length&&yt(o).remove(),yt.merge([],i.childNodes))},yt.fn.load=function(t,e,n){var r,i,o,a=this,s=t.indexOf(" ");return s>-1&&(r=G(t.slice(s)),t=t.slice(0,s)),yt.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(i="POST"),a.length>0&&yt.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done(function(t){o=arguments,a.html(r?yt("<div>").append(yt.parseHTML(t)).find(r):t)}).always(n&&function(t,e){a.each(function(){n.apply(this,o||[t.responseText,e,t])})}),this},yt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){yt.fn[e]=function(t){return this.on(e,t)}}),yt.expr.pseudos.animated=function(t){return yt.grep(yt.timers,function(e){return t===e.elem}).length},yt.offset={setOffset:function(t,e,n){var r,i,o,a,s,u,c,l=yt.css(t,"position"),f=yt(t),p={};"static"===l&&(t.style.position="relative"),s=f.offset(),o=yt.css(t,"top"),u=yt.css(t,"left"),c=("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1,c?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),yt.isFunction(e)&&(e=e.call(t,n,yt.extend({},s))),null!=e.top&&(p.top=e.top-s.top+a),null!=e.left&&(p.left=e.left-s.left+i),"using"in e?e.using.call(t,p):f.css(p)}},yt.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){yt.offset.setOffset(this,t,e)});var e,n,r,i,o=this[0];if(o)return o.getClientRects().length?(r=o.getBoundingClientRect(),e=o.ownerDocument,n=e.documentElement,i=e.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var t,e,n=this[0],r={top:0,left:0};return"fixed"===yt.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),u(t[0],"html")||(r=t.offset()),r={top:r.top+yt.css(t[0],"borderTopWidth",!0),left:r.left+yt.css(t[0],"borderLeftWidth",!0)}),{top:e.top-r.top-yt.css(n,"marginTop",!0),left:e.left-r.left-yt.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===yt.css(t,"position");)t=t.offsetParent;return t||Yt})}}),yt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;yt.fn[t]=function(r){return Rt(this,function(t,r,i){var o;if(yt.isWindow(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===i)return o?o[e]:t[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):t[r]=i},t,r,arguments.length)}}),yt.each(["top","left"],function(t,e){yt.cssHooks[e]=P(mt.pixelPosition,function(t,n){if(n)return n=R(t,e),ce.test(n)?yt(t).position()[e]+"px":n})}),yt.each({Height:"height",Width:"width"},function(t,e){yt.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){yt.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Rt(this,function(e,n,i){var o;return yt.isWindow(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?yt.css(e,n,s):yt.style(e,n,i,s)},e,a?i:void 0,a)}})}),yt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),yt.holdReady=function(t){t?yt.readyWait++:yt.ready(!0)},yt.isArray=Array.isArray,yt.parseJSON=JSON.parse,yt.nodeName=u,r=[],void 0!==(i=function(){return yt}.apply(e,r))&&(t.exports=i);var Je=n.jQuery,Qe=n.$;return yt.noConflict=function(t){return n.$===yt&&(n.$=Qe),t&&n.jQuery===yt&&(n.jQuery=Je),yt},o||(n.jQuery=n.$=yt),yt})},function(t,e){if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,r=this;t(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||t(r).trigger(t.support.transition.end)};return setTimeout(i,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),i=n.data("bs.alert");i||n.data("bs.alert",i=new r(this)),"string"==typeof e&&i[e].call(n)})}var n='[data-dismiss="alert"]',r=function(e){t(e).on("click",n,this.close)};r.VERSION="3.3.7",r.TRANSITION_DURATION=150,r.prototype.close=function(e){function n(){a.detach().trigger("closed.bs.alert").remove()}var i=t(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===o?[]:o);e&&e.preventDefault(),a.length||(a=i.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(r.TRANSITION_DURATION):n())};var i=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=r,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",n,r.prototype.close)}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.button"),o="object"==typeof e&&e;i||r.data("bs.button",i=new n(this,o)),"toggle"==e?i.toggle():e&&i.setState(e)})}var n=function(e,r){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,r),this.isLoading=!1};n.VERSION="3.3.7",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",o=r.data();e+="Text",null==o.resetText&&r.data("resetText",r[i]()),setTimeout(t.proxy(function(){r[i](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,r.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,r.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var r=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=r,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var r=t(n.target).closest(".btn");e.call(r,"toggle"),t(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),r.is("input,button")?r.trigger("focus"):r.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.carousel"),o=t.extend({},n.DEFAULTS,r.data(),"object"==typeof e&&e),a="string"==typeof e?e:o.slide;i||r.data("bs.carousel",i=new n(this,o)),"number"==typeof e?i.to(e):a?i[a]():o.interval&&i.pause().cycle()})}var n=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var n=this.getItemIndex(e);if(("prev"==t&&0===n||"next"==t&&n==this.$items.length-1)&&!this.options.wrap)return e;var r="prev"==t?-1:1,i=(n+r)%this.$items.length;return this.$items.eq(i)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){if(!this.sliding)return this.slide("next")},n.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},n.prototype.slide=function(e,r){var i=this.$element.find(".item.active"),o=r||this.getItemForDirection(e,i),a=this.interval,s="next"==e?"left":"right",u=this;if(o.hasClass("active"))return this.sliding=!1;var c=o[0],l=t.Event("slide.bs.carousel",{relatedTarget:c,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var f=t(this.$indicators.children()[this.getItemIndex(o)]);f&&f.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:c,direction:s});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([e,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(p)),a&&this.cycle(),this}};var r=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=r,this};var i=function(n){var r,i=t(this),o=t(i.attr("data-target")||(r=i.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""));if(o.hasClass("carousel")){var a=t.extend({},o.data(),i.data()),s=i.attr("data-slide-to");s&&(a.interval=!1),e.call(o,a),s&&o.data("bs.carousel").to(s),n.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",i).on("click.bs.carousel.data-api","[data-slide-to]",i),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),function(t){"use strict";function e(e){var n,r=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(r)}function n(e){return this.each(function(){var n=t(this),i=n.data("bs.collapse"),o=t.extend({},r.DEFAULTS,n.data(),"object"==typeof e&&e);!i&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),i||n.data("bs.collapse",i=new r(this,o)),"string"==typeof e&&i[e]()})}var r=function(e,n){this.$element=t(e),this.options=t.extend({},r.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};r.VERSION="3.3.7",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"))&&e.transitioning)){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){i&&i.length&&(n.call(i,"hide"),e||i.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var u=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return i.call(this);this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,r){var i=t(r);this.addAriaAndCollapsedClass(e(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var i=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=r,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(r){var i=t(this);i.attr("data-target")||r.preventDefault();var o=e(i),a=o.data("bs.collapse"),s=a?"toggle":i.data();n.call(o,s)})}(jQuery),function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&t(n);return r&&r.length?r:e.parent()}function n(n){n&&3===n.which||(t(i).remove(),t(o).each(function(){var r=t(this),i=e(r),o={relatedTarget:this};i.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(i[0],n.target)||(i.trigger(n=t.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(r.attr("aria-expanded","false"),i.removeClass("open").trigger(t.Event("hidden.bs.dropdown",o)))))}))}function r(e){return this.each(function(){var n=t(this),r=n.data("bs.dropdown");r||n.data("bs.dropdown",r=new a(this)),"string"==typeof e&&r[e].call(n)})}var i=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(r){var i=t(this);if(!i.is(".disabled, :disabled")){var o=e(i),a=o.hasClass("open");if(n(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var s={relatedTarget:this};if(o.trigger(r=t.Event("show.bs.dropdown",s)),r.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",s))}return!1}},a.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var r=t(this);if(n.preventDefault(),n.stopPropagation(),!r.is(".disabled, :disabled")){var i=e(r),a=i.hasClass("open");if(!a&&27!=n.which||a&&27==n.which)return 27==n.which&&i.find(o).trigger("focus"),r.trigger("click");var s=i.find(".dropdown-menu li:not(.disabled):visible a");if(s.length){var u=s.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<s.length-1&&u++,~u||(u=0),s.eq(u).trigger("focus")}}}};var s=t.fn.dropdown;t.fn.dropdown=r,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(t){"use strict";function e(e,r){return this.each(function(){var i=t(this),o=i.data("bs.modal"),a=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);o||i.data("bs.modal",o=new n(this,a)),"string"==typeof e?o[e](r):a.show&&o.show(r)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var r=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){r.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(r.$element)&&(r.ignoreBackdropClick=!0)})}),this.backdrop(function(){var i=t.support.transition&&r.$element.hasClass("fade");r.$element.parent().length||r.$element.appendTo(r.$body),r.$element.show().scrollTop(0),r.adjustDialog(),i&&r.$element[0].offsetWidth,r.$element.addClass("in"),r.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});i?r.$dialog.one("bsTransitionEnd",function(){r.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(n.TRANSITION_DURATION):r.$element.trigger("focus").trigger(o)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var r=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){if(this.ignoreBackdropClick)return void(this.ignoreBackdropClick=!1);t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){r.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var r=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=r,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var r=t(this),i=r.attr("href"),o=t(r.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),r.data());r.is("a")&&n.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){r.is(":visible")&&r.trigger("focus")})}),e.call(o,a,this)})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.tooltip"),o="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||r.data("bs.tooltip",i=new n(this,o)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,r){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var i=this.options.trigger.split(" "),o=i.length;o--;){var a=i[o];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",u="hover"==a?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,r){n[t]!=r&&(e[t]=r)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out",!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)}},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var r=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!r)return;var i=this,o=this.tip(),a=this.getUID(this.type);this.setContent(),o.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,u=/\s?auto?\s?/i,c=u.test(s);c&&(s=s.replace(u,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),f=o[0].offsetWidth,p=o[0].offsetHeight;if(c){var d=s,h=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+p>h.bottom?"top":"top"==s&&l.top-p<h.top?"bottom":"right"==s&&l.right+f>h.width?"left":"left"==s&&l.left-f<h.left?"right":s,o.removeClass(d).addClass(s)}var v=this.getCalculatedOffset(s,l,f,p);this.applyPlacement(v,s);var g=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(e,n){var r=this.tip(),i=r[0].offsetWidth,o=r[0].offsetHeight,a=parseInt(r.css("margin-top"),10),s=parseInt(r.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),e.top+=a,e.left+=s,t.offset.setOffset(r[0],t.extend({using:function(t){r.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),r.addClass("in");var u=r[0].offsetWidth,c=r[0].offsetHeight;"top"==n&&c!=o&&(e.top=e.top+o-c);var l=this.getViewportAdjustedDelta(n,e,u,c);l.left?e.left+=l.left:e.top+=l.top;var f=/top|bottom/.test(n),p=f?2*l.left-i+u:2*l.top-o+c,d=f?"offsetWidth":"offsetHeight";r.offset(e),this.replaceArrow(p,r[0][d],f)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function r(){"in"!=i.hoverState&&o.detach(),i.$element&&i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),e&&e()}var i=this,o=t(this.$tip),a=t.Event("hide.bs."+this.type);if(this.$element.trigger(a),!a.isDefaultPrevented())return o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),this.hoverState=null,this},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],r="BODY"==n.tagName,i=n.getBoundingClientRect();null==i.width&&(i=t.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var o=window.SVGElement&&n instanceof window.SVGElement,a=r?{top:0,left:0}:o?null:e.offset(),s={scroll:r?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},u=r?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},i,s,u,a)},n.prototype.getCalculatedOffset=function(t,e,n,r){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-r,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-r/2,left:e.left-n}:{top:e.top+e.height/2-r/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,r){var i={top:0,left:0};if(!this.$viewport)return i;var o=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var s=e.top-o-a.scroll,u=e.top+o-a.scroll+r;s<a.top?i.top=a.top-s:u>a.top+a.height&&(i.top=a.top+a.height-u)}else{var c=e.left-o,l=e.left+o+n;c<a.left?i.left=a.left-c:l>a.right&&(i.left=a.left+a.width-l)}return i},n.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},n.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&((n=t(e.currentTarget).data("bs."+this.type))||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var r=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=r,this}}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.popover"),o="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||r.data("bs.popover",i=new n(this,o)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.7",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var r=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=r,this}}(jQuery),function(t){"use strict";function e(n,r){this.$body=t(document.body),this.$scrollElement=t(t(n).is(document.body)?window:n),this.options=t.extend({},e.DEFAULTS,r),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var r=t(this),i=r.data("bs.scrollspy"),o="object"==typeof n&&n;i||r.data("bs.scrollspy",i=new e(this,o)),"string"==typeof n&&i[n]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,n="offset",r=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(n="position",r=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),o=/^#./.test(i)&&t(i);return o&&o.length&&o.is(":visible")&&[[o[n]().top+r,i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),r=this.options.offset+n-this.$scrollElement.height(),i=this.offsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=r)return a!=(t=o[o.length-1])&&this.activate(t);if(a&&e<i[0])return this.activeTarget=null,this.clear();for(t=i.length;t--;)a!=o[t]&&e>=i[t]&&(void 0===i[t+1]||e<i[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',r=t(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active")),r.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var r=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=r,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.tab");i||r.data("bs.tab",i=new n(this)),"string"==typeof e&&i[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),r=e.data("target");if(r||(r=e.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var i=n.find(".active:last a"),o=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(o),e.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){var s=t(r);this.activate(e.closest("li"),n),this.activate(s,s.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},n.prototype.activate=function(e,r,i){function o(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var a=r.find("> .active"),s=i&&t.support.transition&&(a.length&&a.hasClass("fade")||!!r.find("> .fade").length);a.length&&s?a.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o(),a.removeClass("in")};var r=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=r,this};var i=function(n){n.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=r.data("bs.affix"),o="object"==typeof e&&e;i||r.data("bs.affix",i=new n(this,o)),"string"==typeof e&&i[e]()})}var n=function(e,r){this.options=t.extend({},n.DEFAULTS,r),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.7",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,r){var i=this.$target.scrollTop(),o=this.$element.offset(),a=this.$target.height();if(null!=n&&"top"==this.affixed)return i<n&&"top";if("bottom"==this.affixed)return null!=n?!(i+this.unpin<=o.top)&&"bottom":!(i+a<=t-r)&&"bottom";var s=null==this.affixed,u=s?i:o.top,c=s?a:e;return null!=n&&i<=n?"top":null!=r&&u+c>=t-r&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),r=this.options.offset,i=r.top,o=r.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof r&&(o=i=r),"function"==typeof i&&(i=r.top(this.$element)),"function"==typeof o&&(o=r.bottom(this.$element));var s=this.getState(a,e,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var u="affix"+(s?"-"+s:""),c=t.Event(u+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:a-e-o})}};var r=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=r,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),r=n.data();r.offset=r.offset||{},null!=r.offsetBottom&&(r.offset.bottom=r.offsetBottom),null!=r.offsetTop&&(r.offset.top=r.offsetTop),e.call(n,r)})})}(jQuery)},function(t,e,n){t.exports=n(16)},function(t,e,n){"use strict";function r(t){var e=new a(t),n=o(a.prototype.request,e);return i.extend(n,a.prototype,e),i.extend(n,e),n}var i=n(0),o=n(3),a=n(18),s=n(1),u=r(s);u.Axios=a,u.create=function(t){return r(i.merge(s,t))},u.Cancel=n(7),u.CancelToken=n(33),u.isCancel=n(6),u.all=function(t){return Promise.all(t)},u.spread=n(34),t.exports=u,t.exports.default=u},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var i=n(1),o=n(0),a=n(28),s=n(29),u=n(31),c=n(32);r.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(i,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):g=-1,h.length&&s())}function s(){if(!v){var t=i(a);v=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,v=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,h=[],v=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||v||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=n(0);t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(i.isURLSearchParams(e))o=e.toString();else{var a=[];i.forEach(e,function(t,e){null!==t&&void 0!==t&&(i.isArray(t)&&(e+="[]"),i.isArray(t)||(t=[t]),i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),o=a.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,i,o={};return t?(r.forEach(t.split("\n"),function(t){i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e&&(o[e]=o[e]?o[e]+", "+n:n)}),o):o}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(i.setAttribute("href",e),e=i.href),i.setAttribute("href",e),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return e=t(window.location.href),function(n){var i=r.isString(n)?t(n):n;return i.protocol===e.protocol&&i.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function i(t){for(var e,n,i=String(t),a="",s=0,u=o;i.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return a}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=i},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,o,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";function r(){this.handlers=[]}var i=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){i.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var i=n(0),o=n(30),a=n(6),s=n(1);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new i(t),e(n.reason))})}var i=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";(function(e){function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function i(t){return!0===t}function o(t){return!1===t}function a(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Object]"===qi.call(t)}function c(t){return"[object RegExp]"===qi.call(t)}function l(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function v(t,e){return Ui.call(t,e)}function g(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function m(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function y(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function b(t,e){for(var n in e)t[n]=e[n];return t}function _(t){for(var e={},n=0;n<t.length;n++)t[n]&&b(e,t[n]);return e}function w(t,e,n){}function x(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return x(t,e[n])});if(i||o)return!1;var a=Object.keys(t),u=Object.keys(e);return a.length===u.length&&a.every(function(n){return x(t[n],e[n])})}catch(t){return!1}}function C(t,e){for(var n=0;n<t.length;n++)if(x(t[n],e))return n;return-1}function T(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function $(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function A(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function k(t){if(!no.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function E(t,e,n){if(to.errorHandler)to.errorHandler.call(null,t,e,n);else if(!oo||"undefined"==typeof console)throw t}function S(t){return"function"==typeof t&&/native code/.test(t.toString())}function O(t){To.target&&$o.push(To.target),To.target=t}function j(){To.target=$o.pop()}function N(t,e,n){t.__proto__=e}function D(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];A(t,o,e[o])}}function I(t,e){if(s(t)){var n;return v(t,"__ob__")&&t.__ob__ instanceof Oo?n=t.__ob__:So.shouldConvert&&!bo()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Oo(t)),e&&n&&n.vmCount++,n}}function L(t,e,n,r,i){var o=new To,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set,c=!i&&I(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return To.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&F(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(u?u.call(t,e):n=e,c=!i&&I(e),o.notify())}})}}function R(t,e,n){if(Array.isArray(t)&&l(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(v(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(L(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function P(t,e){if(Array.isArray(t)&&l(e))return void t.splice(e,1);var n=t.__ob__;t._isVue||n&&n.vmCount||v(t,e)&&(delete t[e],n&&n.dep.notify())}function F(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&F(e)}function M(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),a=0;a<o.length;a++)n=o[a],r=t[n],i=e[n],v(t,n)?u(r)&&u(i)&&M(r,i):R(t,n,i);return t}function q(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,i="function"==typeof t?t.call(n):t;return r?M(r,i):i}:void 0:e?t?function(){return M("function"==typeof e?e.call(this):e,"function"==typeof t?t.call(this):t)}:e:t}function H(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function B(t,e){var n=Object.create(t||null);return e?b(n,e):n}function U(t){var e=t.props;if(e){var n,r,i,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(i=zi(r),o[i]={type:null});else if(u(e))for(var a in e)r=e[a],i=zi(a),o[i]=u(r)?r:{type:r};t.props=o}}function W(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function z(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}function V(t,e,n){function r(r){var i=jo[r]||No;u[r]=i(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),U(e),W(e),z(e);var i=e.extends;if(i&&(t=V(t,i,n)),e.mixins)for(var o=0,a=e.mixins.length;o<a;o++)t=V(t,e.mixins[o],n);var s,u={};for(s in t)r(s);for(s in e)v(t,s)||r(s);return u}function X(t,e,n,r){if("string"==typeof n){var i=t[e];if(v(i,n))return i[n];var o=zi(n);if(v(i,o))return i[o];var a=Vi(o);if(v(i,a))return i[a];return i[n]||i[o]||i[a]}}function K(t,e,n,r){var i=e[t],o=!v(n,t),a=n[t];if(G(Boolean,i.type)&&(o&&!v(i,"default")?a=!1:G(String,i.type)||""!==a&&a!==Ki(t)||(a=!0)),void 0===a){a=J(r,i,t);var s=So.shouldConvert;So.shouldConvert=!0,I(a),So.shouldConvert=s}return a}function J(t,e,n){if(v(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof r&&"Function"!==Q(e.type)?r.call(t):r}}function Q(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function G(t,e){if(!Array.isArray(e))return Q(e)===Q(t);for(var n=0,r=e.length;n<r;n++)if(Q(e[n])===Q(t))return!0;return!1}function Z(t){return new Do(void 0,void 0,void 0,String(t))}function Y(t,e){var n=new Do(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.isCloned=!0,e&&t.children&&(n.children=tt(t.children)),n}function tt(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=Y(t[i],e);return r}function et(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function nt(t,e){return t.plain?-1:e.plain?1:0}function rt(t,e,r,i,o){var a,s,u,c,l=[],f=!1;for(a in t)s=t[a],u=e[a],c=Po(a),c.plain||(f=!0),n(s)||(n(u)?(n(s.fns)&&(s=t[a]=et(s)),c.handler=s,l.push(c)):s!==u&&(u.fns=s,t[a]=u));if(l.length){f&&l.sort(nt);for(var p=0;p<l.length;p++){var d=l[p];r(d.name,d.handler,d.once,d.capture,d.passive)}}for(a in e)n(t[a])&&(c=Po(a),i(c.name,e[a],c.capture))}function it(t,e,o){function a(){o.apply(this,arguments),h(s.fns,a)}var s,u=t[e];n(u)?s=et([a]):r(u.fns)&&i(u.merged)?(s=u,s.fns.push(a)):s=et([u,a]),s.merged=!0,t[e]=s}function ot(t,e,i){var o=e.options.props;if(!n(o)){var a={},s=t.attrs,u=t.props;if(r(s)||r(u))for(var c in o){var l=Ki(c);at(a,u,c,l,!0)||at(a,s,c,l,!1)}return a}}function at(t,e,n,i,o){if(r(e)){if(v(e,n))return t[n]=e[n],o||delete e[n],!0;if(v(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function st(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ut(t){return a(t)?[Z(t)]:Array.isArray(t)?lt(t):void 0}function ct(t){return r(t)&&r(t.text)&&o(t.isComment)}function lt(t,e){var o,s,u,c=[];for(o=0;o<t.length;o++)s=t[o],n(s)||"boolean"==typeof s||(u=c[c.length-1],Array.isArray(s)?c.push.apply(c,lt(s,(e||"")+"_"+o)):a(s)?ct(u)?u.text+=String(s):""!==s&&c.push(Z(s)):ct(s)&&ct(u)?c[c.length-1]=Z(u.text+s.text):(i(t._isVList)&&r(s.tag)&&n(s.key)&&r(e)&&(s.key="__vlist"+e+"_"+o+"__"),c.push(s)));return c}function ft(t,e){return t.__esModule&&t.default&&(t=t.default),s(t)?e.extend(t):t}function pt(t,e,n,r,i){var o=Ro();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dt(t,e,o){if(i(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(i(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var a=t.contexts=[o],u=!0,c=function(){for(var t=0,e=a.length;t<e;t++)a[t].$forceUpdate()},l=T(function(n){t.resolved=ft(n,e),u||c()}),f=T(function(e){r(t.errorComp)&&(t.error=!0,c())}),p=t(l,f);return s(p)&&("function"==typeof p.then?n(t.resolved)&&p.then(l,f):r(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),r(p.error)&&(t.errorComp=ft(p.error,e)),r(p.loading)&&(t.loadingComp=ft(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,c())},p.delay||200)),r(p.timeout)&&setTimeout(function(){n(t.resolved)&&f(null)},p.timeout))),u=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(o)}function ht(t){return t.isComment&&t.asyncFactory}function vt(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||ht(n)))return n}}function gt(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bt(t,e)}function mt(t,e,n){n?Lo.$once(t,e):Lo.$on(t,e)}function yt(t,e){Lo.$off(t,e)}function bt(t,e,n){Lo=t,rt(e,n||{},mt,yt,t)}function _t(t,e){var n={};if(!t)return n;for(var r=[],i=0,o=t.length;i<o;i++){var a=t[i],s=a.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,a.context!==e&&a.functionalContext!==e||!s||null==s.slot)r.push(a);else{var u=a.data.slot,c=n[u]||(n[u]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(wt)||(n.default=r),n}function wt(t){return t.isComment||" "===t.text}function xt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?xt(t[n],e):e[t[n].key]=t[n].fn;return e}function Ct(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tt(t,e,n){t.$el=e,t.$options.render||(t.$options.render=Ro),St(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},t._watcher=new Vo(t,r,w),n=!1,null==t.$vnode&&(t._isMounted=!0,St(t,"mounted")),t}function $t(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==eo);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs||eo,t.$listeners=n||eo,e&&t.$options.props){So.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],u=0;u<s.length;u++){var c=s[u];a[c]=K(c,t.$options.props,e,t)}So.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,bt(t,n,l)}o&&(t.$slots=_t(i,r.context),t.$forceUpdate())}function At(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function kt(t,e){if(e){if(t._directInactive=!1,At(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)kt(t.$children[n]);St(t,"activated")}}function Et(t,e){if(!(e&&(t._directInactive=!0,At(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Et(t.$children[n]);St(t,"deactivated")}}function St(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){E(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function Ot(){Wo=Mo.length=qo.length=0,Ho={},Bo=Uo=!1}function jt(){Uo=!0;var t,e;for(Mo.sort(function(t,e){return t.id-e.id}),Wo=0;Wo<Mo.length;Wo++)t=Mo[Wo],e=t.id,Ho[e]=null,t.run();var n=qo.slice(),r=Mo.slice();Ot(),It(n),Nt(r),_o&&to.devtools&&_o.emit("flush")}function Nt(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&St(r,"updated")}}function Dt(t){t._inactive=!1,qo.push(t)}function It(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,kt(t[e],!0)}function Lt(t){var e=t.id;if(null==Ho[e]){if(Ho[e]=!0,Uo){for(var n=Mo.length-1;n>Wo&&Mo[n].id>t.id;)n--;Mo.splice(n+1,0,t)}else Mo.push(t);Bo||(Bo=!0,xo(jt))}}function Rt(t){Xo.clear(),Pt(t,Xo)}function Pt(t,e){var n,r,i=Array.isArray(t);if((i||s(t))&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i)for(n=t.length;n--;)Pt(t[n],e);else for(r=Object.keys(t),n=r.length;n--;)Pt(t[r[n]],e)}}function Ft(t,e,n){Ko.get=function(){return this[e][n]},Ko.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ko)}function Mt(t){t._watchers=[];var e=t.$options;e.props&&qt(t,e.props),e.methods&&Vt(t,e.methods),e.data?Ht(t):I(t._data={},!0),e.computed&&Ut(t,e.computed),e.watch&&e.watch!==ho&&Xt(t,e.watch)}function qt(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;So.shouldConvert=o;for(var a in e)!function(o){i.push(o);var a=K(o,e,n,t);L(r,o,a),o in t||Ft(t,"_props",o)}(a);So.shouldConvert=!0}function Ht(t){var e=t.$options.data;e=t._data="function"==typeof e?Bt(e,t):e||{},u(e)||(e={});for(var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);i--;){var o=n[i];r&&v(r,o)||$(o)||Ft(t,"_data",o)}I(e,!0)}function Bt(t,e){try{return t.call(e)}catch(t){return E(t,e,"data()"),{}}}function Ut(t,e){var n=t._computedWatchers=Object.create(null),r=bo();for(var i in e){var o=e[i],a="function"==typeof o?o:o.get;r||(n[i]=new Vo(t,a||w,w,Jo)),i in t||Wt(t,i,o)}}function Wt(t,e,n){var r=!bo();"function"==typeof n?(Ko.get=r?zt(e):n,Ko.set=w):(Ko.get=n.get?r&&!1!==n.cache?zt(e):n.get:w,Ko.set=n.set?n.set:w),Object.defineProperty(t,e,Ko)}function zt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),To.target&&e.depend(),e.value}}function Vt(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?w:m(e[n],t)}function Xt(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Kt(t,n,r[i]);else Kt(t,n,r)}}function Kt(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Jt(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function Qt(t){var e=Gt(t.$options.inject,t);e&&(So.shouldConvert=!1,Object.keys(e).forEach(function(n){L(t,n,e[n])}),So.shouldConvert=!0)}function Gt(t,e){if(t){for(var n=Object.create(null),r=wo?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++)for(var o=r[i],a=t[o],s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}return n}}function Zt(t,e,n,i,o){var a={},s=t.options.props;if(r(s))for(var u in s)a[u]=K(u,s,e||eo);else r(n.attrs)&&Yt(a,n.attrs),r(n.props)&&Yt(a,n.props);var c=Object.create(i),l=function(t,e,n,r){return oe(c,t,e,n,r,!0)},f=t.options.render.call(null,l,{data:n,props:a,children:o,parent:i,listeners:n.on||eo,injections:Gt(t.options.inject,i),slots:function(){return _t(o,i)}});return f instanceof Do&&(f.functionalContext=i,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function Yt(t,e){for(var n in e)t[zi(n)]=e[n]}function te(t,e,o,a,u){if(!n(t)){var c=o.$options._base;if(s(t)&&(t=c.extend(t)),"function"==typeof t){var l;if(n(t.cid)&&(l=t,void 0===(t=dt(l,c,o))))return pt(l,e,o,a,u);e=e||{},_e(t),r(e.model)&&ie(t.options,e);var f=ot(e,t,u);if(i(t.options.functional))return Zt(t,f,e,o,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}ne(e);var h=t.options.name||u;return new Do("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,o,{Ctor:t,propsData:f,listeners:p,tag:u,children:a},l)}}}function ee(t,e,n,i){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:i||null},s=t.data.inlineTemplate;return r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function ne(t){t.hook||(t.hook={});for(var e=0;e<Go.length;e++){var n=Go[e],r=t.hook[n],i=Qo[n];t.hook[n]=r?re(i,r):i}}function re(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}function ie(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});r(o[i])?o[i]=[e.model.callback].concat(o[i]):o[i]=e.model.callback}function oe(t,e,n,r,o,s){return(Array.isArray(n)||a(n))&&(o=r,r=n,n=void 0),i(s)&&(o=Yo),ae(t,e,n,r,o)}function ae(t,e,n,i,o){if(r(n)&&r(n.__ob__))return Ro();if(r(n)&&r(n.is)&&(e=n.is),!e)return Ro();Array.isArray(i)&&"function"==typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===Yo?i=ut(i):o===Zo&&(i=st(i));var a,s;if("string"==typeof e){var u;s=t.$vnode&&t.$vnode.ns||to.getTagNamespace(e),a=to.isReservedTag(e)?new Do(to.parsePlatformTagName(e),n,i,void 0,void 0,t):r(u=X(t.$options,"components",e))?te(u,n,t,i,e):new Do(e,n,i,void 0,void 0,t)}else a=te(e,n,t,i);return r(a)?(s&&se(a,s),a):Ro()}function se(t,e){if(t.ns=e,"foreignObject"!==t.tag&&r(t.children))for(var i=0,o=t.children.length;i<o;i++){var a=t.children[i];r(a.tag)&&n(a.ns)&&se(a,e)}}function ue(t,e){var n,i,o,a,u;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"==typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(s(t))for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)u=a[i],n[i]=e(t[u],u,i);return r(n)&&(n._isVList=!0),n}function ce(t,e,n,r){var i=this.$scopedSlots[t];if(i)return n=n||{},r&&(n=b(b({},r),n)),i(n)||e;var o=this.$slots[t];return o||e}function le(t){return X(this.$options,"filters",t,!0)||Qi}function fe(t,e,n){var r=to.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function pe(t,e,n,r,i){if(n)if(s(n)){Array.isArray(n)&&(n=_(n));var o;for(var a in n)!function(a){if("class"===a||"style"===a||Bi(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||to.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in o)&&(o[a]=n[a],i)){(t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}}}(a)}else;return t}function de(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?tt(n):Y(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),ve(n,"__static__"+t,!1),n)}function he(t,e,n){return ve(t,"__once__"+e+(n?"_"+n:""),!0),t}function ve(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&ge(t[r],e+"_"+r,n);else ge(t,e,n)}function ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function me(t,e){if(e)if(u(e)){var n=t.on=t.on?b({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(o,i):o}}else;return t}function ye(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=_t(t.$options._renderChildren,n),t.$scopedSlots=eo,t._c=function(e,n,r,i){return oe(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return oe(t,e,n,r,i,!0)};var r=e&&e.data;L(t,"$attrs",r&&r.attrs||eo,null,!0),L(t,"$listeners",t.$options._parentListeners||eo,null,!0)}function be(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function _e(t){var e=t.options;if(t.super){var n=_e(t.super);if(n!==t.superOptions){t.superOptions=n;var r=we(t);r&&b(t.extendOptions,r),e=t.options=V(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function we(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=xe(n[o],r[o],i[o]));return e}function xe(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function Ce(t){this._init(t)}function Te(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=y(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}function $e(t){t.mixin=function(t){return this.options=V(this.options,t),this}}function Ae(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=V(n.options,t),a.super=n,a.options.props&&ke(a),a.options.computed&&Ee(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Zi.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=b({},a.options),i[r]=a,a}}function ke(t){var e=t.options.props;for(var n in e)Ft(t.prototype,"_props",n)}function Ee(t){var e=t.options.computed;for(var n in e)Wt(t.prototype,n,e[n])}function Se(t){Zi.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Oe(t){return t&&(t.Ctor.options.name||t.tag)}function je(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!c(t)&&t.test(e)}function Ne(t,e,n){for(var r in t){var i=t[r];if(i){var o=Oe(i.componentOptions);o&&!n(o)&&(i!==e&&De(i),t[r]=null)}}}function De(t){t&&t.componentInstance.$destroy()}function Ie(t){for(var e=t.data,n=t,i=t;r(i.componentInstance);)i=i.componentInstance._vnode,i.data&&(e=Le(i.data,e));for(;r(n=n.parent);)n.data&&(e=Le(e,n.data));return Re(e.staticClass,e.class)}function Le(t,e){return{staticClass:Pe(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Re(t,e){return r(t)||r(e)?Pe(t,Fe(e)):""}function Pe(t,e){return t?e?t+" "+e:t:e||""}function Fe(t){return Array.isArray(t)?Me(t):s(t)?qe(t):"string"==typeof t?t:""}function Me(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Fe(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function qe(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function He(t){return Ta(t)?"svg":"math"===t?"math":void 0}function Be(t){if(!oo)return!0;if(Aa(t))return!1;if(t=t.toLowerCase(),null!=ka[t])return ka[t];var e=document.createElement(t);return t.indexOf("-")>-1?ka[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ka[t]=/HTMLUnknownElement/.test(e.toString())}function Ue(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function We(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function ze(t,e){return document.createElementNS(xa[t],e)}function Ve(t){return document.createTextNode(t)}function Xe(t){return document.createComment(t)}function Ke(t,e,n){t.insertBefore(e,n)}function Je(t,e){t.removeChild(e)}function Qe(t,e){t.appendChild(e)}function Ge(t){return t.parentNode}function Ze(t){return t.nextSibling}function Ye(t){return t.tagName}function tn(t,e){t.textContent=e}function en(t,e,n){t.setAttribute(e,n)}function nn(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?h(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function rn(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&on(t,e)||i(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function on(t,e){if("input"!==t.tag)return!0;var n,i=r(n=t.data)&&r(n=n.attrs)&&n.type,o=r(n=e.data)&&r(n=n.attrs)&&n.type;return i===o||Ea(i)&&Ea(o)}function an(t,e,n){var i,o,a={};for(i=e;i<=n;++i)o=t[i].key,r(o)&&(a[o]=i);return a}function sn(t,e){(t.data.directives||e.data.directives)&&un(t,e)}function un(t,e){var n,r,i,o=t===ja,a=e===ja,s=cn(t.data.directives,t.context),u=cn(e.data.directives,e.context),c=[],l=[];for(n in u)r=s[n],i=u[n],r?(i.oldValue=r.value,fn(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(fn(i,"bind",e,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var n=0;n<c.length;n++)fn(c[n],"inserted",e,t)};o?it(e.data.hook||(e.data.hook={}),"insert",f):f()}if(l.length&&it(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)fn(l[n],"componentUpdated",e,t)}),!o)for(n in s)u[n]||fn(s[n],"unbind",t,t,a)}function cn(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)i=t[r],i.modifiers||(i.modifiers=Ia),n[ln(i)]=i,i.def=X(e.$options,"directives",i.name,!0);return n}function ln(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function fn(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){E(r,n.context,"directive "+t.name+" "+e+" hook")}}function pn(t,e){var i=e.componentOptions;if(!(r(i)&&!1===i.Ctor.options.inheritAttrs||n(t.data.attrs)&&n(e.data.attrs))){var o,a,s=e.elm,u=t.data.attrs||{},c=e.data.attrs||{};r(c.__ob__)&&(c=e.data.attrs=b({},c));for(o in c)a=c[o],u[o]!==a&&dn(s,o,a);uo&&c.value!==u.value&&dn(s,"value",c.value);for(o in u)n(c[o])&&(ba(o)?s.removeAttributeNS(ya,_a(o)):ga(o)||s.removeAttribute(o))}}function dn(t,e,n){ma(e)?wa(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):ga(e)?t.setAttribute(e,wa(n)||"false"===n?"false":"true"):ba(e)?wa(n)?t.removeAttributeNS(ya,_a(e)):t.setAttributeNS(ya,e,n):wa(n)?t.removeAttribute(e):t.setAttribute(e,n)}function hn(t,e){var i=e.elm,o=e.data,a=t.data;if(!(n(o.staticClass)&&n(o.class)&&(n(a)||n(a.staticClass)&&n(a.class)))){var s=Ie(e),u=i._transitionClasses;r(u)&&(s=Pe(s,Fe(u))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function vn(t){function e(){(a||(a=[])).push(t.slice(h,i).trim()),h=i+1}var n,r,i,o,a,s=!1,u=!1,c=!1,l=!1,f=0,p=0,d=0,h=0;for(i=0;i<t.length;i++)if(r=n,n=t.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(u)34===n&&92!==r&&(u=!1);else if(c)96===n&&92!==r&&(c=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===t.charCodeAt(i+1)||124===t.charCodeAt(i-1)||f||p||d){switch(n){case 34:u=!0;break;case 39:s=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var v=i-1,g=void 0;v>=0&&" "===(g=t.charAt(v));v--);g&&Fa.test(g)||(l=!0)}}else void 0===o?(h=i+1,o=t.slice(0,i).trim()):e();if(void 0===o?o=t.slice(0,i).trim():0!==h&&e(),a)for(i=0;i<a.length;i++)o=gn(o,a[i]);return o}function gn(t,e){var n=e.indexOf("(");return n<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,n)+'")('+t+","+e.slice(n+1)}function mn(t){}function yn(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function bn(t,e,n){(t.props||(t.props=[])).push({name:e,value:n})}function _n(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n})}function wn(t,e,n,r,i,o){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:i,modifiers:o})}function xn(t,e,n,r,i,o){r&&r.capture&&(delete r.capture,e="!"+e),r&&r.once&&(delete r.once,e="~"+e),r&&r.passive&&(delete r.passive,e="&"+e);var a;r&&r.native?(delete r.native,a=t.nativeEvents||(t.nativeEvents={})):a=t.events||(t.events={});var s={value:n,modifiers:r},u=a[e];Array.isArray(u)?i?u.unshift(s):u.push(s):a[e]=u?i?[s,u]:[u,s]:s}function Cn(t,e,n){var r=Tn(t,":"+e)||Tn(t,"v-bind:"+e);if(null!=r)return vn(r);if(!1!==n){var i=Tn(t,e);if(null!=i)return JSON.stringify(i)}}function Tn(t,e){var n;if(null!=(n=t.attrsMap[e]))for(var r=t.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===e){r.splice(i,1);break}return n}function $n(t,e,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=An(e,a);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+s+"}"}}function An(t,e){var n=kn(t);return null===n.idx?t+"="+e:"$set("+n.exp+", "+n.idx+", "+e+")"}function kn(t){if(oa=t,ia=oa.length,sa=ua=ca=0,t.indexOf("[")<0||t.lastIndexOf("]")<ia-1)return{exp:t,idx:null};for(;!Sn();)aa=En(),On(aa)?Nn(aa):91===aa&&jn(aa);return{exp:t.substring(0,ua),idx:t.substring(ua+1,ca)}}function En(){return oa.charCodeAt(++sa)}function Sn(){return sa>=ia}function On(t){return 34===t||39===t}function jn(t){var e=1;for(ua=sa;!Sn();)if(t=En(),On(t))Nn(t);else if(91===t&&e++,93===t&&e--,0===e){ca=sa;break}}function Nn(t){for(var e=t;!Sn()&&(t=En())!==e;);}function Dn(t,e,n){la=n;var r=e.value,i=e.modifiers,o=t.tag,a=t.attrsMap.type;if(t.component)return $n(t,r,i),!1;if("select"===o)Rn(t,r,i);else if("input"===o&&"checkbox"===a)In(t,r,i);else if("input"===o&&"radio"===a)Ln(t,r,i);else if("input"===o||"textarea"===o)Pn(t,r,i);else if(!to.isReservedTag(o))return $n(t,r,i),!1;return!0}function In(t,e,n){var r=n&&n.number,i=Cn(t,"value")||"null",o=Cn(t,"true-value")||"true",a=Cn(t,"false-value")||"false";bn(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),xn(t,qa,"var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+e+"=$$a.concat([$$v]))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+An(e,"$$c")+"}",null,!0)}function Ln(t,e,n){var r=n&&n.number,i=Cn(t,"value")||"null";i=r?"_n("+i+")":i,bn(t,"checked","_q("+e+","+i+")"),xn(t,qa,An(e,i),null,!0)}function Rn(t,e,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+An(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),xn(t,"change",o,null,!0)}function Pn(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,u=!o&&"range"!==r,c=o?"change":"range"===r?Ma:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=An(e,l);u&&(f="if($event.target.composing)return;"+f),bn(t,"value","("+e+")"),xn(t,c,f,null,!0),(s||a)&&xn(t,"blur","$forceUpdate()")}function Fn(t){var e;r(t[Ma])&&(e=so?"change":"input",t[e]=[].concat(t[Ma],t[e]||[]),delete t[Ma]),r(t[qa])&&(e=po?"click":"change",t[e]=[].concat(t[qa],t[e]||[]),delete t[qa])}function Mn(t,e,n,r,i){if(n){var o=e,a=fa;e=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&qn(t,e,r,a)}}fa.addEventListener(t,e,vo?{capture:r,passive:i}:r)}function qn(t,e,n,r){(r||fa).removeEventListener(t,e,n)}function Hn(t,e){if(!n(t.data.on)||!n(e.data.on)){var r=e.data.on||{},i=t.data.on||{};fa=e.elm,Fn(r),rt(r,i,Mn,qn,e.context)}}function Bn(t,e){if(!n(t.data.domProps)||!n(e.data.domProps)){var i,o,a=e.elm,s=t.data.domProps||{},u=e.data.domProps||{};r(u.__ob__)&&(u=e.data.domProps=b({},u));for(i in s)n(u[i])&&(a[i]="");for(i in u)if(o=u[i],"textContent"!==i&&"innerHTML"!==i||(e.children&&(e.children.length=0),o!==s[i]))if("value"===i){a._value=o;var c=n(o)?"":String(o);Un(a,e,c)&&(a.value=c)}else a[i]=o}}function Un(t,e,n){return!t.composing&&("option"===e.tag||Wn(t,n)||zn(t,n))}function Wn(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}function zn(t,e){var n=t.value,i=t._vModifiers;return r(i)&&i.number?p(n)!==p(e):r(i)&&i.trim?n.trim()!==e.trim():n!==e}function Vn(t){var e=Xn(t.style);return t.staticStyle?b(t.staticStyle,e):e}function Xn(t){return Array.isArray(t)?_(t):"string"==typeof t?Ua(t):t}function Kn(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=Vn(i.data))&&b(r,n);(n=Vn(t.data))&&b(r,n);for(var o=t;o=o.parent;)o.data&&(n=Vn(o.data))&&b(r,n);return r}function Jn(t,e){var i=e.data,o=t.data;if(!(n(i.staticStyle)&&n(i.style)&&n(o.staticStyle)&&n(o.style))){var a,s,u=e.elm,c=o.staticStyle,l=o.normalizedStyle||o.style||{},f=c||l,p=Xn(e.data.style)||{};e.data.normalizedStyle=r(p.__ob__)?b({},p):p;var d=Kn(e,!0);for(s in f)n(d[s])&&Va(u,s,"");for(s in d)(a=d[s])!==f[s]&&Va(u,s,null==a?"":a)}}function Qn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Gn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zn(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&b(e,Qa(t.name||"v")),b(e,t),e}return"string"==typeof t?Qa(t):void 0}}function Yn(t){is(function(){is(t)})}function tr(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Qn(t,e))}function er(t,e){t._transitionClasses&&h(t._transitionClasses,e),Gn(t,e)}function nr(t,e,n){var r=rr(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Za?es:rs,u=0,c=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++u>=a&&c()};setTimeout(function(){u<a&&c()},o+1),t.addEventListener(s,l)}function rr(t,e){var n,r=window.getComputedStyle(t),i=r[ts+"Delay"].split(", "),o=r[ts+"Duration"].split(", "),a=ir(i,o),s=r[ns+"Delay"].split(", "),u=r[ns+"Duration"].split(", "),c=ir(s,u),l=0,f=0;return e===Za?a>0&&(n=Za,l=a,f=o.length):e===Ya?c>0&&(n=Ya,l=c,f=u.length):(l=Math.max(a,c),n=l>0?a>c?Za:Ya:null,f=n?n===Za?o.length:u.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===Za&&os.test(r[ts+"Property"])}}function ir(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return or(e)+or(t[n])}))}function or(t){return 1e3*Number(t.slice(0,-1))}function ar(t,e){var i=t.elm;r(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var o=Zn(t.data.transition);if(!n(o)&&!r(i._enterCb)&&1===i.nodeType){for(var a=o.css,u=o.type,c=o.enterClass,l=o.enterToClass,f=o.enterActiveClass,d=o.appearClass,h=o.appearToClass,v=o.appearActiveClass,g=o.beforeEnter,m=o.enter,y=o.afterEnter,b=o.enterCancelled,_=o.beforeAppear,w=o.appear,x=o.afterAppear,C=o.appearCancelled,$=o.duration,A=Fo,k=Fo.$vnode;k&&k.parent;)k=k.parent,A=k.context;var E=!A._isMounted||!t.isRootInsert;if(!E||w||""===w){var S=E&&d?d:c,O=E&&v?v:f,j=E&&h?h:l,N=E?_||g:g,D=E&&"function"==typeof w?w:m,I=E?x||y:y,L=E?C||b:b,R=p(s($)?$.enter:$),P=!1!==a&&!uo,F=cr(D),M=i._enterCb=T(function(){P&&(er(i,j),er(i,O)),M.cancelled?(P&&er(i,S),L&&L(i)):I&&I(i),i._enterCb=null});t.data.show||it(t.data.hook||(t.data.hook={}),"insert",function(){var e=i.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),D&&D(i,M)}),N&&N(i),P&&(tr(i,S),tr(i,O),Yn(function(){tr(i,j),er(i,S),M.cancelled||F||(ur(R)?setTimeout(M,R):nr(i,u,M))})),t.data.show&&(e&&e(),D&&D(i,M)),P||F||M()}}}function sr(t,e){function i(){C.cancelled||(t.data.show||((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),h&&h(o),_&&(tr(o,l),tr(o,d),Yn(function(){tr(o,f),er(o,l),C.cancelled||w||(ur(x)?setTimeout(C,x):nr(o,c,C))})),v&&v(o,C),_||w||C())}var o=t.elm;r(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var a=Zn(t.data.transition);if(n(a))return e();if(!r(o._leaveCb)&&1===o.nodeType){var u=a.css,c=a.type,l=a.leaveClass,f=a.leaveToClass,d=a.leaveActiveClass,h=a.beforeLeave,v=a.leave,g=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,b=a.duration,_=!1!==u&&!uo,w=cr(v),x=p(s(b)?b.leave:b),C=o._leaveCb=T(function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),_&&(er(o,f),er(o,d)),C.cancelled?(_&&er(o,l),m&&m(o)):(e(),g&&g(o)),o._leaveCb=null});y?y(i):i()}}function ur(t){return"number"==typeof t&&!isNaN(t)}function cr(t){if(n(t))return!1;var e=t.fns;return r(e)?cr(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function lr(t,e){!0!==e.data.show&&ar(e)}function fr(t,e,n){pr(t,e,n),(so||co)&&setTimeout(function(){pr(t,e,n)},0)}function pr(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,u=t.options.length;s<u;s++)if(a=t.options[s],i)o=C(r,hr(a))>-1,a.selected!==o&&(a.selected=o);else if(x(hr(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function dr(t,e){return e.every(function(e){return!x(e,t)})}function hr(t){return"_value"in t?t._value:t.value}function vr(t){t.target.composing=!0}function gr(t){t.target.composing&&(t.target.composing=!1,mr(t.target,"input"))}function mr(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function yr(t){return!t.componentInstance||t.data&&t.data.transition?t:yr(t.componentInstance._vnode)}function br(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?br(vt(e.children)):t}function _r(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[zi(o)]=i[o];return e}function wr(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function xr(t){for(;t=t.parent;)if(t.data.transition)return!0}function Cr(t,e){return e.key===t.key&&e.tag===t.tag}function Tr(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function $r(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ar(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function kr(t,e){var n=e?xs(e):_s;if(n.test(t)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(t);){i=r.index,i>a&&o.push(JSON.stringify(t.slice(a,i)));var s=vn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<t.length&&o.push(JSON.stringify(t.slice(a))),o.join("+")}}function Er(t,e){var n=(e.warn,Tn(t,"class"));n&&(t.staticClass=JSON.stringify(n));var r=Cn(t,"class",!1);r&&(t.classBinding=r)}function Sr(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}function Or(t,e){var n=(e.warn,Tn(t,"style"));if(n){t.staticStyle=JSON.stringify(Ua(n))}var r=Cn(t,"style",!1);r&&(t.styleBinding=r)}function jr(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}function Nr(t,e){e.value&&bn(t,"textContent","_s("+e.value+")")}function Dr(t,e){e.value&&bn(t,"innerHTML","_s("+e.value+")")}function Ir(t,e){var n=e?nu:eu;return t.replace(n,function(t){return tu[t]})}function Lr(t,e){function n(e){l+=e,t=t.substring(e)}function r(t,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),t&&(s=t.toLowerCase()),t)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var u=a.length-1;u>=i;u--)e.end&&e.end(a[u].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,r):"p"===s&&(e.start&&e.start(t,[],!1,n,r),e.end&&e.end(t,n,r))}for(var i,o,a=[],s=e.expectHTML,u=e.isUnaryTag||Ji,c=e.canBeLeftOpenTag||Ji,l=0;t;){if(i=t,o&&Zs(o)){var f=0,p=o.toLowerCase(),d=Ys[p]||(Ys[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),h=t.replace(d,function(t,n,r){return f=r.length,Zs(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),iu(p,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});l+=t.length-h.length,t=h,r(p,l-f,l)}else{var v=t.indexOf("<");if(0===v){if(Ms.test(t)){var g=t.indexOf("--\x3e");if(g>=0){e.shouldKeepComment&&e.comment(t.substring(4,g)),n(g+3);continue}}if(qs.test(t)){var m=t.indexOf("]>");if(m>=0){n(m+2);continue}}var y=t.match(Fs);if(y){n(y[0].length);continue}var b=t.match(Ps);if(b){var _=l;n(b[0].length),r(b[1],_,l);continue}var w=function(){var e=t.match(Ls);if(e){var r={tagName:e[1],attrs:[],start:l};n(e[0].length);for(var i,o;!(i=t.match(Rs))&&(o=t.match(Ns));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if(w){!function(t){var n=t.tagName,i=t.unarySlash;s&&("p"===o&&Ss(n)&&r(o),c(n)&&o===n&&r(n));for(var l=u(n)||!!i,f=t.attrs.length,p=new Array(f),d=0;d<f;d++){var h=t.attrs[d];Hs&&-1===h[0].indexOf('""')&&(""===h[3]&&delete h[3],""===h[4]&&delete h[4],""===h[5]&&delete h[5]);var v=h[3]||h[4]||h[5]||"";p[d]={name:h[1],value:Ir(v,e.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),e.start&&e.start(n,p,l,t.start,t.end)}(w),iu(o,t)&&n(1);continue}}var x=void 0,C=void 0,T=void 0;if(v>=0){for(C=t.slice(v);!(Ps.test(C)||Ls.test(C)||Ms.test(C)||qs.test(C)||(T=C.indexOf("<",1))<0);)v+=T,C=t.slice(v);x=t.substring(0,v),n(v)}v<0&&(x=t,t=""),e.chars&&x&&e.chars(x)}if(t===i){e.chars&&e.chars(t);break}}r()}function Rr(t,e){function n(t){t.pre&&(s=!1),Xs(t.tag)&&(u=!1)}Bs=e.warn||mn,Xs=e.isPreTag||Ji,Ks=e.mustUseProp||Ji,Js=e.getTagNamespace||Ji,Ws=yn(e.modules,"transformNode"),zs=yn(e.modules,"preTransformNode"),Vs=yn(e.modules,"postTransformNode"),Us=e.delimiters;var r,i,o=[],a=!1!==e.preserveWhitespace,s=!1,u=!1;return Lr(t,{warn:Bs,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldKeepComment:e.comments,start:function(t,a,c){var l=i&&i.ns||Js(t);so&&"svg"===l&&(a=ei(a));var f={type:1,tag:t,attrsList:a,attrsMap:Zr(a),parent:i,children:[]};l&&(f.ns=l),ti(f)&&!bo()&&(f.forbidden=!0);for(var p=0;p<zs.length;p++)zs[p](f,e);if(s||(Pr(f),f.pre&&(s=!0)),Xs(f.tag)&&(u=!0),s)Fr(f);else{Hr(f),Br(f),Vr(f),Mr(f),f.plain=!f.key&&!a.length,qr(f),Xr(f),Kr(f);for(var d=0;d<Ws.length;d++)Ws[d](f,e);Jr(f)}if(r?o.length||r.if&&(f.elseif||f.else)&&zr(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Ur(f,i);else if(f.slotScope){i.plain=!1;var h=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=f}else i.children.push(f),f.parent=i;c?n(f):(i=f,o.push(f));for(var v=0;v<Vs.length;v++)Vs[v](f,e)},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!u&&t.children.pop(),o.length-=1,i=o[o.length-1],n(t)},chars:function(t){if(i&&(!so||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var e=i.children;if(t=u||t.trim()?Yr(i)?t:pu(t):a&&e.length?" ":""){var n;!s&&" "!==t&&(n=kr(t,Us))?e.push({type:2,expression:n,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}},comment:function(t){i.children.push({type:3,text:t,isComment:!0})}}),r}function Pr(t){null!=Tn(t,"v-pre")&&(t.pre=!0)}function Fr(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}function Mr(t){var e=Cn(t,"key");e&&(t.key=e)}function qr(t){var e=Cn(t,"ref");e&&(t.ref=e,t.refInFor=Qr(t))}function Hr(t){var e;if(e=Tn(t,"v-for")){var n=e.match(su);if(!n)return;t.for=n[2].trim();var r=n[1].trim(),i=r.match(uu);i?(t.alias=i[1].trim(),t.iterator1=i[2].trim(),i[3]&&(t.iterator2=i[3].trim())):t.alias=r}}function Br(t){var e=Tn(t,"v-if");if(e)t.if=e,zr(t,{exp:e,block:t});else{null!=Tn(t,"v-else")&&(t.else=!0);var n=Tn(t,"v-else-if");n&&(t.elseif=n)}}function Ur(t,e){var n=Wr(e.children);n&&n.if&&zr(n,{exp:t.elseif,block:t})}function Wr(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}function zr(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Vr(t){null!=Tn(t,"v-once")&&(t.once=!0)}function Xr(t){if("slot"===t.tag)t.slotName=Cn(t,"name");else{var e=Cn(t,"slot");e&&(t.slotTarget='""'===e?'"default"':e,_n(t,"slot",e)),"template"===t.tag&&(t.slotScope=Tn(t,"scope"))}}function Kr(t){var e;(e=Cn(t,"is"))&&(t.component=e),null!=Tn(t,"inline-template")&&(t.inlineTemplate=!0)}function Jr(t){var e,n,r,i,o,a,s,u=t.attrsList;for(e=0,n=u.length;e<n;e++)if(r=i=u[e].name,o=u[e].value,au.test(r))if(t.hasBindings=!0,a=Gr(r),a&&(r=r.replace(fu,"")),lu.test(r))r=r.replace(lu,""),o=vn(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=zi(r))&&(r="innerHTML")),a.camel&&(r=zi(r)),a.sync&&xn(t,"update:"+zi(r),An(o,"$event"))),s||!t.component&&Ks(t.tag,t.attrsMap.type,r)?bn(t,r,o):_n(t,r,o);else if(ou.test(r))r=r.replace(ou,""),xn(t,r,o,a,!1,Bs);else{r=r.replace(au,"");var c=r.match(cu),l=c&&c[1];l&&(r=r.slice(0,-(l.length+1))),wn(t,r,i,o,l,a)}else{_n(t,r,JSON.stringify(o))}}function Qr(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}function Gr(t){var e=t.match(fu);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}function Zr(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}function Yr(t){return"script"===t.tag||"style"===t.tag}function ti(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}function ei(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];du.test(r.name)||(r.name=r.name.replace(hu,""),e.push(r))}return e}function ni(t,e){t&&(Qs=vu(e.staticKeys||""),Gs=e.isReservedTag||Ji,ii(t),oi(t,!1))}function ri(t){return d("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}function ii(t){if(t.static=ai(t),1===t.type){if(!Gs(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];ii(r),r.static||(t.static=!1)}if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++){var a=t.ifConditions[i].block;ii(a),a.static||(t.static=!1)}}}function oi(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)oi(t.children[n],e||!!t.for);if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++)oi(t.ifConditions[i].block,e)}}function ai(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||Hi(t.tag)||!Gs(t.tag)||si(t)||!Object.keys(t).every(Qs))))}function si(t){for(;t.parent;){if(t=t.parent,"template"!==t.tag)return!1;if(t.for)return!0}return!1}function ui(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t){r+='"'+i+'":'+ci(i,t[i])+","}return r.slice(0,-1)+"}"}function ci(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ci(t,e)}).join(",")+"]";var n=mu.test(e.value),r=gu.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)_u[s]?(o+=_u[s],yu[s]&&a.push(s)):a.push(s);a.length&&(i+=li(a)),o&&(i+=o);return"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function li(t){return"if(!('button' in $event)&&"+t.map(fi).join("&&")+")return null;"}function fi(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=yu[t];return"_k($event.keyCode,"+JSON.stringify(t)+(n?","+JSON.stringify(n):"")+")"}function pi(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}}function di(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}}function hi(t,e){var n=new xu(e);return{render:"with(this){return "+(t?vi(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function vi(t,e){if(t.staticRoot&&!t.staticProcessed)return gi(t,e);if(t.once&&!t.onceProcessed)return mi(t,e);if(t.for&&!t.forProcessed)return _i(t,e);if(t.if&&!t.ifProcessed)return yi(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return Di(t,e);var n;if(t.component)n=Ii(t.component,t,e);else{var r=t.plain?void 0:wi(t,e),i=t.inlineTemplate?null:ki(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return ki(t,e)||"void 0"}function gi(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+vi(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function mi(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return yi(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+vi(t,e)+","+e.onceId+++","+n+")":vi(t,e)}return gi(t,e)}function yi(t,e,n,r){return t.ifProcessed=!0,bi(t.ifConditions.slice(),e,n,r)}function bi(t,e,n,r){function i(t){return n?n(t,e):t.once?mi(t,e):vi(t,e)}if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+bi(t,e,n,r):""+i(o.block)}function _i(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||vi)(t,e)+"})"}function wi(t,e){var n="{",r=xi(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:{"+Li(t.attrs)+"},"),t.props&&(n+="domProps:{"+Li(t.props)+"},"),t.events&&(n+=ui(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=ui(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=Ti(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=Ci(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function xi(t,e){var n=t.directives;if(n){var r,i,o,a,s="directives:[",u=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=e.directives[o.name];c&&(a=!!c(t,o,e.warn)),a&&(u=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return u?s.slice(0,-1)+"]":void 0}}function Ci(t,e){var n=t.children[0];if(1===n.type){var r=hi(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}function Ti(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return $i(n,t[n],e)}).join(",")+"])"}function $i(t,e,n){return e.for&&!e.forProcessed?Ai(t,e,n):"{key:"+t+",fn:function("+String(e.attrsMap.scope)+"){return "+("template"===e.tag?ki(e,n)||"void 0":vi(e,n))+"}}"}function Ai(t,e,n){var r=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+$i(t,e,n)+"})"}function ki(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||vi)(a,e);var s=n?Ei(o,e.maybeComponent):0,u=i||Oi;return"["+o.map(function(t){return u(t,e)}).join(",")+"]"+(s?","+s:"")}}function Ei(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(Si(i)||i.ifConditions&&i.ifConditions.some(function(t){return Si(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}function Si(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function Oi(t,e){return 1===t.type?vi(t,e):3===t.type&&t.isComment?Ni(t):ji(t)}function ji(t){return"_v("+(2===t.type?t.expression:Ri(JSON.stringify(t.text)))+")"}function Ni(t){return"_e("+JSON.stringify(t.text)+")"}function Di(t,e){var n=t.slotName||'"default"',r=ki(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return zi(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function Ii(t,e,n){var r=e.inlineTemplate?null:ki(e,n,!0);return"_c("+t+","+wi(e,n)+(r?","+r:"")+")"}function Li(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Ri(r.value)+","}return e.slice(0,-1)}function Ri(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Pi(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),w}}function Fi(t){var e=Object.create(null);return function(n,r,i){r=r||{};var o=r.delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var a=t(n,r),s={},u=[];return s.render=Pi(a.render,u),s.staticRenderFns=a.staticRenderFns.map(function(t){return Pi(t,u)}),e[o]=s}}function Mi(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}var qi=Object.prototype.toString,Hi=d("slot,component",!0),Bi=d("key,ref,slot,is"),Ui=Object.prototype.hasOwnProperty,Wi=/-(\w)/g,zi=g(function(t){return t.replace(Wi,function(t,e){return e?e.toUpperCase():""})}),Vi=g(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Xi=/\B([A-Z])/g,Ki=g(function(t){return t.replace(Xi,"-$1").toLowerCase()}),Ji=function(t,e,n){return!1},Qi=function(t){return t},Gi="data-server-rendered",Zi=["component","directive","filter"],Yi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],to={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ji,isReservedAttr:Ji,isUnknownElement:Ji,getTagNamespace:w,parsePlatformTagName:Qi,mustUseProp:Ji,_lifecycleHooks:Yi},eo=Object.freeze({}),no=/[^\w.$]/,ro=w,io="__proto__"in{},oo="undefined"!=typeof window,ao=oo&&window.navigator.userAgent.toLowerCase(),so=ao&&/msie|trident/.test(ao),uo=ao&&ao.indexOf("msie 9.0")>0,co=ao&&ao.indexOf("edge/")>0,lo=ao&&ao.indexOf("android")>0,fo=ao&&/iphone|ipad|ipod|ios/.test(ao),po=ao&&/chrome\/\d+/.test(ao)&&!co,ho={}.watch,vo=!1;if(oo)try{var go={};Object.defineProperty(go,"passive",{get:function(){vo=!0}}),window.addEventListener("test-passive",null,go)}catch(t){}var mo,yo,bo=function(){return void 0===mo&&(mo=!oo&&void 0!==e&&"server"===e.process.env.VUE_ENV),mo},_o=oo&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,wo="undefined"!=typeof Symbol&&S(Symbol)&&"undefined"!=typeof Reflect&&S(Reflect.ownKeys),xo=function(){function t(){r=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],r=!1;if("undefined"!=typeof Promise&&S(Promise)){var i=Promise.resolve(),o=function(t){};e=function(){i.then(t).catch(o),fo&&setTimeout(w)}}else if(so||"undefined"==typeof MutationObserver||!S(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var a=1,s=new MutationObserver(t),u=document.createTextNode(String(a));s.observe(u,{characterData:!0}),e=function(){a=(a+1)%2,u.data=String(a)}}return function(t,i){var o;if(n.push(function(){if(t)try{t.call(i)}catch(t){E(t,i,"nextTick")}else o&&o(i)}),r||(r=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){o=t})}}();yo="undefined"!=typeof Set&&S(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Co=0,To=function(){this.id=Co++,this.subs=[]};To.prototype.addSub=function(t){this.subs.push(t)},To.prototype.removeSub=function(t){h(this.subs,t)},To.prototype.depend=function(){To.target&&To.target.addDep(this)},To.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},To.target=null;var $o=[],Ao=Array.prototype,ko=Object.create(Ao);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Ao[t];A(ko,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var Eo=Object.getOwnPropertyNames(ko),So={shouldConvert:!0},Oo=function(t){if(this.value=t,this.dep=new To,this.vmCount=0,A(t,"__ob__",this),Array.isArray(t)){(io?N:D)(t,ko,Eo),this.observeArray(t)}else this.walk(t)};Oo.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)L(t,e[n],t[e[n]])},Oo.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)I(t[e])};var jo=to.optionMergeStrategies;jo.data=function(t,e,n){return n?q(t,e,n):e&&"function"!=typeof e?t:q.call(this,t,e)},Yi.forEach(function(t){jo[t]=H}),Zi.forEach(function(t){jo[t+"s"]=B}),jo.watch=function(t,e){if(t===ho&&(t=void 0),e===ho&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};b(n,t);for(var r in e){var i=n[r],o=e[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},jo.props=jo.methods=jo.inject=jo.computed=function(t,e){if(!t)return e;var n=Object.create(null);return b(n,t),e&&b(n,e),n},jo.provide=q;var No=function(t,e){return void 0===e?t:e},Do=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Io={child:{}};Io.child.get=function(){return this.componentInstance},Object.defineProperties(Do.prototype,Io);var Lo,Ro=function(t){void 0===t&&(t="");var e=new Do;return e.text=t,e.isComment=!0,e},Po=g(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,plain:!(e||n||r),once:n,capture:r,passive:e}}),Fo=null,Mo=[],qo=[],Ho={},Bo=!1,Uo=!1,Wo=0,zo=0,Vo=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new yo,this.newDepIds=new yo,this.expression="","function"==typeof e?this.getter=e:(this.getter=k(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Vo.prototype.get=function(){O(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;E(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Rt(t),j(),this.cleanupDeps()}return t},Vo.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Vo.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Vo.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Lt(this)},Vo.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){E(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Vo.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Vo.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},Vo.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var Xo=new yo,Ko={enumerable:!0,configurable:!0,get:w,set:w},Jo={lazy:!0},Qo={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){(t.componentInstance=ee(t,Fo,n,r)).$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;Qo.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;$t(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,St(n,"mounted")),t.data.keepAlive&&(e._isMounted?Dt(n):kt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Et(e,!0):e.$destroy())}},Go=Object.keys(Qo),Zo=1,Yo=2,ta=0;!function(t){t.prototype._init=function(t){var e=this;e._uid=ta++,e._isVue=!0,t&&t._isComponent?be(e,t):e.$options=V(_e(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ct(e),gt(e),ye(e),St(e,"beforeCreate"),Qt(e),Mt(e),Jt(e),St(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(Ce),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=R,t.prototype.$delete=P,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return Kt(r,t,e,n);n=n||{},n.user=!0;var i=new Vo(r,t,e,n);return n.immediate&&e.call(r,i.value),function(){i.teardown()}}}(Ce),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,i=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)r.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return r}var a=r._events[t];if(!a)return r;if(1===arguments.length)return r._events[t]=null,r;if(e)for(var s,u=a.length;u--;)if((s=a[u])===e||s.fn===e){a.splice(u,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?y(n):n;for(var r=y(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(e,r)}catch(n){E(n,e,'event handler for "'+t+'"')}}return e}}(Ce),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&St(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=Fo;Fo=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Fo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){St(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),St(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Ce),function(t){t.prototype.$nextTick=function(t){return xo(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e.staticRenderFns,i=e._parentVnode;if(t._isMounted)for(var o in t.$slots){var a=t.$slots[o];a._rendered&&(t.$slots[o]=tt(a,!0))}t.$scopedSlots=i&&i.data.scopedSlots||eo,r&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=i;var s;try{s=n.call(t._renderProxy,t.$createElement)}catch(e){E(e,t,"render function"),s=t._vnode}return s instanceof Do||(s=Ro()),s.parent=i,s},t.prototype._o=he,t.prototype._n=p,t.prototype._s=f,t.prototype._l=ue,t.prototype._t=ce,t.prototype._q=x,t.prototype._i=C,t.prototype._m=de,t.prototype._f=le,t.prototype._k=fe,t.prototype._b=pe,t.prototype._v=Z,t.prototype._e=Ro,t.prototype._u=xt,t.prototype._g=me}(Ce);var ea=[String,RegExp,Array],na={name:"keep-alive",abstract:!0,props:{include:ea,exclude:ea},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)De(t.cache[e])},watch:{include:function(t){Ne(this.cache,this._vnode,function(e){return je(t,e)})},exclude:function(t){Ne(this.cache,this._vnode,function(e){return!je(t,e)})}},render:function(){var t=vt(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Oe(e);if(n&&(this.include&&!je(this.include,n)||this.exclude&&je(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},ra={KeepAlive:na};!function(t){var e={};e.get=function(){return to},Object.defineProperty(t,"config",e),t.util={warn:ro,extend:b,mergeOptions:V,defineReactive:L},t.set=R,t.delete=P,t.nextTick=xo,t.options=Object.create(null),Zi.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,b(t.options.components,ra),Te(t),$e(t),Ae(t),Se(t)}(Ce),Object.defineProperty(Ce.prototype,"$isServer",{get:bo}),Object.defineProperty(Ce.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ce.version="2.4.4";var ia,oa,aa,sa,ua,ca,la,fa,pa,da=d("style,class"),ha=d("input,textarea,option,select,progress"),va=function(t,e,n){return"value"===n&&ha(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},ga=d("contenteditable,draggable,spellcheck"),ma=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ya="http://www.w3.org/1999/xlink",ba=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},_a=function(t){return ba(t)?t.slice(6,t.length):""},wa=function(t){return null==t||!1===t},xa={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ca=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ta=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),$a=function(t){return"pre"===t},Aa=function(t){return Ca(t)||Ta(t)},ka=Object.create(null),Ea=d("text,number,password,search,email,tel,url"),Sa=Object.freeze({createElement:We,createElementNS:ze,createTextNode:Ve,createComment:Xe,insertBefore:Ke,removeChild:Je,appendChild:Qe,parentNode:Ge,nextSibling:Ze,tagName:Ye,setTextContent:tn,setAttribute:en}),Oa={create:function(t,e){nn(e)},update:function(t,e){t.data.ref!==e.data.ref&&(nn(t,!0),nn(e))},destroy:function(t){nn(t,!0)}},ja=new Do("",{},[]),Na=["create","activate","update","remove","destroy"],Da={create:sn,update:sn,destroy:function(t){sn(t,ja)}},Ia=Object.create(null),La=[Oa,Da],Ra={create:pn,update:pn},Pa={create:hn,update:hn},Fa=/[\w).+\-_$\]]/,Ma="__r",qa="__c",Ha={create:Hn,update:Hn},Ba={create:Bn,update:Bn},Ua=g(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}),Wa=/^--/,za=/\s*!important$/,Va=function(t,e,n){if(Wa.test(e))t.style.setProperty(e,n);else if(za.test(n))t.style.setProperty(e,n.replace(za,""),"important");else{var r=Ka(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Xa=["Webkit","Moz","ms"],Ka=g(function(t){if(pa=pa||document.createElement("div").style,"filter"!==(t=zi(t))&&t in pa)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Xa.length;n++){var r=Xa[n]+e;if(r in pa)return r}}),Ja={create:Jn,update:Jn},Qa=g(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Ga=oo&&!uo,Za="transition",Ya="animation",ts="transition",es="transitionend",ns="animation",rs="animationend";Ga&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ts="WebkitTransition",es="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ns="WebkitAnimation",rs="webkitAnimationEnd"));var is=oo&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,os=/\b(transform|all)(,|$)/,as=oo?{create:lr,activate:lr,remove:function(t,e){!0!==t.data.show?sr(t,e):e()}}:{},ss=[Ra,Pa,Ha,Ba,Ja,as],us=ss.concat(La),cs=function(t){function e(t){return new Do(j.tagName(t).toLowerCase(),{},[],void 0,t)}function o(t,e){function n(){0==--n.listeners&&s(t)}return n.listeners=e,n}function s(t){var e=j.parentNode(t);r(e)&&j.removeChild(e,t)}function u(t,e,n,o,a){if(t.isRootInsert=!a,!c(t,e,n,o)){var s=t.data,u=t.children,l=t.tag;r(l)?(t.elm=t.ns?j.createElementNS(t.ns,l):j.createElement(l,t),m(t),h(t,u,e),r(s)&&g(t,e),p(n,t.elm,o)):i(t.isComment)?(t.elm=j.createComment(t.text),p(n,t.elm,o)):(t.elm=j.createTextNode(t.text),p(n,t.elm,o))}}function c(t,e,n,o){var a=t.data;if(r(a)){var s=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,o),r(t.componentInstance))return l(t,e),i(s)&&f(t,e,n,o),!0}}function l(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(g(t,e),m(t)):(nn(t),e.push(t))}function f(t,e,n,i){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(o=a.data)&&r(o=o.transition)){for(o=0;o<S.activate.length;++o)S.activate[o](ja,a);e.push(a);break}p(n,t.elm,i)}function p(t,e,n){r(t)&&(r(n)?n.parentNode===t&&j.insertBefore(t,e,n):j.appendChild(t,e))}function h(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)u(e[r],n,t.elm,null,!0);else a(t.text)&&j.appendChild(t.elm,j.createTextNode(t.text))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function g(t,e){for(var n=0;n<S.create.length;++n)S.create[n](ja,t);k=t.data.hook,r(k)&&(r(k.create)&&k.create(ja,t),r(k.insert)&&e.push(t))}function m(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&j.setAttribute(t.elm,e,""),n=n.parent;r(e=Fo)&&e!==t.context&&r(e=e.$options._scopeId)&&j.setAttribute(t.elm,e,"")}function y(t,e,n,r,i,o){for(;r<=i;++r)u(n[r],o,t,e)}function b(t){var e,n,i=t.data;if(r(i))for(r(e=i.hook)&&r(e=e.destroy)&&e(t),e=0;e<S.destroy.length;++e)S.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function _(t,e,n,i){for(;n<=i;++n){var o=e[n];r(o)&&(r(o.tag)?(w(o),b(o)):s(o.elm))}}function w(t,e){if(r(e)||r(t.data)){var n,i=S.remove.length+1;for(r(e)?e.listeners+=i:e=o(t.elm,i),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&w(n,e),n=0;n<S.remove.length;++n)S.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else s(t.elm)}function x(t,e,i,o,a){for(var s,c,l,f,p=0,d=0,h=e.length-1,v=e[0],g=e[h],m=i.length-1,b=i[0],w=i[m],x=!a;p<=h&&d<=m;)n(v)?v=e[++p]:n(g)?g=e[--h]:rn(v,b)?(T(v,b,o),v=e[++p],b=i[++d]):rn(g,w)?(T(g,w,o),g=e[--h],w=i[--m]):rn(v,w)?(T(v,w,o),x&&j.insertBefore(t,v.elm,j.nextSibling(g.elm)),v=e[++p],w=i[--m]):rn(g,b)?(T(g,b,o),x&&j.insertBefore(t,g.elm,v.elm),g=e[--h],b=i[++d]):(n(s)&&(s=an(e,p,h)),c=r(b.key)?s[b.key]:C(b,e,p,h),n(c)?u(b,o,t,v.elm):(l=e[c],rn(l,b)?(T(l,b,o),e[c]=void 0,x&&j.insertBefore(t,l.elm,v.elm)):u(b,o,t,v.elm)),b=i[++d]);p>h?(f=n(i[m+1])?null:i[m+1].elm,y(t,f,i,d,m,o)):d>m&&_(t,e,p,h)}function C(t,e,n,i){for(var o=n;o<i;o++){var a=e[o];if(r(a)&&rn(t,a))return o}}function T(t,e,o,a){if(t!==e){var s=e.elm=t.elm;if(i(t.isAsyncPlaceholder))return void(r(e.asyncFactory.resolved)?A(t.elm,e,o):e.isAsyncPlaceholder=!0);if(i(e.isStatic)&&i(t.isStatic)&&e.key===t.key&&(i(e.isCloned)||i(e.isOnce)))return void(e.componentInstance=t.componentInstance);var u,c=e.data;r(c)&&r(u=c.hook)&&r(u=u.prepatch)&&u(t,e);var l=t.children,f=e.children;if(r(c)&&v(e)){for(u=0;u<S.update.length;++u)S.update[u](t,e);r(u=c.hook)&&r(u=u.update)&&u(t,e)}n(e.text)?r(l)&&r(f)?l!==f&&x(s,l,f,o,a):r(f)?(r(t.text)&&j.setTextContent(s,""),y(s,null,f,0,f.length-1,o)):r(l)?_(s,l,0,l.length-1):r(t.text)&&j.setTextContent(s,""):t.text!==e.text&&j.setTextContent(s,e.text),r(c)&&r(u=c.hook)&&r(u=u.postpatch)&&u(t,e)}}function $(t,e,n){if(i(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var o=0;o<e.length;++o)e[o].data.hook.insert(e[o])}function A(t,e,n){if(i(e.isComment)&&r(e.asyncFactory))return e.elm=t,e.isAsyncPlaceholder=!0,!0;e.elm=t;var o=e.tag,a=e.data,s=e.children;if(r(a)&&(r(k=a.hook)&&r(k=k.init)&&k(e,!0),r(k=e.componentInstance)))return l(e,n),!0;if(r(o)){if(r(s))if(t.hasChildNodes())if(r(k=a)&&r(k=k.domProps)&&r(k=k.innerHTML)){if(k!==t.innerHTML)return!1}else{for(var u=!0,c=t.firstChild,f=0;f<s.length;f++){if(!c||!A(c,s[f],n)){u=!1;break}c=c.nextSibling}if(!u||c)return!1}else h(e,s,n);if(r(a))for(var p in a)if(!N(p)){g(e,n);break}}else t.data!==e.text&&(t.data=e.text);return!0}var k,E,S={},O=t.modules,j=t.nodeOps;for(k=0;k<Na.length;++k)for(S[Na[k]]=[],E=0;E<O.length;++E)r(O[E][Na[k]])&&S[Na[k]].push(O[E][Na[k]]);var N=d("attrs,style,class,staticClass,staticStyle,key");return function(t,o,a,s,c,l){if(n(o))return void(r(t)&&b(t));var f=!1,p=[];if(n(t))f=!0,u(o,p,c,l);else{var d=r(t.nodeType);if(!d&&rn(t,o))T(t,o,p,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(Gi)&&(t.removeAttribute(Gi),a=!0),i(a)&&A(t,o,p))return $(o,p,!0),t;t=e(t)}var h=t.elm,g=j.parentNode(h);if(u(o,p,h._leaveCb?null:g,j.nextSibling(h)),r(o.parent))for(var m=o.parent,y=v(o);m;){for(var w=0;w<S.destroy.length;++w)S.destroy[w](m);if(m.elm=o.elm,y){for(var x=0;x<S.create.length;++x)S.create[x](ja,m);var C=m.data.hook.insert;if(C.merged)for(var k=1;k<C.fns.length;k++)C.fns[k]()}m=m.parent}r(g)?_(g,[t],0,0):r(t.tag)&&b(t)}}return $(o,p,f),o.elm}}({nodeOps:Sa,modules:us});uo&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&mr(t,"input")});var ls={inserted:function(t,e,n){"select"===n.tag?(fr(t,e,n.context),t._vOptions=[].map.call(t.options,hr)):("textarea"===n.tag||Ea(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",gr),lo||(t.addEventListener("compositionstart",vr),t.addEventListener("compositionend",gr)),uo&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){fr(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,hr);if(i.some(function(t,e){return!x(t,r[e])})){(t.multiple?e.value.some(function(t){return dr(t,i)}):e.value!==e.oldValue&&dr(e.value,i))&&mr(t,"change")}}}},fs={bind:function(t,e,n){var r=e.value;n=yr(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ar(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;r!==e.oldValue&&(n=yr(n),n.data&&n.data.transition?(n.data.show=!0,r?ar(n,function(){t.style.display=t.__vOriginalDisplay}):sr(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ps={model:ls,show:fs},ds={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},hs={name:"transition",props:ds,abstract:!0,render:function(t){var e=this,n=this.$options._renderChildren;if(n&&(n=n.filter(function(t){return t.tag||ht(t)}),n.length)){var r=this.mode,i=n[0];if(xr(this.$vnode))return i;var o=br(i);if(!o)return i;if(this._leaving)return wr(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var u=(o.data||(o.data={})).transition=_r(this),c=this._vnode,l=br(c);if(o.data.directives&&o.data.directives.some(function(t){return"show"===t.name})&&(o.data.show=!0),l&&l.data&&!Cr(o,l)&&!ht(l)){var f=l&&(l.data.transition=b({},u));if("out-in"===r)return this._leaving=!0,it(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),wr(t,i);if("in-out"===r){if(ht(o))return c;var p,d=function(){p()};it(u,"afterEnter",d),it(u,"enterCancelled",d),it(f,"delayLeave",function(t){p=t})}}return i}}},vs=b({tag:String,moveClass:String},ds);delete vs.mode;var gs={props:vs,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=_r(this),s=0;s<i.length;s++){var u=i[s];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a;else;}if(r){for(var c=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?c.push(p):l.push(p)}this.kept=t(e,null,c),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(Tr),t.forEach($r),t.forEach(Ar);var n=document.body;n.offsetHeight;t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;tr(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(es,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(es,t),n._moveCb=null,er(n,e))})}})}},methods:{hasMove:function(t,e){if(!Ga)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Gn(n,t)}),Qn(n,e),n.style.display="none",this.$el.appendChild(n);var r=rr(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},ms={Transition:hs,TransitionGroup:gs};Ce.config.mustUseProp=va,Ce.config.isReservedTag=Aa,Ce.config.isReservedAttr=da,Ce.config.getTagNamespace=He,Ce.config.isUnknownElement=Be,b(Ce.options.directives,ps),b(Ce.options.components,ms),Ce.prototype.__patch__=oo?cs:w,Ce.prototype.$mount=function(t,e){return t=t&&oo?Ue(t):void 0,Tt(this,t,e)},setTimeout(function(){to.devtools&&_o&&_o.emit("init",Ce)},0);var ys,bs=!!oo&&function(t,e){var n=document.createElement("div");return n.innerHTML='<div a="'+t+'"/>',n.innerHTML.indexOf(e)>0}("\n","&#10;"),_s=/\{\{((?:.|\n)+?)\}\}/g,ws=/[-.*+?^${}()|[\]\/\\]/g,xs=g(function(t){var e=t[0].replace(ws,"\\$&"),n=t[1].replace(ws,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}),Cs={staticKeys:["staticClass"],transformNode:Er,genData:Sr},Ts={staticKeys:["staticStyle"],transformNode:Or,genData:jr},$s=[Cs,Ts],As={model:Dn,text:Nr,html:Dr},ks=d("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Es=d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ss=d("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Os={expectHTML:!0,modules:$s,directives:As,isPreTag:$a,isUnaryTag:ks,mustUseProp:va,canBeLeftOpenTag:Es,isReservedTag:Aa,getTagNamespace:He,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}($s)},js={decode:function(t){return ys=ys||document.createElement("div"),ys.innerHTML=t,ys.textContent}},Ns=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ds="[a-zA-Z_][\\w\\-\\.]*",Is="((?:"+Ds+"\\:)?"+Ds+")",Ls=new RegExp("^<"+Is),Rs=/^\s*(\/?)>/,Ps=new RegExp("^<\\/"+Is+"[^>]*>"),Fs=/^<!DOCTYPE [^>]+>/i,Ms=/^<!--/,qs=/^<!\[/,Hs=!1;"x".replace(/x(.)?/g,function(t,e){Hs=""===e});var Bs,Us,Ws,zs,Vs,Xs,Ks,Js,Qs,Gs,Zs=d("script,style,textarea",!0),Ys={},tu={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},eu=/&(?:lt|gt|quot|amp);/g,nu=/&(?:lt|gt|quot|amp|#10);/g,ru=d("pre,textarea",!0),iu=function(t,e){return t&&ru(t)&&"\n"===e[0]},ou=/^@|^v-on:/,au=/^v-|^@|^:/,su=/(.*?)\s+(?:in|of)\s+(.*)/,uu=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,cu=/:(.*)$/,lu=/^:|^v-bind:/,fu=/\.[^.]+/g,pu=g(js.decode),du=/^xmlns:NS\d+/,hu=/^NS\d+:/,vu=g(ri),gu=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,mu=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,yu={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},bu=function(t){return"if("+t+")return null;"},_u={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:bu("$event.target !== $event.currentTarget"),ctrl:bu("!$event.ctrlKey"),shift:bu("!$event.shiftKey"),alt:bu("!$event.altKey"),meta:bu("!$event.metaKey"),left:bu("'button' in $event && $event.button !== 0"),middle:bu("'button' in $event && $event.button !== 1"),right:bu("'button' in $event && $event.button !== 2")},wu={on:pi,bind:di,cloak:w},xu=function(t){this.options=t,this.warn=t.warn||mn,this.transforms=yn(t.modules,"transformCode"),this.dataGenFns=yn(t.modules,"genData"),this.directives=b(b({},wu),t.directives);var e=t.isReservedTag||Ji;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]},Cu=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(t){return function(e){function n(n,r){var i=Object.create(e),o=[],a=[];if(i.warn=function(t,e){(e?a:o).push(t)},r){r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=b(Object.create(e.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var u=t(n,i);return u.errors=o,u.tips=a,u}return{compile:n,compileToFunctions:Fi(n)}}}(function(t,e){var n=Rr(t.trim(),e);ni(n,e);var r=hi(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})),Tu=Cu(Os),$u=Tu.compileToFunctions,Au=g(function(t){var e=Ue(t);return e&&e.innerHTML}),ku=Ce.prototype.$mount;Ce.prototype.$mount=function(t,e){if((t=t&&Ue(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Au(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=Mi(t));if(r){var i=$u(r,{shouldDecodeNewlines:bs,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ku.call(this,t,e)},Ce.compile=$u,t.exports=Ce}).call(e,n(2))},function(t,e,n){var r=n(37),i=n(38),o=n(39),a=r(i,o,null,null,null);t.exports=a.exports},function(t,e){t.exports=function(t,e,n,r,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(t,e){return c.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:a,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){}}},function(t,e){var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2"},[n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[t._v("Example Component")]),t._v(" "),n("div",{staticClass:"panel-body"},[t._v("\n                    I'm an example component!\n                ")])])])])])}];t.exports={render:n,staticRenderFns:r}},function(t,e){}]);
(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));
