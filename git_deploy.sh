#!/bin/bash

git pull
hexo clean
cd deploy

if [ ! -d "combineLess" ]; then
    mkdir combineLess 
else
    rm -rf combineLess
    git clone http://gitlab.baidu.com/tbfe/tbui.git combineLess
fi

if [ ! -d "setting" ]; then
    mkdir setting 
fi

node combine.js
hexo g 
cp -r setting ../public/base 
cp -r combineLess/font ../public/base/setting
hexo d
git add dependency.less
git commit -a -m 'add dependency'
git push origin master
