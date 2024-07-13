import { Router } from 'express'
import { ProductController } from './order.controller'

const router = Router()

router.get('/', ProductController.getAllOrders)
router.post('/', ProductController.createOrder)

export const ProductRoutes = router