title: "基础设置"
date: 2015-04-21 16:28:07
order: 1 
tags:
---
##禁止使用##
###禁止使用的rule###

```
clear: both | left | right | inherit  => // 替换方案 类clearfix
text-overflow: ellipsis | hidden | inherit => //替换方案 类text-overflow
-webkit-line-clamp: <number> => //替换方案: .text-overflow(...);
background-size: <bg-size> [ , <bg-size> ]*  => //替换方案 .background-size(@image-url, @rest...)
transition:<single-transition> [ ‘,’ <single-transition> ]*  => //替换方案：animate.less
transform: none | <transform-list> => //替换方案animate.less 
animate-name: <single-animation-name> [ ‘,’ <single-animation-name> ]*  => //替换方案： animate.css基本动画库
opacity: <alphavalue> | inherit => //替换方案 .opacity(...)
font:  => //替换方案mixin 

```

###禁止使用的值###

```

border-radius: 4px;  => //替换方案: image-radius
border-radius: 50%;  => //替换方案: image-round
background-image: gradient => //替换方案：渐变 mixin

```

##重置设置##

###[normalize.css/reset.css](http://gitlab.baidu.com/tbfe/tbui/blob/master/style/normalize.less)###

统一浏览器一致性，其中 Normalize.css，这是由 Nicolas Gallagher 和 Jonathan Neal 维护的一个CSS 重置样式库。
reset.css是符合贴吧业务具体需求的重置样式

###[entry](http://gitlab.baidu.com/tbfe/tbui/blob/master/style/reset.less)###

*   在body上设置了**字体大小**12px, **字体**采用非衬线字体，**字体色值**为#333，**行高**22px
*   设置了基本颜色 @link-color ，并且当链接处于 :hover 状态时才添加下划线
*   `<ins>`hover状态不添加下划线

###基础色值###
<div id="color-setting-cnt"></div>

###基础icon###

<div id="icon-cnt"></div>

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/fis2/less/font.less source 
<i class="icon-vip1-16"></i>
```
在dom上增加class， 即 icon－  ＋  icon图片下命名

###iconfont###

<div id="icon-font-cnt"></div>

使用方式：
在代码中，使用 `ICONFONT_` + 对应的icon名称，例如ICONFONT_BELL， ICONFONT_PHONE 等, 编译阶段会相应的解析为<i class="iconfont">&#xe600;<i/>
```
ICONFONT_BELL //编译为 <i class="iconfont">&#xe600;<i/>
```

##font##

### font-size ### 

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-size-12(); // => font-size: 12px;
.font-size-14(); // => font-size: 14px;
.font-size-16(); // => font-size: 16px;
.font-size-20(); // => font-size: 20px;
.font-size-24(); // => font-size: 24px;
```

### font-family ###

*   非衬线字体

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-family-sans-serif(); // => font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
```

*   衬线字体

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-family-serif(); // => font-family: Georgia, "Times New Roman", Times, serif;
```

*   等宽字体

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-family-mono(); // => font-family: Menlo, Monaco, Consolas, "Courier New", monospace;  
```

*   微软雅黑

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-family-yahei(); // => font-family: "microsoft yahei" simhei sans-serif;
```

### line-height ###

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.line-height-22(); // => line-height: 22px;
.line-height-26(); // => line-height: 26px;
```

### font-weight ###

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.font-weight-normal(); // => font-weight: 400; 
.font-weight-bold(); // => font-weight: 700;
```

### 链接色值设置 ###

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.a-color(@link: @link-color; @hover: @link-color; @visited: @visited-color);
```

### 链接下划线设置 ###

``` less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/font.less source 
.a-decoration(@link: none; @hover: underline);
```

##utility##

可以使用以下两种方式调用: `.class-name` 和 `.mixins(...)`

###文本色值块###

方法：添加`.class-name`类名的方式

> **注意： **为了避免被覆盖，使用！important优先级
> vip-red是超级用户经常会使用的类, 已经设置!important，不会被覆盖，请放心使用, 并且三态已经做处理

```html 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
   <p class="red-text">I am a demo ! </p>
   <p class="orange-text">I am a demo ! </p>
   <a class="vip-red" href="#">I am a demo ! </a>
```
<iframe height='141' scrolling='no' src='//codepen.io/yuanzhen/embed/waKMQo/?height=141&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/waKMQo/'>waKMQo</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###浮动###

将元素向左或者向右浮动, **注意：**使用了!important，避免被覆盖

*   添加`.pull-left`或者`.pull-right`类 

```html 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
<span class="pull-left">float left...</span> 
<span class="pull-right">float right...</span> 
```

*   使用`.pull-left()`或者`.pull-right()`方式 

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/utility_compile.less source
.pull-left(); // => float: left
.pull-right(); // => float: right 
```

###清除浮动###

<p>通过为`父元素`添加 .clearfix 类可以很容易地清除浮动（float）。此类还可以作为 mixin 使用。</p>

*   添加`.clearfix`类

```html 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
    <div class="clearfix"></div>
```

*   通过调用`.clearfix()` mixins

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/utility_compile.less source
.clearfix(); 
```

###元素圆角###

给元素增加圆角, 提供4px 和 50% 两种默认值

* 添加`.image-radius` 或者  `.image-round` 类

```html 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
    <img src="" class="image-radius" />   /*4px的圆角*/
    <img src="" class="image-round" />   /*50%的圆角*/
```

###图片替换###

可以用来将元素的文本内容替换为一张背景图

*   添加`.hide-text`类

```html 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
    <span class="hide-text"></span>
```

*   调用`.hide-text()` mixins

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
   .element{
       .hide-text();
   }
```

###文字省略###

设置在`dispaly: block`或者`dispaly: inline-block`且设置宽度

*   添加`.text-overflow`, 用于**单行**文字省略。 

```html 使用类名 http://gitlab.baidu.com/tbfe/tbui/blob/master/style/utility.less source
<div class="text-overflow"></div>
```

*   调用mixins `.text-overflow(...)`

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/utility_compile.less source
    .element{
        .text-overflow(); 
    }
    .element{
        .text-overflow(2); // 传入参数，仅支持webkit，表示第几行省略
    }
```

###合并icon

*   合并icon尺寸不一致，需要提供宽高信息
@my-list: demo1 20px 30px; 会生成有问题

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/utility_compile.less source
//使用如下
@my-list: demo1 20px 20px,
          demo2 20px 30px; //三个参数分别是value, width, height
.icon-sprite-multi(@my-list);

```
生成css文件

```
.icon-demo1 {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("hfj/icon_demo1.png?__sprite");
}
.icon-demo2 {
  display: inline-block;
  width: 20px;
  height: 30px;
  background: url("hfj/icon_demo2.png?__sprite");
}
```

*   合并icon仅提供图片信息

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/utility_compile.less source
//使用如下
@my-list: "demo1", "demo2", "demo3";
.icon-sprite-single(@my-list);

```
生成css文件 
```
// .icon-demo1{background: url('images/icon_demo1.png?__sprite')}
// .icon-demo2{background: url('images/icon_demo2.png?__sprite')}
// .icon-demo3{background: url('images/icon_demo3.png?__sprite')}
```

###opacity###

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/opacity.less source
.opacity(.5)  // => opacity: .5
.background-opacity(#fff, .5) => rgba(255, 255, 255, .5)
```

###渐变###

linear渐变, 开始位置和结束位置已经默认设置为0和100%，如无变化，无需再设置

*   从左到右横向linear渐变

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/gradient.less source
#gradient .horizontal(@star-color, @end-color, @start-percent, @end-percent);
```

*   从上到下纵向linear渐变

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/gradient.less source
#gradient .vertical(@star-color, @end-color, @start-percent, @end-percent);
```

*   径向渐变

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/mixin/gradient.less source
#gradient .directional(@deg, @start-color, @end-color);
```

###背景大小###

.background-size(@image-url, @rest...);

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/fis2/less/utility_compile.less source
.background-size('test.png', 50% 50%); 
```
生成css文件
```
background-image: url('test.png');
background-size: 50% 50%;
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='test.png', sizingMethod='scale');
```

##三角形##

常用于一些小边角

```less 示例 http://gitlab.baidu.com/tbfe/tbui/blob/master/fis2/less/triangle.less source
/*
* @param @direction 方向，提供 up, down, left, right四个方向
* @param @width  横向长度 
* @param @height  纵向长度 
* @param @color 色值 
*/
.triangle(@direction, @width, @height, @color);
```
<iframe height='147' scrolling='no' src='//codepen.io/yuanzhen/embed/rVOdyO/?height=147&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/rVOdyO/'>rVOdyO</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##bubble##

<iframe height='269' scrolling='no' src='//codepen.io/yuanzhen/embed/vORWYv/?height=269&theme-id=13754&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/vORWYv/'>vORWYv</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##button##

###跨浏览器展现###

据bootstrap的介绍，**强烈建议尽可能使用 `<button>`元素**来获得在各个浏览器上获得相匹配的绘制效果。

同时，如果并排按钮，建议使用同类型的标签，禁止lineheight的设置，因为在不同类型的按钮中，高度获取不一致

###作为按钮的元素###

为 `<a>`、`<button>`、`<input type="submit">`、`<input type="button">`或 `<input type="reset">`元素添加按钮类（button class）即可使用 基础库 提供的样式。

###预定义样式###
在预定义样式中，
提供了**四种样式**类: `.btn-default`、`.btn-attention`、`.btn-encourage`, `.btn-sub`、`.btn-link`
提供了**三种尺寸**类: `.btn-small`、`.btn-middle`、`.btn-large`、`.btn-larger` , 
这四种样式和尺寸可以随意搭配使用。

样式默认设置

```
<button class="btn-default btn-small" >常用蓝色(.btn-default)</button>
<button class="btn-attention btn-small" >关注(.btn-attention)</button>
<button class="btn-sub btn-small" >副按钮(.btn-sub)</button>
<a class="btn-link btn-small" >文字按钮(.btn-link)</a>
```

<iframe height='368' scrolling='no' src='//codepen.io/yuanzhen/embed/YPMaar/?height=368&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/YPMaar/'>YPMaar</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


尺寸默认设置

```
<button class="btn-default btn-small" >常用尺寸(.btn-small)</button> 
<button class="btn-default btn-middle" >中按钮(.btn-middle)</button> 
<button class="btn-default btn-large" >中按钮(.btn-large)</button> 
<button class="btn-default btn-larger" >大按钮(.btn-larger)</button> 
```
<iframe height='289' scrolling='no' src='//codepen.io/yuanzhen/embed/QbmPXZ/?height=289&theme-id=13754&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/QbmPXZ/'>QbmPXZ</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

### 带icon的按钮 ###

可以使用sprite图片，同时可以使用iconfont

ue规范为：

> `.btn-small`  不允许使用icon
> `.btn-middle`  使用尺寸14*14的icon图片或者 font-size：14px的iconfont
> `.btn-large`, `.btn-larger`  使用尺寸16*16的icon图片或者 font-size：16px的iconfont

如何使用icon图片？

在`<button>`标签或者`<a>`里使用`<i class="icon-*"></i>`, 表示相对应的图标

> class名必须以icon开头
> 如果基础库里已经有icon，则直接使用基础库里的icon， 否则，自己定义class名，**注意：**，自己定义的class名，仅需要定义`background: url()`

如何使用iconfont?

在`<button>`标签或者`<a>`里直接使用`ICONFONT_*`,  表示相对应的iconfont

```
<!--btn-middle icon设置和iconfont设置-->
<button class="btn-encourage btn-middle" /><i class="icon-tbean"></i>添加图片demo</button>
<button class="btn-encourage btn-middle" />ICONFONT_BELL添加图片demo</button>

<!--btn-large icon设置和iconfont设置-->
<button class="btn-encourage btn-large" /><i class="icon-tbean"></i>添加图片demo</button>
<button class="btn-encourage btn-large" />ICONFONT_BELL添加图片demo</button>

<!--btn-larger icon设置和iconfont设置-->
<button class="btn-encourage btn-larger" /><i class="icon-tbean"></i>添加图片demo</button>
<button class="btn-encourage btn-larger" />ICONFONT_BELL添加图片demo</button>
```
<iframe height='257' scrolling='no' src='//codepen.io/yuanzhen/embed/RPMdyX/?height=257&theme-id=13754&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/RPMdyX/'>RPMdyX</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

### 自定义按钮 ###

自定义按钮提供了以下两种样式mixins

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

<iframe height='239' scrolling='no' src='//codepen.io/yuanzhen/embed/RNmjyZ/?height=239&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/RNmjyZ/'>RNmjyZ</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


自定义按钮是以btn为基础，

*   如果和预定义样式中的4类样式不一致，建议使用.btn-variant(...)或者.btn-styles(...)进行设置;
> 如果使用自定义样式，请不要再添加.btn_default, .btn_sub等预定义样式

*   如果和预定义样式中的3类尺寸不一致，建议使用.btn-size(...)进行设置;
> 如果使用自定义尺寸，请不要再添加.btn_small, .btn_middle等预定义尺寸

```
    <element class="btn element"></element>
    .element{
        .btn-variant(...); //or btn-styles(); 设置背景颜色，文字颜色或者border色值，参数请看下面的mixins 
        .btn-size(...); //设置盒模型大小和字体大小, 参数请看下面的mixins
    }

```


##表单元素##
###input输入类型###

使用场景: 

html4.1: `type=text`,`type=password`

html5 new: `type=datetime`,`type=datetime-local`,`type=date`,`type=month`,`type=time`,`type=week`,`type=number`, `type=number`,`type=email`,`type=url`,`type=search`, `type=tel`

包含三种状态：正常状态， disabled状态， error状态

```
<!--正常状态-->
<input type="text" placeholder="请输入" class="form-control" />
<!--disabled状态-->
<input type="text" placeholder="请输入" class="form-control-disabled" disabled="disabled" />
<!--error状态-->
<input type="text" placeholder="请输入" class="form-control-error" />
```

<iframe height='307' scrolling='no' src='//codepen.io/yuanzhen/embed/oXqLpV/?height=307&theme-id=13754&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/oXqLpV/'>oXqLpV</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###复选框和单选框###

使用场景： `type="radio"`,`type="checkbox"`

包含两种状态： 正常状态， disabled状态

```
<!---checkbox 正常状态--->
<label class="checkbox"><input type="checkbox" />selector</label>

<!---checkbox disabled状态--->
<label class="checkbox-disabled"><input type="checkbox" disabled />selector</label>

<!---radio 正常状态--->
<label class="radio"><input type="radio"  />selector</label>

<!---radio disabled状态--->
<label class="radio-disabled"><input type="radio" disabled />selector</label>
```
<iframe height='173' scrolling='no' src='//codepen.io/yuanzhen/embed/JdvrGX/?height=173&theme-id=13754&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/JdvrGX/'>radio</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##分页（pagination）##

提供带有展示页码的分页组件，其中php分页和js组件都是基于这个组件的样式

###带页码的默认组件###

> 使用方式：copy如下的DOM结构,
*   `.pagination-default`为了避免和之前的pagination造成中途，在pagination之后加了一个default的后缀
*   `.pagination-item`指普通的页签
*   `.pagination-current`指当前的页签
*   `.pagination-disabled`指禁用的页签

```
<ul class="pagination-default clearfix">
    <li><a class="pagination-item"></a></li>
    <li><a class="pagination-item pagination-current"></a></li>
    <li><a class="pagination-item"></a></li>
    <li><a class="pagination-item"></a></li>
</ul>
```
<iframe height='115' scrolling='no' src='//codepen.io/yuanzhen/embed/VLLoLq/?height=115&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/VLLoLq/'>pagination</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###可配置选项###
*   配置分页的尺寸[.pagination-size(…)](http://gitlab.baidu.com/tbfe/build/blob/master/fis2/less/pagination.less)
```
/**
* @padding-vertical: 每一个页签的上下间距
* @padding-horizontal: 每一个页签的左右间距
* @font-size: 字体大小
*/
.pagination-size(@padding-vertical; @padding-horizontal; @font-size){
}
```

*   配置分页的样式 [.pagination-style(…)](http://gitlab.baidu.com/tbfe/build/blob/master/fis2/less/pagination.less)

```
/**
* @background-color: 背景颜色
* @text-color: 文字颜色
* @background-hover-color: 背景hover颜色
* @text-hover-color: 文字hover颜色
* @border-color: 默认为none，可以设置颜色值 
*/
.gination-style(@background-color; @text-color; @background-hover-color; @text-hover-color; @border-color: none){
}
```

