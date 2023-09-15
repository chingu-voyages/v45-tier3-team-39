import React from 'react';
import * as types from './NavbarMiddleTypes';
//import { Button } from '../../Button/Button';
import { PlusIcon } from '../../Icons/PlusIcon';
import classes from './classes';

//component
export const NavbarMiddle = ({
  title = 'title',
  color = 'accent',
  onClick,
}: types.NavbarMiddleProps) => {
  const colorClass = classes.color[color as types.NavbarMiddleColor];
  return (
    <div className={`p-3 flex rounded justify-between ${colorClass}`}>
      <h2 className="text-xl text-base-100 font-semibold tracking-wider">
        {title}
      </h2>
      <button className="btn btn-sm bg-base-100" onClick={onClick}>
        Add
        <PlusIcon />
      </button>
    </div>
  );
};
