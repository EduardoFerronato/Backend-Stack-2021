import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function create (dados:any) {

  {
    const { name, email } = dados

    const newUser = await prisma.users.create({
      data: {
        name,//name: name
        email,
        pwd: "123" //colocar autentificação 
      }
    })
    return newUser
  }
}
export default create