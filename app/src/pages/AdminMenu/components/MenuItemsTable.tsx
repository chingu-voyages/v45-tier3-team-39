import React from 'react';
import { Thumbnail } from '../../../components/Thumbnail/Thumbnail';
import { IconButton } from '../../../components/IconButton/IconButton';
import { BinIcon } from '../../../components/Icons/BinIcon';
import { EditIcon } from '../../../components/Icons/EditIcon';
import { TableRow } from '../../../components/Table';

type MenuItem = {
  name: string;
  image_url: string;
};

export const MenuItemsTable = ({ menuItems }: { menuItems: MenuItem[] }) => {
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
                    onClick={() => {}}
                    variant="solid"
                  />
                ),
              },
              {
                value: (
                  <IconButton
                    Icon={<BinIcon />}
                    color="ghost"
                    onClick={() => {}}
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
