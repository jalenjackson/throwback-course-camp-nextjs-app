import React from 'react';
import { Modal } from 'antd';
import OutputData from "./outputData";

const Output = props => (
  <div>
    <Modal
        title='Output'
        centered
        visible={ props.container.state.outputModalVisibility }
        onOk={ () => props.container.updateState('outputModalVisibility', false) }
        onCancel={ () => props.container.updateState('outputModalVisibility', false) }>
      <OutputData { ...props } />
    </Modal>
  </div>
);

export default Output;
