#!/bin/sh

# install dependencies
npm install

# database setup
npm run sequelize -- db:drop || true
npm run sequelize -- db:create
npm run sequelize -- db:migrate
npm run sequelize -- db:seed:all

# run and watch app
npm run watch



