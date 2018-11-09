<template>
    <div>
        <g-cascader :source.sync="source" popover-height="200px"
            @update:source="onUpdateSource"
            @update:selected="onUpdateSelected"
            :selected.sync="selected" :load-data="loadData">
        </g-cascader>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
import Button from "../../../src/button";
import Cascader from "../../../src/cascader";
import db from "../../../src/db.js";
import {removeListener} from '../../../src/click-outside.js'


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
      source: [],
      content:`<div id="app" style="padding:20px;">
            <g-cascader :source.sync="source" popover-height="200px"
            @update:source="onUpdateSource"
            @update:selected="onUpdateSelected"
            :selected.sync="selected" :load-data="loadData"></g-cascader>
        </div>
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
                }
            }
        }
      `.replace(/^ {8}/gm, '').trim()
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
          
    