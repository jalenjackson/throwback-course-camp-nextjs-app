import React from 'react';
import ReactPlayer from 'react-player';
import { Menu, Slider, Modal, Button } from 'antd';
import { Methods } from './Methods/index';
import screenfull from 'screenfull';

export default class Index extends React.Component {
  ref = player => {
    this.player = player
  };
  
  render() {
    return (
      <div className='minimal-video'>
        { this.props.withTransition ? <div className="video-transition" /> : null }
        <div style={{ width: '100%', height: '95%', position: 'relative', overflow: 'hidden' }}>
          {$(window).width() > 992 ?
            <ReactPlayer
              ref={this.ref}
              playing={this.props.container.state.videoPlaying}
              onReady={() => Methods.setTime.call(this.props, this.player)}
              url={this.props.container.state.currentVideoLocation}
              onProgress={state => Methods.onProgress.call(this.props, state)}
              muted={this.props.muted}
              width='100%'
              volume={this.props.container.state.volume}
              loop={false}
              playbackRate={this.props.container.state.playbackRate}
              height='100%' />
            : <video style={{ width: '100%' }} src={ this.props.container.state.currentVideoLocation } />
          }
        </div>
        { $(window).width() > 992
          ? <div className='video-controls'>
            <div onClick={ () => this.props.container.updateState('videoPlaying', !this.props.container.state.videoPlaying) } className='video-play-button'>
              { !this.props.container.state.videoPlaying
                ? <img style={{ width: 55 }} src='/static/icons/video-play.svg' />
                : <img style={{ width: 25 }} src='/static/icons/video-pause.svg' />
              }
            </div>
            <div className='video-begin-time'>
              <span style={{ transform: 'translateY(0px)' }}>{ this.props.container.state.playedSeconds }</span>
            </div>
            <div className="video-seek">
              <div className="video-seek-track">
                <div style={{ background: this.props.container.state.courseColor }} className='video-seek-inner-track' />
                <input
                  onMouseDown={ () => Methods.onSeekMouseDown.call(this.props) }
                  onChange={ e => Methods.onSeekChange.call(this.props, e) }
                  onMouseUp={ e => Methods.onSeekMouseUp.call(this.props, e, this.player) }
                  className='video-seek-track video-seek-track-range'
                  type='range' min={0} max={1} step='any' />
              </div>
            </div>
            <div className='video-end-time'>
            <span style={{ transform: 'translateY(-1.2px)' }}>
              { this.player
                ? this.props.container.state.videoDuration
                : '00:00'
              }
            </span>
            </div>
            <div className='video-speed'>
              <div
                onMouseLeave={ () => this.handleVideoDropdown('video-speed', 'hide') }
                onMouseEnter={ () => this.handleVideoDropdown('video-speed', 'show') }
                style={{ top: '-380px', width: 67 }} className="video-dropdown-selection">
                { this.videoPlaybackOptions() }
              </div>
              <div
                onMouseLeave={ () => this.handleVideoDropdown('video-speed', 'hide') }
                onMouseEnter={ () => this.handleVideoDropdown('video-speed', 'show') }
                style={{ height: '100%' }}>
                <img
                  style={{ transform: 'translateY(15.5px)' }}
                  src='/static/icons/video-playback-speed.svg' />
              </div>
            </div>
            <div className='video-sound'>
              <div
                onMouseLeave={ () => this.handleVideoDropdown('video-sound', 'hide') }
                onMouseEnter={ () => this.handleVideoDropdown('video-sound', 'show') }
                style={{ width: 70, height: 40 }} className="video-dropdown-selection">
                <Slider
                  value={ this.props.container.state.volume * 100 }
                  onChange={ value => this.props.container.updateState('volume', 0.1 * (value / 10)) }
                  defaultValue={ this.props.container.state.volume * 100 } />
              </div>
              <div
                onMouseLeave={ () => this.handleVideoDropdown('video-sound', 'hide') }
                onMouseEnter={ () => this.handleVideoDropdown('video-sound', 'show') }
                style={{ height: '100%' }}>
                { this.props.container.state.volume * 100 === 0
                  ? <img
                    style={{ transform: 'translateY(19px)' }}
                    onClick={ () => this.updateVolumeClick() } src="/static/icons/no-video-sound.svg" />
                  : null
                }
                { this.props.container.state.volume * 100 >= 1 && this.props.container.state.volume * 100 <= 90
                  ? <img
                    style={{ transform: 'translateY(19px)', width: 30 }}
                    onClick={ () => this.updateVolumeClick() } src="/static/icons/video-sound-moderate.svg" />
                  : null
                }
                { this.props.container.state.volume * 100 >= 91
                  ? <img
                    style={{ transform: 'translateY(19px)' }}
                    onClick={ () => this.updateVolumeClick() } src="/static/icons/video-sound-loudest.svg" />
                  : null
                }
              </div>
            </div>
            <div className='video-rewind'>
              <img style={{ transform: 'translateY(19.5px)', width: 25 }} onClick={ () => Methods.onSeekChange.call(this.props, false, this.props.container.state.played - 0.018, this.player) } src="/static/icons/video-rewind.svg" />
            </div>
            <div className='video-fullscreen'>
              <img style={{ transform: 'translateY(19px)', marginRight: 15, marginLeft: 5, display: 'block', width: 21 }} onClick={ () => this.requestFullScreen() } src="/static/icons/video-fullscreen.svg" />
            </div>
          </div>
          : null
        }
      </div>
    )
  }

  componentDidUpdate() {
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        if (screenfull.isFullscreen) {
          $('.video-seek').addClass('increase-seek');
        } else {
          $('.video-seek').removeClass('increase-seek');
        }
      });
    }
  }

  requestFullScreen = () => {
    const video = $('.minimal-video')[0];
    if (screenfull.enabled) {
      return screenfull.toggle(video);
    }
    screenfull.request(video);
  };

  updateVolumeClick = () => {
    if (this.props.container.state.volume === 0) {
      this.props.container.updateState('volume', 0.8)
    } else {
      this.props.container.updateState('volume', 0)
    }
  };

  handleVideoDropdown = (container, type) => {
    type === 'hide'
      ? $(`.${ container } .video-dropdown-selection`).removeClass('show-video-dropdown').addClass('hide-video-dropdown')
      : $(`.${ container } .video-dropdown-selection`).removeClass('hide-video-dropdown').addClass('show-video-dropdown');
  };

  videoPlaybackOptions = () => (
    <Menu>
      <Menu.Item key='0' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 0.3) }>-3x</Menu.Item>
      <Menu.Item key='1' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 0.4) }>-2x</Menu.Item>
      <Menu.Item key='2' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 0.5) }>-1x</Menu.Item>
      <Menu.Item key='3' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 1) }>1x</Menu.Item>
      <Menu.Item key='4' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 1.5) }>1.5x</Menu.Item>
      <Menu.Item key='5' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 2) }>2x</Menu.Item>
      <Menu.Item key='6' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 2.5) }>2.5x</Menu.Item>
      <Menu.Item key='7' onClick={ e => Methods.setPlaybackRate.call(this.props, e, 3) }>3x</Menu.Item>
    </Menu>
  );
}
