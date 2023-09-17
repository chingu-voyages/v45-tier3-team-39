import React from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import { OrderTable } from './components/OrderTable';
import { useRecoilState } from 'recoil';
import { basketState } from 'src/atoms';

export const OrderPage = () => {
  const [basketItems, setBaketItems] = useRecoilState(basketState);

  const handleDeleteItem = (id: string) => {
    const newItems = basketItems.filter((item) => item.id !== id);
    setBaketItems(newItems);
  };

  return (
    <>
      <NavbarArrow link="/menu" linkName="Back" restaurantName="La mia Pizza" />
      <div className="overflow-x-auto">
        <OrderTable items={basketItems} onDelete={handleDeleteItem} />
      </div>
    </>
  );
};
