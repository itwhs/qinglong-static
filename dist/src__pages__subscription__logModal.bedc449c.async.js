(self.webpackChunk=self.webpackChunk||[]).push([[578],{35316:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var s=t(56453),a=t(63313),n={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]},name:"loading-3-quarters",theme:"outlined"},f=n,_=t(17536),u=function(v,p){return a.createElement(_.Z,(0,s.Z)((0,s.Z)({},v),{},{ref:p,icon:f}))};u.displayName="Loading3QuartersOutlined";var E=a.forwardRef(u)},21305:function(e,r,t){"use strict";t.r(r);var s=t(46686),a=t.n(s),n=t(63313),f=t.n(n),_=t(4352),u=t(59225),E=t(73835),C=t(41601),v=t(35316),p=t(9734),B=t(7098),m=t(48388),o=t(11527),W=function(d){var i=d.subscription,R=d.handleCancel,g=d.visible,O=d.data,L=d.logUrl,U=(0,n.useState)("\u542F\u52A8\u4E2D..."),y=a()(U,2),j=y[0],P=y[1],K=(0,n.useState)(!0),h=a()(K,2),x=h[0],S=h[1],Q=(0,n.useState)(!0),D=a()(Q,2),A=D[0],Z=D[1],F=(0,n.useState)(!1),I=a()(F,2),H=I[0],z=I[1],N=function l(T){T&&S(!0),E.W.get(L||"".concat(C.Z.apiPrefix,"subscriptions/").concat(i.id,"/log")).then(function(b){var V=b.code,G=b.data;if(V===200&&localStorage.getItem("logSubscription")===String(i.id)){var c=G;P(c||"\u6682\u65E0\u65E5\u5FD7"),Z(c&&!(0,m.x$)(c)),c&&!(0,m.x$)(c)&&setTimeout(function(){l()},2e3)}}).finally(function(){T&&S(!1)})},M=function(){localStorage.removeItem("logSubscription"),R()},$=function(){return(0,o.jsxs)(o.Fragment,{children:[(A||x)&&(0,o.jsx)(v.Z,{spin:!0}),!A&&!x&&(0,o.jsx)(p.Z,{}),(0,o.jsx)("span",{style:{marginLeft:5},children:i&&i.name})]})};return(0,n.useEffect)(function(){i&&i.id&&g&&N(!0)},[i,g]),(0,n.useEffect)(function(){O&&P(O)},[O]),(0,n.useEffect)(function(){z(document.body.clientWidth<768)},[]),(0,o.jsx)(_.Z,{title:$(),open:g,centered:!0,className:"log-modal",bodyStyle:{minHeight:"300px"},forceRender:!0,onOk:function(){return M()},onCancel:function(){return M()},footer:[(0,o.jsx)(u.Z,{type:"primary",onClick:function(){return M()},children:"\u77E5\u9053\u4E86"})],children:x?(0,o.jsx)(B.Z,{}):(0,o.jsx)("pre",{style:H?{fontFamily:"Source Code Pro",width:375,zoom:.83}:{},children:j})})};r.default=W},13989:function(e,r,t){var s=t(33737);function a(n){if(Array.isArray(n))return s(n)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},56037:function(e){function r(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},90623:function(e){function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},94434:function(e,r,t){var s=t(13989),a=t(56037),n=t(94945),f=t(90623);function _(u){return s(u)||a(u)||n(u)||f()}e.exports=_,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
