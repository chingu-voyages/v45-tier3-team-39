export type FormData = {
  dishName: string;
  logoImage: File | null;
  price: number;
  textareaValue: string;
  selectValue: string;
};

export type ItemDetailsProps = {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
