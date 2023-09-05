import React from 'react';
import { StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './types';
import { Button } from 'src/components/Button/Button';

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
  render: ({ title, description, Image, Actions }: CardProps) => (
    <div style={{ width: 500 }}>
      <Card
        title={title}
        description={description}
        Image={Image}
        Actions={Actions}
      />
    </div>
  ),
  args: {
    title: 'I am Card',
    Image: (
      <img
        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        alt="test"
      />
    ),
    description: 'Description goes here',
    Actions: (
      <div className="card-actions justify-end">
        <Button title="Action" onClick={() => {}} />
      </div>
    ),
  },
};

export const CardWithoutImage: Story = {
  render: ({ title, description, Image, Actions }: CardProps) => (
    <div style={{ width: 500 }}>
      <Card
        title={title}
        description={description}
        Image={Image}
        Actions={Actions}
      />
    </div>
  ),
  args: {
    title: 'I am Card',

    description: 'Description goes here',
    Actions: (
      <div className="card-actions justify-end">
        <Button title="Action" onClick={() => {}} />
      </div>
    ),
  },
};
