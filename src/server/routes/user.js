const router = require("koa-router")();
const userController = require("../controllers/userController");

router.prefix("/user");

router.get("/", async (ctx, next) => {
  ctx.body = await userController.showUser();
});

router.post("/", async (ctx, next) => {
  // let result = await userController.addUser(ctx.request.body).catch(err => {
  //   console.log("WTF!");
  //   ctx.status = 400;
  // });
  // if(result) {
  //   ctx.body = result;
  // }
  ctx.status = await userController.addUser(ctx.request.body);
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
