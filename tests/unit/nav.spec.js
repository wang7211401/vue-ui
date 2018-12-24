import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from "@vue/test-utils";
import Nav from '@/nav/nav.vue'
import NavItem from '@/nav/nav-item.vue'
import SubNav from '@/nav/sub-nav.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe("Nav.vue", () => {
  it("存在", () => {
    expect(Nav).to.exist
  });

  it('支持 selected 属性', (done) => {
    Vue.component('GNavItem',NavItem)
    Vue.component('GSubNav',SubNav)  
    const wrapper = mount(Nav, {
      propsData: {
        selected:'home'
      },
      slots:{
        default:`
            <g-nav-item name="home">首页</g-nav-item>
            <g-sub-nav name="about">
                <template slot="title">关于</template>
            </g-sub-nav>
            <g-nav-item name="hire">招聘</g-nav-item>
        `
      }
    })

    setTimeout(() =>{
        expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
        done()
    })
  });

  it('会触发 updata:selected 事件', (done) => {
    Vue.component('GNavItem',NavItem)
    Vue.component('GSubNav',SubNav)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {
        selected:'home'
      },
      slots:{
        default:`
            <g-nav-item name="home">首页</g-nav-item>
            <g-sub-nav name="about">
                <template slot="title">关于</template>
            </g-sub-nav>
            <g-nav-item name="hire">招聘</g-nav-item>
        `
      },
      listeners:{
        'update:selected':callback
      }
    })

    setTimeout(() =>{
        wrapper.find('[data-name="hire"]').trigger('click')
        expect(callback).to.have.been.calledWith('hire')
        done()
    })
  });

  it('支持 vertical 属性', (done) => {
    Vue.component('GNavItem',NavItem)
    Vue.component('GSubNav',SubNav)  
    const wrapper = mount(Nav, {
      propsData: {
        selected:'home',
        vertical:true
      },
      slots:{
        default:`
            <g-nav-item name="home">首页</g-nav-item>
            <g-sub-nav name="about">
                <template slot="title">关于</template>
            </g-sub-nav>
            <g-nav-item name="hire">招聘</g-nav-item>
        `
      }
    })

    setTimeout(() =>{
        expect(wrapper.find('[data-name="home"].vertical').exists()).to.be.true
        done()
    })
  });
})