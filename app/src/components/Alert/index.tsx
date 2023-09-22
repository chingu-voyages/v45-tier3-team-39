import React from 'react';
import { twMerge } from 'tailwind-merge';
import { AlertProps } from './types';
import { classes } from './classes';

export const Alert = ({
  title,
  description,
  color = 'dark',
  customClasses,
  Icon,
}: AlertProps) => {
  return (
    <div
      className={twMerge(
        `alert shadow-lg ${classes.color[color]}`,
        customClasses
      )}
    >
      {Icon}
      <div>
        <h3 className="font-bold">{title}</h3>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};
