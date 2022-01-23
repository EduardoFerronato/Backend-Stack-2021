import { Router } from 'express'

import userController from '../controllers/UserController'

const userRouter = Router()

// CRUD -- Create, Read ( index, show ), Update, Delete
// show mostrar apenas "UM"
// index listar usuários (normalmente tem query params para filtros, paginação --
// -- EX ?genero=Masculino )

// GET|DELETE não tem body
userRouter.get('/', userController.index)
userRouter.get('/:id', userController.show)
userRouter.delete('/:id', userController.deleteX)

// POST|PUT|PATCH tem body
userRouter.post('/', userController.create)
userRouter.patch('/:id', userController.update)

export default userRouter
