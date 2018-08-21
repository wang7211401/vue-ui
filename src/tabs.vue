<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'GvuiTabs',
    props:{
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return {
            eventBus:new Vue()
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    mounted(){ 
        // this.$emit('update:selected','this emit 出来的数据')
        this.$children.forEach(vm=>{
            if(vm.$options.name === 'GvuiTabsHead'){
                vm.$children.forEach(childVm =>{
                    if(childVm.$options.name === 'GvuiTabsItem' && childVm.name === this.selected){
                        this.eventBus.$emit('update:selected',this.selected,childVm)
                    }
                })
            }
        })
    }
}
</script>
<style>
    .tabs{
        
    }
</style>