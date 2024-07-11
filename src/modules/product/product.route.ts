import { Router } from 'express'
import { ProductControllers } from './product.controller'

const router = Router()

router.get('/', ProductControllers.getAllProducts)
router.get('/:productId', ProductControllers.getProductById)
router.post('/', ProductControllers.addProduct)
router.put('/:productId', ProductControllers.updateProductById)
router.delete('/:productId', ProductControllers.deleteProductById)

export const ProductRoutes = router