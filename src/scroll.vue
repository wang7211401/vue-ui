<template>
    <div ref="parent" class="g-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @wheel="onWheel"
        @mousemove="onMouseMove">
        <div ref="child" class="g-scroll" :style="{transform:`translateY(${this.contentY}px)`}">
            <slot></slot>
        </div>
        <div class="g-scroll-track" v-show="scrollBarVisible">
            <div class="g-scroll-bar" ref="bar" @mousedown="onMouseDownScrollBar" @selectstart="onSelectStartScrollBar">
                <div class="g-scroll-bar-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'GScroll',
    data(){
        return {
            scrollBarVisible:false,
            isScrolling:false,
            startPosition:undefined,
            endPosition:undefined,
            scrollBarY:0,
            contentY:0,
            barHeight:undefined,
            parentHeight:undefined,
            childHeight:undefined,
            mouseIn:false
        }
    },
    mounted(){
        this.listenToDocument()
        this.parentHeight = this.$refs.parent.getBoundingClientRect().height
        this.childHeight = this.$refs.child.getBoundingClientRect().height
        this.updateScrollBar()
        this.listenToRemoteResources()
        this.listenToDomChange()
    },
    computed:{
        maxScrollHeight(){
            return this.parentHeight - this.barHeight
        }
    },
    updated(){
        this.childHeight = this.$refs.child.getBoundingClientRect().height
    },
    methods:{
        listenToRemoteResources(){
            let tags = this.$refs.parent.querySelectorAll('img,video,audio')
            Array.from(tags).map((tag) =>{
                if(tag.hasAttribute('data-g-listened')){return}
                tag.setAttribute('data-g-listened','yes')
                tag.addEventListener('load',()=>{
                    this.updateScrollBar()
                })
            })
        },
        listenToDomChange(){
            const targetNode = this.$refs.child
            const config = {attributes:true,childList:true,subtree:true}
            const callback = ()=>{
                this.listenToRemoteResources()
            }
            const observer = new MutationObserver(callback)
            observer.observe(targetNode,config)
        },
        listenToDocument(){
            document.addEventListener('mousemove',e=> this.onMouseMoveScrollbar(e))
            document.addEventListener('mouseup',e => this.onMouseUpScrollbar(e))
        },
        calculateContentYFromDeltaY(deltaY){
            let contentY = this.contentY
            if(deltaY > 20){
                contentY -= 20*3
            }else if(deltaY < -20){
                contentY -= -20 * 3
            }else{
                contentY -= deltaY * 3
            }
            return contentY
        },
        onWheel(e){
            this.updateContentY(e.deltaY,()=> e.preventDefault())
            this.updateScrollBar()
        },
        updateContentY(deltaY,fn){
            let maxHeight = this.calculateContentYMax()
            this.contentY = this.calculateContentYFromDeltaY(deltaY)
            if(this.contentY > 0){
                this.contentY = 0
            }else if(this.contentY < -maxHeight){
                this.contentY = -maxHeight
            }else{
                fn && fn()
            }
        },
        calculateContentYMax(){
            let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(this.$refs.parent)
            borderTopWidth = parseInt(borderTopWidth)
            borderBottomWidth = parseInt(borderBottomWidth)
            paddingTop = parseInt(paddingTop)
            paddingBottom = parseInt(paddingBottom)
            let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
            return maxHeight
        },
        updateScrollBar(){
            this.barHeight = this.parentHeight * this.parentHeight / this.childHeight
            this.$refs.bar.style.height = this.barHeight + 'px'
            this.scrollBarY = -this.parentHeight * this.contentY / this.childHeight
            this.$refs.bar.style.transform = `translateY(${this.scrollBarY}px)`;
        },
        onMouseEnter(){
            this.scrollBarVisible = true
            this.mouseIn = true   
        },
        onMouseLeave(){
            this.mouseIn = false
            if(!this.isScrolling) this.scrollBarVisible = false 
        },
        onMouseMove(){
            this.mouseIn = false
        },
        onMouseMoveScrollbar(e){
            if(!this.isScrolling){ return }
            this.endPosition = {x:e.screenX,y:e.screenY}
            let delta = {x:this.endPosition.x - this.startPosition.x,y:this.endPosition.y - this.startPosition.y}
            this.scrollBarY = this.calculateScrollBarY(delta)
            this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
            this.startPosition = this.endPosition
            this.$refs.bar.style.transform = `translateY(${this.scrollBarY}px)`
        },
        onMouseDownScrollBar(e){
            this.isScrolling = true
            let {screenX,screenY} = e
            this.startPosition = {x:screenX,y:screenY} 
        },
        onMouseUpScrollbar(e){
            this.isScrolling = false
            if(!this.mouseIn){     
                this.scrollBarVisible = false
            }
        },
        calculateScrollBarY(delta){
            let newValue = parseInt(this.scrollBarY) + delta.y
            if(newValue < 0){
                newValue = 0
            }else if(newValue > this.maxScrollHeight){
                newValue = this.maxScrollHeight
            }
            return newValue
        },
        onSelectStartScrollBar(e){
            e.preventDefault()
        }

    }
}
</script>
<style lang="scss" scoped>
    .g-scroll{
        transition: transform 0.05s ease;
        &-wrapper{
            border:1px solid red;
            overflow: hidden;
            position: relative;
        }
        &-track{
            position: absolute;
            top:0;
            right:0;
            width:14px;
            height:100%;
            background: #fafafa;
            border-left:1px solid #e8e7e8;
            opacity: 0.9;
        }
        &-bar{
            position: absolute;
            top:-1px;
            left:50%;
            height:40px;
            width:8px;
            margin-left:-4px;
            padding:4px 0;
            &-inner{
                height:100%;
                border-radius:4px;
                background: #c2c2c2;
                &:hover{
                    background: #7d7d7d;
                }
            }
        }
    }
</style>
