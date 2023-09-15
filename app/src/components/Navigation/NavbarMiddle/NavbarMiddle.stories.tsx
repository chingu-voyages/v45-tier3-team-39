import type { Meta, StoryObj } from '@storybook/react';
import { NavbarMiddle } from './NavbarMiddle';

const meta: Meta = {
  title: 'Navigation/NavbarMiddle',
  component: NavbarMiddle,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const CategoriesNavbarMiddle: Story = {
  args: {
    title: 'Categories',
    color: 'accent-content',
    onClick: () => {},
  },
};
export const CategoryNavbarMiddle: Story = {
  args: {
    title: 'Category',
    color: 'accent',
    onClick: () => {},
  },
};
