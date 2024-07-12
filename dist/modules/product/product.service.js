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
exports.ProductServices = void 0;
const queryBuilder_1 = __importDefault(require("../../builder/queryBuilder"));
const product_model_1 = __importDefault(require("./product.model"));
const getProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ['name', 'category'];
    const result = yield (0, queryBuilder_1.default)(product_model_1.default.find(), query, searchableFields);
    console.log(result);
    return result;
});
const getProductByIdFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(productId);
    return result;
});
const addProductIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payLoad);
    return result;
});
const updateProductIntoDB = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(productId, product, { new: true });
    return result;
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(productId);
    return result;
});
exports.ProductServices = {
    getProductsFromDB,
    getProductByIdFromDB,
    addProductIntoDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
