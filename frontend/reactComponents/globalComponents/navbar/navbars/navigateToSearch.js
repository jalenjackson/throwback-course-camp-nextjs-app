import { Router } from '../../../../../routes';
import _ from 'lodash';

export const navigateToSearch = async (e, props, isClicked) => {
  if (isClicked || e.key === 'Enter') {
    await props.navbarContainer.setContainerState('isNavigating', true);
    await Router.pushRoute(`/courses/search/${ _.kebabCase(props.navbarContainer.state.autocompleteTerm) }?page=1`);
    props.navbarContainer.setContainerState('isNavigating', false);
  }
};