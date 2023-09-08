import React from 'react';
import { KitchenModalRow } from './KitchenModalRow';
import { Button } from 'src/components/Button/Button';
import { useRecoilState } from 'recoil';
import { ordersState } from 'src/atoms';

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
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="pb-4 flex gap-4 justify-center">
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-title">Table</div>
              <div className="stat-value">{table}</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-title">Order</div>
              <div className="stat-value">{order_id}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th></th>
                  <th>item</th>
                  <th>category</th>
                  <th>quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <KitchenModalRow
                      key={item.name}
                      name={item.name}
                      category={item.category}
                      quantity={item.quantity}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div className="card-actions justify-end">
          <Button
            variant="outline"
            size="sm"
            color="info"
            title="Preparing"
            onClick={() => handleOrderStatus('preparing')}
          />
          <Button
            variant="outline"
            size="sm"
            color="accent"
            title="Ready"
            onClick={() => handleOrderStatus('ready')}
          />
        </div>
      </div>
    </dialog>
  );
};
