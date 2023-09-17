import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CatDropdown from 'src/components/Dropdowns/CatDropdown';
import MenuCard from 'src/components/Card/MenuCard';
import { CardModal } from 'src/components/Modals/CardModal';
import { basketState } from 'src/atoms';
import { MenuItem } from '@ordr/types';

export const MenuPage = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>();
  const [menuItems, setMenuItems] = useState<MenuItem[]>(); // [
  const basket = useRecoilValue(basketState);

  const fetchMenu = async () => {
    const res = await fetch('http://localhost:2023/api/menu-items');
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    fetchMenu().then(setMenuItems).catch(console.error);
  }, []);

  const basketUnits =
    basket.length > 0
      ? basket.reduce((prev, curr) => prev + curr.quantity, 0)
      : 0;

  return (
    <div>
      <div className="navbar p-4">
        <div className="navbar-start">
          <CatDropdown onSetCategory={() => {}} />
        </div>
        <div className="navbar-center">
          <h1 className="text-xl font-bold">La mia Pizza</h1>
        </div>
        <div className="navbar-end indicator">
          <span className="indicator-item badge badge-neutral">
            {basket.length > 0 ? basketUnits : 0}
          </span>
          <Link role="button" className="btn btn-accent" to="/order">
            your order
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {menuItems &&
          menuItems.map((item) => {
            return (
              <MenuCard
                name={item.name}
                key={item._id}
                category={item.category}
                price={item.price}
                image_url={item.image_url}
                item_id={item._id}
                onAdd={() => {
                  setSelectedItem(item);
                }}
              />
            );
          })}
        {selectedItem && (
          <CardModal
            item_id={selectedItem._id}
            name={selectedItem.name}
            img_url={selectedItem.image_url}
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
