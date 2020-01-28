const connection = require('./database');

connection.connect(function (err) {
  if (err) throw new Error(err.message);
  else console.log("Подключение к БД успешно");
});
const data = {
  getPosts: function() {
    return connection.query("SELECT * FROM `posts`");
  },
  getUsers: function() {
    return connection.query("SELECT * FROM `users`");
  },
}


module.exports = data;