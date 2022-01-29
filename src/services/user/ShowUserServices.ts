import { PrismaClient } from '@prisma/client'

import { AppError } from '../../configs/errors/AppError'
const prisma = new PrismaClient()

interface IProps {
  id: number
}

async function run({ id }: IProps) {
  const user = await prisma.users.findUnique({
    where: { id },
  })

  if (!user) {
    throw new AppError('Usuário não encontrado')
  }
  return user
}

export default run
