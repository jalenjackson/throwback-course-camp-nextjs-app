import TweenMax, {Power3} from "gsap/TweenMax";

export const animateElementsOnLoad = () => {
  TweenMax.to('.course-information', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0 });
  
  TweenMax.to('.continue-learning-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.1 });
  
  TweenMax.to('.edit-course-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.1 });
  
  TweenMax.to('.buy-course-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.2 });
  
  TweenMax.to('.language-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.3 });
  
  TweenMax.to('.review-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.4 });
  
  TweenMax.to('.instructor-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.5 });
  
  TweenMax.to('.learning-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.6 });
  
  TweenMax.to('.sections-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.7 });
  
  TweenMax.to('.completion-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.8 });
  
  TweenMax.to('.right-details-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.9 });
  
};