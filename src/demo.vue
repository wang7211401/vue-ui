<template>
  <div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></g-table>
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
      dataSource:[
        {id:1,name:'张三',score:99},
        {id:2,name:'李四',score:98},
        {id:3,name:'王五',score:100},
        {id:4,name:'超人',score:99},
        {id:5,name:'蝙蝠侠',score:97},
        {id:6,name:'蜘蛛侠',score:98}
      ]
    }
  },
  methods:{}
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
