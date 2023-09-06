import React from 'react';
import * as types from './TablerowTypes';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { IconButton } from '../IconButton/IconButton';
import { BinIcon } from '../Icons/BinIcon';
//component
export const Tablerow = ({
  name,
  img_url,
  quantity,
  sub_total,
  onDelete,
}: types.TablerowProps) => {
  return (
    <tr>
      <th>
        <div className="flex items-center space-x-3">
          <Thumbnail src={img_url} alt={name} />
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </th>
      <td>{quantity}</td>
      <td>£{sub_total}</td>
      <th>
        <IconButton
          Icon={<BinIcon />}
          color="ghost"
          onClick={() => onDelete()}
          variant="solid"
        />
      </th>
    </tr>
  );
};
