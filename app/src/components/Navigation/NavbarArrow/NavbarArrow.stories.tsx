import type { Meta, StoryObj } from '@storybook/react';
import { NavbarArrow } from './NavbarArrow';

const meta: Meta = {
  title: 'Navigation/NavbarArrow',
  component: NavbarArrow,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const NavbarArrowMenu: Story = {
  args: {
    link: '/',
    linkName: 'MENU',
    restaurantName: 'La mia Pizza',
  },
};

export const NavbarArrowOrders: Story = {
  args: {
    link: '/',
    linkName: 'ORDERS',
    restaurantName: 'La mia Pizza',
  },
};
