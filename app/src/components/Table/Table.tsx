import React from 'react';

const Table = ({
  children,
  headers,
}: {
  children: React.ReactNode[];
  headers: string[];
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export { Table };
