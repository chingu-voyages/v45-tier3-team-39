import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { NavbarMiddle } from '../../components/Navigation/NavbarMiddle/NavbarMiddle';
import { CategoryTable } from './components/CategoryTable';
import { MenuItemsTable } from './components/MenuItemsTable';

type Category = {
  name: string;
};

type MenuItem = {
  _id: string;
  name: string;
  image_url: string;
  category: {
    _id: string;
    name: string;
  };
};

export const AdminMenuPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://localhost:2023/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    async function fetchMenuItems() {
      try {
        const response = await fetch('http://localhost:2023/api/menu-items');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    }

    fetchCategories();
    fetchMenuItems();
  }, []);

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
          <MenuItemsTable
            menuItems={menuItems.filter(
              (item) => item.category.name === selectedCategory.name
            )}
          />
        </div>
      )}
    </div>
  );
};
