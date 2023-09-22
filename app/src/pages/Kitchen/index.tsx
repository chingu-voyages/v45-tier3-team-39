import React from 'react';
import { Navbar } from '~src/components/Navigation/Navbar/Navbar';
import { Kitchen } from '~src/components/Icons/Kitchen';
import { KitchenRowModal } from '~src/components/Modals/KitchenRowModal';
import { Table } from '~src/components/Table';
import { TableRow } from '~src/components/Table';
import { ordersState, Order, OrderItem } from '~src/atoms';
import { orders } from '~src/seeds';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { DeleteIcon } from '~src/components/Icons/DeleteIcon';
import classes from '~src/components/Badge/classes';
import { Badge } from '~src/components/Badge/Badge';

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

  const copyOfRestaurantOrders = [...restaurantOrders];
  const orderByStatus = copyOfRestaurantOrders.sort((orderA, orderB) =>
    orderA.orderStatus > orderB.orderStatus ? 1 : -1
  );

  function countValuesOfProp(
    items: OrderItem[],
    cat: keyof OrderItem
  ): React.ReactNode {
    const refObj = Object.entries(
      items.reduce((acc, curr) => {
        acc[curr[cat]] = (acc[curr[cat]] || 0) + curr['quantity'];
        return acc;
      }, {} as Record<string, number>)
    );
    return refObj.map((catArr, ind) => {
      return (
        <Badge
          key={ind}
          label={`${catArr[1]} x ${catArr[0]}`}
          color={ind % 2 > 0 ? 'primary' : 'secondary'}
        />
      );
    });
  }

  const tableRows = orderByStatus.map((order) => {
    const categoriesInOrder = countValuesOfProp(order.items, 'category');
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
