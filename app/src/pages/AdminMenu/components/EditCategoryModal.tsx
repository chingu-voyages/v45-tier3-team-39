import React from 'react';
import { Button } from '~src/components/Button/Button';
import { TextInput } from '~src/components/Input/TextInput/TextInput';
import Modal from '~src/components/Modals/Modal';
import { LoadingPage } from '~src/pages/Loading';
import { Category } from '@ordr/types';

type EditCategoryItemModal = {
  onClose: () => void;
  onSave: ({ name }: { name: string }) => Promise<void>;
  category: Category;
};

const EditCategoryItemModal = ({
  onClose,
  onSave,
  category,
}: EditCategoryItemModal) => {
  const [name, setName] = React.useState(category.name);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEditCategory = async () => {
    setIsLoading(true);
    await onSave({
      name,
    });
    onClose();
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Modal title="Edit Category" description="">
      <TextInput
        label="Name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div className="mt-3 flex gap-2 justify-end">
        <Button title="Cancel" variant="ghost" onClick={onClose} />
        <Button title="Save" onClick={handleEditCategory} />
      </div>
    </Modal>
  );
};

export default EditCategoryItemModal;
