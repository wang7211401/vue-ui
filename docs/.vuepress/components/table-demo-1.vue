<template>
    <div>
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false" numberVisible></g-table>
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
  },
}
</script>
