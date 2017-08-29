require('dotenv').config();

const config = {
  hostname: process.env.HOST,
  port: process.env.PORT,
  db: {
    url: process.env.DBURL,
  },
  jwt: {
    secret: process.env.JWT,
  },
};

module.exports = config;
