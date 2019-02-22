import React from 'react';

export default class SetStateForVideo extends React.Component {
  componentDidMount() {
    this.props.container.updateState('currentVideoLocation', this.props.currentVideo.videoLocation);
    this.props.container.updateState('courseColor', this.props.courseColor);
  }

  render() {
    return (
      <React.Fragment />
    )
  }
}
