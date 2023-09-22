import { AlertColor } from './types';

export type AlertClasses = {
  color: {
    [key in AlertColor]: `alert-${key}`;
  };
};

export const classes: AlertClasses = {
  color: {
    success: 'alert-success',
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    dark: 'alert-dark',
  },
};
