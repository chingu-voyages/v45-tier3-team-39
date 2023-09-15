//Input Types
export type SelectProps = {
  label?: string;
  width?: SelectWidth;
  color?: SelectColor;
  placeholder?: string;
  options?: string[];
  name?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export type SelectWidth = 'w-full' | 'w-min' | 'w-max' | 'w-fit';

export type SelectColor =
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
