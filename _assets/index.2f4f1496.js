import{a as e,r as n,f as a,i as t,o,j as r,k as s,w as l,p as c}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import{M as u}from"./index.acf30c8e.js";var i=e({components:{MarkDown:u},setup(){const e=n(null),t=n("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const n=a(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const f={class:"p-4"},m=c("黑暗主题");i.render=function(e,n,a,c,u,i){const d=t("a-button"),p=t("MarkDown");return o(),r("div",f,[s(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[m])),_:1},8,["onClick"]),s(p,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])};export default i;