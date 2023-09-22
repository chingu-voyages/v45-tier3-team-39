import React from 'react';
import { TableRowProps } from './types';

export const TableRow = ({ rowClass, data, onClick }: TableRowProps) => {
  return (
    <tr className={rowClass} onClick={onClick}>
      {data.map(({ value }, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
