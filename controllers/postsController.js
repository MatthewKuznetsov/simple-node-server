const { getPosts } = require('../data');

function postsController(url, res) {
  getPosts()
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'text/json' });
      res.end(JSON.stringify(data[0]));
    });
}

module.exports = postsController;
