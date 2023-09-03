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
  /* size: {
    xs: 'file-input-xs',
    sm: 'file-input-sm',
    md: 'file-input-md',
    lg: 'file-input-lg',
    wide: 'file-input-wide',
  },
  variant: {
    outline: 'file-input-outline',
    ghost: 'file-input-ghost',
    solid: 'file-input-solid',
  },*/
};

export default classes;
