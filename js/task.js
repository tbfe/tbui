var getAllIcon = function () {
    var cnt = document.getElementById('icon-cnt');
    var data = window.icon_varible.split(',');
    var tpl = '<ul class="icon-block-cnt">';
    for (var i = 0, len = data.length; i < len; i++){
        tpl += '<li>';
        tpl += '<img src="http://tb2.bdstatic.com/tb/static-common/external_lib/tbui/images/'+ data[i]+'" class="">';
        tpl += '<p>' + data[i].split('.')[0] + '</p>';
        tpl += '</li>';
    }
    tpl += '</ul>';
    cnt.innerHTML = tpl;
};

var getAllIconfont = function () {
    var cnt = document.getElementById('icon-font-cnt');
    var data = window.iconfont_varible;
    var tpl = '<ul class="icon-block-cnt">';
    for (var key in data){
        var name = key.split('.')[1];
        var value = name.split('-')[1].toUpperCase();
        tpl += '<li>';
        tpl += '<i class="iconfont '+name+'">&#x'+data[key]+'</i>';
        tpl += '<p>' + value + '</p>';
        tpl += '</li>';
    }
    tpl += '</ul>';
    cnt.innerHTML = tpl;
}

var getVarible = function () {
    var cnt = document.getElementById('color-setting-cnt');
    var data = window.color_varible;
    var tpl = '<ul class="color-setting-ul">';
    tpl += '<li style=" font-size: 16px; width: 100%; height: 30px;text-align: left;">图形装饰色值</li>'
    var keys = Object.keys(data);
    for (var key in data) {
        tpl += '<li>';
        tpl += '<span class="color-block" style="background: '+data[key]+'; color: '+(key == "@black" ? "#fff" : "#000")+'">'+data[key]+'</span>';
        tpl += key;
        tpl += '</li>';
        if (key == '@black') {
            tpl += '<li style=" font-size: 16px; width: 100%; height: 30px;text-align: left;">文字色值</li>'
        }
    }
    tpl += '</ul>';
    cnt.innerHTML = tpl;
}

var initNav = function () { 
    var $doc = $(document);
    var $ele = $('.page-toc')
    $doc.scroll(function () {
        if ($doc.scrollTop() > 150) {
            $ele.css({
                'position': 'fixed',
                'top': '20px' 
            })
        }else {
            $ele.css({
                'position': 'absoluted',
                'top': '180px' 
            })
        } 
    });
};

initNav();
getAllIcon();
getAllIconfont();
getVarible();
