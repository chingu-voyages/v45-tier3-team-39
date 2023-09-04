import type { Meta, StoryObj } from '@storybook/react';
import Login from './Login';

const meta: Meta<typeof Login> = {
  title: 'Admin/loginsample',
  component: Login,
};
export default meta;
type Story = StoryObj<typeof Login>;

export const LoginHome: Story = {
  args: {},
};
