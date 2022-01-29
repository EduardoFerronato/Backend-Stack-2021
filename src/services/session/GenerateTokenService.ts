import { sign } from 'jsonwebtoken'

interface IProps {
  id: number | string
  name: string
}
const run = ({ id, name }: IProps) => {
  const token = sign({}, 'secret', {
    subject: JSON.stringify({ id, name }),
    expiresIn: '7d',
  })

  return token
}

export default run
