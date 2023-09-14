import React from 'react';
import { TableRowProps } from './types';

export const TableRow = ({ rowClass, data }: TableRowProps) => {
  return (
    <tr className={rowClass}>
      {data.map(({ value }, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
