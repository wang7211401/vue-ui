<template>
  <div style="margin:20px;">
    <div>只能上传 2MB 以内的 png、jpeg</div>
    <g-uploader accept="image/*" method="POST" action="https://node-file.herokuapp.com/upload" name="file"
     :parseResponse="parseResponse" :file-list.sync="fileList"
     @error="alert" :size-limit="2*1024*1024">
      <g-button icon="upload">上传</g-button>
    </g-uploader>
  </div>
   
</template>
<script>
import GUploader from "../../../src/uploader";
import GButton from '../../../src/button/button'
export default {
  components: {
    GUploader,
    GButton
  },
  data(){
    return {
      fileList:[],
      error:''
    }
  },
  methods:{
    alert(error){
      window.alert(error || '上传失败')
    },
    parseResponse(response){
      let object = JSON.parse(response)
      let url = `https://node-file.herokuapp.com/preview/${object.id}`
      return url
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    background:white;
}
</style>
