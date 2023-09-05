import React from 'react';

export type CardProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  Image?: React.ReactNode;
  Actions?: React.ReactNode;
};
