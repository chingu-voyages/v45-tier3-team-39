import React from 'react';

interface KmrProps {
  name: string;
  category: string;
  quantity: number;
}

export const KitchenModalRow = ({
  name,
  category,
  quantity,
}: KmrProps): JSX.Element => {
  return (
    <tr>
      <th></th>
      <td>
        <p className="text-2xl font-bold">{name}</p>
      </td>
      <td>{category}</td>
      <td>
        <div>{quantity}</div>
      </td>
      <td></td>
    </tr>
  );
};
