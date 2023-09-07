import { Document, Schema, Types, model } from 'mongoose';

interface IMenuItem extends Document {
  name: string;
  categoryId: Types.ObjectId;
  description: string;
  price: number;
  image_url: string;
  createdAt: Date;
}

const menuItemSchema = new Schema<IMenuItem>({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  description: {
    type: String,
    required: [true, 'Please provide item description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
  },
  image_url: {
    type: String,
    required: [true, 'Please upload image'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MenuItem = model<IMenuItem>('MenuItem', menuItemSchema);

export default MenuItem;
