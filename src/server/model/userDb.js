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
  addUser: (username, password) => {
    return new Promise((resolved, rejected) => {
      // const sql = 'INSERT INTO `user` (`username`, `password`) VALUES (`' + username + '`, `'+ password + '`)';
      const sql = "INSERT INTO user(username, password) VALUES(?, ?)";
      const params = [username, password];

      pool.query(sql, params, function(err, results) {
        if (err) {
          console.log(err);
          resolved(err);
        } else {
          console.log("ADD USER: " + username);
          resolved(results);
        }
      });
    });
  }
};
module.exports = userDb;
