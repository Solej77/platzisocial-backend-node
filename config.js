module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notascret',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'mgKUegkfAf',
    password: process.env.MYSQL_PASSWORD || 'Ncn6SKCT7s',
    database: process.env.MYSQL_DATABASE || 'mgKUegkfAf',
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT|| 3001,
  }
}