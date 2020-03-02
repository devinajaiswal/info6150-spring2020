// get the client
const mysql = require("mysql2");

// create the connection to database
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// with placeholder
// connection.query(
//   "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//   ["Page", 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

var userDb = {
  //   dbTest: () => {
  //     pool.execute('SELECT * FROM `users` WHERE `username` = "user1"', function(
  //       err,
  //       results,
  //       fields
  //     ) {
  //       console.log(results); // results contains rows returned by server
  //       // console.log(fields); // fields contains extra meta data about results, if available
  //     });
  //   }
  dbTest: () => {
    return new Promise((resolved, rejected) => {
      pool.query('SELECT * FROM `users` WHERE `username` = "user1"', function(
        err,
        results,
        fields
      ) {
        console.log(results);
        resolved(results);
      });
    });
  }
};
module.exports = userDb;
