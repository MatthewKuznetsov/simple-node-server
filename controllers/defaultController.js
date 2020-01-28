const path = require('path');
const fs = require('fs');

function send404(res) {
  fs.readFile('./404.html', function(error, content) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');
  });
}

function defaultController(url, res) {

  let filePath = '.' + url.pathname;
  if (filePath == './') {
    filePath = './index.html';
  }
  
  const extension = path.extname(filePath);
  let contentType;
  switch (extension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    default:
      contentType = 'text/html';
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code == 'ENOENT') { // если такой файл не найден
        send404(res);
      }
      else {
        res.writeHead(500);
        res.end('Internal server error');
      }
    }
    else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

module.exports = defaultController;
