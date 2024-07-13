import productModel from '../product/product.model'
import { TOrder } from './order.interface'
import OrderModel from './order.model'

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order)
  for (const cartItem of result.cartItems) {
    await productModel.findByIdAndUpdate(cartItem._id, {
      stock: cartItem.stock - cartItem.quantity!,
    })
  }
  return result
}

const getOrdersFromDB= async ()=>{
  const result=await OrderModel.find()
  return result
}

export const OrderService = { createOrderIntoDB, getOrdersFromDB }
