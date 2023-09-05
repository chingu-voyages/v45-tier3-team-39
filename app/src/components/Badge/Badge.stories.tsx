import type { StoryObj } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type Story = StoryObj<typeof Badge>;

export const BadgeComponent: Story = {
  args: {
    label: 'Badge',
    color: 'primary',
  },
};

export const BadgeSmall: Story = {
  args: {
    label: 'Badge small',
    size: 'sm',
    color: 'warning',
  },
};

export const BadgeLarge: Story = {
  args: {
    label: 'Badge large',
    size: 'lg',
    color: 'secondary',
  },
};

export const BadgeOutlined: Story = {
  args: {
    label: 'Badge outlined',
    color: 'success',
    size: 'lg',
    variant: 'outline',
  },
};

export const BadgeEmpty: Story = {
  args: {
    color: 'info',
    size: 'lg',
  },
};
