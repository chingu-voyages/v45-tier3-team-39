//Input Types
export type TextareaProps = {
  label?: string;
  size?: TextareaSize;
  width?: TextareaWidth;
  color?: TextareaColor;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg';

export type TextareaWidth = 'w-full' | 'w-min' | 'w-max' | 'w-fit';

export type TextareaColor =
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
