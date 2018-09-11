module.exports = {
    base: '/vue-ui/',
    title: 'Gvui',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '安装', link: '/install/' },
            { text: 'Github', link: 'https://github.com/wang7211401/vue-ui' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ],
        displayAllHeaders: true
    }
}