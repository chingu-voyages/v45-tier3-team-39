import React, { useState } from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import { OrderTable } from './components/OrderTable';

const OrderPage = () => {
  const handleDeleteRow = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const dataFromServer = [
    {
      name: 'Pepperoni',
      price: 12,
      image:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA',
    },
    {
      name: 'Margherita',
      price: 15,
      image:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA',
    },
  ];

  const [rows, setRows] = useState(dataFromServer);

  return (
    <>
      <NavbarArrow link="/" linkName="MENU" restaurantName="La mia Pizza" />
      <div className="overflow-x-auto">
        <OrderTable items={rows} onDelete={handleDeleteRow} />
      </div>
    </>
  );
};

export default OrderPage;
