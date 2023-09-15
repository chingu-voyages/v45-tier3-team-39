import React from 'react';
import * as types from './SelectTypes';
import classes from './classes';

//component
export const Select = ({
  label = 'Category',
  width = 'w-full',
  color = 'accent',
  options,
  name,
  value,
  onChange,
}: types.SelectProps) => {
  let optionElements = null;
  if (options && options.length > 0) {
    optionElements = options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  }

  return (
    <div>
      <label className="label">
        <span className="text-base label-text">{label}</span>
      </label>
      <select
        className={`select select-bordered w-full focus:outline-none ${width} ${classes.color[color]}`}
        onChange={onChange}
        name={name}
        value={value}
      >
        {optionElements}
      </select>
    </div>
  );
};
