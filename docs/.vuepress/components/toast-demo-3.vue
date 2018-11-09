<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
     <div>
      <g-button @click="onClickButton">中间弹出</g-button>
    </div>
     <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .g-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
 </style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button'
  import Vue from 'vue'
   Vue.use(plugin)
   export default {
    components: {GButton},
    data () {
      return {
        content: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>
           <div>
            <g-button @click="onClickButton">中间弹出</g-button>
          </div>
           methods: {
            onClickButton () {
              this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                enableHtml: true
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true,
          position:'middle'
        })
      }
    },
  }
</script> 