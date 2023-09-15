import type { Meta, StoryObj } from '@storybook/react';
import { AdminMenuPage } from './AdminMenuPage';

const meta: Meta = {
  title: 'Admin/AdminMenuPageSample',
  component: AdminMenuPage,
};
export default meta;

type Story = StoryObj;

export const AdminMenuPageSample: Story = {
  args: {},
};
