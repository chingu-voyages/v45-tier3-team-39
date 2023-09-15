import React, { useState } from 'react';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { NavbarMiddle } from '../../components/Navigation/NavbarMiddle/NavbarMiddle';
import { CategoryTable } from './components/CategoryTable';
import { MenuItemsTable } from './components/MenuItemsTable';

export const AdminMenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
  } | null>(null);

  const categories = [
    {
      name: 'Artisan Pizza',
    },
    {
      name: 'Vegan Pizza',
    },
    {
      name: 'Cheese Pizza',
    },
  ];

  const menuItems = [
    {
      name: 'Pepperoni',
      image:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA',
    },
    {
      name: 'Margherita',
      image:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA',
    },
  ];

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar
        icon={<MenuIcon />}
        navButton="restaurant"
        onClick={() => {}}
        onClickLogout={() => {}}
        title="Menu details"
      />
      <div className="mb-2">
        <NavbarMiddle
          color="accent-content"
          onClick={() => {}}
          title="Categories"
        />
      </div>
      <div className="mb-8">
        <CategoryTable
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      {selectedCategory && (
        <div>
          <div className="mb-2">
            <NavbarMiddle
              color="accent"
              onClick={() => {}}
              title={selectedCategory.name}
            />
          </div>
          <MenuItemsTable menuItems={menuItems} />
        </div>
      )}
    </div>
  );
};
