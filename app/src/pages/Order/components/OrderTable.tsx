import React from 'react';
import { IconButton } from '../../../components/IconButton/IconButton';
import { BinIcon } from '../../../components/Icons/BinIcon';
import { Table, TableRow } from '../../../components/Table';
import { Thumbnail } from '../../../components/Thumbnail/Thumbnail';

type OrderItem = {
  name: string;
  price: number;
  image: string;
};

export const OrderTable = ({
  items,
  onDelete,
}: {
  items: OrderItem[];
  onDelete: (index: number) => void;
}) => {
  return (
    <Table headers={['Dish', 'Quantity', 'Subtotal', '']}>
      {items.map((item, index: number) => (
        <TableRow
          key={index}
          data={[
            {
              value: (
                <div className="flex items-center space-x-3">
                  <Thumbnail src={item.image} alt="pizza" />
                  <div className="font-bold">{item.name}</div>
                </div>
              ),
            },
            { value: item.price },
            { value: 2 },
            { value: item.price * 2 },
            {
              value: (
                <IconButton
                  Icon={<BinIcon />}
                  color="ghost"
                  onClick={() => onDelete(index)}
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
