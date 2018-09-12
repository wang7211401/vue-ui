---
title: Popover
---
 # Popover

支持 HTML

预览

<popover-demos></popover-demos>

代码

```html
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>

<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>

<g-popover position="left" trigger="hover">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>

<g-popover position="right" trigger="hover">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
```