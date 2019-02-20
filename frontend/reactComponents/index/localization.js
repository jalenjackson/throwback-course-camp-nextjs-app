import LocalizedStrings from 'react-localization';

let localization = new LocalizedStrings({
  en:{
    SeeAll: 'See All',
    Explore: 'Explore',
    GetStarted: 'Get Started',
    ValueProps: {
      Header: 'Innovate For The Future',
      Paragraph: 'Proven fun interactive affordable online courses',
      SearchPlaceholder: 'Search For A course...'
    },
    CourseCarousel: {
      Header: 'Popular Courses',
      Purchase: 'Purchase'
    },
    PopularCategories: {
      Header: 'Popular Categories'
    },
    EarnMoneyCTA: {
      Title: 'Do You Want To Earn Money Teaching?',
      Paragraph: 'Build an amazing course, sell it, and watch the money and students come flowing in. With our excellent, easy to use course builder, building a course has never been so easy, fun & smooth!'
    }
  },
});

export default localization;
