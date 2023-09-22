export type TableProps = {
  children: React.ReactNode;
  headers: string[];
};

export type TableRowProps = {
  rowClass?: string;
  data: {
    value: string | number | React.ReactNode | JSX.Element;
    size?: string;
  }[];
  onClick?: () => void;
};
