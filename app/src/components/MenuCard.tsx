import React from 'react';

interface MenuCardProps {
  details: {
    item_id: string;
    img_url: string;
    name: string;
    category: string;
    price: number;
  };
  setItemId: (itemId: string) => void;
}

const MenuCard = ({ details, setItemId }: MenuCardProps): JSX.Element => {
  const handleOnCLick = () => {
    setItemId(details.item_id);
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleOnCLick}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={details.img_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{details.name}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-accent badge-outline badge-sm">
              {details.category}
            </div>
            <p className="grow-0">£{details.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
