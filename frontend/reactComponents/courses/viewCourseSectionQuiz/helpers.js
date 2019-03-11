import TweenMax, { Power4 } from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';

export const animateQuestionText = () => {
  if (document !== undefined) {
    const T1Split = new SplitText('.quiz-question-text', {type: 'words'});
  
    const T1Animation = new TimelineMax();
    TweenMax.set(
      '#split',
      {opacity: 1}
    );
  
    T1Animation.staggerFrom(
      T1Split.words,
      0.3,
      {
        y: 9,
        opacity: 0,
        ease: Power4.easeOut,
        delay: 0.3
      },
      0.02, '+=0');
  }
};
