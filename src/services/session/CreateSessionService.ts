import { PrismaClient } from '@prisma/client'

import { hash } from 'bcryptjs'

import { AppError } from '../../configs/errors/AppError'
import generateTokenService from './GenerateTokenService'

const prisma = new PrismaClient()

interface IProps {
  email: string
  pwd: string
}

const run = async ({ email, pwd }: IProps) => {
  const user = await prisma.users.findFirst({
    where: { email, pwd: await hash(pwd, 8) },
  })

  if (!user) throw new AppError('Email ou senha inválido!')

  const token = generateTokenService({ id: user.id, name: user.name })

  return token
}

export default run
