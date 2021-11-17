(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"en":{"translation":{"start":"start!","chooseCategory":"Choose a category!","hello":"Hello friend! Let\'s learn english together.","restart":"restart","replay":"replay","result":"RESULT:","close":"CLOSE","answers":"ANSWERS:","correct":"CORRECT:","wrong":"WRONG:","offline":"No network! Please check your internet connection and reload the page.","swReloadMessage":"New version of application available. Press OK to reload the page"}}}')},,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(23),r=a.n(c),o=(a(33),a(18)),s=a.n(o),d=a(24),l=a(3),u=a(10),g=a(2),m=a(4),j=(a(35),a(9)),b=a(0),p=function(e){var t,a,i=e.isGameStarted,c=e.isPlaying,r=e.id,o=void 0===r?void 0:r,s=e.newGameFunc,d=e.restartGameFunc,u=e.replayWord,g=Object(n.useState)("en"),p=Object(l.a)(g,2),h=p[0],f=p[1];switch(Object(n.useEffect)((function(){c&&window.scrollTo(0,0)}),[c]),Object(n.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),f(h)})),o){case"1":t="Action (Set A)";break;case"2":t="Action (Set B)";break;case"3":t="Animal (Set A)";break;case"4":t="Animal (Set B)";break;case"5":t="Clothes";break;case"6":t="Emotions";break;default:t=""}if(!0===c)a="Now show your skills!";else a="Feel free to practice!";return Object(b.jsxs)("div",{className:"InteractiveBlock",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"InteractiveBox",children:!o&&Object(b.jsx)("h1",{children:m.a.t("hello")})}),Object(b.jsx)("div",{className:"InteractiveBox mini",children:!o&&Object(b.jsx)("h2",{children:m.a.t("chooseCategory")})}),Object(b.jsx)("div",{className:"InteractiveBox".concat(o?"":" mini"),children:Object(b.jsx)("h1",{children:o&&"".concat(t," category. ").concat(a)})})]}),Object(b.jsx)("div",{className:"ButtonContainer".concat(c&&o&&!i?" show":""),children:Object(b.jsx)("button",{type:"button",className:"StartGameButton".concat(i||!c?" hide":""),onClick:s,children:m.a.t("start!")})}),Object(b.jsxs)("div",{className:"inGameButtonsContainer".concat(o&&i?" show":""),children:[Object(b.jsx)("button",{type:"button",className:"RestartGameButton".concat(i?"":" hide"),onClick:d,children:m.a.t("restart")}),Object(b.jsx)("button",{type:"button",className:"ReplayButton".concat(i?"":" hide"),onClick:u,children:m.a.t("replay")})]})]})},h="/english-for-kids",f=(a(37),function(e){var t=e.isPlaying,a=e.title,n=e.image;return Object(b.jsxs)("div",{className:"CategoryCard",children:[t,Object(b.jsx)("div",{className:"CardImageContainer",children:Object(b.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(n)})}),Object(b.jsx)("div",{className:"CategoryText",children:a})]})}),O=a(20),S=function(){return Math.random()-.5},w=function(e){return Number(e)-1},x=function(e,t,a){var n=new Audio("".concat(e,"/").concat(t));n.onloadeddata=function(){var e;n.onplaying=function(){e=!0},n.onpause=function(){e=!1};var t=function(){!n.paused&&e&&(n.pause(),n.currentTime=0)};a?(t(),n.paused&&!e&&n.play()):t()}},v=!1,y=(a(38),function(e){var t=e.isPlaying,a=e.word,i=e.translation,c=e.audio,r=e.image,o=e.inGameAnswer,s=e.isGameStarted,d=Object(n.useState)(!1),u=Object(l.a)(d,2),g=u[0],m=u[1],j=function(){t||x(h,c,!0)},p=function(){!0===g&&m(!1)};return Object(b.jsx)("div",{"data-role":"Mask",onMouseLeave:p,children:Object(b.jsxs)("div",{className:"CardContainer".concat(g?" flipped":""),children:[Object(b.jsxs)("div",{className:"ItemCard front",children:[Object(b.jsx)("div",{role:"button",className:"CardImageContainer".concat(t?" play":""),tabIndex:0,"data-word":a,onClick:s?o:j,children:Object(b.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(r)})}),!t&&Object(b.jsxs)("div",{className:"CardControlPanel",children:[Object(b.jsx)("button",{id:"soundPlayButton",style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:j,children:Object(b.jsx)("img",{className:"ControlPanelPlayButton",alt:"play-sound",src:"".concat(h,"/play-button.png")})}),Object(b.jsx)("span",{className:"ControlPanelText",children:a}),Object(b.jsx)("button",{style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:function(){x(h,"audio/cardflip.mp3",!0),m(!g)},children:Object(b.jsx)("img",{className:"ControlPanelEyeButton",alt:"watch-translation",src:"".concat(h,"/eye-button.png")})})]})]}),Object(b.jsxs)("div",{className:"ItemCard back",children:[Object(b.jsx)("div",{role:"button",className:"CardImageContainer",tabIndex:0,onClick:p,children:Object(b.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(r)})}),!t&&Object(b.jsx)("div",{className:"CardControlPanel flipped",children:Object(b.jsx)("span",{className:"ControlPanelText",children:i})})]})]})})}),k=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}],N=[[{word:"cry",translation:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"\u043d\u044b\u0440\u044f\u0442\u044c",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"\u043b\u0435\u0442\u0430\u0442\u044c",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"\u0438\u0433\u0440\u0430\u0442\u044c",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"\u0435\u0437\u0434\u0438\u0442\u044c",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"\u0431\u0435\u0433\u0430\u0442\u044c",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"\u043f\u0435\u0442\u044c",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"\u043a\u043e\u0442",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"\u0446\u044b\u043f\u043b\u0451\u043d\u043e\u043a",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"\u043a\u0443\u0440\u0438\u0446\u0430",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"\u0441\u043e\u0431\u0430\u043a\u0430",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"\u043b\u043e\u0448\u0430\u0434\u044c",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"\u0441\u0432\u0438\u043d\u044c\u044f",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"\u043a\u0440\u043e\u043b\u0438\u043a",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"\u043e\u0432\u0446\u0430",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"\u043f\u0442\u0438\u0446\u0430",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"\u0440\u044b\u0431\u0430",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"\u0436\u0430\u0431\u0430",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"\u0436\u0438\u0440\u0430\u0444\u0430",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"\u043b\u0435\u0432",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"\u043c\u044b\u0448\u044c",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"\u044e\u0431\u043a\u0430",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"\u0431\u0440\u044e\u043a\u0438",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"\u0431\u043b\u0443\u0437\u043a\u0430",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"\u043f\u043b\u0430\u0442\u044c\u0435",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"\u043f\u0430\u043b\u044c\u0442\u043e",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"\u0442\u0443\u0444\u043b\u0438",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"\u0443\u0434\u0438\u0432\u043b\u0451\u043d\u043d\u044b\u0439",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"\u0443\u043b\u044b\u0431\u043a\u0430",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"\u0441\u043c\u0435\u0445",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]],C=(a(39),function(e){var t=e.isBlocking,a=e.isPlaying,i=e.id,c=e.isGameStarted,r=e.gameStepsFunc;return Object(n.useEffect)((function(){window.onbeforeunload=c?function(){return!0}:null})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{when:t,message:"You will lose your result. Are you sure?"}),Object(b.jsxs)("div",{className:"CardHolder".concat(i?" word":""),children:[!i&&k.map((function(e,t){var n=t+1;return Object(b.jsx)("div",{className:"Card",children:Object(b.jsx)(u.b,{to:"category/".concat(n),className:"Link",children:Object(b.jsx)(f,{isPlaying:a,title:e.title,image:e.image})})},e.title)})),i&&N[w(i)].map((function(e){return Object(b.jsx)(y,{inGameAnswer:r,isPlaying:a,word:e.word,translation:e.translation,image:e.image,audio:e.audioSrc,isGameStarted:c},e.word)}))]})]})}),B=(a(45),function(e){var t=e.answers,a=e.isGameStarted,i=e.id,c=Object(n.useState)(1600),r=Object(l.a)(c,2),o=r[0],s=r[1],d=Object(n.useState)("en"),u=Object(l.a)(d,2),g=u[0],p=u[1];function f(){s(window.innerWidth)}return Object(n.useEffect)((function(){return window.addEventListener("resize",f,!1),function(){return window.removeEventListener("resize",f,!1)}})),Object(n.useEffect)((function(){return s(window.innerWidth),window.addEventListener("load",f,!1),function(){return window.removeEventListener("resize",f,!1)}}),[]),Object(n.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),p(g)})),Object(b.jsxs)("div",{className:"StatsBlockContainer".concat(o<=820?" mini":""),children:[o>820&&Object(b.jsxs)("div",{className:"StatsBlock".concat(a&&i?" game":""),children:[Object(b.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("answers")})}),a&&t.map((function(e,t){return Object(b.jsx)("div",{className:"IconContainer",children:Object(b.jsx)("img",{className:"Icon",alt:"icon".concat(t),src:"".concat(h,"/img/").concat(!0===e?"correct.png":"wrong.png")})},"key".concat(t+1))}))]}),o<=820&&Object(b.jsxs)("div",{className:"StatsBlock".concat(a&&i?" game mini":""),children:[Object(b.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("correct")})}),Object(b.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("wrong")})}),a&&Object(b.jsx)("div",{className:"NumberStats".concat(a&&i?" game correct":""),children:t.filter((function(e){return!0===e})).length}),a&&Object(b.jsx)("div",{className:"NumberStats".concat(a&&i?" game wrong":""),children:t.filter((function(e){return!1===e})).length})]})]})}),I=(a(46),function(e){var t=e.isBlocking,a=e.isPlaying,i=e.isGameStarted,c=e.gameStartedToggle,r=e.resultScreenVisibilityToggle,o=e.getResult,s=e.setIsBlockingToggle,d=Object(n.useState)([]),u=Object(l.a)(d,2),m=u[0],j=u[1],f=Object(g.f)(),y=Object(n.useRef)([]),k=Object(n.useRef)(""),I=Object(n.useRef)(0),T=Object(n.useRef)(0),P=Object(n.useRef)(0),E=function(){j([]),y.current=[],I.current=0,P.current=0,k.current="",T.current=0},R=function(){k.current="".concat(12.5*T.current,"%"),o(k.current),r(),s(!1)},A=function(){y.current=N[w(f.id)].slice().sort(S),y&&x(h,y.current[I.current].audioSrc,!0)};return Object(n.useEffect)((function(){E(),s(!1),i&&c()}),[f.id]),Object(b.jsxs)("div",{className:"MainPage",children:[Object(b.jsx)(p,{isGameStarted:i,isPlaying:a,id:f.id,newGameFunc:function(){E(),c(),A(),s(!0)},restartGameFunc:function(){E(),A()},replayWord:function(){x(h,y.current[I.current].audioSrc,!0)}}),Object(b.jsx)(C,{isBlocking:t,isPlaying:a,id:f.id,isGameStarted:i,gameStepsFunc:function(e){!function(e,t,a,n,i,c,r,o,s,d,l,u){t.current.length>=a.current+1&&n.current<i&&c.current<r?(null===e||void 0===e?void 0:e.target).dataset.word===t.current[a.current].word?(v=!1,x(o,s,!1),x(o,s,!0),c.current+=1,l((function(e){return[].concat(Object(O.a)(e),[!0])})),a.current+=1,n.current+=1,t.current.length>=a.current+1&&n.current<i&&c.current<r?(v=!1,x(o,t.current[a.current].audioSrc,!1),x(o,t.current[a.current].audioSrc,!0)):u()):(x(o,d,!1),x(o,d,!0),l((function(e){return[].concat(Object(O.a)(e),[!1])})),n.current+=1,t.current.length>=a.current+1&&n.current<i&&c.current<r?v||(v=!0,setTimeout((function(){x(o,t.current[a.current].audioSrc,!1),x(o,t.current[a.current].audioSrc,!0),v=!1}),1e3)):u()):u()}(e,y,I,P,10,T,8,h,"audio/correct.mp3","audio/error.mp3",j,R)}}),a&&Object(b.jsx)(B,{answers:m,isPlaying:a,isGameStarted:i,id:f.id})]})}),T=a(28),P=a.n(T),E=(a(48),function(e){var t=e.setIsBlockingToggle,a=e.isGameStarted,n=e.isPlaying,i=e.sideBarToggle,c=e.setModeToggle;return Object(b.jsxs)("div",{className:"Header",style:{backgroundImage:"url(".concat(h,"/background.jpg)")},children:[Object(b.jsx)("div",{role:"button",className:"SideBarOpenButton",onClick:i,"aria-hidden":"true",children:"|||"}),Object(b.jsxs)("div",{className:"ModeSelector",children:[Object(b.jsx)("span",{className:"ModeText",children:n?"PLAY":"TRAIN"}),Object(b.jsx)(P.a,{onHandleColor:"#FFFFFF",onColor:"#99AE99",uncheckedIcon:!1,checkedIcon:!1,checked:n,className:"Switch",onChange:function(){a&&n?(t(!1),c()):c()},height:20,width:48,handleDiameter:18,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 52, 0, 0.4)"})]})]})}),R=(a(49),function(e){var t=e.viewNetworkStatus,a=Object(n.useState)("en"),i=Object(l.a)(a,2),c=i[0],r=i[1];return Object(n.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),r(c)})),Object(b.jsx)("div",{className:"IndicatorContainer".concat(t?" view":" hide"),children:Object(b.jsx)("div",{className:"IndicatorText",children:Object(b.jsx)("span",{children:m.a.t("offline")})})})}),A=(a(22),function(e){var t=e.isPlaying,a=e.cbToggle;return Object(b.jsxs)("div",{className:"SideBarContainer",children:[Object(b.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"end",marginTop:"10px"},children:Object(b.jsx)("button",{type:"button",className:"SideBarMenuItem".concat(t?" close play":" close"),onClick:a,children:"\u25c4"})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.c,{to:"/",onClick:a,className:"SideBarMenuItem".concat(t?" play":""),children:"Main Page"})}),k.map((function(e,n){return Object(b.jsx)("li",{children:Object(b.jsx)(u.c,{to:"/category/".concat(n+1),onClick:a,className:"SideBarMenuItem".concat(t?" play":""),children:e.title})},e.title)}))]})]})}),G=(a(50),function(e){var t=e.resultScreenVisibilityToggle,a=e.viewResultScreen,i=e.finalResult,c=Object(n.useState)("en"),r=Object(l.a)(c,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),s(o)})),Object(b.jsx)("div",{className:"ResultScreen".concat(a?" view":" hide"),children:Object(b.jsxs)("div",{className:"ResultPercent",children:[Object(b.jsx)("h2",{children:m.a.t("result")}),Object(b.jsx)("h1",{children:i}),Object(b.jsx)("button",{type:"button",onClick:t,children:m.a.t("close")})]})})}),F=(a(51),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),r=Object(l.a)(c,2),o=r[0],p=r[1],f=Object(n.useState)(!1),O=Object(l.a)(f,2),S=O[0],w=O[1],x=Object(n.useState)(!1),v=Object(l.a)(x,2),y=v[0],k=v[1],N=Object(n.useState)(!1),C=Object(l.a)(N,2),B=C[0],T=C[1],P=Object(n.useState)(!1),F=Object(l.a)(P,2),L=F[0],M=F[1],W=Object(n.useState)(!1),U=Object(l.a)(W,2),V=U[0],H=U[1],z=Object(n.useState)(""),D=Object(l.a)(z,2),J=D[0],K=D[1],Y=Object(n.useState)("en"),_=Object(l.a)(Y,2),q=_[0],Q=_[1],X=function(){return k(!y)},Z=function(e){return w(e)},$=function(){i(!a),!0===B&&T(!1)},ee=function(){T(!B),K("")},te=function(){M(!L),a&&$()},ae=function(e){return K(e)},ne=function(e){return H(e)};window.addEventListener("offline",(function(){return p(!0)}),!1),window.addEventListener("online",(function(){return p(!1)}),!1),Object(n.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),Q(q)}));var ie=function(e){console.log("ddddd"),Z(!0),document.getElementById("okButton").onclick=function(){var t;null===(t=e.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"}),Z(!1)}};window.addEventListener("load",Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=12;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("".concat("/english-for-kids","/service-worker.js"));case 4:(t=e.sent).onupdatefound=function(){var e=t.installing;e&&(e.onstatechange=function(){"installed"===e.state&&navigator.serviceWorker.controller&&ie(t)})},console.log("success",t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("fail");case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))));return navigator.serviceWorker.addEventListener("controllerchange",(function(){console.log("controller-changed"),window.location.reload()})),Object(b.jsx)(u.a,{basename:h,children:Object(b.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(h,"/background.jpg"),backgroundRepeat:"repeat",backgroundAttachment:"fixed"},children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"".concat(y?"SideBar active":"SideBar"),children:Object(b.jsx)(A,{isPlaying:a,cbToggle:X})}),Object(b.jsx)(E,{isGameStarted:B,setIsBlockingToggle:ne,isPlaying:a,sideBarToggle:X,setModeToggle:$})]}),Object(b.jsxs)("main",{children:[Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"UpdateSWContainer".concat(S?" view":" hide"),children:Object(b.jsxs)("div",{className:"UpdateSWMessage",children:[Object(b.jsx)("span",{children:m.a.t("swReloadMessage")}),Object(b.jsxs)("div",{className:"UpdateSWButtons",children:[Object(b.jsx)("button",{className:"UpdateButton",id:"okButton",type:"button",children:"OK"}),Object(b.jsx)("button",{className:"UpdateButton",type:"button",onClick:function(){console.log("reload-cancel"),Z(!1)},children:"CANCEL"})]})]})})}),Object(b.jsx)(R,{viewNetworkStatus:o}),Object(b.jsx)(g.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(I,{isPlaying:a,isGameStarted:B,gameStartedToggle:ee,resultScreenVisibilityToggle:te,getResult:ae,setIsBlockingToggle:ne,isBlocking:V})}}),Object(b.jsx)(g.b,{path:"/category/:id",render:function(){return Object(b.jsx)(I,{isPlaying:a,isGameStarted:B,gameStartedToggle:ee,resultScreenVisibilityToggle:te,getResult:ae,isBlocking:V,setIsBlockingToggle:ne})}}),Object(b.jsx)(G,{resultScreenVisibilityToggle:te,viewResultScreen:L,finalResult:J})]})]})})}),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),L()}],[[52,1,2]]]);
//# sourceMappingURL=main.f48569e3.chunk.js.map