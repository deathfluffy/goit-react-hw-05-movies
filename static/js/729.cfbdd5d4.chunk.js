"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{295:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(689),a=r(87),u={filmList:"FilmList_filmList__-Jt7D",filmItem:"FilmList_filmItem__0hLrq",filmTitle:"FilmList_filmTitle__Qz0ui"},c=r(184);function s(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{className:u.filmList,children:t.map((function(e){var t=e.id,n=e.poster_path,s=e.original_title;return(0,c.jsx)("li",{className:u.filmItem,children:(0,c.jsxs)(a.rU,{state:{from:r},to:"/movies/".concat(t),children:[(0,c.jsx)("img",{className:u.filmImg,src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:s,width:"450",height:"450"}),(0,c.jsx)("p",{className:u.filmTitle,children:s})]})},t)}))})}},729:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(87),o=r(555),f={},l=r(184);function p(e){var t=e.setSearchParams,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];(0,s.useEffect)((function(){var e=localStorage.getItem("searchQuery");e&&(c(e),t({query:e}))}),[t]);return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u}),localStorage.setItem("searchQuery",u)},children:[(0,l.jsx)("input",{className:f.inputSearch,type:"text",placeholder:"Name movie",autoFocus:!0,value:u,onChange:function(e){var t=e.target.value;c(t)}}),(0,l.jsx)("button",{className:f.searchButton,type:"submit",disabled:!u,children:"Search"})]})}var m=r(295);function v(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],f=(0,i.lr)(),v=(0,a.Z)(f,2),h=v[0],d=v[1];return(0,s.useEffect)((function(){var e=h.get("query");if(e){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Ph)(e);case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[h]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{setSearchParams:d}),r.length>0&&(0,l.jsx)(m.Z,{movies:r})]})}},555:function(e,t,r){r.d(t,{Df:function(){return i},Eb:function(){return l},Hu:function(){return p},Pg:function(){return f},Ph:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="004d8f1526603c0871e94599cf2fa833",i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=729.cfbdd5d4.chunk.js.map