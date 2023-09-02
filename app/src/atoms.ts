import { atom } from 'recoil';

type BasketItem = {
  img_url: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
};

export const basketState = atom<BasketItem[]>({
  key: 'basketState',
  default: [],
});
