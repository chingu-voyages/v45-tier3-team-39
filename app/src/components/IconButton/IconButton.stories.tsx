import React from 'react';
import { IconButton } from './IconButton';
import { InfoIcon } from 'src/components/Icons/InfoIcon';
import { HomeIcon } from 'src/components/Icons/HomeIcon';
import { IconButtonProps } from './types';

export default {
  title: 'IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const InfoSolid: { args: IconButtonProps } = {
  args: {
    color: 'primary',
    Icon: <InfoIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const InfoSquare: { args: IconButtonProps } = {
  args: {
    color: 'secondary',
    shape: 'square',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const HomeOutline: { args: IconButtonProps } = {
  args: {
    color: 'primary',
    variant: 'outline',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};

export const HomeSolidSecondary: { args: IconButtonProps } = {
  args: {
    color: 'secondary',
    Icon: <HomeIcon />,
    onClick: () => alert('IconButton Clicked'),
  },
};
