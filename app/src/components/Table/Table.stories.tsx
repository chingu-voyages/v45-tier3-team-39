import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';
import { Table } from './Table';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { IconButton } from '../IconButton/IconButton';
import { BinIcon } from '../Icons/BinIcon';

const meta: Meta<typeof Table> = {
  title: 'DataDisplay/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type TableStory = StoryObj<typeof Table>;

const rows = [
  {
    data: [
      {
        value: (
          <div className="flex items-center space-x-3">
            <Thumbnail
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="pizza"
            />
            <div className="font-bold">Pepperoni</div>
          </div>
        ),
      },

      {
        value: 12,
      },
      {
        value: 2,
      },
      {
        value: 24,
      },
      {
        value: (
          <IconButton
            Icon={<BinIcon />}
            color="ghost"
            onClick={() => {}}
            variant="solid"
          />
        ),
      },
    ],
  },
  {
    data: [
      {
        value: (
          <div className="flex items-center space-x-3">
            <Thumbnail
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="pizza"
            />
            <div className="font-bold">Pepperoni</div>
          </div>
        ),
      },

      {
        value: 12,
      },
      {
        value: 2,
      },
      {
        value: 24,
      },
      {
        value: (
          <IconButton
            Icon={<BinIcon />}
            color="ghost"
            onClick={() => {}}
            variant="solid"
          />
        ),
      },
    ],
  },
];

export const TableWithRows: TableStory = {
  args: {
    headers: ['Dish', 'Price', 'Quantity', 'Subtotal', ''],
    children: rows.map((row, i) => <TableRow key={i} data={row.data} />),
  },
};

export const EmptyTable: TableStory = {
  args: {
    headers: ['Dish', 'Quantity', 'Subtotal', ''],
    children: <div />,
  },
};
