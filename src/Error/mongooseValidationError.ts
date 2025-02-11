import mongoose from 'mongoose'
import { TErrorSources } from './error.interface'

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const statusCode = 400
  const message = 'Validation Error'
  const errorSources: TErrorSources = Object.values(err?.errors).map(val => {
    return {
      path: val?.path,
      message: val?.message,
    }
  })
  return {
    statusCode,
    message,
    errorSources,
  }
}

export default handleValidationError
