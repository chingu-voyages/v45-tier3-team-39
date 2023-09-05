import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { RestaurantIcon } from '../../Icons/RestaurantIcon';
import { MenuIcon } from '../../Icons/MenuIcon';

const meta: Meta = {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const RestaurantNavbar: Story = {
  args: {
    icon: <RestaurantIcon />,
    title: 'Restaurant',
    navButton: 'menu',
    onClick: () => {},
  },
};
export const MenudetaiilsNavbar: Story = {
  args: {
    icon: <MenuIcon />,
    title: 'Menu details',
    navButton: 'restaurant',
    onClick: () => {},
  },
};
