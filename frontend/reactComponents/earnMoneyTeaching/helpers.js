import TweenMax, { Power3 } from 'gsap/TweenMax';
import { Router } from '../../../routes';

export const animateElements = () => {
  TweenMax.to('.value-props', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0});
  
  TweenMax.to('.value-props h1', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.2});
  
  TweenMax.to('.value-props p', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.25});
  
  TweenMax.to('.value-props button', 0.35,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0});
  
  TweenMax.to('.course-preview-container-bg-img', 0.55,
    { opacity: 0.2, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.3});
  
  TweenMax.to('.course-builder-preview', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.35});
  
  TweenMax.to('.course-builder-preview-title', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.4});
};

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