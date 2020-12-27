import{a as e,h as n,i as o,o as s,j as a,k as r,w as c,p as l}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import{a as t}from"./index.396bbc0e.js";import"./RightOutlined.002e1fbb.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";var i=e({components:{CollapseContainer:t},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:a,createErrorModal:r,createWarningModal:c,notification:l}=n(),{info:t,success:i,warning:d,error:m}=e;return{infoMsg:t,successMsg:i,warningMsg:d,errorMsg:m,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){c({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){l.success({message:"Tip",description:"content message..."})}}}});const d={class:"p-4"},m=l(" Info "),u=l(" Success "),f=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l("Info"),h=l("Warning"),M=l("Success"),k=l("Error"),_=l("Info"),b=l("Success"),w=l("Error"),j=l("Warning"),x=l("Success");i.render=function(e,n,l,t,i,S){const T=o("a-button"),E=o("CollapseContainer");return s(),a("div",d,[r(E,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:c((()=>[r(T,{onClick:n[1]||(n[1]=n=>e.infoMsg("Info message")),class:"mr-2"},{default:c((()=>[m])),_:1}),r(T,{onClick:n[2]||(n[2]=n=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:c((()=>[u])),_:1}),r(T,{onClick:n[3]||(n[3]=n=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:c((()=>[f])),_:1}),r(T,{onClick:n[4]||(n[4]=n=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:c((()=>[g])),_:1}),r(T,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:c((()=>[p])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:c((()=>[r(T,{onClick:n[5]||(n[5]=n=>e.handleConfirm("info")),class:"mr-2"},{default:c((()=>[C])),_:1}),r(T,{onClick:n[6]||(n[6]=n=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:c((()=>[h])),_:1}),r(T,{onClick:n[7]||(n[7]=n=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:c((()=>[M])),_:1}),r(T,{onClick:n[8]||(n[8]=n=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:c((()=>[k])),_:1})])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:c((()=>[r(T,{onClick:e.handleInfoModal,class:"mr-2"},{default:c((()=>[_])),_:1},8,["onClick"]),r(T,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"]),r(T,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:c((()=>[w])),_:1},8,["onClick"]),r(T,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:c((()=>[r(T,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"])])),_:1})])};export default i;