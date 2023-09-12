// ItemDetailsPage.tsx
import React, { useState } from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import ItemDetailsForm from './ItemDetailsForm';
import * as t from './ItemDetailsTypes';

export const ItemDetailsPage = () => {
  const [formData, setFormData] = useState<t.FormData>({
    dishName: '',
    logoImage: null,
    price: 0,
    textareaValue: '',
    selectValue: '',
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

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <NavbarArrow link="/" linkName="MENU" restaurantName="" />
      <ItemDetailsForm
        formData={formData}
        onInputChange={handleInputChange}
        onTextChange={handleTextChange}
        onSelectChange={handleSelectChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
