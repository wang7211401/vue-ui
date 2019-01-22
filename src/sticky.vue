<template>
    <div class="g-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="g-sticky" :class="classes" :style="{left,width,top}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'Sticky',
    props:{
        distance:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            sticky:false,
            left:undefined,
            width:undefined,
            height:undefined,
            top:undefined
        }
    },
    mounted(){
        this.windowScrollHander = this._winddowScrollHander.bind(this)
        window.addEventListener('scroll',this.windowScrollHander)
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.windowScrollHander)
    },
    computed:{
        classes(){
            return {
                sticky:this.sticky
            }
        }
    },
    methods:{
        offsetTop(){
            let {top} = this.$refs.wrapper.getBoundingClientRect()
            return top + window.scrollY
        },
        _winddowScrollHander(){
            let top = this.offsetTop()
            if(window.scrollY > top - this.distance){
                let {height,left,width} = this.$refs.wrapper.getBoundingClientRect()
                this.height = height + 'px'
                this.width = width + 'px'
                this.left = left + 'px'
                this.top = this.distance + 'px'
                this.sticky = true
            }else{

                this.height = undefined
                this.width = undefined
                this.left = undefined
                this.top = undefined
                this.sticky = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .g-sticky{
        &.sticky{
            position:fixed;
        } 
    }
</style>

