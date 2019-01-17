<template>
    <div class="g-uploader">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <ol class="g-uploader-fileList">
            <li v-for="file in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    <g-icon name="loading" class="g-uploader-spin"></g-icon>
                </template>
                <template v-else-if="file.type.indexOf('image') === 0">
                   <img class="g-uploader-image" :src="file.url" width="32" height="32" alt="">
                </template>
                <template v-else>
                    <div class="g-uploader-defaultImage"></div>
                </template>
                
                <span class="g-uploader-name" :class="{[file.status]:file.status}">{{file.name}}</span>
                <button class="g-uploader-remove" @click="onRemoveFile(file)">X</button>
            </li>
        </ol>
        <div ref="temp" style="width:0;height:0;overflow:hidden;"></div> 
    </div>
</template>
<script>
import GIcon from './icon'
export default {
    name:'GUploader',
    components:{GIcon},
    props:{
        name:{
            type:String,
            required:true
        },
        action:{
            type:String,
            required:true
        },
        method: {
            type:String,
            default:'POST'
        },
        parseResponse:{
            type:Function,
            required:true
        },
        fileList:{
            type:Array,
            default:() => []
        }
    },
    data(){
        return {
            url:'about:blank'
        }
    },
    methods:{
        onClickUpload(){
            let input = this.createInput()
            input.addEventListener('change',()=>{
                this.updateFile(input.files[0])
                input.remove()
            })
            input.click()
        },
        onRemoveFile(file){
            let answer = window.confirm('确定要删除吗？')
            if(answer){
                let copy = [...this.fileList]
                let index = copy.indexOf(file)
                copy.splice(index,1)
                this.$emit('update:fileList',copy)
            }
        },
        beforeUploadFile(file,newName,url){
            let {size,type} = file
            this.$emit('update:fileList',[...this.fileList,{name:newName,type,size,status:'uploading'}])
        },
        afterUploadFile(newName,url){
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let fileCopy = JSON.parse(JSON.stringify(file))
            fileCopy.url = url
            fileCopy.status = 'success'
            let fileListCopy = [...this.fileList]
            fileListCopy.splice(index,1,fileCopy)
            this.$emit('update:fileList',fileListCopy)
        },
        updateFile(file){
            let {name,size,type} = file
            let newName = this.generateName(name)
            this.beforeUploadFile(file,newName)
            let formData = new FormData()
            formData.append(this.name,file)
            this.doUploadFile(formData,(response)=>{
                let url = this.parseResponse(response)
                this.url = url
                this.afterUploadFile(newName,url)
            },()=>{
                this.uploadError(newName)
            })
        },
        uploadError(newName){
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let fileCopy = JSON.parse(JSON.stringify(file))
            fileCopy.status = 'fail'
            let fileListCopy = [...this.fileList]
            fileListCopy.splice(index,1,fileCopy)
            this.$emit('update:fileList',fileListCopy)
        },
        generateName(name){
            while(this.fileList.filter(f => f.name === name).length > 0){
                let dotIndex = name.lastIndexOf('.')
                let nameWithoutExtension = name.substr(0,dotIndex)
                let extension = name.substr(dotIndex)
                name = nameWithoutExtension + '(1)' + extension
            }
            return name
        },
        doUploadFile(formData,success,fail){
            let xhr = new XMLHttpRequest()
            xhr.open(this.method,this.action)
            xhr.onload = ()=>{
                success(xhr.response)
                // if(Math.random() > 0.5){
                //     success(xhr.response)
                // }else{
                //     fail()
                // }
            }
            xhr.send(formData)
        },
        createInput(){
            let input = document.createElement('input');
            input.type="file"
            this.$refs.temp.appendChild(input)
            return input
        }
    }
    
}
</script>
<style lang="scss" scoped>
    @import "var";
    .g-uploader{
        &-fileList{
            list-style: none;
            > li{
                display: flex;
                align-items:center;
                margin:8px 0;
                border:1px solid darken($grey,10%);
            }
        }
        &-defaulImage{
            width:32px;
            height:32px;
            margin-right:8px;
        }
        &-image{
            margin-right:8px;
            border:none;
        }
        &-name{
            margin-right:auto;
            &.success{
                color:green;
            }
            &.fail{
                color:red;
            }
        }
        &-remove{
            width:32px;
            height:32px;
        }
        &-spin{
            width:32px;
            height:32px;
            @include spin
        }
    }

</style>

