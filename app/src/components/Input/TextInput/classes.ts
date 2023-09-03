import { TextInputColor } from './TextInputTypes';

type textInputClasses = {
  color: {
    [key in TextInputColor]: `input-${key}`;
  };
};

const classes: textInputClasses = {
  color: {
    primary: 'input-primary',
    secondary: 'input-secondary',
    accent: 'input-accent',
    success: 'input-success',
    danger: 'input-danger',
    warning: 'input-warning',
    info: 'input-info',
    light: 'input-light',
    dark: 'input-dark',
    link: 'input-link',
  },
  /* size: {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    wide: 'input-wide',
  },
  variant: {
    outline: 'input-outline',
    ghost: 'input-ghost',
    solid: 'input-solid',
  },*/
};

export default classes;
