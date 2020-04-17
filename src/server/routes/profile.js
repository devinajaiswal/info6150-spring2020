const router = require("koa-router")();
const profileController = require("../controllers/profileController");

router.get("/", async (ctx, next) => {
  // ctx.body = profileController.searchProfile(ctx.params.userid);
  console.log(ctx.request.query)
  console.log(ctx.request.query.userid)
  ctx.body = "cool"
});

router.post("/", async (ctx, next) => {
  ctx.status = await profileController.addProfile(ctx.request.body);
});

module.exports = router.routes();
