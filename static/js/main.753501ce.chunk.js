(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),s=(a(23),a(13)),i=a(6),c=a(7),u=a(10),h=a(8),m=a(9),d=a(5),v=function(e){return o.a.createElement("div",{className:"action-btns"},o.a.createElement("div",{className:"action-btn action-1",onClick:e.greenClick},o.a.createElement("div",{className:"green-label"},o.a.createElement("span",null,"Click To Save"))),o.a.createElement("div",{className:"action-btn action-2"},o.a.createElement("label",{title:"Disabled"})),o.a.createElement("div",{className:"action-btn action-3"},o.a.createElement("label",{title:"Disabled"})))},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={filterText:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({filterText:e.target.value})}},{key:"handleGreenClick",value:function(e,t){this.props.handleSaveQuote(e,t)}},{key:"render",value:function(){var e=this,t=(this.state.filterText.length>1?this.props.quotes.filter(function(t){return t.title===e.state.filterText}):this.props.quotes).map(function(t){return o.a.createElement("div",{ref:"quoteCard"+t.key,key:t.key,className:"quote-card"},o.a.createElement(v,{greenClick:function(){return e.handleGreenClick(t.key)}}),o.a.createElement("h4",{className:"quote-title"},t.title),o.a.createElement("p",{className:"quote-text"},t.content),o.a.createElement("small",{className:"quote-author"},t.author))});return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"quotes-container"},o.a.createElement("div",{className:"card-filter"},o.a.createElement("select",{value:this.state.filterText,onChange:this.handleChange},o.a.createElement("option",{value:""},"Show All"),o.a.createElement("option",{value:"Success"},"Success"),o.a.createElement("option",{value:"Mentality"},"Mentality"),o.a.createElement("option",{value:"Balance"},"Balance"),o.a.createElement("option",{value:"Perseverance"},"Perseverance"))),t))}}]),t}(n.Component),f=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("h2",{className:"about-title"},"Control Your Focus"),o.a.createElement("p",{className:"about-text"},"I made this app to streamline a daily practice of mine... ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," Everyday, I select a quote which I feel is powerful, from someone I admire, and I make that quote the theme of my day. I live the quote, for the day. ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," This app allows the user to select a theme, and a couple of quotes related to the theme will be loaded, for the user to choose, as the theme for their day."))},p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.quotes.filter(function(t){return e.props.savedQuotes.includes(t.key)}).map(function(t){return o.a.createElement("div",{key:t.key,className:"quote-card"},o.a.createElement(v,null),o.a.createElement("h4",{className:"quote-title"},t.title),o.a.createElement("p",{className:"quote-text"},t.content),o.a.createElement("div",{className:"undo-btn",onClick:function(){return e.props.handleDeleteSaved(t.key)}},o.a.createElement("p",null,"Remove")),o.a.createElement("small",{className:"quote-author"},t.author))});return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"quotes-container"},t))}}]),t}(n.Component),b=[{key:1,title:"Success",content:"There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.",author:"Miyamoto Musashi"},{key:2,title:"Mentality",content:"You may abandon your own body but you must preserve your honour.",author:"Miyamoto Musashi"},{key:3,title:"Balance",content:"You should not have any special fondness for a particular weapon, or anything else, for that matter. Too much is the same as not enough. Without imitating anyone else, you should have as much weaponry as suits you.",author:"Miyamoto Musashi"},{key:4,title:"Mentality",content:"Think lightly of yourself and deeply of the world.",author:"Miyamoto Musashi"},{key:5,title:"Mentality",content:"All men are the same except for their belief in their own selves, regardless of what others may think of them.",author:"Miyamoto Musashi"},{key:6,title:"Balance",content:"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",author:"Marcus Aurelius"},{key:7,title:"Mentality",content:"You have power over your mind - not outside events. Realize this, and you will find strength.",author:"Marcus Aurelius"},{key:8,title:"Success",content:"Waste no more time arguing about what a good man should be. Be one.",author:"Marcus Aurelius"},{key:9,title:"Balance",content:"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",author:"Marcus Aurelius"},{key:10,title:"Mentality",content:"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",author:"Marcus Aurelius"},{key:11,title:"Mentality",content:"I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",author:"Marcus Aurelius"},{key:12,title:"Perseverance",content:"Step by step walk the thousand-mile road.",author:"Miyamoto Musashi"}],E=a(30),k=a(31),g=a(33),w=a(32),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={savedQuotes:[],savedHistory:[]},a.handleSaveQuote=a.handleSaveQuote.bind(Object(d.a)(Object(d.a)(a))),a.handleDeleteSaved=a.handleDeleteSaved.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSaveQuote",value:function(e){this.setState({savedQuotes:[].concat(Object(s.a)(this.state.savedQuotes),[e]),savedHistory:[].concat(Object(s.a)(this.state.savedHistory),[this.state.savedQuotes])})}},{key:"handleDeleteSaved",value:function(e){var t=this.state.savedQuotes.filter(function(t){return t!==e});this.setState({savedQuotes:t})}},{key:"shuffleQuotes",value:function(e){for(var t,a,n=e.length-1;n>-1;n--)a=Math.floor(Math.random()*n+1),t=e[n],e[n]=e[a],e[a]=t;return e}},{key:"render",value:function(){var e,t=this,a=this.shuffleQuotes(Object(s.a)(b));return this.state.savedHistory.length>0&&(e=o.a.createElement(E.a,{to:"/saved"},"Saved Quotes")),o.a.createElement(k.a,null,o.a.createElement("div",{className:""},o.a.createElement("nav",null,o.a.createElement(E.a,{to:"/"},"Home"),o.a.createElement(E.a,{to:"/about"},"About"),o.a.createElement("a",{href:"https://www.github.com/jddelia"},"JDelia"),e),o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(E.a,{to:"/"},o.a.createElement("span",null,"MindRight")))),o.a.createElement(g.a,null,o.a.createElement(w.a,{exact:!0,path:"/",render:function(){return o.a.createElement(y,{quotes:a.slice(0,5),filterText:t.state.filterText,handleSaveQuote:t.handleSaveQuote,handleDeleteSaved:t.handleDeleteSaved})}}),o.a.createElement(w.a,{path:"/about",component:f}),o.a.createElement(w.a,{path:"/saved",render:function(){return o.a.createElement(p,{quotes:b,savedQuotes:t.state.savedQuotes,handleDeleteSaved:t.handleDeleteSaved})}})),o.a.createElement("footer",null,o.a.createElement("p",null,"\xa9 MINDRIGHT 2018"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.753501ce.chunk.js.map