import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseContainer extends Container {
  state = {
    searchResults: []
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default ViewCourseContainer;
