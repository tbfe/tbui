title: "组件"
date: 2015-04-21 15:07:00
order: 4 
tags:
---
##list##
无序列表预定义样式, 其中列表之前的符号，通过::before实现
<iframe height='268' scrolling='no' src='//codepen.io/yuanzhen/embed/OPeVwN/?height=268&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/OPeVwN/'>OPeVwN</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

*   方法一: 直接copy html代码，其中在每条li上的text_overflow样式可以自行选择
*   方法二: 在执行方法一的基础上，设置a链接的颜色，使用mixins .a-color()


```
<ul class="unordered_list_dot">
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text_overflow"><a href="#">自定义文字自定义文字</a></li>
</ul>
```
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
<iframe height='268' scrolling='no' src='//codepen.io/yuanzhen/embed/zGGOwY/?height=268&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/zGGOwY/'>zGGOwY</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

###media_vertical###

##media_groups##

