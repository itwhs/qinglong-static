(self.webpackChunk=self.webpackChunk||[]).push([[8531],{8152:function(w,f,i){"use strict";i.d(f,{m:function(){return c.m}});var c=i(76162),m=i(90249)},41488:function(w,f){"use strict";f.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},48433:function(w,f,i){"use strict";i.d(f,{e:function(){return g},F:function(){return e}});var c=i(42273),m=i(12924),b=i.n(m),P=i(91369),g=()=>{var o=(0,m.useState)("100%"),t=(0,c.Z)(o,2),n=t[0],p=t[1],u=(0,m.useState)(0),r=(0,c.Z)(u,2),d=r[0],s=r[1],a=(0,m.useState)(-72),l=(0,c.Z)(a,2),_=l[0],h=l[1],v=(0,m.useState)(!1),k=(0,c.Z)(v,2),y=k[0],E=k[1],B=(0,m.useMemo)(()=>(0,P.ZP)(),[]),x=B.platform;return(0,m.useEffect)(()=>{x==="mobile"&&document.body.offsetWidth<768?(p("auto"),s(0),h(0),E(!0)):(p("100%"),s(0),h(-72),E(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:_,width:n,marginLeft:d},isPhone:y}},e=()=>{var o=(0,m.useState)(),t=(0,c.Z)(o,2),n=t[0],p=t[1],u=()=>{var r=window.matchMedia("(prefers-color-scheme: dark)"),d=localStorage.getItem("qinglong_dark_theme"),s=r.matches&&d!=="light"||d==="dark";p(s?"vs-dark":"vs")};return(0,m.useEffect)(()=>{var r=window.matchMedia("(prefers-color-scheme: dark)"),d=localStorage.getItem("qinglong_dark_theme"),s=r.matches&&d!=="light"||d==="dark";p(s?"vs-dark":"vs");var a=l=>{(d==="auto"||!d)&&(l.matches?p("vs-dark"):p("vs"))};typeof r.addEventListener=="function"?r.addEventListener("change",a):typeof r.addListener=="function"&&r.addListener(a)},[]),{theme:n,reloadTheme:u}}},97349:function(w,f,i){"use strict";i.d(f,{W:function(){return d}});var c=i(57113),m=i(82005),b=i(72912),P=i(73742),g=i(84263),e=i(50659),o=i(41488),t=i(8152);g.ZP.config({duration:1.5});var n=Date.now(),p=function(a){if(a.response){var l=a.data?a.data.message||a.message||a.data:a.response.statusText,_=a.response.status;[502,504].includes(_)?t.m.push("/error"):_===401?t.m.location.pathname!=="/login"&&(g.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(o.Z.authKey),t.m.push("/login")):g.ZP.error(l)}else console.log(a.message);throw a},u=(0,e.l7)({timeout:6e4,params:{t:n},errorHandler:p}),r=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];u.interceptors.request.use((s,a)=>{var l=localStorage.getItem(o.Z.authKey);if(l&&!r.includes(s)){var _={Authorization:"Bearer ".concat(l)};return{url:s,options:(0,b.Z)((0,b.Z)({},a),{},{headers:_})}}return{url:s,options:a}}),u.interceptors.response.use(function(){var s=(0,m.Z)((0,c.Z)().mark(function a(l){var _;return(0,c.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,l.clone();case 2:return _=v.sent,v.abrupt("return",l);case 4:case"end":return v.stop()}},a)}));return function(a){return s.apply(this,arguments)}}());var d=u},91369:function(w,f,i){"use strict";i.d(f,{ZP:function(){return c},W9:function(){return m},w7:function(){return P}});function c(){var g=navigator.userAgent.toLowerCase(),e=h=>h.test(g),o=h=>(g.match(h)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."),t="unknow";e(/windows|win32|win64|wow32|wow64/g)?t="windows":e(/macintosh|macintel/g)?t="macos":e(/x11/g)?t="linux":e(/android|adr/g)?t="android":e(/ios|iphone|ipad|ipod|iwatch/g)&&(t="ios");var n="unknow";t==="windows"?e(/windows nt 5.0|windows 2000/g)?n="2000":e(/windows nt 5.1|windows xp/g)?n="xp":e(/windows nt 5.2|windows 2003/g)?n="2003":e(/windows nt 6.0|windows vista/g)?n="vista":e(/windows nt 6.1|windows 7/g)?n="7":e(/windows nt 6.2|windows 8/g)?n="8":e(/windows nt 6.3|windows 8.1/g)?n="8.1":e(/windows nt 10.0|windows 10/g)&&(n="10"):t==="macos"?n=o(/os x [\d._]+/g):t==="android"?n=o(/android [\d._]+/g):t==="ios"&&(n=o(/os [\d._]+/g));var p="unknow";t==="windows"||t==="macos"||t==="linux"?p="desktop":(t==="android"||t==="ios"||e(/mobile/g))&&(p="mobile");var u="unknow",r="unknow";e(/applewebkit/g)?(u="webkit",e(/edge/g)?r="edge":e(/opr/g)?r="opera":e(/chrome/g)?r="chrome":e(/safari/g)&&(r="safari")):e(/gecko/g)&&e(/firefox/g)?(u="gecko",r="firefox"):e(/presto/g)?(u="presto",r="opera"):e(/trident|compatible|msie/g)&&(u="trident",r="iexplore");var d="unknow";u==="webkit"?d=o(/applewebkit\/[\d._]+/g):u==="gecko"?d=o(/gecko\/[\d._]+/g):u==="presto"?d=o(/presto\/[\d._]+/g):u==="trident"&&(d=o(/trident\/[\d._]+/g));var s="unknow";r==="chrome"?s=o(/chrome\/[\d._]+/g):r==="safari"?s=o(/version\/[\d._]+/g):r==="firefox"?s=o(/firefox\/[\d._]+/g):r==="opera"?s=o(/opr\/[\d._]+/g):r==="iexplore"?s=o(/(msie [\d._]+)|(rv:[\d._]+)/g):r==="edge"&&(s=o(/edge\/[\d._]+/g));var a="none",l="unknow";e(/micromessenger/g)?(a="wechat",l=o(/micromessenger\/[\d._]+/g)):e(/qqbrowser/g)?(a="qq",l=o(/qqbrowser\/[\d._]+/g)):e(/ucbrowser/g)?(a="uc",l=o(/ucbrowser\/[\d._]+/g)):e(/qihu 360se/g)?a="360":e(/2345explorer/g)?(a="2345",l=o(/2345explorer\/[\d._]+/g)):e(/metasr/g)?a="sougou":e(/lbbrowser/g)?a="liebao":e(/maxthon/g)&&(a="maxthon",l=o(/maxthon\/[\d._]+/g));var _=Object.assign({engine:u,engineVs:d,platform:p,supporter:r,supporterVs:s,system:t,systemVs:n},a==="none"?{}:{shell:a,shellVs:l});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(_.system,"/").concat(_.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(_.supporter,"/").concat(_.supporterVs,`
\u5185\u6838\uFF1A`).concat(_.engine,"/").concat(_.engineVs),"color: green;font-size: 14px;font-weight: bold;"),_}function m(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=g.extraHeight,o=g.id;typeof e=="undefined"&&(e=99);var t=null;o?t=document.getElementById(o)?document.getElementById(o).getElementsByClassName("ant-table-thead")[0]:null:t=document.querySelector(".ant-table-wrapper");var n=0;t&&(n=t.getBoundingClientRect().top);var p=document.body.clientHeight-n-e;return p}function b(g){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent(e)}function P(g,e){var o=window.URL||window.webkitURL||window,t=new Blob([e]),n=document.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=o.createObjectURL(t),n.download=g,b(n)}},71129:function(){}}]);
