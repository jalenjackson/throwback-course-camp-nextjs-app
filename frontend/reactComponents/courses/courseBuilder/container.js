import { Container } from 'unstated';
import { Methods } from './containerMethods';

class NavbarContainer extends Container {
  state = {
    sectionTitleTerm: '',
    sectionDescriptionTerm: '',
    videoTitleTerm: '',
    videoDescriptionTerm: '',
    sectionCategoryTerm: '',
    course: {},
    sectionLoading: false,
    currentActiveSection: 0,
  };

  setInitialStateFromData = course => Methods.setInitialStateFromData.call(this, course);
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  addNewSection = (navbarContainer, token) => Methods.addNewSection.call(this, navbarContainer, token);
  deleteSection = (i, navbarContainer) => Methods.deleteSection.call(this, i, navbarContainer);
  changeCurrentActiveSection = i => Methods.changeCurrentActiveSection.call(this, i);
  updateSectionDetails = (type, state, value, navbarContainer) => Methods.updateSectionDetails.call(this, type, state, value, navbarContainer);
  handleSectionVideoUpload = (videoLocation, currentActiveSection) => Methods.handleSectionVideoUpload.call(this, videoLocation, currentActiveSection);
  deleteSectionImageInFroalaEditor = $img => Methods.deleteSectionImageInFroalaEditor.call(this, $img);
  deleteAddedVideo = (i, navbarContainer, videoLocation) => Methods.deleteAddedVideo.call(this, i, navbarContainer, videoLocation);
  updateVideoDetails = (type, i, term, navbarContainer) => Methods.updateVideoDetails.call(this, type, i, term, navbarContainer);
}

export default NavbarContainer;
