import { FileInputColor } from './FileInputTypes';

type FileInputClasses = {
  color: {
    [key in FileInputColor]: `file-input-${key}`;
  };
};

const classes: FileInputClasses = {
  color: {
    primary: 'file-input-primary',
    secondary: 'file-input-secondary',
    accent: 'file-input-accent',
    success: 'file-input-success',
    danger: 'file-input-danger',
    warning: 'file-input-warning',
    info: 'file-input-info',
    light: 'file-input-light',
    dark: 'file-input-dark',
    link: 'file-input-link',
  },
};

export default classes;
