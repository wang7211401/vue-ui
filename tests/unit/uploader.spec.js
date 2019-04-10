import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from "@vue/test-utils";
import Uploader from '@/uploader'
import http from '@/http'

chai.use(sinonChai)

describe("Uploader.vue", () => {
    it("存在", () => {
        expect(Uploader).to.exist
    });
    xit('可以上传一个文件', (done) => {
        let stub = sinon.stub(http, 'post').callsFake((url, options) => {
            setTimeout(function() {
                options.success('{"id":"123123"}')
                done()
            }, 100)
        })

        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/upload',
                method: 'post',
                parseResponse: (response) => {
                    let obj = JSON.parse(response)
                    return `/preview/${obj.id}`
                },
                fileList: []
            },
            slots: {
                default: `<button id="x">上传</button>`
            },
            listeners: {
                'update:fileList': (fileList) => {
                    // fileList[0].type = 'image/jpeg'
                    wrapper.setProps({ fileList })
                },
                'uploaded': () => {
                    expect(wrapper.find('use').exists()).to.eq(false)
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
                    stub.restore()
                    done()
                }
            }
        })


        wrapper.find('#x').trigger('click')
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element

        let file1 = new File(['xxxx'], 'xxx.jpg')

        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files;


        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')

    })
});