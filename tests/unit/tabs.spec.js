import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Tabs from '@/tabs/tabs.vue'
import TabsHead from '@/tabs/tabs-head'
import TabsBody from '@/tabs/tabs-body'
import TabsItem from '@/tabs/tabs-item'
import TabsPane from '@/tabs/tabs-pane'

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    
    it('接受 selected 属性.', (done) => {
        Vue.component('g-tabs', Tabs)
        Vue.component('g-tabs-head', TabsHead)
        Vue.component('g-tabs-body', TabsBody)
        Vue.component('g-tabs-item', TabsItem)
        Vue.component('g-tabs-pane', TabsPane)

        const wrapper = mount(Tabs,{
            slots: {
                default: `
                    <g-tabs selected="sports">
                        <g-tabs-head>
                            <g-tabs-item name="woman"> 美女 </g-tabs-item>
                            <g-tabs-item name="finance"> 财经 </g-tabs-item>
                            <g-tabs-item name="sports"> 体育 </g-tabs-item>
                        </g-tabs-head>
                        <g-tabs-body>
                            <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
                            <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
                            <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
                        </g-tabs-body>
                    </g-tabs>
                `
            },
            propsData:{
                selected:'sports'
            }
        })
        
        const vm = wrapper.vm
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name
                ="sports"]`)
            expect(x.classList.contains('active')).to.eq(true)
            done()
        }) 
    })
})