import React, { useState } from 'react';
import { NavbarArrow } from '../../components/Navigation/NavbarArrow/NavbarArrow';
import { Tablerow } from '../../components/Tablerow/Tablerow';

const OrderPage = () => {
  const [rows, setRows] = useState([
    {
      name: 'Pepperoni',
      img_url:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      price: 12,
      quantity: 2,
      sub_total: 24,
    },
    {
      name: 'Pepperoni',
      img_url:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      price: 12,
      quantity: 2,
      sub_total: 24,
    },
  ]);

  const handleDeleteRow = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <>
      <NavbarArrow link="/" linkName="MENU" restaurantName="La mia Pizza" />

      <div className="overflow-x-auto">
        <table className="table table-zebra table-pin-rows table-pin-cols">
          {/*table head*/}
          <thead>
            <tr>
              <th>Dish</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          {/*table body*/}
          <tbody>
            {rows.map((row, index: number) => (
              <Tablerow
                key={index}
                {...row}
                onDelete={() => handleDeleteRow(index)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderPage;
