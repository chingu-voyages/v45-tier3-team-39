import type { Meta, StoryObj } from '@storybook/react';
import OrderPage from './OrderPage';

const meta: Meta = {
  title: 'Customer/OrderPageSample',
  component: OrderPage,
};
export default meta;
type Story = StoryObj;

export const OrderPageSample: Story = {
  args: {},
};
