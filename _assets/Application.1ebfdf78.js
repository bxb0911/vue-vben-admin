let a=document.createElement("style");a.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(a);import{a as t,i,o,j as e,w as n,k as c,ad as r,aH as s,m as l,p,n as d}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import"./RightOutlined.6f004af7.js";import"./index.ca9dc8d5.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import{C as m}from"./index.9a09da4b.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.828ef56d.js";import{s as u}from"./index.29c225f3.js";import{applicationList as _}from"./data.140e6b70.js";var x=t({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const j=p(" 活跃用户："),b=p(" 万 "),g=p(" 新增用户：");x.render=function(a,t,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),v=i("a-row"),L=i("List");return o(),e(L,{class:a.prefixCls},{default:n((()=>[c(v,{gutter:16},{default:n((()=>[(o(!0),e(r,null,s(a.list,((t,i)=>(o(),e(w,{key:i,span:6},{default:n((()=>[c(h,null,{default:n((()=>[c(C,{hoverable:!0,class:`${a.prefixCls}__card`},{default:n((()=>[c("div",{class:`${a.prefixCls}__card-title`},[t.icon?(o(),e(x,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):l("v-if",!0),p(" "+d(t.title),1)],2),c("div",{class:`${a.prefixCls}__card-num`},[j,c("span",null,d(t.active),1),b],2),c("div",{class:`${a.prefixCls}__card-num`},[g,c("span",null,d(t.new),1)],2),t.download?(o(),e(x,{key:0,class:`${a.prefixCls}__card-download`,icon:t.download},null,8,["class","icon"])):l("v-if",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;