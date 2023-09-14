type StatsProps = {
  background: Background;
  align: Alignment;
  stats: Stat[];
};

type Stat = {
  justify?: Justify;
  figure?: React.ReactNode;
  title: string;
  value: string | number;
  description?: string;
  titleColor?: TitleColor;
  titleSize?: TitleSize;
  valueColor?: ValueColor;
  valueSize?: ValueSize;
  descriptionColor?: DescriptionColor;
  descriptionSize?: DescriptionSize;
  actions?: React.ReactNode;
};

type Background = 'primary' | 'secondary' | 'none';
type Alignment = 'vertical' | 'horizontal' | 'responsive';
type Justify = 'center' | 'right';
type TitleColor = 'primary' | 'secondary' | 'none';
type ValueColor = 'primary' | 'secondary' | 'none';
type DescriptionColor = 'primary' | 'secondary' | 'none';
type TitleSize = 'sm' | 'md' | 'lg';
type ValueSize = 'sm' | 'md' | 'lg';
type DescriptionSize = 'sm' | 'md' | 'lg';

export { StatsProps, Background, Alignment, Justify };
