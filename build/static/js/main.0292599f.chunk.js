(this["webpackJsonpbootstrap-with-react"]=this["webpackJsonpbootstrap-with-react"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),i=n.n(a),o=(n(47),n(18)),s=(n(48),n(41)),l=n(60),j=n(62),d=n(61),u=n(39),b=n(59),h=n(63),O=(n(49),n(40)),x=n(37),f=n(26),p={apiKey:"AIzaSyBaJguc5C9n8RoT42Gnth6pNDaZGgv4wT0",authDomain:"metadata-11c50.firebaseapp.com",projectId:"metadata-11c50",storageBucket:"metadata-11c50.appspot.com",messagingSenderId:"584960291183",appId:"1:584960291183:web:3df6894c85db5d23bc789a",measurementId:"G-EKM1CSH9WJ"},m=(n(56),function e(){Object(x.a)(this,e),this.init=function(){f.a.apps.length?f.a.app():f.a.initializeApp(p)},this.save=function(e,t,n){f.a.firestore().collection(e).doc(t).set(n)}}),g=n(38),v=n.n(g),C=function(e){return""===e.trim()?"":"#".concat(e.replace(/[^a-zA-Z0-9]/g,""))},w=n(5),y=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(""),x=Object(o.a)(i,2),f=x[0],p=x[1],g=Object(c.useState)([]),y=Object(o.a)(g,2),A=y[0],S=y[1],k=Object(c.useState)(!1),I=Object(o.a)(k,2),B=I[0],G=I[1],H=Object(c.useState)(!1),T=Object(o.a)(H,2),R=T[0],F=T[1],J=new m;J.init();var z=function(){a(""),p(""),S([])},L=function(){if(""!==f.trim()){var e=C(f);A.find((function(t){return t===e}))||(S([].concat(Object(s.a)(A),[e])),p("")),console.log(A)}};return Object(w.jsxs)(l.a,{show:e.show,onHide:e.handleClose,backdrop:"static",keyboard:!1,size:"sm",children:[Object(w.jsx)(l.a.Header,{closeButton:!0,children:Object(w.jsx)(l.a.Title,{children:"Article"})}),Object(w.jsx)(l.a.Body,{children:Object(w.jsxs)("main",{children:[Object(w.jsx)(j.a,{show:R,onClose:function(){return F(!1)},delay:3e3,autohide:!0,children:Object(w.jsx)(j.a.Header,{children:Object(w.jsx)("strong",{children:"Article Submitted"})})}),Object(w.jsxs)(j.a,{show:B,onClose:function(){return G(!1)},children:[Object(w.jsx)(j.a.Header,{children:Object(w.jsx)("strong",{children:"Article Url Error"})}),Object(w.jsx)(j.a.Body,{children:Object(w.jsx)("span",{children:"Please enter Article Url"})})]}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Row,{children:Object(w.jsxs)(d.a.Group,{controlId:"formArticlUrl",children:[Object(w.jsx)(d.a.Label,{children:"Article Url"}),Object(w.jsx)(d.a.Control,{type:"text",onChange:function(e){a(e.target.value)},value:r})]})}),Object(w.jsx)(d.a.Row,{children:Object(w.jsxs)(d.a.Group,{controlId:"formArticleHashTags",children:[Object(w.jsx)(d.a.Label,{children:"Hash Tag"}),Object(w.jsx)(d.a.Control,{type:"text",onChange:function(e){p(e.target.value)},value:f})]})}),Object(w.jsxs)(d.a.Row,{children:[Object(w.jsx)(u.a,{children:Object(w.jsx)(d.a.Group,{controlId:"formPills",children:A.map((function(e){return Object(w.jsxs)(b.a,{pill:!0,variant:"dark",children:[e,Object(w.jsx)(O.a,{onClick:function(){return function(e){var t=A.filter((function(t){return t!==e}));S(t)}(e)}})]},"{uuid()}")}))})}),Object(w.jsx)(u.a,{children:Object(w.jsx)(d.a.Group,{controlId:"formButtons",children:Object(w.jsx)(h.a,{class:"close",variant:"outline-secondary",type:"button",onClick:function(){return L()},children:"Add"})})})]}),Object(w.jsx)(d.a.Row,{children:Object(w.jsx)(d.a.Group,{controlId:"formButtons",children:Object(w.jsx)(h.a,{class:"close",variant:"outline-secondary",type:"button",onClick:function(){return L()},children:"Add"})})}),Object(w.jsxs)(d.a.Row,{children:[Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return z()},children:"Clear"})}),Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return function(){if(""!==r.trim()){var e={url:r,hashtags:A};J.save("sitemetadata",v()(),e),console.log("submit article url and badges "+JSON.stringify(e)),F(!0),z()}else G(!0)}()},children:"Get Article"})})]})]})]})})]})};var A=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{children:Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return r(!0)},children:"Open Modal"})}),Object(w.jsx)(y,{show:n,handleClose:function(){return r(!1)}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(A,{})}),document.getElementById("root")),S()}},[[55,1,2]]]);
//# sourceMappingURL=main.0292599f.chunk.js.map