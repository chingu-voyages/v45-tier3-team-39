import React from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import { OrderTable } from './components/OrderTable';
import { useRecoilState } from 'recoil';
import { basketState } from '~src/atoms';
import { Alert } from '~src/components/Alert';

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
            Icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
          />
        )}
      </div>
    </>
  );
};
