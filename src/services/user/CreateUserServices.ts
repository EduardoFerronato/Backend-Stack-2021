import { PrismaClient } from '@prisma/client'

import { AppError } from '../../configs/errors/AppError'
import { isValidEmail } from '../../utils/customFunctions'
const prisma = new PrismaClient()

interface IProps {
  name: string
  email: string
  pwd?: string
}

async function run({ name, email, pwd }: IProps) {
  if (!isValidEmail(email)) {
    throw new AppError('Email Inválido')
  }

  const newUser = await prisma.users.create({
    data: {
      name,
      email,
      pwd: pwd ?? '123', // colocar autentificação
    },
  })
  return newUser
}

export default run
