import { model, Schema } from 'mongoose'
import { TProducts } from './product.interface'

export const productSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
})

const productModel = model<TProducts>('Products', productSchema)
export default productModel
