(this["webpackJsonpvaluta-vkminiapps"]=this["webpackJsonpvaluta-vkminiapps"]||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},191:function(e,t,a){e.exports=a(299)},290:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(192),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258);var n=a(0),c=a.n(n),r=a(62),l=a.n(r),s=a(39),i=a.n(s),o=a(63),m=a.n(o),p=a(97),u=a(42),d=a(107),h=a.n(d),b=a(106),E=a.n(b),f=(a(267),a(47)),v=a.n(f),g=a(48),k=a.n(g),j=a(101),y=a.n(j),O=a(64),w=a.n(O),x=a(98),U=a.n(x),C=a(100),P=a.n(C),S=a(99),A=a.n(S),_=({id:e,go:t,fetchedUser:a,baseUser:n})=>c.a.createElement(v.a,{id:e},c.a.createElement(k.a,null,"Example"),a&&c.a.createElement(w.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(U.a,{before:a.photo_200?c.a.createElement(A.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(y.a,{size:"xl",level:"2",onClick:t,"data-to":"persik"},"Show me the Persik, please"))),n&&c.a.createElement("div",null,n.balance)),I=a(65),K=a(105),T=a.n(K),V=a(102),F=a.n(V),N=a(103),W=a.n(N),z=a(104),B=a.n(z),J=(a(290),Object(I.b)()),D=e=>c.a.createElement(v.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(T.a,{onClick:e.go,"data-to":"home"},J===I.a?c.a.createElement(F.a,null):c.a.createElement(W.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"})),G=()=>{var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),s=Object(u.a)(l,2),o=s[0],d=s[1],b=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),f=Object(u.a)(b,2),v=f[0],g=f[1],k=Object(n.useState)(null),j=Object(u.a)(k,2),y=j[0],O=j[1];Object(n.useEffect)(()=>{function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,fetch("https://aftserver.ml/loadProfile",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"id=1"}).then(e=>e.json()).then(e=>{var t=e;console.log("AFTCompany Service v1.0"),console.log(t),O(t)}),d(t),g(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe(({detail:{type:e,data:t}})=>{if("VKWebAppUpdateConfig"===e){var a=document.createAttribute("scheme");a.value=t.scheme?t.scheme:"client_light",document.body.attributes.setNamedItem(a)}}),function(){e.apply(this,arguments)}()},[]);var w=e=>{r(e.currentTarget.dataset.to)};return c.a.createElement(h.a,{activePanel:a,popout:v},c.a.createElement(_,{id:"home",fetchedUser:o,go:w,baseUser:y}),c.a.createElement(D,{id:"persik",go:w}))};i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[191,1,2]]]);