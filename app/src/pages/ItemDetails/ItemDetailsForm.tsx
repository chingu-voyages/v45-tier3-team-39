// ItemDetailsForm.tsx
import React from 'react';
import { TextInput } from '../../components/Input/TextInput/TextInput';
import { FileInput } from '../../components/Input/FileInput/FileInput';
import { Select } from '../../components/Input/Select/Select';
import { Textarea } from '../../components/Input/Textarea/Textarea';
import { Button } from '../../components/Button/Button';
import * as t from './ItemDetailsTypes';

export const ItemDetailsForm = ({
  formData,
  onInputChange,
  onSubmit,
  onTextChange,
  onSelectChange,
}: t.ItemDetailsProps) => {
  return (
    <form className="space-y-4">
      <TextInput
        color="accent"
        label="Dish name"
        name="dishName"
        onChange={onInputChange}
        placeholder="Name"
        type="text"
        value={formData.dishName}
        width="w-full"
      />
      <Select
        color="accent"
        label="Category"
        name="category"
        onChange={onSelectChange}
        options={['A', 'B', 'C']}
        value={formData.selectValue}
        width="w-full"
      />
      <FileInput
        color="accent"
        label="Image"
        name="image"
        onChange={onInputChange}
        width="w-full"
      />
      <Textarea
        label="Description"
        name="description"
        onChange={onTextChange}
        placeholder="Description"
        value={formData.textareaValue}
        width="w-full"
      />
      <TextInput
        color="accent"
        label="Price"
        name="price"
        onChange={onInputChange}
        placeholder="£0"
        type="number"
        value={formData.price}
        width="w-min"
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

export default ItemDetailsForm;
