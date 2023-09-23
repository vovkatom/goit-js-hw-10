let t;var e,n,i,o,r,a,s,l,f,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function u(t,e){return function(){return t.apply(e,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:p}=Object.prototype,{getPrototypeOf:d}=Object,m=(e=Object.create(null),t=>{let n=p.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}),h=t=>(t=t.toLowerCase(),e=>m(e)===t),g=t=>e=>typeof e===t,{isArray:y}=Array,b=g("undefined"),w=h("ArrayBuffer"),x=g("string"),v=g("function"),k=g("number"),E=t=>null!==t&&"object"==typeof t,N=t=>{if("object"!==m(t))return!1;let e=d(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},A=h("Date"),S=h("File"),C=h("Blob"),O=h("FileList"),B=h("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function T(t,e,{allOwnKeys:n=!1}={}){let i,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),y(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{let o;// Iterate over object keys
let r=n?Object.getOwnPropertyNames(t):Object.keys(t),a=r.length;for(i=0;i<a;i++)o=r[i],e.call(null,t[o],o,t)}}}function I(t,e){let n;e=e.toLowerCase();let i=Object.keys(t),o=i.length;for(;o-- >0;)if(e===(n=i[o]).toLowerCase())return n;return null}const R=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:c,L=t=>!b(t)&&t!==R,U=(n="undefined"!=typeof Uint8Array&&d(Uint8Array),t=>n&&t instanceof n),j=h("HTMLFormElement"),z=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),D=h("RegExp"),P=(t,e)=>{let n=Object.getOwnPropertyDescriptors(t),i={};T(n,(n,o)=>{let r;!1!==(r=e(n,o,t))&&(i[o]=r||n)}),Object.defineProperties(t,i)},F="abcdefghijklmnopqrstuvwxyz",M="0123456789",_={DIGIT:M,ALPHA:F,ALPHA_DIGIT:F+F.toUpperCase()+M},W=h("AsyncFunction");var H={isArray:y,isArrayBuffer:w,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!b(t)&&null!==t.constructor&&!b(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||v(t.append)&&("formdata"===(e=m(t))||// detect form-data instance
"object"===e&&v(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&w(t.buffer)},isString:x,isNumber:k,isBoolean:t=>!0===t||!1===t,isObject:E,isPlainObject:N,isUndefined:b,isDate:A,isFile:S,isBlob:C,isRegExp:D,isFunction:v,isStream:t=>E(t)&&v(t.pipe),isURLSearchParams:B,isTypedArray:U,isFileList:O,forEach:T,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=L(this)&&this||{},n={},i=(i,o)=>{let r=e&&I(n,o)||o;N(n[r])&&N(i)?n[r]=t(n[r],i):N(i)?n[r]=t({},i):y(i)?n[r]=i.slice():n[r]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(T(e,(e,i)=>{n&&v(e)?t[i]=u(e,n):t[i]=e},{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let o,r,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(r=(o=Object.getOwnPropertyNames(t)).length;r-- >0;)a=o[r],(!i||i(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==n&&d(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype)return e},kindOf:m,kindOfTest:h,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;let i=t.indexOf(e,n);return -1!==i&&i===n},toArray:t=>{if(!t)return null;if(y(t))return t;let e=t.length;if(!k(e))return null;let n=Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{let n;let i=t&&t[Symbol.iterator],o=i.call(t);for(;(n=o.next())&&!n.done;){let i=n.value;e.call(t,i[0],i[1])}},matchAll:(t,e)=>{let n;let i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:j,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:P,freezeMethods:t=>{P(t,(e,n)=>{// skip restricted props in strict mode
if(v(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let i=t[n];if(v(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,e)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(y(t)?t:String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:I,global:R,isContextDefined:L,ALPHABET:_,generateString:(t=16,e=_.ALPHA_DIGIT)=>{let n="",{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&v(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),n=(t,i)=>{if(E(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;let o=y(t)?[]:{};return T(t,(t,e)=>{let r=n(t,i+1);b(r)||(o[e]=r)}),e[i]=void 0,o}}return t};return n(t,0)},isAsyncFn:W,isThenable:t=>t&&(E(t)||v(t))&&v(t.then)&&v(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function $(t,e,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}H.inherits($,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:H.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=$.prototype,V={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{V[t]={value:t}}),Object.defineProperties($,V),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
$.from=(t,e,n,i,o,r)=>{let a=Object.create(q);return H.toFlatObject(t,a,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),$.call(a,t.message,e,n,i,o),a.cause=t,a.name=t.name,r&&Object.assign(a,r),a},s=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,n=t.length,i=n%3// if we have 1 byte left, pad 2 bytes
,o=[],r=0,a=n-i;r<a;r+=16383// must be multiple of 3
)o.push(function(t,e,n){for(var i,o=[],r=e;r<n;r+=3)o.push(J[(i=(t[r]<<16&16711680)+(t[r+1]<<8&65280)+(255&t[r+2]))>>18&63]+J[i>>12&63]+J[i>>6&63]+J[63&i]);return o.join("")}(t,r,r+16383>a?a:r+16383));return 1===i?o.push(J[(e=t[n-1])>>2]+J[e<<4&63]+"=="):2===i&&o.push(J[(e=(t[n-2]<<8)+t[n-1])>>10]+J[e>>4&63]+J[e<<2&63]+"="),o.join("")};for(var J=[],X=[],G="undefined"!=typeof Uint8Array?Uint8Array:Array,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y=0,Q=K.length;Y<Q;++Y)J[Y]=K[Y],X[K.charCodeAt(Y)]=Y;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
X["-".charCodeAt(0)]=62,X["_".charCodeAt(0)]=63,l=function(t,e,n,i,o){var r,a,s=8*o-i-1,l=(1<<s)-1,f=l>>1,c=-7,u=n?o-1:0,p=n?-1:1,d=t[e+u];for(u+=p,r=d&(1<<-c)-1,d>>=-c,c+=s;c>0;r=256*r+t[e+u],u+=p,c-=8);for(a=r&(1<<-c)-1,r>>=-c,c+=i;c>0;a=256*a+t[e+u],u+=p,c-=8);if(0===r)r=1-f;else{if(r===l)return a?NaN:(d?-1:1)*(1/0);a+=Math.pow(2,i),r-=f}return(d?-1:1)*a*Math.pow(2,r-i)},f=function(t,e,n,i,o,r){var a,s,l,f=8*r-o-1,c=(1<<f)-1,u=c>>1,p=23===o?5960464477539062e-23:0,d=i?0:r-1,m=i?1:-1,h=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+u>=1?e+=p/l:e+=p*Math.pow(2,1-u),e*l>=2&&(a++,l/=2),a+u>=c?(s=0,a=c):a+u>=1?(s=(e*l-1)*Math.pow(2,o),a+=u):(s=e*Math.pow(2,u-1)*Math.pow(2,o),a=0));o>=8;t[n+d]=255&s,d+=m,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;t[n+d]=255&a,d+=m,a/=256,f-=8);t[n+d-m]|=128*h};const Z="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function tt(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,te.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function te(t,e,n){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return to(t)}return tn(t,e,n)}function tn(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!te.isEncoding(e))throw TypeError("Unknown encoding: "+e);let n=0|tl(t,e),i=tt(n),o=i.write(t,e);return o!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(i=i.slice(0,o)),i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tI(t,Uint8Array)){let e=new Uint8Array(t);return ta(e.buffer,e.byteOffset,e.byteLength)}return tr(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tI(t,ArrayBuffer)||t&&tI(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tI(t,SharedArrayBuffer)||t&&tI(t.buffer,SharedArrayBuffer)))return ta(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return te.from(i,e,n);let o=function(t){var e;if(te.isBuffer(t)){let e=0|ts(t.length),n=tt(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?tt(0):tr(t):"Buffer"===t.type&&Array.isArray(t.data)?tr(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return te.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ti(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function to(t){return ti(t),tt(t<0?0:0|ts(t))}function tr(t){let e=t.length<0?0:0|ts(t.length),n=tt(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function ta(t,e,n){let i;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),te.prototype),i)}function ts(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tl(t,e){if(te.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tI(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return tO(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return tB(t).length;default:if(o)return i?-1:tO(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function tf(t,e,n){let i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){let i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let o="";for(let i=e;i<n;++i)o+=tR[t[i]];return o}(this,e,n);case"utf8":case"utf-8":return td(this,e,n);case"ascii":return function(t,e,n){let i="";n=Math.min(t.length,n);for(let o=e;o<n;++o)i+=String.fromCharCode(127&t[o]);return i}(this,e,n);case"latin1":case"binary":return function(t,e,n){let i="";n=Math.min(t.length,n);for(let o=e;o<n;++o)i+=String.fromCharCode(t[o]);return i}(this,e,n);case"base64":var o,r;return o=e,r=n,0===o&&r===this.length?s(this):s(this.slice(o,r));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){let i=t.slice(e,n),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<i.length-1;t+=2)o+=String.fromCharCode(i[t]+256*i[t+1]);return o}(this,e,n);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function tc(t,e,n){let i=t[e];t[e]=t[n],t[n]=i}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tu(t,e,n,i,o){var r;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(r=n=+n// Coerce to Number.
)!=r&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return -1;n=t.length-1}else if(n<0){if(!o)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=te.from(e,i)),te.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tp(t,e,n,i,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):tp(t,[e],n,i,o);throw TypeError("val must be string, number or Buffer")}function tp(t,e,n,i,o){let r,a=1,s=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,n/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){let i=-1;for(r=n;r<s;r++)if(f(t,r)===f(e,-1===i?0:r-i)){if(-1===i&&(i=r),r-i+1===l)return i*a}else -1!==i&&(r-=r-i),i=-1}else for(n+l>s&&(n=s-l),r=n;r>=0;r--){let n=!0;for(let i=0;i<l;i++)if(f(t,r+i)!==f(e,i)){n=!1;break}if(n)return r}return -1}function td(t,e,n){n=Math.min(t.length,n);let i=[],o=e;for(;o<n;){let e=t[o],r=null,a=e>239?4:e>223?3:e>191?2:1;if(o+a<=n){let n,i,s,l;switch(a){case 1:e<128&&(r=e);break;case 2:(192&(n=t[o+1]))==128&&(l=(31&e)<<6|63&n)>127&&(r=l);break;case 3:n=t[o+1],i=t[o+2],(192&n)==128&&(192&i)==128&&(l=(15&e)<<12|(63&n)<<6|63&i)>2047&&(l<55296||l>57343)&&(r=l);break;case 4:n=t[o+1],i=t[o+2],s=t[o+3],(192&n)==128&&(192&i)==128&&(192&s)==128&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(r=l)}}null===r?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
r=65533,a=1):r>65535&&(// encode to utf16 (surrogate pair dance)
r-=65536,i.push(r>>>10&1023|55296),r=56320|1023&r),i.push(r),o+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tm(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function th(t,e,n,i,o,r){if(!te.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<r)throw RangeError('"value" argument is out of bounds');if(n+i>t.length)throw RangeError("Index out of range")}function tg(t,e,n,i,o){tN(e,i,o,t,n,7);let r=Number(e&BigInt(4294967295));t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,n}function ty(t,e,n,i,o){tN(e,i,o,t,n,7);let r=Number(e&BigInt(4294967295));t[n+7]=r,r>>=8,t[n+6]=r,r>>=8,t[n+5]=r,r>>=8,t[n+4]=r;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a>>=8,t[n+2]=a,a>>=8,t[n+1]=a,a>>=8,t[n]=a,n+8}function tb(t,e,n,i,o,r){if(n+i>t.length||n<0)throw RangeError("Index out of range")}function tw(t,e,n,i,o){return e=+e,n>>>=0,o||tb(t,e,n,4,34028234663852886e22,-34028234663852886e22),f(t,e,n,i,23,4),n+4}function tx(t,e,n,i,o){return e=+e,n>>>=0,o||tb(t,e,n,8,17976931348623157e292,-17976931348623157e292),f(t,e,n,i,52,8),n+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */te.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),te.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(te.prototype,"parent",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.buffer}}),Object.defineProperty(te.prototype,"offset",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.byteOffset}}),te.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/te.from=function(t,e,n){return tn(t,e,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(te.prototype,Uint8Array.prototype),Object.setPrototypeOf(te,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/te.alloc=function(t,e,n){return(ti(t),t<=0)?tt(t):void 0!==e?"string"==typeof n?tt(t).fill(e,n):tt(t).fill(e):tt(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */te.allocUnsafe=function(t){return to(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */te.allocUnsafeSlow=function(t){return to(t)},te.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==te.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},te.compare=function(t,e){if(tI(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),tI(e,Uint8Array)&&(e=te.from(e,e.offset,e.byteLength)),!te.isBuffer(t)||!te.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let o=0,r=Math.min(n,i);o<r;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},te.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},te.concat=function(t,e){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return te.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;let i=te.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){let e=t[n];if(tI(e,Uint8Array))o+e.length>i.length?(te.isBuffer(e)||(e=te.from(e)),e.copy(i,o)):Uint8Array.prototype.set.call(i,e,o);else if(te.isBuffer(e))e.copy(i,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return i},te.byteLength=tl,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
te.prototype._isBuffer=!0,te.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tc(this,e,e+1);return this},te.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tc(this,e,e+3),tc(this,e+1,e+2);return this},te.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tc(this,e,e+7),tc(this,e+1,e+6),tc(this,e+2,e+5),tc(this,e+3,e+4);return this},te.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?td(this,0,t):tf.apply(this,arguments)},te.prototype.toLocaleString=te.prototype.toString,te.prototype.equals=function(t){if(!te.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===te.compare(this,t)},te.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Z&&(te.prototype[Z]=te.prototype.inspect),te.prototype.compare=function(t,e,n,i,o){if(tI(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),!te.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,o>>>=0,this===t)return 0;let r=o-i,a=n-e,s=Math.min(r,a),l=this.slice(i,o),f=t.slice(e,n);for(let t=0;t<s;++t)if(l[t]!==f[t]){r=l[t],a=f[t];break}return r<a?-1:a<r?1:0},te.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},te.prototype.indexOf=function(t,e,n){return tu(this,t,e,n,!0)},te.prototype.lastIndexOf=function(t,e,n){return tu(this,t,e,n,!1)},te.prototype.write=function(t,e,n,i){var o,r,a,s,l,f,c,u;// Buffer#write(string)
if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let p=this.length-e;if((void 0===n||n>p)&&(n=p),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let d=!1;for(;;)switch(i){case"hex":return function(t,e,n,i){let o;n=Number(n)||0;let r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;let a=e.length;for(i>a/2&&(i=a/2),o=0;o<i;++o){let i=parseInt(e.substr(2*o,2),16);if(i!=i)break;t[n+o]=i}return o}(this,t,e,n);case"utf8":case"utf-8":return o=e,r=n,tT(tO(t,this.length-o),this,o,r);case"ascii":case"latin1":case"binary":return a=e,s=n,tT(function(t){let e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,f=n,tT(tB(t),this,l,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,u=n,tT(function(t,e){let n,i;let o=[];for(let r=0;r<t.length&&!((e-=2)<0);++r)i=(n=t.charCodeAt(r))>>8,o.push(n%256),o.push(i);return o}(t,this.length-c),this,c,u);default:if(d)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),d=!0}},te.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},te.prototype.slice=function(t,e){let n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);let i=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i,te.prototype),i)},te.prototype.readUintLE=te.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let i=this[t],o=1,r=0;for(;++r<e&&(o*=256);)i+=this[t+r]*o;return i},te.prototype.readUintBE=te.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let i=this[t+--e],o=1;for(;e>0&&(o*=256);)i+=this[t+--e]*o;return i},te.prototype.readUint8=te.prototype.readUInt8=function(t,e){return t>>>=0,e||tm(t,1,this.length),this[t]},te.prototype.readUint16LE=te.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tm(t,2,this.length),this[t]|this[t+1]<<8},te.prototype.readUint16BE=te.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tm(t,2,this.length),this[t]<<8|this[t+1]},te.prototype.readUint32LE=te.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tm(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},te.prototype.readUint32BE=te.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tm(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},te.prototype.readBigUInt64LE=tL(function(t){tA(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let i=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(i)+(BigInt(o)<<BigInt(32))}),te.prototype.readBigUInt64BE=tL(function(t){tA(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let i=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(o)}),te.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let i=this[t],o=1,r=0;for(;++r<e&&(o*=256);)i+=this[t+r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},te.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tm(t,e,this.length);let i=e,o=1,r=this[t+--i];for(;i>0&&(o*=256);)r+=this[t+--i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},te.prototype.readInt8=function(t,e){return(t>>>=0,e||tm(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},te.prototype.readInt16LE=function(t,e){t>>>=0,e||tm(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},te.prototype.readInt16BE=function(t,e){t>>>=0,e||tm(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},te.prototype.readInt32LE=function(t,e){return t>>>=0,e||tm(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},te.prototype.readInt32BE=function(t,e){return t>>>=0,e||tm(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},te.prototype.readBigInt64LE=tL(function(t){tA(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),te.prototype.readBigInt64BE=tL(function(t){tA(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tS(t,this.length-8);let i=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),te.prototype.readFloatLE=function(t,e){return t>>>=0,e||tm(t,4,this.length),l(this,t,!0,23,4)},te.prototype.readFloatBE=function(t,e){return t>>>=0,e||tm(t,4,this.length),l(this,t,!1,23,4)},te.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tm(t,8,this.length),l(this,t,!0,52,8)},te.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tm(t,8,this.length),l(this,t,!1,52,8)},te.prototype.writeUintLE=te.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;th(this,t,e,n,i,0)}let o=1,r=0;for(this[e]=255&t;++r<n&&(o*=256);)this[e+r]=t/o&255;return e+n},te.prototype.writeUintBE=te.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;th(this,t,e,n,i,0)}let o=n-1,r=1;for(this[e+o]=255&t;--o>=0&&(r*=256);)this[e+o]=t/r&255;return e+n},te.prototype.writeUint8=te.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,1,255,0),this[e]=255&t,e+1},te.prototype.writeUint16LE=te.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeUint16BE=te.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeUint32LE=te.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},te.prototype.writeUint32BE=te.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigUInt64LE=tL(function(t,e=0){return tg(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeBigUInt64BE=tL(function(t,e=0){return ty(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*n-1);th(this,t,e,n,i-1,-i)}let o=0,r=1,a=0;for(this[e]=255&t;++o<n&&(r*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/r>>0)-a&255;return e+n},te.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*n-1);th(this,t,e,n,i-1,-i)}let o=n-1,r=1,a=0;for(this[e+o]=255&t;--o>=0&&(r*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/r>>0)-a&255;return e+n},te.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},te.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},te.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||th(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigInt64LE=tL(function(t,e=0){return tg(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeBigInt64BE=tL(function(t,e=0){return ty(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeFloatLE=function(t,e,n){return tw(this,t,e,!0,n)},te.prototype.writeFloatBE=function(t,e,n){return tw(this,t,e,!1,n)},te.prototype.writeDoubleLE=function(t,e,n){return tx(this,t,e,!0,n)},te.prototype.writeDoubleBE=function(t,e,n){return tx(this,t,e,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
te.prototype.copy=function(t,e,n,i){if(!te.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);let o=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
te.prototype.fill=function(t,e,n,i){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!te.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){let e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{let r=te.isBuffer(t)?t:te.from(t,i),a=r.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=r[o%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tv={};function tk(t,e,n){tv[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tE(t){let e="",n=t.length,i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function tN(t,e,n,i,o,r){if(t>n||t<e){let i;let o="bigint"==typeof e?"n":"";throw i=r>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(r+1)*8}${o}`:`>= -(2${o} ** ${(r+1)*8-1}${o}) and < 2 ** ${(r+1)*8-1}${o}`:`>= ${e}${o} and <= ${n}${o}`,new tv.ERR_OUT_OF_RANGE("value",i,t)}tA(o,"offset"),(void 0===i[o]||void 0===i[o+r])&&tS(o,i.length-(r+1))}function tA(t,e){if("number"!=typeof t)throw new tv.ERR_INVALID_ARG_TYPE(e,"number",t)}function tS(t,e,n){if(Math.floor(t)!==t)throw tA(t,n),new tv.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new tv.ERR_BUFFER_OUT_OF_BOUNDS;throw new tv.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}tk("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tk("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tk("ERR_OUT_OF_RANGE",function(t,e,n){let i=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?o=tE(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=tE(o)),o+="n"),i+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
const tC=/[^+/0-9A-Za-z-_]/g;function tO(t,e){let n;e=e||1/0;let i=t.length,o=null,r=[];for(let a=0;a<i;++a){// is surrogate component
if((n=t.charCodeAt(a))>55295&&n<57344){// last char was a lead
if(!o){// no lead yet
if(n>56319||a+1===i){// unexpected trail
(e-=3)>-1&&r.push(239,191,189);continue}// valid lead
o=n;continue}// 2 leads in a row
if(n<56320){(e-=3)>-1&&r.push(239,191,189),o=n;continue}// valid surrogate pair
n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&r.push(239,191,189);// encode utf8
if(o=null,n<128){if((e-=1)<0)break;r.push(n)}else if(n<2048){if((e-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return r}function tB(t){return function(t){var e,n,i=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=e);var i=n===e?0:4-n%4;return[n,i]}(t),o=i[0],r=i[1],a=new G((o+r)*3/4-r),s=0,l=r>0?o-4:o;for(n=0;n<l;n+=4)e=X[t.charCodeAt(n)]<<18|X[t.charCodeAt(n+1)]<<12|X[t.charCodeAt(n+2)]<<6|X[t.charCodeAt(n+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=255&e;return 2===r&&(e=X[t.charCodeAt(n)]<<2|X[t.charCodeAt(n+1)]>>4,a[s++]=255&e),1===r&&(e=X[t.charCodeAt(n)]<<10|X[t.charCodeAt(n+1)]<<4|X[t.charCodeAt(n+2)]>>2,a[s++]=e>>8&255,a[s++]=255&e),a}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tC,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tT(t,e,n,i){let o;for(o=0;o<i&&!(o+n>=e.length)&&!(o>=t.length);++o)e[o+n]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tI(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tR=function(){let t="0123456789abcdef",e=Array(256);for(let n=0;n<16;++n){let i=16*n;for(let o=0;o<16;++o)e[i+o]=t[n]+t[o]}return e}();// Return not function with Error if BigInt not supported
function tL(t){return"undefined"==typeof BigInt?tU:t}function tU(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tj(t){return H.isPlainObject(t)||H.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tz(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tD(t,e,n){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tz(t),!n&&e?"["+t+"]":t)}).join(n?".":""):e}const tP=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});var tF=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,n){if(!H.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!H.isUndefined(e[t])});let i=n.metaTokens,o=n.visitor||c,r=n.dots,a=n.indexes,s=n.Blob||"undefined"!=typeof Blob&&Blob,l=s&&H.isSpecCompliantForm(e);if(!H.isFunction(o))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(H.isDate(t))return t.toISOString();if(!l&&H.isBlob(t))throw new $("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(t)||H.isTypedArray(t)?l&&"function"==typeof Blob?new Blob([t]):te.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,n,o){let s=t;if(t&&!o&&"object"==typeof t){if(H.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=i?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var l;if(H.isArray(t)&&(l=t,H.isArray(l)&&!l.some(tj))||(H.isFileList(t)||H.endsWith(n,"[]"))&&(s=H.toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=tz(n),s.forEach(function(t,i){H.isUndefined(t)||null===t||e.append(!0===a?tD([n],i,r):null===a?n:n+"[]",f(t))}),!1)}}return!!tj(t)||(e.append(tD(o,n,r),f(t)),!1)}let u=[],p=Object.assign(tP,{defaultVisitor:c,convertValue:f,isVisitable:tj});if(!H.isObject(t))throw TypeError("data must be an object");return!function t(n,i){if(!H.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),H.forEach(n,function(n,r){let a=!(H.isUndefined(n)||null===n)&&o.call(e,n,H.isString(r)?r.trim():r,i,p);!0===a&&t(n,i?i.concat(r):[r])}),u.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tM(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function t_(t,e){this._pairs=[],t&&tF(t,this,e)}const tW=t_.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tH(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t$(t,e,n){let i;/*eslint no-param-reassign:0*/if(!e)return t;let o=n&&n.encode||tH,r=n&&n.serialize;if(i=r?r(e,n):H.isURLSearchParams(e)?e.toString():new t_(e,n).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}tW.append=function(t,e){this._pairs.push([t,e])},tW.toString=function(t){let e=t?function(e){return t.call(this,e,tM)}:tM;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tq=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){H.forEach(this.handlers,function(e){null!==e&&t(e)})}},tV={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tJ="undefined"!=typeof URLSearchParams?URLSearchParams:t_,tX="undefined"!=typeof FormData?FormData:null,tG="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const tK=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,tY="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tQ={classes:{URLSearchParams:tJ,FormData:tX,Blob:tG},isStandardBrowserEnv:tK,isStandardBrowserWebWorkerEnv:tY,protocols:["http","https","file","blob","url","data"]},tZ=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(H.isFormData(t)&&H.isFunction(t.entries)){let e={};return H.forEachEntry(t,(t,n)=>{!function t(e,n,i,o){let r=e[o++],a=Number.isFinite(+r),s=o>=e.length;if(r=!r&&H.isArray(i)?i.length:r,s)return H.hasOwnProp(i,r)?i[r]=[i[r],n]:i[r]=n,!a;i[r]&&H.isObject(i[r])||(i[r]=[]);let l=t(e,n,i[r],o);return l&&H.isArray(i[r])&&(i[r]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,n;let i={},o=Object.keys(t),r=o.length;for(e=0;e<r;e++)i[n=o[e]]=t[n];return i}(i[r])),!a}(H.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,e,0)}),e}return null};const t0={transitional:tV,adapter:tQ.isNode?"http":"xhr",transformRequest:[function(t,e){let n;let i=e.getContentType()||"",o=i.indexOf("application/json")>-1,r=H.isObject(t);r&&H.isHTMLForm(t)&&(t=new FormData(t));let a=H.isFormData(t);if(a)return o&&o?JSON.stringify(tZ(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1){var s,l;return(s=t,l=this.formSerializer,tF(s,new tQ.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return tQ.isNode&&H.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},l))).toString()}if((n=H.isFileList(t))||i.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tF(n?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,n){if(H.isString(t))try{return(0,JSON.parse)(t),H.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t0.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&H.isString(t)&&(n&&!this.responseType||i)){let n=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&i){if("SyntaxError"===t.name)throw $.from(t,$.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tQ.classes.FormData,Blob:tQ.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],t=>{t0.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t1=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */t2=t=>{let e,n,i;let o={};return t&&t.split("\n").forEach(function(t){i=t.indexOf(":"),e=t.substring(0,i).trim().toLowerCase(),n=t.substring(i+1).trim(),!e||o[e]&&t1[e]||("set-cookie"===e?o[e]?o[e].push(n):o[e]=[n]:o[e]=o[e]?o[e]+", "+n:n)}),o};const t3=Symbol("internals");function t5(t){return t&&String(t).trim().toLowerCase()}function t8(t){return!1===t||null==t?t:H.isArray(t)?t.map(t8):String(t)}const t4=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function t6(t,e,n,i,o){if(H.isFunction(i))return i.call(this,e,n);if(o&&(e=n),H.isString(e)){if(H.isString(i))return -1!==e.indexOf(i);if(H.isRegExp(i))return i.test(e)}}class t9{constructor(t){t&&this.set(t)}set(t,e,n){let i=this;function o(t,e,n){let o=t5(e);if(!o)throw Error("header name must be a non-empty string");let r=H.findKey(i,o);r&&void 0!==i[r]&&!0!==n&&(void 0!==n||!1===i[r])||(i[r||e]=t8(t))}let r=(t,e)=>H.forEach(t,(t,n)=>o(t,n,e));return H.isPlainObject(t)||t instanceof this.constructor?r(t,e):H.isString(t)&&(t=t.trim())&&!t4(t)?r(t2(t),e):null!=t&&o(e,t,n),this}get(t,e){if(t=t5(t)){let n=H.findKey(this,t);if(n){let t=this[n];if(!e)return t;if(!0===e)return function(t){let e;let n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=i.exec(t);)n[e[1]]=e[2];return n}(t);if(H.isFunction(e))return e.call(this,t,n);if(H.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t5(t)){let n=H.findKey(this,t);return!!(n&&void 0!==this[n]&&(!e||t6(this,this[n],n,e)))}return!1}delete(t,e){let n=this,i=!1;function o(t){if(t=t5(t)){let o=H.findKey(n,t);o&&(!e||t6(n,n[o],o,e))&&(delete n[o],i=!0)}}return H.isArray(t)?t.forEach(o):o(t),i}clear(t){let e=Object.keys(this),n=e.length,i=!1;for(;n--;){let o=e[n];(!t||t6(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){let e=this,n={};return H.forEach(this,(i,o)=>{let r=H.findKey(n,o);if(r){e[r]=t8(i),delete e[o];return}let a=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n):String(o).trim();a!==o&&delete e[o],e[a]=t8(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return H.forEach(this,(n,i)=>{null!=n&&!1!==n&&(e[i]=t&&H.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){let e=this[t3]=this[t3]={accessors:{}},n=e.accessors,i=this.prototype;function o(t){let e=t5(t);n[e]||(!function(t,e){let n=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(t,n,o){return this[i].call(this,e,t,n,o)},configurable:!0})})}(i,t),n[e]=!0)}return H.isArray(t)?t.forEach(o):o(t),this}}function t7(t,e){let n=this||t0,i=e||n,o=t9.from(i.headers),r=i.data;return H.forEach(t,function(t){r=t.call(n,r,o.normalize(),e?e.status:void 0)}),o.normalize(),r}function et(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ee(t,e,n){$.call(this,null==t?"canceled":t,$.ERR_CANCELED,e,n),this.name="CanceledError"}t9.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(t9.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[n]=t}}}),H.freezeMethods(t9),H.inherits(ee,$,{__CANCEL__:!0});var en=tQ.isStandardBrowserEnv?{write:function(t,e,n,i,o,r){let a=[];a.push(t+"="+encodeURIComponent(e)),H.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),H.isString(i)&&a.push("path="+i),H.isString(o)&&a.push("domain="+o),!0===r&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ei(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var eo=tQ.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function i(t){let i=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=i(window.location.href),function(e){let n=H.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},er=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let n;t=t||10;let i=Array(t),o=Array(t),r=0,a=0;return e=void 0!==e?e:1e3,function(s){let l=Date.now(),f=o[a];n||(n=l),i[r]=s,o[r]=l;let c=a,u=0;for(;c!==r;)u+=i[c++],c%=t;if((r=(r+1)%t)===a&&(a=(a+1)%t),l-n<e)return;let p=f&&l-f;return p?Math.round(1e3*u/p):void 0}};function ea(t,e){let n=0,i=er(50,250);return o=>{let r=o.loaded,a=o.lengthComputable?o.total:void 0,s=r-n,l=i(s),f=r<=a;n=r;let c={loaded:r,total:a,progress:a?r/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&f?(a-r)/l:void 0,event:o};c[e?"download":"upload"]=!0,t(c)}}const es="undefined"!=typeof XMLHttpRequest;var el=es&&function(t){return new Promise(function(e,n){let i,o=t.data,r=t9.from(t.headers).normalize(),a=t.responseType;function s(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}H.isFormData(o)&&(tQ.isStandardBrowserEnv||tQ.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}let f=ei(t.baseURL,t.url);function c(){if(!l)return;// Prepare the response
let i=t9.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?l.response:l.responseText,r={data:o,status:l.status,statusText:l.statusText,headers:i,config:t,request:l};!function(t,e,n){let i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}(function(t){e(t),s()},function(t){n(t),s()},r),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(t.method.toUpperCase(),t$(f,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=t.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(n(new $("Request aborted",$.ECONNABORTED,t,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new $("Network Error",$.ERR_NETWORK,t,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",i=t.transitional||tV;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new $(e,i.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,t,l)),// Clean up request
l=null},tQ.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||eo(f))&&t.xsrfCookieName&&en.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&r.setContentType(null),"setRequestHeader"in l&&H.forEach(r.toJSON(),function(t,e){l.setRequestHeader(e,t)}),H.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),a&&"json"!==a&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",ea(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",ea(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
i=e=>{l&&(n(!e||e.type?new ee(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));let u=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(f);if(u&&-1===tQ.protocols.indexOf(u)){n(new $("Unsupported protocol "+u+":",$.ERR_BAD_REQUEST,t));return}// Send the request
l.send(o||null)})};const ef={http:null,xhr:el};H.forEach(ef,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var ec={getAdapter:t=>{let e,n;t=H.isArray(t)?t:[t];let{length:i}=t;for(let o=0;o<i&&(e=t[o],!(n=H.isString(e)?ef[e.toLowerCase()]:e));o++);if(!n){if(!1===n)throw new $(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(H.hasOwnProp(ef,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!H.isFunction(n))throw TypeError("adapter is not a function");return n},adapters:ef};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ee(null,t)}function ep(t){eu(t),t.headers=t9.from(t.headers),// Transform request data
t.data=t7.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ec.getAdapter(t.adapter||t0.adapter);return e(t).then(function(e){return eu(t),// Transform response data
e.data=t7.call(t,t.transformResponse,e),e.headers=t9.from(e.headers),e},function(e){return!et(e)&&(eu(t),e&&e.response&&(e.response.data=t7.call(t,t.transformResponse,e.response),e.response.headers=t9.from(e.response.headers))),Promise.reject(e)})}const ed=t=>t instanceof t9?t.toJSON():t;function em(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let n={};function i(t,e,n){return H.isPlainObject(t)&&H.isPlainObject(e)?H.merge.call({caseless:n},t,e):H.isPlainObject(e)?H.merge({},e):H.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,n){return H.isUndefined(e)?H.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}// eslint-disable-next-line consistent-return
function r(t,e){if(!H.isUndefined(e))return i(void 0,e)}// eslint-disable-next-line consistent-return
function a(t,e){return H.isUndefined(e)?H.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}// eslint-disable-next-line consistent-return
function s(n,o,r){return r in e?i(n,o):r in t?i(void 0,n):void 0}let l={url:r,method:r,data:r,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(t,e)=>o(ed(t),ed(e),!0)};return H.forEach(Object.keys(Object.assign({},t,e)),function(i){let r=l[i]||o,a=r(t[i],e[i],i);H.isUndefined(a)&&r!==s||(n[i]=a)}),n}const eh="1.5.0",eg={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eg[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const ey={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eg.transitional=function(t,e,n){function i(t,e){return"[Axios v"+eh+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,o,r)=>{if(!1===t)throw new $(i(o," has been removed"+(e?" in "+e:"")),$.ERR_DEPRECATED);return e&&!ey[o]&&(ey[o]=!0,// eslint-disable-next-line no-console
console.warn(i(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,r)}};var eb={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,n){if("object"!=typeof t)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);let i=Object.keys(t),o=i.length;for(;o-- >0;){let r=i[o],a=e[r];if(a){let e=t[r],n=void 0===e||a(e,r,t);if(!0!==n)throw new $("option "+r+" must be "+n,$.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new $("Unknown option "+r,$.ERR_BAD_OPTION)}},validators:eg};const ew=eb.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class ex{constructor(t){this.defaults=t,this.interceptors={request:new tq,response:new tq}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let n,i;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=em(this.defaults,e);let{transitional:o,paramsSerializer:r,headers:a}=e;void 0!==o&&eb.assertOptions(o,{silentJSONParsing:ew.transitional(ew.boolean),forcedJSONParsing:ew.transitional(ew.boolean),clarifyTimeoutError:ew.transitional(ew.boolean)},!1),null!=r&&(H.isFunction(r)?e.paramsSerializer={serialize:r}:eb.assertOptions(r,{encode:ew.function,serialize:ew.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let s=a&&H.merge(a.common,a[e.method]);a&&H.forEach(["delete","get","head","post","put","patch","common"],t=>{delete a[t]}),e.headers=t9.concat(s,a);// filter out skipped interceptors
let l=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,l.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let u=0;if(!f){let t=[ep.bind(this),void 0];for(t.unshift.apply(t,l),t.push.apply(t,c),i=t.length,n=Promise.resolve(e);u<i;)n=n.then(t[u++],t[u++]);return n}i=l.length;let p=e;for(u=0;u<i;){let t=l[u++],e=l[u++];try{p=t(p)}catch(t){e.call(this,t);break}}try{n=ep.call(this,p)}catch(t){return Promise.reject(t)}for(u=0,i=c.length;u<i;)n=n.then(c[u++],c[u++]);return n}getUri(t){t=em(this.defaults,t);let e=ei(t.baseURL,t.url);return t$(e,t.params,t.paramsSerializer)}}H.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/ex.prototype[t]=function(e,n){return this.request(em(n||{},{method:t,url:e,data:(n||{}).data}))}}),H.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(n,i,o){return this.request(em(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}ex.prototype[t]=e(),ex.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class ev{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let i=new Promise(t=>{n.subscribe(t),e=t}).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t(function(t,i,o){n.reason||(n.reason=new ee(t,i,o),e(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new ev(function(e){t=e});return{token:e,cancel:t}}}const ek={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ek).forEach(([t,e])=>{ek[e]=t});// Create the default instance to be exported
const eE=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let n=new ex(e),i=u(ex.prototype.request,n);return H.extend(i,ex.prototype,n,{allOwnKeys:!0}),H.extend(i,n,null,{allOwnKeys:!0}),// Factory for creating new instances
i.create=function(n){return t(em(e,n))},i}(t0);// Expose Axios class to allow class inheritance
eE.Axios=ex,// Expose Cancel & CancelToken
eE.CanceledError=ee,eE.CancelToken=ev,eE.isCancel=et,eE.VERSION=eh,eE.toFormData=tF,// Expose AxiosError class
eE.AxiosError=$,// alias for CanceledError for backward compatibility
eE.Cancel=eE.CanceledError,// Expose all/spread
eE.all=function(t){return Promise.all(t)},eE.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eE.isAxiosError=function(t){return H.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eE.mergeConfig=em,eE.AxiosHeaders=t9,eE.formToJSON=t=>tZ(H.isHTMLForm(t)?new FormData(t):t),eE.getAdapter=ec.getAdapter,eE.HttpStatusCode=ek,eE.default=eE;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:eN,AxiosError:eA,CanceledError:eS,isCancel:eC,CancelToken:eO,VERSION:eB,all:eT,Cancel:eI,isAxiosError:eR,spread:eL,toFormData:eU,AxiosHeaders:ej,HttpStatusCode:ez,formToJSON:eD,getAdapter:eP,mergeConfig:eF}=eE,eM="https://api.thecatapi.com/v1/";eE.defaults.headers.common["x-api-key"]="live_Uczt18D595C6qQt0FV6BIE3pO0lPgMNJbt2vi6yynq9BhPO9UHt9Z5XcuGnVcxuF";var e_={};i=void 0!==c?c:"undefined"!=typeof window?window:e_,o=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// LOADING: Default Settings: begin
var e,n={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},i={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},o=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},r=function(e){return e||(e="head"),null!==t.document[e]||(o('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},a=function(e,n){// check doc head
if(!r("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},s=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=s(t[i],n[i]):t[i]=n[i])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},f=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},c=function(a,f,c,u,d){// check doc body
if(!r("body"))return!1;e||p.Loading.init({});// create a backup for new settings
var m=s(!0,e,{});// check "messageOrOptions" and "options": begin
if("object"==typeof f&&!Array.isArray(f)||"object"==typeof c&&!Array.isArray(c)){// new options
var h={};"object"==typeof f?h=f:"object"==typeof c&&(h=c),// extend new settings with the new options
e=s(!0,e,h)}// check "messageOrOptions" and "options": end
// check the message
var g="";// show loading
if("string"==typeof f&&f.length>0&&(g=f),u){g=g.length>e.messageMaxLength?l(g).toString().substring(0,e.messageMaxLength)+"...":l(g).toString();var y,b,w,x,v,k,E,N,A,S,C,O,B,T,I="";g.length>0&&(I='<p id="'+e.messageID+'" class="nx-loading-message" style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+g+"</p>"),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// svgIcon: begin
var R="";if(a===n.Standard)y=e.svgSize,b=e.svgColor,y||(y="60px"),b||(b="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+b+'" width="'+y+'" height="'+y+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(a===n.Hourglass)w=e.svgSize,x=e.svgColor,w||(w="60px"),x||(x="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+x+'" width="'+w+'" height="'+w+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';else if(a===n.Circle)v=e.svgSize,k=e.svgColor,v||(v="60px"),k||(k="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" width="'+v+'" height="'+v+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+v+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+v+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+k+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';else if(a===n.Arrows)E=e.svgSize,N=e.svgColor,E||(E="60px"),N||(N="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" fill="'+N+'" width="'+E+'" height="'+E+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';else if(a===n.Dots)A=e.svgSize,S=e.svgColor,A||(A="60px"),S||(S="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" fill="'+S+'" width="'+A+'" height="'+A+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';else if(a===n.Pulse)C=e.svgSize,O=e.svgColor,C||(C="60px"),O||(O="#32c682"),R='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+O+'" width="'+C+'" height="'+C+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';else if(a===n.Custom&&null!==e.customSvgCode&&null===e.customSvgUrl)R=e.customSvgCode||"";else if(a===n.Custom&&null!==e.customSvgUrl&&null===e.customSvgCode)R='<img class="nx-custom-loading-icon" width="'+e.svgSize+'" height="'+e.svgSize+'" src="'+e.customSvgUrl+'" alt="Notiflix">';else{if(a===n.Custom&&(null===e.customSvgUrl||null===e.customSvgCode))return o('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;(B=e.svgSize)||(B="60px"),R='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+B+'" height="'+B+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+(T="#32c682")+'" stroke="'+T+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}var L=parseInt((e.svgSize||"").replace(/[^0-9]/g,"")),U=t.innerWidth,j=L>=U?U-40+"px":L+"px",z='<div style="width:'+j+"; height:"+j+';" class="'+e.className+"-icon"+(g.length>0?" nx-with-message":"")+'">'+R+"</div>",D=t.document.createElement("div");D.id=i.ID,D.className=e.className+(e.cssAnimation?" nx-with-animation":"")+(e.clickToClose?" nx-loading-click-to-close":""),D.style.zIndex=e.zindex,D.style.background=e.backgroundColor,D.style.animationDuration=e.cssAnimationDuration+"ms",D.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',D.style.display="flex",D.style.flexWrap="wrap",D.style.flexDirection="column",D.style.alignItems="center",D.style.justifyContent="center",e.rtl&&(D.setAttribute("dir","rtl"),D.classList.add("nx-rtl-on")),// rtl: end
// append: begin
D.innerHTML=z+I,!t.document.getElementById(D.id)&&(// append
t.document.body.appendChild(D),e.clickToClose&&t.document.getElementById(D.id).addEventListener("click",function(){D.classList.add("nx-remove");var t=setTimeout(function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(t))},e.cssAnimationDuration)}));// append: end
}else if(t.document.getElementById(i.ID))var P=t.document.getElementById(i.ID),F=setTimeout(function(){P.classList.add("nx-remove");var t=setTimeout(function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(t))},e.cssAnimationDuration);clearTimeout(F)},d);// extend new settings with the backup settings
e=s(!0,e,m)},u=function(n){// check the new message
"string"!=typeof n&&(n="");// if has any loading
var r=t.document.getElementById(i.ID);if(r){// if there is a new message
if(n.length>0){// max length: begin
n=n.length>e.messageMaxLength?l(n).substring(0,e.messageMaxLength)+"...":l(n);// max length: end
// there is a message element
var a=r.getElementsByTagName("p")[0];if(a)a.innerHTML=n;// change the message
else{// create a new message element: begin
var s=t.document.createElement("p");s.id=e.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=e.messageColor,s.style.fontSize=e.messageFontSize,s.innerHTML=n,r.appendChild(s);// create a new message element: end
}}else o("Where is the new message?")}},p={Loading:{// Init
init:function(t){// extend options
e=s(!0,i,t),// internal css if exist
a(f,"NotiflixLoadingInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return o("You have to initialize the Loading module before call Merge function."),!1;e=s(!0,e,t)},// Standard
standard:function(t,e){c(n.Standard,t,e,!0,0);// true => show && 0 => delay
},// Hourglass
hourglass:function(t,e){c(n.Hourglass,t,e,!0,0);// true => show && 0 => delay
},// Circle
circle:function(t,e){c(n.Circle,t,e,!0,0);// true => show && 0 => delay
},// Arrows
arrows:function(t,e){c(n.Arrows,t,e,!0,0);// true => show && 0 => delay
},// Dots
dots:function(t,e){c(n.Dots,t,e,!0,0);// true => show && 0 => delay
},// Pulse
pulse:function(t,e){c(n.Pulse,t,e,!0,0);// true => show && 0 => delay
},// Custom
custom:function(t,e){c(n.Custom,t,e,!0,0);// true => show && 0 => delay
},// Notiflix
notiflix:function(t,e){c(n.Notiflix,t,e,!0,0);// true => show && 0 => delay
},// Remove
remove:function(t){"number"!=typeof t&&(t=0),c(null,null,null,!1,t)},// Change The Message
change:function(t){u(t)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Loading:p.Loading}):{Loading:p.Loading}},"function"==typeof define&&define.amd?define([],function(){return o(i)}):"object"==typeof e_?e_=o(i):i.Notiflix=o(i);var eW={};r=void 0!==c?c:"undefined"!=typeof window?window:eW,a=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,n={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},i={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},o=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},r=function(e){return e||(e="head"),null!==t.document[e]||(o('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},a=function(e,n){// check doc head
if(!r("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},s=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=s(t[i],n[i]):t[i]=n[i])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},c=0,u=function(o,a,f,u){// check doc body
if(!r("body"))return!1;e||p.Notify.init({});// create a backup for new settings
var d=s(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof f&&!Array.isArray(f)||"object"==typeof u&&!Array.isArray(u)){// new options
var m={};"object"==typeof f?m=f:"object"==typeof u&&(m=u),// extend new settings with the new options
e=s(!0,e,m)}// check callbackOrOptions and options: end
// notify type
var h=e[o.toLocaleLowerCase("en")];// notify counter
c++,"string"!=typeof a&&(a="Notiflix "+o),e.plainText&&(a=l(a)),!e.plainText&&a.length>e.messageMaxLength&&(// extend settings for error massege
e=s(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
a='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),a.length>e.messageMaxLength&&(a=a.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var g=t.document.getElementById(i.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(g.id=i.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var y=t.document.getElementById(i.overlayID)||t.document.createElement("div");y.id=i.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=e.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=h.backOverlayColor||e.backOverlayColor,y.className=e.cssAnimation?"nx-with-animation":"",y.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(i.overlayID)||t.document.body.appendChild(y)}t.document.getElementById(i.wrapID)||t.document.body.appendChild(g);// notify wrap: end
// notify content: begin
var b=t.document.createElement("div");b.id=e.ID+"-"+c,b.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=h.textColor,b.style.background=h.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var w="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof f&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)b.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?w:"");else{var x="";o===n.Success?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===n.Failure?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===n.Warning?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===n.Info&&(x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=x+'<span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?w:"")}}else b.innerHTML='<span class="nx-message">'+a+"</span>"+(e.closeButton?w:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var v=t.document.getElementById(i.wrapID);v.insertBefore(b,v.firstChild)}else t.document.getElementById(i.wrapID).appendChild(b);// notify append or prepend: end
// remove by timeout or click: begin
var k=t.document.getElementById(b.id);if(k){// hide notify elm and hide overlay: begin
var E,N,A=function(){k.classList.add("nx-remove");var e=t.document.getElementById(i.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(E)},S=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(i.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){A();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof f||e.clickToClose)&&k.addEventListener("click",function(){"function"==typeof f&&f(),A();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof f){// auto remove: begin
var C=function(){E=setTimeout(function(){A()},e.timeout),N=setTimeout(function(){S()},e.timeout+e.cssAnimationDuration)};C(),e.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(E),clearTimeout(N)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),C()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&c>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+c+"])"),B=0;B<O.length;B++){var T=O[B];null!==T.parentNode&&T.parentNode.removeChild(T)}// notify - show only the last one: end
// extend new settings with the backup settings
e=s(!0,e,d)},p={Notify:{// Init
init:function(t){// extend options
e=s(!0,i,t),// internal css if exist
a(f,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return o("You have to initialize the Notify module before call Merge function."),!1;e=s(!0,e,t)},// Success
success:function(t,e,i){u(n.Success,t,e,i)},// Failure
failure:function(t,e,i){u(n.Failure,t,e,i)},// Warning
warning:function(t,e,i){u(n.Warning,t,e,i)},// Info
info:function(t,e,i){u(n.Info,t,e,i)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],function(){return a(r)}):"object"==typeof eW?eW=a(r):r.Notiflix=a(r);const eH={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),err:document.querySelector(".error"),catCard:document.querySelector(".cat-info")};eH.loader.style.display="none",eH.err.style.display="none",eH.select.style.display="none",eH.catCard.style.display="none",(0,e_.Loading).dots({svgColor:"#5897fb",svgSize:"130px",messageFontSize:"30px"}),(function(){let t=`${eM}breeds`;return eE.get(t).then(t=>{if(200!==t.status)throw Error(t.status);return t.data})})().then(t=>{eH.select.style.display="flex",eH.loader.style.display="none",function(t){t.map(({id:t,name:e})=>{console.log({id:t,name:e});let n=`<option value=${t}>${e}</option>`;eH.select.insertAdjacentHTML("beforeend",n)}).join("")}(t),new SlimSelect({select:eH.select})}).catch(t=>{(0,eW.Notify).failure(eH.err.textContent)}).finally(t=>(0,e_.Loading).remove()),eH.select.addEventListener("change",t=>{let e=t.target.value;(0,e_.Loading).dots({svgColor:"#5897fb",svgSize:"130px",messageFontSize:"30px"}),(function(t){let e=`${eM}images/search`,n=new URLSearchParams({breed_ids:t});return eE.get(`${e}?${n}`).then(t=>{if(200!==t.status)throw Error(t.status);return t.data[0]})})(e).then(t=>{eH.catCard.style.display="flex",function(t){let{breeds:{name:e,description:n,temperament:i},url:o}=t,r=` 
      <img class="cat-img" src="${o}" alt="${e}"  >
       <div class="cat-right">
      <h1 class="name">${e}</h1>
      <p class="description">${n}</p>
      <p class="temperament"><span class="temperament-span">Temperament:</span> ${i}</p>    
      </div>`;// const card = `
//     <img class="cat-img" src="${data.url}" alt="${data.breeds[0].name}"  >
//      <div class="cat-right">
//     <h1 class="name">${data.breeds[0].name}</h1>
//     <p class="description">${data.breeds[0].description}</p>
//     <p class="temperament"><span class="temperament-span">Temperament:</span> ${data.breeds[0].temperament}</p>
//     </div>`;
eH.catCard.innerHTML=r}//# sourceMappingURL=index.2e6559a8.js.map
(t)}).catch(t=>{(0,eW.Notify).failure(eH.err.textContent)}).finally(t=>(0,e_.Loading).remove())});
//# sourceMappingURL=index.2e6559a8.js.map
