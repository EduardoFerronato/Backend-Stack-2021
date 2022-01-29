import { Router } from 'express'

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const sandboxRouter = Router()

sandboxRouter.get('/', (_, resp) => resp.send('This is a local tests route!'))

export default sandboxRouter
