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
  // await prisma.users.delete({
  //   where: { id: userId },
  // })

  // soft-delete: ao invés de deletar, apenas "marca" que deletou
  await prisma.users.update({
    where: { id: userId },
    data: {
      deleted_at: new Date(),
    },
  })
}

export default run
