import React from 'react';
import { Button } from '~src/components/Button/Button';
import { TextInput } from '~src/components/Input/TextInput/TextInput';
import Modal from '~src/components/Modals/Modal';
import { LoadingPage } from '~src/pages/Loading';
import { MenuItem } from '@ordr/types';

type EditMenuItemModalProps = {
  onClose: () => void;
  onSave: ({
    name,
    description,
    price,
    imageUrl,
  }: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }) => Promise<void>;
  menuItem: MenuItem;
};

const EditMenuItemModal = ({
  onClose,
  onSave,
  menuItem,
}: EditMenuItemModalProps) => {
  const [name, setName] = React.useState(menuItem.name);
  const [description, setDescription] = React.useState(menuItem.description);
  const [price, setPrice] = React.useState(menuItem.price);
  const [imageUrl, setImageUrl] = React.useState(menuItem.image_url);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEditMenuItem = async () => {
    setIsLoading(true);
    await onSave({
      name,
      description,
      price,
      imageUrl,
    });
    onClose();
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Modal title="Save Menu Item" description="">
      <TextInput
        label="Name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextInput
        label="Description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <TextInput
        label="Price"
        placeholder="Price"
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        value={price}
      />
      <TextInput
        label="Image URL"
        placeholder="Image URL"
        onChange={(e) => setImageUrl(e.target.value)}
        value={imageUrl}
      />
      <div className="mt-3 flex gap-2 justify-end">
        <Button title="Cancel" variant="ghost" onClick={onClose} />
        <Button title="Save" onClick={handleEditMenuItem} />
      </div>
    </Modal>
  );
};

export default EditMenuItemModal;
