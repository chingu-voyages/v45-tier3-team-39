import React from 'react';
import * as types from './NavbarTypes';
import { Button } from '../../Button/Button';

//component
export const Navbar = ({
  icon,
  title = 'title',
  navButton = 'MENU',
  onClickLogout,
  onClick,
}: types.NavbarProps) => {
  return (
    <div className="navbar p-0 flex-col gap-y-4 sm:flex-row mb-4">
      <div className="flex-1">
        {icon}
        <h1 className="text-3xl font-semibold pl-2">{title}</h1>
      </div>

      <div className="flex-none gap-4">
        <Button
          color="light"
          onClick={onClickLogout}
          title="Log out"
          variant="outline"
        />
        <Button color="light" onClick={onClick} title={navButton} />
      </div>
    </div>
  );
};
