import express from "express";
import { productsControllers } from "../Controllers/ECommerce.controller";

const router = express.Router();

router.post("/", productsControllers.createProducts);
router.get("/", productsControllers.getAllProducts);
router.get("/:productId", productsControllers.getProductById);
router.put("/:productId", productsControllers.updateProductById);
router.delete("/:productId", productsControllers.deleteProductById);
// router.get("/", productsControllers.searchProducts);

export const ProductsRoutes = router;