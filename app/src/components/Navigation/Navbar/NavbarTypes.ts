//Input Types
export type NavbarProps = {
  menu?: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  navButton?: string;
  onClick?: () => void;
  onClickLogout: () => void;
  action?: React.ReactNode;
};

export type NavbarColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'accent'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
