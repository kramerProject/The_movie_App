(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),s=n.n(i),c=n(18),r=n.n(c),o=(n(26),n(27),n(3)),l=n(4),u=n(6),d=n(5),h=n.p+"static/media/ozzy.17d9e5e0.jpg",j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"picture-container",children:[Object(a.jsx)("img",{id:"personal-picture",src:h,className:"image-meme",alt:"personal"}),Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Your Photo"})})]})}}]),n}(s.a.Component),m=n(8),p=n.n(m),f=n(19),b=n(9),v=n(20),O=n.n(v).a.create({baseURL:"https://api.themoviedb.org/3/trending/movie/week?api_key=52d3e97323f3329ba592b46f79041c81"}),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).ImageClick=function(e){var t=e.target.parentNode;if(t.classList.contains("rated")){var n=t.lastChild;t.removeChild(n),t.classList.remove("rated")}else{t.classList.add("rated");var a=document.createElement("p");a.innerHTML='<span><i class="fas fa-thumbs-up"></i></span>',t.appendChild(a)}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"movie-item",children:[Object(a.jsx)("img",{className:"movie-image",src:"https://image.tmdb.org/t/p/w500".concat(this.props.movie.poster_path),onClick:this.ImageClick}),Object(a.jsx)("h1",{children:this.props.movie.original_title}),Object(a.jsx)("p",{className:"genre-id",children:this.props.movie.genre_ids[0]})]})}}]),n}(s.a.Component),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).deleteCurrentList=function(){document.querySelector(".movie-list").innerHTML=""},e.handleMovieData=function(t){e.setState({filmes:e.state.filmes.concat(t.results)}),console.log(e.state)},e.fetchFavorites=function(t){var n="https://api.themoviedb.org/3/discover/movie?api_key=52d3e97323f3329ba592b46f79041c81&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=".concat(t,"&primary_release_year=2019&page=1");fetch(n).then((function(e){return e.json()})).then((function(t){return e.handleMovieData(t)}))},e.suggestion=function(){var t=document.getElementsByClassName("rated"),n=Object(b.a)(t).map((function(e){return e.firstChild.nextSibling.nextSibling.innerText})),a=[],i=n.forEach((function(e){return a.push(parseInt(e))})),s=Object(b.a)(new Set(a));return e.deleteCurrentList(),s.forEach((function(t){return e.fetchFavorites(t)})),i},e.state={filmes:[]},e.handleClick=function(){window.location.reload(!0)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("");case 2:t=e.sent,this.setState({filmes:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.filmes;return Object(a.jsxs)("div",{className:"movie-container",children:[Object(a.jsxs)("div",{className:"movie-container-title",children:[Object(a.jsx)("h1",{children:"Movie List"}),Object(a.jsxs)("div",{className:"button-container",children:[Object(a.jsxs)("button",{className:"suggestion-button",onClick:this.suggestion,children:[Object(a.jsx)("i",{className:"fas fa-heart"}),"Make my day"]}),Object(a.jsxs)("button",{className:"load-button",onClick:this.handleClick,children:[Object(a.jsx)("i",{className:"fas fa-sync"}),"Reload Movies"]})]})]}),Object(a.jsx)("div",{className:"movie-list",children:e.map((function(e){return Object(a.jsx)(g,{movie:e})}))})]})}}]),n}(s.a.Component);var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("i",{className:"fas fa-film"}),"The Movie App"]})}),Object(a.jsx)(j,{}),Object(a.jsx)(x,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.e21c3bfb.chunk.js.map