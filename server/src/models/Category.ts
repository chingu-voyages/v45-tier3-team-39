import { Schema, model } from 'mongoose';
import { Category } from '../../types/dist/Category';

const categorySchema = new Schema<Category>({
  name: {
    type: String,
    required: [true, 'Please provide category name'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model('Category', categorySchema);

export default Category;
