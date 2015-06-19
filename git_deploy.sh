#!/bin/bash

git pull
hexo clean
cd deploy

if [ ! -d "combineLess" ]; then
    echo 'ffff--------'
    mkdir combineLess 
else
    echo 'iiii--------'
    git clone http://gitlab.baidu.com/tbfe/tbui.git combineLess
fi

if [ ! -d "setting" ]; then
    echo '---------'
    mkdir setting 
fi

node combine.js
hexo g 
cp -r setting ../public/base 
hexo d
git add dependency.less
git commit -a -m 'add dependency'
git push origin master
