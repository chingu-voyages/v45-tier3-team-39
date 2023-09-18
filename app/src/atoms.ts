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

export type OrderItem = {
  name: string;
  category: { _id: string; name: string };
  quantity: number;
  price: number;
  subtotal: number;
};

export type Order = {
  _id: string;
  table: number;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: string;
  createdAt: string;
};

export const ordersState = atom<Order[]>({
  key: 'ordersState',
  default: [],
});
