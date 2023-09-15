//Input Types
export type NavbarMiddleProps = {
  title: string;
  color: string;
  onClick: () => void;
};

export type NavbarMiddleColor =
  | 'primary'
  | 'primary-content'
  | 'secondary'
  | 'secondary-content'
  | 'success'
  | 'accent'
  | 'accent-content'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
