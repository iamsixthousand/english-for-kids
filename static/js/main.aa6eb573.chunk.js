(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"en":{"translation":{"start":"start!","chooseCategory":"Choose a category!","hello":"Hello friend! Let\'s learn english together.","restart":"restart","replay":"replay","result":"RESULT:","close":"CLOSE","answers":"ANSWERS:","correct":"CORRECT:","wrong":"WRONG:","offline":"No network! Please check your internet connection and reload the page.","swReloadMessage":"New version of application available. Press OK to reload the page"}}}')},,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(23),r=n.n(c),o=(n(33),n(18)),s=n.n(o),l=n(24),d=n(2),u=n(10),g=n(3),m=n(4),j=(n(35),n(9)),b=n(0),p=function(e){var t,n,i=e.isGameStarted,c=e.isPlaying,r=e.id,o=void 0===r?void 0:r,s=e.newGameFunc,l=e.restartGameFunc,u=e.replayWord,g=Object(a.useState)("en"),p=Object(d.a)(g,2),f=p[0],h=p[1];switch(Object(a.useEffect)((function(){c&&window.scrollTo(0,0)}),[c]),Object(a.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),h(f)})),o){case"1":t="Action (Set A)";break;case"2":t="Action (Set B)";break;case"3":t="Animal (Set A)";break;case"4":t="Animal (Set B)";break;case"5":t="Clothes";break;case"6":t="Emotions";break;default:t=""}if(!0===c)n="Now show your skills!";else n="Feel free to practice!";return Object(b.jsxs)("div",{className:"InteractiveBlock",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"InteractiveBox",children:!o&&Object(b.jsx)("h1",{children:m.a.t("hello")})}),Object(b.jsx)("div",{className:"InteractiveBox mini",children:!o&&Object(b.jsx)("h2",{children:m.a.t("chooseCategory")})}),Object(b.jsx)("div",{className:"InteractiveBox".concat(o?"":" mini"),children:Object(b.jsx)("h1",{children:o&&"".concat(t," category. ").concat(n)})})]}),Object(b.jsx)("div",{className:"ButtonContainer".concat(c&&o&&!i?" show":""),children:Object(b.jsx)("button",{type:"button",className:"StartGameButton".concat(i||!c?" hide":""),onClick:s,children:m.a.t("start!")})}),Object(b.jsxs)("div",{className:"inGameButtonsContainer".concat(o&&i?" show":""),children:[Object(b.jsx)("button",{type:"button",className:"RestartGameButton".concat(i?"":" hide"),onClick:l,children:m.a.t("restart")}),Object(b.jsx)("button",{type:"button",className:"ReplayButton".concat(i?"":" hide"),onClick:u,children:m.a.t("replay")})]})]})},f="/english-for-kids",h=(n(37),function(e){var t=e.isPlaying,n=e.title,a=e.image;return Object(b.jsxs)("div",{className:"CategoryCard",children:[t,Object(b.jsx)("div",{className:"CardImageContainer",children:Object(b.jsx)("img",{className:"CardImage",alt:n,src:"".concat(f,"/").concat(a)})}),Object(b.jsx)("div",{className:"CategoryText",children:n})]})}),O=n(20),x=function(){return Math.random()-.5},S=function(e){return Number(e)-1},w=function(e,t,n){var a=new Audio("".concat(e,"/").concat(t));a.onloadeddata=function(){var e;a.onplaying=function(){e=!0},a.onpause=function(){e=!1};var t=function(){!a.paused&&e&&(a.pause(),a.currentTime=0)};n?(t(),a.paused&&!e&&a.play()):t()}},v=!1,y=(n(38),function(e){var t=e.isPlaying,n=e.word,i=e.translation,c=e.audio,r=e.image,o=e.inGameAnswer,s=e.isGameStarted,l=Object(a.useState)(!1),u=Object(d.a)(l,2),g=u[0],m=u[1],j=function(){t||w(f,c,!0)},p=function(){!0===g&&m(!1)};return Object(b.jsx)("div",{"data-role":"Mask",onMouseLeave:p,children:Object(b.jsxs)("div",{className:"CardContainer".concat(g?" flipped":""),children:[Object(b.jsxs)("div",{className:"ItemCard front",children:[Object(b.jsx)("div",{role:"button",className:"CardImageContainer".concat(t?" play":""),tabIndex:0,"data-word":n,onClick:s?o:j,children:Object(b.jsx)("img",{className:"CardImage",alt:n,src:"".concat(f,"/").concat(r)})}),!t&&Object(b.jsxs)("div",{className:"CardControlPanel",children:[Object(b.jsx)("button",{id:"soundPlayButton",style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:j,children:Object(b.jsx)("img",{className:"ControlPanelPlayButton",alt:"play-sound",src:"".concat(f,"/play-button.png")})}),Object(b.jsx)("span",{className:"ControlPanelText",children:n}),Object(b.jsx)("button",{style:{border:"none",backgroundColor:"rgb(248, 241, 241)"},type:"button",onClick:function(){w(f,"audio/cardflip.mp3",!0),m(!g)},children:Object(b.jsx)("img",{className:"ControlPanelEyeButton",alt:"watch-translation",src:"".concat(f,"/eye-button.png")})})]})]}),Object(b.jsxs)("div",{className:"ItemCard back",children:[Object(b.jsx)("div",{role:"button",className:"CardImageContainer",tabIndex:0,onClick:p,children:Object(b.jsx)("img",{className:"CardImage",alt:n,src:"".concat(f,"/").concat(r)})}),!t&&Object(b.jsx)("div",{className:"CardControlPanel flipped",children:Object(b.jsx)("span",{className:"ControlPanelText",children:i})})]})]})})}),k=[{title:"Action (set A)",image:"img/action-set-a.jpg"},{title:"Action (set B)",image:"img/action-set-b.jpg"},{title:"Animal (set A)",image:"img/animal-set-a.jpg"},{title:"Animal (set B)",image:"img/animal-set-b.jpg"},{title:"Clothes",image:"img/clothes.jpg"},{title:"Emotions",image:"img/emotions.jpg"}],C=[[{word:"cry",translation:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"\u043d\u044b\u0440\u044f\u0442\u044c",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"\u043b\u0435\u0442\u0430\u0442\u044c",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"\u0438\u0433\u0440\u0430\u0442\u044c",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"\u0435\u0437\u0434\u0438\u0442\u044c",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"\u0431\u0435\u0433\u0430\u0442\u044c",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"\u043f\u0435\u0442\u044c",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"\u043a\u043e\u0442",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"\u0446\u044b\u043f\u043b\u0451\u043d\u043e\u043a",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"\u043a\u0443\u0440\u0438\u0446\u0430",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"\u0441\u043e\u0431\u0430\u043a\u0430",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"\u043b\u043e\u0448\u0430\u0434\u044c",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"\u0441\u0432\u0438\u043d\u044c\u044f",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"\u043a\u0440\u043e\u043b\u0438\u043a",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"\u043e\u0432\u0446\u0430",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"\u043f\u0442\u0438\u0446\u0430",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"\u0440\u044b\u0431\u0430",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"\u0436\u0430\u0431\u0430",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"\u0436\u0438\u0440\u0430\u0444\u0430",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"\u043b\u0435\u0432",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"\u043c\u044b\u0448\u044c",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"\u044e\u0431\u043a\u0430",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"\u0431\u0440\u044e\u043a\u0438",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"\u0431\u043b\u0443\u0437\u043a\u0430",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"\u043f\u043b\u0430\u0442\u044c\u0435",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"\u043f\u0430\u043b\u044c\u0442\u043e",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"\u0442\u0443\u0444\u043b\u0438",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"\u0443\u0434\u0438\u0432\u043b\u0451\u043d\u043d\u044b\u0439",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"\u0443\u043b\u044b\u0431\u043a\u0430",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"\u0441\u043c\u0435\u0445",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]],N=(n(39),function(e){var t=e.offlineContentVisible,n=(e.isOffline,e.isBlocking),i=e.isPlaying,c=e.id,r=e.isGameStarted,o=e.gameStepsFunc,s=Object(a.useState)(!1),l=Object(d.a)(s,2),m=l[0],j=l[1];return Object(a.useEffect)((function(){window.onbeforeunload=r?function(){return!0}:null})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{when:n,message:"You will lose your result. Are you sure?"}),Object(b.jsxs)("div",{className:"CardHolder".concat(c?t?" offline":" word":""),children:[!c&&k.map((function(e,t){var n=t+1;return Object(b.jsx)("div",{className:"Card",children:Object(b.jsx)(u.b,{to:"category/".concat(n),className:"Link",children:Object(b.jsx)(h,{isPlaying:i,title:e.title,image:e.image})})},e.title)})),c&&!t&&C[S(c)].map((function(e){return Object(b.jsx)(y,{inGameAnswer:o,isPlaying:i,word:e.word,translation:e.translation,image:e.image,audio:e.audioSrc,isGameStarted:r},e.word)})),c&&t&&Object(b.jsxs)("div",{className:"offlineContent",children:[Object(b.jsxs)("h3",{className:"offlineContentMessage",children:["OOPS! The page is offline.",Object(b.jsx)("br",{}),"Please check your internet connection and reload the page!"]}),Object(b.jsx)("button",{type:"button",className:"offlineContentReloadButton",onClick:function(){j(!m)},children:"RELOAD"})]})]})]})}),B=(n(45),function(e){var t=e.answers,n=e.isGameStarted,i=e.id,c=Object(a.useState)(1600),r=Object(d.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)("en"),u=Object(d.a)(l,2),g=u[0],p=u[1];function h(){s(window.innerWidth)}return Object(a.useEffect)((function(){return window.addEventListener("resize",h,!1),function(){return window.removeEventListener("resize",h,!1)}})),Object(a.useEffect)((function(){return s(window.innerWidth),window.addEventListener("load",h,!1),function(){return window.removeEventListener("resize",h,!1)}}),[]),Object(a.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),p(g)})),Object(b.jsxs)("div",{className:"StatsBlockContainer".concat(o<=820?" mini":""),children:[o>820&&Object(b.jsxs)("div",{className:"StatsBlock".concat(n&&i?" game":""),children:[Object(b.jsx)("div",{className:"TextStatsBlock".concat(n&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("answers")})}),n&&t.map((function(e,t){return Object(b.jsx)("div",{className:"IconContainer",children:Object(b.jsx)("img",{className:"Icon",alt:"icon".concat(t),src:"".concat(f,"/img/").concat(!0===e?"correct.png":"wrong.png")})},"key".concat(t+1))}))]}),o<=820&&Object(b.jsxs)("div",{className:"StatsBlock".concat(n&&i?" game mini":""),children:[Object(b.jsx)("div",{className:"TextStatsBlock".concat(n&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("correct")})}),Object(b.jsx)("div",{className:"TextStatsBlock".concat(n&&i?" game":""),children:Object(b.jsx)("span",{children:m.a.t("wrong")})}),n&&Object(b.jsx)("div",{className:"NumberStats".concat(n&&i?" game correct":""),children:t.filter((function(e){return!0===e})).length}),n&&Object(b.jsx)("div",{className:"NumberStats".concat(n&&i?" game wrong":""),children:t.filter((function(e){return!1===e})).length})]})]})}),T=(n(46),function(e){var t=e.offlineContentVisible,n=e.isOffline,i=e.isBlocking,c=e.isPlaying,r=e.isGameStarted,o=e.gameStartedToggle,s=e.resultScreenVisibilityToggle,l=e.getResult,u=e.setIsBlockingToggle,m=Object(a.useState)([]),j=Object(d.a)(m,2),h=j[0],y=j[1],k=Object(g.f)(),T=Object(a.useRef)([]),I=Object(a.useRef)(""),P=Object(a.useRef)(0),E=Object(a.useRef)(0),R=Object(a.useRef)(0),A=function(){y([]),T.current=[],P.current=0,R.current=0,I.current="",E.current=0},G=function(){I.current="".concat(12.5*E.current,"%"),l(I.current),s(),u(!1)},F=function(){T.current=C[S(k.id)].slice().sort(x),T&&w(f,T.current[P.current].audioSrc,!0)};return Object(a.useEffect)((function(){A(),u(!1),r&&o()}),[k.id]),Object(b.jsxs)("div",{className:"MainPage",children:[Object(b.jsx)(p,{isGameStarted:r,isPlaying:c,id:k.id,newGameFunc:function(){A(),o(),F(),u(!0)},restartGameFunc:function(){A(),F()},replayWord:function(){w(f,T.current[P.current].audioSrc,!0)}}),Object(b.jsx)(N,{offlineContentVisible:t,isOffline:n,isBlocking:i,isPlaying:c,id:k.id,isGameStarted:r,gameStepsFunc:function(e){!function(e,t,n,a,i,c,r,o,s,l,d,u){t.current.length>=n.current+1&&a.current<i&&c.current<r?(null===e||void 0===e?void 0:e.target).dataset.word===t.current[n.current].word?(v=!1,w(o,s,!1),w(o,s,!0),c.current+=1,d((function(e){return[].concat(Object(O.a)(e),[!0])})),n.current+=1,a.current+=1,t.current.length>=n.current+1&&a.current<i&&c.current<r?(v=!1,w(o,t.current[n.current].audioSrc,!1),w(o,t.current[n.current].audioSrc,!0)):u()):(w(o,l,!1),w(o,l,!0),d((function(e){return[].concat(Object(O.a)(e),[!1])})),a.current+=1,t.current.length>=n.current+1&&a.current<i&&c.current<r?v||(v=!0,setTimeout((function(){w(o,t.current[n.current].audioSrc,!1),w(o,t.current[n.current].audioSrc,!0),v=!1}),1e3)):u()):u()}(e,T,P,R,10,E,8,f,"audio/correct.mp3","audio/error.mp3",y,G)}}),c&&Object(b.jsx)(B,{answers:h,isPlaying:c,isGameStarted:r,id:k.id})]})}),I=n(28),P=n.n(I),E=(n(48),function(e){var t=e.offlineContentVisible,n=e.setIsBlockingToggle,a=e.isGameStarted,i=e.isPlaying,c=e.sideBarToggle,r=e.setModeToggle;return Object(b.jsxs)("div",{className:"Header",style:{backgroundImage:"url(".concat(f,"/background.jpg)")},children:[Object(b.jsx)("div",{role:"button",className:"SideBarOpenButton",onClick:c,"aria-hidden":"true",children:"|||"}),!t&&Object(b.jsxs)("div",{className:"ModeSelector",children:[Object(b.jsx)("span",{className:"ModeText",children:i?"PLAY":"TRAIN"}),Object(b.jsx)(P.a,{onHandleColor:"#FFFFFF",onColor:"#99AE99",uncheckedIcon:!1,checkedIcon:!1,checked:i,className:"Switch",onChange:function(){a&&i?(n(!1),r()):r()},height:20,width:48,handleDiameter:18,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 52, 0, 0.4)"})]})]})}),R=(n(49),function(e){var t=e.isOffline,n=Object(a.useState)("en"),i=Object(d.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(!1),s=Object(d.a)(o,2),l=s[0],u=s[1],g=function(e){u(e)};return Object(a.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),r(c)})),Object(a.useEffect)((function(){t?setTimeout((function(){return g(!0)}),2e3):g(!1)}),[t]),Object(b.jsx)("div",{className:"IndicatorContainer".concat(l?" view":" hide"),children:Object(b.jsx)("div",{className:"IndicatorText",children:Object(b.jsx)("span",{children:m.a.t("offline")})})})}),A=(n(22),function(e){var t=e.isPlaying,n=e.cbToggle;return Object(b.jsxs)("div",{className:"SideBarContainer",children:[Object(b.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"end",marginTop:"10px"},children:Object(b.jsx)("button",{type:"button",className:"SideBarMenuItem".concat(t?" close play":" close"),onClick:n,children:"\u25c4"})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.c,{to:"/",onClick:n,className:"SideBarMenuItem".concat(t?" play":""),children:"Main Page"})}),k.map((function(e,a){return Object(b.jsx)("li",{children:Object(b.jsx)(u.c,{to:"/category/".concat(a+1),onClick:n,className:"SideBarMenuItem".concat(t?" play":""),children:e.title})},e.title)}))]})]})}),G=(n(50),function(e){var t=e.resultScreenVisibilityToggle,n=e.viewResultScreen,i=e.finalResult,c=Object(a.useState)("en"),r=Object(d.a)(c,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),s(o)})),Object(b.jsx)("div",{className:"ResultScreen".concat(n?" view":" hide"),children:Object(b.jsxs)("div",{className:"ResultPercent",children:[Object(b.jsx)("h2",{children:m.a.t("result")}),Object(b.jsx)("h1",{children:i}),Object(b.jsx)("button",{type:"button",onClick:t,children:m.a.t("close")})]})})}),F=(n(51),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(d.a)(c,2),o=r[0],p=r[1],h=Object(a.useState)(!1),O=Object(d.a)(h,2),x=O[0],S=O[1],w=Object(a.useState)(!1),v=Object(d.a)(w,2),y=v[0],k=v[1],C=Object(a.useState)(!1),N=Object(d.a)(C,2),B=N[0],I=N[1],P=Object(a.useState)(!1),F=Object(d.a)(P,2),L=F[0],M=F[1],W=Object(a.useState)(!1),V=Object(d.a)(W,2),U=V[0],D=V[1],H=Object(a.useState)(""),z=Object(d.a)(H,2),J=z[0],K=z[1],Y=Object(a.useState)("en"),_=Object(d.a)(Y,2),q=_[0],Q=_[1],X=Object(a.useState)(!1),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=function(e){ee(e)},ne=function(){return k(!y)},ae=function(e){return S(e)},ie=function(){i(!n),!0===B&&I(!1)},ce=function(){I(!B),K("")},re=function(){M(!L),n&&ie()},oe=function(e){return K(e)},se=function(e){return D(e)};window.addEventListener("offline",(function(){return p(!0)}),!1),window.addEventListener("online",(function(){p(!1),te(!1)}),!1),Object(a.useEffect)((function(){var e;e="en",m.a.init({lng:e,resources:j}),Q(q)})),Object(a.useEffect)((function(){o&&setTimeout((function(){return te(!0)}),7e3)}),[o]);var le=function(e){console.log("ddddd"),ae(!0),document.getElementById("okButton").onclick=function(){var t;null===(t=e.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"}),ae(!1)}};window.addEventListener("load",Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=12;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("".concat("/english-for-kids","/service-worker.js"));case 4:(t=e.sent).onupdatefound=function(){var e=t.installing;e&&(e.onstatechange=function(){"installed"===e.state&&navigator.serviceWorker.controller&&le(t)})},console.log("success",t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("fail");case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))));return navigator.serviceWorker.addEventListener("controllerchange",(function(){console.log("controller-changed"),window.location.reload()})),Object(b.jsx)(u.a,{basename:f,children:Object(b.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(f,"/background.jpg"),backgroundRepeat:"repeat",backgroundAttachment:"fixed"},children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"".concat(y?"SideBar active":"SideBar"),children:Object(b.jsx)(A,{isPlaying:n,cbToggle:ne})}),Object(b.jsx)(E,{offlineContentVisible:$,isGameStarted:B,setIsBlockingToggle:se,isPlaying:n,sideBarToggle:ne,setModeToggle:ie})]}),Object(b.jsxs)("main",{children:[Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"UpdateSWContainer".concat(x?" view":" hide"),children:Object(b.jsxs)("div",{className:"UpdateSWMessage",children:[Object(b.jsx)("span",{children:m.a.t("swReloadMessage")}),Object(b.jsxs)("div",{className:"UpdateSWButtons",children:[Object(b.jsx)("button",{className:"UpdateButton",id:"okButton",type:"button",children:"OK"}),Object(b.jsx)("button",{className:"UpdateButton",type:"button",onClick:function(){console.log("reload-cancel"),ae(!1)},children:"CANCEL"})]})]})})}),Object(b.jsx)(R,{isOffline:o}),Object(b.jsx)(g.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(T,{offlineContentVisible:$,isOffline:o,isPlaying:n,isGameStarted:B,gameStartedToggle:ce,resultScreenVisibilityToggle:re,getResult:oe,setIsBlockingToggle:se,isBlocking:U})}}),Object(b.jsx)(g.b,{path:"/category/:id",render:function(){return Object(b.jsx)(T,{offlineContentVisible:$,isOffline:o,isPlaying:n,isGameStarted:B,gameStartedToggle:ce,resultScreenVisibilityToggle:re,getResult:oe,isBlocking:U,setIsBlockingToggle:se})}}),Object(b.jsx)(G,{resultScreenVisibilityToggle:re,viewResultScreen:L,finalResult:J})]})]})})}),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),L()}],[[52,1,2]]]);
//# sourceMappingURL=main.aa6eb573.chunk.js.map