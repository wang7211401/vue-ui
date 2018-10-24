<template>
    <div class="cascaderItem">
        <div class="cascaderItem" :style="{height:height}">
            <div class="left">
                <div class="label" v-for="(item,index) in items" 
                :key="index"
                @click="onClickLabel(item)">
                    <span class="name">{{item.name}}</span>
                    <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
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
        loadData:{
            type:Function
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
    updated(){
    },
    computed:{
        rightItems(){
            if(this.selected && this.selected[this.level]){
                let selected = this.items.filter(item => item.name === this.selected[this.level].name)
                if(selected && selected[0].children && selected[0].children.length > 0){
                    return selected[0].children
                }
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
            this.$emit('update:selected',newSelected)
        },
        rightArrowVisible(item){
            console.log(this.loadData)
            return this.loadData ? !item.isLeaf : item.children
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
       .left{
           height:100%;
           padding:.3em 0;
           overflow: auto;
       }
       .right{
           height:100%;
           border-left:1px solid $border-color-light;
       }
       .label{
           padding:.5em 1em;
           display: flex;
           align-items:center;
           cursor: pointer;
           white-space: nowrap;
           &:hover{
               background: $grey;
           }
           > .name{
               margin-right:1em;
               user-select: none;
           }
           .icon{
               margin-left:auto;
               transform: scale(0.5)
           }
            
       }
    }
</style>
