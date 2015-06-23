var fs = require('fs');
var path = require('path');
var fromPath = path.resolve(__dirname, './combineLess/mixin/');
var toPath = path.resolve(__dirname, './dependency.less');
var results = [];

var init = function () {
    fs.readdir(fromPath, function(err, lists) {
        if(err){
            return; 
        }
        lists.forEach(function(file){
            if (file.indexOf('all.less') < 0){
                var perFileContent = fs.readFileSync(fromPath + '/' + file);
                results+=perFileContent;
            }
        }) 
        fs.writeFileSync(toPath, results);
    });

    getAllColor();
    getAllIcon();
    getAllIconFont();
};

var getAllColor = function () {
    var variblePath = path.resolve(fromPath, 'varible.less');               
    var varibleOutputPath = path.resolve(__dirname, 'setting/variable.js');
    var varibleData = fs.readFileSync(variblePath, 'utf-8');                    
    var reg = /(\@[a-z\-]+?)\s*?\:\s*?(#(?:[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))\;/gm;
    var varibleColorData  = '';                                                 
    varibleData.replace(reg, function(match, pre, after){                       
        varibleColorData += '"'  + pre + '"' + ':' + '"' + after + '",';        
    });                                                                         
    var varibleColorJSON = varibleColorData.slice(0, varibleColorData.length-1);
    fs.writeFileSync(varibleOutputPath, "window.color_varible = {" + varibleColorJSON + "}");                                                                
};

var getAllIcon = function () {
    var iconPath = path.resolve(__dirname, './combineLess/images/');
    var iconOutputPath = path.resolve(__dirname, 'setting/icon.js');
    var iconData = [];
    fs.readdir(iconPath, function(err, lists) {
        if(err){
            return; 
        }
        lists.forEach(function(file){
            iconData.push(file)
        }) 
        fs.writeFileSync(iconOutputPath, "window.icon_varible = '" + iconData.join(',') + "'");                                                                
    });

};

var getAllIconFont = function  () {

};

init();
