import type { Meta, StoryObj } from '@storybook/react';
import { Tablerow } from './Tablerow';

const meta: Meta<typeof Tablerow> = {
  title: 'DataDisplay/Tablerow',
  component: Tablerow,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tablerow>;

export const TablerowOrder: Story = {
  args: {
    name: 'Pepperoni',
    img_url:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    price: 12,
    quantity: 2,
    sub_total: 24,
  },
};
