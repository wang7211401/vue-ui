---
title: Slides
---
 # Slides

 使用方法

<slides-demos></slides-demos>

代码

``` js
<template>
    <div id="app">
      <g-slides class="wrapper" width="100%" height="200px" :selected.sync="selected">
        <g-slides-item name="1">
          <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="2">
          <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="3">
          <div class="box">3</div>
        </g-slides-item>
      </g-slides>
    </div>
</template>

export default {
    components: {
        GSlides,
        GSlidesItem
    },
    data() {
        return {
            selected: undefined
        };
    }
}
```