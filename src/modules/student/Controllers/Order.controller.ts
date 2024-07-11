
import { Request, Response } from "express";
import { orderServices } from "../Services/Order.services";
import { validateRequest } from "../errorHandler";
import { orderSchema } from "../Validators/orderValidator";

const createOrders = async (req: Request, res: Response) => {
    const { error } = validateRequest(req.body, orderSchema);
    if (error){
        return (
            res.status(400).json({ 
                success: false, 
                message: error.details[0].message 
            })
        ) 
    } 
    const orderData = req.body;

    try {
        const order = await orderServices.createOrders(orderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: order,
        });
    } catch (error) {
        console.log(error)
        // res.status(500).json({ success: false, message: err.message });
    }
}

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrders();
        res.json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const getOrderByEmail = async (req: Request, res: Response) => {
    const email = req.query.email as string;
    
    try {
        const result = await orderServices.getOrderByEmail(email);
        res.json({
            success: true,
            message: `Orders fetched successfully for user email!`,
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};


export const orderControllers = {
    createOrders, getAllOrders, getOrderByEmail
};
