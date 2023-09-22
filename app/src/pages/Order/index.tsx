import React from 'react';
import { useRecoilState } from 'recoil';
import { NavbarArrow } from '~src/components/Navigation/NavbarArrow/NavbarArrow';
import { Button } from '~src/components/Button/Button';
import { basketState } from '~src/atoms';
import { Alert } from '~src/components/Alert';
import { InfoIcon } from '~src/components/Icons/InfoIcon';
import { OrderTable } from './components/OrderTable';
import { apiURL } from '~src/urls';

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

    await fetch(`${apiURL}/orders`, {
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
      <div className="overflow-x-auto p-4">
        <OrderTable items={basketItems} onDelete={handleDeleteItem} />
        {!basketItems.length && (
          <Alert
            title="Basket is empty"
            color="info"
            customClasses="max-w-md m-4"
            Icon={<InfoIcon />}
          />
        )}
        {basketItems.length > 0 && (
          <div className="flex justify-end p-3">
            <Button title="Give me my food!" onClick={handleOrder} />
          </div>
        )}
      </div>
    </>
  );
};
