const http = require('http');

const app = require('./server');
const config = require('./server/config');

const {
  hostname,
  port,
} = config.server;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
