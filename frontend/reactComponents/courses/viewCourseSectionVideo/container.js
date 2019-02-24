import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseContainer extends Container {
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
    videoEnded: false,
    videoEndModalVisible: false
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default ViewCourseContainer;
