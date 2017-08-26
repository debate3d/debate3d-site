#!/bin/bash
yarn run deploy-github
cd dist
rm -rf .git/
git init
git remote add origin "https://github.com/emanuelgsouza/debate3d-site.git"
git add .
git commit -am "deploy"
git push origin master:gh-pages --force
