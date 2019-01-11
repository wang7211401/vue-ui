---
title: Pager
---
 # Pager


预览

<pager-demos></pager-demos>

代码

```js
<div style="margin:20px;">
    <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
</div>

export default {
  components: {
    GPager
  },
  data(){
    return {
      currentPage: 1
    }
  }
};
```