import buildQuery from '../../builder/queryBuilder'
import { TProducts } from './product.interface'
import productModel from './product.model'

const getProductsFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = ['name', 'category']
  const result = await buildQuery(productModel.find(), query, searchableFields)
  console.log(result)
  return result
}

const getProductByIdFromDB = async (productId: string) => {
  const result = await productModel.findById(productId)
  return result
}

const addProductIntoDB = async (payLoad: TProducts) => {
  const result = await productModel.create(payLoad)
  return result
}

const updateProductIntoDB = async ( productId: string, product: Partial<TProducts>,) => {
  const result = await productModel.findByIdAndUpdate(productId, product, { new: true})
  return result
}

const deleteProductFromDB = async (productId: string) => {
  const result = await productModel.findByIdAndDelete(productId)
  return result
}

export const ProductServices = {
  getProductsFromDB,
  getProductByIdFromDB,
  addProductIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
}
