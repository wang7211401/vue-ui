const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span:2
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                offset:2
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                ipad:{span:2,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-2')).to.eq(true)
        expect(element.classList.contains('offset-ipad-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                pc:{span:2,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrowPc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                narrowPc:{span:2,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 widePc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                widePc:{span:2,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-wide-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})