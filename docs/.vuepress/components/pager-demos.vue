<template>
   <div style="margin:20px;">
       <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
   </div>
</template>
<script>
import GPager from "../../../src/pager";

export default {
  name: "demo",
  components: {
    GPager
  },
  data(){
    return {
      currentPage: 1
    }
  }
};
</script>