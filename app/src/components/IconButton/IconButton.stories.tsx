import React from 'react';
import { StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { InfoIcon } from 'src/components/Icons/InfoIcon';
import { HomeIcon } from 'src/components/Icons/HomeIcon';

type Story = StoryObj<typeof IconButton>;

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const InfoSolid: Story = {
  args: {
    color: 'primary',
    Icon: <InfoIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const InfoSquare: Story = {
  args: {
    color: 'secondary',
    shape: 'square',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const HomeOutline: Story = {
  args: {
    color: 'primary',
    variant: 'outline',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const HomeSolidSecondary: Story = {
  args: {
    color: 'secondary',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};
