const userDb = require('../model/userDb')
var userController = {
  showUser: () => {
    return userDb.dbTest();
  },
  addUser: (body) => {
    return userDb.addUser(body.username, body.password);
  }
};
module.exports = userController;
