module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notascret',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'mgKUegkfAf',
    password: process.env.MYSQL_PASSWORD || 'Ncn6SKCT7s',
    database: process.env.MYSQL_DATABASE || 'mgKUegkfAf',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST|| 'localhost',
    port: process.env.MYSQL_SRV_PORT|| 3001,
  },
  cacheService: {
    host: process.env.CACHE_REDIS_HOST|| 'localhost',
    port: process.env.CACHE_REDIS_PORT|| 3003,
  },
  redis: {
    host: process.env.REDIS_HOST || 'redis-18082.c9.us-east-1-2.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || '18082',
    password: process.env.REDIS_PASSWORD || '4IkPy69wZsH0gCqHSH8tJiXqlM8WXuWP',
  }
}