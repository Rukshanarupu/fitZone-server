import { Router } from 'express'
import { ProductController } from './order.controller'

const router = Router()

router.get('/', ProductController.createOrder)

export const ProductRoutes = router