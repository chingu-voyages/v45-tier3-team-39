import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta = {
  title: 'DataInput/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const SelectWithLabel: Story = {
  args: {
    label: 'Category',
    width: 'w-min',
    color: '',
    options: ['A', 'B', 'C'],
    name: 'Category',
    value: 'A',
    onChange: () => {},
  },
};
export const SelectWithLabelPrimary: Story = {
  args: {
    label: 'Category',
    width: 'w-min',
    color: 'primary',
    options: ['A', 'B', 'C'],
    name: 'Category',
    value: 'A',
    onChange: () => {},
  },
};
export const SelectWithLabelSecondary: Story = {
  args: {
    label: 'Category',
    width: 'w-min',
    color: 'secondary',
    options: ['A', 'B', 'C'],
    name: 'Category',
    value: 'A',
    onChange: () => {},
  },
};

export const SelectWithLabelAccent: Story = {
  args: {
    label: 'Category',
    width: 'w-min',
    color: 'accent',
    options: ['A', 'B', 'C'],
    name: 'Category',
    value: 'A',
    onChange: () => {},
  },
};

export const SelectWidthFull: Story = {
  args: {
    label: 'Category',
    width: 'w-full',
    color: 'accent',
    options: ['A', 'B', 'C'],
    name: 'Category',
    value: 'A',
    onChange: () => {},
  },
};
