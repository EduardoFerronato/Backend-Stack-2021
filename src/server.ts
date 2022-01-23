import 'express-async-errors'
import express from 'express'

import errorHandler from './configs/errors/handler'
import appRoutes from './routes'

const app = express()

app
  .use(express.json())

  .use('/', appRoutes)
  .use(errorHandler)

  .listen(3333, () => console.log('🚀 server is running! (3333)'))
