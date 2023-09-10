import {
  IconButtonColor,
  IconButtonShape,
  IconButtonSize,
  IconButtonVariant,
} from './types';

type IconButtonClasses = {
  color: {
    [key in IconButtonColor]: `btn-${key}`;
  };
  size: {
    [key in IconButtonSize]: `btn-${key}`;
  };
  variant: {
    [key in IconButtonVariant]: `btn-${key}`;
  };
  shape: {
    [key in IconButtonShape]: `btn-${key}`;
  };
};

const classes: IconButtonClasses = {
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
    ghost: 'btn-ghost',
  },
  size: {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  },
  variant: {
    outline: 'btn-outline',
    solid: 'btn-solid',
  },
  shape: {
    circle: 'btn-circle',
    square: 'btn-square',
  },
};

export default classes;
