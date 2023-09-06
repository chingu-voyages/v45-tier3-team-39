import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  findArrayIndex,
  replaceItemAtIndex,
  removeItemAtIndex,
} from 'src/utils';
import { BasketItem, basketState } from 'src/atoms';
import { Button } from 'src/components/Button/Button';

interface ModalProps {
  item_id: string;
  img_url: string;
  name: string;
  category: string;
  description: string;
  price: number;
  onClose: () => void;
}

const getItem = (id: string, items: BasketItem[]) =>
  items.find((item) => item.id === id);

export const CardModal = ({
  item_id,
  img_url,
  name,
  category,
  description,
  price,
  onClose,
}: ModalProps) => {
  const [itemsInOrder, setItemsInOrder] = useRecoilState(basketState);
  const item = getItem(item_id, itemsInOrder);
  const [inputQty, setInputQty] = useState(item?.quantity || 1);

  // function to add items to a basket which takes into consideration if the item is already in the basket
  const handleAddToOrder = () => {
    if (inputQty < 0) {
      alert('Please enter a valid quantity');
      return;
    }

    let newItems: BasketItem[];

    // if item already in order, update quantity
    if (item) {
      const index = findArrayIndex(itemsInOrder, (item) => item.id === item_id);

      switch (inputQty) {
        // if quantity is 0, remove item from order
        case 0:
          newItems = removeItemAtIndex(itemsInOrder, index);
          break;
        // if quantity is greater than 0, update quantity
        default:
          newItems = replaceItemAtIndex(itemsInOrder, index, {
            ...item,
            quantity: inputQty,
          });
      }
    } else {
      // if item not in order, add item to order
      newItems = [
        ...itemsInOrder,
        {
          id: item_id,
          quantity: inputQty,
          name,
          price,
          category,
          description,
        },
      ];
    }
    setItemsInOrder(newItems);
    onClose();
  };

  return (
    <dialog id="ordr-modal" className="modal" open>
      <div className="modal-box">
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
        <figure className="p-4">
          <img className="rounded-2xl object-cover" src={img_url} alt="" />
        </figure>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold pr-2">{name}</h2>
          <div className="badge badge-accent badge-outline badge-sm">
            {category}
          </div>
        </div>
        <p className="py-4">{description}</p>
        <div className="flex justify-between items-center pb-4">
          <input
            type="number"
            name="quantity"
            min={0}
            value={inputQty}
            onChange={(e) => setInputQty(+e.target.value)}
            className="input input-bordered max-w-3 focus:outline-none"
          />
          <p className="text-lg">£{price}</p>
        </div>
        <div className="card-actions justify-end">
          <Button
            title={`${item ? 'Update' : 'Add to'}  Order`}
            onClick={handleAddToOrder}
          />
        </div>
      </div>
    </dialog>
  );
};
