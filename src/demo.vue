<template>
<div class="page" style="position:relative;">
  <g-date-range-picker :value="d" @input="d = $event" :scope="scope"></g-date-range-picker>
  <p>其他内容</p>

  <g-date-picker :value="value" @input="value = $event"></g-date-picker>
</div> 
</template>
<script>
import GDatePicker from './date-picker/date-picker'
import GDateRangePicker from './date-picker/date-range-picker'

export default {
  name: "demo",
  components: {
    GDatePicker,
    GDateRangePicker
  },
  data(){
    return {
      d:[],
      value:new Date(),
      scope:[new Date(1958,1),new Date(2119,12)]
    }
  },
  mounted(){
   
  },
  methods:{
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
img{
  max-width:100%;
  vertical-align: middle;
}
.page{
  display: flex;
  justify-content: center;
  padding: 100px;
}
.parent{
  height:400px;
  overflow: hidden;
  width:400px;
  border:5px solid red;
  box-sizing:border-box;
}
.child{
  border:5px solid green;
  box-sizing:border-box;
}
.test{
  height:100px;
  width:100px;
  border:1px solid red;
  position:absolute;
  top:0;
  left:0;
  z-index:1;
}
.hide{
  transform:translateX(-9999px)
}
</style>
