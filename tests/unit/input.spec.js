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
})