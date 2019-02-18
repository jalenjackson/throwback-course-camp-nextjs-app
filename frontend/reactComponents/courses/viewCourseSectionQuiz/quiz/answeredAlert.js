import React from 'react';
import { Alert } from 'antd';

export default class AnsweredAlert extends React.Component {
  render() {
    const state = this.props.container.state;
    return (
      <div>
        { state.showCorrectAlert
          ? <Alert
              message="Well done! That's the correct answer!"
              type="success"
              showIcon />
          : null
        }

        { state.showWrongAlert
          ? <Alert
              message="Nope! That is incorrect."
              type="error"
              showIcon />
          : null
        }
      </div>
    )
  }
}
