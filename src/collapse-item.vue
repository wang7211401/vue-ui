<template>
    <div class="collapseItem">
        <div class="title" @click="open = !open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div> 
</template>

<script>
export default {
    name:'GvuiCollapseItem',
    props:{
        title:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            open:false
        }
    }
}
</script>
<style lang="scss" scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapseItem{
        > .title{
            border:1px solid $grey;
            margin-top:-1px;
            margin-left:-1px;
            margin-right:-1px;
            min-height:32px;
            display: flex;
            align-items: center;
            padding:0 8px;
        }
        &:fisrt-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius
            }
        }
        > .content{
            padding:8px;
        }
    }
</style>

