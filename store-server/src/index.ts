import Koa from 'koa'

import router from './api'


const app = new Koa()

app.use(router.routes())

app.listen(8000)
