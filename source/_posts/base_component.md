title: "组件"
date: 2015-04-21 15:07:00
order: 2 
tags:
---
##list##
无序列表预定义样式, 其中列表之前的符号，通过::before实现
*   方法一: 直接copy html代码，其中在每条li上的text_overflow样式可以自行选择
*   方法二: 在执行方法一的基础上，设置a链接的颜色，使用mixins .a-color()
```
<ul class="unordered_list_dot">
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
</ul>
```
<iframe height='268' scrolling='no' src='//codepen.io/yuanzhen/embed/OPeVwN/?height=268&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/OPeVwN/'>OPeVwN</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##分页##
```
<ul class="pagination clearfix">
    <li><a class="pagination-item"></a></li>
    <li><a class="pagination-item pagination-current"></a></li>
    <li><a class="pagination-item"></a></li>
    <li><a class="pagination-item"></a></li>
</ul>
```
##thumbnail##
<iframe height='268' scrolling='no' src='//codepen.io/yuanzhen/embed/jEpQgQ/?height=268&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/jEpQgQ/'>tbumbnail</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##table##
##forum##
##media##

###media_horizontal###
> 使用方式： copy如下的DOM结构，配置相应的mixins, 示例:
> 需要注意的是，在DOM结构中的类`.media_caption`, `.media_absolute`已经设置position: absolute, 你只需要设置位置和其他属性值即可。
```
.my_demo{
    .make-horizontal-media(60px, 60px, 10px);
}
```
<iframe height='155' scrolling='no' src='//codepen.io/yuanzhen/embed/zGGOwY/?height=155&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/zGGOwY/'>zGGOwY</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<!--DOM结构如下，其中col2_left, col2_right是必须的，wrap_namespace是自己定义的-->
<div class="media_horizontal my_demo clearfix">
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


###media_vertical###
> 使用方式： copy如下的DOM结构，配置相应的mixins, 示例:
> 需要注意的是，在DOM结构中的类`.media_caption`, `.media_absolute`已经设置position: absolute, 你只需要设置位置和其他属性值即可。
```
.my_demo{
    .make-vetical-media(60px, 60px, 10px);
}
```
<iframe height='155' scrolling='no' src='//codepen.io/yuanzhen/embed/zGGOwY/?height=155&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/zGGOwY/'>zGGOwY</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<!--DOM结构如下，其中col2_left, col2_right是必须的，wrap_namespace是自己定义的-->
<div class="media_horizontal my_demo clearfix">
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

##media_groups##

##layout##

###两栏布局###

> 左边宽度固定，右侧不固定
> 使用方式： copy如下的DOM结构，配置相应的mixins, 示例:

<iframe height='181' scrolling='no' src='//codepen.io/yuanzhen/embed/ByPGqm/?height=181&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/ByPGqm/'>layout</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

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

###三栏布局###

> 左边和右侧固定，中间不固定，双飞翼布局
> 使用方式： copy如下的DOM结构，配置相应的mixins, 示例:

<iframe height='182' scrolling='no' src='//codepen.io/yuanzhen/embed/QbbLXX/?height=182&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/QbbLXX/'>QbbLXX</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

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
