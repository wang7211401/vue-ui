<template>
    <div class="cascaderItem">
        <div class="cascaderItem" :style="{height:height}">
            <div class="left">
                <div class="label" v-for="(item,index) in items" 
                :key="index"
                @click="leftSelected = item">
                    {{item.name}}
                    <icon class="icon" v-if="item.children" name="right"></icon>
                </div>
            </div>
            <div class="right" v-if="rightItems">
                <gvui-cascader-items :items="rightItems"
                :height="height">
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
        }
    },
    data(){
        return {
            leftSelected:null
        }
    },
    computed:{
        rightItems(){
            if(this.leftSelected && this.leftSelected.children){
                return this.leftSelected.children
            }else{
                return null
            }
        }
    },
    components:{Icon}
}
</script>
<style lang="scss" scoped>
    @import "var";
    .cascaderItem{
       display: flex;
       justify-content: flex-start;
       align-items: center;
       .left{
           border:1px solid red;
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
