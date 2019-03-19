import TweenMax, { Power3 } from 'gsap/TweenMax';
import { Router } from '../../../routes';

export const navigateToCreateCourse = props => {
  props.auth.authenticated
    ? Router.pushRoute('/courses/new')
    : props.navbarContainer.setContainerState('registerFormVisibility', true)
};

export const loaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderBottom: '1px solid #e8e8e8',
  boxShadow: 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)',
  height: '46px',
};