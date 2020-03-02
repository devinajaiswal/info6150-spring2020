const userDb = require('../model/userDb')
var result = ""
var userController = {
  showUser: () => {
    userDb.dbTest().then(res => {
      console.log(res);
    });
    return {
      username: "DIO",
      password: "DICK"
    };
  },
  createUser: (username, password) => {

  }
};
module.exports = userController;
