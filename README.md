# vue-ui 一个Vue UI 组件

[![Build Status](https://travis-ci.org/wang7211401/vue-ui.svg?branch=master)](https://travis-ci.org/wang7211401/vue-ui)

## 介绍

一个基于 Vue 的ui 组件

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启边框

```
*,*::before,*::after{
    box-sizing:border-box;
}
```

IE 8 及以上浏览都支持此样式

你还需要设置默认颜色等变量（后续会改为 SCSS 变量)

```
html {
--button-height: 32px;
--font-size: 14px;
--button-bg: white;
--button-active-bg: #eee;
--border-radius: 4px;
--color: #333;
--border-color: #999;
--border-color-hover: #666;
}
```

IE 15 及以上浏览器都支持此样式。

2.安装

```
npm install --save gvui
```

3.引入

```
  import {Button, ButtonGroup, Icon} from 'gvui'
  import 'frank-test-1-1/dist/index.css'
  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
```
