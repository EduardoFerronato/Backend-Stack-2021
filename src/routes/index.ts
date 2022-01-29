import { Router } from 'express'

import sandboxRoutes from './sandbox.routes'
import userRoutes from './user.routes'

const appRoutes = Router()

// .use {qualquer metodo} GET, POST, DELETE, PATCH, etc...

appRoutes.get('/', (_, res) => {
  return res.send('Server On!')
})

appRoutes.use('/users', userRoutes)
appRoutes.use('/sandbox', sandboxRoutes)

export default appRoutes
