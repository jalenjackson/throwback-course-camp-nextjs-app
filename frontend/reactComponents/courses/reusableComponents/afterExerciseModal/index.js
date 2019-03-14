import React from 'react';
import { Modal } from "antd";
import { Subscribe } from "unstated";
import AfterExerciseModalContainer from './container'

export default class AfterExerciseModal extends React.Component {
  render() {
    return (
      <Subscribe to={[AfterExerciseModalContainer]}>
        { container => (
          <div className='after-exercise'>
            <Modal
              title={ `Awesome! Great Work!` }
              centered
              visible={ container.state.winModalVisible }
              onOk={ () => container.updateState('winModalVisible', false) }
              onCancel={ () => container.updateState('winModalVisible', false) }>
              <img className='after-exercise-icon' src='/static/icons/piggybank.svg' />
              <p style={{ fontSize: 17 }}>Awesome Work! You earned <span style={{ color: '#87D068' }}>10xp</span></p>
            </Modal>
  
            <Modal
              title={ `Needs Work.` }
              centered
              visible={ container.state.loseModalVisible }
              onOk={ () => container.updateState('loseModalVisible', false) }
              onCancel={ () => container.updateState('loseModalVisible', false) }>
              <p style={{ fontSize: 17 }}>Awe man! Let's do better next time!</p>
            </Modal>
          </div>
        ) }
      </Subscribe>
    )
  }
}