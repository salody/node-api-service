import "reflect-metadata";
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'

import indexRoutes from './routes/index'
import movieRoutes from'./routes/movies'

const app = new Koa()
const PORT = process.env.PORT || 3000

app.use(bodyParser())
app.use(indexRoutes.routes())
app.use(movieRoutes.routes())

const server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})

export default server
