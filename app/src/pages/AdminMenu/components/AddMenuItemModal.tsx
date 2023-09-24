import { Category } from '@ordr/types';
import React from 'react';
import { Button } from '~src/components/Button/Button';
import { TextInput } from '~src/components/Input/TextInput/TextInput';
import Modal from '~src/components/Modals/Modal';
import { LoadingPage } from '~src/pages/Loading';

type AddMenuItemModalProps = {
  onClose: () => void;
  onAdd: ({
    name,
    description,
    price,
    imageUrl,
  }: {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }) => Promise<void>;
  category: Category;
};

const AddMenuItemModal = ({ onClose, onAdd }: AddMenuItemModalProps) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddMenuItem = async () => {
    setIsLoading(true);
    await onAdd({
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
    <Modal title="Add Menu Item" description="">
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
        onChange={(e) => setPrice(e.target.value)}
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
        <Button title="Add" onClick={handleAddMenuItem} />
      </div>
    </Modal>
  );
};

export default AddMenuItemModal;
