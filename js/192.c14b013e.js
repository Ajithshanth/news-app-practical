"use strict";(self["webpackChunknews_app"]=self["webpackChunknews_app"]||[]).push([[192],{3008:function(t,e,s){s.d(e,{Z:function(){return u}});var r=s(4324),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cursor-pointer mb-2",on:{click:function(e){return t.backToPrevious()}}},[e(r.Z,{staticClass:"-ml-2",attrs:{large:"",color:"black darken-4"}},[t._v(" mdi-arrow-left-circle ")]),e("span",[t._v(" Back ")])],1)},n=[],o={name:"BackComponent",methods:{backToPrevious(){this.$router.go(-1)}}},i=o,l=s(3736),c=(0,l.Z)(i,a,n,!1,null,null,null),u=c.exports},7192:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-8"},[e("BackComponent"),t._m(0),e("div",{staticClass:"pt-6"},[e("table",{staticClass:"table-auto w-full"},[t._m(1),e("tbody",t._l(t.browserHistory,(function(s,r){return e("tr",{key:r},[e("td",[t._v(t._s(s.path))]),e("td",[t._v(t._s(t.dateFormat(s.date)))])])})),0)])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"text-2xl text-indigo-600"},[t._v("Browser History")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"text-left"},[e("th",[t._v("Visited Headines")]),e("th",[t._v("Time")])])])}],n=s(4239),o=s(381),i=s.n(o),l=s(3008),c={name:"HistoryDetails",components:{BackComponent:l.Z},data:()=>({browserHistory:n.Z.state.browserHistory}),methods:{dateFormat(t){return i()(t).format(" hh:mm a - MMMM Do YYYY")}}},u=c,d=s(3736),f=(0,d.Z)(u,r,a,!1,null,null,null),_=f.exports}}]);
//# sourceMappingURL=192.c14b013e.js.map