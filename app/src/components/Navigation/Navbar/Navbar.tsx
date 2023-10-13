import React from 'react';
import * as types from './NavbarTypes';
import { Button } from '../../Button/Button';

//component
export const Navbar = ({
  menu,
  icon,
  title = 'title',
  navButton,
  onClickLogout,
  onClick,
  action,
}: types.NavbarProps) => {
  return (
    <div className="navbar p-0 flex-col gap-y-4 px-3.5 sm:flex-row mb-4 fixed top-0 bg-base-100 z-10">
      <div className="navbar-start">{menu}</div>

      <div className="navbar-center">
        {icon}
        <h1 className="text-3xl font-semibold pl-2">{title}</h1>
      </div>

      <div className="navbar-end gap-4">
        <div>{action}</div>
        <Button
          color="light"
          onClick={onClickLogout}
          title="Log out"
          variant="outline"
        />
        {navButton && onClick && (
          <Button color="light" onClick={onClick} title={navButton} />
        )}
      </div>
    </div>
  );
};
