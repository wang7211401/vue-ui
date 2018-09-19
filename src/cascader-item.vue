<template>
    <div calss="cascaderItem">
        {{sourceItem.name}}
        <gvui-cascader-item v-if="sourceItem.children"
        v-for="(item,index) in sourceItem.children"
        :sourceItem="item"
        :key="index">
        </gvui-cascader-item>
    </div>
</template>
<script>
export default {
    name:'GvuiCascaderItem',
    props:{
        sourceItem:{
            type:Object
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .cascaderItem{
        border:1px solid red;
        margin:10px;
    }
</style>
