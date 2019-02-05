import React from 'react';
import ReactPlayer from 'react-player';

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer width='100%' height='100%' />
      </div>
    )
  }
}
