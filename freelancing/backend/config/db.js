module.exports = {
  local: {
    host: process.env.JUAAPP_DB_HOST,
    db: process.env.JUAAPP_DB_NAME,
    user: process.env.JUAAPP_DB_USER,
    port: process.env.JUAAPP_DB_PORT,
    password: process.env.JUAAPP_DB_PASSWORD,
  },
  production: {
    host: process.env.JUAAPP_DB_HOST,
    db: process.env.JUAAPP_DB_NAME,
    user: process.env.JUAAPP_DB_USER,
    port: process.env.JUAAPP_DB_PORT,
    password: process.env.JUAAPP_DB_PASSWORD,
  }
}