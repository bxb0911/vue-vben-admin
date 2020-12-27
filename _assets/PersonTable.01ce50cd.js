import{a as e,i as t,o as i,j as o,k as n,w as a,p as s}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.134fae12.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import"./index.fc3b8375.js";import"./colors.979a11b4.js";import"./index.0f8d0dc5.js";import"./RightOutlined.6f004af7.js";import"./index.c946b280.js";import"./types.43c7aaee.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./_baseFor.f4e5f03f.js";import"./index.836663cb.js";import"./index.a172b251.js";import"./index.f1ffca81.js";import"./index.8d15915b.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.bd3e88ef.js";import"./index.a42d24ff.js";import"./index.6a540922.js";import"./index.868fcd95.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import{T as d}from"./TableAction.5b533915.js";import"./index.524b5daf.js";import"./CaretDownFilled.707298b9.js";import"./index.396bbc0e.js";import"./CheckOutlined.9461d66f.js";import"./CloseOutlined.102bb4f4.js";import{s as r,b as l,c as m}from"./EditTableHeaderIcon.ef7e104f.js";import"./DownOutlined.d1a8c093.js";import"./FullscreenOutlined.83e15126.js";import"./functional.dfd5141f.js";import"./LoadingOutlined.e80e544c.js";import"./RedoOutlined.8bbda621.js";import"./RightOutlined.002e1fbb.js";import"./SettingOutlined.dac539ab.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./index.29c225f3.js";import"./index.20e01bfc.js";import"./useForm.0665dd15.js";import"./index.f91c8fa5.js";import"./useWindowSizeFn.f3a1a2ad.js";import"./useFullScreen.9b0b8316.js";import"./uuid.40269c00.js";import"./useExpose.2895e2fc.js";import"./index.74f2d40e.js";import{u as c}from"./useTable.0c261acf.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:m({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:m({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:m({dataIndex:"dept",placeholder:"请输入所属部门"})}],b=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=e({components:{BasicTable:r,EditTableHeaderIcon:l,TableAction:d},setup(){const[e,{getDataSource:t}]=c({columns:p,showIndexColumn:!1,dataSource:b,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const u=s("新增成员");j.render=function(e,s,d,r,l,m){const c=t("TableAction"),p=t("BasicTable"),b=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[n(c,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(b,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[u])),_:1},8,["onClick"])])};export default j;