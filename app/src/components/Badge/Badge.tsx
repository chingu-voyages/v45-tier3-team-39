import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BadgeProps } from './types';
import classes from './classes';

export const Badge = ({
  label,
  size = 'md',
  variant = 'solid',
  color = 'primary',
  customClasses,
}: BadgeProps) => {
  return (
    <span
      className={twMerge(
        `badge ${classes.color[color]} ${classes.variant[variant]} ${classes.size[size]}`,
        customClasses
      )}
    >
      {label}
    </span>
  );
};
