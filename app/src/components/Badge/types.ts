type BadgeProps = {
  label?: string;
  variant?: 'solid' | 'outline';
  color?: BadgeColor;
  size?: BadgeSize;
};

type BadgeVariant = 'solid' | 'outline';

type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export { BadgeProps, BadgeColor, BadgeSize, BadgeVariant };
