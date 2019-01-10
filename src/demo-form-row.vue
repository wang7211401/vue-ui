<template>
    <div class="row">
        <label>{{lable}}</label>
        <div class="controls">
            <slot></slot>
            <div>
                {{error && Object.values(error)[0]}}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scope>
    .row{
        padding:8px 0;
        display:flex;
    }
    lable{
        margin-right:1em;
    }
</style>
<script>
export default {
    name:'demo-form-row',
    props:{
        lable:{
            type:String,
            required:true
        },
        error:{
            type:Object
        }
    }
}
</script>