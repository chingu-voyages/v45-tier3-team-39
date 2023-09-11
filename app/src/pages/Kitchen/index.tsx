import React from 'react';
import { Navbar } from 'src/components/Navigation/Navbar/Navbar';
import { Kitchen } from 'src/components/Icons/Kitchen';
import { KitchenRowModal } from 'src/components/Table/KitchenRowModal';
import { Table } from 'src/components/Table';
import { TableRow } from 'src/components/Table';
import { ordersState, Order } from 'src/atoms';
import { orders } from 'src/seeds';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { DeleteIcon } from 'src/components/Icons/DeleteIcon';
import { findNumberOfPropertyValuesInArrayOfObjects } from 'src/utils';
import classes from 'src/components/Badge/classes';

export const KitchenPage = (): JSX.Element => {
  const [restaurantOrders, setRestaurantOrders] = useRecoilState(ordersState);
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  useEffect(() => {
    setRestaurantOrders([...restaurantOrders, ...orders]);
  }, []);

  type StatusClass = {
    ordered: string;
    preparing: string;
    ready: string;
  };
  const statusClass: StatusClass = {
    ordered: `badge ${classes.size['lg']} px-8`,
    preparing: `badge ${classes.size['lg']} ${classes.color['info']} px-6`,
    ready: `badge ${classes.size['lg']} ${classes.color['warning']} px-10`,
  };

  const tableRows = restaurantOrders.map((order) => {
    const categoriesInOrder = findNumberOfPropertyValuesInArrayOfObjects(
      order.items,
      'category'
    );

    return (
      <TableRow
        key={order._id}
        rowClass="select-none"
        data={[
          { value: '' },
          { value: order.table },
          { value: order._id },
          {
            value: (
              <div
                className={`cursor-pointer ${
                  statusClass[order.orderStatus as keyof StatusClass]
                }`}
                onClick={() => setSelectedOrder(order)}
              >
                {order.orderStatus}
              </div>
            ),
          },
          { value: categoriesInOrder },
          {
            value: (
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => console.log(order._id)}
              >
                <DeleteIcon />
              </button>
            ),
          },
        ]}
      />
    );
  });

  return (
    <div>
      <Navbar
        icon={<Kitchen />}
        title="Kitchen"
        onClick={() => console.log('clicked')}
        onClickLogout={() => console.log('logged out')}
      />
      <div className="overflow-x-auto">
        <Table headers={['', 'Table', 'Order', 'Status', 'Items', 'Delete']}>
          {tableRows}
        </Table>
      </div>
      {selectedOrder && (
        <KitchenRowModal
          order_id={selectedOrder._id}
          table={selectedOrder.table}
          items={selectedOrder.items}
          onClose={() => setSelectedOrder(undefined)}
        />
      )}
    </div>
  );
};
