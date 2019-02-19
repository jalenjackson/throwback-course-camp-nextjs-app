import TweenMax, { Power4 } from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';

export const GSAPAnimateText = (div, container, isPictureQuiz) => {
  const T1Split = new SplitText(div, { type: 'chars' });

  const T1Animation = new TimelineMax();
  TweenMax.set(
      '#split',
      { opacity: 1 }
  );

  T1Animation.staggerFrom(
    T1Split.chars,
    0.3,
    {
      x: 25,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.8
    },
    0.03, '+=0');

  TweenMax.to('.timer', 0, { transform: 'scale(0)', ease: Power4.easeOut });
  TweenMax.to('.pop-quiz-container img', 0.3, { opacity: 0.05, transform: 'translateY(0px)', ease: Power4.easeOut, delay: 0.8 });
  TweenMax.to('.pop', 0.3, { opacity: 0, transform: 'translateY(-10px)', ease: Power4.easeOut, delay: 2 });
  TweenMax.to('.pop-quiz-container img', 0.3, { opacity: 0, transform: 'translateY(10px)', ease: Power4.easeOut, delay: 2});
  TweenMax.to('.pop-quiz-container', 0.3, { opacity: 0, ease: Power4.easeOut, delay: 2.5 });
  TweenMax.to('.timer', 0.3, { transform: 'scale(1)', ease: Power4.easeOut, delay: 2.8 });

  setTimeout(() => {
    container.updateState('gameStarted', true)
  }, 3000);
};

export const animateQuestionText = () => {
  const T1Split = new SplitText('.quiz-question-text', { type: 'words' });

  const T1Animation = new TimelineMax();
  TweenMax.set(
      '#split',
      { opacity: 1 }
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
};
