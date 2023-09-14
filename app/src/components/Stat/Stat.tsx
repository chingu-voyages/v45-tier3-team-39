import React from 'react';
import { StatsProps } from './types';
import classes from './classes';

export const Stat = ({
  background = 'none',
  align = 'horizontal',
  stats,
}: StatsProps) => {
  return (
    <div
      className={`stats shadow ${classes.background[background]} ${classes.align[align]}`}
    >
      {stats.map((stat, ind) => {
        return (
          <div
            key={ind}
            className={`stat ${
              stat.justify ? classes.justify[stat.justify] : ''
            }`}
          >
            {stat.figure && stat.figure}
            <div
              className={`${
                stat.titleColor
                  ? classes.titleColor[stat.titleColor]
                  : classes.titleColor['none']
              } ${
                stat.titleSize
                  ? classes.titleSize[stat.titleSize]
                  : classes.titleSize['md']
              }`}
            >
              {stat.title}
            </div>
            <div
              className={`${
                stat.valueColor
                  ? classes.valueColor[stat.valueColor]
                  : classes.valueColor['none']
              } ${
                stat.valueSize
                  ? classes.valueSize[stat.valueSize]
                  : classes.valueSize['lg']
              }`}
            >
              {stat.value}
            </div>
            <div
              className={`${
                stat.descriptionColor
                  ? classes.descriptionColor[stat.descriptionColor]
                  : classes.descriptionColor['none']
              } ${
                stat.descriptionSize
                  ? classes.descriptionSize[stat.descriptionSize]
                  : classes.descriptionSize['sm']
              }`}
            >
              {stat.description}
            </div>
            <div className="stat-actions">{stat.actions && stat.actions}</div>
          </div>
        );
      })}
    </div>
  );
};
