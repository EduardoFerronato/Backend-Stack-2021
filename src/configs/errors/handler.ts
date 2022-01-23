import { ErrorRequestHandler } from 'express'

import { AppError } from './AppError'

const errorHandler: ErrorRequestHandler = (err, __, resp, _) => {
  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      detail: err.detail,
    })
  }
  console.log(err.message)
  return resp.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}

export default errorHandler
