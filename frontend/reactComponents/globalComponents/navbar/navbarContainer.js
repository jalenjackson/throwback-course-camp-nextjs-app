import { Container } from 'unstated';
import { Methods } from './containerMethods';

class NavbarContainer extends Container {
  state = {
    activeLink: '',
    autoCompleteDataSource: [],
    loginFormVisibility: false,
    registerFormVisibility: false,
    profileDrawerVisibility: false,
    name: '',
    email: '',
    password: '',
    loginErrorMessage: '',
    registerErrorMessage: '',
    loginSubmissionInProgress: false,
    registerSubmissionInProgress: false,
    authorizationToken: '',
    authenticated: 'undefined',
  };

  setInitialAuthentication = (authenticated, auth) => Methods.setInitialAuthentication.call(this, authenticated, auth);
  getAutoCompleteDataResults = async term => Methods.getAutoCompleteDataResults.call(this, term);
  setContainerState = (stateName, value) => Methods.setContainerState.call(this, stateName, value);
  handleLoginSubmission = async form => Methods.handleLoginSubmission.call(this, form);
  handleRegistrationSubmission = async form => Methods.handleRegistrationSubmission.call(this, form);
  signUserOut = async () => Methods.signUserOut.call(this);
}

export default NavbarContainer;
