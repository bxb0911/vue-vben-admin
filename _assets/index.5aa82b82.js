let a=document.createElement("style");a.innerHTML=".account-center-col[data-v-efaad362]:not(:last-child){padding:0 10px}.account-center-col[data-v-efaad362]:not(:last-child):not(:last-child){border-right:1px dashed #cecece}.account-center-top[data-v-efaad362]{padding:10px;margin:16px 16px 12px;background:#fff;border-radius:3px}.account-center-top__avatar[data-v-efaad362]{text-align:center}.account-center-top__avatar img[data-v-efaad362]{border-radius:50%}.account-center-top__avatar span[data-v-efaad362]{display:block;font-size:20px;font-weight:500}.account-center-top__avatar div[data-v-efaad362]{margin-top:3px;font-size:12px}.account-center-top__detail[data-v-efaad362]{padding-left:20px;margin-top:15px}.account-center-top__team-item[data-v-efaad362]{display:inline-block;padding:4px 24px}.account-center-top__team span[data-v-efaad362]{margin-left:3px}.account-center-bottom[data-v-efaad362]{padding:10px;margin:0 16px 16px;background:#fff;border-radius:3px}",document.head.appendChild(a);import{a as t,c$ as e,d0 as s,i as o,o as i,j as n,k as r,ad as c,aH as d,aS as l,p,n as f,cx as m}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import"./colors.979a11b4.js";import"./RightOutlined.6f004af7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import{T as u}from"./index.ca9dc8d5.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.9a09da4b.js";import{T as x}from"./index.a42d24ff.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import"./index.828ef56d.js";import{a as b}from"./index.396bbc0e.js";import"./RightOutlined.002e1fbb.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import{_}from"./header.0299ae16.js";import{s as j}from"./index.29c225f3.js";import{tags as v,teams as g,details as h,achieveList as C}from"./data.140e6b70.js";import T from"./Application.1ebfdf78.js";import k from"./Article.0d7c0b22.js";import $ from"./Project.c453bc79.js";var y=t({components:{CollapseContainer:b,Icon:j,Tag:x,Tabs:u,TabPane:u.TabPane,Article:k,Application:T,Project:$},setup:()=>({prefixCls:"account-center",headerImg:_,tags:v,teams:g,details:h,achieveList:C})});const O=l("data-v-efaad362");e("data-v-efaad362");const A=r("span",null,"Serati Ma",-1),I=r("div",null,"海纳百川，有容乃大",-1);s();const P=O(((a,t,e,s,l,u)=>{const x=o("a-col"),b=o("Icon"),_=o("a-row"),j=o("Tag"),v=o("CollapseContainer"),g=o("TabPane"),h=o("Tabs");return i(),n("div",{class:a.prefixCls},[r(_,{class:`${a.prefixCls}-top`},{default:O((()=>[r(x,{span:9,class:`${a.prefixCls}-col`},{default:O((()=>[r(_,null,{default:O((()=>[r(x,{span:8},{default:O((()=>[r("div",{class:`${a.prefixCls}-top__avatar`},[r("img",{width:"70",src:a.headerImg},null,8,["src"]),A,I],2)])),_:1}),r(x,{span:16},{default:O((()=>[r("div",{class:`${a.prefixCls}-top__detail`},[(i(!0),n(c,null,d(a.details,((a,t)=>(i(),n("p",{key:t},[r(b,{icon:a.icon},null,8,["icon"]),p(" "+f(a.title),1)])))),128))],2)])),_:1})])),_:1})])),_:1},8,["class"]),r(x,{span:7,class:`${a.prefixCls}-col`},{default:O((()=>[r(v,{title:"标签",canExpan:!1},{default:O((()=>[(i(!0),n(c,null,d(a.tags,((a,t)=>(i(),n(j,{key:t,class:"mb-2"},{default:O((()=>[p(f(a),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"]),r(x,{span:8,class:`${a.prefixCls}-col`},{default:O((()=>[r(v,{class:`${a.prefixCls}-top__team`,title:"团队",canExpan:!1},{default:O((()=>[(i(!0),n(c,null,d(a.teams,((t,e)=>(i(),n("div",{key:e,class:`${a.prefixCls}-top__team-item`},[r(b,{icon:t.icon,color:t.color},null,8,["icon","color"]),r("span",null,f(t.title),1)],2)))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"]),r("div",{class:`${a.prefixCls}-bottom`},[r(h,null,{default:O((()=>[(i(!0),n(c,null,d(a.achieveList,(a=>(i(),n(g,{key:a.key,tab:a.name},{default:O((()=>[(i(),n(m(a.component)))])),_:2},1032,["tab"])))),128))])),_:1})],2)],2)}));y.render=P,y.__scopeId="data-v-efaad362";export default y;