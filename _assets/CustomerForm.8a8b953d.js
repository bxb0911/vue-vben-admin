import{a as e,cw as s,ac as i,h as o,i as t,o as r,j as n,k as a,w as d}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import{s as l}from"./index.fc3b8375.js";import"./colors.979a11b4.js";import"./RightOutlined.6f004af7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./index.836663cb.js";import"./index.a172b251.js";import"./index.8d15915b.js";import"./UpOutlined.e1b6c92f.js";import"./index.bd3e88ef.js";import"./index.a42d24ff.js";import"./index.868fcd95.js";import"./index.524b5daf.js";import{a as p}from"./index.396bbc0e.js";import"./LoadingOutlined.e80e544c.js";import"./RightOutlined.002e1fbb.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./index.29c225f3.js";import"./index.20e01bfc.js";import{u as m}from"./useForm.0665dd15.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:l,CollapseContainer:p},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};u.render=function(e,s,i,o,l,p){const m=t("a-input"),c=t("BasicForm"),u=t("CollapseContainer");return r(),n("div",f,[a(u,{title:"自定义表单"},{default:d((()=>[a(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:s})=>[a(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;