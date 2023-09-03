import React from 'react';
import * as types from './FileInputTypes';
import classes from './classes';

//component
export const FileInput = ({
  label = 'Image',
  width = 'w-full',
  color = 'accent',
  ...props
}: types.FileInputProps) => {
  return (
    <div>
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        type="file"
        className={`file-input file-input-bordered focus:outline-none ${width} ${classes.color[color]}`}
        {...props}
      />
    </div>
  );
};
