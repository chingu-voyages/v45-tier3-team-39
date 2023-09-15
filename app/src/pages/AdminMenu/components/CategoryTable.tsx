import React from 'react';
import { IconButton } from '../../../components/IconButton/IconButton';
import { BinIcon } from '../../../components/Icons/BinIcon';
import { EditIcon } from '../../../components/Icons/EditIcon';
import { Button } from '../../../components/Button/Button';
import { TableRow } from '../../../components/Table';

type Category = {
  name: string;
};

export const CategoryTable = ({
  categories,
  onCategorySelect,
}: {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
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
                    onClick={() => onCategorySelect(item)}
                  />
                ),
              },
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
