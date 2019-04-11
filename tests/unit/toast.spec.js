import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Toast from '@/toast.vue'

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })

    it('接受 autoClose', () => {
        const wrapper = mount(Toast, {
            propsData: {
                autoClose: 1,
            }
        })
        const vm = wrapper.vm
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.eq(false)
        })
    })

    it('接受 closeButton', () => {
        const callback = sinon.fake();
        const wrapper = mount(Toast, {
            propsData: {
                closeButton: {
                    text: '关闭吧',
                    callback,
                },
            }
        })
        const vm = wrapper.vm
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.eq('关闭吧')
        setTimeout(() => {
            closeButton.trigger('click')
            expect(callback).to.have.been.called
            done()
        }, 200)
    })

    it('接受 enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: { enableHtml: true }
        })
        vm.$slots.default = ['<strong id="test">hi</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
    })

    it('接受 position', () => {
        const wrapper = mount(Toast, {
            propsData: {
                position: 'bottom'
            },
        })
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
})