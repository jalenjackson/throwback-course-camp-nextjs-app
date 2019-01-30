import React from 'react';
import { AutoComplete, Input, Button, Icon, Carousel, Rate, Popover, Row, Col, Divider } from 'antd';
import Circle from '../globalComponents/svgs/circle';
import Square from '../globalComponents/svgs/square';
import $ from 'jquery';
import _ from 'lodash';

function onSelect(value) {
  console.log('onSelect', value);
}

export default class IndexComponent extends React.Component {
  state = {
    dataSource: [],
    didUserScroll: false,
    value: 5
  };

  handleChange(value) {
    this.setState({ value })
  }
  componentDidMount() {
    console.log(-3 + $(window).scrollTop() / 50)
    $(window).on("scroll", () => {
      if (-3 + $(document).scrollTop() / 50 > 0) {
        return $('.skewed-background').css({transform: 'skewY(0deg)'});
      }
      $('.skewed-background').css({transform: `skewY(${-3 + $(document).scrollTop() / 50}deg)`});
    });
    if (-3 + $(window).scrollTop() / 50 > 0) {
      return $('.skewed-background').css({transform: 'skewY(0deg)'});
    }
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? this.searchResult(value) : [],
    });
  };

  renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
          {item.query} 在
          <a
              href={`https://s.taobao.com/search?q=${item.query}`}
              target="_blank"
              rel="noopener noreferrer"
          >
            {item.category}
          </a>
          <span className="global-search-item-count">约 {item.count} 个结果</span>
        </Option>
    );
  }

  searchResult(query) {
    return (new Array(getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: getRandomInt(200, 100),
        }));
  }

  render() {
    const sliderOptions = {
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
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
    );
    return (
      <div id="home-page-value-props-container">
        <div id="home-page-value-props-inner">
          <div id="random-designs">
            <Circle />
            <Square />
            <Circle />
          </div>
          <div id="home-page-value-props-text-container">
            <h1>Innovate For The Future</h1>
            <p>Proven fun interactive affordable online courses</p>
            <AutoComplete
                className="value-props-search"
                size="large"
                style={{ width: '100%' }}
                dataSource={this.state.dataSource.map(this.renderOption)}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="Search For A Course..."
                optionLabelProp="text">
              <Input
                  suffix={(
                    <Button style={{ transform: 'translateX(15px)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} className="search-btn" size="large" type="primary">
                      <Icon type="search" />
                    </Button>
                  )}
              />
            </AutoComplete>
          </div>
          <div id="home-page-value-props-svg-container">
            <img src='/static/backgroundImages/homePageHeader.svg' />
          </div>
        </div>
        <div id="courses-container">
          <div className="courses-text-container">
            <h1>
              <img src='/static/icons/paperWithBulletPoints.svg' />
              <span>
                <img src='/static/backgroundImages/designs-on-edge.svg' />
                Popular Courses
              </span>
            </h1>
            <div id="courses-carousel">
              <Carousel { ...sliderOptions }>
                { _.times(8, (i) => (
                  <div className="inner-carousel">
                    <div style={{ background: testColors[i] }} className='top-info'>
                      <h2 className="top-info-header">24 hours</h2>
                    </div>
                    <div className='carousel-copy'>
                      <h1>{ _.truncate('Digital literacy', { length: 30 }) }</h1>
                      <p>{ _.truncate('Digital literacy covers basic computing principles and foundational knowledge...', { length: 60 }) }</p>
                      <p>Taught by
                        <a>{ _.truncate(' Jalen Jackson', { length: 20 }) }</a>
                      </p>
                      <p className='price'>
                        <img src="/static/icons/money.svg" />
                        $30.23
                      </p>
                      <span>
                        <Rate style={{ float: 'right', transform: 'translate(-10px, -30px)' }} disabled defaultValue={5} />
                      </span>
                    </div>
                    <Popover content={content} title="Title">
                      <Button style={{ background: testColors[i] }} className='explore-button' type="primary" icon="eye">
                        Explore
                      </Button>
                    </Popover>
                    <img className='preview-button' src='/static/icons/video-play.svg' />
                  </div>
                ))}
              </Carousel>
              <a className='see-all-link'>
                <span>See All</span>
              </a>
            </div>
          </div>
          <div className="skewed-background" />
        </div>
        <div id='popular-categories'>
          <img src="/static/backgroundImages/course-categories.svg" className="popular-categories-background" />
          <div className='popular-categories-text-container'>
            <h1>
              <img src='/static/icons/chemistryGlass.svg' />
              <span>
                Popular Categories
              </span>
            </h1>
          </div>
          <div className="popular-category-list">
            <Row className="popular-category-row" gutter={16}>
              { _.times(8, (i) => (
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">
                    <img src={ testImages[i] } />
                    <div className="category-title">
                      <h1>{ testTitles[i] }</h1>
                    </div>
                    <div className='category-explore-btn-container'>
                      <Popover content={content} title="Title">
                        <Button className='explore-button' type="primary" icon="eye">
                          Explore
                        </Button>
                      </Popover>
                    </div>
                  </div>
                </Col>
              )) }
            </Row>
            <a>See All</a>
          </div>
        </div>
        <div className='earn-money-cta'>
          <img src="/static/backgroundImages/earn-money.svg" />
          <div className='earn-money-cta-text-container'>
            <h1>Want To Earn Money Teaching?</h1>
            <p>Lorem ipsum is simply dummy text. Hello world you are awesome</p>
            <Button type="primary" icon="dollar">Get Started</Button>
          </div>
        </div>
        <div className='company-footer'>
          <img src='/static/icons/paperWithBulletPoints.svg' />
          <h1 className='footer-company-name'>Company Name</h1>
          <div className="company-footer-items">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <h1>Learn</h1>
                <a>Courses</a>
                <a>Community</a>
              </Col>
              <Col className="gutter-row" span={6}>
                <h1>Practice</h1>
                <a>Quizzes</a>
                <a>Picture Quizzes</a>
                <a>Matching Games</a>
                <a>Crunch Challenges</a>
                <a>Coding Challenges</a>
                <a>Coding Projects</a>
              </Col>
              <Col className="gutter-row" span={6}>
                <h1>Join</h1>
                <a>Register</a>
                <a>Login</a>
              </Col>
              <Col className="gutter-row" span={6}>
                <h1>Information</h1>
                <a>Terms And Conditions</a>
                <a>Privacy Policy</a>
              </Col>
            </Row>
          </div>
          <div className="bottom-footer">
            <Divider className="bottom-footer-divider">© Company Name, LLC</Divider>
          </div>
        </div>
      </div>
    )
  }
}

const testColors = ['#9B3B5A', '#FED766', '#031F4B', '#FE8A71', '#FEC8C1', '#039688', '#1E1F26', '#FF6F69'];
const testImages = [
  '/static/icons/computerWithMonitor.svg',
  '/static/icons/businessSuit.svg',
  '/static/icons/bucketWithPaint.svg',
  '/static/icons/whiteboardWithChart.svg',
  '/static/icons/calculator.svg',
  '/static/icons/books.svg',
  '/static/icons/music.svg',
  '/static/icons/earth.svg',
];
const testTitles = [
  'Software Engineering',
  'Business',
  'Design',
  'Marketing',
  'Mathematics',
  'Literature',
  'Music',
  'History',
];
