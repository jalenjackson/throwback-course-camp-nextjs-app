import React from 'react';
import { Carousel, Tabs, Card, Row, Col } from 'antd';
import Footer from "../../globalComponents/footer";

const TabPane = Tabs.TabPane;

export default class Courses extends React.Component {
  render() {
    return (
      <div className="course-categories">
        <div className="top-section">
          <div className="top-featured-carousel">
            <h1>Business</h1>
            <Carousel>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </div>
        </div>
        
        <div className='course-sections'>
          <div style={{ marginTop: 100 }}>
            <Tabs>
              <TabPane tab="Tab 1" key="1">
                <Carousel {...slickSliderOptions}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>2</h3></div>
                </Carousel>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                <Carousel {...slickSliderOptions}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                <Carousel {...slickSliderOptions}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </TabPane>
            </Tabs>
          </div>
    
          <Card style={{ marginTop: 30 }} title="Topics">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
    
          <div className='all-courses' style={{ background: '#ECECEC', padding: '30px', marginTop: 30, marginBottom: 30 }}>
            <h1>All Courses</h1>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
            </Row>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }
}

const slickSliderOptions = {
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

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};