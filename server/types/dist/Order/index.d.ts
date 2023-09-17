import { MenuItem } from '../MenuItem';
export type Order = {
  _id: string;
  table: number;
  items: MenuItem[];
  totalPrice: number;
  orderStatus: string;
  createdAt: Date;
};
