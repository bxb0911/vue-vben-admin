import{a as e,u as l,s as t,f as s,i as r,o as n,j as o,w as u,k as a}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./Trigger.0e177197.js";import{T as i}from"./index.f1ffca81.js";import{F as c,a as F}from"./FullscreenOutlined.83e15126.js";import{u as m}from"./useFullScreen.9b0b8316.js";var p=e({name:"FullScreen",components:{FullscreenExitOutlined:c,FullscreenOutlined:F,Tooltip:i},setup(){const{t:e}=l(),{toggleFullscreen:r,isFullscreenRef:n}=m();return{getTitle:t((()=>s(n)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:n,toggleFullscreen:r}}});p.render=function(e,l,t,s,i,c){const F=r("FullscreenOutlined"),m=r("FullscreenExitOutlined"),p=r("Tooltip");return n(),o(p,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:u((()=>[a("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(n(),o(m,{key:1})):(n(),o(F,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default p;