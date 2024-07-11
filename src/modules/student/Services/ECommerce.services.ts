// import { Types } from "mongoose"
import { EProducts } from "../ECommerce.interface"
import { Products } from "../Model/ECommerce.model"

const createProducts= async (payLoad: EProducts)=>{
    const result=await Products.create(payLoad)
    return result
}
const getAllProducts= async ()=>{
    const result=await Products.find()
    return result
}
const getProductById= async (id: string)=>{
    const result=await Products.findById(id)
    return result
}

const deleteProductById= async (id: string)=>{
    const result=await Products.findByIdAndDelete(id)
    return result
}

const searchProducts = async (searchTerm: string) => {
    console.log("Search term:", searchTerm);
    const result = await Products.find({
        $text: { $search: searchTerm }
    });
    return result;
};

export const productsServices={
    createProducts, getAllProducts, getProductById,  deleteProductById, 
    searchProducts,
}