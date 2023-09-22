export type AlertProps = {
  title?: string;
  description?: string;
  color?: AlertColor;
  customClasses?: string;
  Icon?: React.ReactNode;
};

export type AlertColor = 'success' | 'info' | 'warning' | 'error' | 'dark';
