let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-e07fa688]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as t,cR as i,cS as s,i as r,o,j as a,k as d,aR as n}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.005d8637.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import"./index.9799a881.js";import"./index.fe671246.js";import"./colors.4e87fc28.js";import"./index.e51afa00.js";import"./RightOutlined.31cb4cc9.js";import"./index.4bc096ce.js";import"./types.1d435903.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./_baseFor.f4e5f03f.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.428f9fc4.js";import"./index.6bcb6667.js";import"./UpOutlined.58a09ac3.js";import"./LeftOutlined.258c5f05.js";import"./index.f39ff197.js";import"./index.687a618a.js";import"./index.8eebb15a.js";import"./index.6ed5ccd9.js";import"./index.2d8f1145.js";import"./zh_CN.0242bd16.js";import"./TableAction.cfd8ad49.js";import"./index.cb9a9fbb.js";import"./CaretDownFilled.146c316e.js";import"./CheckOutlined.39e044e3.js";import"./CloseOutlined.c0e09c7a.js";import{s as m}from"./EditTableHeaderIcon.b9c127db.js";import"./DownOutlined.f6157dc5.js";import"./FullscreenOutlined.69bc28f3.js";import"./LeftOutlined.e2617435.js";import"./functional.cca96ab1.js";import"./RedoOutlined.c5f7fe05.js";import"./RightOutlined.0108934f.js";import"./SettingOutlined.05c63235.js";import"./useTimeout.4044af85.js";import"./useDebounce.c071ec0c.js";import"./useEventListener.e7c114de.js";import"./useBreakpoint.8d335e41.js";import{D as c}from"./index.045f5d56.js";import"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import"./useForm.607168db.js";import"./index.33af1ccc.js";import"./useModalContext.a7741058.js";import"./domUtils.f125794f.js";import"./useFullScreen.dd6aaa77.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.81260ba1.js";import"./useExpose.b65400cc.js";import"./index.257243b0.js";import{u as p}from"./useTable.76a970c6.js";import{refundSchema as l,refundData as j,personSchema as u,personData as f,refundTableData as b,refundTableSchema as x,refundTimeTableSchema as h,refundTimeTableData as g}from"./data.fe34cabc.js";var T=t({components:{Description:c,BasicTable:m},setup(){const[e]=p({title:"退货商品",dataSource:b,columns:x,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=p({title:"退货进度",columns:h,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:l,refundData:j,personSchema:u,personData:f}}});const O=n("data-v-e07fa688");i("data-v-e07fa688");const S={class:"m-5 desc-wrap"};s();const D=O(((e,t,i,s,n,m)=>{const c=r("a-page-header"),p=r("Description"),l=r("a-divider"),j=r("BasicTable");return o(),a("div",null,[d(c,{title:"基础详情页",ghost:!1}),d("div",S,[d(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),d(l),d(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),d(l),d(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),d(l),d(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])}));T.render=D,T.__scopeId="data-v-e07fa688";export default T;