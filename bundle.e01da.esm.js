!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="mdyV")}({"6Fm8":function(){},QfWi:function(e,t,n){"use strict";n.r(t),function(e){var r=n("Y3FI"),o=n("qIj5"),i=n("wqv2");n("6Fm8");t.default=()=>e("div",{class:"at-container"},e(o.a,null),e(r.a,null,e(i.a,{path:""})))}.call(this,n("hosL").h)},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),_={};if(i&&i[1])for(var u=i[1].split("&"),c=0;c<u.length;c++){var a=u[c].split("=");_[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var s=Math.max(e.length,t.length),f=0;f<s;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||m)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=e[f]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(_[p]=decodeURIComponent(y),d||v){_[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&_}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function _(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(u).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function u(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function a(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=b.length;t--;)if(b[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),y&&y[t]?y[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<b.length;n++)!0===b[n].routeTo(e)&&(t=!0);for(var r=g.length;r--;)g[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}var v=n("hosL"),m={},y=null,b=[],g=[],k={},O=!1,j=function(e){function t(t){e.call(this,t),t.history&&(y=t.history),this.state={url:t.url||c()},O||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),O=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){b.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;y&&(this.unlisten=y.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(_).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var _={url:t,matches:i};return r(_,i),delete _.ref,delete _.key,Object(v.cloneElement)(e,_)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),_=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:_})),_},t}(v.Component);j.subscribers=g,j.getCurrentUrl=c,j.route=a,j.Router=j,j.Route=function(e){return Object(v.createElement)(e.component,e)},j.Link=function(e){return Object(v.createElement)("a",r({onClick:p},e))},j.exec=o,t.a=j},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?R.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return _(e,l,r,o,null)}function _(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T:o};return null==o&&null!=L.vnode&&L.vnode(i),i}function l(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__?a(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!p.__r++||W!==L.debounceRendering)&&((W=L.debounceRendering)||H)(p)}function p(){for(var e;p.__r=M.length;)e=M.sort((function(e,t){return e.__v.__b-t.__v.__b})),M=[],e.some((function(e){var t,n,o,i,_,l;e.__d&&(_=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[_]:null,n,null==_?a(i):_,i.__h),j(n,i),i.__e!=_&&s(i)))}))}function h(e,t,n,r,o,i,l,c,s,f){var p,h,v,y,b,g,k,j=r&&r.__k||N,C=j.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(y=n.__k[p]=null==(y=t[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(u,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=j[p])||v&&y.key==v.key&&y.type===v.type)j[p]=void 0;else for(h=0;h<C;h++){if((v=j[h])&&y.key==v.key&&y.type===v.type){j[h]=void 0;break}v=null}O(e,y,v=v||F,o,i,l,c,s,f),b=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=d(y,s,e):s=m(e,y,v,j,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=a(v))}for(n.__e=g,p=C;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=a(r,p+1)),P(j[p],j[p]));if(k)for(p=0;p<k.length;p++)x(k[p],k[++p],k[++p])}function d(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?d(r,t,n):m(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i){var _,l,u;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),_=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break e;e.insertBefore(o,i),_=i}return void 0!==_?_:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||$.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function O(e,t,n,o,i,_,l,a,s){var f,p,d,v,m,y,b,g,k,O,j,x=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,a=t.__e=n.__e,t.__h=null,_=[a]),(f=L.__b)&&f(t);try{e:if("function"==typeof x){if(g=t.props,k=(f=x.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in x&&x.prototype.render?t.__c=p=new x(g,O):(t.__c=p=new c(g,O),p.constructor=x,p.render=A),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=x.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,x.getDerivedStateFromProps(g,p.__s))),v=p.props,m=p.state,d)null==x.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==x.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=O,p.props=g,p.state=p.__s,(f=L.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),j=null!=f&&f.type===u&&null==f.key?f.props.children:f,h(e,Array.isArray(j)?j:[j],t,n,o,i,_,l,a,s),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=C(n.__e,t,n,o,i,_,l,s);(f=L.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=_)&&(t.__e=a,t.__h=!!s,_[_.indexOf(a)]=null),L.__e(e,t,n)}}function j(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function C(e,t,n,r,i,_,l,u){var c,s,f,p=n.props,d=t.props,v=t.type,m=0;if("svg"===v&&(i=!0),null!=_)for(;m<_.length;m++)if((c=_[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,_[m]=null;break}if(null==e){if(null===v)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),_=null,u=!1}if(null===v)p===d||u&&e.data===d||(e.data=d);else{if(_=_&&R.call(e.childNodes),s=(p=n.props||F).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!u){if(null!=_)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,d,p,i,u),f)t.__k=[];else if(m=t.props.children,h(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==v,_,l,_?_[0]:n.__k&&a(n,0),u),null!=_)for(m=_.length;m--;)null!=_[m]&&o(_[m]);u||("value"in d&&void 0!==(m=d.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&b(e,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==e.checked&&b(e,"checked",m,p.checked,!1))}return e}function x(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function P(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||x(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function w(e,t,n){var r,o,_;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,_=[],O(t,e=(!r&&n||t).__k=i(u,null,[e]),o||F,F,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?R.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),j(_,e)}function S(e,t){w(e,t,S)}function E(e,t,n){var o,i,l,u=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:u[l]=t[l];return arguments.length>2&&(u.children=arguments.length>3?R.call(arguments,2):n),_(e.type,u,o||e.key,i||e.ref,null)}function U(e,t){var n={__c:t="__cC"+I++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return w})),n.d(t,"hydrate",(function(){return S})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return D})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return E})),n.d(t,"createContext",(function(){return U})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return L}));var R,L,T,D,M,H,W,I,F={},N=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;R=N.slice,L={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},T=0,D=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=u,M=[],H="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:_}=r,l=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=l(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const a={preRenderData:r},s=r.url?u(r.url):"";(_&&s===u(location.pathname)?_:i)(o(t,{CLI_DATA:a}),document.body,e)};0,t()}},qIj5:function(e,t,n){"use strict";var r=n("hosL");t.a=()=>Object(r.h)("div",{class:"at-bg"})},wqv2:function(e,t,n){"use strict";function r(e,t){w.options.__h&&w.options.__h(P,e,S||t),S=0;var n=P.__H||(P.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return S=1,i(s,e)}function i(e,t,n){var o=r(x++,2);return o.t=e,o.__c||(o.__=[n?n(t):s(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=P),o.__}function _(e,t){var n=r(x++,3);!w.options.__s&&a(n.__H,t)&&(n.__=e,n.__H=t,P.__H.__h.push(n))}function l(){for(var e;e=E.shift();)if(e.__P)try{e.__H.__h.forEach(u),e.__H.__h.forEach(c),e.__H.__h=[]}catch(t){e.__H.__h=[],w.options.__e(t,e.__v)}}function u(e){var t=P,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),P=t}function c(e){var t=P;e.__c=e.__(),P=t}function a(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function s(e,t){return"function"==typeof t?t(e):t}function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function h(e){this.props=e}function d(){this.__u=0,this.t=null,this.__b=null}function v(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function m(){this.u=null,this.o=null}function y(){}function b(){return this.cancelBubble}function g(){return this.defaultPrevented}function k(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x,P,A,w=n("hosL"),S=0,E=[],U=w.options.__b,R=w.options.__r,L=w.options.diffed,T=w.options.__c,D=w.options.unmount;w.options.__b=function(e){P=null,U&&U(e)},w.options.__r=function(e){R&&R(e),x=0;var t=(P=e.__c).__H;t&&(t.__h.forEach(u),t.__h.forEach(c),t.__h=[])},w.options.diffed=function(e){L&&L(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==E.push(t)&&A===w.options.requestAnimationFrame||((A=w.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),M&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);M&&(t=requestAnimationFrame(n))})(l)),P=null},w.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(u),e.__h=e.__h.filter((function(e){return!e.__||c(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],w.options.__e(n,e.__v)}})),T&&T(e,t)},w.options.unmount=function(e){D&&D(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{u(e)}catch(e){t=e}})),t&&w.options.__e(t,n.__v))};var M="function"==typeof requestAnimationFrame;(h.prototype=new w.Component).isPureReactComponent=!0,h.prototype.shouldComponentUpdate=function(e,t){return p(this.props,e)||p(this.state,t)};var H=w.options.__b;w.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),H&&H(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var W=w.options.__e;w.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);W(e,t,n)};var I=w.options.unmount;w.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),I&&I(e)},(d.prototype=new w.Component).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=v(r.__v),i=!1,_=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=_;var l=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},u=!0===t.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(_,_)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=f({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&Object(w.createElement)(w.Fragment,null,e.fallback);return o&&(o.__h=null),[Object(w.createElement)(w.Fragment,null,t.__e?null:e.children),o]};var F=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(m.prototype=new w.Component).__e=function(e){var t=this,n=v(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),F(t,e,r)):o()};n?n(i):i()}},m.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(w.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},m.prototype.componentDidUpdate=m.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){F(e,n,t)}))};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,q=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};w.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(w.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var B=w.options.event;w.options.event=function(e){return B&&(e=B(e)),e.persist=y,e.isPropagationStopped=b,e.isDefaultPrevented=g,e.nativeEvent=e};var K={configurable:!0,get:function(){return this.class}},z=w.options.vnode;w.options.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in r={},n){var _=n[i];V&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in n&&null==_||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===_?_="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!q(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&$.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===_&&(_=void 0),r[i]=_)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(w.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=Object(w.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(K.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",K))}e.$$typeof=N,z&&z(e)};var G=w.options.__r;w.options.__r=function(e){G&&G(e),e.__c};var Q=e=>Object(w.h)("div",{class:"at-card"},e.children),Y=e=>Object(w.h)("div",{class:"at-stats"},Object(w.h)("div",{class:"at-stats-metric"},Object(w.h)("i",{class:"fa-solid fa-flask"}),Object(w.h)("h2",{class:"at-stats-metric__label"},"Total SLP Earned"),": ",Object(w.h)("p",{class:"at-stats-metric__value"},e.total_slp_earned)),Object(w.h)("div",{class:"at-stats-metric"},Object(w.h)("i",{class:"fa-solid fa-trophy"}),Object(w.h)("h2",{class:"at-stats-metric__label"},"Leaderboard Rank"),": ",Object(w.h)("p",{class:"at-stats-metric__value"},e.leaderboard_rank)),Object(w.h)("div",{class:"at-stats-metric"},Object(w.h)("i",{class:"fa-solid fa-shield"}),Object(w.h)("h2",{class:"at-stats-metric__label"},"Elo Rating (MMR) "),": ",Object(w.h)("p",{class:"at-stats-metric__value"},e.elo_rating))),Z=()=>Object(w.h)("div",{class:"at-footer"},Object(w.h)("div",{class:"at-footer__copyright content-wrapper"},Object(w.h)("p",null,"© 2022 Axie Tracker Dashboard | v0.0.1"),Object(w.h)("p",null,"Made with ",Object(w.h)("i",{class:"fa-solid fa-heart"})),Object(w.h)("p",null,"Powered by ",Object(w.h)("a",{href:"https://preactjs.com/",rel:"noopener noreferrer",target:"_blank"},"Preact")," and ",Object(w.h)("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"))));t.a=()=>{const[e,t]=o({total_slp_earned:0,leaderboard_rank:0,elo_rating:0});return _((()=>{const e=function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("id",window.location.href);if(e){const n=e.replace("ronin:","0x"),r=e=>{t((t=>j(j({},t),e)))};fetch(`https://game-api.axie.technology/slp/${n}`).then((e=>e.ok?e.json():Promise.reject(!1))).then((e=>{r({total_slp_earned:e[0].total||0})})).catch((()=>{console.error("Axie API for SLP is not working.")})),fetch(`https://game-api.axie.technology/mmr/${n}`).then((e=>e.ok?e.json():Promise.reject(!1))).then((e=>{r({leaderboard_rank:e[0].items[1].rank||0,elo_rating:e[0].items[1].elo||0})})).catch((()=>{console.error("Axie API for MMR is not working.")}))}}),[]),Object(w.h)("div",{class:"at-home"},Object(w.h)("div",{class:"content-wrapper content-padding"},Object(w.h)(Q,null,Object(w.h)("h1",null,"Axie Tracker Dashboard"),Object(w.h)("p",null,"A simplified dashboard for your axie account stats."),Object(w.h)("div",{class:"at-axie-watermark-1",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"}),Object(w.h)("div",{class:"at-axie-watermark-2",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"}),Object(w.h)(Y,{total_slp_earned:k(e.total_slp_earned),leaderboard_rank:k(e.leaderboard_rank),elo_rating:k(e.elo_rating)}))),Object(w.h)(Z,null))}}});
//# sourceMappingURL=bundle.e01da.esm.js.map