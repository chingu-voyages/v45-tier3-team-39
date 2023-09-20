import React from 'react';
import { IconButton } from '~src/components/IconButton/IconButton';
import { BinIcon } from '~src/components/Icons/BinIcon';
import { Table, TableRow } from '~src/components/Table';
import { BasketItem } from '~src/atoms';

export const OrderTable = ({
  items,
  onDelete,
}: {
  items: BasketItem[];
  onDelete: (id: string) => void;
}) => {
  return (
    <Table headers={['Dish', 'Price', 'Quantity', 'Subtotal', '']}>
      {items.map((item, index: number) => (
        <TableRow
          key={index}
          data={[
            {
              value: (
                <div className="flex items-center space-x-3">
                  <div className="font-bold">{item.name}</div>
                </div>
              ),
            },
            { value: item.price },
            { value: item.quantity },
            { value: item.price * item.quantity },
            {
              value: (
                <IconButton
                  Icon={<BinIcon />}
                  color="ghost"
                  onClick={() => onDelete(item.id)}
                  variant="solid"
                />
              ),
            },
          ]}
        />
      ))}
    </Table>
  );
};
