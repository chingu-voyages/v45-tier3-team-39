import { TextareaColor, TextareaSize } from './TextareaTypes';

type textInputClasses = {
  color: {
    [key in TextareaColor]: `textarea-${key}`;
  };
  size: {
    [key in TextareaSize]: `textarea-${key}`;
  };
};

const classes: textInputClasses = {
  color: {
    primary: 'textarea-primary',
    secondary: 'textarea-secondary',
    accent: 'textarea-accent',
    success: 'textarea-success',
    danger: 'textarea-danger',
    warning: 'textarea-warning',
    info: 'textarea-info',
    light: 'textarea-light',
    dark: 'textarea-dark',
    link: 'textarea-link',
  },
  size: {
    xs: 'textarea-xs',
    sm: 'textarea-sm',
    md: 'textarea-md',
    lg: 'textarea-lg',
  },
};

export default classes;
