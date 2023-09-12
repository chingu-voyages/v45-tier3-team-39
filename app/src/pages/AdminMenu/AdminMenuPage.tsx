// AdminMenuPage.tsx
import React from 'react';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { NavbarMiddle } from '../../components/Navigation/NavbarMiddle/NavbarMiddle';

export const AdminMenuPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar
        icon={<MenuIcon />}
        navButton="restaurant"
        onClick={() => {}}
        onClickLogout={() => {}}
        title="Menu details"
      />
      <div className="mb-8">
        <NavbarMiddle
          color="accent-content"
          onClick={() => {}}
          title="Categories"
        />
      </div>
    </div>
  );
};
