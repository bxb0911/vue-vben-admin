let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,au as i,i as n,o as s,j as r,k as a,n as p,v as d,aS as m}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./UpOutlined.e1b6c92f.js";import"./index.6a540922.js";import{I as o}from"./index.868fcd95.js";import"./index.f100c6bc.js";import"./index.396bbc0e.js";import"./index.4cfe6bd5.js";import"./RightOutlined.002e1fbb.js";import"./SettingOutlined.dac539ab.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./useHeaderSetting.5193462f.js";import{b as c}from"./index.d553c5f1.js";var u=t({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=i("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)}}}});const l=m("data-v-9dadcc20")(((e,t,i,m,o,c)=>{const u=n("InputNumber");return s(),r("div",{class:e.prefixCls},[a("span",null,p(e.title),1),a(u,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-9dadcc20";export default u;