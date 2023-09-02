import React from 'react';
import * as types from './TextInputTypes';

//component
export const TextInput = ({
  label = 'name',
  width = 'w-full',
  color = 'accent',
  type = 'text',
  placeholder = 'Type here',
  onChange,
}: types.TextInputProps) => {
  return (
    <div>
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered focus:outline-none ${width} input-${color} `}
        onChange={onChange}
      />
    </div>
  );
};
