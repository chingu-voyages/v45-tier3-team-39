import React from 'react';
import { useRecoilState } from 'recoil';
import { NavbarArrow } from '~src/components/Navigation/NavbarArrow/NavbarArrow';
import { Button } from '~src/components/Button/Button';
import { basketState } from '~src/atoms';
import { OrderTable } from './components/OrderTable';

export const OrderPage = () => {
  const [basketItems, setBaketItems] = useRecoilState(basketState);

  const handleDeleteItem = (id: string) => {
    const newItems = basketItems.filter((item) => item.id !== id);
    setBaketItems(newItems);
  };

  const handleOrder = async () => {
    const items = basketItems.map((item) => ({
      ...item,
      subtotal: item.price * item.quantity,
    }));

    await fetch('https://ordr-be.onrender.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table: 0,
        items,
      }),
    });
  };

  return (
    <>
      <NavbarArrow link="/menu" linkName="Back" restaurantName="La mia Pizza" />
      <div className="overflow-x-auto">
        <OrderTable items={basketItems} onDelete={handleDeleteItem} />
        <div className="flex justify-end p-3">
          <Button title="Give me my food!" onClick={handleOrder} />
        </div>
      </div>
    </>
  );
};
