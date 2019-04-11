import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Collapse from '@/collapse/collapse'
import CollapseItem from '@/collapse/collapse-item'

describe('Collapse', () => {
    it('Collapse存在.', () => {
        expect(Collapse).to.exist
    })
    it('CollapseItem存在.', () => {
        expect(CollapseItem).to.exist
    })

    it('接受 selected 属性', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const wrapper = mount(Collapse, {
            slots: {
                default: `    
                    <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
                    <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
                    <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
                `
            },
            propsData: {
                selected: ['1', '2'],
                single: true
            }

        })

        setTimeout(() => {
            expect(wrapper.find('#content-1').exists()).to.eq(true)
            expect(wrapper.find('#content-2').exists()).to.eq(true)
            expect(wrapper.find('#content-3').exists()).to.eq(false)
            done()
        })
    })

    it('接受 single 属性', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const wrapper = mount(Collapse, {
            slots: {
                default: `    
                    <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
                    <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
                    <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
                `
            },
            propsData: {
                selected: ['1'],
                single: true
            }

        })

        setTimeout(() => {
            wrapper.find('[data-name="2"]').trigger('click')
            setTimeout(() => {
                expect(wrapper.find('#content-1').exists()).to.eq(false)
                expect(wrapper.find('#content-2').exists()).to.eq(true)
                done()
            })
        })
    })

    it('接受 update:selected 属性', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const callback = sinon.fake()
        const wrapper = mount(Collapse, {
            slots: {
                default: `    
                    <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
                    <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
                    <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
                `
            },
            propsData: {
                selected: ['1'],
                single: true
            },
            listeners: {
                'update:selected': callback
            }

        })

        setTimeout(() => {
            wrapper.find('[data-name="2"]').trigger('click')
            setTimeout(() => {
                expect(callback).to.have.been.called
                done()
            }, 1500)
        })
    })
})