import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IProps {
  userId: number
  name?: string
  email?: string
}

async function run({ userId, name, email }: IProps) {
  const user = await prisma.users.update({
    where: { id: Number(userId) },
    data: { name, email },
  })

  return user
}

export default run
