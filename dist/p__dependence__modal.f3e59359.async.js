(self.webpackChunk=self.webpackChunk||[]).push([[9225,3578],{53744:function(){},8152:function(Z,m,e){"use strict";e.d(m,{m:function(){return o.m}});var o=e(76162),g=e(90249)},55398:function(Z,m,e){"use strict";e.r(m);var o=e(65709),g=e(81615),B=e(94068),b=e(42061),O=e(42533),I=e(51610),_=e(57113),F=e(73742),S=e(84263),U=e(72912),A=e(82005),j=e(68476),p=e(69583),s=e(42273),a=e(69944),i=e(42857),u=e(12924),n=e.n(u),E=e(97349),y=e(41488),c=i.Z.Option,l;(function(t){t[t.nodejs=0]="nodejs",t[t.python3=1]="python3",t[t.linux=2]="linux"})(l||(l={}));var L=t=>{var r=t.dependence,k=t.handleCancel,G=t.visible,ee=t.defaultType,te=p.Z.useForm(),le=(0,s.Z)(te,1),W=le[0],ae=(0,u.useState)(!1),K=(0,s.Z)(ae,2),z=K[0],Q=K[1],ne=function(){var f=(0,A.Z)((0,_.Z)().mark(function T(M){var h,D,v,H,w,x,C,X,$,N;return(0,_.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return Q(!0),h=M.name,D=M.split,v=M.type,H=M.remark,w=r?"put":"post",r?x=(0,U.Z)((0,U.Z)({},M),{},{id:r.id}):D==="1"?(C=h.includes("&")?"&":`
`,x=h.split(C).map(R=>({name:R,type:v,remark:H}))):x=[{name:h,type:v,remark:H}],d.prev=4,d.next=7,E.W[w]("".concat(y.Z.apiPrefix,"dependencies"),{data:x});case 7:X=d.sent,$=X.code,N=X.data,$!==200&&S.ZP.error(N),Q(!1),k(N),d.next=18;break;case 15:d.prev=15,d.t0=d.catch(4),Q(!1);case 18:case"end":return d.stop()}},T,null,[[4,15]])}));return function(M){return f.apply(this,arguments)}}();return(0,u.useEffect)(()=>{W.resetFields()},[r,G]),n().createElement(g.Z,{title:r?"\u7F16\u8F91\u4F9D\u8D56":"\u65B0\u5EFA\u4F9D\u8D56",visible:G,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{W.validateFields().then(f=>{ne(f)}).catch(f=>{console.log("Validate Failed:",f)})},onCancel:()=>k(),confirmLoading:z},n().createElement(p.Z,{form:W,layout:"vertical",name:"dependence_modal",initialValues:r},n().createElement(p.Z.Item,{name:"type",label:"\u4F9D\u8D56\u7C7B\u578B",initialValue:l[ee]},n().createElement(i.Z,null,y.Z.dependenceTypes.map((f,T)=>n().createElement(c,{value:T},f)))),!r&&n().createElement(p.Z.Item,{name:"split",label:"\u81EA\u52A8\u62C6\u5206",initialValue:"0",tooltip:"\u591A\u4E2A\u4F9D\u8D56\u662F\u5426\u6362\u884C\u5206\u5272"},n().createElement(I.ZP.Group,null,n().createElement(I.ZP,{value:"1"},"\u662F"),n().createElement(I.ZP,{value:"0"},"\u5426"))),n().createElement(p.Z.Item,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F9D\u8D56\u540D\u79F0",whitespace:!0}]},n().createElement(b.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u4F9D\u8D56\u540D\u79F0"})),n().createElement(p.Z.Item,{name:"remark",label:"\u5907\u6CE8"},n().createElement(b.Z,{placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"}))))};m.default=L},41488:function(Z,m){"use strict";m.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},97349:function(Z,m,e){"use strict";e.d(m,{W:function(){return p}});var o=e(57113),g=e(82005),B=e(72912),b=e(73742),O=e(84263),I=e(50659),_=e(41488),F=e(8152);O.ZP.config({duration:1.5});var S=Date.now(),U=function(a){if(a.response){var i=a.data?a.data.message||a.message||a.data:a.response.statusText,u=a.response.status;[502,504].includes(u)?F.m.push("/error"):u===401?F.m.location.pathname!=="/login"&&(O.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(_.Z.authKey),F.m.push("/login")):O.ZP.error(i)}else console.log(a.message);throw a},A=(0,I.l7)({timeout:6e4,params:{t:S},errorHandler:U}),j=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];A.interceptors.request.use((s,a)=>{var i=localStorage.getItem(_.Z.authKey);if(i&&!j.includes(s)){var u={Authorization:"Bearer ".concat(i)};return{url:s,options:(0,B.Z)((0,B.Z)({},a),{},{headers:u})}}return{url:s,options:a}}),A.interceptors.response.use(function(){var s=(0,g.Z)((0,o.Z)().mark(function a(i){var u;return(0,o.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,i.clone();case 2:return u=E.sent,E.abrupt("return",i);case 4:case"end":return E.stop()}},a)}));return function(a){return s.apply(this,arguments)}}());var p=A},65709:function(Z,m,e){"use strict";var o=e(74344),g=e.n(o),B=e(53744),b=e.n(B),O=e(54598)},42857:function(Z,m,e){"use strict";var o=e(86545),g=e(74286),B=e(19803),b=e.n(B),O=e(47102),I=e(64972),_=e(12924),F=e.n(_),S=e(41082),U=e(19931),A=e(75091),j=e(8421),p=e(74629),s=e(46403),a=e(23229),i=e(6105),u=function(c,l){var L={};for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&l.indexOf(t)<0&&(L[t]=c[t]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(c);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(c,t[r])&&(L[t[r]]=c[t[r]]);return L},n="SECRET_COMBOBOX_MODE_DO_NOT_USE",E=function(l,L){var t,r=l.prefixCls,k=l.bordered,G=k===void 0?!0:k,ee=l.className,te=l.getPopupContainer,le=l.dropdownClassName,W=l.listHeight,ae=W===void 0?256:W,K=l.placement,z=l.listItemHeight,Q=z===void 0?24:z,ne=l.size,f=l.disabled,T=l.notFoundContent,M=l.status,h=l.showArrow,D=u(l,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),v=_.useContext(S.E_),H=v.getPopupContainer,w=v.getPrefixCls,x=v.renderEmpty,C=v.direction,X=v.virtual,$=v.dropdownMatchSelectWidth,N=_.useContext(j.Z),P=w("select",r),d=w(),R=_.useMemo(function(){var q=D.mode;if(q!=="combobox")return q===n?"combobox":q},[D.mode]),oe=R==="multiple"||R==="tags",se=h!==void 0?h:D.loading||!(oe||R==="combobox"),V=(0,_.useContext)(p.aM),ie=V.status,re=V.hasFeedback,ue=V.isFormItemInput,de=V.feedbackIcon,me=(0,a.F)(ie,M),Y;T!==void 0?Y=T:R==="combobox"?Y=null:Y=(x||U.Z)("Select");var J=(0,i.Z)((0,g.Z)((0,g.Z)({},D),{multiple:oe,hasFeedback:re,feedbackIcon:de,showArrow:se,prefixCls:P})),pe=J.suffixIcon,Ee=J.itemIcon,ce=J.removeIcon,ve=J.clearIcon,Pe=(0,I.Z)(D,["suffixIcon","itemIcon"]),ge=b()(le,(0,o.Z)({},"".concat(P,"-dropdown-").concat(C),C==="rtl")),_e=ne||N,Oe=_.useContext(A.Z),fe=f||Oe,De=b()((t={},(0,o.Z)(t,"".concat(P,"-lg"),_e==="large"),(0,o.Z)(t,"".concat(P,"-sm"),_e==="small"),(0,o.Z)(t,"".concat(P,"-rtl"),C==="rtl"),(0,o.Z)(t,"".concat(P,"-borderless"),!G),(0,o.Z)(t,"".concat(P,"-in-form-item"),ue),t),(0,a.Z)(P,me,re),ee),Me=function(){return K!==void 0?K:C==="rtl"?"bottomRight":"bottomLeft"};return _.createElement(O.ZP,(0,g.Z)({ref:L,virtual:X,dropdownMatchSelectWidth:$},Pe,{transitionName:(0,s.mL)(d,(0,s.q0)(K),D.transitionName),listHeight:ae,listItemHeight:Q,mode:R,prefixCls:P,placement:Me(),direction:C,inputIcon:pe,menuItemSelectedIcon:Ee,removeIcon:ce,clearIcon:ve,notFoundContent:Y,className:De,getPopupContainer:te||H,dropdownClassName:ge,showArrow:re||h,disabled:fe}))},y=_.forwardRef(E);y.SECRET_COMBOBOX_MODE_DO_NOT_USE=n,y.Option=O.Wx,y.OptGroup=O.Xo,m.Z=y},71129:function(){}}]);
