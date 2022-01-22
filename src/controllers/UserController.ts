import { RequestHandler } from "express"
import { PrismaClient } from "@prisma/client"
import createUserServices from "../services/user/CreateUserServices"

const prisma = new PrismaClient()

const create: RequestHandler = async (req, resp) => {
  const { name, email } = req.body

  const newUser = await createUserServices({

    name, //name: name
    email,

  })
  // return resp.status(400).json({ message: "E-mail invalido" })
  return resp.status(201).json(newUser)
}

const index: RequestHandler = async (req, resp) => {

  const users = await prisma.users.findMany()

  return resp.json(users)
}

const show: RequestHandler = async (req, resp) => {

  const userId = req.params.id

  const user = await prisma.users.findUnique({
    where: { id: Number(userId) }
  })

  return resp.json(user)
}

const update: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  const { name, email } = req.body

  const userUpdate = await prisma.users.update({
    where: { id: Number(userId) },
    data: { name, email }
  })

  return resp.json(userUpdate)
}

const deleteX: RequestHandler = async (req, resp) => {
  const userId = req.params.id
  const result = await prisma.users.delete({
    where: { id: Number(userId) }
  })
  return resp.json()
}

export default {
  index,
  show,
  create,
  deleteX,
  update
}