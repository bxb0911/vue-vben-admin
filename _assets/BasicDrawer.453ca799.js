let e=document.createElement("style");e.innerHTML=".basic-drawer .ant-drawer-wrapper-body{overflow:hidden}.basic-drawer .ant-drawer-close:hover{color:#ed6f6f}.basic-drawer .ant-drawer-body{height:calc(100% - 40px);padding:0;background-color:#f0f2f5}.basic-drawer .ant-drawer-body .scrollbar__wrap{padding:16px}.basic-drawer__detail{position:absolute}.basic-drawer__detail-header{height:100%}.basic-drawer__detail .ant-drawer-header{width:100%;height:40px;padding:0;border-top:1px solid #f0f0f0;box-sizing:border-box}.basic-drawer__detail .ant-drawer-title{height:100%}.basic-drawer__detail .ant-drawer-close{height:40px;line-height:40px}.basic-drawer__detail .scrollbar__wrap{padding:0}.basic-drawer__footer{position:absolute;bottom:0;width:100%;height:60px;padding:0 26px;line-height:60px;text-align:right;background:#fff;border-top:1px solid #f0f0f0}",document.head.appendChild(e);import{u as t,a as o,r as a,p as r,T as i,M as l,dv as s,O as n,a8 as d,f as c,c7 as p,az as b,B as f,aO as u,aN as w,c1 as g,t as h,bX as m,D as x}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import{D as v}from"./index.171116db.js";import{L as _}from"./LeftOutlined.e6de4091.js";import{b as y}from"./index.b191181c.js";import{g as k}from"./tsxHelper.20d71045.js";import{p as C}from"./propTypes.7f710850.js";const{t:T}=t(),B={confirmLoading:C.bool,showCancelBtn:C.bool.def(!0),cancelButtonProps:Object,cancelText:C.string.def(T("component.drawer.cancelText")),showOkBtn:C.bool.def(!0),okButtonProps:C.any,okText:C.string.def(T("component.drawer.okText")),okType:C.string.def("primary"),showFooter:C.bool,footerHeight:{type:[String,Number],default:60}},j={isDetail:C.bool,title:C.string.def(""),showDetailBack:C.bool.def(!0),visible:C.bool,loading:C.bool,maskClosable:C.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:C.bool,destroyOnClose:C.bool,...B};var O=o({inheritAttrs:!1,props:j,emits:["visible-change","ok","close","register"],setup(e,{slots:o,emit:C,attrs:T}){const B=a(null),j=a(!1),O=a(null),{t:F}=t(),D=r((()=>g(h(e),c(O)))),L=r((()=>{const e={placement:"right",...T,...c(D),visible:c(j)};e.title=void 0;const{isDetail:t,width:o,wrapClassName:a,getContainer:r}=e;if(t){o||(e.width="100%");const t="basic-drawer__detail";e.wrapClassName=a?`${a} ${t}`:t,r||(e.getContainer=".layout-content")}return e})),P=r((()=>({...T,...c(L)}))),$=r((()=>{const{footerHeight:e,showFooter:t}=c(L);return t&&e?m(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),z=r((()=>({position:"relative",height:`calc(100% - ${c($)})`,overflow:"auto",padding:"16px",paddingBottom:"30px"}))),H=r((()=>{var e;return!!(null==(e=c(L))?void 0:e.loading)}));async function N(e){const{closeFunc:t}=c(L);if(C("close",e),t&&b(t)){const e=await t();j.value=!e}else j.value=!1}i((()=>{j.value=e.visible})),l((()=>j.value),(e=>{x((()=>{C("visible-change",e)}))}),{immediate:!1});const M={setDrawerProps:function(e){O.value=g(c(O)||{},e),Reflect.has(e,"visible")&&(j.value=!!e.visible)}};return s((e=>{C("register",M,e.uid)})),()=>n(v,{class:"basic-drawer",onClose:N,...c(P)},{title:()=>function(){if(null==o?void 0:o.title)return k(o,"title");const{title:t}=c(D);return e.isDetail?n(w,{type:"flex",align:"middle",class:"basic-drawer__detail-header"},(()=>n(d,null,e.showDetailBack&&n(f,{size:"small",type:"link",onClick:N},(()=>n(_,null))),t&&n(u,{style:"flex:1",class:["basic-drawer__detail-title","ellipsis","px-2"]},(()=>t)),k(o,"titleToolbar")))):n(y,null,(()=>t||k(o,"title")))}(),default:()=>n(d,null,n("div",{ref:B,style:c(z)},n(p,{absolute:!0,tip:F("component.drawer.loadingText"),loading:c(H)}),k(o)),function(){if(null==o?void 0:o.footer)return k(o,"footer");const{showCancelBtn:e,cancelButtonProps:t,cancelText:a,showOkBtn:r,okType:i,okText:l,okButtonProps:s,confirmLoading:d,showFooter:p}=c(L);return p?n("div",{class:"basic-drawer__footer"},k(o,"insertFooter"),e&&n(f,{...t,onClick:N,class:"mr-2"},(()=>a)),k(o,"centerFooter"),r&&n(f,{type:i,onClick:()=>{C("ok")},...s,loading:d},(()=>l)),k(o,"appendFooter")):null}())})}});export default O;