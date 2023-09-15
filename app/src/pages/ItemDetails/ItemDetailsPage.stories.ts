import type { Meta, StoryObj } from '@storybook/react';
import { ItemDetailsPage } from './ItemDetailsPage';

const meta: Meta = {
  title: 'Admin/ItemDetailsPageSample',
  component: ItemDetailsPage,
};
export default meta;

type Story = StoryObj;

export const ItemDetailsPageSample: Story = {
  args: {},
};
