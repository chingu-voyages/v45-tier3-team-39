import React from 'react';
import { Thumbnail } from '~src/components/Thumbnail/Thumbnail';
import { IconButton } from '~src/components/IconButton/IconButton';
import { BinIcon } from '~src/components/Icons/BinIcon';
import { EditIcon } from '~src/components/Icons/EditIcon';
import { TableRow } from '~src/components/Table';
import { MenuItem } from '@ordr/types';

export const MenuItemsTable = ({
  menuItems,
  onDelete,
  onEdit,
}: {
  menuItems: MenuItem[];
  onDelete: (id: string) => Promise<void>;
  onEdit: (id: string) => void;
}) => {
  return (
    <table className="table table-zebra table-sm">
      <tbody>
        {menuItems.map((item, index) => (
          <TableRow
            key={index}
            data={[
              {
                value: <Thumbnail src={item.image_url} alt={item.name} />,
              },
              { value: <div className="font-bold">{item.name}</div> },
              {
                value: (
                  <IconButton
                    Icon={<EditIcon />}
                    color="ghost"
                    onClick={() => onEdit(item._id)}
                    variant="solid"
                  />
                ),
              },
              {
                value: (
                  <IconButton
                    Icon={<BinIcon />}
                    color="ghost"
                    onClick={() => onDelete(item._id)}
                    variant="solid"
                  />
                ),
              },
            ]}
          />
        ))}
      </tbody>
    </table>
  );
};
