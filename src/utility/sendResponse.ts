import { Response } from 'express'

export type TData<T> = {
  statusCode: number
  success: boolean
  message: string
  data: T
}

const sendResponse = <T>(res: Response, data: TData<T>) => {
  return res.status(200).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  })
}

export default sendResponse
