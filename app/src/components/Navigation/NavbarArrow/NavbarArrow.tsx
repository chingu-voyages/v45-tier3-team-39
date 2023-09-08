import React from 'react';
import * as types from './NavbarArrowTypes';
import { LeftArrowIcon } from '../../Icons/LeftArrowIcon';

//component
export const NavbarArrow = ({
  link,
  linkName = 'MENU',
  restaurantName,
}: types.NavbarProps) => {
  return (
    <div className="navbar p-4 h-20">
      <div className="navbar-start">
        <a href={link} className="flex items-center">
          <LeftArrowIcon />
          {linkName}
        </a>
      </div>

      <div className="navbar-center">
        <h1 className="text-xl font-bold">{restaurantName}</h1>
      </div>
      <div className="navbar-end indicator"></div>
    </div>
  );
};
