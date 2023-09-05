import { LoadingColor, LoadingSize } from './types';

type LoadingClasses = {
  color: {
    [key in LoadingColor]: `text-${key}`;
  };
  size: {
    [key in LoadingSize]: `loading-${key}`;
  };
};

export const classes: LoadingClasses = {
  color: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
    light: 'text-light',
    dark: 'text-dark',
    link: 'text-link',
    accent: 'text-accent',
    neutral: 'text-neutral',
  },
  size: {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
  },
};
