const fs = require('fs');

module.exports = {
  development: {
    username: process.env.JUAAPP_DB_USER,
    password: process.env.JUAAPP_DB_PASSWORD,
    database: process.env.JUAAPP_DB_NAME,
    host: process.env.JUAAPP_DB_HOST,
    port: process.env.JUAAPP_DB_PORT,
    dialect: 'postgres'
  },
  test: {
    username: process.env.JUAAPP_DB_USER,
    password: process.env.JUAAPP_DB_PASSWORD,
    database: process.env.JUAAPP_DB_NAME,
    host: process.env.JUAAPP_DB_HOST,
    port: process.env.JUAAPP_DB_PORT,
    dialect: 'postgres'
  },
  production: {
    username: process.env.JUAAPP_DB_USER,
    password: process.env.JUAAPP_DB_PASSWORD,
    database: process.env.JUAAPP_DB_NAME,
    host: process.env.JUAAPP_DB_HOST,
    port: process.env.JUAAPP_DB_PORT,
    dialect: 'postgres'
  }
};