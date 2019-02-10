import React from 'react';

export default class SetInitialStateFromData extends React.Component {
  componentDidMount() {
    this.props.container.setInitialStateFromData(this.props.course);
  }

  render() {
    return (
        <div />
    )
  }
}
