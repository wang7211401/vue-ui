<template>
    <div>
        <div>
            <p>预览</p>
            <g-row class="demoRow">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
            </g-row>
            <p>代码</p>
            <pre><code>{{content}}</code></pre>
        </div>
        <div>
            <h2>设置 gutter</h2>
            <p>预览</p>
            <g-row class="demoRow" gutter="10">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>

            <g-row class="demoRow" gutter="10">
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>
            <p>代码</p>
            <pre><code>{{content2}}</code></pre>
        </div>
        <div>
            <h2>设置空隙</h2>
            <p>预览</p>
            <g-row class="demoRow" gutter="10">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8" offset="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>

            <g-row class="demoRow" gutter="10">
                <g-col span="6" offset="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6" offset="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>

            <g-row class="demoRow" gutter="10">
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4" offset="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4" offset="8">
                    <div class="demoCol">4</div>
                </g-col>
            </g-row>

            <g-row class="demoRow" gutter="10">
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
            </g-row>
            <p>代码</p>
            <pre><code>{{content3}}</code></pre>
        </div>
    </div> 
</template>
<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  },
  data() {
    return {
      content: `
           * {
                box-sizing: border-box;
            }

            <g-row class="demoRow">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
            </g-row>
            <g-row class="demoRow">
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
            </g-row>
            `.replace(/^ {12}/gm, '').trim(),
            content2:`
            * {
                box-sizing: border-box;
            }

            <g-row class="demoRow" gutter="10">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>

            <g-row class="demoRow" gutter="10">
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>`.replace(/^ {12}/gm, '').trim(),
            content3:`
            * {
                box-sizing: border-box;
            }

            <g-row class="demoRow" gutter="10">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8" offset="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>
            <g-row class="demoRow" gutter="10">
                <g-col span="6" offset="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6" offset="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>
            <g-row class="demoRow" gutter="10">
                <g-col span="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4" offset="4">
                    <div class="demoCol">4</div>
                </g-col>
                <g-col span="4" offset="8">
                    <div class="demoCol">4</div>
                </g-col>
            </g-row>
            <g-row class="demoRow" gutter="10">
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2">
                    <div class="demoCol">2</div>
                </g-col>
                <g-col span="2" offset="2">
                    <div class="demoCol">2</div>
                </g-col>
            </g-row>`.replace(/^ {12}/gm, '').trim()
    };
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
