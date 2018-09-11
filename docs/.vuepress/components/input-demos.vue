<template>
    <div>
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>
        <p>代码</p>
        <pre><code>{{content}}</code></pre>
        <h2>双向绑定</h2>
        <g-input v-model="value"></g-input>
        <div>
            value:{{value}}
        </div>
    </div> 
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      value: "1",
      content: `
            <g-input value="中文"></g-input>
            <g-input value="中文" disabled></g-input>
            <g-input value="中文" readonly></g-input>
            `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>
