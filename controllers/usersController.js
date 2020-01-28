const { getUsers } = require('../data');

function usersController(url, res) {
  getUsers()
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'text/json' });
      res.end(JSON.stringify(data[0]));
    });
}

module.exports = usersController;
