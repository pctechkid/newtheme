(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d364e3a0"],{"0262":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"content g2-content"},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._m(0),t._v(" "+t._s(t.$t("page.video.play"))+" / "),t._m(1),t._v(" "+t._s(t.$t("page.video.download"))+" ")])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("page.video.link")))]),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text"},domProps:{value:t.videourl}})])]),e("div",{staticClass:"columns is-mobile is-multiline has-text-centered"},t._l(t.players,(function(r,n){return e("div",{key:n,staticClass:"column"},[e("p",{staticClass:"heading"},[e("a",{attrs:{href:r.scheme}},[e("figure",{staticClass:"image is-48x48",staticStyle:{margin:"0 auto"}},[e("img",{staticClass:"icon",attrs:{src:r.icon}})])])]),e("p",{},[t._v(t._s(r.name))])])})),0)])])])])},i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])}],o=e("6a54"),s=o["a"],a=e("2877"),u=Object(a["a"])(s,n,i,!1,null,null,null);r["default"]=u.exports},"1fb5":function(t,r,e){"use strict";r.byteLength=h,r.toByteArray=l,r.fromByteArray=d;for(var n=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)n[a]=s[a],i[s.charCodeAt(a)]=a;function f(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");-1===e&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function h(t){var r=f(t),e=r[0],n=r[1];return 3*(e+n)/4-n}function c(t,r,e){return 3*(r+e)/4-e}function l(t){var r,e,n=f(t),s=n[0],a=n[1],u=new o(c(t,s,a)),h=0,l=a>0?s-4:s;for(e=0;e<l;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],u[h++]=r>>16&255,u[h++]=r>>8&255,u[h++]=255&r;return 2===a&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,u[h++]=255&r),1===a&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,u[h++]=r>>8&255,u[h++]=255&r),u}function p(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function g(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(p(n));return i.join("")}function d(t){for(var r,e=t.length,i=e%3,o=[],s=16383,a=0,u=e-i;a<u;a+=s)o.push(g(t,a,a+s>u?u:a+s));return 1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"=")),o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"6a54":function(t,r,e){"use strict";(function(t){e("d3b7"),e("25f0");var n=e("45d8");r["a"]={data:function(){return{apiurl:"",videourl:""}},methods:{render:function(){this.videourl=window.location.origin+encodeURI(this.url),this.apiurl="https://api.jsonpop.cn/demo/blplyaer/?url="+this.videourl}},activated:function(){this.render()},computed:{url:function(){return this.$route.params.path?Object(n["d"])(this.$route.params.path):""},players:function(){return[{name:"PotPlayer",icon:"https://cloud.jsonpop.cn/go2index/player/potplayer.png",scheme:"potplayer://"+this.videourl},{name:"VLC",icon:"https://cloud.jsonpop.cn/go2index/player/vlc.png",scheme:"vlc://"+this.videourl},{name:"nPlayer",icon:"https://cloud.jsonpop.cn/go2index/player/nplayer.png",scheme:"nplayer-"+this.videourl},{name:"MXPlayer",icon:"https://cloud.jsonpop.cn/go2index/player/mxplayer.png",scheme:""+this.videourl}]},getThunder:function(){return t.from("AA"+this.videourl+"ZZ").toString("base64")}}}}).call(this,e("b639").Buffer)},9152:function(t,r){r.read=function(t,r,e,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[r+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[r+c],c+=l,h-=8);if(0===o)o=1-f;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var s,a,u,f=8*o-i-1,h=(1<<f)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,s=h):(s=Math.floor(Math.log(r)/Math.LN2),r*(u=Math.pow(2,-s))<1&&(s--,u*=2),r+=s+c>=1?l/u:l*Math.pow(2,1-c),r*u>=2&&(s++,u/=2),s+c>=h?(a=0,s=h):s+c>=1?(a=(r*u-1)*Math.pow(2,i),s+=c):(a=r*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[e+p]=255&a,p+=g,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[e+p]=255&s,p+=g,s/=256,f-=8);t[e+p-g]|=128*d}},b639:function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=e("1fb5"),i=e("9152"),o=e("e3db");function s(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}function a(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(a()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=f.prototype):(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!f.TYPED_ARRAY_SUPPORT&&!(this instanceof f))return new f(t,r,e);if("number"===typeof t){if("string"===typeof r)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return h(this,t,r,e)}function h(t,r,e,n){if("number"===typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&r instanceof ArrayBuffer?y(t,r,e,n):"string"===typeof r?g(t,r,e):w(t,r)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,r,e,n){return c(r),r<=0?u(t,r):void 0!==e?"string"===typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}function p(t,r){if(c(r),t=u(t,r<0?0:0|v(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function g(t,r,e){if("string"===typeof e&&""!==e||(e="utf8"),!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|b(r,e);t=u(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function d(t,r){var e=r.length<0?0:0|v(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function y(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),f.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=f.prototype):t=d(t,r),t}function w(t,r){if(f.isBuffer(r)){var e=0|v(r.length);return t=u(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!==typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!==typeof r.length||rt(r.length)?u(t,0):d(t,r);if("Buffer"===r.type&&o(r.data))return d(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function v(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function m(t){return+t!=t&&(t=0),f.alloc(+t)}function b(t,r){if(f.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return W(t).length;default:if(n)return H(t).length;r=(""+r).toLowerCase(),n=!0}}function A(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";t||(t="utf8");while(1)switch(t){case"hex":return D(this,r,e);case"utf8":case"utf-8":return Y(this,r,e);case"ascii":return M(this,r,e);case"latin1":case"binary":return L(this,r,e);case"base64":return I(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function E(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function _(t,r,e,n,i){if(0===t.length)return-1;if("string"===typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"===typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:R(t,r,e,n,i);if("number"===typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):R(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function R(t,r,e,n,i){var o,s=1,a=t.length,u=r.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,a/=2,u/=2,e/=2}function f(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(i){var h=-1;for(o=e;o<a;o++)if(f(t,o)===f(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===u)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(e+u>a&&(e=a-u),o=e;o>=0;o--){for(var c=!0,l=0;l<u;l++)if(f(t,o+l)!==f(r,l)){c=!1;break}if(c)return o}return-1}function P(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(r.substr(2*s,2),16);if(isNaN(a))return s;t[e+s]=a}return s}function T(t,r,e,n){return tt(H(r,t.length-e),t,e,n)}function B(t,r,e,n){return tt(K(r),t,e,n)}function U(t,r,e,n){return B(t,r,e,n)}function S(t,r,e,n){return tt(W(r),t,e,n)}function C(t,r,e,n){return tt(Q(r,t.length-e),t,e,n)}function I(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function Y(t,r,e){e=Math.min(t.length,e);var n=[],i=r;while(i<e){var o,s,a,u,f=t[i],h=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=e)switch(c){case 1:f<128&&(h=f);break;case 2:o=t[i+1],128===(192&o)&&(u=(31&f)<<6|63&o,u>127&&(h=u));break;case 3:o=t[i+1],s=t[i+2],128===(192&o)&&128===(192&s)&&(u=(15&f)<<12|(63&o)<<6|63&s,u>2047&&(u<55296||u>57343)&&(h=u));break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128===(192&o)&&128===(192&s)&&128===(192&a)&&(u=(15&f)<<18|(63&o)<<12|(63&s)<<6|63&a,u>65535&&u<1114112&&(h=u))}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return O(n)}r.Buffer=f,r.SlowBuffer=m,r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:s(),r.kMaxLength=a(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return h(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return l(null,t,r,e)},f.allocUnsafe=function(t){return p(null,t)},f.allocUnsafeSlow=function(t){return p(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=f.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var s=t[e];if(!f.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},f.byteLength=b,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)E(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)E(this,r,r+3),E(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)E(this,r,r+7),E(this,r+1,r+6),E(this,r+2,r+5),E(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Y(this,0,t):A.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,s=e-r,a=Math.min(o,s),u=this.slice(n,i),h=t.slice(r,e),c=0;c<a;++c)if(u[c]!==h[c]){o=u[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return _(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return _(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"===typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return P(this,t,r,e);case"utf8":case"utf-8":return T(this,t,r,e);case"ascii":return B(this,t,r,e);case"latin1":case"binary":return U(this,t,r,e);case"base64":return S(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var x=4096;function O(t){var r=t.length;if(r<=x)return String.fromCharCode.apply(String,t);var e="",n=0;while(n<r)e+=String.fromCharCode.apply(String,t.slice(n,n+=x));return e}function M(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function L(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function D(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=G(t[o]);return i}function k(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function j(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function N(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function z(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function F(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function $(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function X(t,r,e,n,o){return o||$(t,r,e,4,34028234663852886e22,-34028234663852886e22),i.write(t,r,e,n,23,4),e+4}function J(t,r,e,n,o){return o||$(t,r,e,8,17976931348623157e292,-17976931348623157e292),i.write(t,r,e,n,52,8),e+8}f.prototype.slice=function(t,r){var e,n=this.length;if(t=~~t,r=void 0===r?n:~~r,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)e=this.subarray(t,r),e.__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);var n=this[t],i=1,o=0;while(++o<r&&(i*=256))n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);var n=this[t+--r],i=1;while(r>0&&(i*=256))n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||j(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||j(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||j(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||j(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||j(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);var n=this[t],i=1,o=0;while(++o<r&&(i*=256))n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||j(t,r,this.length);var n=r,i=1,o=this[t+--n];while(n>0&&(i*=256))o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||j(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||j(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||j(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||j(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||j(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||j(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||j(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||j(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||j(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){var i=Math.pow(2,8*e)-1;N(this,t,r,e,i,0)}var o=1,s=0;this[r]=255&t;while(++s<e&&(o*=256))this[r+s]=t/o&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){var i=Math.pow(2,8*e)-1;N(this,t,r,e,i,0)}var o=e-1,s=1;this[r+o]=255&t;while(--o>=0&&(s*=256))this[r+o]=t/s&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):z(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):z(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):F(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):F(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);N(this,t,r,e,i-1,-i)}var o=0,s=1,a=0;this[r]=255&t;while(++o<e&&(s*=256))t<0&&0===a&&0!==this[r+o-1]&&(a=1),this[r+o]=(t/s>>0)-a&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);N(this,t,r,e,i-1,-i)}var o=e-1,s=1,a=0;this[r+o]=255&t;while(--o>=0&&(s*=256))t<0&&0===a&&0!==this[r+o+1]&&(a=1),this[r+o]=(t/s>>0)-a&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):z(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):z(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):F(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||N(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):F(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return X(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return X(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return J(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return J(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"===typeof t){if("string"===typeof r?(n=r,r=0,e=this.length):"string"===typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"===typeof t)for(o=r;o<e;++o)this[o]=t;else{var s=f.isBuffer(t)?t:H(new f(t,n).toString()),a=s.length;for(o=0;o<e-r;++o)this[o+r]=s[o%a]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function Z(t){if(t=q(t).replace(V,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function G(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if(e=t.charCodeAt(s),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function K(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function Q(t,r){for(var e,n,i,o=[],s=0;s<t.length;++s){if((r-=2)<0)break;e=t.charCodeAt(s),n=e>>8,i=e%256,o.push(i),o.push(n)}return o}function W(t){return n.toByteArray(Z(t))}function tt(t,r,e,n){for(var i=0;i<n;++i){if(i+e>=r.length||i>=t.length)break;r[i+e]=t[i]}return i}function rt(t){return t!==t}}).call(this,e("c8ba"))},e3db:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}}]);