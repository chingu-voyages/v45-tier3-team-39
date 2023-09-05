//Input Types
export type NavbarProps = {
  icon: React.ReactNode;
  title: string;
  navButton?: string;
  onClick: () => void;
  onClickLogout: () => void;
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
