<template>
    <div class="col" :class="colClass"
    :style="colStyle">
        <slot></slot>
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
    computed:{
        colClass(){
            let {span,offset} = this
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`
            ]
        },
        colStyle(){
            let {gutter} = this
            return {
                paddingLeft:gutter/2+'px',
                paddingRight:gutter/2+'px'
            }
           
        }
    }
}
</script>
<style lang="scss" scoped>
.col{
    height:50px;
    // background: #378df1;
    $class-prefix:col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width:($n / 24) * 100%;
        }
    }
}
</style>

