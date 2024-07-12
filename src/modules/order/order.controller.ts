import catchAsync from "../../utility/catchAsync"
import sendResponse from "../../utility/sendResponse"
import { OrderService } from "./order.service"

const createOrder = catchAsync(async (req, res) => {
    const orderData = req.body
    try{
      const result = await OrderService.createOrderIntoDB(orderData)
      sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Product created successfully',
        data: result,
      })
    }catch (error) {
      console.log(error)
    }
  })

export const ProductController = { createOrder}