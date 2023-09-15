import React from 'react';
import * as t from './TextareaTypes';
import classes from './classes';

//component
export const Textarea = ({
  label = 'Description',
  size = 'md',
  width = 'w-full',
  color = 'accent',
  placeholder = 'Description',
  name,
  value,
  onChange,
}: t.TextareaProps) => {
  return (
    <div>
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <textarea
        name={name}
        value={value}
        className={`textarea textarea-bordered focus:outline-none ${width} ${classes.size[size]} ${classes.color[color]}`}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
