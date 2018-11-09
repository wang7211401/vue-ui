import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Tabs from '@/tabs.vue'
import TabsHead from '@/tabs-head'
import TabsBody from '@/tabs-body'
import TabsItem from '@/tabs-item'
import TabsPane from '@/tabs-pane'

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    
    xit('接受 selected 属性.', () => {
        const wrapper = mount(Tabs,{
            slots: {
                default: [TabsHead, TabsBody]
            },
            propsData:{
                selected:'sports'
            }
        })
        
        const vm = wrapper.vm
        let x = vm.$el.querySelector(`.tabs-item[data-name="sports"]`)
        expect(x.classes()).toContain('active')
    })
})