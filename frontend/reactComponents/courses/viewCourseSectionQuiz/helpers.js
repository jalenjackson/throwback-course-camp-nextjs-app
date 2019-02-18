import TweenMax, { Power4 } from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';

export const GSAPAnimateText = (div, container) => {
  const T1Split = new SplitText(div, { type: 'chars' });

  const T1Animation = new TimelineMax();
  TweenMax.set(
      '#split',
      { opacity: 1 }
  );

  T1Animation.staggerFrom(
    T1Split.chars,
    0.5,
    {
      x: 15,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.8
    },
    0.04, '+=0');

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

export const animatePopQuizSVG = () => {
  let container = document.getElementById('svg-container');
  let line0 = document.getElementById("line0");
  let splashLinesTop = document.getElementById('splash-lines-top');
  let splashLinesBottom = document.getElementById('splash-lines-bottom');
  let lineAnim = document.getElementsByClassName('line-anim')[0];

  let timelineArray = [];
  TweenMax.set(lineAnim, {
    position:'absolute'
  });

  TweenMax.set([splashLinesTop, splashLinesBottom], {
    drawSVG:'40 60'
  });

  let numLines = 16;
  let animSpeed = 1.13;
  let delayMultiplier = 5;

  for(let i = 0; i < numLines; i++){

    let clone = lineAnim.cloneNode(true);
    container.appendChild(clone);

    let line = clone.getElementById('line0');
    let splashTop = clone.getElementById('splash-lines-top');
    let splashBot = clone.getElementById('splash-lines-bottom');

    TweenMax.set(clone, {
      position:'absolute',
      xPercent:0,
      yPercent:-50,
      y:150,
      x: (100/numLines) * i + '%'
    });

    let tl = new TimelineMax({paused:false, delay:(i/delayMultiplier), repeat:-1, yoyo:false});
    tl.timeScale(animSpeed);
    tl.set(line, {
      drawSVG:'-5% -5%'
    })
    .to(line, 0.8, {
      drawSVG:'200 290',
      ease:Power4.easeIn
    })

    .to(line, 0.2, {
      drawSVG:'99% 100%',
      ease:Power4.easeOut
    })

    .to(line, 0.2, {
      attr:{'stroke-width': 18},
      ease:Back.easeOut
    }, '-=0.2');

    tl.to(line, 0.8, {
      drawSVG:'200 -50',
      ease:Power4.easeIn
    })
    .to(line, 0.8, {
      attr:{'stroke-width': 3}
    }, '-=0.6')

    .to(line, 0.2, {
      drawSVG:'0% 0%',
      ease:Power4.easeOut
    }, '-=0.2')

    .to(splashBot, 0.8, {
      drawSVG:0,
      ease:Power2.easeOut,
      alpha:1
    }, '-=1.25')
    .to(splashBot, 0.2, {
      alpha:0
    }, '-=0.7')

    .to([splashTop], 0.8, {
      drawSVG:0,
      ease:Power2.easeOut,
      alpha:1
    }, '-=0.3')
    .to(splashTop, 0.2, {
      alpha:0
    }, '-=0.4')
    .set(line, {
      drawSVG:'0% 0%'
    })
  }

  TweenMax.set(container, {
    top:'50%',
    xPercent:-50,
    yPercent:-25
  });

  lineAnim.parentNode.removeChild(lineAnim);
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
