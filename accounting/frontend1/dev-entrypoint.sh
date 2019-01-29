#!/bin/sh

cd /usr/src/app && npm install
cd /usr/src/app && npm rebuild node-sass
cd /usr/src/app && npm run start
