import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CatDropdown from 'src/components/CatDropdown';
import MenuCard from 'src/components/MenuCard';
import CardModal from 'src/components/CardModal';
import { items, MenuItem } from 'src/seeds';
import { basketState } from 'src/atoms';

export const MenuPage = (): JSX.Element => {
  const [category, SetCategory] = useState('All');
  const [itemId, setItemId] = useState('');
  const basket = useRecoilValue(basketState);

  const defaultItem: MenuItem = {
    //typescript fallback object
    item_id: '',
    img_url: '',
    name: '',
    category: '',
    description: '',
    price: 0,
  };

  let catItems: MenuItem[] = [];
  if (category !== 'all') {
    catItems = items.filter((item) => item.category === category);
  } else {
    catItems = items;
  }

  const itemDetails = catItems.find((item) => item.item_id === itemId);

  const basketUnits =
    basket.length > 0
      ? basket.reduce((prev, curr) => prev + curr.quantity, 0)
      : 0;

  return (
    <div>
      <div className="navbar p-4">
        <div className="navbar-start">
          <CatDropdown onSetCategory={SetCategory} />
        </div>
        <div className="navbar-center">
          <h1 className="text-xl font-bold">La mia Pizza</h1>
        </div>
        <div className="navbar-end indicator">
          <span className="indicator-item badge badge-neutral">
            {basket.length > 0 ? basketUnits : 0}
          </span>
          <Link
            role="button"
            className="btn btn-accent"
            to="https://profy.dev/#faq"
          >
            your order
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {(catItems || items).map((item) => {
          return (
            <MenuCard details={item} key={item.item_id} setItemId={setItemId} />
          );
        })}
        {itemId && (
          <CardModal
            details={itemDetails || defaultItem}
            setItemId={setItemId}
          />
        )}
      </div>
    </div>
  );
};
