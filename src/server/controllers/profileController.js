const profileDb = require('../model/profileDb')
var profileController = {
  addProfile: (body) => {
    return profileDb.addProfile(body.userid, body.username, body.email, body.city, body.about);
  },
  searchProfile:(body) => {
    return profileDb.searchProfile(body.userid);
  }
};
module.exports = profileController;