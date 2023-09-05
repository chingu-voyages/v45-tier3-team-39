import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'DataInput/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const TextareaWithLabel: Story = {
  args: {
    label: 'Description',
    size: 'md',
    width: 'w-min',
    placeholder: 'Description',
    onChange: () => {},
  },
};

export const TextareaWithLabelPrimary: Story = {
  args: {
    label: 'Description',
    size: 'md',
    width: 'w-min',
    color: 'primary',
    placeholder: 'Description',
    onChange: () => {},
  },
};

export const TextareaWithLabelSecondary: Story = {
  args: {
    label: 'Description',
    size: 'md',
    width: 'w-min',
    color: 'secondary',
    placeholder: 'Description',
    onChange: () => {},
  },
};

export const TextareaWithLabelAccent: Story = {
  args: {
    label: 'Description',
    size: 'md',
    width: 'w-min',
    color: 'accent',
    placeholder: 'Description',
    onChange: () => {},
  },
};

export const TextareaWidthFull: Story = {
  args: {
    label: 'Description',
    size: 'md',
    width: 'w-full',
    placeholder: 'Description',
    onChange: () => {},
  },
};
