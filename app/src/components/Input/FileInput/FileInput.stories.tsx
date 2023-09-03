import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';

const meta: Meta = {
  title: 'DataInput/FileInput',
  component: FileInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const FileInputWithLabel: Story = {
  args: {
    label: 'Image',
    width: 'w-min',
    color: 'right',
  },
};
export const FileInputWithLabelPrimary: Story = {
  args: {
    label: 'Image',
    width: 'w-min',
    color: 'primary',
  },
};
export const FileInputWithLabelSecondary: Story = {
  args: {
    label: 'Image',
    width: 'w-min',
    color: 'secondary',
  },
};

export const FileInputWithLabelAccent: Story = {
  args: {
    label: 'Image',
    width: 'w-min',
    color: 'accent',
  },
};

export const FileInputWidthFull: Story = {
  args: {
    label: 'Image',
    width: 'w-full',
    color: 'right',
  },
};
