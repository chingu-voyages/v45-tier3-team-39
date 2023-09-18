//Input Types
export type TextInputProps = {
  label?: string;
  width?: TextInputWidth;
  color?: TextInputColor;
  type?: TextInputType;
  placeholder?: string;
  name?: string;
  value?: string | number;
  min?: number;
  max?: number;
  customClasses?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TextInputWidth = 'w-full' | 'w-min' | 'w-max' | 'w-fit';

export type TextInputColor =
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

export type TextInputType = 'text' | 'password' | 'number';
