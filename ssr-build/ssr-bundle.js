module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/axie-stats-dashboard/",n(n.s="QfWi")}({"1cg6":function(t,e,n){"use strict";(function(t){var r=n("83eF");n("4jLH");e.a=function(){return t("div",{class:"atd-footer"},t("div",{class:"atd-footer__copyright content-wrapper"},t("p",null,"© ",r.b," Axie Stats Dashboard | v",r.a),t("p",null,"Made with ",t("i",{class:"fa-solid fa-heart"})),t("p",null,"Powered by ",t("a",{href:"https://preactjs.com/",rel:"noopener noreferrer",target:"_blank"},"Preact")," and ",t("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"))))}}).call(this,n("HteQ").h)},"3Ukk":function(t,e,n){},"4jLH":function(t,e,n){},"6Fm8":function(t,e,n){},"83eF":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return a}));var r="0.1.4",o="2022";function i(t,e){t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function a(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},BrCq:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n("3Ukk");var r=function(e){return t("div",{class:"atd-stats-metric"},e.children,t("h3",{class:"atd-stats-metric__label"},e.label),": ",t("p",{class:"atd-stats-metric__value"},e.value))};e.b=function(e){return t("div",{class:"atd-stats"},e.children)}}).call(this,n("HteQ").h)},ClKT:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},QRet:function(t,e,n){"use strict";n.d(e,"j",(function(){return h})),n.d(e,"h",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return b})),n.d(e,"i",(function(){return y})),n.d(e,"e",(function(){return g})),n.d(e,"g",(function(){return O})),n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return k}));var r,o,i,a=n("HteQ"),c=0,u=[],l=a.options.__b,s=a.options.__r,f=a.options.diffed,_=a.options.__c,p=a.options.unmount;function d(t,e){a.options.__h&&a.options.__h(o,t,c||e),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function h(t){return c=1,m(H,t)}function m(t,e,n){var i=d(r++,2);return i.t=t,i.__c||(i.__=[n?n(e):H(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function v(t,e){var n=d(r++,3);!a.options.__s&&P(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function b(t,e){var n=d(r++,4);!a.options.__s&&P(n.__H,e)&&(n.__=t,n.__H=e,o.__h.push(n))}function y(t){return c=5,O((function(){return{current:t}}),[])}function g(t,e,n){c=6,b((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function O(t,e){var n=d(r++,7);return P(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function j(t,e){return c=8,O((function(){return t}),e)}function w(t){var e=o.context[t.__c],n=d(r++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(o)),e.props.value):t.__}function k(t,e){a.options.useDebugValue&&a.options.useDebugValue(e?e(t):t)}function x(){for(var t;t=u.shift();)if(t.__P)try{t.__H.__h.forEach(C),t.__H.__h.forEach(S),t.__H.__h=[]}catch(e){t.__H.__h=[],a.options.__e(e,t.__v)}}a.options.__b=function(t){o=null,l&&l(t)},a.options.__r=function(t){s&&s(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(C),e.__h.forEach(S),e.__h=[])},a.options.diffed=function(t){f&&f(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==u.push(e)&&i===a.options.requestAnimationFrame||((i=a.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),A&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);A&&(e=requestAnimationFrame(n))})(x)),o=null},a.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(C),t.__h=t.__h.filter((function(t){return!t.__||S(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],a.options.__e(n,t.__v)}})),_&&_(t,e)},a.options.unmount=function(t){p&&p(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{C(t)}catch(t){e=t}})),e&&a.options.__e(e,n.__v))};var A="function"==typeof requestAnimationFrame;function C(t){var e=o,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),o=e}function S(t){var e=o;t.__c=t.__(),o=e}function P(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function H(t,e){return"function"==typeof e?e(t):e}},QfWi:function(t,e,n){"use strict";n.r(e),function(t,r){var o=n("Y3FI"),i=n("wqv2");n("6Fm8");e.default=function(){var e="/axie-stats-dashboard/";return"undefined"!=typeof window&&void 0!==window.GLOBAL_ENV&&"local"===window.GLOBAL_ENV&&(e="/"),t(r,null,t(o.a,null,t(i.a,{path:e})))}}.call(this,n("HteQ").h,n("HteQ").Fragment)},Ql2l:function(t,e,n){},"S/9D":function(t,e,n){},Y3FI:function(t,e,n){"use strict";var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),c={};if(a&&a[1])for(var u=a[1].split("&"),s=0;s<u.length;s++){var f=u[s].split("=");c[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var _=Math.max(t.length,e.length),p=0;p<_;p++)if(e[p]&&":"===e[p].charAt(0)){var d=e[p].replace(/(^:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||o)[0]||"",m=~h.indexOf("+"),v=~h.indexOf("*"),b=t[p]||"";if(!b&&!v&&(h.indexOf("?")<0||m)){r=!1;break}if(c[d]=decodeURIComponent(b),m||v){c[d]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(s).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,_=[],p=[],d={};function h(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=_.length;e--;)if(_[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<_.length;n++)!0===_[n].routeTo(t)&&(e=!0);for(var r=p.length;r--;)p[r](t);return e}function b(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return b(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(b(e))return g(t)}}while(e=e.parentNode)}}var j=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||h()},j||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){v(h())})),addEventListener("click",O)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){_.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),_.splice(_.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(c).map((function(t){var o=a(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=a[0]||null,u=this.previousUrl;return i!==u&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:u,active:a,current:c})),c},e}(r.Component);w.subscribers=p,w.getCurrentUrl=h,w.route=m,w.Router=w,w.Route=function(t){return Object(r.createElement)(t.component,t)},w.Link=function(t){return Object(r.createElement)("a",i({onClick:y},t))},w.exec=a,e.a=w},YIiA:function(t,e,n){"use strict";(function(t){n("Ql2l");e.a=function(e){return t("div",{class:"atd-card"},e.children)}}).call(this,n("HteQ").h)},aKi1:function(t,e,n){"use strict";var r=n("QRet");e.a=function(t){Object(r.d)((function(){if("undefined"!=typeof window&&!window.dataLayer){var e=document.createElement("script");e.type="text/javascript",e.src="https://www.googletagmanager.com/gtag/js?id="+t.trackingId,document.body.appendChild(e)}"undefined"!=typeof window&&function e(){"undefined"!=typeof window&&void 0!==window.dataLayer&&window.dataLayer?(window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",t.trackingId,{send_page_view:!0,page_path:window.document.location.pathname})):setTimeout(e,1e3)}()}))}},gS1R:function(t,e,n){"use strict";var r=n("QRet");e.a=function(t){Object(r.d)((function(){if("undefined"!=typeof window){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.crossOrigin="anonymous",e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+t.adClient,document.body.appendChild(e)}}))}},l8WD:function(t,e,n){"use strict";var r=n("QRet");n.d(e,"a",(function(){return r.d})),n.d(e,"b",(function(){return r.j}));var o=n("HteQ");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n in e)t[n]=e[n];return t}function c(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function u(t){this.props=t}(u.prototype=new o.Component).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(t,e){return c(this.props,t)||c(this.state,e)};var l=o.options.__b;o.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),l&&l(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var s=function(t,e){return null==t?null:Object(o.toChildArray)(Object(o.toChildArray)(t).map(e))},f=(o.toChildArray,o.options.__e);o.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);f(t,e,n)};var _=o.options.unmount;function p(){this.__u=0,this.t=null,this.__b=null}function d(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function h(){this.u=null,this.o=null}o.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),_&&_(t)},(p.prototype=new o.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=d(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(c):c())};n.__R=a;var c=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},u=!0===e.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(a,a)},p.prototype.componentWillUnmount=function(){this.t=[]},p.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=a({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__e&&Object(o.createElement)(o.Fragment,null,t.fallback);return i&&(i.__h=null),[Object(o.createElement)(o.Fragment,null,e.__e?null:t.children),i]};var m=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(h.prototype=new o.Component).__e=function(t){var e=this,n=d(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),m(e,t,r)):o()};n?n(i):i()}},h.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(o.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},h.prototype.componentDidUpdate=h.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){m(t,n,e)}))};var v="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,y="undefined"!=typeof document,g=function(t){return("undefined"!=typeof Symbol&&"symbol"==i(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(t)};o.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(o.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var O=o.options.event;function j(){}function w(){return this.cancelBubble}function k(){return this.defaultPrevented}o.options.event=function(t){return O&&(t=O(t)),t.persist=j,t.isPropagationStopped=w,t.isDefaultPrevented=k,t.nativeEvent=t};var x={configurable:!0,get:function(){return this.class}},A=o.options.vnode;o.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){var i=-1===e.indexOf("-");for(var a in r={},n){var c=n[a];y&&"children"===a&&"noscript"===e||"value"===a&&"defaultValue"in n&&null==c||("defaultValue"===a&&"value"in n&&null==n.value?a="value":"download"===a&&!0===c?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!g(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)?a=a.toLowerCase():i&&b.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===c&&(c=void 0),r[a]=c)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(o.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(o.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r,n.class!=n.className&&(x.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",x))}t.$$typeof=v,A&&A(t)};var C=o.options.__r;o.options.__r=function(t){C&&C(t),t.__c};o.Fragment,r.j,r.h,r.d,r.f,r.i,r.e,r.g,r.a,r.b,r.c,o.createElement,o.createContext,o.createRef,o.Fragment,o.Component,o.Fragment},nxb6:function(t,e,n){},qIj5:function(t,e,n){"use strict";(function(t){n("ClKT");e.a=function(e){return t("div",{class:"atd-bg"},e.children)}}).call(this,n("HteQ").h)},wqv2:function(t,e,n){"use strict";(function(t){var r=n("HteQ"),o=n("l8WD"),i=n("83eF"),a=n("aKi1"),c=n("gS1R"),u=n("qIj5"),l=n("YIiA"),s=n("BrCq"),f=n("1cg6");n("S/9D"),n("nxb6");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(){var e=h(Object(o.b)({total_slp_earned:0,name:"N/A",leaderboard_rank:0,elo_rating:0}),2),n=e[0],_=e[1];return Object(o.a)((function(){var t=Object(i.d)("id",window.location.href);if(t){var e=t.replace("ronin:","0x"),n=function(t){_((function(e){return p(p({},e),t)}))};fetch("https://game-api.axie.technology/slp/".concat(e)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){n({total_slp_earned:t[0].total||0})})).catch((function(){console.error("Axie API for SLP is not working.")})),fetch("https://game-api.axie.technology/mmr/".concat(e)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){n({name:t[0].items[1].name||"N/A",leaderboard_rank:t[0].items[1].rank||0,elo_rating:t[0].items[1].elo||0})})).catch((function(){console.error("Axie API for MMR is not working.")}))}}),[]),Object(r.h)(t,null,Object(r.h)(u.a,null,Object(r.h)("div",{class:"atd-home"},Object(r.h)("div",{class:"atd-home-content content-wrapper content-padding"},Object(r.h)(l.a,null,Object(r.h)("h1",{class:"atd-home-title"},"Axie Stats Dashboard"),Object(r.h)("p",{class:"atd-home-description"},"A simplified dashboard for your Axie Infinity stats."),Object(r.h)("div",{class:"atd-home-axie-watermark-1",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"}),Object(r.h)("div",{class:"atd-home-axie-watermark-2",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"}),Object(r.h)("h2",{class:"atd-home-sub-title"},"Account Stats"),Object(r.h)(s.b,null,Object(r.h)(s.a,{label:"SLP Earned",value:Object(i.c)(n.total_slp_earned)},Object(r.h)("i",{class:"fa-solid fa-flask"}))),Object(r.h)("h2",{class:"atd-home-sub-title"},"Battle Stats"),Object(r.h)(s.b,null,Object(r.h)(s.a,{label:"Name",value:n.name},Object(r.h)("i",{class:"fa-solid fa-address-card"})),Object(r.h)(s.a,{label:"Elo Rating (MMR)",value:Object(i.c)(n.elo_rating)},Object(r.h)("i",{class:"fa-solid fa-shield"})),Object(r.h)(s.a,{label:"Leaderboard Rank",value:Object(i.c)(n.leaderboard_rank)},Object(r.h)("i",{class:"fa-solid fa-trophy"}))),Object(r.h)("p",{class:"atd-home-remarks"},Object(r.h)("i",null,"*Above details are live data.")))),Object(r.h)(f.a,null),Object(r.h)(a.a,{trackingId:"UA-128894279-1"}),Object(r.h)(c.a,{adClient:"ca-pub-3427694918014398"}))))}}).call(this,n("HteQ").Fragment)}});
//# sourceMappingURL=ssr-bundle.js.map