import { Request, Response } from "express";
import { productsServices } from "../Services/ECommerce.services";
import { validateRequest } from "../errorHandler";
import { productSchema } from "../Validators/productValidator";
import { Products } from "../Model/ECommerce.model";
import { EProducts } from "../ECommerce.interface";
import { ParamsDictionary } from "express-serve-static-core";

const createProducts = async (req: Request, res: Response) => {
    const { error } = validateRequest(req.body, productSchema);
    if (error){
        return (
            res.status(400).json({ 
                success: false, 
                message: error.details[0].message 
            })
        ) 
    } 

    const productData = req.body;
    try {
        const result = await productsServices.createProducts(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
        // res.status(500).json({ success: false, message: error.message });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    const {searchTerm}=req.query

    if(searchTerm){
        try {
            console.log(searchTerm)
            // const regex = new RegExp(searchTerm as string); 
            // const result = await Products.find({
            //     $or: [
            //         { name: { $regex: regex } }
            //     ]
            // });
            const result = await productsServices.searchProducts(searchTerm as string);
            console.log(result)
            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No products found matching search term '${searchTerm}'`,
                });
            }
            res.json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }else{
        try {
            const result = await productsServices.getAllProducts();
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        } catch (error) {
            console.log(error)
        }
    };
}

const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await productsServices.getProductById(productId);
        res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const deleteProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await productsServices.deleteProductById(productId);
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

export const productsControllers = {
    createProducts, getAllProducts, getProductById, deleteProductById,
    async updateProductById(
        req: Request<ParamsDictionary, any, Partial<EProducts>>,
        res: Response
      ): Promise<void> {
        try {
          const productId: string = req.params["productId"];
          const updatedProductData: Partial<EProducts> = req.body;
    
          console.log(productId)
          console.log(updatedProductData)
          const updatedProduct: EProducts | null =
            await Products.findByIdAndUpdate(productId, updatedProductData, {
              new: true,
            });
            console.log(updatedProduct)
          if (!updatedProduct) {
            res.status(404).json({
              success: false,
              message: "Product not found",
            });
            return;
          }
    
          res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: (error as Error).message,
          });
        }
      }
};


