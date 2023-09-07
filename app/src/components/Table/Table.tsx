import React from 'react';
import { TableProps } from './types';

export const Table = ({ children, headers }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-pin-rows table-pin-cols">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};
