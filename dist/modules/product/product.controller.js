"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utility/catchAsync"));
const product_service_1 = require("./product.service");
const sendResponse_1 = __importDefault(require("../../utility/sendResponse"));
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const result = yield product_service_1.ProductServices.getProductsFromDB(query);
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductServices.getProductByIdFromDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product fetched successfully!',
        data: result,
    });
}));
const addProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    try {
        const result = yield product_service_1.ProductServices.addProductIntoDB(productData);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        // res.status(500).json({ success: false, message: error.message });
    }
}));
const updateProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const product = req.body;
    try {
        const result = yield product_service_1.ProductServices.updateProductIntoDB(productId, product);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error.message,
        });
    }
}));
const deleteProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product deleted successfully',
        data: result,
    });
}));
exports.ProductControllers = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,
};
