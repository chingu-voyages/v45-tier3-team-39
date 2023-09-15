import React from 'react';
import * as t from './TextInputTypes';
import classes from './classes';

//component
export const TextInput = ({
  label = 'name',
  width = 'w-full',
  color = 'accent',
  type = 'text',
  placeholder = 'Type here',
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
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input input-bordered focus:outline-none ${width} ${classes.color[color]}`}
        onChange={onChange}
      />
    </div>
  );
};
