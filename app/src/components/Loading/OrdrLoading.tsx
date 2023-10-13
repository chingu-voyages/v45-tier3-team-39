import React from 'react';
import { LoadingIcon } from '../Icons/LoadingIcon';

export default function OrdrLoading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <LoadingIcon />
      <h1 className="pt-56 text-5xl">LOADING...</h1>
    </div>
  );
}
