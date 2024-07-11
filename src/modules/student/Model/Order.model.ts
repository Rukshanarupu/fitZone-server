import { Schema, model } from 'mongoose';

export type POrders= {
    email: string;
    productId: Schema.Types.ObjectId;
    price: number;
    quantity: number;
    createdAt: Date;
    // updatedAt: Date;
  }

const OrdersSchema = new Schema<POrders>({
    email: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, { timestamps: true });

export const Orders = model<POrders>('Orders', OrdersSchema);