export type FormData = {
  RestaurantName: string;
  logoImage: File | null;
  numberOfTables: number;
};

export type RestaurantDetailsProps = {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
