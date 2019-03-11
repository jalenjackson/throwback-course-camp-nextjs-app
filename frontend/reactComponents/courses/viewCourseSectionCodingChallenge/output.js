import React from 'react';
import { Modal } from 'antd';
import OutputData from "./outputData";

const Output = props => (
  <div>
    <Modal
        title='Output'
        centered
        visible={ props.container.state.outputModalVisibility }
        onOk={ () => handleOk(props) }
        onCancel={ () => props.container.updateState('outputModalVisibility', false) }>
      <OutputData { ...props } />
    </Modal>
  </div>
);

const handleOk = props => {
  if (props.container.state.isCorrect) {
    props.container.updateState('endGame', true);
    props.afterExerciseModalContainer.updateState('winModalVisible', true);
  }
  props.container.updateState('outputModalVisibility', false);
};

export default Output;
