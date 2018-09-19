<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="(item,index) in source" :key="index">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div>
    </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
    name:'GvuiCascader',
    data(){
        return {

        }
    },
    components:{
        CascaderItem
    },
    props:{
        source:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'var';
    .cascader{
        
    }
</style>

