require('dotenv').config();

const config = {
  hostname: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || '3000',
  db: {
    url: `mongodb://${process.env.DBHOST}/${process.env.DBNAME}`
  },
  jwt: {
    secret: process.env.JWTSECRET,
  },
};

module.exports = config;
