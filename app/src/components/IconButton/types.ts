type IconButtonVariant = 'outline' | 'solid';

type IconButtonProps = {
  Icon: React.ReactNode;
  color?: IconButtonColor;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  variant?: IconButtonVariant;
  onClick: () => void;
};

type IconButtonShape = 'circle' | 'square';
type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type IconButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonColor,
  IconButtonSize,
  IconButtonShape,
};
