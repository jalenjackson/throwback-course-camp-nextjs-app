import React from 'react';
import { Drawer } from 'antd';

const AddNewVideoDrawer = () => (
  <div>
    <Drawer
        title="Basic Drawer"
        placement='left'
        closable={false}
        visible={false}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
);

export default AddNewVideoDrawer;
