#! /bin/bash

wwwdir=/data/wwwroot/www.h404bi.com
git=/usr/bin/git
branch=gh-pages

cd $wwwdir
$git reset --hard origin/$branch
$git clean -f
$git pull

dtime=`date`
echo "site update success at $dtime."
