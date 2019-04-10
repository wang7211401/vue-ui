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
})