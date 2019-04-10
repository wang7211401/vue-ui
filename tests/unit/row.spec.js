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

    xit('接收 gutter 属性.', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)

        const wrapper = mount(Row, {
            slots: {
                default: `
                <g-row gutter="20">
                    <g-col span="12"></g-col>
                    <g-col span="12"></g-col>
                </g-row>
                `
            }
        })
        setTimeout(() => {
            console.log(wrapper.html())
            const row = wrapper.find('.row')
            const cols = wrapper.find('.col')
            console.log(row)
                // expect(getComputedStyle(row).marginLeft).to.eq('-10px')
                // expect(getComputedStyle(row).marginRight).to.eq('-10px')
                // expect(getComputedStyle(cols).paddingLeft).to.eq('10px')
                // expect(getComputedStyle(cols).paddingRight).to.eq('10px')
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