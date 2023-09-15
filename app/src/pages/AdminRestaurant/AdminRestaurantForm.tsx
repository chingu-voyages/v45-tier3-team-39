// ItemDetailsForm.tsx
import React from 'react';
import { TextInput } from '../../components/Input/TextInput/TextInput';
import { FileInput } from '../../components/Input/FileInput/FileInput';
import { Button } from '../../components/Button/Button';
import * as t from './AdminRestaurantTypes';

export const AdminRestaurantForm = ({
  formData,
  onInputChange,
  onSubmit,
}: t.RestaurantDetailsProps) => {
  return (
    <form className="space-y-4">
      <TextInput
        color="accent"
        label="Restaurant name"
        name="restaurantName"
        onChange={onInputChange}
        placeholder="Name"
        type="text"
        value={formData.RestaurantName}
        width="w-full"
      />

      <FileInput
        color="accent"
        label="Logo image"
        name="logoImage"
        onChange={onInputChange}
        width="w-full"
      />
      <TextInput
        color="accent"
        label="Number of tables"
        name="numberOfTables"
        onChange={onInputChange}
        placeholder="0"
        type="number"
        value={formData.numberOfTables}
        width="w-full"
      />
      <div className="text-center pt-8">
        <Button
          color="accent"
          onClick={() => onSubmit}
          size="wide"
          title="save"
        />
      </div>
    </form>
  );
};

export default AdminRestaurantForm;
