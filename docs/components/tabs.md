---
title: Tabs
---
 # Tabs

简单用法

<tabs-demos></tabs-demos>

代码

``` js
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

 data:{
    selected: '1'
 }
```
