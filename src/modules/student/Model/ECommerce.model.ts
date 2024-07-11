import { Schema, model } from 'mongoose';
import { EInventory, EProducts, EVariants } from '../ECommerce.interface';

const  variantSchema = new Schema<EVariants>({
    type: { type: String, required: true },
    value: { type: String, required: true }
})

const  inventorySchema = new Schema<EInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
})

const productsSchema = new Schema<EProducts>({
    name: { type: String, required: true },
    description : { type: String, required: true },
    price : { type: Number, required: true },
    category: { type: String, required: true },
    tags :{type: [String], required: true},
    variants :[variantSchema],
    inventory: inventorySchema
});


// productsSchema.index({ name: 'text', category: 'text' });

export const Products = model<EProducts>('Products', productsSchema);