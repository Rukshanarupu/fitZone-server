"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.get('/', order_controller_1.ProductController.getAllOrders);
router.post('/', order_controller_1.ProductController.createOrder);
exports.ProductRoutes = router;
