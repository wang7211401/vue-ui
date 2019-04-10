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
})