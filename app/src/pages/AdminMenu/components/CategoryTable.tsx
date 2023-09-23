import React from 'react';
import { IconButton } from '../../../components/IconButton/IconButton';
import { BinIcon } from '../../../components/Icons/BinIcon';
import { EditIcon } from '../../../components/Icons/EditIcon';
import { Button } from '../../../components/Button/Button';
import { TableRow } from '../../../components/Table';
import { Category } from '@ordr/types';

export const CategoryTable = ({
  categories,
  onCategorySelect,
  onDelete,
  onEdit,
}: {
  categories: Category[];
  onCategorySelect: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}) => {
  return (
    <table className="table table-zebra table-sm">
      <tbody>
        {categories.map((item, index) => (
          <TableRow
            key={index}
            data={[
              { value: <div className="font-bold">{item.name}</div> },
              {
                value: (
                  <Button
                    title="SELECT"
                    size="sm"
                    color="dark"
                    variant="outline"
                    onClick={() => onCategorySelect(item._id)}
                  />
                ),
              },
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
