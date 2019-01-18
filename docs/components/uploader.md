---
title: Uploader
---
 # Uploader

单文件上传

<uploader-demo-1></uploader-demo-1>

代码

``` js
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
```

多文件上传

<uploader-demo-2></uploader-demo-2>

代码

```js
<template>
  <div style="margin:20px;">
    <div>只能上传 2MB 以内的 png、jpeg</div>
    <g-uploader accept="image/*" method="POST" action="https://node-file.herokuapp.com/upload" name="file"
     :parseResponse="parseResponse" :file-list.sync="fileList"
     @error="alert" :size-limit="2*1024*1024" multiple>
      <g-button icon="upload">上传</g-button>
    </g-uploader>
  </div>
   
</template>
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
```