import { Schema, model } from 'mongoose';
//MenuItem type in the backend has a objectId as value for category; but when it is received in the fron the category property is populated with the correspondent category object so it differs in type.

type MenuItem = {
  _id: string;
  category: Schema.Types.ObjectId;
  name: string;
  categoryId: string;
  description: string;
  price: number;
  image_url: string;
  createdAt: Date;
};

const menuItemSchema = new Schema<MenuItem>({
  name: {
    type: String,
    required: true,
  },
  category: {
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

const MenuItem = model('MenuItem', menuItemSchema);

export default MenuItem;
