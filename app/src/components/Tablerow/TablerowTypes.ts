//Types
export type TablerowProps = {
  name: string;
  img_url: string;
  price?: number;
  quantity: number;
  sub_total: number;
  onDelete: () => void;
  size?: string;
};
