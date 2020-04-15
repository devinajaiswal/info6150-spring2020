// create the connection to database
const pool = require('./pool');

var orderDb = {
  addOrder: (no, userId, data) => {
    return new Promise((resolved, rejected) => {
      const sql = "INSERT INTO `order`(no, user_id, data) VALUES(?, ?, ?)";
      const params = [no, userId, JSON.stringify(data)];
      console.log(params)

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(400);
        } else {
          console.log("ADD ORDER: " + no);
          resolved(200);
        }
      });
    });
  }
};
module.exports = orderDb;
