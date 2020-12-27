let e=document.createElement("style");e.innerHTML=".login-form__locale{position:absolute;top:14px;right:14px;z-index:1}.login{position:relative;height:100vh;background:url(./_assets/login-bg.3125afa7.png) 0 0/100% 100% no-repeat}.login-mask{display:none;height:100%;background:url(./_assets/login-in.0c3d910e.png) 30% 30%/80% 80% no-repeat}.login-form{position:relative;bottom:60px;width:400px;background:padding-box #fff;border:8px solid rgba(255,255,255,.5);border-radius:4px}@media only screen and (min-width:1200px){.login-mask{display:block}.login-form{margin:0 120px 0 50px}}.login-form-wrap{position:absolute;top:0;right:0;display:flex;width:100%;height:100%;justify-content:center;align-items:center}@media only screen and (min-width:1200px){.login-form-wrap{justify-content:flex-end}}.login-form__content{position:relative;width:100%;height:100%;padding:60px 0 40px;border:1px solid #999;border-radius:2px}.login-form__content header{display:flex;justify-content:center;align-items:center}.login-form__content header img{display:inline-block;width:48px}.login-form__content header h1{margin-bottom:0;font-size:24px;text-align:center}.login-form__content form{width:80%}",document.head.appendChild(e);import{a as o,A as a,r as l,u as n,b as i,l as t,c as s,e as r,f as d,g as c,t as g,h as u,i as m,o as f,j as p,k as h,m as y,n as x,w as b,p as w}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import{C as _}from"./index.8d15915b.js";import"./index.29c225f3.js";import{s as v}from"./index.20e01bfc.js";var k=o({components:{AButton:v,ACheckbox:_,AppLocalePicker:a},setup(){const e=l(null),o=l(!1),a=s(),{locale:m}=r(),{notification:f}=u(),{t:p}=n(),h=i({account:"vben",password:"123456"}),y=i({loading:!1}),x=i({account:[{required:!0,message:p("sys.login.accountPlaceholder"),trigger:"blur"}],password:[{required:!0,message:p("sys.login.passwordPlaceholder"),trigger:"blur"}]});return{formRef:e,formData:h,formState:y,formRules:x,login:async function(){const o=d(e);if(o){y.loading=!0;try{const e=await o.validate(),a=await c.login(g({password:e.password,username:e.account}));a&&f.success({message:p("sys.login.loginSuccessTitle"),description:`${p("sys.login.loginSuccessDesc")}: ${a.realName}`,duration:3})}catch(e){}finally{y.loading=!1}}},autoLogin:o,title:a&&a.title,logo:t,t:p,showLocale:m.show}}});const L={class:"login"},j=h("div",{class:"login-mask"},null,-1),D={class:"login-form-wrap"},z={class:"login-form mx-6"},A={class:"login-form__content px-2 py-10"};k.render=function(e,o,a,l,n,i){const t=m("AppLocalePicker"),s=m("a-input"),r=m("a-form-item"),d=m("a-input-password"),c=m("a-checkbox"),g=m("a-col"),u=m("a-button"),_=m("a-row"),v=m("a-form");return f(),p("div",L,[j,h("div",D,[h("div",z,[e.showLocale?(f(),p(t,{key:0,class:"login-form__locale"})):y("v-if",!0),h("div",A,[h("header",null,[h("img",{src:e.logo,class:"mr-4"},null,8,["src"]),h("h1",null,x(e.title),1)]),h(v,{class:"mx-auto mt-10",model:e.formData,rules:e.formRules,ref:"formRef"},{default:b((()=>[h(r,{name:"account"},{default:b((()=>[h(s,{size:"large",value:e.formData.account,"onUpdate:value":o[1]||(o[1]=o=>e.formData.account=o),placeholder:"username: vben"},null,8,["value"])])),_:1}),h(r,{name:"password"},{default:b((()=>[h(d,{size:"large",visibilityToggle:"",value:e.formData.password,"onUpdate:value":o[2]||(o[2]=o=>e.formData.password=o),placeholder:"password: 123456"},null,8,["value"])])),_:1}),y(' <a-form-item name="verify" v-if="openLoginVerify">\n              <BasicDragVerify v-model:value="formData.verify" ref="verifyRef" />\n            </a-form-item> '),h(_,null,{default:b((()=>[h(g,{span:12},{default:b((()=>[h(r,null,{default:b((()=>[y(" No logic, you need to deal with it yourself "),h(c,{checked:e.autoLogin,"onUpdate:checked":o[3]||(o[3]=o=>e.autoLogin=o),size:"small"},{default:b((()=>[w(x(e.t("sys.login.autoLogin")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),h(g,{span:12},{default:b((()=>[h(r,{style:{"text-align":"right"}},{default:b((()=>[y(" No logic, you need to deal with it yourself "),h(u,{type:"link",size:"small"},{default:b((()=>[w(x(e.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),h(r,null,{default:b((()=>[h(u,{type:"primary",size:"large",class:"rounded-sm",block:!0,onClick:e.login,loading:e.formState.loading},{default:b((()=>[w(x(e.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model","rules"])])])])])};export default k;