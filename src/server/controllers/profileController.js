const profileDb = require('../model/profileDb')
var profileController = {
  addProfile: (body) => {
    return profileDb.addProfile(body.userid, body.username, body.email, body.city, body.about);
  },
  searchProfile:(userid) => {
    return profileDb.searchProfile(userid);
  }
};
module.exports = profileController;