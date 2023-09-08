export type TableProps = {
  children: React.ReactNode;
  headers: string[];
};

export type TableRowProps = {
  data: {
    value: string | number | React.ReactNode | JSX.Element;
    size?: string;
  }[];
};
