import express from "express";
import { orderControllers } from "../Controllers/Order.controller";

const router = express.Router();

router.post("/", orderControllers.createOrders);
router.get('/', orderControllers.getAllOrders);
router.get('/:email', orderControllers.getOrderByEmail);

export const OrderRoutes = router;