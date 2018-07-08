require('dotenv').config();

const config = {
  server: {
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  jwt: {
    secret: process.env.JWTSECRET,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
};

module.exports = config;
