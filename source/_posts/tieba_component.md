title: "业务组件"
date: 2015-04-21 16:36:03
order: 3
tags:
---
## frs右侧规范（aside）##

### 上下图文对象 ###

> 主要应用于吧主，友情贴吧等模块
> 使用方式： 直接copy下面的DOM结构

<iframe height='257' scrolling='no' src='//codepen.io/yuanzhen/embed/ByebaR/?height=257&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/ByebaR/'>medie_top_groups</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<ul class="aside-media-horizontal clearfix">
  <li class="media-vertical">
    <a class="media-top" href="#" target="" title="">
      <img src="6060.jpg" alt="image"></a>
    <div class="text-overflow media-bottom">
      <a href="#" target="_blank" class="" title="一不小心爱上你">一不小心爱上你</a>
    </div>
  </li>
</ul>
```

### 上下图文对象 ###

> 目前平台化使用较多
> 使用方式： 直接copy下面的DOM结构

<iframe height='316' scrolling='no' src='//codepen.io/yuanzhen/embed/emabQv/?height=316&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/emabQv/'>thumbnail_top</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<a class="aside-thumbnail-120">
    <img src="http://p6.qhimg.com/dr/360_210_/t019df57088b7ca51ab.jpg" alt="image">
</a>
<ul class="unordered-list-dot">
    <li class="text-overflow"><a href="#">自定义文字自定义文字自定义文字自定义文字</a></li>
</ul>
```

### 左右图文对象 ###

> 略
> 使用方式： 直接copy下面的DOM结构
> 在规范中，支持两种图片尺寸的图文对象（60*60）或者（80*60）,只需要更换aside-media-vertical-60为aside-media-vertical-80即可，
> **如果想支持更多尺寸的图片**，请如下设置
```
<ul class="yours-demo clearfix">
</ul>
.yours-demo{
    &:extend(.aside-media-vertical-60 all);
    li{
        .make-horizontal-media(80px, 60px, 10px);
    }
}
```

<iframe height='284' scrolling='no' src='//codepen.io/yuanzhen/embed/vEqEZj/?height=284&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/vEqEZj/'>aside_media_left_groups</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<ul class="aside-media-vertical-60 clearfix">
    <li class="media-horizontal clearfix">
        <a class="media-left">
          <img src="http://imgsrc.baidu.com/forum/pic/item/aa64034f78f0f7362a4f09e20855b319eac4139b.jpg" alt="image" />
          <span class="media-caption"></span>
        </a>
        <div class="media-right">
          <a class="text-overflow title">自定义文字自定义文字自定义文字</a>
          <p>自定义文字自定义文字自定义文字</p>
        </div>
    </li> 
</ul>
```

### 列表 ###

<iframe height='268' scrolling='no' src='//codepen.io/yuanzhen/embed/OPeVwN/?height=268&theme-id=13754' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yuanzhen/pen/OPeVwN/'>OPeVwN</a> by yuanzhen (<a href='http://codepen.io/yuanzhen'>@yuanzhen</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

```
<ul class="unordered-list-dot">
    <li class="text-overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text-overflow"><a href="#">自定义文字自定义文字</a></li>
    <li class="text-overflow"><a href="#">自定义文字自定义文字</a></li>
</ul>
```

## frs头部规范（head）##
