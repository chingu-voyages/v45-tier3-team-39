import React from 'react';
import { DeleteIcon } from '../Icons/DeleteIcon';
import { useRecoilValue } from 'recoil';
import { ordersState } from 'src/atoms';

interface KitchenTableRowProps {
  order_id: string;
  onSelect: () => void;
}

type StatusClass = {
  ordered: string;
  preparing: string;
  ready: string;
};

const statusClass: StatusClass = {
  ordered: 'badge badge-lg px-6',
  preparing: 'badge badge-lg  badge-info px-6',
  ready: 'badge badge-lg  badge-warning px-10',
};

export const KitchenTableRow = ({
  order_id,
  onSelect,
}: KitchenTableRowProps): JSX.Element => {
  const orders = useRecoilValue(ordersState);
  const order = orders.find((order) => order._id === order_id);
  const [orderStatus, table] = [order?.orderStatus, order?.table];

  return (
    <tr className="hover cursor-pointer" onClick={onSelect}>
      <td></td>
      <td className="pl-0">
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-2xl font-bold">{table}</p>
          </div>
        </div>
      </td>
      <td>
        <div className={statusClass[orderStatus as keyof StatusClass]}>
          {orderStatus}
        </div>
      </td>
      <td>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => console.log(order_id)}
        >
          <DeleteIcon />
        </button>
      </td>
      <td></td>
    </tr>
  );
};
