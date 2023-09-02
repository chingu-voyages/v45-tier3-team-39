import React from 'react';
import CatDropdown from '../../components/CatDropdown';
import MenuCard from '../../components/MenuCard';
import { items } from '../../seeds';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const MenuPage = (): JSX.Element => {
  const [category, SetCategory] = useState('All');
  const [itemId, setItemId] = useState('');
  console.log(category, itemId);

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
          <span className="indicator-item badge badge-neutral">{0}</span>
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
        {items.map((item) => {
          return (
            <MenuCard details={item} key={item.item_id} setItemId={setItemId} />
          );
        })}
        {/* Modal component */}
      </div>
    </div>
  );
};
