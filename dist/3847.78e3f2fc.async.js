"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3847],{2850:function(pe,C,e){var Z=e(82878),B=(0,Z.Z)({scriptUrl:["//at.alicdn.com/t/c/font_3354854_ob5y15ewlyq.js"]});C.Z=B},29457:function(pe,C,e){e.r(C);var Z=e(44463),B=e.n(Z),X=e(35290),D=e.n(X),q=e(30279),d=e.n(q),ee=e(411),ne=e.n(ee),P=e(46686),k=e.n(P),I=e(63313),he=e.n(I),i=e(71976),p=e(61839),le=e(4352),$=e(30314),_e=e(59225),b=e(65646),Q=e(73835),te=e(41601),z=e(28786),G=e(3567),ae=e(2850),re=e(65439),Y=e.n(re),n=e(11527),u=["key","name"],oe=["key","name"],H=[{name:"\u547D\u4EE4",value:"command"},{name:"\u540D\u79F0",value:"name"},{name:"\u5B9A\u65F6\u89C4\u5219",value:"schedule"},{name:"\u72B6\u6001",value:"status"},{name:"\u6807\u7B7E",value:"labels"}],T={Reg:"",NotReg:"",In:"select",Nin:"select"},ue=[{name:"\u5305\u542B",value:"Reg"},{name:"\u4E0D\u5305\u542B",value:"NotReg"},{name:"\u5C5E\u4E8E",value:"In",type:"select"},{name:"\u4E0D\u5C5E\u4E8E",value:"Nin",type:"select"}],de=[{name:"\u987A\u5E8F",value:"ASC"},{name:"\u5012\u5E8F",value:"DESC"}],ie={status:[{name:"\u8FD0\u884C\u4E2D",value:0},{name:"\u7A7A\u95F2\u4E2D",value:1},{name:"\u5DF2\u7981\u7528",value:2}]},m;(function(L){L.and="\u4E14",L.or="\u6216"})(m||(m={}));var M=function(j){var c=j.view,x=j.handleCancel,R=j.visible,W=i.Z.useForm(),h=k()(W,1),v=h[0],S=(0,I.useState)(!1),y=k()(S,2),w=y[0],g=y[1],V=(0,I.useState)("and"),A=k()(V,2),f=A[0],O=A[1],N=function(){var t=ne()(D()().mark(function l(_){var a,s,o,E;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return g(!0),_.filterRelation=f,a=c?"put":"post",r.prev=3,r.next=6,Q.W[a]("".concat(te.Z.apiPrefix,"crons/views"),{data:c?d()(d()({},_),{},{id:c.id}):_});case 6:s=r.sent,o=s.code,E=s.data,o===200&&x(E),g(!1),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),g(!1);case 16:case"end":return r.stop()}},l,null,[[3,13]])}));return function(_){return t.apply(this,arguments)}}();(0,I.useEffect)(function(){c||v.resetFields(),v.setFieldsValue(c||{filters:[{property:"command",operation:"Reg"}]})},[c,R]);var U=(0,n.jsx)(p.Z,{style:{width:80},children:ue.map(function(t){return(0,n.jsx)(p.Z.Option,{value:t.value,children:t.name},t.name)})}),J=function(l){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(0,n.jsx)(p.Z,{style:_,children:l.map(function(a){return(0,n.jsx)(p.Z.Option,{value:a.value,children:a.name},a.name)})})},se=(0,n.jsx)(p.Z,{children:de.map(function(t){return(0,n.jsx)(p.Z.Option,{value:t.value,children:t.name},t.name)})}),me=function(l){var _;return(0,n.jsx)(p.Z,{mode:"tags",allowClear:!0,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u589E\u52A0\u81EA\u5B9A\u4E49\u9009\u9879",children:(_=ie[l])===null||_===void 0?void 0:_.map(function(a){return(0,n.jsx)(p.Z.Option,{value:a.value,children:a.name},a.name)})})};return(0,n.jsx)(le.Z,{title:c?"\u7F16\u8F91\u89C6\u56FE":"\u65B0\u5EFA\u89C6\u56FE",open:R,forceRender:!0,width:580,centered:!0,maskClosable:!1,onOk:function(){v.validateFields().then(function(l){N(l)}).catch(function(l){console.log("Validate Failed:",l)})},onCancel:function(){return x()},confirmLoading:w,children:(0,n.jsxs)(i.Z,{form:v,layout:"vertical",name:"env_modal",children:[(0,n.jsx)(i.Z.Item,{name:"name",label:"\u89C6\u56FE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"}],children:(0,n.jsx)($.Z,{placeholder:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"})}),(0,n.jsx)(i.Z.List,{name:"filters",children:function(l,_){var a=_.add,s=_.remove;return(0,n.jsxs)("div",{style:{position:"relative"},className:"view-filters-container ".concat(l.length>1?"active":""),children:[l.length>1&&(0,n.jsx)("div",{style:{position:"absolute",width:50,borderRadius:10,border:"1px solid rgb(190, 220, 255)",borderRight:"none",height:56*(l.length-1),top:46,left:15},children:(0,n.jsx)(_e.Z,{type:"primary",size:"small",style:{position:"absolute",top:"50%",translate:"-50% -50%",padding:"0 0 0 3px",cursor:"pointer"},onClick:function(){O(f==="and"?"or":"and")},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:m[f]}),(0,n.jsx)(ae.Z,{type:"ql-icon-d-caret"})]})})}),(0,n.jsxs)("div",{children:[l.map(function(o,E){var F=o.key,r=o.name,K=B()(o,u);return(0,n.jsx)(i.Z.Item,{label:E===0?"\u7B5B\u9009\u6761\u4EF6":"",style:{marginBottom:0},required:!0,className:"filter-item",children:(0,n.jsxs)(b.Z,{className:"view-create-modal-filters",align:"baseline",style:l.length>1?{width:"calc(100% - 40px)"}:{},children:[(0,n.jsx)(i.Z.Item,d()(d()({},K),{},{name:[r,"property"],rules:[{required:!0}],children:J(H,{width:90})})),(0,n.jsx)(i.Z.Item,d()(d()({},K),{},{name:[r,"operation"],rules:[{required:!0}],children:U})),(0,n.jsx)(i.Z.Item,{noStyle:!0,shouldUpdate:function(ve,Ee){var Pe=T[Y()(ve,["filters",r,"operation"])],Oe=T[Y()(Ee,["filters",r,"operation"])],De=Pe!==Oe;return De&&v.setFieldValue(["filters",r,"value"],Oe==="select"?[]:""),De},children:function(){var ve=v.getFieldValue(["filters",E,"property"]),Ee=v.getFieldValue(["filters",r,"operation"]);return(0,n.jsx)(i.Z.Item,d()(d()({},K),{},{name:[r,"value"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}],children:T[Ee]==="select"?me(ve):(0,n.jsx)($.Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})}))}}),E!==0&&(0,n.jsx)(z.Z,{onClick:function(){return s(r)}})]})},F)}),(0,n.jsx)(i.Z.Item,{children:(0,n.jsxs)("a",{onClick:function(){return a({property:"command",operation:"Reg"})},children:[(0,n.jsx)(G.Z,{}),"\u65B0\u589E\u7B5B\u9009\u6761\u4EF6"]})})]})]})}}),(0,n.jsx)(i.Z.List,{name:"sorts",children:function(l,_){var a=_.add,s=_.remove;return(0,n.jsxs)(n.Fragment,{children:[l.map(function(o,E){var F=o.key,r=o.name,K=B()(o,oe);return(0,n.jsx)(i.Z.Item,{label:E===0?"\u6392\u5E8F\u65B9\u5F0F":"",style:{marginBottom:0},children:(0,n.jsxs)(b.Z,{className:"view-create-modal-sorts",align:"baseline",children:[(0,n.jsx)(i.Z.Item,d()(d()({},K),{},{name:[r,"property"],rules:[{required:!0}],children:J(H,{width:240})})),(0,n.jsx)(i.Z.Item,d()(d()({},K),{},{name:[r,"type"],rules:[{required:!0}],children:se})),(0,n.jsx)(z.Z,{onClick:function(){return s(r)}})]})},F)}),(0,n.jsx)(i.Z.Item,{children:(0,n.jsxs)("a",{onClick:function(){return a({property:"command",type:"ASC"})},children:[(0,n.jsx)(G.Z,{}),"\u65B0\u589E\u6392\u5E8F\u65B9\u5F0F"]})})]})}})]})})};C.default=M},13847:function(pe,C,e){e.r(C);var Z=e(94434),B=e.n(Z),X=e(30279),D=e.n(X),q=e(46686),d=e.n(q),ee=e(44463),ne=e.n(ee),P=e(63313),k=e.n(P),I=e(87670),he=e(84442),i=e(65646),p=e(4352),le=e(63533),$=e(59225),_e=e(61685),b=e(73835),Q=e(41601),te=e(97947),z=e(5962),G=e(17462),ae=e(16667),re=e(73119),Y=e(66255),n=e(29457),u=e(11527),oe=["index","moveRow","className","style"],H=I.Z.Text,T="DragableBodyRow",ue=function(m){var M=m.index,L=m.moveRow,j=m.className,c=m.style,x=ne()(m,oe),R=(0,P.useRef)(),W=(0,G.L)({accept:T,collect:function(O){var N=O.getItem()||{},U=N.index;return U===M?{}:{isOver:O.isOver(),dropClassName:U<M?" drop-over-downward":" drop-over-upward"}},drop:function(O){L(O.index,M)}}),h=d()(W,2),v=h[0],S=v.isOver,y=v.dropClassName,w=h[1],g=(0,ae.c)({type:T,item:{index:M},collect:function(O){return{isDragging:O.isDragging()}}}),V=d()(g,2),A=V[1];return w(A(R)),(0,u.jsx)("tr",D()({ref:R,className:"".concat(j).concat(S?y:""),style:D()({cursor:"move"},c)},x))},de=function(m){var M=m.cronViews,L=m.handleCancel,j=m.visible,c=m.cronViewChange,x=[{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center",render:function(l){return(0,u.jsx)("div",{style:{textAlign:"left",paddingLeft:30},children:l})}},{title:"\u7C7B\u578B",dataIndex:"type",key:"type",align:"center",render:function(l){return l===1?"\u7CFB\u7EDF":"\u4E2A\u4EBA"}},{title:"\u663E\u793A",key:"isDisabled",dataIndex:"isDisabled",align:"center",width:100,render:function(l,_,a){return(0,u.jsx)(he.Z,{checked:!_.isDisabled,onChange:function(o){return J(o,_,a)}})}},{title:"\u64CD\u4F5C",key:"action",width:100,align:"center",render:function(l,_,a){return _.type!==1?(0,u.jsxs)(i.Z,{size:"middle",children:[(0,u.jsx)("a",{onClick:function(){return N(_,a)},children:(0,u.jsx)(te.Z,{})}),(0,u.jsx)("a",{onClick:function(){return U(_,a)},children:(0,u.jsx)(z.Z,{})})]}):"-"}}],R=(0,P.useState)([]),W=d()(R,2),h=W[0],v=W[1],S=(0,P.useState)(!1),y=d()(S,2),w=y[0],g=y[1],V=(0,P.useState)(null),A=d()(V,2),f=A[0],O=A[1],N=function(l,_){O(l),g(!0)},U=function(l,_){p.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:(0,u.jsxs)(u.Fragment,{children:["\u786E\u8BA4\u5220\u9664\u89C6\u56FE"," ",(0,u.jsx)(H,{style:{wordBreak:"break-all"},type:"warning",children:l.name})," ","\u5417"]}),onOk:function(){b.W.delete("".concat(Q.Z.apiPrefix,"crons/views"),{data:[l.id]}).then(function(s){var o=s.code,E=s.data;o===200&&(le.ZP.success("\u5220\u9664\u6210\u529F"),c())})},onCancel:function(){console.log("Cancel")}})},J=function(l,_,a){console.log(l),b.W.put("".concat(Q.Z.apiPrefix,"crons/views/").concat(l?"enable":"disable"),{data:[_.id]}).then(function(s){var o=s.code,E=s.data;if(o===200){var F=B()(h);F.splice(a,1,D()(D()({},h[a]),{},{isDisabled:!l})),v(F),c()}})},se={body:{row:ue}},me=(0,P.useCallback)(function(t,l){if(t!==l){var _=h[t];b.W.put("".concat(Q.Z.apiPrefix,"crons/views/move"),{data:{fromIndex:t,toIndex:l,id:_.id}}).then(function(a){var s=a.code,o=a.data;if(s===200){var E=B()(h);E.splice(t,1),E.splice(l,0,D()(D()({},_),o)),v(E),c()}})}},[h]);return(0,P.useEffect)(function(){v(M)},[M]),(0,u.jsxs)(p.Z,{title:"\u89C6\u56FE\u7BA1\u7406",open:j,centered:!0,width:620,onCancel:function(){return L()},className:"view-manage-modal",forceRender:!0,footer:!1,maskClosable:!1,children:[(0,u.jsx)(i.Z,{style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:(0,u.jsx)($.Z,{type:"primary",onClick:function(){O(null),g(!0)},children:"\u65B0\u5EFA\u89C6\u56FE"},"2")}),(0,u.jsx)(re.W,{backend:Y.PD,children:(0,u.jsx)(_e.Z,{bordered:!0,columns:x,pagination:!1,dataSource:h,rowKey:"id",size:"middle",style:{marginBottom:20},components:se,onRow:function(l,_){return{index:_,moveRow:me}}})}),(0,u.jsx)(n.default,{view:f,visible:w,handleCancel:function(l){g(!1),c(l)}})]})};C.default=de}}]);
