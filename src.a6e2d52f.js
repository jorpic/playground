parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u8ui":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=L,exports.hydrate=M,exports.h=exports.createElement=a,exports.Fragment=v,exports.createRef=h,exports.Component=y,exports.cloneElement=F,exports.createContext=R,exports.toChildArray=C,exports._unmount=W,exports.options=exports.isValidElement=void 0;var e,t,n,o,l,r,_,i,u={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return d(e,r,t&&t.key,t&&t.ref)}function d(t,n,o,l){var r={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return e.vnode&&e.vnode(r),r}function h(){return{}}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!o++||r!==e.debounceRendering)&&((r=e.debounceRendering)||l)(x)}function x(){for(var e;o=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,o,l,r,_;e.__d&&(r=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],o=N(_,l,p({},l),t.__n,void 0!==_.ownerSVGElement,null,n,null==r?m(l):r),U(n,l),o!=r&&g(l)))})}function b(e,t,n,o,l,r,_,i,c){var p,a,d,h,v,y,g,k=n&&n.__k||s,x=k.length;if(i==u&&(i=null!=r?r[0]:x?m(n,0):null),p=0,t.__k=C(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=k[p])||d&&n.key==d.key&&n.type===d.type)k[p]=void 0;else for(a=0;a<x;a++){if((d=k[a])&&n.key==d.key&&n.type===d.type){k[a]=void 0;break}d=null}if(h=N(e,n,d=d||u,o,l,r,_,i,c),(a=n.ref)&&d.ref!=a&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(a,n.__c||h,n)),null!=h){var s;if(null==y&&(y=h),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(r==d||h!=i||null==h.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(h),s=null;else{for(v=i,a=0;(v=v.nextSibling)&&a<x;a+=2)if(v==h)break e;e.insertBefore(h,i),s=i}"option"==t.type&&(e.value="")}i=void 0!==s?s:h.nextSibling,"function"==typeof t.type&&(t.__d=i)}else i&&d.__e==i&&i.parentNode!=e&&(i=m(d))}return p++,n}),t.__e=y,null!=r&&"function"!=typeof t.type)for(p=r.length;p--;)null!=r[p]&&f(r[p]);for(p=x;p--;)null!=k[p]&&W(k[p],k[p]);if(g)for(p=0;p<g.length;p++)T(g[p],g[++p],g[++p])}function C(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)C(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return n}function w(e,t,n,o,l){var r;for(r in n)r in t||P(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||P(e,r,t[r],n[r],o)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===c.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var r,_,i,u,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(_ in o)n&&_ in n||S(r,_,"");if(n)for(i in n)o&&n[i]===o[i]||S(r,i,n[i])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(o||e.addEventListener(t,E,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,E,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type](e.event?e.event(t):t)}function N(t,n,o,l,r,_,i,u,s){var c,f,a,d,h,m,g,k,x,C,w=n.type;if(void 0!==n.constructor)return null;(c=e.__b)&&c(n);try{e:if("function"==typeof w){if(k=n.props,x=(c=w.contextType)&&l[c.__c],C=c?x?x.props.value:c.__:l,o.__c?g=(f=n.__c=o.__c).__=f.__E:("prototype"in w&&w.prototype.render?n.__c=f=new w(k,C):(n.__c=f=new y(k,C),f.constructor=w,f.render=A),x&&x.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,w.getDerivedStateFromProps(k,f.__s))),d=f.props,h=f.state,a)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==w.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)){for(f.props=k,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&i.push(f),c=0;c<n.__k.length;c++)n.__k[c]&&(n.__k[c].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,h,m)})}f.context=C,f.props=k,f.state=f.__s,(c=e.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=t,c=f.render(f.props,f.state,f.context),n.__k=null!=c&&c.type==v&&null==c.key?c.props.children:Array.isArray(c)?c:[c],null!=f.getChildContext&&(l=p(p({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),b(t,n,o,l,r,_,i,u,s),f.base=n.__e,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else n.__e=D(o.__e,n,o,l,r,_,i,s);(c=e.diffed)&&c(n)}catch(t){e.__e(t,n,o)}return n.__e}function U(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function D(e,t,n,o,l,r,_,i){var c,p,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=r)for(c=0;c<r.length;c++)if(null!=(p=r[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,r[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=r&&(r=s.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!i){if(h===u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,i),t.__k=t.props.children,a||b(e,t,n,o,"foreignObject"!==t.type&&l,r,_,u,i),i||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function T(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function W(t,n,o){var l,r,_;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||T(l,null,n)),o||"function"==typeof t.type||(o=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(_=0;_<l.length;_++)l[_]&&W(l[_],n,o);null!=r&&f(r)}function A(e,t,n){return this.constructor(e,n)}function L(t,n,o){var l,r,i;e.__&&e.__(t,n),r=(l=o===_)?null:o&&o.__k||n.__k,t=a(v,null,[t]),i=[],N(n,(l?n:o||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,o&&!l?[o]:r?null:s.slice.call(n.childNodes),i,o||u,l),U(i,t)}function M(e,t){L(e,t,_)}function F(e,t){return t=p(p({},e.props),t),arguments.length>2&&(t.children=s.slice.call(arguments,2)),d(e.type,t,t.key||e.key,t.ref||e.ref)}function R(e){var t={},n={__c:"__cC"+i++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,l=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&o.some(function(e){e.context=t.value,k(e)})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return k(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=v,n=[],o=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=u,i=0;
},{}],"H99C":[function(require,module,exports) {
"use strict";var t=require("preact");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t){return function(){var e,n=l(t);if(a()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)}}function c(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?u(t):n}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(e){s(c,t.Component);var r=i(c);function c(){var e;return n(this,c),(e=r.call(this)).setState({codeChanged:!0,time:0}),e.codeRef=(0,t.createRef)(),e.onCode=e.onCode.bind(u(e)),e.eval=e.eval.bind(u(e)),e}return o(c,[{key:"componentDidMount",value:function(){var t=this;this.codeRef.current.value=localStorage.getItem("code"),setInterval(function(){return t.setState({time:t.state.time+1})},200)}},{key:"eval",value:function(t){var e=[],n=[];try{Function("time","pixel","log",t)(this.state.time,function(t,n,r){return e.push({x:t,y:n,color:r})},function(t){return n.push(JSON.stringify(t))}),localStorage.setItem("code",this.codeRef.current.value)}catch(r){n.push(r.toString())}return{pixels:e,messages:n}}},{key:"onCode",value:function(t){this.setState({codeChanged:!0})}},{key:"render",value:function(){var e=this.codeRef.current,n=e?e.value:"",r=this.eval(n),o=r.messages.join("\n"),i=r.pixels.map(function(e){var n=e.x,r=e.y,o=e.color;return(0,t.h)("rect",{x:40*n+1,y:40*r+1,width:39,height:38,fill:o||"skyblue"})});return(0,t.h)("div",{class:"columns"},(0,t.h)("div",{class:"left"},(0,t.h)("div",{class:"env"}),(0,t.h)("textarea",{class:"code",onKeyUp:this.onCode,ref:this.codeRef}),(0,t.h)("textarea",{class:"log",readonly:"true",value:o})),(0,t.h)("div",{class:"right"},(0,t.h)("svg",{width:"100%",height:"100%"},(0,t.h)("defs",null,(0,t.h)("pattern",{id:"smallGrid",width:"40",height:"40",patternUnits:"userSpaceOnUse"},(0,t.h)("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"lightgray","stroke-width":"0.5"})),(0,t.h)("pattern",{id:"grid",width:"200",height:"200",patternUnits:"userSpaceOnUse"},(0,t.h)("rect",{width:"200",height:"200",fill:"url(#smallGrid)"}),(0,t.h)("path",{d:"M 200 0 L 0 0 0 200",fill:"none",stroke:"lightgray","stroke-width":"1"}))),(0,t.h)("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),i)))}}]),c}();(0,t.render)((0,t.h)(h,null),document.body);
},{"preact":"u8ui"}]},{},["H99C"], null)
//# sourceMappingURL=/playground/src.a6e2d52f.js.map