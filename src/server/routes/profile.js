const router = require("koa-router")();
const profileController = require("../controllers/profileController");

router.get("/:userid", async (ctx, next) => {
  ctx.body = profileController.searchProfile(ctx.params.userid);
});

router.post("/", async (ctx, next) => {
  ctx.status = await profileController.addProfile(ctx.request.body);
});

module.exports = router.routes();
