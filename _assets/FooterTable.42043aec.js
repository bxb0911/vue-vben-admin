import{a as e,i,o as t,j as o,k as s}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.e0fe3925.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import"./index.43870d62.js";import"./colors.85a0501b.js";import"./index.90460355.js";import"./RightOutlined.efab7f95.js";import"./index.c7bfccf1.js";import"./types.fdd51616.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./_baseFor.f4e5f03f.js";import"./index.fb7b7fcf.js";import"./index.a172b251.js";import"./index.cf20d4ea.js";import"./index.121aaab0.js";import"./UpOutlined.a902a507.js";import"./LeftOutlined.61f5ba5e.js";import"./index.207bd9d1.js";import"./index.1ed6e71f.js";import"./index.857a7cfa.js";import"./index.eb12d9aa.js";import"./index.da5dce07.js";import"./zh_CN.0242bd16.js";import"./TableAction.dc2d219d.js";import"./index.82e6b05e.js";import"./CaretDownFilled.dbfbf103.js";import"./index.1ec384e7.js";import"./CheckOutlined.d308f830.js";import"./CloseOutlined.5e877561.js";import{s as r}from"./EditTableHeaderIcon.96d875dc.js";import"./DownOutlined.4cea9284.js";import"./FullscreenOutlined.5bf2d27d.js";import"./functional.371050ee.js";import"./LoadingOutlined.fa8d08eb.js";import"./RedoOutlined.d1f9136b.js";import"./RightOutlined.c78ef51e.js";import"./SettingOutlined.e19b2d73.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import"./useAttrs.24cb77cc.js";import"./index.7b7aac10.js";import"./index.445b644a.js";import"./useForm.8efc7ee5.js";import"./index.5422414d.js";import"./useWindowSizeFn.fea544b1.js";import"./useFullScreen.188ccb9d.js";import"./uuid.40269c00.js";import"./useExpose.72997979.js";import"./index.b3197714.js";import{u as d}from"./useTable.62c29e78.js";import{getBasicColumns as m}from"./tableData.02d99860.js";import{d as n}from"./table.32698c04.js";var p=e({components:{BasicTable:r},setup(){const[e]=d({title:"表尾行合计示例",api:n,rowSelection:{type:"checkbox"},columns:m(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const a={class:"p-4"};p.render=function(e,r,d,m,n,p){const j=i("BasicTable");return t(),o("div",a,[s(j,{onRegister:e.registerTable},null,8,["onRegister"])])};export default p;