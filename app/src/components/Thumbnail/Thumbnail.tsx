import React from 'react';
import * as types from './ThumbnailTypes';

//component
export const Thumbnail = ({ src, alt }: types.ThumbnailProps) => {
  return (
    <div className="avatar">
      <div className="rounded-xl w-14 h-14">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
