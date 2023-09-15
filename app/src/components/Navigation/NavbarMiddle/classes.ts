import { NavbarMiddleColor } from './NavbarMiddleTypes';

type NavbarMiddleClasses = {
  color: {
    [key in NavbarMiddleColor]: `bg-${key}`;
  };
};

const classes: NavbarMiddleClasses = {
  color: {
    primary: 'bg-primary',
    'primary-content': 'bg-primary-content',
    secondary: 'bg-secondary',
    'secondary-content': 'bg-secondary-content',
    accent: 'bg-accent',
    'accent-content': 'bg-accent-content',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
    light: 'bg-light',
    dark: 'bg-dark',
    link: 'bg-link',
  },
};

export default classes;
