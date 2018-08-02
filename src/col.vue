<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GvuiCol',
    props:{
        span:{
            type:[Number,String]
        }
    }
}
</script>
<style lang="scss" scoped>
.col{
    height:50px;
    background: #378df1;
    width:50%;
    margin:10px 0;
    $class-prefix:col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width:($n / 24) * 100%;
        }
    }
}
</style>

