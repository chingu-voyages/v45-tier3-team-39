import React from 'react';
import { TableRowProps } from './types';

export const TableRow = ({ data }: TableRowProps) => {
  return (
    <tr>
      {data.map(({ value }, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
