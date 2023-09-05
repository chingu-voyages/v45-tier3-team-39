import React from 'react';
import { Loading } from 'src/components/Loading/Loading';

const LoadingPhrases = [
  'Cooking up some good stuff...',
  'Loading...',
  'Just a sec...',
  'Hold on tight...',
  "We're almost there...",
  'Just a little bit more...',
  "We're getting there...",
  "We're almost done...",
  'Cooking up a storm...',
];

const getRandomPhrase = () =>
  LoadingPhrases[Math.floor(Math.random() * LoadingPhrases.length)];

export const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-3xl font-bold text-center">
          {getRandomPhrase()}
        </div>
        <Loading size="lg" color="primary" />
      </div>
    </div>
  );
};
