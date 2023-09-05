import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta = {
  title: 'DataInput/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const InputWithLabel: Story = {
  args: {
    label: 'Username',
    width: 'w-min',
    color: 'right',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};
export const InputWithLabelPrimary: Story = {
  args: {
    label: 'Username',
    width: 'w-min',
    color: 'primary',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};
export const InputWithLabelSecondary: Story = {
  args: {
    label: 'Username',
    width: 'w-min',
    color: 'secondary',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};

export const InputWithLabelAccent: Story = {
  args: {
    label: 'Username',
    width: 'w-min',
    color: 'accent',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};

export const InputWithNoLabel: Story = {
  args: {
    label: '',
    width: 'w-min',
    color: 'right',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};

export const InputNumberWithNoLabel: Story = {
  args: {
    label: '',
    width: 'w-min',
    color: 'right',
    type: 'number',
    placeholder: '£0',
    onChange: () => {},
  },
};
export const InputWidthFull: Story = {
  args: {
    label: 'Username',
    width: 'w-full',
    color: 'right',
    type: 'text',
    placeholder: 'Enter Username',
    onChange: () => {},
  },
};
