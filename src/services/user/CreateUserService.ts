import { PrismaClient } from '@prisma/client'

import { hash } from 'bcryptjs'

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

  const newPwd = await hash(pwd ?? '123', 8)

  const newUser = await prisma.users.create({
    data: {
      name,
      email,
      pwd: newPwd,
    },
  })
  return newUser
}

export default run
