(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{237:function(e,n,o){},291:function(e,n,o){"use strict";var t=o(237);o.n(t).a},325:function(e,n,o){"use strict";o.r(n);o(210);var t={components:{GTable:o(261).a},data:function(){return{selected:[],columns:[{text:"姓名",field:"name",width:100},{text:"分数",field:"score"}],orderBy:{score:"desc"},loading:!1,dataSource:[{id:1,name:"张三",score:99,description:"描述内容"},{id:2,name:"李四",score:98,description:"描述内容"},{id:3,name:"王五",score:100,description:"描述内容"},{id:4,name:"超人",score:99,description:"描述内容"},{id:5,name:"蝙蝠侠",score:97},{id:6,name:"蜘蛛侠",score:98},{id:7,name:"王五",score:100},{id:8,name:"超人",score:99},{id:9,name:"蝙蝠侠",score:97},{id:10,name:"蜘蛛侠",score:98},{id:11,name:"张三",score:99},{id:12,name:"李四",score:98},{id:13,name:"王五",score:100},{id:14,name:"超人",score:99},{id:15,name:"蝙蝠侠",score:97},{id:16,name:"蜘蛛侠",score:98},{id:17,name:"王五",score:100},{id:18,name:"超人",score:99},{id:19,name:"蝙蝠侠",score:97},{id:20,name:"蜘蛛侠",score:98}]}},methods:{edit:function(e){alert("开始编辑".concat(e.id))},view:function(e){alert("开始查看".concat(e.id))},del:function(e){alert("开始删除".concat(e.id))},x:function(){var e=this;this.loading=!0,setTimeout(function(){e.dataSource=e.dataSource.sort(function(e,n){return e.score-n.score}),e.loading=!1},2e3)}}},i=(o(291),o(1)),c=Object(i.a)(t,function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("g-table",{attrs:{columns:e.columns,"data-source":e.dataSource,bordered:"","selected-items":e.selected,"order-by":e.orderBy,loading:e.loading,height:400,"expend-field":"description",checkable:"",numberVisible:""},on:{"update:selectedItems":function(n){e.selected=n},"update:orderBy":[function(n){e.orderBy=n},e.x]},scopedSlots:e._u([{key:"default",fn:function(n){return[o("button",{on:{click:function(o){e.edit(n.item)}}},[e._v("编辑")]),e._v(" "),o("button",{on:{click:function(o){e.view(n.item)}}},[e._v("查看")]),e._v(" "),o("button",{on:{click:function(o){e.del(n.item)}}},[e._v("删除")])]}}])})],1)},[],!1,null,null,null);c.options.__file="table-demo-2.vue";n.default=c.exports}}]);