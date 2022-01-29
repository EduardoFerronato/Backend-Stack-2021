import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IProps {
  page?: number
}

async function run({ page }: IProps) {
  const indexUsers = await prisma.users.findMany({
    where: { deleted_at: null },
    orderBy: { id: 'asc' },
    skip: ((page ?? 1) - 1) * 3,
    take: 3,
  })

  return indexUsers
}

export default run
