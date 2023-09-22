import React from 'react';
import * as t from './TextInputTypes';
import classes from './classes';
import { twMerge } from 'tailwind-merge';

//component
export const TextInput = ({
  label = 'name',
  width = 'w-full',
  color = 'accent',
  type = 'text',
  placeholder = 'Type here',
  customClasses,
  min = 0,
  max = 100,
  name,
  value,
  onChange,
}: t.TextInputProps) => {
  return (
    <div>
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        type={type}
        min={min}
        max={max}
        name={name}
        value={value}
        placeholder={placeholder}
        className={twMerge(
          `input input-bordered focus:outline-none ${width} ${classes.color[color]}`,
          customClasses
        )}
        onChange={onChange}
      />
    </div>
  );
};
