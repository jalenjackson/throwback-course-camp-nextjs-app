import { Container } from 'unstated';
import { Methods } from './containerMethods';

class IndexContainer extends Container {
  state = {
    videoPreviewModalVisibility: false,
    videoDuration: '00:00',
    videoPlaying: true,
    playedSeconds: 0,
    seeking: false,
    played: 0,
    currentVideoLocation: '',
    videoPreviewCourse: {}
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default IndexContainer;
