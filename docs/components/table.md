---
title: Table
---
 # Table

基础表格

<table-demo-1></table-demo-1>

代码

``` js
<template>
    <div>
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false" :height="400"></g-table>
    </div>
</template>
<script>
import GTable from "../../../src/table";
export default {
  components: {
    GTable
  },
  data(){
    return {
      columns:[
        {text:'姓名',field:'name',width:100},
        {text:'分数',field:'score'}
      ],
      dataSource:[
        {id:1,name:'张三',score:99,description:'描述内容'},
        {id:2,name:'李四',score:98,description:'描述内容'},
        {id:3,name:'王五',score:100,description:'描述内容'},
        {id:4,name:'超人',score:99,description:'描述内容'},
        {id:5,name:'蝙蝠侠',score:97},
        {id:6,name:'蜘蛛侠',score:98},
        {id:7,name:'王五',score:100},
        {id:8,name:'超人',score:99},
        {id:9,name:'蝙蝠侠',score:97},
        {id:10,name:'蜘蛛侠',score:98},
        {id:11,name:'张三',score:99},
        {id:12,name:'李四',score:98},
        {id:13,name:'王五',score:100},
        {id:14,name:'超人',score:99},
        {id:15,name:'蝙蝠侠',score:97},
        {id:16,name:'蜘蛛侠',score:98},
        {id:17,name:'王五',score:100},
        {id:18,name:'超人',score:99},
        {id:19,name:'蝙蝠侠',score:97},
        {id:20,name:'蜘蛛侠',score:98}
      ]
    }
  }
}
</script>
```

选择表格、固定表头

<table-demo-2></table-demo-2>

代码

``` js
<template>
<div>   
    <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
    @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable numberVisible>
        <template slot-scope="xxx">
            <button @click="edit(xxx.item)">编辑</button>
            <button @click="view(xxx.item)">查看</button>
            <button @click="del(xxx.item)">删除</button>
        </template>
    </g-table>
</div>
</template>
export default {
  components: {
    GTable
  },
  data(){
    return {
      selected:[],
      columns:[
        {text:'姓名',field:'name',width:100},
        {text:'分数',field:'score'}
      ],
      orderBy:{
        score:'desc'
      },
      loading:false,
      dataSource:[
        {id:1,name:'张三',score:99,description:'描述内容'},
        {id:2,name:'李四',score:98,description:'描述内容'},
        {id:3,name:'王五',score:100,description:'描述内容'},
        {id:4,name:'超人',score:99,description:'描述内容'},
        {id:5,name:'蝙蝠侠',score:97},
        {id:6,name:'蜘蛛侠',score:98},
        {id:7,name:'王五',score:100},
        {id:8,name:'超人',score:99},
        {id:9,name:'蝙蝠侠',score:97},
        {id:10,name:'蜘蛛侠',score:98},
        {id:11,name:'张三',score:99},
        {id:12,name:'李四',score:98},
        {id:13,name:'王五',score:100},
        {id:14,name:'超人',score:99},
        {id:15,name:'蝙蝠侠',score:97},
        {id:16,name:'蜘蛛侠',score:98},
        {id:17,name:'王五',score:100},
        {id:18,name:'超人',score:99},
        {id:19,name:'蝙蝠侠',score:97},
        {id:20,name:'蜘蛛侠',score:98}
      ]
    }
  },
  methods:{
    edit(item){
      alert(`开始编辑${item.id}`)
    },
    view(item){
      alert(`开始查看${item.id}`)
    },
    del(item){
      alert(`开始删除${item.id}`)
    },
    x(){
      this.loading = true
      setTimeout(()=>{
        this.dataSource = this.dataSource.sort((a,b)=> a.score - b.score)
        this.loading = false
      },2000)
    }
  }
}
```


