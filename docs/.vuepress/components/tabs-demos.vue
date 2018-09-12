<template>
    <div>
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">标题1</g-tabs-item>
                <g-tabs-item name="2">标题2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容 1</g-tabs-pane>
                <g-tabs-pane name="2">内容 2</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div> 
</template>
<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-pane": TabsPane,
  },
  data() {
    return {
      selected: '1'
    };
  }
};
</script>
