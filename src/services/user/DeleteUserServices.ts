import { PrismaClient } from '@prisma/client'

import { AppError } from '../../configs/errors/AppError'
const prisma = new PrismaClient()

interface IProps {
  userId: number
}

async function run({ userId }: IProps) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  })

  if (!user) {
    throw new AppError('Usuário não encontrado')
  }

  await prisma.users.delete({
    where: { id: userId },
  })
}

export default run
