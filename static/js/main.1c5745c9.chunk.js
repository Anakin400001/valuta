(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){e.exports=a(229)},191:function(e,t,a){e.exports=a.p+"static/media/1233.1808b5f6.ttf"},219:function(e,t,a){},220:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);a(166),a(191),a(192);var n=a(0),l=a.n(n),c=a(79),o=a.n(c),r=a(18),s=a.n(r),i=a(45),u=a.n(i),d=a(80),m=a(81),p=a(94),h=a(82),E=a(95),f=a(19),b=a(15),v=(a(69),a(206),a(207),a(208),a(209),a(70),a(210),a(211),a(212),a(213),a(214),a(71),a(215),a(216),a(217),a(88)),g=a.n(v),k=a(89),B=a.n(k),y=(a(218),a(90)),_=a.n(y),j=(a(219),a(72),function(e){e.id;var t=e.fetchedUser,a=e.go;e.dark,e.light,e.reklama;return l.a.createElement(b.d,{id:"home"},t&&l.a.createElement("div",{id:"headerlogo"},l.a.createElement("img",{class:"Avatarka",src:t.photo_200})),l.a.createElement("div",{id:"balance"},l.a.createElement("div",{class:"BalanceBox"},l.a.createElement("center",{class:"BalanceText"},"\u0411\u0410\u041b\u0410\u041d\u0421"),l.a.createElement("center",{class:"BalanceNumber"},"0.00 "))),l.a.createElement("div",{class:"MenuButtons"},l.a.createElement("div",{class:"MenuButtons__button",onClick:a,"data-to":"top"},l.a.createElement("h4",null,"\xa0"),l.a.createElement("center",{className:"MenuButtons__icon"},l.a.createElement(g.a,null)),l.a.createElement("p",null,"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")),l.a.createElement("div",{class:"MenuButtons__button",onClick:a,"data-to":"top"},l.a.createElement("h4",null,"\xa0"),l.a.createElement("center",{className:"MenuButtons__icon"},l.a.createElement(B.a,null)),l.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"))),l.a.createElement("div",{class:"MenuButtons"},l.a.createElement("div",{id:"Save",className:"MenuButtons__button"},l.a.createElement("h4",null,"\xa0"),l.a.createElement("center",{className:"MenuButtons__icon"},l.a.createElement(_.a,null)),l.a.createElement("p",null,"\u0411\u043e\u043d\u0443\u0441 \u0437\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0443(+0.05)"))),l.a.createElement("div",null,"\u041b\u041e\u0413\u0418:"),l.a.createElement("div",{id:"logs"}))}),O=(a(220),a(93)),U=a.n(O),w=a(91),A=a.n(w),M=a(92),P=a.n(M),S=(a(221),a(222),Object(b.h)()),I=function(e){return l.a.createElement(b.d,{id:e.id},l.a.createElement(b.e,{left:l.a.createElement(U.a,{onClick:e.go,"data-to":"home"},S===b.c?l.a.createElement(A.a,null):l.a.createElement(P.a,null))},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0439"),l.a.createElement(b.b,{title:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",description:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}))},x=a(36);x.connect("mongodb+srv://Anakin400001:Karalo2001@cluster0.pv5dx.mongodb.net/base?retryWrites=true&w=majority",{useUnifiedTopology:!0,retryWrites:!0,useCreateIndex:!0,useNewUrlParser:!0,useFindAndModify:!1});var C=x.Schema({balance:String}),N=x.model("User",C),W=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onBlur1=function(){a.setState({isBtnActive:!1})},a.dark=function(){document.body.setAttribute("scheme","client_dark")},a.light=function(){document.body.setAttribute("scheme","client_light")},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={isBtnActive:!1,activePanel:"home",fetchedUser:null,popout:l.a.createElement(b.f,{size:"large"})},a.reklama=a.reklama.bind(Object(f.a)(Object(f.a)(a))),a.openDefault=a.openDefault.bind(Object(f.a)(Object(f.a)(a))),a.closePopout=a.closePopout.bind(Object(f.a)(Object(f.a)(a))),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"openDefault",value:function(e,t,a){this.setState({popout:l.a.createElement(b.a,{actions:[a],onClose:this.closePopout},l.a.createElement("h2",null,e),l.a.createElement("p",null,t))})}},{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:null})}}),s.a.send("VKWebAppGetUserInfo",{}),new N({balance:0}).save(function(e,t){if(e)throw e;console.log(t)})}},{key:"reklama",value:function(){document.getElementById("onads").innerHTML=""}},{key:"render",value:function(){return l.a.createElement(b.g,{popout:this.state.popout,activePanel:this.state.activePanel},l.a.createElement(j,{id:"home",dark:this.dark,light:this.light,fetchedUser:this.state.fetchedUser,go:this.go,reklama:this.reklama}),l.a.createElement(I,{id:"persik",go:this.go,fetchedUser:this.state.fetchedUser}))}}]),t}(l.a.Component);u.a.send("VKWebAppInit",{}),s.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(W,null),document.getElementById("root"))},72:function(e,t,a){}},[[165,1,2]]]);
//# sourceMappingURL=main.1c5745c9.chunk.js.map