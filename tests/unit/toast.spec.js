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
})