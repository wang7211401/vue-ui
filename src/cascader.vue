<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items class="popover" :items="source"
            :height="popoverHeight"
            :selected="selected"
            @update:selected="onUpdateSelected"></cascader-items> 
        </div>
    </div>
</template>
<script>
import CascaderItems from './cascader-items'
export default {
    name:'GvuiCascader',
    data(){
        return {
            popoverVisible:false
        }
    },
    components:{
        CascaderItems
    },
    props:{
        source:{
            type:Array
        },
        popoverHeight:{
            type:String
        },
        selected:{
            type:Array,
            default:() =>{ return []}
        }
    },
    methods:{
        onUpdateSelected(newSelected){
            console.log('selected',newSelected)
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'var';
    .cascader{
        position:relative;
        .trigger{
            border:1px solid red;
            height:32px;
            width:100px;
            border:1px solid black;
        }
        .popover-wrapper{
            position:absolute;
            top:100%;
            left:0;
            background: white;
            display: flex;
            @extend .box-shadow;
        }
    }
</style>

