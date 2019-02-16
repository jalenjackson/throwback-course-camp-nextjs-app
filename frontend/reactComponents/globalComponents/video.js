import React from 'react';
import ReactPlayer from 'react-player';

export default class Video extends React.Component {
  ref = player => {
    this.player = player
  };

  setTime = () => {
    this.props.container.updateState('videoDuration', Video.toHHMMSS(this.player.getDuration()))
  };

  onProgress = async state => {
    if(state.playedSeconds === 1) {
      this.props.container.updateState('playedSeconds', this.props.container.state.videoDuration);
    } else {
      this.props.container.updateState('playedSeconds', Video.toHHMMSS(state.playedSeconds))
    }
    if (!this.props.container.state.seeking) {
      this.props.container.updateState('played', state.played);
      $('.video-seek-inner-track').css({ width: (this.props.container.state.played * 100) + '%' });
    }
  };

  onSeekChange = async e => {
    await this.props.container.updateState('played', parseFloat(e.target.value));
    $('.video-seek-inner-track').css({ width: (this.props.container.state.played * 100) + '%' });
  };

  onSeekMouseDown = () => {
    this.props.container.updateState('seeking', true);
  };

  onSeekMouseUp = async e => {
    e.target.value === String(100) ? await this.player.seekTo(1) : await this.player.seekTo(this.props.container.state.played);
    this.props.container.updateState('seeking', false);
  };

  render() {
    return (
      <div className='minimal-video'>
        { this.props.withTransition ? <div className="video-transition" /> : null }
        <ReactPlayer
            ref={ this.ref }
            playing={ this.props.container.state.videoPlaying }
            onReady={ this.setTime }
            url={ this.props.container.state.currentVideoLocation }
            onProgress={ this.onProgress }
            muted={ this.props.muted }
            width='100%'
            height='100%' />
        <div className='video-controls'>
          <div onClick={ () => this.props.container.updateState('videoPlaying', !this.props.container.state.videoPlaying) } className='video-play-button'>
            { !this.props.container.state.videoPlaying ? <img src='/static/icons/video-play-no-circle.svg' /> : <img className="video-pause" src='/static/icons/video-pause.svg' /> }
          </div>
          <div className='video-begin-time'>
            <span>{ this.props.container.state.playedSeconds }</span>
          </div>
          <div className="video-seek">
            <div className="video-seek-track">
              <div className='video-seek-inner-track' />
              <input onMouseDown={ this.onSeekMouseDown } onChange={ this.onSeekChange } onMouseUp={ this.onSeekMouseUp } className='video-seek-track video-seek-track-range' type='range' min={0} max={1} step='any' />
            </div>
          </div>
          <div className='video-end-time'>
            <span>{ this.player ? this.props.container.state.videoDuration : '00:00' }</span>
          </div>
        </div>
      </div>
    )
  }

  static toHHMMSS(value) {
    let sec_num = parseInt(value, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if(value < 3600) return minutes + ':' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  }
}
