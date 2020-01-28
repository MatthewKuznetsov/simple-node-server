const HTTP = require('http');
const URL = require('url');
const router = require('./router');

const PORT = 8080;

const server = HTTP.createServer(function(req, res) {
  const url = URL.parse(req.url);
  router(url, res);
})

server.listen(
  PORT,
  function() {
    console.log('Open http://127.0.0.1:' + PORT + ' in your breowser.');
  }
);
