<template>
    <div id="app" style="padding:100px;">
      <div style="padding:20px;">
            <g-cascader :source.sync="source" popover-height="200px"
            @update:source="onUpdateSource"
            @update:selected="onUpdateSelected"
            :selected.sync="selected" :load-data="loadData"></g-cascader>
      </div>
      <div style="padding-top: 16px;">
        <h2>Toast</h2>
        <p>
          <strong>预览</strong>
        </p>
        <div>
          <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        </div>
        <p>
          <strong>代码</strong>
        </p>
      </div>
    </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
import plugin from './plugin'
import db from "./db";
import {removeListener} from './click-outside'
import Vue from 'vue'
Vue.use(plugin)


function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node =>{
        if(db.filter(item => item.parent_id === node.id).length > 0){
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
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
      // source: [
      //   {
      //     name: "浙江",
      //     children: [
      //       {
      //         name: "杭州",
      //         children: [{ name: "上城" }, { name: "下城" }, { name: "杭州" }]
      //       },
      //       {
      //         name: "嘉兴",
      //         children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
      //       }
      //     ]
      //   },
      //   {
      //     name: "福建",
      //     children: [
      //       {
      //         name: "福州",
      //         children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
      //       }
      //     ]
      //   }
      // ],
      source: [],
    };
  },
  created() {
    ajax().then(result => {
      this.source = result;
    });
  },
  destroyed(){
    removeListener()
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result);
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
.gulu-toast {
  z-index: 30 !important;
}
</style> 