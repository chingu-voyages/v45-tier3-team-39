import type { StoryObj } from '@storybook/react';
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Table>;

export const EmptyTable: Story = {
  args: {
    children: [],
    headers: ['Dish', 'Quantity', 'Subtotal', ''],
  },
};
