title: "utility"
date: 2015-04-21 16:33:39
order: 2
tags:
---
###文本色值块###
通过颜色来展示意图，这些类可以应用于链接，并且在鼠标经过时颜色可以还可以加深，就像默认的链接一样。
vip_red是超级用户经常会使用的类, 已经设置!important，不会被覆盖，请放心使用, 并且三态已经做处理
方法：通过添加类的方式来实现，注意: 为了避免被覆盖，使用！important优先级

```
   <p class="red_text">I am a demo ! </p>
   <p class="orange_text">I am a demo ! </p>
   <a class="vip_red" href="#">I am a demo ! </a>
```

###float###

将元素向左或者向右浮动, 使用了!important，避免被覆盖

*   通过添加`.pull_left`或者`.pull_right`类
```
<span class="pull_left">float left...</span> 
<span class="pull_right">float right...</span> 
```
*   方法二：使用mixins方式
```
    .element{
        .pull-left(); //or .pull-right();
    }
```
###清除浮动###
<p>通过为<code>父元素</code>添加 .clearfix 类可以很容易地清除浮动（float）。此类还可以作为 mixin 使用。</p>
*   通过添加`.clearfix`类
```
    <div class="clearfix"></div>
```
*   通过调用`.clearfix` mixins
```
    .element{
        .clearfix(); //or .pull-right();
    }
```
###图片替换###
使用`.hide_text`类或对应的mixin可以用来将元素的文本内容替换为一张背景图。</p>
*   方法一：通过添加`.hide_text`类
```
    <span class="hide_text"></span>
```
*   方法二：通过调用`.hide_text` mixins
```
   .element{
       .hide-text();
   }
```

###文字省略###
*   方法一：通过添加`.text_overflow`, text_overflow文字省略设置在dispaly： block或者dispaly
> 注意：.text_overflow类只是支持一行省略
```
<div class="text_overflow"></div>
```
*   方法二：使用mixins .text-overflow(...)
```
    .element{
        .text-overflow(); 
    }
    .element{
        .text-overflow(2); // 传入参数，仅支持webkit，表示第几行省略
    }
```
