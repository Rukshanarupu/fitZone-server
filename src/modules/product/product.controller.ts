/* eslint-disable no-console */
import { Request, Response } from 'express'
import catchAsync from '../../utility/catchAsync'
import { ProductServices } from './product.service'
import sendResponse from '../../utility/sendResponse'

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  try{
    const query = req.query
    const result = await ProductServices.getProductsFromDB(query)
    res.json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    })
  }catch (error) {
    console.log(error)
  }
})

const getProductById = catchAsync(async (req, res) => {
  const { productId } = req.params

  const result = await ProductServices.getProductByIdFromDB(productId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  })
})

const addProduct = catchAsync(async (req, res) => {
  const productData = req.body
  try{
    const result = await ProductServices.addProductIntoDB(productData)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  }catch (error) {
    console.log(error)
    // res.status(500).json({ success: false, message: error.message });
  }
})

const updateProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const product = req.body
  try{
    const result = await ProductServices.updateProductIntoDB(productId, product)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Product updated successfully',
      data: result,
    })
  }catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: (error as Error).message,
    });
  }
})

const deleteProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await ProductServices.deleteProductFromDB(productId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})

export const ProductControllers = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
}
