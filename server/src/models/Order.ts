import { Schema, model, Document, Types } from 'mongoose';

interface MenuItem {
  menuItem: Types.ObjectId;
  name: string;
  category: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Order extends Document {
  table: number;
  items: MenuItem[];
  totalPrice: number;
  orderStatus: string;
  createdAt: Date;
}

const orderSchema = new Schema<Order>({
  table: {
    type: Number,
    required: true,
  },
  items: [
    {
      menuItem: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'MenuItem',
      },
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
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
