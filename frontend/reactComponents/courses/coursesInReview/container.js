import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseContainer extends Container {
  state = {
    'currentCoursesUnpublished': false,
    'currentCoursesReviewing': false,
    'currentCoursesPublished': false,
    isFetching: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  setCourseStatus = (auth, course, status) => Methods.setCourseStatus.call(this, auth, course, status);
  getCoursesByStatus = (auth, status) => Methods.getCoursesByStatus.call(this, auth, status);
}

export default ViewCourseContainer;
