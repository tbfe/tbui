title: "组件"
date: 2015-04-21 15:07:00
order: 2 
tags:
---
##图文（media）##

###左右图文（media_horizontal）###
> 使用方式： copy如下的DOM结构，配置mixins[.make-horizontal-media(...)](http://baidu.com), 示例:
> 需要注意的是，在DOM结构中的类`.media_caption`, `.media_absolute`已经设置position: absolute, 你只需要设置位置和其他属性值即可。
```
.my_demo{
    .make-horizontal-media(60px, 60px, 10px);
}
```
<iframe height='160' scrolling='no' src='//codepen.io/yuanzhen/embed/zGGOwY/?height=160&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/zGGOwY/'>zGGOwY</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<!--完整的DOM结构如下, 根据自己的需要，选择相应的DOM和添加js钩子-->
<div class="media_horizontal clearfix">
    <a class="thumbnail media_left">
        <img src="http://tb.himg.baidu.com/sys/portrait/item/d21ee5b9b3e58fb0e58c96e6b58be8af95ec44">
        <span class="media_caption">图片上绝对定位的边角</span>
    </a>
    <div class="media_right">右侧说明文字</div>
    <div class="media_absolute">需要绝对定位的元素，比如aside模块, 封禁的样式</div>
</div>

/**
* @width: 左侧图片的宽度
* @height: 左侧图片的高度
* @gutter: 左侧图片和右侧描述之间的间距
*/
.make-horizontal-media(@width, @height, @gutter);
```


###上下图文（media_vertical）###
> 使用方式： copy如下的DOM结构，配置mixins[.make-vetical-media(...)](http://baidu.com), 示例:
> 需要注意的是，在DOM结构中的类`.media_caption`, `.media_absolute`已经设置position: absolute, 你只需要设置位置和其他属性值即可。
```
.my_demo{
    .make-vetical-media(60px, 60px, 2px);
}
```
<iframe height='220' scrolling='no' src='//codepen.io/yuanzhen/embed/EjjgwO/?height=220&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/EjjgwO/'>EjjgwO</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<!--完整的DOM结构如下, 根据自己的需要，选择相应的DOM和添加js钩子-->
<div class="media_vertical clearfix">
    <a class="media_top">
        <img src="http://tb.himg.baidu.com/sys/portrait/item/d21ee5b9b3e58fb0e58c96e6b58be8af95ec44">
        <span class="media_caption">图片上绝对定位的边角</span>
    </a>
    <div class="media_bottom">右侧说明文字</div>
    <div class="media_absolute">需要绝对定位的元素，比如aside模块, 封禁的样式</div>
</div>

/**
* @width: top图片的宽度
* @height: top图片的高度
* @gutter: 图片和描述之间的间距
*/
.make-horizontal-media(@width, @height, @gutter);
```

##图文媒体组（media_groups）##

###横向媒体组_1###

> 使用方式： copy如下的DOM结构，
> * 配置mixins[.make-horizontal-lists(...)](http://baidu.com), 主要是设置media组的展示
> * 配置mixins[.make-vetical-media(...)](http://baidu.com)，需要设置单个media的展示
**注意：** .make-vetical-media(...)在上文已经介绍过，请参考。

<iframe height='257' scrolling='no' src='//codepen.io/yuanzhen/embed/KwBrXR/?height=257&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/KwBrXR/'>media_groups_horzontal_1</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<!--DOM结构如下，每一个media_vertical作为一个媒体组的一个对象-->
<ul class="my_demo clearfix">
  <li class="media_vertical">
      <a class="media_top">
        <img src="http://tb.himg.baidu.com/sys/portrait/item/d21ee5b9b3e58fb0e58c96e6b58be8af95ec44"/>
        <span class="media_caption">吧</span>
      </a>
      <div class="media_bottom">
        <a class="text_overflow">平台化测试</a>
        <button class="btn_default btn_small">test</button>
        <button class="btn_sub btn_small">test</button>
      </div>
   </li> 
</ul>

/**
* @param @width: 每个media的宽度
* @param @h-gutter: 每个media之间左右间距
* @param @h-gutter: 每个media之间的上下间距
* @param @list-num: 媒体对象组一行要展示几个media
*  .make-horizontal-lists(@width, @h-gutter, @v-gutter: 0, @list-num);
/

.my_demo li{
    .make-horizontal-lists(100px, 10px, 2px, 6);
    .make-vertical-media(100px, 100px, -4px);
}

```

###横向媒体组_2###

> 使用方式： copy如下的DOM结构，
> * 配置mixins[.make-horizontal-lists(...)](http://baidu.com), 主要是设置media组的展示
> * 配置mixins[.make-horizontal-media(...)](http://baidu.com)，需要设置单个media的展示
**注意：** .make-horizontal-media(...)在上文已经介绍过，请参考。

```
<!--DOM结构如下，每一个media_vertical作为一个媒体组的一个对象-->
<ul class="my_demo clearfix">
  <li class="media_horizontal">
      <a class="media_left">
        <img src="http://tb.himg.baidu.com/sys/portrait/item/d21ee5b9b3e58fb0e58c96e6b58be8af95ec44"/>
        <span class="media_caption">吧</span>
      </a>
      <div class="media_right">
        <p class="text_overflow">平台化测试</p>
        <button class="btn_default btn_small">test</button>
        <button class="btn_sub btn_small">test</button>
      </div>
   </li> 
</ul>

.my_demo li{
    .make-horizontal-lists(200px, 10px, 2px, 6);
    .make-vertical-media(100px, 100px, 10px);
}

```

<iframe height='218' scrolling='no' src='//codepen.io/yuanzhen/embed/eNpJqL/?height=218&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/eNpJqL/'>eNpJqL</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###纵向媒体组_2###

> 使用方式： copy如下的DOM结构，
> * 配置mixins[.make-vertical-lists(...)](http://baidu.com), 主要是设置media组的展示
> * 配置mixins[.make-horizontal-media(...)](http://baidu.com)，需要设置单个media的展示
**注意：** .make-horizontal-media(...)在上文已经介绍过，请参考。
>

```
<!--DOM结构如下，每一个media_horizontal作为一个媒体组的一个对象-->
<ul class="my_demo">
   <li class="media_horizontal">
       <a class="media_left">
           <img src="" alt=""/>
           <span class="media_caption"></span>
       </a>
       <div class="medai_right">
           <p><a href="#">描述</a></p>
           goto: <button class="btn_default btn_small">test</button>
       </div>
   </li>
</ul>
/*
* @param @height 每一个media的高度
* @param @gutter media高度
* .make-vertical-lists(@heigth, @gutter);
*/
.my_demo .media_horizontal{
    .make-vertical-lists(auto, 10px);
    .make-horizontal-media(60px, 60px, 10px);
}
```
<iframe height='217' scrolling='no' src='//codepen.io/yuanzhen/embed/azjQqe/?height=217&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/azjQqe/'>media_mutil</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##布局（layout）##

###两栏布局###

> 左边宽度固定，右侧不固定
> 使用方式： copy如下的DOM结构，配置mixins[.get-column-two(...)](http://baidu.com), 示例:

```
<!--DOM结构如下，其中col2_left, col2_right是必须的，wrap_namespace是自己定义的-->
<div class="wrap_namespace">
    <div class="col2_left">left</div>
    <div class="col2_right">right</div>
</div>
/*
* @namespace: ~".wrap_namespace", 命名空间, 防止被覆盖
* @left: 左侧的宽度
*/
.get-column-two(~".main", @left);

```
<iframe height='181' scrolling='no' src='//codepen.io/yuanzhen/embed/ByPGqm/?height=181&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/ByPGqm/'>layout</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###三栏布局###

> 左边和右侧固定，中间不固定，双飞翼布局
> 使用方式： copy如下的DOM结构，配置mixins[get-column-three(...)](http://baidu.com), 示例:

```
<!--DOM结构如下，其中col3_body, col3_main, col3_left, col3_right是必须的，wrap_namespace是自己定义的-->
<div class="wrap_namespace">
    <div class="col3_body">
        <div class="col3_main">body</div>
    </div>
    <div class="col3_left">left</div>
    <div class="col3_right">right</div>
</div>
/*
* @namespace: ~".wrap_namespace", 命名空间, 防止被覆盖
* @left: 左侧的宽度
* @right: 右侧的宽度
* @gutter: 中间区域于左右的间距
*/
//.get-column-three(~'.wrap_namespace', @left, @right, @gutter: 10px);
.get-column-three(~'.wrap_namespace', 200px, 200px);
```
<iframe height='182' scrolling='no' src='//codepen.io/yuanzhen/embed/QbbLXX/?height=182&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/QbbLXX/'>QbbLXX</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##分页（pagination）##

提供带有展示页码的分页组件，其中php分页和js组件都是基于这个组件的样式

###带页码的默认组件###

> 使用方式：copy如下的DOM结构,
*   `.pagination-default`为了避免和之前的pagination造成中途，在pagination之后加了一个default的后缀
*   `.pagination-current`指当前page
*   `.pagination-item`指左右的页签

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

##缩略图（thumbnail）##
参考了Boostrap缩略图, 并结合产品，设计仅需最少的标签就能展示带链接的图片。

> 使用方式：
*   copy代码区的html代码, 并在less文件中设置图片大小和tbumbnail_caption等信息

```
<a class="thumbnail">
    <img src="img" alt="img">
    <div class="thumbnail_caption">123</div>
</a>
.thumbnail{
    .thumbnail-size(100px, 100px); // [设置图片大小](http://baidu.com)
    .thumbnail_caption{} //已经在comnon模块设置了absoulte定位，仅需要设置位置和其他属性即可
}
```
<iframe height='186' scrolling='no' src='//codepen.io/yuanzhen/embed/jEpQgQ/?height=186&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/jEpQgQ/'>tbumbnail</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##表格（table）##
nothing
##表单（forum）##
nothing

##无序列表（list）##
无序列表预定义样式, 其中列表之前的符号，通过`::before`实现
> **使用方式：** 
*   方法一: copy代码区的html代码，其中在每条li上的[text_overflow](http://gitlab.baidu.com/tbfe/fis2/less/)样式可以自行选择
*   方法二: 在执行方法一的基础上，设置a链接的颜色，使用mixins [.a-color()](http://gitlab.baidu.com/tbfe/fis2/less)

```
<ul class="unordered_list_dot">
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
</ul>
```
<iframe height='167' scrolling='no' src='//codepen.io/yuanzhen/embed/OPeVwN/?height=167&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/OPeVwN/'>list_tyle</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
