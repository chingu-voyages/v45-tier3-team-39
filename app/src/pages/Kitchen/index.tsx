import React from 'react';
import { Navbar } from 'src/components/Navigation/Navbar/Navbar';
import { Kitchen } from 'src/components/Icons/Kitchen';

export const KitchenOrders = (): JSX.Element => {
  return (
    <>
      <Navbar
        icon={<Kitchen />}
        title="Kitchen"
        onClick={() => console.log('clicked')}
        onClickLogout={() => console.log('logged out')}
      />
    </>
  );
};
