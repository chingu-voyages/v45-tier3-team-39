// AdminMenuPage.tsx
import React from 'react';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { NavbarMiddle } from '../../components/Navigation/NavbarMiddle/NavbarMiddle';
import { IconButton } from '../../components/IconButton/IconButton';
import { BinIcon } from '../../components/Icons/BinIcon';
import { EditIcon } from '../../components/Icons/EditIcon';
import { Button } from '../../components/Button/Button';
import { TableRow } from '../../components/Table';

export const AdminMenuPage = () => {
  const categories = [
    {
      name: 'Artisan Pizza',
    },
    {
      name: 'Vegan Pizza',
    },
    {
      name: 'Cheese Pizza',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar
        icon={<MenuIcon />}
        navButton="restaurant"
        onClick={() => {}}
        onClickLogout={() => {}}
        title="Menu details"
      />
      <div className="mb-2">
        <NavbarMiddle
          color="accent-content"
          onClick={() => {}}
          title="Categories"
        />
      </div>
      <div className="table table-zebra table-sm">
        {categories.map((item, index) => (
          <TableRow
            key={index}
            data={[
              { value: item.name },
              {
                value: (
                  <Button
                    title="SELECT"
                    size="sm"
                    color="dark"
                    variant="outline"
                    onClick={() => {}}
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
      </div>
    </div>
  );
};
