const router = require("koa-router")();
const orderController = require("../controllers/orderController");

router.post("/", async (ctx, next) => {
  ctx.status = await orderController.addOrder(ctx.request.body);
  ctx.body = "success"
});
router.get("/", async (ctx, next) => {
  ctx.body = orderController.searchOrder();
});

module.exports = router.routes();
