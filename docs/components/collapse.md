---
title: Collapse
---
 # Collapse

 使用方法


<collapse-demos></collapse-demos>

代码

``` js
<g-collapse single :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    <g-collapse-item title="标题4" name="4">内容4</g-collapse-item>
</g-collapse>

export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item':CollapseItem
    },
    data(){
        return {
            selectedTab:['3','4']
        }
    },
}
```
