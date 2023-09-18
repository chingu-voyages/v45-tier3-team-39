// AdminMenuPage.tsx
import React from 'react';
import { Navbar } from '~src/components/Navigation/Navbar/Navbar';
import { MenuIcon } from '~src/components/Icons/MenuIcon';
import { NavbarMiddle } from '~src/components/Navigation/NavbarMiddle/NavbarMiddle';
import { IconButton } from '~src/components/IconButton/IconButton';
import { BinIcon } from '~src/components/Icons/BinIcon';
import { EditIcon } from '~src/components/Icons/EditIcon';
import { Button } from '~src/components/Button/Button';
import { TableRow } from '~src/components/Table';

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
      <table className="table table-zebra table-sm">
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};
