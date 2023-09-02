type ButtonProps = {
  title: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick: () => void;
};

type ButtonVariant = 'outline' | 'ghost' | 'solid';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'wide';
type ButtonColor =
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

export type { ButtonProps, ButtonVariant, ButtonSize, ButtonColor };
