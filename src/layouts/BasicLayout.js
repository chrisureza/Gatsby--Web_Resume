import React from 'react';
import Menu from '../components/Menu';

const BasicLayout = ({ children, menuColor }) => {
  return (
    <>
      <Menu menuColor={menuColor} />
      {children}
    </>
  );
};

export default BasicLayout;