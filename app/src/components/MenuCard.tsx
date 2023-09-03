import React from 'react';
import { Button } from 'src/components/Button/Button';
import { Card } from 'src/components/Card/Card';

interface MenuCardProps {
  item_id: string;
  img_url: string;
  name: string;
  category: string;
  price: number;
  onSelect: (itemId: string) => void;
}

const MenuCard = ({
  name,
  img_url,
  category,
  price,
}: MenuCardProps): JSX.Element => {
  return (
    <>
      <Card
        title={name}
        Image={<img src={img_url} alt={name} />}
        Actions={
          <div className="card-actions justify-end">
            <Button size="md" title="Add" onClick={() => {}} />
          </div>
        }
      />

      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-accent badge-outline badge-sm">
              {category}
            </div>
            <p className="grow-0">£{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
