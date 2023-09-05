import { SelectColor } from './SelectTypes';

type SelectClasses = {
  color: {
    [key in SelectColor]: `select-${key}`;
  };
};

const classes: SelectClasses = {
  color: {
    primary: 'select-primary',
    secondary: 'select-secondary',
    accent: 'select-accent',
    success: 'select-success',
    danger: 'select-danger',
    warning: 'select-warning',
    info: 'select-info',
    light: 'select-light',
    dark: 'select-dark',
    link: 'select-link',
  },
};

export default classes;
