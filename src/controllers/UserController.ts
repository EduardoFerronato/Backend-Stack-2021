import { RequestHandler } from 'express'

import { PrismaClient } from '@prisma/client'

import createUserServices from '../services/user/CreateUserServices'
import deleteUserServices from '../services/user/DeleteUserServices'
import indexUserServices from '../services/user/IndexUserServices'
import showUserServices from '../services/user/ShowUserServices'

const prisma = new PrismaClient()

const create: RequestHandler = async (req, resp) => {
  const { name, email } = req.body
  const newUser = await createUserServices({ name, email })
  // if (!newUser) { return resp.status(400).json({ message: "E-mail invalido" }) }
  return resp.status(201).json(newUser)
}

const index: RequestHandler = async (req, resp) => {
  const users = await indexUserServices()

  return resp.json(users)
}

const show: RequestHandler = async (req, resp) => {
  const userId = req.params.id // string

  await showUserServices({ id: Number(userId) })

  return resp.json(showUserServices({ id: Number(userId) }))
}

const update: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  const { name, email } = req.body

  const userUpdate = await prisma.users.update({
    where: { id: Number(userId) },
    data: { name, email },
  })

  return resp.json(userUpdate)
}

const deleteX: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  await deleteUserServices({ userId: Number(userId) })

  return resp.json()
}

export default {
  index,
  show,
  create,
  deleteX,
  update,
}
