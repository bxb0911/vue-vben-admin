let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{d5 as t,a as s,B as a,Q as i,h as o,c$ as r,d0 as d,i as n,o as m,j as c,aS as p,k as l,p as j}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import{s as u}from"./index.b1472a21.js";import"./colors.357808bb.js";import"./RightOutlined.20ea3258.js";import"./types.3d31dfe9.js";import{U as f}from"./index.8bcd9c6c.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./_baseFor.f4e5f03f.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.32b369e3.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.f6608bc6.js";import"./index.53fd9e8f.js";import"./index.26d03542.js";import"./FileOutlined.1bf69a54.js";import{a as b}from"./index.5dad729e.js";import"./LoadingOutlined.53bec7b5.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.bd8026f6.js";import{s as g}from"./index.c1040e54.js";import"./index.7dea14a1.js";import{u as h}from"./useForm.8a043248.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var O=s({components:{BasicForm:u,CollapseContainer:b,Button:a,Upload:f,Icon:g},setup(){const{createMessage:e}=o(),[s,{setFieldsValue:a}]=h({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});a(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const v=p("data-v-c0c2b920");r("data-v-c0c2b920");const F={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=j("更换头像 "),T=j("更新基本信息");d();const U=v(((e,t,s,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),j=n("Button"),u=n("Upload"),f=n("a-row"),b=n("CollapseContainer");return m(),c(b,{title:"基本设置",canExpan:!1},{default:v((()=>[l(f,{gutter:24},{default:v((()=>[l(d,{span:14},{default:v((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:v((()=>[l("div",F,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:v((()=>[l(j,{type:"ghost",class:"ml-5"},{default:v((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:e.handleSubmit},{default:v((()=>[T])),_:1},8,["onClick"])])),_:1})}));O.render=U,O.__scopeId="data-v-c0c2b920";export default O;