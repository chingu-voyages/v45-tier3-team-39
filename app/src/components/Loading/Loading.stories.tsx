import { StoryObj } from '@storybook/react';
import { Loading } from './Loading';

type Story = StoryObj<typeof Loading>;

export default {
  title: 'Loading/Spinner',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const InfoSolid: Story = {
  args: {},
};
