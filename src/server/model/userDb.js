// get the client
const mysql = require("mysql2");

// create the connection to database
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "info_6150",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

var userDb = {
  dbTest: () => {
    return new Promise((resolved, rejected) => {
      pool.query('SELECT * FROM `user` WHERE `username` = "admin"', function(
        err,
        results,
        fields
      ) {
        console.log("DB: " + results);
        resolved(results);
      });
    });
  },
  addUser: (username, email, password) => {
    return new Promise((resolved, rejected) => {
      // const sql = 'INSERT INTO `user` (`username`, `password`) VALUES (`' + username + '`, `'+ password + '`)';
      const sql = "INSERT INTO user(username, email, password) VALUES(?, ?, ?)";
      const params = [username, email, password];

      pool.query(sql, params, function(err, results) {
        if (err) {
          console.log(err);
          // rejected(new Error('执行失败，给出错误'));
          resolved(400)
        } else {
          console.log("ADD USER: " + username);
          resolved(200);
        }
      });
    });
  }
};
module.exports = userDb;
