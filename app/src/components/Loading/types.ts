type LoadingProps = {
  color?: LoadingColor;
  size?: LoadingSize;
};

type LoadingSize = 'xs' | 'sm' | 'md' | 'lg';
type LoadingColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'accent'
  | 'neutral';

export type { LoadingProps, LoadingSize, LoadingColor };
