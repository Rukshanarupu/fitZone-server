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
        message: 'Order created successfully',
        data: result,
      })
    }catch (error) {
      console.log(error)
    }
  })


  const getAllOrders = catchAsync(async (req, res) => {
    try{
      const query = req.query
      const result = await OrderService.getOrdersFromDB(query)
      res.json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      })
    }catch (error) {
      console.log(error)
    }
  })

export const ProductController = { createOrder, getAllOrders}