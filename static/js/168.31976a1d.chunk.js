"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o=t(555),p={},f=t(184);function l(){var e=(0,i.UO)().movieId,n=(0,s.useState)([]),t=(0,a.Z)(n,2),u=t[0],l=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Hu)(e);case 3:t=n.sent,l(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),0===u.length?(0,f.jsx)("h3",{children:"No Reviews."}):(0,f.jsx)("ul",{className:p.styledList,children:u.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,f.jsxs)("li",{className:p.itemList,children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Author:"})," ",t]}),(0,f.jsx)("p",{className:p.descr,children:r})]},n)}))})}},555:function(e,n,t){t.d(n,{Df:function(){return i},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="004d8f1526603c0871e94599cf2fa833",i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.31976a1d.chunk.js.map