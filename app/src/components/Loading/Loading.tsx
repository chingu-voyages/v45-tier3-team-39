import React from 'react';
import { LoadingProps } from './types';
import { classes } from './classes';

export const Loading = ({ size = 'md', color = 'light' }: LoadingProps) => {
  return (
    <span
      className={`loading loading-spinner ${classes.size[size]} ${classes.color[color]}`}
    ></span>
  );
};
