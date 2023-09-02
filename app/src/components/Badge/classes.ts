import { BadgeColor, BadgeSize, BadgeVariant } from './types';

type ButtonClasses = {
  color: {
    [key in BadgeColor]: `badge-${key}`;
  };
  size: {
    [key in BadgeSize]: `badge-${key}`;
  };
  variant: {
    [key in BadgeVariant]: `badge-${key}`;
  };
};

const classes: ButtonClasses = {
  color: {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    danger: 'badge-danger',
    warning: 'badge-warning',
    info: 'badge-info',
    light: 'badge-light',
    dark: 'badge-dark',
    link: 'badge-link',
  },
  size: {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  },
  variant: {
    outline: 'badge-outline',
    solid: 'badge-solid',
  },
};

export default classes;
