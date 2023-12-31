import { ButtonColor, ButtonSize, ButtonVariant } from './types';

type ButtonClasses = {
  color: {
    [key in ButtonColor]: `btn-${key}`;
  };
  size: {
    [key in ButtonSize]: `btn-${key}`;
  };
  variant: {
    [key in ButtonVariant]: `btn-${key}`;
  };
};

const classes: ButtonClasses = {
  color: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    link: 'btn-link',
    accent: 'btn-accent',
  },
  size: {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    wide: 'btn-wide',
  },
  variant: {
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    solid: 'btn-solid',
    circle: 'btn-circle',
    square: 'btn-square',
  },
};

export default classes;
