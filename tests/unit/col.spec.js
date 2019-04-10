import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Row from '@/grid/row'
import Col from '@/grid/col'

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: 2
            }
        })
        expect(wrapper.classes('col-2')).to.eq(true)
    })
    it('接收 offset 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: 2
            }
        })
        expect(wrapper.classes('offset-2')).to.eq(true)
    })
    it('接收 ipad 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                ipad: { span: 2, offset: 2 }
            }
        })
        expect(wrapper.classes('col-ipad-2')).to.eq(true)
        expect(wrapper.classes('offset-ipad-2')).to.eq(true)
    })
    it('接收 pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: { span: 2, offset: 2 }
            }
        })
        expect(wrapper.classes('col-pc-2')).to.eq(true)
        expect(wrapper.classes('offset-pc-2')).to.eq(true)
    })
    it('接收 narrowPc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: { span: 2, offset: 2 }
            }
        })
        expect(wrapper.classes('col-narrow-pc-2')).to.eq(true)
        expect(wrapper.classes('offset-narrow-pc-2')).to.eq(true)
    })
    it('接收 widePc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: { span: 2, offset: 2 }
            }
        })
        expect(wrapper.classes('col-wide-pc-2')).to.eq(true)
        expect(wrapper.classes('offset-wide-pc-2')).to.eq(true)

    })
})