const postsController = require('./controllers/postsController');
const usersController = require('./controllers/usersController');
const defaultController = require('./controllers/defaultController');

function router(url, res) {
  switch (url.pathname) {
    case '/api/posts':
      postsController(url, res);
      break;
    
    case '/api/users':
      usersController(url, res);
      break;
    
    default:
      defaultController(url, res);
  }
}

module.exports = router;