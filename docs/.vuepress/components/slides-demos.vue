
<template>
    <div id="app">
      <g-slides class="wrapper" width="100%" height="200px" :selected.sync="selected">
        <g-slides-item name="1">
          <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="2">
          <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="3">
          <div class="box">3</div>
        </g-slides-item>
      </g-slides>
    </div>
</template>
<script>
import GSlides from "../../../src/slides/slides";
import GSlidesItem from "../../../src/slides/slides-item";
export default {
    components: {
        GSlides,
        GSlidesItem
    },
    data() {
        return {
            selected: undefined
        };
    }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper{
  /* margin:40px; */
}
.box{
  width:100%;
  height:350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:30px;
}
</style> 
