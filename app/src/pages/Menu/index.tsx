import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CatDropdown from 'src/components/CatDropdown';
import MenuCard from 'src/components/MenuCard';
import { CardModal } from 'src/components/CardModal';
import { items, MenuItem } from 'src/seeds';
import { basketState } from 'src/atoms';
import { categories } from 'src/mocks/categories';

export const MenuPage = (): JSX.Element => {
  const [category, SetCategory] = useState<(typeof categories)[number]>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem>();
  const basket = useRecoilValue(basketState);

  let catItems: MenuItem[] = [];
  if (category !== 'all') {
    catItems = items.filter((item) => item.category === category);
  } else {
    catItems = items;
  }

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
            <MenuCard
              name={item.name}
              key={item.item_id}
              category={item.category}
              price={item.price}
              img_url={item.img_url}
              item_id={item.item_id}
              onAdd={() => {
                setSelectedItem(item);
              }}
            />
          );
        })}
        {selectedItem && (
          <CardModal
            item_id={selectedItem.item_id}
            name={selectedItem.name}
            img_url={selectedItem.img_url}
            category={selectedItem.category}
            description={selectedItem.description}
            price={selectedItem.price}
            onClose={() => setSelectedItem(undefined)}
          />
        )}
      </div>
    </div>
  );
};
