const pool = require('./pool');


var profileDb = {
  addProfile: (userid, username, email, city, about) => {
    return new Promise((resolved, rejected) => {
      const sql = "INSERT INTO `profile`(userid, username, email, city, about) VALUES(?, ?, ?, ?, ?)";
      const params = [userid, username, email, city, about];
      console.log(params)

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(400);
        } else {
          console.log("ADD PROFILE: " + username);
          resolved(200);
        }
      });
    });
  },
  searchProfile: (userid) => {
    return new Promise((resolved, rejected) => {
      
    //   let uid = ctx.params.userid;
      console.log('userid is' +userid)
      const sql = "SELECT * FROM `profile` WHERE `userid` = ? ";
      const params = [userid];

      pool.query(sql, params, function(err, results) {
        console.log("results are"+results)
        if (err) {
          console.log(err);
          resolved(400);
        } 
        else if (Object.keys(results).length == 0) {
          resolved(404);
        } else {
          
          console.log("results are"+results)
          console.log("GET USER PROFILE: " + uid);
          resolved([200, results]);
        }
      });
    });
  }
};
module.exports = profileDb;