import type { Meta, StoryObj } from '@storybook/react';
import Login from './Login';

//meta
const meta: Meta<typeof Login> = {
  title: 'Admin/LoginHome',
  component: Login,
};
export default meta;

//story
type Story = StoryObj<typeof Login>;

export const LoginHome: Story = {
  args: {},
};
