import { Button } from './Button';
import { ButtonProps } from './types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: { args: ButtonProps } = {
  args: {
    color: 'primary',
    title: 'Primary Button',
    onClick: () => alert('Primary Button Clicked'),
  },
};

export const Secondary: { args: ButtonProps } = {
  args: {
    color: 'secondary',
    title: 'Secondary Button',
    onClick: () => alert('Secondary Button Clicked'),
  },
};

export const Large: { args: ButtonProps } = {
  args: {
    size: 'lg',
    title: 'Large Button',
    onClick: () => alert('Large Button Clicked'),
  },
};

export const Small: { args: ButtonProps } = {
  args: {
    size: 'sm',
    title: 'Small Button',
    onClick: () => alert('Small Button Clicked'),
  },
};

export const Outlined: { args: ButtonProps } = {
  args: {
    variant: 'outline',
    title: 'Outlined Button',
    onClick: () => alert('Outlined Button Clicked'),
  },
};

export const Ghost: { args: ButtonProps } = {
  args: {
    variant: 'ghost',
    title: 'Ghost Button',
    onClick: () => alert('Ghost Button Clicked'),
  },
};
