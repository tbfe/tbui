#!/bin/bash
git pull
hexo clean
cd deploy
rm -rf combineLess
mkdir combineLess
git clone http://gitlab.baidu.com/tbfe/tbui.git combineLess
node combine.js
hexo g 
cp -r setting ../public/base 
hexo d
git add dependency.less
git commit -a -m 'add dependency'
git push origin master
