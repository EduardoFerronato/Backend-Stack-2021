import { PrismaClient } from "@prisma/client"
import { isValidEmail } from "../../utils/customFunctions"
const prisma = new PrismaClient()

interface IProps {
  name: string
  email: string
  pwd?: string
}

async function run({ name, email, pwd }: IProps) {

  if (!isValidEmail(email)) {
    throw new Error("deu ruim")
  }

  const newUser = await prisma.users.create({
    data: {      name,      email,      pwd: "123" //colocar autentificação 
    }
  })
  return newUser
}

export default run