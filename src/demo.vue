<template>
    <div id="app">
       <div style="margin-top:200px;">
            <g-popover>
                <g-button>上方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="bottom">
                <g-button>下方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="left">
                <g-button>左边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="right">
                <g-button>右边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>
            
            <g-popover position="top">
                <g-button>弹出内容点击关闭</g-button>
                <template slot="content" slot-scope="{close}">
                    弹出内容 | <g-button @click="close">关闭</g-button>
                </template>
            </g-popover>
        </div>
        <div>
            <h2>将触发方式改为 hover</h2>
            <p>预览</p>
            <g-popover trigger="hover">
                <g-button>上方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="bottom" trigger="hover">
                <g-button>下方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="left" trigger="hover">
                <g-button>左边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="right" trigger="hover">
                <g-button>右边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>
        </div>
    </div>
</template>
<script>
import Popover from "./popover.vue";
import Button from "./button/button.vue";

export default {
  name: "demo",
  components: {
    "g-popover": Popover,
    "g-button": Button,
  }
};
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
