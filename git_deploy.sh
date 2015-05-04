#!/bin/bash
hexo clean
cd deploy
rm -rf combineLess
mkdir combineLess
git clone http://gitlab.baidu.com/tbfe/build.git combineLess
node combine.js
hexo g
hexo d
