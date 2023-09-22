import React, { useState, useEffect } from 'react';
import { Order } from '~src/atoms';
import { Navbar } from '~src/components/Navigation/Navbar/Navbar';
import { Kitchen } from '~src/components/Icons/Kitchen';
import { KitchenRowModal } from '~src/components/Modals/KitchenRowModal';
import { Table } from '~src/components/Table';
import { TableRow } from '~src/components/Table';
import { DeleteIcon } from '~src/components/Icons/DeleteIcon';
import { Badge } from '~src/components/Badge/Badge';
import { IconButton } from '~src/components/IconButton/IconButton';
import { findArrayIndex, replaceItemAtIndex } from '~src/utils';
import { BadgeColor } from '~src/components/Badge/types';
import io from 'socket.io-client';

const socket = io('https://ordr-be.onrender.com:8000/', {
  transports: ['websocket', 'xhr-polling'],
});

export const KitchenPage = () => {
  const [restaurantOrders, setRestaurantOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch('https://ordr-be.onrender.com/api/orders');
      const data = await res.json();
      setRestaurantOrders(data.orders);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    socket.on('newOrder', (order) => {
      console.log(order);
      setRestaurantOrders((curr) => {
        return [...curr, order];
      });
    });
    return () => {
      socket.off('newOrder');
      socket.removeAllListeners();
    };
  }, []);

  const handleDeleteOrder = async (order_id: string) => {
    const res = await fetch(
      `https://ordr-be.onrender.com/api/orders/${order_id}`,
      {
        method: 'DELETE',
      }
    );
    if (res.status === 200) {
      const newOrders = restaurantOrders.filter(
        (order) => order._id !== order_id
      );
      setRestaurantOrders(newOrders);
    }
  };

  const handleUpdateOrderStatus = (updatedOrder: Order) => {
    const index = findArrayIndex(restaurantOrders, (order) => {
      return order._id === updatedOrder._id;
    });
    const updatedOrders = replaceItemAtIndex(
      restaurantOrders,
      index,
      updatedOrder
    );
    setRestaurantOrders(updatedOrders);
  };

  const statusClass: { [key: string]: BadgeColor } = {
    ordered: `primary`,
    preparing: `secondary`,
    ready: `success`,
  };

  const copyOfRestaurantOrders = [...restaurantOrders];

  const orderByStatus = copyOfRestaurantOrders.sort((orderA, orderB) =>
    orderA.orderStatus > orderB.orderStatus ? 1 : -1
  );

  const getItemsOverview = (items: Order['items']) => {
    return items.map((item, i) => (
      <div className="mr-2 inline-block" key={i}>
        <Badge
          label={`${item.name} (${item.category.name}) x ${item.quantity}`}
          size="lg"
        />
      </div>
    ));
  };

  const tableRows = orderByStatus.map((order) => {
    return (
      <TableRow
        key={order._id}
        onClick={() => setSelectedOrder(order)}
        rowClass="select-none cursor-pointer"
        data={[
          { value: '' },
          { value: order.table },
          { value: order._id },
          {
            value: (
              <Badge
                label={order.orderStatus.toUpperCase()}
                color={statusClass[order.orderStatus]}
                size="lg"
              />
            ),
          },
          { value: getItemsOverview(order.items) },
          {
            value: (
              <IconButton
                onClick={(e) => {
                  e?.stopPropagation();
                  handleDeleteOrder(order._id);
                }}
                Icon={<DeleteIcon />}
                color="ghost"
              />
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
        <Table headers={['', 'Table', 'Order ID', 'Status', 'Items', 'Delete']}>
          {tableRows}
        </Table>
      </div>
      {selectedOrder && (
        <KitchenRowModal
          order_id={selectedOrder._id}
          table={selectedOrder.table}
          items={selectedOrder.items}
          onClose={() => setSelectedOrder(undefined)}
          onUpdateOrderStatus={handleUpdateOrderStatus}
        />
      )}
    </div>
  );
};
