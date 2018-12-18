<template>
    <div>
        <div>
            <g-layout style="color: white; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
            <p>代码</p>
            <pre><code>{{content1}}</code></pre>
        </div>
        <div>
            <h2>布局</h2>
            <p>预览</p>
            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-layout>
                    <g-sider style="height: 100px; background:lavender; width:200px; color: black;">
                    sider
                    </g-sider>
                    <g-content style="height: 100px; background:deepskyblue;">
                    content
                    </g-content>
                </g-layout>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
            <p>代码</p>
            <pre><code>{{content2}}</code></pre>
        </div>
        <div>
             <h2>布局</h2>
            <p>预览</p>
            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-sider style=" background:lavender; width:200px; color: black;">
                    sider
                </g-sider>
                <g-layout>
                    <g-header style="height: 50px; background:lightskyblue;">
                    header
                    </g-header>
                    <g-content style="height: 100px; background:deepskyblue;">
                    content
                    </g-content>
                    <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                    </g-footer>
                </g-layout>
            </g-layout>
            <p>代码</p>
            <pre><code>{{content3}}</code></pre>
        </div>
    </div>
</template>
<script>
import Layout from "../../../src/layout/layout";
import Header from "../../../src/layout/header";
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";
import Sider from "../../../src/layout/sider";
export default {
    components: {
        "g-layout": Layout,
        "g-header": Header,
        "g-content": Content,
        "g-footer": Footer,
        "g-sider": Sider,
    },
    data(){
        return {
            content1:`
            <g-layout style="color: white; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
            `.replace(/^ {12}/gm, '').trim(),
            content2:`
            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-layout>
                    <g-sider style="height: 100px; background:lavender; width:200px; color: black;">
                    sider
                    </g-sider>
                    <g-content style="height: 100px; background:deepskyblue;">
                    content
                    </g-content>
                </g-layout>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
            `.replace(/^ {12}/gm, '').trim(),
            content3:`
            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-sider style=" background:lavender; width:200px; color: black;">
                    sider
                </g-sider>
                <g-layout>
                    <g-header style="height: 50px; background:lightskyblue;">
                    header
                    </g-header>
                    <g-content style="height: 100px; background:deepskyblue;">
                    content
                    </g-content>
                    <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                    </g-footer>
                </g-layout>
            </g-layout>
            `.replace(/^ {12}/gm, '').trim()
        }
    }
}
</script>

