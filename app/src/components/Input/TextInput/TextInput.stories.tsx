import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta = {
  title: 'DataInput/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Username: Story = {
  args: {
    label: 'Username',
    width: 'w-full',
    color: 'accent',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => alert('login '),
  },
};
