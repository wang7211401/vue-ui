---
title: Sticky
---
 # Sticky

 使用方法

<sticky-demos></sticky-demos>

代码

``` js
<template>
  <div style="display:flex;justify-content:center">
    <div style="width:600px;border:1px solid black;">
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
      <g-sticky :distance="100">
        <div style="border:1px solid red">
          <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-733876.jpg" alt="">
        </div>
      </g-sticky>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
      <p>段落11</p>
      <p>段落12</p>
      <p>段落13</p>
      <p>段落14</p>
      <p>段落15</p>
      <p>段落16</p>
      <p>段落17</p>
      <p>段落18</p>
      <p>段落19</p>
      <p>段落20</p>
      <p>段落21</p>
      <p>段落22</p>
      <p>段落23</p>
      <p>段落24</p>
      <p>段落25</p>
      <p>段落26</p>
      <p>段落27</p>
      <p>段落28</p>
      <p>段落29</p>
      <p>段落30</p>
    </div>
  </div>
   
</template>

export default {
  components: {
    GSticky
  }
};

```