<template>
    <div class="g-date-picker" ref="wrapper" style="border:1px solid red;">
        <g-popover position="bottom" :container="x">
            <g-input type="text" />
            <template slot="content">
                <div class="g-date-picker-pop">
                    <div class="g-date-picker-nav">
                        <span>
                            <g-icon name="leftleft"></g-icon>
                        </span>
                        <span>
                            <g-icon name="left"></g-icon>
                        </span>
                        <span @click="onClickYear">2019年</span>
                        <span @click="onClickMonth">2月</span>
                        <span>
                            <g-icon name="right"></g-icon>
                        </span>
                        <span>
                            <g-icon name="rightright"></g-icon>
                        </span>
                    </div>
                    <div class="g-date-picker-panels">
                        <div v-if="mode === 'years'" class="g-date-picker-content">年</div>
                        <div v-else-if="mode === 'months'" class="g-date-picker-content">月</div>
                        <div v-else class="g-date-picker-content">
                            <div :class="c(weekdays)">
                                <span v-for="i in [1,2,3,4,6,0]" :key="i">
                                    {{weekdays[i]}}
                                </span>
                            </div>
                            <div :class="c('row')" v-for="i in helper.range(1,7)" :key="i">
                                <span :class="c('col')" v-for="j in helper.range(1,8)" :key="j">
                                    {{visibleDays[(i-1)*7+j-1].getDate()}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="g-date-picker-actions">
                        <g-button>清除</g-button>
                    </div>
                </div>
            </template>
        </g-popover>
    </div>
</template>
<script>
import GInput from '../input'
import GIcon from '../icon'
import GPopover from '../popover'
import GButton from '../button/button'
import ClickOutside from '../click-outside'
import helper from './helper'

export default {
    name:'GvuiDatePicker',
    components:{
        GInput,
        GIcon,
        GPopover,
        GButton
    },
    directives:{ClickOutside},
    props:{
        firstDayOfWeek:0 | 1
    },
    data(){
        return {
            mode:'day',
            value: new Date(),
            helper:helper,
            x:null,
            weekdays:['日','一','二','三','四','五','六']
        }
    },
    mounted() {
        this.x = this.$refs.wrapper
    },
    methods:{
        c(className){
            return `g-date-picker-${className}`
        },
        onClickMonth(){
            this.mode = 'months'
        },
        onClickYear(){
            this.mode = 'years'
        }
    },
    computed:{
        visibleDays(){
            let date = this.value
            let first = helper.firstDayOfMonth(date)
            let last = helper.lastDayOfMonth(date)
            let array = []
            let [year,month,day] = helper.getYearMonthDate(date)
            for (let i=first.getDate();i<=last.getDate();i++){
                array.push(new Date(year,month,i))
            }
            let n = first.getDay() === 0 ? 6 : first.getDay() - 1
            let array2 = []
            for(let i = 0;i < n;i++){
                array2.push(new Date(year,month,-i))
            }
            array2 = array2.reverse()
            let m = 42 - array.length - array2.length
            let array3 = []
            for(let i=1;i<=m;i++){
                array3.push(new Date(year,month + 1,i))
            }
            return [...array2,...array,...array3]
        }
    }
}
</script>
<style lang="scss">
.g-date-picker{
    padding: 100px;
    &-nav{
        background: red;
    }
    &-popWrapper{
        padding:0;
    }
    /deep/ .g-popover-content-wrapper{
        padding:0;
    }
}
</style>
