import { Products } from "../Model/ECommerce.model"
import { Orders, POrders } from "../Model/Order.model"

const createOrders= async (payLoad: POrders)=>{
    const { productId, quantity } = payLoad;
    const product = await Products.findById(productId);

    if (!product) {
        return {
            success: false, 
            message: 'Order not found' 
        }
    };

    if (product.inventory.quantity < quantity) {
        return {
            success: false, 
            message: 'Insufficient quantity available in inventory'
        }
    }

    //decrement the product quantity
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    // Update the inStock status based on the new quantity
    if (product.inventory.quantity === 0) {
        product.inventory.inStock = false;
    } else {
        product.inventory.inStock = true;
    }

    //update product and order data
    const updatedOrder=await Products.findByIdAndUpdate(
        productId,
        product,
        {new:true}
    )

    const result = await Orders.create(payLoad);
    return {order: result}
}

const getAllOrders= async ()=>{
    const result=await Orders.find()
    return result
}

const getOrderByEmail= async (email: string)=>{
    if (!email) {
      return {
        success: false,
        message: 'Email query parameter is required'
      }
    }
    const result = await Orders.find({ email });
    return result
}
export const orderServices={
    createOrders, getAllOrders, getOrderByEmail
}