const orderDb = require('../model/orderDb')
var orderController = {
  addOrder: (body) => {
    return orderDb.addOrder(body.no, body.userId, body.data);
  },
  searchOrder:(body) => {
    return orderDb.showOrder();
  }
};
module.exports = orderController;
