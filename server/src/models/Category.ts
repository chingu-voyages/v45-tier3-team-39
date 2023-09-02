import { Document, Schema, model } from 'mongoose';

interface ICategory extends Document {
  name: string;
  createdAt: Date;
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, 'Please provide category name'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
