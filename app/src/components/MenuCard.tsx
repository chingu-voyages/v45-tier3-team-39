import React from 'react';
import { Badge } from 'src/components/Badge/Badge';
import { Card } from 'src/components/Card/Card';

interface MenuCardProps {
  item_id: string;
  img_url: string;
  name: string;
  category: string;
  price: number;
  onAdd: () => void;
}

const MenuCard = ({
  name,
  img_url,
  category,
  price,
  onAdd,
}: MenuCardProps): JSX.Element => {
  return (
    <div className="cursor-pointer" onClick={onAdd}>
      <Card
        title={name}
        Image={<img src={img_url} alt={name} />}
        description={
          <div className="flex justify-between">
            <Badge
              label={category}
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
