const router = require('koa-router')()
const userController = require('../controllers/usersController')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  // ctx.body = 'this is a users response!'
  ctx.body = userController.showUser();
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
