import React from 'react';
import { Modal, Button } from 'antd';
import { Link } from '../../../../routes';

export default class QuestionSuccess extends React.Component {
  render() {
    const { container } = this.props;
    return (
      <div>
        <Modal
          title={ `Your Question Submitted Successfully!` }
          centered
          visible={ container.state.successModalVisible }
          onOk={ () => container.updateState('successModalVisible', false) }
          onCancel={ () => container.updateState('successModalVisible', false) }>
          <img src='/static/backgroundImages/educationalBackground.svg' />
          <Link route={ `/community/${ container.state.submittedQuestionId }` }>
            <Button style={{ marginTop: 20 }}>View Question In Community</Button>
          </Link>
        </Modal>
      </div>
    )
  }
}