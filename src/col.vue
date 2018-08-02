<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border:1px solid red;height:50px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'GvuiCol',
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        }
    },
    data(){
        return{
            gutter:0
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.col{
    height:50px;
    // background: #378df1;
    width:50%;
    $class-prefix:col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width:($n / 24) * 100%;
        }
    }
}
</style>

