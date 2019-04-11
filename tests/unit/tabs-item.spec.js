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

describe('TabsItem', () => {
    it('TabsHead存在.', () => {
        expect(TabsHead).to.exist
    })
    it('TabsBody存在.', () => {
        expect(TabsBody).to.exist
    })
    it('TabsItem存在.', () => {
        expect(TabsItem).to.exist
    })
    it('TabsPane存在.', () => {
        expect(TabsPane).to.exist
    })

    it('接受 name 属性', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                name: 'xxx'
            }
        })
        expect(wrapper.props().name).to.eq('xxx')
    })

    it('接受 disabled 属性', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                disabled: true,
                name: 'xxx'
            }
        })
        const vm = wrapper.vm
        expect(wrapper.props().disabled).to.eq(true)
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })

})