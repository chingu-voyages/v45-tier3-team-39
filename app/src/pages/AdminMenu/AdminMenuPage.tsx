import React, { useState, useEffect } from 'react';
import { Category, MenuItem } from '@ordr/types';
import { Navbar } from '~src/components/Navigation/Navbar/Navbar';
import { MenuIcon } from '~src/components/Icons/MenuIcon';
import { NavbarMiddle } from '~src/components/Navigation/NavbarMiddle/NavbarMiddle';
import { CategoryTable } from './components/CategoryTable';
import { MenuItemsTable } from './components/MenuItemsTable';
import AddMenuItemModal from './components/AddMenuItemModal';
import AddCategoryItemModal from './components/AddCategoryItemModal';
import EditCategoryItemModal from './components/EditCategoryModal';
import EditMenuItemModal from './components/EditMenuItemModal';

export const AdminMenuPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category>();
  const [showEditMenuItemModal, setShowEditMenuItemModal] = useState(false);
  const [menuItemToEdit, setMenuItemToEdit] = useState<MenuItem>();

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

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, []);

  const handleCategorySelect = (id: string) => {
    const categoryToSelect = categories.find((category) => category._id === id);
    setSelectedCategory(categoryToSelect);
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await fetch(`http://localhost:2023/api/menu-items/${id}`, {
        method: 'DELETE',
      });
      await fetchMenuItems();
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  const handleAddItem = async ({
    name,
    description,
    price,
    imageUrl,
  }: {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }) => {
    try {
      await fetch(`http://localhost:2023/api/menu-items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image_url: imageUrl,
          category: selectedCategory?._id,
        }),
      });
      await fetchMenuItems();
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  const handleAddCategory = async ({ name }: { name: string }) => {
    try {
      await fetch(`http://localhost:2023/api/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      });
      await fetchCategories();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await fetch(`http://localhost:2023/api/categories/${id}`, {
        method: 'DELETE',
      });
      await fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleSelectCategoryToEdit = (id: string) => {
    const categoryToEdit = categories.find((category) => category._id === id);
    setCategoryToEdit(categoryToEdit);
    setShowEditCategoryModal(true);
  };

  const handleEditCategory = async ({ name }: { name: string }) => {
    if (categoryToEdit) {
      try {
        await fetch(
          `http://localhost:2023/api/categories/${categoryToEdit._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
            }),
          }
        );
        await fetchCategories();
      } catch (error) {
        console.error('Error updating category:', error);
      }
    }
  };

  const handleSelectMenuItemToEdit = (id: string) => {
    const menuItemToEdit = menuItems.find((item) => item._id === id);
    setMenuItemToEdit(menuItemToEdit);
    setShowEditMenuItemModal(true);
  };

  const handleEditMenuItem = async ({
    name,
    description,
    price,
    imageUrl,
  }: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }) => {
    if (menuItemToEdit) {
      try {
        await fetch(
          `http://localhost:2023/api/menu-items/${menuItemToEdit._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              description,
              price,
              image_url: imageUrl,
              category: selectedCategory?._id,
            }),
          }
        );
        await fetchMenuItems();
      } catch (error) {
        console.error('Error adding menu item:', error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {showAddMenuItemModal && selectedCategory && (
        <AddMenuItemModal
          category={selectedCategory}
          onClose={() => setShowAddMenuItemModal(false)}
          onAdd={handleAddItem}
        />
      )}
      {showAddCategoryModal && (
        <AddCategoryItemModal
          onAdd={handleAddCategory}
          onClose={() => setShowAddCategoryModal(false)}
        />
      )}
      {showEditCategoryModal && categoryToEdit && (
        <EditCategoryItemModal
          category={categoryToEdit}
          onClose={() => setShowEditCategoryModal(false)}
          onSave={handleEditCategory}
        />
      )}
      {showEditMenuItemModal && menuItemToEdit && (
        <EditMenuItemModal
          menuItem={menuItemToEdit}
          onClose={() => setShowEditMenuItemModal(false)}
          onSave={handleEditMenuItem}
        />
      )}
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
          onClick={() => setShowAddCategoryModal(true)}
          title="Categories"
        />
      </div>
      <div className="mb-8">
        <CategoryTable
          categories={categories}
          onCategorySelect={handleCategorySelect}
          onDelete={handleDeleteCategory}
          onEdit={handleSelectCategoryToEdit}
        />
      </div>
      {selectedCategory && (
        <div>
          <div className="mb-2">
            <NavbarMiddle
              color="accent"
              onClick={() => {
                setShowAddMenuItemModal(true);
              }}
              title={selectedCategory.name}
            />
          </div>
          <MenuItemsTable
            menuItems={menuItems.filter(
              (item) => item.category._id === selectedCategory._id
            )}
            onDelete={handleDeleteItem}
            onEdit={handleSelectMenuItemToEdit}
          />
        </div>
      )}
    </div>
  );
};
