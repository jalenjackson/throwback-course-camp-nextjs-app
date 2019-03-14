import React from 'react';
import { BarLoader } from "react-spinners";

const PageLoader = () => (
  <div style={ loaderStyles }>
    <BarLoader color={'#43A5FF'} />
  </div>
);

const loaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderBottom: '1px solid #e8e8e8',
  boxShadow: 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)',
  height: '46px',
};

export default PageLoader;