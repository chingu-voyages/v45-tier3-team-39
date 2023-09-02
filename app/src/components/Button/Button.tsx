import React from 'react';
import { ButtonProps } from './types';
import classes from './classes';

export const Button = ({
  title,
  size = 'md',
  color = 'primary',
  variant = 'solid',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${classes.color[color]} ${classes.size[size]} ${classes.variant[variant]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
