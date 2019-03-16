import $ from 'jquery';
import TweenMax, { Power3 } from 'gsap/TweenMax';

export const slickSliderOptions = {
  dots: true,
      speed: 350,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
    {
      breakpoint: 1554,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const handleScrollSkewAnimation = () => {
  let skewedBackground = $('.skewed-background');
  $(document.body).on('touchmove', () => scrollEvent(skewedBackground));
  $(window).on("scroll", () => scrollEvent(skewedBackground));
  if (-3 + $(window).scrollTop() / 50 > 0) {
    return skewedBackground.css({transform: 'skewY(0deg)'});
  }
};

const scrollEvent = skewedBackground => {
  if (-3 + $(document).scrollTop() / 50 > 0) {
    return skewedBackground.css({transform: 'skewY(0deg)'});
  }
  skewedBackground.css({transform: `skewY(${-3 + $(document).scrollTop() / 50}deg)`});
};

export const animateElementsOnLoad = () => {
  TweenMax.to('#home-page-value-props-text-container h1', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.2});
  
  TweenMax.to('#home-page-value-props-text-container p', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.25});
  
  TweenMax.to('#home-page-value-props-text-container .ant-select-lg', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.30});
  
  TweenMax.to('#home-page-value-props-svg-container img', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1.5)', ease: Power3.easeOut, delay: 0.35});
  
  TweenMax.to('#courses-container', 0.55,
    { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.40 });
};
