<template>
    <div id="app" style="padding:100px;">
        <p>{{selected}}</p>
       <g-cascader :source="source" popover-height="200px"
       :selected.sync="selected"></g-cascader>
    </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "杭州" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style> 