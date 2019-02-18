import { toHHMMSS } from '../helpers';

export const call = async (props, state) => {
  if(state.playedSeconds === 1) {
    props.container.updateState('playedSeconds', props.container.state.videoDuration);
  } else {
    props.container.updateState('playedSeconds', toHHMMSS(state.playedSeconds))
  }
  if (!props.container.state.seeking) {
    props.container.updateState('played', state.played);
    $('.video-seek-inner-track').css({ width: (props.container.state.played * 100) + '%' });
  }
};
