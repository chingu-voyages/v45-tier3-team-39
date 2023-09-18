import React from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import { OrderTable } from './components/OrderTable';
import { useRecoilState } from 'recoil';
import { basketState } from '~src/atoms';
import { Alert } from '~src/components/Alert';
import { InfoIcon } from '~src/components/Icons/InfoIcon';

export const OrderPage = () => {
  const [basketItems, setBaketItems] = useRecoilState(basketState);

  const handleDeleteItem = (id: string) => {
    const newItems = basketItems.filter((item) => item.id !== id);
    setBaketItems(newItems);
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
      </div>
    </>
  );
};
