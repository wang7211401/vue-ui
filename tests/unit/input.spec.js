import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Input from '@/input'

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    it('接受 value', () => {
        const wrapper = mount(Input, {
            propsData: {
                value: '1234'
            }
        })
        expect(wrapper.find('input').element.value).to.eq('1234')
    })

    it('接受 disabled', () => {
        const wrapper = mount(Input, {
            propsData: {
                disabled: true
            }
        })
        expect(wrapper.props().disabled).to.eq(true)
    })

    it('接受 readonly', () => {
        const wrapper = mount(Input, {
            propsData: {
                readonly: true
            }
        })
        expect(wrapper.props().readonly).to.eq(true)
    })

    it('接受 error', () => {
        const wrapper = mount(Input, {
            propsData: {
                error: 'error'
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements[0].getAttribute('xlink:href')).to.eq('#i-error')
        const errorMessage = wrapper.find('.errorMessage')
        expect(errorMessage.text()).to.eq('error')
    })

    it('支持 change/input/focus/blur 事件', () => {
        const callbackChange = sinon.fake();
        const callbackInput = sinon.fake();
        const callbackFocus = sinon.fake();
        const callbackBlur = sinon.fake();
        const wrapper = mount(Input, {
            listeners: {
                'change': callbackChange,
                'input': callbackInput,
                'focus': callbackFocus,
                'blur': callbackBlur,
            }
        })
        setTimeout(() => {
            wrapper.find('input').trigger('change')
            wrapper.find('input').trigger('input')
            wrapper.find('input').trigger('focus')
            wrapper.find('input').trigger('blur')
            setTimeout(() => {
                expect(callbackChange).to.have.been.called
                expect(callbackInput).to.have.been.called
                expect(callbackFocus).to.have.been.called
                expect(callbackBlur).to.have.been.called
                done()
            }, 1500)
        })

    });
})