import type { Meta, StoryObj } from '@storybook/react';
import { AdminRestaurantPage } from './AdminRestaurantPage';

const meta: Meta = {
  title: 'Admin/AdminRestaurantPageSample',
  component: AdminRestaurantPage,
};
export default meta;

type Story = StoryObj;

export const AdminRestaurantPageSample: Story = {
  args: {},
};
