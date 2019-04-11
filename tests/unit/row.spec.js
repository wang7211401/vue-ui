import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue'
import Row from '@/grid/row'
import Col from '@/grid/col'

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })

    it('接收 gutter 属性.', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)

        const wrapper = mount(Row, {
            slots: {
                default: `    
                    <g-col span="12"></g-col>
                    <g-col span="12"></g-col>
                `
            },
            propsData: {
                gutter: '20'
            }

        })
        setTimeout(() => {
            const row = wrapper.find('.row')
            const cols = wrapper.find('.col')
            expect(row.attributes().style).to.eq('margin-left: -10px; margin-right: -10px;')
            expect(cols.attributes().style).to.eq('padding-left: 10px; padding-right: 10px;')
            done()
        }, 1000)

    })

    it('接收 align 属性', () => {
        const wrapper = mount(Row, {
            propsData: {
                align: 'right'
            }
        })
        const row = wrapper.find('.row')
        expect(row.classes('align-right')).to.eq(true)
    })
})