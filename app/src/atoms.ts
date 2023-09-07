import { Category } from '@ordr/types';
import { atom } from 'recoil';

export type BasketItem = {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  quantity: number;
};

export const basketState = atom<BasketItem[]>({
  key: 'basketState',
  default: [],
});
