(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(78)},46:function(e,t,n){},47:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),i=n.n(o),c=(n(46),n(4)),s=n(5),l=n(8),u=n(6),p=n(7),h=n(14),d=n(15),m=(n(47),n(36)),v=n(13),b=n(17),g=n.n(b),f=n(22),E=n(38),O=n.n(E),j="NEXT_PAGE",k="GET_Q",x="PREVIOUS_PAGE",w="GET_NEW_VIDEOS",y="https://www.googleapis.com/youtube/v3/search",P=12,T="AIzaSyAPw5O_9xI4yN_mxAepfwuS_Rn2qZieR5A";function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(f.a)(g.a.mark(function n(a){var r,o,i;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=4;break}return alert("Hi, What videos do you want to search?"),n.abrupt("return");case 4:return n.next=6,O.a.get("".concat(y),{params:{key:T,q:t,pageToken:e,maxResults:P,part:"snippet",type:"video"}});case 6:if(r=n.sent,o=r.data.nextPageToken,i=r.data.items.map(function(e){return{videoId:e.id.videoId,src:e.snippet.thumbnails.medium.url,channel:e.snippet.channelTitle,title:e.snippet.title,publishedAt:e.snippet.publishedAt,description:e.snippet.description}}),e){n.next=11;break}return n.abrupt("return",a(C(t,o,i)));case 11:if(!e){n.next=13;break}return n.abrupt("return",a(N(o,i)));case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),alert(n.t0),console.log("error");case 19:case"end":return n.stop()}},n,null,[[0,15]])}));return function(e){return n.apply(this,arguments)}}()}function C(e,t,n){return{type:k,q:e,nextPageToken:t,videos:n}}function N(e,t){return{type:w,nextPageToken:e,videos:t}}function S(){return{type:x}}function q(){return{type:j}}var I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.getVideos("",n.state.search),n.setState({search:""})},n.state={search:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,name:"search",placeholder:"Search",value:this.state.search,size:"60"}),r.a.createElement("button",null," Search ")))}}]),t}(a.Component);var A=Object(v.b)(function(e){return{search:e.q}},{getVideos:V})(I),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"VideoCard"},r.a.createElement(h.b,{to:"/"+this.props.videoId},r.a.createElement("img",{src:this.props.src,alt:this.props.title}),r.a.createElement("div",{className:"cardContent"},r.a.createElement("h5",null," ",this.props.title),r.a.createElement("p",null,r.a.createElement("small",null,this.props.publishedAt)),r.a.createElement("p",{style:{textAlign:"left"}}," ",r.a.createElement("small",null,r.a.createElement("b",null,"Description:"),this.props.description)))))}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).infiniteScroll=Object(f.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(document.body.scrollHeight-window.innerHeight-window.scrollY<=500)){e.next=7;break}if(!(12*n.props.page<n.props.length)){e.next=5;break}n.props.getNextVideos(),e.next=7;break;case 5:return e.next=7,n.props.getVideos(n.props.pageToken,n.props.search);case 7:case"end":return e.stop()}},e)})),n.state={scroll:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.infiniteScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.infiniteScroll)}},{key:"render",value:function(){return r.a.createElement("div",{className:"videoListWithSeach"},this.props.search?r.a.createElement("h5",null,"Current Search Term is: ",this.props.search," | Current Page:"," ",this.props.page):null,r.a.createElement("div",{className:"videoList"},this.props.currentPageVideos.map(function(e){return r.a.createElement(_,Object.assign({},e,{key:e.videoId}))})))}}]),t}(a.Component);var H=Object(v.b)(function(e){return{length:e.videos.length,pageToken:e.nextPageToken,page:e.page,search:e.q,currentPageVideos:e.videos}},{getVideos:V,previousVideos:S,getNextVideos:q})(R),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Pagination"},this.props.search?r.a.createElement("div",null,this.props.page>1?r.a.createElement("button",{onClick:this.props.previousVideos}," previous "):null,this.props.page,r.a.createElement("button",{onClick:12*this.props.page<this.props.length?this.props.getNextVideos:function(){e.props.getVideos(e.props.pageToken,e.props.search)}},"Next")):null)}}]),t}(a.Component);var G=Object(v.b)(function(e){return{length:e.videos.length,page:e.page,pageToken:e.nextPageToken,search:e.q}},{getVideos:V,previousVideos:S,getNextVideos:q})(W),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(A,null),r.a.createElement(H,null),r.a.createElement(G,null))}}]),t}(a.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.video?r.a.createElement("div",{className:"Video"},r.a.createElement("iframe",{title:this.props.video.title,width:"100%",height:"315",src:"https://www.youtube.com/embed/"+this.props.video.videoId}),r.a.createElement("div",{className:"VideoContent"},r.a.createElement("h5",null," ",this.props.video.title),r.a.createElement("p",null,r.a.createElement("small",null,"Channel: ",this.props.video.channel)),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("small",null,this.props.video.description)))),r.a.createElement("button",{onClick:function(){e.props.history.push("/")}},"Back to YouTube Home Page"," ")):r.a.createElement("div",null)}}]),t}(a.Component);var B=Object(v.b)(function(e,t){return 0===e.videos.length?t.history.push("/"):{video:e.videos.filter(function(e){return e.videoId===t.match.params.videoId})[0]}})(L),Y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.c,{exact:!0,to:"/"},"Roni's Youtube Project"),r.a.createElement(h.c,{exact:!0,to:"/"},"Home Page"),r.a.createElement("a",{href:"https://github.com/Ronihe/youtube-video-search",target:"_blank",rel:"noopener noreferrer"},"Github Repo")),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(d.b,{exact:!0,path:"/:videoId",render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(d.a,{to:"/"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(19);var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{q:"",nextPageToken:"",page:1,videos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{q:t.q,page:1,nextPageToken:t.nextPageToken,videos:t.videos};case w:var n=e.page+1;return{q:e.q,page:n,nextPageToken:t.nextPageToken,videos:[].concat(Object(z.a)(e.videos),Object(z.a)(t.videos))};case x:var a=e.page>1?e.page-1:1;return{q:e.q,page:a,nextPageToken:e.nextPageToken,videos:Object(z.a)(e.videos)};case j:var r=e.page+1;return{q:e.q,page:r,nextPageToken:e.nextPageToken,videos:Object(z.a)(e.videos)};default:return e}},U=n(16),M=n(40),Q=Object(U.d)(J,Object(U.c)(Object(U.a)(M.a)));i.a.render(r.a.createElement(v.a,{store:Q},r.a.createElement(h.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.6c443e6b.chunk.js.map