// ItemDetailsPage.tsx
import React, { useState } from 'react';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { RestaurantIcon } from '../../components/Icons/RestaurantIcon';
import AdminRestaurantForm from './AdminRestaurantForm';
import * as t from './AdminRestaurantTypes';

export const AdminRestaurantPage = () => {
  const [formData, setFormData] = useState<t.FormData>({
    RestaurantName: '',
    logoImage: null,
    numberOfTables: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    if (files !== null) {
      const newValue = type === 'file' ? files[0] : value;
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar
        icon={<RestaurantIcon />}
        navButton="menu"
        onClick={() => {}}
        onClickLogout={() => {}}
        title="Restaurant"
      />
      <AdminRestaurantForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
