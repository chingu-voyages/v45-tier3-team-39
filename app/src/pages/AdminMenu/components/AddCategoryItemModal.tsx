import React from 'react';
import { Button } from '~src/components/Button/Button';
import { TextInput } from '~src/components/Input/TextInput/TextInput';
import Modal from '~src/components/Modals/Modal';
import { LoadingPage } from '~src/pages/Loading';

type AddCategoryItemModal = {
  onClose: () => void;
  onAdd: ({ name }: { name: string }) => Promise<void>;
};

const AddCategoryItemModal = ({ onClose, onAdd }: AddCategoryItemModal) => {
  const [name, setName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddMenuItem = async () => {
    setIsLoading(true);
    await onAdd({
      name,
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
      <div className="mt-3 flex gap-2 justify-end">
        <Button title="Cancel" variant="ghost" onClick={onClose} />
        <Button title="Add" onClick={handleAddMenuItem} />
      </div>
    </Modal>
  );
};

export default AddCategoryItemModal;
