import React from 'react';
import { Button } from 'src/components/Button/Button';
import { useRecoilState } from 'recoil';
import { ordersState } from 'src/atoms';
import { Stat } from 'src/components/Stat/Stat';
import { Table } from 'src/components/Table/Table';
import { TableRow } from 'src/components/Table/TableRow';

type OrderItem = {
  name: string;
  category: string;
  quantity: number;
  price: number;
  subtotal: number;
};

interface KitchenRowModalProps {
  order_id: string;
  table: number;
  items: OrderItem[];
  onClose: () => void;
}

export const KitchenRowModal = ({
  order_id,
  table,
  items,
  onClose,
}: KitchenRowModalProps): JSX.Element => {
  const [updatedOrders, setUpdatedOrders] = useRecoilState(ordersState);

  const handleOrderStatus = (status: string) => {
    const newOrders = updatedOrders.map((order) => {
      if (order._id === order_id) {
        return { ...order, orderStatus: status };
      } else {
        return order;
      }
    });
    setUpdatedOrders(newOrders);
  };

  return (
    <dialog id="ordr-modal" className="modal" open>
      <div className="modal-box">
        <div className="absolute right-2 top-2">
          <Button
            color="light"
            title="x"
            size="sm"
            variant="circle"
            onClick={onClose}
          />
        </div>
        <div className="pb-4 flex gap-4 justify-center">
          <Stat
            background="secondary"
            align="responsive"
            stats={[
              { title: 'Table', value: table, justify: 'center' },
              { title: 'Order', value: order_id },
            ]}
          />
        </div>
        <div>
          <div className="overflow-x-auto">
            <Table headers={['Image', 'Item', 'Category', 'Quantity']}>
              {items.map((item) => {
                return (
                  <TableRow
                    key={item.name}
                    rowClass="select-none"
                    data={[
                      { value: '' },
                      { value: item.name },
                      { value: item.category },
                      { value: item.quantity },
                    ]}
                  />
                );
              })}
            </Table>
          </div>
        </div>
        <br />
        <div className="card-actions justify-end">
          <Button
            variant="outline"
            size="sm"
            color="info"
            title="Preparing"
            onClick={() => {
              handleOrderStatus('preparing');
              onClose();
            }}
          />
          <Button
            variant="outline"
            size="sm"
            color="accent"
            title="Ready"
            onClick={() => {
              handleOrderStatus('ready');
              onClose();
            }}
          />
        </div>
      </div>
    </dialog>
  );
};
