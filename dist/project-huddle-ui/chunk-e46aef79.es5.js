ProjectHuddleUi.loadBundle("chunk-e46aef79.js",["exports"],function(e){window;for(var t="undefined"!=typeof window&&"undefined"!=typeof document,n=["Edge","Trident","Firefox"],o=0,r=0;r<n.length;r+=1)if(t&&navigator.userAgent.indexOf(n[r])>=0){o=1;break}var i=t&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},o))}};function a(e){return e&&"[object Function]"==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function f(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function p(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=s(e);return/(auto|scroll|overlay)/.test(t.overflow+t.overflowY+t.overflowX)?e:p(f(e))}var l=t&&!(!window.MSInputMethodContext||!document.documentMode),u=t&&/MSIE 10/.test(navigator.userAgent);function d(e){return 11===e?l:10===e?u:l||u}function c(e){if(!e)return document.documentElement;for(var t=d(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===s(n,"position")?c(n):n:e?e.ownerDocument.documentElement:document.documentElement}function h(e){return null!==e.parentNode?h(e.parentNode):e}function m(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,s,f=i.commonAncestorContainer;if(e!==f&&t!==f||o.contains(r))return"BODY"===(s=(a=f).nodeName)||"HTML"!==s&&c(a.firstElementChild)!==a?c(f):f;var p=h(e);return p.host?m(p.host,t):m(e,h(t).host)}function g(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;return"BODY"===n||"HTML"===n?(e.ownerDocument.scrollingElement||e.ownerDocument.documentElement)[t]:e[t]}function v(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function b(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],d(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function w(e){var t=e.body,n=e.documentElement,o=d(10)&&getComputedStyle(n);return{height:b("Height",t,n,o),width:b("Width",t,n,o)}}var y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function L(e){return O({},e,{right:e.left+e.width,bottom:e.top+e.height})}function T(e){var t={};try{if(d(10)){t=e.getBoundingClientRect();var n=g(e,"top"),o=g(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?w(e.ownerDocument):{},a=e.offsetWidth-(i.width||e.clientWidth||r.right-r.left),f=e.offsetHeight-(i.height||e.clientHeight||r.bottom-r.top);if(a||f){var p=s(e);a-=v(p,"x"),f-=v(p,"y"),r.width-=a,r.height-=f}return L(r)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=d(10),r="HTML"===t.nodeName,i=T(e),a=T(t),f=p(e),l=s(t),u=parseFloat(l.borderTopWidth,10),c=parseFloat(l.borderLeftWidth,10);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var h=L({top:i.top-a.top-u,left:i.left-a.left-c,width:i.width,height:i.height});if(h.marginTop=0,h.marginLeft=0,!o&&r){var m=parseFloat(l.marginTop,10),v=parseFloat(l.marginLeft,10);h.top-=u-m,h.bottom-=u-m,h.left-=c-v,h.right-=c-v,h.marginTop=m,h.marginLeft=v}return(o&&!n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=g(t,"top"),r=g(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(h,t)),h}function M(e){if(!e||!e.parentElement||d())return document.documentElement;for(var t=e.parentElement;t&&"none"===s(t,"transform");)t=t.parentElement;return t||document.documentElement}function N(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?M(e):m(e,t);if("viewport"===o)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=D(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:g(n),s=t?0:g(n,"left");return L({top:a-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i})}(a,r);else{var l=void 0;"scrollParent"===o?"BODY"===(l=p(f(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===o?e.ownerDocument.documentElement:o;var u=D(l,a,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===s(t,"position"))return!0;var o=f(t);return!!o&&e(o)}(a))i=u;else{var d=w(e.ownerDocument),c=d.height,h=d.width;i.top+=u.top-u.marginTop,i.bottom=c+u.top,i.left+=u.left-u.marginLeft,i.right=h+u.left}}var v="number"==typeof(n=n||0);return i.left+=v?n:n.left||0,i.top+=v?n:n.top||0,i.right-=v?n:n.right||0,i.bottom-=v?n:n.bottom||0,i}function F(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=N(n,o,i,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return O({key:e},s[e],{area:(t=s[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){return e.width>=n.clientWidth&&e.height>=n.clientHeight}),l=p.length>0?p[0].key:f[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function k(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return D(n,o?M(t):m(t,n),o)}function H(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function B(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,n){n=n.split("-")[0];var o=H(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",f=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[f]/2-o[f]/2,r[s]=n===s?t[s]-o[p]:t[B(s)],r}function P(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function A(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e.name===n});var o=P(e,function(e){return e.name===n});return e.indexOf(o)}(e,0,n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&a(n)&&(t.offsets.popper=L(t.offsets.popper),t.offsets.reference=L(t.offsets.reference),t=n(t,e))}),t}function S(e,t){return e.some(function(e){return e.enabled&&e.name===t})}function W(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function j(e){var t=e.ownerDocument;return t?t.defaultView:window}function I(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&I(t[n])&&(o="px"),e.style[n]=t[n]+o})}var U=t&&/Firefox/i.test(navigator.userAgent);function Y(e,t,n){var o=P(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var V=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],q=V.slice(3);function z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=q.indexOf(e),o=q.slice(n+1).concat(q.slice(0,n));return t?o.reverse():o}var G="flip",_="clockwise",X="counterclockwise";var J={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),f=s?"left":"top",p=s?"width":"height",l={start:E({},f,i[f]),end:E({},f,i[f]+i[p]-a[p])};e.offsets.popper=O({},a,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.offsets,i=r.popper,a=r.reference,s=e.placement.split("-")[0];return n=I(+o)?[+o,0]:function(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(P(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=-1!==s?[a.slice(0,s).concat([a[s].split(f)[0]]),[a[s].split(f)[1]].concat(a.slice(s+1))]:[a];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=o}return L(s)[t]/100*i}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){I(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}(o,i,a,s),"left"===s?(i.top+=n[0],i.left-=n[1]):"right"===s?(i.top+=n[0],i.left+=n[1]):"top"===s?(i.left+=n[0],i.top-=n[1]):"bottom"===s&&(i.left+=n[0],i.top+=n[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||c(e.instance.popper);e.instance.reference===n&&(n=c(n));var o=W("transform"),r=e.instance.popper.style,i=r.top,a=r.left,s=r[o];r.top="",r.left="",r[o]="";var f=N(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=a,r[o]=s,t.boundaries=f;var p=e.offsets.popper,l={primary:function(e){var n=p[e];return p[e]<f[e]&&!t.escapeWithReference&&(n=Math.max(p[e],f[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=p[n];return p[e]>f[e]&&!t.escapeWithReference&&(o=Math.min(p[n],f[e]-("right"===e?p.width:p.height))),E({},n,o)}};return t.priority.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";p=O({},p,l[t](e))}),e.offsets.popper=p,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",f=a?"left":"top",p=a?"width":"height";return n[s]<i(o[f])&&(e.offsets.popper[f]=i(o[f])-n[p]),n[f]>i(o[s])&&(e.offsets.popper[f]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!Y(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,f=i.reference,p=-1!==["left","right"].indexOf(r),l=p?"height":"width",u=p?"Top":"Left",d=u.toLowerCase(),c=p?"left":"top",h=p?"bottom":"right",m=H(o)[l];f[h]-m<a[d]&&(e.offsets.popper[d]-=a[d]-(f[h]-m)),f[d]+m>a[h]&&(e.offsets.popper[d]+=f[d]+m-a[h]),e.offsets.popper=L(e.offsets.popper);var g=f[d]+f[l]/2-m/2,v=s(e.instance.popper),b=parseFloat(v["margin"+u],10),w=parseFloat(v["border"+u+"Width"],10),y=g-e.offsets.popper[d]-b-w;return y=Math.max(Math.min(a[l]-m,y),0),e.arrowElement=o,e.offsets.arrow=(E(n={},d,Math.round(y)),E(n,c,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(S(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=N(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=B(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case G:a=[o,r];break;case _:a=z(o);break;case X:a=z(o,!0);break;default:a=t.behavior}return a.forEach(function(s,f){if(o!==s||a.length===f+1)return e;o=e.placement.split("-")[0],r=B(o);var p=e.offsets.popper,l=e.offsets.reference,u=Math.floor,d="left"===o&&u(p.right)>u(l.left)||"right"===o&&u(p.left)<u(l.right)||"top"===o&&u(p.bottom)>u(l.top)||"bottom"===o&&u(p.top)<u(l.bottom),c=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),g=u(p.bottom)>u(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g)||!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&c||!b&&"start"===i&&g||!b&&"end"===i&&m);(d||v||w)&&(e.flipped=!0,(d||v)&&(o=a[f+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=O({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=A(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(s?r[a?"width":"height"]:0),e.placement=B(t),e.offsets.popper=L(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!Y(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=P(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=P(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,s,f=void 0!==i?i:t.gpuAcceleration,p=c(e.instance.popper),l=T(p),u={position:r.position},d=function(e,t){var n=e.offsets,o=n.popper,r=Math.round,i=Math.floor,a=function(e){return e},s=r(n.reference.width),f=r(o.width),p=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=t?p||l||s%2==f%2?r:i:a,d=t?r:a;return{left:u(s%2==1&&f%2==1&&!l&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:u(o.right)}}(e,window.devicePixelRatio<2||!U),h="bottom"===n?"top":"bottom",m="right"===o?"left":"right",g=W("transform");if(s="bottom"===h?"HTML"===p.nodeName?-p.clientHeight+d.bottom:-l.height+d.bottom:d.top,a="right"===m?"HTML"===p.nodeName?-p.clientWidth+d.right:-l.width+d.right:d.left,f&&g)u[g]="translate3d("+a+"px, "+s+"px, 0)",u[h]=0,u[m]=0,u.willChange="transform";else{var v="right"===m?-1:1;u[h]=s*("bottom"===h?-1:1),u[m]=a*v,u.willChange=h+", "+m}return e.attributes=O({},{"x-placement":e.placement},e.attributes),e.styles=O({},u,e.styles),e.arrowStyles=O({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return R(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&R(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=k(r,t,e,n.positionFixed),a=F(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),R(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},K=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=i(this.update.bind(this)),this.options=O({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(O({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=O({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return O({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&a(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return x(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=k(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=F(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=A(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,S(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=function(e,t,n,o){n.updateBound=o,j(e).addEventListener("resize",n.updateBound,{passive:!0});var r=p(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,o,{passive:!0}),i||e(p(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}(this.reference,0,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.state,j(this.reference).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}.call(this)}}]),e}();K.Utils=("undefined"!=typeof window?window:global).PopperUtils,K.placements=V,K.Defaults=J,e.Popper=K});