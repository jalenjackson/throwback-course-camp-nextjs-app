import React from 'react';
import { Button, Icon, Popover, Tabs } from 'antd';
import { exploreButtonPopoverContent } from './exploreButtonPopoverContent';
import { previewPopoverContent } from './previewPopoverContent';
import { popOverContent } from './popOverContent';
import Localization from '../../localization';
import _ from 'lodash';

const ReviewLocalized = Localization.Steps.Review;
const TabPane = Tabs.TabPane;

export default class AddImage extends React.Component {
  render() {
    return (
      <div>
        <label className='new-course-form-main-label'>{ `${ ReviewLocalized.Label } ` }
          <Popover content={ popOverContent } title={ ReviewLocalized.PopoverTitle }>
            <Icon className='new-course-form-main-popover-icon' type='info-circle' />
          </Popover>
        </label>
         <div>
            <Tabs defaultActiveKey='1'>
              <TabPane tab={ ReviewLocalized.CustomerViewingTab } key='1'>
                <div className="courses-container">
                  <div className="courses-text-container">
                    <div className="inner-carousel">
                      <div style={{ background: this.props.container.state.color }} className='top-info'>
                        <h2 className="top-info-header">24 hours</h2>
                      </div>
                      <div className='carousel-copy'>
                        <h1>{ _.truncate(this.props.container.state.title, { length: 30 }) }</h1>
                        <p>{ _.truncate(this.props.container.state.summary, { length: 60 }) }</p>
                        <p>{ ReviewLocalized.TaughtBy }
                          <a>{ _.truncate(` ${ this.props.auth.name }`, { length: 20 }) }</a>
                        </p>
                        <p className='price'>
                          <img alt={ ReviewLocalized.MoneyIconAlt } src='/static/icons/money.svg' />
                          ${ this.props.container.state.price }
                        </p>
                      </div>
                      <Popover content={ exploreButtonPopoverContent } title={ ReviewLocalized.ExploreButton }>
                        <Button
                            style={{ background: this.props.container.state.color }}
                            className='explore-button'
                            type='primary'
                            icon='eye'>
                          { ReviewLocalized.ViewCourse }
                        </Button>
                      </Popover>
                      <Popover
                          content={ previewPopoverContent }
                          title={ ReviewLocalized.PreviewButton }>
                        <img
                            style={{ transform: 'scale(1.7)' }}
                            alt={ ReviewLocalized.PreviewButton }
                            className='preview-button'
                            src='/static/icons/video-play.svg' />
                      </Popover>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        { this.props.isFromBuildCourse
          ? null
          : <Button
                onClick={ () => this.props.container.saveCourse(this.props.auth) }
                type='primary'
                loading={ this.props.container.state.isSavingCourse }
                className='new-course-next-and-back-button'>
              { ReviewLocalized.GetStarted }
            </Button>
        }
        <div className='new-course-button-container'>
          <Button
              className='new-course-next-and-back-button'
              type='primary'
              onClick={ () => this.props.container.prevStep() }>
            <Icon type='arrow-left' />
            { Localization.Back }
          </Button>
        </div>
      </div>
    )
  }
}
