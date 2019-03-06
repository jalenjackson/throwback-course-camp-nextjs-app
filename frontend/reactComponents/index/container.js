import { Container } from 'unstated';
import { Methods } from './containerMethods';

class IndexContainer extends Container {
  state = {
    courseColor: '',
    videoPreviewModalVisibility: false,
    videoDuration: '00:00',
    videoPlaying: true,
    playedSeconds: 0,
    seeking: false,
    played: 0,
    currentVideoLocation: '',
    videoPreviewCourse: {},
    playbackRate: 1.0,
    loop: false,
    volume: 0.8,
    componentLoaded: false
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default IndexContainer;
