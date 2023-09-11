import React from 'react';
import { StatProps } from './types';

export const Stat = ({
  title,
  value,
  style = 'stats shadow',
  align = 'stat text-center',
  titleStyle = 'stat-title',
  valueStyle = 'stat-value',
}: StatProps) => {
  return (
    <div className={`${style}`}>
      <div className={`${align}`}>
        <div className={`${titleStyle}`}>{title}</div>
        <div className={`${valueStyle}`}>{value}</div>
      </div>
    </div>
  );
};
