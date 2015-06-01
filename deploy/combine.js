var fs = require('fs');
var path = require('path');
var fromPath = path.resolve('', './combineLess/mixin/');
var toPath = path.resolve('', './dependency.less');
var results = [];
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
