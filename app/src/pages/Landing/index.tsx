import React from 'react';
import InfoIcon from '../../../assets/icons/info.svg';

export const LandingPage = () => {
  return (
    <>
      <img src={InfoIcon} />
      <h1 className="text-2xl font-bold underline text-blue-500">
        Hello world!
      </h1>
    </>
  );
};
