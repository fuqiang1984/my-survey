(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.05a3e30f.svg"},18:function(e,t,n){e.exports=n(37)},23:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(5),o=n.n(r),i=(n(23),n(15)),c=n(2),u=n(10),l=n(11),w=n(12),d=n(16),m=n(13),p=n(3),h=n(17),f=[{question:"5 X 9=",answers:[{type:"Microsoft",content:"45"},{type:"Nintendo",content:"35"},{type:"Sony",content:"25"}],correctanswer:"45"},{question:"7 X 9=",answers:[{type:"Microsoft",content:"29"},{type:"Nintendo",content:"63"},{type:"Sony",content:"42"}],correctanswer:"63"},{question:"6 X 8=",answers:[{type:"Microsoft",content:"34"},{type:"Nintendo",content:"22"},{type:"Sony",content:"48"}],correctanswer:"48"},{question:"2 X 9=",answers:[{type:"Microsoft",content:"20"},{type:"Nintendo",content:"18"},{type:"Sony",content:"25"}],correctanswer:"18"},{question:"7 X 8= ",answers:[{type:"Microsoft",content:"32"},{type:"Nintendo",content:"56"},{type:"Sony",content:"27"}],correctanswer:"56"}],y=n(4);var v=function(e){return s.a.createElement("h2",{className:"question"},e.content)};var q=function(e){return s.a.createElement("div",{className:"questionCount"},"Question ",s.a.createElement("span",null,e.counter)," of ",s.a.createElement("span",null,e.total))};var E=function(e){return s.a.createElement("li",{className:"answerOption"},s.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerContent===e.answer,id:e.answerType,value:e.answerContent,disabled:e.answer,onChange:e.onAnswerSelected}),s.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var S=function(e){return s.a.createElement(y.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",{key:e.questionId},s.a.createElement(q,{counter:e.questionId,total:e.questionTotal}),s.a.createElement(v,{content:e.question}),s.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return s.a.createElement(E,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))};var N=function(e){return s.a.createElement(y.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",null,s.a.createElement("strong",null,e.quizResult.map(function(e){return s.a.createElement("li",{key:e.id},e.question+e.answer," ",e.correct?s.a.createElement("span",null,"\u2714"):s.a.createElement("span",null,"\u2718")," ")})),"!"))},g=n(14),A=n.n(g),k=(n(36),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",correctanswer:"",detailResult:[],answersCount:{Nintendo:0,Microsoft:0,Sony:0},result:!1},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=f.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:f[0].question,correctanswer:f[0].correctanswer,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;console.log(e.currentTarget),console.log(this.state.question),console.log(this.state.correctanswer),this.setUserAnswer(e.currentTarget.value),this.state.questionId<f.length?setTimeout(function(){return t.setNextQuestion()},300):setTimeout(function(){return t.setResults()},300)}},{key:"setUserAnswer",value:function(e){var t=this;this.setState(function(n,a){return{answersCount:Object(u.a)({},n.answersCount,Object(c.a)({},e,n.answersCount[e]+1)),detailResult:[].concat(Object(i.a)(n.detailResult),[{id:t.state.questionId,question:t.state.question,answer:e,correct:e===t.state.correctanswer}]),answer:e}})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:f[e].question,correctanswer:f[e].correctanswer,answerOptions:f[e].answers,answer:""})}},{key:"setResults",value:function(){this.setState({result:!0})}},{key:"renderQuiz",value:function(){return s.a.createElement(S,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:f.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return s.a.createElement(N,{quizResult:this.state.detailResult})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},s.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),s.a.createElement("h2",null,"React Quiz")),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.c139e3b9.chunk.js.map