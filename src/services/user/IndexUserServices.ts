import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function run() {
  const indexUsers = await prisma.users.findMany({})

  return indexUsers
}

export default run
