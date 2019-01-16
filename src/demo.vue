<template>
  <div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
      @update:orderBy="x" :loading="loading" height="400px"></g-table>
    </div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
  </div>
   
</template>
<script>
import GTable from "./table";

export default {
  name: "demo",
  components: {
    GTable
  },
  data(){
    return {
      currentPage: 1,
      selected:[],
      columns:[
        {text:'姓名',field:'name'},
        {text:'分数',field:'score'}
      ],
      orderBy:{
        score:'desc'
      },
      loading:false,
      dataSource:[
        {id:1,name:'张三',score:99},
        {id:2,name:'李四',score:98},
        {id:3,name:'王五',score:100},
        {id:4,name:'超人',score:99},
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
    x(){
      this.loading = true
      setTimeout(()=>{
        this.dataSource = this.dataSource.sort((a,b)=> a.score - b.score)
        this.loading = false
      },2000)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    background:white;
}
</style>
