#!/bin/bash

echo "Run build"
yarn run build

echo ""
echo "clean firebase-app/public folder"
rm -rf ../debate3d-app-firebase/public/*

# copy the all folder to public firebase project
cp -R ./dist/* ../debate3d-app-firebase/public

# go to firebase project
cd ../debate3d-app-firebase/

echo ""
echo "Deploy to firebase"
firebase deploy
