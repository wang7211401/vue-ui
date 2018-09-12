<template>
    <div>
        <div>
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

            <pre><code>{{code}}</code></pre>
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
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    "g-popover": Popover,
    "g-button": Button,
  },
  data(){
    return {
        code:`
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
        `.replace(/^\t+| +/g, '').trim()
    }
  }
};
</script>