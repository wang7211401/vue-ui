<template>
  <div style="margin:20px;">
    <div>只能上传 300kb 以内的 png、jpeg</div>
    <g-uploader accept="image/*" method="POST" action="https://node-file.herokuapp.com/upload" name="file"
     :parseResponse="parseResponse" :file-list.sync="fileList" @update:fileList="yyy">
      <g-button icon="upload">上传</g-button>
     </g-uploader>
  </div>
   
</template>
<script>
import GUploader from "./uploader";
import GButton from './button/button'
export default {
  name: "demo",
  components: {
    GUploader,
    GButton
  },
  data(){
    return {
      fileList:[]
    }
  },
  methods:{
    parseResponse(response){
      let object = JSON.parse(response)
      let url = `https://node-file.herokuapp.com/preview/${object.filename}`
      return url
    },
    yyy(fileList){
      console.log('fileList')
      console.log(fileList)
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
