(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"en":{"translation":{"start":"start!","chooseCategory":"Choose a category!","hello":"Hello friend! Let\'s learn english together.","restart":"restart","replay":"replay","result":"RESULT:","close":"CLOSE","answers":"ANSWERS:","correct":"CORRECT:","wrong":"WRONG:"}}}')},22:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a.n(i),r=a(23),c=a(1),o=a.n(c),s=a(24),d=a.n(s),l=(a(34),a(4)),u=a(9),g=a(2),m=a(5),j=(a(35),a(11)),p=a(0),b=function(e){var t,a,i=e.isGameStarted,n=e.isPlaying,r=e.id,o=void 0===r?void 0:r,s=e.newGameFunc,d=e.restartGameFunc,u=e.replayWord,g=Object(c.useState)("en"),b=Object(l.a)(g,2),h=b[0],f=b[1];switch(Object(c.useEffect)((function(){n&&window.scrollTo(0,0)}),[n]),Object(c.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),f(h)})),o){case"1":t="Action (Set A)";break;case"2":t="Action (Set B)";break;case"3":t="Animal (Set A)";break;case"4":t="Animal (Set B)";break;case"5":t="Clothes";break;case"6":t="Emotions";break;default:t=""}if(!0===n)a="Now show your skills!";else a="Feel free to practice!";return Object(p.jsxs)("div",{className:"InteractiveBlock",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"InteractiveBox",children:!o&&Object(p.jsx)("h1",{children:m.a.t("hello")})}),Object(p.jsx)("div",{className:"InteractiveBox mini",children:!o&&Object(p.jsx)("h2",{children:m.a.t("chooseCategory")})}),Object(p.jsx)("div",{className:"InteractiveBox".concat(o?"":" mini"),children:Object(p.jsx)("h1",{children:o&&"".concat(t," category. ").concat(a)})})]}),Object(p.jsx)("div",{className:"ButtonContainer".concat(n&&o&&!i?" show":""),children:Object(p.jsx)("button",{type:"button",className:"StartGameButton".concat(i||!n?" hide":""),onClick:s,children:m.a.t("start!")})}),Object(p.jsxs)("div",{className:"inGameButtonsContainer".concat(o&&i?" show":""),children:[Object(p.jsx)("button",{type:"button",className:"RestartGameButton".concat(i?"":" hide"),onClick:d,children:m.a.t("restart")}),Object(p.jsx)("button",{type:"button",className:"ReplayButton".concat(i?"":" hide"),onClick:u,children:m.a.t("replay")})]})]})},h="/english-for-kids",f=(a(37),function(e){var t=e.isPlaying,a=e.title,i=e.image;return Object(p.jsxs)("div",{className:"CategoryCard",children:[t,Object(p.jsx)("div",{className:"CardImageContainer",children:Object(p.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(i)})}),Object(p.jsx)("div",{className:"CategoryText",children:a})]})}),O=a(20),S=function(){return Math.random()-.5},x=function(e){return Number(e)-1},w=function(e,t,a){var i=new Audio("".concat(e,"/").concat(t));i.oncanplay=function(){a?(i.pause(),i.currentTime=0,i.play()):(i.pause(),i.currentTime=0)}},v=!1,y=(a(38),function(e){var t=e.isPlaying,a=e.word,i=e.translation,n=e.audio,r=e.image,o=e.inGameAnswer,s=e.isGameStarted,d=Object(c.useState)(!1),u=Object(l.a)(d,2),g=u[0],m=u[1],j=function(){t||(w(h,n,!1),w(h,n,!0))},b=function(){!0===g&&m(!1)};return Object(p.jsx)("div",{"data-role":"Mask",onMouseLeave:b,children:Object(p.jsxs)("div",{className:"CardContainer".concat(g?" flipped":""),children:[Object(p.jsxs)("div",{className:"ItemCard front",children:[Object(p.jsx)("div",{role:"button",className:"CardImageContainer".concat(t?" play":""),tabIndex:0,"data-word":a,onKeyDown:j,onClick:s?o:j,children:Object(p.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(r)})}),!t&&Object(p.jsxs)("div",{className:"CardControlPanel",children:[Object(p.jsx)("button",{style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:j,children:Object(p.jsx)("img",{className:"ControlPanelPlayButton",alt:"play-sound",src:"".concat(h,"/play-button.png")})}),Object(p.jsx)("span",{className:"ControlPanelText",children:a}),Object(p.jsx)("button",{style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:function(){w(h,"audio/cardflip.mp3",!1),w(h,"audio/cardflip.mp3",!0),m(!g)},children:Object(p.jsx)("img",{className:"ControlPanelEyeButton",alt:"watch-translation",src:"".concat(h,"/eye-button.png")})})]})]}),Object(p.jsxs)("div",{className:"ItemCard back",children:[Object(p.jsx)("div",{role:"button",className:"CardImageContainer",tabIndex:0,onKeyDown:b,onClick:b,children:Object(p.jsx)("img",{className:"CardImage",alt:a,src:"".concat(h,"/").concat(r)})}),!t&&Object(p.jsx)("div",{className:"CardControlPanel flipped",children:Object(p.jsx)("span",{className:"ControlPanelText",children:i})})]})]})})}),k=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}],N=[[{word:"cry",translation:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"\u043d\u044b\u0440\u044f\u0442\u044c",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"\u043b\u0435\u0442\u0430\u0442\u044c",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"\u0438\u0433\u0440\u0430\u0442\u044c",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"\u0435\u0437\u0434\u0438\u0442\u044c",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"\u0431\u0435\u0433\u0430\u0442\u044c",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"\u043f\u0435\u0442\u044c",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"\u043a\u043e\u0442",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"\u0446\u044b\u043f\u043b\u0451\u043d\u043e\u043a",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"\u043a\u0443\u0440\u0438\u0446\u0430",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"\u0441\u043e\u0431\u0430\u043a\u0430",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"\u043b\u043e\u0448\u0430\u0434\u044c",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"\u0441\u0432\u0438\u043d\u044c\u044f",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"\u043a\u0440\u043e\u043b\u0438\u043a",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"\u043e\u0432\u0446\u0430",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"\u043f\u0442\u0438\u0446\u0430",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"\u0440\u044b\u0431\u0430",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"\u0436\u0430\u0431\u0430",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"\u0436\u0438\u0440\u0430\u0444\u0430",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"\u043b\u0435\u0432",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"\u043c\u044b\u0448\u044c",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"\u044e\u0431\u043a\u0430",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"\u0431\u0440\u044e\u043a\u0438",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"\u0431\u043b\u0443\u0437\u043a\u0430",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"\u043f\u043b\u0430\u0442\u044c\u0435",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"\u043f\u0430\u043b\u044c\u0442\u043e",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"\u0442\u0443\u0444\u043b\u0438",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"\u0443\u0434\u0438\u0432\u043b\u0451\u043d\u043d\u044b\u0439",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"\u0443\u043b\u044b\u0431\u043a\u0430",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"\u0441\u043c\u0435\u0445",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]],C=(a(39),function(e){var t=e.isBlocking,a=e.isPlaying,i=e.id,n=e.isGameStarted,r=e.gameStepsFunc;return Object(c.useEffect)((function(){window.onbeforeunload=n?function(){return!0}:null})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g.a,{when:t,message:"You will lose your result. Are you sure?"}),Object(p.jsxs)("div",{className:"CardHolder".concat(i?" word":""),children:[!i&&k.map((function(e,t){var i=t+1;return Object(p.jsx)("div",{className:"Card",children:Object(p.jsx)(u.b,{to:"category/".concat(i),className:"Link",children:Object(p.jsx)(f,{isPlaying:a,title:e.title,image:e.image})})},e.title)})),i&&N[x(i)].map((function(e){return Object(p.jsx)(y,{inGameAnswer:r,isPlaying:a,word:e.word,translation:e.translation,image:e.image,audio:e.audioSrc,isGameStarted:n},e.word)}))]})]})}),B=(a(45),function(e){var t=e.answers,a=e.isGameStarted,i=e.id,n=Object(c.useState)(1600),r=Object(l.a)(n,2),o=r[0],s=r[1],d=Object(c.useState)("en"),u=Object(l.a)(d,2),g=u[0],b=u[1];function f(){s(window.innerWidth)}return Object(c.useEffect)((function(){return window.addEventListener("resize",f,!1),function(){return window.removeEventListener("resize",f,!1)}})),Object(c.useEffect)((function(){return s(window.innerWidth),window.addEventListener("load",f,!1),function(){return window.removeEventListener("resize",f,!1)}}),[]),Object(c.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),b(g)})),Object(p.jsxs)("div",{className:"StatsBlockContainer".concat(o<=820?" mini":""),children:[o>820&&Object(p.jsxs)("div",{className:"StatsBlock".concat(a&&i?" game":""),children:[Object(p.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(p.jsx)("span",{children:m.a.t("answers")})}),a&&t.map((function(e,t){return Object(p.jsx)("div",{className:"IconContainer",children:Object(p.jsx)("img",{className:"Icon",alt:"icon".concat(t),src:"".concat(h,"/img/").concat(!0===e?"correct.png":"wrong.png")})},"key".concat(t+1))}))]}),o<=820&&Object(p.jsxs)("div",{className:"StatsBlock".concat(a&&i?" game mini":""),children:[Object(p.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(p.jsx)("span",{children:m.a.t("correct")})}),Object(p.jsx)("div",{className:"TextStatsBlock".concat(a&&i?" game":""),children:Object(p.jsx)("span",{children:m.a.t("wrong")})}),a&&Object(p.jsx)("div",{className:"NumberStats".concat(a&&i?" game correct":""),children:t.filter((function(e){return!0===e})).length}),a&&Object(p.jsx)("div",{className:"NumberStats".concat(a&&i?" game wrong":""),children:t.filter((function(e){return!1===e})).length})]})]})}),T=(a(46),function(e){var t=e.isBlocking,a=e.isPlaying,i=e.isGameStarted,n=e.gameStartedToggle,r=e.resultScreenVisibilityToggle,o=e.getResult,s=e.setIsBlockingToggle,d=Object(c.useState)([]),u=Object(l.a)(d,2),m=u[0],j=u[1],f=Object(g.f)(),y=Object(c.useRef)([]),k=Object(c.useRef)(""),T=Object(c.useRef)(0),I=Object(c.useRef)(0),P=Object(c.useRef)(0),G=function(){j([]),y.current=[],T.current=0,P.current=0,k.current="",I.current=0},R=function(){k.current="".concat(12.5*I.current,"%"),o(k.current),r(),s(!1)},A=function(){y.current=N[x(f.id)].slice().sort(S),y&&w(h,y.current[T.current].audioSrc,!0)};return Object(c.useEffect)((function(){G(),s(!1),i&&n()}),[f.id]),Object(p.jsxs)("div",{className:"MainPage",children:[Object(p.jsx)(b,{isGameStarted:i,isPlaying:a,id:f.id,newGameFunc:function(){G(),n(),A(),s(!0)},restartGameFunc:function(){G(),A()},replayWord:function(){w(h,y.current[T.current].audioSrc,!0)}}),Object(p.jsx)(C,{isBlocking:t,isPlaying:a,id:f.id,isGameStarted:i,gameStepsFunc:function(e){!function(e,t,a,i,n,r,c,o,s,d,l,u){t.current.length>=a.current+1&&i.current<n&&r.current<c?(null===e||void 0===e?void 0:e.target).dataset.word===t.current[a.current].word?(v=!1,w(o,s,!1),w(o,s,!0),r.current+=1,l((function(e){return[].concat(Object(O.a)(e),[!0])})),a.current+=1,i.current+=1,t.current.length>=a.current+1&&i.current<n&&r.current<c?(v=!1,w(o,t.current[a.current].audioSrc,!1),w(o,t.current[a.current].audioSrc,!0)):u()):(w(o,d,!1),w(o,d,!0),l((function(e){return[].concat(Object(O.a)(e),[!1])})),i.current+=1,t.current.length>=a.current+1&&i.current<n&&r.current<c?v||(v=!0,setTimeout((function(){w(o,t.current[a.current].audioSrc,!1),w(o,t.current[a.current].audioSrc,!0),v=!1}),1e3)):u()):u()}(e,y,T,P,10,I,8,h,"audio/correct.mp3","audio/error.mp3",j,R)}}),a&&Object(p.jsx)(B,{answers:m,isPlaying:a,isGameStarted:i,id:f.id})]})}),I=a(28),P=a.n(I),G=(a(48),function(e){var t=e.setIsBlockingToggle,a=e.isGameStarted,i=e.isPlaying,n=e.sideBarToggle,r=e.setModeToggle;return Object(p.jsxs)("div",{className:"Header",style:{backgroundImage:"url(".concat(h,"/background.jpg)")},children:[Object(p.jsx)("div",{role:"button",className:"SideBarOpenButton",onClick:n,"aria-hidden":"true",children:"|||"}),Object(p.jsxs)("div",{className:"ModeSelector",children:[Object(p.jsx)("span",{className:"ModeText",children:i?"PLAY":"TRAIN"}),Object(p.jsx)(P.a,{onHandleColor:"#FFFFFF",onColor:"#99AE99",uncheckedIcon:!1,checkedIcon:!1,checked:i,className:"Switch",onChange:function(){a&&i?(t(!1),r()):r()},height:20,width:48,handleDiameter:18,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 52, 0, 0.4)"})]})]})}),R=(a(22),function(e){var t=e.isPlaying,a=e.cbToggle;return Object(p.jsxs)("div",{className:"SideBarContainer",children:[Object(p.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"end",marginTop:"10px"},children:Object(p.jsx)("button",{type:"button",className:"SideBarMenuItem".concat(t?" close play":" close"),onClick:a,children:"\u25c4"})}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.c,{to:"/",onClick:a,className:"SideBarMenuItem".concat(t?" play":""),children:"Main Page"})}),k.map((function(e,i){return Object(p.jsx)("li",{children:Object(p.jsx)(u.c,{to:"/category/".concat(i+1),onClick:a,className:"SideBarMenuItem".concat(t?" play":""),children:e.title})},e.title)}))]})]})}),A=(a(49),function(e){var t=e.resultScreenVisibilityToggle,a=e.viewResultScreen,i=e.finalResult,n=Object(c.useState)("en"),r=Object(l.a)(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),s(o)})),Object(p.jsx)("div",{className:"ResultScreen".concat(a?" view":" hide"),children:Object(p.jsxs)("div",{className:"ResultPercent",children:[Object(p.jsx)("h2",{children:m.a.t("result")}),Object(p.jsx)("h1",{children:i}),Object(p.jsx)("button",{type:"button",onClick:t,children:m.a.t("close")})]})})}),E=(a(50),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),o=r[0],s=r[1],d=Object(c.useState)(!1),m=Object(l.a)(d,2),j=m[0],b=m[1],f=Object(c.useState)(!1),O=Object(l.a)(f,2),S=O[0],x=O[1],w=Object(c.useState)(!1),v=Object(l.a)(w,2),y=v[0],k=v[1],N=Object(c.useState)(""),C=Object(l.a)(N,2),B=C[0],I=C[1],P=function(){return s(!o)},E=function(){i(!a),!0===j&&b(!1)},F=function(){b(!j),I("")},L=function(){x(!S),a&&E()},M=function(e){return I(e)},W=function(e){return k(e)};return Object(p.jsx)(u.a,{basename:h,children:Object(p.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(h,"/background.jpg"),backgroundRepeat:"repeat",backgroundAttachment:"fixed"},children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{className:"".concat(o?"SideBar active":"SideBar"),children:Object(p.jsx)(R,{isPlaying:a,cbToggle:P})}),Object(p.jsx)(G,{isGameStarted:j,setIsBlockingToggle:W,isPlaying:a,sideBarToggle:P,setModeToggle:E})]}),Object(p.jsxs)("main",{children:[Object(p.jsx)(g.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(T,{isPlaying:a,isGameStarted:j,gameStartedToggle:F,resultScreenVisibilityToggle:L,getResult:M,setIsBlockingToggle:W,isBlocking:y})}}),Object(p.jsx)(g.b,{path:"/category/:id",render:function(){return Object(p.jsx)(T,{isPlaying:a,isGameStarted:j,gameStartedToggle:F,resultScreenVisibilityToggle:L,getResult:M,isBlocking:y,setIsBlockingToggle:W})}}),Object(p.jsx)(A,{resultScreenVisibilityToggle:L,viewResultScreen:S,finalResult:B})]})]})})}),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))};d.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),window.addEventListener("load",Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=11;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("".concat("/english-for-kids","/service-worker.js"));case 4:t=e.sent,console.log("success",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("fail");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.24dd9919.chunk.js.map