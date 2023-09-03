//Input Types
export type FileInputProps = {
  label?: string;
  width?: FileInputWidth;
  color?: FileInputColor;
  placeholder?: string;
};
export type FileInputWidth = 'w-full' | 'w-min' | 'w-max' | 'w-fit';

export type FileInputColor =
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
