import React from 'react';
import { Navbar } from 'src/components/Navigation/Navbar/Navbar';
import { Kitchen } from 'src/components/Icons/Kitchen';
import { KitchenTableRow } from 'src/components/Table/KitchenTableRow';
import { KitchenRowModal } from 'src/components/Table/KitchenRowModal';
import { ordersState, Order } from 'src/atoms';
import { orders } from 'src/seeds';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';

export const KitchenPage = (): JSX.Element => {
  const [restaurantOrders, setRestaurantOrders] = useRecoilState(ordersState);
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  useEffect(() => {
    setRestaurantOrders([...restaurantOrders, ...orders]);
  }, []);

  return (
    <div>
      <Navbar
        icon={<Kitchen />}
        title="Kitchen"
        onClick={() => console.log('clicked')}
        onClickLogout={() => console.log('logged out')}
      />
      <div className="overflow-x-auto">
        <table className="table table-zebra table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th className="pl-0">Table</th>
              <th>Order</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {restaurantOrders.map((order) => {
              return (
                <KitchenTableRow
                  key={order._id}
                  order_id={order._id}
                  onSelect={() => setSelectedOrder(order)}
                />
              );
            })}
          </tbody>
        </table>
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
