import React from 'react';
import ReactPlayer from 'react-player';

export default class Video extends React.Component {
  render() {
    return (
      <div className='minimal-video'>
        <div className="video-transition" />
        <ReactPlayer url={ this.props.container.state.currentVideoLocation } playing={ true }  muted width='100%' height='100%' />
        <div className='video-controls'>
          <div className='video-play-button'>{'>'}</div>
          <div className='video-begin-time'>
            <span>00:00</span>
          </div>
          <div className="video-seek">
            <div className="video-seek-track">
              <div className='video-seek-inner-track' />
              <input className='video-seek-track video-seek-track-range' type='range' min={0} max={1} step='any' />
            </div>
          </div>
          <div className='video-end-time'>
            <span>00:00</span>
          </div>
        </div>
      </div>
    )
  }
}
