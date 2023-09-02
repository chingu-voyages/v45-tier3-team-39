import React from 'react';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { basketState } from '../atoms';

interface ModalProps {
  details: {
    item_id: string;
    img_url: string;
    name: string;
    category: string;
    description: string;
    price: number;
  };
  setItemId: (itemId: string) => void;
}

type BasketItem = {
  img_url: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
};

declare global {
  interface Window {
    'ordr-modal': {
      showModal: () => void;
    };
  }
}

const CardModal = ({ details, setItemId }: ModalProps): JSX.Element => {
  const { img_url, name, category, description, price } = details;
  const [itemsInBasket, setItemsInBasket] = useRecoilState(basketState);
  const [inputQty, setInputQty] = useState('1');

  useEffect(() => {
    window['ordr-modal'].showModal();
  }, []);

  const handlePlaceOrder = () => {
    const orderToSend: BasketItem = {
      img_url: '',
      name: '',
      category: '',
      description: '',
      price: 0,
      quantity: 0,
    };

    //check if item being added is already in the basket
    const repeatedItem = itemsInBasket.find((item) => item.name === name);
    if (repeatedItem) {
      //populate orderToSend object with details of item
      for (const key in details) {
        (orderToSend as any)[key] = (details as any)[key];
      }
      //add existent item units to the new item units
      orderToSend.quantity = parseInt(inputQty) + repeatedItem.quantity;
      //calculate array of rest of items
      const nonRepeatItems = itemsInBasket.filter((item) => item.name !== name);
      setItemsInBasket([...nonRepeatItems, orderToSend]);
    } else {
      for (const key in details) {
        (orderToSend as any)[key] = (details as any)[key];
      }
      orderToSend.quantity = parseInt(inputQty);
      setItemsInBasket([...itemsInBasket, orderToSend]);
    }
    setInputQty('1');
    setItemId('');
  };

  const handleModalClose = () => {
    setItemId('');
  };

  return (
    <dialog id="ordr-modal" className="modal">
      <div className="modal-box">
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2 focus:outline-none"
          onClick={handleModalClose}
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
            value={inputQty}
            onChange={(e) => setInputQty(e.target.value)}
            className="input input-bordered max-w-3 focus:outline-none"
          />
          <p className="text-lg">£{price}</p>
        </div>
        <button onClick={handlePlaceOrder} className="btn btn-accent btn-block">
          Add to Orders
        </button>
      </div>
    </dialog>
  );
};

export default CardModal;
