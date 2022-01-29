// semente - criar ao iniciar o banco novo, pequenos exemplos de dados, para que
// o dev possa começar a trabalhar.

// https://www.prisma.io/docs/guides/database/seed-database#seeding-your-database-with-typescript-or-javascript
import { PrismaClient } from '@prisma/client'

import { hash } from 'bcrypt'
const prisma = new PrismaClient()

async function main() {
  const pwd = await hash('123', 8)
  await prisma.users.create({
    data: {
      name: 'Seed Name Exemple',
      email: 'email@gmail.com',
      pwd,
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
