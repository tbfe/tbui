title: "button"
date: 2015-04-21 15:07:00
order: 4 
tags:
---
跨浏览器展现

据bootstrap的介绍，**强烈建议尽可能使用 `<button>`元素**来获得在各个浏览器上获得相匹配的绘制效果。

同时，如果并排按钮，建议使用同类型的标签，禁止lineheight的设置，因为在不同类型的按钮中，高度获取不一致

##可以作为按钮使用的标签和元素##

为 `<a>`、`<button>`、`<input type="submit">`、`<input type="button">`或 `<input type="reset">`元素添加按钮类（button class）即可使用 基础库 提供的样式。</p>

##预定义样式##
在预定义样式中，
提供了**四种样式**类: *.btn_default*、*.btn_default*、*.btn_default*、*.btn_default*
提供了**三种尺寸**类: *.btn_small*、*.btn_middle*、*.btn_larger*
这四种样式和尺寸可以随意搭配使用。

###demo--样式###
<button class="btn_default btn_small" >常用蓝色(.btn_default)</button>
<button class="btn_attention btn_small" >关注(.btn_attention)</button>
<button class="btn_sub btn_small" >副按钮(.btn_sub)</button>
<button class="btn_disable btn_small" >不可用按钮(.btn_disable)</button>

```
<button class="btn_default btn_small" >常用蓝色(.btn_default)</button>
<button class="btn_attention btn_small" >关注(.btn_attention)</button>
<button class="btn_sub btn_small" >副按钮(.btn_sub)</button>
<button class="btn_disable btn_small" >不可用按钮(.btn_disable)</button>
```

###demo--尺寸###
<button class="btn_default btn_small" >常用尺寸(.btn_small)</button> 
<button class="btn_default btn_middle" >中按钮(.btn_middle)</button> 
<button class="btn_default btn_larger" >大按钮(.btn_larger)</button> 
```
<button class="btn_default btn_small" >常用尺寸(.btn_small)</button> 
<button class="btn_default btn_middle" >中按钮(.btn_middle)</button> 
<button class="btn_default btn_larger" >大按钮(.btn_larger)</button> 
```

##自定义按钮##
自定义按钮提供了以下两种mixins

```
//纯色背景
.btn-variant(@color, @bg-color, @border-color, @hover-color, @hover-bg-color, @hover-border-color){
}

//渐变背景
.btn-styles(@color: #fff, @btn-color: #555) {
}

//@padding-vertical: btn上下间距 
//@padding-horizontal: btn横向间距 
//@line-height: btn字体大小
//@font-size: btn字体大小
//@border-radius: btn圆角
.btn-size(@padding-vertical, @padding-horizontal, @line-height, @font-size, @border-radius) {
}

```

自定义按钮是以btn为基础，
*   如果和预定义样式中的4类样式不一致，建议使用.btn-variant(...)或者.btn-styles(...)进行设置;
> 如果使用自定义样式，请不要再添加.btn_default, .btn_sub等预定义样式
*   如果和预定义样式中的3类尺寸不一致，建议使用.btn-size(...)进行设置;
> 如果使用自定义尺寸，请不要再添加.btn_small, .btn_middle等预定义尺寸

```
<input type="button" value="test"/ class="btn my_btn">

.my_btn{
   .btn-styles(#fff, #555);
}

```

##带icon的按钮##

使用<code>&lt;i&gt;</code>表示icon, 样式由用户自己定义，可以使用sprite图片，同时可以使用iconfont</p>

*   如果使用sprite图片, 使用了icon::before绝对定位的方式，原因是: 为了浏览器兼容性，使用padding值实现了btn的垂直尺寸，如果icon图片尺寸超出12px，会出现btn被撑高</p>
*   如果使用sprite图片, icon::before, Ie8及之下不支持，如果需要兼容到ie8，请在外层容器btn_with_icon设置relative属性</p>

暂时还确实iconfont，之后会补充</p>

```
<button class="btn_sub btn_small btn_with_icon"><i class="icon_attention"></i>关注</button>
<button class="btn_attention btn_small btn_with_icon"><i class="icon_attention"></i>关注</button>

.btn_with_icon{
    padding-left: 24px;
    .icon_attention{
        position: relative;
        &::before{
            position: absolute;
        }
    }
} 

```
