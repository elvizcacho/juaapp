#!/bin/sh

nginx

cd /usr/src/app && npm install

cd /usr/src/app && npm run watch
