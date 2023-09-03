import React from 'react';
import { CardProps } from './types';

export const Card = ({ title, description, Image, Actions }: CardProps) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>{Image}</figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        {Actions}
      </div>
    </div>
  );
};
