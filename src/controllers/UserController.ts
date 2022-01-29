import { RequestHandler } from 'express'

import createUserService from '../services/user/CreateUserService'
import deleteUserService from '../services/user/DeleteUserService'
import indexUserService from '../services/user/IndexUserService'
import showUserService from '../services/user/ShowUserService'
import updateUserService from '../services/user/UpdateUserService'

const create: RequestHandler = async (req, resp) => {
  const { name, email } = req.body
  const newUser = await createUserService({ name, email })
  return resp.status(201).json(newUser)
}

const index: RequestHandler = async (req, resp) => {
  const { page } = req.query
  const pageFilter = page ? Number(page) : undefined
  const users = await indexUserService({ page: pageFilter })
  return resp.json(users)
}

const show: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  const user = await showUserService({ id: Number(userId) })
  return resp.json(user)
}

const update: RequestHandler = async (req, resp) => {
  const userId = Number(req.params.id)
  const { name, email } = req.body
  const updatedUser = await updateUserService({ userId, name, email })
  return resp.json(updatedUser)
}

const deleteX: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  await deleteUserService({ userId: Number(userId) })
  return resp.json()
}

export default {
  index,
  show,
  create,
  deleteX,
  update,
}
