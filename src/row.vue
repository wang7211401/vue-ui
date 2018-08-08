<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GvuiRow',
    props:{
        gutter:{
            type:[Number,String]
        },
        align:{
            type:String,
            validator(value){
                console.log(value)
                return ['left','center','right'].includes(value)
            }
        }
    },
    computed:{
        rowStyle(){
            let {gutter} =this
            return{
                marginLeft:-gutter/2 + 'px',marginRight:-gutter/2 + 'px'
            }
        },
        rowClass(){
            let {align} = this
            return [align && `align-${align}`]
        }
    },
    mounted(){
        this.$children.forEach(vm =>{
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
        justify-content:flex-start;
    }
    &.align-center{
        justify-content:center;
    }
    &.align-right{
        justify-content:flex-end;
    }
}
</style>

