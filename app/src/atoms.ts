import { atom } from 'recoil';

export type BasketItem = {
  id: string;
  name: string;
  category: { name: string; id: string };
  description: string;
  price: number;
  quantity: number;
};

export const basketState = atom<BasketItem[]>({
  key: 'basketState',
  default: [],
});
