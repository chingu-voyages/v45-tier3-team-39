import React from 'react';
import { Button } from '~src/components/Button/Button';
import { OrderItem, Order } from '~src/atoms';
import { Stat } from '~src/components/Stat/Stat';
import { Table } from '~src/components/Table/Table';
import { TableRow } from '~src/components/Table/TableRow';

interface KitchenRowModalProps {
  order_id: string;
  table: number;
  items: OrderItem[];
  onClose: () => void;
  onUpdateOrderStatus: (item: Order) => void;
}

export const KitchenRowModal = ({
  order_id,
  table,
  items,
  onUpdateOrderStatus,
  onClose,
}: KitchenRowModalProps): JSX.Element => {
  const handleUpdateOrderStatus = async (status: string) => {
    const res = await fetch(`http://localhost:2023/api/orders/${order_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const json = await res.json();
    if (json.success) {
      onUpdateOrderStatus(json.order);
    }
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
                      { value: item.category.name },
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
              handleUpdateOrderStatus('preparing');
              onClose();
            }}
          />
          <Button
            variant="outline"
            size="sm"
            color="accent"
            title="Ready"
            onClick={() => {
              handleUpdateOrderStatus('ready');
              onClose();
            }}
          />
        </div>
      </div>
    </dialog>
  );
};
