import { Schema, model } from 'mongoose';
import { Order } from '@ordr/types';

const orderSchema = new Schema<Order>({
  table: {
    type: Number,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        ref: 'Category',
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      img_url: {
        type: String,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: 'Not started',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = model<Order>('Order', orderSchema);

export default OrderModel;
