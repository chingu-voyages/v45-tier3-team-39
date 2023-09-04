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
};

export default classes;
