(this["webpackJsonpvaluta-vkminiapps"]=this["webpackJsonpvaluta-vkminiapps"]||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},191:function(e,t,a){e.exports=a(299)},290:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(192),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258);var n=a(0),r=a.n(n),c=a(63),o=a.n(c),s=a(39),l=a.n(s),i=a(42),p=a.n(i),u=a(64),m=a(43),d=a(107),h=a.n(d),f=a(106),b=a.n(f),E=(a(267),a(48)),v=a.n(E),g=a(49),k=a.n(g),y=a(101),j=a.n(y),w=a(65),O=a.n(w),x=a(98),U=a.n(x),C=a(100),P=a.n(C),S=a(99),A=a.n(S),T=({id:e,go:t,fetchedUser:a,baseUser:n})=>r.a.createElement(v.a,{id:e},r.a.createElement(k.a,null,"Example"),a&&r.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(U.a,{before:a.photo_200?r.a.createElement(A.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),r.a.createElement(O.a,{title:"Navigation Example"},r.a.createElement(P.a,null,r.a.createElement(j.a,{size:"xl",level:"2",onClick:t,"data-to":"persik"},"Show me the Persik, please")))),_=a(66),F=a(105),I=a.n(F),K=a(102),V=a.n(K),N=a(103),W=a.n(N),z=a(104),B=a.n(z),J=(a(290),Object(_.b)()),D=e=>r.a.createElement(v.a,{id:e.id},r.a.createElement(k.a,{left:r.a.createElement(I.a,{onClick:e.go,"data-to":"home"},J===_.a?r.a.createElement(V.a,null):r.a.createElement(W.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"})),G=()=>{var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),s=Object(m.a)(o,2),i=s[0],d=s[1],f=Object(n.useState)(r.a.createElement(b.a,{size:"large"})),E=Object(m.a)(f,2),v=E[0],g=E[1],k=Object(n.useState)(null),y=Object(m.a)(k,2),j=y[0],w=y[1];Object(n.useEffect)(()=>{function e(){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(p.a.mark((function t(){var a,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){return(r=Object(u.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://aftserver.ml/createProfile",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"id=".concat(a)}).then(e=>e.json()).then(t=>{var a=t;console.log(a),1==a&&e()});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)},n=function(e){return r.apply(this,arguments)},t.next=4,l.a.send("VKWebAppGetUserInfo");case 4:a=t.sent,fetch("https://aftserver.ml/loadProfile",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"id=".concat(a.id)}).then(e=>e.json()).then(e=>{var t=e;1!=t.error?(console.log("AFTCompany Service Update = 14:30-26.10.2020"),console.log(t),w(t)):n(a.id)}),d(a),g(null);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.a.subscribe(({detail:{type:e,data:t}})=>{if("VKWebAppUpdateConfig"===e){var a=document.createAttribute("scheme");a.value=t.scheme?t.scheme:"client_light",document.body.attributes.setNamedItem(a)}}),e()},[]);var O=e=>{c(e.currentTarget.dataset.to)};return r.a.createElement(h.a,{activePanel:a,popout:v},r.a.createElement(T,{id:"home",fetchedUser:i,go:O,baseUser:j}),r.a.createElement(D,{id:"persik",go:O}))};l.a.send("VKWebAppInit"),o.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[191,1,2]]]);