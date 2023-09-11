import { Category } from '@ordr/types';
import React from 'react';
import { Badge } from 'src/components/Badge/Badge';
import { Card } from 'src/components/Card/Card';

interface MenuCardProps {
  item_id: string;
  image_url: string;
  name: string;
  category: Category;
  price: number;
  onAdd: () => void;
}

const MenuCard = ({
  name,
  image_url,
  category,
  price,
  onAdd,
}: MenuCardProps): JSX.Element => {
  return (
    <div className="cursor-pointer" onClick={onAdd}>
      <Card
        title={name}
        Image={<img src={image_url} alt={name} />}
        description={
          <div className="flex justify-between">
            <Badge
              label={category.name}
              variant="outline"
              color="accent"
              size="sm"
            />
            <div className="font-semibold">£{price}</div>
          </div>
        }
      />
    </div>
  );
};

export default MenuCard;
