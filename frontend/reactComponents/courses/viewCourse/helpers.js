import TweenMax, {Power3} from "gsap/TweenMax";

export const animateElementsOnLoad = () => {
  TweenMax.to('.continue-learning-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0 });
  
  TweenMax.to('.edit-course-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.25 });
  
  TweenMax.to('.buy-course-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.30});
  
  TweenMax.to('.language-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.35 });
  
  TweenMax.to('.instructor-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.40 });
  
  TweenMax.to('.learning-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.45 });
  
  TweenMax.to('.sections-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.50 });
  
  TweenMax.to('.completion-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.55 });
  
  TweenMax.to('.right-details-wrapper', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.60 });
  
};