<template>
    <div class="cascaderItem">
        <div class="cascaderItem" :style="{height:height}">
            <div class="left">
                <div class="label" v-for="(item,index) in items" 
                :key="index"
                @click="onClickLabel(item)">
                    {{item.name}}
                    <icon class="icon" v-if="item.children" name="right"></icon>
                </div>
            </div>
            <div class="right" v-if="rightItems">
                <gvui-cascader-items :items="rightItems" ref="right"
                :height="height"
                :level="level + 1" :selected="selected" @update:selected="onUpdateSelected">
                </gvui-cascader-items>
            </div>  
        </div>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    name:'GvuiCascaderItems',
    props:{
        items:{
            type:Array
        },
        height:{
            type:String
        },
        selected:{
            type:Array,
            default:() => ([])
        },
        level:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        rightItems(){
            let currentSelected = this.selected[this.level]
            if(currentSelected && currentSelected.children){
                return currentSelected.children
            }else{
                return null
            }
        }
    },
    components:{Icon},
    methods:{
        onClickLabel(item){
            let copy = JSON.parse(JSON.stringify(this.selected));
            copy[this.level] = item
            copy.splice(this.level + 1)
            this.$emit('update:selected',copy)
        },
        onUpdateSelected(newSelected){
            console.log('newSelected',newSelected)
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "var";
    .cascaderItem{
       display: flex;
       justify-content: flex-start;
       align-items: center;
       border:1px solid red;
       .left{
           height:100%;
           padding:.3em 0;
       }
       .right{
           height:100%;
           border-left:1px solid $border-color-light;
       }
       .label{
           padding:.3em 1em;
           display: flex;
           align-items:center;
           .icon{
               margin-left:1em;
               transform: scale(.5)
           }
       }
    }
</style>
