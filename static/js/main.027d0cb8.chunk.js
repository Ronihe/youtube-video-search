(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(81)},46:function(e,t,n){},47:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),c=n.n(i),o=(n(46),n(5)),s=n(6),l=n(9),u=n(7),p=n(8),h=n(14),d=n(15),m=(n(47),n(36)),v=n(13),b=n(17),f=n.n(b),E=n(21),g=n(38),j=n.n(g),O="GET_Q",k="GET_NEW_VIDEOS",w="https://www.googleapis.com/youtube/v3/search",y=12,x="AIzaSyBYjNe14Q0ik3HdVS-qFZkjadzYQ-iKaA0";function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(E.a)(f.a.mark(function n(a){var r,i,c;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=4;break}return alert("Hi, What videos do you want to search?"),n.abrupt("return");case 4:return n.next=6,j.a.get("".concat(w),{params:{key:x,q:t,pageToken:e,maxResults:y,part:"snippet",type:"video"}});case 6:if(r=n.sent,i=r.data.nextPageToken,c=r.data.items.map(function(e){return{videoId:e.id.videoId,src:e.snippet.thumbnails.medium.url,channel:e.snippet.channelTitle,title:e.snippet.title,publishedAt:e.snippet.publishedAt,description:e.snippet.description}}),e){n.next=11;break}return n.abrupt("return",a(S(t,i,c)));case 11:if(e===i){n.next=13;break}return n.abrupt("return",a(T(i,c)));case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),alert(n.t0),console.log("error");case 19:case"end":return n.stop()}},n,null,[[0,15]])}));return function(e){return n.apply(this,arguments)}}()}function S(e,t,n){return{type:O,q:e,nextPageToken:t,videos:n}}function T(e,t){return{type:k,nextPageToken:e,videos:t}}var C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.getVideos("",n.state.search),n.setState({search:""})},n.state={search:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,name:"search",placeholder:"Search",value:this.state.search,size:"60"}),r.a.createElement("button",null," Search ")))}}]),t}(a.Component);var I=Object(v.b)(function(e){return{search:e.q}},{getVideos:P})(C),A=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"VideoCard"},r.a.createElement(h.b,{to:"/"+this.props.videoId},r.a.createElement("img",{src:this.props.src,alt:this.props.title}),r.a.createElement("div",{className:"cardContent"},r.a.createElement("h5",null," ",this.props.title),r.a.createElement("p",null,r.a.createElement("small",null,this.props.publishedAt)),r.a.createElement("p",{style:{textAlign:"left"}}," ",r.a.createElement("small",null,r.a.createElement("b",null,"Description:"),this.props.description)))))}}]),t}(a.Component),N=n(78),V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).infiniteScroll=Object(E.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(document.body.scrollHeight-window.innerHeight-window.scrollY<50&&n.state.getAPI)){e.next=6;break}return n.setState({getAPI:!1}),e.next=4,n.props.getVideos(n.props.pageToken,n.props.search);case 4:e.sent&&n.setState({getAPI:!0});case 6:case"end":return e.stop()}},e)})),n.state={getAPI:!0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.infiniteScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.infiniteScroll)}},{key:"render",value:function(){return r.a.createElement("div",{className:"videoListWithSeach"},this.props.search?r.a.createElement("h5",null,"Current Search Term is: ",this.props.search):null,r.a.createElement("div",{className:"videoList"},this.props.currentPageVideos.map(function(e){return r.a.createElement(A,Object.assign({},e,{key:N()}))})))}}]),t}(a.Component);var q=Object(v.b)(function(e){return{length:e.videos.length,pageToken:e.nextPageToken,search:e.q,currentPageVideos:e.videos}},{getVideos:P})(V),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(I,null),r.a.createElement(q,null))}}]),t}(a.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.video?r.a.createElement("div",{className:"Video"},r.a.createElement("iframe",{title:this.props.video.title,width:"100%",height:"315",src:"https://www.youtube.com/embed/"+this.props.video.videoId}),r.a.createElement("div",{className:"VideoContent"},r.a.createElement("h5",null," ",this.props.video.title),r.a.createElement("p",null,r.a.createElement("small",null,"Channel: ",this.props.video.channel)),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("small",null,this.props.video.description)))),r.a.createElement("button",{onClick:function(){e.props.history.push("/")}},"Back to YouTube Home Page"," ")):r.a.createElement("div",null)}}]),t}(a.Component);var Y=Object(v.b)(function(e,t){return 0===e.videos.length?t.history.push("/"):{video:e.videos.filter(function(e){return e.videoId===t.match.params.videoId})[0]}})(W),B=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.c,{exact:!0,to:"/"},"Roni's Youtube Project"),r.a.createElement(h.c,{exact:!0,to:"/"},"Home Page"),r.a.createElement("a",{href:"https://github.com/Ronihe/youtube-video-search",target:"_blank",rel:"noopener noreferrer"},"Github Repo")),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(H,null)}}),r.a.createElement(d.b,{exact:!0,path:"/:videoId",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(d.a,{to:"/"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(27);var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{q:"",nextPageToken:"",videos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{q:t.q,nextPageToken:t.nextPageToken,videos:t.videos};case k:return{q:e.q,nextPageToken:t.nextPageToken,videos:[].concat(Object(D.a)(e.videos),Object(D.a)(t.videos))};default:return e}},R=n(16),_=n(40),z=Object(R.d)(L,Object(R.c)(Object(R.a)(_.a)));c.a.render(r.a.createElement(v.a,{store:z},r.a.createElement(h.a,{basename:"/youtube-video-search"},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.027d0cb8.chunk.js.map