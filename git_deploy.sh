#!/bin/bash
hexo clean
rm -rf combineLess
git clone http://gitlab.baidu.com/tbfe/build.git combineLess
node combine.js
hexo g
hexo d
