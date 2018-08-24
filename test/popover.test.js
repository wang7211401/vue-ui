const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    
    it('接收 position 属性.', (done) => {
        Vue.component('g-popover', Popover)

        const div = document.createElement('div')
        div.innerHTML = `
        <g-popover position="bottom" ref="pop">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <button>点我</button>
        </g-popover>`
        document.body.appendChild(div)

        const vm = new Vue({
            el: div
        })

        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
          let {contentWrapper} = vm.$refs.pop.$refs
          expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
          done()
        })
    })

    xit('接收 trigger 属性.',(done)=>{
        Vue.component('g-popover', Popover)

        const div = document.createElement('div')
        div.innerHTML = `
        <g-popover trigger="click" ref="pop">
            <template slot="content">
                <div>popover 内容</div>
            </template>
            <button>点我</button>
        </g-popover>`
        document.body.appendChild(div)

        const vm = new Vue({
            el: div
        })
        
        setTimeout(() => {
            let event = new Event('mouseenter')
            vm.$el.dispatchEvent(event)
            vm.$nextTick(()=>{
                let {contentWrapper} = vm.$refs.pop.$refs
                expect(contentWrapper).to.exist
                done()
            })
        }, 200);
    })
})