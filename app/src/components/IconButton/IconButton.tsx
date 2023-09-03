import React from 'react';
import { IconButtonProps } from './types';
import classes from './classes';

export const IconButton = ({
  Icon,
  variant = 'solid',
  shape = 'circle',
  color = 'primary',
  size = 'md',
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={`btn ${classes.shape[shape]} ${classes.color[color]} ${classes.variant[variant]} ${classes.size[size]} `}
      onClick={onClick}
    >
      {Icon}
    </button>
  );
};
