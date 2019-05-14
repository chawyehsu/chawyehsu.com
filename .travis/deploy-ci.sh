#!/bin/bash

# Make sure under the workspace
WORKINGDIR=$HOME/website
cd $WORKINGDIR
# Decrypt the deploy key
openssl aes-256-cbc -K $encrypted_e40f4962dafa_key -iv $encrypted_e40f4962dafa_iv -in $WORKINGDIR/.travis/secrets.tar.enc -out $WORKINGDIR/.travis/secrets.tar -d
tar xvf $WORKINGDIR/.travis/secrets.tar -C $HOME/.ssh/ >/dev/null
# Set the permission of the key
chmod 600 $HOME/.ssh/deploy_key.pri
# Start SSH agent
eval $(ssh-agent)
# Add deploy key to SSH agent
ssh-add $HOME/.ssh/deploy_key.pri
# Set git config
git config --global user.name "h404bi"
git config --global user.email "h404bi@gmail.com"
# Clone deploy history (keep build commits)
git clone --depth=1 --branch=gh-pages git@github.com:h404bi/www.h404bi.com.git $WORKINGDIR/.deploy_git
# Clear old files
rm -rf $WORKINGDIR/.deploy_git/*
# Copy new files
cp -r $WORKINGDIR/public/* $WORKINGDIR/.deploy_git
# Publish new commit to gh-pages
cd $WORKINGDIR/.deploy_git
git add -A
COMMITDATE=`date '+%Y-%m-%d %H:%M:%S'`
git commit -m "Site updated at $COMMITDATE"
git branch -m gh-pages
git push -q -u origin gh-pages
