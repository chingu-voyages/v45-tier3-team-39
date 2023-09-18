import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Alert } from '.';

export default {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type Story = StoryObj<typeof Alert>;

export const AlertComponent: Story = {
  args: {
    title: 'Alert',
    description: 'Alert description!',
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
};

export const AlertInfo: Story = {
  args: {
    title: 'Alert Info!',
    description: 'Alert description!',
    color: 'info',
  },
};

export const AlertSuccess: Story = {
  args: {
    title: 'Alert Success!',
    description: 'Alert description!',
    color: 'success',
  },
};

export const AlertWarning: Story = {
  args: {
    title: 'Alert Warning!',
    description: 'Alert description!',
    color: 'warning',
  },
};

export const AlertError: Story = {
  args: {
    title: 'Alert Error!',
    description: 'Alert description!',
    color: 'error',
  },
};
