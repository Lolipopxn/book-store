import Router from 'koa-router'
import category from './category'

const router = new Router()

router.get('/api/greet', async (ctx, next) => {
  ctx.body = {msg: 'Hello world.'}
})
  
router.use('/api/category', category.routes())

export default router