export type MenuItem = {
  _id: string;
  name: string;
  category: { name: string; id: string };
  description: string;
  price: number;
  image_url: string;
};
