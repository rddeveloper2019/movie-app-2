(this["webpackJsonpblank-app"]=this["webpackJsonpblank-app"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(10),r=c.n(s),i=(c(16),c(2)),l=c(4),o=c(6),h=c(5),j=c(8),d=c.n(j),b=c(11),m=function e(){var t=this;Object(i.a)(this,e),this.getFilmsByName=function(){var e=Object(b.a)(d.a.mark((function e(c,a){var n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"all"===a&&(n=""),n="&type=".concat(a),e.next=4,fetch("http://www.omdbapi.com/?apikey=".concat(t._apiKey,"&s=").concat(c).concat(n));case 4:if(s=e.sent){e.next=7;break}throw new Error("didnt fetch");case 7:return e.next=9,s.json();case 9:return r=e.sent,e.next=12,r.Search;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this._urlApi="http://www.omdbapi.com/?apikey=",this._apiKey="50dde62f"},u=c(0);function p(){return Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"indeterminate"})})}var O=c(9);function x(e){var t=e.Year,c=e.imdbID,a=e.Type,n=e.Poster,s=e.Title,r="N/A"===n?"https://via.placeholder.com/468x400?text=".concat(s):n;return Object(u.jsx)("div",{className:"row",id:c,children:Object(u.jsx)("div",{className:"col s12 m7",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"card-image",children:[Object(u.jsx)("img",{src:r,alt:s}),Object(u.jsx)("span",{className:"card-title",children:s})]}),Object(u.jsx)("div",{className:"card-content",children:Object(u.jsxs)("p",{children:[t," ",Object(u.jsx)("span",{className:"right",children:a})]})})]})})})}function f(e){var t=e.films,c=void 0===t?[]:t;return Object(u.jsx)("div",{className:"container movies",children:c.length?c.map((function(e){return Object(a.createElement)(x,Object(O.a)(Object(O.a)({},e),{},{key:e.imdbID}))})):Object(u.jsx)("h4",{children:"Nothing found"})})}var v=c(3),g=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",category:"",checked:"all"},e.searchFunc=function(t){e.setState({search:t.target.value})},e.searchFilm=function(t){"Enter"===t.key&&e.props.searchFilms(e.state.search,e.state.category)},e.handleFilter=function(t){e.setState({category:t,checked:t},(function(){e.props.searchFilms(e.state.search,e.state.category)}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e,t=this;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"search",className:"validate",placeholder:"search",value:this.state.search,onChange:this.searchFunc,onKeyDown:this.searchFilm}),Object(u.jsx)("button",{className:"btn search-btn",onClick:function(){t.props.searchFilms(t.state.search,t.state.category)},children:"Search"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",(e={name:"category",type:"radio",checked:!0},Object(v.a)(e,"checked","all"===this.state.checked),Object(v.a)(e,"onChange",(function(){t.handleFilter("all")})),e)),Object(u.jsx)("span",{children:"All"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{name:"category",type:"radio",checked:"movie"===this.state.checked,onChange:function(){t.handleFilter("movie")}}),Object(u.jsx)("span",{children:"Movies"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{name:"category",type:"radio",checked:"series"===this.state.checked,onChange:function(){t.handleFilter("series")}}),Object(u.jsx)("span",{children:"Series"})]})]})]})})}}]),c}(a.Component),y=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={films:[],search:"",loading:!0},e.getFilms=new m,e.getFilmsByName=function(t,c){e.setState({loading:!0}),e.getFilms.getFilmsByName(t,c).then((function(t){e.setState({films:t,loading:!1})}))},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.getFilms.getFilmsByName("movie","all").then((function(t){e.setState({films:t,loading:!1})}))}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this.state,t=e.films,c=e.loading?Object(u.jsx)(p,{}):Object(u.jsx)(f,{films:t});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{searchFilms:this.getFilmsByName}),Object(u.jsx)("div",{children:c})]})}}]),c}(a.Component);function N(){return Object(u.jsx)("nav",{className:"green darken-1",children:Object(u.jsxs)("div",{className:"nav-wrapper",children:[Object(u.jsx)("a",{href:"!#",className:"brand-logo",children:"React Movies"}),Object(u.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function k(){return Object(u.jsx)("footer",{className:"page-footer green lighten-4",children:Object(u.jsx)("div",{className:"footer-copyright",children:Object(u.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(u.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}c(19);var F=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(y,{}),Object(u.jsx)(k,{})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4952439b.chunk.js.map