type ButtonProps = {
  title: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick: () => void;
};

type ButtonVariant = 'outline' | 'ghost' | 'solid';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'accent';

export type { ButtonProps, ButtonVariant, ButtonSize, ButtonColor };
