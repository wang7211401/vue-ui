<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'GvuiCollapse',
    props:{
        single:{
            type:Boolean,
            default:false
        },
        seleted:{
            type:String
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        if(this.single){
            return {
                eventBus:this.eventBus
            }
        }
    },
    mounted(){
        this.eventBus.$emit('update:seleted',this.seleted)
        this.eventBus.$on('update:selected',(name)=>{
            this.$emit('update:selected',name)
        })
    }
}
</script>
<style lang="scss" scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapse{
        border:1px solid $grey;
        border-radius:$border-radius;
    }
</style>
