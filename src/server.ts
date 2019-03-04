import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
// middleware
app.use(async (ctx, next) => {
	// log the request to console
	console.log('Url:', ctx.url)
	// pass the request to the next middleware function
	await next()
})


const router = new Router()

router.get('/*', async (ctx) => {
	ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(3000)

