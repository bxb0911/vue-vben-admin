let e=document.createElement("style");e.innerHTML=".demo[data-v-ab2568ac]{background:#fff}",document.head.appendChild(e);import{a as s,as as a,aq as o,c_ as r,c$ as t,W as c,X as i,i as d,c8 as l,o as n,j as m,k as u,m as f,l as p,a6 as _,Y as y,n as x}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import{A as h}from"./index.149c1c14.js";import{D as P}from"./index.73c71c16.js";import v from"./CurrentPermissionMode.77b41211.js";import{A as C}from"./index.68553bea.js";var b=s({components:{Alert:h,CurrentPermissionMode:v,Divider:P,Authority:C},setup(){const{hasPermission:e}=r();async function s(e){const s=await t({userId:e});a.commitPermCodeListState(s)}return s("1"),{hasPermission:e,permissionStore:a,changePermissionCode:s,PermissionModeEnum:o}}});const g=y("data-v-ab2568ac");c("data-v-ab2568ac");const j={class:"p-4 m-4 demo"},k=x(" 当前拥有的code列表: "),A=x(" 点击切换按钮权限(用户id为2) "),M=x(" 点击切换按钮权限(用户id为1,默认) "),S=x("组件方式判断权限"),w=x("拥有code ['1000']权限可见"),D=x("拥有code ['2000']权限可见"),L=x("拥有code ['1000','2000']角色权限可见"),E=x("函数方式方式判断权限"),I=x(" 拥有code ['1000']权限可见 "),q=x(" 拥有code ['2000']权限可见 "),H=x(" 拥有code ['1000','2000']角色权限可见 "),T=x("指令方式方式判断权限(该方式不能动态修改权限.)"),W=x(" 拥有code ['1000']权限可见 "),X=x(" 拥有code ['2000']权限可见 "),Y=x(" 拥有code ['1000','2000']角色权限可见 ");i();const $=g(((e,s,a,o,r,t)=>{const c=d("Alert"),i=d("CurrentPermissionMode"),y=d("Divider"),x=d("a-button"),h=d("Authority"),P=l("auth");return n(),m("div",j,[u(c,{message:"刷新后会还原","show-icon":""}),u(i),u("p",null,[k,u("a",null,f(e.permissionStore.getPermCodeListState),1)]),u(y),u(c,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(y),u(x,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:g((()=>[A])),_:1}),u(x,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:g((()=>[M])),_:1}),u(y,null,{default:g((()=>[S])),_:1}),u(h,{value:"1000"},{default:g((()=>[u(x,{type:"primary",class:"mx-4"},{default:g((()=>[w])),_:1})])),_:1}),u(h,{value:"2000"},{default:g((()=>[u(x,{color:"success",class:"mx-4"},{default:g((()=>[D])),_:1})])),_:1}),u(h,{value:["1000","2000"]},{default:g((()=>[u(x,{color:"error",class:"mx-4"},{default:g((()=>[L])),_:1})])),_:1}),u(y,null,{default:g((()=>[E])),_:1}),e.hasPermission("1000")?(n(),m(x,{key:0,type:"primary",class:"mx-4"},{default:g((()=>[I])),_:1})):p("",!0),e.hasPermission("2000")?(n(),m(x,{key:1,color:"success",class:"mx-4"},{default:g((()=>[q])),_:1})):p("",!0),e.hasPermission(["1000","2000"])?(n(),m(x,{key:2,color:"error",class:"mx-4"},{default:g((()=>[H])),_:1})):p("",!0),u(y,null,{default:g((()=>[T])),_:1}),_(u(x,{type:"primary",class:"mx-4"},{default:g((()=>[W])),_:1},512),[[P,"1000"]]),_(u(x,{color:"success",class:"mx-4"},{default:g((()=>[X])),_:1},512),[[P,"2000"]]),_(u(x,{color:"error",class:"mx-4"},{default:g((()=>[Y])),_:1},512),[[P,["1000","2000"]]])])}));b.render=$,b.__scopeId="data-v-ab2568ac";export default b;