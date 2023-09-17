import { Schema, model } from 'mongoose';
import { MenuItem } from '../../types/dist/MenuItem';

const menuItemSchema = new Schema<MenuItem>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
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

const MenuItem = model('MenuItem', menuItemSchema);

export default MenuItem;
