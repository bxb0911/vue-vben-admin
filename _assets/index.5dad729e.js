import{P as e,_ as t,a as r,a9 as n,H as a,k as o,L as s,am as l,D as i,C as c,I as u,M as f,E as p,i as v,o as d,j as m,w as y,x as h,m as g,ad as b,p as w,n as _,r as x,ae as z,q as C,b as S,au as $,Q as k,av as T,a7 as O,v as j,cu as A,aI as B,aJ as L,co as E,s as I,cv as H,cw as M,cn as W,F as R,bg as P,N as q,cx as N,y as X,f as Y}from"./index.46d6012c.js";import{u as U}from"./useTimeout.3355995f.js";import{C as D}from"./index.104cb9e3.js";import{a as F,o as J}from"./domUtils.fabff8c2.js";import{s as K,B as Q}from"./index.7ca758f2.js";import{u as G}from"./useScrollTo.d52fcb20.js";function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z={prefixCls:e.string,size:e.oneOfType([e.oneOf(t("large","small","default")),e.number]),shape:e.oneOf(t("circle","square"))},ee=e.shape(Z).loose,te=r({props:n(Z,{size:"large"}),render:function(){var e,t,r=this.$props,n=r.prefixCls,s=r.size,l=r.shape,i=a((V(e={},"".concat(n,"-lg"),"large"===s),V(e,"".concat(n,"-sm"),"small"===s),e)),c=a((V(t={},"".concat(n,"-circle"),"circle"===l),V(t,"".concat(n,"-square"),"square"===l),t)),u="number"==typeof s?{width:"".concat(s,"px"),height:"".concat(s,"px"),lineHeight:"".concat(s,"px")}:{};return o("span",{class:a(n,i,c),style:u},null)}}),re={prefixCls:e.string,width:e.oneOfType([e.number,e.string])},ne=e.shape(re),ae=r({props:re,render:function(){var e=this.$props,t=e.prefixCls,r=e.width,n="number"==typeof r?"".concat(r,"px"):r;return o("h3",{class:t,style:{width:n}},null)}});function oe(e){return function(e){if(Array.isArray(e))return se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var le=e.oneOfType([e.number,e.string]),ie={prefixCls:e.string,width:e.oneOfType([le,e.arrayOf(le)]),rows:e.number},ce=e.shape(ie),ue=r({props:ie,methods:{getWidth:function(e){var t=this.width,r=this.rows,n=void 0===r?2:r;return Array.isArray(t)?t[e]:n-1===e?t:void 0}},render:function(){var e,t=this,r=this.$props,n=r.prefixCls,a=r.rows,l=oe(Array(a)).map((function(e,r){var n=t.getWidth(r);return o("li",{key:r,style:{width:"number"==typeof n?"".concat(n,"px"):n}},null)}));return o("ul",{class:n},"function"==typeof(e=l)||"[object Object]"===Object.prototype.toString.call(e)&&!s(e)?l:{default:function(){return[l]}})}});function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ve(e){return(ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e){return e&&"object"===ve(e)?e:{}}var me=l(r({name:"ASkeleton",props:c({active:e.looseBool,loading:e.looseBool,prefixCls:e.string,children:e.any,avatar:i(e.oneOfType([e.string,ee,e.looseBool])),title:i(e.oneOfType([e.looseBool,e.string,ne])),paragraph:i(e.oneOfType([e.looseBool,e.string,ce]))},{avatar:!1,title:!0,paragraph:!0}),setup:function(){return{configProvider:u("configProvider",f)}},render:function(){var e,t,r=this.$props,n=r.prefixCls,s=r.loading,l=r.avatar,i=r.title,c=r.paragraph,u=r.active,f=(0,this.configProvider.getPrefixCls)("skeleton",n);if(s||!p(this,"loading")){var v,d,m,y=!!l||""===l,h=!!i,g=!!c;if(y){var b=pe(pe({prefixCls:"".concat(f,"-avatar")},function(e,t){return e&&!t?{shape:"square"}:{shape:"circle"}}(h,g)),de(l));d=o("div",{class:"".concat(f,"-header")},[o(te,b,null)])}if(h||g){var w,_;if(h){var x=pe(pe({prefixCls:"".concat(f,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(y,g)),de(i));w=o(ae,x,null)}if(g){var z=pe(pe({prefixCls:"".concat(f,"-paragraph")},function(e,t){var r={};return e&&t||(r.width="61%"),r.rows=!e&&t?3:2,r}(y,h)),de(c));_=o(ue,z,null)}m=o("div",{class:"".concat(f,"-content")},[w,_])}var C=a(f,(fe(v={},"".concat(f,"-with-avatar"),y),fe(v,"".concat(f,"-active"),u),v));return o("div",{class:C},[d,m])}return null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e)}})),ye=r({inheritAttrs:!1,components:{BasicArrow:K,BasicTitle:Q},props:{prefixCls:String}});ye.render=function(e,t,r,n,a,s){const l=v("BasicTitle"),i=v("BasicArrow");return d(),m("div",{class:`${e.prefixCls}__header`},[o(l,{helpMessage:e.$attrs.helpMessage},{default:y((()=>[e.$attrs.title?(d(),m(b,{key:0},[w(_(e.$attrs.title),1)],64)):h(e.$slots,"title",{key:1})])),_:1},8,["helpMessage"]),o("div",{class:`${e.prefixCls}__action`},[h(e.$slots,"action"),e.$attrs.canExpan?(d(),m(i,{key:0,top:"",expand:e.$attrs.show,onClick:t[1]||(t[1]=t=>e.$emit("expand"))},null,8,["expand"])):g("v-if",!0)],2)],2)};var he=r({name:"LazyContainer",components:{Skeleton:me},props:{timeout:C.number,viewport:{type:"undefined"!=typeof window?window.HTMLElement:Object,default:()=>null},threshold:C.string.def("0px"),direction:C.oneOf(["vertical","horizontal"]).def("vertical"),tag:C.string.def("div"),maxWaitingTime:C.number.def(80),transitionName:C.string.def("lazy-container")},emits:["init"],setup(e,{emit:t}){const r=x(null),n=S({isInit:!1,loading:!1,intersectionObserverInstance:null}),{prefixCls:a}=$("lazy-container");function o(){n.loading=!0,U((()=>{n.isInit||(n.isInit=!0,t("init"))}),e.maxWaitingTime||80)}return k((()=>{!function(){const{timeout:t}=e;t&&U((()=>{o()}),t)}(),function(){const{timeout:t,direction:n,threshold:a}=e;if(t)return;let s="0px";switch(n){case"vertical":s=`${a} 0px`;break;case"horizontal":s=`0px ${a}`}try{const{stop:t,observer:n}=function({target:e,root:t,onIntersect:r,rootMargin:n="0px",threshold:a=.1}){let o=()=>{};const s=x(null),l=z((()=>{o(),s.value=new IntersectionObserver(r,{root:t?t.value:null,rootMargin:n,threshold:a});const l=e.value;l&&s.value.observe(l),o=()=>{s.value&&(s.value.disconnect(),e.value&&s.value.unobserve(e.value))}}));return{observer:s,stop:()=>{o(),l()}}}({rootMargin:s,target:T(r.value,"$el"),onIntersect:e=>{(e[0].isIntersecting||e[0].intersectionRatio)&&(o(),n&&t())},root:T(e,"viewport")})}catch(e){o()}}()})),{elRef:r,prefixCls:a,...O(n)}}});const ge={key:"component"},be={key:"skeleton",name:"lazy-skeleton"};function we(){const e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),e.eventType="message",window.dispatchEvent(e)}he.render=function(e,t,r,n,a,o){const s=v("Skeleton");return d(),m(A,j({class:e.prefixCls},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:y((()=>[e.isInit?(d(),m("div",ge,[h(e.$slots,"default",{loading:e.loading})])):(d(),m("div",be,[e.$slots.skeleton?h(e.$slots,"skeleton",{key:0}):(d(),m(s,{key:1}))]))])),_:1},16,["class","name","tag"])};var _e=r({name:"CollapseContainer",components:{Skeleton:me,LazyContainer:he,CollapseHeader:ye,CollapseTransition:D},props:{title:C.string.def(""),canExpan:C.bool.def(!0),helpMessage:{type:[Array,String],default:""},triggerWindowResize:C.bool,loading:C.bool,lazy:C.bool,lazyTime:C.number.def(0)},setup(e){const t=x(!0),{prefixCls:r}=$("collapse-container");return{show:t,handleExpand:function(){t.value=!t.value,e.triggerWindowResize&&U(we,200)},prefixCls:r}}});_e.render=function(e,t,r,n,a,s){const l=v("CollapseHeader"),i=v("Skeleton"),c=v("LazyContainer"),u=v("CollapseTransition");return d(),m("div",{class:["p-2",e.prefixCls]},[o(l,j(e.$props,{prefixCls:e.prefixCls,show:e.show,onExpand:e.handleExpand}),{title:y((()=>[h(e.$slots,"title")])),_:1},16,["prefixCls","show","onExpand"]),o(u,{enable:e.canExpan},{default:y((()=>[e.loading?(d(),m(i,{key:0})):B((d(),m("div",{key:1,class:`${e.prefixCls}__body`},[e.lazy?(d(),m(c,{key:0,timeout:e.lazyTime},{skeleton:y((()=>[h(e.$slots,"lazySkeleton")])),default:y((()=>[h(e.$slots,"default")])),_:3},8,["timeout"])):h(e.$slots,"default",{key:1})],2)),[[L,e.show]])])),_:1},8,["enable"])],2)};const xe="undefined"==typeof window,ze=function(e){for(const t of e){const e=t.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}},Ce={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function Se({move:e,size:t,bar:r}){const n={},a=`translate${r.axis}(${e}%)`;return n[r.size]=t,n.transform=a,n.msTransform=a,n.webkitTransform=a,n}var $e=r({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const t=W(),r=x(null),n=u("scroll-bar-wrap",{}),a=I((()=>Ce[e.vertical?"vertical":"horizontal"])),o=x({}),s=x(null),l=e=>{e.ctrlKey||2===e.button||(c(e),o.value[a.value.axis]=e.currentTarget[a.value.offset]-(e[a.value.client]-e.currentTarget.getBoundingClientRect()[a.value.direction]))},i=e=>{var o;const s=100*(Math.abs(e.target.getBoundingClientRect()[a.value.direction]-e[a.value.client])-r.value[a.value.offset]/2)/(null==(o=null==t?void 0:t.vnode.el)?void 0:o[a.value.offset]);n.value[a.value.scroll]=s*n.value[a.value.scrollSize]/100},c=e=>{e.stopImmediatePropagation(),s.value=!0,J(document,"mousemove",f),J(document,"mouseup",p),document.onselectstart=()=>!1},f=e=>{var l,i;if(!1===s.value)return;const c=o.value[a.value.axis];if(!c)return;const u=100*(-1*((null==(l=null==t?void 0:t.vnode.el)?void 0:l.getBoundingClientRect()[a.value.direction])-e[a.value.client])-(r.value[a.value.offset]-c))/(null==(i=null==t?void 0:t.vnode.el)?void 0:i[a.value.offset]);n.value[a.value.scroll]=u*n.value[a.value.scrollSize]/100};function p(){s.value=!1,o.value[a.value.axis]=0,F(document,"mousemove",f),document.onselectstart=null}return H((()=>{F(document,"mouseup",p)})),()=>M("div",{class:["scrollbar__bar","is-"+a.value.key],onMousedown:i},M("div",{ref:r,class:"scrollbar__thumb",onMousedown:l,style:Se({size:e.size,move:e.move,bar:a.value})}))}}),ke=r({name:"Scrollbar",components:{Bar:$e},props:{native:{type:Boolean,default:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const t=x("0"),r=x("0"),n=x(0),a=x(0),o=x(null),s=x(null);q("scroll-bar-wrap",o);const l=()=>{if(!o.value)return;const e=100*o.value.clientHeight/o.value.scrollHeight,n=100*o.value.clientWidth/o.value.scrollWidth;r.value=e<100?e+"%":"",t.value=n<100?n+"%":""};k((()=>{var t,r;e.native||(R(l),!e.noresize&&(t=s.value,r=l,xe||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new E(ze),t.__ro__.observe(t)),t.__resizeListeners__.push(r))))})),P((()=>{var t,r;e.native||!e.noresize&&(t=s.value,r=l,t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(r),1),t.__resizeListeners__.length||t.__ro__.disconnect()))}));const i=I((()=>{let t=e.wrapStyle;return Array.isArray(e.wrapStyle)&&(t=function(e){const t={};for(let a=0;a<e.length;a++)e[a]&&(r=t,n=e[a],Object.assign(r,n));var r,n;return t}(e.wrapStyle)),t}));return{moveX:n,moveY:a,sizeWidth:t,sizeHeight:r,style:i,wrap:o,resize:s,update:l,handleScroll:()=>{e.native||(a.value=100*o.value.scrollTop/o.value.clientHeight,n.value=100*o.value.scrollLeft/o.value.clientWidth)}}}});const Te={class:"scrollbar"};ke.render=function(e,t,r,n,a,s){const l=v("bar");return d(),m("div",Te,[o("div",{ref:"wrap",class:[e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"],style:e.style,onScroll:t[1]||(t[1]=(...t)=>e.handleScroll&&e.handleScroll(...t))},[(d(),m(N(e.tag),{ref:"resize",class:["scrollbar__view",e.viewClass],style:e.viewStyle},{default:y((()=>[h(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?g("v-if",!0):(d(),m(b,{key:0},[o(l,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),o(l,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])},X(ke);var Oe=r({name:"ScrollContainer",components:{Scrollbar:ke},setup(){const e=x(null);return{scrollbarRef:e,scrollTo:function(t,r=500){const n=Y(e);n&&R((()=>{const e=Y(n.wrap);if(!e)return;const{start:a}=G({el:e,to:t,duration:r});a()}))},scrollBottom:function(){const t=Y(e);t&&R((()=>{const e=Y(t.wrap);if(!e)return;const r=e.scrollHeight,{start:n}=G({el:e,to:r});n()}))},getScrollWrap:function(){const t=Y(e);return t?t.wrap:null}}}});Oe.render=function(e,t,r,n,a,o){const s=v("Scrollbar");return d(),m(s,j({ref:"scrollbarRef",wrapClass:"scrollbar__wrap",viewClass:"scrollbar__view",class:"scroll-container"},e.$attrs),{default:y((()=>[h(e.$slots,"default")])),_:3},16)},X(Oe,_e,he);export{me as S,_e as a,he as b,Oe as s};