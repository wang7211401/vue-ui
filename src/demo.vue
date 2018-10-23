<template>
    <div id="app" style="padding:100px;">
        <div style="padding:20px;">
              <g-cascader :source.sync="source" popover-height="200px"
              @update:source="onUpdateSource"
              @update:selected="onUpdateSelected"
              :selected.sync="selected" :load-data="loadData"></g-cascader>
        </div>
    </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
import db from "./db";

function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      resolve(result);
    }, 300);
  });
}

export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      //   source: [
      //     {
      //       name: "浙江",
      //       children: [
      //         {
      //           name: "杭州",
      //           children: [{ name: "上城" }, { name: "下城" }, { name: "杭州" }]
      //         },
      //         {
      //           name: "嘉兴",
      //           children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
      //         }
      //       ]
      //     },
      //     {
      //       name: "福建",
      //       children: [
      //         {
      //           name: "福州",
      //           children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
      //         }
      //       ]
      //     }
      //   ],
      source: []
    };
  },
  created() {
    ajax().then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result);
      });
    },
    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(
          item => item.id === this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
      });
    },
    onUpdateSource() {},
    onUpdateSelected() {}
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