(function(){
    var linkList = ['tb_common', 'tb_ui'];
    for(var i = 0; i < linkList.length; i++){
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'http://tb1.bdstatic.com/tb/static-common/static/style/' + linkList[i] + '.css?time=' + new Date().getTime();
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
    }
})();
