import React from 'react';
import { BadgeProps } from './types';
import classes from './classes';

export const Badge = ({
  label,
  size = 'md',
  variant = 'solid',
  color = 'primary',
}: BadgeProps) => {
  return (
    <span
      className={`badge ${classes.color[color]} ${classes.variant[variant]} ${classes.size[size]}`}
    >
      {label}
    </span>
  );
};
