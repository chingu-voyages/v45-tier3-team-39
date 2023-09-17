import { Category } from '../Category';

export type MenuItem = {
  _id: string;
  category: Category;
  name: string;
  categoryId: string;
  description: string;
  price: number;
  image_url: string;
  createdAt: Date;
};
