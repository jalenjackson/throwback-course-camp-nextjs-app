import $ from 'jquery';

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
  $(window).on("scroll", () => {
    if (-3 + $(document).scrollTop() / 50 > 0) {
      return skewedBackground.css({transform: 'skewY(0deg)'});
    }
    skewedBackground.css({transform: `skewY(${-3 + $(document).scrollTop() / 50}deg)`});
  });
  if (-3 + $(window).scrollTop() / 50 > 0) {
    return skewedBackground.css({transform: 'skewY(0deg)'});
  }
};
